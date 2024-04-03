import { PokemonType } from "#pokeapi/generated/type.enum";

export abstract class IPokemonType {
  constructor(
    protected readonly type: PokemonType
  ) {}
}
