import { Button } from "../battle-scene";
import { ControlsHandler } from "../controls/controls-handler";
import { GameInfo } from "../game-info/game-info";
import { addTextObject } from "../ui/text";
import { SceneComponent } from "./scene.component";

type ParametersExceptFirst<T> = T extends (first: any, ...rest: infer U) => any ? U : never;
type ConstructorParametersExceptFirst<T> = T extends new (first: any, ...rest: infer U) => any ? U : never;
type Constructor<T> = new (...args: any[]) => T;

export abstract class GameScene extends Phaser.Scene {
  public static globalScale = 6;

  private readonly components = new Map<object, SceneComponent<unknown>>();

  protected gameData!: GameInfo;

  protected controls!: ControlsHandler;

  private isInitializing = false;

  public init(gameData: GameInfo) {
    this.isInitializing = true;
    this.controls = new ControlsHandler(this.input);
    this.controls.on('buttondown', (button) => {
      this.onButtonDown(button);
    });
    this.controls.on('buttonup', (button) => {
      this.onButtonUp(button);
    });
    this.gameData = gameData;
    console.log(gameData);

    for (const component of this.components.values()) {
      if (component.init) {
        component.init();
      }
    }
  }

  private onButtonDown(button: Button) {
    if (this.focus?.buttonPressed) {
      this.focus.buttonPressed(button);
    }
  }

  private onButtonUp(button: Button) {
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
  }

  public create() {
    this.isInitializing = false;
    for (const component of this.components.values()) {
      if (component.create) {
        component.create();
      }
    }
  }

  protected addComponent<ComponentType extends Constructor<SceneComponent<unknown>>>(component: ComponentType, ...data: ConstructorParametersExceptFirst<ComponentType>) {
    if (this.components.has(component)) {
      return;
    }

    const componentInstance = new component(this, ...data);

    this.components.set(component, componentInstance);

    if (this.isInitializing && componentInstance.init) {
      componentInstance.init();
    }
  }

  protected getComponent<ComponentType extends Constructor<SceneComponent<unknown>>>(component: ComponentType): InstanceType<ComponentType> {
    return this.components.get(component) as InstanceType<ComponentType>;
  }

  get isActive() {
    return this.game.scene.isActive(this.constructor.name);
  }

  scaleSize(size: number) {
    return size * GameScene.globalScale;
  }

  gameWidth() {
    return this.game.canvas.width;
  }

  gameHeight() {
    return this.game.canvas.height;
  }

  gameSize() {
    return [this.gameWidth(), this.gameHeight()];
  }

  setObjectAbsoluteSize(gameObject: Phaser.GameObjects.Components.Size & Phaser.GameObjects.Components.Transform, width: number, height: number) {
    const scale = gameObject.scale;
    gameObject.width = width / scale;
    gameObject.height = height / scale;
  }

  getUnscaled(num: number) {
    return num / GameScene.globalScale;
  }

  preloadImage(key: string, folder: string, filename?: string) {
    if (!filename)
      filename = `${key}.png`;
    this.load.image(key, `images/${folder}/${filename}`);
  }

	preloadAtlas(key: string, folder: string, filenameRoot?: string) {
		if (!filenameRoot)
			filenameRoot = key;
		if (folder)
			folder += '/';
		this.load.atlas(key, `images/${folder}${filenameRoot}.png`, `images/${folder}/${filenameRoot}.json`);
	}

  addPipeline(pipeline: Phaser.Renderer.WebGL.WebGLPipeline) {
		(this.renderer as Phaser.Renderer.WebGL.WebGLRenderer).pipelines.add('FieldSprite', pipeline);
  }

  addText(...args: ParametersExceptFirst<typeof addTextObject>) {
    return addTextObject(this, ...args);
  }

  protected swapScene(scene: Constructor<GameScene>) {
    this.scene.start(scene.name, this.gameData);
  }
  
  protected focus?: SceneComponent<unknown>;
}