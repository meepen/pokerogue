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