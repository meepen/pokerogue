export enum Biome {
  TOWN,
  PLAINS,
  GRASS,
  TALL_GRASS,
  METROPOLIS,
  FOREST,
  SEA,
  SWAMP,
  BEACH,
  LAKE,
  SEABED,
  MOUNTAIN,
  BADLANDS,
  CAVE,
  DESERT,
  ICE_CAVE,
  MEADOW,
  POWER_PLANT,
  VOLCANO,
  GRAVEYARD,
  DOJO,
  FACTORY,
  RUINS,
  WASTELAND,
  ABYSS,
  SPACE,
  CONSTRUCTION_SITE,
  JUNGLE,
  FAIRY_CAVE,
  TEMPLE,
  SLUM,
  SNOWY_FOREST,
  ISLAND = 40,
  LABORATORY,
  END = 50
}

export function getBiomeHasProps(biomeType: Biome): boolean {
  switch (biomeType) {
    case Biome.BEACH:
    case Biome.LAKE:
    case Biome.SEABED:
    case Biome.MOUNTAIN:
    case Biome.BADLANDS:
    case Biome.CAVE:
    case Biome.DESERT:
    case Biome.ICE_CAVE:
    case Biome.MEADOW:
    case Biome.POWER_PLANT:
    case Biome.VOLCANO:
    case Biome.GRAVEYARD:
    case Biome.FACTORY:
    case Biome.RUINS:
    case Biome.WASTELAND:
    case Biome.ABYSS:
    case Biome.CONSTRUCTION_SITE:
    case Biome.FAIRY_CAVE:
    case Biome.TEMPLE:
    case Biome.LABORATORY:
    case Biome.END:
      return true;
  }

  return false;
}