import { PokemonMove } from '#pokeapi/generated/move.enum';
import { PokemonType } from '#pokeapi/generated/type.enum';

export abstract class IPokemonMove {
  constructor(
    protected readonly move: PokemonMove,
    protected readonly accuracy: number | null,
    protected readonly power: number | null,
    protected readonly pp: number | null,
    protected readonly priority: number,
    protected readonly type: PokemonType,
  ) {
    movesList.set(move, this);
  }
}

export const movesList = new Map<PokemonMove, IPokemonMove>();
