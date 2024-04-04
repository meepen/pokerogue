import { PokemonForm } from "#pokeapi/generated/form.enum";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonVariety } from "#pokeapi/generated/variety.enum";
import { PokemonType } from "#pokeapi/generated/type.enum";

export abstract class IPokemonForm {
  constructor(
    protected readonly form: PokemonForm,
    protected readonly variety: PokemonVariety,
    protected readonly species: PokemonSpecies,
    protected readonly name: string | null,
    protected readonly types: PokemonType[],
  ) {
    formsList.set(form, this);
  }
}

export const formsList = new Map<PokemonForm, IPokemonForm>();
