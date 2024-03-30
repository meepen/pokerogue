import { GameInfo, loadGameInfo } from "../../../game-info/game-info";
import { TextStyle, addTextObject } from "../../../ui/text";
import { LoginScene } from "../login-scene/login.scene";
import { MainMenuScene } from "../main-menu/main-menu.scene";

export class LoadGameScene extends Phaser.Scene {
  constructor() {
    super(LoadGameScene.name);
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
      let scene = isLoggedIn ? MainMenuScene : LoginScene;

      this.scene.add(scene.name, scene, true, { gameData, swapData: {} });
      this.scene.remove(LoadGameScene.name);
    });
  }
}