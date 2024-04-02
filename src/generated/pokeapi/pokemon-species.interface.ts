import { PokemonForm } from "#pokeapi/generated/forms.enum";
import { PokemonVariety } from "#pokeapi/generated/varities.enum";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";

export abstract class IPokemonSpecies {
  protected abstract readonly species: PokemonSpecies;
  protected abstract readonly varieties: PokemonVariety[];
}