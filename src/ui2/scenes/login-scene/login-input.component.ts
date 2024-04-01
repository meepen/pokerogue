import InputText from "phaser3-rex-plugins/plugins/inputtext";
import { TextStyle, addTextInputObject, addTextObject, getTextColor, getTextPadding, getTextStyle } from "#ui/text/text";
import { SceneComponent } from "../../scene.component";
import { WindowStyle } from "../../constants";

interface LoginInputButtonOption {
  text: string;
  onClick: () => void;
}

interface LoginInputComponentConfig {
  fields?: string[];
  buttons?: [LoginInputButtonOption, LoginInputButtonOption];
  title?: string;
  errorMessage?: string;
}

export class LoginInputComponent extends SceneComponent<LoginInputComponentConfig> {
  private container!: Phaser.GameObjects.Container;

  private _y!: number;

  get y() {
    return this._y;
  }

  set y(y: number) {
    const yChange = y - this._y;
    this._y = y;

    for (const child of this.container.list) {
      if (!('y' in child) || typeof child['y'] !== 'number') {
        continue;
      }
      
      child.y += yChange;
    }
  }

  private readonly padding = this.scaleSize(4);
  private readonly titlePadding = this.scaleSize(8);
  private readonly sizeOfFieldInput = this.scaleSize(16);
  private readonly fieldInputPadding = this.scaleSize(4);
  private readonly buttonsHeight = this.scaleSize(16);

  private fieldInputs = new Map<string, InputText>();

  private get titleStyle() {
    return (this.data.title && !this.data.fields && !this.data.buttons) ? TextStyle.WINDOW : TextStyle.SETTINGS_LABEL;
  }
  private readonly fieldInputStyle = WindowStyle.XThin;
  private readonly buttonStyle = WindowStyle.Thin;

  get height() {
    return this.getWindowBorderSize() * 2 +
      (this.data.title ? getTextStyle(this.titleStyle).size + this.scaleSize(1) : 0) +
      (this.data.fields?.length ?? 0) * (this.sizeOfFieldInput + this.fieldInputPadding) +
      (this.data.fields && this.data.title ? this.titlePadding : 0) +
      (this.data.errorMessage ? this.sizeOfFieldInput + this.fieldInputPadding : 0) + 
      (this.data.buttons ? this.buttonsHeight : 0);
  }

  get width() {
    return this.data.title && !this.data.fields && !this.data.buttons ? this.gameWidth() / 4 : this.gameWidth() / 2;
  }

  getInput(name: string) {
    const input = this.fieldInputs.get(name);
    if (input === undefined) {
      throw new Error(`Input ${name} not found`);
    }
    return input.text;
  }

  create(): void {
    const centerX = this.gameWidth() / 2;
    this._y = this.gameHeight() / 2;
    const windowBackground = this
      .createWindowNineslice(centerX, this._y, this.width, this.height)
      .setInteractive()
      .setOrigin(0.5);

    let children: Phaser.GameObjects.GameObject[] = [windowBackground];

    let y = windowBackground.y - windowBackground.displayHeight / 2 + this.getWindowBorderSize();
    if (this.data.title) {
      const title = addTextObject(this.scene, centerX, y, this.data.title, this.titleStyle)
        .setOrigin(0.5, 0);
      children.push(title);
      y += title.displayHeight + this.titlePadding;
    }

    for (const field of this.data.fields ?? []) {
      const fieldLabel =
        addTextObject(
          this.scene,
          centerX - windowBackground.displayWidth / 2 + this.padding + this.getWindowBorderSize(WindowStyle.Normal),
          y + this.sizeOfFieldInput / 2,
          field,
          TextStyle.TOOLTIP_CONTENT
        )
        .setOrigin(0, 0.5);

      const fieldInputWindow = this
        .createWindowNineslice(
          centerX,
          y + this.sizeOfFieldInput / 2,
          windowBackground.displayWidth / 2 - this.padding - this.getWindowBorderSize(WindowStyle.Normal),
          this.sizeOfFieldInput,
          WindowStyle.XThin,
        )
        .setOrigin(0, 0.5);
      
      const fieldInput = addTextInputObject(
        this.scene,
        fieldInputWindow.x + this.getWindowBorderSize(this.fieldInputStyle),
        fieldInputWindow.y,
        fieldInputWindow.displayWidth - this.getWindowBorderSize(this.fieldInputStyle) * 2,
        fieldInputWindow.displayHeight - this.getWindowBorderSize(this.fieldInputStyle) * 2,
        TextStyle.TOOLTIP_CONTENT,
        { maxLength: 16, type: field.indexOf('Password') > -1 ? 'password' : 'text' },
      )
      .setOrigin(0, 0.5);

      this.fieldInputs.set(field, fieldInput);

      y += this.sizeOfFieldInput + this.fieldInputPadding;
      children.push(fieldLabel, fieldInputWindow, fieldInput);
    }

    if (this.data.errorMessage) {
      const errorMessageLabel = 
        addTextObject(
          this.scene,
          centerX - windowBackground.displayWidth / 2 + this.padding + this.getWindowBorderSize(WindowStyle.Normal),
          y + this.sizeOfFieldInput / 2,
          this.data.errorMessage,
          TextStyle.TOOLTIP_CONTENT
        )
        .setOrigin(0, 0.5);
      
      errorMessageLabel.setColor(getTextColor(TextStyle.SUMMARY_PINK));
      errorMessageLabel.setShadowColor(getTextColor(TextStyle.SUMMARY_PINK, true));
      
      y += this.sizeOfFieldInput + this.fieldInputPadding;

      children.push(errorMessageLabel);
    }

    const buttonContainerWidth = windowBackground.displayWidth * 3 / 5;

    for (const [index, button] of (this.data.buttons ?? []).entries()) {
      const buttonLabel = 
        addTextObject(
          this.scene,
          index === 0 ? centerX - buttonContainerWidth / 2 + this.getWindowBorderSize(this.buttonStyle) : centerX + buttonContainerWidth / 2 - this.getWindowBorderSize(this.buttonStyle),
          y + this.buttonsHeight / 2,
          button.text,
          TextStyle.TOOLTIP_CONTENT
        )
        .setOrigin(
          index === 0 ? 0 : 1,
          0.5
        );

      const buttonWindow = this
        .createWindowNineslice(
          index === 0 ? centerX - buttonContainerWidth / 2 : centerX + buttonContainerWidth / 2,
          y + this.buttonsHeight / 2,
          buttonLabel.width + this.getWindowBorderSize(this.buttonStyle) * 2,
          this.buttonsHeight,
          WindowStyle.Thin,
        )
        .setOrigin(
          index === 0 ? 0 : 1,
          0.5,
        )
        .setInteractive({
          useHandCursor: true,
        })
      buttonWindow.on('pointerdown', button.onClick);

      buttonLabel.depth = buttonWindow.depth + 1;

      children.push(buttonWindow, buttonLabel);
    }

    this.container = this.scene.add
      .container(0, 0, children)
      .setInteractive(new Phaser.Geom.Rectangle(0, 0, this.gameWidth(), this.gameHeight()), Phaser.Geom.Rectangle.Contains);
  }
}