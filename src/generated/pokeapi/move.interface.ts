import { PokemonMove } from '#pokeapi/generated/move.enum';
import { PokemonType } from '#pokeapi/generated/type.enum';

export abstract class IMove {
  constructor(
    protected readonly move: PokemonMove,
    protected readonly accuracy: number | null,
    protected readonly power: number | null,
    protected readonly pp: number | null,
    protected readonly priority: number,
    protected readonly type: PokemonType,
  ) {}
}