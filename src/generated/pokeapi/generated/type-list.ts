// AUTO GENERATED FILE
import { IPokemonType } from "#pokeapi/pokemon-type.interface";
import { PokemonType } from "#pokeapi/generated/type.enum";

export const typesList = new Map<PokemonType, IPokemonType>();

class Type extends IPokemonType {
  constructor(
    type: PokemonType,
  ) {
    super(type);
    typesList.set(type, this);
  }
}

new class NormalType extends Type {}(
  PokemonType.Normal,
);
new class FightingType extends Type {}(
  PokemonType.Fighting,
);
new class FlyingType extends Type {}(
  PokemonType.Flying,
);
new class PoisonType extends Type {}(
  PokemonType.Poison,
);
new class GroundType extends Type {}(
  PokemonType.Ground,
);
new class RockType extends Type {}(
  PokemonType.Rock,
);
new class BugType extends Type {}(
  PokemonType.Bug,
);
new class GhostType extends Type {}(
  PokemonType.Ghost,
);
new class SteelType extends Type {}(
  PokemonType.Steel,
);
new class FireType extends Type {}(
  PokemonType.Fire,
);
new class WaterType extends Type {}(
  PokemonType.Water,
);
new class GrassType extends Type {}(
  PokemonType.Grass,
);
new class ElectricType extends Type {}(
  PokemonType.Electric,
);
new class PsychicType extends Type {}(
  PokemonType.Psychic,
);
new class IceType extends Type {}(
  PokemonType.Ice,
);
new class DragonType extends Type {}(
  PokemonType.Dragon,
);
new class DarkType extends Type {}(
  PokemonType.Dark,
);
new class FairyType extends Type {}(
  PokemonType.Fairy,
);
new class UnknownType extends Type {}(
  PokemonType.Unknown,
);
new class ShadowType extends Type {}(
  PokemonType.Shadow,
);