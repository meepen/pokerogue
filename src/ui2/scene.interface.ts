import { WindowStyle, globalScale } from "./constants";
import { ISceneComponent } from "./scene-component.interface";
import { addTextObject } from "#ui/text/text";

type ParametersExceptFirst<T> = T extends (first: any, ...rest: infer U) => any ? U : never;

type Constructor<T> = new (...args: any[]) => T;
export type GameScenePipelines = Map<string, Phaser.Renderer.WebGL.WebGLPipeline>;

export abstract class IGameScene extends Phaser.Scene {
  protected focusArray: ISceneComponent[] = [];
  protected pipelines!: GameScenePipelines;

  /**
   * Called before scene is shown
   */
  async preInitialize() {}
  
  getPipeline<T extends Constructor<Phaser.Renderer.WebGL.WebGLPipeline>>(pipeline: T): InstanceType<T> {
    const instance = this.pipelines.get(pipeline.name);
    if (!instance) {
      throw new Error(`Pipeline ${pipeline.name} not found`);
    }

    return instance as InstanceType<T>;
  }

  pushFocus(component: ISceneComponent) {
    this.focusArray.push(component);
  }

  popFocus() {
    this.focusArray.pop();
  }

  preloadImage(key: string, folder: string, filename?: string) {
    if (!filename)
      filename = `${key}.png`;
    this.load.image(key, `images/${folder}/${filename}`);
  }

  addText(...args: ParametersExceptFirst<typeof addTextObject>) {
    return addTextObject(this, ...args);
  }

	preloadAtlas(key: string, folder: string, filenameRoot?: string) {
		if (!filenameRoot)
			filenameRoot = key;
		if (folder)
			folder += '/';
		this.load.atlas(key, `images/${folder}${filenameRoot}.png`, `images/${folder}/${filenameRoot}.json`);
	}

  getWindowBorderSize(style = WindowStyle.Normal) {
    switch (style) {
      case WindowStyle.Normal:
        return this.scaleSize(6);
      case WindowStyle.Thin:
        return this.scaleSize(4);
      case WindowStyle.XThin:
        return this.scaleSize(3);
    }
  }

  scaleSize(size: number) {
    return size * globalScale;
  }

  get isActive() {
    return this.game.scene.isActive(this.constructor.name);
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
    return num / globalScale;
  }

  createWindowNineslice(x: number, y: number, width: number, height: number, style = WindowStyle.Normal) {
    return this.add
      .nineslice(
        x,
        y,
        this.getWindowTexture(style),
        undefined,
        this.getUnscaled(width),
        this.getUnscaled(height),
        6,
        6,
        6,
        6,
      )
      .setScale(globalScale)
  }

  // TODO: Use settings to change window type
  getWindowTexture(style = WindowStyle.Normal) {
    const textureName = 'window_1';

    switch (style) {
      case WindowStyle.Normal:
        return textureName;
      case WindowStyle.Thin:
        return `${textureName}_thin`;
      case WindowStyle.XThin:
        return `${textureName}_xthin`;
    }
  }
}