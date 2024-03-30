import { Biome } from "../../../data/enums/biome";
import { ArenaBackgroundComponent } from "../../components/arena-background.component";
import { DialogueComponent } from "../../components/dialogue.component";
import { GameScene, InitSceneData } from "../../scene";
import { LoginInputComponent } from "./login-input.component";
import { LoginLoadingScene } from "./login-loading.scene";
import { RegisterScene } from "./register.scene";

export type LoginSceneMessage = { error?: string };

export function readableLoginSceneMessage(message: string): string {
  switch (message) {
    case 'invalid username':
      return 'The provided username is invalid';
    case 'invalid password':
      return 'The provided password is invalid';
    case 'account doesn\'t exist':
      return 'The provided user does not exist';
    case 'password doesn\'t match':
      return 'The provided password does not match';
  }

  return message;
}

export class LoginScene extends GameScene<LoginSceneMessage> {
  private loginInputComponent!: LoginInputComponent;
  constructor() {
    super(LoginScene.name);

    this.addComponent(ArenaBackgroundComponent, {});
    this.addComponent(DialogueComponent, { text: "Log in or create an account to start. No email required!" });
  }

  init(data: InitSceneData<LoginSceneMessage>): void {
    super.init(data);

    const message = {
      fields: ["Username", "Password"],
      buttons: [
        {
          text: "Log In",
          onClick: () => {
            this.swapScene(LoginLoadingScene, {
              username: this.loginInputComponent.getInput("Username"),
              password: this.loginInputComponent.getInput("Password"),
              method: "login",
            })
          },
        },
        {
          text: "Register",
          onClick: () => {
            this.swapScene(RegisterScene, {});
          },
        },
      ],
      title: "Login",
      errorMessage: readableLoginSceneMessage(this.swapData.error),
    }

    this.loginInputComponent = this.addComponent(LoginInputComponent, message);
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