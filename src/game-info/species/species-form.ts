import { Abilities } from "../abilities/abilities";
import { Type } from "../types/types";
import { Species } from "./species";
import { SpeciesFormKey } from "./species-form-key";

export abstract class PokemonSpeciesForm {
  public speciesId: Species;
  public formIndex: integer;
  public generation: integer;
  public type1: Type;
  public type2: Type;
  public height: number;
  public weight: number;
  public ability1: Abilities;
  public ability2: Abilities;
  public abilityHidden: Abilities;
  public baseTotal: integer;
  public baseStats: integer[];
  public catchRate: integer;
  public baseFriendship: integer;
  public baseExp: integer;
  public genderDiffs: boolean;

  constructor(type1: Type, type2: Type, height: number, weight: number, ability1: Abilities, ability2: Abilities, abilityHidden: Abilities,
    baseTotal: integer, baseHp: integer, baseAtk: integer, baseDef: integer, baseSpatk: integer, baseSpdef: integer, baseSpd: integer,
    catchRate: integer, baseFriendship: integer, baseExp: integer, genderDiffs: boolean) {
      this.type1 = type1;
      this.type2 = type2;
      this.height = height;
      this.weight = weight;
      this.ability1 = ability1;
      this.ability2 = ability2;
      this.abilityHidden = abilityHidden;
      this.baseTotal = baseTotal;
      this.baseStats = [ baseHp, baseAtk, baseDef, baseSpatk, baseSpdef, baseSpd ];
      this.catchRate = catchRate;
      this.baseFriendship = baseFriendship;
      this.baseExp = baseExp;
      this.genderDiffs = genderDiffs;
  }

  getRootSpeciesId(): Species {
    let ret = this.speciesId;
    while (pokemonPrevolutions.hasOwnProperty(ret))
      ret = pokemonPrevolutions[ret];
    return ret;
  }

  isOfType(type: integer): boolean {
    return this.type1 === type || (this.type2 !== null && this.type2 === type);
  }

  getAbilityCount(): integer {
    return this.ability2 ? this.abilityHidden ? 3 : 2 : this.abilityHidden ? 2 : 1;
  }

  getAbility(abilityIndex: integer): Abilities {
    return !abilityIndex ? this.ability1 : abilityIndex === 1 && this.ability2 ? this.ability2 : this.abilityHidden;
  }

  getLevelMoves(): LevelMoves {
    if (pokemonSpeciesFormLevelMoves.hasOwnProperty(this.speciesId) && pokemonSpeciesFormLevelMoves[this.speciesId].hasOwnProperty(this.formIndex))
      return pokemonSpeciesFormLevelMoves[this.speciesId][this.formIndex].slice(0);
    return pokemonSpeciesLevelMoves[this.speciesId].slice(0);
  }

  getRegion(): Region {
    return Math.floor(this.speciesId / 2000) as Region;
  }

  isObtainable(): boolean {
    return (this.generation <= 9 || pokemonPrevolutions.hasOwnProperty(this.speciesId));
  }

  isCatchable(): boolean {
    return this.isObtainable() && uncatchableSpecies.indexOf(this.speciesId) === -1;
  }

  isRegional(): boolean {
    return this.getRegion() > Region.NORMAL;
  }

  isRareRegional(): boolean {
    switch (this.getRegion()) {
      case Region.HISUI:
        return true;
    }

    return false;
  }

  getBaseExp(): integer {
    let ret = this.baseExp;
    switch (this.getFormSpriteKey()) {
      case SpeciesFormKey.MEGA:
      case SpeciesFormKey.MEGA_X:
      case SpeciesFormKey.MEGA_Y:
      case SpeciesFormKey.PRIMAL:
      case SpeciesFormKey.GIGANTAMAX:
      case SpeciesFormKey.ETERNAMAX:
        ret *= 1.5;
        break;
    }
    return ret;
  }

  getSpriteAtlasPath(female: boolean, formIndex?: integer, shiny?: boolean): string {
    return this.getSpriteId(female, formIndex, shiny).replace(/\_{2}/g, '/');
  }

  getSpriteId(female: boolean, formIndex?: integer, shiny?: boolean): string {
    if (formIndex === undefined || this instanceof PokemonForm)
      formIndex = this.formIndex;

    const formSpriteKey = this.getFormSpriteKey(formIndex);
    const showGenderDiffs = this.genderDiffs && female && ![ SpeciesFormKey.MEGA, SpeciesFormKey.GIGANTAMAX ].find(k => formSpriteKey === k);
    return `${shiny ? 'shiny__' : ''}${showGenderDiffs ? 'female__' : ''}${this.speciesId}${formSpriteKey ? `-${formSpriteKey}` : ''}`;
  }

  getSpriteKey(female: boolean, formIndex?: integer, shiny?: boolean): string {
    return `pkmn__${this.getSpriteId(female, formIndex, shiny)}`;
  }

  abstract getFormSpriteKey(formIndex?: integer): string;

  getIconAtlasKey(formIndex?: integer): string {
    return `pokemon_icons_${this.generation}`;
  }

  getIconId(female: boolean, formIndex?: integer, shiny?: boolean): string {
    if (formIndex === undefined)
      formIndex = this.formIndex;

    let ret = this.speciesId.toString();

    if (shiny)
      ret += 's';
    
    switch (this.speciesId) {
      case Species.HIPPOPOTAS:
      case Species.HIPPOWDON:
      case Species.UNFEZANT:
      case Species.FRILLISH:
      case Species.JELLICENT:
        ret += female ? '-f' : '';
        break;
    }

    let formSpriteKey = this.getFormSpriteKey(formIndex);
    if (formSpriteKey) {
      switch (this.speciesId) {
        case Species.DUDUNSPARCE:
          break;
        case Species.ZACIAN:
        case Species.ZAMAZENTA:
          if (formSpriteKey.startsWith('behemoth'))
            formSpriteKey = 'crowned';
        default:
          ret += `-${formSpriteKey}`;
          break;
      }
    }

    return ret;
  }

  getCryKey(formIndex?: integer): string {
    let speciesId = this.speciesId;
    if (this.speciesId > 2000) {
      switch (this.speciesId) {
        case Species.GALAR_SLOWPOKE:
          break;
        case Species.ETERNAL_FLOETTE:
          break;
        case Species.BLOODMOON_URSALUNA:
          break;
        default:
          speciesId = speciesId % 2000;
          break;
      }
    }
    let ret = speciesId.toString();
    const forms = getPokemonSpecies(speciesId).forms;
    if (forms.length) {
      const formKey = forms[formIndex || 0].formKey;
      switch (formKey) {
        case SpeciesFormKey.MEGA:
        case SpeciesFormKey.MEGA_X:
        case SpeciesFormKey.MEGA_Y:
        case SpeciesFormKey.GIGANTAMAX:
        case SpeciesFormKey.GIGANTAMAX_SINGLE:
        case SpeciesFormKey.GIGANTAMAX_RAPID:
        case 'white':
        case 'black':
        case 'therian':
        case 'sky':
        case 'gorging':
        case 'gulping':
        case 'no-ice':
        case 'hangry':
        case 'crowned':
        case 'eternamax':
        case 'four':
        case 'droopy':
        case 'stretchy':
        case 'roaming':
        case 'complete':
        case '10':
        case 'super':
        case 'unbound':
        case 'pau':
        case 'pompom':
        case 'sensu':
        case 'dusk':
        case 'midnight':
        case 'school':
        case 'dawn-wings':
        case 'dusk-mane':
        case 'ultra':
          ret += `-${formKey}`;
          break;
      }
    }
    return ret;
  }

  validateStarterMoveset(moveset: StarterMoveset, eggMoves: integer): boolean {
    const rootSpeciesId = this.getRootSpeciesId();
    for (let moveId of moveset) {
      if (speciesEggMoves.hasOwnProperty(rootSpeciesId)) {
        const eggMoveIndex = speciesEggMoves[rootSpeciesId].findIndex(m => m === moveId);
        if (eggMoveIndex > -1 && eggMoves & Math.pow(2, eggMoveIndex))
          continue;
      }
      if (pokemonFormLevelMoves.hasOwnProperty(this.speciesId) && pokemonFormLevelMoves[this.speciesId].hasOwnProperty(this.formIndex)) {
        if (!pokemonFormLevelMoves[this.speciesId][this.formIndex].find(lm => lm[0] <= 5 && lm[1] === moveId))
          return false;
      } else if (!pokemonSpeciesLevelMoves[this.speciesId].find(lm => lm[0] <= 5 && lm[1] === moveId))
        return false;
    }

    return true;
  }

  loadAssets(scene: BattleScene, female: boolean, formIndex?: integer, shiny?: boolean, startLoad?: boolean): Promise<void> {
    return new Promise(resolve => {
      const spriteKey = this.getSpriteKey(female, formIndex, shiny);
      scene.load.audio(this.getCryKey(formIndex), `audio/cry/${this.getCryKey(formIndex)}.m4a`);
      scene.loadPokemonAtlas(spriteKey, this.getSpriteAtlasPath(female, formIndex, shiny));
      scene.load.once(Phaser.Loader.Events.COMPLETE, () => {
        const originalWarn = console.warn;
        // Ignore warnings for missing frames, because there will be a lot
        console.warn = () => {};
        const frameNames = scene.anims.generateFrameNames(this.getSpriteKey(female, formIndex, shiny), { zeroPad: 4, suffix: ".png", start: 1, end: 400 });
        console.warn = originalWarn;
        scene.anims.create({
          key: this.getSpriteKey(female, formIndex, shiny),
          frames: frameNames,
          frameRate: 12,
          repeat: -1
        });
        resolve();
      });
      if (startLoad) {
        if (!scene.load.isLoading())
          scene.load.start();
      } else
        resolve();
    });
  }

  cry(scene: BattleScene, soundConfig?: Phaser.Types.Sound.SoundConfig, ignorePlay?: boolean): AnySound {
    const cryKey = this.getCryKey(this.formIndex);
    let cry = scene.sound.get(cryKey) as AnySound;
    if (cry?.pendingRemove)
      cry = null;
    cry = scene.playSound(cry || cryKey, soundConfig);
    if (ignorePlay)
      cry.stop();
    return cry;
  }
}