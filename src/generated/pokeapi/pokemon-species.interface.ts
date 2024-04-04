import { PokemonVariety } from "#pokeapi/generated/variety.enum";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";

export enum PokemonSpeciesFlags {
  None = 0,
  Baby = (1 << 0),
  Legendary = (1 << 1),
  Mythical = (1 << 2),
}

export abstract class IPokemonSpecies {
  constructor(
    protected readonly species: PokemonSpecies,
    protected readonly varieties: PokemonVariety[],
    protected readonly name: string,
    protected readonly captureRate: number,
    protected readonly baseHappiness: number | null,
    protected readonly speciesFlags: PokemonSpeciesFlags,
  ) {}
}