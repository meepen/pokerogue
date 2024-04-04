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
    /**
     * If genderRate = -1, the species is genderless
     * If genderRate = 0, the species is always male
     * If genderRate = 8, the species is always female
     * You can calculate the chance of being female as genderRate / 8
     */
    protected readonly genderRate: number,
  ) {
    speciesList.set(species, this);
  }

  public get isMythical() {
    return (this.speciesFlags & PokemonSpeciesFlags.Mythical) === PokemonSpeciesFlags.Mythical;
  }

  public get isLegendary() {
    return (this.speciesFlags & PokemonSpeciesFlags.Legendary) === PokemonSpeciesFlags.Legendary;
  }

  public get isBaby() {
    return (this.speciesFlags & PokemonSpeciesFlags.Baby) === PokemonSpeciesFlags.Baby;
  }

  public get isGenderless() {
    return this.genderRate === -1;
  }
}

export const speciesList = new Map<PokemonSpecies, IPokemonSpecies>();
