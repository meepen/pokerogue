import { Button } from "../../battle-scene";
import { TextStyle, addTextObject, getTextPadding, getTextStyle } from "../../ui/text";
import { globalScale } from "../constants";
import { SceneComponent } from "../scene.component";

export interface MenuItemSelectComponentItem {
  text: string;
  onSelect: () => void;
}

interface MenuItemSelectComponentOptions {
  items: MenuItemSelectComponentItem[];
}

export class MenuItemSelectComponent extends SceneComponent<MenuItemSelectComponentOptions> {
  private get borderSize() {
    return this.getWindowBorderSize();
  }

  private border!: Phaser.GameObjects.NineSlice;
  protected container!: Phaser.GameObjects.Container;
  private optionsText: Phaser.GameObjects.Text[] = [];
  private cursor!: Phaser.GameObjects.Image;

  private get baseCursorY() {
    return this.optionsText[0].y + this.scaleSize(3);
  }

  private get optionsHeight() {
    return this.optionsText
      .map(text => text.displayHeight)
      .reduce((acc, height) => acc + height + this.scaleSize(1), 0) - this.scaleSize(getTextPadding(TextStyle.WINDOW)) - this.scaleSize(2);
  }

  private get optionsWidth() {
    return Math.max(...this.optionsText.map(text => text.displayWidth));
  }

  get x() {
    return this.border.x - this.border.displayWidth;
  }

  get y() {
    return this.border.y - this.border.displayHeight;
  }

  get width() {
    return this.border.displayWidth;
  }

  get height() {
    return this.border.displayHeight;
  }

  create() {
    const offsetX = -this.scaleSize(1);
    const offsetY = -this.scaleSize(1);
    
    this.cursor = this.scene.add.image(0, 0, 'cursor');
    this.cursor.scale = globalScale;
    this.cursor.setOrigin(0);

    for (const item of this.data.items) {
      const text = addTextObject(this.scene, 0, 0, item.text, TextStyle.WINDOW);
      this.optionsText.push(text);
    }

    this.border = this.createWindowNineslice(
      this.gameWidth() + offsetX,
      this.gameHeight() + offsetY,
      this.optionsWidth + this.cursor.displayWidth + this.borderSize * 3,
      this.optionsHeight + this.borderSize * 4,
    );
    this.border.scale = globalScale;
    this.border.setOrigin(1);

    this.container = this.scene.add.container(0, 0, [
      this.border,
      ...this.optionsText,
      this.cursor,
    ]);
    this.container.setSize(this.gameWidth(), this.gameHeight());

    for (const [index, option] of this.optionsText.entries()) {
      option.setOrigin(0);
      option.x = this.border.x - this.border.displayWidth + this.borderSize * 1.5 + this.cursor.displayWidth + this.scaleSize(1);
      if (index === 0) {
        option.y = this.border.y - this.border.displayHeight + this.borderSize * 1.5
      } else {
        option.y = this.optionsText[index - 1].y + this.optionsText[index - 1].displayHeight + getTextPadding(TextStyle.WINDOW);
      }
    }

    this.cursor.x = this.optionsText[0].x - this.cursor.displayWidth + this.scaleSize(-1);
    this.cursorIndex = 0;
  }

  private _cursorIndex = 0;
  get cursorIndex() {
    return this._cursorIndex;
  }

  set cursorIndex(index: number) {
    this._cursorIndex = (index = Math.max(0, Math.min(this.data.items.length - 1, index)));
    const textStyle = getTextStyle(TextStyle.WINDOW);
    const lineHeight = textStyle.size + getTextPadding(TextStyle.WINDOW) - this.scaleSize(1);
    this.cursor.y = this.baseCursorY + index * lineHeight;
  }

  preload() {
    this.preloadImage('cursor', 'ui');
  }

  buttonPressed(button: Button): void {
    switch (button) {
      case Button.UP:
        this.cursorIndex--;
        break;
      case Button.DOWN:
        this.cursorIndex++;
        break;
      case Button.ACTION:
        this.data.items[this.cursorIndex].onSelect();
        break;
    }
  }
}
