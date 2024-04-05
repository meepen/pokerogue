import { TextStyle, addTextObject } from "../../text/text";
import { fixedInt, randItem } from '../../../utils';
import { ArenaBackgroundComponent } from '../../components/arena-background.component';
import { MenuItemSelectComponent } from '../../components/menu-item-select.component';
import { GameScene, InitSceneData } from '../../scene';
import { PartyPlannerScene } from '../party-planner/party-planner.scene';
import { Biome } from "../../../game-info/biomes/biome";
import { splashMessages } from "../../../game-info/data/splash-messages";
import { SessionSaveData, SystemSaveDataDto } from "#app/api/dto/trainer-data.dto";
import { GameInfo } from "#gameinfo/game-info";

export class MainMenuScene extends GameScene {
  constructor() {
    super(MainMenuScene.name);
  }

  private previousSession: SessionSaveData | null = null;

  override async preInitialize(gameInfo: GameInfo) {
    const accountInfo = await gameInfo.accountInfo();
    if (accountInfo.lastSessionSlot !== -1) {
      this.previousSession = await gameInfo.sessionData(accountInfo.lastSessionSlot);
    }
  }

  public init(gameData: InitSceneData): void {
    super.init(gameData);
    
    this.addComponent(ArenaBackgroundComponent, {
      useNineslice: true
    });

    this.addComponent(MenuItemSelectComponent, {
      items: [
        ...(this.previousSession ? [{
          text: 'Continue',
          onSelect: () => {
            console.log('Continue');
          },
        }] : []),
        {
          text: 'New Game',
          onSelect: () => {
            console.log('New Game');
            this.swapScene(PartyPlannerScene);
          },
        },
        {
          text: 'Load Game',
          onSelect() {
            
          },
        },
        {
          text: 'Daily Run (Beta)',
          onSelect() {
            
          },
        }
      ]
    })
  }

  private splashMessage!: Phaser.GameObjects.Text;
  private playerCountLabel!: Phaser.GameObjects.Text;

  preload() {
    super.preload();
    this.preloadImage('logo', '');
		this.preloadImage('bg', 'ui');
  }

  create() {
    super.create();

    const arena = this.getComponent(ArenaBackgroundComponent);
    arena.swapBackgrounds(Biome.TOWN);
    arena.adjustSize(this.game.canvas.width, this.game.canvas.height);

    const menu = this.getComponent(MenuItemSelectComponent);
    this.pushFocus(menu);

    const logo = this.add.image(this.game.canvas.width / 2, 8, 'logo');
    logo.scale = 6;
    logo.setOrigin(0.5, -logo.displayHeight / this.game.canvas.height);

    this.splashMessage = addTextObject(this, logo.x + logo.displayWidth * 5 / 6 / 2, logo.y + logo.displayHeight * 15 / 16, randItem(splashMessages), TextStyle.MONEY, { fontSize: '54px' });
    this.splashMessage.setOrigin(0.5);
    this.splashMessage.setAngle(-20);

    this.playerCountLabel = addTextObject(this, menu.x + menu.width, menu.y - this.scaleSize(1), 'Loading...', TextStyle.MESSAGE, { fontSize: '54px' });
    this.playerCountLabel.setOrigin(1);

    // this.dailyRunScoreboard = new DailyRunScoreboard(this, 1, 44);
		// this.dailyRunScoreboard.setup();

    // this.titleContainer.add(this.dailyRunScoreboard);

    // this.playerCountLabel = addTextObject(this, (this.game.canvas.width / 6) - 2, (this.game.canvas.height / 6) - 90, '? Players Online', TextStyle.MESSAGE, { fontSize: '54px' });
    // this.playerCountLabel.setOrigin(1, 0);
    // this.titleContainer.add(this.playerCountLabel);

    this.tweens.add({
      targets: this.splashMessage,
      duration: fixedInt(350),
      scale: this.splashMessage.scale * 1.25,
      loop: -1,
      yoyo: true,
    });

    this.updatePlayerCount()
  }

  updatePlayerCount() {
    this.gameData.getPlayerCount()
      .then((count) => {
        this.playerCountLabel.setText(`${count} Players Online`);
      })
      .catch((err) => {
        console.error(err);
        this.playerCountLabel.setText('Cannot retrieve player count');
      })
      .finally(() => {
        this.time.addEvent({
          delay: 10000,
          callback: () => this.updatePlayerCount(),
          loop: false
        });
      })
  }
}