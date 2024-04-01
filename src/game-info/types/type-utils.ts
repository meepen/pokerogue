import { Type } from "./types";

export enum TypeEffectiveness {
  Immune = 0,
  NotVeryEffective = 0.5,
  Normal = 1,
  SuperEffective = 2,
}

/**
 * A map of type effectiveness multipliers.
 * .get(damageType)?.get(targetType) returns the multiplier for damageType against targetType.
 */
export const typeDamageMultiplierMap = new Map<Type, Map<Type, TypeEffectiveness>>([
  [
    Type.NORMAL,
    new Map<Type, number>([
      [ Type.ROCK, TypeEffectiveness.NotVeryEffective ],
      [ Type.GHOST, TypeEffectiveness.Immune ],
      [ Type.STEEL, TypeEffectiveness.NotVeryEffective ],
    ])
  ],
  [
    Type.FIRE,
    new Map<Type, number>([
      [ Type.FIRE, TypeEffectiveness.NotVeryEffective ],
      [ Type.WATER, TypeEffectiveness.NotVeryEffective ],
      [ Type.GRASS, TypeEffectiveness.SuperEffective ],
      [ Type.ICE, TypeEffectiveness.SuperEffective ],
      [ Type.BUG, TypeEffectiveness.SuperEffective ],
      [ Type.ROCK, TypeEffectiveness.NotVeryEffective ],
      [ Type.DRAGON, TypeEffectiveness.NotVeryEffective ],
      [ Type.STEEL, TypeEffectiveness.SuperEffective ],
    ]),
  ],
  [
    Type.WATER,
    new Map<Type, number>([
      [ Type.FIRE, TypeEffectiveness.SuperEffective ],
      [ Type.WATER, TypeEffectiveness.NotVeryEffective ],
      [ Type.GRASS, TypeEffectiveness.NotVeryEffective ],
      [ Type.GROUND, TypeEffectiveness.SuperEffective ],
      [ Type.ROCK, TypeEffectiveness.SuperEffective ],
      [ Type.DRAGON, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.ELECTRIC,
    new Map<Type, number>([
      [ Type.WATER, TypeEffectiveness.SuperEffective ],
      [ Type.ELECTRIC, TypeEffectiveness.NotVeryEffective ],
      [ Type.GRASS, TypeEffectiveness.NotVeryEffective ],
      [ Type.GROUND, TypeEffectiveness.Immune ],
      [ Type.FLYING, TypeEffectiveness.SuperEffective ],
      [ Type.DRAGON, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.GRASS,
    new Map<Type, number>([
      [ Type.FIRE, TypeEffectiveness.NotVeryEffective ],
      [ Type.WATER, TypeEffectiveness.SuperEffective ],
      [ Type.GRASS, TypeEffectiveness.NotVeryEffective ],
      [ Type.POISON, TypeEffectiveness.NotVeryEffective ],
      [ Type.GROUND, TypeEffectiveness.SuperEffective ],
      [ Type.FLYING, TypeEffectiveness.NotVeryEffective ],
      [ Type.BUG, TypeEffectiveness.NotVeryEffective ],
      [ Type.ROCK, TypeEffectiveness.SuperEffective ],
      [ Type.DRAGON, TypeEffectiveness.NotVeryEffective ],
      [ Type.STEEL, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.ICE,
    new Map<Type, number>([
      [ Type.FIRE, TypeEffectiveness.NotVeryEffective ],
      [ Type.WATER, TypeEffectiveness.NotVeryEffective ],
      [ Type.GRASS, TypeEffectiveness.SuperEffective ],
      [ Type.ICE, TypeEffectiveness.NotVeryEffective ],
      [ Type.GROUND, TypeEffectiveness.SuperEffective ],
      [ Type.FLYING, TypeEffectiveness.SuperEffective ],
      [ Type.DRAGON, TypeEffectiveness.SuperEffective ],
      [ Type.STEEL, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.FIGHTING,
    new Map<Type, number>([
      [ Type.NORMAL, TypeEffectiveness.SuperEffective ],
      [ Type.ICE, TypeEffectiveness.SuperEffective ],
      [ Type.POISON, TypeEffectiveness.NotVeryEffective ],
      [ Type.FLYING, TypeEffectiveness.NotVeryEffective ],
      [ Type.PSYCHIC, TypeEffectiveness.NotVeryEffective ],
      [ Type.BUG, TypeEffectiveness.NotVeryEffective ],
      [ Type.ROCK, TypeEffectiveness.SuperEffective ],
      [ Type.GHOST, TypeEffectiveness.Immune ],
      [ Type.DARK, TypeEffectiveness.SuperEffective ],
      [ Type.STEEL, TypeEffectiveness.SuperEffective ],
      [ Type.FAIRY, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.POISON,
    new Map<Type, number>([
      [ Type.GRASS, TypeEffectiveness.SuperEffective ],
      [ Type.POISON, TypeEffectiveness.NotVeryEffective ],
      [ Type.GROUND, TypeEffectiveness.NotVeryEffective ],
      [ Type.ROCK, TypeEffectiveness.NotVeryEffective ],
      [ Type.GHOST, TypeEffectiveness.NotVeryEffective ],
      [ Type.STEEL, TypeEffectiveness.Immune ],
      [ Type.FAIRY, TypeEffectiveness.SuperEffective ],
    ]),
  ],
  [
    Type.GROUND,
    new Map<Type, number>([
      [ Type.FIRE, TypeEffectiveness.SuperEffective ],
      [ Type.ELECTRIC, TypeEffectiveness.SuperEffective ],
      [ Type.POISON, TypeEffectiveness.SuperEffective ],
      [ Type.FLYING, TypeEffectiveness.Immune ],
      [ Type.BUG, TypeEffectiveness.NotVeryEffective ],
      [ Type.ROCK, TypeEffectiveness.SuperEffective ],
      [ Type.STEEL, TypeEffectiveness.SuperEffective ],
    ]),
  ],
  [
    Type.FLYING,
    new Map<Type, number>([
      [ Type.ELECTRIC, TypeEffectiveness.NotVeryEffective ],
      [ Type.GRASS, TypeEffectiveness.SuperEffective ],
      [ Type.FIGHTING, TypeEffectiveness.SuperEffective ],
      [ Type.BUG, TypeEffectiveness.SuperEffective ],
      [ Type.ROCK, TypeEffectiveness.NotVeryEffective ],
      [ Type.STEEL, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.PSYCHIC,
    new Map<Type, number>([
      [ Type.FIGHTING, TypeEffectiveness.SuperEffective ],
      [ Type.POISON, TypeEffectiveness.SuperEffective ],
      [ Type.PSYCHIC, TypeEffectiveness.NotVeryEffective ],
      [ Type.DARK, TypeEffectiveness.Immune ],
      [ Type.STEEL, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.BUG,
    new Map<Type, number>([
      [ Type.FIRE, TypeEffectiveness.NotVeryEffective ],
      [ Type.GRASS, TypeEffectiveness.SuperEffective ],
      [ Type.FIGHTING, TypeEffectiveness.NotVeryEffective ],
      [ Type.POISON, TypeEffectiveness.NotVeryEffective ],
      [ Type.FLYING, TypeEffectiveness.NotVeryEffective ],
      [ Type.PSYCHIC, TypeEffectiveness.SuperEffective ],
      [ Type.GHOST, TypeEffectiveness.NotVeryEffective ],
      [ Type.DARK, TypeEffectiveness.SuperEffective ],
      [ Type.STEEL, TypeEffectiveness.NotVeryEffective ],
      [ Type.FAIRY, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.ROCK,
    new Map<Type, number>([
      [ Type.FIRE, TypeEffectiveness.SuperEffective ],
      [ Type.ICE, TypeEffectiveness.SuperEffective ],
      [ Type.FIGHTING, TypeEffectiveness.NotVeryEffective ],
      [ Type.GROUND, TypeEffectiveness.NotVeryEffective ],
      [ Type.FLYING, TypeEffectiveness.SuperEffective ],
      [ Type.BUG, TypeEffectiveness.SuperEffective ],
      [ Type.STEEL, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.GHOST,
    new Map<Type, number>([
      [ Type.NORMAL, TypeEffectiveness.Immune ],
      [ Type.PSYCHIC, TypeEffectiveness.SuperEffective ],
      [ Type.GHOST, TypeEffectiveness.SuperEffective ],
      [ Type.DARK, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.DRAGON,
    new Map<Type, number>([
      [ Type.DRAGON, TypeEffectiveness.SuperEffective ],
      [ Type.STEEL, TypeEffectiveness.NotVeryEffective ],
      [ Type.FAIRY, TypeEffectiveness.Immune ],
    ]),
  ],
  [
    Type.DARK,
    new Map<Type, number>([
      [ Type.FIGHTING, TypeEffectiveness.NotVeryEffective ],
      [ Type.PSYCHIC, TypeEffectiveness.SuperEffective ],
      [ Type.GHOST, TypeEffectiveness.SuperEffective ],
      [ Type.DARK, TypeEffectiveness.NotVeryEffective ],
      [ Type.FAIRY, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
  [
    Type.STEEL,
    new Map<Type, number>([
      [ Type.FIRE, TypeEffectiveness.NotVeryEffective ],
      [ Type.WATER, TypeEffectiveness.NotVeryEffective ],
      [ Type.ELECTRIC, TypeEffectiveness.NotVeryEffective ],
      [ Type.ICE, TypeEffectiveness.SuperEffective ],
      [ Type.ROCK, TypeEffectiveness.SuperEffective ],
      [ Type.STEEL, TypeEffectiveness.NotVeryEffective ],
      [ Type.FAIRY, TypeEffectiveness.SuperEffective ],
    ]),
  ],
  [
    Type.FAIRY,
    new Map<Type, number>([
      [ Type.FIRE, TypeEffectiveness.NotVeryEffective ],
      [ Type.FIGHTING, TypeEffectiveness.SuperEffective ],
      [ Type.POISON, TypeEffectiveness.NotVeryEffective ],
      [ Type.DRAGON, TypeEffectiveness.SuperEffective ],
      [ Type.DARK, TypeEffectiveness.SuperEffective ],
      [ Type.STEEL, TypeEffectiveness.NotVeryEffective ],
    ]),
  ],
]);

export function getTypedDamageMultiplier(damageType: Type, targetTypes: Type[]): number {
  let multiplier = TypeEffectiveness.Normal;

  for (const targetType of targetTypes) {
    const typeMult = typeDamageMultiplierMap.get(damageType)?.get(targetType);
    if (typeMult !== undefined) {
      multiplier *= typeMult;
    }
  }

  return multiplier;
}

export const typeRgbMap = new Map<Type, [ integer, integer, integer ]>([
  [ Type.NORMAL, [ 168, 168, 120 ] ],
  [ Type.FIGHTING, [ 192, 48, 40 ] ],
  [ Type.FLYING, [ 168, 144, 240 ] ],
  [ Type.POISON, [ 160, 64, 160 ] ],
  [ Type.GROUND, [ 224, 192, 104 ] ],
  [ Type.ROCK, [ 184, 160, 56 ] ],
  [ Type.BUG, [ 168, 184, 32 ] ],
  [ Type.GHOST, [ 112, 88, 152 ] ],
  [ Type.STEEL, [ 184, 184, 208 ] ],
  [ Type.FIRE, [ 240, 128, 48 ] ],
  [ Type.WATER, [ 104, 144, 240 ] ],
  [ Type.GRASS, [ 120, 200, 80 ] ],
  [ Type.ELECTRIC, [ 248, 208, 48 ] ],
  [ Type.PSYCHIC, [ 248, 88, 136 ] ],
  [ Type.ICE, [ 152, 216, 216 ] ],
  [ Type.DRAGON, [ 112, 56, 248 ] ],
  [ Type.DARK, [ 112, 88, 72 ] ],
  [ Type.FAIRY, [ 232, 136, 200 ] ],
  [ Type.STELLAR, [ 255, 255, 255 ] ],
]);

export function getTypeRgb(type: Type): [ integer, integer, integer ] {
  return typeRgbMap.get(type) ?? [ 0, 0, 0 ];
}