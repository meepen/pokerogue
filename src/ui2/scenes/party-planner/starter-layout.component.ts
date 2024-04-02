import { globalScale } from "../../constants";
import { SceneComponent } from "../../scene.component";

/*
  for (let g = 0; g < this.starterSelectGenIconContainers.length; g++) {
    let s = 0;
    this.genSpecies.push([]);

    for (let species of allSpecies) {
      if (!speciesStarters.hasOwnProperty(species.speciesId) || species.generation !== g + 1 || !species.isObtainable())
        continue;
      starterSpecies.push(species.speciesId);
      this.speciesLoaded.set(species.speciesId, false);
      this.genSpecies[g].push(species);
      const defaultDexAttr = this.scene.gameData.getSpeciesDefaultDexAttr(species);
      const defaultProps = this.scene.gameData.getSpeciesDexAttrProps(species, defaultDexAttr);
      const x = (s % 9) * 18;
      const y = Math.floor(s / 9) * 18;
      const icon = this.scene.add.sprite(x - 2, y + 2, species.getIconAtlasKey(defaultProps.formIndex));
      icon.setScale(0.5);
      icon.setOrigin(0, 0);
      icon.setFrame(species.getIconId(defaultProps.female, defaultProps.formIndex, defaultProps.shiny));
      icon.setTint(0);
      this.starterSelectGenIconContainers[g].add(icon);
      this.iconAnimHandler.addOrUpdate(icon, PokemonIconAnimMode.NONE);
      s++;
    }
  }
*/

export class StarterLayoutComponent extends SceneComponent {
  public preload(): void {
    super.preload();
  }

  public create(): void {
    super.create();


  }
}