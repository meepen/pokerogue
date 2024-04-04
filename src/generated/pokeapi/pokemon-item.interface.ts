import { PokemonItem } from "#pokeapi/generated/item.enum";
import { PokemonItemCategory } from "#pokeapi/generated/itemcategory.enum";

export abstract class IPokemonItem {
  constructor(
    protected readonly item: PokemonItem,
    protected readonly itemCategory: PokemonItemCategory,
  ) {
    allPokemonItems.set(item, this);
  }
}

export const allPokemonItems = new Map<PokemonItem, IPokemonItem>();
