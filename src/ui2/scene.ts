import { Button, ControlsHandler } from "../controls/controls-handler";
import { GameInfo } from "../game-info/game-info";
import { addTextObject } from "../ui/text";
import { EscapeMenuComponent } from "./components/escape-menu.component";
import { WindowStyle, globalScale } from "./constants";
import { ISceneComponent } from "./scene-component.interface";
import { IGameScene } from "./scene.interface";

type ConstructorParametersExceptFirst<T> = T extends new (first: any, ...rest: infer U) => any ? U : never;
type Constructor<T> = new (...args: any[]) => T;
type SwapArguments<T extends GameScene<unknown>> =
  T extends GameScene<infer U>
    ? U extends void ? [Constructor<T>] : [Constructor<T>, U]
    : [Constructor<T>];

export interface InitSceneData<T = void> {
  gameData: GameInfo;
  swapData: T;
}

export abstract class GameScene<SwapData = void> extends IGameScene {
  private components = new Map<object, ISceneComponent>();

  protected gameData!: GameInfo;
  protected swapData!: SwapData;

  protected controls!: ControlsHandler;

  private isInitializing = false;

  private escapeMenu = this.addComponent(EscapeMenuComponent);

  public init(info: InitSceneData<SwapData>) {
    this.isInitializing = true;
    this.controls = new ControlsHandler(this.input);
    this.controls.on('buttondown', (button: Button) => {
      this.onButtonDown(button);
    });
    this.controls.on('buttonup', (button: Button) => {
      this.onButtonUp(button);
    });
    this.gameData = info.gameData;
    this.swapData = info.swapData;

    for (const component of this.components.values()) {
      if (component.init) {
        component.init();
      }
    }
  }

  private onButtonDown(button: Button) {
    if (button == Button.MENU) {
      this.escapeMenu.visible = !this.escapeMenu.visible;
      if (this.escapeMenu.visible) {
        this.pushFocus(this.escapeMenu);
      } else {
        this.popFocus();
      }

      return;
    }
    if (this.focus?.buttonPressed) {
      this.focus.buttonPressed(button);
    }
  }

  private onButtonUp(button: Button) {
    if (button == Button.MENU) {
      return;
    }

    if (this.focus?.buttonReleased) {
      this.focus.buttonReleased(button);
    }
  }

  public preload() {
    for (const component of this.components.values()) {
      if (component.preload) {
        component.preload();
      }
    }

    this.preloadImage(this.getWindowTexture(WindowStyle.Normal), 'ui/windows');
    this.preloadImage(this.getWindowTexture(WindowStyle.Thin), 'ui/windows');
    this.preloadImage(this.getWindowTexture(WindowStyle.XThin), 'ui/windows');
  }

  public create() {
    this.isInitializing = false;
    for (const component of this.components.values()) {
      if (component.create) {
        component.create();
      }
    }
  }

  protected addComponent<ComponentType extends ISceneComponent>(component: Constructor<ComponentType>, ...data: ConstructorParametersExceptFirst<Constructor<ComponentType>>) {
    if (this.components.has(component)) {
      return this.components.get(component) as ComponentType;
    }

    const componentInstance = new component(this, ...data);

    this.components.set(component, componentInstance);

    if (this.isInitializing && componentInstance.init) {
      componentInstance.init();
    }

    return componentInstance as ComponentType;
  }

  protected getComponent<ComponentType extends Constructor<ISceneComponent>>(component: ComponentType): InstanceType<ComponentType> {
    return this.components.get(component) as InstanceType<ComponentType>;
  }

  protected swapScene<T extends GameScene<unknown>>(...args: SwapArguments<T>) {
    const scene = args[0];
    const swapData = args[1];
    console.log('swapScene', scene.name);

    const sceneData = {
      gameData: this.gameData,
      swapData: swapData,
    };

    this.scene.add(scene.name, scene, false);
    this.scene.launch(scene.name, sceneData);
    this.scene.sendToBack(scene.name);

    const newScene = this.scene.get(scene.name);
    if (!newScene) {
      throw new Error(`Scene ${scene.name} not found`);
    }

    newScene.events.on('create', () => {
      this.scene.stop();
      this.scene.remove(this.constructor.name);
    });
  }

  get focus() {
    return this.focusArray[this.focusArray.length - 1];
  }
}