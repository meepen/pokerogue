// AUTO GENERATED FILE
import { IPokemonSpecies, PokemonSpeciesFlags } from "#pokeapi/pokemon-species.interface";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonVariety } from "#pokeapi/generated/variety.enum";

export const speciesList = new Map<PokemonSpecies, IPokemonSpecies>();
class Species extends IPokemonSpecies {
  constructor(
    species: PokemonSpecies,
    varieties: PokemonVariety[],
    name: string,
    captureRate: number,
    baseHappiness: number | null,
    speciesFlags: PokemonSpeciesFlags,
  ) {
    super(species, varieties, name, captureRate, baseHappiness, speciesFlags);
    speciesList.set(species, this);
  }
}

new class BulbasaurSpecies extends Species {}(
  PokemonSpecies.Bulbasaur,
  [PokemonVariety.Bulbasaur],
  "Bulbasaur",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class IvysaurSpecies extends Species {}(
  PokemonSpecies.Ivysaur,
  [PokemonVariety.Ivysaur],
  "Ivysaur",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class VenusaurSpecies extends Species {}(
  PokemonSpecies.Venusaur,
  [PokemonVariety.Venusaur, PokemonVariety.VenusaurMega, PokemonVariety.VenusaurGmax],
  "Venusaur",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CharmanderSpecies extends Species {}(
  PokemonSpecies.Charmander,
  [PokemonVariety.Charmander],
  "Charmander",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CharmeleonSpecies extends Species {}(
  PokemonSpecies.Charmeleon,
  [PokemonVariety.Charmeleon],
  "Charmeleon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CharizardSpecies extends Species {}(
  PokemonSpecies.Charizard,
  [PokemonVariety.Charizard, PokemonVariety.CharizardMegaX, PokemonVariety.CharizardMegaY, PokemonVariety.CharizardGmax],
  "Charizard",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SquirtleSpecies extends Species {}(
  PokemonSpecies.Squirtle,
  [PokemonVariety.Squirtle],
  "Squirtle",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class WartortleSpecies extends Species {}(
  PokemonSpecies.Wartortle,
  [PokemonVariety.Wartortle],
  "Wartortle",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class BlastoiseSpecies extends Species {}(
  PokemonSpecies.Blastoise,
  [PokemonVariety.Blastoise, PokemonVariety.BlastoiseMega, PokemonVariety.BlastoiseGmax],
  "Blastoise",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CaterpieSpecies extends Species {}(
  PokemonSpecies.Caterpie,
  [PokemonVariety.Caterpie],
  "Caterpie",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class MetapodSpecies extends Species {}(
  PokemonSpecies.Metapod,
  [PokemonVariety.Metapod],
  "Metapod",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class ButterfreeSpecies extends Species {}(
  PokemonSpecies.Butterfree,
  [PokemonVariety.Butterfree, PokemonVariety.ButterfreeGmax],
  "Butterfree",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class WeedleSpecies extends Species {}(
  PokemonSpecies.Weedle,
  [PokemonVariety.Weedle],
  "Weedle",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class KakunaSpecies extends Species {}(
  PokemonSpecies.Kakuna,
  [PokemonVariety.Kakuna],
  "Kakuna",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class BeedrillSpecies extends Species {}(
  PokemonSpecies.Beedrill,
  [PokemonVariety.Beedrill, PokemonVariety.BeedrillMega],
  "Beedrill",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class PidgeySpecies extends Species {}(
  PokemonSpecies.Pidgey,
  [PokemonVariety.Pidgey],
  "Pidgey",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class PidgeottoSpecies extends Species {}(
  PokemonSpecies.Pidgeotto,
  [PokemonVariety.Pidgeotto],
  "Pidgeotto",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class PidgeotSpecies extends Species {}(
  PokemonSpecies.Pidgeot,
  [PokemonVariety.Pidgeot, PokemonVariety.PidgeotMega],
  "Pidgeot",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class RattataSpecies extends Species {}(
  PokemonSpecies.Rattata,
  [PokemonVariety.Rattata, PokemonVariety.RattataAlola],
  "Rattata",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class RaticateSpecies extends Species {}(
  PokemonSpecies.Raticate,
  [PokemonVariety.Raticate, PokemonVariety.RaticateAlola, PokemonVariety.RaticateTotemAlola],
  "Raticate",
  127,
  70,
  PokemonSpeciesFlags.None,
);
new class SpearowSpecies extends Species {}(
  PokemonSpecies.Spearow,
  [PokemonVariety.Spearow],
  "Spearow",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class FearowSpecies extends Species {}(
  PokemonSpecies.Fearow,
  [PokemonVariety.Fearow],
  "Fearow",
  90,
  70,
  PokemonSpeciesFlags.None,
);
new class EkansSpecies extends Species {}(
  PokemonSpecies.Ekans,
  [PokemonVariety.Ekans],
  "Ekans",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class ArbokSpecies extends Species {}(
  PokemonSpecies.Arbok,
  [PokemonVariety.Arbok],
  "Arbok",
  90,
  70,
  PokemonSpeciesFlags.None,
);
new class PikachuSpecies extends Species {}(
  PokemonSpecies.Pikachu,
  [PokemonVariety.Pikachu, PokemonVariety.PikachuRockStar, PokemonVariety.PikachuBelle, PokemonVariety.PikachuPopStar, PokemonVariety.PikachuPhd, PokemonVariety.PikachuLibre, PokemonVariety.PikachuCosplay, PokemonVariety.PikachuOriginalCap, PokemonVariety.PikachuHoennCap, PokemonVariety.PikachuSinnohCap, PokemonVariety.PikachuUnovaCap, PokemonVariety.PikachuKalosCap, PokemonVariety.PikachuAlolaCap, PokemonVariety.PikachuPartnerCap, PokemonVariety.PikachuStarter, PokemonVariety.PikachuWorldCap, PokemonVariety.PikachuGmax],
  "Pikachu",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class RaichuSpecies extends Species {}(
  PokemonSpecies.Raichu,
  [PokemonVariety.Raichu, PokemonVariety.RaichuAlola],
  "Raichu",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class SandshrewSpecies extends Species {}(
  PokemonSpecies.Sandshrew,
  [PokemonVariety.Sandshrew, PokemonVariety.SandshrewAlola],
  "Sandshrew",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class SandslashSpecies extends Species {}(
  PokemonSpecies.Sandslash,
  [PokemonVariety.Sandslash, PokemonVariety.SandslashAlola],
  "Sandslash",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class NidoranFSpecies extends Species {}(
  PokemonSpecies.NidoranF,
  [PokemonVariety.NidoranF],
  "Nidoran♀",
  235,
  50,
  PokemonSpeciesFlags.None,
);
new class NidorinaSpecies extends Species {}(
  PokemonSpecies.Nidorina,
  [PokemonVariety.Nidorina],
  "Nidorina",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class NidoqueenSpecies extends Species {}(
  PokemonSpecies.Nidoqueen,
  [PokemonVariety.Nidoqueen],
  "Nidoqueen",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class NidoranMSpecies extends Species {}(
  PokemonSpecies.NidoranM,
  [PokemonVariety.NidoranM],
  "Nidoran♂",
  235,
  50,
  PokemonSpeciesFlags.None,
);
new class NidorinoSpecies extends Species {}(
  PokemonSpecies.Nidorino,
  [PokemonVariety.Nidorino],
  "Nidorino",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class NidokingSpecies extends Species {}(
  PokemonSpecies.Nidoking,
  [PokemonVariety.Nidoking],
  "Nidoking",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ClefairySpecies extends Species {}(
  PokemonSpecies.Clefairy,
  [PokemonVariety.Clefairy],
  "Clefairy",
  150,
  140,
  PokemonSpeciesFlags.None,
);
new class ClefableSpecies extends Species {}(
  PokemonSpecies.Clefable,
  [PokemonVariety.Clefable],
  "Clefable",
  25,
  140,
  PokemonSpeciesFlags.None,
);
new class VulpixSpecies extends Species {}(
  PokemonSpecies.Vulpix,
  [PokemonVariety.Vulpix, PokemonVariety.VulpixAlola],
  "Vulpix",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class NinetalesSpecies extends Species {}(
  PokemonSpecies.Ninetales,
  [PokemonVariety.Ninetales, PokemonVariety.NinetalesAlola],
  "Ninetales",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class JigglypuffSpecies extends Species {}(
  PokemonSpecies.Jigglypuff,
  [PokemonVariety.Jigglypuff],
  "Jigglypuff",
  170,
  50,
  PokemonSpeciesFlags.None,
);
new class WigglytuffSpecies extends Species {}(
  PokemonSpecies.Wigglytuff,
  [PokemonVariety.Wigglytuff],
  "Wigglytuff",
  50,
  50,
  PokemonSpeciesFlags.None,
);
new class ZubatSpecies extends Species {}(
  PokemonSpecies.Zubat,
  [PokemonVariety.Zubat],
  "Zubat",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class GolbatSpecies extends Species {}(
  PokemonSpecies.Golbat,
  [PokemonVariety.Golbat],
  "Golbat",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class OddishSpecies extends Species {}(
  PokemonSpecies.Oddish,
  [PokemonVariety.Oddish],
  "Oddish",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class GloomSpecies extends Species {}(
  PokemonSpecies.Gloom,
  [PokemonVariety.Gloom],
  "Gloom",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class VileplumeSpecies extends Species {}(
  PokemonSpecies.Vileplume,
  [PokemonVariety.Vileplume],
  "Vileplume",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ParasSpecies extends Species {}(
  PokemonSpecies.Paras,
  [PokemonVariety.Paras],
  "Paras",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class ParasectSpecies extends Species {}(
  PokemonSpecies.Parasect,
  [PokemonVariety.Parasect],
  "Parasect",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class VenonatSpecies extends Species {}(
  PokemonSpecies.Venonat,
  [PokemonVariety.Venonat],
  "Venonat",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class VenomothSpecies extends Species {}(
  PokemonSpecies.Venomoth,
  [PokemonVariety.Venomoth],
  "Venomoth",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class DiglettSpecies extends Species {}(
  PokemonSpecies.Diglett,
  [PokemonVariety.Diglett, PokemonVariety.DiglettAlola],
  "Diglett",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class DugtrioSpecies extends Species {}(
  PokemonSpecies.Dugtrio,
  [PokemonVariety.Dugtrio, PokemonVariety.DugtrioAlola],
  "Dugtrio",
  50,
  50,
  PokemonSpeciesFlags.None,
);
new class MeowthSpecies extends Species {}(
  PokemonSpecies.Meowth,
  [PokemonVariety.Meowth, PokemonVariety.MeowthAlola, PokemonVariety.MeowthGalar, PokemonVariety.MeowthGmax],
  "Meowth",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class PersianSpecies extends Species {}(
  PokemonSpecies.Persian,
  [PokemonVariety.Persian, PokemonVariety.PersianAlola],
  "Persian",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class PsyduckSpecies extends Species {}(
  PokemonSpecies.Psyduck,
  [PokemonVariety.Psyduck],
  "Psyduck",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class GolduckSpecies extends Species {}(
  PokemonSpecies.Golduck,
  [PokemonVariety.Golduck],
  "Golduck",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class MankeySpecies extends Species {}(
  PokemonSpecies.Mankey,
  [PokemonVariety.Mankey],
  "Mankey",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class PrimeapeSpecies extends Species {}(
  PokemonSpecies.Primeape,
  [PokemonVariety.Primeape],
  "Primeape",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class GrowlitheSpecies extends Species {}(
  PokemonSpecies.Growlithe,
  [PokemonVariety.Growlithe, PokemonVariety.GrowlitheHisui],
  "Growlithe",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class ArcanineSpecies extends Species {}(
  PokemonSpecies.Arcanine,
  [PokemonVariety.Arcanine, PokemonVariety.ArcanineHisui],
  "Arcanine",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class PoliwagSpecies extends Species {}(
  PokemonSpecies.Poliwag,
  [PokemonVariety.Poliwag],
  "Poliwag",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class PoliwhirlSpecies extends Species {}(
  PokemonSpecies.Poliwhirl,
  [PokemonVariety.Poliwhirl],
  "Poliwhirl",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class PoliwrathSpecies extends Species {}(
  PokemonSpecies.Poliwrath,
  [PokemonVariety.Poliwrath],
  "Poliwrath",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class AbraSpecies extends Species {}(
  PokemonSpecies.Abra,
  [PokemonVariety.Abra],
  "Abra",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class KadabraSpecies extends Species {}(
  PokemonSpecies.Kadabra,
  [PokemonVariety.Kadabra],
  "Kadabra",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class AlakazamSpecies extends Species {}(
  PokemonSpecies.Alakazam,
  [PokemonVariety.Alakazam, PokemonVariety.AlakazamMega],
  "Alakazam",
  50,
  50,
  PokemonSpeciesFlags.None,
);
new class MachopSpecies extends Species {}(
  PokemonSpecies.Machop,
  [PokemonVariety.Machop],
  "Machop",
  180,
  50,
  PokemonSpeciesFlags.None,
);
new class MachokeSpecies extends Species {}(
  PokemonSpecies.Machoke,
  [PokemonVariety.Machoke],
  "Machoke",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class MachampSpecies extends Species {}(
  PokemonSpecies.Machamp,
  [PokemonVariety.Machamp, PokemonVariety.MachampGmax],
  "Machamp",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class BellsproutSpecies extends Species {}(
  PokemonSpecies.Bellsprout,
  [PokemonVariety.Bellsprout],
  "Bellsprout",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class WeepinbellSpecies extends Species {}(
  PokemonSpecies.Weepinbell,
  [PokemonVariety.Weepinbell],
  "Weepinbell",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class VictreebelSpecies extends Species {}(
  PokemonSpecies.Victreebel,
  [PokemonVariety.Victreebel],
  "Victreebel",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class TentacoolSpecies extends Species {}(
  PokemonSpecies.Tentacool,
  [PokemonVariety.Tentacool],
  "Tentacool",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class TentacruelSpecies extends Species {}(
  PokemonSpecies.Tentacruel,
  [PokemonVariety.Tentacruel],
  "Tentacruel",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class GeodudeSpecies extends Species {}(
  PokemonSpecies.Geodude,
  [PokemonVariety.Geodude, PokemonVariety.GeodudeAlola],
  "Geodude",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class GravelerSpecies extends Species {}(
  PokemonSpecies.Graveler,
  [PokemonVariety.Graveler, PokemonVariety.GravelerAlola],
  "Graveler",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class GolemSpecies extends Species {}(
  PokemonSpecies.Golem,
  [PokemonVariety.Golem, PokemonVariety.GolemAlola],
  "Golem",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class PonytaSpecies extends Species {}(
  PokemonSpecies.Ponyta,
  [PokemonVariety.Ponyta, PokemonVariety.PonytaGalar],
  "Ponyta",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class RapidashSpecies extends Species {}(
  PokemonSpecies.Rapidash,
  [PokemonVariety.Rapidash, PokemonVariety.RapidashGalar],
  "Rapidash",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class SlowpokeSpecies extends Species {}(
  PokemonSpecies.Slowpoke,
  [PokemonVariety.Slowpoke, PokemonVariety.SlowpokeGalar],
  "Slowpoke",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class SlowbroSpecies extends Species {}(
  PokemonSpecies.Slowbro,
  [PokemonVariety.Slowbro, PokemonVariety.SlowbroMega, PokemonVariety.SlowbroGalar],
  "Slowbro",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class MagnemiteSpecies extends Species {}(
  PokemonSpecies.Magnemite,
  [PokemonVariety.Magnemite],
  "Magnemite",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class MagnetonSpecies extends Species {}(
  PokemonSpecies.Magneton,
  [PokemonVariety.Magneton],
  "Magneton",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class FarfetchdSpecies extends Species {}(
  PokemonSpecies.Farfetchd,
  [PokemonVariety.Farfetchd, PokemonVariety.FarfetchdGalar],
  "Farfetch’d",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DoduoSpecies extends Species {}(
  PokemonSpecies.Doduo,
  [PokemonVariety.Doduo],
  "Doduo",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class DodrioSpecies extends Species {}(
  PokemonSpecies.Dodrio,
  [PokemonVariety.Dodrio],
  "Dodrio",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class SeelSpecies extends Species {}(
  PokemonSpecies.Seel,
  [PokemonVariety.Seel],
  "Seel",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class DewgongSpecies extends Species {}(
  PokemonSpecies.Dewgong,
  [PokemonVariety.Dewgong],
  "Dewgong",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class GrimerSpecies extends Species {}(
  PokemonSpecies.Grimer,
  [PokemonVariety.Grimer, PokemonVariety.GrimerAlola],
  "Grimer",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class MukSpecies extends Species {}(
  PokemonSpecies.Muk,
  [PokemonVariety.Muk, PokemonVariety.MukAlola],
  "Muk",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class ShellderSpecies extends Species {}(
  PokemonSpecies.Shellder,
  [PokemonVariety.Shellder],
  "Shellder",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class CloysterSpecies extends Species {}(
  PokemonSpecies.Cloyster,
  [PokemonVariety.Cloyster],
  "Cloyster",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class GastlySpecies extends Species {}(
  PokemonSpecies.Gastly,
  [PokemonVariety.Gastly],
  "Gastly",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class HaunterSpecies extends Species {}(
  PokemonSpecies.Haunter,
  [PokemonVariety.Haunter],
  "Haunter",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class GengarSpecies extends Species {}(
  PokemonSpecies.Gengar,
  [PokemonVariety.Gengar, PokemonVariety.GengarMega, PokemonVariety.GengarGmax],
  "Gengar",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class OnixSpecies extends Species {}(
  PokemonSpecies.Onix,
  [PokemonVariety.Onix],
  "Onix",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DrowzeeSpecies extends Species {}(
  PokemonSpecies.Drowzee,
  [PokemonVariety.Drowzee],
  "Drowzee",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class HypnoSpecies extends Species {}(
  PokemonSpecies.Hypno,
  [PokemonVariety.Hypno],
  "Hypno",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class KrabbySpecies extends Species {}(
  PokemonSpecies.Krabby,
  [PokemonVariety.Krabby],
  "Krabby",
  225,
  50,
  PokemonSpeciesFlags.None,
);
new class KinglerSpecies extends Species {}(
  PokemonSpecies.Kingler,
  [PokemonVariety.Kingler, PokemonVariety.KinglerGmax],
  "Kingler",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class VoltorbSpecies extends Species {}(
  PokemonSpecies.Voltorb,
  [PokemonVariety.Voltorb, PokemonVariety.VoltorbHisui],
  "Voltorb",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class ElectrodeSpecies extends Species {}(
  PokemonSpecies.Electrode,
  [PokemonVariety.Electrode, PokemonVariety.ElectrodeHisui],
  "Electrode",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class ExeggcuteSpecies extends Species {}(
  PokemonSpecies.Exeggcute,
  [PokemonVariety.Exeggcute],
  "Exeggcute",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class ExeggutorSpecies extends Species {}(
  PokemonSpecies.Exeggutor,
  [PokemonVariety.Exeggutor, PokemonVariety.ExeggutorAlola],
  "Exeggutor",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CuboneSpecies extends Species {}(
  PokemonSpecies.Cubone,
  [PokemonVariety.Cubone],
  "Cubone",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class MarowakSpecies extends Species {}(
  PokemonSpecies.Marowak,
  [PokemonVariety.Marowak, PokemonVariety.MarowakAlola, PokemonVariety.MarowakTotem],
  "Marowak",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class HitmonleeSpecies extends Species {}(
  PokemonSpecies.Hitmonlee,
  [PokemonVariety.Hitmonlee],
  "Hitmonlee",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class HitmonchanSpecies extends Species {}(
  PokemonSpecies.Hitmonchan,
  [PokemonVariety.Hitmonchan],
  "Hitmonchan",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class LickitungSpecies extends Species {}(
  PokemonSpecies.Lickitung,
  [PokemonVariety.Lickitung],
  "Lickitung",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class KoffingSpecies extends Species {}(
  PokemonSpecies.Koffing,
  [PokemonVariety.Koffing],
  "Koffing",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class WeezingSpecies extends Species {}(
  PokemonSpecies.Weezing,
  [PokemonVariety.Weezing, PokemonVariety.WeezingGalar],
  "Weezing",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class RhyhornSpecies extends Species {}(
  PokemonSpecies.Rhyhorn,
  [PokemonVariety.Rhyhorn],
  "Rhyhorn",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class RhydonSpecies extends Species {}(
  PokemonSpecies.Rhydon,
  [PokemonVariety.Rhydon],
  "Rhydon",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class ChanseySpecies extends Species {}(
  PokemonSpecies.Chansey,
  [PokemonVariety.Chansey],
  "Chansey",
  30,
  140,
  PokemonSpeciesFlags.None,
);
new class TangelaSpecies extends Species {}(
  PokemonSpecies.Tangela,
  [PokemonVariety.Tangela],
  "Tangela",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class KangaskhanSpecies extends Species {}(
  PokemonSpecies.Kangaskhan,
  [PokemonVariety.Kangaskhan, PokemonVariety.KangaskhanMega],
  "Kangaskhan",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class HorseaSpecies extends Species {}(
  PokemonSpecies.Horsea,
  [PokemonVariety.Horsea],
  "Horsea",
  225,
  50,
  PokemonSpeciesFlags.None,
);
new class SeadraSpecies extends Species {}(
  PokemonSpecies.Seadra,
  [PokemonVariety.Seadra],
  "Seadra",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class GoldeenSpecies extends Species {}(
  PokemonSpecies.Goldeen,
  [PokemonVariety.Goldeen],
  "Goldeen",
  225,
  50,
  PokemonSpeciesFlags.None,
);
new class SeakingSpecies extends Species {}(
  PokemonSpecies.Seaking,
  [PokemonVariety.Seaking],
  "Seaking",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class StaryuSpecies extends Species {}(
  PokemonSpecies.Staryu,
  [PokemonVariety.Staryu],
  "Staryu",
  225,
  50,
  PokemonSpeciesFlags.None,
);
new class StarmieSpecies extends Species {}(
  PokemonSpecies.Starmie,
  [PokemonVariety.Starmie],
  "Starmie",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class MrMimeSpecies extends Species {}(
  PokemonSpecies.MrMime,
  [PokemonVariety.MrMime, PokemonVariety.MrMimeGalar],
  "Mr. Mime",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ScytherSpecies extends Species {}(
  PokemonSpecies.Scyther,
  [PokemonVariety.Scyther],
  "Scyther",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class JynxSpecies extends Species {}(
  PokemonSpecies.Jynx,
  [PokemonVariety.Jynx],
  "Jynx",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ElectabuzzSpecies extends Species {}(
  PokemonSpecies.Electabuzz,
  [PokemonVariety.Electabuzz],
  "Electabuzz",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MagmarSpecies extends Species {}(
  PokemonSpecies.Magmar,
  [PokemonVariety.Magmar],
  "Magmar",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PinsirSpecies extends Species {}(
  PokemonSpecies.Pinsir,
  [PokemonVariety.Pinsir, PokemonVariety.PinsirMega],
  "Pinsir",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class TaurosSpecies extends Species {}(
  PokemonSpecies.Tauros,
  [PokemonVariety.Tauros, PokemonVariety.TaurosPaldeaCombatBreed, PokemonVariety.TaurosPaldeaBlazeBreed, PokemonVariety.TaurosPaldeaAquaBreed],
  "Tauros",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MagikarpSpecies extends Species {}(
  PokemonSpecies.Magikarp,
  [PokemonVariety.Magikarp],
  "Magikarp",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class GyaradosSpecies extends Species {}(
  PokemonSpecies.Gyarados,
  [PokemonVariety.Gyarados, PokemonVariety.GyaradosMega],
  "Gyarados",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class LaprasSpecies extends Species {}(
  PokemonSpecies.Lapras,
  [PokemonVariety.Lapras, PokemonVariety.LaprasGmax],
  "Lapras",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DittoSpecies extends Species {}(
  PokemonSpecies.Ditto,
  [PokemonVariety.Ditto],
  "Ditto",
  35,
  50,
  PokemonSpeciesFlags.None,
);
new class EeveeSpecies extends Species {}(
  PokemonSpecies.Eevee,
  [PokemonVariety.Eevee, PokemonVariety.EeveeStarter, PokemonVariety.EeveeGmax],
  "Eevee",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class VaporeonSpecies extends Species {}(
  PokemonSpecies.Vaporeon,
  [PokemonVariety.Vaporeon],
  "Vaporeon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class JolteonSpecies extends Species {}(
  PokemonSpecies.Jolteon,
  [PokemonVariety.Jolteon],
  "Jolteon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class FlareonSpecies extends Species {}(
  PokemonSpecies.Flareon,
  [PokemonVariety.Flareon],
  "Flareon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PorygonSpecies extends Species {}(
  PokemonSpecies.Porygon,
  [PokemonVariety.Porygon],
  "Porygon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class OmanyteSpecies extends Species {}(
  PokemonSpecies.Omanyte,
  [PokemonVariety.Omanyte],
  "Omanyte",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class OmastarSpecies extends Species {}(
  PokemonSpecies.Omastar,
  [PokemonVariety.Omastar],
  "Omastar",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class KabutoSpecies extends Species {}(
  PokemonSpecies.Kabuto,
  [PokemonVariety.Kabuto],
  "Kabuto",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class KabutopsSpecies extends Species {}(
  PokemonSpecies.Kabutops,
  [PokemonVariety.Kabutops],
  "Kabutops",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class AerodactylSpecies extends Species {}(
  PokemonSpecies.Aerodactyl,
  [PokemonVariety.Aerodactyl, PokemonVariety.AerodactylMega],
  "Aerodactyl",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SnorlaxSpecies extends Species {}(
  PokemonSpecies.Snorlax,
  [PokemonVariety.Snorlax, PokemonVariety.SnorlaxGmax],
  "Snorlax",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class ArticunoSpecies extends Species {}(
  PokemonSpecies.Articuno,
  [PokemonVariety.Articuno, PokemonVariety.ArticunoGalar],
  "Articuno",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class ZapdosSpecies extends Species {}(
  PokemonSpecies.Zapdos,
  [PokemonVariety.Zapdos, PokemonVariety.ZapdosGalar],
  "Zapdos",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class MoltresSpecies extends Species {}(
  PokemonSpecies.Moltres,
  [PokemonVariety.Moltres, PokemonVariety.MoltresGalar],
  "Moltres",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class DratiniSpecies extends Species {}(
  PokemonSpecies.Dratini,
  [PokemonVariety.Dratini],
  "Dratini",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class DragonairSpecies extends Species {}(
  PokemonSpecies.Dragonair,
  [PokemonVariety.Dragonair],
  "Dragonair",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class DragoniteSpecies extends Species {}(
  PokemonSpecies.Dragonite,
  [PokemonVariety.Dragonite],
  "Dragonite",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class MewtwoSpecies extends Species {}(
  PokemonSpecies.Mewtwo,
  [PokemonVariety.Mewtwo, PokemonVariety.MewtwoMegaX, PokemonVariety.MewtwoMegaY],
  "Mewtwo",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class MewSpecies extends Species {}(
  PokemonSpecies.Mew,
  [PokemonVariety.Mew],
  "Mew",
  45,
  100,
  PokemonSpeciesFlags.Mythical,
);
new class ChikoritaSpecies extends Species {}(
  PokemonSpecies.Chikorita,
  [PokemonVariety.Chikorita],
  "Chikorita",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class BayleefSpecies extends Species {}(
  PokemonSpecies.Bayleef,
  [PokemonVariety.Bayleef],
  "Bayleef",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class MeganiumSpecies extends Species {}(
  PokemonSpecies.Meganium,
  [PokemonVariety.Meganium],
  "Meganium",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class CyndaquilSpecies extends Species {}(
  PokemonSpecies.Cyndaquil,
  [PokemonVariety.Cyndaquil],
  "Cyndaquil",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class QuilavaSpecies extends Species {}(
  PokemonSpecies.Quilava,
  [PokemonVariety.Quilava],
  "Quilava",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class TyphlosionSpecies extends Species {}(
  PokemonSpecies.Typhlosion,
  [PokemonVariety.Typhlosion, PokemonVariety.TyphlosionHisui],
  "Typhlosion",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class TotodileSpecies extends Species {}(
  PokemonSpecies.Totodile,
  [PokemonVariety.Totodile],
  "Totodile",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class CroconawSpecies extends Species {}(
  PokemonSpecies.Croconaw,
  [PokemonVariety.Croconaw],
  "Croconaw",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class FeraligatrSpecies extends Species {}(
  PokemonSpecies.Feraligatr,
  [PokemonVariety.Feraligatr],
  "Feraligatr",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class SentretSpecies extends Species {}(
  PokemonSpecies.Sentret,
  [PokemonVariety.Sentret],
  "Sentret",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class FurretSpecies extends Species {}(
  PokemonSpecies.Furret,
  [PokemonVariety.Furret],
  "Furret",
  90,
  70,
  PokemonSpeciesFlags.None,
);
new class HoothootSpecies extends Species {}(
  PokemonSpecies.Hoothoot,
  [PokemonVariety.Hoothoot],
  "Hoothoot",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class NoctowlSpecies extends Species {}(
  PokemonSpecies.Noctowl,
  [PokemonVariety.Noctowl],
  "Noctowl",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class LedybaSpecies extends Species {}(
  PokemonSpecies.Ledyba,
  [PokemonVariety.Ledyba],
  "Ledyba",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class LedianSpecies extends Species {}(
  PokemonSpecies.Ledian,
  [PokemonVariety.Ledian],
  "Ledian",
  90,
  70,
  PokemonSpeciesFlags.None,
);
new class SpinarakSpecies extends Species {}(
  PokemonSpecies.Spinarak,
  [PokemonVariety.Spinarak],
  "Spinarak",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class AriadosSpecies extends Species {}(
  PokemonSpecies.Ariados,
  [PokemonVariety.Ariados],
  "Ariados",
  90,
  70,
  PokemonSpeciesFlags.None,
);
new class CrobatSpecies extends Species {}(
  PokemonSpecies.Crobat,
  [PokemonVariety.Crobat],
  "Crobat",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class ChinchouSpecies extends Species {}(
  PokemonSpecies.Chinchou,
  [PokemonVariety.Chinchou],
  "Chinchou",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class LanturnSpecies extends Species {}(
  PokemonSpecies.Lanturn,
  [PokemonVariety.Lanturn],
  "Lanturn",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class PichuSpecies extends Species {}(
  PokemonSpecies.Pichu,
  [PokemonVariety.Pichu],
  "Pichu",
  190,
  50,
  PokemonSpeciesFlags.Baby,
);
new class CleffaSpecies extends Species {}(
  PokemonSpecies.Cleffa,
  [PokemonVariety.Cleffa],
  "Cleffa",
  150,
  140,
  PokemonSpeciesFlags.Baby,
);
new class IgglybuffSpecies extends Species {}(
  PokemonSpecies.Igglybuff,
  [PokemonVariety.Igglybuff],
  "Igglybuff",
  170,
  50,
  PokemonSpeciesFlags.Baby,
);
new class TogepiSpecies extends Species {}(
  PokemonSpecies.Togepi,
  [PokemonVariety.Togepi],
  "Togepi",
  190,
  50,
  PokemonSpeciesFlags.Baby,
);
new class TogeticSpecies extends Species {}(
  PokemonSpecies.Togetic,
  [PokemonVariety.Togetic],
  "Togetic",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class NatuSpecies extends Species {}(
  PokemonSpecies.Natu,
  [PokemonVariety.Natu],
  "Natu",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class XatuSpecies extends Species {}(
  PokemonSpecies.Xatu,
  [PokemonVariety.Xatu],
  "Xatu",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class MareepSpecies extends Species {}(
  PokemonSpecies.Mareep,
  [PokemonVariety.Mareep],
  "Mareep",
  235,
  70,
  PokemonSpeciesFlags.None,
);
new class FlaaffySpecies extends Species {}(
  PokemonSpecies.Flaaffy,
  [PokemonVariety.Flaaffy],
  "Flaaffy",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class AmpharosSpecies extends Species {}(
  PokemonSpecies.Ampharos,
  [PokemonVariety.Ampharos, PokemonVariety.AmpharosMega],
  "Ampharos",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class BellossomSpecies extends Species {}(
  PokemonSpecies.Bellossom,
  [PokemonVariety.Bellossom],
  "Bellossom",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MarillSpecies extends Species {}(
  PokemonSpecies.Marill,
  [PokemonVariety.Marill],
  "Marill",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class AzumarillSpecies extends Species {}(
  PokemonSpecies.Azumarill,
  [PokemonVariety.Azumarill],
  "Azumarill",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class SudowoodoSpecies extends Species {}(
  PokemonSpecies.Sudowoodo,
  [PokemonVariety.Sudowoodo],
  "Sudowoodo",
  65,
  50,
  PokemonSpeciesFlags.None,
);
new class PolitoedSpecies extends Species {}(
  PokemonSpecies.Politoed,
  [PokemonVariety.Politoed],
  "Politoed",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class HoppipSpecies extends Species {}(
  PokemonSpecies.Hoppip,
  [PokemonVariety.Hoppip],
  "Hoppip",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class SkiploomSpecies extends Species {}(
  PokemonSpecies.Skiploom,
  [PokemonVariety.Skiploom],
  "Skiploom",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class JumpluffSpecies extends Species {}(
  PokemonSpecies.Jumpluff,
  [PokemonVariety.Jumpluff],
  "Jumpluff",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class AipomSpecies extends Species {}(
  PokemonSpecies.Aipom,
  [PokemonVariety.Aipom],
  "Aipom",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class SunkernSpecies extends Species {}(
  PokemonSpecies.Sunkern,
  [PokemonVariety.Sunkern],
  "Sunkern",
  235,
  70,
  PokemonSpeciesFlags.None,
);
new class SunfloraSpecies extends Species {}(
  PokemonSpecies.Sunflora,
  [PokemonVariety.Sunflora],
  "Sunflora",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class YanmaSpecies extends Species {}(
  PokemonSpecies.Yanma,
  [PokemonVariety.Yanma],
  "Yanma",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class WooperSpecies extends Species {}(
  PokemonSpecies.Wooper,
  [PokemonVariety.Wooper, PokemonVariety.WooperPaldea],
  "Wooper",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class QuagsireSpecies extends Species {}(
  PokemonSpecies.Quagsire,
  [PokemonVariety.Quagsire],
  "Quagsire",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class EspeonSpecies extends Species {}(
  PokemonSpecies.Espeon,
  [PokemonVariety.Espeon],
  "Espeon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class UmbreonSpecies extends Species {}(
  PokemonSpecies.Umbreon,
  [PokemonVariety.Umbreon],
  "Umbreon",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class MurkrowSpecies extends Species {}(
  PokemonSpecies.Murkrow,
  [PokemonVariety.Murkrow],
  "Murkrow",
  30,
  35,
  PokemonSpeciesFlags.None,
);
new class SlowkingSpecies extends Species {}(
  PokemonSpecies.Slowking,
  [PokemonVariety.Slowking, PokemonVariety.SlowkingGalar],
  "Slowking",
  70,
  50,
  PokemonSpeciesFlags.None,
);
new class MisdreavusSpecies extends Species {}(
  PokemonSpecies.Misdreavus,
  [PokemonVariety.Misdreavus],
  "Misdreavus",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class UnownSpecies extends Species {}(
  PokemonSpecies.Unown,
  [PokemonVariety.Unown],
  "Unown",
  225,
  70,
  PokemonSpeciesFlags.None,
);
new class WobbuffetSpecies extends Species {}(
  PokemonSpecies.Wobbuffet,
  [PokemonVariety.Wobbuffet],
  "Wobbuffet",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class GirafarigSpecies extends Species {}(
  PokemonSpecies.Girafarig,
  [PokemonVariety.Girafarig],
  "Girafarig",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class PinecoSpecies extends Species {}(
  PokemonSpecies.Pineco,
  [PokemonVariety.Pineco],
  "Pineco",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class ForretressSpecies extends Species {}(
  PokemonSpecies.Forretress,
  [PokemonVariety.Forretress],
  "Forretress",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class DunsparceSpecies extends Species {}(
  PokemonSpecies.Dunsparce,
  [PokemonVariety.Dunsparce],
  "Dunsparce",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class GligarSpecies extends Species {}(
  PokemonSpecies.Gligar,
  [PokemonVariety.Gligar],
  "Gligar",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class SteelixSpecies extends Species {}(
  PokemonSpecies.Steelix,
  [PokemonVariety.Steelix, PokemonVariety.SteelixMega],
  "Steelix",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class SnubbullSpecies extends Species {}(
  PokemonSpecies.Snubbull,
  [PokemonVariety.Snubbull],
  "Snubbull",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class GranbullSpecies extends Species {}(
  PokemonSpecies.Granbull,
  [PokemonVariety.Granbull],
  "Granbull",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class QwilfishSpecies extends Species {}(
  PokemonSpecies.Qwilfish,
  [PokemonVariety.Qwilfish, PokemonVariety.QwilfishHisui],
  "Qwilfish",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ScizorSpecies extends Species {}(
  PokemonSpecies.Scizor,
  [PokemonVariety.Scizor, PokemonVariety.ScizorMega],
  "Scizor",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class ShuckleSpecies extends Species {}(
  PokemonSpecies.Shuckle,
  [PokemonVariety.Shuckle],
  "Shuckle",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class HeracrossSpecies extends Species {}(
  PokemonSpecies.Heracross,
  [PokemonVariety.Heracross, PokemonVariety.HeracrossMega],
  "Heracross",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SneaselSpecies extends Species {}(
  PokemonSpecies.Sneasel,
  [PokemonVariety.Sneasel, PokemonVariety.SneaselHisui],
  "Sneasel",
  60,
  35,
  PokemonSpeciesFlags.None,
);
new class TeddiursaSpecies extends Species {}(
  PokemonSpecies.Teddiursa,
  [PokemonVariety.Teddiursa],
  "Teddiursa",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class UrsaringSpecies extends Species {}(
  PokemonSpecies.Ursaring,
  [PokemonVariety.Ursaring],
  "Ursaring",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class SlugmaSpecies extends Species {}(
  PokemonSpecies.Slugma,
  [PokemonVariety.Slugma],
  "Slugma",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class MagcargoSpecies extends Species {}(
  PokemonSpecies.Magcargo,
  [PokemonVariety.Magcargo],
  "Magcargo",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class SwinubSpecies extends Species {}(
  PokemonSpecies.Swinub,
  [PokemonVariety.Swinub],
  "Swinub",
  225,
  50,
  PokemonSpeciesFlags.None,
);
new class PiloswineSpecies extends Species {}(
  PokemonSpecies.Piloswine,
  [PokemonVariety.Piloswine],
  "Piloswine",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class CorsolaSpecies extends Species {}(
  PokemonSpecies.Corsola,
  [PokemonVariety.Corsola, PokemonVariety.CorsolaGalar],
  "Corsola",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class RemoraidSpecies extends Species {}(
  PokemonSpecies.Remoraid,
  [PokemonVariety.Remoraid],
  "Remoraid",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class OctillerySpecies extends Species {}(
  PokemonSpecies.Octillery,
  [PokemonVariety.Octillery],
  "Octillery",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class DelibirdSpecies extends Species {}(
  PokemonSpecies.Delibird,
  [PokemonVariety.Delibird],
  "Delibird",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MantineSpecies extends Species {}(
  PokemonSpecies.Mantine,
  [PokemonVariety.Mantine],
  "Mantine",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class SkarmorySpecies extends Species {}(
  PokemonSpecies.Skarmory,
  [PokemonVariety.Skarmory],
  "Skarmory",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class HoundourSpecies extends Species {}(
  PokemonSpecies.Houndour,
  [PokemonVariety.Houndour],
  "Houndour",
  120,
  35,
  PokemonSpeciesFlags.None,
);
new class HoundoomSpecies extends Species {}(
  PokemonSpecies.Houndoom,
  [PokemonVariety.Houndoom, PokemonVariety.HoundoomMega],
  "Houndoom",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class KingdraSpecies extends Species {}(
  PokemonSpecies.Kingdra,
  [PokemonVariety.Kingdra],
  "Kingdra",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PhanpySpecies extends Species {}(
  PokemonSpecies.Phanpy,
  [PokemonVariety.Phanpy],
  "Phanpy",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class DonphanSpecies extends Species {}(
  PokemonSpecies.Donphan,
  [PokemonVariety.Donphan],
  "Donphan",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class Porygon2Species extends Species {}(
  PokemonSpecies.Porygon2,
  [PokemonVariety.Porygon2],
  "Porygon2",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class StantlerSpecies extends Species {}(
  PokemonSpecies.Stantler,
  [PokemonVariety.Stantler],
  "Stantler",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class SmeargleSpecies extends Species {}(
  PokemonSpecies.Smeargle,
  [PokemonVariety.Smeargle],
  "Smeargle",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class TyrogueSpecies extends Species {}(
  PokemonSpecies.Tyrogue,
  [PokemonVariety.Tyrogue],
  "Tyrogue",
  75,
  50,
  PokemonSpeciesFlags.Baby,
);
new class HitmontopSpecies extends Species {}(
  PokemonSpecies.Hitmontop,
  [PokemonVariety.Hitmontop],
  "Hitmontop",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SmoochumSpecies extends Species {}(
  PokemonSpecies.Smoochum,
  [PokemonVariety.Smoochum],
  "Smoochum",
  45,
  50,
  PokemonSpeciesFlags.Baby,
);
new class ElekidSpecies extends Species {}(
  PokemonSpecies.Elekid,
  [PokemonVariety.Elekid],
  "Elekid",
  45,
  50,
  PokemonSpeciesFlags.Baby,
);
new class MagbySpecies extends Species {}(
  PokemonSpecies.Magby,
  [PokemonVariety.Magby],
  "Magby",
  45,
  50,
  PokemonSpeciesFlags.Baby,
);
new class MiltankSpecies extends Species {}(
  PokemonSpecies.Miltank,
  [PokemonVariety.Miltank],
  "Miltank",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class BlisseySpecies extends Species {}(
  PokemonSpecies.Blissey,
  [PokemonVariety.Blissey],
  "Blissey",
  30,
  140,
  PokemonSpeciesFlags.None,
);
new class RaikouSpecies extends Species {}(
  PokemonSpecies.Raikou,
  [PokemonVariety.Raikou],
  "Raikou",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class EnteiSpecies extends Species {}(
  PokemonSpecies.Entei,
  [PokemonVariety.Entei],
  "Entei",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class SuicuneSpecies extends Species {}(
  PokemonSpecies.Suicune,
  [PokemonVariety.Suicune],
  "Suicune",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class LarvitarSpecies extends Species {}(
  PokemonSpecies.Larvitar,
  [PokemonVariety.Larvitar],
  "Larvitar",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class PupitarSpecies extends Species {}(
  PokemonSpecies.Pupitar,
  [PokemonVariety.Pupitar],
  "Pupitar",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class TyranitarSpecies extends Species {}(
  PokemonSpecies.Tyranitar,
  [PokemonVariety.Tyranitar, PokemonVariety.TyranitarMega],
  "Tyranitar",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class LugiaSpecies extends Species {}(
  PokemonSpecies.Lugia,
  [PokemonVariety.Lugia],
  "Lugia",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class HoOhSpecies extends Species {}(
  PokemonSpecies.HoOh,
  [PokemonVariety.HoOh],
  "Ho-Oh",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class CelebiSpecies extends Species {}(
  PokemonSpecies.Celebi,
  [PokemonVariety.Celebi],
  "Celebi",
  45,
  100,
  PokemonSpeciesFlags.Mythical,
);
new class TreeckoSpecies extends Species {}(
  PokemonSpecies.Treecko,
  [PokemonVariety.Treecko],
  "Treecko",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class GrovyleSpecies extends Species {}(
  PokemonSpecies.Grovyle,
  [PokemonVariety.Grovyle],
  "Grovyle",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SceptileSpecies extends Species {}(
  PokemonSpecies.Sceptile,
  [PokemonVariety.Sceptile, PokemonVariety.SceptileMega],
  "Sceptile",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class TorchicSpecies extends Species {}(
  PokemonSpecies.Torchic,
  [PokemonVariety.Torchic],
  "Torchic",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CombuskenSpecies extends Species {}(
  PokemonSpecies.Combusken,
  [PokemonVariety.Combusken],
  "Combusken",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class BlazikenSpecies extends Species {}(
  PokemonSpecies.Blaziken,
  [PokemonVariety.Blaziken, PokemonVariety.BlazikenMega],
  "Blaziken",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MudkipSpecies extends Species {}(
  PokemonSpecies.Mudkip,
  [PokemonVariety.Mudkip],
  "Mudkip",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MarshtompSpecies extends Species {}(
  PokemonSpecies.Marshtomp,
  [PokemonVariety.Marshtomp],
  "Marshtomp",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SwampertSpecies extends Species {}(
  PokemonSpecies.Swampert,
  [PokemonVariety.Swampert, PokemonVariety.SwampertMega],
  "Swampert",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PoochyenaSpecies extends Species {}(
  PokemonSpecies.Poochyena,
  [PokemonVariety.Poochyena],
  "Poochyena",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class MightyenaSpecies extends Species {}(
  PokemonSpecies.Mightyena,
  [PokemonVariety.Mightyena],
  "Mightyena",
  127,
  70,
  PokemonSpeciesFlags.None,
);
new class ZigzagoonSpecies extends Species {}(
  PokemonSpecies.Zigzagoon,
  [PokemonVariety.Zigzagoon, PokemonVariety.ZigzagoonGalar],
  "Zigzagoon",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class LinooneSpecies extends Species {}(
  PokemonSpecies.Linoone,
  [PokemonVariety.Linoone, PokemonVariety.LinooneGalar],
  "Linoone",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class WurmpleSpecies extends Species {}(
  PokemonSpecies.Wurmple,
  [PokemonVariety.Wurmple],
  "Wurmple",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class SilcoonSpecies extends Species {}(
  PokemonSpecies.Silcoon,
  [PokemonVariety.Silcoon],
  "Silcoon",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class BeautiflySpecies extends Species {}(
  PokemonSpecies.Beautifly,
  [PokemonVariety.Beautifly],
  "Beautifly",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class CascoonSpecies extends Species {}(
  PokemonSpecies.Cascoon,
  [PokemonVariety.Cascoon],
  "Cascoon",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class DustoxSpecies extends Species {}(
  PokemonSpecies.Dustox,
  [PokemonVariety.Dustox],
  "Dustox",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class LotadSpecies extends Species {}(
  PokemonSpecies.Lotad,
  [PokemonVariety.Lotad],
  "Lotad",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class LombreSpecies extends Species {}(
  PokemonSpecies.Lombre,
  [PokemonVariety.Lombre],
  "Lombre",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class LudicoloSpecies extends Species {}(
  PokemonSpecies.Ludicolo,
  [PokemonVariety.Ludicolo],
  "Ludicolo",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SeedotSpecies extends Species {}(
  PokemonSpecies.Seedot,
  [PokemonVariety.Seedot],
  "Seedot",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class NuzleafSpecies extends Species {}(
  PokemonSpecies.Nuzleaf,
  [PokemonVariety.Nuzleaf],
  "Nuzleaf",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class ShiftrySpecies extends Species {}(
  PokemonSpecies.Shiftry,
  [PokemonVariety.Shiftry],
  "Shiftry",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class TaillowSpecies extends Species {}(
  PokemonSpecies.Taillow,
  [PokemonVariety.Taillow],
  "Taillow",
  200,
  70,
  PokemonSpeciesFlags.None,
);
new class SwellowSpecies extends Species {}(
  PokemonSpecies.Swellow,
  [PokemonVariety.Swellow],
  "Swellow",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class WingullSpecies extends Species {}(
  PokemonSpecies.Wingull,
  [PokemonVariety.Wingull],
  "Wingull",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class PelipperSpecies extends Species {}(
  PokemonSpecies.Pelipper,
  [PokemonVariety.Pelipper],
  "Pelipper",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class RaltsSpecies extends Species {}(
  PokemonSpecies.Ralts,
  [PokemonVariety.Ralts],
  "Ralts",
  235,
  35,
  PokemonSpeciesFlags.None,
);
new class KirliaSpecies extends Species {}(
  PokemonSpecies.Kirlia,
  [PokemonVariety.Kirlia],
  "Kirlia",
  120,
  35,
  PokemonSpeciesFlags.None,
);
new class GardevoirSpecies extends Species {}(
  PokemonSpecies.Gardevoir,
  [PokemonVariety.Gardevoir, PokemonVariety.GardevoirMega],
  "Gardevoir",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class SurskitSpecies extends Species {}(
  PokemonSpecies.Surskit,
  [PokemonVariety.Surskit],
  "Surskit",
  200,
  70,
  PokemonSpeciesFlags.None,
);
new class MasquerainSpecies extends Species {}(
  PokemonSpecies.Masquerain,
  [PokemonVariety.Masquerain],
  "Masquerain",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class ShroomishSpecies extends Species {}(
  PokemonSpecies.Shroomish,
  [PokemonVariety.Shroomish],
  "Shroomish",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class BreloomSpecies extends Species {}(
  PokemonSpecies.Breloom,
  [PokemonVariety.Breloom],
  "Breloom",
  90,
  70,
  PokemonSpeciesFlags.None,
);
new class SlakothSpecies extends Species {}(
  PokemonSpecies.Slakoth,
  [PokemonVariety.Slakoth],
  "Slakoth",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class VigorothSpecies extends Species {}(
  PokemonSpecies.Vigoroth,
  [PokemonVariety.Vigoroth],
  "Vigoroth",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class SlakingSpecies extends Species {}(
  PokemonSpecies.Slaking,
  [PokemonVariety.Slaking],
  "Slaking",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class NincadaSpecies extends Species {}(
  PokemonSpecies.Nincada,
  [PokemonVariety.Nincada],
  "Nincada",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class NinjaskSpecies extends Species {}(
  PokemonSpecies.Ninjask,
  [PokemonVariety.Ninjask],
  "Ninjask",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class ShedinjaSpecies extends Species {}(
  PokemonSpecies.Shedinja,
  [PokemonVariety.Shedinja],
  "Shedinja",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class WhismurSpecies extends Species {}(
  PokemonSpecies.Whismur,
  [PokemonVariety.Whismur],
  "Whismur",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class LoudredSpecies extends Species {}(
  PokemonSpecies.Loudred,
  [PokemonVariety.Loudred],
  "Loudred",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class ExploudSpecies extends Species {}(
  PokemonSpecies.Exploud,
  [PokemonVariety.Exploud],
  "Exploud",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MakuhitaSpecies extends Species {}(
  PokemonSpecies.Makuhita,
  [PokemonVariety.Makuhita],
  "Makuhita",
  180,
  70,
  PokemonSpeciesFlags.None,
);
new class HariyamaSpecies extends Species {}(
  PokemonSpecies.Hariyama,
  [PokemonVariety.Hariyama],
  "Hariyama",
  200,
  70,
  PokemonSpeciesFlags.None,
);
new class AzurillSpecies extends Species {}(
  PokemonSpecies.Azurill,
  [PokemonVariety.Azurill],
  "Azurill",
  150,
  50,
  PokemonSpeciesFlags.Baby,
);
new class NosepassSpecies extends Species {}(
  PokemonSpecies.Nosepass,
  [PokemonVariety.Nosepass],
  "Nosepass",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class SkittySpecies extends Species {}(
  PokemonSpecies.Skitty,
  [PokemonVariety.Skitty],
  "Skitty",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class DelcattySpecies extends Species {}(
  PokemonSpecies.Delcatty,
  [PokemonVariety.Delcatty],
  "Delcatty",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class SableyeSpecies extends Species {}(
  PokemonSpecies.Sableye,
  [PokemonVariety.Sableye, PokemonVariety.SableyeMega],
  "Sableye",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class MawileSpecies extends Species {}(
  PokemonSpecies.Mawile,
  [PokemonVariety.Mawile, PokemonVariety.MawileMega],
  "Mawile",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class AronSpecies extends Species {}(
  PokemonSpecies.Aron,
  [PokemonVariety.Aron],
  "Aron",
  180,
  35,
  PokemonSpeciesFlags.None,
);
new class LaironSpecies extends Species {}(
  PokemonSpecies.Lairon,
  [PokemonVariety.Lairon],
  "Lairon",
  90,
  35,
  PokemonSpeciesFlags.None,
);
new class AggronSpecies extends Species {}(
  PokemonSpecies.Aggron,
  [PokemonVariety.Aggron, PokemonVariety.AggronMega],
  "Aggron",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class MedititeSpecies extends Species {}(
  PokemonSpecies.Meditite,
  [PokemonVariety.Meditite],
  "Meditite",
  180,
  70,
  PokemonSpeciesFlags.None,
);
new class MedichamSpecies extends Species {}(
  PokemonSpecies.Medicham,
  [PokemonVariety.Medicham, PokemonVariety.MedichamMega],
  "Medicham",
  90,
  70,
  PokemonSpeciesFlags.None,
);
new class ElectrikeSpecies extends Species {}(
  PokemonSpecies.Electrike,
  [PokemonVariety.Electrike],
  "Electrike",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class ManectricSpecies extends Species {}(
  PokemonSpecies.Manectric,
  [PokemonVariety.Manectric, PokemonVariety.ManectricMega],
  "Manectric",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PlusleSpecies extends Species {}(
  PokemonSpecies.Plusle,
  [PokemonVariety.Plusle],
  "Plusle",
  200,
  70,
  PokemonSpeciesFlags.None,
);
new class MinunSpecies extends Species {}(
  PokemonSpecies.Minun,
  [PokemonVariety.Minun],
  "Minun",
  200,
  70,
  PokemonSpeciesFlags.None,
);
new class VolbeatSpecies extends Species {}(
  PokemonSpecies.Volbeat,
  [PokemonVariety.Volbeat],
  "Volbeat",
  150,
  70,
  PokemonSpeciesFlags.None,
);
new class IllumiseSpecies extends Species {}(
  PokemonSpecies.Illumise,
  [PokemonVariety.Illumise],
  "Illumise",
  150,
  70,
  PokemonSpeciesFlags.None,
);
new class RoseliaSpecies extends Species {}(
  PokemonSpecies.Roselia,
  [PokemonVariety.Roselia],
  "Roselia",
  150,
  50,
  PokemonSpeciesFlags.None,
);
new class GulpinSpecies extends Species {}(
  PokemonSpecies.Gulpin,
  [PokemonVariety.Gulpin],
  "Gulpin",
  225,
  70,
  PokemonSpeciesFlags.None,
);
new class SwalotSpecies extends Species {}(
  PokemonSpecies.Swalot,
  [PokemonVariety.Swalot],
  "Swalot",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class CarvanhaSpecies extends Species {}(
  PokemonSpecies.Carvanha,
  [PokemonVariety.Carvanha],
  "Carvanha",
  225,
  35,
  PokemonSpeciesFlags.None,
);
new class SharpedoSpecies extends Species {}(
  PokemonSpecies.Sharpedo,
  [PokemonVariety.Sharpedo, PokemonVariety.SharpedoMega],
  "Sharpedo",
  60,
  35,
  PokemonSpeciesFlags.None,
);
new class WailmerSpecies extends Species {}(
  PokemonSpecies.Wailmer,
  [PokemonVariety.Wailmer],
  "Wailmer",
  125,
  50,
  PokemonSpeciesFlags.None,
);
new class WailordSpecies extends Species {}(
  PokemonSpecies.Wailord,
  [PokemonVariety.Wailord],
  "Wailord",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class NumelSpecies extends Species {}(
  PokemonSpecies.Numel,
  [PokemonVariety.Numel],
  "Numel",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class CameruptSpecies extends Species {}(
  PokemonSpecies.Camerupt,
  [PokemonVariety.Camerupt, PokemonVariety.CameruptMega],
  "Camerupt",
  150,
  70,
  PokemonSpeciesFlags.None,
);
new class TorkoalSpecies extends Species {}(
  PokemonSpecies.Torkoal,
  [PokemonVariety.Torkoal],
  "Torkoal",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class SpoinkSpecies extends Species {}(
  PokemonSpecies.Spoink,
  [PokemonVariety.Spoink],
  "Spoink",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class GrumpigSpecies extends Species {}(
  PokemonSpecies.Grumpig,
  [PokemonVariety.Grumpig],
  "Grumpig",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class SpindaSpecies extends Species {}(
  PokemonSpecies.Spinda,
  [PokemonVariety.Spinda],
  "Spinda",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class TrapinchSpecies extends Species {}(
  PokemonSpecies.Trapinch,
  [PokemonVariety.Trapinch],
  "Trapinch",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class VibravaSpecies extends Species {}(
  PokemonSpecies.Vibrava,
  [PokemonVariety.Vibrava],
  "Vibrava",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class FlygonSpecies extends Species {}(
  PokemonSpecies.Flygon,
  [PokemonVariety.Flygon],
  "Flygon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CacneaSpecies extends Species {}(
  PokemonSpecies.Cacnea,
  [PokemonVariety.Cacnea],
  "Cacnea",
  190,
  35,
  PokemonSpeciesFlags.None,
);
new class CacturneSpecies extends Species {}(
  PokemonSpecies.Cacturne,
  [PokemonVariety.Cacturne],
  "Cacturne",
  60,
  35,
  PokemonSpeciesFlags.None,
);
new class SwabluSpecies extends Species {}(
  PokemonSpecies.Swablu,
  [PokemonVariety.Swablu],
  "Swablu",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class AltariaSpecies extends Species {}(
  PokemonSpecies.Altaria,
  [PokemonVariety.Altaria, PokemonVariety.AltariaMega],
  "Altaria",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ZangooseSpecies extends Species {}(
  PokemonSpecies.Zangoose,
  [PokemonVariety.Zangoose],
  "Zangoose",
  90,
  70,
  PokemonSpeciesFlags.None,
);
new class SeviperSpecies extends Species {}(
  PokemonSpecies.Seviper,
  [PokemonVariety.Seviper],
  "Seviper",
  90,
  70,
  PokemonSpeciesFlags.None,
);
new class LunatoneSpecies extends Species {}(
  PokemonSpecies.Lunatone,
  [PokemonVariety.Lunatone],
  "Lunatone",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SolrockSpecies extends Species {}(
  PokemonSpecies.Solrock,
  [PokemonVariety.Solrock],
  "Solrock",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class BarboachSpecies extends Species {}(
  PokemonSpecies.Barboach,
  [PokemonVariety.Barboach],
  "Barboach",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class WhiscashSpecies extends Species {}(
  PokemonSpecies.Whiscash,
  [PokemonVariety.Whiscash],
  "Whiscash",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class CorphishSpecies extends Species {}(
  PokemonSpecies.Corphish,
  [PokemonVariety.Corphish],
  "Corphish",
  205,
  50,
  PokemonSpeciesFlags.None,
);
new class CrawdauntSpecies extends Species {}(
  PokemonSpecies.Crawdaunt,
  [PokemonVariety.Crawdaunt],
  "Crawdaunt",
  155,
  50,
  PokemonSpeciesFlags.None,
);
new class BaltoySpecies extends Species {}(
  PokemonSpecies.Baltoy,
  [PokemonVariety.Baltoy],
  "Baltoy",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class ClaydolSpecies extends Species {}(
  PokemonSpecies.Claydol,
  [PokemonVariety.Claydol],
  "Claydol",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class LileepSpecies extends Species {}(
  PokemonSpecies.Lileep,
  [PokemonVariety.Lileep],
  "Lileep",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CradilySpecies extends Species {}(
  PokemonSpecies.Cradily,
  [PokemonVariety.Cradily],
  "Cradily",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class AnorithSpecies extends Species {}(
  PokemonSpecies.Anorith,
  [PokemonVariety.Anorith],
  "Anorith",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ArmaldoSpecies extends Species {}(
  PokemonSpecies.Armaldo,
  [PokemonVariety.Armaldo],
  "Armaldo",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class FeebasSpecies extends Species {}(
  PokemonSpecies.Feebas,
  [PokemonVariety.Feebas],
  "Feebas",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class MiloticSpecies extends Species {}(
  PokemonSpecies.Milotic,
  [PokemonVariety.Milotic],
  "Milotic",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class CastformSpecies extends Species {}(
  PokemonSpecies.Castform,
  [PokemonVariety.Castform, PokemonVariety.CastformSunny, PokemonVariety.CastformRainy, PokemonVariety.CastformSnowy],
  "Castform",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class KecleonSpecies extends Species {}(
  PokemonSpecies.Kecleon,
  [PokemonVariety.Kecleon],
  "Kecleon",
  200,
  70,
  PokemonSpeciesFlags.None,
);
new class ShuppetSpecies extends Species {}(
  PokemonSpecies.Shuppet,
  [PokemonVariety.Shuppet],
  "Shuppet",
  225,
  35,
  PokemonSpeciesFlags.None,
);
new class BanetteSpecies extends Species {}(
  PokemonSpecies.Banette,
  [PokemonVariety.Banette, PokemonVariety.BanetteMega],
  "Banette",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class DuskullSpecies extends Species {}(
  PokemonSpecies.Duskull,
  [PokemonVariety.Duskull],
  "Duskull",
  190,
  35,
  PokemonSpeciesFlags.None,
);
new class DusclopsSpecies extends Species {}(
  PokemonSpecies.Dusclops,
  [PokemonVariety.Dusclops],
  "Dusclops",
  90,
  35,
  PokemonSpeciesFlags.None,
);
new class TropiusSpecies extends Species {}(
  PokemonSpecies.Tropius,
  [PokemonVariety.Tropius],
  "Tropius",
  200,
  70,
  PokemonSpeciesFlags.None,
);
new class ChimechoSpecies extends Species {}(
  PokemonSpecies.Chimecho,
  [PokemonVariety.Chimecho],
  "Chimecho",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class AbsolSpecies extends Species {}(
  PokemonSpecies.Absol,
  [PokemonVariety.Absol, PokemonVariety.AbsolMega],
  "Absol",
  30,
  35,
  PokemonSpeciesFlags.None,
);
new class WynautSpecies extends Species {}(
  PokemonSpecies.Wynaut,
  [PokemonVariety.Wynaut],
  "Wynaut",
  125,
  50,
  PokemonSpeciesFlags.Baby,
);
new class SnoruntSpecies extends Species {}(
  PokemonSpecies.Snorunt,
  [PokemonVariety.Snorunt],
  "Snorunt",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class GlalieSpecies extends Species {}(
  PokemonSpecies.Glalie,
  [PokemonVariety.Glalie, PokemonVariety.GlalieMega],
  "Glalie",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class SphealSpecies extends Species {}(
  PokemonSpecies.Spheal,
  [PokemonVariety.Spheal],
  "Spheal",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class SealeoSpecies extends Species {}(
  PokemonSpecies.Sealeo,
  [PokemonVariety.Sealeo],
  "Sealeo",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class WalreinSpecies extends Species {}(
  PokemonSpecies.Walrein,
  [PokemonVariety.Walrein],
  "Walrein",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ClamperlSpecies extends Species {}(
  PokemonSpecies.Clamperl,
  [PokemonVariety.Clamperl],
  "Clamperl",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class HuntailSpecies extends Species {}(
  PokemonSpecies.Huntail,
  [PokemonVariety.Huntail],
  "Huntail",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class GorebyssSpecies extends Species {}(
  PokemonSpecies.Gorebyss,
  [PokemonVariety.Gorebyss],
  "Gorebyss",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class RelicanthSpecies extends Species {}(
  PokemonSpecies.Relicanth,
  [PokemonVariety.Relicanth],
  "Relicanth",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class LuvdiscSpecies extends Species {}(
  PokemonSpecies.Luvdisc,
  [PokemonVariety.Luvdisc],
  "Luvdisc",
  225,
  70,
  PokemonSpeciesFlags.None,
);
new class BagonSpecies extends Species {}(
  PokemonSpecies.Bagon,
  [PokemonVariety.Bagon],
  "Bagon",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class ShelgonSpecies extends Species {}(
  PokemonSpecies.Shelgon,
  [PokemonVariety.Shelgon],
  "Shelgon",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class SalamenceSpecies extends Species {}(
  PokemonSpecies.Salamence,
  [PokemonVariety.Salamence, PokemonVariety.SalamenceMega],
  "Salamence",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class BeldumSpecies extends Species {}(
  PokemonSpecies.Beldum,
  [PokemonVariety.Beldum],
  "Beldum",
  3,
  35,
  PokemonSpeciesFlags.None,
);
new class MetangSpecies extends Species {}(
  PokemonSpecies.Metang,
  [PokemonVariety.Metang],
  "Metang",
  3,
  35,
  PokemonSpeciesFlags.None,
);
new class MetagrossSpecies extends Species {}(
  PokemonSpecies.Metagross,
  [PokemonVariety.Metagross, PokemonVariety.MetagrossMega],
  "Metagross",
  3,
  35,
  PokemonSpeciesFlags.None,
);
new class RegirockSpecies extends Species {}(
  PokemonSpecies.Regirock,
  [PokemonVariety.Regirock],
  "Regirock",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class RegiceSpecies extends Species {}(
  PokemonSpecies.Regice,
  [PokemonVariety.Regice],
  "Regice",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class RegisteelSpecies extends Species {}(
  PokemonSpecies.Registeel,
  [PokemonVariety.Registeel],
  "Registeel",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class LatiasSpecies extends Species {}(
  PokemonSpecies.Latias,
  [PokemonVariety.Latias, PokemonVariety.LatiasMega],
  "Latias",
  3,
  90,
  PokemonSpeciesFlags.Legendary,
);
new class LatiosSpecies extends Species {}(
  PokemonSpecies.Latios,
  [PokemonVariety.Latios, PokemonVariety.LatiosMega],
  "Latios",
  3,
  90,
  PokemonSpeciesFlags.Legendary,
);
new class KyogreSpecies extends Species {}(
  PokemonSpecies.Kyogre,
  [PokemonVariety.Kyogre, PokemonVariety.KyogrePrimal],
  "Kyogre",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class GroudonSpecies extends Species {}(
  PokemonSpecies.Groudon,
  [PokemonVariety.Groudon, PokemonVariety.GroudonPrimal],
  "Groudon",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class RayquazaSpecies extends Species {}(
  PokemonSpecies.Rayquaza,
  [PokemonVariety.Rayquaza, PokemonVariety.RayquazaMega],
  "Rayquaza",
  45,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class JirachiSpecies extends Species {}(
  PokemonSpecies.Jirachi,
  [PokemonVariety.Jirachi],
  "Jirachi",
  3,
  100,
  PokemonSpeciesFlags.Mythical,
);
new class DeoxysSpecies extends Species {}(
  PokemonSpecies.Deoxys,
  [PokemonVariety.DeoxysNormal, PokemonVariety.DeoxysAttack, PokemonVariety.DeoxysDefense, PokemonVariety.DeoxysSpeed],
  "Deoxys",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);
new class TurtwigSpecies extends Species {}(
  PokemonSpecies.Turtwig,
  [PokemonVariety.Turtwig],
  "Turtwig",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class GrotleSpecies extends Species {}(
  PokemonSpecies.Grotle,
  [PokemonVariety.Grotle],
  "Grotle",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class TorterraSpecies extends Species {}(
  PokemonSpecies.Torterra,
  [PokemonVariety.Torterra],
  "Torterra",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class ChimcharSpecies extends Species {}(
  PokemonSpecies.Chimchar,
  [PokemonVariety.Chimchar],
  "Chimchar",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class MonfernoSpecies extends Species {}(
  PokemonSpecies.Monferno,
  [PokemonVariety.Monferno],
  "Monferno",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class InfernapeSpecies extends Species {}(
  PokemonSpecies.Infernape,
  [PokemonVariety.Infernape],
  "Infernape",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class PiplupSpecies extends Species {}(
  PokemonSpecies.Piplup,
  [PokemonVariety.Piplup],
  "Piplup",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class PrinplupSpecies extends Species {}(
  PokemonSpecies.Prinplup,
  [PokemonVariety.Prinplup],
  "Prinplup",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class EmpoleonSpecies extends Species {}(
  PokemonSpecies.Empoleon,
  [PokemonVariety.Empoleon],
  "Empoleon",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class StarlySpecies extends Species {}(
  PokemonSpecies.Starly,
  [PokemonVariety.Starly],
  "Starly",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class StaraviaSpecies extends Species {}(
  PokemonSpecies.Staravia,
  [PokemonVariety.Staravia],
  "Staravia",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class StaraptorSpecies extends Species {}(
  PokemonSpecies.Staraptor,
  [PokemonVariety.Staraptor],
  "Staraptor",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class BidoofSpecies extends Species {}(
  PokemonSpecies.Bidoof,
  [PokemonVariety.Bidoof],
  "Bidoof",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class BibarelSpecies extends Species {}(
  PokemonSpecies.Bibarel,
  [PokemonVariety.Bibarel],
  "Bibarel",
  127,
  70,
  PokemonSpeciesFlags.None,
);
new class KricketotSpecies extends Species {}(
  PokemonSpecies.Kricketot,
  [PokemonVariety.Kricketot],
  "Kricketot",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class KricketuneSpecies extends Species {}(
  PokemonSpecies.Kricketune,
  [PokemonVariety.Kricketune],
  "Kricketune",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class ShinxSpecies extends Species {}(
  PokemonSpecies.Shinx,
  [PokemonVariety.Shinx],
  "Shinx",
  235,
  50,
  PokemonSpeciesFlags.None,
);
new class LuxioSpecies extends Species {}(
  PokemonSpecies.Luxio,
  [PokemonVariety.Luxio],
  "Luxio",
  120,
  100,
  PokemonSpeciesFlags.None,
);
new class LuxraySpecies extends Species {}(
  PokemonSpecies.Luxray,
  [PokemonVariety.Luxray],
  "Luxray",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class BudewSpecies extends Species {}(
  PokemonSpecies.Budew,
  [PokemonVariety.Budew],
  "Budew",
  255,
  50,
  PokemonSpeciesFlags.Baby,
);
new class RoseradeSpecies extends Species {}(
  PokemonSpecies.Roserade,
  [PokemonVariety.Roserade],
  "Roserade",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class CranidosSpecies extends Species {}(
  PokemonSpecies.Cranidos,
  [PokemonVariety.Cranidos],
  "Cranidos",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class RampardosSpecies extends Species {}(
  PokemonSpecies.Rampardos,
  [PokemonVariety.Rampardos],
  "Rampardos",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class ShieldonSpecies extends Species {}(
  PokemonSpecies.Shieldon,
  [PokemonVariety.Shieldon],
  "Shieldon",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class BastiodonSpecies extends Species {}(
  PokemonSpecies.Bastiodon,
  [PokemonVariety.Bastiodon],
  "Bastiodon",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class BurmySpecies extends Species {}(
  PokemonSpecies.Burmy,
  [PokemonVariety.Burmy],
  "Burmy",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class WormadamSpecies extends Species {}(
  PokemonSpecies.Wormadam,
  [PokemonVariety.WormadamPlant, PokemonVariety.WormadamSandy, PokemonVariety.WormadamTrash],
  "Wormadam",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class MothimSpecies extends Species {}(
  PokemonSpecies.Mothim,
  [PokemonVariety.Mothim],
  "Mothim",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class CombeeSpecies extends Species {}(
  PokemonSpecies.Combee,
  [PokemonVariety.Combee],
  "Combee",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class VespiquenSpecies extends Species {}(
  PokemonSpecies.Vespiquen,
  [PokemonVariety.Vespiquen],
  "Vespiquen",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PachirisuSpecies extends Species {}(
  PokemonSpecies.Pachirisu,
  [PokemonVariety.Pachirisu],
  "Pachirisu",
  200,
  100,
  PokemonSpeciesFlags.None,
);
new class BuizelSpecies extends Species {}(
  PokemonSpecies.Buizel,
  [PokemonVariety.Buizel],
  "Buizel",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class FloatzelSpecies extends Species {}(
  PokemonSpecies.Floatzel,
  [PokemonVariety.Floatzel],
  "Floatzel",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class CherubiSpecies extends Species {}(
  PokemonSpecies.Cherubi,
  [PokemonVariety.Cherubi],
  "Cherubi",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class CherrimSpecies extends Species {}(
  PokemonSpecies.Cherrim,
  [PokemonVariety.Cherrim],
  "Cherrim",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class ShellosSpecies extends Species {}(
  PokemonSpecies.Shellos,
  [PokemonVariety.Shellos],
  "Shellos",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class GastrodonSpecies extends Species {}(
  PokemonSpecies.Gastrodon,
  [PokemonVariety.Gastrodon],
  "Gastrodon",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class AmbipomSpecies extends Species {}(
  PokemonSpecies.Ambipom,
  [PokemonVariety.Ambipom],
  "Ambipom",
  45,
  100,
  PokemonSpeciesFlags.None,
);
new class DrifloonSpecies extends Species {}(
  PokemonSpecies.Drifloon,
  [PokemonVariety.Drifloon],
  "Drifloon",
  125,
  50,
  PokemonSpeciesFlags.None,
);
new class DrifblimSpecies extends Species {}(
  PokemonSpecies.Drifblim,
  [PokemonVariety.Drifblim],
  "Drifblim",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class BunearySpecies extends Species {}(
  PokemonSpecies.Buneary,
  [PokemonVariety.Buneary],
  "Buneary",
  190,
  0,
  PokemonSpeciesFlags.None,
);
new class LopunnySpecies extends Species {}(
  PokemonSpecies.Lopunny,
  [PokemonVariety.Lopunny, PokemonVariety.LopunnyMega],
  "Lopunny",
  60,
  140,
  PokemonSpeciesFlags.None,
);
new class MismagiusSpecies extends Species {}(
  PokemonSpecies.Mismagius,
  [PokemonVariety.Mismagius],
  "Mismagius",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class HonchkrowSpecies extends Species {}(
  PokemonSpecies.Honchkrow,
  [PokemonVariety.Honchkrow],
  "Honchkrow",
  30,
  35,
  PokemonSpeciesFlags.None,
);
new class GlameowSpecies extends Species {}(
  PokemonSpecies.Glameow,
  [PokemonVariety.Glameow],
  "Glameow",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class PuruglySpecies extends Species {}(
  PokemonSpecies.Purugly,
  [PokemonVariety.Purugly],
  "Purugly",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class ChinglingSpecies extends Species {}(
  PokemonSpecies.Chingling,
  [PokemonVariety.Chingling],
  "Chingling",
  120,
  70,
  PokemonSpeciesFlags.Baby,
);
new class StunkySpecies extends Species {}(
  PokemonSpecies.Stunky,
  [PokemonVariety.Stunky],
  "Stunky",
  225,
  50,
  PokemonSpeciesFlags.None,
);
new class SkuntankSpecies extends Species {}(
  PokemonSpecies.Skuntank,
  [PokemonVariety.Skuntank],
  "Skuntank",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class BronzorSpecies extends Species {}(
  PokemonSpecies.Bronzor,
  [PokemonVariety.Bronzor],
  "Bronzor",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class BronzongSpecies extends Species {}(
  PokemonSpecies.Bronzong,
  [PokemonVariety.Bronzong],
  "Bronzong",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class BonslySpecies extends Species {}(
  PokemonSpecies.Bonsly,
  [PokemonVariety.Bonsly],
  "Bonsly",
  255,
  50,
  PokemonSpeciesFlags.Baby,
);
new class MimeJrSpecies extends Species {}(
  PokemonSpecies.MimeJr,
  [PokemonVariety.MimeJr],
  "Mime Jr.",
  145,
  50,
  PokemonSpeciesFlags.Baby,
);
new class HappinySpecies extends Species {}(
  PokemonSpecies.Happiny,
  [PokemonVariety.Happiny],
  "Happiny",
  130,
  140,
  PokemonSpeciesFlags.Baby,
);
new class ChatotSpecies extends Species {}(
  PokemonSpecies.Chatot,
  [PokemonVariety.Chatot],
  "Chatot",
  30,
  35,
  PokemonSpeciesFlags.None,
);
new class SpiritombSpecies extends Species {}(
  PokemonSpecies.Spiritomb,
  [PokemonVariety.Spiritomb],
  "Spiritomb",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class GibleSpecies extends Species {}(
  PokemonSpecies.Gible,
  [PokemonVariety.Gible],
  "Gible",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class GabiteSpecies extends Species {}(
  PokemonSpecies.Gabite,
  [PokemonVariety.Gabite],
  "Gabite",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class GarchompSpecies extends Species {}(
  PokemonSpecies.Garchomp,
  [PokemonVariety.Garchomp, PokemonVariety.GarchompMega],
  "Garchomp",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MunchlaxSpecies extends Species {}(
  PokemonSpecies.Munchlax,
  [PokemonVariety.Munchlax],
  "Munchlax",
  50,
  50,
  PokemonSpeciesFlags.Baby,
);
new class RioluSpecies extends Species {}(
  PokemonSpecies.Riolu,
  [PokemonVariety.Riolu],
  "Riolu",
  75,
  50,
  PokemonSpeciesFlags.Baby,
);
new class LucarioSpecies extends Species {}(
  PokemonSpecies.Lucario,
  [PokemonVariety.Lucario, PokemonVariety.LucarioMega],
  "Lucario",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class HippopotasSpecies extends Species {}(
  PokemonSpecies.Hippopotas,
  [PokemonVariety.Hippopotas],
  "Hippopotas",
  140,
  50,
  PokemonSpeciesFlags.None,
);
new class HippowdonSpecies extends Species {}(
  PokemonSpecies.Hippowdon,
  [PokemonVariety.Hippowdon],
  "Hippowdon",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class SkorupiSpecies extends Species {}(
  PokemonSpecies.Skorupi,
  [PokemonVariety.Skorupi],
  "Skorupi",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class DrapionSpecies extends Species {}(
  PokemonSpecies.Drapion,
  [PokemonVariety.Drapion],
  "Drapion",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CroagunkSpecies extends Species {}(
  PokemonSpecies.Croagunk,
  [PokemonVariety.Croagunk],
  "Croagunk",
  140,
  100,
  PokemonSpeciesFlags.None,
);
new class ToxicroakSpecies extends Species {}(
  PokemonSpecies.Toxicroak,
  [PokemonVariety.Toxicroak],
  "Toxicroak",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class CarnivineSpecies extends Species {}(
  PokemonSpecies.Carnivine,
  [PokemonVariety.Carnivine],
  "Carnivine",
  200,
  70,
  PokemonSpeciesFlags.None,
);
new class FinneonSpecies extends Species {}(
  PokemonSpecies.Finneon,
  [PokemonVariety.Finneon],
  "Finneon",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class LumineonSpecies extends Species {}(
  PokemonSpecies.Lumineon,
  [PokemonVariety.Lumineon],
  "Lumineon",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class MantykeSpecies extends Species {}(
  PokemonSpecies.Mantyke,
  [PokemonVariety.Mantyke],
  "Mantyke",
  25,
  50,
  PokemonSpeciesFlags.Baby,
);
new class SnoverSpecies extends Species {}(
  PokemonSpecies.Snover,
  [PokemonVariety.Snover],
  "Snover",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class AbomasnowSpecies extends Species {}(
  PokemonSpecies.Abomasnow,
  [PokemonVariety.Abomasnow, PokemonVariety.AbomasnowMega],
  "Abomasnow",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class WeavileSpecies extends Species {}(
  PokemonSpecies.Weavile,
  [PokemonVariety.Weavile],
  "Weavile",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class MagnezoneSpecies extends Species {}(
  PokemonSpecies.Magnezone,
  [PokemonVariety.Magnezone],
  "Magnezone",
  30,
  50,
  PokemonSpeciesFlags.None,
);
new class LickilickySpecies extends Species {}(
  PokemonSpecies.Lickilicky,
  [PokemonVariety.Lickilicky],
  "Lickilicky",
  30,
  50,
  PokemonSpeciesFlags.None,
);
new class RhyperiorSpecies extends Species {}(
  PokemonSpecies.Rhyperior,
  [PokemonVariety.Rhyperior],
  "Rhyperior",
  30,
  50,
  PokemonSpeciesFlags.None,
);
new class TangrowthSpecies extends Species {}(
  PokemonSpecies.Tangrowth,
  [PokemonVariety.Tangrowth],
  "Tangrowth",
  30,
  50,
  PokemonSpeciesFlags.None,
);
new class ElectivireSpecies extends Species {}(
  PokemonSpecies.Electivire,
  [PokemonVariety.Electivire],
  "Electivire",
  30,
  50,
  PokemonSpeciesFlags.None,
);
new class MagmortarSpecies extends Species {}(
  PokemonSpecies.Magmortar,
  [PokemonVariety.Magmortar],
  "Magmortar",
  30,
  50,
  PokemonSpeciesFlags.None,
);
new class TogekissSpecies extends Species {}(
  PokemonSpecies.Togekiss,
  [PokemonVariety.Togekiss],
  "Togekiss",
  30,
  50,
  PokemonSpeciesFlags.None,
);
new class YanmegaSpecies extends Species {}(
  PokemonSpecies.Yanmega,
  [PokemonVariety.Yanmega],
  "Yanmega",
  30,
  70,
  PokemonSpeciesFlags.None,
);
new class LeafeonSpecies extends Species {}(
  PokemonSpecies.Leafeon,
  [PokemonVariety.Leafeon],
  "Leafeon",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class GlaceonSpecies extends Species {}(
  PokemonSpecies.Glaceon,
  [PokemonVariety.Glaceon],
  "Glaceon",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class GliscorSpecies extends Species {}(
  PokemonSpecies.Gliscor,
  [PokemonVariety.Gliscor],
  "Gliscor",
  30,
  70,
  PokemonSpeciesFlags.None,
);
new class MamoswineSpecies extends Species {}(
  PokemonSpecies.Mamoswine,
  [PokemonVariety.Mamoswine],
  "Mamoswine",
  50,
  50,
  PokemonSpeciesFlags.None,
);
new class PorygonZSpecies extends Species {}(
  PokemonSpecies.PorygonZ,
  [PokemonVariety.PorygonZ],
  "Porygon-Z",
  30,
  50,
  PokemonSpeciesFlags.None,
);
new class GalladeSpecies extends Species {}(
  PokemonSpecies.Gallade,
  [PokemonVariety.Gallade, PokemonVariety.GalladeMega],
  "Gallade",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class ProbopassSpecies extends Species {}(
  PokemonSpecies.Probopass,
  [PokemonVariety.Probopass],
  "Probopass",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class DusknoirSpecies extends Species {}(
  PokemonSpecies.Dusknoir,
  [PokemonVariety.Dusknoir],
  "Dusknoir",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class FroslassSpecies extends Species {}(
  PokemonSpecies.Froslass,
  [PokemonVariety.Froslass],
  "Froslass",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class RotomSpecies extends Species {}(
  PokemonSpecies.Rotom,
  [PokemonVariety.Rotom, PokemonVariety.RotomHeat, PokemonVariety.RotomWash, PokemonVariety.RotomFrost, PokemonVariety.RotomFan, PokemonVariety.RotomMow],
  "Rotom",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class UxieSpecies extends Species {}(
  PokemonSpecies.Uxie,
  [PokemonVariety.Uxie],
  "Uxie",
  3,
  140,
  PokemonSpeciesFlags.Legendary,
);
new class MespritSpecies extends Species {}(
  PokemonSpecies.Mesprit,
  [PokemonVariety.Mesprit],
  "Mesprit",
  3,
  140,
  PokemonSpeciesFlags.Legendary,
);
new class AzelfSpecies extends Species {}(
  PokemonSpecies.Azelf,
  [PokemonVariety.Azelf],
  "Azelf",
  3,
  140,
  PokemonSpeciesFlags.Legendary,
);
new class DialgaSpecies extends Species {}(
  PokemonSpecies.Dialga,
  [PokemonVariety.Dialga, PokemonVariety.DialgaOrigin],
  "Dialga",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class PalkiaSpecies extends Species {}(
  PokemonSpecies.Palkia,
  [PokemonVariety.Palkia, PokemonVariety.PalkiaOrigin],
  "Palkia",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class HeatranSpecies extends Species {}(
  PokemonSpecies.Heatran,
  [PokemonVariety.Heatran],
  "Heatran",
  3,
  100,
  PokemonSpeciesFlags.Legendary,
);
new class RegigigasSpecies extends Species {}(
  PokemonSpecies.Regigigas,
  [PokemonVariety.Regigigas],
  "Regigigas",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class GiratinaSpecies extends Species {}(
  PokemonSpecies.Giratina,
  [PokemonVariety.GiratinaAltered, PokemonVariety.GiratinaOrigin],
  "Giratina",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class CresseliaSpecies extends Species {}(
  PokemonSpecies.Cresselia,
  [PokemonVariety.Cresselia],
  "Cresselia",
  3,
  100,
  PokemonSpeciesFlags.Legendary,
);
new class PhioneSpecies extends Species {}(
  PokemonSpecies.Phione,
  [PokemonVariety.Phione],
  "Phione",
  30,
  70,
  PokemonSpeciesFlags.Mythical,
);
new class ManaphySpecies extends Species {}(
  PokemonSpecies.Manaphy,
  [PokemonVariety.Manaphy],
  "Manaphy",
  3,
  70,
  PokemonSpeciesFlags.Mythical,
);
new class DarkraiSpecies extends Species {}(
  PokemonSpecies.Darkrai,
  [PokemonVariety.Darkrai],
  "Darkrai",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);
new class ShayminSpecies extends Species {}(
  PokemonSpecies.Shaymin,
  [PokemonVariety.ShayminLand, PokemonVariety.ShayminSky],
  "Shaymin",
  45,
  100,
  PokemonSpeciesFlags.Mythical,
);
new class ArceusSpecies extends Species {}(
  PokemonSpecies.Arceus,
  [PokemonVariety.Arceus],
  "Arceus",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);
new class VictiniSpecies extends Species {}(
  PokemonSpecies.Victini,
  [PokemonVariety.Victini],
  "Victini",
  3,
  100,
  PokemonSpeciesFlags.Mythical,
);
new class SnivySpecies extends Species {}(
  PokemonSpecies.Snivy,
  [PokemonVariety.Snivy],
  "Snivy",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class ServineSpecies extends Species {}(
  PokemonSpecies.Servine,
  [PokemonVariety.Servine],
  "Servine",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class SerperiorSpecies extends Species {}(
  PokemonSpecies.Serperior,
  [PokemonVariety.Serperior],
  "Serperior",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class TepigSpecies extends Species {}(
  PokemonSpecies.Tepig,
  [PokemonVariety.Tepig],
  "Tepig",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class PigniteSpecies extends Species {}(
  PokemonSpecies.Pignite,
  [PokemonVariety.Pignite],
  "Pignite",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class EmboarSpecies extends Species {}(
  PokemonSpecies.Emboar,
  [PokemonVariety.Emboar],
  "Emboar",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class OshawottSpecies extends Species {}(
  PokemonSpecies.Oshawott,
  [PokemonVariety.Oshawott],
  "Oshawott",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class DewottSpecies extends Species {}(
  PokemonSpecies.Dewott,
  [PokemonVariety.Dewott],
  "Dewott",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class SamurottSpecies extends Species {}(
  PokemonSpecies.Samurott,
  [PokemonVariety.Samurott, PokemonVariety.SamurottHisui],
  "Samurott",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class PatratSpecies extends Species {}(
  PokemonSpecies.Patrat,
  [PokemonVariety.Patrat],
  "Patrat",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class WatchogSpecies extends Species {}(
  PokemonSpecies.Watchog,
  [PokemonVariety.Watchog],
  "Watchog",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class LillipupSpecies extends Species {}(
  PokemonSpecies.Lillipup,
  [PokemonVariety.Lillipup],
  "Lillipup",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class HerdierSpecies extends Species {}(
  PokemonSpecies.Herdier,
  [PokemonVariety.Herdier],
  "Herdier",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class StoutlandSpecies extends Species {}(
  PokemonSpecies.Stoutland,
  [PokemonVariety.Stoutland],
  "Stoutland",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PurrloinSpecies extends Species {}(
  PokemonSpecies.Purrloin,
  [PokemonVariety.Purrloin],
  "Purrloin",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class LiepardSpecies extends Species {}(
  PokemonSpecies.Liepard,
  [PokemonVariety.Liepard],
  "Liepard",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class PansageSpecies extends Species {}(
  PokemonSpecies.Pansage,
  [PokemonVariety.Pansage],
  "Pansage",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class SimisageSpecies extends Species {}(
  PokemonSpecies.Simisage,
  [PokemonVariety.Simisage],
  "Simisage",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class PansearSpecies extends Species {}(
  PokemonSpecies.Pansear,
  [PokemonVariety.Pansear],
  "Pansear",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class SimisearSpecies extends Species {}(
  PokemonSpecies.Simisear,
  [PokemonVariety.Simisear],
  "Simisear",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class PanpourSpecies extends Species {}(
  PokemonSpecies.Panpour,
  [PokemonVariety.Panpour],
  "Panpour",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class SimipourSpecies extends Species {}(
  PokemonSpecies.Simipour,
  [PokemonVariety.Simipour],
  "Simipour",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class MunnaSpecies extends Species {}(
  PokemonSpecies.Munna,
  [PokemonVariety.Munna],
  "Munna",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class MusharnaSpecies extends Species {}(
  PokemonSpecies.Musharna,
  [PokemonVariety.Musharna],
  "Musharna",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class PidoveSpecies extends Species {}(
  PokemonSpecies.Pidove,
  [PokemonVariety.Pidove],
  "Pidove",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class TranquillSpecies extends Species {}(
  PokemonSpecies.Tranquill,
  [PokemonVariety.Tranquill],
  "Tranquill",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class UnfezantSpecies extends Species {}(
  PokemonSpecies.Unfezant,
  [PokemonVariety.Unfezant],
  "Unfezant",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class BlitzleSpecies extends Species {}(
  PokemonSpecies.Blitzle,
  [PokemonVariety.Blitzle],
  "Blitzle",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class ZebstrikaSpecies extends Species {}(
  PokemonSpecies.Zebstrika,
  [PokemonVariety.Zebstrika],
  "Zebstrika",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class RoggenrolaSpecies extends Species {}(
  PokemonSpecies.Roggenrola,
  [PokemonVariety.Roggenrola],
  "Roggenrola",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class BoldoreSpecies extends Species {}(
  PokemonSpecies.Boldore,
  [PokemonVariety.Boldore],
  "Boldore",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class GigalithSpecies extends Species {}(
  PokemonSpecies.Gigalith,
  [PokemonVariety.Gigalith],
  "Gigalith",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class WoobatSpecies extends Species {}(
  PokemonSpecies.Woobat,
  [PokemonVariety.Woobat],
  "Woobat",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class SwoobatSpecies extends Species {}(
  PokemonSpecies.Swoobat,
  [PokemonVariety.Swoobat],
  "Swoobat",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DrilburSpecies extends Species {}(
  PokemonSpecies.Drilbur,
  [PokemonVariety.Drilbur],
  "Drilbur",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class ExcadrillSpecies extends Species {}(
  PokemonSpecies.Excadrill,
  [PokemonVariety.Excadrill],
  "Excadrill",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class AudinoSpecies extends Species {}(
  PokemonSpecies.Audino,
  [PokemonVariety.Audino, PokemonVariety.AudinoMega],
  "Audino",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class TimburrSpecies extends Species {}(
  PokemonSpecies.Timburr,
  [PokemonVariety.Timburr],
  "Timburr",
  180,
  70,
  PokemonSpeciesFlags.None,
);
new class GurdurrSpecies extends Species {}(
  PokemonSpecies.Gurdurr,
  [PokemonVariety.Gurdurr],
  "Gurdurr",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class ConkeldurrSpecies extends Species {}(
  PokemonSpecies.Conkeldurr,
  [PokemonVariety.Conkeldurr],
  "Conkeldurr",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class TympoleSpecies extends Species {}(
  PokemonSpecies.Tympole,
  [PokemonVariety.Tympole],
  "Tympole",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class PalpitoadSpecies extends Species {}(
  PokemonSpecies.Palpitoad,
  [PokemonVariety.Palpitoad],
  "Palpitoad",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class SeismitoadSpecies extends Species {}(
  PokemonSpecies.Seismitoad,
  [PokemonVariety.Seismitoad],
  "Seismitoad",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ThrohSpecies extends Species {}(
  PokemonSpecies.Throh,
  [PokemonVariety.Throh],
  "Throh",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SawkSpecies extends Species {}(
  PokemonSpecies.Sawk,
  [PokemonVariety.Sawk],
  "Sawk",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SewaddleSpecies extends Species {}(
  PokemonSpecies.Sewaddle,
  [PokemonVariety.Sewaddle],
  "Sewaddle",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class SwadloonSpecies extends Species {}(
  PokemonSpecies.Swadloon,
  [PokemonVariety.Swadloon],
  "Swadloon",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class LeavannySpecies extends Species {}(
  PokemonSpecies.Leavanny,
  [PokemonVariety.Leavanny],
  "Leavanny",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class VenipedeSpecies extends Species {}(
  PokemonSpecies.Venipede,
  [PokemonVariety.Venipede],
  "Venipede",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class WhirlipedeSpecies extends Species {}(
  PokemonSpecies.Whirlipede,
  [PokemonVariety.Whirlipede],
  "Whirlipede",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class ScolipedeSpecies extends Species {}(
  PokemonSpecies.Scolipede,
  [PokemonVariety.Scolipede],
  "Scolipede",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CottoneeSpecies extends Species {}(
  PokemonSpecies.Cottonee,
  [PokemonVariety.Cottonee],
  "Cottonee",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class WhimsicottSpecies extends Species {}(
  PokemonSpecies.Whimsicott,
  [PokemonVariety.Whimsicott],
  "Whimsicott",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class PetililSpecies extends Species {}(
  PokemonSpecies.Petilil,
  [PokemonVariety.Petilil],
  "Petilil",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class LilligantSpecies extends Species {}(
  PokemonSpecies.Lilligant,
  [PokemonVariety.Lilligant, PokemonVariety.LilligantHisui],
  "Lilligant",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class BasculinSpecies extends Species {}(
  PokemonSpecies.Basculin,
  [PokemonVariety.BasculinRedStriped, PokemonVariety.BasculinBlueStriped, PokemonVariety.BasculinWhiteStriped],
  "Basculin",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class SandileSpecies extends Species {}(
  PokemonSpecies.Sandile,
  [PokemonVariety.Sandile],
  "Sandile",
  180,
  50,
  PokemonSpeciesFlags.None,
);
new class KrokorokSpecies extends Species {}(
  PokemonSpecies.Krokorok,
  [PokemonVariety.Krokorok],
  "Krokorok",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class KrookodileSpecies extends Species {}(
  PokemonSpecies.Krookodile,
  [PokemonVariety.Krookodile],
  "Krookodile",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DarumakaSpecies extends Species {}(
  PokemonSpecies.Darumaka,
  [PokemonVariety.Darumaka, PokemonVariety.DarumakaGalar],
  "Darumaka",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class DarmanitanSpecies extends Species {}(
  PokemonSpecies.Darmanitan,
  [PokemonVariety.DarmanitanStandard, PokemonVariety.DarmanitanZen, PokemonVariety.DarmanitanGalarStandard, PokemonVariety.DarmanitanGalarZen],
  "Darmanitan",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class MaractusSpecies extends Species {}(
  PokemonSpecies.Maractus,
  [PokemonVariety.Maractus],
  "Maractus",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class DwebbleSpecies extends Species {}(
  PokemonSpecies.Dwebble,
  [PokemonVariety.Dwebble],
  "Dwebble",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class CrustleSpecies extends Species {}(
  PokemonSpecies.Crustle,
  [PokemonVariety.Crustle],
  "Crustle",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class ScraggySpecies extends Species {}(
  PokemonSpecies.Scraggy,
  [PokemonVariety.Scraggy],
  "Scraggy",
  180,
  35,
  PokemonSpeciesFlags.None,
);
new class ScraftySpecies extends Species {}(
  PokemonSpecies.Scrafty,
  [PokemonVariety.Scrafty],
  "Scrafty",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class SigilyphSpecies extends Species {}(
  PokemonSpecies.Sigilyph,
  [PokemonVariety.Sigilyph],
  "Sigilyph",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class YamaskSpecies extends Species {}(
  PokemonSpecies.Yamask,
  [PokemonVariety.Yamask, PokemonVariety.YamaskGalar],
  "Yamask",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class CofagrigusSpecies extends Species {}(
  PokemonSpecies.Cofagrigus,
  [PokemonVariety.Cofagrigus],
  "Cofagrigus",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class TirtougaSpecies extends Species {}(
  PokemonSpecies.Tirtouga,
  [PokemonVariety.Tirtouga],
  "Tirtouga",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CarracostaSpecies extends Species {}(
  PokemonSpecies.Carracosta,
  [PokemonVariety.Carracosta],
  "Carracosta",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ArchenSpecies extends Species {}(
  PokemonSpecies.Archen,
  [PokemonVariety.Archen],
  "Archen",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ArcheopsSpecies extends Species {}(
  PokemonSpecies.Archeops,
  [PokemonVariety.Archeops],
  "Archeops",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class TrubbishSpecies extends Species {}(
  PokemonSpecies.Trubbish,
  [PokemonVariety.Trubbish],
  "Trubbish",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class GarbodorSpecies extends Species {}(
  PokemonSpecies.Garbodor,
  [PokemonVariety.Garbodor, PokemonVariety.GarbodorGmax],
  "Garbodor",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class ZoruaSpecies extends Species {}(
  PokemonSpecies.Zorua,
  [PokemonVariety.Zorua, PokemonVariety.ZoruaHisui],
  "Zorua",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class ZoroarkSpecies extends Species {}(
  PokemonSpecies.Zoroark,
  [PokemonVariety.Zoroark, PokemonVariety.ZoroarkHisui],
  "Zoroark",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MinccinoSpecies extends Species {}(
  PokemonSpecies.Minccino,
  [PokemonVariety.Minccino],
  "Minccino",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class CinccinoSpecies extends Species {}(
  PokemonSpecies.Cinccino,
  [PokemonVariety.Cinccino],
  "Cinccino",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class GothitaSpecies extends Species {}(
  PokemonSpecies.Gothita,
  [PokemonVariety.Gothita],
  "Gothita",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class GothoritaSpecies extends Species {}(
  PokemonSpecies.Gothorita,
  [PokemonVariety.Gothorita],
  "Gothorita",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class GothitelleSpecies extends Species {}(
  PokemonSpecies.Gothitelle,
  [PokemonVariety.Gothitelle],
  "Gothitelle",
  50,
  50,
  PokemonSpeciesFlags.None,
);
new class SolosisSpecies extends Species {}(
  PokemonSpecies.Solosis,
  [PokemonVariety.Solosis],
  "Solosis",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class DuosionSpecies extends Species {}(
  PokemonSpecies.Duosion,
  [PokemonVariety.Duosion],
  "Duosion",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class ReuniclusSpecies extends Species {}(
  PokemonSpecies.Reuniclus,
  [PokemonVariety.Reuniclus],
  "Reuniclus",
  50,
  50,
  PokemonSpeciesFlags.None,
);
new class DucklettSpecies extends Species {}(
  PokemonSpecies.Ducklett,
  [PokemonVariety.Ducklett],
  "Ducklett",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class SwannaSpecies extends Species {}(
  PokemonSpecies.Swanna,
  [PokemonVariety.Swanna],
  "Swanna",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class VanilliteSpecies extends Species {}(
  PokemonSpecies.Vanillite,
  [PokemonVariety.Vanillite],
  "Vanillite",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class VanillishSpecies extends Species {}(
  PokemonSpecies.Vanillish,
  [PokemonVariety.Vanillish],
  "Vanillish",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class VanilluxeSpecies extends Species {}(
  PokemonSpecies.Vanilluxe,
  [PokemonVariety.Vanilluxe],
  "Vanilluxe",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DeerlingSpecies extends Species {}(
  PokemonSpecies.Deerling,
  [PokemonVariety.Deerling],
  "Deerling",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class SawsbuckSpecies extends Species {}(
  PokemonSpecies.Sawsbuck,
  [PokemonVariety.Sawsbuck],
  "Sawsbuck",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class EmolgaSpecies extends Species {}(
  PokemonSpecies.Emolga,
  [PokemonVariety.Emolga],
  "Emolga",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class KarrablastSpecies extends Species {}(
  PokemonSpecies.Karrablast,
  [PokemonVariety.Karrablast],
  "Karrablast",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class EscavalierSpecies extends Species {}(
  PokemonSpecies.Escavalier,
  [PokemonVariety.Escavalier],
  "Escavalier",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class FoongusSpecies extends Species {}(
  PokemonSpecies.Foongus,
  [PokemonVariety.Foongus],
  "Foongus",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class AmoongussSpecies extends Species {}(
  PokemonSpecies.Amoonguss,
  [PokemonVariety.Amoonguss],
  "Amoonguss",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class FrillishSpecies extends Species {}(
  PokemonSpecies.Frillish,
  [PokemonVariety.Frillish],
  "Frillish",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class JellicentSpecies extends Species {}(
  PokemonSpecies.Jellicent,
  [PokemonVariety.Jellicent],
  "Jellicent",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class AlomomolaSpecies extends Species {}(
  PokemonSpecies.Alomomola,
  [PokemonVariety.Alomomola],
  "Alomomola",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class JoltikSpecies extends Species {}(
  PokemonSpecies.Joltik,
  [PokemonVariety.Joltik],
  "Joltik",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class GalvantulaSpecies extends Species {}(
  PokemonSpecies.Galvantula,
  [PokemonVariety.Galvantula],
  "Galvantula",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class FerroseedSpecies extends Species {}(
  PokemonSpecies.Ferroseed,
  [PokemonVariety.Ferroseed],
  "Ferroseed",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class FerrothornSpecies extends Species {}(
  PokemonSpecies.Ferrothorn,
  [PokemonVariety.Ferrothorn],
  "Ferrothorn",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class KlinkSpecies extends Species {}(
  PokemonSpecies.Klink,
  [PokemonVariety.Klink],
  "Klink",
  130,
  50,
  PokemonSpeciesFlags.None,
);
new class KlangSpecies extends Species {}(
  PokemonSpecies.Klang,
  [PokemonVariety.Klang],
  "Klang",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class KlinklangSpecies extends Species {}(
  PokemonSpecies.Klinklang,
  [PokemonVariety.Klinklang],
  "Klinklang",
  30,
  50,
  PokemonSpeciesFlags.None,
);
new class TynamoSpecies extends Species {}(
  PokemonSpecies.Tynamo,
  [PokemonVariety.Tynamo],
  "Tynamo",
  190,
  70,
  PokemonSpeciesFlags.None,
);
new class EelektrikSpecies extends Species {}(
  PokemonSpecies.Eelektrik,
  [PokemonVariety.Eelektrik],
  "Eelektrik",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class EelektrossSpecies extends Species {}(
  PokemonSpecies.Eelektross,
  [PokemonVariety.Eelektross],
  "Eelektross",
  30,
  70,
  PokemonSpeciesFlags.None,
);
new class ElgyemSpecies extends Species {}(
  PokemonSpecies.Elgyem,
  [PokemonVariety.Elgyem],
  "Elgyem",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class BeheeyemSpecies extends Species {}(
  PokemonSpecies.Beheeyem,
  [PokemonVariety.Beheeyem],
  "Beheeyem",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class LitwickSpecies extends Species {}(
  PokemonSpecies.Litwick,
  [PokemonVariety.Litwick],
  "Litwick",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class LampentSpecies extends Species {}(
  PokemonSpecies.Lampent,
  [PokemonVariety.Lampent],
  "Lampent",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class ChandelureSpecies extends Species {}(
  PokemonSpecies.Chandelure,
  [PokemonVariety.Chandelure],
  "Chandelure",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class AxewSpecies extends Species {}(
  PokemonSpecies.Axew,
  [PokemonVariety.Axew],
  "Axew",
  75,
  35,
  PokemonSpeciesFlags.None,
);
new class FraxureSpecies extends Species {}(
  PokemonSpecies.Fraxure,
  [PokemonVariety.Fraxure],
  "Fraxure",
  60,
  35,
  PokemonSpeciesFlags.None,
);
new class HaxorusSpecies extends Species {}(
  PokemonSpecies.Haxorus,
  [PokemonVariety.Haxorus],
  "Haxorus",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class CubchooSpecies extends Species {}(
  PokemonSpecies.Cubchoo,
  [PokemonVariety.Cubchoo],
  "Cubchoo",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class BearticSpecies extends Species {}(
  PokemonSpecies.Beartic,
  [PokemonVariety.Beartic],
  "Beartic",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class CryogonalSpecies extends Species {}(
  PokemonSpecies.Cryogonal,
  [PokemonVariety.Cryogonal],
  "Cryogonal",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class ShelmetSpecies extends Species {}(
  PokemonSpecies.Shelmet,
  [PokemonVariety.Shelmet],
  "Shelmet",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class AccelgorSpecies extends Species {}(
  PokemonSpecies.Accelgor,
  [PokemonVariety.Accelgor],
  "Accelgor",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class StunfiskSpecies extends Species {}(
  PokemonSpecies.Stunfisk,
  [PokemonVariety.Stunfisk, PokemonVariety.StunfiskGalar],
  "Stunfisk",
  75,
  70,
  PokemonSpeciesFlags.None,
);
new class MienfooSpecies extends Species {}(
  PokemonSpecies.Mienfoo,
  [PokemonVariety.Mienfoo],
  "Mienfoo",
  180,
  50,
  PokemonSpeciesFlags.None,
);
new class MienshaoSpecies extends Species {}(
  PokemonSpecies.Mienshao,
  [PokemonVariety.Mienshao],
  "Mienshao",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DruddigonSpecies extends Species {}(
  PokemonSpecies.Druddigon,
  [PokemonVariety.Druddigon],
  "Druddigon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class GolettSpecies extends Species {}(
  PokemonSpecies.Golett,
  [PokemonVariety.Golett],
  "Golett",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class GolurkSpecies extends Species {}(
  PokemonSpecies.Golurk,
  [PokemonVariety.Golurk],
  "Golurk",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class PawniardSpecies extends Species {}(
  PokemonSpecies.Pawniard,
  [PokemonVariety.Pawniard],
  "Pawniard",
  120,
  35,
  PokemonSpeciesFlags.None,
);
new class BisharpSpecies extends Species {}(
  PokemonSpecies.Bisharp,
  [PokemonVariety.Bisharp],
  "Bisharp",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class BouffalantSpecies extends Species {}(
  PokemonSpecies.Bouffalant,
  [PokemonVariety.Bouffalant],
  "Bouffalant",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class RuffletSpecies extends Species {}(
  PokemonSpecies.Rufflet,
  [PokemonVariety.Rufflet],
  "Rufflet",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class BraviarySpecies extends Species {}(
  PokemonSpecies.Braviary,
  [PokemonVariety.Braviary, PokemonVariety.BraviaryHisui],
  "Braviary",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class VullabySpecies extends Species {}(
  PokemonSpecies.Vullaby,
  [PokemonVariety.Vullaby],
  "Vullaby",
  190,
  35,
  PokemonSpeciesFlags.None,
);
new class MandibuzzSpecies extends Species {}(
  PokemonSpecies.Mandibuzz,
  [PokemonVariety.Mandibuzz],
  "Mandibuzz",
  60,
  35,
  PokemonSpeciesFlags.None,
);
new class HeatmorSpecies extends Species {}(
  PokemonSpecies.Heatmor,
  [PokemonVariety.Heatmor],
  "Heatmor",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class DurantSpecies extends Species {}(
  PokemonSpecies.Durant,
  [PokemonVariety.Durant],
  "Durant",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class DeinoSpecies extends Species {}(
  PokemonSpecies.Deino,
  [PokemonVariety.Deino],
  "Deino",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class ZweilousSpecies extends Species {}(
  PokemonSpecies.Zweilous,
  [PokemonVariety.Zweilous],
  "Zweilous",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class HydreigonSpecies extends Species {}(
  PokemonSpecies.Hydreigon,
  [PokemonVariety.Hydreigon],
  "Hydreigon",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class LarvestaSpecies extends Species {}(
  PokemonSpecies.Larvesta,
  [PokemonVariety.Larvesta],
  "Larvesta",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class VolcaronaSpecies extends Species {}(
  PokemonSpecies.Volcarona,
  [PokemonVariety.Volcarona],
  "Volcarona",
  15,
  50,
  PokemonSpeciesFlags.None,
);
new class CobalionSpecies extends Species {}(
  PokemonSpecies.Cobalion,
  [PokemonVariety.Cobalion],
  "Cobalion",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class TerrakionSpecies extends Species {}(
  PokemonSpecies.Terrakion,
  [PokemonVariety.Terrakion],
  "Terrakion",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class VirizionSpecies extends Species {}(
  PokemonSpecies.Virizion,
  [PokemonVariety.Virizion],
  "Virizion",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class TornadusSpecies extends Species {}(
  PokemonSpecies.Tornadus,
  [PokemonVariety.TornadusIncarnate, PokemonVariety.TornadusTherian],
  "Tornadus",
  3,
  90,
  PokemonSpeciesFlags.Legendary,
);
new class ThundurusSpecies extends Species {}(
  PokemonSpecies.Thundurus,
  [PokemonVariety.ThundurusIncarnate, PokemonVariety.ThundurusTherian],
  "Thundurus",
  3,
  90,
  PokemonSpeciesFlags.Legendary,
);
new class ReshiramSpecies extends Species {}(
  PokemonSpecies.Reshiram,
  [PokemonVariety.Reshiram],
  "Reshiram",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class ZekromSpecies extends Species {}(
  PokemonSpecies.Zekrom,
  [PokemonVariety.Zekrom],
  "Zekrom",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class LandorusSpecies extends Species {}(
  PokemonSpecies.Landorus,
  [PokemonVariety.LandorusIncarnate, PokemonVariety.LandorusTherian],
  "Landorus",
  3,
  90,
  PokemonSpeciesFlags.Legendary,
);
new class KyuremSpecies extends Species {}(
  PokemonSpecies.Kyurem,
  [PokemonVariety.Kyurem, PokemonVariety.KyuremBlack, PokemonVariety.KyuremWhite],
  "Kyurem",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class KeldeoSpecies extends Species {}(
  PokemonSpecies.Keldeo,
  [PokemonVariety.KeldeoOrdinary, PokemonVariety.KeldeoResolute],
  "Keldeo",
  3,
  35,
  PokemonSpeciesFlags.Mythical,
);
new class MeloettaSpecies extends Species {}(
  PokemonSpecies.Meloetta,
  [PokemonVariety.MeloettaAria, PokemonVariety.MeloettaPirouette],
  "Meloetta",
  3,
  100,
  PokemonSpeciesFlags.Mythical,
);
new class GenesectSpecies extends Species {}(
  PokemonSpecies.Genesect,
  [PokemonVariety.Genesect],
  "Genesect",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);
new class ChespinSpecies extends Species {}(
  PokemonSpecies.Chespin,
  [PokemonVariety.Chespin],
  "Chespin",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class QuilladinSpecies extends Species {}(
  PokemonSpecies.Quilladin,
  [PokemonVariety.Quilladin],
  "Quilladin",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class ChesnaughtSpecies extends Species {}(
  PokemonSpecies.Chesnaught,
  [PokemonVariety.Chesnaught],
  "Chesnaught",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class FennekinSpecies extends Species {}(
  PokemonSpecies.Fennekin,
  [PokemonVariety.Fennekin],
  "Fennekin",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class BraixenSpecies extends Species {}(
  PokemonSpecies.Braixen,
  [PokemonVariety.Braixen],
  "Braixen",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class DelphoxSpecies extends Species {}(
  PokemonSpecies.Delphox,
  [PokemonVariety.Delphox],
  "Delphox",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class FroakieSpecies extends Species {}(
  PokemonSpecies.Froakie,
  [PokemonVariety.Froakie],
  "Froakie",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class FrogadierSpecies extends Species {}(
  PokemonSpecies.Frogadier,
  [PokemonVariety.Frogadier],
  "Frogadier",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class GreninjaSpecies extends Species {}(
  PokemonSpecies.Greninja,
  [PokemonVariety.Greninja, PokemonVariety.GreninjaBattleBond, PokemonVariety.GreninjaAsh],
  "Greninja",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class BunnelbySpecies extends Species {}(
  PokemonSpecies.Bunnelby,
  [PokemonVariety.Bunnelby],
  "Bunnelby",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class DiggersbySpecies extends Species {}(
  PokemonSpecies.Diggersby,
  [PokemonVariety.Diggersby],
  "Diggersby",
  127,
  50,
  PokemonSpeciesFlags.None,
);
new class FletchlingSpecies extends Species {}(
  PokemonSpecies.Fletchling,
  [PokemonVariety.Fletchling],
  "Fletchling",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class FletchinderSpecies extends Species {}(
  PokemonSpecies.Fletchinder,
  [PokemonVariety.Fletchinder],
  "Fletchinder",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class TalonflameSpecies extends Species {}(
  PokemonSpecies.Talonflame,
  [PokemonVariety.Talonflame],
  "Talonflame",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ScatterbugSpecies extends Species {}(
  PokemonSpecies.Scatterbug,
  [PokemonVariety.Scatterbug],
  "Scatterbug",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class SpewpaSpecies extends Species {}(
  PokemonSpecies.Spewpa,
  [PokemonVariety.Spewpa],
  "Spewpa",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class VivillonSpecies extends Species {}(
  PokemonSpecies.Vivillon,
  [PokemonVariety.Vivillon],
  "Vivillon",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class LitleoSpecies extends Species {}(
  PokemonSpecies.Litleo,
  [PokemonVariety.Litleo],
  "Litleo",
  220,
  70,
  PokemonSpeciesFlags.None,
);
new class PyroarSpecies extends Species {}(
  PokemonSpecies.Pyroar,
  [PokemonVariety.Pyroar],
  "Pyroar",
  65,
  70,
  PokemonSpeciesFlags.None,
);
new class FlabebeSpecies extends Species {}(
  PokemonSpecies.Flabebe,
  [PokemonVariety.Flabebe],
  "Flabébé",
  225,
  70,
  PokemonSpeciesFlags.None,
);
new class FloetteSpecies extends Species {}(
  PokemonSpecies.Floette,
  [PokemonVariety.Floette, PokemonVariety.FloetteEternal],
  "Floette",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class FlorgesSpecies extends Species {}(
  PokemonSpecies.Florges,
  [PokemonVariety.Florges],
  "Florges",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class SkiddoSpecies extends Species {}(
  PokemonSpecies.Skiddo,
  [PokemonVariety.Skiddo],
  "Skiddo",
  200,
  70,
  PokemonSpeciesFlags.None,
);
new class GogoatSpecies extends Species {}(
  PokemonSpecies.Gogoat,
  [PokemonVariety.Gogoat],
  "Gogoat",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class PanchamSpecies extends Species {}(
  PokemonSpecies.Pancham,
  [PokemonVariety.Pancham],
  "Pancham",
  220,
  50,
  PokemonSpeciesFlags.None,
);
new class PangoroSpecies extends Species {}(
  PokemonSpecies.Pangoro,
  [PokemonVariety.Pangoro],
  "Pangoro",
  65,
  50,
  PokemonSpeciesFlags.None,
);
new class FurfrouSpecies extends Species {}(
  PokemonSpecies.Furfrou,
  [PokemonVariety.Furfrou],
  "Furfrou",
  160,
  70,
  PokemonSpeciesFlags.None,
);
new class EspurrSpecies extends Species {}(
  PokemonSpecies.Espurr,
  [PokemonVariety.Espurr],
  "Espurr",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class MeowsticSpecies extends Species {}(
  PokemonSpecies.Meowstic,
  [PokemonVariety.MeowsticMale, PokemonVariety.MeowsticFemale],
  "Meowstic",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class HonedgeSpecies extends Species {}(
  PokemonSpecies.Honedge,
  [PokemonVariety.Honedge],
  "Honedge",
  180,
  50,
  PokemonSpeciesFlags.None,
);
new class DoubladeSpecies extends Species {}(
  PokemonSpecies.Doublade,
  [PokemonVariety.Doublade],
  "Doublade",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class AegislashSpecies extends Species {}(
  PokemonSpecies.Aegislash,
  [PokemonVariety.AegislashShield, PokemonVariety.AegislashBlade],
  "Aegislash",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SpritzeeSpecies extends Species {}(
  PokemonSpecies.Spritzee,
  [PokemonVariety.Spritzee],
  "Spritzee",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class AromatisseSpecies extends Species {}(
  PokemonSpecies.Aromatisse,
  [PokemonVariety.Aromatisse],
  "Aromatisse",
  140,
  50,
  PokemonSpeciesFlags.None,
);
new class SwirlixSpecies extends Species {}(
  PokemonSpecies.Swirlix,
  [PokemonVariety.Swirlix],
  "Swirlix",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class SlurpuffSpecies extends Species {}(
  PokemonSpecies.Slurpuff,
  [PokemonVariety.Slurpuff],
  "Slurpuff",
  140,
  50,
  PokemonSpeciesFlags.None,
);
new class InkaySpecies extends Species {}(
  PokemonSpecies.Inkay,
  [PokemonVariety.Inkay],
  "Inkay",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class MalamarSpecies extends Species {}(
  PokemonSpecies.Malamar,
  [PokemonVariety.Malamar],
  "Malamar",
  80,
  50,
  PokemonSpeciesFlags.None,
);
new class BinacleSpecies extends Species {}(
  PokemonSpecies.Binacle,
  [PokemonVariety.Binacle],
  "Binacle",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class BarbaracleSpecies extends Species {}(
  PokemonSpecies.Barbaracle,
  [PokemonVariety.Barbaracle],
  "Barbaracle",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SkrelpSpecies extends Species {}(
  PokemonSpecies.Skrelp,
  [PokemonVariety.Skrelp],
  "Skrelp",
  225,
  50,
  PokemonSpeciesFlags.None,
);
new class DragalgeSpecies extends Species {}(
  PokemonSpecies.Dragalge,
  [PokemonVariety.Dragalge],
  "Dragalge",
  55,
  50,
  PokemonSpeciesFlags.None,
);
new class ClauncherSpecies extends Species {}(
  PokemonSpecies.Clauncher,
  [PokemonVariety.Clauncher],
  "Clauncher",
  225,
  50,
  PokemonSpeciesFlags.None,
);
new class ClawitzerSpecies extends Species {}(
  PokemonSpecies.Clawitzer,
  [PokemonVariety.Clawitzer],
  "Clawitzer",
  55,
  50,
  PokemonSpeciesFlags.None,
);
new class HelioptileSpecies extends Species {}(
  PokemonSpecies.Helioptile,
  [PokemonVariety.Helioptile],
  "Helioptile",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class HelioliskSpecies extends Species {}(
  PokemonSpecies.Heliolisk,
  [PokemonVariety.Heliolisk],
  "Heliolisk",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class TyruntSpecies extends Species {}(
  PokemonSpecies.Tyrunt,
  [PokemonVariety.Tyrunt],
  "Tyrunt",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class TyrantrumSpecies extends Species {}(
  PokemonSpecies.Tyrantrum,
  [PokemonVariety.Tyrantrum],
  "Tyrantrum",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class AmauraSpecies extends Species {}(
  PokemonSpecies.Amaura,
  [PokemonVariety.Amaura],
  "Amaura",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class AurorusSpecies extends Species {}(
  PokemonSpecies.Aurorus,
  [PokemonVariety.Aurorus],
  "Aurorus",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SylveonSpecies extends Species {}(
  PokemonSpecies.Sylveon,
  [PokemonVariety.Sylveon],
  "Sylveon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class HawluchaSpecies extends Species {}(
  PokemonSpecies.Hawlucha,
  [PokemonVariety.Hawlucha],
  "Hawlucha",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class DedenneSpecies extends Species {}(
  PokemonSpecies.Dedenne,
  [PokemonVariety.Dedenne],
  "Dedenne",
  180,
  50,
  PokemonSpeciesFlags.None,
);
new class CarbinkSpecies extends Species {}(
  PokemonSpecies.Carbink,
  [PokemonVariety.Carbink],
  "Carbink",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class GoomySpecies extends Species {}(
  PokemonSpecies.Goomy,
  [PokemonVariety.Goomy],
  "Goomy",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class SliggooSpecies extends Species {}(
  PokemonSpecies.Sliggoo,
  [PokemonVariety.Sliggoo, PokemonVariety.SliggooHisui],
  "Sliggoo",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class GoodraSpecies extends Species {}(
  PokemonSpecies.Goodra,
  [PokemonVariety.Goodra, PokemonVariety.GoodraHisui],
  "Goodra",
  45,
  35,
  PokemonSpeciesFlags.None,
);
new class KlefkiSpecies extends Species {}(
  PokemonSpecies.Klefki,
  [PokemonVariety.Klefki],
  "Klefki",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class PhantumpSpecies extends Species {}(
  PokemonSpecies.Phantump,
  [PokemonVariety.Phantump],
  "Phantump",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class TrevenantSpecies extends Species {}(
  PokemonSpecies.Trevenant,
  [PokemonVariety.Trevenant],
  "Trevenant",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class PumpkabooSpecies extends Species {}(
  PokemonSpecies.Pumpkaboo,
  [PokemonVariety.PumpkabooAverage, PokemonVariety.PumpkabooSmall, PokemonVariety.PumpkabooLarge, PokemonVariety.PumpkabooSuper],
  "Pumpkaboo",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class GourgeistSpecies extends Species {}(
  PokemonSpecies.Gourgeist,
  [PokemonVariety.GourgeistAverage, PokemonVariety.GourgeistSmall, PokemonVariety.GourgeistLarge, PokemonVariety.GourgeistSuper],
  "Gourgeist",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class BergmiteSpecies extends Species {}(
  PokemonSpecies.Bergmite,
  [PokemonVariety.Bergmite],
  "Bergmite",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class AvaluggSpecies extends Species {}(
  PokemonSpecies.Avalugg,
  [PokemonVariety.Avalugg, PokemonVariety.AvaluggHisui],
  "Avalugg",
  55,
  50,
  PokemonSpeciesFlags.None,
);
new class NoibatSpecies extends Species {}(
  PokemonSpecies.Noibat,
  [PokemonVariety.Noibat],
  "Noibat",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class NoivernSpecies extends Species {}(
  PokemonSpecies.Noivern,
  [PokemonVariety.Noivern],
  "Noivern",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class XerneasSpecies extends Species {}(
  PokemonSpecies.Xerneas,
  [PokemonVariety.Xerneas],
  "Xerneas",
  45,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class YveltalSpecies extends Species {}(
  PokemonSpecies.Yveltal,
  [PokemonVariety.Yveltal],
  "Yveltal",
  45,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class ZygardeSpecies extends Species {}(
  PokemonSpecies.Zygarde,
  [PokemonVariety.Zygarde50, PokemonVariety.Zygarde10PowerConstruct, PokemonVariety.Zygarde50PowerConstruct, PokemonVariety.ZygardeComplete, PokemonVariety.Zygarde10],
  "Zygarde",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class DiancieSpecies extends Species {}(
  PokemonSpecies.Diancie,
  [PokemonVariety.Diancie, PokemonVariety.DiancieMega],
  "Diancie",
  3,
  50,
  PokemonSpeciesFlags.Mythical,
);
new class HoopaSpecies extends Species {}(
  PokemonSpecies.Hoopa,
  [PokemonVariety.Hoopa, PokemonVariety.HoopaUnbound],
  "Hoopa",
  3,
  100,
  PokemonSpeciesFlags.Mythical,
);
new class VolcanionSpecies extends Species {}(
  PokemonSpecies.Volcanion,
  [PokemonVariety.Volcanion],
  "Volcanion",
  3,
  100,
  PokemonSpeciesFlags.Mythical,
);
new class RowletSpecies extends Species {}(
  PokemonSpecies.Rowlet,
  [PokemonVariety.Rowlet],
  "Rowlet",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DartrixSpecies extends Species {}(
  PokemonSpecies.Dartrix,
  [PokemonVariety.Dartrix],
  "Dartrix",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DecidueyeSpecies extends Species {}(
  PokemonSpecies.Decidueye,
  [PokemonVariety.Decidueye, PokemonVariety.DecidueyeHisui],
  "Decidueye",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class LittenSpecies extends Species {}(
  PokemonSpecies.Litten,
  [PokemonVariety.Litten],
  "Litten",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class TorracatSpecies extends Species {}(
  PokemonSpecies.Torracat,
  [PokemonVariety.Torracat],
  "Torracat",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class IncineroarSpecies extends Species {}(
  PokemonSpecies.Incineroar,
  [PokemonVariety.Incineroar],
  "Incineroar",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PopplioSpecies extends Species {}(
  PokemonSpecies.Popplio,
  [PokemonVariety.Popplio],
  "Popplio",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class BrionneSpecies extends Species {}(
  PokemonSpecies.Brionne,
  [PokemonVariety.Brionne],
  "Brionne",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PrimarinaSpecies extends Species {}(
  PokemonSpecies.Primarina,
  [PokemonVariety.Primarina],
  "Primarina",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PikipekSpecies extends Species {}(
  PokemonSpecies.Pikipek,
  [PokemonVariety.Pikipek],
  "Pikipek",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class TrumbeakSpecies extends Species {}(
  PokemonSpecies.Trumbeak,
  [PokemonVariety.Trumbeak],
  "Trumbeak",
  120,
  70,
  PokemonSpeciesFlags.None,
);
new class ToucannonSpecies extends Species {}(
  PokemonSpecies.Toucannon,
  [PokemonVariety.Toucannon],
  "Toucannon",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class YungoosSpecies extends Species {}(
  PokemonSpecies.Yungoos,
  [PokemonVariety.Yungoos],
  "Yungoos",
  255,
  70,
  PokemonSpeciesFlags.None,
);
new class GumshoosSpecies extends Species {}(
  PokemonSpecies.Gumshoos,
  [PokemonVariety.Gumshoos, PokemonVariety.GumshoosTotem],
  "Gumshoos",
  127,
  70,
  PokemonSpeciesFlags.None,
);
new class GrubbinSpecies extends Species {}(
  PokemonSpecies.Grubbin,
  [PokemonVariety.Grubbin],
  "Grubbin",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class CharjabugSpecies extends Species {}(
  PokemonSpecies.Charjabug,
  [PokemonVariety.Charjabug],
  "Charjabug",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class VikavoltSpecies extends Species {}(
  PokemonSpecies.Vikavolt,
  [PokemonVariety.Vikavolt, PokemonVariety.VikavoltTotem],
  "Vikavolt",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CrabrawlerSpecies extends Species {}(
  PokemonSpecies.Crabrawler,
  [PokemonVariety.Crabrawler],
  "Crabrawler",
  225,
  70,
  PokemonSpeciesFlags.None,
);
new class CrabominableSpecies extends Species {}(
  PokemonSpecies.Crabominable,
  [PokemonVariety.Crabominable],
  "Crabominable",
  60,
  70,
  PokemonSpeciesFlags.None,
);
new class OricorioSpecies extends Species {}(
  PokemonSpecies.Oricorio,
  [PokemonVariety.OricorioBaile, PokemonVariety.OricorioPomPom, PokemonVariety.OricorioPau, PokemonVariety.OricorioSensu],
  "Oricorio",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class CutieflySpecies extends Species {}(
  PokemonSpecies.Cutiefly,
  [PokemonVariety.Cutiefly],
  "Cutiefly",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class RibombeeSpecies extends Species {}(
  PokemonSpecies.Ribombee,
  [PokemonVariety.Ribombee, PokemonVariety.RibombeeTotem],
  "Ribombee",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class RockruffSpecies extends Species {}(
  PokemonSpecies.Rockruff,
  [PokemonVariety.Rockruff, PokemonVariety.RockruffOwnTempo],
  "Rockruff",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class LycanrocSpecies extends Species {}(
  PokemonSpecies.Lycanroc,
  [PokemonVariety.LycanrocMidday, PokemonVariety.LycanrocMidnight, PokemonVariety.LycanrocDusk],
  "Lycanroc",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class WishiwashiSpecies extends Species {}(
  PokemonSpecies.Wishiwashi,
  [PokemonVariety.WishiwashiSolo, PokemonVariety.WishiwashiSchool],
  "Wishiwashi",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class MareanieSpecies extends Species {}(
  PokemonSpecies.Mareanie,
  [PokemonVariety.Mareanie],
  "Mareanie",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class ToxapexSpecies extends Species {}(
  PokemonSpecies.Toxapex,
  [PokemonVariety.Toxapex],
  "Toxapex",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class MudbraySpecies extends Species {}(
  PokemonSpecies.Mudbray,
  [PokemonVariety.Mudbray],
  "Mudbray",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class MudsdaleSpecies extends Species {}(
  PokemonSpecies.Mudsdale,
  [PokemonVariety.Mudsdale],
  "Mudsdale",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class DewpiderSpecies extends Species {}(
  PokemonSpecies.Dewpider,
  [PokemonVariety.Dewpider],
  "Dewpider",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class AraquanidSpecies extends Species {}(
  PokemonSpecies.Araquanid,
  [PokemonVariety.Araquanid, PokemonVariety.AraquanidTotem],
  "Araquanid",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class FomantisSpecies extends Species {}(
  PokemonSpecies.Fomantis,
  [PokemonVariety.Fomantis],
  "Fomantis",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class LurantisSpecies extends Species {}(
  PokemonSpecies.Lurantis,
  [PokemonVariety.Lurantis, PokemonVariety.LurantisTotem],
  "Lurantis",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class MorelullSpecies extends Species {}(
  PokemonSpecies.Morelull,
  [PokemonVariety.Morelull],
  "Morelull",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class ShiinoticSpecies extends Species {}(
  PokemonSpecies.Shiinotic,
  [PokemonVariety.Shiinotic],
  "Shiinotic",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class SalanditSpecies extends Species {}(
  PokemonSpecies.Salandit,
  [PokemonVariety.Salandit],
  "Salandit",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class SalazzleSpecies extends Species {}(
  PokemonSpecies.Salazzle,
  [PokemonVariety.Salazzle, PokemonVariety.SalazzleTotem],
  "Salazzle",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class StuffulSpecies extends Species {}(
  PokemonSpecies.Stufful,
  [PokemonVariety.Stufful],
  "Stufful",
  140,
  50,
  PokemonSpeciesFlags.None,
);
new class BewearSpecies extends Species {}(
  PokemonSpecies.Bewear,
  [PokemonVariety.Bewear],
  "Bewear",
  70,
  50,
  PokemonSpeciesFlags.None,
);
new class BounsweetSpecies extends Species {}(
  PokemonSpecies.Bounsweet,
  [PokemonVariety.Bounsweet],
  "Bounsweet",
  235,
  50,
  PokemonSpeciesFlags.None,
);
new class SteeneeSpecies extends Species {}(
  PokemonSpecies.Steenee,
  [PokemonVariety.Steenee],
  "Steenee",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class TsareenaSpecies extends Species {}(
  PokemonSpecies.Tsareena,
  [PokemonVariety.Tsareena],
  "Tsareena",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ComfeySpecies extends Species {}(
  PokemonSpecies.Comfey,
  [PokemonVariety.Comfey],
  "Comfey",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class OranguruSpecies extends Species {}(
  PokemonSpecies.Oranguru,
  [PokemonVariety.Oranguru],
  "Oranguru",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PassimianSpecies extends Species {}(
  PokemonSpecies.Passimian,
  [PokemonVariety.Passimian],
  "Passimian",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class WimpodSpecies extends Species {}(
  PokemonSpecies.Wimpod,
  [PokemonVariety.Wimpod],
  "Wimpod",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class GolisopodSpecies extends Species {}(
  PokemonSpecies.Golisopod,
  [PokemonVariety.Golisopod],
  "Golisopod",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SandygastSpecies extends Species {}(
  PokemonSpecies.Sandygast,
  [PokemonVariety.Sandygast],
  "Sandygast",
  140,
  50,
  PokemonSpeciesFlags.None,
);
new class PalossandSpecies extends Species {}(
  PokemonSpecies.Palossand,
  [PokemonVariety.Palossand],
  "Palossand",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class PyukumukuSpecies extends Species {}(
  PokemonSpecies.Pyukumuku,
  [PokemonVariety.Pyukumuku],
  "Pyukumuku",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class TypeNullSpecies extends Species {}(
  PokemonSpecies.TypeNull,
  [PokemonVariety.TypeNull],
  "Type: Null",
  3,
  0,
  PokemonSpeciesFlags.None,
);
new class SilvallySpecies extends Species {}(
  PokemonSpecies.Silvally,
  [PokemonVariety.Silvally],
  "Silvally",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class MiniorSpecies extends Species {}(
  PokemonSpecies.Minior,
  [PokemonVariety.MiniorRedMeteor, PokemonVariety.MiniorOrangeMeteor, PokemonVariety.MiniorYellowMeteor, PokemonVariety.MiniorGreenMeteor, PokemonVariety.MiniorBlueMeteor, PokemonVariety.MiniorIndigoMeteor, PokemonVariety.MiniorVioletMeteor, PokemonVariety.MiniorRed, PokemonVariety.MiniorOrange, PokemonVariety.MiniorYellow, PokemonVariety.MiniorGreen, PokemonVariety.MiniorBlue, PokemonVariety.MiniorIndigo, PokemonVariety.MiniorViolet],
  "Minior",
  30,
  70,
  PokemonSpeciesFlags.None,
);
new class KomalaSpecies extends Species {}(
  PokemonSpecies.Komala,
  [PokemonVariety.Komala],
  "Komala",
  45,
  70,
  PokemonSpeciesFlags.None,
);
new class TurtonatorSpecies extends Species {}(
  PokemonSpecies.Turtonator,
  [PokemonVariety.Turtonator],
  "Turtonator",
  70,
  50,
  PokemonSpeciesFlags.None,
);
new class TogedemaruSpecies extends Species {}(
  PokemonSpecies.Togedemaru,
  [PokemonVariety.Togedemaru, PokemonVariety.TogedemaruTotem],
  "Togedemaru",
  180,
  50,
  PokemonSpeciesFlags.None,
);
new class MimikyuSpecies extends Species {}(
  PokemonSpecies.Mimikyu,
  [PokemonVariety.MimikyuDisguised, PokemonVariety.MimikyuBusted, PokemonVariety.MimikyuTotemDisguised, PokemonVariety.MimikyuTotemBusted],
  "Mimikyu",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class BruxishSpecies extends Species {}(
  PokemonSpecies.Bruxish,
  [PokemonVariety.Bruxish],
  "Bruxish",
  80,
  70,
  PokemonSpeciesFlags.None,
);
new class DrampaSpecies extends Species {}(
  PokemonSpecies.Drampa,
  [PokemonVariety.Drampa],
  "Drampa",
  70,
  50,
  PokemonSpeciesFlags.None,
);
new class DhelmiseSpecies extends Species {}(
  PokemonSpecies.Dhelmise,
  [PokemonVariety.Dhelmise],
  "Dhelmise",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class JangmoOSpecies extends Species {}(
  PokemonSpecies.JangmoO,
  [PokemonVariety.JangmoO],
  "Jangmo-o",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class HakamoOSpecies extends Species {}(
  PokemonSpecies.HakamoO,
  [PokemonVariety.HakamoO],
  "Hakamo-o",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class KommoOSpecies extends Species {}(
  PokemonSpecies.KommoO,
  [PokemonVariety.KommoO, PokemonVariety.KommoOTotem],
  "Kommo-o",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class TapuKokoSpecies extends Species {}(
  PokemonSpecies.TapuKoko,
  [PokemonVariety.TapuKoko],
  "Tapu Koko",
  3,
  50,
  PokemonSpeciesFlags.Legendary,
);
new class TapuLeleSpecies extends Species {}(
  PokemonSpecies.TapuLele,
  [PokemonVariety.TapuLele],
  "Tapu Lele",
  3,
  50,
  PokemonSpeciesFlags.Legendary,
);
new class TapuBuluSpecies extends Species {}(
  PokemonSpecies.TapuBulu,
  [PokemonVariety.TapuBulu],
  "Tapu Bulu",
  3,
  50,
  PokemonSpeciesFlags.Legendary,
);
new class TapuFiniSpecies extends Species {}(
  PokemonSpecies.TapuFini,
  [PokemonVariety.TapuFini],
  "Tapu Fini",
  3,
  50,
  PokemonSpeciesFlags.Legendary,
);
new class CosmogSpecies extends Species {}(
  PokemonSpecies.Cosmog,
  [PokemonVariety.Cosmog],
  "Cosmog",
  45,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class CosmoemSpecies extends Species {}(
  PokemonSpecies.Cosmoem,
  [PokemonVariety.Cosmoem],
  "Cosmoem",
  45,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class SolgaleoSpecies extends Species {}(
  PokemonSpecies.Solgaleo,
  [PokemonVariety.Solgaleo],
  "Solgaleo",
  45,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class LunalaSpecies extends Species {}(
  PokemonSpecies.Lunala,
  [PokemonVariety.Lunala],
  "Lunala",
  45,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class NihilegoSpecies extends Species {}(
  PokemonSpecies.Nihilego,
  [PokemonVariety.Nihilego],
  "Nihilego",
  45,
  0,
  PokemonSpeciesFlags.None,
);
new class BuzzwoleSpecies extends Species {}(
  PokemonSpecies.Buzzwole,
  [PokemonVariety.Buzzwole],
  "Buzzwole",
  45,
  0,
  PokemonSpeciesFlags.None,
);
new class PheromosaSpecies extends Species {}(
  PokemonSpecies.Pheromosa,
  [PokemonVariety.Pheromosa],
  "Pheromosa",
  45,
  0,
  PokemonSpeciesFlags.None,
);
new class XurkitreeSpecies extends Species {}(
  PokemonSpecies.Xurkitree,
  [PokemonVariety.Xurkitree],
  "Xurkitree",
  45,
  0,
  PokemonSpeciesFlags.None,
);
new class CelesteelaSpecies extends Species {}(
  PokemonSpecies.Celesteela,
  [PokemonVariety.Celesteela],
  "Celesteela",
  45,
  0,
  PokemonSpeciesFlags.None,
);
new class KartanaSpecies extends Species {}(
  PokemonSpecies.Kartana,
  [PokemonVariety.Kartana],
  "Kartana",
  45,
  0,
  PokemonSpeciesFlags.None,
);
new class GuzzlordSpecies extends Species {}(
  PokemonSpecies.Guzzlord,
  [PokemonVariety.Guzzlord],
  "Guzzlord",
  45,
  0,
  PokemonSpeciesFlags.None,
);
new class NecrozmaSpecies extends Species {}(
  PokemonSpecies.Necrozma,
  [PokemonVariety.Necrozma, PokemonVariety.NecrozmaDusk, PokemonVariety.NecrozmaDawn, PokemonVariety.NecrozmaUltra],
  "Necrozma",
  255,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class MagearnaSpecies extends Species {}(
  PokemonSpecies.Magearna,
  [PokemonVariety.Magearna, PokemonVariety.MagearnaOriginal],
  "Magearna",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);
new class MarshadowSpecies extends Species {}(
  PokemonSpecies.Marshadow,
  [PokemonVariety.Marshadow],
  "Marshadow",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);
new class PoipoleSpecies extends Species {}(
  PokemonSpecies.Poipole,
  [PokemonVariety.Poipole],
  "Poipole",
  45,
  0,
  PokemonSpeciesFlags.None,
);
new class NaganadelSpecies extends Species {}(
  PokemonSpecies.Naganadel,
  [PokemonVariety.Naganadel],
  "Naganadel",
  45,
  0,
  PokemonSpeciesFlags.None,
);
new class StakatakaSpecies extends Species {}(
  PokemonSpecies.Stakataka,
  [PokemonVariety.Stakataka],
  "Stakataka",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class BlacephalonSpecies extends Species {}(
  PokemonSpecies.Blacephalon,
  [PokemonVariety.Blacephalon],
  "Blacephalon",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class ZeraoraSpecies extends Species {}(
  PokemonSpecies.Zeraora,
  [PokemonVariety.Zeraora],
  "Zeraora",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);
new class MeltanSpecies extends Species {}(
  PokemonSpecies.Meltan,
  [PokemonVariety.Meltan],
  "Meltan",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);
new class MelmetalSpecies extends Species {}(
  PokemonSpecies.Melmetal,
  [PokemonVariety.Melmetal, PokemonVariety.MelmetalGmax],
  "Melmetal",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);
new class GrookeySpecies extends Species {}(
  PokemonSpecies.Grookey,
  [PokemonVariety.Grookey],
  "Grookey",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ThwackeySpecies extends Species {}(
  PokemonSpecies.Thwackey,
  [PokemonVariety.Thwackey],
  "Thwackey",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class RillaboomSpecies extends Species {}(
  PokemonSpecies.Rillaboom,
  [PokemonVariety.Rillaboom, PokemonVariety.RillaboomGmax],
  "Rillaboom",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ScorbunnySpecies extends Species {}(
  PokemonSpecies.Scorbunny,
  [PokemonVariety.Scorbunny],
  "Scorbunny",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class RabootSpecies extends Species {}(
  PokemonSpecies.Raboot,
  [PokemonVariety.Raboot],
  "Raboot",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CinderaceSpecies extends Species {}(
  PokemonSpecies.Cinderace,
  [PokemonVariety.Cinderace, PokemonVariety.CinderaceGmax],
  "Cinderace",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SobbleSpecies extends Species {}(
  PokemonSpecies.Sobble,
  [PokemonVariety.Sobble],
  "Sobble",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DrizzileSpecies extends Species {}(
  PokemonSpecies.Drizzile,
  [PokemonVariety.Drizzile],
  "Drizzile",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class InteleonSpecies extends Species {}(
  PokemonSpecies.Inteleon,
  [PokemonVariety.Inteleon, PokemonVariety.InteleonGmax],
  "Inteleon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SkwovetSpecies extends Species {}(
  PokemonSpecies.Skwovet,
  [PokemonVariety.Skwovet],
  "Skwovet",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class GreedentSpecies extends Species {}(
  PokemonSpecies.Greedent,
  [PokemonVariety.Greedent],
  "Greedent",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class RookideeSpecies extends Species {}(
  PokemonSpecies.Rookidee,
  [PokemonVariety.Rookidee],
  "Rookidee",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class CorvisquireSpecies extends Species {}(
  PokemonSpecies.Corvisquire,
  [PokemonVariety.Corvisquire],
  "Corvisquire",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class CorviknightSpecies extends Species {}(
  PokemonSpecies.Corviknight,
  [PokemonVariety.Corviknight, PokemonVariety.CorviknightGmax],
  "Corviknight",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class BlipbugSpecies extends Species {}(
  PokemonSpecies.Blipbug,
  [PokemonVariety.Blipbug],
  "Blipbug",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class DottlerSpecies extends Species {}(
  PokemonSpecies.Dottler,
  [PokemonVariety.Dottler],
  "Dottler",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class OrbeetleSpecies extends Species {}(
  PokemonSpecies.Orbeetle,
  [PokemonVariety.Orbeetle, PokemonVariety.OrbeetleGmax],
  "Orbeetle",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class NickitSpecies extends Species {}(
  PokemonSpecies.Nickit,
  [PokemonVariety.Nickit],
  "Nickit",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class ThievulSpecies extends Species {}(
  PokemonSpecies.Thievul,
  [PokemonVariety.Thievul],
  "Thievul",
  127,
  50,
  PokemonSpeciesFlags.None,
);
new class GossifleurSpecies extends Species {}(
  PokemonSpecies.Gossifleur,
  [PokemonVariety.Gossifleur],
  "Gossifleur",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class EldegossSpecies extends Species {}(
  PokemonSpecies.Eldegoss,
  [PokemonVariety.Eldegoss],
  "Eldegoss",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class WoolooSpecies extends Species {}(
  PokemonSpecies.Wooloo,
  [PokemonVariety.Wooloo],
  "Wooloo",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class DubwoolSpecies extends Species {}(
  PokemonSpecies.Dubwool,
  [PokemonVariety.Dubwool],
  "Dubwool",
  127,
  50,
  PokemonSpeciesFlags.None,
);
new class ChewtleSpecies extends Species {}(
  PokemonSpecies.Chewtle,
  [PokemonVariety.Chewtle],
  "Chewtle",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class DrednawSpecies extends Species {}(
  PokemonSpecies.Drednaw,
  [PokemonVariety.Drednaw, PokemonVariety.DrednawGmax],
  "Drednaw",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class YamperSpecies extends Species {}(
  PokemonSpecies.Yamper,
  [PokemonVariety.Yamper],
  "Yamper",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class BoltundSpecies extends Species {}(
  PokemonSpecies.Boltund,
  [PokemonVariety.Boltund],
  "Boltund",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class RolycolySpecies extends Species {}(
  PokemonSpecies.Rolycoly,
  [PokemonVariety.Rolycoly],
  "Rolycoly",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class CarkolSpecies extends Species {}(
  PokemonSpecies.Carkol,
  [PokemonVariety.Carkol],
  "Carkol",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class CoalossalSpecies extends Species {}(
  PokemonSpecies.Coalossal,
  [PokemonVariety.Coalossal, PokemonVariety.CoalossalGmax],
  "Coalossal",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ApplinSpecies extends Species {}(
  PokemonSpecies.Applin,
  [PokemonVariety.Applin],
  "Applin",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class FlappleSpecies extends Species {}(
  PokemonSpecies.Flapple,
  [PokemonVariety.Flapple, PokemonVariety.FlappleGmax],
  "Flapple",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class AppletunSpecies extends Species {}(
  PokemonSpecies.Appletun,
  [PokemonVariety.Appletun, PokemonVariety.AppletunGmax],
  "Appletun",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SilicobraSpecies extends Species {}(
  PokemonSpecies.Silicobra,
  [PokemonVariety.Silicobra],
  "Silicobra",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class SandacondaSpecies extends Species {}(
  PokemonSpecies.Sandaconda,
  [PokemonVariety.Sandaconda, PokemonVariety.SandacondaGmax],
  "Sandaconda",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class CramorantSpecies extends Species {}(
  PokemonSpecies.Cramorant,
  [PokemonVariety.Cramorant, PokemonVariety.CramorantGulping, PokemonVariety.CramorantGorging],
  "Cramorant",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ArrokudaSpecies extends Species {}(
  PokemonSpecies.Arrokuda,
  [PokemonVariety.Arrokuda],
  "Arrokuda",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class BarraskewdaSpecies extends Species {}(
  PokemonSpecies.Barraskewda,
  [PokemonVariety.Barraskewda],
  "Barraskewda",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class ToxelSpecies extends Species {}(
  PokemonSpecies.Toxel,
  [PokemonVariety.Toxel],
  "Toxel",
  75,
  50,
  PokemonSpeciesFlags.Baby,
);
new class ToxtricitySpecies extends Species {}(
  PokemonSpecies.Toxtricity,
  [PokemonVariety.ToxtricityAmped, PokemonVariety.ToxtricityLowKey, PokemonVariety.ToxtricityAmpedGmax, PokemonVariety.ToxtricityLowKeyGmax],
  "Toxtricity",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SizzlipedeSpecies extends Species {}(
  PokemonSpecies.Sizzlipede,
  [PokemonVariety.Sizzlipede],
  "Sizzlipede",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class CentiskorchSpecies extends Species {}(
  PokemonSpecies.Centiskorch,
  [PokemonVariety.Centiskorch, PokemonVariety.CentiskorchGmax],
  "Centiskorch",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class ClobbopusSpecies extends Species {}(
  PokemonSpecies.Clobbopus,
  [PokemonVariety.Clobbopus],
  "Clobbopus",
  180,
  50,
  PokemonSpeciesFlags.None,
);
new class GrapploctSpecies extends Species {}(
  PokemonSpecies.Grapploct,
  [PokemonVariety.Grapploct],
  "Grapploct",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SinisteaSpecies extends Species {}(
  PokemonSpecies.Sinistea,
  [PokemonVariety.Sinistea],
  "Sinistea",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class PolteageistSpecies extends Species {}(
  PokemonSpecies.Polteageist,
  [PokemonVariety.Polteageist],
  "Polteageist",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class HatennaSpecies extends Species {}(
  PokemonSpecies.Hatenna,
  [PokemonVariety.Hatenna],
  "Hatenna",
  235,
  50,
  PokemonSpeciesFlags.None,
);
new class HattremSpecies extends Species {}(
  PokemonSpecies.Hattrem,
  [PokemonVariety.Hattrem],
  "Hattrem",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class HattereneSpecies extends Species {}(
  PokemonSpecies.Hatterene,
  [PokemonVariety.Hatterene, PokemonVariety.HattereneGmax],
  "Hatterene",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ImpidimpSpecies extends Species {}(
  PokemonSpecies.Impidimp,
  [PokemonVariety.Impidimp],
  "Impidimp",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class MorgremSpecies extends Species {}(
  PokemonSpecies.Morgrem,
  [PokemonVariety.Morgrem],
  "Morgrem",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class GrimmsnarlSpecies extends Species {}(
  PokemonSpecies.Grimmsnarl,
  [PokemonVariety.Grimmsnarl, PokemonVariety.GrimmsnarlGmax],
  "Grimmsnarl",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ObstagoonSpecies extends Species {}(
  PokemonSpecies.Obstagoon,
  [PokemonVariety.Obstagoon],
  "Obstagoon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PerrserkerSpecies extends Species {}(
  PokemonSpecies.Perrserker,
  [PokemonVariety.Perrserker],
  "Perrserker",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class CursolaSpecies extends Species {}(
  PokemonSpecies.Cursola,
  [PokemonVariety.Cursola],
  "Cursola",
  30,
  50,
  PokemonSpeciesFlags.None,
);
new class SirfetchdSpecies extends Species {}(
  PokemonSpecies.Sirfetchd,
  [PokemonVariety.Sirfetchd],
  "Sirfetch’d",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MrRimeSpecies extends Species {}(
  PokemonSpecies.MrRime,
  [PokemonVariety.MrRime],
  "Mr. Rime",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class RunerigusSpecies extends Species {}(
  PokemonSpecies.Runerigus,
  [PokemonVariety.Runerigus],
  "Runerigus",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class MilcerySpecies extends Species {}(
  PokemonSpecies.Milcery,
  [PokemonVariety.Milcery],
  "Milcery",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class AlcremieSpecies extends Species {}(
  PokemonSpecies.Alcremie,
  [PokemonVariety.Alcremie, PokemonVariety.AlcremieGmax],
  "Alcremie",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class FalinksSpecies extends Species {}(
  PokemonSpecies.Falinks,
  [PokemonVariety.Falinks],
  "Falinks",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class PincurchinSpecies extends Species {}(
  PokemonSpecies.Pincurchin,
  [PokemonVariety.Pincurchin],
  "Pincurchin",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class SnomSpecies extends Species {}(
  PokemonSpecies.Snom,
  [PokemonVariety.Snom],
  "Snom",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class FrosmothSpecies extends Species {}(
  PokemonSpecies.Frosmoth,
  [PokemonVariety.Frosmoth],
  "Frosmoth",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class StonjournerSpecies extends Species {}(
  PokemonSpecies.Stonjourner,
  [PokemonVariety.Stonjourner],
  "Stonjourner",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class EiscueSpecies extends Species {}(
  PokemonSpecies.Eiscue,
  [PokemonVariety.EiscueIce, PokemonVariety.EiscueNoice],
  "Eiscue",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class IndeedeeSpecies extends Species {}(
  PokemonSpecies.Indeedee,
  [PokemonVariety.IndeedeeMale, PokemonVariety.IndeedeeFemale],
  "Indeedee",
  30,
  140,
  PokemonSpeciesFlags.None,
);
new class MorpekoSpecies extends Species {}(
  PokemonSpecies.Morpeko,
  [PokemonVariety.MorpekoFullBelly, PokemonVariety.MorpekoHangry],
  "Morpeko",
  180,
  50,
  PokemonSpeciesFlags.None,
);
new class CufantSpecies extends Species {}(
  PokemonSpecies.Cufant,
  [PokemonVariety.Cufant],
  "Cufant",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class CopperajahSpecies extends Species {}(
  PokemonSpecies.Copperajah,
  [PokemonVariety.Copperajah, PokemonVariety.CopperajahGmax],
  "Copperajah",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class DracozoltSpecies extends Species {}(
  PokemonSpecies.Dracozolt,
  [PokemonVariety.Dracozolt],
  "Dracozolt",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ArctozoltSpecies extends Species {}(
  PokemonSpecies.Arctozolt,
  [PokemonVariety.Arctozolt],
  "Arctozolt",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DracovishSpecies extends Species {}(
  PokemonSpecies.Dracovish,
  [PokemonVariety.Dracovish],
  "Dracovish",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ArctovishSpecies extends Species {}(
  PokemonSpecies.Arctovish,
  [PokemonVariety.Arctovish],
  "Arctovish",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DuraludonSpecies extends Species {}(
  PokemonSpecies.Duraludon,
  [PokemonVariety.Duraludon, PokemonVariety.DuraludonGmax],
  "Duraludon",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DreepySpecies extends Species {}(
  PokemonSpecies.Dreepy,
  [PokemonVariety.Dreepy],
  "Dreepy",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DrakloakSpecies extends Species {}(
  PokemonSpecies.Drakloak,
  [PokemonVariety.Drakloak],
  "Drakloak",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DragapultSpecies extends Species {}(
  PokemonSpecies.Dragapult,
  [PokemonVariety.Dragapult],
  "Dragapult",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ZacianSpecies extends Species {}(
  PokemonSpecies.Zacian,
  [PokemonVariety.Zacian, PokemonVariety.ZacianCrowned],
  "Zacian",
  10,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class ZamazentaSpecies extends Species {}(
  PokemonSpecies.Zamazenta,
  [PokemonVariety.Zamazenta, PokemonVariety.ZamazentaCrowned],
  "Zamazenta",
  10,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class EternatusSpecies extends Species {}(
  PokemonSpecies.Eternatus,
  [PokemonVariety.Eternatus, PokemonVariety.EternatusEternamax],
  "Eternatus",
  255,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class KubfuSpecies extends Species {}(
  PokemonSpecies.Kubfu,
  [PokemonVariety.Kubfu],
  "Kubfu",
  3,
  50,
  PokemonSpeciesFlags.Legendary,
);
new class UrshifuSpecies extends Species {}(
  PokemonSpecies.Urshifu,
  [PokemonVariety.UrshifuSingleStrike, PokemonVariety.UrshifuRapidStrike, PokemonVariety.UrshifuSingleStrikeGmax, PokemonVariety.UrshifuRapidStrikeGmax],
  "Urshifu",
  3,
  50,
  PokemonSpeciesFlags.Legendary,
);
new class ZarudeSpecies extends Species {}(
  PokemonSpecies.Zarude,
  [PokemonVariety.Zarude, PokemonVariety.ZarudeDada],
  "Zarude",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);
new class RegielekiSpecies extends Species {}(
  PokemonSpecies.Regieleki,
  [PokemonVariety.Regieleki],
  "Regieleki",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class RegidragoSpecies extends Species {}(
  PokemonSpecies.Regidrago,
  [PokemonVariety.Regidrago],
  "Regidrago",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class GlastrierSpecies extends Species {}(
  PokemonSpecies.Glastrier,
  [PokemonVariety.Glastrier],
  "Glastrier",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class SpectrierSpecies extends Species {}(
  PokemonSpecies.Spectrier,
  [PokemonVariety.Spectrier],
  "Spectrier",
  3,
  35,
  PokemonSpeciesFlags.Legendary,
);
new class CalyrexSpecies extends Species {}(
  PokemonSpecies.Calyrex,
  [PokemonVariety.Calyrex, PokemonVariety.CalyrexIce, PokemonVariety.CalyrexShadow],
  "Calyrex",
  3,
  100,
  PokemonSpeciesFlags.Legendary,
);
new class WyrdeerSpecies extends Species {}(
  PokemonSpecies.Wyrdeer,
  [PokemonVariety.Wyrdeer],
  "Wyrdeer",
  135,
  null,
  PokemonSpeciesFlags.None,
);
new class KleavorSpecies extends Species {}(
  PokemonSpecies.Kleavor,
  [PokemonVariety.Kleavor],
  "Kleavor",
  115,
  null,
  PokemonSpeciesFlags.None,
);
new class UrsalunaSpecies extends Species {}(
  PokemonSpecies.Ursaluna,
  [PokemonVariety.Ursaluna, PokemonVariety.UrsalunaBloodmoon],
  "Ursaluna",
  75,
  null,
  PokemonSpeciesFlags.None,
);
new class BasculegionSpecies extends Species {}(
  PokemonSpecies.Basculegion,
  [PokemonVariety.BasculegionMale, PokemonVariety.BasculegionFemale],
  "Basculegion",
  135,
  null,
  PokemonSpeciesFlags.None,
);
new class SneaslerSpecies extends Species {}(
  PokemonSpecies.Sneasler,
  [PokemonVariety.Sneasler],
  "Sneasler",
  135,
  null,
  PokemonSpeciesFlags.None,
);
new class OverqwilSpecies extends Species {}(
  PokemonSpecies.Overqwil,
  [PokemonVariety.Overqwil],
  "Overqwil",
  135,
  null,
  PokemonSpeciesFlags.None,
);
new class EnamorusSpecies extends Species {}(
  PokemonSpecies.Enamorus,
  [PokemonVariety.EnamorusIncarnate, PokemonVariety.EnamorusTherian],
  "Enamorus",
  3,
  null,
  PokemonSpeciesFlags.Legendary,
);
new class SprigatitoSpecies extends Species {}(
  PokemonSpecies.Sprigatito,
  [PokemonVariety.Sprigatito],
  "Sprigatito",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class FloragatoSpecies extends Species {}(
  PokemonSpecies.Floragato,
  [PokemonVariety.Floragato],
  "Floragato",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class MeowscaradaSpecies extends Species {}(
  PokemonSpecies.Meowscarada,
  [PokemonVariety.Meowscarada],
  "Meowscarada",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class FuecocoSpecies extends Species {}(
  PokemonSpecies.Fuecoco,
  [PokemonVariety.Fuecoco],
  "Fuecoco",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CrocalorSpecies extends Species {}(
  PokemonSpecies.Crocalor,
  [PokemonVariety.Crocalor],
  "Crocalor",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SkeledirgeSpecies extends Species {}(
  PokemonSpecies.Skeledirge,
  [PokemonVariety.Skeledirge],
  "Skeledirge",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class QuaxlySpecies extends Species {}(
  PokemonSpecies.Quaxly,
  [PokemonVariety.Quaxly],
  "Quaxly",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class QuaxwellSpecies extends Species {}(
  PokemonSpecies.Quaxwell,
  [PokemonVariety.Quaxwell],
  "Quaxwell",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class QuaquavalSpecies extends Species {}(
  PokemonSpecies.Quaquaval,
  [PokemonVariety.Quaquaval],
  "Quaquaval",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class LechonkSpecies extends Species {}(
  PokemonSpecies.Lechonk,
  [PokemonVariety.Lechonk],
  "Lechonk",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class OinkologneSpecies extends Species {}(
  PokemonSpecies.Oinkologne,
  [PokemonVariety.Oinkologne, PokemonVariety.OinkologneFemale],
  "Oinkologne",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class TarountulaSpecies extends Species {}(
  PokemonSpecies.Tarountula,
  [PokemonVariety.Tarountula],
  "Tarountula",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class SpidopsSpecies extends Species {}(
  PokemonSpecies.Spidops,
  [PokemonVariety.Spidops],
  "Spidops",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class NymbleSpecies extends Species {}(
  PokemonSpecies.Nymble,
  [PokemonVariety.Nymble],
  "Nymble",
  190,
  20,
  PokemonSpeciesFlags.None,
);
new class LokixSpecies extends Species {}(
  PokemonSpecies.Lokix,
  [PokemonVariety.Lokix],
  "Lokix",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class PawmiSpecies extends Species {}(
  PokemonSpecies.Pawmi,
  [PokemonVariety.Pawmi],
  "Pawmi",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class PawmoSpecies extends Species {}(
  PokemonSpecies.Pawmo,
  [PokemonVariety.Pawmo],
  "Pawmo",
  80,
  50,
  PokemonSpeciesFlags.None,
);
new class PawmotSpecies extends Species {}(
  PokemonSpecies.Pawmot,
  [PokemonVariety.Pawmot],
  "Pawmot",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class TandemausSpecies extends Species {}(
  PokemonSpecies.Tandemaus,
  [PokemonVariety.Tandemaus],
  "Tandemaus",
  150,
  50,
  PokemonSpeciesFlags.None,
);
new class MausholdSpecies extends Species {}(
  PokemonSpecies.Maushold,
  [PokemonVariety.Maushold, PokemonVariety.MausholdFamilyOfThree],
  "Maushold",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class FidoughSpecies extends Species {}(
  PokemonSpecies.Fidough,
  [PokemonVariety.Fidough],
  "Fidough",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class DachsbunSpecies extends Species {}(
  PokemonSpecies.Dachsbun,
  [PokemonVariety.Dachsbun],
  "Dachsbun",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class SmolivSpecies extends Species {}(
  PokemonSpecies.Smoliv,
  [PokemonVariety.Smoliv],
  "Smoliv",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class DollivSpecies extends Species {}(
  PokemonSpecies.Dolliv,
  [PokemonVariety.Dolliv],
  "Dolliv",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class ArbolivaSpecies extends Species {}(
  PokemonSpecies.Arboliva,
  [PokemonVariety.Arboliva],
  "Arboliva",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class SquawkabillySpecies extends Species {}(
  PokemonSpecies.Squawkabilly,
  [PokemonVariety.Squawkabilly, PokemonVariety.SquawkabillyBluePlumage, PokemonVariety.SquawkabillyYellowPlumage, PokemonVariety.SquawkabillyWhitePlumage],
  "Squawkabilly",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class NacliSpecies extends Species {}(
  PokemonSpecies.Nacli,
  [PokemonVariety.Nacli],
  "Nacli",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class NaclstackSpecies extends Species {}(
  PokemonSpecies.Naclstack,
  [PokemonVariety.Naclstack],
  "Naclstack",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class GarganaclSpecies extends Species {}(
  PokemonSpecies.Garganacl,
  [PokemonVariety.Garganacl],
  "Garganacl",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class CharcadetSpecies extends Species {}(
  PokemonSpecies.Charcadet,
  [PokemonVariety.Charcadet],
  "Charcadet",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class ArmarougeSpecies extends Species {}(
  PokemonSpecies.Armarouge,
  [PokemonVariety.Armarouge],
  "Armarouge",
  25,
  20,
  PokemonSpeciesFlags.None,
);
new class CeruledgeSpecies extends Species {}(
  PokemonSpecies.Ceruledge,
  [PokemonVariety.Ceruledge],
  "Ceruledge",
  25,
  20,
  PokemonSpeciesFlags.None,
);
new class TadbulbSpecies extends Species {}(
  PokemonSpecies.Tadbulb,
  [PokemonVariety.Tadbulb],
  "Tadbulb",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class BelliboltSpecies extends Species {}(
  PokemonSpecies.Bellibolt,
  [PokemonVariety.Bellibolt],
  "Bellibolt",
  50,
  50,
  PokemonSpeciesFlags.None,
);
new class WattrelSpecies extends Species {}(
  PokemonSpecies.Wattrel,
  [PokemonVariety.Wattrel],
  "Wattrel",
  180,
  50,
  PokemonSpeciesFlags.None,
);
new class KilowattrelSpecies extends Species {}(
  PokemonSpecies.Kilowattrel,
  [PokemonVariety.Kilowattrel],
  "Kilowattrel",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class MaschiffSpecies extends Species {}(
  PokemonSpecies.Maschiff,
  [PokemonVariety.Maschiff],
  "Maschiff",
  150,
  50,
  PokemonSpeciesFlags.None,
);
new class MabosstiffSpecies extends Species {}(
  PokemonSpecies.Mabosstiff,
  [PokemonVariety.Mabosstiff],
  "Mabosstiff",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class ShroodleSpecies extends Species {}(
  PokemonSpecies.Shroodle,
  [PokemonVariety.Shroodle],
  "Shroodle",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class GrafaiaiSpecies extends Species {}(
  PokemonSpecies.Grafaiai,
  [PokemonVariety.Grafaiai],
  "Grafaiai",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class BramblinSpecies extends Species {}(
  PokemonSpecies.Bramblin,
  [PokemonVariety.Bramblin],
  "Bramblin",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class BrambleghastSpecies extends Species {}(
  PokemonSpecies.Brambleghast,
  [PokemonVariety.Brambleghast],
  "Brambleghast",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ToedscoolSpecies extends Species {}(
  PokemonSpecies.Toedscool,
  [PokemonVariety.Toedscool],
  "Toedscool",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class ToedscruelSpecies extends Species {}(
  PokemonSpecies.Toedscruel,
  [PokemonVariety.Toedscruel],
  "Toedscruel",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class KlawfSpecies extends Species {}(
  PokemonSpecies.Klawf,
  [PokemonVariety.Klawf],
  "Klawf",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class CapsakidSpecies extends Species {}(
  PokemonSpecies.Capsakid,
  [PokemonVariety.Capsakid],
  "Capsakid",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class ScovillainSpecies extends Species {}(
  PokemonSpecies.Scovillain,
  [PokemonVariety.Scovillain],
  "Scovillain",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class RellorSpecies extends Species {}(
  PokemonSpecies.Rellor,
  [PokemonVariety.Rellor],
  "Rellor",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class RabscaSpecies extends Species {}(
  PokemonSpecies.Rabsca,
  [PokemonVariety.Rabsca],
  "Rabsca",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class FlittleSpecies extends Species {}(
  PokemonSpecies.Flittle,
  [PokemonVariety.Flittle],
  "Flittle",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class EspathraSpecies extends Species {}(
  PokemonSpecies.Espathra,
  [PokemonVariety.Espathra],
  "Espathra",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class TinkatinkSpecies extends Species {}(
  PokemonSpecies.Tinkatink,
  [PokemonVariety.Tinkatink],
  "Tinkatink",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class TinkatuffSpecies extends Species {}(
  PokemonSpecies.Tinkatuff,
  [PokemonVariety.Tinkatuff],
  "Tinkatuff",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class TinkatonSpecies extends Species {}(
  PokemonSpecies.Tinkaton,
  [PokemonVariety.Tinkaton],
  "Tinkaton",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class WiglettSpecies extends Species {}(
  PokemonSpecies.Wiglett,
  [PokemonVariety.Wiglett],
  "Wiglett",
  255,
  50,
  PokemonSpeciesFlags.None,
);
new class WugtrioSpecies extends Species {}(
  PokemonSpecies.Wugtrio,
  [PokemonVariety.Wugtrio],
  "Wugtrio",
  50,
  50,
  PokemonSpeciesFlags.None,
);
new class BombirdierSpecies extends Species {}(
  PokemonSpecies.Bombirdier,
  [PokemonVariety.Bombirdier],
  "Bombirdier",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class FinizenSpecies extends Species {}(
  PokemonSpecies.Finizen,
  [PokemonVariety.Finizen],
  "Finizen",
  200,
  50,
  PokemonSpeciesFlags.None,
);
new class PalafinSpecies extends Species {}(
  PokemonSpecies.Palafin,
  [PokemonVariety.Palafin, PokemonVariety.PalafinHero],
  "Palafin",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class VaroomSpecies extends Species {}(
  PokemonSpecies.Varoom,
  [PokemonVariety.Varoom],
  "Varoom",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class RevavroomSpecies extends Species {}(
  PokemonSpecies.Revavroom,
  [PokemonVariety.Revavroom],
  "Revavroom",
  75,
  50,
  PokemonSpeciesFlags.None,
);
new class CyclizarSpecies extends Species {}(
  PokemonSpecies.Cyclizar,
  [PokemonVariety.Cyclizar],
  "Cyclizar",
  190,
  50,
  PokemonSpeciesFlags.None,
);
new class OrthwormSpecies extends Species {}(
  PokemonSpecies.Orthworm,
  [PokemonVariety.Orthworm],
  "Orthworm",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class GlimmetSpecies extends Species {}(
  PokemonSpecies.Glimmet,
  [PokemonVariety.Glimmet],
  "Glimmet",
  70,
  50,
  PokemonSpeciesFlags.None,
);
new class GlimmoraSpecies extends Species {}(
  PokemonSpecies.Glimmora,
  [PokemonVariety.Glimmora],
  "Glimmora",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class GreavardSpecies extends Species {}(
  PokemonSpecies.Greavard,
  [PokemonVariety.Greavard],
  "Greavard",
  120,
  50,
  PokemonSpeciesFlags.None,
);
new class HoundstoneSpecies extends Species {}(
  PokemonSpecies.Houndstone,
  [PokemonVariety.Houndstone],
  "Houndstone",
  60,
  50,
  PokemonSpeciesFlags.None,
);
new class FlamigoSpecies extends Species {}(
  PokemonSpecies.Flamigo,
  [PokemonVariety.Flamigo],
  "Flamigo",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class CetoddleSpecies extends Species {}(
  PokemonSpecies.Cetoddle,
  [PokemonVariety.Cetoddle],
  "Cetoddle",
  150,
  50,
  PokemonSpeciesFlags.None,
);
new class CetitanSpecies extends Species {}(
  PokemonSpecies.Cetitan,
  [PokemonVariety.Cetitan],
  "Cetitan",
  50,
  50,
  PokemonSpeciesFlags.None,
);
new class VeluzaSpecies extends Species {}(
  PokemonSpecies.Veluza,
  [PokemonVariety.Veluza],
  "Veluza",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class DondozoSpecies extends Species {}(
  PokemonSpecies.Dondozo,
  [PokemonVariety.Dondozo],
  "Dondozo",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class TatsugiriSpecies extends Species {}(
  PokemonSpecies.Tatsugiri,
  [PokemonVariety.Tatsugiri, PokemonVariety.TatsugiriDroopy, PokemonVariety.TatsugiriStretchy],
  "Tatsugiri",
  100,
  50,
  PokemonSpeciesFlags.None,
);
new class AnnihilapeSpecies extends Species {}(
  PokemonSpecies.Annihilape,
  [PokemonVariety.Annihilape],
  "Annihilape",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ClodsireSpecies extends Species {}(
  PokemonSpecies.Clodsire,
  [PokemonVariety.Clodsire],
  "Clodsire",
  90,
  50,
  PokemonSpeciesFlags.None,
);
new class FarigirafSpecies extends Species {}(
  PokemonSpecies.Farigiraf,
  [PokemonVariety.Farigiraf],
  "Farigiraf",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class DudunsparceSpecies extends Species {}(
  PokemonSpecies.Dudunsparce,
  [PokemonVariety.Dudunsparce, PokemonVariety.DudunsparceThreeSegment],
  "Dudunsparce",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class KingambitSpecies extends Species {}(
  PokemonSpecies.Kingambit,
  [PokemonVariety.Kingambit],
  "Kingambit",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class GreatTuskSpecies extends Species {}(
  PokemonSpecies.GreatTusk,
  [PokemonVariety.GreatTusk],
  "Great Tusk",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class ScreamTailSpecies extends Species {}(
  PokemonSpecies.ScreamTail,
  [PokemonVariety.ScreamTail],
  "Scream Tail",
  50,
  0,
  PokemonSpeciesFlags.None,
);
new class BruteBonnetSpecies extends Species {}(
  PokemonSpecies.BruteBonnet,
  [PokemonVariety.BruteBonnet],
  "Brute Bonnet",
  50,
  0,
  PokemonSpeciesFlags.None,
);
new class FlutterManeSpecies extends Species {}(
  PokemonSpecies.FlutterMane,
  [PokemonVariety.FlutterMane],
  "Flutter Mane",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class SlitherWingSpecies extends Species {}(
  PokemonSpecies.SlitherWing,
  [PokemonVariety.SlitherWing],
  "Slither Wing",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class SandyShocksSpecies extends Species {}(
  PokemonSpecies.SandyShocks,
  [PokemonVariety.SandyShocks],
  "Sandy Shocks",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class IronTreadsSpecies extends Species {}(
  PokemonSpecies.IronTreads,
  [PokemonVariety.IronTreads],
  "Iron Treads",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class IronBundleSpecies extends Species {}(
  PokemonSpecies.IronBundle,
  [PokemonVariety.IronBundle],
  "Iron Bundle",
  50,
  0,
  PokemonSpeciesFlags.None,
);
new class IronHandsSpecies extends Species {}(
  PokemonSpecies.IronHands,
  [PokemonVariety.IronHands],
  "Iron Hands",
  50,
  0,
  PokemonSpeciesFlags.None,
);
new class IronJugulisSpecies extends Species {}(
  PokemonSpecies.IronJugulis,
  [PokemonVariety.IronJugulis],
  "Iron Jugulis",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class IronMothSpecies extends Species {}(
  PokemonSpecies.IronMoth,
  [PokemonVariety.IronMoth],
  "Iron Moth",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class IronThornsSpecies extends Species {}(
  PokemonSpecies.IronThorns,
  [PokemonVariety.IronThorns],
  "Iron Thorns",
  30,
  0,
  PokemonSpeciesFlags.None,
);
new class FrigibaxSpecies extends Species {}(
  PokemonSpecies.Frigibax,
  [PokemonVariety.Frigibax],
  "Frigibax",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class ArctibaxSpecies extends Species {}(
  PokemonSpecies.Arctibax,
  [PokemonVariety.Arctibax],
  "Arctibax",
  25,
  50,
  PokemonSpeciesFlags.None,
);
new class BaxcaliburSpecies extends Species {}(
  PokemonSpecies.Baxcalibur,
  [PokemonVariety.Baxcalibur],
  "Baxcalibur",
  10,
  50,
  PokemonSpeciesFlags.None,
);
new class GimmighoulSpecies extends Species {}(
  PokemonSpecies.Gimmighoul,
  [PokemonVariety.Gimmighoul, PokemonVariety.GimmighoulRoaming],
  "Gimmighoul",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class GholdengoSpecies extends Species {}(
  PokemonSpecies.Gholdengo,
  [PokemonVariety.Gholdengo],
  "Gholdengo",
  45,
  50,
  PokemonSpeciesFlags.None,
);
new class WoChienSpecies extends Species {}(
  PokemonSpecies.WoChien,
  [PokemonVariety.WoChien],
  "Wo-Chien",
  6,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class ChienPaoSpecies extends Species {}(
  PokemonSpecies.ChienPao,
  [PokemonVariety.ChienPao],
  "Chien-Pao",
  6,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class TingLuSpecies extends Species {}(
  PokemonSpecies.TingLu,
  [PokemonVariety.TingLu],
  "Ting-Lu",
  6,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class ChiYuSpecies extends Species {}(
  PokemonSpecies.ChiYu,
  [PokemonVariety.ChiYu],
  "Chi-Yu",
  6,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class RoaringMoonSpecies extends Species {}(
  PokemonSpecies.RoaringMoon,
  [PokemonVariety.RoaringMoon],
  "Roaring Moon",
  10,
  0,
  PokemonSpeciesFlags.None,
);
new class IronValiantSpecies extends Species {}(
  PokemonSpecies.IronValiant,
  [PokemonVariety.IronValiant],
  "Iron Valiant",
  10,
  0,
  PokemonSpeciesFlags.None,
);
new class KoraidonSpecies extends Species {}(
  PokemonSpecies.Koraidon,
  [PokemonVariety.Koraidon, PokemonVariety.KoraidonLimitedBuild, PokemonVariety.KoraidonSprintingBuild, PokemonVariety.KoraidonSwimmingBuild, PokemonVariety.KoraidonGlidingBuild],
  "Koraidon",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class MiraidonSpecies extends Species {}(
  PokemonSpecies.Miraidon,
  [PokemonVariety.Miraidon, PokemonVariety.MiraidonLowPowerMode, PokemonVariety.MiraidonDriveMode, PokemonVariety.MiraidonAquaticMode, PokemonVariety.MiraidonGlideMode],
  "Miraidon",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class WalkingWakeSpecies extends Species {}(
  PokemonSpecies.WalkingWake,
  [PokemonVariety.WalkingWake],
  "Walking Wake",
  5,
  0,
  PokemonSpeciesFlags.None,
);
new class IronLeavesSpecies extends Species {}(
  PokemonSpecies.IronLeaves,
  [PokemonVariety.IronLeaves],
  "Iron Leaves",
  5,
  0,
  PokemonSpeciesFlags.None,
);
new class DipplinSpecies extends Species {}(
  PokemonSpecies.Dipplin,
  [PokemonVariety.Dipplin],
  "Dipplin",
  45,
  0,
  PokemonSpeciesFlags.None,
);
new class PoltchageistSpecies extends Species {}(
  PokemonSpecies.Poltchageist,
  [PokemonVariety.Poltchageist],
  "Poltchageist",
  120,
  0,
  PokemonSpeciesFlags.None,
);
new class SinistchaSpecies extends Species {}(
  PokemonSpecies.Sinistcha,
  [PokemonVariety.Sinistcha],
  "Sinistcha",
  60,
  0,
  PokemonSpeciesFlags.None,
);
new class OkidogiSpecies extends Species {}(
  PokemonSpecies.Okidogi,
  [PokemonVariety.Okidogi],
  "Okidogi",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class MunkidoriSpecies extends Species {}(
  PokemonSpecies.Munkidori,
  [PokemonVariety.Munkidori],
  "Munkidori",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class FezandipitiSpecies extends Species {}(
  PokemonSpecies.Fezandipiti,
  [PokemonVariety.Fezandipiti],
  "Fezandipiti",
  3,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class OgerponSpecies extends Species {}(
  PokemonSpecies.Ogerpon,
  [PokemonVariety.Ogerpon, PokemonVariety.OgerponWellspringMask, PokemonVariety.OgerponHearthflameMask, PokemonVariety.OgerponCornerstoneMask],
  "Ogerpon",
  5,
  0,
  PokemonSpeciesFlags.Legendary,
);
new class ArchaludonSpecies extends Species {}(
  PokemonSpecies.Archaludon,
  [PokemonVariety.Archaludon],
  "Archaludon",
  10,
  50,
  PokemonSpeciesFlags.None,
);
new class HydrappleSpecies extends Species {}(
  PokemonSpecies.Hydrapple,
  [PokemonVariety.Hydrapple],
  "Hydrapple",
  10,
  50,
  PokemonSpeciesFlags.None,
);
new class GougingFireSpecies extends Species {}(
  PokemonSpecies.GougingFire,
  [PokemonVariety.GougingFire],
  "Gouging Fire",
  10,
  0,
  PokemonSpeciesFlags.None,
);
new class RagingBoltSpecies extends Species {}(
  PokemonSpecies.RagingBolt,
  [PokemonVariety.RagingBolt],
  "Raging Bolt",
  10,
  0,
  PokemonSpeciesFlags.None,
);
new class IronBoulderSpecies extends Species {}(
  PokemonSpecies.IronBoulder,
  [PokemonVariety.IronBoulder],
  "Iron Boulder",
  10,
  0,
  PokemonSpeciesFlags.None,
);
new class IronCrownSpecies extends Species {}(
  PokemonSpecies.IronCrown,
  [PokemonVariety.IronCrown],
  "Iron Crown",
  10,
  0,
  PokemonSpeciesFlags.None,
);
new class TerapagosSpecies extends Species {}(
  PokemonSpecies.Terapagos,
  [PokemonVariety.Terapagos, PokemonVariety.TerapagosTerastal, PokemonVariety.TerapagosStellar],
  "Terapagos",
  255,
  50,
  PokemonSpeciesFlags.Legendary,
);
new class PecharuntSpecies extends Species {}(
  PokemonSpecies.Pecharunt,
  [PokemonVariety.Pecharunt],
  "Pecharunt",
  3,
  0,
  PokemonSpeciesFlags.Mythical,
);