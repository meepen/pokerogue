import { WindowStyle } from "./constants";
import { ISceneComponent } from "./scene-component.interface";
import { IGameScene } from "./scene.interface";

export abstract class SceneComponent<T = void> extends ISceneComponent {
  constructor(protected scene: IGameScene, protected data: T) {
    super();
  }

  protected preloadImage(...args: Parameters<IGameScene['preloadImage']>) {
    this.scene.preloadImage(...args);
  }

  protected preloadAtlas(key: string, folder: string) {
    this.scene.preloadAtlas(key, folder);
  }

  protected scaleSize(size: number) {
    return this.scene.scaleSize(size);
  }

  protected gameWidth() {
    return this.scene.gameWidth();
  }

  protected gameHeight() {
    return this.scene.gameHeight();
  }

  protected gameSize() {
    return this.scene.gameSize();
  }

  protected setObjectAbsoluteSize(gameObject: Phaser.GameObjects.Components.Size & Phaser.GameObjects.Components.Transform, width: number, height: number) {
    this.scene.setObjectAbsoluteSize(gameObject, width, height);
  }

  protected getUnscaled(width: number) {
    return this.scene.getUnscaled(width);
  }

  protected createWindowNineslice(x: number, y: number, width: number, height: number, style = WindowStyle.Normal) {
    return this.scene.createWindowNineslice(x, y, width, height, style);
  }

  protected getWindowBorderSize(style = WindowStyle.Normal) {
    return this.scene.getWindowBorderSize(style);
  }
}