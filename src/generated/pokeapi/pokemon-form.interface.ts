import { PokemonForm } from "#pokeapi/generated/form.enum";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonVariety } from "#pokeapi/generated/variety.enum";

export abstract class IPokemonForm {
  constructor(
    protected readonly form: PokemonForm,
    protected readonly variety: PokemonVariety,
    protected readonly species: PokemonSpecies,
  ) {}
}
