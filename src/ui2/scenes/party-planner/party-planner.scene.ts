import { StarterLayoutComponent } from "#ui/scenes/party-planner/starter-layout.component";
import { globalScale } from "../../constants";
import { GameScene } from "../../scene";

export class PartyPlannerScene extends GameScene {
  private starters = this.addComponent(StarterLayoutComponent);

  constructor() {
    super(PartyPlannerScene.name);
  }

  /** use pokeapi to find starter-allowed pokemon */
  async preInitialize() {
    
  }

  public preload(): void {
    super.preload();

    this.preloadImage('starter_select_bg', 'ui');
  }

  public create(): void {
    super.create();

    this.add.rectangle(0, 0, this.game.canvas.width, this.game.canvas.height, 0x006860).setOrigin(0, 0);
    

    this.add.rectangle(0, 0, this.gameWidth(), this.gameHeight(), 0x006860).setOrigin(0, 0);

    const image = this.add.image(0, 0, 'starter_select_bg');
    image.setOrigin(0, 0);
    image.scale = globalScale;
  }
}