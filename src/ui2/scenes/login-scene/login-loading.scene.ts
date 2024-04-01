import { LoginDetails } from "../../../api/api";
import { Biome } from "#gameinfo/biomes/biome";
import { ArenaBackgroundComponent } from "../../components/arena-background.component";
import { DialogueComponent } from "../../components/dialogue.component";
import { GameScene } from "../../scene";
import { MainMenuScene } from "../main-menu/main-menu.scene";
import { LoginInputComponent } from "./login-input.component";
import { LoginScene, LoginSceneMessage } from "./login.scene";
import { RegisterScene } from "./register.scene";

interface LoginDetailsWithMethod extends LoginDetails {
  method: 'register' | 'login';
}

export class LoginLoadingScene extends GameScene<LoginDetailsWithMethod> {
  constructor() {
    super(LoginLoadingScene.name);

    this.addComponent(ArenaBackgroundComponent, {});
    this.addComponent(DialogueComponent, { text: "Log in or create an account to start. No email required!" });
    this.addComponent(LoginInputComponent, {
      title: "Loading...",
    });
  }

  public create(): void {
    super.create();

    const arena = this.getComponent(ArenaBackgroundComponent);
    arena.swapBackgrounds(Biome.TOWN);

    const dialogue = this.getComponent(DialogueComponent);

    const loginDialogue = this.getComponent(LoginInputComponent);

    loginDialogue.y = dialogue.y / 2;

    if (this.swapData.method === 'register') {
      this.gameData.register(this.swapData)
        .then(() => this.login())
        .catch((err) => this.onIssue(err));
    } else {
      this.login();
    }
  }

  private onIssue(err: Error) {
    this.swapScene<GameScene<LoginSceneMessage>>(
      this.swapData.method === 'register' ? RegisterScene : LoginScene,
      {
        error: err.message,
      }
    );
  }

  private login() {
    this.gameData.login(this.swapData)
      .then(() => this.gameData.accountInfo())
      .then(() => {
        this.swapScene(MainMenuScene);
      })
      .catch((err) => {
        this.onIssue(err);
      });
  }
}