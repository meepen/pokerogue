import { Biome } from "../../../data/enums/biome";
import { ArenaBackgroundComponent } from "../../components/arena-background.component";
import { DialogueComponent } from "../../components/dialogue.component";
import { GameScene, InitSceneData } from "../../scene";
import { LoginInputComponent } from "./login-input.component";
import { LoginLoadingScene } from "./login-loading.scene";
import { LoginScene, LoginSceneMessage, readableLoginSceneMessage } from "./login.scene";

export class RegisterScene extends GameScene<LoginSceneMessage> {
  private loginInputComponent!: LoginInputComponent;

  constructor() {
    super(RegisterScene.name);

    this.addComponent(ArenaBackgroundComponent, {});
    this.addComponent(DialogueComponent, { text: "Log in or create an account to start. No email required!" });
  }

  init(data: InitSceneData<LoginSceneMessage>): void {
    super.init(data);
    this.loginInputComponent = this.addComponent(LoginInputComponent, {
      fields: ["Username", "Password", "Confirm Password"],
      buttons: [
        {
          text: "Register",
          onClick: () => {
            this.swapScene(LoginLoadingScene, {
              username: this.loginInputComponent.getInput("Username"),
              password: this.loginInputComponent.getInput("Password"),
              method: "register",
            });
          },
        },
        {
          text: "Back to Login",
          onClick: () => {
            this.swapScene(LoginScene, {});
          },
        },
      ],
      title: "Register",
      errorMessage: readableLoginSceneMessage(this.swapData.error),
    });
  }

  public create(): void {
    super.create();

    const arena = this.getComponent(ArenaBackgroundComponent);
    arena.swapBackgrounds(Biome.TOWN);

    const dialogue = this.getComponent(DialogueComponent);

    const loginDialogue = this.getComponent(LoginInputComponent);

    loginDialogue.y = dialogue.y / 2;
  }
}