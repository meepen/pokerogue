import { loadGameInfo } from "../../../game-info/game-info";
import { MainMenuScene } from "../main-menu/main-menu.scene";

export class LoadGameScene extends Phaser.Scene {
  constructor() {
    super(LoadGameScene.name);
  }

  create() {
    loadGameInfo().then((gameInfo) => {
      this.scene.start(MainMenuScene.name, gameInfo);
    }).catch((error) => {
    });
  }
}