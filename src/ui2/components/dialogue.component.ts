import { TextStyle, addTextObject } from "../../ui/text";
import { globalScale } from "../constants";
import { SceneComponent } from "../scene.component";

interface DialogueComponentConfig {
  text: string;
}

// TODO: text should show slowly

export class DialogueComponent extends SceneComponent<DialogueComponentConfig> {
  override preload() {
    this.preloadImage('bg', 'ui');
  }

  private text!: Phaser.GameObjects.Text;
  private bg!: Phaser.GameObjects.Image;

  get x() {
    return this.bg.x;
  }

  get y() {
    return this.bg.y - this.bg.displayHeight;
  }

  override create() {
    this.bg = this.scene.add.image(0, 0, 'bg')
      .setOrigin(0, 1)
      .setScale(globalScale)
      .setPosition(0, this.scene.game.canvas.height);

    this.text = addTextObject(this.scene, 0, 0, this.data.text, TextStyle.MESSAGE)
      .setOrigin(0)
      // 18 is the offset for some reason
      .setPosition(this.scaleSize(12), this.bg.y - this.bg.displayHeight + this.scaleSize(12) - 18);
  }
}