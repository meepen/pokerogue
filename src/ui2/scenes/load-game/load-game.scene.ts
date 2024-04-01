import FieldSpritePipeline from "#app/pipelines/field-sprite";
import { GameScene, InitSceneData } from "#ui/scene";
import { GameInfo, loadGameInfo } from "../../../game-info/game-info";
import { TextStyle, addTextObject } from "../../text/text";
import { LoginScene } from "../login-scene/login.scene";
import { MainMenuScene } from "../main-menu/main-menu.scene";

type Constructor<T> = new (...args: any[]) => T;

export class LoadGameScene extends Phaser.Scene {
  constructor() {
    super(LoadGameScene.name);
  }
  
  addPipeline<T extends Constructor<Phaser.Renderer.WebGL.WebGLPipeline>>(pipeline: T, ...params: ConstructorParameters<Constructor<T>>) {
    const newPipeline = new pipeline(...params);
		(this.renderer as Phaser.Renderer.WebGL.WebGLRenderer).pipelines.add(pipeline.name, newPipeline);
    return newPipeline;
  }

  create() {
    const background = this.add.rectangle(0, 0, this.game.canvas.width, this.game.canvas.height, 0x006860);
    background.setOrigin(0, 0);
    const text = addTextObject(this, 0, 0, "Loading Game...", TextStyle.MONEY, { fontSize: "32px" });
    text.setOrigin(0.5);
    text.x = this.game.canvas.width / 2;
    text.y = this.game.canvas.height / 2;

    let gameData: GameInfo;
    loadGameInfo().then((newGameInfo) => {
      gameData = newGameInfo;
      return gameData.isLoggedIn();
    }).then((isLoggedIn) => {
      let scene: new (...args: unknown[]) => GameScene<unknown> = isLoggedIn ? MainMenuScene : LoginScene;

      this.scene.add(
        scene.name,
        scene,
        true,
        {
          gameData,
          swapData: {},
          pipelines: new Map<string, Phaser.Renderer.WebGL.WebGLPipeline>(
            [
              [FieldSpritePipeline.name, this.addPipeline(FieldSpritePipeline, this.game)],
            ],
          ),
        } as InitSceneData<unknown>,
      );
      this.scene.remove(LoadGameScene.name);
    });
  }
}