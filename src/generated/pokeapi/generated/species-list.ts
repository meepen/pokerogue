// AUTO GENERATED FILE
import { IPokemonSpecies } from "#pokeapi/pokemon-species.interface";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonVariety } from "#pokeapi/generated/variety.enum";

export const speciesList = new Map<PokemonSpecies, IPokemonSpecies>();
class Species extends IPokemonSpecies {
  constructor(
    species: PokemonSpecies,
    varieties: PokemonVariety[],
    name: string,
  ) {
    super(species, varieties, name);
    speciesList.set(species, this);
  }
}

new class BulbasaurSpecies extends Species {}(
  PokemonSpecies.Bulbasaur,
  [PokemonVariety.Bulbasaur],
  "Bulbasaur",
);
new class IvysaurSpecies extends Species {}(
  PokemonSpecies.Ivysaur,
  [PokemonVariety.Ivysaur],
  "Ivysaur",
);
new class VenusaurSpecies extends Species {}(
  PokemonSpecies.Venusaur,
  [PokemonVariety.Venusaur, PokemonVariety.VenusaurMega, PokemonVariety.VenusaurGmax],
  "Venusaur",
);
new class CharmanderSpecies extends Species {}(
  PokemonSpecies.Charmander,
  [PokemonVariety.Charmander],
  "Charmander",
);
new class CharmeleonSpecies extends Species {}(
  PokemonSpecies.Charmeleon,
  [PokemonVariety.Charmeleon],
  "Charmeleon",
);
new class CharizardSpecies extends Species {}(
  PokemonSpecies.Charizard,
  [PokemonVariety.Charizard, PokemonVariety.CharizardMegaX, PokemonVariety.CharizardMegaY, PokemonVariety.CharizardGmax],
  "Charizard",
);
new class SquirtleSpecies extends Species {}(
  PokemonSpecies.Squirtle,
  [PokemonVariety.Squirtle],
  "Squirtle",
);
new class WartortleSpecies extends Species {}(
  PokemonSpecies.Wartortle,
  [PokemonVariety.Wartortle],
  "Wartortle",
);
new class BlastoiseSpecies extends Species {}(
  PokemonSpecies.Blastoise,
  [PokemonVariety.Blastoise, PokemonVariety.BlastoiseMega, PokemonVariety.BlastoiseGmax],
  "Blastoise",
);
new class CaterpieSpecies extends Species {}(
  PokemonSpecies.Caterpie,
  [PokemonVariety.Caterpie],
  "Caterpie",
);
new class MetapodSpecies extends Species {}(
  PokemonSpecies.Metapod,
  [PokemonVariety.Metapod],
  "Metapod",
);
new class ButterfreeSpecies extends Species {}(
  PokemonSpecies.Butterfree,
  [PokemonVariety.Butterfree, PokemonVariety.ButterfreeGmax],
  "Butterfree",
);
new class WeedleSpecies extends Species {}(
  PokemonSpecies.Weedle,
  [PokemonVariety.Weedle],
  "Weedle",
);
new class KakunaSpecies extends Species {}(
  PokemonSpecies.Kakuna,
  [PokemonVariety.Kakuna],
  "Kakuna",
);
new class BeedrillSpecies extends Species {}(
  PokemonSpecies.Beedrill,
  [PokemonVariety.Beedrill, PokemonVariety.BeedrillMega],
  "Beedrill",
);
new class PidgeySpecies extends Species {}(
  PokemonSpecies.Pidgey,
  [PokemonVariety.Pidgey],
  "Pidgey",
);
new class PidgeottoSpecies extends Species {}(
  PokemonSpecies.Pidgeotto,
  [PokemonVariety.Pidgeotto],
  "Pidgeotto",
);
new class PidgeotSpecies extends Species {}(
  PokemonSpecies.Pidgeot,
  [PokemonVariety.Pidgeot, PokemonVariety.PidgeotMega],
  "Pidgeot",
);
new class RattataSpecies extends Species {}(
  PokemonSpecies.Rattata,
  [PokemonVariety.Rattata, PokemonVariety.RattataAlola],
  "Rattata",
);
new class RaticateSpecies extends Species {}(
  PokemonSpecies.Raticate,
  [PokemonVariety.Raticate, PokemonVariety.RaticateAlola, PokemonVariety.RaticateTotemAlola],
  "Raticate",
);
new class SpearowSpecies extends Species {}(
  PokemonSpecies.Spearow,
  [PokemonVariety.Spearow],
  "Spearow",
);
new class FearowSpecies extends Species {}(
  PokemonSpecies.Fearow,
  [PokemonVariety.Fearow],
  "Fearow",
);
new class EkansSpecies extends Species {}(
  PokemonSpecies.Ekans,
  [PokemonVariety.Ekans],
  "Ekans",
);
new class ArbokSpecies extends Species {}(
  PokemonSpecies.Arbok,
  [PokemonVariety.Arbok],
  "Arbok",
);
new class PikachuSpecies extends Species {}(
  PokemonSpecies.Pikachu,
  [PokemonVariety.Pikachu, PokemonVariety.PikachuRockStar, PokemonVariety.PikachuBelle, PokemonVariety.PikachuPopStar, PokemonVariety.PikachuPhd, PokemonVariety.PikachuLibre, PokemonVariety.PikachuCosplay, PokemonVariety.PikachuOriginalCap, PokemonVariety.PikachuHoennCap, PokemonVariety.PikachuSinnohCap, PokemonVariety.PikachuUnovaCap, PokemonVariety.PikachuKalosCap, PokemonVariety.PikachuAlolaCap, PokemonVariety.PikachuPartnerCap, PokemonVariety.PikachuStarter, PokemonVariety.PikachuWorldCap, PokemonVariety.PikachuGmax],
  "Pikachu",
);
new class RaichuSpecies extends Species {}(
  PokemonSpecies.Raichu,
  [PokemonVariety.Raichu, PokemonVariety.RaichuAlola],
  "Raichu",
);
new class SandshrewSpecies extends Species {}(
  PokemonSpecies.Sandshrew,
  [PokemonVariety.Sandshrew, PokemonVariety.SandshrewAlola],
  "Sandshrew",
);
new class SandslashSpecies extends Species {}(
  PokemonSpecies.Sandslash,
  [PokemonVariety.Sandslash, PokemonVariety.SandslashAlola],
  "Sandslash",
);
new class NidoranFSpecies extends Species {}(
  PokemonSpecies.NidoranF,
  [PokemonVariety.NidoranF],
  "Nidoran♀",
);
new class NidorinaSpecies extends Species {}(
  PokemonSpecies.Nidorina,
  [PokemonVariety.Nidorina],
  "Nidorina",
);
new class NidoqueenSpecies extends Species {}(
  PokemonSpecies.Nidoqueen,
  [PokemonVariety.Nidoqueen],
  "Nidoqueen",
);
new class NidoranMSpecies extends Species {}(
  PokemonSpecies.NidoranM,
  [PokemonVariety.NidoranM],
  "Nidoran♂",
);
new class NidorinoSpecies extends Species {}(
  PokemonSpecies.Nidorino,
  [PokemonVariety.Nidorino],
  "Nidorino",
);
new class NidokingSpecies extends Species {}(
  PokemonSpecies.Nidoking,
  [PokemonVariety.Nidoking],
  "Nidoking",
);
new class ClefairySpecies extends Species {}(
  PokemonSpecies.Clefairy,
  [PokemonVariety.Clefairy],
  "Clefairy",
);
new class ClefableSpecies extends Species {}(
  PokemonSpecies.Clefable,
  [PokemonVariety.Clefable],
  "Clefable",
);
new class VulpixSpecies extends Species {}(
  PokemonSpecies.Vulpix,
  [PokemonVariety.Vulpix, PokemonVariety.VulpixAlola],
  "Vulpix",
);
new class NinetalesSpecies extends Species {}(
  PokemonSpecies.Ninetales,
  [PokemonVariety.Ninetales, PokemonVariety.NinetalesAlola],
  "Ninetales",
);
new class JigglypuffSpecies extends Species {}(
  PokemonSpecies.Jigglypuff,
  [PokemonVariety.Jigglypuff],
  "Jigglypuff",
);
new class WigglytuffSpecies extends Species {}(
  PokemonSpecies.Wigglytuff,
  [PokemonVariety.Wigglytuff],
  "Wigglytuff",
);
new class ZubatSpecies extends Species {}(
  PokemonSpecies.Zubat,
  [PokemonVariety.Zubat],
  "Zubat",
);
new class GolbatSpecies extends Species {}(
  PokemonSpecies.Golbat,
  [PokemonVariety.Golbat],
  "Golbat",
);
new class OddishSpecies extends Species {}(
  PokemonSpecies.Oddish,
  [PokemonVariety.Oddish],
  "Oddish",
);
new class GloomSpecies extends Species {}(
  PokemonSpecies.Gloom,
  [PokemonVariety.Gloom],
  "Gloom",
);
new class VileplumeSpecies extends Species {}(
  PokemonSpecies.Vileplume,
  [PokemonVariety.Vileplume],
  "Vileplume",
);
new class ParasSpecies extends Species {}(
  PokemonSpecies.Paras,
  [PokemonVariety.Paras],
  "Paras",
);
new class ParasectSpecies extends Species {}(
  PokemonSpecies.Parasect,
  [PokemonVariety.Parasect],
  "Parasect",
);
new class VenonatSpecies extends Species {}(
  PokemonSpecies.Venonat,
  [PokemonVariety.Venonat],
  "Venonat",
);
new class VenomothSpecies extends Species {}(
  PokemonSpecies.Venomoth,
  [PokemonVariety.Venomoth],
  "Venomoth",
);
new class DiglettSpecies extends Species {}(
  PokemonSpecies.Diglett,
  [PokemonVariety.Diglett, PokemonVariety.DiglettAlola],
  "Diglett",
);
new class DugtrioSpecies extends Species {}(
  PokemonSpecies.Dugtrio,
  [PokemonVariety.Dugtrio, PokemonVariety.DugtrioAlola],
  "Dugtrio",
);
new class MeowthSpecies extends Species {}(
  PokemonSpecies.Meowth,
  [PokemonVariety.Meowth, PokemonVariety.MeowthAlola, PokemonVariety.MeowthGalar, PokemonVariety.MeowthGmax],
  "Meowth",
);
new class PersianSpecies extends Species {}(
  PokemonSpecies.Persian,
  [PokemonVariety.Persian, PokemonVariety.PersianAlola],
  "Persian",
);
new class PsyduckSpecies extends Species {}(
  PokemonSpecies.Psyduck,
  [PokemonVariety.Psyduck],
  "Psyduck",
);
new class GolduckSpecies extends Species {}(
  PokemonSpecies.Golduck,
  [PokemonVariety.Golduck],
  "Golduck",
);
new class MankeySpecies extends Species {}(
  PokemonSpecies.Mankey,
  [PokemonVariety.Mankey],
  "Mankey",
);
new class PrimeapeSpecies extends Species {}(
  PokemonSpecies.Primeape,
  [PokemonVariety.Primeape],
  "Primeape",
);
new class GrowlitheSpecies extends Species {}(
  PokemonSpecies.Growlithe,
  [PokemonVariety.Growlithe, PokemonVariety.GrowlitheHisui],
  "Growlithe",
);
new class ArcanineSpecies extends Species {}(
  PokemonSpecies.Arcanine,
  [PokemonVariety.Arcanine, PokemonVariety.ArcanineHisui],
  "Arcanine",
);
new class PoliwagSpecies extends Species {}(
  PokemonSpecies.Poliwag,
  [PokemonVariety.Poliwag],
  "Poliwag",
);
new class PoliwhirlSpecies extends Species {}(
  PokemonSpecies.Poliwhirl,
  [PokemonVariety.Poliwhirl],
  "Poliwhirl",
);
new class PoliwrathSpecies extends Species {}(
  PokemonSpecies.Poliwrath,
  [PokemonVariety.Poliwrath],
  "Poliwrath",
);
new class AbraSpecies extends Species {}(
  PokemonSpecies.Abra,
  [PokemonVariety.Abra],
  "Abra",
);
new class KadabraSpecies extends Species {}(
  PokemonSpecies.Kadabra,
  [PokemonVariety.Kadabra],
  "Kadabra",
);
new class AlakazamSpecies extends Species {}(
  PokemonSpecies.Alakazam,
  [PokemonVariety.Alakazam, PokemonVariety.AlakazamMega],
  "Alakazam",
);
new class MachopSpecies extends Species {}(
  PokemonSpecies.Machop,
  [PokemonVariety.Machop],
  "Machop",
);
new class MachokeSpecies extends Species {}(
  PokemonSpecies.Machoke,
  [PokemonVariety.Machoke],
  "Machoke",
);
new class MachampSpecies extends Species {}(
  PokemonSpecies.Machamp,
  [PokemonVariety.Machamp, PokemonVariety.MachampGmax],
  "Machamp",
);
new class BellsproutSpecies extends Species {}(
  PokemonSpecies.Bellsprout,
  [PokemonVariety.Bellsprout],
  "Bellsprout",
);
new class WeepinbellSpecies extends Species {}(
  PokemonSpecies.Weepinbell,
  [PokemonVariety.Weepinbell],
  "Weepinbell",
);
new class VictreebelSpecies extends Species {}(
  PokemonSpecies.Victreebel,
  [PokemonVariety.Victreebel],
  "Victreebel",
);
new class TentacoolSpecies extends Species {}(
  PokemonSpecies.Tentacool,
  [PokemonVariety.Tentacool],
  "Tentacool",
);
new class TentacruelSpecies extends Species {}(
  PokemonSpecies.Tentacruel,
  [PokemonVariety.Tentacruel],
  "Tentacruel",
);
new class GeodudeSpecies extends Species {}(
  PokemonSpecies.Geodude,
  [PokemonVariety.Geodude, PokemonVariety.GeodudeAlola],
  "Geodude",
);
new class GravelerSpecies extends Species {}(
  PokemonSpecies.Graveler,
  [PokemonVariety.Graveler, PokemonVariety.GravelerAlola],
  "Graveler",
);
new class GolemSpecies extends Species {}(
  PokemonSpecies.Golem,
  [PokemonVariety.Golem, PokemonVariety.GolemAlola],
  "Golem",
);
new class PonytaSpecies extends Species {}(
  PokemonSpecies.Ponyta,
  [PokemonVariety.Ponyta, PokemonVariety.PonytaGalar],
  "Ponyta",
);
new class RapidashSpecies extends Species {}(
  PokemonSpecies.Rapidash,
  [PokemonVariety.Rapidash, PokemonVariety.RapidashGalar],
  "Rapidash",
);
new class SlowpokeSpecies extends Species {}(
  PokemonSpecies.Slowpoke,
  [PokemonVariety.Slowpoke, PokemonVariety.SlowpokeGalar],
  "Slowpoke",
);
new class SlowbroSpecies extends Species {}(
  PokemonSpecies.Slowbro,
  [PokemonVariety.Slowbro, PokemonVariety.SlowbroMega, PokemonVariety.SlowbroGalar],
  "Slowbro",
);
new class MagnemiteSpecies extends Species {}(
  PokemonSpecies.Magnemite,
  [PokemonVariety.Magnemite],
  "Magnemite",
);
new class MagnetonSpecies extends Species {}(
  PokemonSpecies.Magneton,
  [PokemonVariety.Magneton],
  "Magneton",
);
new class FarfetchdSpecies extends Species {}(
  PokemonSpecies.Farfetchd,
  [PokemonVariety.Farfetchd, PokemonVariety.FarfetchdGalar],
  "Farfetch’d",
);
new class DoduoSpecies extends Species {}(
  PokemonSpecies.Doduo,
  [PokemonVariety.Doduo],
  "Doduo",
);
new class DodrioSpecies extends Species {}(
  PokemonSpecies.Dodrio,
  [PokemonVariety.Dodrio],
  "Dodrio",
);
new class SeelSpecies extends Species {}(
  PokemonSpecies.Seel,
  [PokemonVariety.Seel],
  "Seel",
);
new class DewgongSpecies extends Species {}(
  PokemonSpecies.Dewgong,
  [PokemonVariety.Dewgong],
  "Dewgong",
);
new class GrimerSpecies extends Species {}(
  PokemonSpecies.Grimer,
  [PokemonVariety.Grimer, PokemonVariety.GrimerAlola],
  "Grimer",
);
new class MukSpecies extends Species {}(
  PokemonSpecies.Muk,
  [PokemonVariety.Muk, PokemonVariety.MukAlola],
  "Muk",
);
new class ShellderSpecies extends Species {}(
  PokemonSpecies.Shellder,
  [PokemonVariety.Shellder],
  "Shellder",
);
new class CloysterSpecies extends Species {}(
  PokemonSpecies.Cloyster,
  [PokemonVariety.Cloyster],
  "Cloyster",
);
new class GastlySpecies extends Species {}(
  PokemonSpecies.Gastly,
  [PokemonVariety.Gastly],
  "Gastly",
);
new class HaunterSpecies extends Species {}(
  PokemonSpecies.Haunter,
  [PokemonVariety.Haunter],
  "Haunter",
);
new class GengarSpecies extends Species {}(
  PokemonSpecies.Gengar,
  [PokemonVariety.Gengar, PokemonVariety.GengarMega, PokemonVariety.GengarGmax],
  "Gengar",
);
new class OnixSpecies extends Species {}(
  PokemonSpecies.Onix,
  [PokemonVariety.Onix],
  "Onix",
);
new class DrowzeeSpecies extends Species {}(
  PokemonSpecies.Drowzee,
  [PokemonVariety.Drowzee],
  "Drowzee",
);
new class HypnoSpecies extends Species {}(
  PokemonSpecies.Hypno,
  [PokemonVariety.Hypno],
  "Hypno",
);
new class KrabbySpecies extends Species {}(
  PokemonSpecies.Krabby,
  [PokemonVariety.Krabby],
  "Krabby",
);
new class KinglerSpecies extends Species {}(
  PokemonSpecies.Kingler,
  [PokemonVariety.Kingler, PokemonVariety.KinglerGmax],
  "Kingler",
);
new class VoltorbSpecies extends Species {}(
  PokemonSpecies.Voltorb,
  [PokemonVariety.Voltorb, PokemonVariety.VoltorbHisui],
  "Voltorb",
);
new class ElectrodeSpecies extends Species {}(
  PokemonSpecies.Electrode,
  [PokemonVariety.Electrode, PokemonVariety.ElectrodeHisui],
  "Electrode",
);
new class ExeggcuteSpecies extends Species {}(
  PokemonSpecies.Exeggcute,
  [PokemonVariety.Exeggcute],
  "Exeggcute",
);
new class ExeggutorSpecies extends Species {}(
  PokemonSpecies.Exeggutor,
  [PokemonVariety.Exeggutor, PokemonVariety.ExeggutorAlola],
  "Exeggutor",
);
new class CuboneSpecies extends Species {}(
  PokemonSpecies.Cubone,
  [PokemonVariety.Cubone],
  "Cubone",
);
new class MarowakSpecies extends Species {}(
  PokemonSpecies.Marowak,
  [PokemonVariety.Marowak, PokemonVariety.MarowakAlola, PokemonVariety.MarowakTotem],
  "Marowak",
);
new class HitmonleeSpecies extends Species {}(
  PokemonSpecies.Hitmonlee,
  [PokemonVariety.Hitmonlee],
  "Hitmonlee",
);
new class HitmonchanSpecies extends Species {}(
  PokemonSpecies.Hitmonchan,
  [PokemonVariety.Hitmonchan],
  "Hitmonchan",
);
new class LickitungSpecies extends Species {}(
  PokemonSpecies.Lickitung,
  [PokemonVariety.Lickitung],
  "Lickitung",
);
new class KoffingSpecies extends Species {}(
  PokemonSpecies.Koffing,
  [PokemonVariety.Koffing],
  "Koffing",
);
new class WeezingSpecies extends Species {}(
  PokemonSpecies.Weezing,
  [PokemonVariety.Weezing, PokemonVariety.WeezingGalar],
  "Weezing",
);
new class RhyhornSpecies extends Species {}(
  PokemonSpecies.Rhyhorn,
  [PokemonVariety.Rhyhorn],
  "Rhyhorn",
);
new class RhydonSpecies extends Species {}(
  PokemonSpecies.Rhydon,
  [PokemonVariety.Rhydon],
  "Rhydon",
);
new class ChanseySpecies extends Species {}(
  PokemonSpecies.Chansey,
  [PokemonVariety.Chansey],
  "Chansey",
);
new class TangelaSpecies extends Species {}(
  PokemonSpecies.Tangela,
  [PokemonVariety.Tangela],
  "Tangela",
);
new class KangaskhanSpecies extends Species {}(
  PokemonSpecies.Kangaskhan,
  [PokemonVariety.Kangaskhan, PokemonVariety.KangaskhanMega],
  "Kangaskhan",
);
new class HorseaSpecies extends Species {}(
  PokemonSpecies.Horsea,
  [PokemonVariety.Horsea],
  "Horsea",
);
new class SeadraSpecies extends Species {}(
  PokemonSpecies.Seadra,
  [PokemonVariety.Seadra],
  "Seadra",
);
new class GoldeenSpecies extends Species {}(
  PokemonSpecies.Goldeen,
  [PokemonVariety.Goldeen],
  "Goldeen",
);
new class SeakingSpecies extends Species {}(
  PokemonSpecies.Seaking,
  [PokemonVariety.Seaking],
  "Seaking",
);
new class StaryuSpecies extends Species {}(
  PokemonSpecies.Staryu,
  [PokemonVariety.Staryu],
  "Staryu",
);
new class StarmieSpecies extends Species {}(
  PokemonSpecies.Starmie,
  [PokemonVariety.Starmie],
  "Starmie",
);
new class MrMimeSpecies extends Species {}(
  PokemonSpecies.MrMime,
  [PokemonVariety.MrMime, PokemonVariety.MrMimeGalar],
  "Mr. Mime",
);
new class ScytherSpecies extends Species {}(
  PokemonSpecies.Scyther,
  [PokemonVariety.Scyther],
  "Scyther",
);
new class JynxSpecies extends Species {}(
  PokemonSpecies.Jynx,
  [PokemonVariety.Jynx],
  "Jynx",
);
new class ElectabuzzSpecies extends Species {}(
  PokemonSpecies.Electabuzz,
  [PokemonVariety.Electabuzz],
  "Electabuzz",
);
new class MagmarSpecies extends Species {}(
  PokemonSpecies.Magmar,
  [PokemonVariety.Magmar],
  "Magmar",
);
new class PinsirSpecies extends Species {}(
  PokemonSpecies.Pinsir,
  [PokemonVariety.Pinsir, PokemonVariety.PinsirMega],
  "Pinsir",
);
new class TaurosSpecies extends Species {}(
  PokemonSpecies.Tauros,
  [PokemonVariety.Tauros, PokemonVariety.TaurosPaldeaCombatBreed, PokemonVariety.TaurosPaldeaBlazeBreed, PokemonVariety.TaurosPaldeaAquaBreed],
  "Tauros",
);
new class MagikarpSpecies extends Species {}(
  PokemonSpecies.Magikarp,
  [PokemonVariety.Magikarp],
  "Magikarp",
);
new class GyaradosSpecies extends Species {}(
  PokemonSpecies.Gyarados,
  [PokemonVariety.Gyarados, PokemonVariety.GyaradosMega],
  "Gyarados",
);
new class LaprasSpecies extends Species {}(
  PokemonSpecies.Lapras,
  [PokemonVariety.Lapras, PokemonVariety.LaprasGmax],
  "Lapras",
);
new class DittoSpecies extends Species {}(
  PokemonSpecies.Ditto,
  [PokemonVariety.Ditto],
  "Ditto",
);
new class EeveeSpecies extends Species {}(
  PokemonSpecies.Eevee,
  [PokemonVariety.Eevee, PokemonVariety.EeveeStarter, PokemonVariety.EeveeGmax],
  "Eevee",
);
new class VaporeonSpecies extends Species {}(
  PokemonSpecies.Vaporeon,
  [PokemonVariety.Vaporeon],
  "Vaporeon",
);
new class JolteonSpecies extends Species {}(
  PokemonSpecies.Jolteon,
  [PokemonVariety.Jolteon],
  "Jolteon",
);
new class FlareonSpecies extends Species {}(
  PokemonSpecies.Flareon,
  [PokemonVariety.Flareon],
  "Flareon",
);
new class PorygonSpecies extends Species {}(
  PokemonSpecies.Porygon,
  [PokemonVariety.Porygon],
  "Porygon",
);
new class OmanyteSpecies extends Species {}(
  PokemonSpecies.Omanyte,
  [PokemonVariety.Omanyte],
  "Omanyte",
);
new class OmastarSpecies extends Species {}(
  PokemonSpecies.Omastar,
  [PokemonVariety.Omastar],
  "Omastar",
);
new class KabutoSpecies extends Species {}(
  PokemonSpecies.Kabuto,
  [PokemonVariety.Kabuto],
  "Kabuto",
);
new class KabutopsSpecies extends Species {}(
  PokemonSpecies.Kabutops,
  [PokemonVariety.Kabutops],
  "Kabutops",
);
new class AerodactylSpecies extends Species {}(
  PokemonSpecies.Aerodactyl,
  [PokemonVariety.Aerodactyl, PokemonVariety.AerodactylMega],
  "Aerodactyl",
);
new class SnorlaxSpecies extends Species {}(
  PokemonSpecies.Snorlax,
  [PokemonVariety.Snorlax, PokemonVariety.SnorlaxGmax],
  "Snorlax",
);
new class ArticunoSpecies extends Species {}(
  PokemonSpecies.Articuno,
  [PokemonVariety.Articuno, PokemonVariety.ArticunoGalar],
  "Articuno",
);
new class ZapdosSpecies extends Species {}(
  PokemonSpecies.Zapdos,
  [PokemonVariety.Zapdos, PokemonVariety.ZapdosGalar],
  "Zapdos",
);
new class MoltresSpecies extends Species {}(
  PokemonSpecies.Moltres,
  [PokemonVariety.Moltres, PokemonVariety.MoltresGalar],
  "Moltres",
);
new class DratiniSpecies extends Species {}(
  PokemonSpecies.Dratini,
  [PokemonVariety.Dratini],
  "Dratini",
);
new class DragonairSpecies extends Species {}(
  PokemonSpecies.Dragonair,
  [PokemonVariety.Dragonair],
  "Dragonair",
);
new class DragoniteSpecies extends Species {}(
  PokemonSpecies.Dragonite,
  [PokemonVariety.Dragonite],
  "Dragonite",
);
new class MewtwoSpecies extends Species {}(
  PokemonSpecies.Mewtwo,
  [PokemonVariety.Mewtwo, PokemonVariety.MewtwoMegaX, PokemonVariety.MewtwoMegaY],
  "Mewtwo",
);
new class MewSpecies extends Species {}(
  PokemonSpecies.Mew,
  [PokemonVariety.Mew],
  "Mew",
);
new class ChikoritaSpecies extends Species {}(
  PokemonSpecies.Chikorita,
  [PokemonVariety.Chikorita],
  "Chikorita",
);
new class BayleefSpecies extends Species {}(
  PokemonSpecies.Bayleef,
  [PokemonVariety.Bayleef],
  "Bayleef",
);
new class MeganiumSpecies extends Species {}(
  PokemonSpecies.Meganium,
  [PokemonVariety.Meganium],
  "Meganium",
);
new class CyndaquilSpecies extends Species {}(
  PokemonSpecies.Cyndaquil,
  [PokemonVariety.Cyndaquil],
  "Cyndaquil",
);
new class QuilavaSpecies extends Species {}(
  PokemonSpecies.Quilava,
  [PokemonVariety.Quilava],
  "Quilava",
);
new class TyphlosionSpecies extends Species {}(
  PokemonSpecies.Typhlosion,
  [PokemonVariety.Typhlosion, PokemonVariety.TyphlosionHisui],
  "Typhlosion",
);
new class TotodileSpecies extends Species {}(
  PokemonSpecies.Totodile,
  [PokemonVariety.Totodile],
  "Totodile",
);
new class CroconawSpecies extends Species {}(
  PokemonSpecies.Croconaw,
  [PokemonVariety.Croconaw],
  "Croconaw",
);
new class FeraligatrSpecies extends Species {}(
  PokemonSpecies.Feraligatr,
  [PokemonVariety.Feraligatr],
  "Feraligatr",
);
new class SentretSpecies extends Species {}(
  PokemonSpecies.Sentret,
  [PokemonVariety.Sentret],
  "Sentret",
);
new class FurretSpecies extends Species {}(
  PokemonSpecies.Furret,
  [PokemonVariety.Furret],
  "Furret",
);
new class HoothootSpecies extends Species {}(
  PokemonSpecies.Hoothoot,
  [PokemonVariety.Hoothoot],
  "Hoothoot",
);
new class NoctowlSpecies extends Species {}(
  PokemonSpecies.Noctowl,
  [PokemonVariety.Noctowl],
  "Noctowl",
);
new class LedybaSpecies extends Species {}(
  PokemonSpecies.Ledyba,
  [PokemonVariety.Ledyba],
  "Ledyba",
);
new class LedianSpecies extends Species {}(
  PokemonSpecies.Ledian,
  [PokemonVariety.Ledian],
  "Ledian",
);
new class SpinarakSpecies extends Species {}(
  PokemonSpecies.Spinarak,
  [PokemonVariety.Spinarak],
  "Spinarak",
);
new class AriadosSpecies extends Species {}(
  PokemonSpecies.Ariados,
  [PokemonVariety.Ariados],
  "Ariados",
);
new class CrobatSpecies extends Species {}(
  PokemonSpecies.Crobat,
  [PokemonVariety.Crobat],
  "Crobat",
);
new class ChinchouSpecies extends Species {}(
  PokemonSpecies.Chinchou,
  [PokemonVariety.Chinchou],
  "Chinchou",
);
new class LanturnSpecies extends Species {}(
  PokemonSpecies.Lanturn,
  [PokemonVariety.Lanturn],
  "Lanturn",
);
new class PichuSpecies extends Species {}(
  PokemonSpecies.Pichu,
  [PokemonVariety.Pichu],
  "Pichu",
);
new class CleffaSpecies extends Species {}(
  PokemonSpecies.Cleffa,
  [PokemonVariety.Cleffa],
  "Cleffa",
);
new class IgglybuffSpecies extends Species {}(
  PokemonSpecies.Igglybuff,
  [PokemonVariety.Igglybuff],
  "Igglybuff",
);
new class TogepiSpecies extends Species {}(
  PokemonSpecies.Togepi,
  [PokemonVariety.Togepi],
  "Togepi",
);
new class TogeticSpecies extends Species {}(
  PokemonSpecies.Togetic,
  [PokemonVariety.Togetic],
  "Togetic",
);
new class NatuSpecies extends Species {}(
  PokemonSpecies.Natu,
  [PokemonVariety.Natu],
  "Natu",
);
new class XatuSpecies extends Species {}(
  PokemonSpecies.Xatu,
  [PokemonVariety.Xatu],
  "Xatu",
);
new class MareepSpecies extends Species {}(
  PokemonSpecies.Mareep,
  [PokemonVariety.Mareep],
  "Mareep",
);
new class FlaaffySpecies extends Species {}(
  PokemonSpecies.Flaaffy,
  [PokemonVariety.Flaaffy],
  "Flaaffy",
);
new class AmpharosSpecies extends Species {}(
  PokemonSpecies.Ampharos,
  [PokemonVariety.Ampharos, PokemonVariety.AmpharosMega],
  "Ampharos",
);
new class BellossomSpecies extends Species {}(
  PokemonSpecies.Bellossom,
  [PokemonVariety.Bellossom],
  "Bellossom",
);
new class MarillSpecies extends Species {}(
  PokemonSpecies.Marill,
  [PokemonVariety.Marill],
  "Marill",
);
new class AzumarillSpecies extends Species {}(
  PokemonSpecies.Azumarill,
  [PokemonVariety.Azumarill],
  "Azumarill",
);
new class SudowoodoSpecies extends Species {}(
  PokemonSpecies.Sudowoodo,
  [PokemonVariety.Sudowoodo],
  "Sudowoodo",
);
new class PolitoedSpecies extends Species {}(
  PokemonSpecies.Politoed,
  [PokemonVariety.Politoed],
  "Politoed",
);
new class HoppipSpecies extends Species {}(
  PokemonSpecies.Hoppip,
  [PokemonVariety.Hoppip],
  "Hoppip",
);
new class SkiploomSpecies extends Species {}(
  PokemonSpecies.Skiploom,
  [PokemonVariety.Skiploom],
  "Skiploom",
);
new class JumpluffSpecies extends Species {}(
  PokemonSpecies.Jumpluff,
  [PokemonVariety.Jumpluff],
  "Jumpluff",
);
new class AipomSpecies extends Species {}(
  PokemonSpecies.Aipom,
  [PokemonVariety.Aipom],
  "Aipom",
);
new class SunkernSpecies extends Species {}(
  PokemonSpecies.Sunkern,
  [PokemonVariety.Sunkern],
  "Sunkern",
);
new class SunfloraSpecies extends Species {}(
  PokemonSpecies.Sunflora,
  [PokemonVariety.Sunflora],
  "Sunflora",
);
new class YanmaSpecies extends Species {}(
  PokemonSpecies.Yanma,
  [PokemonVariety.Yanma],
  "Yanma",
);
new class WooperSpecies extends Species {}(
  PokemonSpecies.Wooper,
  [PokemonVariety.Wooper, PokemonVariety.WooperPaldea],
  "Wooper",
);
new class QuagsireSpecies extends Species {}(
  PokemonSpecies.Quagsire,
  [PokemonVariety.Quagsire],
  "Quagsire",
);
new class EspeonSpecies extends Species {}(
  PokemonSpecies.Espeon,
  [PokemonVariety.Espeon],
  "Espeon",
);
new class UmbreonSpecies extends Species {}(
  PokemonSpecies.Umbreon,
  [PokemonVariety.Umbreon],
  "Umbreon",
);
new class MurkrowSpecies extends Species {}(
  PokemonSpecies.Murkrow,
  [PokemonVariety.Murkrow],
  "Murkrow",
);
new class SlowkingSpecies extends Species {}(
  PokemonSpecies.Slowking,
  [PokemonVariety.Slowking, PokemonVariety.SlowkingGalar],
  "Slowking",
);
new class MisdreavusSpecies extends Species {}(
  PokemonSpecies.Misdreavus,
  [PokemonVariety.Misdreavus],
  "Misdreavus",
);
new class UnownSpecies extends Species {}(
  PokemonSpecies.Unown,
  [PokemonVariety.Unown],
  "Unown",
);
new class WobbuffetSpecies extends Species {}(
  PokemonSpecies.Wobbuffet,
  [PokemonVariety.Wobbuffet],
  "Wobbuffet",
);
new class GirafarigSpecies extends Species {}(
  PokemonSpecies.Girafarig,
  [PokemonVariety.Girafarig],
  "Girafarig",
);
new class PinecoSpecies extends Species {}(
  PokemonSpecies.Pineco,
  [PokemonVariety.Pineco],
  "Pineco",
);
new class ForretressSpecies extends Species {}(
  PokemonSpecies.Forretress,
  [PokemonVariety.Forretress],
  "Forretress",
);
new class DunsparceSpecies extends Species {}(
  PokemonSpecies.Dunsparce,
  [PokemonVariety.Dunsparce],
  "Dunsparce",
);
new class GligarSpecies extends Species {}(
  PokemonSpecies.Gligar,
  [PokemonVariety.Gligar],
  "Gligar",
);
new class SteelixSpecies extends Species {}(
  PokemonSpecies.Steelix,
  [PokemonVariety.Steelix, PokemonVariety.SteelixMega],
  "Steelix",
);
new class SnubbullSpecies extends Species {}(
  PokemonSpecies.Snubbull,
  [PokemonVariety.Snubbull],
  "Snubbull",
);
new class GranbullSpecies extends Species {}(
  PokemonSpecies.Granbull,
  [PokemonVariety.Granbull],
  "Granbull",
);
new class QwilfishSpecies extends Species {}(
  PokemonSpecies.Qwilfish,
  [PokemonVariety.Qwilfish, PokemonVariety.QwilfishHisui],
  "Qwilfish",
);
new class ScizorSpecies extends Species {}(
  PokemonSpecies.Scizor,
  [PokemonVariety.Scizor, PokemonVariety.ScizorMega],
  "Scizor",
);
new class ShuckleSpecies extends Species {}(
  PokemonSpecies.Shuckle,
  [PokemonVariety.Shuckle],
  "Shuckle",
);
new class HeracrossSpecies extends Species {}(
  PokemonSpecies.Heracross,
  [PokemonVariety.Heracross, PokemonVariety.HeracrossMega],
  "Heracross",
);
new class SneaselSpecies extends Species {}(
  PokemonSpecies.Sneasel,
  [PokemonVariety.Sneasel, PokemonVariety.SneaselHisui],
  "Sneasel",
);
new class TeddiursaSpecies extends Species {}(
  PokemonSpecies.Teddiursa,
  [PokemonVariety.Teddiursa],
  "Teddiursa",
);
new class UrsaringSpecies extends Species {}(
  PokemonSpecies.Ursaring,
  [PokemonVariety.Ursaring],
  "Ursaring",
);
new class SlugmaSpecies extends Species {}(
  PokemonSpecies.Slugma,
  [PokemonVariety.Slugma],
  "Slugma",
);
new class MagcargoSpecies extends Species {}(
  PokemonSpecies.Magcargo,
  [PokemonVariety.Magcargo],
  "Magcargo",
);
new class SwinubSpecies extends Species {}(
  PokemonSpecies.Swinub,
  [PokemonVariety.Swinub],
  "Swinub",
);
new class PiloswineSpecies extends Species {}(
  PokemonSpecies.Piloswine,
  [PokemonVariety.Piloswine],
  "Piloswine",
);
new class CorsolaSpecies extends Species {}(
  PokemonSpecies.Corsola,
  [PokemonVariety.Corsola, PokemonVariety.CorsolaGalar],
  "Corsola",
);
new class RemoraidSpecies extends Species {}(
  PokemonSpecies.Remoraid,
  [PokemonVariety.Remoraid],
  "Remoraid",
);
new class OctillerySpecies extends Species {}(
  PokemonSpecies.Octillery,
  [PokemonVariety.Octillery],
  "Octillery",
);
new class DelibirdSpecies extends Species {}(
  PokemonSpecies.Delibird,
  [PokemonVariety.Delibird],
  "Delibird",
);
new class MantineSpecies extends Species {}(
  PokemonSpecies.Mantine,
  [PokemonVariety.Mantine],
  "Mantine",
);
new class SkarmorySpecies extends Species {}(
  PokemonSpecies.Skarmory,
  [PokemonVariety.Skarmory],
  "Skarmory",
);
new class HoundourSpecies extends Species {}(
  PokemonSpecies.Houndour,
  [PokemonVariety.Houndour],
  "Houndour",
);
new class HoundoomSpecies extends Species {}(
  PokemonSpecies.Houndoom,
  [PokemonVariety.Houndoom, PokemonVariety.HoundoomMega],
  "Houndoom",
);
new class KingdraSpecies extends Species {}(
  PokemonSpecies.Kingdra,
  [PokemonVariety.Kingdra],
  "Kingdra",
);
new class PhanpySpecies extends Species {}(
  PokemonSpecies.Phanpy,
  [PokemonVariety.Phanpy],
  "Phanpy",
);
new class DonphanSpecies extends Species {}(
  PokemonSpecies.Donphan,
  [PokemonVariety.Donphan],
  "Donphan",
);
new class Porygon2Species extends Species {}(
  PokemonSpecies.Porygon2,
  [PokemonVariety.Porygon2],
  "Porygon2",
);
new class StantlerSpecies extends Species {}(
  PokemonSpecies.Stantler,
  [PokemonVariety.Stantler],
  "Stantler",
);
new class SmeargleSpecies extends Species {}(
  PokemonSpecies.Smeargle,
  [PokemonVariety.Smeargle],
  "Smeargle",
);
new class TyrogueSpecies extends Species {}(
  PokemonSpecies.Tyrogue,
  [PokemonVariety.Tyrogue],
  "Tyrogue",
);
new class HitmontopSpecies extends Species {}(
  PokemonSpecies.Hitmontop,
  [PokemonVariety.Hitmontop],
  "Hitmontop",
);
new class SmoochumSpecies extends Species {}(
  PokemonSpecies.Smoochum,
  [PokemonVariety.Smoochum],
  "Smoochum",
);
new class ElekidSpecies extends Species {}(
  PokemonSpecies.Elekid,
  [PokemonVariety.Elekid],
  "Elekid",
);
new class MagbySpecies extends Species {}(
  PokemonSpecies.Magby,
  [PokemonVariety.Magby],
  "Magby",
);
new class MiltankSpecies extends Species {}(
  PokemonSpecies.Miltank,
  [PokemonVariety.Miltank],
  "Miltank",
);
new class BlisseySpecies extends Species {}(
  PokemonSpecies.Blissey,
  [PokemonVariety.Blissey],
  "Blissey",
);
new class RaikouSpecies extends Species {}(
  PokemonSpecies.Raikou,
  [PokemonVariety.Raikou],
  "Raikou",
);
new class EnteiSpecies extends Species {}(
  PokemonSpecies.Entei,
  [PokemonVariety.Entei],
  "Entei",
);
new class SuicuneSpecies extends Species {}(
  PokemonSpecies.Suicune,
  [PokemonVariety.Suicune],
  "Suicune",
);
new class LarvitarSpecies extends Species {}(
  PokemonSpecies.Larvitar,
  [PokemonVariety.Larvitar],
  "Larvitar",
);
new class PupitarSpecies extends Species {}(
  PokemonSpecies.Pupitar,
  [PokemonVariety.Pupitar],
  "Pupitar",
);
new class TyranitarSpecies extends Species {}(
  PokemonSpecies.Tyranitar,
  [PokemonVariety.Tyranitar, PokemonVariety.TyranitarMega],
  "Tyranitar",
);
new class LugiaSpecies extends Species {}(
  PokemonSpecies.Lugia,
  [PokemonVariety.Lugia],
  "Lugia",
);
new class HoOhSpecies extends Species {}(
  PokemonSpecies.HoOh,
  [PokemonVariety.HoOh],
  "Ho-Oh",
);
new class CelebiSpecies extends Species {}(
  PokemonSpecies.Celebi,
  [PokemonVariety.Celebi],
  "Celebi",
);
new class TreeckoSpecies extends Species {}(
  PokemonSpecies.Treecko,
  [PokemonVariety.Treecko],
  "Treecko",
);
new class GrovyleSpecies extends Species {}(
  PokemonSpecies.Grovyle,
  [PokemonVariety.Grovyle],
  "Grovyle",
);
new class SceptileSpecies extends Species {}(
  PokemonSpecies.Sceptile,
  [PokemonVariety.Sceptile, PokemonVariety.SceptileMega],
  "Sceptile",
);
new class TorchicSpecies extends Species {}(
  PokemonSpecies.Torchic,
  [PokemonVariety.Torchic],
  "Torchic",
);
new class CombuskenSpecies extends Species {}(
  PokemonSpecies.Combusken,
  [PokemonVariety.Combusken],
  "Combusken",
);
new class BlazikenSpecies extends Species {}(
  PokemonSpecies.Blaziken,
  [PokemonVariety.Blaziken, PokemonVariety.BlazikenMega],
  "Blaziken",
);
new class MudkipSpecies extends Species {}(
  PokemonSpecies.Mudkip,
  [PokemonVariety.Mudkip],
  "Mudkip",
);
new class MarshtompSpecies extends Species {}(
  PokemonSpecies.Marshtomp,
  [PokemonVariety.Marshtomp],
  "Marshtomp",
);
new class SwampertSpecies extends Species {}(
  PokemonSpecies.Swampert,
  [PokemonVariety.Swampert, PokemonVariety.SwampertMega],
  "Swampert",
);
new class PoochyenaSpecies extends Species {}(
  PokemonSpecies.Poochyena,
  [PokemonVariety.Poochyena],
  "Poochyena",
);
new class MightyenaSpecies extends Species {}(
  PokemonSpecies.Mightyena,
  [PokemonVariety.Mightyena],
  "Mightyena",
);
new class ZigzagoonSpecies extends Species {}(
  PokemonSpecies.Zigzagoon,
  [PokemonVariety.Zigzagoon, PokemonVariety.ZigzagoonGalar],
  "Zigzagoon",
);
new class LinooneSpecies extends Species {}(
  PokemonSpecies.Linoone,
  [PokemonVariety.Linoone, PokemonVariety.LinooneGalar],
  "Linoone",
);
new class WurmpleSpecies extends Species {}(
  PokemonSpecies.Wurmple,
  [PokemonVariety.Wurmple],
  "Wurmple",
);
new class SilcoonSpecies extends Species {}(
  PokemonSpecies.Silcoon,
  [PokemonVariety.Silcoon],
  "Silcoon",
);
new class BeautiflySpecies extends Species {}(
  PokemonSpecies.Beautifly,
  [PokemonVariety.Beautifly],
  "Beautifly",
);
new class CascoonSpecies extends Species {}(
  PokemonSpecies.Cascoon,
  [PokemonVariety.Cascoon],
  "Cascoon",
);
new class DustoxSpecies extends Species {}(
  PokemonSpecies.Dustox,
  [PokemonVariety.Dustox],
  "Dustox",
);
new class LotadSpecies extends Species {}(
  PokemonSpecies.Lotad,
  [PokemonVariety.Lotad],
  "Lotad",
);
new class LombreSpecies extends Species {}(
  PokemonSpecies.Lombre,
  [PokemonVariety.Lombre],
  "Lombre",
);
new class LudicoloSpecies extends Species {}(
  PokemonSpecies.Ludicolo,
  [PokemonVariety.Ludicolo],
  "Ludicolo",
);
new class SeedotSpecies extends Species {}(
  PokemonSpecies.Seedot,
  [PokemonVariety.Seedot],
  "Seedot",
);
new class NuzleafSpecies extends Species {}(
  PokemonSpecies.Nuzleaf,
  [PokemonVariety.Nuzleaf],
  "Nuzleaf",
);
new class ShiftrySpecies extends Species {}(
  PokemonSpecies.Shiftry,
  [PokemonVariety.Shiftry],
  "Shiftry",
);
new class TaillowSpecies extends Species {}(
  PokemonSpecies.Taillow,
  [PokemonVariety.Taillow],
  "Taillow",
);
new class SwellowSpecies extends Species {}(
  PokemonSpecies.Swellow,
  [PokemonVariety.Swellow],
  "Swellow",
);
new class WingullSpecies extends Species {}(
  PokemonSpecies.Wingull,
  [PokemonVariety.Wingull],
  "Wingull",
);
new class PelipperSpecies extends Species {}(
  PokemonSpecies.Pelipper,
  [PokemonVariety.Pelipper],
  "Pelipper",
);
new class RaltsSpecies extends Species {}(
  PokemonSpecies.Ralts,
  [PokemonVariety.Ralts],
  "Ralts",
);
new class KirliaSpecies extends Species {}(
  PokemonSpecies.Kirlia,
  [PokemonVariety.Kirlia],
  "Kirlia",
);
new class GardevoirSpecies extends Species {}(
  PokemonSpecies.Gardevoir,
  [PokemonVariety.Gardevoir, PokemonVariety.GardevoirMega],
  "Gardevoir",
);
new class SurskitSpecies extends Species {}(
  PokemonSpecies.Surskit,
  [PokemonVariety.Surskit],
  "Surskit",
);
new class MasquerainSpecies extends Species {}(
  PokemonSpecies.Masquerain,
  [PokemonVariety.Masquerain],
  "Masquerain",
);
new class ShroomishSpecies extends Species {}(
  PokemonSpecies.Shroomish,
  [PokemonVariety.Shroomish],
  "Shroomish",
);
new class BreloomSpecies extends Species {}(
  PokemonSpecies.Breloom,
  [PokemonVariety.Breloom],
  "Breloom",
);
new class SlakothSpecies extends Species {}(
  PokemonSpecies.Slakoth,
  [PokemonVariety.Slakoth],
  "Slakoth",
);
new class VigorothSpecies extends Species {}(
  PokemonSpecies.Vigoroth,
  [PokemonVariety.Vigoroth],
  "Vigoroth",
);
new class SlakingSpecies extends Species {}(
  PokemonSpecies.Slaking,
  [PokemonVariety.Slaking],
  "Slaking",
);
new class NincadaSpecies extends Species {}(
  PokemonSpecies.Nincada,
  [PokemonVariety.Nincada],
  "Nincada",
);
new class NinjaskSpecies extends Species {}(
  PokemonSpecies.Ninjask,
  [PokemonVariety.Ninjask],
  "Ninjask",
);
new class ShedinjaSpecies extends Species {}(
  PokemonSpecies.Shedinja,
  [PokemonVariety.Shedinja],
  "Shedinja",
);
new class WhismurSpecies extends Species {}(
  PokemonSpecies.Whismur,
  [PokemonVariety.Whismur],
  "Whismur",
);
new class LoudredSpecies extends Species {}(
  PokemonSpecies.Loudred,
  [PokemonVariety.Loudred],
  "Loudred",
);
new class ExploudSpecies extends Species {}(
  PokemonSpecies.Exploud,
  [PokemonVariety.Exploud],
  "Exploud",
);
new class MakuhitaSpecies extends Species {}(
  PokemonSpecies.Makuhita,
  [PokemonVariety.Makuhita],
  "Makuhita",
);
new class HariyamaSpecies extends Species {}(
  PokemonSpecies.Hariyama,
  [PokemonVariety.Hariyama],
  "Hariyama",
);
new class AzurillSpecies extends Species {}(
  PokemonSpecies.Azurill,
  [PokemonVariety.Azurill],
  "Azurill",
);
new class NosepassSpecies extends Species {}(
  PokemonSpecies.Nosepass,
  [PokemonVariety.Nosepass],
  "Nosepass",
);
new class SkittySpecies extends Species {}(
  PokemonSpecies.Skitty,
  [PokemonVariety.Skitty],
  "Skitty",
);
new class DelcattySpecies extends Species {}(
  PokemonSpecies.Delcatty,
  [PokemonVariety.Delcatty],
  "Delcatty",
);
new class SableyeSpecies extends Species {}(
  PokemonSpecies.Sableye,
  [PokemonVariety.Sableye, PokemonVariety.SableyeMega],
  "Sableye",
);
new class MawileSpecies extends Species {}(
  PokemonSpecies.Mawile,
  [PokemonVariety.Mawile, PokemonVariety.MawileMega],
  "Mawile",
);
new class AronSpecies extends Species {}(
  PokemonSpecies.Aron,
  [PokemonVariety.Aron],
  "Aron",
);
new class LaironSpecies extends Species {}(
  PokemonSpecies.Lairon,
  [PokemonVariety.Lairon],
  "Lairon",
);
new class AggronSpecies extends Species {}(
  PokemonSpecies.Aggron,
  [PokemonVariety.Aggron, PokemonVariety.AggronMega],
  "Aggron",
);
new class MedititeSpecies extends Species {}(
  PokemonSpecies.Meditite,
  [PokemonVariety.Meditite],
  "Meditite",
);
new class MedichamSpecies extends Species {}(
  PokemonSpecies.Medicham,
  [PokemonVariety.Medicham, PokemonVariety.MedichamMega],
  "Medicham",
);
new class ElectrikeSpecies extends Species {}(
  PokemonSpecies.Electrike,
  [PokemonVariety.Electrike],
  "Electrike",
);
new class ManectricSpecies extends Species {}(
  PokemonSpecies.Manectric,
  [PokemonVariety.Manectric, PokemonVariety.ManectricMega],
  "Manectric",
);
new class PlusleSpecies extends Species {}(
  PokemonSpecies.Plusle,
  [PokemonVariety.Plusle],
  "Plusle",
);
new class MinunSpecies extends Species {}(
  PokemonSpecies.Minun,
  [PokemonVariety.Minun],
  "Minun",
);
new class VolbeatSpecies extends Species {}(
  PokemonSpecies.Volbeat,
  [PokemonVariety.Volbeat],
  "Volbeat",
);
new class IllumiseSpecies extends Species {}(
  PokemonSpecies.Illumise,
  [PokemonVariety.Illumise],
  "Illumise",
);
new class RoseliaSpecies extends Species {}(
  PokemonSpecies.Roselia,
  [PokemonVariety.Roselia],
  "Roselia",
);
new class GulpinSpecies extends Species {}(
  PokemonSpecies.Gulpin,
  [PokemonVariety.Gulpin],
  "Gulpin",
);
new class SwalotSpecies extends Species {}(
  PokemonSpecies.Swalot,
  [PokemonVariety.Swalot],
  "Swalot",
);
new class CarvanhaSpecies extends Species {}(
  PokemonSpecies.Carvanha,
  [PokemonVariety.Carvanha],
  "Carvanha",
);
new class SharpedoSpecies extends Species {}(
  PokemonSpecies.Sharpedo,
  [PokemonVariety.Sharpedo, PokemonVariety.SharpedoMega],
  "Sharpedo",
);
new class WailmerSpecies extends Species {}(
  PokemonSpecies.Wailmer,
  [PokemonVariety.Wailmer],
  "Wailmer",
);
new class WailordSpecies extends Species {}(
  PokemonSpecies.Wailord,
  [PokemonVariety.Wailord],
  "Wailord",
);
new class NumelSpecies extends Species {}(
  PokemonSpecies.Numel,
  [PokemonVariety.Numel],
  "Numel",
);
new class CameruptSpecies extends Species {}(
  PokemonSpecies.Camerupt,
  [PokemonVariety.Camerupt, PokemonVariety.CameruptMega],
  "Camerupt",
);
new class TorkoalSpecies extends Species {}(
  PokemonSpecies.Torkoal,
  [PokemonVariety.Torkoal],
  "Torkoal",
);
new class SpoinkSpecies extends Species {}(
  PokemonSpecies.Spoink,
  [PokemonVariety.Spoink],
  "Spoink",
);
new class GrumpigSpecies extends Species {}(
  PokemonSpecies.Grumpig,
  [PokemonVariety.Grumpig],
  "Grumpig",
);
new class SpindaSpecies extends Species {}(
  PokemonSpecies.Spinda,
  [PokemonVariety.Spinda],
  "Spinda",
);
new class TrapinchSpecies extends Species {}(
  PokemonSpecies.Trapinch,
  [PokemonVariety.Trapinch],
  "Trapinch",
);
new class VibravaSpecies extends Species {}(
  PokemonSpecies.Vibrava,
  [PokemonVariety.Vibrava],
  "Vibrava",
);
new class FlygonSpecies extends Species {}(
  PokemonSpecies.Flygon,
  [PokemonVariety.Flygon],
  "Flygon",
);
new class CacneaSpecies extends Species {}(
  PokemonSpecies.Cacnea,
  [PokemonVariety.Cacnea],
  "Cacnea",
);
new class CacturneSpecies extends Species {}(
  PokemonSpecies.Cacturne,
  [PokemonVariety.Cacturne],
  "Cacturne",
);
new class SwabluSpecies extends Species {}(
  PokemonSpecies.Swablu,
  [PokemonVariety.Swablu],
  "Swablu",
);
new class AltariaSpecies extends Species {}(
  PokemonSpecies.Altaria,
  [PokemonVariety.Altaria, PokemonVariety.AltariaMega],
  "Altaria",
);
new class ZangooseSpecies extends Species {}(
  PokemonSpecies.Zangoose,
  [PokemonVariety.Zangoose],
  "Zangoose",
);
new class SeviperSpecies extends Species {}(
  PokemonSpecies.Seviper,
  [PokemonVariety.Seviper],
  "Seviper",
);
new class LunatoneSpecies extends Species {}(
  PokemonSpecies.Lunatone,
  [PokemonVariety.Lunatone],
  "Lunatone",
);
new class SolrockSpecies extends Species {}(
  PokemonSpecies.Solrock,
  [PokemonVariety.Solrock],
  "Solrock",
);
new class BarboachSpecies extends Species {}(
  PokemonSpecies.Barboach,
  [PokemonVariety.Barboach],
  "Barboach",
);
new class WhiscashSpecies extends Species {}(
  PokemonSpecies.Whiscash,
  [PokemonVariety.Whiscash],
  "Whiscash",
);
new class CorphishSpecies extends Species {}(
  PokemonSpecies.Corphish,
  [PokemonVariety.Corphish],
  "Corphish",
);
new class CrawdauntSpecies extends Species {}(
  PokemonSpecies.Crawdaunt,
  [PokemonVariety.Crawdaunt],
  "Crawdaunt",
);
new class BaltoySpecies extends Species {}(
  PokemonSpecies.Baltoy,
  [PokemonVariety.Baltoy],
  "Baltoy",
);
new class ClaydolSpecies extends Species {}(
  PokemonSpecies.Claydol,
  [PokemonVariety.Claydol],
  "Claydol",
);
new class LileepSpecies extends Species {}(
  PokemonSpecies.Lileep,
  [PokemonVariety.Lileep],
  "Lileep",
);
new class CradilySpecies extends Species {}(
  PokemonSpecies.Cradily,
  [PokemonVariety.Cradily],
  "Cradily",
);
new class AnorithSpecies extends Species {}(
  PokemonSpecies.Anorith,
  [PokemonVariety.Anorith],
  "Anorith",
);
new class ArmaldoSpecies extends Species {}(
  PokemonSpecies.Armaldo,
  [PokemonVariety.Armaldo],
  "Armaldo",
);
new class FeebasSpecies extends Species {}(
  PokemonSpecies.Feebas,
  [PokemonVariety.Feebas],
  "Feebas",
);
new class MiloticSpecies extends Species {}(
  PokemonSpecies.Milotic,
  [PokemonVariety.Milotic],
  "Milotic",
);
new class CastformSpecies extends Species {}(
  PokemonSpecies.Castform,
  [PokemonVariety.Castform, PokemonVariety.CastformSunny, PokemonVariety.CastformRainy, PokemonVariety.CastformSnowy],
  "Castform",
);
new class KecleonSpecies extends Species {}(
  PokemonSpecies.Kecleon,
  [PokemonVariety.Kecleon],
  "Kecleon",
);
new class ShuppetSpecies extends Species {}(
  PokemonSpecies.Shuppet,
  [PokemonVariety.Shuppet],
  "Shuppet",
);
new class BanetteSpecies extends Species {}(
  PokemonSpecies.Banette,
  [PokemonVariety.Banette, PokemonVariety.BanetteMega],
  "Banette",
);
new class DuskullSpecies extends Species {}(
  PokemonSpecies.Duskull,
  [PokemonVariety.Duskull],
  "Duskull",
);
new class DusclopsSpecies extends Species {}(
  PokemonSpecies.Dusclops,
  [PokemonVariety.Dusclops],
  "Dusclops",
);
new class TropiusSpecies extends Species {}(
  PokemonSpecies.Tropius,
  [PokemonVariety.Tropius],
  "Tropius",
);
new class ChimechoSpecies extends Species {}(
  PokemonSpecies.Chimecho,
  [PokemonVariety.Chimecho],
  "Chimecho",
);
new class AbsolSpecies extends Species {}(
  PokemonSpecies.Absol,
  [PokemonVariety.Absol, PokemonVariety.AbsolMega],
  "Absol",
);
new class WynautSpecies extends Species {}(
  PokemonSpecies.Wynaut,
  [PokemonVariety.Wynaut],
  "Wynaut",
);
new class SnoruntSpecies extends Species {}(
  PokemonSpecies.Snorunt,
  [PokemonVariety.Snorunt],
  "Snorunt",
);
new class GlalieSpecies extends Species {}(
  PokemonSpecies.Glalie,
  [PokemonVariety.Glalie, PokemonVariety.GlalieMega],
  "Glalie",
);
new class SphealSpecies extends Species {}(
  PokemonSpecies.Spheal,
  [PokemonVariety.Spheal],
  "Spheal",
);
new class SealeoSpecies extends Species {}(
  PokemonSpecies.Sealeo,
  [PokemonVariety.Sealeo],
  "Sealeo",
);
new class WalreinSpecies extends Species {}(
  PokemonSpecies.Walrein,
  [PokemonVariety.Walrein],
  "Walrein",
);
new class ClamperlSpecies extends Species {}(
  PokemonSpecies.Clamperl,
  [PokemonVariety.Clamperl],
  "Clamperl",
);
new class HuntailSpecies extends Species {}(
  PokemonSpecies.Huntail,
  [PokemonVariety.Huntail],
  "Huntail",
);
new class GorebyssSpecies extends Species {}(
  PokemonSpecies.Gorebyss,
  [PokemonVariety.Gorebyss],
  "Gorebyss",
);
new class RelicanthSpecies extends Species {}(
  PokemonSpecies.Relicanth,
  [PokemonVariety.Relicanth],
  "Relicanth",
);
new class LuvdiscSpecies extends Species {}(
  PokemonSpecies.Luvdisc,
  [PokemonVariety.Luvdisc],
  "Luvdisc",
);
new class BagonSpecies extends Species {}(
  PokemonSpecies.Bagon,
  [PokemonVariety.Bagon],
  "Bagon",
);
new class ShelgonSpecies extends Species {}(
  PokemonSpecies.Shelgon,
  [PokemonVariety.Shelgon],
  "Shelgon",
);
new class SalamenceSpecies extends Species {}(
  PokemonSpecies.Salamence,
  [PokemonVariety.Salamence, PokemonVariety.SalamenceMega],
  "Salamence",
);
new class BeldumSpecies extends Species {}(
  PokemonSpecies.Beldum,
  [PokemonVariety.Beldum],
  "Beldum",
);
new class MetangSpecies extends Species {}(
  PokemonSpecies.Metang,
  [PokemonVariety.Metang],
  "Metang",
);
new class MetagrossSpecies extends Species {}(
  PokemonSpecies.Metagross,
  [PokemonVariety.Metagross, PokemonVariety.MetagrossMega],
  "Metagross",
);
new class RegirockSpecies extends Species {}(
  PokemonSpecies.Regirock,
  [PokemonVariety.Regirock],
  "Regirock",
);
new class RegiceSpecies extends Species {}(
  PokemonSpecies.Regice,
  [PokemonVariety.Regice],
  "Regice",
);
new class RegisteelSpecies extends Species {}(
  PokemonSpecies.Registeel,
  [PokemonVariety.Registeel],
  "Registeel",
);
new class LatiasSpecies extends Species {}(
  PokemonSpecies.Latias,
  [PokemonVariety.Latias, PokemonVariety.LatiasMega],
  "Latias",
);
new class LatiosSpecies extends Species {}(
  PokemonSpecies.Latios,
  [PokemonVariety.Latios, PokemonVariety.LatiosMega],
  "Latios",
);
new class KyogreSpecies extends Species {}(
  PokemonSpecies.Kyogre,
  [PokemonVariety.Kyogre, PokemonVariety.KyogrePrimal],
  "Kyogre",
);
new class GroudonSpecies extends Species {}(
  PokemonSpecies.Groudon,
  [PokemonVariety.Groudon, PokemonVariety.GroudonPrimal],
  "Groudon",
);
new class RayquazaSpecies extends Species {}(
  PokemonSpecies.Rayquaza,
  [PokemonVariety.Rayquaza, PokemonVariety.RayquazaMega],
  "Rayquaza",
);
new class JirachiSpecies extends Species {}(
  PokemonSpecies.Jirachi,
  [PokemonVariety.Jirachi],
  "Jirachi",
);
new class DeoxysSpecies extends Species {}(
  PokemonSpecies.Deoxys,
  [PokemonVariety.DeoxysNormal, PokemonVariety.DeoxysAttack, PokemonVariety.DeoxysDefense, PokemonVariety.DeoxysSpeed],
  "Deoxys",
);
new class TurtwigSpecies extends Species {}(
  PokemonSpecies.Turtwig,
  [PokemonVariety.Turtwig],
  "Turtwig",
);
new class GrotleSpecies extends Species {}(
  PokemonSpecies.Grotle,
  [PokemonVariety.Grotle],
  "Grotle",
);
new class TorterraSpecies extends Species {}(
  PokemonSpecies.Torterra,
  [PokemonVariety.Torterra],
  "Torterra",
);
new class ChimcharSpecies extends Species {}(
  PokemonSpecies.Chimchar,
  [PokemonVariety.Chimchar],
  "Chimchar",
);
new class MonfernoSpecies extends Species {}(
  PokemonSpecies.Monferno,
  [PokemonVariety.Monferno],
  "Monferno",
);
new class InfernapeSpecies extends Species {}(
  PokemonSpecies.Infernape,
  [PokemonVariety.Infernape],
  "Infernape",
);
new class PiplupSpecies extends Species {}(
  PokemonSpecies.Piplup,
  [PokemonVariety.Piplup],
  "Piplup",
);
new class PrinplupSpecies extends Species {}(
  PokemonSpecies.Prinplup,
  [PokemonVariety.Prinplup],
  "Prinplup",
);
new class EmpoleonSpecies extends Species {}(
  PokemonSpecies.Empoleon,
  [PokemonVariety.Empoleon],
  "Empoleon",
);
new class StarlySpecies extends Species {}(
  PokemonSpecies.Starly,
  [PokemonVariety.Starly],
  "Starly",
);
new class StaraviaSpecies extends Species {}(
  PokemonSpecies.Staravia,
  [PokemonVariety.Staravia],
  "Staravia",
);
new class StaraptorSpecies extends Species {}(
  PokemonSpecies.Staraptor,
  [PokemonVariety.Staraptor],
  "Staraptor",
);
new class BidoofSpecies extends Species {}(
  PokemonSpecies.Bidoof,
  [PokemonVariety.Bidoof],
  "Bidoof",
);
new class BibarelSpecies extends Species {}(
  PokemonSpecies.Bibarel,
  [PokemonVariety.Bibarel],
  "Bibarel",
);
new class KricketotSpecies extends Species {}(
  PokemonSpecies.Kricketot,
  [PokemonVariety.Kricketot],
  "Kricketot",
);
new class KricketuneSpecies extends Species {}(
  PokemonSpecies.Kricketune,
  [PokemonVariety.Kricketune],
  "Kricketune",
);
new class ShinxSpecies extends Species {}(
  PokemonSpecies.Shinx,
  [PokemonVariety.Shinx],
  "Shinx",
);
new class LuxioSpecies extends Species {}(
  PokemonSpecies.Luxio,
  [PokemonVariety.Luxio],
  "Luxio",
);
new class LuxraySpecies extends Species {}(
  PokemonSpecies.Luxray,
  [PokemonVariety.Luxray],
  "Luxray",
);
new class BudewSpecies extends Species {}(
  PokemonSpecies.Budew,
  [PokemonVariety.Budew],
  "Budew",
);
new class RoseradeSpecies extends Species {}(
  PokemonSpecies.Roserade,
  [PokemonVariety.Roserade],
  "Roserade",
);
new class CranidosSpecies extends Species {}(
  PokemonSpecies.Cranidos,
  [PokemonVariety.Cranidos],
  "Cranidos",
);
new class RampardosSpecies extends Species {}(
  PokemonSpecies.Rampardos,
  [PokemonVariety.Rampardos],
  "Rampardos",
);
new class ShieldonSpecies extends Species {}(
  PokemonSpecies.Shieldon,
  [PokemonVariety.Shieldon],
  "Shieldon",
);
new class BastiodonSpecies extends Species {}(
  PokemonSpecies.Bastiodon,
  [PokemonVariety.Bastiodon],
  "Bastiodon",
);
new class BurmySpecies extends Species {}(
  PokemonSpecies.Burmy,
  [PokemonVariety.Burmy],
  "Burmy",
);
new class WormadamSpecies extends Species {}(
  PokemonSpecies.Wormadam,
  [PokemonVariety.WormadamPlant, PokemonVariety.WormadamSandy, PokemonVariety.WormadamTrash],
  "Wormadam",
);
new class MothimSpecies extends Species {}(
  PokemonSpecies.Mothim,
  [PokemonVariety.Mothim],
  "Mothim",
);
new class CombeeSpecies extends Species {}(
  PokemonSpecies.Combee,
  [PokemonVariety.Combee],
  "Combee",
);
new class VespiquenSpecies extends Species {}(
  PokemonSpecies.Vespiquen,
  [PokemonVariety.Vespiquen],
  "Vespiquen",
);
new class PachirisuSpecies extends Species {}(
  PokemonSpecies.Pachirisu,
  [PokemonVariety.Pachirisu],
  "Pachirisu",
);
new class BuizelSpecies extends Species {}(
  PokemonSpecies.Buizel,
  [PokemonVariety.Buizel],
  "Buizel",
);
new class FloatzelSpecies extends Species {}(
  PokemonSpecies.Floatzel,
  [PokemonVariety.Floatzel],
  "Floatzel",
);
new class CherubiSpecies extends Species {}(
  PokemonSpecies.Cherubi,
  [PokemonVariety.Cherubi],
  "Cherubi",
);
new class CherrimSpecies extends Species {}(
  PokemonSpecies.Cherrim,
  [PokemonVariety.Cherrim],
  "Cherrim",
);
new class ShellosSpecies extends Species {}(
  PokemonSpecies.Shellos,
  [PokemonVariety.Shellos],
  "Shellos",
);
new class GastrodonSpecies extends Species {}(
  PokemonSpecies.Gastrodon,
  [PokemonVariety.Gastrodon],
  "Gastrodon",
);
new class AmbipomSpecies extends Species {}(
  PokemonSpecies.Ambipom,
  [PokemonVariety.Ambipom],
  "Ambipom",
);
new class DrifloonSpecies extends Species {}(
  PokemonSpecies.Drifloon,
  [PokemonVariety.Drifloon],
  "Drifloon",
);
new class DrifblimSpecies extends Species {}(
  PokemonSpecies.Drifblim,
  [PokemonVariety.Drifblim],
  "Drifblim",
);
new class BunearySpecies extends Species {}(
  PokemonSpecies.Buneary,
  [PokemonVariety.Buneary],
  "Buneary",
);
new class LopunnySpecies extends Species {}(
  PokemonSpecies.Lopunny,
  [PokemonVariety.Lopunny, PokemonVariety.LopunnyMega],
  "Lopunny",
);
new class MismagiusSpecies extends Species {}(
  PokemonSpecies.Mismagius,
  [PokemonVariety.Mismagius],
  "Mismagius",
);
new class HonchkrowSpecies extends Species {}(
  PokemonSpecies.Honchkrow,
  [PokemonVariety.Honchkrow],
  "Honchkrow",
);
new class GlameowSpecies extends Species {}(
  PokemonSpecies.Glameow,
  [PokemonVariety.Glameow],
  "Glameow",
);
new class PuruglySpecies extends Species {}(
  PokemonSpecies.Purugly,
  [PokemonVariety.Purugly],
  "Purugly",
);
new class ChinglingSpecies extends Species {}(
  PokemonSpecies.Chingling,
  [PokemonVariety.Chingling],
  "Chingling",
);
new class StunkySpecies extends Species {}(
  PokemonSpecies.Stunky,
  [PokemonVariety.Stunky],
  "Stunky",
);
new class SkuntankSpecies extends Species {}(
  PokemonSpecies.Skuntank,
  [PokemonVariety.Skuntank],
  "Skuntank",
);
new class BronzorSpecies extends Species {}(
  PokemonSpecies.Bronzor,
  [PokemonVariety.Bronzor],
  "Bronzor",
);
new class BronzongSpecies extends Species {}(
  PokemonSpecies.Bronzong,
  [PokemonVariety.Bronzong],
  "Bronzong",
);
new class BonslySpecies extends Species {}(
  PokemonSpecies.Bonsly,
  [PokemonVariety.Bonsly],
  "Bonsly",
);
new class MimeJrSpecies extends Species {}(
  PokemonSpecies.MimeJr,
  [PokemonVariety.MimeJr],
  "Mime Jr.",
);
new class HappinySpecies extends Species {}(
  PokemonSpecies.Happiny,
  [PokemonVariety.Happiny],
  "Happiny",
);
new class ChatotSpecies extends Species {}(
  PokemonSpecies.Chatot,
  [PokemonVariety.Chatot],
  "Chatot",
);
new class SpiritombSpecies extends Species {}(
  PokemonSpecies.Spiritomb,
  [PokemonVariety.Spiritomb],
  "Spiritomb",
);
new class GibleSpecies extends Species {}(
  PokemonSpecies.Gible,
  [PokemonVariety.Gible],
  "Gible",
);
new class GabiteSpecies extends Species {}(
  PokemonSpecies.Gabite,
  [PokemonVariety.Gabite],
  "Gabite",
);
new class GarchompSpecies extends Species {}(
  PokemonSpecies.Garchomp,
  [PokemonVariety.Garchomp, PokemonVariety.GarchompMega],
  "Garchomp",
);
new class MunchlaxSpecies extends Species {}(
  PokemonSpecies.Munchlax,
  [PokemonVariety.Munchlax],
  "Munchlax",
);
new class RioluSpecies extends Species {}(
  PokemonSpecies.Riolu,
  [PokemonVariety.Riolu],
  "Riolu",
);
new class LucarioSpecies extends Species {}(
  PokemonSpecies.Lucario,
  [PokemonVariety.Lucario, PokemonVariety.LucarioMega],
  "Lucario",
);
new class HippopotasSpecies extends Species {}(
  PokemonSpecies.Hippopotas,
  [PokemonVariety.Hippopotas],
  "Hippopotas",
);
new class HippowdonSpecies extends Species {}(
  PokemonSpecies.Hippowdon,
  [PokemonVariety.Hippowdon],
  "Hippowdon",
);
new class SkorupiSpecies extends Species {}(
  PokemonSpecies.Skorupi,
  [PokemonVariety.Skorupi],
  "Skorupi",
);
new class DrapionSpecies extends Species {}(
  PokemonSpecies.Drapion,
  [PokemonVariety.Drapion],
  "Drapion",
);
new class CroagunkSpecies extends Species {}(
  PokemonSpecies.Croagunk,
  [PokemonVariety.Croagunk],
  "Croagunk",
);
new class ToxicroakSpecies extends Species {}(
  PokemonSpecies.Toxicroak,
  [PokemonVariety.Toxicroak],
  "Toxicroak",
);
new class CarnivineSpecies extends Species {}(
  PokemonSpecies.Carnivine,
  [PokemonVariety.Carnivine],
  "Carnivine",
);
new class FinneonSpecies extends Species {}(
  PokemonSpecies.Finneon,
  [PokemonVariety.Finneon],
  "Finneon",
);
new class LumineonSpecies extends Species {}(
  PokemonSpecies.Lumineon,
  [PokemonVariety.Lumineon],
  "Lumineon",
);
new class MantykeSpecies extends Species {}(
  PokemonSpecies.Mantyke,
  [PokemonVariety.Mantyke],
  "Mantyke",
);
new class SnoverSpecies extends Species {}(
  PokemonSpecies.Snover,
  [PokemonVariety.Snover],
  "Snover",
);
new class AbomasnowSpecies extends Species {}(
  PokemonSpecies.Abomasnow,
  [PokemonVariety.Abomasnow, PokemonVariety.AbomasnowMega],
  "Abomasnow",
);
new class WeavileSpecies extends Species {}(
  PokemonSpecies.Weavile,
  [PokemonVariety.Weavile],
  "Weavile",
);
new class MagnezoneSpecies extends Species {}(
  PokemonSpecies.Magnezone,
  [PokemonVariety.Magnezone],
  "Magnezone",
);
new class LickilickySpecies extends Species {}(
  PokemonSpecies.Lickilicky,
  [PokemonVariety.Lickilicky],
  "Lickilicky",
);
new class RhyperiorSpecies extends Species {}(
  PokemonSpecies.Rhyperior,
  [PokemonVariety.Rhyperior],
  "Rhyperior",
);
new class TangrowthSpecies extends Species {}(
  PokemonSpecies.Tangrowth,
  [PokemonVariety.Tangrowth],
  "Tangrowth",
);
new class ElectivireSpecies extends Species {}(
  PokemonSpecies.Electivire,
  [PokemonVariety.Electivire],
  "Electivire",
);
new class MagmortarSpecies extends Species {}(
  PokemonSpecies.Magmortar,
  [PokemonVariety.Magmortar],
  "Magmortar",
);
new class TogekissSpecies extends Species {}(
  PokemonSpecies.Togekiss,
  [PokemonVariety.Togekiss],
  "Togekiss",
);
new class YanmegaSpecies extends Species {}(
  PokemonSpecies.Yanmega,
  [PokemonVariety.Yanmega],
  "Yanmega",
);
new class LeafeonSpecies extends Species {}(
  PokemonSpecies.Leafeon,
  [PokemonVariety.Leafeon],
  "Leafeon",
);
new class GlaceonSpecies extends Species {}(
  PokemonSpecies.Glaceon,
  [PokemonVariety.Glaceon],
  "Glaceon",
);
new class GliscorSpecies extends Species {}(
  PokemonSpecies.Gliscor,
  [PokemonVariety.Gliscor],
  "Gliscor",
);
new class MamoswineSpecies extends Species {}(
  PokemonSpecies.Mamoswine,
  [PokemonVariety.Mamoswine],
  "Mamoswine",
);
new class PorygonZSpecies extends Species {}(
  PokemonSpecies.PorygonZ,
  [PokemonVariety.PorygonZ],
  "Porygon-Z",
);
new class GalladeSpecies extends Species {}(
  PokemonSpecies.Gallade,
  [PokemonVariety.Gallade, PokemonVariety.GalladeMega],
  "Gallade",
);
new class ProbopassSpecies extends Species {}(
  PokemonSpecies.Probopass,
  [PokemonVariety.Probopass],
  "Probopass",
);
new class DusknoirSpecies extends Species {}(
  PokemonSpecies.Dusknoir,
  [PokemonVariety.Dusknoir],
  "Dusknoir",
);
new class FroslassSpecies extends Species {}(
  PokemonSpecies.Froslass,
  [PokemonVariety.Froslass],
  "Froslass",
);
new class RotomSpecies extends Species {}(
  PokemonSpecies.Rotom,
  [PokemonVariety.Rotom, PokemonVariety.RotomHeat, PokemonVariety.RotomWash, PokemonVariety.RotomFrost, PokemonVariety.RotomFan, PokemonVariety.RotomMow],
  "Rotom",
);
new class UxieSpecies extends Species {}(
  PokemonSpecies.Uxie,
  [PokemonVariety.Uxie],
  "Uxie",
);
new class MespritSpecies extends Species {}(
  PokemonSpecies.Mesprit,
  [PokemonVariety.Mesprit],
  "Mesprit",
);
new class AzelfSpecies extends Species {}(
  PokemonSpecies.Azelf,
  [PokemonVariety.Azelf],
  "Azelf",
);
new class DialgaSpecies extends Species {}(
  PokemonSpecies.Dialga,
  [PokemonVariety.Dialga, PokemonVariety.DialgaOrigin],
  "Dialga",
);
new class PalkiaSpecies extends Species {}(
  PokemonSpecies.Palkia,
  [PokemonVariety.Palkia, PokemonVariety.PalkiaOrigin],
  "Palkia",
);
new class HeatranSpecies extends Species {}(
  PokemonSpecies.Heatran,
  [PokemonVariety.Heatran],
  "Heatran",
);
new class RegigigasSpecies extends Species {}(
  PokemonSpecies.Regigigas,
  [PokemonVariety.Regigigas],
  "Regigigas",
);
new class GiratinaSpecies extends Species {}(
  PokemonSpecies.Giratina,
  [PokemonVariety.GiratinaAltered, PokemonVariety.GiratinaOrigin],
  "Giratina",
);
new class CresseliaSpecies extends Species {}(
  PokemonSpecies.Cresselia,
  [PokemonVariety.Cresselia],
  "Cresselia",
);
new class PhioneSpecies extends Species {}(
  PokemonSpecies.Phione,
  [PokemonVariety.Phione],
  "Phione",
);
new class ManaphySpecies extends Species {}(
  PokemonSpecies.Manaphy,
  [PokemonVariety.Manaphy],
  "Manaphy",
);
new class DarkraiSpecies extends Species {}(
  PokemonSpecies.Darkrai,
  [PokemonVariety.Darkrai],
  "Darkrai",
);
new class ShayminSpecies extends Species {}(
  PokemonSpecies.Shaymin,
  [PokemonVariety.ShayminLand, PokemonVariety.ShayminSky],
  "Shaymin",
);
new class ArceusSpecies extends Species {}(
  PokemonSpecies.Arceus,
  [PokemonVariety.Arceus],
  "Arceus",
);
new class VictiniSpecies extends Species {}(
  PokemonSpecies.Victini,
  [PokemonVariety.Victini],
  "Victini",
);
new class SnivySpecies extends Species {}(
  PokemonSpecies.Snivy,
  [PokemonVariety.Snivy],
  "Snivy",
);
new class ServineSpecies extends Species {}(
  PokemonSpecies.Servine,
  [PokemonVariety.Servine],
  "Servine",
);
new class SerperiorSpecies extends Species {}(
  PokemonSpecies.Serperior,
  [PokemonVariety.Serperior],
  "Serperior",
);
new class TepigSpecies extends Species {}(
  PokemonSpecies.Tepig,
  [PokemonVariety.Tepig],
  "Tepig",
);
new class PigniteSpecies extends Species {}(
  PokemonSpecies.Pignite,
  [PokemonVariety.Pignite],
  "Pignite",
);
new class EmboarSpecies extends Species {}(
  PokemonSpecies.Emboar,
  [PokemonVariety.Emboar],
  "Emboar",
);
new class OshawottSpecies extends Species {}(
  PokemonSpecies.Oshawott,
  [PokemonVariety.Oshawott],
  "Oshawott",
);
new class DewottSpecies extends Species {}(
  PokemonSpecies.Dewott,
  [PokemonVariety.Dewott],
  "Dewott",
);
new class SamurottSpecies extends Species {}(
  PokemonSpecies.Samurott,
  [PokemonVariety.Samurott, PokemonVariety.SamurottHisui],
  "Samurott",
);
new class PatratSpecies extends Species {}(
  PokemonSpecies.Patrat,
  [PokemonVariety.Patrat],
  "Patrat",
);
new class WatchogSpecies extends Species {}(
  PokemonSpecies.Watchog,
  [PokemonVariety.Watchog],
  "Watchog",
);
new class LillipupSpecies extends Species {}(
  PokemonSpecies.Lillipup,
  [PokemonVariety.Lillipup],
  "Lillipup",
);
new class HerdierSpecies extends Species {}(
  PokemonSpecies.Herdier,
  [PokemonVariety.Herdier],
  "Herdier",
);
new class StoutlandSpecies extends Species {}(
  PokemonSpecies.Stoutland,
  [PokemonVariety.Stoutland],
  "Stoutland",
);
new class PurrloinSpecies extends Species {}(
  PokemonSpecies.Purrloin,
  [PokemonVariety.Purrloin],
  "Purrloin",
);
new class LiepardSpecies extends Species {}(
  PokemonSpecies.Liepard,
  [PokemonVariety.Liepard],
  "Liepard",
);
new class PansageSpecies extends Species {}(
  PokemonSpecies.Pansage,
  [PokemonVariety.Pansage],
  "Pansage",
);
new class SimisageSpecies extends Species {}(
  PokemonSpecies.Simisage,
  [PokemonVariety.Simisage],
  "Simisage",
);
new class PansearSpecies extends Species {}(
  PokemonSpecies.Pansear,
  [PokemonVariety.Pansear],
  "Pansear",
);
new class SimisearSpecies extends Species {}(
  PokemonSpecies.Simisear,
  [PokemonVariety.Simisear],
  "Simisear",
);
new class PanpourSpecies extends Species {}(
  PokemonSpecies.Panpour,
  [PokemonVariety.Panpour],
  "Panpour",
);
new class SimipourSpecies extends Species {}(
  PokemonSpecies.Simipour,
  [PokemonVariety.Simipour],
  "Simipour",
);
new class MunnaSpecies extends Species {}(
  PokemonSpecies.Munna,
  [PokemonVariety.Munna],
  "Munna",
);
new class MusharnaSpecies extends Species {}(
  PokemonSpecies.Musharna,
  [PokemonVariety.Musharna],
  "Musharna",
);
new class PidoveSpecies extends Species {}(
  PokemonSpecies.Pidove,
  [PokemonVariety.Pidove],
  "Pidove",
);
new class TranquillSpecies extends Species {}(
  PokemonSpecies.Tranquill,
  [PokemonVariety.Tranquill],
  "Tranquill",
);
new class UnfezantSpecies extends Species {}(
  PokemonSpecies.Unfezant,
  [PokemonVariety.Unfezant],
  "Unfezant",
);
new class BlitzleSpecies extends Species {}(
  PokemonSpecies.Blitzle,
  [PokemonVariety.Blitzle],
  "Blitzle",
);
new class ZebstrikaSpecies extends Species {}(
  PokemonSpecies.Zebstrika,
  [PokemonVariety.Zebstrika],
  "Zebstrika",
);
new class RoggenrolaSpecies extends Species {}(
  PokemonSpecies.Roggenrola,
  [PokemonVariety.Roggenrola],
  "Roggenrola",
);
new class BoldoreSpecies extends Species {}(
  PokemonSpecies.Boldore,
  [PokemonVariety.Boldore],
  "Boldore",
);
new class GigalithSpecies extends Species {}(
  PokemonSpecies.Gigalith,
  [PokemonVariety.Gigalith],
  "Gigalith",
);
new class WoobatSpecies extends Species {}(
  PokemonSpecies.Woobat,
  [PokemonVariety.Woobat],
  "Woobat",
);
new class SwoobatSpecies extends Species {}(
  PokemonSpecies.Swoobat,
  [PokemonVariety.Swoobat],
  "Swoobat",
);
new class DrilburSpecies extends Species {}(
  PokemonSpecies.Drilbur,
  [PokemonVariety.Drilbur],
  "Drilbur",
);
new class ExcadrillSpecies extends Species {}(
  PokemonSpecies.Excadrill,
  [PokemonVariety.Excadrill],
  "Excadrill",
);
new class AudinoSpecies extends Species {}(
  PokemonSpecies.Audino,
  [PokemonVariety.Audino, PokemonVariety.AudinoMega],
  "Audino",
);
new class TimburrSpecies extends Species {}(
  PokemonSpecies.Timburr,
  [PokemonVariety.Timburr],
  "Timburr",
);
new class GurdurrSpecies extends Species {}(
  PokemonSpecies.Gurdurr,
  [PokemonVariety.Gurdurr],
  "Gurdurr",
);
new class ConkeldurrSpecies extends Species {}(
  PokemonSpecies.Conkeldurr,
  [PokemonVariety.Conkeldurr],
  "Conkeldurr",
);
new class TympoleSpecies extends Species {}(
  PokemonSpecies.Tympole,
  [PokemonVariety.Tympole],
  "Tympole",
);
new class PalpitoadSpecies extends Species {}(
  PokemonSpecies.Palpitoad,
  [PokemonVariety.Palpitoad],
  "Palpitoad",
);
new class SeismitoadSpecies extends Species {}(
  PokemonSpecies.Seismitoad,
  [PokemonVariety.Seismitoad],
  "Seismitoad",
);
new class ThrohSpecies extends Species {}(
  PokemonSpecies.Throh,
  [PokemonVariety.Throh],
  "Throh",
);
new class SawkSpecies extends Species {}(
  PokemonSpecies.Sawk,
  [PokemonVariety.Sawk],
  "Sawk",
);
new class SewaddleSpecies extends Species {}(
  PokemonSpecies.Sewaddle,
  [PokemonVariety.Sewaddle],
  "Sewaddle",
);
new class SwadloonSpecies extends Species {}(
  PokemonSpecies.Swadloon,
  [PokemonVariety.Swadloon],
  "Swadloon",
);
new class LeavannySpecies extends Species {}(
  PokemonSpecies.Leavanny,
  [PokemonVariety.Leavanny],
  "Leavanny",
);
new class VenipedeSpecies extends Species {}(
  PokemonSpecies.Venipede,
  [PokemonVariety.Venipede],
  "Venipede",
);
new class WhirlipedeSpecies extends Species {}(
  PokemonSpecies.Whirlipede,
  [PokemonVariety.Whirlipede],
  "Whirlipede",
);
new class ScolipedeSpecies extends Species {}(
  PokemonSpecies.Scolipede,
  [PokemonVariety.Scolipede],
  "Scolipede",
);
new class CottoneeSpecies extends Species {}(
  PokemonSpecies.Cottonee,
  [PokemonVariety.Cottonee],
  "Cottonee",
);
new class WhimsicottSpecies extends Species {}(
  PokemonSpecies.Whimsicott,
  [PokemonVariety.Whimsicott],
  "Whimsicott",
);
new class PetililSpecies extends Species {}(
  PokemonSpecies.Petilil,
  [PokemonVariety.Petilil],
  "Petilil",
);
new class LilligantSpecies extends Species {}(
  PokemonSpecies.Lilligant,
  [PokemonVariety.Lilligant, PokemonVariety.LilligantHisui],
  "Lilligant",
);
new class BasculinSpecies extends Species {}(
  PokemonSpecies.Basculin,
  [PokemonVariety.BasculinRedStriped, PokemonVariety.BasculinBlueStriped, PokemonVariety.BasculinWhiteStriped],
  "Basculin",
);
new class SandileSpecies extends Species {}(
  PokemonSpecies.Sandile,
  [PokemonVariety.Sandile],
  "Sandile",
);
new class KrokorokSpecies extends Species {}(
  PokemonSpecies.Krokorok,
  [PokemonVariety.Krokorok],
  "Krokorok",
);
new class KrookodileSpecies extends Species {}(
  PokemonSpecies.Krookodile,
  [PokemonVariety.Krookodile],
  "Krookodile",
);
new class DarumakaSpecies extends Species {}(
  PokemonSpecies.Darumaka,
  [PokemonVariety.Darumaka, PokemonVariety.DarumakaGalar],
  "Darumaka",
);
new class DarmanitanSpecies extends Species {}(
  PokemonSpecies.Darmanitan,
  [PokemonVariety.DarmanitanStandard, PokemonVariety.DarmanitanZen, PokemonVariety.DarmanitanGalarStandard, PokemonVariety.DarmanitanGalarZen],
  "Darmanitan",
);
new class MaractusSpecies extends Species {}(
  PokemonSpecies.Maractus,
  [PokemonVariety.Maractus],
  "Maractus",
);
new class DwebbleSpecies extends Species {}(
  PokemonSpecies.Dwebble,
  [PokemonVariety.Dwebble],
  "Dwebble",
);
new class CrustleSpecies extends Species {}(
  PokemonSpecies.Crustle,
  [PokemonVariety.Crustle],
  "Crustle",
);
new class ScraggySpecies extends Species {}(
  PokemonSpecies.Scraggy,
  [PokemonVariety.Scraggy],
  "Scraggy",
);
new class ScraftySpecies extends Species {}(
  PokemonSpecies.Scrafty,
  [PokemonVariety.Scrafty],
  "Scrafty",
);
new class SigilyphSpecies extends Species {}(
  PokemonSpecies.Sigilyph,
  [PokemonVariety.Sigilyph],
  "Sigilyph",
);
new class YamaskSpecies extends Species {}(
  PokemonSpecies.Yamask,
  [PokemonVariety.Yamask, PokemonVariety.YamaskGalar],
  "Yamask",
);
new class CofagrigusSpecies extends Species {}(
  PokemonSpecies.Cofagrigus,
  [PokemonVariety.Cofagrigus],
  "Cofagrigus",
);
new class TirtougaSpecies extends Species {}(
  PokemonSpecies.Tirtouga,
  [PokemonVariety.Tirtouga],
  "Tirtouga",
);
new class CarracostaSpecies extends Species {}(
  PokemonSpecies.Carracosta,
  [PokemonVariety.Carracosta],
  "Carracosta",
);
new class ArchenSpecies extends Species {}(
  PokemonSpecies.Archen,
  [PokemonVariety.Archen],
  "Archen",
);
new class ArcheopsSpecies extends Species {}(
  PokemonSpecies.Archeops,
  [PokemonVariety.Archeops],
  "Archeops",
);
new class TrubbishSpecies extends Species {}(
  PokemonSpecies.Trubbish,
  [PokemonVariety.Trubbish],
  "Trubbish",
);
new class GarbodorSpecies extends Species {}(
  PokemonSpecies.Garbodor,
  [PokemonVariety.Garbodor, PokemonVariety.GarbodorGmax],
  "Garbodor",
);
new class ZoruaSpecies extends Species {}(
  PokemonSpecies.Zorua,
  [PokemonVariety.Zorua, PokemonVariety.ZoruaHisui],
  "Zorua",
);
new class ZoroarkSpecies extends Species {}(
  PokemonSpecies.Zoroark,
  [PokemonVariety.Zoroark, PokemonVariety.ZoroarkHisui],
  "Zoroark",
);
new class MinccinoSpecies extends Species {}(
  PokemonSpecies.Minccino,
  [PokemonVariety.Minccino],
  "Minccino",
);
new class CinccinoSpecies extends Species {}(
  PokemonSpecies.Cinccino,
  [PokemonVariety.Cinccino],
  "Cinccino",
);
new class GothitaSpecies extends Species {}(
  PokemonSpecies.Gothita,
  [PokemonVariety.Gothita],
  "Gothita",
);
new class GothoritaSpecies extends Species {}(
  PokemonSpecies.Gothorita,
  [PokemonVariety.Gothorita],
  "Gothorita",
);
new class GothitelleSpecies extends Species {}(
  PokemonSpecies.Gothitelle,
  [PokemonVariety.Gothitelle],
  "Gothitelle",
);
new class SolosisSpecies extends Species {}(
  PokemonSpecies.Solosis,
  [PokemonVariety.Solosis],
  "Solosis",
);
new class DuosionSpecies extends Species {}(
  PokemonSpecies.Duosion,
  [PokemonVariety.Duosion],
  "Duosion",
);
new class ReuniclusSpecies extends Species {}(
  PokemonSpecies.Reuniclus,
  [PokemonVariety.Reuniclus],
  "Reuniclus",
);
new class DucklettSpecies extends Species {}(
  PokemonSpecies.Ducklett,
  [PokemonVariety.Ducklett],
  "Ducklett",
);
new class SwannaSpecies extends Species {}(
  PokemonSpecies.Swanna,
  [PokemonVariety.Swanna],
  "Swanna",
);
new class VanilliteSpecies extends Species {}(
  PokemonSpecies.Vanillite,
  [PokemonVariety.Vanillite],
  "Vanillite",
);
new class VanillishSpecies extends Species {}(
  PokemonSpecies.Vanillish,
  [PokemonVariety.Vanillish],
  "Vanillish",
);
new class VanilluxeSpecies extends Species {}(
  PokemonSpecies.Vanilluxe,
  [PokemonVariety.Vanilluxe],
  "Vanilluxe",
);
new class DeerlingSpecies extends Species {}(
  PokemonSpecies.Deerling,
  [PokemonVariety.Deerling],
  "Deerling",
);
new class SawsbuckSpecies extends Species {}(
  PokemonSpecies.Sawsbuck,
  [PokemonVariety.Sawsbuck],
  "Sawsbuck",
);
new class EmolgaSpecies extends Species {}(
  PokemonSpecies.Emolga,
  [PokemonVariety.Emolga],
  "Emolga",
);
new class KarrablastSpecies extends Species {}(
  PokemonSpecies.Karrablast,
  [PokemonVariety.Karrablast],
  "Karrablast",
);
new class EscavalierSpecies extends Species {}(
  PokemonSpecies.Escavalier,
  [PokemonVariety.Escavalier],
  "Escavalier",
);
new class FoongusSpecies extends Species {}(
  PokemonSpecies.Foongus,
  [PokemonVariety.Foongus],
  "Foongus",
);
new class AmoongussSpecies extends Species {}(
  PokemonSpecies.Amoonguss,
  [PokemonVariety.Amoonguss],
  "Amoonguss",
);
new class FrillishSpecies extends Species {}(
  PokemonSpecies.Frillish,
  [PokemonVariety.Frillish],
  "Frillish",
);
new class JellicentSpecies extends Species {}(
  PokemonSpecies.Jellicent,
  [PokemonVariety.Jellicent],
  "Jellicent",
);
new class AlomomolaSpecies extends Species {}(
  PokemonSpecies.Alomomola,
  [PokemonVariety.Alomomola],
  "Alomomola",
);
new class JoltikSpecies extends Species {}(
  PokemonSpecies.Joltik,
  [PokemonVariety.Joltik],
  "Joltik",
);
new class GalvantulaSpecies extends Species {}(
  PokemonSpecies.Galvantula,
  [PokemonVariety.Galvantula],
  "Galvantula",
);
new class FerroseedSpecies extends Species {}(
  PokemonSpecies.Ferroseed,
  [PokemonVariety.Ferroseed],
  "Ferroseed",
);
new class FerrothornSpecies extends Species {}(
  PokemonSpecies.Ferrothorn,
  [PokemonVariety.Ferrothorn],
  "Ferrothorn",
);
new class KlinkSpecies extends Species {}(
  PokemonSpecies.Klink,
  [PokemonVariety.Klink],
  "Klink",
);
new class KlangSpecies extends Species {}(
  PokemonSpecies.Klang,
  [PokemonVariety.Klang],
  "Klang",
);
new class KlinklangSpecies extends Species {}(
  PokemonSpecies.Klinklang,
  [PokemonVariety.Klinklang],
  "Klinklang",
);
new class TynamoSpecies extends Species {}(
  PokemonSpecies.Tynamo,
  [PokemonVariety.Tynamo],
  "Tynamo",
);
new class EelektrikSpecies extends Species {}(
  PokemonSpecies.Eelektrik,
  [PokemonVariety.Eelektrik],
  "Eelektrik",
);
new class EelektrossSpecies extends Species {}(
  PokemonSpecies.Eelektross,
  [PokemonVariety.Eelektross],
  "Eelektross",
);
new class ElgyemSpecies extends Species {}(
  PokemonSpecies.Elgyem,
  [PokemonVariety.Elgyem],
  "Elgyem",
);
new class BeheeyemSpecies extends Species {}(
  PokemonSpecies.Beheeyem,
  [PokemonVariety.Beheeyem],
  "Beheeyem",
);
new class LitwickSpecies extends Species {}(
  PokemonSpecies.Litwick,
  [PokemonVariety.Litwick],
  "Litwick",
);
new class LampentSpecies extends Species {}(
  PokemonSpecies.Lampent,
  [PokemonVariety.Lampent],
  "Lampent",
);
new class ChandelureSpecies extends Species {}(
  PokemonSpecies.Chandelure,
  [PokemonVariety.Chandelure],
  "Chandelure",
);
new class AxewSpecies extends Species {}(
  PokemonSpecies.Axew,
  [PokemonVariety.Axew],
  "Axew",
);
new class FraxureSpecies extends Species {}(
  PokemonSpecies.Fraxure,
  [PokemonVariety.Fraxure],
  "Fraxure",
);
new class HaxorusSpecies extends Species {}(
  PokemonSpecies.Haxorus,
  [PokemonVariety.Haxorus],
  "Haxorus",
);
new class CubchooSpecies extends Species {}(
  PokemonSpecies.Cubchoo,
  [PokemonVariety.Cubchoo],
  "Cubchoo",
);
new class BearticSpecies extends Species {}(
  PokemonSpecies.Beartic,
  [PokemonVariety.Beartic],
  "Beartic",
);
new class CryogonalSpecies extends Species {}(
  PokemonSpecies.Cryogonal,
  [PokemonVariety.Cryogonal],
  "Cryogonal",
);
new class ShelmetSpecies extends Species {}(
  PokemonSpecies.Shelmet,
  [PokemonVariety.Shelmet],
  "Shelmet",
);
new class AccelgorSpecies extends Species {}(
  PokemonSpecies.Accelgor,
  [PokemonVariety.Accelgor],
  "Accelgor",
);
new class StunfiskSpecies extends Species {}(
  PokemonSpecies.Stunfisk,
  [PokemonVariety.Stunfisk, PokemonVariety.StunfiskGalar],
  "Stunfisk",
);
new class MienfooSpecies extends Species {}(
  PokemonSpecies.Mienfoo,
  [PokemonVariety.Mienfoo],
  "Mienfoo",
);
new class MienshaoSpecies extends Species {}(
  PokemonSpecies.Mienshao,
  [PokemonVariety.Mienshao],
  "Mienshao",
);
new class DruddigonSpecies extends Species {}(
  PokemonSpecies.Druddigon,
  [PokemonVariety.Druddigon],
  "Druddigon",
);
new class GolettSpecies extends Species {}(
  PokemonSpecies.Golett,
  [PokemonVariety.Golett],
  "Golett",
);
new class GolurkSpecies extends Species {}(
  PokemonSpecies.Golurk,
  [PokemonVariety.Golurk],
  "Golurk",
);
new class PawniardSpecies extends Species {}(
  PokemonSpecies.Pawniard,
  [PokemonVariety.Pawniard],
  "Pawniard",
);
new class BisharpSpecies extends Species {}(
  PokemonSpecies.Bisharp,
  [PokemonVariety.Bisharp],
  "Bisharp",
);
new class BouffalantSpecies extends Species {}(
  PokemonSpecies.Bouffalant,
  [PokemonVariety.Bouffalant],
  "Bouffalant",
);
new class RuffletSpecies extends Species {}(
  PokemonSpecies.Rufflet,
  [PokemonVariety.Rufflet],
  "Rufflet",
);
new class BraviarySpecies extends Species {}(
  PokemonSpecies.Braviary,
  [PokemonVariety.Braviary, PokemonVariety.BraviaryHisui],
  "Braviary",
);
new class VullabySpecies extends Species {}(
  PokemonSpecies.Vullaby,
  [PokemonVariety.Vullaby],
  "Vullaby",
);
new class MandibuzzSpecies extends Species {}(
  PokemonSpecies.Mandibuzz,
  [PokemonVariety.Mandibuzz],
  "Mandibuzz",
);
new class HeatmorSpecies extends Species {}(
  PokemonSpecies.Heatmor,
  [PokemonVariety.Heatmor],
  "Heatmor",
);
new class DurantSpecies extends Species {}(
  PokemonSpecies.Durant,
  [PokemonVariety.Durant],
  "Durant",
);
new class DeinoSpecies extends Species {}(
  PokemonSpecies.Deino,
  [PokemonVariety.Deino],
  "Deino",
);
new class ZweilousSpecies extends Species {}(
  PokemonSpecies.Zweilous,
  [PokemonVariety.Zweilous],
  "Zweilous",
);
new class HydreigonSpecies extends Species {}(
  PokemonSpecies.Hydreigon,
  [PokemonVariety.Hydreigon],
  "Hydreigon",
);
new class LarvestaSpecies extends Species {}(
  PokemonSpecies.Larvesta,
  [PokemonVariety.Larvesta],
  "Larvesta",
);
new class VolcaronaSpecies extends Species {}(
  PokemonSpecies.Volcarona,
  [PokemonVariety.Volcarona],
  "Volcarona",
);
new class CobalionSpecies extends Species {}(
  PokemonSpecies.Cobalion,
  [PokemonVariety.Cobalion],
  "Cobalion",
);
new class TerrakionSpecies extends Species {}(
  PokemonSpecies.Terrakion,
  [PokemonVariety.Terrakion],
  "Terrakion",
);
new class VirizionSpecies extends Species {}(
  PokemonSpecies.Virizion,
  [PokemonVariety.Virizion],
  "Virizion",
);
new class TornadusSpecies extends Species {}(
  PokemonSpecies.Tornadus,
  [PokemonVariety.TornadusIncarnate, PokemonVariety.TornadusTherian],
  "Tornadus",
);
new class ThundurusSpecies extends Species {}(
  PokemonSpecies.Thundurus,
  [PokemonVariety.ThundurusIncarnate, PokemonVariety.ThundurusTherian],
  "Thundurus",
);
new class ReshiramSpecies extends Species {}(
  PokemonSpecies.Reshiram,
  [PokemonVariety.Reshiram],
  "Reshiram",
);
new class ZekromSpecies extends Species {}(
  PokemonSpecies.Zekrom,
  [PokemonVariety.Zekrom],
  "Zekrom",
);
new class LandorusSpecies extends Species {}(
  PokemonSpecies.Landorus,
  [PokemonVariety.LandorusIncarnate, PokemonVariety.LandorusTherian],
  "Landorus",
);
new class KyuremSpecies extends Species {}(
  PokemonSpecies.Kyurem,
  [PokemonVariety.Kyurem, PokemonVariety.KyuremBlack, PokemonVariety.KyuremWhite],
  "Kyurem",
);
new class KeldeoSpecies extends Species {}(
  PokemonSpecies.Keldeo,
  [PokemonVariety.KeldeoOrdinary, PokemonVariety.KeldeoResolute],
  "Keldeo",
);
new class MeloettaSpecies extends Species {}(
  PokemonSpecies.Meloetta,
  [PokemonVariety.MeloettaAria, PokemonVariety.MeloettaPirouette],
  "Meloetta",
);
new class GenesectSpecies extends Species {}(
  PokemonSpecies.Genesect,
  [PokemonVariety.Genesect],
  "Genesect",
);
new class ChespinSpecies extends Species {}(
  PokemonSpecies.Chespin,
  [PokemonVariety.Chespin],
  "Chespin",
);
new class QuilladinSpecies extends Species {}(
  PokemonSpecies.Quilladin,
  [PokemonVariety.Quilladin],
  "Quilladin",
);
new class ChesnaughtSpecies extends Species {}(
  PokemonSpecies.Chesnaught,
  [PokemonVariety.Chesnaught],
  "Chesnaught",
);
new class FennekinSpecies extends Species {}(
  PokemonSpecies.Fennekin,
  [PokemonVariety.Fennekin],
  "Fennekin",
);
new class BraixenSpecies extends Species {}(
  PokemonSpecies.Braixen,
  [PokemonVariety.Braixen],
  "Braixen",
);
new class DelphoxSpecies extends Species {}(
  PokemonSpecies.Delphox,
  [PokemonVariety.Delphox],
  "Delphox",
);
new class FroakieSpecies extends Species {}(
  PokemonSpecies.Froakie,
  [PokemonVariety.Froakie],
  "Froakie",
);
new class FrogadierSpecies extends Species {}(
  PokemonSpecies.Frogadier,
  [PokemonVariety.Frogadier],
  "Frogadier",
);
new class GreninjaSpecies extends Species {}(
  PokemonSpecies.Greninja,
  [PokemonVariety.Greninja, PokemonVariety.GreninjaBattleBond, PokemonVariety.GreninjaAsh],
  "Greninja",
);
new class BunnelbySpecies extends Species {}(
  PokemonSpecies.Bunnelby,
  [PokemonVariety.Bunnelby],
  "Bunnelby",
);
new class DiggersbySpecies extends Species {}(
  PokemonSpecies.Diggersby,
  [PokemonVariety.Diggersby],
  "Diggersby",
);
new class FletchlingSpecies extends Species {}(
  PokemonSpecies.Fletchling,
  [PokemonVariety.Fletchling],
  "Fletchling",
);
new class FletchinderSpecies extends Species {}(
  PokemonSpecies.Fletchinder,
  [PokemonVariety.Fletchinder],
  "Fletchinder",
);
new class TalonflameSpecies extends Species {}(
  PokemonSpecies.Talonflame,
  [PokemonVariety.Talonflame],
  "Talonflame",
);
new class ScatterbugSpecies extends Species {}(
  PokemonSpecies.Scatterbug,
  [PokemonVariety.Scatterbug],
  "Scatterbug",
);
new class SpewpaSpecies extends Species {}(
  PokemonSpecies.Spewpa,
  [PokemonVariety.Spewpa],
  "Spewpa",
);
new class VivillonSpecies extends Species {}(
  PokemonSpecies.Vivillon,
  [PokemonVariety.Vivillon],
  "Vivillon",
);
new class LitleoSpecies extends Species {}(
  PokemonSpecies.Litleo,
  [PokemonVariety.Litleo],
  "Litleo",
);
new class PyroarSpecies extends Species {}(
  PokemonSpecies.Pyroar,
  [PokemonVariety.Pyroar],
  "Pyroar",
);
new class FlabebeSpecies extends Species {}(
  PokemonSpecies.Flabebe,
  [PokemonVariety.Flabebe],
  "Flabébé",
);
new class FloetteSpecies extends Species {}(
  PokemonSpecies.Floette,
  [PokemonVariety.Floette, PokemonVariety.FloetteEternal],
  "Floette",
);
new class FlorgesSpecies extends Species {}(
  PokemonSpecies.Florges,
  [PokemonVariety.Florges],
  "Florges",
);
new class SkiddoSpecies extends Species {}(
  PokemonSpecies.Skiddo,
  [PokemonVariety.Skiddo],
  "Skiddo",
);
new class GogoatSpecies extends Species {}(
  PokemonSpecies.Gogoat,
  [PokemonVariety.Gogoat],
  "Gogoat",
);
new class PanchamSpecies extends Species {}(
  PokemonSpecies.Pancham,
  [PokemonVariety.Pancham],
  "Pancham",
);
new class PangoroSpecies extends Species {}(
  PokemonSpecies.Pangoro,
  [PokemonVariety.Pangoro],
  "Pangoro",
);
new class FurfrouSpecies extends Species {}(
  PokemonSpecies.Furfrou,
  [PokemonVariety.Furfrou],
  "Furfrou",
);
new class EspurrSpecies extends Species {}(
  PokemonSpecies.Espurr,
  [PokemonVariety.Espurr],
  "Espurr",
);
new class MeowsticSpecies extends Species {}(
  PokemonSpecies.Meowstic,
  [PokemonVariety.MeowsticMale, PokemonVariety.MeowsticFemale],
  "Meowstic",
);
new class HonedgeSpecies extends Species {}(
  PokemonSpecies.Honedge,
  [PokemonVariety.Honedge],
  "Honedge",
);
new class DoubladeSpecies extends Species {}(
  PokemonSpecies.Doublade,
  [PokemonVariety.Doublade],
  "Doublade",
);
new class AegislashSpecies extends Species {}(
  PokemonSpecies.Aegislash,
  [PokemonVariety.AegislashShield, PokemonVariety.AegislashBlade],
  "Aegislash",
);
new class SpritzeeSpecies extends Species {}(
  PokemonSpecies.Spritzee,
  [PokemonVariety.Spritzee],
  "Spritzee",
);
new class AromatisseSpecies extends Species {}(
  PokemonSpecies.Aromatisse,
  [PokemonVariety.Aromatisse],
  "Aromatisse",
);
new class SwirlixSpecies extends Species {}(
  PokemonSpecies.Swirlix,
  [PokemonVariety.Swirlix],
  "Swirlix",
);
new class SlurpuffSpecies extends Species {}(
  PokemonSpecies.Slurpuff,
  [PokemonVariety.Slurpuff],
  "Slurpuff",
);
new class InkaySpecies extends Species {}(
  PokemonSpecies.Inkay,
  [PokemonVariety.Inkay],
  "Inkay",
);
new class MalamarSpecies extends Species {}(
  PokemonSpecies.Malamar,
  [PokemonVariety.Malamar],
  "Malamar",
);
new class BinacleSpecies extends Species {}(
  PokemonSpecies.Binacle,
  [PokemonVariety.Binacle],
  "Binacle",
);
new class BarbaracleSpecies extends Species {}(
  PokemonSpecies.Barbaracle,
  [PokemonVariety.Barbaracle],
  "Barbaracle",
);
new class SkrelpSpecies extends Species {}(
  PokemonSpecies.Skrelp,
  [PokemonVariety.Skrelp],
  "Skrelp",
);
new class DragalgeSpecies extends Species {}(
  PokemonSpecies.Dragalge,
  [PokemonVariety.Dragalge],
  "Dragalge",
);
new class ClauncherSpecies extends Species {}(
  PokemonSpecies.Clauncher,
  [PokemonVariety.Clauncher],
  "Clauncher",
);
new class ClawitzerSpecies extends Species {}(
  PokemonSpecies.Clawitzer,
  [PokemonVariety.Clawitzer],
  "Clawitzer",
);
new class HelioptileSpecies extends Species {}(
  PokemonSpecies.Helioptile,
  [PokemonVariety.Helioptile],
  "Helioptile",
);
new class HelioliskSpecies extends Species {}(
  PokemonSpecies.Heliolisk,
  [PokemonVariety.Heliolisk],
  "Heliolisk",
);
new class TyruntSpecies extends Species {}(
  PokemonSpecies.Tyrunt,
  [PokemonVariety.Tyrunt],
  "Tyrunt",
);
new class TyrantrumSpecies extends Species {}(
  PokemonSpecies.Tyrantrum,
  [PokemonVariety.Tyrantrum],
  "Tyrantrum",
);
new class AmauraSpecies extends Species {}(
  PokemonSpecies.Amaura,
  [PokemonVariety.Amaura],
  "Amaura",
);
new class AurorusSpecies extends Species {}(
  PokemonSpecies.Aurorus,
  [PokemonVariety.Aurorus],
  "Aurorus",
);
new class SylveonSpecies extends Species {}(
  PokemonSpecies.Sylveon,
  [PokemonVariety.Sylveon],
  "Sylveon",
);
new class HawluchaSpecies extends Species {}(
  PokemonSpecies.Hawlucha,
  [PokemonVariety.Hawlucha],
  "Hawlucha",
);
new class DedenneSpecies extends Species {}(
  PokemonSpecies.Dedenne,
  [PokemonVariety.Dedenne],
  "Dedenne",
);
new class CarbinkSpecies extends Species {}(
  PokemonSpecies.Carbink,
  [PokemonVariety.Carbink],
  "Carbink",
);
new class GoomySpecies extends Species {}(
  PokemonSpecies.Goomy,
  [PokemonVariety.Goomy],
  "Goomy",
);
new class SliggooSpecies extends Species {}(
  PokemonSpecies.Sliggoo,
  [PokemonVariety.Sliggoo, PokemonVariety.SliggooHisui],
  "Sliggoo",
);
new class GoodraSpecies extends Species {}(
  PokemonSpecies.Goodra,
  [PokemonVariety.Goodra, PokemonVariety.GoodraHisui],
  "Goodra",
);
new class KlefkiSpecies extends Species {}(
  PokemonSpecies.Klefki,
  [PokemonVariety.Klefki],
  "Klefki",
);
new class PhantumpSpecies extends Species {}(
  PokemonSpecies.Phantump,
  [PokemonVariety.Phantump],
  "Phantump",
);
new class TrevenantSpecies extends Species {}(
  PokemonSpecies.Trevenant,
  [PokemonVariety.Trevenant],
  "Trevenant",
);
new class PumpkabooSpecies extends Species {}(
  PokemonSpecies.Pumpkaboo,
  [PokemonVariety.PumpkabooAverage, PokemonVariety.PumpkabooSmall, PokemonVariety.PumpkabooLarge, PokemonVariety.PumpkabooSuper],
  "Pumpkaboo",
);
new class GourgeistSpecies extends Species {}(
  PokemonSpecies.Gourgeist,
  [PokemonVariety.GourgeistAverage, PokemonVariety.GourgeistSmall, PokemonVariety.GourgeistLarge, PokemonVariety.GourgeistSuper],
  "Gourgeist",
);
new class BergmiteSpecies extends Species {}(
  PokemonSpecies.Bergmite,
  [PokemonVariety.Bergmite],
  "Bergmite",
);
new class AvaluggSpecies extends Species {}(
  PokemonSpecies.Avalugg,
  [PokemonVariety.Avalugg, PokemonVariety.AvaluggHisui],
  "Avalugg",
);
new class NoibatSpecies extends Species {}(
  PokemonSpecies.Noibat,
  [PokemonVariety.Noibat],
  "Noibat",
);
new class NoivernSpecies extends Species {}(
  PokemonSpecies.Noivern,
  [PokemonVariety.Noivern],
  "Noivern",
);
new class XerneasSpecies extends Species {}(
  PokemonSpecies.Xerneas,
  [PokemonVariety.Xerneas],
  "Xerneas",
);
new class YveltalSpecies extends Species {}(
  PokemonSpecies.Yveltal,
  [PokemonVariety.Yveltal],
  "Yveltal",
);
new class ZygardeSpecies extends Species {}(
  PokemonSpecies.Zygarde,
  [PokemonVariety.Zygarde50, PokemonVariety.Zygarde10PowerConstruct, PokemonVariety.Zygarde50PowerConstruct, PokemonVariety.ZygardeComplete, PokemonVariety.Zygarde10],
  "Zygarde",
);
new class DiancieSpecies extends Species {}(
  PokemonSpecies.Diancie,
  [PokemonVariety.Diancie, PokemonVariety.DiancieMega],
  "Diancie",
);
new class HoopaSpecies extends Species {}(
  PokemonSpecies.Hoopa,
  [PokemonVariety.Hoopa, PokemonVariety.HoopaUnbound],
  "Hoopa",
);
new class VolcanionSpecies extends Species {}(
  PokemonSpecies.Volcanion,
  [PokemonVariety.Volcanion],
  "Volcanion",
);
new class RowletSpecies extends Species {}(
  PokemonSpecies.Rowlet,
  [PokemonVariety.Rowlet],
  "Rowlet",
);
new class DartrixSpecies extends Species {}(
  PokemonSpecies.Dartrix,
  [PokemonVariety.Dartrix],
  "Dartrix",
);
new class DecidueyeSpecies extends Species {}(
  PokemonSpecies.Decidueye,
  [PokemonVariety.Decidueye, PokemonVariety.DecidueyeHisui],
  "Decidueye",
);
new class LittenSpecies extends Species {}(
  PokemonSpecies.Litten,
  [PokemonVariety.Litten],
  "Litten",
);
new class TorracatSpecies extends Species {}(
  PokemonSpecies.Torracat,
  [PokemonVariety.Torracat],
  "Torracat",
);
new class IncineroarSpecies extends Species {}(
  PokemonSpecies.Incineroar,
  [PokemonVariety.Incineroar],
  "Incineroar",
);
new class PopplioSpecies extends Species {}(
  PokemonSpecies.Popplio,
  [PokemonVariety.Popplio],
  "Popplio",
);
new class BrionneSpecies extends Species {}(
  PokemonSpecies.Brionne,
  [PokemonVariety.Brionne],
  "Brionne",
);
new class PrimarinaSpecies extends Species {}(
  PokemonSpecies.Primarina,
  [PokemonVariety.Primarina],
  "Primarina",
);
new class PikipekSpecies extends Species {}(
  PokemonSpecies.Pikipek,
  [PokemonVariety.Pikipek],
  "Pikipek",
);
new class TrumbeakSpecies extends Species {}(
  PokemonSpecies.Trumbeak,
  [PokemonVariety.Trumbeak],
  "Trumbeak",
);
new class ToucannonSpecies extends Species {}(
  PokemonSpecies.Toucannon,
  [PokemonVariety.Toucannon],
  "Toucannon",
);
new class YungoosSpecies extends Species {}(
  PokemonSpecies.Yungoos,
  [PokemonVariety.Yungoos],
  "Yungoos",
);
new class GumshoosSpecies extends Species {}(
  PokemonSpecies.Gumshoos,
  [PokemonVariety.Gumshoos, PokemonVariety.GumshoosTotem],
  "Gumshoos",
);
new class GrubbinSpecies extends Species {}(
  PokemonSpecies.Grubbin,
  [PokemonVariety.Grubbin],
  "Grubbin",
);
new class CharjabugSpecies extends Species {}(
  PokemonSpecies.Charjabug,
  [PokemonVariety.Charjabug],
  "Charjabug",
);
new class VikavoltSpecies extends Species {}(
  PokemonSpecies.Vikavolt,
  [PokemonVariety.Vikavolt, PokemonVariety.VikavoltTotem],
  "Vikavolt",
);
new class CrabrawlerSpecies extends Species {}(
  PokemonSpecies.Crabrawler,
  [PokemonVariety.Crabrawler],
  "Crabrawler",
);
new class CrabominableSpecies extends Species {}(
  PokemonSpecies.Crabominable,
  [PokemonVariety.Crabominable],
  "Crabominable",
);
new class OricorioSpecies extends Species {}(
  PokemonSpecies.Oricorio,
  [PokemonVariety.OricorioBaile, PokemonVariety.OricorioPomPom, PokemonVariety.OricorioPau, PokemonVariety.OricorioSensu],
  "Oricorio",
);
new class CutieflySpecies extends Species {}(
  PokemonSpecies.Cutiefly,
  [PokemonVariety.Cutiefly],
  "Cutiefly",
);
new class RibombeeSpecies extends Species {}(
  PokemonSpecies.Ribombee,
  [PokemonVariety.Ribombee, PokemonVariety.RibombeeTotem],
  "Ribombee",
);
new class RockruffSpecies extends Species {}(
  PokemonSpecies.Rockruff,
  [PokemonVariety.Rockruff, PokemonVariety.RockruffOwnTempo],
  "Rockruff",
);
new class LycanrocSpecies extends Species {}(
  PokemonSpecies.Lycanroc,
  [PokemonVariety.LycanrocMidday, PokemonVariety.LycanrocMidnight, PokemonVariety.LycanrocDusk],
  "Lycanroc",
);
new class WishiwashiSpecies extends Species {}(
  PokemonSpecies.Wishiwashi,
  [PokemonVariety.WishiwashiSolo, PokemonVariety.WishiwashiSchool],
  "Wishiwashi",
);
new class MareanieSpecies extends Species {}(
  PokemonSpecies.Mareanie,
  [PokemonVariety.Mareanie],
  "Mareanie",
);
new class ToxapexSpecies extends Species {}(
  PokemonSpecies.Toxapex,
  [PokemonVariety.Toxapex],
  "Toxapex",
);
new class MudbraySpecies extends Species {}(
  PokemonSpecies.Mudbray,
  [PokemonVariety.Mudbray],
  "Mudbray",
);
new class MudsdaleSpecies extends Species {}(
  PokemonSpecies.Mudsdale,
  [PokemonVariety.Mudsdale],
  "Mudsdale",
);
new class DewpiderSpecies extends Species {}(
  PokemonSpecies.Dewpider,
  [PokemonVariety.Dewpider],
  "Dewpider",
);
new class AraquanidSpecies extends Species {}(
  PokemonSpecies.Araquanid,
  [PokemonVariety.Araquanid, PokemonVariety.AraquanidTotem],
  "Araquanid",
);
new class FomantisSpecies extends Species {}(
  PokemonSpecies.Fomantis,
  [PokemonVariety.Fomantis],
  "Fomantis",
);
new class LurantisSpecies extends Species {}(
  PokemonSpecies.Lurantis,
  [PokemonVariety.Lurantis, PokemonVariety.LurantisTotem],
  "Lurantis",
);
new class MorelullSpecies extends Species {}(
  PokemonSpecies.Morelull,
  [PokemonVariety.Morelull],
  "Morelull",
);
new class ShiinoticSpecies extends Species {}(
  PokemonSpecies.Shiinotic,
  [PokemonVariety.Shiinotic],
  "Shiinotic",
);
new class SalanditSpecies extends Species {}(
  PokemonSpecies.Salandit,
  [PokemonVariety.Salandit],
  "Salandit",
);
new class SalazzleSpecies extends Species {}(
  PokemonSpecies.Salazzle,
  [PokemonVariety.Salazzle, PokemonVariety.SalazzleTotem],
  "Salazzle",
);
new class StuffulSpecies extends Species {}(
  PokemonSpecies.Stufful,
  [PokemonVariety.Stufful],
  "Stufful",
);
new class BewearSpecies extends Species {}(
  PokemonSpecies.Bewear,
  [PokemonVariety.Bewear],
  "Bewear",
);
new class BounsweetSpecies extends Species {}(
  PokemonSpecies.Bounsweet,
  [PokemonVariety.Bounsweet],
  "Bounsweet",
);
new class SteeneeSpecies extends Species {}(
  PokemonSpecies.Steenee,
  [PokemonVariety.Steenee],
  "Steenee",
);
new class TsareenaSpecies extends Species {}(
  PokemonSpecies.Tsareena,
  [PokemonVariety.Tsareena],
  "Tsareena",
);
new class ComfeySpecies extends Species {}(
  PokemonSpecies.Comfey,
  [PokemonVariety.Comfey],
  "Comfey",
);
new class OranguruSpecies extends Species {}(
  PokemonSpecies.Oranguru,
  [PokemonVariety.Oranguru],
  "Oranguru",
);
new class PassimianSpecies extends Species {}(
  PokemonSpecies.Passimian,
  [PokemonVariety.Passimian],
  "Passimian",
);
new class WimpodSpecies extends Species {}(
  PokemonSpecies.Wimpod,
  [PokemonVariety.Wimpod],
  "Wimpod",
);
new class GolisopodSpecies extends Species {}(
  PokemonSpecies.Golisopod,
  [PokemonVariety.Golisopod],
  "Golisopod",
);
new class SandygastSpecies extends Species {}(
  PokemonSpecies.Sandygast,
  [PokemonVariety.Sandygast],
  "Sandygast",
);
new class PalossandSpecies extends Species {}(
  PokemonSpecies.Palossand,
  [PokemonVariety.Palossand],
  "Palossand",
);
new class PyukumukuSpecies extends Species {}(
  PokemonSpecies.Pyukumuku,
  [PokemonVariety.Pyukumuku],
  "Pyukumuku",
);
new class TypeNullSpecies extends Species {}(
  PokemonSpecies.TypeNull,
  [PokemonVariety.TypeNull],
  "Type: Null",
);
new class SilvallySpecies extends Species {}(
  PokemonSpecies.Silvally,
  [PokemonVariety.Silvally],
  "Silvally",
);
new class MiniorSpecies extends Species {}(
  PokemonSpecies.Minior,
  [PokemonVariety.MiniorRedMeteor, PokemonVariety.MiniorOrangeMeteor, PokemonVariety.MiniorYellowMeteor, PokemonVariety.MiniorGreenMeteor, PokemonVariety.MiniorBlueMeteor, PokemonVariety.MiniorIndigoMeteor, PokemonVariety.MiniorVioletMeteor, PokemonVariety.MiniorRed, PokemonVariety.MiniorOrange, PokemonVariety.MiniorYellow, PokemonVariety.MiniorGreen, PokemonVariety.MiniorBlue, PokemonVariety.MiniorIndigo, PokemonVariety.MiniorViolet],
  "Minior",
);
new class KomalaSpecies extends Species {}(
  PokemonSpecies.Komala,
  [PokemonVariety.Komala],
  "Komala",
);
new class TurtonatorSpecies extends Species {}(
  PokemonSpecies.Turtonator,
  [PokemonVariety.Turtonator],
  "Turtonator",
);
new class TogedemaruSpecies extends Species {}(
  PokemonSpecies.Togedemaru,
  [PokemonVariety.Togedemaru, PokemonVariety.TogedemaruTotem],
  "Togedemaru",
);
new class MimikyuSpecies extends Species {}(
  PokemonSpecies.Mimikyu,
  [PokemonVariety.MimikyuDisguised, PokemonVariety.MimikyuBusted, PokemonVariety.MimikyuTotemDisguised, PokemonVariety.MimikyuTotemBusted],
  "Mimikyu",
);
new class BruxishSpecies extends Species {}(
  PokemonSpecies.Bruxish,
  [PokemonVariety.Bruxish],
  "Bruxish",
);
new class DrampaSpecies extends Species {}(
  PokemonSpecies.Drampa,
  [PokemonVariety.Drampa],
  "Drampa",
);
new class DhelmiseSpecies extends Species {}(
  PokemonSpecies.Dhelmise,
  [PokemonVariety.Dhelmise],
  "Dhelmise",
);
new class JangmoOSpecies extends Species {}(
  PokemonSpecies.JangmoO,
  [PokemonVariety.JangmoO],
  "Jangmo-o",
);
new class HakamoOSpecies extends Species {}(
  PokemonSpecies.HakamoO,
  [PokemonVariety.HakamoO],
  "Hakamo-o",
);
new class KommoOSpecies extends Species {}(
  PokemonSpecies.KommoO,
  [PokemonVariety.KommoO, PokemonVariety.KommoOTotem],
  "Kommo-o",
);
new class TapuKokoSpecies extends Species {}(
  PokemonSpecies.TapuKoko,
  [PokemonVariety.TapuKoko],
  "Tapu Koko",
);
new class TapuLeleSpecies extends Species {}(
  PokemonSpecies.TapuLele,
  [PokemonVariety.TapuLele],
  "Tapu Lele",
);
new class TapuBuluSpecies extends Species {}(
  PokemonSpecies.TapuBulu,
  [PokemonVariety.TapuBulu],
  "Tapu Bulu",
);
new class TapuFiniSpecies extends Species {}(
  PokemonSpecies.TapuFini,
  [PokemonVariety.TapuFini],
  "Tapu Fini",
);
new class CosmogSpecies extends Species {}(
  PokemonSpecies.Cosmog,
  [PokemonVariety.Cosmog],
  "Cosmog",
);
new class CosmoemSpecies extends Species {}(
  PokemonSpecies.Cosmoem,
  [PokemonVariety.Cosmoem],
  "Cosmoem",
);
new class SolgaleoSpecies extends Species {}(
  PokemonSpecies.Solgaleo,
  [PokemonVariety.Solgaleo],
  "Solgaleo",
);
new class LunalaSpecies extends Species {}(
  PokemonSpecies.Lunala,
  [PokemonVariety.Lunala],
  "Lunala",
);
new class NihilegoSpecies extends Species {}(
  PokemonSpecies.Nihilego,
  [PokemonVariety.Nihilego],
  "Nihilego",
);
new class BuzzwoleSpecies extends Species {}(
  PokemonSpecies.Buzzwole,
  [PokemonVariety.Buzzwole],
  "Buzzwole",
);
new class PheromosaSpecies extends Species {}(
  PokemonSpecies.Pheromosa,
  [PokemonVariety.Pheromosa],
  "Pheromosa",
);
new class XurkitreeSpecies extends Species {}(
  PokemonSpecies.Xurkitree,
  [PokemonVariety.Xurkitree],
  "Xurkitree",
);
new class CelesteelaSpecies extends Species {}(
  PokemonSpecies.Celesteela,
  [PokemonVariety.Celesteela],
  "Celesteela",
);
new class KartanaSpecies extends Species {}(
  PokemonSpecies.Kartana,
  [PokemonVariety.Kartana],
  "Kartana",
);
new class GuzzlordSpecies extends Species {}(
  PokemonSpecies.Guzzlord,
  [PokemonVariety.Guzzlord],
  "Guzzlord",
);
new class NecrozmaSpecies extends Species {}(
  PokemonSpecies.Necrozma,
  [PokemonVariety.Necrozma, PokemonVariety.NecrozmaDusk, PokemonVariety.NecrozmaDawn, PokemonVariety.NecrozmaUltra],
  "Necrozma",
);
new class MagearnaSpecies extends Species {}(
  PokemonSpecies.Magearna,
  [PokemonVariety.Magearna, PokemonVariety.MagearnaOriginal],
  "Magearna",
);
new class MarshadowSpecies extends Species {}(
  PokemonSpecies.Marshadow,
  [PokemonVariety.Marshadow],
  "Marshadow",
);
new class PoipoleSpecies extends Species {}(
  PokemonSpecies.Poipole,
  [PokemonVariety.Poipole],
  "Poipole",
);
new class NaganadelSpecies extends Species {}(
  PokemonSpecies.Naganadel,
  [PokemonVariety.Naganadel],
  "Naganadel",
);
new class StakatakaSpecies extends Species {}(
  PokemonSpecies.Stakataka,
  [PokemonVariety.Stakataka],
  "Stakataka",
);
new class BlacephalonSpecies extends Species {}(
  PokemonSpecies.Blacephalon,
  [PokemonVariety.Blacephalon],
  "Blacephalon",
);
new class ZeraoraSpecies extends Species {}(
  PokemonSpecies.Zeraora,
  [PokemonVariety.Zeraora],
  "Zeraora",
);
new class MeltanSpecies extends Species {}(
  PokemonSpecies.Meltan,
  [PokemonVariety.Meltan],
  "Meltan",
);
new class MelmetalSpecies extends Species {}(
  PokemonSpecies.Melmetal,
  [PokemonVariety.Melmetal, PokemonVariety.MelmetalGmax],
  "Melmetal",
);
new class GrookeySpecies extends Species {}(
  PokemonSpecies.Grookey,
  [PokemonVariety.Grookey],
  "Grookey",
);
new class ThwackeySpecies extends Species {}(
  PokemonSpecies.Thwackey,
  [PokemonVariety.Thwackey],
  "Thwackey",
);
new class RillaboomSpecies extends Species {}(
  PokemonSpecies.Rillaboom,
  [PokemonVariety.Rillaboom, PokemonVariety.RillaboomGmax],
  "Rillaboom",
);
new class ScorbunnySpecies extends Species {}(
  PokemonSpecies.Scorbunny,
  [PokemonVariety.Scorbunny],
  "Scorbunny",
);
new class RabootSpecies extends Species {}(
  PokemonSpecies.Raboot,
  [PokemonVariety.Raboot],
  "Raboot",
);
new class CinderaceSpecies extends Species {}(
  PokemonSpecies.Cinderace,
  [PokemonVariety.Cinderace, PokemonVariety.CinderaceGmax],
  "Cinderace",
);
new class SobbleSpecies extends Species {}(
  PokemonSpecies.Sobble,
  [PokemonVariety.Sobble],
  "Sobble",
);
new class DrizzileSpecies extends Species {}(
  PokemonSpecies.Drizzile,
  [PokemonVariety.Drizzile],
  "Drizzile",
);
new class InteleonSpecies extends Species {}(
  PokemonSpecies.Inteleon,
  [PokemonVariety.Inteleon, PokemonVariety.InteleonGmax],
  "Inteleon",
);
new class SkwovetSpecies extends Species {}(
  PokemonSpecies.Skwovet,
  [PokemonVariety.Skwovet],
  "Skwovet",
);
new class GreedentSpecies extends Species {}(
  PokemonSpecies.Greedent,
  [PokemonVariety.Greedent],
  "Greedent",
);
new class RookideeSpecies extends Species {}(
  PokemonSpecies.Rookidee,
  [PokemonVariety.Rookidee],
  "Rookidee",
);
new class CorvisquireSpecies extends Species {}(
  PokemonSpecies.Corvisquire,
  [PokemonVariety.Corvisquire],
  "Corvisquire",
);
new class CorviknightSpecies extends Species {}(
  PokemonSpecies.Corviknight,
  [PokemonVariety.Corviknight, PokemonVariety.CorviknightGmax],
  "Corviknight",
);
new class BlipbugSpecies extends Species {}(
  PokemonSpecies.Blipbug,
  [PokemonVariety.Blipbug],
  "Blipbug",
);
new class DottlerSpecies extends Species {}(
  PokemonSpecies.Dottler,
  [PokemonVariety.Dottler],
  "Dottler",
);
new class OrbeetleSpecies extends Species {}(
  PokemonSpecies.Orbeetle,
  [PokemonVariety.Orbeetle, PokemonVariety.OrbeetleGmax],
  "Orbeetle",
);
new class NickitSpecies extends Species {}(
  PokemonSpecies.Nickit,
  [PokemonVariety.Nickit],
  "Nickit",
);
new class ThievulSpecies extends Species {}(
  PokemonSpecies.Thievul,
  [PokemonVariety.Thievul],
  "Thievul",
);
new class GossifleurSpecies extends Species {}(
  PokemonSpecies.Gossifleur,
  [PokemonVariety.Gossifleur],
  "Gossifleur",
);
new class EldegossSpecies extends Species {}(
  PokemonSpecies.Eldegoss,
  [PokemonVariety.Eldegoss],
  "Eldegoss",
);
new class WoolooSpecies extends Species {}(
  PokemonSpecies.Wooloo,
  [PokemonVariety.Wooloo],
  "Wooloo",
);
new class DubwoolSpecies extends Species {}(
  PokemonSpecies.Dubwool,
  [PokemonVariety.Dubwool],
  "Dubwool",
);
new class ChewtleSpecies extends Species {}(
  PokemonSpecies.Chewtle,
  [PokemonVariety.Chewtle],
  "Chewtle",
);
new class DrednawSpecies extends Species {}(
  PokemonSpecies.Drednaw,
  [PokemonVariety.Drednaw, PokemonVariety.DrednawGmax],
  "Drednaw",
);
new class YamperSpecies extends Species {}(
  PokemonSpecies.Yamper,
  [PokemonVariety.Yamper],
  "Yamper",
);
new class BoltundSpecies extends Species {}(
  PokemonSpecies.Boltund,
  [PokemonVariety.Boltund],
  "Boltund",
);
new class RolycolySpecies extends Species {}(
  PokemonSpecies.Rolycoly,
  [PokemonVariety.Rolycoly],
  "Rolycoly",
);
new class CarkolSpecies extends Species {}(
  PokemonSpecies.Carkol,
  [PokemonVariety.Carkol],
  "Carkol",
);
new class CoalossalSpecies extends Species {}(
  PokemonSpecies.Coalossal,
  [PokemonVariety.Coalossal, PokemonVariety.CoalossalGmax],
  "Coalossal",
);
new class ApplinSpecies extends Species {}(
  PokemonSpecies.Applin,
  [PokemonVariety.Applin],
  "Applin",
);
new class FlappleSpecies extends Species {}(
  PokemonSpecies.Flapple,
  [PokemonVariety.Flapple, PokemonVariety.FlappleGmax],
  "Flapple",
);
new class AppletunSpecies extends Species {}(
  PokemonSpecies.Appletun,
  [PokemonVariety.Appletun, PokemonVariety.AppletunGmax],
  "Appletun",
);
new class SilicobraSpecies extends Species {}(
  PokemonSpecies.Silicobra,
  [PokemonVariety.Silicobra],
  "Silicobra",
);
new class SandacondaSpecies extends Species {}(
  PokemonSpecies.Sandaconda,
  [PokemonVariety.Sandaconda, PokemonVariety.SandacondaGmax],
  "Sandaconda",
);
new class CramorantSpecies extends Species {}(
  PokemonSpecies.Cramorant,
  [PokemonVariety.Cramorant, PokemonVariety.CramorantGulping, PokemonVariety.CramorantGorging],
  "Cramorant",
);
new class ArrokudaSpecies extends Species {}(
  PokemonSpecies.Arrokuda,
  [PokemonVariety.Arrokuda],
  "Arrokuda",
);
new class BarraskewdaSpecies extends Species {}(
  PokemonSpecies.Barraskewda,
  [PokemonVariety.Barraskewda],
  "Barraskewda",
);
new class ToxelSpecies extends Species {}(
  PokemonSpecies.Toxel,
  [PokemonVariety.Toxel],
  "Toxel",
);
new class ToxtricitySpecies extends Species {}(
  PokemonSpecies.Toxtricity,
  [PokemonVariety.ToxtricityAmped, PokemonVariety.ToxtricityLowKey, PokemonVariety.ToxtricityAmpedGmax, PokemonVariety.ToxtricityLowKeyGmax],
  "Toxtricity",
);
new class SizzlipedeSpecies extends Species {}(
  PokemonSpecies.Sizzlipede,
  [PokemonVariety.Sizzlipede],
  "Sizzlipede",
);
new class CentiskorchSpecies extends Species {}(
  PokemonSpecies.Centiskorch,
  [PokemonVariety.Centiskorch, PokemonVariety.CentiskorchGmax],
  "Centiskorch",
);
new class ClobbopusSpecies extends Species {}(
  PokemonSpecies.Clobbopus,
  [PokemonVariety.Clobbopus],
  "Clobbopus",
);
new class GrapploctSpecies extends Species {}(
  PokemonSpecies.Grapploct,
  [PokemonVariety.Grapploct],
  "Grapploct",
);
new class SinisteaSpecies extends Species {}(
  PokemonSpecies.Sinistea,
  [PokemonVariety.Sinistea],
  "Sinistea",
);
new class PolteageistSpecies extends Species {}(
  PokemonSpecies.Polteageist,
  [PokemonVariety.Polteageist],
  "Polteageist",
);
new class HatennaSpecies extends Species {}(
  PokemonSpecies.Hatenna,
  [PokemonVariety.Hatenna],
  "Hatenna",
);
new class HattremSpecies extends Species {}(
  PokemonSpecies.Hattrem,
  [PokemonVariety.Hattrem],
  "Hattrem",
);
new class HattereneSpecies extends Species {}(
  PokemonSpecies.Hatterene,
  [PokemonVariety.Hatterene, PokemonVariety.HattereneGmax],
  "Hatterene",
);
new class ImpidimpSpecies extends Species {}(
  PokemonSpecies.Impidimp,
  [PokemonVariety.Impidimp],
  "Impidimp",
);
new class MorgremSpecies extends Species {}(
  PokemonSpecies.Morgrem,
  [PokemonVariety.Morgrem],
  "Morgrem",
);
new class GrimmsnarlSpecies extends Species {}(
  PokemonSpecies.Grimmsnarl,
  [PokemonVariety.Grimmsnarl, PokemonVariety.GrimmsnarlGmax],
  "Grimmsnarl",
);
new class ObstagoonSpecies extends Species {}(
  PokemonSpecies.Obstagoon,
  [PokemonVariety.Obstagoon],
  "Obstagoon",
);
new class PerrserkerSpecies extends Species {}(
  PokemonSpecies.Perrserker,
  [PokemonVariety.Perrserker],
  "Perrserker",
);
new class CursolaSpecies extends Species {}(
  PokemonSpecies.Cursola,
  [PokemonVariety.Cursola],
  "Cursola",
);
new class SirfetchdSpecies extends Species {}(
  PokemonSpecies.Sirfetchd,
  [PokemonVariety.Sirfetchd],
  "Sirfetch’d",
);
new class MrRimeSpecies extends Species {}(
  PokemonSpecies.MrRime,
  [PokemonVariety.MrRime],
  "Mr. Rime",
);
new class RunerigusSpecies extends Species {}(
  PokemonSpecies.Runerigus,
  [PokemonVariety.Runerigus],
  "Runerigus",
);
new class MilcerySpecies extends Species {}(
  PokemonSpecies.Milcery,
  [PokemonVariety.Milcery],
  "Milcery",
);
new class AlcremieSpecies extends Species {}(
  PokemonSpecies.Alcremie,
  [PokemonVariety.Alcremie, PokemonVariety.AlcremieGmax],
  "Alcremie",
);
new class FalinksSpecies extends Species {}(
  PokemonSpecies.Falinks,
  [PokemonVariety.Falinks],
  "Falinks",
);
new class PincurchinSpecies extends Species {}(
  PokemonSpecies.Pincurchin,
  [PokemonVariety.Pincurchin],
  "Pincurchin",
);
new class SnomSpecies extends Species {}(
  PokemonSpecies.Snom,
  [PokemonVariety.Snom],
  "Snom",
);
new class FrosmothSpecies extends Species {}(
  PokemonSpecies.Frosmoth,
  [PokemonVariety.Frosmoth],
  "Frosmoth",
);
new class StonjournerSpecies extends Species {}(
  PokemonSpecies.Stonjourner,
  [PokemonVariety.Stonjourner],
  "Stonjourner",
);
new class EiscueSpecies extends Species {}(
  PokemonSpecies.Eiscue,
  [PokemonVariety.EiscueIce, PokemonVariety.EiscueNoice],
  "Eiscue",
);
new class IndeedeeSpecies extends Species {}(
  PokemonSpecies.Indeedee,
  [PokemonVariety.IndeedeeMale, PokemonVariety.IndeedeeFemale],
  "Indeedee",
);
new class MorpekoSpecies extends Species {}(
  PokemonSpecies.Morpeko,
  [PokemonVariety.MorpekoFullBelly, PokemonVariety.MorpekoHangry],
  "Morpeko",
);
new class CufantSpecies extends Species {}(
  PokemonSpecies.Cufant,
  [PokemonVariety.Cufant],
  "Cufant",
);
new class CopperajahSpecies extends Species {}(
  PokemonSpecies.Copperajah,
  [PokemonVariety.Copperajah, PokemonVariety.CopperajahGmax],
  "Copperajah",
);
new class DracozoltSpecies extends Species {}(
  PokemonSpecies.Dracozolt,
  [PokemonVariety.Dracozolt],
  "Dracozolt",
);
new class ArctozoltSpecies extends Species {}(
  PokemonSpecies.Arctozolt,
  [PokemonVariety.Arctozolt],
  "Arctozolt",
);
new class DracovishSpecies extends Species {}(
  PokemonSpecies.Dracovish,
  [PokemonVariety.Dracovish],
  "Dracovish",
);
new class ArctovishSpecies extends Species {}(
  PokemonSpecies.Arctovish,
  [PokemonVariety.Arctovish],
  "Arctovish",
);
new class DuraludonSpecies extends Species {}(
  PokemonSpecies.Duraludon,
  [PokemonVariety.Duraludon, PokemonVariety.DuraludonGmax],
  "Duraludon",
);
new class DreepySpecies extends Species {}(
  PokemonSpecies.Dreepy,
  [PokemonVariety.Dreepy],
  "Dreepy",
);
new class DrakloakSpecies extends Species {}(
  PokemonSpecies.Drakloak,
  [PokemonVariety.Drakloak],
  "Drakloak",
);
new class DragapultSpecies extends Species {}(
  PokemonSpecies.Dragapult,
  [PokemonVariety.Dragapult],
  "Dragapult",
);
new class ZacianSpecies extends Species {}(
  PokemonSpecies.Zacian,
  [PokemonVariety.Zacian, PokemonVariety.ZacianCrowned],
  "Zacian",
);
new class ZamazentaSpecies extends Species {}(
  PokemonSpecies.Zamazenta,
  [PokemonVariety.Zamazenta, PokemonVariety.ZamazentaCrowned],
  "Zamazenta",
);
new class EternatusSpecies extends Species {}(
  PokemonSpecies.Eternatus,
  [PokemonVariety.Eternatus, PokemonVariety.EternatusEternamax],
  "Eternatus",
);
new class KubfuSpecies extends Species {}(
  PokemonSpecies.Kubfu,
  [PokemonVariety.Kubfu],
  "Kubfu",
);
new class UrshifuSpecies extends Species {}(
  PokemonSpecies.Urshifu,
  [PokemonVariety.UrshifuSingleStrike, PokemonVariety.UrshifuRapidStrike, PokemonVariety.UrshifuSingleStrikeGmax, PokemonVariety.UrshifuRapidStrikeGmax],
  "Urshifu",
);
new class ZarudeSpecies extends Species {}(
  PokemonSpecies.Zarude,
  [PokemonVariety.Zarude, PokemonVariety.ZarudeDada],
  "Zarude",
);
new class RegielekiSpecies extends Species {}(
  PokemonSpecies.Regieleki,
  [PokemonVariety.Regieleki],
  "Regieleki",
);
new class RegidragoSpecies extends Species {}(
  PokemonSpecies.Regidrago,
  [PokemonVariety.Regidrago],
  "Regidrago",
);
new class GlastrierSpecies extends Species {}(
  PokemonSpecies.Glastrier,
  [PokemonVariety.Glastrier],
  "Glastrier",
);
new class SpectrierSpecies extends Species {}(
  PokemonSpecies.Spectrier,
  [PokemonVariety.Spectrier],
  "Spectrier",
);
new class CalyrexSpecies extends Species {}(
  PokemonSpecies.Calyrex,
  [PokemonVariety.Calyrex, PokemonVariety.CalyrexIce, PokemonVariety.CalyrexShadow],
  "Calyrex",
);
new class WyrdeerSpecies extends Species {}(
  PokemonSpecies.Wyrdeer,
  [PokemonVariety.Wyrdeer],
  "Wyrdeer",
);
new class KleavorSpecies extends Species {}(
  PokemonSpecies.Kleavor,
  [PokemonVariety.Kleavor],
  "Kleavor",
);
new class UrsalunaSpecies extends Species {}(
  PokemonSpecies.Ursaluna,
  [PokemonVariety.Ursaluna, PokemonVariety.UrsalunaBloodmoon],
  "Ursaluna",
);
new class BasculegionSpecies extends Species {}(
  PokemonSpecies.Basculegion,
  [PokemonVariety.BasculegionMale, PokemonVariety.BasculegionFemale],
  "Basculegion",
);
new class SneaslerSpecies extends Species {}(
  PokemonSpecies.Sneasler,
  [PokemonVariety.Sneasler],
  "Sneasler",
);
new class OverqwilSpecies extends Species {}(
  PokemonSpecies.Overqwil,
  [PokemonVariety.Overqwil],
  "Overqwil",
);
new class EnamorusSpecies extends Species {}(
  PokemonSpecies.Enamorus,
  [PokemonVariety.EnamorusIncarnate, PokemonVariety.EnamorusTherian],
  "Enamorus",
);
new class SprigatitoSpecies extends Species {}(
  PokemonSpecies.Sprigatito,
  [PokemonVariety.Sprigatito],
  "Sprigatito",
);
new class FloragatoSpecies extends Species {}(
  PokemonSpecies.Floragato,
  [PokemonVariety.Floragato],
  "Floragato",
);
new class MeowscaradaSpecies extends Species {}(
  PokemonSpecies.Meowscarada,
  [PokemonVariety.Meowscarada],
  "Meowscarada",
);
new class FuecocoSpecies extends Species {}(
  PokemonSpecies.Fuecoco,
  [PokemonVariety.Fuecoco],
  "Fuecoco",
);
new class CrocalorSpecies extends Species {}(
  PokemonSpecies.Crocalor,
  [PokemonVariety.Crocalor],
  "Crocalor",
);
new class SkeledirgeSpecies extends Species {}(
  PokemonSpecies.Skeledirge,
  [PokemonVariety.Skeledirge],
  "Skeledirge",
);
new class QuaxlySpecies extends Species {}(
  PokemonSpecies.Quaxly,
  [PokemonVariety.Quaxly],
  "Quaxly",
);
new class QuaxwellSpecies extends Species {}(
  PokemonSpecies.Quaxwell,
  [PokemonVariety.Quaxwell],
  "Quaxwell",
);
new class QuaquavalSpecies extends Species {}(
  PokemonSpecies.Quaquaval,
  [PokemonVariety.Quaquaval],
  "Quaquaval",
);
new class LechonkSpecies extends Species {}(
  PokemonSpecies.Lechonk,
  [PokemonVariety.Lechonk],
  "Lechonk",
);
new class OinkologneSpecies extends Species {}(
  PokemonSpecies.Oinkologne,
  [PokemonVariety.Oinkologne, PokemonVariety.OinkologneFemale],
  "Oinkologne",
);
new class TarountulaSpecies extends Species {}(
  PokemonSpecies.Tarountula,
  [PokemonVariety.Tarountula],
  "Tarountula",
);
new class SpidopsSpecies extends Species {}(
  PokemonSpecies.Spidops,
  [PokemonVariety.Spidops],
  "Spidops",
);
new class NymbleSpecies extends Species {}(
  PokemonSpecies.Nymble,
  [PokemonVariety.Nymble],
  "Nymble",
);
new class LokixSpecies extends Species {}(
  PokemonSpecies.Lokix,
  [PokemonVariety.Lokix],
  "Lokix",
);
new class PawmiSpecies extends Species {}(
  PokemonSpecies.Pawmi,
  [PokemonVariety.Pawmi],
  "Pawmi",
);
new class PawmoSpecies extends Species {}(
  PokemonSpecies.Pawmo,
  [PokemonVariety.Pawmo],
  "Pawmo",
);
new class PawmotSpecies extends Species {}(
  PokemonSpecies.Pawmot,
  [PokemonVariety.Pawmot],
  "Pawmot",
);
new class TandemausSpecies extends Species {}(
  PokemonSpecies.Tandemaus,
  [PokemonVariety.Tandemaus],
  "Tandemaus",
);
new class MausholdSpecies extends Species {}(
  PokemonSpecies.Maushold,
  [PokemonVariety.Maushold, PokemonVariety.MausholdFamilyOfThree],
  "Maushold",
);
new class FidoughSpecies extends Species {}(
  PokemonSpecies.Fidough,
  [PokemonVariety.Fidough],
  "Fidough",
);
new class DachsbunSpecies extends Species {}(
  PokemonSpecies.Dachsbun,
  [PokemonVariety.Dachsbun],
  "Dachsbun",
);
new class SmolivSpecies extends Species {}(
  PokemonSpecies.Smoliv,
  [PokemonVariety.Smoliv],
  "Smoliv",
);
new class DollivSpecies extends Species {}(
  PokemonSpecies.Dolliv,
  [PokemonVariety.Dolliv],
  "Dolliv",
);
new class ArbolivaSpecies extends Species {}(
  PokemonSpecies.Arboliva,
  [PokemonVariety.Arboliva],
  "Arboliva",
);
new class SquawkabillySpecies extends Species {}(
  PokemonSpecies.Squawkabilly,
  [PokemonVariety.Squawkabilly, PokemonVariety.SquawkabillyBluePlumage, PokemonVariety.SquawkabillyYellowPlumage, PokemonVariety.SquawkabillyWhitePlumage],
  "Squawkabilly",
);
new class NacliSpecies extends Species {}(
  PokemonSpecies.Nacli,
  [PokemonVariety.Nacli],
  "Nacli",
);
new class NaclstackSpecies extends Species {}(
  PokemonSpecies.Naclstack,
  [PokemonVariety.Naclstack],
  "Naclstack",
);
new class GarganaclSpecies extends Species {}(
  PokemonSpecies.Garganacl,
  [PokemonVariety.Garganacl],
  "Garganacl",
);
new class CharcadetSpecies extends Species {}(
  PokemonSpecies.Charcadet,
  [PokemonVariety.Charcadet],
  "Charcadet",
);
new class ArmarougeSpecies extends Species {}(
  PokemonSpecies.Armarouge,
  [PokemonVariety.Armarouge],
  "Armarouge",
);
new class CeruledgeSpecies extends Species {}(
  PokemonSpecies.Ceruledge,
  [PokemonVariety.Ceruledge],
  "Ceruledge",
);
new class TadbulbSpecies extends Species {}(
  PokemonSpecies.Tadbulb,
  [PokemonVariety.Tadbulb],
  "Tadbulb",
);
new class BelliboltSpecies extends Species {}(
  PokemonSpecies.Bellibolt,
  [PokemonVariety.Bellibolt],
  "Bellibolt",
);
new class WattrelSpecies extends Species {}(
  PokemonSpecies.Wattrel,
  [PokemonVariety.Wattrel],
  "Wattrel",
);
new class KilowattrelSpecies extends Species {}(
  PokemonSpecies.Kilowattrel,
  [PokemonVariety.Kilowattrel],
  "Kilowattrel",
);
new class MaschiffSpecies extends Species {}(
  PokemonSpecies.Maschiff,
  [PokemonVariety.Maschiff],
  "Maschiff",
);
new class MabosstiffSpecies extends Species {}(
  PokemonSpecies.Mabosstiff,
  [PokemonVariety.Mabosstiff],
  "Mabosstiff",
);
new class ShroodleSpecies extends Species {}(
  PokemonSpecies.Shroodle,
  [PokemonVariety.Shroodle],
  "Shroodle",
);
new class GrafaiaiSpecies extends Species {}(
  PokemonSpecies.Grafaiai,
  [PokemonVariety.Grafaiai],
  "Grafaiai",
);
new class BramblinSpecies extends Species {}(
  PokemonSpecies.Bramblin,
  [PokemonVariety.Bramblin],
  "Bramblin",
);
new class BrambleghastSpecies extends Species {}(
  PokemonSpecies.Brambleghast,
  [PokemonVariety.Brambleghast],
  "Brambleghast",
);
new class ToedscoolSpecies extends Species {}(
  PokemonSpecies.Toedscool,
  [PokemonVariety.Toedscool],
  "Toedscool",
);
new class ToedscruelSpecies extends Species {}(
  PokemonSpecies.Toedscruel,
  [PokemonVariety.Toedscruel],
  "Toedscruel",
);
new class KlawfSpecies extends Species {}(
  PokemonSpecies.Klawf,
  [PokemonVariety.Klawf],
  "Klawf",
);
new class CapsakidSpecies extends Species {}(
  PokemonSpecies.Capsakid,
  [PokemonVariety.Capsakid],
  "Capsakid",
);
new class ScovillainSpecies extends Species {}(
  PokemonSpecies.Scovillain,
  [PokemonVariety.Scovillain],
  "Scovillain",
);
new class RellorSpecies extends Species {}(
  PokemonSpecies.Rellor,
  [PokemonVariety.Rellor],
  "Rellor",
);
new class RabscaSpecies extends Species {}(
  PokemonSpecies.Rabsca,
  [PokemonVariety.Rabsca],
  "Rabsca",
);
new class FlittleSpecies extends Species {}(
  PokemonSpecies.Flittle,
  [PokemonVariety.Flittle],
  "Flittle",
);
new class EspathraSpecies extends Species {}(
  PokemonSpecies.Espathra,
  [PokemonVariety.Espathra],
  "Espathra",
);
new class TinkatinkSpecies extends Species {}(
  PokemonSpecies.Tinkatink,
  [PokemonVariety.Tinkatink],
  "Tinkatink",
);
new class TinkatuffSpecies extends Species {}(
  PokemonSpecies.Tinkatuff,
  [PokemonVariety.Tinkatuff],
  "Tinkatuff",
);
new class TinkatonSpecies extends Species {}(
  PokemonSpecies.Tinkaton,
  [PokemonVariety.Tinkaton],
  "Tinkaton",
);
new class WiglettSpecies extends Species {}(
  PokemonSpecies.Wiglett,
  [PokemonVariety.Wiglett],
  "Wiglett",
);
new class WugtrioSpecies extends Species {}(
  PokemonSpecies.Wugtrio,
  [PokemonVariety.Wugtrio],
  "Wugtrio",
);
new class BombirdierSpecies extends Species {}(
  PokemonSpecies.Bombirdier,
  [PokemonVariety.Bombirdier],
  "Bombirdier",
);
new class FinizenSpecies extends Species {}(
  PokemonSpecies.Finizen,
  [PokemonVariety.Finizen],
  "Finizen",
);
new class PalafinSpecies extends Species {}(
  PokemonSpecies.Palafin,
  [PokemonVariety.Palafin, PokemonVariety.PalafinHero],
  "Palafin",
);
new class VaroomSpecies extends Species {}(
  PokemonSpecies.Varoom,
  [PokemonVariety.Varoom],
  "Varoom",
);
new class RevavroomSpecies extends Species {}(
  PokemonSpecies.Revavroom,
  [PokemonVariety.Revavroom],
  "Revavroom",
);
new class CyclizarSpecies extends Species {}(
  PokemonSpecies.Cyclizar,
  [PokemonVariety.Cyclizar],
  "Cyclizar",
);
new class OrthwormSpecies extends Species {}(
  PokemonSpecies.Orthworm,
  [PokemonVariety.Orthworm],
  "Orthworm",
);
new class GlimmetSpecies extends Species {}(
  PokemonSpecies.Glimmet,
  [PokemonVariety.Glimmet],
  "Glimmet",
);
new class GlimmoraSpecies extends Species {}(
  PokemonSpecies.Glimmora,
  [PokemonVariety.Glimmora],
  "Glimmora",
);
new class GreavardSpecies extends Species {}(
  PokemonSpecies.Greavard,
  [PokemonVariety.Greavard],
  "Greavard",
);
new class HoundstoneSpecies extends Species {}(
  PokemonSpecies.Houndstone,
  [PokemonVariety.Houndstone],
  "Houndstone",
);
new class FlamigoSpecies extends Species {}(
  PokemonSpecies.Flamigo,
  [PokemonVariety.Flamigo],
  "Flamigo",
);
new class CetoddleSpecies extends Species {}(
  PokemonSpecies.Cetoddle,
  [PokemonVariety.Cetoddle],
  "Cetoddle",
);
new class CetitanSpecies extends Species {}(
  PokemonSpecies.Cetitan,
  [PokemonVariety.Cetitan],
  "Cetitan",
);
new class VeluzaSpecies extends Species {}(
  PokemonSpecies.Veluza,
  [PokemonVariety.Veluza],
  "Veluza",
);
new class DondozoSpecies extends Species {}(
  PokemonSpecies.Dondozo,
  [PokemonVariety.Dondozo],
  "Dondozo",
);
new class TatsugiriSpecies extends Species {}(
  PokemonSpecies.Tatsugiri,
  [PokemonVariety.Tatsugiri, PokemonVariety.TatsugiriDroopy, PokemonVariety.TatsugiriStretchy],
  "Tatsugiri",
);
new class AnnihilapeSpecies extends Species {}(
  PokemonSpecies.Annihilape,
  [PokemonVariety.Annihilape],
  "Annihilape",
);
new class ClodsireSpecies extends Species {}(
  PokemonSpecies.Clodsire,
  [PokemonVariety.Clodsire],
  "Clodsire",
);
new class FarigirafSpecies extends Species {}(
  PokemonSpecies.Farigiraf,
  [PokemonVariety.Farigiraf],
  "Farigiraf",
);
new class DudunsparceSpecies extends Species {}(
  PokemonSpecies.Dudunsparce,
  [PokemonVariety.Dudunsparce, PokemonVariety.DudunsparceThreeSegment],
  "Dudunsparce",
);
new class KingambitSpecies extends Species {}(
  PokemonSpecies.Kingambit,
  [PokemonVariety.Kingambit],
  "Kingambit",
);
new class GreatTuskSpecies extends Species {}(
  PokemonSpecies.GreatTusk,
  [PokemonVariety.GreatTusk],
  "Great Tusk",
);
new class ScreamTailSpecies extends Species {}(
  PokemonSpecies.ScreamTail,
  [PokemonVariety.ScreamTail],
  "Scream Tail",
);
new class BruteBonnetSpecies extends Species {}(
  PokemonSpecies.BruteBonnet,
  [PokemonVariety.BruteBonnet],
  "Brute Bonnet",
);
new class FlutterManeSpecies extends Species {}(
  PokemonSpecies.FlutterMane,
  [PokemonVariety.FlutterMane],
  "Flutter Mane",
);
new class SlitherWingSpecies extends Species {}(
  PokemonSpecies.SlitherWing,
  [PokemonVariety.SlitherWing],
  "Slither Wing",
);
new class SandyShocksSpecies extends Species {}(
  PokemonSpecies.SandyShocks,
  [PokemonVariety.SandyShocks],
  "Sandy Shocks",
);
new class IronTreadsSpecies extends Species {}(
  PokemonSpecies.IronTreads,
  [PokemonVariety.IronTreads],
  "Iron Treads",
);
new class IronBundleSpecies extends Species {}(
  PokemonSpecies.IronBundle,
  [PokemonVariety.IronBundle],
  "Iron Bundle",
);
new class IronHandsSpecies extends Species {}(
  PokemonSpecies.IronHands,
  [PokemonVariety.IronHands],
  "Iron Hands",
);
new class IronJugulisSpecies extends Species {}(
  PokemonSpecies.IronJugulis,
  [PokemonVariety.IronJugulis],
  "Iron Jugulis",
);
new class IronMothSpecies extends Species {}(
  PokemonSpecies.IronMoth,
  [PokemonVariety.IronMoth],
  "Iron Moth",
);
new class IronThornsSpecies extends Species {}(
  PokemonSpecies.IronThorns,
  [PokemonVariety.IronThorns],
  "Iron Thorns",
);
new class FrigibaxSpecies extends Species {}(
  PokemonSpecies.Frigibax,
  [PokemonVariety.Frigibax],
  "Frigibax",
);
new class ArctibaxSpecies extends Species {}(
  PokemonSpecies.Arctibax,
  [PokemonVariety.Arctibax],
  "Arctibax",
);
new class BaxcaliburSpecies extends Species {}(
  PokemonSpecies.Baxcalibur,
  [PokemonVariety.Baxcalibur],
  "Baxcalibur",
);
new class GimmighoulSpecies extends Species {}(
  PokemonSpecies.Gimmighoul,
  [PokemonVariety.Gimmighoul, PokemonVariety.GimmighoulRoaming],
  "Gimmighoul",
);
new class GholdengoSpecies extends Species {}(
  PokemonSpecies.Gholdengo,
  [PokemonVariety.Gholdengo],
  "Gholdengo",
);
new class WoChienSpecies extends Species {}(
  PokemonSpecies.WoChien,
  [PokemonVariety.WoChien],
  "Wo-Chien",
);
new class ChienPaoSpecies extends Species {}(
  PokemonSpecies.ChienPao,
  [PokemonVariety.ChienPao],
  "Chien-Pao",
);
new class TingLuSpecies extends Species {}(
  PokemonSpecies.TingLu,
  [PokemonVariety.TingLu],
  "Ting-Lu",
);
new class ChiYuSpecies extends Species {}(
  PokemonSpecies.ChiYu,
  [PokemonVariety.ChiYu],
  "Chi-Yu",
);
new class RoaringMoonSpecies extends Species {}(
  PokemonSpecies.RoaringMoon,
  [PokemonVariety.RoaringMoon],
  "Roaring Moon",
);
new class IronValiantSpecies extends Species {}(
  PokemonSpecies.IronValiant,
  [PokemonVariety.IronValiant],
  "Iron Valiant",
);
new class KoraidonSpecies extends Species {}(
  PokemonSpecies.Koraidon,
  [PokemonVariety.Koraidon, PokemonVariety.KoraidonLimitedBuild, PokemonVariety.KoraidonSprintingBuild, PokemonVariety.KoraidonSwimmingBuild, PokemonVariety.KoraidonGlidingBuild],
  "Koraidon",
);
new class MiraidonSpecies extends Species {}(
  PokemonSpecies.Miraidon,
  [PokemonVariety.Miraidon, PokemonVariety.MiraidonLowPowerMode, PokemonVariety.MiraidonDriveMode, PokemonVariety.MiraidonAquaticMode, PokemonVariety.MiraidonGlideMode],
  "Miraidon",
);
new class WalkingWakeSpecies extends Species {}(
  PokemonSpecies.WalkingWake,
  [PokemonVariety.WalkingWake],
  "Walking Wake",
);
new class IronLeavesSpecies extends Species {}(
  PokemonSpecies.IronLeaves,
  [PokemonVariety.IronLeaves],
  "Iron Leaves",
);
new class DipplinSpecies extends Species {}(
  PokemonSpecies.Dipplin,
  [PokemonVariety.Dipplin],
  "Dipplin",
);
new class PoltchageistSpecies extends Species {}(
  PokemonSpecies.Poltchageist,
  [PokemonVariety.Poltchageist],
  "Poltchageist",
);
new class SinistchaSpecies extends Species {}(
  PokemonSpecies.Sinistcha,
  [PokemonVariety.Sinistcha],
  "Sinistcha",
);
new class OkidogiSpecies extends Species {}(
  PokemonSpecies.Okidogi,
  [PokemonVariety.Okidogi],
  "Okidogi",
);
new class MunkidoriSpecies extends Species {}(
  PokemonSpecies.Munkidori,
  [PokemonVariety.Munkidori],
  "Munkidori",
);
new class FezandipitiSpecies extends Species {}(
  PokemonSpecies.Fezandipiti,
  [PokemonVariety.Fezandipiti],
  "Fezandipiti",
);
new class OgerponSpecies extends Species {}(
  PokemonSpecies.Ogerpon,
  [PokemonVariety.Ogerpon, PokemonVariety.OgerponWellspringMask, PokemonVariety.OgerponHearthflameMask, PokemonVariety.OgerponCornerstoneMask],
  "Ogerpon",
);
new class ArchaludonSpecies extends Species {}(
  PokemonSpecies.Archaludon,
  [PokemonVariety.Archaludon],
  "Archaludon",
);
new class HydrappleSpecies extends Species {}(
  PokemonSpecies.Hydrapple,
  [PokemonVariety.Hydrapple],
  "Hydrapple",
);
new class GougingFireSpecies extends Species {}(
  PokemonSpecies.GougingFire,
  [PokemonVariety.GougingFire],
  "Gouging Fire",
);
new class RagingBoltSpecies extends Species {}(
  PokemonSpecies.RagingBolt,
  [PokemonVariety.RagingBolt],
  "Raging Bolt",
);
new class IronBoulderSpecies extends Species {}(
  PokemonSpecies.IronBoulder,
  [PokemonVariety.IronBoulder],
  "Iron Boulder",
);
new class IronCrownSpecies extends Species {}(
  PokemonSpecies.IronCrown,
  [PokemonVariety.IronCrown],
  "Iron Crown",
);
new class TerapagosSpecies extends Species {}(
  PokemonSpecies.Terapagos,
  [PokemonVariety.Terapagos, PokemonVariety.TerapagosTerastal, PokemonVariety.TerapagosStellar],
  "Terapagos",
);
new class PecharuntSpecies extends Species {}(
  PokemonSpecies.Pecharunt,
  [PokemonVariety.Pecharunt],
  "Pecharunt",
);