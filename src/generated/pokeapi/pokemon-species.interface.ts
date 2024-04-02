import { PokemonVariety } from "#pokeapi/generated/varieties.enum";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";

export abstract class IPokemonSpecies {
  constructor(
    protected readonly species: PokemonSpecies,
    protected readonly varieties: PokemonVariety[],
  ) {}
}