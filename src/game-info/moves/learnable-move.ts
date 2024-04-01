import { Move } from "./moves";

export enum LearnableMoveType {
  Level,
  TMHM,
  Egg,
}

interface ILearnableMove {
  type: LearnableMoveType;

  move: Move;
}

interface LearnableMoveByLevel extends ILearnableMove {
  type: LearnableMoveType.Level;

  level: number;
}

interface LearnableMoveByTM extends ILearnableMove {
  type: LearnableMoveType.TMHM;
}

interface LearnableMoveByEgg extends ILearnableMove {
  type: LearnableMoveType.Egg;
}


export type LearnableMove = LearnableMoveByLevel | LearnableMoveByTM | LearnableMoveByEgg;