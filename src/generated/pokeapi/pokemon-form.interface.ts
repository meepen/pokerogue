import { PokemonForm } from "pokenode-ts";

export abstract class IPokemonForm {
  constructor(protected data: Partial<PokemonForm>) {}
}
