import { Button } from "../battle-scene";
import { GameScene } from "./scene";

export abstract class SceneComponent<T = void> {
  constructor(protected scene: GameScene, protected data: T) {}

  protected preloadImage(...args: Parameters<GameScene['preloadImage']>) {
    this.scene.preloadImage(...args);
  }

  protected preloadAtlas(key: string, folder: string) {
    this.scene.preloadAtlas(key, folder);
  }

  protected addPipeline(pipeline: Phaser.Renderer.WebGL.WebGLPipeline) {
    this.scene.addPipeline(pipeline);
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

  preload?(): void;
  create?(): void;
  init?(): void;
  buttonPressed?(button: Button): void;
  buttonReleased?(button: Button): void;
}