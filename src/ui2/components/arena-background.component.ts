import { Biome, getBiomeHasProps } from "#app/game-info/biomes/biome";
import FieldSpritePipeline from "../../pipelines/field-sprite";
import { getEnumValues } from "../../utils";
import { GameScene } from "../scene";
import { SceneComponent } from "../scene.component";

interface ArenaBackgroundComponentConfig {
  useNineslice?: boolean;
}

export class ArenaBackgroundComponent extends SceneComponent<ArenaBackgroundComponentConfig> {
  private getBiomeImageName(biome: Biome): string {
    return Biome[biome].toLowerCase();
  }

  protected fieldSpritePipeline: FieldSpritePipeline;
  protected arenaBg: Phaser.GameObjects.Image | Phaser.GameObjects.NineSlice;
  protected arenaBgTransition: Phaser.GameObjects.Image | Phaser.GameObjects.NineSlice;

  override preload() {
    for (const biome of getEnumValues(Biome)) {
      const biomeName = this.getBiomeImageName(biome);
			const isBaseAnimated = biomeName === 'end';
			const baseAKey = `${biomeName}_a`;
			const baseBKey = `${biomeName}_b`;
			this.preloadImage(`${biomeName}_bg`, 'arenas');

			if (!isBaseAnimated)
				this.preloadImage(baseAKey, 'arenas');
			else
				this.preloadAtlas(baseAKey, 'arenas');

			if (!isBaseAnimated)
				this.preloadImage(baseBKey, 'arenas');
			else
				this.preloadAtlas(baseBKey, 'arenas');

			if (getBiomeHasProps(biome)) {
				for (let p = 1; p <= 3; p++) {
					const isPropAnimated = p === 3 && [ 'power_plant', 'end' ].find(b => b === biomeName);
					const propKey = `${biomeName}_b_${p}`;
					if (!isPropAnimated)
						this.preloadImage(propKey, 'arenas');
					else
						this.preloadAtlas(propKey, 'arenas');
				}
      }
    }
  }

  override create() {
    this.fieldSpritePipeline = new FieldSpritePipeline(this.scene.game);
    this.addPipeline(this.fieldSpritePipeline);

    if (this.data.useNineslice) {
  		this.arenaBg = this.scene.add.nineslice(0, 0, 'plains_bg', null, 320, 180, 0, 0, 132, 0);
    } else {
      this.arenaBg = this.scene.add.image(0, 0, 'plains_bg');
    }
    this.arenaBg.scale = 6;
    this.arenaBg.setOrigin(0, 0);
    this.arenaBg.setDepth(-1);
    this.arenaBg.setPipeline(this.fieldSpritePipeline);

    if (this.data.useNineslice) {
  		this.arenaBgTransition = this.scene.add.nineslice(0, 0, 'plains_bg', null, 320, 180, 0, 0, 132, 0);
    } else {
      this.arenaBgTransition = this.scene.add.image(0, 0, 'end_bg');
    }
    this.arenaBgTransition.scale = 6;
    this.arenaBgTransition.setOrigin(0, 0);
    this.arenaBgTransition.setDepth(-1);
    this.arenaBgTransition.setAlpha(0);
    this.arenaBgTransition.setPipeline(this.fieldSpritePipeline);

    this.swapBackgrounds(Biome.PLAINS);
  }

  adjustSize(width: number, height: number) {
    if (this.data.useNineslice) {
      this.arenaBg.setSize(width, height);
      this.arenaBgTransition.setSize(width, height);
    } else {
      this.arenaBg.setDisplaySize(width, height);
      this.arenaBgTransition.setDisplaySize(width, height);
    }
  }

  swapBackgrounds(to: Biome) {
    this.fieldSpritePipeline.biomeType = to;
    this.arenaBg.setTexture(`${this.getBiomeImageName(to)}_bg`);
    this.arenaBg.pipelineData['terrainColorRatio'] = this.getBgTerrainColorRatioForBiome(to);
  }
  
  protected getBgTerrainColorRatioForBiome(biome: Biome): number {
    switch (biome) {
      case Biome.SPACE:
        return 1;
      case Biome.END:
        return 0;
    }

    return 0 / 132;
  }

  transitionBackgrounds() {
    throw new Error('Method not implemented.');
  }
}
