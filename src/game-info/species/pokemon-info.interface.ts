import { Move } from "../moves/moves";
import { evolutionMap, preEvolutionMap } from "./evolutions";
import { Species } from "./species";

export interface PokemonStats {
  hp: number;
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  spd: number;
}

export interface LearnableMove {
  move: Move;
  level: number;
}

export const pokemonInfoMap = new Map<Species, IPokemonInfo>();

export abstract class IPokemonInfo {
  constructor(
    public readonly species: Species,
  ) {}

  public getEvolutions(): IPokemonInfo[] | null {
    const evolutions = evolutionMap.get(this.species);
    if (!evolutions) {
      return null;
    }

    return evolutions
      .flatMap((evo) => {
        return [
          pokemonInfoMap.get(evo.target),
          pokemonInfoMap.get(evo.extraTarget),
        ];
      })
      .filter((evo): evo is IPokemonInfo => !!evo);
  }

  public getPreEvolution(): IPokemonInfo | null {
    const preEvolution = preEvolutionMap.get(this.species);
    if (!preEvolution) {
      return null;
    }

    const preEvolutionInfo = pokemonInfoMap.get(preEvolution);
    if (!preEvolutionInfo) {
      console.warn(`Pre-evolution ${preEvolution} not found for ${this.species}`);
      return null;
    }

    return preEvolutionInfo;
  }

  public abstract getBaseStats(): PokemonStats;
  public abstract getLearnableMoves(): LearnableMove[];
  public abstract getEggMoves(): Move[];
}