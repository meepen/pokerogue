import { PokemonMove } from '#pokeapi/generated/move.enum';

export abstract class IMove {
  constructor(
    protected readonly move: PokemonMove
  ) {}
}