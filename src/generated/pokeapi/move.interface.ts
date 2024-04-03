import { PokemonMove } from '#pokeapi/generated/moves.enum';

export abstract class IMove {
  constructor(
    protected readonly move: PokemonMove
  ) {}
}