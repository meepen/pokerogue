import { GameScene } from "../../scene";

export class PartyPlannerScene extends GameScene {
  constructor() {
    super(PartyPlannerScene.name);
  }

  public preload(): void {
    this.preloadImage('starter_select_bg', 'ui');
  }

  public create(): void {
    this.add.rectangle(0, 0, this.game.canvas.width, this.game.canvas.height, 0x006860).setOrigin(0, 0);

    const image = this.add.image(0, 0, 'starter_select_bg');
    image.setOrigin(0, 0);
    image.scale = GameScene.globalScale;
  }
}