// AUTO GENERATED FILE
import { IPokemonType } from "#pokeapi/pokemon-type.interface";
import { PokemonType } from "#pokeapi/generated/type.enum";

class Type extends IPokemonType {}

new class NormalType extends Type {}(
  PokemonType.Normal,
  new Map<PokemonType, number>([
    [ PokemonType.Rock, 0.5 ],
    [ PokemonType.Steel, 0.5 ],
    [ PokemonType.Ghost, 0 ],
  ]),
);
new class FightingType extends Type {}(
  PokemonType.Fighting,
  new Map<PokemonType, number>([
    [ PokemonType.Normal, 2 ],
    [ PokemonType.Rock, 2 ],
    [ PokemonType.Steel, 2 ],
    [ PokemonType.Ice, 2 ],
    [ PokemonType.Dark, 2 ],
    [ PokemonType.Flying, 0.5 ],
    [ PokemonType.Poison, 0.5 ],
    [ PokemonType.Bug, 0.5 ],
    [ PokemonType.Psychic, 0.5 ],
    [ PokemonType.Fairy, 0.5 ],
    [ PokemonType.Ghost, 0 ],
  ]),
);
new class FlyingType extends Type {}(
  PokemonType.Flying,
  new Map<PokemonType, number>([
    [ PokemonType.Fighting, 2 ],
    [ PokemonType.Bug, 2 ],
    [ PokemonType.Grass, 2 ],
    [ PokemonType.Rock, 0.5 ],
    [ PokemonType.Steel, 0.5 ],
    [ PokemonType.Electric, 0.5 ],
  ]),
);
new class PoisonType extends Type {}(
  PokemonType.Poison,
  new Map<PokemonType, number>([
    [ PokemonType.Grass, 2 ],
    [ PokemonType.Fairy, 2 ],
    [ PokemonType.Poison, 0.5 ],
    [ PokemonType.Ground, 0.5 ],
    [ PokemonType.Rock, 0.5 ],
    [ PokemonType.Ghost, 0.5 ],
    [ PokemonType.Steel, 0 ],
  ]),
);
new class GroundType extends Type {}(
  PokemonType.Ground,
  new Map<PokemonType, number>([
    [ PokemonType.Poison, 2 ],
    [ PokemonType.Rock, 2 ],
    [ PokemonType.Steel, 2 ],
    [ PokemonType.Fire, 2 ],
    [ PokemonType.Electric, 2 ],
    [ PokemonType.Bug, 0.5 ],
    [ PokemonType.Grass, 0.5 ],
    [ PokemonType.Flying, 0 ],
  ]),
);
new class RockType extends Type {}(
  PokemonType.Rock,
  new Map<PokemonType, number>([
    [ PokemonType.Flying, 2 ],
    [ PokemonType.Bug, 2 ],
    [ PokemonType.Fire, 2 ],
    [ PokemonType.Ice, 2 ],
    [ PokemonType.Fighting, 0.5 ],
    [ PokemonType.Ground, 0.5 ],
    [ PokemonType.Steel, 0.5 ],
  ]),
);
new class BugType extends Type {}(
  PokemonType.Bug,
  new Map<PokemonType, number>([
    [ PokemonType.Grass, 2 ],
    [ PokemonType.Psychic, 2 ],
    [ PokemonType.Dark, 2 ],
    [ PokemonType.Fighting, 0.5 ],
    [ PokemonType.Flying, 0.5 ],
    [ PokemonType.Poison, 0.5 ],
    [ PokemonType.Ghost, 0.5 ],
    [ PokemonType.Steel, 0.5 ],
    [ PokemonType.Fire, 0.5 ],
    [ PokemonType.Fairy, 0.5 ],
  ]),
);
new class GhostType extends Type {}(
  PokemonType.Ghost,
  new Map<PokemonType, number>([
    [ PokemonType.Ghost, 2 ],
    [ PokemonType.Psychic, 2 ],
    [ PokemonType.Dark, 0.5 ],
    [ PokemonType.Normal, 0 ],
  ]),
);
new class SteelType extends Type {}(
  PokemonType.Steel,
  new Map<PokemonType, number>([
    [ PokemonType.Rock, 2 ],
    [ PokemonType.Ice, 2 ],
    [ PokemonType.Fairy, 2 ],
    [ PokemonType.Steel, 0.5 ],
    [ PokemonType.Fire, 0.5 ],
    [ PokemonType.Water, 0.5 ],
    [ PokemonType.Electric, 0.5 ],
  ]),
);
new class FireType extends Type {}(
  PokemonType.Fire,
  new Map<PokemonType, number>([
    [ PokemonType.Bug, 2 ],
    [ PokemonType.Steel, 2 ],
    [ PokemonType.Grass, 2 ],
    [ PokemonType.Ice, 2 ],
    [ PokemonType.Rock, 0.5 ],
    [ PokemonType.Fire, 0.5 ],
    [ PokemonType.Water, 0.5 ],
    [ PokemonType.Dragon, 0.5 ],
  ]),
);
new class WaterType extends Type {}(
  PokemonType.Water,
  new Map<PokemonType, number>([
    [ PokemonType.Ground, 2 ],
    [ PokemonType.Rock, 2 ],
    [ PokemonType.Fire, 2 ],
    [ PokemonType.Water, 0.5 ],
    [ PokemonType.Grass, 0.5 ],
    [ PokemonType.Dragon, 0.5 ],
  ]),
);
new class GrassType extends Type {}(
  PokemonType.Grass,
  new Map<PokemonType, number>([
    [ PokemonType.Ground, 2 ],
    [ PokemonType.Rock, 2 ],
    [ PokemonType.Water, 2 ],
    [ PokemonType.Flying, 0.5 ],
    [ PokemonType.Poison, 0.5 ],
    [ PokemonType.Bug, 0.5 ],
    [ PokemonType.Steel, 0.5 ],
    [ PokemonType.Fire, 0.5 ],
    [ PokemonType.Grass, 0.5 ],
    [ PokemonType.Dragon, 0.5 ],
  ]),
);
new class ElectricType extends Type {}(
  PokemonType.Electric,
  new Map<PokemonType, number>([
    [ PokemonType.Flying, 2 ],
    [ PokemonType.Water, 2 ],
    [ PokemonType.Grass, 0.5 ],
    [ PokemonType.Electric, 0.5 ],
    [ PokemonType.Dragon, 0.5 ],
    [ PokemonType.Ground, 0 ],
  ]),
);
new class PsychicType extends Type {}(
  PokemonType.Psychic,
  new Map<PokemonType, number>([
    [ PokemonType.Fighting, 2 ],
    [ PokemonType.Poison, 2 ],
    [ PokemonType.Steel, 0.5 ],
    [ PokemonType.Psychic, 0.5 ],
    [ PokemonType.Dark, 0 ],
  ]),
);
new class IceType extends Type {}(
  PokemonType.Ice,
  new Map<PokemonType, number>([
    [ PokemonType.Flying, 2 ],
    [ PokemonType.Ground, 2 ],
    [ PokemonType.Grass, 2 ],
    [ PokemonType.Dragon, 2 ],
    [ PokemonType.Steel, 0.5 ],
    [ PokemonType.Fire, 0.5 ],
    [ PokemonType.Water, 0.5 ],
    [ PokemonType.Ice, 0.5 ],
  ]),
);
new class DragonType extends Type {}(
  PokemonType.Dragon,
  new Map<PokemonType, number>([
    [ PokemonType.Dragon, 2 ],
    [ PokemonType.Steel, 0.5 ],
    [ PokemonType.Fairy, 0 ],
  ]),
);
new class DarkType extends Type {}(
  PokemonType.Dark,
  new Map<PokemonType, number>([
    [ PokemonType.Ghost, 2 ],
    [ PokemonType.Psychic, 2 ],
    [ PokemonType.Fighting, 0.5 ],
    [ PokemonType.Dark, 0.5 ],
    [ PokemonType.Fairy, 0.5 ],
  ]),
);
new class FairyType extends Type {}(
  PokemonType.Fairy,
  new Map<PokemonType, number>([
    [ PokemonType.Fighting, 2 ],
    [ PokemonType.Dragon, 2 ],
    [ PokemonType.Dark, 2 ],
    [ PokemonType.Poison, 0.5 ],
    [ PokemonType.Steel, 0.5 ],
    [ PokemonType.Fire, 0.5 ],
  ]),
);
new class UnknownType extends Type {}(
  PokemonType.Unknown,
  new Map<PokemonType, number>([
  ]),
);
new class ShadowType extends Type {}(
  PokemonType.Shadow,
  new Map<PokemonType, number>([
  ]),
);