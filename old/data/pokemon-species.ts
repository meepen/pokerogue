import { Abilities } from './ability';
import BattleScene, { AnySound } from '../battle-scene';
import { GrowthRate } from './exp';
import { SpeciesWildEvolutionDelay, pokemonEvolutions, pokemonPrevolutions } from './pokemon-evolutions';
import { Species } from '../game-info/species/species';
import { Type } from './type';
import { LevelMoves, pokemonFormLevelMoves, pokemonFormLevelMoves as pokemonSpeciesFormLevelMoves, pokemonSpeciesLevelMoves } from './pokemon-level-moves';
import { uncatchableSpecies } from './biomes';
import * as Utils from '../utils';
import { StarterMoveset } from '../system/game-data';
import { speciesEggMoves } from './egg-moves';
import { PartyMemberStrength } from "./enums/party-member-strength";
import { GameMode } from '../game-mode';

export enum Region {
  NORMAL,
  ALOLA,
  GALAR,
  HISUI,
  PALDEA
}

export function getPokemonSpecies(species: Species): PokemonSpecies {
  if (species >= 2000)
    return allSpecies.find(s => s.speciesId === species);
  return allSpecies[species - 1];
}

export function getPokemonSpeciesForm(species: Species, formIndex: integer): PokemonSpeciesForm {
  let retSpecies: PokemonSpecies = species >= 2000
    ? allSpecies.find(s => s.speciesId === species)
    : allSpecies[species - 1];
  if (formIndex < retSpecies.forms?.length)
    return retSpecies.forms[formIndex];
  return retSpecies;
}

export function getFusedSpeciesName(speciesAName: string, speciesBName: string): string {
  const fragAPattern = /([a-z]{2}.*?[aeiou(?:y$)\-\']+)(.*?)$/i;
  const fragBPattern = /([a-z]{2}.*?[aeiou(?:y$)\-\'])(.*?)$/i;

  const [ speciesAPrefixMatch, speciesBPrefixMatch ] = [ speciesAName, speciesBName ].map(n => /^(?:Mega|(?:G|E)\-Max) /.exec(n));
  const [ speciesAPrefix, speciesBPrefix ] = [ speciesAPrefixMatch, speciesBPrefixMatch ].map(m => m ? m[0] : '');

  if (speciesAPrefix)
    speciesAName = speciesAName.slice(speciesAPrefix.length);
  if (speciesBPrefix)
    speciesBName = speciesBName.slice(speciesBPrefix.length);

  const [ speciesASuffixMatch, speciesBSuffixMatch ] = [ speciesAName, speciesBName ].map(n => / (?:X|Y)$/.exec(n));
  const [ speciesASuffix, speciesBSuffix ] = [ speciesASuffixMatch, speciesBSuffixMatch ].map(m => m ? m[0] : '');

  if (speciesASuffix)
    speciesAName = speciesAName.slice(0, -speciesASuffix.length);
  if (speciesBSuffix)
    speciesBName = speciesBName.slice(0, -speciesBSuffix.length);

  const splitNameA = speciesAName.split(/ /g);
  const splitNameB = speciesBName.split(/ /g);
  
  let fragAMatch = fragAPattern.exec(speciesAName);
  let fragBMatch = fragBPattern.exec(speciesBName);

  let fragA: string;
  let fragB: string;

  fragA = splitNameA.length === 1
    ? fragAMatch ? fragAMatch[1] : speciesAName
    : splitNameA[splitNameA.length - 1];

  if (splitNameB.length === 1) {
    if (fragBMatch) {
      const lastCharA = fragA.slice(fragA.length - 1);
      const prevCharB = fragBMatch[1].slice(fragBMatch.length - 1);
      fragB = (/[\-']/.test(prevCharB) ? prevCharB : '') + fragBMatch[2] || prevCharB;
      if (lastCharA === fragB[0] && /[aiu]/.test(lastCharA))
        fragB = fragB.slice(1);
    } else
      fragB = speciesBName;
  } else
    fragB = splitNameB[splitNameB.length - 1];

  if (splitNameA.length > 1)
    fragA = `${splitNameA.slice(0, splitNameA.length - 1).join(' ')} ${fragA}`;

  fragB = `${fragB.slice(0, 1).toLowerCase()}${fragB.slice(1)}`;

  return `${speciesAPrefix || speciesBPrefix}${fragA}${fragB}${speciesBSuffix || speciesASuffix}`;
}

export type PokemonSpeciesFilter = (species: PokemonSpecies) => boolean;


export default class PokemonSpecies extends PokemonSpeciesForm {
  public name: string;
  public pseudoLegendary: boolean;
  public legendary: boolean;
  public mythical: boolean;
  public species: string;
  public growthRate: GrowthRate;
  public malePercent: number;
  public genderDiffs: boolean;
  public canChangeForm: boolean;
  public forms: PokemonForm[];

  constructor(id: Species, name: string, generation: integer, pseudoLegendary: boolean, legendary: boolean, mythical: boolean, species: string,
    type1: Type, type2: Type, height: number, weight: number, ability1: Abilities, ability2: Abilities, abilityHidden: Abilities,
    baseTotal: integer, baseHp: integer, baseAtk: integer, baseDef: integer, baseSpatk: integer, baseSpdef: integer, baseSpd: integer,
    catchRate: integer, baseFriendship: integer, baseExp: integer, growthRate: GrowthRate, malePercent: number,
    genderDiffs: boolean, canChangeForm?: boolean, ...forms: PokemonForm[]) {
    super(type1, type2, height, weight, ability1, ability2, abilityHidden, baseTotal, baseHp, baseAtk, baseDef, baseSpatk, baseSpdef, baseSpd,
      catchRate, baseFriendship, baseExp, genderDiffs);
    this.speciesId = id;
    this.formIndex = 0;
    this.name = name;
    this.generation = generation;
    this.pseudoLegendary = pseudoLegendary;
    this.legendary = legendary;
    this.mythical = mythical;
    this.species = species;
    this.growthRate = growthRate;
    this.malePercent = malePercent;
    this.genderDiffs = genderDiffs;
    this.canChangeForm = !!canChangeForm;
    this.forms = forms;

    forms.forEach((form, f) => {
      form.speciesId = id;
      form.formIndex = f;
      form.generation = generation;
    });
  }

  getName(formIndex?: integer): string {
    if (formIndex !== undefined && this.forms.length) {
      const form = this.forms[formIndex];
      switch (form.formKey) {
        case SpeciesFormKey.MEGA:
        case SpeciesFormKey.PRIMAL:
        case SpeciesFormKey.ETERNAMAX:
          return `${form.formName} ${this.name}`;
        case SpeciesFormKey.MEGA_X:
          return `Mega ${this.name} X`;
        case SpeciesFormKey.MEGA_Y:
          return `Mega ${this.name} Y`;
        default:
          if (form.formKey.indexOf(SpeciesFormKey.GIGANTAMAX) > -1)
            return `G-Max ${this.name}`;
      }
    }
    return this.name;
  }

  getWildSpeciesForLevel(level: integer, allowEvolving: boolean, isBoss: boolean, gameMode: GameMode): Species {
    return this.getSpeciesForLevel(level, allowEvolving, false, (isBoss ? PartyMemberStrength.WEAKER : PartyMemberStrength.AVERAGE) + (gameMode?.isEndless ? 1 : 0));
  }

  getTrainerSpeciesForLevel(level: integer, allowEvolving: boolean = false, strength: PartyMemberStrength): Species {
    return this.getSpeciesForLevel(level, allowEvolving, true, strength);
  }

  private getStrengthLevelDiff(strength: PartyMemberStrength): integer {
    switch (Math.min(strength, PartyMemberStrength.STRONGER)) {
      case PartyMemberStrength.WEAKEST:
        return 60;
      case PartyMemberStrength.WEAKER:
        return 40;
      case PartyMemberStrength.WEAK:
        return 20;
      case PartyMemberStrength.AVERAGE:
        return 10;
      case PartyMemberStrength.STRONG:
        return 5;
      default:
        return 0;
    }
  }

  getSpeciesForLevel(level: integer, allowEvolving: boolean = false, forTrainer: boolean = false, strength: PartyMemberStrength = PartyMemberStrength.WEAKER): Species {
    const prevolutionLevels = this.getPrevolutionLevels();

    if (prevolutionLevels.length) {
      for (let pl = prevolutionLevels.length - 1; pl >= 0; pl--) {
        const prevolutionLevel = prevolutionLevels[pl];
        if (level < prevolutionLevel[1])
          return prevolutionLevel[0];
      }
    }

    if (!allowEvolving || !pokemonEvolutions.hasOwnProperty(this.speciesId))
      return this.speciesId;

    const evolutions = pokemonEvolutions[this.speciesId];

    const easeInFunc = Phaser.Tweens.Builders.GetEaseFunction('Sine.easeIn');
    const easeOutFunc = Phaser.Tweens.Builders.GetEaseFunction('Sine.easeOut');

    const evolutionPool: Map<number, Species> = new Map();
    let totalWeight = 0;
    let noEvolutionChance = 1;

    for (let ev of evolutions) {
      if (ev.level > level)
        continue;

      let evolutionChance: number;
      
      const evolutionSpecies = getPokemonSpecies(ev.speciesId);
      const isRegionalEvolution = !this.isRegional() && evolutionSpecies.isRegional();
      
      if (!forTrainer && isRegionalEvolution)
        evolutionChance = 0;
      else {
        if (ev.wildDelay === SpeciesWildEvolutionDelay.NONE) {
          if (strength === PartyMemberStrength.STRONGER)
            evolutionChance = 1;
          else {
            const maxLevelDiff = this.getStrengthLevelDiff(strength);
            const minChance: number = 0.875 - 0.125 * strength;
            
            evolutionChance = Math.min(minChance + easeInFunc(Math.min(level - ev.level, maxLevelDiff) / maxLevelDiff) * (1 - minChance), 1);
          }
        } else {
          let preferredMinLevel = (ev.level - 1) + ev.wildDelay * this.getStrengthLevelDiff(strength + 1);
          let evolutionLevel = ev.level > 1 ? ev.level : Math.floor(preferredMinLevel / 2);

          if (ev.level <= 1 && pokemonPrevolutions.hasOwnProperty(this.speciesId)) {
            const prevolutionLevel = pokemonEvolutions[pokemonPrevolutions[this.speciesId]].find(ev => ev.speciesId === this.speciesId).level;
            if (prevolutionLevel > 1)
              evolutionLevel = prevolutionLevel;
          }

          evolutionChance = Math.min(0.65 * easeInFunc((Math.min(Math.max(level - evolutionLevel, 0), preferredMinLevel) / preferredMinLevel)) + 0.35 * easeOutFunc(Math.min(level - evolutionLevel, preferredMinLevel * 2.5) / (preferredMinLevel * 2.5)), 1);
        }
      }

      if (evolutionChance > 0) {
        if (isRegionalEvolution)
          evolutionChance /= (evolutionSpecies.isRareRegional() ? 16 : 4);

        totalWeight += evolutionChance;

        evolutionPool.set(totalWeight, ev.speciesId);
        
        if ((1 - evolutionChance) < noEvolutionChance)
          noEvolutionChance = 1 - evolutionChance;
      }
    }

    if (noEvolutionChance === 1 || Phaser.Math.RND.realInRange(0, 1) < noEvolutionChance)
      return this.speciesId;
      
    const randValue = evolutionPool.size === 1 ? 0 : Utils.randSeedInt(totalWeight);

    for (let weight of evolutionPool.keys()) {
      if (randValue < weight)
        return getPokemonSpecies(evolutionPool.get(weight)).getSpeciesForLevel(level, true, forTrainer, strength);
    }

    return this.speciesId;
  }

  getEvolutionLevels() {
    const evolutionLevels = [];

    //console.log(Species[this.speciesId], pokemonEvolutions[this.speciesId])

    if (pokemonEvolutions.hasOwnProperty(this.speciesId)) {
      for (let e of pokemonEvolutions[this.speciesId]) {
        const speciesId = e.speciesId;
        const level = e.level;
        evolutionLevels.push([ speciesId, level ]);
        //console.log(Species[speciesId], getPokemonSpecies(speciesId), getPokemonSpecies(speciesId).getEvolutionLevels());
        const nextEvolutionLevels = getPokemonSpecies(speciesId).getEvolutionLevels();
        for (let npl of nextEvolutionLevels)
          evolutionLevels.push(npl);
      }
    }

    return evolutionLevels;
  }

  getPrevolutionLevels() {
    const prevolutionLevels = [];

    const allEvolvingPokemon = Object.keys(pokemonEvolutions);
    for (let p of allEvolvingPokemon) {
      for (let e of pokemonEvolutions[p]) {
        if (e.speciesId === this.speciesId && (!this.forms.length || !e.evoFormKey || e.evoFormKey === this.forms[this.formIndex].formKey)) {
          const speciesId = parseInt(p) as Species;
          let level = e.level;
          prevolutionLevels.push([ speciesId, level ]);
          const subPrevolutionLevels = getPokemonSpecies(speciesId).getPrevolutionLevels();
          for (let spl of subPrevolutionLevels)
            prevolutionLevels.push(spl);
        }
      }
    }

    return prevolutionLevels;
  }

  // This could definitely be written better and more accurate to the getSpeciesForLevel logic, but it is only for generating movesets for evolved Pokemon
  getSimulatedEvolutionChain(currentLevel: integer, forTrainer: boolean = false, isBoss: boolean = false, player: boolean = false) {
    const ret = [];
    if (pokemonPrevolutions.hasOwnProperty(this.speciesId)) {
      const prevolutionLevels = this.getPrevolutionLevels().reverse();
      const levelDiff = player ? 0 : forTrainer || isBoss ? forTrainer && isBoss ? 2.5 : 5 : 10;
      ret.push([ prevolutionLevels[0][0], 1 ]);
      for (let l = 1; l < prevolutionLevels.length; l++) {
        const evolution = pokemonEvolutions[prevolutionLevels[l - 1][0]].find(e => e.speciesId === prevolutionLevels[l][0]);
        ret.push([ prevolutionLevels[l][0], Math.min(Math.max(evolution.level + Math.round(Utils.randSeedGauss(0.5, 1 + levelDiff * 0.2) * Math.max(evolution.wildDelay, 0.5) * 5) - 1, 2, evolution.level), currentLevel - 1) ]);
      }
      const lastPrevolutionLevel = ret[prevolutionLevels.length - 1][1];
      const evolution = pokemonEvolutions[prevolutionLevels[prevolutionLevels.length - 1][0]].find(e => e.speciesId === this.speciesId);
      ret.push([ this.speciesId, Math.min(Math.max(lastPrevolutionLevel + Math.round(Utils.randSeedGauss(0.5, 1 + levelDiff * 0.2) * Math.max(evolution.wildDelay, 0.5) * 5), lastPrevolutionLevel + 1, evolution.level), currentLevel) ]);
    } else {
      ret.push([ this.speciesId, 1 ]);
    }

    return ret;
  }

  getCompatibleFusionSpeciesFilter(): PokemonSpeciesFilter {
    const hasEvolution = pokemonEvolutions.hasOwnProperty(this.speciesId);
    const hasPrevolution = pokemonPrevolutions.hasOwnProperty(this.speciesId);
    const pseudoLegendary = this.pseudoLegendary;
    const legendary = this.legendary;
    const mythical = this.mythical;
    return species => {
      return pokemonEvolutions.hasOwnProperty(species.speciesId) === hasEvolution
        && pokemonPrevolutions.hasOwnProperty(species.speciesId) === hasPrevolution
        && species.pseudoLegendary === pseudoLegendary
        && species.legendary === legendary
        && species.mythical === mythical;
    };
  }

  isObtainable() {
    return super.isObtainable();
  }

  getFormSpriteKey(formIndex?: integer) {
    return this.forms?.length
      ? this.forms[formIndex || 0].getFormSpriteKey()
      : '';
  }
}

export class PokemonForm extends PokemonSpeciesForm {
  public formName: string;
  public formKey: string;
  public formSpriteKey: string;

  constructor(formName: string, formKey: string, type1: Type, type2: Type, height: number, weight: number, ability1: Abilities, ability2: Abilities, abilityHidden: Abilities,
    baseTotal: integer, baseHp: integer, baseAtk: integer, baseDef: integer, baseSpatk: integer, baseSpdef: integer, baseSpd: integer,
    catchRate: integer, baseFriendship: integer, baseExp: integer, genderDiffs?: boolean, formSpriteKey?: string) {
    super(type1, type2, height, weight, ability1, ability2, abilityHidden, baseTotal, baseHp, baseAtk, baseDef, baseSpatk, baseSpdef, baseSpd,
      catchRate, baseFriendship, baseExp, !!genderDiffs);
    this.formName = formName;
    this.formKey = formKey;
    this.formSpriteKey = formSpriteKey !== undefined ? formSpriteKey : null;
  }

  getFormSpriteKey(_formIndex?: integer) {
    return this.formSpriteKey !== null ? this.formSpriteKey : this.formKey;
  }
}

export enum SpeciesFormKey {
  MEGA = "mega",
  MEGA_X = "mega-x",
  MEGA_Y = "mega-y",
  PRIMAL = "primal",
  ORIGIN = "origin",
  INCARNATE = "incarnate",
  THERIAN = "therian",
  GIGANTAMAX = "gigantamax",
  GIGANTAMAX_SINGLE = "gigantamax-single",
  GIGANTAMAX_RAPID = "gigantamax-rapid",
  ETERNAMAX = "eternamax"
}


export const speciesStarters = {
  [Species.BULBASAUR]: 3,
  [Species.CHARMANDER]: 3,
  [Species.SQUIRTLE]: 3,
  [Species.CATERPIE]: 1,
  [Species.WEEDLE]: 1,
  [Species.PIDGEY]: 2,
  [Species.RATTATA]: 1,
  [Species.SPEAROW]: 2,
  [Species.EKANS]: 2,
  [Species.PIKACHU]: 4,
  [Species.SANDSHREW]: 2,
  [Species.NIDORAN_F]: 3,
  [Species.NIDORAN_M]: 3,
  [Species.CLEFAIRY]: 4,
  [Species.VULPIX]: 3,
  [Species.JIGGLYPUFF]: 4,
  [Species.ZUBAT]: 2,
  [Species.ODDISH]: 2,
  [Species.PARAS]: 1,
  [Species.VENONAT]: 2,
  [Species.DIGLETT]: 3,
  [Species.MEOWTH]: 4,
  [Species.PSYDUCK]: 2,
  [Species.MANKEY]: 4,
  [Species.GROWLITHE]: 4,
  [Species.POLIWAG]: 3,
  [Species.ABRA]: 3,
  [Species.MACHOP]: 3,
  [Species.BELLSPROUT]: 3,
  [Species.TENTACOOL]: 3,
  [Species.GEODUDE]: 3,
  [Species.PONYTA]: 3,
  [Species.SLOWPOKE]: 3,
  [Species.MAGNEMITE]: 3,
  [Species.FARFETCHD]: 4,
  [Species.DODUO]: 4,
  [Species.SEEL]: 3,
  [Species.GRIMER]: 3,
  [Species.SHELLDER]: 4,
  [Species.GASTLY]: 3,
  [Species.ONIX]: 4,
  [Species.DROWZEE]: 3,
  [Species.KRABBY]: 2,
  [Species.VOLTORB]: 2,
  [Species.EXEGGCUTE]: 4,
  [Species.CUBONE]: 3,
  [Species.HITMONLEE]: 5,
  [Species.HITMONCHAN]: 5,
  [Species.LICKITUNG]: 5,
  [Species.KOFFING]: 3,
  [Species.RHYHORN]: 3,
  [Species.CHANSEY]: 5,
  [Species.TANGELA]: 3,
  [Species.KANGASKHAN]: 5,
  [Species.HORSEA]: 4,
  [Species.GOLDEEN]: 3,
  [Species.STARYU]: 4,
  [Species.MR_MIME]: 4,
  [Species.SCYTHER]: 5,
  [Species.JYNX]: 4,
  [Species.ELECTABUZZ]: 5,
  [Species.MAGMAR]: 5,
  [Species.PINSIR]: 4,
  [Species.TAUROS]: 5,
  [Species.MAGIKARP]: 3,
  [Species.LAPRAS]: 5,
  [Species.DITTO]: 2,
  [Species.EEVEE]: 4,
  [Species.PORYGON]: 4,
  [Species.OMANYTE]: 3,
  [Species.KABUTO]: 3,
  [Species.AERODACTYL]: 5,
  [Species.SNORLAX]: 5,
  [Species.ARTICUNO]: 6,
  [Species.ZAPDOS]: 6,
  [Species.MOLTRES]: 6,
  [Species.DRATINI]: 4,
  [Species.MEWTWO]: 8,
  [Species.MEW]: 7,

  [Species.CHIKORITA]: 3,
  [Species.CYNDAQUIL]: 3,
  [Species.TOTODILE]: 3,
  [Species.SENTRET]: 1,
  [Species.HOOTHOOT]: 1,
  [Species.LEDYBA]: 1,
  [Species.SPINARAK]: 1,
  [Species.CHINCHOU]: 3,
  [Species.PICHU]: 3,
  [Species.CLEFFA]: 3,
  [Species.IGGLYBUFF]: 3,
  [Species.TOGEPI]: 3,
  [Species.NATU]: 2,
  [Species.MAREEP]: 3,
  [Species.MARILL]: 4,
  [Species.SUDOWOODO]: 5,
  [Species.HOPPIP]: 1,
  [Species.AIPOM]: 3,
  [Species.SUNKERN]: 1,
  [Species.YANMA]: 3,
  [Species.WOOPER]: 2,
  [Species.MURKROW]: 4,
  [Species.MISDREAVUS]: 3,
  [Species.UNOWN]: 1,
  [Species.WOBBUFFET]: 4,
  [Species.GIRAFARIG]: 4,
  [Species.PINECO]: 2,
  [Species.DUNSPARCE]: 4,
  [Species.GLIGAR]: 4,
  [Species.SNUBBULL]: 3,
  [Species.QWILFISH]: 3,
  [Species.SHUCKLE]: 4,
  [Species.HERACROSS]: 5,
  [Species.SNEASEL]: 4,
  [Species.TEDDIURSA]: 4,
  [Species.SLUGMA]: 2,
  [Species.SWINUB]: 3,
  [Species.CORSOLA]: 3,
  [Species.REMORAID]: 3,
  [Species.DELIBIRD]: 3,
  [Species.MANTINE]: 4,
  [Species.SKARMORY]: 5,
  [Species.HOUNDOUR]: 4,
  [Species.PHANPY]: 3,
  [Species.STANTLER]: 4,
  [Species.SMEARGLE]: 3,
  [Species.TYROGUE]: 4,
  [Species.SMOOCHUM]: 3,
  [Species.ELEKID]: 4,
  [Species.MAGBY]: 4,
  [Species.MILTANK]: 5,
  [Species.RAIKOU]: 6,
  [Species.ENTEI]: 6,
  [Species.SUICUNE]: 6,
  [Species.LARVITAR]: 4,
  [Species.LUGIA]: 8,
  [Species.HO_OH]: 8,
  [Species.CELEBI]: 7,

  [Species.TREECKO]: 3,
  [Species.TORCHIC]: 3,
  [Species.MUDKIP]: 3,
  [Species.POOCHYENA]: 2,
  [Species.ZIGZAGOON]: 2,
  [Species.WURMPLE]: 1,
  [Species.LOTAD]: 3,
  [Species.SEEDOT]: 3,
  [Species.TAILLOW]: 3,
  [Species.WINGULL]: 3,
  [Species.RALTS]: 3,
  [Species.SURSKIT]: 2,
  [Species.SHROOMISH]: 3,
  [Species.SLAKOTH]: 4,
  [Species.NINCADA]: 4,
  [Species.WHISMUR]: 3,
  [Species.MAKUHITA]: 3,
  [Species.AZURILL]: 3,
  [Species.NOSEPASS]: 3,
  [Species.SKITTY]: 3,
  [Species.SABLEYE]: 3,
  [Species.MAWILE]: 5,
  [Species.ARON]: 3,
  [Species.MEDITITE]: 4,
  [Species.ELECTRIKE]: 3,
  [Species.PLUSLE]: 2,
  [Species.MINUN]: 2,
  [Species.VOLBEAT]: 2,
  [Species.ILLUMISE]: 2,
  [Species.ROSELIA]: 4,
  [Species.GULPIN]: 3,
  [Species.CARVANHA]: 3,
  [Species.WAILMER]: 3,
  [Species.NUMEL]: 3,
  [Species.TORKOAL]: 4,
  [Species.SPOINK]: 3,
  [Species.SPINDA]: 2,
  [Species.TRAPINCH]: 4,
  [Species.CACNEA]: 3,
  [Species.SWABLU]: 3,
  [Species.ZANGOOSE]: 5,
  [Species.SEVIPER]: 4,
  [Species.LUNATONE]: 4,
  [Species.SOLROCK]: 4,
  [Species.BARBOACH]: 3,
  [Species.CORPHISH]: 3,
  [Species.BALTOY]: 3,
  [Species.LILEEP]: 3,
  [Species.ANORITH]: 3,
  [Species.FEEBAS]: 4,
  [Species.CASTFORM]: 2,
  [Species.KECLEON]: 4,
  [Species.SHUPPET]: 3,
  [Species.DUSKULL]: 3,
  [Species.TROPIUS]: 5,
  [Species.CHIMECHO]: 4,
  [Species.ABSOL]: 5,
  [Species.WYNAUT]: 3,
  [Species.SNORUNT]: 3,
  [Species.SPHEAL]: 3,
  [Species.CLAMPERL]: 3,
  [Species.RELICANTH]: 4,
  [Species.LUVDISC]: 2,
  [Species.BAGON]: 4,
  [Species.BELDUM]: 4,
  [Species.REGIROCK]: 6,
  [Species.REGICE]: 6,
  [Species.REGISTEEL]: 6,
  [Species.LATIAS]: 7,
  [Species.LATIOS]: 7,
  [Species.KYOGRE]: 8,
  [Species.GROUDON]: 8,
  [Species.RAYQUAZA]: 8,
  [Species.JIRACHI]: 7,
  [Species.DEOXYS]: 8,

  [Species.TURTWIG]: 3,
  [Species.CHIMCHAR]: 3,
  [Species.PIPLUP]: 3,
  [Species.STARLY]: 3,
  [Species.BIDOOF]: 2,
  [Species.KRICKETOT]: 1,
  [Species.SHINX]: 3,
  [Species.BUDEW]: 3,
  [Species.CRANIDOS]: 3,
  [Species.SHIELDON]: 3,
  [Species.BURMY]: 1,
  [Species.COMBEE]: 2,
  [Species.PACHIRISU]: 3,
  [Species.BUIZEL]: 3,
  [Species.CHERUBI]: 3,
  [Species.SHELLOS]: 3,
  [Species.DRIFLOON]: 3,
  [Species.BUNEARY]: 3,
  [Species.GLAMEOW]: 3,
  [Species.CHINGLING]: 3,
  [Species.STUNKY]: 3,
  [Species.BRONZOR]: 3,
  [Species.BONSLY]: 4,
  [Species.MIME_JR]: 3,
  [Species.HAPPINY]: 4,
  [Species.CHATOT]: 4,
  [Species.SPIRITOMB]: 5,
  [Species.GIBLE]: 4,
  [Species.MUNCHLAX]: 4,
  [Species.RIOLU]: 4,
  [Species.HIPPOPOTAS]: 3,
  [Species.SKORUPI]: 3,
  [Species.CROAGUNK]: 3,
  [Species.CARNIVINE]: 4,
  [Species.FINNEON]: 3,
  [Species.MANTYKE]: 3,
  [Species.SNOVER]: 3,
  [Species.ROTOM]: 5,
  [Species.UXIE]: 7,
  [Species.MESPRIT]: 7,
  [Species.AZELF]: 7,
  [Species.DIALGA]: 8,
  [Species.PALKIA]: 8,
  [Species.HEATRAN]: 7,
  [Species.REGIGIGAS]: 8,
  [Species.GIRATINA]: 8,
  [Species.CRESSELIA]: 7,
  [Species.PHIONE]: 5,
  [Species.MANAPHY]: 7,
  [Species.DARKRAI]: 7,
  [Species.SHAYMIN]: 7,
  [Species.ARCEUS]: 9,
  [Species.VICTINI]: 8,

  [Species.SNIVY]: 3,
  [Species.TEPIG]: 3,
  [Species.OSHAWOTT]: 3,
  [Species.PATRAT]: 2,
  [Species.LILLIPUP]: 3,
  [Species.PURRLOIN]: 3,
  [Species.PANSAGE]: 3,
  [Species.PANSEAR]: 3,
  [Species.PANPOUR]: 3,
  [Species.MUNNA]: 3,
  [Species.PIDOVE]: 2,
  [Species.BLITZLE]: 3,
  [Species.ROGGENROLA]: 3,
  [Species.WOOBAT]: 3,
  [Species.DRILBUR]: 4,
  [Species.AUDINO]: 4,
  [Species.TIMBURR]: 3,
  [Species.TYMPOLE]: 3,
  [Species.THROH]: 5,
  [Species.SAWK]: 5,
  [Species.SEWADDLE]: 3,
  [Species.VENIPEDE]: 3,
  [Species.COTTONEE]: 3,
  [Species.PETILIL]: 3,
  [Species.BASCULIN]: 4,
  [Species.SANDILE]: 3,
  [Species.DARUMAKA]: 4,
  [Species.MARACTUS]: 4,
  [Species.DWEBBLE]: 3,
  [Species.SCRAGGY]: 3,
  [Species.SIGILYPH]: 5,
  [Species.YAMASK]: 3,
  [Species.TIRTOUGA]: 4,
  [Species.ARCHEN]: 4,
  [Species.TRUBBISH]: 3,
  [Species.ZORUA]: 3,
  [Species.MINCCINO]: 3,
  [Species.GOTHITA]: 3,
  [Species.SOLOSIS]: 3,
  [Species.DUCKLETT]: 3,
  [Species.VANILLITE]: 3,
  [Species.DEERLING]: 3,
  [Species.EMOLGA]: 3,
  [Species.KARRABLAST]: 3,
  [Species.FOONGUS]: 3,
  [Species.FRILLISH]: 3,
  [Species.ALOMOMOLA]: 4,
  [Species.JOLTIK]: 3,
  [Species.FERROSEED]: 3,
  [Species.KLINK]: 3,
  [Species.TYNAMO]: 3,
  [Species.ELGYEM]: 3,
  [Species.LITWICK]: 3,
  [Species.AXEW]: 4,
  [Species.CUBCHOO]: 3,
  [Species.CRYOGONAL]: 5,
  [Species.SHELMET]: 3,
  [Species.STUNFISK]: 4,
  [Species.MIENFOO]: 3,
  [Species.DRUDDIGON]: 5,
  [Species.GOLETT]: 3,
  [Species.PAWNIARD]: 4,
  [Species.BOUFFALANT]: 5,
  [Species.RUFFLET]: 3,
  [Species.VULLABY]: 3,
  [Species.HEATMOR]: 5,
  [Species.DURANT]: 5,
  [Species.DEINO]: 4,
  [Species.LARVESTA]: 4,
  [Species.COBALION]: 6,
  [Species.TERRAKION]: 6,
  [Species.VIRIZION]: 6,
  [Species.TORNADUS]: 7,
  [Species.THUNDURUS]: 7,
  [Species.RESHIRAM]: 8,
  [Species.ZEKROM]: 8,
  [Species.LANDORUS]: 7,
  [Species.KYUREM]: 8,
  [Species.KELDEO]: 7,
  [Species.MELOETTA]: 7,
  [Species.GENESECT]: 8,

  [Species.CHESPIN]: 3,
  [Species.FENNEKIN]: 3,
  [Species.FROAKIE]: 3,
  [Species.BUNNELBY]: 2,
  [Species.FLETCHLING]: 3,
  [Species.SCATTERBUG]: 1,
  [Species.LITLEO]: 3,
  [Species.FLABEBE]: 3,
  [Species.SKIDDO]: 3,
  [Species.PANCHAM]: 3,
  [Species.FURFROU]: 4,
  [Species.ESPURR]: 3,
  [Species.HONEDGE]: 4,
  [Species.SPRITZEE]: 3,
  [Species.SWIRLIX]: 3,
  [Species.INKAY]: 3,
  [Species.BINACLE]: 3,
  [Species.SKRELP]: 3,
  [Species.CLAUNCHER]: 3,
  [Species.HELIOPTILE]: 3,
  [Species.TYRUNT]: 3,
  [Species.AMAURA]: 3,
  [Species.HAWLUCHA]: 4,
  [Species.DEDENNE]: 4,
  [Species.CARBINK]: 4,
  [Species.GOOMY]: 4,
  [Species.KLEFKI]: 4,
  [Species.PHANTUMP]: 3,
  [Species.PUMPKABOO]: 3,
  [Species.BERGMITE]: 3,
  [Species.NOIBAT]: 4,
  [Species.XERNEAS]: 8,
  [Species.YVELTAL]: 8,
  [Species.ZYGARDE]: 8,
  [Species.DIANCIE]: 7,
  [Species.HOOPA]: 7,
  [Species.VOLCANION]: 7,
  [Species.ETERNAL_FLOETTE]: 5,

  [Species.ROWLET]: 3,
  [Species.LITTEN]: 3,
  [Species.POPPLIO]: 3,
  [Species.PIKIPEK]: 3,
  [Species.YUNGOOS]: 2,
  [Species.GRUBBIN]: 2,
  [Species.CRABRAWLER]: 4,
  [Species.ORICORIO]: 3,
  [Species.CUTIEFLY]: 3,
  [Species.ROCKRUFF]: 3,
  [Species.WISHIWASHI]: 3,
  [Species.MAREANIE]: 3,
  [Species.MUDBRAY]: 3,
  [Species.DEWPIDER]: 3,
  [Species.FOMANTIS]: 3,
  [Species.MORELULL]: 3,
  [Species.SALANDIT]: 3,
  [Species.STUFFUL]: 3,
  [Species.BOUNSWEET]: 3,
  [Species.COMFEY]: 4,
  [Species.ORANGURU]: 5,
  [Species.PASSIMIAN]: 5,
  [Species.WIMPOD]: 3,
  [Species.SANDYGAST]: 3,
  [Species.PYUKUMUKU]: 3,
  [Species.TYPE_NULL]: 6,
  [Species.MINIOR]: 5,
  [Species.KOMALA]: 5,
  [Species.TURTONATOR]: 5,
  [Species.TOGEDEMARU]: 4,
  [Species.MIMIKYU]: 5,
  [Species.BRUXISH]: 5,
  [Species.DRAMPA]: 5,
  [Species.DHELMISE]: 5,
  [Species.JANGMO_O]: 4,
  [Species.TAPU_KOKO]: 6,
  [Species.TAPU_LELE]: 6,
  [Species.TAPU_BULU]: 6,
  [Species.TAPU_FINI]: 6,
  [Species.COSMOG]: 7,
  [Species.NIHILEGO]: 7,
  [Species.BUZZWOLE]: 7,
  [Species.PHEROMOSA]: 7,
  [Species.XURKITREE]: 7,
  [Species.CELESTEELA]: 7,
  [Species.KARTANA]: 7,
  [Species.GUZZLORD]: 7,
  [Species.NECROZMA]: 8,
  [Species.MAGEARNA]: 7,
  [Species.MARSHADOW]: 7,
  [Species.POIPOLE]: 7,
  [Species.STAKATAKA]: 7,
  [Species.BLACEPHALON]: 7,
  [Species.ZERAORA]: 7,
  [Species.MELTAN]: 6,
  [Species.ALOLA_RATTATA]: 2,
  [Species.ALOLA_SANDSHREW]: 4,
  [Species.ALOLA_VULPIX]: 4,
  [Species.ALOLA_DIGLETT]: 3,
  [Species.ALOLA_MEOWTH]: 4,
  [Species.ALOLA_GEODUDE]: 3,
  [Species.ALOLA_GRIMER]: 3,

  [Species.GROOKEY]: 3,
  [Species.SCORBUNNY]: 3,
  [Species.SOBBLE]: 3,
  [Species.SKWOVET]: 2,
  [Species.ROOKIDEE]: 4,
  [Species.BLIPBUG]: 2,
  [Species.NICKIT]: 3,
  [Species.GOSSIFLEUR]: 3,
  [Species.WOOLOO]: 3,
  [Species.CHEWTLE]: 3,
  [Species.YAMPER]: 3,
  [Species.ROLYCOLY]: 3,
  [Species.APPLIN]: 4,
  [Species.SILICOBRA]: 3,
  [Species.CRAMORANT]: 3,
  [Species.ARROKUDA]: 3,
  [Species.TOXEL]: 3,
  [Species.SIZZLIPEDE]: 3,
  [Species.CLOBBOPUS]: 3,
  [Species.SINISTEA]: 3,
  [Species.HATENNA]: 4,
  [Species.IMPIDIMP]: 3,
  [Species.MILCERY]: 3,
  [Species.FALINKS]: 4,
  [Species.PINCURCHIN]: 3,
  [Species.SNOM]: 3,
  [Species.STONJOURNER]: 4,
  [Species.EISCUE]: 4,
  [Species.INDEEDEE]: 3,
  [Species.MORPEKO]: 3,
  [Species.CUFANT]: 4,
  [Species.DRACOZOLT]: 5,
  [Species.ARCTOZOLT]: 5,
  [Species.DRACOVISH]: 5,
  [Species.ARCTOVISH]: 5,
  [Species.DURALUDON]: 5,
  [Species.DREEPY]: 4,
  [Species.ZACIAN]: 8,
  [Species.ZAMAZENTA]: 8,
  [Species.ETERNATUS]: 10,
  [Species.KUBFU]: 7,
  [Species.ZARUDE]: 7,
  [Species.REGIELEKI]: 6,
  [Species.REGIDRAGO]: 6,
  [Species.GLASTRIER]: 7,
  [Species.SPECTRIER]: 7,
  [Species.CALYREX]: 8,
  [Species.GALAR_MEOWTH]: 4,
  [Species.GALAR_PONYTA]: 4,
  [Species.GALAR_SLOWPOKE]: 3,
  [Species.GALAR_FARFETCHD]: 5,
  [Species.GALAR_CORSOLA]: 4,
  [Species.GALAR_ZIGZAGOON]: 3,
  [Species.GALAR_DARUMAKA]: 4,
  [Species.GALAR_YAMASK]: 3,
  [Species.GALAR_STUNFISK]: 4,
  [Species.GALAR_MR_MIME]: 5,
  [Species.GALAR_ARTICUNO]: 6,
  [Species.GALAR_ZAPDOS]: 6,
  [Species.GALAR_MOLTRES]: 6,
  [Species.HISUI_GROWLITHE]: 4,
  [Species.HISUI_VOLTORB]: 3,
  [Species.HISUI_QWILFISH]: 4,
  [Species.HISUI_SNEASEL]: 4,
  [Species.HISUI_ZORUA]: 4,
  [Species.ENAMORUS]: 7,

  [Species.SPRIGATITO]: 3,
  [Species.FUECOCO]: 3,
  [Species.QUAXLY]: 3,
  [Species.LECHONK]: 2,
  [Species.TAROUNTULA]: 2,
  [Species.NYMBLE]: 2,
  [Species.PAWMI]: 3,
  [Species.TANDEMAUS]: 4,
  [Species.FIDOUGH]: 3,
  [Species.SMOLIV]: 3,
  [Species.SQUAWKABILLY]: 3,
  [Species.NACLI]: 4,
  [Species.CHARCADET]: 4,
  [Species.TADBULB]: 3,
  [Species.WATTREL]: 3,
  [Species.MASCHIFF]: 3,
  [Species.SHROODLE]: 3,
  [Species.BRAMBLIN]: 3,
  [Species.TOEDSCOOL]: 3,
  [Species.KLAWF]: 4,
  [Species.CAPSAKID]: 3,
  [Species.RELLOR]: 3,
  [Species.FLITTLE]: 3,
  [Species.TINKATINK]: 4,
  [Species.WIGLETT]: 3,
  [Species.BOMBIRDIER]: 3,
  [Species.FINIZEN]: 4,
  [Species.VAROOM]: 4,
  [Species.CYCLIZAR]: 5,
  [Species.ORTHWORM]: 4,
  [Species.GLIMMET]: 4,
  [Species.GREAVARD]: 4,
  [Species.FLAMIGO]: 3,
  [Species.CETODDLE]: 4,
  [Species.VELUZA]: 4,
  [Species.DONDOZO]: 5,
  [Species.TATSUGIRI]: 5,
  [Species.GREAT_TUSK]: 6,
  [Species.SCREAM_TAIL]: 6,
  [Species.BRUTE_BONNET]: 6,
  [Species.FLUTTER_MANE]: 6,
  [Species.SLITHER_WING]: 6,
  [Species.SANDY_SHOCKS]: 6,
  [Species.IRON_TREADS]: 6,
  [Species.IRON_BUNDLE]: 6,
  [Species.IRON_HANDS]: 6,
  [Species.IRON_JUGULIS]: 6,
  [Species.IRON_MOTH]: 6,
  [Species.IRON_THORNS]: 6,
  [Species.FRIGIBAX]: 4,
  [Species.GIMMIGHOUL]: 5,
  [Species.WO_CHIEN]: 7,
  [Species.CHIEN_PAO]: 7,
  [Species.TING_LU]: 7,
  [Species.CHI_YU]: 7,
  [Species.ROARING_MOON]: 6,
  [Species.IRON_VALIANT]: 6,
  [Species.KORAIDON]: 8,
  [Species.MIRAIDON]: 8,
  [Species.WALKING_WAKE]: 7,
  [Species.IRON_LEAVES]: 7,
  [Species.POLTCHAGEIST]: 4,
  [Species.OKIDOGI]: 7,
  [Species.MUNKIDORI]: 7,
  [Species.FEZANDIPITI]: 7,
  [Species.OGERPON]: 8,
  [Species.GOUGING_FIRE]: 7,
  [Species.RAGING_BOLT]: 7,
  [Species.IRON_BOULDER]: 7,
  [Species.IRON_CROWN]: 7,
  [Species.TERAPAGOS]: 8,
  [Species.PECHARUNT]: 7,
  [Species.PALDEA_TAUROS]: 5,
  [Species.PALDEA_WOOPER]: 3,
  [Species.BLOODMOON_URSALUNA]: 7,
};

// TODO: Remove
{
  //setTimeout(() => {
    /*for (let tc of Object.keys(trainerConfigs)) {
      console.log(TrainerType[tc], !trainerConfigs[tc].speciesFilter ? 'all' : [...new Set(allSpecies.filter(s => s.generation <= 9).filter(trainerConfigs[tc].speciesFilter).map(s => {
        while (pokemonPrevolutions.hasOwnProperty(s.speciesId))
				  s = getPokemonSpecies(pokemonPrevolutions[s.speciesId]);
        return s;
      }))].map(s => s.name));
    }

    const speciesFilter = (species: PokemonSpecies) => !species.legendary && !species.pseudoLegendary && !species.mythical && species.baseTotal >= 540;
    console.log(!speciesFilter ? 'all' : [...new Set(allSpecies.filter(s => s.generation <= 9).filter(speciesFilter).map(s => {
      while (pokemonPrevolutions.hasOwnProperty(s.speciesId))
        s = getPokemonSpecies(pokemonPrevolutions[s.speciesId]);
      return s;
    }))].map(s => s.name));*/
  //}, 1000);
}