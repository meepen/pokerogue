import { PokemonType } from "#pokeapi/generated/type.enum";

export abstract class IPokemonType {
  constructor(
    protected readonly type: PokemonType,
    protected readonly damageToMultipliers: Map<PokemonType, number>,
  ) {
    typesList.set(type, this);
  }

  public getDamageToMultiplier(type: PokemonType | PokemonType[]): number {
    if (Array.isArray(type)) {
      return type.reduce((acc, t) => acc * this.getDamageToMultiplier(t), 1);
    }

    return this.damageToMultipliers.get(type) ?? 1;
  }
}

export const typesList = new Map<PokemonType, IPokemonType>();
