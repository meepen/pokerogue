export interface SystemSaveDataDto {
  trainerId: number;
  secretId: number

  gender: number;
  dexData: DexData;
  starterMoveData: StarterMoveData;
  starterEggMoveData: StarterEggMoveData;
  gameStats: GameStats;
  unlocks: Unlocks;
  achvUnlocks: AchvUnlocks;
  voucherUnlocks: VoucherUnlocks;
  voucherCounts: VoucherCounts;
  eggs: EggData[];
  gameVersion: string;
  timestamp: number;
}

export interface DexData {
  [key: number]: DexEntry;
}

export interface DexEntry {
  seenAttr: number | string;
  caughtAttr: number | string;
  natureAttr: number;
  seenCount: number;
  caughtCount: number;
  hatchedCount: number;
  ivs: number[];
}

export type StarterMoveData = { [key: number]: any };

export type StarterEggMoveData = { [key: number]: number };

export type GameStats = { [key: string]: any };

export type Unlocks = { [key: number]: boolean };

export type AchvUnlocks = { [key: string]: number };

export type VoucherUnlocks = { [key: string]: number };

export type VoucherCounts = { [key: string]: number };

export interface EggData {
  id: number;
  gachaType: GachaType;
  hatchWaves: number;
  timestamp: number;
}

export type GachaType = number;

export interface SessionSaveData {
  seed: string;
  playTime: number;
  gameMode: GameMode;
  party: PokemonData[];
  enemyParty: PokemonData[];
  modifiers: PersistentModifierData[];
  enemyModifiers: PersistentModifierData[];
  arena: ArenaData;
  pokeballCounts: PokeballCounts;
  money: number;
  score: number;
  waveIndex: number;
  battleType: BattleType;
  trainer: TrainerData;
  gameVersion: string;
  timestamp: number;
}

export type GameMode = number;

export interface PokemonData {
}

export interface PersistentModifierData {
}

export interface ArenaData {
}

export type PokeballCounts = { [key: string]: number };

export type BattleType = number;

export interface TrainerData {
}

export interface SessionHistoryData {
  seed: string;
  playTime: number;
  result: SessionHistoryResult;
  gameMode: GameMode;
  party: PokemonData[];
  modifiers: PersistentModifierData[];
  money: number;
  score: number;
  waveIndex: number;
  battleType: BattleType;
  gameVersion: string;
  timestamp: number;
}

export type SessionHistoryResult = number;
