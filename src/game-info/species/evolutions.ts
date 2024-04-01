import { Abilities } from "../abilities/abilities";
import { Move } from "../moves/moves";
import { Type } from "../types/types";
import { Gender } from "./gender";
import { Region } from "./region";
import { Species } from "./species";

export enum EvolutionType {
  Level,
  Trade,
  Stone,
  Happiness,
  MoveLearn,
  HeldItem,
  MoveUse,
  DefeatEnemies,
  PokemonGoCandies,
  Battle,
  Walk,
};

export enum StatCondition {
  Greater,
  Equal,
  Less,
};

export interface BaseEvolution {
  type: EvolutionType;
  target: Species;
  extraTarget?: Species;

  // TODO: Form Enum
  form?: string;

  ability?: Abilities;

  /**
   * If the region is set, it takes precedence over other conditions with the same evolution method.
   */
  region?: Region;

  /**
   * If gender is set, the evolution only occurs if the Pokémon is of the specified gender.
   */
  gender?: Gender;

  // TODO: Time of Day Enum
  timeOfDay?: 'Day' | 'Night' | 'Full Moon' | 'Dusk';
}

export interface EvolutionByLevel extends BaseEvolution {
  type: EvolutionType.Level;

  level?: number;
  partyMember?: Species;
  partyMemberType?: Type;

  // TODO: Weather Enum
  weather?: string;
  // TODO: Landmark Enum
  near?: string;
  /**
   * stat1 condition stat2
   */
  statCondition?: {
    // TODO: Stat Enum
    stat1: string;
    condition: StatCondition;
    stat2: string;
  }
}

export interface EvolutionByTrade extends BaseEvolution {
  type: EvolutionType.Trade;

  // TODO: Item Enum
  item?: string;

  tradeWith?: Species;
}

export interface EvolutionByStone extends BaseEvolution {
  type: EvolutionType.Stone;
  
  // TODO: Item Enum
  stone: string;
}

export interface EvolutionByHappiness extends BaseEvolution {
  type: EvolutionType.Happiness;
}

export interface EvolutionByMoveLearn extends BaseEvolution {
  type: EvolutionType.MoveLearn;

  move?: Move;
  moveType?: Type;

  needsHappiness?: boolean;
}

export interface EvolutionByHeldItem extends BaseEvolution {
  type: EvolutionType.HeldItem;

  // TODO: Item Enum
  item: string;
}

export interface EvolutionByMoveUse extends BaseEvolution {
  type: EvolutionType.MoveUse;

  move: Move;
  amount?: number;
  style?: 'Agile' | 'Strong';
}

interface EnemyToDefeat {
  species: Species;

  // TODO: Item Enum
  holding?: string;
}

export interface EvolutionByDefeatEnemies extends BaseEvolution {
  type: EvolutionType.DefeatEnemies;

  toDefeat: EnemyToDefeat[];
}

export interface EvolutionByPokemonGoCandies extends BaseEvolution {
  type: EvolutionType.PokemonGoCandies;

  amount: number;
}

export interface EvolutionByBattle extends BaseEvolution {
  type: EvolutionType.Battle;

  criticalHits?: number;
  recoilDamage?: number;
}

export interface EvolutionByWalking extends BaseEvolution {
  type: EvolutionType.Walk;

  steps: number;
}

export type Evolution = EvolutionByLevel | EvolutionByTrade | EvolutionByStone | EvolutionByHappiness | EvolutionByMoveLearn | EvolutionByHeldItem | EvolutionByMoveUse | EvolutionByBattle | EvolutionByDefeatEnemies | EvolutionByPokemonGoCandies | EvolutionByWalking;

export const evolutionMap = new Map<Species, Evolution[]>([
  // Generation I Pokémon
  [ Species.BULBASAUR, [ { type: EvolutionType.Level, target: Species.IVYSAUR, level: 16 } ] ],
  [ Species.IVYSAUR, [ { type: EvolutionType.Level, target: Species.VENUSAUR, level: 32 } ] ],
  [ Species.CHARMANDER, [ { type: EvolutionType.Level, target: Species.CHARMELEON, level: 16 } ] ],
  [ Species.CHARMELEON, [ { type: EvolutionType.Level, target: Species.CHARIZARD, level: 36 } ] ],
  [ Species.SQUIRTLE, [ { type: EvolutionType.Level, target: Species.WARTORTLE, level: 16 } ] ],
  [ Species.WARTORTLE, [ { type: EvolutionType.Level, target: Species.BLASTOISE, level: 36 } ] ],
  [ Species.CATERPIE, [ { type: EvolutionType.Level, target: Species.METAPOD, level: 7 } ] ],
  [ Species.METAPOD, [ { type: EvolutionType.Level, target: Species.BUTTERFREE, level: 10 } ] ],
  [ Species.WEEDLE, [ { type: EvolutionType.Level, target: Species.KAKUNA, level: 7 } ] ],
  [ Species.KAKUNA, [ { type: EvolutionType.Level, target: Species.BEEDRILL, level: 10 } ] ],
  [ Species.PIDGEY, [ { type: EvolutionType.Level, target: Species.PIDGEOTTO, level: 18 } ] ],
  [ Species.PIDGEOTTO, [ { type: EvolutionType.Level, target: Species.PIDGEOT, level: 36 } ] ],
  [ Species.RATTATA, [ { type: EvolutionType.Level, target: Species.RATICATE, level: 20 } ] ],
  [ Species.SPEAROW, [ { type: EvolutionType.Level, target: Species.FEAROW, level: 20 } ] ],
  [ Species.EKANS, [ { type: EvolutionType.Level, target: Species.ARBOK, level: 22 } ] ],
  [ Species.PIKACHU, [
    { type: EvolutionType.Stone, target: Species.RAICHU, stone: 'Thunder Stone' },
    { type: EvolutionType.Stone, target: Species.ALOLA_RAICHU, stone: 'Thunder Stone', region: Region.ALOLA },
  ] ],
  [ Species.SANDSHREW, [ { type: EvolutionType.Level, target: Species.SANDSLASH, level: 22 } ] ],
  [ Species.NIDORAN_F, [ { type: EvolutionType.Level, target: Species.NIDORINA, level: 16 } ] ],
  [ Species.NIDORINA, [ { type: EvolutionType.Stone, target: Species.NIDOQUEEN, stone: 'Moon Stone' } ] ],
  [ Species.NIDORAN_M, [ { type: EvolutionType.Level, target: Species.NIDORINO, level: 16 } ] ],
  [ Species.NIDORINO, [ { type: EvolutionType.Stone, target: Species.NIDOKING, stone: 'Moon Stone' } ] ],
  [ Species.CLEFAIRY, [ { type: EvolutionType.Stone, target: Species.CLEFABLE, stone: 'Moon Stone' } ] ],
  [ Species.VULPIX, [ { type: EvolutionType.Stone, target: Species.NINETALES, stone: 'Fire Stone' } ] ],
  [ Species.JIGGLYPUFF, [ { type: EvolutionType.Stone, target: Species.WIGGLYTUFF, stone: 'Moon Stone' } ] ],
  [ Species.ZUBAT, [ { type: EvolutionType.Level, target: Species.GOLBAT, level: 22 } ] ],
  [ Species.GOLBAT, [ { type: EvolutionType.Happiness, target: Species.CROBAT } ] ],
  [ Species.ODDISH, [ { type: EvolutionType.Level, target: Species.GLOOM, level: 21 } ] ],
  [ Species.GLOOM, [
    { type: EvolutionType.Stone, target: Species.VILEPLUME, stone: 'Leaf Stone' },
    { type: EvolutionType.Stone, target: Species.BELLOSSOM, stone: 'Sun Stone' },
  ] ],
  [ Species.PARAS, [ { type: EvolutionType.Level, target: Species.PARASECT, level: 24 } ] ],
  [ Species.VENONAT, [ { type: EvolutionType.Level, target: Species.VENOMOTH, level: 31 } ] ],
  [ Species.DIGLETT, [ { type: EvolutionType.Level, target: Species.DUGTRIO, level: 26 } ] ],
  [ Species.MEOWTH, [ { type: EvolutionType.Level, target: Species.PERSIAN, level: 28 } ] ],
  [ Species.ALOLA_MEOWTH, [ { type: EvolutionType.Happiness, target: Species.ALOLA_PERSIAN } ] ],
  [ Species.GALAR_MEOWTH, [ { type: EvolutionType.Level, target: Species.PERRSERKER, level: 28 } ] ],
  [ Species.PSYDUCK, [ { type: EvolutionType.Level, target: Species.GOLDUCK, level: 33 } ] ],
  [ Species.MANKEY, [ { type: EvolutionType.Level, target: Species.PRIMEAPE, level: 28 } ] ],
  [ Species.PRIMEAPE, [ { type: EvolutionType.MoveUse, target: Species.ANNIHILAPE, move: Move.RAGE_FIST, amount: 20 } ] ],
  [ Species.GROWLITHE, [ { type: EvolutionType.Stone, target: Species.ARCANINE, stone: 'Fire Stone' } ] ],
  [ Species.POLIWAG, [ { type: EvolutionType.Level, target: Species.POLIWHIRL, level: 25 } ] ],
  [ Species.POLIWHIRL, [
    { type: EvolutionType.Stone, target: Species.POLIWRATH, stone: 'Water Stone' },
    { type: EvolutionType.Trade, target: Species.POLITOED, item: 'King\'s Rock' },
  ] ],
  [ Species.ABRA, [ { type: EvolutionType.Level, target: Species.KADABRA, level: 16 } ] ],
  [ Species.KADABRA, [ { type: EvolutionType.Trade, target: Species.ALAKAZAM } ] ],
  [ Species.MACHOP, [ { type: EvolutionType.Level, target: Species.MACHOKE, level: 28 } ] ],
  [ Species.MACHOKE, [ { type: EvolutionType.Trade, target: Species.MACHAMP } ] ],
  [ Species.BELLSPROUT, [ { type: EvolutionType.Level, target: Species.WEEPINBELL, level: 21 } ] ],
  [ Species.WEEPINBELL, [ { type: EvolutionType.Stone, target: Species.VICTREEBEL, stone: 'Leaf Stone' } ] ],
  [ Species.TENTACOOL, [ { type: EvolutionType.Level, target: Species.TENTACRUEL, level: 30 } ] ],
  [ Species.GEODUDE, [ { type: EvolutionType.Level, target: Species.GRAVELER, level: 25 } ] ],
  [ Species.GRAVELER, [ { type: EvolutionType.Trade, target: Species.GOLEM } ] ],
  [ Species.PONYTA, [ { type: EvolutionType.Level, target: Species.RAPIDASH, level: 40 } ] ],
  [ Species.SLOWPOKE, [
    { type: EvolutionType.Level, target: Species.SLOWBRO, level: 37 },
    { type: EvolutionType.Stone, target: Species.SLOWKING, stone: 'King\'s Rock' },
  ] ],
  [ Species.MAGNEMITE, [ { type: EvolutionType.Level, target: Species.MAGNETON, level: 30 } ] ],
  [ Species.MAGNETON, [
    { type: EvolutionType.Stone, target: Species.MAGNEZONE, stone: 'Thunder Stone' },
    { type: EvolutionType.Level, target: Species.MAGNEZONE, near: 'Magnetic Field' },
  ] ],
  [ Species.GALAR_FARFETCHD, [ { type: EvolutionType.Battle, target: Species.SIRFETCHD, criticalHits: 3 } ] ],
  [ Species.DODUO, [ { type: EvolutionType.Level, target: Species.DODRIO, level: 31 } ] ],
  [ Species.SEEL, [ { type: EvolutionType.Level, target: Species.DEWGONG, level: 34 } ] ],
  [ Species.GRIMER, [ { type: EvolutionType.Level, target: Species.MUK, level: 38 } ] ],
  [ Species.SHELLDER, [ { type: EvolutionType.Stone, target: Species.CLOYSTER, stone: 'Water Stone' } ] ],
  [ Species.GASTLY, [ { type: EvolutionType.Level, target: Species.HAUNTER, level: 25 } ] ],
  [ Species.HAUNTER, [ { type: EvolutionType.Trade, target: Species.GENGAR } ] ],
  [ Species.ONIX, [ { type: EvolutionType.Trade, target: Species.STEELIX, item: 'Metal Coat' } ] ],
  [ Species.DROWZEE, [ { type: EvolutionType.Level, target: Species.HYPNO, level: 26 } ] ],
  [ Species.KRABBY, [ { type: EvolutionType.Level, target: Species.KINGLER, level: 28 } ] ],
  [ Species.VOLTORB, [ { type: EvolutionType.Level, target: Species.ELECTRODE, level: 30 } ] ],
  [ Species.EXEGGCUTE, [
    { type: EvolutionType.Stone, target: Species.EXEGGUTOR, stone: 'Leaf Stone' },
    { type: EvolutionType.Stone, target: Species.ALOLA_EXEGGUTOR, stone: 'Leaf Stone', region: Region.ALOLA },
  ] ],
  [ Species.CUBONE, [
    { type: EvolutionType.Level, target: Species.MAROWAK, level: 28 },
    { type: EvolutionType.Level, target: Species.ALOLA_MAROWAK, level: 28, region: Region.ALOLA },
  ] ],
  [ Species.LICKITUNG, [
    { type: EvolutionType.MoveLearn, target: Species.LICKILICKY, move: Move.ROLLOUT },
  ] ],
  [ Species.KOFFING, [
    { type: EvolutionType.Level, target: Species.WEEZING, level: 35 },
    { type: EvolutionType.Level, target: Species.GALAR_WEEZING, level: 35, region: Region.GALAR },
  ] ],
  [ Species.RHYHORN, [ { type: EvolutionType.Level, target: Species.RHYDON, level: 42 } ] ],
  [ Species.RHYDON, [ { type: EvolutionType.Trade, target: Species.RHYPERIOR, item: 'Protector' } ] ],
  [ Species.CHANSEY, [ { type: EvolutionType.Happiness, target: Species.BLISSEY } ] ],
  [ Species.TANGELA, [ { type: EvolutionType.MoveLearn, target: Species.TANGROWTH, move: Move.ANCIENT_POWER } ] ],
  [ Species.TANGELA, [ { type: EvolutionType.MoveLearn, target: Species.TANGROWTH, move: Move.ANCIENT_POWER } ] ],
  [ Species.HORSEA, [ { type: EvolutionType.Level, target: Species.SEADRA, level: 32 } ] ],
  [ Species.SEADRA, [ { type: EvolutionType.Trade, target: Species.KINGDRA, item: 'Dragon Scale' } ] ],
  [ Species.GOLDEEN, [ { type: EvolutionType.Level, target: Species.SEAKING, level: 33 } ] ],
  [ Species.STARYU, [ { type: EvolutionType.Stone, target: Species.STARMIE, stone: 'Water Stone' } ] ],
  [ Species.SCYTHER, [
    { type: EvolutionType.Trade, target: Species.SCIZOR, item: 'Metal Coat' },
    { type: EvolutionType.Stone, target: Species.KLEAVOR, stone: 'Black Augurite' },
  ] ],
  [ Species.ELECTABUZZ, [ { type: EvolutionType.Trade, target: Species.ELECTIVIRE, item: 'Electirizer' } ] ],
  [ Species.MAGMAR, [ { type: EvolutionType.Trade, target: Species.MAGMORTAR, item: 'Magmarizer' } ] ],
  [ Species.MAGIKARP, [ { type: EvolutionType.Level, target: Species.GYARADOS, level: 20 } ] ],
  [ Species.EEVEE, [
    { type: EvolutionType.Stone, target: Species.VAPOREON, stone: 'Water Stone' },
    { type: EvolutionType.Stone, target: Species.JOLTEON, stone: 'Thunder Stone' },
    { type: EvolutionType.Stone, target: Species.FLAREON, stone: 'Fire Stone' },
    { type: EvolutionType.Happiness, target: Species.ESPEON, timeOfDay: 'Day' },
    { type: EvolutionType.Happiness, target: Species.UMBREON, timeOfDay: 'Night' },
    { type: EvolutionType.Stone, target: Species.LEAFEON, stone: 'Leaf Stone' },
    { type: EvolutionType.Level, target: Species.LEAFEON, near: 'Mossy Rock' },
    { type: EvolutionType.Stone, target: Species.GLACEON, stone: 'Ice Stone' },
    { type: EvolutionType.Level, target: Species.GLACEON, near: 'Icy Rock' },
    { type: EvolutionType.MoveLearn, target: Species.SYLVEON, moveType: Type.FAIRY, needsHappiness: true },
  ] ],
  [ Species.PORYGON, [ { type: EvolutionType.Trade, target: Species.PORYGON2, item: 'Upgrade' } ] ],
  [ Species.OMANYTE, [ { type: EvolutionType.Level, target: Species.OMASTAR, level: 40 } ] ],
  [ Species.KABUTO, [ { type: EvolutionType.Level, target: Species.KABUTOPS, level: 40 } ] ],
  [ Species.DRATINI, [ { type: EvolutionType.Level, target: Species.DRAGONAIR, level: 30 } ] ],
  [ Species.DRAGONAIR, [ { type: EvolutionType.Level, target: Species.DRAGONITE, level: 55 } ] ],

  // Generation II Pokémon
  [ Species.CHIKORITA, [ { type: EvolutionType.Level, target: Species.BAYLEEF, level: 16 } ] ],
  [ Species.BAYLEEF, [ { type: EvolutionType.Level, target: Species.MEGANIUM, level: 32 } ] ],
  [ Species.CYNDAQUIL, [ { type: EvolutionType.Level, target: Species.QUILAVA, level: 14 } ] ],
  [ Species.QUILAVA, [ { type: EvolutionType.Level, target: Species.TYPHLOSION, level: 36 } ] ],
  [ Species.TOTODILE, [ { type: EvolutionType.Level, target: Species.CROCONAW, level: 18 } ] ],
  [ Species.CROCONAW, [ { type: EvolutionType.Level, target: Species.FERALIGATR, level: 30 } ] ],
  [ Species.SENTRET, [ { type: EvolutionType.Level, target: Species.FURRET, level: 15 } ] ],
  [ Species.HOOTHOOT, [ { type: EvolutionType.Level, target: Species.NOCTOWL, level: 20 } ] ],
  [ Species.LEDYBA, [ { type: EvolutionType.Level, target: Species.LEDIAN, level: 18 } ] ],
  [ Species.SPINARAK, [ { type: EvolutionType.Level, target: Species.ARIADOS, level: 22 } ] ],
  [ Species.CHINCHOU, [ { type: EvolutionType.Level, target: Species.LANTURN, level: 27 } ] ],
  [ Species.PICHU, [ { type: EvolutionType.Happiness, target: Species.PIKACHU } ] ],
  [ Species.CLEFFA, [ { type: EvolutionType.Happiness, target: Species.CLEFAIRY } ] ],
  [ Species.IGGLYBUFF, [ { type: EvolutionType.Happiness, target: Species.JIGGLYPUFF } ] ],
  [ Species.TOGEPI, [ { type: EvolutionType.Happiness, target: Species.TOGETIC } ] ],
  [ Species.TOGETIC, [ { type: EvolutionType.Stone, target: Species.TOGEKISS, stone: 'Shiny Stone' } ] ],
  [ Species.NATU, [ { type: EvolutionType.Level, target: Species.XATU, level: 25 } ] ],
  [ Species.MAREEP, [ { type: EvolutionType.Level, target: Species.FLAAFFY, level: 15 } ] ],
  [ Species.FLAAFFY, [ { type: EvolutionType.Level, target: Species.AMPHAROS, level: 30 } ] ],
  [ Species.MARILL, [ { type: EvolutionType.Level, target: Species.AZUMARILL, level: 18 } ] ],
  [ Species.HOPPIP, [ { type: EvolutionType.Level, target: Species.SKIPLOOM, level: 18 } ] ],
  [ Species.SKIPLOOM, [ { type: EvolutionType.Level, target: Species.JUMPLUFF, level: 27 } ] ],
  [ Species.AIPOM, [ { type: EvolutionType.MoveLearn, target: Species.AMBIPOM, move: Move.DOUBLE_HIT } ] ],
  [ Species.SUNKERN, [ { type: EvolutionType.Stone, target: Species.SUNFLORA, stone: 'Sun Stone' } ] ],
  [ Species.YANMA, [ { type: EvolutionType.MoveLearn, target: Species.YANMEGA, move: Move.ANCIENT_POWER } ] ],
  [ Species.WOOPER, [ { type: EvolutionType.Level, target: Species.QUAGSIRE, level: 20 } ] ],
  [ Species.PALDEA_WOOPER, [ { type: EvolutionType.Level, target: Species.CLODSIRE, level: 20 } ] ],
  [ Species.MURKROW, [ { type: EvolutionType.Stone, target: Species.HONCHKROW, stone: 'Dusk Stone' } ] ],
  [ Species.MISDREAVUS, [ { type: EvolutionType.Stone, target: Species.MISMAGIUS, stone: 'Dusk Stone' } ] ],
  [ Species.GIRAFARIG, [ { type: EvolutionType.MoveLearn, target: Species.FARIGIRAF, move: Move.TWIN_BEAM } ] ],
  [ Species.PINECO, [ { type: EvolutionType.Level, target: Species.FORRETRESS, level: 31 } ] ],
  [ Species.DUNSPARCE, [
    { type: EvolutionType.MoveLearn, target: Species.DUDUNSPARCE, move: Move.HYPER_DRILL, form: 'Two-Segment' },
    { type: EvolutionType.MoveLearn, target: Species.DUDUNSPARCE, move: Move.HYPER_DRILL, form: 'Three-Segment' },
  ]],
  [ Species.GLIGAR, [ { type: EvolutionType.Stone, target: Species.GLISCOR, stone: 'Razor Fang', timeOfDay: 'Night' } ] ],
  [ Species.SNUBBULL, [ { type: EvolutionType.Level, target: Species.GRANBULL, level: 23 } ] ],
  [ Species.HISUI_QWILFISH, [ { type: EvolutionType.MoveUse, target: Species.OVERQWIL, move: Move.BARB_BARRAGE, amount: 20, style: 'Strong' } ] ],
  [ Species.SNEASEL, [ { type: EvolutionType.HeldItem, target: Species.WEAVILE, item: 'Razor Claw', timeOfDay: 'Night' } ] ],
  [ Species.HISUI_SNEASEL, [ { type: EvolutionType.HeldItem, target: Species.SNEASLER, item: 'Razor Claw', timeOfDay: 'Day' } ] ],
  [ Species.TEDDIURSA, [ { type: EvolutionType.Level, target: Species.URSARING, level: 30 } ] ],
  [ Species.URSARING, [ { type: EvolutionType.Stone, target: Species.URSALUNA, stone: 'Peat Block', timeOfDay: 'Full Moon' } ] ],
  [ Species.SLUGMA, [ { type: EvolutionType.Level, target: Species.MAGCARGO, level: 38 } ] ],
  [ Species.SWINUB, [ { type: EvolutionType.Level, target: Species.PILOSWINE, level: 33 } ] ],
  [ Species.PILOSWINE, [ { type: EvolutionType.MoveLearn, target: Species.MAMOSWINE, move: Move.ANCIENT_POWER } ] ],
  [ Species.GALAR_CORSOLA, [ { type: EvolutionType.Level, target: Species.CURSOLA, level: 38 } ] ],
  [ Species.REMORAID, [ { type: EvolutionType.Level, target: Species.OCTILLERY, level: 25 } ] ],
  [ Species.HOUNDOUR, [ { type: EvolutionType.Level, target: Species.HOUNDOOM, level: 24 } ] ],
  [ Species.PHANPY, [ { type: EvolutionType.Level, target: Species.DONPHAN, level: 25 } ] ],
  [ Species.PORYGON2, [ { type: EvolutionType.Trade, target: Species.PORYGON_Z, item: 'Dubious Disc' } ] ],
  [ Species.STANTLER, [ { type: EvolutionType.MoveUse, target: Species.WYRDEER, move: Move.PSYSHIELD_BASH, amount: 20, style: 'Agile' } ] ],
  [ Species.TYROGUE, [
    { type: EvolutionType.Level, target: Species.HITMONLEE, level: 20, statCondition: { stat1: 'Attack', condition: StatCondition.Greater, stat2: 'Defense' } },
    { type: EvolutionType.Level, target: Species.HITMONCHAN, level: 20, statCondition: { stat1: 'Defense', condition: StatCondition.Greater, stat2: 'Attack' } },
    { type: EvolutionType.Level, target: Species.HITMONTOP, level: 20, statCondition: { stat1: 'Attack', condition: StatCondition.Equal, stat2: 'Defense' } },
  ] ],
  [ Species.SMOOCHUM, [ { type: EvolutionType.Level, target: Species.JYNX, level: 30 } ] ],
  [ Species.ELEKID, [ { type: EvolutionType.Level, target: Species.ELECTABUZZ, level: 30 } ] ],
  [ Species.MAGBY, [ { type: EvolutionType.Level, target: Species.MAGMAR, level: 30 } ] ],
  [ Species.LARVITAR, [ { type: EvolutionType.Level, target: Species.PUPITAR, level: 30 } ] ],
  [ Species.PUPITAR, [ { type: EvolutionType.Level, target: Species.TYRANITAR, level: 55 } ] ],

  // Generation III Pokémon
  [ Species.TREECKO, [ { type: EvolutionType.Level, target: Species.GROVYLE, level: 16 } ] ],
  [ Species.GROVYLE, [ { type: EvolutionType.Level, target: Species.SCEPTILE, level: 36 } ] ],
  [ Species.TORCHIC, [ { type: EvolutionType.Level, target: Species.COMBUSKEN, level: 16 } ] ],
  [ Species.COMBUSKEN, [ { type: EvolutionType.Level, target: Species.BLAZIKEN, level: 36 } ] ],
  [ Species.MUDKIP, [ { type: EvolutionType.Level, target: Species.MARSHTOMP, level: 16 } ] ],
  [ Species.MARSHTOMP, [ { type: EvolutionType.Level, target: Species.SWAMPERT, level: 36 } ] ],
  [ Species.POOCHYENA, [ { type: EvolutionType.Level, target: Species.MIGHTYENA, level: 18 } ] ],
  [ Species.ZIGZAGOON, [ { type: EvolutionType.Level, target: Species.LINOONE, level: 20 } ] ],
  [ Species.GALAR_ZIGZAGOON, [ { type: EvolutionType.Level, target: Species.GALAR_LINOONE, level: 20 } ] ],
  [ Species.GALAR_LINOONE, [ { type: EvolutionType.Level, target: Species.OBSTAGOON, level: 35, timeOfDay: 'Night' } ] ],
  [ Species.WURMPLE, [
    { type: EvolutionType.Level, target: Species.SILCOON, level: 7 },
    { type: EvolutionType.Level, target: Species.CASCOON, level: 7 },
  ] ],
  [ Species.SILCOON, [ { type: EvolutionType.Level, target: Species.BEAUTIFLY, level: 10 } ] ],
  [ Species.CASCOON, [ { type: EvolutionType.Level, target: Species.DUSTOX, level: 10 } ] ],
  [ Species.LOTAD, [ { type: EvolutionType.Level, target: Species.LOMBRE, level: 14 } ] ],
  [ Species.LOMBRE, [ { type: EvolutionType.Stone, target: Species.LUDICOLO, stone: 'Water Stone' } ] ],
  [ Species.SEEDOT, [ { type: EvolutionType.Level, target: Species.NUZLEAF, level: 14 } ] ],
  [ Species.NUZLEAF, [ { type: EvolutionType.Stone, target: Species.SHIFTRY, stone: 'Leaf Stone' } ] ],
  [ Species.TAILLOW, [ { type: EvolutionType.Level, target: Species.SWELLOW, level: 22 } ] ],
  [ Species.WINGULL, [ { type: EvolutionType.Level, target: Species.PELIPPER, level: 25 } ] ],
  [ Species.RALTS, [ { type: EvolutionType.Level, target: Species.KIRLIA, level: 20 } ] ],
  [ Species.KIRLIA, [
    { type: EvolutionType.Level, target: Species.GARDEVOIR, level: 30 },
    { type: EvolutionType.Stone, target: Species.GALLADE, stone: 'Dawn Stone', gender: Gender.Male },
  ] ],
  [ Species.SURSKIT, [ { type: EvolutionType.Level, target: Species.MASQUERAIN, level: 22 } ] ],
  [ Species.SHROOMISH, [ { type: EvolutionType.Level, target: Species.BRELOOM, level: 23 } ] ],
  [ Species.SLAKOTH, [ { type: EvolutionType.Level, target: Species.VIGOROTH, level: 18 } ] ],
  [ Species.VIGOROTH, [ { type: EvolutionType.Level, target: Species.SLAKING, level: 36 } ] ],
  [ Species.NINCADA, [ { type: EvolutionType.Level, target: Species.NINJASK, level: 20, extraTarget: Species.SHEDINJA } ] ],
  [ Species.WHISMUR, [ { type: EvolutionType.Level, target: Species.LOUDRED, level: 20 } ] ],
  [ Species.LOUDRED, [ { type: EvolutionType.Level, target: Species.EXPLOUD, level: 40 } ] ],
  [ Species.MAKUHITA, [ { type: EvolutionType.Level, target: Species.HARIYAMA, level: 24 } ] ],
  [ Species.AZURILL, [ { type: EvolutionType.Happiness, target: Species.MARILL } ] ],
  [ Species.NOSEPASS, [ { type: EvolutionType.Level, target: Species.PROBOPASS, near: 'Magnetic Field' } ] ],
  [ Species.SKITTY, [ { type: EvolutionType.Stone, target: Species.DELCATTY, stone: 'Moon Stone' } ] ],
  [ Species.ARON, [ { type: EvolutionType.Level, target: Species.LAIRON, level: 32 } ] ],
  [ Species.LAIRON, [ { type: EvolutionType.Level, target: Species.AGGRON, level: 42 } ] ],
  [ Species.MEDITITE, [ { type: EvolutionType.Level, target: Species.MEDICHAM, level: 37 } ] ],
  [ Species.ELECTRIKE, [ { type: EvolutionType.Level, target: Species.MANECTRIC, level: 26 } ] ],
  [ Species.ROSELIA, [ { type: EvolutionType.Stone, target: Species.ROSERADE, stone: 'Shiny Stone' } ] ],
  [ Species.GULPIN, [ { type: EvolutionType.Level, target: Species.SWALOT, level: 26 } ] ],
  [ Species.CARVANHA, [ { type: EvolutionType.Level, target: Species.SHARPEDO, level: 30 } ] ],
  [ Species.WAILMER, [ { type: EvolutionType.Level, target: Species.WAILORD, level: 40 } ] ],
  [ Species.NUMEL, [ { type: EvolutionType.Level, target: Species.CAMERUPT, level: 33 } ] ],
  [ Species.SPOINK, [ { type: EvolutionType.Level, target: Species.GRUMPIG, level: 32 } ] ],
  [ Species.TRAPINCH, [ { type: EvolutionType.Level, target: Species.VIBRAVA, level: 35 } ] ],
  [ Species.VIBRAVA, [ { type: EvolutionType.Level, target: Species.FLYGON, level: 45 } ] ],
  [ Species.CACNEA, [ { type: EvolutionType.Level, target: Species.CACTURNE, level: 32 } ] ],
  [ Species.SWABLU, [ { type: EvolutionType.Level, target: Species.ALTARIA, level: 35 } ] ],
  [ Species.BARBOACH, [ { type: EvolutionType.Level, target: Species.WHISCASH, level: 30 } ] ],
  [ Species.CORPHISH, [ { type: EvolutionType.Level, target: Species.CRAWDAUNT, level: 30 } ] ],
  [ Species.BALTOY, [ { type: EvolutionType.Level, target: Species.CLAYDOL, level: 36 } ] ],
  [ Species.LILEEP, [ { type: EvolutionType.Level, target: Species.CRADILY, level: 40 } ] ],
  [ Species.ANORITH, [ { type: EvolutionType.Level, target: Species.ARMALDO, level: 40 } ] ],
  [ Species.FEEBAS, [ { type: EvolutionType.Trade, target: Species.MILOTIC, item: 'Prism Scale' } ] ],
  [ Species.SHUPPET, [ { type: EvolutionType.Level, target: Species.BANETTE, level: 37 } ] ],
  [ Species.DUSKULL, [ { type: EvolutionType.Level, target: Species.DUSCLOPS, level: 37 } ] ],
  [ Species.DUSCLOPS, [ { type: EvolutionType.Trade, target: Species.DUSKNOIR, item: 'Reaper Cloth' } ] ],
  [ Species.WYNAUT, [ { type: EvolutionType.Level, target: Species.WOBBUFFET, level: 15 } ] ],
  [ Species.SNORUNT, [
    { type: EvolutionType.Level, target: Species.GLALIE, level: 42 },
    { type: EvolutionType.Stone, target: Species.FROSLASS, stone: 'Dawn Stone', gender: Gender.Female },
  ] ],
  [ Species.SPHEAL, [ { type: EvolutionType.Level, target: Species.SEALEO, level: 32 } ] ],
  [ Species.SEALEO, [ { type: EvolutionType.Level, target: Species.WALREIN, level: 44 } ] ],
  [ Species.CLAMPERL, [
    { type: EvolutionType.Trade, target: Species.HUNTAIL, item: 'Deep Sea Tooth' },
    { type: EvolutionType.Trade, target: Species.GOREBYSS, item: 'Deep Sea Scale' },
  ] ],
  [ Species.BAGON, [ { type: EvolutionType.Level, target: Species.SHELGON, level: 30 } ] ],
  [ Species.SHELGON, [ { type: EvolutionType.Level, target: Species.SALAMENCE, level: 50 } ] ],
  [ Species.BELDUM, [ { type: EvolutionType.Level, target: Species.METANG, level: 20 } ] ],
  [ Species.METANG, [ { type: EvolutionType.Level, target: Species.METAGROSS, level: 45 } ] ],

  // Generation IV Pokémon
  [ Species.TURTWIG, [ { type: EvolutionType.Level, target: Species.GROTLE, level: 18 } ] ],
  [ Species.GROTLE, [ { type: EvolutionType.Level, target: Species.TORTERRA, level: 32 } ] ],
  [ Species.CHIMCHAR, [ { type: EvolutionType.Level, target: Species.MONFERNO, level: 14 } ] ],
  [ Species.MONFERNO, [ { type: EvolutionType.Level, target: Species.INFERNAPE, level: 36 } ] ],
  [ Species.PIPLUP, [ { type: EvolutionType.Level, target: Species.PRINPLUP, level: 16 } ] ],
  [ Species.PRINPLUP, [ { type: EvolutionType.Level, target: Species.EMPOLEON, level: 36 } ] ],
  [ Species.STARLY, [ { type: EvolutionType.Level, target: Species.STARAVIA, level: 14 } ] ],
  [ Species.STARAVIA, [ { type: EvolutionType.Level, target: Species.STARAPTOR, level: 34 } ] ],
  [ Species.BIDOOF, [ { type: EvolutionType.Level, target: Species.BIBAREL, level: 15 } ] ],
  [ Species.KRICKETOT, [ { type: EvolutionType.Level, target: Species.KRICKETUNE, level: 10 } ] ],
  [ Species.SHINX, [ { type: EvolutionType.Level, target: Species.LUXIO, level: 15 } ] ],
  [ Species.LUXIO, [ { type: EvolutionType.Level, target: Species.LUXRAY, level: 30 } ] ],
  [ Species.BUDEW, [ { type: EvolutionType.Happiness, target: Species.ROSELIA, timeOfDay: 'Day' } ] ],
  [ Species.CRANIDOS, [ { type: EvolutionType.Level, target: Species.RAMPARDOS, level: 30 } ] ],
  [ Species.SHIELDON, [ { type: EvolutionType.Level, target: Species.BASTIODON, level: 30 } ] ],
  [ Species.BURMY, [
    { type: EvolutionType.Level, target: Species.WORMADAM, level: 20, gender: Gender.Female, near: 'Building'  },
    { type: EvolutionType.Level, target: Species.WORMADAM, level: 20, gender: Gender.Female, near: 'Cave' },
    { type: EvolutionType.Level, target: Species.WORMADAM, level: 20, gender: Gender.Female, near: 'Grass' },
    { type: EvolutionType.Level, target: Species.MOTHIM, level: 20, gender: Gender.Male },
  ] ],
  [ Species.COMBEE, [ { type: EvolutionType.Level, target: Species.VESPIQUEN, level: 21, gender: Gender.Female } ] ],
  [ Species.BUIZEL, [ { type: EvolutionType.Level, target: Species.FLOATZEL, level: 26 } ] ],
  [ Species.CHERUBI, [ { type: EvolutionType.Level, target: Species.CHERRIM, level: 25 } ] ],
  [ Species.SHELLOS, [ { type: EvolutionType.Level, target: Species.GASTRODON, level: 30 } ] ],
  [ Species.DRIFLOON, [ { type: EvolutionType.Level, target: Species.DRIFBLIM, level: 28 } ] ],
  [ Species.BUNEARY, [ { type: EvolutionType.Happiness, target: Species.LOPUNNY } ] ],
  [ Species.GLAMEOW, [ { type: EvolutionType.Level, target: Species.PURUGLY, level: 38 } ] ],
  [ Species.CHINGLING, [ { type: EvolutionType.Happiness, target: Species.CHIMECHO, timeOfDay: 'Night' } ] ],
  [ Species.STUNKY, [ { type: EvolutionType.Level, target: Species.SKUNTANK, level: 34 } ] ],
  [ Species.BRONZOR, [ { type: EvolutionType.Level, target: Species.BRONZONG, level: 33 } ] ],
  [ Species.BONSLY, [ { type: EvolutionType.MoveLearn, target: Species.SUDOWOODO, move: Move.MIMIC } ] ],
  [ Species.MIME_JR, [
    { type: EvolutionType.MoveLearn, target: Species.MR_MIME, move: Move.MIMIC },
    { type: EvolutionType.MoveLearn, target: Species.GALAR_MR_MIME, move: Move.MIMIC },
  ] ],
  // shouldn't go here but i'm doing it now so i don't forget it
  [ Species.GALAR_MR_MIME, [ { type: EvolutionType.Level, target: Species.MR_RIME, level: 42 } ] ],
  [ Species.HAPPINY, [ { type: EvolutionType.HeldItem, target: Species.CHANSEY, item: 'Oval Stone', timeOfDay: 'Day' } ] ],
  [ Species.GIBLE, [ { type: EvolutionType.Level, target: Species.GABITE, level: 24 } ] ],
  [ Species.GABITE, [ { type: EvolutionType.Level, target: Species.GARCHOMP, level: 48 } ] ],
  [ Species.MUNCHLAX, [ { type: EvolutionType.Happiness, target: Species.SNORLAX } ] ],
  [ Species.RIOLU, [ { type: EvolutionType.Happiness, target: Species.LUCARIO, timeOfDay: 'Day' } ] ],
  [ Species.HIPPOPOTAS, [ { type: EvolutionType.Level, target: Species.HIPPOWDON, level: 34 } ] ],
  [ Species.SKORUPI, [ { type: EvolutionType.Level, target: Species.DRAPION, level: 40 } ] ],
  [ Species.CROAGUNK, [ { type: EvolutionType.Level, target: Species.TOXICROAK, level: 37 } ] ],
  [ Species.FINNEON, [ { type: EvolutionType.Level, target: Species.LUMINEON, level: 31 } ] ],
  [ Species.MANTYKE, [ { type: EvolutionType.Level, target: Species.MANTINE, partyMember: Species.REMORAID } ] ],
  [ Species.SNOVER, [ { type: EvolutionType.Level, target: Species.ABOMASNOW, level: 40 } ] ],

  // Generation V Pokémon
  [ Species.SNIVY, [ { type: EvolutionType.Level, target: Species.SERVINE, level: 17 } ] ],
  [ Species.SERVINE, [ { type: EvolutionType.Level, target: Species.SERPERIOR, level: 36 } ] ],
  [ Species.TEPIG, [ { type: EvolutionType.Level, target: Species.PIGNITE, level: 17 } ] ],
  [ Species.PIGNITE, [ { type: EvolutionType.Level, target: Species.EMBOAR, level: 36 } ] ],
  [ Species.OSHAWOTT, [ { type: EvolutionType.Level, target: Species.DEWOTT, level: 17 } ] ],
  [ Species.DEWOTT, [
    { type: EvolutionType.Level, target: Species.SAMUROTT, level: 36 },
    { type: EvolutionType.Level, target: Species.SAMUROTT, level: 36, region: Region.HISUI},
  ] ],
  [ Species.PATRAT, [ { type: EvolutionType.Level, target: Species.WATCHOG, level: 20 } ] ],
  [ Species.LILLIPUP, [ { type: EvolutionType.Level, target: Species.HERDIER, level: 16 } ] ],
  [ Species.HERDIER, [ { type: EvolutionType.Level, target: Species.STOUTLAND, level: 32 } ] ],
  [ Species.PURRLOIN, [ { type: EvolutionType.Level, target: Species.LIEPARD, level: 20 } ] ],
  [ Species.PANSAGE, [ { type: EvolutionType.Stone, target: Species.SIMISAGE, stone: 'Leaf Stone' } ] ],
  [ Species.PANSEAR, [ { type: EvolutionType.Stone, target: Species.SIMISEAR, stone: 'Fire Stone' } ] ],
  [ Species.PANPOUR, [ { type: EvolutionType.Stone, target: Species.SIMIPOUR, stone: 'Water Stone' } ] ],
  [ Species.MUNNA, [ { type: EvolutionType.Stone, target: Species.MUSHARNA, stone: 'Moon Stone' } ] ],
  [ Species.PIDOVE, [ { type: EvolutionType.Level, target: Species.TRANQUILL, level: 21 } ] ],
  [ Species.TRANQUILL, [ { type: EvolutionType.Level, target: Species.UNFEZANT, level: 32 } ] ],
  [ Species.BLITZLE, [ { type: EvolutionType.Level, target: Species.ZEBSTRIKA, level: 27 } ] ],
  [ Species.ROGGENROLA, [ { type: EvolutionType.Level, target: Species.BOLDORE, level: 25 } ] ],
  [ Species.BOLDORE, [ { type: EvolutionType.Trade, target: Species.GIGALITH } ] ],
  [ Species.WOOBAT, [ { type: EvolutionType.Happiness, target: Species.SWOOBAT } ] ],
  [ Species.DRILBUR, [ { type: EvolutionType.Level, target: Species.EXCADRILL, level: 31 } ] ],
  [ Species.TIMBURR, [ { type: EvolutionType.Level, target: Species.GURDURR, level: 25 } ] ],
  [ Species.GURDURR, [ { type: EvolutionType.Trade, target: Species.CONKELDURR } ] ],
  [ Species.TYMPOLE, [ { type: EvolutionType.Level, target: Species.PALPITOAD, level: 25 } ] ],
  [ Species.PALPITOAD, [ { type: EvolutionType.Level, target: Species.SEISMITOAD, level: 36 } ] ],
  [ Species.SEWADDLE, [ { type: EvolutionType.Level, target: Species.SWADLOON, level: 20 } ] ],
  [ Species.SWADLOON, [ { type: EvolutionType.Happiness, target: Species.LEAVANNY } ] ],
  [ Species.VENIPEDE, [ { type: EvolutionType.Level, target: Species.WHIRLIPEDE, level: 22 } ] ],
  [ Species.WHIRLIPEDE, [ { type: EvolutionType.Level, target: Species.SCOLIPEDE, level: 30 } ] ],
  [ Species.COTTONEE, [ { type: EvolutionType.Stone, target: Species.WHIMSICOTT, stone: 'Sun Stone' } ] ],
  [ Species.PETILIL, [
    { type: EvolutionType.Stone, target: Species.LILLIGANT, stone: 'Sun Stone' },
    { type: EvolutionType.Stone, target: Species.LILLIGANT, stone: 'Sun Stone', region: Region.HISUI },
  ] ],
  [ Species.BASCULIN, [ { type: EvolutionType.Battle, target: Species.BASCULEGION, recoilDamage: 294 }, ] ],
  [ Species.SANDILE, [ { type: EvolutionType.Level, target: Species.KROKOROK, level: 29 } ] ],
  [ Species.KROKOROK, [ { type: EvolutionType.Level, target: Species.KROOKODILE, level: 40 } ] ],
  [ Species.DARUMAKA, [ { type: EvolutionType.Level, target: Species.DARMANITAN, level: 35 } ] ],
  [ Species.DWEBBLE, [ { type: EvolutionType.Level, target: Species.CRUSTLE, level: 34 } ] ],
  [ Species.SCRAGGY, [ { type: EvolutionType.Level, target: Species.SCRAFTY, level: 39 } ] ],
  [ Species.YAMASK, [ { type: EvolutionType.Level, target: Species.COFAGRIGUS, level: 34 } ] ],
  [ Species.GALAR_YAMASK, [ { type: EvolutionType.Level, target: Species.RUNERIGUS, near: 'Dusty Bowl' } ] ],
  [ Species.TIRTOUGA, [ { type: EvolutionType.Level, target: Species.CARRACOSTA, level: 37 } ] ],
  [ Species.ARCHEN, [ { type: EvolutionType.Level, target: Species.ARCHEOPS, level: 37 } ] ],
  [ Species.TRUBBISH, [ { type: EvolutionType.Level, target: Species.GARBODOR, level: 36 } ] ],
  [ Species.ZORUA, [ { type: EvolutionType.Level, target: Species.ZOROARK, level: 30 } ] ],
  [ Species.MINCCINO, [ { type: EvolutionType.Stone, target: Species.CINCCINO, stone: 'Shiny Stone' } ] ],
  [ Species.GOTHITA, [ { type: EvolutionType.Level, target: Species.GOTHORITA, level: 32 } ] ],
  [ Species.GOTHORITA, [ { type: EvolutionType.Level, target: Species.GOTHITELLE, level: 41 } ] ],
  [ Species.SOLOSIS, [ { type: EvolutionType.Level, target: Species.DUOSION, level: 32 } ] ],
  [ Species.DUOSION, [ { type: EvolutionType.Level, target: Species.REUNICLUS, level: 41 } ] ],
  [ Species.DUCKLETT, [ { type: EvolutionType.Level, target: Species.SWANNA, level: 35 } ] ],
  [ Species.VANILLITE, [ { type: EvolutionType.Level, target: Species.VANILLISH, level: 35 } ] ],
  [ Species.VANILLISH, [ { type: EvolutionType.Level, target: Species.VANILLUXE, level: 47 } ] ],
  [ Species.DEERLING, [ { type: EvolutionType.Level, target: Species.SAWSBUCK, level: 34 } ] ],
  [ Species.KARRABLAST, [ { type: EvolutionType.Trade, target: Species.ESCAVALIER, tradeWith: Species.SHELMET } ] ],
  [ Species.FOONGUS, [ { type: EvolutionType.Level, target: Species.AMOONGUSS, level: 39 } ] ],
  [ Species.FRILLISH, [ { type: EvolutionType.Level, target: Species.JELLICENT, level: 40 } ] ],
  [ Species.JOLTIK, [ { type: EvolutionType.Level, target: Species.GALVANTULA, level: 36 } ] ],
  [ Species.FERROSEED, [ { type: EvolutionType.Level, target: Species.FERROTHORN, level: 40 } ] ],
  [ Species.KLINK, [ { type: EvolutionType.Level, target: Species.KLANG, level: 38 } ] ],
  [ Species.KLANG, [ { type: EvolutionType.Level, target: Species.KLINKLANG, level: 49 } ] ],
  [ Species.TYNAMO, [ { type: EvolutionType.Level, target: Species.EELEKTRIK, level: 39 } ] ],
  [ Species.EELEKTRIK, [ { type: EvolutionType.Stone, target: Species.EELEKTROSS, stone: 'Thunder Stone' } ] ],
  [ Species.ELGYEM, [ { type: EvolutionType.Level, target: Species.BEHEEYEM, level: 42 } ] ],
  [ Species.LITWICK, [ { type: EvolutionType.Level, target: Species.LAMPENT, level: 41 } ] ],
  [ Species.LAMPENT, [ { type: EvolutionType.Stone, target: Species.CHANDELURE, stone: 'Dusk Stone' } ] ],
  [ Species.AXEW, [ { type: EvolutionType.Level, target: Species.FRAXURE, level: 38 } ] ],
  [ Species.FRAXURE, [ { type: EvolutionType.Level, target: Species.HAXORUS, level: 48 } ] ],
  [ Species.CUBCHOO, [ { type: EvolutionType.Level, target: Species.BEARTIC, level: 37 } ] ],
  [ Species.SHELMET, [ { type: EvolutionType.Trade, target: Species.ACCELGOR, tradeWith: Species.KARRABLAST } ] ],
  [ Species.MIENFOO, [ { type: EvolutionType.Level, target: Species.MIENSHAO, level: 50 } ] ],
  [ Species.GOLETT, [ { type: EvolutionType.Level, target: Species.GOLURK, level: 43 } ] ],
  [ Species.PAWNIARD, [ { type: EvolutionType.Level, target: Species.BISHARP, level: 52 } ] ],
  [ Species.BISHARP, [ { type: EvolutionType.DefeatEnemies, target: Species.KINGAMBIT, toDefeat: [
    { species:Species.BISHARP, holding: 'Leader\'s Crest' },
    { species:Species.BISHARP, holding: 'Leader\'s Crest' },
    { species:Species.BISHARP, holding: 'Leader\'s Crest' },    
  ] } ] ],
  [ Species.RUFFLET, [
    { type: EvolutionType.Level, target: Species.BRAVIARY, level: 54 },
    { type: EvolutionType.Level, target: Species.HISUI_BRAVIARY, level: 54, region: Region.HISUI },
  ] ],
  [ Species.VULLABY, [ { type: EvolutionType.Level, target: Species.MANDIBUZZ, level: 54 } ] ],
  [ Species.DEINO, [ { type: EvolutionType.Level, target: Species.ZWEILOUS, level: 50 } ] ],
  [ Species.ZWEILOUS, [ { type: EvolutionType.Level, target: Species.HYDREIGON, level: 64 } ] ],
  [ Species.LARVESTA, [ { type: EvolutionType.Level, target: Species.VOLCARONA, level: 59 } ] ],

  // Generation VI Pokémon
  [ Species.CHESPIN, [ { type: EvolutionType.Level, target: Species.QUILLADIN, level: 16 } ] ],
  [ Species.QUILLADIN, [ { type: EvolutionType.Level, target: Species.CHESNAUGHT, level: 36 } ] ],
  [ Species.FENNEKIN, [ { type: EvolutionType.Level, target: Species.BRAIXEN, level: 16 } ] ],
  [ Species.BRAIXEN, [ { type: EvolutionType.Level, target: Species.DELPHOX, level: 36 } ] ],
  [ Species.FROAKIE, [ { type: EvolutionType.Level, target: Species.FROGADIER, level: 16 } ] ],
  [ Species.FROGADIER, [ { type: EvolutionType.Level, target: Species.GRENINJA, level: 36 } ] ],
  [ Species.BUNNELBY, [ { type: EvolutionType.Level, target: Species.DIGGERSBY, level: 20 } ] ],
  [ Species.FLETCHLING, [ { type: EvolutionType.Level, target: Species.FLETCHINDER, level: 17 } ] ],
  [ Species.FLETCHINDER, [ { type: EvolutionType.Level, target: Species.TALONFLAME, level: 35 } ] ],
  [ Species.SCATTERBUG, [ { type: EvolutionType.Level, target: Species.SPEWPA, level: 9 } ] ],
  [ Species.SPEWPA, [ { type: EvolutionType.Level, target: Species.VIVILLON, level: 12 } ] ],
  [ Species.LITLEO, [ { type: EvolutionType.Level, target: Species.PYROAR, level: 35 } ] ],
  [ Species.FLABEBE, [ { type: EvolutionType.Level, target: Species.FLOETTE, level: 19 } ] ],
  [ Species.FLOETTE, [ { type: EvolutionType.Stone, target: Species.FLORGES, stone: 'Shiny Stone' } ] ],
  [ Species.SKIDDO, [ { type: EvolutionType.Level, target: Species.GOGOAT, level: 32 } ] ],
  [ Species.PANCHAM, [ { type: EvolutionType.Level, target: Species.PANGORO, partyMemberType: Type.DARK } ] ],
  [ Species.ESPURR, [ { type: EvolutionType.Level, target: Species.MEOWSTIC, level: 25 } ] ],
  [ Species.HONEDGE, [ { type: EvolutionType.Level, target: Species.DOUBLADE, level: 35 } ] ],
  [ Species.DOUBLADE, [ { type: EvolutionType.Stone, target: Species.AEGISLASH, stone: 'Dusk Stone' } ] ],
  [ Species.SPRITZEE, [ { type: EvolutionType.Trade, target: Species.AROMATISSE, item: 'Sachet' } ] ],
  [ Species.SWIRLIX, [ { type: EvolutionType.Trade, target: Species.SLURPUFF, item: 'Whipped Dream' } ] ],
  [ Species.INKAY, [ { type: EvolutionType.Level, target: Species.MALAMAR, level: 30 } ] ], // TODO: upside down?
  [ Species.BINACLE, [ { type: EvolutionType.Level, target: Species.BARBARACLE, level: 39 } ] ],
  [ Species.SKRELP, [ { type: EvolutionType.Level, target: Species.DRAGALGE, level: 48 } ] ],
  [ Species.CLAUNCHER, [ { type: EvolutionType.Level, target: Species.CLAWITZER, level: 37 } ] ],
  [ Species.HELIOPTILE, [ { type: EvolutionType.Stone, target: Species.HELIOLISK, stone: 'Sun Stone' } ] ],
  [ Species.TYRUNT, [ { type: EvolutionType.Level, target: Species.TYRANTRUM, level: 39, timeOfDay: 'Day' } ] ],
  [ Species.AMAURA, [ { type: EvolutionType.Level, target: Species.AURORUS, level: 39, timeOfDay: 'Night' } ] ],
  [ Species.GOOMY, [
    { type: EvolutionType.Level, target: Species.SLIGGOO, level: 40 },
    { type: EvolutionType.Level, target: Species.HISUI_SLIGGOO, level: 40, region: Region.HISUI },
  ] ],
  [ Species.SLIGGOO, [ { type: EvolutionType.Level, target: Species.GOODRA, level: 50, weather: 'Rain' } ] ],
  [ Species.HISUI_SLIGGOO, [ { type: EvolutionType.Level, target: Species.HISUI_GOODRA, level: 50, weather: 'Rain' } ] ],
  [ Species.PHANTUMP, [ { type: EvolutionType.Trade, target: Species.TREVENANT } ] ],
  [ Species.PUMPKABOO, [ { type: EvolutionType.Trade, target: Species.GOURGEIST } ] ],
  [ Species.BERGMITE, [
    { type: EvolutionType.Level, target: Species.AVALUGG, level: 37 },
    { type: EvolutionType.Level, target: Species.HISUI_AVALUGG, level: 37, region: Region.HISUI },
  ] ],
  [ Species.NOIBAT, [ { type: EvolutionType.Level, target: Species.NOIVERN, level: 48 } ] ],

  // Generation VII Pokémon
  [ Species.ROWLET, [ { type: EvolutionType.Level, target: Species.DARTRIX, level: 17 } ] ],
  [ Species.DARTRIX, [
    { type: EvolutionType.Level, target: Species.DECIDUEYE, level: 34 },
    { type: EvolutionType.Level, target: Species.HISUI_DECIDUEYE, level: 34, region: Region.HISUI },
  ] ],
  [ Species.LITTEN, [ { type: EvolutionType.Level, target: Species.TORRACAT, level: 17 } ] ],
  [ Species.TORRACAT, [ { type: EvolutionType.Level, target: Species.INCINEROAR, level: 34 } ] ],
  [ Species.POPPLIO, [ { type: EvolutionType.Level, target: Species.BRIONNE, level: 17 } ] ],
  [ Species.BRIONNE, [ { type: EvolutionType.Level, target: Species.PRIMARINA, level: 34 } ] ],
  [ Species.PIKIPEK, [ { type: EvolutionType.Level, target: Species.TRUMBEAK, level: 14 } ] ],
  [ Species.TRUMBEAK, [ { type: EvolutionType.Level, target: Species.TOUCANNON, level: 28 } ] ],
  [ Species.YUNGOOS, [ { type: EvolutionType.Level, target: Species.GUMSHOOS, level: 20, timeOfDay: 'Day' } ] ],
  [ Species.GRUBBIN, [ { type: EvolutionType.Level, target: Species.CHARJABUG, level: 20 } ] ],
  [ Species.CHARJABUG, [
    { type: EvolutionType.Stone, target: Species.VIKAVOLT, stone: 'Thunder Stone' },
    { type: EvolutionType.Level, target: Species.VIKAVOLT, near: 'Magnetic Field' },
  ] ],
  [ Species.CRABRAWLER, [
    { type: EvolutionType.Stone, target: Species.CRABOMINABLE, stone: 'Ice Stone' },
    { type: EvolutionType.Level, target: Species.CRABOMINABLE, near: 'Mount Lanakila', region: Region.ALOLA },
  ] ],
  [ Species.CUTIEFLY, [ { type: EvolutionType.Level, target: Species.RIBOMBEE, level: 25 } ] ],
  [ Species.ROCKRUFF, [
    { type: EvolutionType.Level, target: Species.LYCANROC, level: 25, timeOfDay: 'Day' },
    { type: EvolutionType.Level, target: Species.LYCANROC, level: 25, timeOfDay: 'Night' },
    { type: EvolutionType.Level, target: Species.LYCANROC, level: 25, timeOfDay: 'Dusk', ability: Abilities.OWN_TEMPO },
  ] ],
  [ Species.MAREANIE, [ { type: EvolutionType.Level, target: Species.TOXAPEX, level: 38 } ] ],
  [ Species.MUDBRAY, [ { type: EvolutionType.Level, target: Species.MUDSDALE, level: 30 } ] ],
  [ Species.DEWPIDER, [ { type: EvolutionType.Level, target: Species.ARAQUANID, level: 22 } ] ],
  [ Species.FOMANTIS, [ { type: EvolutionType.Level, target: Species.LURANTIS, level: 34, timeOfDay: 'Day' } ] ],
  [ Species.MORELULL, [ { type: EvolutionType.Level, target: Species.SHIINOTIC, level: 24 } ] ],
  [ Species.SALANDIT, [ { type: EvolutionType.Level, target: Species.SALAZZLE, level: 33, gender: Gender.Female } ] ],
  [ Species.STUFFUL, [ { type: EvolutionType.Level, target: Species.BEWEAR, level: 27 } ] ],
  [ Species.BOUNSWEET, [ { type: EvolutionType.Level, target: Species.STEENEE, level: 18 } ] ],
  [ Species.STEENEE, [ { type: EvolutionType.MoveLearn, target: Species.TSAREENA, move: Move.STOMP } ] ],
  [ Species.WIMPOD, [ { type: EvolutionType.Level, target: Species.GOLISOPOD, level: 30 } ] ],
  [ Species.SANDYGAST, [ { type: EvolutionType.Level, target: Species.PALOSSAND, level: 42 } ] ],
  [ Species.TYPE_NULL, [ { type: EvolutionType.Happiness, target: Species.SILVALLY } ] ],
  [ Species.JANGMO_O, [ { type: EvolutionType.Level, target: Species.HAKAMO_O, level: 35 } ] ],
  [ Species.HAKAMO_O, [ { type: EvolutionType.Level, target: Species.KOMMO_O, level: 45 } ] ],
  [ Species.COSMOG, [ { type: EvolutionType.Level, target: Species.COSMOEM, level: 43 } ] ],
  [ Species.COSMOEM, [
    { type: EvolutionType.Level, target: Species.SOLGALEO, level: 53, region: Region.ALOLA },
    { type: EvolutionType.Level, target: Species.LUNALA, level: 53, region: Region.ALOLA },
  ] ],
  [ Species.POIPOLE, [ { type: EvolutionType.MoveLearn, target: Species.NAGANADEL, move: Move.DRAGON_PULSE } ] ],
  [ Species.MELTAN, [ { type: EvolutionType.PokemonGoCandies, target: Species.MELMETAL, amount: 400 } ] ],

  // Generation VIII Pokémon
  [ Species.GROOKEY, [ { type: EvolutionType.Level, target: Species.THWACKEY, level: 16 } ] ],
  [ Species.THWACKEY, [ { type: EvolutionType.Level, target: Species.RILLABOOM, level: 35 } ] ],
  [ Species.SCORBUNNY, [ { type: EvolutionType.Level, target: Species.RABOOT, level: 16 } ] ],
  [ Species.RABOOT, [ { type: EvolutionType.Level, target: Species.CINDERACE, level: 35 } ] ],
  [ Species.SOBBLE, [ { type: EvolutionType.Level, target: Species.DRIZZILE, level: 16 } ] ],
  [ Species.DRIZZILE, [ { type: EvolutionType.Level, target: Species.INTELEON, level: 35 } ] ],
  [ Species.SKWOVET, [ { type: EvolutionType.Level, target: Species.GREEDENT, level: 24 } ] ],
  [ Species.ROOKIDEE, [ { type: EvolutionType.Level, target: Species.CORVISQUIRE, level: 18 } ] ],
  [ Species.CORVISQUIRE, [ { type: EvolutionType.Level, target: Species.CORVIKNIGHT, level: 38 } ] ],
  [ Species.BLIPBUG, [ { type: EvolutionType.Level, target: Species.DOTTLER, level: 10 } ] ],
  [ Species.DOTTLER, [ { type: EvolutionType.Level, target: Species.ORBEETLE, level: 30 } ] ],
  [ Species.NICKIT, [ { type: EvolutionType.Level, target: Species.THIEVUL, level: 18 } ] ],
  [ Species.GOSSIFLEUR, [ { type: EvolutionType.Level, target: Species.ELDEGOSS, level: 20 } ] ],
  [ Species.WOOLOO, [ { type: EvolutionType.Level, target: Species.DUBWOOL, level: 24 } ] ],
  [ Species.CHEWTLE, [ { type: EvolutionType.Level, target: Species.DREDNAW, level: 22 } ] ],
  [ Species.YAMPER, [ { type: EvolutionType.Level, target: Species.BOLTUND, level: 25 } ] ],
  [ Species.ROLYCOLY, [ { type: EvolutionType.Level, target: Species.CARKOL, level: 18 } ] ],
  [ Species.CARKOL, [ { type: EvolutionType.Level, target: Species.COALOSSAL, level: 34 } ] ],
  [ Species.APPLIN, [
    { type: EvolutionType.Stone, target: Species.FLAPPLE, stone: 'Tart Apple' },
    { type: EvolutionType.Stone, target: Species.APPLETUN, stone: 'Sweet Apple' },
    { type: EvolutionType.Stone, target: Species.DIPPLIN, stone: 'Syrupy Apple' },
  ] ],
  [ Species.SILICOBRA, [ { type: EvolutionType.Level, target: Species.SANDACONDA, level: 36 } ] ],
  [ Species.ARROKUDA, [ { type: EvolutionType.Level, target: Species.BARRASKEWDA, level: 26 } ] ],
  [ Species.TOXEL, [
    { type: EvolutionType.Level, target: Species.TOXTRICITY, level: 30 },
  ] ],
  [ Species.SIZZLIPEDE, [ { type: EvolutionType.Level, target: Species.CENTISKORCH, level: 28 } ] ],
  [ Species.CLOBBOPUS, [ { type: EvolutionType.MoveLearn, target: Species.GRAPPLOCT, move: Move.TAUNT } ] ],
  [ Species.SINISTEA, [
    { type: EvolutionType.Stone, target: Species.POLTEAGEIST, stone: 'Cracked Pot' },
  ] ],
  [ Species.HATENNA, [ { type: EvolutionType.Level, target: Species.HATTREM, level: 32 } ] ],
  [ Species.HATTREM, [ { type: EvolutionType.Level, target: Species.HATTERENE, level: 42 } ] ],
  [ Species.IMPIDIMP, [ { type: EvolutionType.Level, target: Species.MORGREM, level: 32 } ] ],
  [ Species.MORGREM, [ { type: EvolutionType.Level, target: Species.GRIMMSNARL, level: 42 } ] ],
  // TODO: Milcery...
  [ Species.SNOM, [ { type: EvolutionType.Happiness, target: Species.FROSMOTH, timeOfDay: 'Night' } ] ],
  [ Species.CUFANT, [ { type: EvolutionType.Level, target: Species.COPPERAJAH, level: 34 } ] ],
  [ Species.DURALUDON, [ { type: EvolutionType.Stone, target: Species.ARCHALUDON, stone: 'Metal Alloy' } ] ],
  [ Species.DREEPY, [ { type: EvolutionType.Level, target: Species.DRIZZILE, level: 50 } ] ],
  [ Species.DRIZZILE, [ { type: EvolutionType.Level, target: Species.DRAKLOAK, level: 60 } ] ],
  [ Species.KUBFU, [
    { type: EvolutionType.Stone, target: Species.URSHIFU, stone: 'Scroll Of Darkness' },
    { type: EvolutionType.Stone, target: Species.URSHIFU, stone: 'Scroll Of Waters' },
    // TODO: inside Tower of Water / in Tower of Darkness
  ] ],

  // Generation IX Pokémon
  [ Species.SPRIGATITO, [ { type: EvolutionType.Level, target: Species.FLORAGATO, level: 16 } ] ],
  [ Species.FLORAGATO, [ { type: EvolutionType.Level, target: Species.MEOWSCARADA, level: 36 } ] ],
  [ Species.FUECOCO, [ { type: EvolutionType.Level, target: Species.CROCALOR, level: 16 } ] ],
  [ Species.CROCALOR, [ { type: EvolutionType.Level, target: Species.SKELEDIRGE, level: 36 } ] ],
  [ Species.QUAXLY, [ { type: EvolutionType.Level, target: Species.QUAXWELL, level: 16 } ] ],
  [ Species.QUAXWELL, [ { type: EvolutionType.Level, target: Species.QUAQUAVAL, level: 36 } ] ],
  [ Species.LECHONK, [
    { type: EvolutionType.Level, target: Species.OINKOLOGNE, level: 18, gender: Gender.Male },
    { type: EvolutionType.Level, target: Species.OINKOLOGNE, level: 18, gender: Gender.Female },
  ] ],
  [ Species.TAROUNTULA, [ { type: EvolutionType.Level, target: Species.SPIDOPS, level: 15 } ] ],
  [ Species.NYMBLE, [ { type: EvolutionType.Level, target: Species.LOKIX, level: 24 } ] ],
  [ Species.PAWMI, [ { type: EvolutionType.Level, target: Species.PAWMO, level: 18 } ] ],
  [ Species.PAWMO, [ { type: EvolutionType.Walk, target: Species.PAWMOT, steps: 1000 } ] ],
  [ Species.TANDEMAUS, [ { type: EvolutionType.Level, target: Species.MAUSHOLD, level: 25 } ] ],
  [ Species.FIDOUGH, [ { type: EvolutionType.Level, target: Species.DACHSBUN, level: 26 } ] ],
  [ Species.SMOLIV, [ { type: EvolutionType.Level, target: Species.DOLLIV, level: 25 } ] ],
  [ Species.DOLLIV, [ { type: EvolutionType.Level, target: Species.ARBOLIVA, level: 35 } ] ],
  [ Species.NACLI, [ { type: EvolutionType.Level, target: Species.NACLSTACK, level: 24 } ] ],
  [ Species.NACLSTACK, [ { type: EvolutionType.Level, target: Species.GARGANACL, level: 38 } ] ],
  [ Species.CHARCADET, [
    { type: EvolutionType.Stone, target: Species.ARMAROUGE, stone: 'Auspicious Armor' },
    { type: EvolutionType.Stone, target: Species.CERULEDGE, stone: 'Malicious Armor' },
  ] ],
  [ Species.TADBULB, [ { type: EvolutionType.Stone, target: Species.BELLIBOLT, stone: 'Thunder Stone' } ] ],
  [ Species.WATTREL, [ { type: EvolutionType.Level, target: Species.BELLIBOLT, level: 25 } ] ],
  [ Species.MASCHIFF, [ { type: EvolutionType.Level, target: Species.MABOSSTIFF, level: 30 } ] ],
  [ Species.SHROODLE, [ { type: EvolutionType.Level, target: Species.GRAFAIAI, level: 28 } ] ],
  [ Species.BRAMBLIN, [ { type: EvolutionType.Walk, target: Species.BRAMBLEGHAST, steps: 1000 } ] ],
  [ Species.TOEDSCOOL, [ { type: EvolutionType.Level, target: Species.TOEDSCRUEL, level: 30 } ] ],
  [ Species.CAPSAKID, [ { type: EvolutionType.Stone, target: Species.SCOVILLAIN, stone: 'Fire Stone' } ] ],
  [ Species.RELLOR, [ { type: EvolutionType.Walk, target: Species.RABSCA, steps: 1000 } ] ],
  [ Species.FLITTLE, [ { type: EvolutionType.Level, target: Species.ESPATHRA, level: 35 } ] ],
  [ Species.TINKATINK, [ { type: EvolutionType.Level, target: Species.TINKATUFF, level: 24 } ] ],
  [ Species.TINKATUFF, [ { type: EvolutionType.Level, target: Species.TINKATON, level: 38 } ] ],
  [ Species.WIGLETT, [ { type: EvolutionType.Level, target: Species.WUGTRIO, level: 26 } ] ],
  [ Species.FINIZEN, [ { type: EvolutionType.Level, target: Species.PALAFIN, level: 38 } ] ],
  [ Species.VAROOM, [ { type: EvolutionType.Level, target: Species.REVAVROOM, level: 40 } ] ],
  [ Species.GLIMMET, [ { type: EvolutionType.Level, target: Species.GLIMMORA, level: 35 } ] ],
  [ Species.GREAVARD, [ { type: EvolutionType.Level, target: Species.HOUNDSTONE, level: 30, timeOfDay: 'Night' } ] ],
  [ Species.CETODDLE, [ { type: EvolutionType.Stone, target: Species.CETITAN, stone: 'Ice Stone' } ] ],
  [ Species.FRIGIBAX, [ { type: EvolutionType.Level, target: Species.ARCTIBAX, level: 35 } ] ],
  [ Species.ARCTIBAX, [ { type: EvolutionType.Level, target: Species.BAXCALIBUR, level: 54 } ] ],
  [ Species.GIMMIGHOUL, [ { type: EvolutionType.Stone, target: Species.GHOLDENGO, stone: '999 Coins' } ] ],
  [ Species.DIPPLIN, [ { type: EvolutionType.MoveLearn, target: Species.HYDRAPPLE, move: Move.DRAGON_CHEER } ] ],
  [ Species.POLTCHAGEIST, [ { type: EvolutionType.Stone, target: Species.SINISTCHA, stone: 'Unremarkable Teacup' } ] ],
]);

export const preEvolutionMap = new Map<Species, Species>(
  Array.from(evolutionMap.entries())
    .flatMap(([species, evolutions]) => {
      return evolutions.map((evo) => [evo.target, species] as [Species, Species]);
    })
);