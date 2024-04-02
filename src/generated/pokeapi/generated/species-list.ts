// AUTO GENERATED FILE
import { IPokemonSpecies } from "#pokeapi/pokemon-species.interface.ts";
import { PokemonSpecies } from "#pokeapi/generated/species.enum.ts";
import { PokemonVariety } from "#pokeapi/generated/varieties.enum.ts";

export const speciesList = new Map<PokemonSpecies, IPokemonSpecies>();
class Species extends IPokemonSpecies {
  constructor(
    species: PokemonSpecies,
    varieties: PokemonVariety[],
  ) {
    super(species, varieties);
    speciesList.set(species, this);
  }
}

new class BulbasaurSpecies extends Species {}(
  PokemonSpecies.Bulbasaur,
  [PokemonVariety.Bulbasaur],
);
new class IvysaurSpecies extends Species {}(
  PokemonSpecies.Ivysaur,
  [PokemonVariety.Ivysaur],
);
new class VenusaurSpecies extends Species {}(
  PokemonSpecies.Venusaur,
  [PokemonVariety.Venusaur, PokemonVariety.VenusaurMega, PokemonVariety.VenusaurGmax],
);
new class CharmanderSpecies extends Species {}(
  PokemonSpecies.Charmander,
  [PokemonVariety.Charmander],
);
new class CharmeleonSpecies extends Species {}(
  PokemonSpecies.Charmeleon,
  [PokemonVariety.Charmeleon],
);
new class CharizardSpecies extends Species {}(
  PokemonSpecies.Charizard,
  [PokemonVariety.Charizard, PokemonVariety.CharizardMegaX, PokemonVariety.CharizardMegaY, PokemonVariety.CharizardGmax],
);
new class SquirtleSpecies extends Species {}(
  PokemonSpecies.Squirtle,
  [PokemonVariety.Squirtle],
);
new class WartortleSpecies extends Species {}(
  PokemonSpecies.Wartortle,
  [PokemonVariety.Wartortle],
);
new class BlastoiseSpecies extends Species {}(
  PokemonSpecies.Blastoise,
  [PokemonVariety.Blastoise, PokemonVariety.BlastoiseMega, PokemonVariety.BlastoiseGmax],
);
new class CaterpieSpecies extends Species {}(
  PokemonSpecies.Caterpie,
  [PokemonVariety.Caterpie],
);
new class MetapodSpecies extends Species {}(
  PokemonSpecies.Metapod,
  [PokemonVariety.Metapod],
);
new class ButterfreeSpecies extends Species {}(
  PokemonSpecies.Butterfree,
  [PokemonVariety.Butterfree, PokemonVariety.ButterfreeGmax],
);
new class WeedleSpecies extends Species {}(
  PokemonSpecies.Weedle,
  [PokemonVariety.Weedle],
);
new class KakunaSpecies extends Species {}(
  PokemonSpecies.Kakuna,
  [PokemonVariety.Kakuna],
);
new class BeedrillSpecies extends Species {}(
  PokemonSpecies.Beedrill,
  [PokemonVariety.Beedrill, PokemonVariety.BeedrillMega],
);
new class PidgeySpecies extends Species {}(
  PokemonSpecies.Pidgey,
  [PokemonVariety.Pidgey],
);
new class PidgeottoSpecies extends Species {}(
  PokemonSpecies.Pidgeotto,
  [PokemonVariety.Pidgeotto],
);
new class PidgeotSpecies extends Species {}(
  PokemonSpecies.Pidgeot,
  [PokemonVariety.Pidgeot, PokemonVariety.PidgeotMega],
);
new class RattataSpecies extends Species {}(
  PokemonSpecies.Rattata,
  [PokemonVariety.Rattata, PokemonVariety.RattataAlola],
);
new class RaticateSpecies extends Species {}(
  PokemonSpecies.Raticate,
  [PokemonVariety.Raticate, PokemonVariety.RaticateAlola, PokemonVariety.RaticateTotemAlola],
);
new class SpearowSpecies extends Species {}(
  PokemonSpecies.Spearow,
  [PokemonVariety.Spearow],
);
new class FearowSpecies extends Species {}(
  PokemonSpecies.Fearow,
  [PokemonVariety.Fearow],
);
new class EkansSpecies extends Species {}(
  PokemonSpecies.Ekans,
  [PokemonVariety.Ekans],
);
new class ArbokSpecies extends Species {}(
  PokemonSpecies.Arbok,
  [PokemonVariety.Arbok],
);
new class PikachuSpecies extends Species {}(
  PokemonSpecies.Pikachu,
  [PokemonVariety.Pikachu, PokemonVariety.PikachuRockStar, PokemonVariety.PikachuBelle, PokemonVariety.PikachuPopStar, PokemonVariety.PikachuPhd, PokemonVariety.PikachuLibre, PokemonVariety.PikachuCosplay, PokemonVariety.PikachuOriginalCap, PokemonVariety.PikachuHoennCap, PokemonVariety.PikachuSinnohCap, PokemonVariety.PikachuUnovaCap, PokemonVariety.PikachuKalosCap, PokemonVariety.PikachuAlolaCap, PokemonVariety.PikachuPartnerCap, PokemonVariety.PikachuStarter, PokemonVariety.PikachuWorldCap, PokemonVariety.PikachuGmax],
);
new class RaichuSpecies extends Species {}(
  PokemonSpecies.Raichu,
  [PokemonVariety.Raichu, PokemonVariety.RaichuAlola],
);
new class SandshrewSpecies extends Species {}(
  PokemonSpecies.Sandshrew,
  [PokemonVariety.Sandshrew, PokemonVariety.SandshrewAlola],
);
new class SandslashSpecies extends Species {}(
  PokemonSpecies.Sandslash,
  [PokemonVariety.Sandslash, PokemonVariety.SandslashAlola],
);
new class NidoranFSpecies extends Species {}(
  PokemonSpecies.NidoranF,
  [PokemonVariety.NidoranF],
);
new class NidorinaSpecies extends Species {}(
  PokemonSpecies.Nidorina,
  [PokemonVariety.Nidorina],
);
new class NidoqueenSpecies extends Species {}(
  PokemonSpecies.Nidoqueen,
  [PokemonVariety.Nidoqueen],
);
new class NidoranMSpecies extends Species {}(
  PokemonSpecies.NidoranM,
  [PokemonVariety.NidoranM],
);
new class NidorinoSpecies extends Species {}(
  PokemonSpecies.Nidorino,
  [PokemonVariety.Nidorino],
);
new class NidokingSpecies extends Species {}(
  PokemonSpecies.Nidoking,
  [PokemonVariety.Nidoking],
);
new class ClefairySpecies extends Species {}(
  PokemonSpecies.Clefairy,
  [PokemonVariety.Clefairy],
);
new class ClefableSpecies extends Species {}(
  PokemonSpecies.Clefable,
  [PokemonVariety.Clefable],
);
new class VulpixSpecies extends Species {}(
  PokemonSpecies.Vulpix,
  [PokemonVariety.Vulpix, PokemonVariety.VulpixAlola],
);
new class NinetalesSpecies extends Species {}(
  PokemonSpecies.Ninetales,
  [PokemonVariety.Ninetales, PokemonVariety.NinetalesAlola],
);
new class JigglypuffSpecies extends Species {}(
  PokemonSpecies.Jigglypuff,
  [PokemonVariety.Jigglypuff],
);
new class WigglytuffSpecies extends Species {}(
  PokemonSpecies.Wigglytuff,
  [PokemonVariety.Wigglytuff],
);
new class ZubatSpecies extends Species {}(
  PokemonSpecies.Zubat,
  [PokemonVariety.Zubat],
);
new class GolbatSpecies extends Species {}(
  PokemonSpecies.Golbat,
  [PokemonVariety.Golbat],
);
new class OddishSpecies extends Species {}(
  PokemonSpecies.Oddish,
  [PokemonVariety.Oddish],
);
new class GloomSpecies extends Species {}(
  PokemonSpecies.Gloom,
  [PokemonVariety.Gloom],
);
new class VileplumeSpecies extends Species {}(
  PokemonSpecies.Vileplume,
  [PokemonVariety.Vileplume],
);
new class ParasSpecies extends Species {}(
  PokemonSpecies.Paras,
  [PokemonVariety.Paras],
);
new class ParasectSpecies extends Species {}(
  PokemonSpecies.Parasect,
  [PokemonVariety.Parasect],
);
new class VenonatSpecies extends Species {}(
  PokemonSpecies.Venonat,
  [PokemonVariety.Venonat],
);
new class VenomothSpecies extends Species {}(
  PokemonSpecies.Venomoth,
  [PokemonVariety.Venomoth],
);
new class DiglettSpecies extends Species {}(
  PokemonSpecies.Diglett,
  [PokemonVariety.Diglett, PokemonVariety.DiglettAlola],
);
new class DugtrioSpecies extends Species {}(
  PokemonSpecies.Dugtrio,
  [PokemonVariety.Dugtrio, PokemonVariety.DugtrioAlola],
);
new class MeowthSpecies extends Species {}(
  PokemonSpecies.Meowth,
  [PokemonVariety.Meowth, PokemonVariety.MeowthAlola, PokemonVariety.MeowthGalar, PokemonVariety.MeowthGmax],
);
new class PersianSpecies extends Species {}(
  PokemonSpecies.Persian,
  [PokemonVariety.Persian, PokemonVariety.PersianAlola],
);
new class PsyduckSpecies extends Species {}(
  PokemonSpecies.Psyduck,
  [PokemonVariety.Psyduck],
);
new class GolduckSpecies extends Species {}(
  PokemonSpecies.Golduck,
  [PokemonVariety.Golduck],
);
new class MankeySpecies extends Species {}(
  PokemonSpecies.Mankey,
  [PokemonVariety.Mankey],
);
new class PrimeapeSpecies extends Species {}(
  PokemonSpecies.Primeape,
  [PokemonVariety.Primeape],
);
new class GrowlitheSpecies extends Species {}(
  PokemonSpecies.Growlithe,
  [PokemonVariety.Growlithe, PokemonVariety.GrowlitheHisui],
);
new class ArcanineSpecies extends Species {}(
  PokemonSpecies.Arcanine,
  [PokemonVariety.Arcanine, PokemonVariety.ArcanineHisui],
);
new class PoliwagSpecies extends Species {}(
  PokemonSpecies.Poliwag,
  [PokemonVariety.Poliwag],
);
new class PoliwhirlSpecies extends Species {}(
  PokemonSpecies.Poliwhirl,
  [PokemonVariety.Poliwhirl],
);
new class PoliwrathSpecies extends Species {}(
  PokemonSpecies.Poliwrath,
  [PokemonVariety.Poliwrath],
);
new class AbraSpecies extends Species {}(
  PokemonSpecies.Abra,
  [PokemonVariety.Abra],
);
new class KadabraSpecies extends Species {}(
  PokemonSpecies.Kadabra,
  [PokemonVariety.Kadabra],
);
new class AlakazamSpecies extends Species {}(
  PokemonSpecies.Alakazam,
  [PokemonVariety.Alakazam, PokemonVariety.AlakazamMega],
);
new class MachopSpecies extends Species {}(
  PokemonSpecies.Machop,
  [PokemonVariety.Machop],
);
new class MachokeSpecies extends Species {}(
  PokemonSpecies.Machoke,
  [PokemonVariety.Machoke],
);
new class MachampSpecies extends Species {}(
  PokemonSpecies.Machamp,
  [PokemonVariety.Machamp, PokemonVariety.MachampGmax],
);
new class BellsproutSpecies extends Species {}(
  PokemonSpecies.Bellsprout,
  [PokemonVariety.Bellsprout],
);
new class WeepinbellSpecies extends Species {}(
  PokemonSpecies.Weepinbell,
  [PokemonVariety.Weepinbell],
);
new class VictreebelSpecies extends Species {}(
  PokemonSpecies.Victreebel,
  [PokemonVariety.Victreebel],
);
new class TentacoolSpecies extends Species {}(
  PokemonSpecies.Tentacool,
  [PokemonVariety.Tentacool],
);
new class TentacruelSpecies extends Species {}(
  PokemonSpecies.Tentacruel,
  [PokemonVariety.Tentacruel],
);
new class GeodudeSpecies extends Species {}(
  PokemonSpecies.Geodude,
  [PokemonVariety.Geodude, PokemonVariety.GeodudeAlola],
);
new class GravelerSpecies extends Species {}(
  PokemonSpecies.Graveler,
  [PokemonVariety.Graveler, PokemonVariety.GravelerAlola],
);
new class GolemSpecies extends Species {}(
  PokemonSpecies.Golem,
  [PokemonVariety.Golem, PokemonVariety.GolemAlola],
);
new class PonytaSpecies extends Species {}(
  PokemonSpecies.Ponyta,
  [PokemonVariety.Ponyta, PokemonVariety.PonytaGalar],
);
new class RapidashSpecies extends Species {}(
  PokemonSpecies.Rapidash,
  [PokemonVariety.Rapidash, PokemonVariety.RapidashGalar],
);
new class SlowpokeSpecies extends Species {}(
  PokemonSpecies.Slowpoke,
  [PokemonVariety.Slowpoke, PokemonVariety.SlowpokeGalar],
);
new class SlowbroSpecies extends Species {}(
  PokemonSpecies.Slowbro,
  [PokemonVariety.Slowbro, PokemonVariety.SlowbroMega, PokemonVariety.SlowbroGalar],
);
new class MagnemiteSpecies extends Species {}(
  PokemonSpecies.Magnemite,
  [PokemonVariety.Magnemite],
);
new class MagnetonSpecies extends Species {}(
  PokemonSpecies.Magneton,
  [PokemonVariety.Magneton],
);
new class FarfetchdSpecies extends Species {}(
  PokemonSpecies.Farfetchd,
  [PokemonVariety.Farfetchd, PokemonVariety.FarfetchdGalar],
);
new class DoduoSpecies extends Species {}(
  PokemonSpecies.Doduo,
  [PokemonVariety.Doduo],
);
new class DodrioSpecies extends Species {}(
  PokemonSpecies.Dodrio,
  [PokemonVariety.Dodrio],
);
new class SeelSpecies extends Species {}(
  PokemonSpecies.Seel,
  [PokemonVariety.Seel],
);
new class DewgongSpecies extends Species {}(
  PokemonSpecies.Dewgong,
  [PokemonVariety.Dewgong],
);
new class GrimerSpecies extends Species {}(
  PokemonSpecies.Grimer,
  [PokemonVariety.Grimer, PokemonVariety.GrimerAlola],
);
new class MukSpecies extends Species {}(
  PokemonSpecies.Muk,
  [PokemonVariety.Muk, PokemonVariety.MukAlola],
);
new class ShellderSpecies extends Species {}(
  PokemonSpecies.Shellder,
  [PokemonVariety.Shellder],
);
new class CloysterSpecies extends Species {}(
  PokemonSpecies.Cloyster,
  [PokemonVariety.Cloyster],
);
new class GastlySpecies extends Species {}(
  PokemonSpecies.Gastly,
  [PokemonVariety.Gastly],
);
new class HaunterSpecies extends Species {}(
  PokemonSpecies.Haunter,
  [PokemonVariety.Haunter],
);
new class GengarSpecies extends Species {}(
  PokemonSpecies.Gengar,
  [PokemonVariety.Gengar, PokemonVariety.GengarMega, PokemonVariety.GengarGmax],
);
new class OnixSpecies extends Species {}(
  PokemonSpecies.Onix,
  [PokemonVariety.Onix],
);
new class DrowzeeSpecies extends Species {}(
  PokemonSpecies.Drowzee,
  [PokemonVariety.Drowzee],
);
new class HypnoSpecies extends Species {}(
  PokemonSpecies.Hypno,
  [PokemonVariety.Hypno],
);
new class KrabbySpecies extends Species {}(
  PokemonSpecies.Krabby,
  [PokemonVariety.Krabby],
);
new class KinglerSpecies extends Species {}(
  PokemonSpecies.Kingler,
  [PokemonVariety.Kingler, PokemonVariety.KinglerGmax],
);
new class VoltorbSpecies extends Species {}(
  PokemonSpecies.Voltorb,
  [PokemonVariety.Voltorb, PokemonVariety.VoltorbHisui],
);
new class ElectrodeSpecies extends Species {}(
  PokemonSpecies.Electrode,
  [PokemonVariety.Electrode, PokemonVariety.ElectrodeHisui],
);
new class ExeggcuteSpecies extends Species {}(
  PokemonSpecies.Exeggcute,
  [PokemonVariety.Exeggcute],
);
new class ExeggutorSpecies extends Species {}(
  PokemonSpecies.Exeggutor,
  [PokemonVariety.Exeggutor, PokemonVariety.ExeggutorAlola],
);
new class CuboneSpecies extends Species {}(
  PokemonSpecies.Cubone,
  [PokemonVariety.Cubone],
);
new class MarowakSpecies extends Species {}(
  PokemonSpecies.Marowak,
  [PokemonVariety.Marowak, PokemonVariety.MarowakAlola, PokemonVariety.MarowakTotem],
);
new class HitmonleeSpecies extends Species {}(
  PokemonSpecies.Hitmonlee,
  [PokemonVariety.Hitmonlee],
);
new class HitmonchanSpecies extends Species {}(
  PokemonSpecies.Hitmonchan,
  [PokemonVariety.Hitmonchan],
);
new class LickitungSpecies extends Species {}(
  PokemonSpecies.Lickitung,
  [PokemonVariety.Lickitung],
);
new class KoffingSpecies extends Species {}(
  PokemonSpecies.Koffing,
  [PokemonVariety.Koffing],
);
new class WeezingSpecies extends Species {}(
  PokemonSpecies.Weezing,
  [PokemonVariety.Weezing, PokemonVariety.WeezingGalar],
);
new class RhyhornSpecies extends Species {}(
  PokemonSpecies.Rhyhorn,
  [PokemonVariety.Rhyhorn],
);
new class RhydonSpecies extends Species {}(
  PokemonSpecies.Rhydon,
  [PokemonVariety.Rhydon],
);
new class ChanseySpecies extends Species {}(
  PokemonSpecies.Chansey,
  [PokemonVariety.Chansey],
);
new class TangelaSpecies extends Species {}(
  PokemonSpecies.Tangela,
  [PokemonVariety.Tangela],
);
new class KangaskhanSpecies extends Species {}(
  PokemonSpecies.Kangaskhan,
  [PokemonVariety.Kangaskhan, PokemonVariety.KangaskhanMega],
);
new class HorseaSpecies extends Species {}(
  PokemonSpecies.Horsea,
  [PokemonVariety.Horsea],
);
new class SeadraSpecies extends Species {}(
  PokemonSpecies.Seadra,
  [PokemonVariety.Seadra],
);
new class GoldeenSpecies extends Species {}(
  PokemonSpecies.Goldeen,
  [PokemonVariety.Goldeen],
);
new class SeakingSpecies extends Species {}(
  PokemonSpecies.Seaking,
  [PokemonVariety.Seaking],
);
new class StaryuSpecies extends Species {}(
  PokemonSpecies.Staryu,
  [PokemonVariety.Staryu],
);
new class StarmieSpecies extends Species {}(
  PokemonSpecies.Starmie,
  [PokemonVariety.Starmie],
);
new class MrMimeSpecies extends Species {}(
  PokemonSpecies.MrMime,
  [PokemonVariety.MrMime, PokemonVariety.MrMimeGalar],
);
new class ScytherSpecies extends Species {}(
  PokemonSpecies.Scyther,
  [PokemonVariety.Scyther],
);
new class JynxSpecies extends Species {}(
  PokemonSpecies.Jynx,
  [PokemonVariety.Jynx],
);
new class ElectabuzzSpecies extends Species {}(
  PokemonSpecies.Electabuzz,
  [PokemonVariety.Electabuzz],
);
new class MagmarSpecies extends Species {}(
  PokemonSpecies.Magmar,
  [PokemonVariety.Magmar],
);
new class PinsirSpecies extends Species {}(
  PokemonSpecies.Pinsir,
  [PokemonVariety.Pinsir, PokemonVariety.PinsirMega],
);
new class TaurosSpecies extends Species {}(
  PokemonSpecies.Tauros,
  [PokemonVariety.Tauros, PokemonVariety.TaurosPaldeaCombatBreed, PokemonVariety.TaurosPaldeaBlazeBreed, PokemonVariety.TaurosPaldeaAquaBreed],
);
new class MagikarpSpecies extends Species {}(
  PokemonSpecies.Magikarp,
  [PokemonVariety.Magikarp],
);
new class GyaradosSpecies extends Species {}(
  PokemonSpecies.Gyarados,
  [PokemonVariety.Gyarados, PokemonVariety.GyaradosMega],
);
new class LaprasSpecies extends Species {}(
  PokemonSpecies.Lapras,
  [PokemonVariety.Lapras, PokemonVariety.LaprasGmax],
);
new class DittoSpecies extends Species {}(
  PokemonSpecies.Ditto,
  [PokemonVariety.Ditto],
);
new class EeveeSpecies extends Species {}(
  PokemonSpecies.Eevee,
  [PokemonVariety.Eevee, PokemonVariety.EeveeStarter, PokemonVariety.EeveeGmax],
);
new class VaporeonSpecies extends Species {}(
  PokemonSpecies.Vaporeon,
  [PokemonVariety.Vaporeon],
);
new class JolteonSpecies extends Species {}(
  PokemonSpecies.Jolteon,
  [PokemonVariety.Jolteon],
);
new class FlareonSpecies extends Species {}(
  PokemonSpecies.Flareon,
  [PokemonVariety.Flareon],
);
new class PorygonSpecies extends Species {}(
  PokemonSpecies.Porygon,
  [PokemonVariety.Porygon],
);
new class OmanyteSpecies extends Species {}(
  PokemonSpecies.Omanyte,
  [PokemonVariety.Omanyte],
);
new class OmastarSpecies extends Species {}(
  PokemonSpecies.Omastar,
  [PokemonVariety.Omastar],
);
new class KabutoSpecies extends Species {}(
  PokemonSpecies.Kabuto,
  [PokemonVariety.Kabuto],
);
new class KabutopsSpecies extends Species {}(
  PokemonSpecies.Kabutops,
  [PokemonVariety.Kabutops],
);
new class AerodactylSpecies extends Species {}(
  PokemonSpecies.Aerodactyl,
  [PokemonVariety.Aerodactyl, PokemonVariety.AerodactylMega],
);
new class SnorlaxSpecies extends Species {}(
  PokemonSpecies.Snorlax,
  [PokemonVariety.Snorlax, PokemonVariety.SnorlaxGmax],
);
new class ArticunoSpecies extends Species {}(
  PokemonSpecies.Articuno,
  [PokemonVariety.Articuno, PokemonVariety.ArticunoGalar],
);
new class ZapdosSpecies extends Species {}(
  PokemonSpecies.Zapdos,
  [PokemonVariety.Zapdos, PokemonVariety.ZapdosGalar],
);
new class MoltresSpecies extends Species {}(
  PokemonSpecies.Moltres,
  [PokemonVariety.Moltres, PokemonVariety.MoltresGalar],
);
new class DratiniSpecies extends Species {}(
  PokemonSpecies.Dratini,
  [PokemonVariety.Dratini],
);
new class DragonairSpecies extends Species {}(
  PokemonSpecies.Dragonair,
  [PokemonVariety.Dragonair],
);
new class DragoniteSpecies extends Species {}(
  PokemonSpecies.Dragonite,
  [PokemonVariety.Dragonite],
);
new class MewtwoSpecies extends Species {}(
  PokemonSpecies.Mewtwo,
  [PokemonVariety.Mewtwo, PokemonVariety.MewtwoMegaX, PokemonVariety.MewtwoMegaY],
);
new class MewSpecies extends Species {}(
  PokemonSpecies.Mew,
  [PokemonVariety.Mew],
);
new class ChikoritaSpecies extends Species {}(
  PokemonSpecies.Chikorita,
  [PokemonVariety.Chikorita],
);
new class BayleefSpecies extends Species {}(
  PokemonSpecies.Bayleef,
  [PokemonVariety.Bayleef],
);
new class MeganiumSpecies extends Species {}(
  PokemonSpecies.Meganium,
  [PokemonVariety.Meganium],
);
new class CyndaquilSpecies extends Species {}(
  PokemonSpecies.Cyndaquil,
  [PokemonVariety.Cyndaquil],
);
new class QuilavaSpecies extends Species {}(
  PokemonSpecies.Quilava,
  [PokemonVariety.Quilava],
);
new class TyphlosionSpecies extends Species {}(
  PokemonSpecies.Typhlosion,
  [PokemonVariety.Typhlosion, PokemonVariety.TyphlosionHisui],
);
new class TotodileSpecies extends Species {}(
  PokemonSpecies.Totodile,
  [PokemonVariety.Totodile],
);
new class CroconawSpecies extends Species {}(
  PokemonSpecies.Croconaw,
  [PokemonVariety.Croconaw],
);
new class FeraligatrSpecies extends Species {}(
  PokemonSpecies.Feraligatr,
  [PokemonVariety.Feraligatr],
);
new class SentretSpecies extends Species {}(
  PokemonSpecies.Sentret,
  [PokemonVariety.Sentret],
);
new class FurretSpecies extends Species {}(
  PokemonSpecies.Furret,
  [PokemonVariety.Furret],
);
new class HoothootSpecies extends Species {}(
  PokemonSpecies.Hoothoot,
  [PokemonVariety.Hoothoot],
);
new class NoctowlSpecies extends Species {}(
  PokemonSpecies.Noctowl,
  [PokemonVariety.Noctowl],
);
new class LedybaSpecies extends Species {}(
  PokemonSpecies.Ledyba,
  [PokemonVariety.Ledyba],
);
new class LedianSpecies extends Species {}(
  PokemonSpecies.Ledian,
  [PokemonVariety.Ledian],
);
new class SpinarakSpecies extends Species {}(
  PokemonSpecies.Spinarak,
  [PokemonVariety.Spinarak],
);
new class AriadosSpecies extends Species {}(
  PokemonSpecies.Ariados,
  [PokemonVariety.Ariados],
);
new class CrobatSpecies extends Species {}(
  PokemonSpecies.Crobat,
  [PokemonVariety.Crobat],
);
new class ChinchouSpecies extends Species {}(
  PokemonSpecies.Chinchou,
  [PokemonVariety.Chinchou],
);
new class LanturnSpecies extends Species {}(
  PokemonSpecies.Lanturn,
  [PokemonVariety.Lanturn],
);
new class PichuSpecies extends Species {}(
  PokemonSpecies.Pichu,
  [PokemonVariety.Pichu],
);
new class CleffaSpecies extends Species {}(
  PokemonSpecies.Cleffa,
  [PokemonVariety.Cleffa],
);
new class IgglybuffSpecies extends Species {}(
  PokemonSpecies.Igglybuff,
  [PokemonVariety.Igglybuff],
);
new class TogepiSpecies extends Species {}(
  PokemonSpecies.Togepi,
  [PokemonVariety.Togepi],
);
new class TogeticSpecies extends Species {}(
  PokemonSpecies.Togetic,
  [PokemonVariety.Togetic],
);
new class NatuSpecies extends Species {}(
  PokemonSpecies.Natu,
  [PokemonVariety.Natu],
);
new class XatuSpecies extends Species {}(
  PokemonSpecies.Xatu,
  [PokemonVariety.Xatu],
);
new class MareepSpecies extends Species {}(
  PokemonSpecies.Mareep,
  [PokemonVariety.Mareep],
);
new class FlaaffySpecies extends Species {}(
  PokemonSpecies.Flaaffy,
  [PokemonVariety.Flaaffy],
);
new class AmpharosSpecies extends Species {}(
  PokemonSpecies.Ampharos,
  [PokemonVariety.Ampharos, PokemonVariety.AmpharosMega],
);
new class BellossomSpecies extends Species {}(
  PokemonSpecies.Bellossom,
  [PokemonVariety.Bellossom],
);
new class MarillSpecies extends Species {}(
  PokemonSpecies.Marill,
  [PokemonVariety.Marill],
);
new class AzumarillSpecies extends Species {}(
  PokemonSpecies.Azumarill,
  [PokemonVariety.Azumarill],
);
new class SudowoodoSpecies extends Species {}(
  PokemonSpecies.Sudowoodo,
  [PokemonVariety.Sudowoodo],
);
new class PolitoedSpecies extends Species {}(
  PokemonSpecies.Politoed,
  [PokemonVariety.Politoed],
);
new class HoppipSpecies extends Species {}(
  PokemonSpecies.Hoppip,
  [PokemonVariety.Hoppip],
);
new class SkiploomSpecies extends Species {}(
  PokemonSpecies.Skiploom,
  [PokemonVariety.Skiploom],
);
new class JumpluffSpecies extends Species {}(
  PokemonSpecies.Jumpluff,
  [PokemonVariety.Jumpluff],
);
new class AipomSpecies extends Species {}(
  PokemonSpecies.Aipom,
  [PokemonVariety.Aipom],
);
new class SunkernSpecies extends Species {}(
  PokemonSpecies.Sunkern,
  [PokemonVariety.Sunkern],
);
new class SunfloraSpecies extends Species {}(
  PokemonSpecies.Sunflora,
  [PokemonVariety.Sunflora],
);
new class YanmaSpecies extends Species {}(
  PokemonSpecies.Yanma,
  [PokemonVariety.Yanma],
);
new class WooperSpecies extends Species {}(
  PokemonSpecies.Wooper,
  [PokemonVariety.Wooper, PokemonVariety.WooperPaldea],
);
new class QuagsireSpecies extends Species {}(
  PokemonSpecies.Quagsire,
  [PokemonVariety.Quagsire],
);
new class EspeonSpecies extends Species {}(
  PokemonSpecies.Espeon,
  [PokemonVariety.Espeon],
);
new class UmbreonSpecies extends Species {}(
  PokemonSpecies.Umbreon,
  [PokemonVariety.Umbreon],
);
new class MurkrowSpecies extends Species {}(
  PokemonSpecies.Murkrow,
  [PokemonVariety.Murkrow],
);
new class SlowkingSpecies extends Species {}(
  PokemonSpecies.Slowking,
  [PokemonVariety.Slowking, PokemonVariety.SlowkingGalar],
);
new class MisdreavusSpecies extends Species {}(
  PokemonSpecies.Misdreavus,
  [PokemonVariety.Misdreavus],
);
new class UnownSpecies extends Species {}(
  PokemonSpecies.Unown,
  [PokemonVariety.Unown],
);
new class WobbuffetSpecies extends Species {}(
  PokemonSpecies.Wobbuffet,
  [PokemonVariety.Wobbuffet],
);
new class GirafarigSpecies extends Species {}(
  PokemonSpecies.Girafarig,
  [PokemonVariety.Girafarig],
);
new class PinecoSpecies extends Species {}(
  PokemonSpecies.Pineco,
  [PokemonVariety.Pineco],
);
new class ForretressSpecies extends Species {}(
  PokemonSpecies.Forretress,
  [PokemonVariety.Forretress],
);
new class DunsparceSpecies extends Species {}(
  PokemonSpecies.Dunsparce,
  [PokemonVariety.Dunsparce],
);
new class GligarSpecies extends Species {}(
  PokemonSpecies.Gligar,
  [PokemonVariety.Gligar],
);
new class SteelixSpecies extends Species {}(
  PokemonSpecies.Steelix,
  [PokemonVariety.Steelix, PokemonVariety.SteelixMega],
);
new class SnubbullSpecies extends Species {}(
  PokemonSpecies.Snubbull,
  [PokemonVariety.Snubbull],
);
new class GranbullSpecies extends Species {}(
  PokemonSpecies.Granbull,
  [PokemonVariety.Granbull],
);
new class QwilfishSpecies extends Species {}(
  PokemonSpecies.Qwilfish,
  [PokemonVariety.Qwilfish, PokemonVariety.QwilfishHisui],
);
new class ScizorSpecies extends Species {}(
  PokemonSpecies.Scizor,
  [PokemonVariety.Scizor, PokemonVariety.ScizorMega],
);
new class ShuckleSpecies extends Species {}(
  PokemonSpecies.Shuckle,
  [PokemonVariety.Shuckle],
);
new class HeracrossSpecies extends Species {}(
  PokemonSpecies.Heracross,
  [PokemonVariety.Heracross, PokemonVariety.HeracrossMega],
);
new class SneaselSpecies extends Species {}(
  PokemonSpecies.Sneasel,
  [PokemonVariety.Sneasel, PokemonVariety.SneaselHisui],
);
new class TeddiursaSpecies extends Species {}(
  PokemonSpecies.Teddiursa,
  [PokemonVariety.Teddiursa],
);
new class UrsaringSpecies extends Species {}(
  PokemonSpecies.Ursaring,
  [PokemonVariety.Ursaring],
);
new class SlugmaSpecies extends Species {}(
  PokemonSpecies.Slugma,
  [PokemonVariety.Slugma],
);
new class MagcargoSpecies extends Species {}(
  PokemonSpecies.Magcargo,
  [PokemonVariety.Magcargo],
);
new class SwinubSpecies extends Species {}(
  PokemonSpecies.Swinub,
  [PokemonVariety.Swinub],
);
new class PiloswineSpecies extends Species {}(
  PokemonSpecies.Piloswine,
  [PokemonVariety.Piloswine],
);
new class CorsolaSpecies extends Species {}(
  PokemonSpecies.Corsola,
  [PokemonVariety.Corsola, PokemonVariety.CorsolaGalar],
);
new class RemoraidSpecies extends Species {}(
  PokemonSpecies.Remoraid,
  [PokemonVariety.Remoraid],
);
new class OctillerySpecies extends Species {}(
  PokemonSpecies.Octillery,
  [PokemonVariety.Octillery],
);
new class DelibirdSpecies extends Species {}(
  PokemonSpecies.Delibird,
  [PokemonVariety.Delibird],
);
new class MantineSpecies extends Species {}(
  PokemonSpecies.Mantine,
  [PokemonVariety.Mantine],
);
new class SkarmorySpecies extends Species {}(
  PokemonSpecies.Skarmory,
  [PokemonVariety.Skarmory],
);
new class HoundourSpecies extends Species {}(
  PokemonSpecies.Houndour,
  [PokemonVariety.Houndour],
);
new class HoundoomSpecies extends Species {}(
  PokemonSpecies.Houndoom,
  [PokemonVariety.Houndoom, PokemonVariety.HoundoomMega],
);
new class KingdraSpecies extends Species {}(
  PokemonSpecies.Kingdra,
  [PokemonVariety.Kingdra],
);
new class PhanpySpecies extends Species {}(
  PokemonSpecies.Phanpy,
  [PokemonVariety.Phanpy],
);
new class DonphanSpecies extends Species {}(
  PokemonSpecies.Donphan,
  [PokemonVariety.Donphan],
);
new class Porygon2Species extends Species {}(
  PokemonSpecies.Porygon2,
  [PokemonVariety.Porygon2],
);
new class StantlerSpecies extends Species {}(
  PokemonSpecies.Stantler,
  [PokemonVariety.Stantler],
);
new class SmeargleSpecies extends Species {}(
  PokemonSpecies.Smeargle,
  [PokemonVariety.Smeargle],
);
new class TyrogueSpecies extends Species {}(
  PokemonSpecies.Tyrogue,
  [PokemonVariety.Tyrogue],
);
new class HitmontopSpecies extends Species {}(
  PokemonSpecies.Hitmontop,
  [PokemonVariety.Hitmontop],
);
new class SmoochumSpecies extends Species {}(
  PokemonSpecies.Smoochum,
  [PokemonVariety.Smoochum],
);
new class ElekidSpecies extends Species {}(
  PokemonSpecies.Elekid,
  [PokemonVariety.Elekid],
);
new class MagbySpecies extends Species {}(
  PokemonSpecies.Magby,
  [PokemonVariety.Magby],
);
new class MiltankSpecies extends Species {}(
  PokemonSpecies.Miltank,
  [PokemonVariety.Miltank],
);
new class BlisseySpecies extends Species {}(
  PokemonSpecies.Blissey,
  [PokemonVariety.Blissey],
);
new class RaikouSpecies extends Species {}(
  PokemonSpecies.Raikou,
  [PokemonVariety.Raikou],
);
new class EnteiSpecies extends Species {}(
  PokemonSpecies.Entei,
  [PokemonVariety.Entei],
);
new class SuicuneSpecies extends Species {}(
  PokemonSpecies.Suicune,
  [PokemonVariety.Suicune],
);
new class LarvitarSpecies extends Species {}(
  PokemonSpecies.Larvitar,
  [PokemonVariety.Larvitar],
);
new class PupitarSpecies extends Species {}(
  PokemonSpecies.Pupitar,
  [PokemonVariety.Pupitar],
);
new class TyranitarSpecies extends Species {}(
  PokemonSpecies.Tyranitar,
  [PokemonVariety.Tyranitar, PokemonVariety.TyranitarMega],
);
new class LugiaSpecies extends Species {}(
  PokemonSpecies.Lugia,
  [PokemonVariety.Lugia],
);
new class HoOhSpecies extends Species {}(
  PokemonSpecies.HoOh,
  [PokemonVariety.HoOh],
);
new class CelebiSpecies extends Species {}(
  PokemonSpecies.Celebi,
  [PokemonVariety.Celebi],
);
new class TreeckoSpecies extends Species {}(
  PokemonSpecies.Treecko,
  [PokemonVariety.Treecko],
);
new class GrovyleSpecies extends Species {}(
  PokemonSpecies.Grovyle,
  [PokemonVariety.Grovyle],
);
new class SceptileSpecies extends Species {}(
  PokemonSpecies.Sceptile,
  [PokemonVariety.Sceptile, PokemonVariety.SceptileMega],
);
new class TorchicSpecies extends Species {}(
  PokemonSpecies.Torchic,
  [PokemonVariety.Torchic],
);
new class CombuskenSpecies extends Species {}(
  PokemonSpecies.Combusken,
  [PokemonVariety.Combusken],
);
new class BlazikenSpecies extends Species {}(
  PokemonSpecies.Blaziken,
  [PokemonVariety.Blaziken, PokemonVariety.BlazikenMega],
);
new class MudkipSpecies extends Species {}(
  PokemonSpecies.Mudkip,
  [PokemonVariety.Mudkip],
);
new class MarshtompSpecies extends Species {}(
  PokemonSpecies.Marshtomp,
  [PokemonVariety.Marshtomp],
);
new class SwampertSpecies extends Species {}(
  PokemonSpecies.Swampert,
  [PokemonVariety.Swampert, PokemonVariety.SwampertMega],
);
new class PoochyenaSpecies extends Species {}(
  PokemonSpecies.Poochyena,
  [PokemonVariety.Poochyena],
);
new class MightyenaSpecies extends Species {}(
  PokemonSpecies.Mightyena,
  [PokemonVariety.Mightyena],
);
new class ZigzagoonSpecies extends Species {}(
  PokemonSpecies.Zigzagoon,
  [PokemonVariety.Zigzagoon, PokemonVariety.ZigzagoonGalar],
);
new class LinooneSpecies extends Species {}(
  PokemonSpecies.Linoone,
  [PokemonVariety.Linoone, PokemonVariety.LinooneGalar],
);
new class WurmpleSpecies extends Species {}(
  PokemonSpecies.Wurmple,
  [PokemonVariety.Wurmple],
);
new class SilcoonSpecies extends Species {}(
  PokemonSpecies.Silcoon,
  [PokemonVariety.Silcoon],
);
new class BeautiflySpecies extends Species {}(
  PokemonSpecies.Beautifly,
  [PokemonVariety.Beautifly],
);
new class CascoonSpecies extends Species {}(
  PokemonSpecies.Cascoon,
  [PokemonVariety.Cascoon],
);
new class DustoxSpecies extends Species {}(
  PokemonSpecies.Dustox,
  [PokemonVariety.Dustox],
);
new class LotadSpecies extends Species {}(
  PokemonSpecies.Lotad,
  [PokemonVariety.Lotad],
);
new class LombreSpecies extends Species {}(
  PokemonSpecies.Lombre,
  [PokemonVariety.Lombre],
);
new class LudicoloSpecies extends Species {}(
  PokemonSpecies.Ludicolo,
  [PokemonVariety.Ludicolo],
);
new class SeedotSpecies extends Species {}(
  PokemonSpecies.Seedot,
  [PokemonVariety.Seedot],
);
new class NuzleafSpecies extends Species {}(
  PokemonSpecies.Nuzleaf,
  [PokemonVariety.Nuzleaf],
);
new class ShiftrySpecies extends Species {}(
  PokemonSpecies.Shiftry,
  [PokemonVariety.Shiftry],
);
new class TaillowSpecies extends Species {}(
  PokemonSpecies.Taillow,
  [PokemonVariety.Taillow],
);
new class SwellowSpecies extends Species {}(
  PokemonSpecies.Swellow,
  [PokemonVariety.Swellow],
);
new class WingullSpecies extends Species {}(
  PokemonSpecies.Wingull,
  [PokemonVariety.Wingull],
);
new class PelipperSpecies extends Species {}(
  PokemonSpecies.Pelipper,
  [PokemonVariety.Pelipper],
);
new class RaltsSpecies extends Species {}(
  PokemonSpecies.Ralts,
  [PokemonVariety.Ralts],
);
new class KirliaSpecies extends Species {}(
  PokemonSpecies.Kirlia,
  [PokemonVariety.Kirlia],
);
new class GardevoirSpecies extends Species {}(
  PokemonSpecies.Gardevoir,
  [PokemonVariety.Gardevoir, PokemonVariety.GardevoirMega],
);
new class SurskitSpecies extends Species {}(
  PokemonSpecies.Surskit,
  [PokemonVariety.Surskit],
);
new class MasquerainSpecies extends Species {}(
  PokemonSpecies.Masquerain,
  [PokemonVariety.Masquerain],
);
new class ShroomishSpecies extends Species {}(
  PokemonSpecies.Shroomish,
  [PokemonVariety.Shroomish],
);
new class BreloomSpecies extends Species {}(
  PokemonSpecies.Breloom,
  [PokemonVariety.Breloom],
);
new class SlakothSpecies extends Species {}(
  PokemonSpecies.Slakoth,
  [PokemonVariety.Slakoth],
);
new class VigorothSpecies extends Species {}(
  PokemonSpecies.Vigoroth,
  [PokemonVariety.Vigoroth],
);
new class SlakingSpecies extends Species {}(
  PokemonSpecies.Slaking,
  [PokemonVariety.Slaking],
);
new class NincadaSpecies extends Species {}(
  PokemonSpecies.Nincada,
  [PokemonVariety.Nincada],
);
new class NinjaskSpecies extends Species {}(
  PokemonSpecies.Ninjask,
  [PokemonVariety.Ninjask],
);
new class ShedinjaSpecies extends Species {}(
  PokemonSpecies.Shedinja,
  [PokemonVariety.Shedinja],
);
new class WhismurSpecies extends Species {}(
  PokemonSpecies.Whismur,
  [PokemonVariety.Whismur],
);
new class LoudredSpecies extends Species {}(
  PokemonSpecies.Loudred,
  [PokemonVariety.Loudred],
);
new class ExploudSpecies extends Species {}(
  PokemonSpecies.Exploud,
  [PokemonVariety.Exploud],
);
new class MakuhitaSpecies extends Species {}(
  PokemonSpecies.Makuhita,
  [PokemonVariety.Makuhita],
);
new class HariyamaSpecies extends Species {}(
  PokemonSpecies.Hariyama,
  [PokemonVariety.Hariyama],
);
new class AzurillSpecies extends Species {}(
  PokemonSpecies.Azurill,
  [PokemonVariety.Azurill],
);
new class NosepassSpecies extends Species {}(
  PokemonSpecies.Nosepass,
  [PokemonVariety.Nosepass],
);
new class SkittySpecies extends Species {}(
  PokemonSpecies.Skitty,
  [PokemonVariety.Skitty],
);
new class DelcattySpecies extends Species {}(
  PokemonSpecies.Delcatty,
  [PokemonVariety.Delcatty],
);
new class SableyeSpecies extends Species {}(
  PokemonSpecies.Sableye,
  [PokemonVariety.Sableye, PokemonVariety.SableyeMega],
);
new class MawileSpecies extends Species {}(
  PokemonSpecies.Mawile,
  [PokemonVariety.Mawile, PokemonVariety.MawileMega],
);
new class AronSpecies extends Species {}(
  PokemonSpecies.Aron,
  [PokemonVariety.Aron],
);
new class LaironSpecies extends Species {}(
  PokemonSpecies.Lairon,
  [PokemonVariety.Lairon],
);
new class AggronSpecies extends Species {}(
  PokemonSpecies.Aggron,
  [PokemonVariety.Aggron, PokemonVariety.AggronMega],
);
new class MedititeSpecies extends Species {}(
  PokemonSpecies.Meditite,
  [PokemonVariety.Meditite],
);
new class MedichamSpecies extends Species {}(
  PokemonSpecies.Medicham,
  [PokemonVariety.Medicham, PokemonVariety.MedichamMega],
);
new class ElectrikeSpecies extends Species {}(
  PokemonSpecies.Electrike,
  [PokemonVariety.Electrike],
);
new class ManectricSpecies extends Species {}(
  PokemonSpecies.Manectric,
  [PokemonVariety.Manectric, PokemonVariety.ManectricMega],
);
new class PlusleSpecies extends Species {}(
  PokemonSpecies.Plusle,
  [PokemonVariety.Plusle],
);
new class MinunSpecies extends Species {}(
  PokemonSpecies.Minun,
  [PokemonVariety.Minun],
);
new class VolbeatSpecies extends Species {}(
  PokemonSpecies.Volbeat,
  [PokemonVariety.Volbeat],
);
new class IllumiseSpecies extends Species {}(
  PokemonSpecies.Illumise,
  [PokemonVariety.Illumise],
);
new class RoseliaSpecies extends Species {}(
  PokemonSpecies.Roselia,
  [PokemonVariety.Roselia],
);
new class GulpinSpecies extends Species {}(
  PokemonSpecies.Gulpin,
  [PokemonVariety.Gulpin],
);
new class SwalotSpecies extends Species {}(
  PokemonSpecies.Swalot,
  [PokemonVariety.Swalot],
);
new class CarvanhaSpecies extends Species {}(
  PokemonSpecies.Carvanha,
  [PokemonVariety.Carvanha],
);
new class SharpedoSpecies extends Species {}(
  PokemonSpecies.Sharpedo,
  [PokemonVariety.Sharpedo, PokemonVariety.SharpedoMega],
);
new class WailmerSpecies extends Species {}(
  PokemonSpecies.Wailmer,
  [PokemonVariety.Wailmer],
);
new class WailordSpecies extends Species {}(
  PokemonSpecies.Wailord,
  [PokemonVariety.Wailord],
);
new class NumelSpecies extends Species {}(
  PokemonSpecies.Numel,
  [PokemonVariety.Numel],
);
new class CameruptSpecies extends Species {}(
  PokemonSpecies.Camerupt,
  [PokemonVariety.Camerupt, PokemonVariety.CameruptMega],
);
new class TorkoalSpecies extends Species {}(
  PokemonSpecies.Torkoal,
  [PokemonVariety.Torkoal],
);
new class SpoinkSpecies extends Species {}(
  PokemonSpecies.Spoink,
  [PokemonVariety.Spoink],
);
new class GrumpigSpecies extends Species {}(
  PokemonSpecies.Grumpig,
  [PokemonVariety.Grumpig],
);
new class SpindaSpecies extends Species {}(
  PokemonSpecies.Spinda,
  [PokemonVariety.Spinda],
);
new class TrapinchSpecies extends Species {}(
  PokemonSpecies.Trapinch,
  [PokemonVariety.Trapinch],
);
new class VibravaSpecies extends Species {}(
  PokemonSpecies.Vibrava,
  [PokemonVariety.Vibrava],
);
new class FlygonSpecies extends Species {}(
  PokemonSpecies.Flygon,
  [PokemonVariety.Flygon],
);
new class CacneaSpecies extends Species {}(
  PokemonSpecies.Cacnea,
  [PokemonVariety.Cacnea],
);
new class CacturneSpecies extends Species {}(
  PokemonSpecies.Cacturne,
  [PokemonVariety.Cacturne],
);
new class SwabluSpecies extends Species {}(
  PokemonSpecies.Swablu,
  [PokemonVariety.Swablu],
);
new class AltariaSpecies extends Species {}(
  PokemonSpecies.Altaria,
  [PokemonVariety.Altaria, PokemonVariety.AltariaMega],
);
new class ZangooseSpecies extends Species {}(
  PokemonSpecies.Zangoose,
  [PokemonVariety.Zangoose],
);
new class SeviperSpecies extends Species {}(
  PokemonSpecies.Seviper,
  [PokemonVariety.Seviper],
);
new class LunatoneSpecies extends Species {}(
  PokemonSpecies.Lunatone,
  [PokemonVariety.Lunatone],
);
new class SolrockSpecies extends Species {}(
  PokemonSpecies.Solrock,
  [PokemonVariety.Solrock],
);
new class BarboachSpecies extends Species {}(
  PokemonSpecies.Barboach,
  [PokemonVariety.Barboach],
);
new class WhiscashSpecies extends Species {}(
  PokemonSpecies.Whiscash,
  [PokemonVariety.Whiscash],
);
new class CorphishSpecies extends Species {}(
  PokemonSpecies.Corphish,
  [PokemonVariety.Corphish],
);
new class CrawdauntSpecies extends Species {}(
  PokemonSpecies.Crawdaunt,
  [PokemonVariety.Crawdaunt],
);
new class BaltoySpecies extends Species {}(
  PokemonSpecies.Baltoy,
  [PokemonVariety.Baltoy],
);
new class ClaydolSpecies extends Species {}(
  PokemonSpecies.Claydol,
  [PokemonVariety.Claydol],
);
new class LileepSpecies extends Species {}(
  PokemonSpecies.Lileep,
  [PokemonVariety.Lileep],
);
new class CradilySpecies extends Species {}(
  PokemonSpecies.Cradily,
  [PokemonVariety.Cradily],
);
new class AnorithSpecies extends Species {}(
  PokemonSpecies.Anorith,
  [PokemonVariety.Anorith],
);
new class ArmaldoSpecies extends Species {}(
  PokemonSpecies.Armaldo,
  [PokemonVariety.Armaldo],
);
new class FeebasSpecies extends Species {}(
  PokemonSpecies.Feebas,
  [PokemonVariety.Feebas],
);
new class MiloticSpecies extends Species {}(
  PokemonSpecies.Milotic,
  [PokemonVariety.Milotic],
);
new class CastformSpecies extends Species {}(
  PokemonSpecies.Castform,
  [PokemonVariety.Castform, PokemonVariety.CastformSunny, PokemonVariety.CastformRainy, PokemonVariety.CastformSnowy],
);
new class KecleonSpecies extends Species {}(
  PokemonSpecies.Kecleon,
  [PokemonVariety.Kecleon],
);
new class ShuppetSpecies extends Species {}(
  PokemonSpecies.Shuppet,
  [PokemonVariety.Shuppet],
);
new class BanetteSpecies extends Species {}(
  PokemonSpecies.Banette,
  [PokemonVariety.Banette, PokemonVariety.BanetteMega],
);
new class DuskullSpecies extends Species {}(
  PokemonSpecies.Duskull,
  [PokemonVariety.Duskull],
);
new class DusclopsSpecies extends Species {}(
  PokemonSpecies.Dusclops,
  [PokemonVariety.Dusclops],
);
new class TropiusSpecies extends Species {}(
  PokemonSpecies.Tropius,
  [PokemonVariety.Tropius],
);
new class ChimechoSpecies extends Species {}(
  PokemonSpecies.Chimecho,
  [PokemonVariety.Chimecho],
);
new class AbsolSpecies extends Species {}(
  PokemonSpecies.Absol,
  [PokemonVariety.Absol, PokemonVariety.AbsolMega],
);
new class WynautSpecies extends Species {}(
  PokemonSpecies.Wynaut,
  [PokemonVariety.Wynaut],
);
new class SnoruntSpecies extends Species {}(
  PokemonSpecies.Snorunt,
  [PokemonVariety.Snorunt],
);
new class GlalieSpecies extends Species {}(
  PokemonSpecies.Glalie,
  [PokemonVariety.Glalie, PokemonVariety.GlalieMega],
);
new class SphealSpecies extends Species {}(
  PokemonSpecies.Spheal,
  [PokemonVariety.Spheal],
);
new class SealeoSpecies extends Species {}(
  PokemonSpecies.Sealeo,
  [PokemonVariety.Sealeo],
);
new class WalreinSpecies extends Species {}(
  PokemonSpecies.Walrein,
  [PokemonVariety.Walrein],
);
new class ClamperlSpecies extends Species {}(
  PokemonSpecies.Clamperl,
  [PokemonVariety.Clamperl],
);
new class HuntailSpecies extends Species {}(
  PokemonSpecies.Huntail,
  [PokemonVariety.Huntail],
);
new class GorebyssSpecies extends Species {}(
  PokemonSpecies.Gorebyss,
  [PokemonVariety.Gorebyss],
);
new class RelicanthSpecies extends Species {}(
  PokemonSpecies.Relicanth,
  [PokemonVariety.Relicanth],
);
new class LuvdiscSpecies extends Species {}(
  PokemonSpecies.Luvdisc,
  [PokemonVariety.Luvdisc],
);
new class BagonSpecies extends Species {}(
  PokemonSpecies.Bagon,
  [PokemonVariety.Bagon],
);
new class ShelgonSpecies extends Species {}(
  PokemonSpecies.Shelgon,
  [PokemonVariety.Shelgon],
);
new class SalamenceSpecies extends Species {}(
  PokemonSpecies.Salamence,
  [PokemonVariety.Salamence, PokemonVariety.SalamenceMega],
);
new class BeldumSpecies extends Species {}(
  PokemonSpecies.Beldum,
  [PokemonVariety.Beldum],
);
new class MetangSpecies extends Species {}(
  PokemonSpecies.Metang,
  [PokemonVariety.Metang],
);
new class MetagrossSpecies extends Species {}(
  PokemonSpecies.Metagross,
  [PokemonVariety.Metagross, PokemonVariety.MetagrossMega],
);
new class RegirockSpecies extends Species {}(
  PokemonSpecies.Regirock,
  [PokemonVariety.Regirock],
);
new class RegiceSpecies extends Species {}(
  PokemonSpecies.Regice,
  [PokemonVariety.Regice],
);
new class RegisteelSpecies extends Species {}(
  PokemonSpecies.Registeel,
  [PokemonVariety.Registeel],
);
new class LatiasSpecies extends Species {}(
  PokemonSpecies.Latias,
  [PokemonVariety.Latias, PokemonVariety.LatiasMega],
);
new class LatiosSpecies extends Species {}(
  PokemonSpecies.Latios,
  [PokemonVariety.Latios, PokemonVariety.LatiosMega],
);
new class KyogreSpecies extends Species {}(
  PokemonSpecies.Kyogre,
  [PokemonVariety.Kyogre, PokemonVariety.KyogrePrimal],
);
new class GroudonSpecies extends Species {}(
  PokemonSpecies.Groudon,
  [PokemonVariety.Groudon, PokemonVariety.GroudonPrimal],
);
new class RayquazaSpecies extends Species {}(
  PokemonSpecies.Rayquaza,
  [PokemonVariety.Rayquaza, PokemonVariety.RayquazaMega],
);
new class JirachiSpecies extends Species {}(
  PokemonSpecies.Jirachi,
  [PokemonVariety.Jirachi],
);
new class DeoxysSpecies extends Species {}(
  PokemonSpecies.Deoxys,
  [PokemonVariety.DeoxysNormal, PokemonVariety.DeoxysAttack, PokemonVariety.DeoxysDefense, PokemonVariety.DeoxysSpeed],
);
new class TurtwigSpecies extends Species {}(
  PokemonSpecies.Turtwig,
  [PokemonVariety.Turtwig],
);
new class GrotleSpecies extends Species {}(
  PokemonSpecies.Grotle,
  [PokemonVariety.Grotle],
);
new class TorterraSpecies extends Species {}(
  PokemonSpecies.Torterra,
  [PokemonVariety.Torterra],
);
new class ChimcharSpecies extends Species {}(
  PokemonSpecies.Chimchar,
  [PokemonVariety.Chimchar],
);
new class MonfernoSpecies extends Species {}(
  PokemonSpecies.Monferno,
  [PokemonVariety.Monferno],
);
new class InfernapeSpecies extends Species {}(
  PokemonSpecies.Infernape,
  [PokemonVariety.Infernape],
);
new class PiplupSpecies extends Species {}(
  PokemonSpecies.Piplup,
  [PokemonVariety.Piplup],
);
new class PrinplupSpecies extends Species {}(
  PokemonSpecies.Prinplup,
  [PokemonVariety.Prinplup],
);
new class EmpoleonSpecies extends Species {}(
  PokemonSpecies.Empoleon,
  [PokemonVariety.Empoleon],
);
new class StarlySpecies extends Species {}(
  PokemonSpecies.Starly,
  [PokemonVariety.Starly],
);
new class StaraviaSpecies extends Species {}(
  PokemonSpecies.Staravia,
  [PokemonVariety.Staravia],
);
new class StaraptorSpecies extends Species {}(
  PokemonSpecies.Staraptor,
  [PokemonVariety.Staraptor],
);
new class BidoofSpecies extends Species {}(
  PokemonSpecies.Bidoof,
  [PokemonVariety.Bidoof],
);
new class BibarelSpecies extends Species {}(
  PokemonSpecies.Bibarel,
  [PokemonVariety.Bibarel],
);
new class KricketotSpecies extends Species {}(
  PokemonSpecies.Kricketot,
  [PokemonVariety.Kricketot],
);
new class KricketuneSpecies extends Species {}(
  PokemonSpecies.Kricketune,
  [PokemonVariety.Kricketune],
);
new class ShinxSpecies extends Species {}(
  PokemonSpecies.Shinx,
  [PokemonVariety.Shinx],
);
new class LuxioSpecies extends Species {}(
  PokemonSpecies.Luxio,
  [PokemonVariety.Luxio],
);
new class LuxraySpecies extends Species {}(
  PokemonSpecies.Luxray,
  [PokemonVariety.Luxray],
);
new class BudewSpecies extends Species {}(
  PokemonSpecies.Budew,
  [PokemonVariety.Budew],
);
new class RoseradeSpecies extends Species {}(
  PokemonSpecies.Roserade,
  [PokemonVariety.Roserade],
);
new class CranidosSpecies extends Species {}(
  PokemonSpecies.Cranidos,
  [PokemonVariety.Cranidos],
);
new class RampardosSpecies extends Species {}(
  PokemonSpecies.Rampardos,
  [PokemonVariety.Rampardos],
);
new class ShieldonSpecies extends Species {}(
  PokemonSpecies.Shieldon,
  [PokemonVariety.Shieldon],
);
new class BastiodonSpecies extends Species {}(
  PokemonSpecies.Bastiodon,
  [PokemonVariety.Bastiodon],
);
new class BurmySpecies extends Species {}(
  PokemonSpecies.Burmy,
  [PokemonVariety.Burmy],
);
new class WormadamSpecies extends Species {}(
  PokemonSpecies.Wormadam,
  [PokemonVariety.WormadamPlant, PokemonVariety.WormadamSandy, PokemonVariety.WormadamTrash],
);
new class MothimSpecies extends Species {}(
  PokemonSpecies.Mothim,
  [PokemonVariety.Mothim],
);
new class CombeeSpecies extends Species {}(
  PokemonSpecies.Combee,
  [PokemonVariety.Combee],
);
new class VespiquenSpecies extends Species {}(
  PokemonSpecies.Vespiquen,
  [PokemonVariety.Vespiquen],
);
new class PachirisuSpecies extends Species {}(
  PokemonSpecies.Pachirisu,
  [PokemonVariety.Pachirisu],
);
new class BuizelSpecies extends Species {}(
  PokemonSpecies.Buizel,
  [PokemonVariety.Buizel],
);
new class FloatzelSpecies extends Species {}(
  PokemonSpecies.Floatzel,
  [PokemonVariety.Floatzel],
);
new class CherubiSpecies extends Species {}(
  PokemonSpecies.Cherubi,
  [PokemonVariety.Cherubi],
);
new class CherrimSpecies extends Species {}(
  PokemonSpecies.Cherrim,
  [PokemonVariety.Cherrim],
);
new class ShellosSpecies extends Species {}(
  PokemonSpecies.Shellos,
  [PokemonVariety.Shellos],
);
new class GastrodonSpecies extends Species {}(
  PokemonSpecies.Gastrodon,
  [PokemonVariety.Gastrodon],
);
new class AmbipomSpecies extends Species {}(
  PokemonSpecies.Ambipom,
  [PokemonVariety.Ambipom],
);
new class DrifloonSpecies extends Species {}(
  PokemonSpecies.Drifloon,
  [PokemonVariety.Drifloon],
);
new class DrifblimSpecies extends Species {}(
  PokemonSpecies.Drifblim,
  [PokemonVariety.Drifblim],
);
new class BunearySpecies extends Species {}(
  PokemonSpecies.Buneary,
  [PokemonVariety.Buneary],
);
new class LopunnySpecies extends Species {}(
  PokemonSpecies.Lopunny,
  [PokemonVariety.Lopunny, PokemonVariety.LopunnyMega],
);
new class MismagiusSpecies extends Species {}(
  PokemonSpecies.Mismagius,
  [PokemonVariety.Mismagius],
);
new class HonchkrowSpecies extends Species {}(
  PokemonSpecies.Honchkrow,
  [PokemonVariety.Honchkrow],
);
new class GlameowSpecies extends Species {}(
  PokemonSpecies.Glameow,
  [PokemonVariety.Glameow],
);
new class PuruglySpecies extends Species {}(
  PokemonSpecies.Purugly,
  [PokemonVariety.Purugly],
);
new class ChinglingSpecies extends Species {}(
  PokemonSpecies.Chingling,
  [PokemonVariety.Chingling],
);
new class StunkySpecies extends Species {}(
  PokemonSpecies.Stunky,
  [PokemonVariety.Stunky],
);
new class SkuntankSpecies extends Species {}(
  PokemonSpecies.Skuntank,
  [PokemonVariety.Skuntank],
);
new class BronzorSpecies extends Species {}(
  PokemonSpecies.Bronzor,
  [PokemonVariety.Bronzor],
);
new class BronzongSpecies extends Species {}(
  PokemonSpecies.Bronzong,
  [PokemonVariety.Bronzong],
);
new class BonslySpecies extends Species {}(
  PokemonSpecies.Bonsly,
  [PokemonVariety.Bonsly],
);
new class MimeJrSpecies extends Species {}(
  PokemonSpecies.MimeJr,
  [PokemonVariety.MimeJr],
);
new class HappinySpecies extends Species {}(
  PokemonSpecies.Happiny,
  [PokemonVariety.Happiny],
);
new class ChatotSpecies extends Species {}(
  PokemonSpecies.Chatot,
  [PokemonVariety.Chatot],
);
new class SpiritombSpecies extends Species {}(
  PokemonSpecies.Spiritomb,
  [PokemonVariety.Spiritomb],
);
new class GibleSpecies extends Species {}(
  PokemonSpecies.Gible,
  [PokemonVariety.Gible],
);
new class GabiteSpecies extends Species {}(
  PokemonSpecies.Gabite,
  [PokemonVariety.Gabite],
);
new class GarchompSpecies extends Species {}(
  PokemonSpecies.Garchomp,
  [PokemonVariety.Garchomp, PokemonVariety.GarchompMega],
);
new class MunchlaxSpecies extends Species {}(
  PokemonSpecies.Munchlax,
  [PokemonVariety.Munchlax],
);
new class RioluSpecies extends Species {}(
  PokemonSpecies.Riolu,
  [PokemonVariety.Riolu],
);
new class LucarioSpecies extends Species {}(
  PokemonSpecies.Lucario,
  [PokemonVariety.Lucario, PokemonVariety.LucarioMega],
);
new class HippopotasSpecies extends Species {}(
  PokemonSpecies.Hippopotas,
  [PokemonVariety.Hippopotas],
);
new class HippowdonSpecies extends Species {}(
  PokemonSpecies.Hippowdon,
  [PokemonVariety.Hippowdon],
);
new class SkorupiSpecies extends Species {}(
  PokemonSpecies.Skorupi,
  [PokemonVariety.Skorupi],
);
new class DrapionSpecies extends Species {}(
  PokemonSpecies.Drapion,
  [PokemonVariety.Drapion],
);
new class CroagunkSpecies extends Species {}(
  PokemonSpecies.Croagunk,
  [PokemonVariety.Croagunk],
);
new class ToxicroakSpecies extends Species {}(
  PokemonSpecies.Toxicroak,
  [PokemonVariety.Toxicroak],
);
new class CarnivineSpecies extends Species {}(
  PokemonSpecies.Carnivine,
  [PokemonVariety.Carnivine],
);
new class FinneonSpecies extends Species {}(
  PokemonSpecies.Finneon,
  [PokemonVariety.Finneon],
);
new class LumineonSpecies extends Species {}(
  PokemonSpecies.Lumineon,
  [PokemonVariety.Lumineon],
);
new class MantykeSpecies extends Species {}(
  PokemonSpecies.Mantyke,
  [PokemonVariety.Mantyke],
);
new class SnoverSpecies extends Species {}(
  PokemonSpecies.Snover,
  [PokemonVariety.Snover],
);
new class AbomasnowSpecies extends Species {}(
  PokemonSpecies.Abomasnow,
  [PokemonVariety.Abomasnow, PokemonVariety.AbomasnowMega],
);
new class WeavileSpecies extends Species {}(
  PokemonSpecies.Weavile,
  [PokemonVariety.Weavile],
);
new class MagnezoneSpecies extends Species {}(
  PokemonSpecies.Magnezone,
  [PokemonVariety.Magnezone],
);
new class LickilickySpecies extends Species {}(
  PokemonSpecies.Lickilicky,
  [PokemonVariety.Lickilicky],
);
new class RhyperiorSpecies extends Species {}(
  PokemonSpecies.Rhyperior,
  [PokemonVariety.Rhyperior],
);
new class TangrowthSpecies extends Species {}(
  PokemonSpecies.Tangrowth,
  [PokemonVariety.Tangrowth],
);
new class ElectivireSpecies extends Species {}(
  PokemonSpecies.Electivire,
  [PokemonVariety.Electivire],
);
new class MagmortarSpecies extends Species {}(
  PokemonSpecies.Magmortar,
  [PokemonVariety.Magmortar],
);
new class TogekissSpecies extends Species {}(
  PokemonSpecies.Togekiss,
  [PokemonVariety.Togekiss],
);
new class YanmegaSpecies extends Species {}(
  PokemonSpecies.Yanmega,
  [PokemonVariety.Yanmega],
);
new class LeafeonSpecies extends Species {}(
  PokemonSpecies.Leafeon,
  [PokemonVariety.Leafeon],
);
new class GlaceonSpecies extends Species {}(
  PokemonSpecies.Glaceon,
  [PokemonVariety.Glaceon],
);
new class GliscorSpecies extends Species {}(
  PokemonSpecies.Gliscor,
  [PokemonVariety.Gliscor],
);
new class MamoswineSpecies extends Species {}(
  PokemonSpecies.Mamoswine,
  [PokemonVariety.Mamoswine],
);
new class PorygonZSpecies extends Species {}(
  PokemonSpecies.PorygonZ,
  [PokemonVariety.PorygonZ],
);
new class GalladeSpecies extends Species {}(
  PokemonSpecies.Gallade,
  [PokemonVariety.Gallade, PokemonVariety.GalladeMega],
);
new class ProbopassSpecies extends Species {}(
  PokemonSpecies.Probopass,
  [PokemonVariety.Probopass],
);
new class DusknoirSpecies extends Species {}(
  PokemonSpecies.Dusknoir,
  [PokemonVariety.Dusknoir],
);
new class FroslassSpecies extends Species {}(
  PokemonSpecies.Froslass,
  [PokemonVariety.Froslass],
);
new class RotomSpecies extends Species {}(
  PokemonSpecies.Rotom,
  [PokemonVariety.Rotom, PokemonVariety.RotomHeat, PokemonVariety.RotomWash, PokemonVariety.RotomFrost, PokemonVariety.RotomFan, PokemonVariety.RotomMow],
);
new class UxieSpecies extends Species {}(
  PokemonSpecies.Uxie,
  [PokemonVariety.Uxie],
);
new class MespritSpecies extends Species {}(
  PokemonSpecies.Mesprit,
  [PokemonVariety.Mesprit],
);
new class AzelfSpecies extends Species {}(
  PokemonSpecies.Azelf,
  [PokemonVariety.Azelf],
);
new class DialgaSpecies extends Species {}(
  PokemonSpecies.Dialga,
  [PokemonVariety.Dialga, PokemonVariety.DialgaOrigin],
);
new class PalkiaSpecies extends Species {}(
  PokemonSpecies.Palkia,
  [PokemonVariety.Palkia, PokemonVariety.PalkiaOrigin],
);
new class HeatranSpecies extends Species {}(
  PokemonSpecies.Heatran,
  [PokemonVariety.Heatran],
);
new class RegigigasSpecies extends Species {}(
  PokemonSpecies.Regigigas,
  [PokemonVariety.Regigigas],
);
new class GiratinaSpecies extends Species {}(
  PokemonSpecies.Giratina,
  [PokemonVariety.GiratinaAltered, PokemonVariety.GiratinaOrigin],
);
new class CresseliaSpecies extends Species {}(
  PokemonSpecies.Cresselia,
  [PokemonVariety.Cresselia],
);
new class PhioneSpecies extends Species {}(
  PokemonSpecies.Phione,
  [PokemonVariety.Phione],
);
new class ManaphySpecies extends Species {}(
  PokemonSpecies.Manaphy,
  [PokemonVariety.Manaphy],
);
new class DarkraiSpecies extends Species {}(
  PokemonSpecies.Darkrai,
  [PokemonVariety.Darkrai],
);
new class ShayminSpecies extends Species {}(
  PokemonSpecies.Shaymin,
  [PokemonVariety.ShayminLand, PokemonVariety.ShayminSky],
);
new class ArceusSpecies extends Species {}(
  PokemonSpecies.Arceus,
  [PokemonVariety.Arceus],
);
new class VictiniSpecies extends Species {}(
  PokemonSpecies.Victini,
  [PokemonVariety.Victini],
);
new class SnivySpecies extends Species {}(
  PokemonSpecies.Snivy,
  [PokemonVariety.Snivy],
);
new class ServineSpecies extends Species {}(
  PokemonSpecies.Servine,
  [PokemonVariety.Servine],
);
new class SerperiorSpecies extends Species {}(
  PokemonSpecies.Serperior,
  [PokemonVariety.Serperior],
);
new class TepigSpecies extends Species {}(
  PokemonSpecies.Tepig,
  [PokemonVariety.Tepig],
);
new class PigniteSpecies extends Species {}(
  PokemonSpecies.Pignite,
  [PokemonVariety.Pignite],
);
new class EmboarSpecies extends Species {}(
  PokemonSpecies.Emboar,
  [PokemonVariety.Emboar],
);
new class OshawottSpecies extends Species {}(
  PokemonSpecies.Oshawott,
  [PokemonVariety.Oshawott],
);
new class DewottSpecies extends Species {}(
  PokemonSpecies.Dewott,
  [PokemonVariety.Dewott],
);
new class SamurottSpecies extends Species {}(
  PokemonSpecies.Samurott,
  [PokemonVariety.Samurott, PokemonVariety.SamurottHisui],
);
new class PatratSpecies extends Species {}(
  PokemonSpecies.Patrat,
  [PokemonVariety.Patrat],
);
new class WatchogSpecies extends Species {}(
  PokemonSpecies.Watchog,
  [PokemonVariety.Watchog],
);
new class LillipupSpecies extends Species {}(
  PokemonSpecies.Lillipup,
  [PokemonVariety.Lillipup],
);
new class HerdierSpecies extends Species {}(
  PokemonSpecies.Herdier,
  [PokemonVariety.Herdier],
);
new class StoutlandSpecies extends Species {}(
  PokemonSpecies.Stoutland,
  [PokemonVariety.Stoutland],
);
new class PurrloinSpecies extends Species {}(
  PokemonSpecies.Purrloin,
  [PokemonVariety.Purrloin],
);
new class LiepardSpecies extends Species {}(
  PokemonSpecies.Liepard,
  [PokemonVariety.Liepard],
);
new class PansageSpecies extends Species {}(
  PokemonSpecies.Pansage,
  [PokemonVariety.Pansage],
);
new class SimisageSpecies extends Species {}(
  PokemonSpecies.Simisage,
  [PokemonVariety.Simisage],
);
new class PansearSpecies extends Species {}(
  PokemonSpecies.Pansear,
  [PokemonVariety.Pansear],
);
new class SimisearSpecies extends Species {}(
  PokemonSpecies.Simisear,
  [PokemonVariety.Simisear],
);
new class PanpourSpecies extends Species {}(
  PokemonSpecies.Panpour,
  [PokemonVariety.Panpour],
);
new class SimipourSpecies extends Species {}(
  PokemonSpecies.Simipour,
  [PokemonVariety.Simipour],
);
new class MunnaSpecies extends Species {}(
  PokemonSpecies.Munna,
  [PokemonVariety.Munna],
);
new class MusharnaSpecies extends Species {}(
  PokemonSpecies.Musharna,
  [PokemonVariety.Musharna],
);
new class PidoveSpecies extends Species {}(
  PokemonSpecies.Pidove,
  [PokemonVariety.Pidove],
);
new class TranquillSpecies extends Species {}(
  PokemonSpecies.Tranquill,
  [PokemonVariety.Tranquill],
);
new class UnfezantSpecies extends Species {}(
  PokemonSpecies.Unfezant,
  [PokemonVariety.Unfezant],
);
new class BlitzleSpecies extends Species {}(
  PokemonSpecies.Blitzle,
  [PokemonVariety.Blitzle],
);
new class ZebstrikaSpecies extends Species {}(
  PokemonSpecies.Zebstrika,
  [PokemonVariety.Zebstrika],
);
new class RoggenrolaSpecies extends Species {}(
  PokemonSpecies.Roggenrola,
  [PokemonVariety.Roggenrola],
);
new class BoldoreSpecies extends Species {}(
  PokemonSpecies.Boldore,
  [PokemonVariety.Boldore],
);
new class GigalithSpecies extends Species {}(
  PokemonSpecies.Gigalith,
  [PokemonVariety.Gigalith],
);
new class WoobatSpecies extends Species {}(
  PokemonSpecies.Woobat,
  [PokemonVariety.Woobat],
);
new class SwoobatSpecies extends Species {}(
  PokemonSpecies.Swoobat,
  [PokemonVariety.Swoobat],
);
new class DrilburSpecies extends Species {}(
  PokemonSpecies.Drilbur,
  [PokemonVariety.Drilbur],
);
new class ExcadrillSpecies extends Species {}(
  PokemonSpecies.Excadrill,
  [PokemonVariety.Excadrill],
);
new class AudinoSpecies extends Species {}(
  PokemonSpecies.Audino,
  [PokemonVariety.Audino, PokemonVariety.AudinoMega],
);
new class TimburrSpecies extends Species {}(
  PokemonSpecies.Timburr,
  [PokemonVariety.Timburr],
);
new class GurdurrSpecies extends Species {}(
  PokemonSpecies.Gurdurr,
  [PokemonVariety.Gurdurr],
);
new class ConkeldurrSpecies extends Species {}(
  PokemonSpecies.Conkeldurr,
  [PokemonVariety.Conkeldurr],
);
new class TympoleSpecies extends Species {}(
  PokemonSpecies.Tympole,
  [PokemonVariety.Tympole],
);
new class PalpitoadSpecies extends Species {}(
  PokemonSpecies.Palpitoad,
  [PokemonVariety.Palpitoad],
);
new class SeismitoadSpecies extends Species {}(
  PokemonSpecies.Seismitoad,
  [PokemonVariety.Seismitoad],
);
new class ThrohSpecies extends Species {}(
  PokemonSpecies.Throh,
  [PokemonVariety.Throh],
);
new class SawkSpecies extends Species {}(
  PokemonSpecies.Sawk,
  [PokemonVariety.Sawk],
);
new class SewaddleSpecies extends Species {}(
  PokemonSpecies.Sewaddle,
  [PokemonVariety.Sewaddle],
);
new class SwadloonSpecies extends Species {}(
  PokemonSpecies.Swadloon,
  [PokemonVariety.Swadloon],
);
new class LeavannySpecies extends Species {}(
  PokemonSpecies.Leavanny,
  [PokemonVariety.Leavanny],
);
new class VenipedeSpecies extends Species {}(
  PokemonSpecies.Venipede,
  [PokemonVariety.Venipede],
);
new class WhirlipedeSpecies extends Species {}(
  PokemonSpecies.Whirlipede,
  [PokemonVariety.Whirlipede],
);
new class ScolipedeSpecies extends Species {}(
  PokemonSpecies.Scolipede,
  [PokemonVariety.Scolipede],
);
new class CottoneeSpecies extends Species {}(
  PokemonSpecies.Cottonee,
  [PokemonVariety.Cottonee],
);
new class WhimsicottSpecies extends Species {}(
  PokemonSpecies.Whimsicott,
  [PokemonVariety.Whimsicott],
);
new class PetililSpecies extends Species {}(
  PokemonSpecies.Petilil,
  [PokemonVariety.Petilil],
);
new class LilligantSpecies extends Species {}(
  PokemonSpecies.Lilligant,
  [PokemonVariety.Lilligant, PokemonVariety.LilligantHisui],
);
new class BasculinSpecies extends Species {}(
  PokemonSpecies.Basculin,
  [PokemonVariety.BasculinRedStriped, PokemonVariety.BasculinBlueStriped, PokemonVariety.BasculinWhiteStriped],
);
new class SandileSpecies extends Species {}(
  PokemonSpecies.Sandile,
  [PokemonVariety.Sandile],
);
new class KrokorokSpecies extends Species {}(
  PokemonSpecies.Krokorok,
  [PokemonVariety.Krokorok],
);
new class KrookodileSpecies extends Species {}(
  PokemonSpecies.Krookodile,
  [PokemonVariety.Krookodile],
);
new class DarumakaSpecies extends Species {}(
  PokemonSpecies.Darumaka,
  [PokemonVariety.Darumaka, PokemonVariety.DarumakaGalar],
);
new class DarmanitanSpecies extends Species {}(
  PokemonSpecies.Darmanitan,
  [PokemonVariety.DarmanitanStandard, PokemonVariety.DarmanitanZen, PokemonVariety.DarmanitanGalarStandard, PokemonVariety.DarmanitanGalarZen],
);
new class MaractusSpecies extends Species {}(
  PokemonSpecies.Maractus,
  [PokemonVariety.Maractus],
);
new class DwebbleSpecies extends Species {}(
  PokemonSpecies.Dwebble,
  [PokemonVariety.Dwebble],
);
new class CrustleSpecies extends Species {}(
  PokemonSpecies.Crustle,
  [PokemonVariety.Crustle],
);
new class ScraggySpecies extends Species {}(
  PokemonSpecies.Scraggy,
  [PokemonVariety.Scraggy],
);
new class ScraftySpecies extends Species {}(
  PokemonSpecies.Scrafty,
  [PokemonVariety.Scrafty],
);
new class SigilyphSpecies extends Species {}(
  PokemonSpecies.Sigilyph,
  [PokemonVariety.Sigilyph],
);
new class YamaskSpecies extends Species {}(
  PokemonSpecies.Yamask,
  [PokemonVariety.Yamask, PokemonVariety.YamaskGalar],
);
new class CofagrigusSpecies extends Species {}(
  PokemonSpecies.Cofagrigus,
  [PokemonVariety.Cofagrigus],
);
new class TirtougaSpecies extends Species {}(
  PokemonSpecies.Tirtouga,
  [PokemonVariety.Tirtouga],
);
new class CarracostaSpecies extends Species {}(
  PokemonSpecies.Carracosta,
  [PokemonVariety.Carracosta],
);
new class ArchenSpecies extends Species {}(
  PokemonSpecies.Archen,
  [PokemonVariety.Archen],
);
new class ArcheopsSpecies extends Species {}(
  PokemonSpecies.Archeops,
  [PokemonVariety.Archeops],
);
new class TrubbishSpecies extends Species {}(
  PokemonSpecies.Trubbish,
  [PokemonVariety.Trubbish],
);
new class GarbodorSpecies extends Species {}(
  PokemonSpecies.Garbodor,
  [PokemonVariety.Garbodor, PokemonVariety.GarbodorGmax],
);
new class ZoruaSpecies extends Species {}(
  PokemonSpecies.Zorua,
  [PokemonVariety.Zorua, PokemonVariety.ZoruaHisui],
);
new class ZoroarkSpecies extends Species {}(
  PokemonSpecies.Zoroark,
  [PokemonVariety.Zoroark, PokemonVariety.ZoroarkHisui],
);
new class MinccinoSpecies extends Species {}(
  PokemonSpecies.Minccino,
  [PokemonVariety.Minccino],
);
new class CinccinoSpecies extends Species {}(
  PokemonSpecies.Cinccino,
  [PokemonVariety.Cinccino],
);
new class GothitaSpecies extends Species {}(
  PokemonSpecies.Gothita,
  [PokemonVariety.Gothita],
);
new class GothoritaSpecies extends Species {}(
  PokemonSpecies.Gothorita,
  [PokemonVariety.Gothorita],
);
new class GothitelleSpecies extends Species {}(
  PokemonSpecies.Gothitelle,
  [PokemonVariety.Gothitelle],
);
new class SolosisSpecies extends Species {}(
  PokemonSpecies.Solosis,
  [PokemonVariety.Solosis],
);
new class DuosionSpecies extends Species {}(
  PokemonSpecies.Duosion,
  [PokemonVariety.Duosion],
);
new class ReuniclusSpecies extends Species {}(
  PokemonSpecies.Reuniclus,
  [PokemonVariety.Reuniclus],
);
new class DucklettSpecies extends Species {}(
  PokemonSpecies.Ducklett,
  [PokemonVariety.Ducklett],
);
new class SwannaSpecies extends Species {}(
  PokemonSpecies.Swanna,
  [PokemonVariety.Swanna],
);
new class VanilliteSpecies extends Species {}(
  PokemonSpecies.Vanillite,
  [PokemonVariety.Vanillite],
);
new class VanillishSpecies extends Species {}(
  PokemonSpecies.Vanillish,
  [PokemonVariety.Vanillish],
);
new class VanilluxeSpecies extends Species {}(
  PokemonSpecies.Vanilluxe,
  [PokemonVariety.Vanilluxe],
);
new class DeerlingSpecies extends Species {}(
  PokemonSpecies.Deerling,
  [PokemonVariety.Deerling],
);
new class SawsbuckSpecies extends Species {}(
  PokemonSpecies.Sawsbuck,
  [PokemonVariety.Sawsbuck],
);
new class EmolgaSpecies extends Species {}(
  PokemonSpecies.Emolga,
  [PokemonVariety.Emolga],
);
new class KarrablastSpecies extends Species {}(
  PokemonSpecies.Karrablast,
  [PokemonVariety.Karrablast],
);
new class EscavalierSpecies extends Species {}(
  PokemonSpecies.Escavalier,
  [PokemonVariety.Escavalier],
);
new class FoongusSpecies extends Species {}(
  PokemonSpecies.Foongus,
  [PokemonVariety.Foongus],
);
new class AmoongussSpecies extends Species {}(
  PokemonSpecies.Amoonguss,
  [PokemonVariety.Amoonguss],
);
new class FrillishSpecies extends Species {}(
  PokemonSpecies.Frillish,
  [PokemonVariety.Frillish],
);
new class JellicentSpecies extends Species {}(
  PokemonSpecies.Jellicent,
  [PokemonVariety.Jellicent],
);
new class AlomomolaSpecies extends Species {}(
  PokemonSpecies.Alomomola,
  [PokemonVariety.Alomomola],
);
new class JoltikSpecies extends Species {}(
  PokemonSpecies.Joltik,
  [PokemonVariety.Joltik],
);
new class GalvantulaSpecies extends Species {}(
  PokemonSpecies.Galvantula,
  [PokemonVariety.Galvantula],
);
new class FerroseedSpecies extends Species {}(
  PokemonSpecies.Ferroseed,
  [PokemonVariety.Ferroseed],
);
new class FerrothornSpecies extends Species {}(
  PokemonSpecies.Ferrothorn,
  [PokemonVariety.Ferrothorn],
);
new class KlinkSpecies extends Species {}(
  PokemonSpecies.Klink,
  [PokemonVariety.Klink],
);
new class KlangSpecies extends Species {}(
  PokemonSpecies.Klang,
  [PokemonVariety.Klang],
);
new class KlinklangSpecies extends Species {}(
  PokemonSpecies.Klinklang,
  [PokemonVariety.Klinklang],
);
new class TynamoSpecies extends Species {}(
  PokemonSpecies.Tynamo,
  [PokemonVariety.Tynamo],
);
new class EelektrikSpecies extends Species {}(
  PokemonSpecies.Eelektrik,
  [PokemonVariety.Eelektrik],
);
new class EelektrossSpecies extends Species {}(
  PokemonSpecies.Eelektross,
  [PokemonVariety.Eelektross],
);
new class ElgyemSpecies extends Species {}(
  PokemonSpecies.Elgyem,
  [PokemonVariety.Elgyem],
);
new class BeheeyemSpecies extends Species {}(
  PokemonSpecies.Beheeyem,
  [PokemonVariety.Beheeyem],
);
new class LitwickSpecies extends Species {}(
  PokemonSpecies.Litwick,
  [PokemonVariety.Litwick],
);
new class LampentSpecies extends Species {}(
  PokemonSpecies.Lampent,
  [PokemonVariety.Lampent],
);
new class ChandelureSpecies extends Species {}(
  PokemonSpecies.Chandelure,
  [PokemonVariety.Chandelure],
);
new class AxewSpecies extends Species {}(
  PokemonSpecies.Axew,
  [PokemonVariety.Axew],
);
new class FraxureSpecies extends Species {}(
  PokemonSpecies.Fraxure,
  [PokemonVariety.Fraxure],
);
new class HaxorusSpecies extends Species {}(
  PokemonSpecies.Haxorus,
  [PokemonVariety.Haxorus],
);
new class CubchooSpecies extends Species {}(
  PokemonSpecies.Cubchoo,
  [PokemonVariety.Cubchoo],
);
new class BearticSpecies extends Species {}(
  PokemonSpecies.Beartic,
  [PokemonVariety.Beartic],
);
new class CryogonalSpecies extends Species {}(
  PokemonSpecies.Cryogonal,
  [PokemonVariety.Cryogonal],
);
new class ShelmetSpecies extends Species {}(
  PokemonSpecies.Shelmet,
  [PokemonVariety.Shelmet],
);
new class AccelgorSpecies extends Species {}(
  PokemonSpecies.Accelgor,
  [PokemonVariety.Accelgor],
);
new class StunfiskSpecies extends Species {}(
  PokemonSpecies.Stunfisk,
  [PokemonVariety.Stunfisk, PokemonVariety.StunfiskGalar],
);
new class MienfooSpecies extends Species {}(
  PokemonSpecies.Mienfoo,
  [PokemonVariety.Mienfoo],
);
new class MienshaoSpecies extends Species {}(
  PokemonSpecies.Mienshao,
  [PokemonVariety.Mienshao],
);
new class DruddigonSpecies extends Species {}(
  PokemonSpecies.Druddigon,
  [PokemonVariety.Druddigon],
);
new class GolettSpecies extends Species {}(
  PokemonSpecies.Golett,
  [PokemonVariety.Golett],
);
new class GolurkSpecies extends Species {}(
  PokemonSpecies.Golurk,
  [PokemonVariety.Golurk],
);
new class PawniardSpecies extends Species {}(
  PokemonSpecies.Pawniard,
  [PokemonVariety.Pawniard],
);
new class BisharpSpecies extends Species {}(
  PokemonSpecies.Bisharp,
  [PokemonVariety.Bisharp],
);
new class BouffalantSpecies extends Species {}(
  PokemonSpecies.Bouffalant,
  [PokemonVariety.Bouffalant],
);
new class RuffletSpecies extends Species {}(
  PokemonSpecies.Rufflet,
  [PokemonVariety.Rufflet],
);
new class BraviarySpecies extends Species {}(
  PokemonSpecies.Braviary,
  [PokemonVariety.Braviary, PokemonVariety.BraviaryHisui],
);
new class VullabySpecies extends Species {}(
  PokemonSpecies.Vullaby,
  [PokemonVariety.Vullaby],
);
new class MandibuzzSpecies extends Species {}(
  PokemonSpecies.Mandibuzz,
  [PokemonVariety.Mandibuzz],
);
new class HeatmorSpecies extends Species {}(
  PokemonSpecies.Heatmor,
  [PokemonVariety.Heatmor],
);
new class DurantSpecies extends Species {}(
  PokemonSpecies.Durant,
  [PokemonVariety.Durant],
);
new class DeinoSpecies extends Species {}(
  PokemonSpecies.Deino,
  [PokemonVariety.Deino],
);
new class ZweilousSpecies extends Species {}(
  PokemonSpecies.Zweilous,
  [PokemonVariety.Zweilous],
);
new class HydreigonSpecies extends Species {}(
  PokemonSpecies.Hydreigon,
  [PokemonVariety.Hydreigon],
);
new class LarvestaSpecies extends Species {}(
  PokemonSpecies.Larvesta,
  [PokemonVariety.Larvesta],
);
new class VolcaronaSpecies extends Species {}(
  PokemonSpecies.Volcarona,
  [PokemonVariety.Volcarona],
);
new class CobalionSpecies extends Species {}(
  PokemonSpecies.Cobalion,
  [PokemonVariety.Cobalion],
);
new class TerrakionSpecies extends Species {}(
  PokemonSpecies.Terrakion,
  [PokemonVariety.Terrakion],
);
new class VirizionSpecies extends Species {}(
  PokemonSpecies.Virizion,
  [PokemonVariety.Virizion],
);
new class TornadusSpecies extends Species {}(
  PokemonSpecies.Tornadus,
  [PokemonVariety.TornadusIncarnate, PokemonVariety.TornadusTherian],
);
new class ThundurusSpecies extends Species {}(
  PokemonSpecies.Thundurus,
  [PokemonVariety.ThundurusIncarnate, PokemonVariety.ThundurusTherian],
);
new class ReshiramSpecies extends Species {}(
  PokemonSpecies.Reshiram,
  [PokemonVariety.Reshiram],
);
new class ZekromSpecies extends Species {}(
  PokemonSpecies.Zekrom,
  [PokemonVariety.Zekrom],
);
new class LandorusSpecies extends Species {}(
  PokemonSpecies.Landorus,
  [PokemonVariety.LandorusIncarnate, PokemonVariety.LandorusTherian],
);
new class KyuremSpecies extends Species {}(
  PokemonSpecies.Kyurem,
  [PokemonVariety.Kyurem, PokemonVariety.KyuremBlack, PokemonVariety.KyuremWhite],
);
new class KeldeoSpecies extends Species {}(
  PokemonSpecies.Keldeo,
  [PokemonVariety.KeldeoOrdinary, PokemonVariety.KeldeoResolute],
);
new class MeloettaSpecies extends Species {}(
  PokemonSpecies.Meloetta,
  [PokemonVariety.MeloettaAria, PokemonVariety.MeloettaPirouette],
);
new class GenesectSpecies extends Species {}(
  PokemonSpecies.Genesect,
  [PokemonVariety.Genesect],
);
new class ChespinSpecies extends Species {}(
  PokemonSpecies.Chespin,
  [PokemonVariety.Chespin],
);
new class QuilladinSpecies extends Species {}(
  PokemonSpecies.Quilladin,
  [PokemonVariety.Quilladin],
);
new class ChesnaughtSpecies extends Species {}(
  PokemonSpecies.Chesnaught,
  [PokemonVariety.Chesnaught],
);
new class FennekinSpecies extends Species {}(
  PokemonSpecies.Fennekin,
  [PokemonVariety.Fennekin],
);
new class BraixenSpecies extends Species {}(
  PokemonSpecies.Braixen,
  [PokemonVariety.Braixen],
);
new class DelphoxSpecies extends Species {}(
  PokemonSpecies.Delphox,
  [PokemonVariety.Delphox],
);
new class FroakieSpecies extends Species {}(
  PokemonSpecies.Froakie,
  [PokemonVariety.Froakie],
);
new class FrogadierSpecies extends Species {}(
  PokemonSpecies.Frogadier,
  [PokemonVariety.Frogadier],
);
new class GreninjaSpecies extends Species {}(
  PokemonSpecies.Greninja,
  [PokemonVariety.Greninja, PokemonVariety.GreninjaBattleBond, PokemonVariety.GreninjaAsh],
);
new class BunnelbySpecies extends Species {}(
  PokemonSpecies.Bunnelby,
  [PokemonVariety.Bunnelby],
);
new class DiggersbySpecies extends Species {}(
  PokemonSpecies.Diggersby,
  [PokemonVariety.Diggersby],
);
new class FletchlingSpecies extends Species {}(
  PokemonSpecies.Fletchling,
  [PokemonVariety.Fletchling],
);
new class FletchinderSpecies extends Species {}(
  PokemonSpecies.Fletchinder,
  [PokemonVariety.Fletchinder],
);
new class TalonflameSpecies extends Species {}(
  PokemonSpecies.Talonflame,
  [PokemonVariety.Talonflame],
);
new class ScatterbugSpecies extends Species {}(
  PokemonSpecies.Scatterbug,
  [PokemonVariety.Scatterbug],
);
new class SpewpaSpecies extends Species {}(
  PokemonSpecies.Spewpa,
  [PokemonVariety.Spewpa],
);
new class VivillonSpecies extends Species {}(
  PokemonSpecies.Vivillon,
  [PokemonVariety.Vivillon],
);
new class LitleoSpecies extends Species {}(
  PokemonSpecies.Litleo,
  [PokemonVariety.Litleo],
);
new class PyroarSpecies extends Species {}(
  PokemonSpecies.Pyroar,
  [PokemonVariety.Pyroar],
);
new class FlabebeSpecies extends Species {}(
  PokemonSpecies.Flabebe,
  [PokemonVariety.Flabebe],
);
new class FloetteSpecies extends Species {}(
  PokemonSpecies.Floette,
  [PokemonVariety.Floette, PokemonVariety.FloetteEternal],
);
new class FlorgesSpecies extends Species {}(
  PokemonSpecies.Florges,
  [PokemonVariety.Florges],
);
new class SkiddoSpecies extends Species {}(
  PokemonSpecies.Skiddo,
  [PokemonVariety.Skiddo],
);
new class GogoatSpecies extends Species {}(
  PokemonSpecies.Gogoat,
  [PokemonVariety.Gogoat],
);
new class PanchamSpecies extends Species {}(
  PokemonSpecies.Pancham,
  [PokemonVariety.Pancham],
);
new class PangoroSpecies extends Species {}(
  PokemonSpecies.Pangoro,
  [PokemonVariety.Pangoro],
);
new class FurfrouSpecies extends Species {}(
  PokemonSpecies.Furfrou,
  [PokemonVariety.Furfrou],
);
new class EspurrSpecies extends Species {}(
  PokemonSpecies.Espurr,
  [PokemonVariety.Espurr],
);
new class MeowsticSpecies extends Species {}(
  PokemonSpecies.Meowstic,
  [PokemonVariety.MeowsticMale, PokemonVariety.MeowsticFemale],
);
new class HonedgeSpecies extends Species {}(
  PokemonSpecies.Honedge,
  [PokemonVariety.Honedge],
);
new class DoubladeSpecies extends Species {}(
  PokemonSpecies.Doublade,
  [PokemonVariety.Doublade],
);
new class AegislashSpecies extends Species {}(
  PokemonSpecies.Aegislash,
  [PokemonVariety.AegislashShield, PokemonVariety.AegislashBlade],
);
new class SpritzeeSpecies extends Species {}(
  PokemonSpecies.Spritzee,
  [PokemonVariety.Spritzee],
);
new class AromatisseSpecies extends Species {}(
  PokemonSpecies.Aromatisse,
  [PokemonVariety.Aromatisse],
);
new class SwirlixSpecies extends Species {}(
  PokemonSpecies.Swirlix,
  [PokemonVariety.Swirlix],
);
new class SlurpuffSpecies extends Species {}(
  PokemonSpecies.Slurpuff,
  [PokemonVariety.Slurpuff],
);
new class InkaySpecies extends Species {}(
  PokemonSpecies.Inkay,
  [PokemonVariety.Inkay],
);
new class MalamarSpecies extends Species {}(
  PokemonSpecies.Malamar,
  [PokemonVariety.Malamar],
);
new class BinacleSpecies extends Species {}(
  PokemonSpecies.Binacle,
  [PokemonVariety.Binacle],
);
new class BarbaracleSpecies extends Species {}(
  PokemonSpecies.Barbaracle,
  [PokemonVariety.Barbaracle],
);
new class SkrelpSpecies extends Species {}(
  PokemonSpecies.Skrelp,
  [PokemonVariety.Skrelp],
);
new class DragalgeSpecies extends Species {}(
  PokemonSpecies.Dragalge,
  [PokemonVariety.Dragalge],
);
new class ClauncherSpecies extends Species {}(
  PokemonSpecies.Clauncher,
  [PokemonVariety.Clauncher],
);
new class ClawitzerSpecies extends Species {}(
  PokemonSpecies.Clawitzer,
  [PokemonVariety.Clawitzer],
);
new class HelioptileSpecies extends Species {}(
  PokemonSpecies.Helioptile,
  [PokemonVariety.Helioptile],
);
new class HelioliskSpecies extends Species {}(
  PokemonSpecies.Heliolisk,
  [PokemonVariety.Heliolisk],
);
new class TyruntSpecies extends Species {}(
  PokemonSpecies.Tyrunt,
  [PokemonVariety.Tyrunt],
);
new class TyrantrumSpecies extends Species {}(
  PokemonSpecies.Tyrantrum,
  [PokemonVariety.Tyrantrum],
);
new class AmauraSpecies extends Species {}(
  PokemonSpecies.Amaura,
  [PokemonVariety.Amaura],
);
new class AurorusSpecies extends Species {}(
  PokemonSpecies.Aurorus,
  [PokemonVariety.Aurorus],
);
new class SylveonSpecies extends Species {}(
  PokemonSpecies.Sylveon,
  [PokemonVariety.Sylveon],
);
new class HawluchaSpecies extends Species {}(
  PokemonSpecies.Hawlucha,
  [PokemonVariety.Hawlucha],
);
new class DedenneSpecies extends Species {}(
  PokemonSpecies.Dedenne,
  [PokemonVariety.Dedenne],
);
new class CarbinkSpecies extends Species {}(
  PokemonSpecies.Carbink,
  [PokemonVariety.Carbink],
);
new class GoomySpecies extends Species {}(
  PokemonSpecies.Goomy,
  [PokemonVariety.Goomy],
);
new class SliggooSpecies extends Species {}(
  PokemonSpecies.Sliggoo,
  [PokemonVariety.Sliggoo, PokemonVariety.SliggooHisui],
);
new class GoodraSpecies extends Species {}(
  PokemonSpecies.Goodra,
  [PokemonVariety.Goodra, PokemonVariety.GoodraHisui],
);
new class KlefkiSpecies extends Species {}(
  PokemonSpecies.Klefki,
  [PokemonVariety.Klefki],
);
new class PhantumpSpecies extends Species {}(
  PokemonSpecies.Phantump,
  [PokemonVariety.Phantump],
);
new class TrevenantSpecies extends Species {}(
  PokemonSpecies.Trevenant,
  [PokemonVariety.Trevenant],
);
new class PumpkabooSpecies extends Species {}(
  PokemonSpecies.Pumpkaboo,
  [PokemonVariety.PumpkabooAverage, PokemonVariety.PumpkabooSmall, PokemonVariety.PumpkabooLarge, PokemonVariety.PumpkabooSuper],
);
new class GourgeistSpecies extends Species {}(
  PokemonSpecies.Gourgeist,
  [PokemonVariety.GourgeistAverage, PokemonVariety.GourgeistSmall, PokemonVariety.GourgeistLarge, PokemonVariety.GourgeistSuper],
);
new class BergmiteSpecies extends Species {}(
  PokemonSpecies.Bergmite,
  [PokemonVariety.Bergmite],
);
new class AvaluggSpecies extends Species {}(
  PokemonSpecies.Avalugg,
  [PokemonVariety.Avalugg, PokemonVariety.AvaluggHisui],
);
new class NoibatSpecies extends Species {}(
  PokemonSpecies.Noibat,
  [PokemonVariety.Noibat],
);
new class NoivernSpecies extends Species {}(
  PokemonSpecies.Noivern,
  [PokemonVariety.Noivern],
);
new class XerneasSpecies extends Species {}(
  PokemonSpecies.Xerneas,
  [PokemonVariety.Xerneas],
);
new class YveltalSpecies extends Species {}(
  PokemonSpecies.Yveltal,
  [PokemonVariety.Yveltal],
);
new class ZygardeSpecies extends Species {}(
  PokemonSpecies.Zygarde,
  [PokemonVariety.Zygarde50, PokemonVariety.Zygarde10PowerConstruct, PokemonVariety.Zygarde50PowerConstruct, PokemonVariety.ZygardeComplete, PokemonVariety.Zygarde10],
);
new class DiancieSpecies extends Species {}(
  PokemonSpecies.Diancie,
  [PokemonVariety.Diancie, PokemonVariety.DiancieMega],
);
new class HoopaSpecies extends Species {}(
  PokemonSpecies.Hoopa,
  [PokemonVariety.Hoopa, PokemonVariety.HoopaUnbound],
);
new class VolcanionSpecies extends Species {}(
  PokemonSpecies.Volcanion,
  [PokemonVariety.Volcanion],
);
new class RowletSpecies extends Species {}(
  PokemonSpecies.Rowlet,
  [PokemonVariety.Rowlet],
);
new class DartrixSpecies extends Species {}(
  PokemonSpecies.Dartrix,
  [PokemonVariety.Dartrix],
);
new class DecidueyeSpecies extends Species {}(
  PokemonSpecies.Decidueye,
  [PokemonVariety.Decidueye, PokemonVariety.DecidueyeHisui],
);
new class LittenSpecies extends Species {}(
  PokemonSpecies.Litten,
  [PokemonVariety.Litten],
);
new class TorracatSpecies extends Species {}(
  PokemonSpecies.Torracat,
  [PokemonVariety.Torracat],
);
new class IncineroarSpecies extends Species {}(
  PokemonSpecies.Incineroar,
  [PokemonVariety.Incineroar],
);
new class PopplioSpecies extends Species {}(
  PokemonSpecies.Popplio,
  [PokemonVariety.Popplio],
);
new class BrionneSpecies extends Species {}(
  PokemonSpecies.Brionne,
  [PokemonVariety.Brionne],
);
new class PrimarinaSpecies extends Species {}(
  PokemonSpecies.Primarina,
  [PokemonVariety.Primarina],
);
new class PikipekSpecies extends Species {}(
  PokemonSpecies.Pikipek,
  [PokemonVariety.Pikipek],
);
new class TrumbeakSpecies extends Species {}(
  PokemonSpecies.Trumbeak,
  [PokemonVariety.Trumbeak],
);
new class ToucannonSpecies extends Species {}(
  PokemonSpecies.Toucannon,
  [PokemonVariety.Toucannon],
);
new class YungoosSpecies extends Species {}(
  PokemonSpecies.Yungoos,
  [PokemonVariety.Yungoos],
);
new class GumshoosSpecies extends Species {}(
  PokemonSpecies.Gumshoos,
  [PokemonVariety.Gumshoos, PokemonVariety.GumshoosTotem],
);
new class GrubbinSpecies extends Species {}(
  PokemonSpecies.Grubbin,
  [PokemonVariety.Grubbin],
);
new class CharjabugSpecies extends Species {}(
  PokemonSpecies.Charjabug,
  [PokemonVariety.Charjabug],
);
new class VikavoltSpecies extends Species {}(
  PokemonSpecies.Vikavolt,
  [PokemonVariety.Vikavolt, PokemonVariety.VikavoltTotem],
);
new class CrabrawlerSpecies extends Species {}(
  PokemonSpecies.Crabrawler,
  [PokemonVariety.Crabrawler],
);
new class CrabominableSpecies extends Species {}(
  PokemonSpecies.Crabominable,
  [PokemonVariety.Crabominable],
);
new class OricorioSpecies extends Species {}(
  PokemonSpecies.Oricorio,
  [PokemonVariety.OricorioBaile, PokemonVariety.OricorioPomPom, PokemonVariety.OricorioPau, PokemonVariety.OricorioSensu],
);
new class CutieflySpecies extends Species {}(
  PokemonSpecies.Cutiefly,
  [PokemonVariety.Cutiefly],
);
new class RibombeeSpecies extends Species {}(
  PokemonSpecies.Ribombee,
  [PokemonVariety.Ribombee, PokemonVariety.RibombeeTotem],
);
new class RockruffSpecies extends Species {}(
  PokemonSpecies.Rockruff,
  [PokemonVariety.Rockruff, PokemonVariety.RockruffOwnTempo],
);
new class LycanrocSpecies extends Species {}(
  PokemonSpecies.Lycanroc,
  [PokemonVariety.LycanrocMidday, PokemonVariety.LycanrocMidnight, PokemonVariety.LycanrocDusk],
);
new class WishiwashiSpecies extends Species {}(
  PokemonSpecies.Wishiwashi,
  [PokemonVariety.WishiwashiSolo, PokemonVariety.WishiwashiSchool],
);
new class MareanieSpecies extends Species {}(
  PokemonSpecies.Mareanie,
  [PokemonVariety.Mareanie],
);
new class ToxapexSpecies extends Species {}(
  PokemonSpecies.Toxapex,
  [PokemonVariety.Toxapex],
);
new class MudbraySpecies extends Species {}(
  PokemonSpecies.Mudbray,
  [PokemonVariety.Mudbray],
);
new class MudsdaleSpecies extends Species {}(
  PokemonSpecies.Mudsdale,
  [PokemonVariety.Mudsdale],
);
new class DewpiderSpecies extends Species {}(
  PokemonSpecies.Dewpider,
  [PokemonVariety.Dewpider],
);
new class AraquanidSpecies extends Species {}(
  PokemonSpecies.Araquanid,
  [PokemonVariety.Araquanid, PokemonVariety.AraquanidTotem],
);
new class FomantisSpecies extends Species {}(
  PokemonSpecies.Fomantis,
  [PokemonVariety.Fomantis],
);
new class LurantisSpecies extends Species {}(
  PokemonSpecies.Lurantis,
  [PokemonVariety.Lurantis, PokemonVariety.LurantisTotem],
);
new class MorelullSpecies extends Species {}(
  PokemonSpecies.Morelull,
  [PokemonVariety.Morelull],
);
new class ShiinoticSpecies extends Species {}(
  PokemonSpecies.Shiinotic,
  [PokemonVariety.Shiinotic],
);
new class SalanditSpecies extends Species {}(
  PokemonSpecies.Salandit,
  [PokemonVariety.Salandit],
);
new class SalazzleSpecies extends Species {}(
  PokemonSpecies.Salazzle,
  [PokemonVariety.Salazzle, PokemonVariety.SalazzleTotem],
);
new class StuffulSpecies extends Species {}(
  PokemonSpecies.Stufful,
  [PokemonVariety.Stufful],
);
new class BewearSpecies extends Species {}(
  PokemonSpecies.Bewear,
  [PokemonVariety.Bewear],
);
new class BounsweetSpecies extends Species {}(
  PokemonSpecies.Bounsweet,
  [PokemonVariety.Bounsweet],
);
new class SteeneeSpecies extends Species {}(
  PokemonSpecies.Steenee,
  [PokemonVariety.Steenee],
);
new class TsareenaSpecies extends Species {}(
  PokemonSpecies.Tsareena,
  [PokemonVariety.Tsareena],
);
new class ComfeySpecies extends Species {}(
  PokemonSpecies.Comfey,
  [PokemonVariety.Comfey],
);
new class OranguruSpecies extends Species {}(
  PokemonSpecies.Oranguru,
  [PokemonVariety.Oranguru],
);
new class PassimianSpecies extends Species {}(
  PokemonSpecies.Passimian,
  [PokemonVariety.Passimian],
);
new class WimpodSpecies extends Species {}(
  PokemonSpecies.Wimpod,
  [PokemonVariety.Wimpod],
);
new class GolisopodSpecies extends Species {}(
  PokemonSpecies.Golisopod,
  [PokemonVariety.Golisopod],
);
new class SandygastSpecies extends Species {}(
  PokemonSpecies.Sandygast,
  [PokemonVariety.Sandygast],
);
new class PalossandSpecies extends Species {}(
  PokemonSpecies.Palossand,
  [PokemonVariety.Palossand],
);
new class PyukumukuSpecies extends Species {}(
  PokemonSpecies.Pyukumuku,
  [PokemonVariety.Pyukumuku],
);
new class TypeNullSpecies extends Species {}(
  PokemonSpecies.TypeNull,
  [PokemonVariety.TypeNull],
);
new class SilvallySpecies extends Species {}(
  PokemonSpecies.Silvally,
  [PokemonVariety.Silvally],
);
new class MiniorSpecies extends Species {}(
  PokemonSpecies.Minior,
  [PokemonVariety.MiniorRedMeteor, PokemonVariety.MiniorOrangeMeteor, PokemonVariety.MiniorYellowMeteor, PokemonVariety.MiniorGreenMeteor, PokemonVariety.MiniorBlueMeteor, PokemonVariety.MiniorIndigoMeteor, PokemonVariety.MiniorVioletMeteor, PokemonVariety.MiniorRed, PokemonVariety.MiniorOrange, PokemonVariety.MiniorYellow, PokemonVariety.MiniorGreen, PokemonVariety.MiniorBlue, PokemonVariety.MiniorIndigo, PokemonVariety.MiniorViolet],
);
new class KomalaSpecies extends Species {}(
  PokemonSpecies.Komala,
  [PokemonVariety.Komala],
);
new class TurtonatorSpecies extends Species {}(
  PokemonSpecies.Turtonator,
  [PokemonVariety.Turtonator],
);
new class TogedemaruSpecies extends Species {}(
  PokemonSpecies.Togedemaru,
  [PokemonVariety.Togedemaru, PokemonVariety.TogedemaruTotem],
);
new class MimikyuSpecies extends Species {}(
  PokemonSpecies.Mimikyu,
  [PokemonVariety.MimikyuDisguised, PokemonVariety.MimikyuBusted, PokemonVariety.MimikyuTotemDisguised, PokemonVariety.MimikyuTotemBusted],
);
new class BruxishSpecies extends Species {}(
  PokemonSpecies.Bruxish,
  [PokemonVariety.Bruxish],
);
new class DrampaSpecies extends Species {}(
  PokemonSpecies.Drampa,
  [PokemonVariety.Drampa],
);
new class DhelmiseSpecies extends Species {}(
  PokemonSpecies.Dhelmise,
  [PokemonVariety.Dhelmise],
);
new class JangmoOSpecies extends Species {}(
  PokemonSpecies.JangmoO,
  [PokemonVariety.JangmoO],
);
new class HakamoOSpecies extends Species {}(
  PokemonSpecies.HakamoO,
  [PokemonVariety.HakamoO],
);
new class KommoOSpecies extends Species {}(
  PokemonSpecies.KommoO,
  [PokemonVariety.KommoO, PokemonVariety.KommoOTotem],
);
new class TapuKokoSpecies extends Species {}(
  PokemonSpecies.TapuKoko,
  [PokemonVariety.TapuKoko],
);
new class TapuLeleSpecies extends Species {}(
  PokemonSpecies.TapuLele,
  [PokemonVariety.TapuLele],
);
new class TapuBuluSpecies extends Species {}(
  PokemonSpecies.TapuBulu,
  [PokemonVariety.TapuBulu],
);
new class TapuFiniSpecies extends Species {}(
  PokemonSpecies.TapuFini,
  [PokemonVariety.TapuFini],
);
new class CosmogSpecies extends Species {}(
  PokemonSpecies.Cosmog,
  [PokemonVariety.Cosmog],
);
new class CosmoemSpecies extends Species {}(
  PokemonSpecies.Cosmoem,
  [PokemonVariety.Cosmoem],
);
new class SolgaleoSpecies extends Species {}(
  PokemonSpecies.Solgaleo,
  [PokemonVariety.Solgaleo],
);
new class LunalaSpecies extends Species {}(
  PokemonSpecies.Lunala,
  [PokemonVariety.Lunala],
);
new class NihilegoSpecies extends Species {}(
  PokemonSpecies.Nihilego,
  [PokemonVariety.Nihilego],
);
new class BuzzwoleSpecies extends Species {}(
  PokemonSpecies.Buzzwole,
  [PokemonVariety.Buzzwole],
);
new class PheromosaSpecies extends Species {}(
  PokemonSpecies.Pheromosa,
  [PokemonVariety.Pheromosa],
);
new class XurkitreeSpecies extends Species {}(
  PokemonSpecies.Xurkitree,
  [PokemonVariety.Xurkitree],
);
new class CelesteelaSpecies extends Species {}(
  PokemonSpecies.Celesteela,
  [PokemonVariety.Celesteela],
);
new class KartanaSpecies extends Species {}(
  PokemonSpecies.Kartana,
  [PokemonVariety.Kartana],
);
new class GuzzlordSpecies extends Species {}(
  PokemonSpecies.Guzzlord,
  [PokemonVariety.Guzzlord],
);
new class NecrozmaSpecies extends Species {}(
  PokemonSpecies.Necrozma,
  [PokemonVariety.Necrozma, PokemonVariety.NecrozmaDusk, PokemonVariety.NecrozmaDawn, PokemonVariety.NecrozmaUltra],
);
new class MagearnaSpecies extends Species {}(
  PokemonSpecies.Magearna,
  [PokemonVariety.Magearna, PokemonVariety.MagearnaOriginal],
);
new class MarshadowSpecies extends Species {}(
  PokemonSpecies.Marshadow,
  [PokemonVariety.Marshadow],
);
new class PoipoleSpecies extends Species {}(
  PokemonSpecies.Poipole,
  [PokemonVariety.Poipole],
);
new class NaganadelSpecies extends Species {}(
  PokemonSpecies.Naganadel,
  [PokemonVariety.Naganadel],
);
new class StakatakaSpecies extends Species {}(
  PokemonSpecies.Stakataka,
  [PokemonVariety.Stakataka],
);
new class BlacephalonSpecies extends Species {}(
  PokemonSpecies.Blacephalon,
  [PokemonVariety.Blacephalon],
);
new class ZeraoraSpecies extends Species {}(
  PokemonSpecies.Zeraora,
  [PokemonVariety.Zeraora],
);
new class MeltanSpecies extends Species {}(
  PokemonSpecies.Meltan,
  [PokemonVariety.Meltan],
);
new class MelmetalSpecies extends Species {}(
  PokemonSpecies.Melmetal,
  [PokemonVariety.Melmetal, PokemonVariety.MelmetalGmax],
);
new class GrookeySpecies extends Species {}(
  PokemonSpecies.Grookey,
  [PokemonVariety.Grookey],
);
new class ThwackeySpecies extends Species {}(
  PokemonSpecies.Thwackey,
  [PokemonVariety.Thwackey],
);
new class RillaboomSpecies extends Species {}(
  PokemonSpecies.Rillaboom,
  [PokemonVariety.Rillaboom, PokemonVariety.RillaboomGmax],
);
new class ScorbunnySpecies extends Species {}(
  PokemonSpecies.Scorbunny,
  [PokemonVariety.Scorbunny],
);
new class RabootSpecies extends Species {}(
  PokemonSpecies.Raboot,
  [PokemonVariety.Raboot],
);
new class CinderaceSpecies extends Species {}(
  PokemonSpecies.Cinderace,
  [PokemonVariety.Cinderace, PokemonVariety.CinderaceGmax],
);
new class SobbleSpecies extends Species {}(
  PokemonSpecies.Sobble,
  [PokemonVariety.Sobble],
);
new class DrizzileSpecies extends Species {}(
  PokemonSpecies.Drizzile,
  [PokemonVariety.Drizzile],
);
new class InteleonSpecies extends Species {}(
  PokemonSpecies.Inteleon,
  [PokemonVariety.Inteleon, PokemonVariety.InteleonGmax],
);
new class SkwovetSpecies extends Species {}(
  PokemonSpecies.Skwovet,
  [PokemonVariety.Skwovet],
);
new class GreedentSpecies extends Species {}(
  PokemonSpecies.Greedent,
  [PokemonVariety.Greedent],
);
new class RookideeSpecies extends Species {}(
  PokemonSpecies.Rookidee,
  [PokemonVariety.Rookidee],
);
new class CorvisquireSpecies extends Species {}(
  PokemonSpecies.Corvisquire,
  [PokemonVariety.Corvisquire],
);
new class CorviknightSpecies extends Species {}(
  PokemonSpecies.Corviknight,
  [PokemonVariety.Corviknight, PokemonVariety.CorviknightGmax],
);
new class BlipbugSpecies extends Species {}(
  PokemonSpecies.Blipbug,
  [PokemonVariety.Blipbug],
);
new class DottlerSpecies extends Species {}(
  PokemonSpecies.Dottler,
  [PokemonVariety.Dottler],
);
new class OrbeetleSpecies extends Species {}(
  PokemonSpecies.Orbeetle,
  [PokemonVariety.Orbeetle, PokemonVariety.OrbeetleGmax],
);
new class NickitSpecies extends Species {}(
  PokemonSpecies.Nickit,
  [PokemonVariety.Nickit],
);
new class ThievulSpecies extends Species {}(
  PokemonSpecies.Thievul,
  [PokemonVariety.Thievul],
);
new class GossifleurSpecies extends Species {}(
  PokemonSpecies.Gossifleur,
  [PokemonVariety.Gossifleur],
);
new class EldegossSpecies extends Species {}(
  PokemonSpecies.Eldegoss,
  [PokemonVariety.Eldegoss],
);
new class WoolooSpecies extends Species {}(
  PokemonSpecies.Wooloo,
  [PokemonVariety.Wooloo],
);
new class DubwoolSpecies extends Species {}(
  PokemonSpecies.Dubwool,
  [PokemonVariety.Dubwool],
);
new class ChewtleSpecies extends Species {}(
  PokemonSpecies.Chewtle,
  [PokemonVariety.Chewtle],
);
new class DrednawSpecies extends Species {}(
  PokemonSpecies.Drednaw,
  [PokemonVariety.Drednaw, PokemonVariety.DrednawGmax],
);
new class YamperSpecies extends Species {}(
  PokemonSpecies.Yamper,
  [PokemonVariety.Yamper],
);
new class BoltundSpecies extends Species {}(
  PokemonSpecies.Boltund,
  [PokemonVariety.Boltund],
);
new class RolycolySpecies extends Species {}(
  PokemonSpecies.Rolycoly,
  [PokemonVariety.Rolycoly],
);
new class CarkolSpecies extends Species {}(
  PokemonSpecies.Carkol,
  [PokemonVariety.Carkol],
);
new class CoalossalSpecies extends Species {}(
  PokemonSpecies.Coalossal,
  [PokemonVariety.Coalossal, PokemonVariety.CoalossalGmax],
);
new class ApplinSpecies extends Species {}(
  PokemonSpecies.Applin,
  [PokemonVariety.Applin],
);
new class FlappleSpecies extends Species {}(
  PokemonSpecies.Flapple,
  [PokemonVariety.Flapple, PokemonVariety.FlappleGmax],
);
new class AppletunSpecies extends Species {}(
  PokemonSpecies.Appletun,
  [PokemonVariety.Appletun, PokemonVariety.AppletunGmax],
);
new class SilicobraSpecies extends Species {}(
  PokemonSpecies.Silicobra,
  [PokemonVariety.Silicobra],
);
new class SandacondaSpecies extends Species {}(
  PokemonSpecies.Sandaconda,
  [PokemonVariety.Sandaconda, PokemonVariety.SandacondaGmax],
);
new class CramorantSpecies extends Species {}(
  PokemonSpecies.Cramorant,
  [PokemonVariety.Cramorant, PokemonVariety.CramorantGulping, PokemonVariety.CramorantGorging],
);
new class ArrokudaSpecies extends Species {}(
  PokemonSpecies.Arrokuda,
  [PokemonVariety.Arrokuda],
);
new class BarraskewdaSpecies extends Species {}(
  PokemonSpecies.Barraskewda,
  [PokemonVariety.Barraskewda],
);
new class ToxelSpecies extends Species {}(
  PokemonSpecies.Toxel,
  [PokemonVariety.Toxel],
);
new class ToxtricitySpecies extends Species {}(
  PokemonSpecies.Toxtricity,
  [PokemonVariety.ToxtricityAmped, PokemonVariety.ToxtricityLowKey, PokemonVariety.ToxtricityAmpedGmax, PokemonVariety.ToxtricityLowKeyGmax],
);
new class SizzlipedeSpecies extends Species {}(
  PokemonSpecies.Sizzlipede,
  [PokemonVariety.Sizzlipede],
);
new class CentiskorchSpecies extends Species {}(
  PokemonSpecies.Centiskorch,
  [PokemonVariety.Centiskorch, PokemonVariety.CentiskorchGmax],
);
new class ClobbopusSpecies extends Species {}(
  PokemonSpecies.Clobbopus,
  [PokemonVariety.Clobbopus],
);
new class GrapploctSpecies extends Species {}(
  PokemonSpecies.Grapploct,
  [PokemonVariety.Grapploct],
);
new class SinisteaSpecies extends Species {}(
  PokemonSpecies.Sinistea,
  [PokemonVariety.Sinistea],
);
new class PolteageistSpecies extends Species {}(
  PokemonSpecies.Polteageist,
  [PokemonVariety.Polteageist],
);
new class HatennaSpecies extends Species {}(
  PokemonSpecies.Hatenna,
  [PokemonVariety.Hatenna],
);
new class HattremSpecies extends Species {}(
  PokemonSpecies.Hattrem,
  [PokemonVariety.Hattrem],
);
new class HattereneSpecies extends Species {}(
  PokemonSpecies.Hatterene,
  [PokemonVariety.Hatterene, PokemonVariety.HattereneGmax],
);
new class ImpidimpSpecies extends Species {}(
  PokemonSpecies.Impidimp,
  [PokemonVariety.Impidimp],
);
new class MorgremSpecies extends Species {}(
  PokemonSpecies.Morgrem,
  [PokemonVariety.Morgrem],
);
new class GrimmsnarlSpecies extends Species {}(
  PokemonSpecies.Grimmsnarl,
  [PokemonVariety.Grimmsnarl, PokemonVariety.GrimmsnarlGmax],
);
new class ObstagoonSpecies extends Species {}(
  PokemonSpecies.Obstagoon,
  [PokemonVariety.Obstagoon],
);
new class PerrserkerSpecies extends Species {}(
  PokemonSpecies.Perrserker,
  [PokemonVariety.Perrserker],
);
new class CursolaSpecies extends Species {}(
  PokemonSpecies.Cursola,
  [PokemonVariety.Cursola],
);
new class SirfetchdSpecies extends Species {}(
  PokemonSpecies.Sirfetchd,
  [PokemonVariety.Sirfetchd],
);
new class MrRimeSpecies extends Species {}(
  PokemonSpecies.MrRime,
  [PokemonVariety.MrRime],
);
new class RunerigusSpecies extends Species {}(
  PokemonSpecies.Runerigus,
  [PokemonVariety.Runerigus],
);
new class MilcerySpecies extends Species {}(
  PokemonSpecies.Milcery,
  [PokemonVariety.Milcery],
);
new class AlcremieSpecies extends Species {}(
  PokemonSpecies.Alcremie,
  [PokemonVariety.Alcremie, PokemonVariety.AlcremieGmax],
);
new class FalinksSpecies extends Species {}(
  PokemonSpecies.Falinks,
  [PokemonVariety.Falinks],
);
new class PincurchinSpecies extends Species {}(
  PokemonSpecies.Pincurchin,
  [PokemonVariety.Pincurchin],
);
new class SnomSpecies extends Species {}(
  PokemonSpecies.Snom,
  [PokemonVariety.Snom],
);
new class FrosmothSpecies extends Species {}(
  PokemonSpecies.Frosmoth,
  [PokemonVariety.Frosmoth],
);
new class StonjournerSpecies extends Species {}(
  PokemonSpecies.Stonjourner,
  [PokemonVariety.Stonjourner],
);
new class EiscueSpecies extends Species {}(
  PokemonSpecies.Eiscue,
  [PokemonVariety.EiscueIce, PokemonVariety.EiscueNoice],
);
new class IndeedeeSpecies extends Species {}(
  PokemonSpecies.Indeedee,
  [PokemonVariety.IndeedeeMale, PokemonVariety.IndeedeeFemale],
);
new class MorpekoSpecies extends Species {}(
  PokemonSpecies.Morpeko,
  [PokemonVariety.MorpekoFullBelly, PokemonVariety.MorpekoHangry],
);
new class CufantSpecies extends Species {}(
  PokemonSpecies.Cufant,
  [PokemonVariety.Cufant],
);
new class CopperajahSpecies extends Species {}(
  PokemonSpecies.Copperajah,
  [PokemonVariety.Copperajah, PokemonVariety.CopperajahGmax],
);
new class DracozoltSpecies extends Species {}(
  PokemonSpecies.Dracozolt,
  [PokemonVariety.Dracozolt],
);
new class ArctozoltSpecies extends Species {}(
  PokemonSpecies.Arctozolt,
  [PokemonVariety.Arctozolt],
);
new class DracovishSpecies extends Species {}(
  PokemonSpecies.Dracovish,
  [PokemonVariety.Dracovish],
);
new class ArctovishSpecies extends Species {}(
  PokemonSpecies.Arctovish,
  [PokemonVariety.Arctovish],
);
new class DuraludonSpecies extends Species {}(
  PokemonSpecies.Duraludon,
  [PokemonVariety.Duraludon, PokemonVariety.DuraludonGmax],
);
new class DreepySpecies extends Species {}(
  PokemonSpecies.Dreepy,
  [PokemonVariety.Dreepy],
);
new class DrakloakSpecies extends Species {}(
  PokemonSpecies.Drakloak,
  [PokemonVariety.Drakloak],
);
new class DragapultSpecies extends Species {}(
  PokemonSpecies.Dragapult,
  [PokemonVariety.Dragapult],
);
new class ZacianSpecies extends Species {}(
  PokemonSpecies.Zacian,
  [PokemonVariety.Zacian, PokemonVariety.ZacianCrowned],
);
new class ZamazentaSpecies extends Species {}(
  PokemonSpecies.Zamazenta,
  [PokemonVariety.Zamazenta, PokemonVariety.ZamazentaCrowned],
);
new class EternatusSpecies extends Species {}(
  PokemonSpecies.Eternatus,
  [PokemonVariety.Eternatus, PokemonVariety.EternatusEternamax],
);
new class KubfuSpecies extends Species {}(
  PokemonSpecies.Kubfu,
  [PokemonVariety.Kubfu],
);
new class UrshifuSpecies extends Species {}(
  PokemonSpecies.Urshifu,
  [PokemonVariety.UrshifuSingleStrike, PokemonVariety.UrshifuRapidStrike, PokemonVariety.UrshifuSingleStrikeGmax, PokemonVariety.UrshifuRapidStrikeGmax],
);
new class ZarudeSpecies extends Species {}(
  PokemonSpecies.Zarude,
  [PokemonVariety.Zarude, PokemonVariety.ZarudeDada],
);
new class RegielekiSpecies extends Species {}(
  PokemonSpecies.Regieleki,
  [PokemonVariety.Regieleki],
);
new class RegidragoSpecies extends Species {}(
  PokemonSpecies.Regidrago,
  [PokemonVariety.Regidrago],
);
new class GlastrierSpecies extends Species {}(
  PokemonSpecies.Glastrier,
  [PokemonVariety.Glastrier],
);
new class SpectrierSpecies extends Species {}(
  PokemonSpecies.Spectrier,
  [PokemonVariety.Spectrier],
);
new class CalyrexSpecies extends Species {}(
  PokemonSpecies.Calyrex,
  [PokemonVariety.Calyrex, PokemonVariety.CalyrexIce, PokemonVariety.CalyrexShadow],
);
new class WyrdeerSpecies extends Species {}(
  PokemonSpecies.Wyrdeer,
  [PokemonVariety.Wyrdeer],
);
new class KleavorSpecies extends Species {}(
  PokemonSpecies.Kleavor,
  [PokemonVariety.Kleavor],
);
new class UrsalunaSpecies extends Species {}(
  PokemonSpecies.Ursaluna,
  [PokemonVariety.Ursaluna, PokemonVariety.UrsalunaBloodmoon],
);
new class BasculegionSpecies extends Species {}(
  PokemonSpecies.Basculegion,
  [PokemonVariety.BasculegionMale, PokemonVariety.BasculegionFemale],
);
new class SneaslerSpecies extends Species {}(
  PokemonSpecies.Sneasler,
  [PokemonVariety.Sneasler],
);
new class OverqwilSpecies extends Species {}(
  PokemonSpecies.Overqwil,
  [PokemonVariety.Overqwil],
);
new class EnamorusSpecies extends Species {}(
  PokemonSpecies.Enamorus,
  [PokemonVariety.EnamorusIncarnate, PokemonVariety.EnamorusTherian],
);
new class SprigatitoSpecies extends Species {}(
  PokemonSpecies.Sprigatito,
  [PokemonVariety.Sprigatito],
);
new class FloragatoSpecies extends Species {}(
  PokemonSpecies.Floragato,
  [PokemonVariety.Floragato],
);
new class MeowscaradaSpecies extends Species {}(
  PokemonSpecies.Meowscarada,
  [PokemonVariety.Meowscarada],
);
new class FuecocoSpecies extends Species {}(
  PokemonSpecies.Fuecoco,
  [PokemonVariety.Fuecoco],
);
new class CrocalorSpecies extends Species {}(
  PokemonSpecies.Crocalor,
  [PokemonVariety.Crocalor],
);
new class SkeledirgeSpecies extends Species {}(
  PokemonSpecies.Skeledirge,
  [PokemonVariety.Skeledirge],
);
new class QuaxlySpecies extends Species {}(
  PokemonSpecies.Quaxly,
  [PokemonVariety.Quaxly],
);
new class QuaxwellSpecies extends Species {}(
  PokemonSpecies.Quaxwell,
  [PokemonVariety.Quaxwell],
);
new class QuaquavalSpecies extends Species {}(
  PokemonSpecies.Quaquaval,
  [PokemonVariety.Quaquaval],
);
new class LechonkSpecies extends Species {}(
  PokemonSpecies.Lechonk,
  [PokemonVariety.Lechonk],
);
new class OinkologneSpecies extends Species {}(
  PokemonSpecies.Oinkologne,
  [PokemonVariety.Oinkologne, PokemonVariety.OinkologneFemale],
);
new class TarountulaSpecies extends Species {}(
  PokemonSpecies.Tarountula,
  [PokemonVariety.Tarountula],
);
new class SpidopsSpecies extends Species {}(
  PokemonSpecies.Spidops,
  [PokemonVariety.Spidops],
);
new class NymbleSpecies extends Species {}(
  PokemonSpecies.Nymble,
  [PokemonVariety.Nymble],
);
new class LokixSpecies extends Species {}(
  PokemonSpecies.Lokix,
  [PokemonVariety.Lokix],
);
new class PawmiSpecies extends Species {}(
  PokemonSpecies.Pawmi,
  [PokemonVariety.Pawmi],
);
new class PawmoSpecies extends Species {}(
  PokemonSpecies.Pawmo,
  [PokemonVariety.Pawmo],
);
new class PawmotSpecies extends Species {}(
  PokemonSpecies.Pawmot,
  [PokemonVariety.Pawmot],
);
new class TandemausSpecies extends Species {}(
  PokemonSpecies.Tandemaus,
  [PokemonVariety.Tandemaus],
);
new class MausholdSpecies extends Species {}(
  PokemonSpecies.Maushold,
  [PokemonVariety.Maushold, PokemonVariety.MausholdFamilyOfThree],
);
new class FidoughSpecies extends Species {}(
  PokemonSpecies.Fidough,
  [PokemonVariety.Fidough],
);
new class DachsbunSpecies extends Species {}(
  PokemonSpecies.Dachsbun,
  [PokemonVariety.Dachsbun],
);
new class SmolivSpecies extends Species {}(
  PokemonSpecies.Smoliv,
  [PokemonVariety.Smoliv],
);
new class DollivSpecies extends Species {}(
  PokemonSpecies.Dolliv,
  [PokemonVariety.Dolliv],
);
new class ArbolivaSpecies extends Species {}(
  PokemonSpecies.Arboliva,
  [PokemonVariety.Arboliva],
);
new class SquawkabillySpecies extends Species {}(
  PokemonSpecies.Squawkabilly,
  [PokemonVariety.Squawkabilly, PokemonVariety.SquawkabillyBluePlumage, PokemonVariety.SquawkabillyYellowPlumage, PokemonVariety.SquawkabillyWhitePlumage],
);
new class NacliSpecies extends Species {}(
  PokemonSpecies.Nacli,
  [PokemonVariety.Nacli],
);
new class NaclstackSpecies extends Species {}(
  PokemonSpecies.Naclstack,
  [PokemonVariety.Naclstack],
);
new class GarganaclSpecies extends Species {}(
  PokemonSpecies.Garganacl,
  [PokemonVariety.Garganacl],
);
new class CharcadetSpecies extends Species {}(
  PokemonSpecies.Charcadet,
  [PokemonVariety.Charcadet],
);
new class ArmarougeSpecies extends Species {}(
  PokemonSpecies.Armarouge,
  [PokemonVariety.Armarouge],
);
new class CeruledgeSpecies extends Species {}(
  PokemonSpecies.Ceruledge,
  [PokemonVariety.Ceruledge],
);
new class TadbulbSpecies extends Species {}(
  PokemonSpecies.Tadbulb,
  [PokemonVariety.Tadbulb],
);
new class BelliboltSpecies extends Species {}(
  PokemonSpecies.Bellibolt,
  [PokemonVariety.Bellibolt],
);
new class WattrelSpecies extends Species {}(
  PokemonSpecies.Wattrel,
  [PokemonVariety.Wattrel],
);
new class KilowattrelSpecies extends Species {}(
  PokemonSpecies.Kilowattrel,
  [PokemonVariety.Kilowattrel],
);
new class MaschiffSpecies extends Species {}(
  PokemonSpecies.Maschiff,
  [PokemonVariety.Maschiff],
);
new class MabosstiffSpecies extends Species {}(
  PokemonSpecies.Mabosstiff,
  [PokemonVariety.Mabosstiff],
);
new class ShroodleSpecies extends Species {}(
  PokemonSpecies.Shroodle,
  [PokemonVariety.Shroodle],
);
new class GrafaiaiSpecies extends Species {}(
  PokemonSpecies.Grafaiai,
  [PokemonVariety.Grafaiai],
);
new class BramblinSpecies extends Species {}(
  PokemonSpecies.Bramblin,
  [PokemonVariety.Bramblin],
);
new class BrambleghastSpecies extends Species {}(
  PokemonSpecies.Brambleghast,
  [PokemonVariety.Brambleghast],
);
new class ToedscoolSpecies extends Species {}(
  PokemonSpecies.Toedscool,
  [PokemonVariety.Toedscool],
);
new class ToedscruelSpecies extends Species {}(
  PokemonSpecies.Toedscruel,
  [PokemonVariety.Toedscruel],
);
new class KlawfSpecies extends Species {}(
  PokemonSpecies.Klawf,
  [PokemonVariety.Klawf],
);
new class CapsakidSpecies extends Species {}(
  PokemonSpecies.Capsakid,
  [PokemonVariety.Capsakid],
);
new class ScovillainSpecies extends Species {}(
  PokemonSpecies.Scovillain,
  [PokemonVariety.Scovillain],
);
new class RellorSpecies extends Species {}(
  PokemonSpecies.Rellor,
  [PokemonVariety.Rellor],
);
new class RabscaSpecies extends Species {}(
  PokemonSpecies.Rabsca,
  [PokemonVariety.Rabsca],
);
new class FlittleSpecies extends Species {}(
  PokemonSpecies.Flittle,
  [PokemonVariety.Flittle],
);
new class EspathraSpecies extends Species {}(
  PokemonSpecies.Espathra,
  [PokemonVariety.Espathra],
);
new class TinkatinkSpecies extends Species {}(
  PokemonSpecies.Tinkatink,
  [PokemonVariety.Tinkatink],
);
new class TinkatuffSpecies extends Species {}(
  PokemonSpecies.Tinkatuff,
  [PokemonVariety.Tinkatuff],
);
new class TinkatonSpecies extends Species {}(
  PokemonSpecies.Tinkaton,
  [PokemonVariety.Tinkaton],
);
new class WiglettSpecies extends Species {}(
  PokemonSpecies.Wiglett,
  [PokemonVariety.Wiglett],
);
new class WugtrioSpecies extends Species {}(
  PokemonSpecies.Wugtrio,
  [PokemonVariety.Wugtrio],
);
new class BombirdierSpecies extends Species {}(
  PokemonSpecies.Bombirdier,
  [PokemonVariety.Bombirdier],
);
new class FinizenSpecies extends Species {}(
  PokemonSpecies.Finizen,
  [PokemonVariety.Finizen],
);
new class PalafinSpecies extends Species {}(
  PokemonSpecies.Palafin,
  [PokemonVariety.Palafin, PokemonVariety.PalafinHero],
);
new class VaroomSpecies extends Species {}(
  PokemonSpecies.Varoom,
  [PokemonVariety.Varoom],
);
new class RevavroomSpecies extends Species {}(
  PokemonSpecies.Revavroom,
  [PokemonVariety.Revavroom],
);
new class CyclizarSpecies extends Species {}(
  PokemonSpecies.Cyclizar,
  [PokemonVariety.Cyclizar],
);
new class OrthwormSpecies extends Species {}(
  PokemonSpecies.Orthworm,
  [PokemonVariety.Orthworm],
);
new class GlimmetSpecies extends Species {}(
  PokemonSpecies.Glimmet,
  [PokemonVariety.Glimmet],
);
new class GlimmoraSpecies extends Species {}(
  PokemonSpecies.Glimmora,
  [PokemonVariety.Glimmora],
);
new class GreavardSpecies extends Species {}(
  PokemonSpecies.Greavard,
  [PokemonVariety.Greavard],
);
new class HoundstoneSpecies extends Species {}(
  PokemonSpecies.Houndstone,
  [PokemonVariety.Houndstone],
);
new class FlamigoSpecies extends Species {}(
  PokemonSpecies.Flamigo,
  [PokemonVariety.Flamigo],
);
new class CetoddleSpecies extends Species {}(
  PokemonSpecies.Cetoddle,
  [PokemonVariety.Cetoddle],
);
new class CetitanSpecies extends Species {}(
  PokemonSpecies.Cetitan,
  [PokemonVariety.Cetitan],
);
new class VeluzaSpecies extends Species {}(
  PokemonSpecies.Veluza,
  [PokemonVariety.Veluza],
);
new class DondozoSpecies extends Species {}(
  PokemonSpecies.Dondozo,
  [PokemonVariety.Dondozo],
);
new class TatsugiriSpecies extends Species {}(
  PokemonSpecies.Tatsugiri,
  [PokemonVariety.Tatsugiri, PokemonVariety.TatsugiriDroopy, PokemonVariety.TatsugiriStretchy],
);
new class AnnihilapeSpecies extends Species {}(
  PokemonSpecies.Annihilape,
  [PokemonVariety.Annihilape],
);
new class ClodsireSpecies extends Species {}(
  PokemonSpecies.Clodsire,
  [PokemonVariety.Clodsire],
);
new class FarigirafSpecies extends Species {}(
  PokemonSpecies.Farigiraf,
  [PokemonVariety.Farigiraf],
);
new class DudunsparceSpecies extends Species {}(
  PokemonSpecies.Dudunsparce,
  [PokemonVariety.Dudunsparce, PokemonVariety.DudunsparceThreeSegment],
);
new class KingambitSpecies extends Species {}(
  PokemonSpecies.Kingambit,
  [PokemonVariety.Kingambit],
);
new class GreatTuskSpecies extends Species {}(
  PokemonSpecies.GreatTusk,
  [PokemonVariety.GreatTusk],
);
new class ScreamTailSpecies extends Species {}(
  PokemonSpecies.ScreamTail,
  [PokemonVariety.ScreamTail],
);
new class BruteBonnetSpecies extends Species {}(
  PokemonSpecies.BruteBonnet,
  [PokemonVariety.BruteBonnet],
);
new class FlutterManeSpecies extends Species {}(
  PokemonSpecies.FlutterMane,
  [PokemonVariety.FlutterMane],
);
new class SlitherWingSpecies extends Species {}(
  PokemonSpecies.SlitherWing,
  [PokemonVariety.SlitherWing],
);
new class SandyShocksSpecies extends Species {}(
  PokemonSpecies.SandyShocks,
  [PokemonVariety.SandyShocks],
);
new class IronTreadsSpecies extends Species {}(
  PokemonSpecies.IronTreads,
  [PokemonVariety.IronTreads],
);
new class IronBundleSpecies extends Species {}(
  PokemonSpecies.IronBundle,
  [PokemonVariety.IronBundle],
);
new class IronHandsSpecies extends Species {}(
  PokemonSpecies.IronHands,
  [PokemonVariety.IronHands],
);
new class IronJugulisSpecies extends Species {}(
  PokemonSpecies.IronJugulis,
  [PokemonVariety.IronJugulis],
);
new class IronMothSpecies extends Species {}(
  PokemonSpecies.IronMoth,
  [PokemonVariety.IronMoth],
);
new class IronThornsSpecies extends Species {}(
  PokemonSpecies.IronThorns,
  [PokemonVariety.IronThorns],
);
new class FrigibaxSpecies extends Species {}(
  PokemonSpecies.Frigibax,
  [PokemonVariety.Frigibax],
);
new class ArctibaxSpecies extends Species {}(
  PokemonSpecies.Arctibax,
  [PokemonVariety.Arctibax],
);
new class BaxcaliburSpecies extends Species {}(
  PokemonSpecies.Baxcalibur,
  [PokemonVariety.Baxcalibur],
);
new class GimmighoulSpecies extends Species {}(
  PokemonSpecies.Gimmighoul,
  [PokemonVariety.Gimmighoul, PokemonVariety.GimmighoulRoaming],
);
new class GholdengoSpecies extends Species {}(
  PokemonSpecies.Gholdengo,
  [PokemonVariety.Gholdengo],
);
new class WoChienSpecies extends Species {}(
  PokemonSpecies.WoChien,
  [PokemonVariety.WoChien],
);
new class ChienPaoSpecies extends Species {}(
  PokemonSpecies.ChienPao,
  [PokemonVariety.ChienPao],
);
new class TingLuSpecies extends Species {}(
  PokemonSpecies.TingLu,
  [PokemonVariety.TingLu],
);
new class ChiYuSpecies extends Species {}(
  PokemonSpecies.ChiYu,
  [PokemonVariety.ChiYu],
);
new class RoaringMoonSpecies extends Species {}(
  PokemonSpecies.RoaringMoon,
  [PokemonVariety.RoaringMoon],
);
new class IronValiantSpecies extends Species {}(
  PokemonSpecies.IronValiant,
  [PokemonVariety.IronValiant],
);
new class KoraidonSpecies extends Species {}(
  PokemonSpecies.Koraidon,
  [PokemonVariety.Koraidon, PokemonVariety.KoraidonLimitedBuild, PokemonVariety.KoraidonSprintingBuild, PokemonVariety.KoraidonSwimmingBuild, PokemonVariety.KoraidonGlidingBuild],
);
new class MiraidonSpecies extends Species {}(
  PokemonSpecies.Miraidon,
  [PokemonVariety.Miraidon, PokemonVariety.MiraidonLowPowerMode, PokemonVariety.MiraidonDriveMode, PokemonVariety.MiraidonAquaticMode, PokemonVariety.MiraidonGlideMode],
);
new class WalkingWakeSpecies extends Species {}(
  PokemonSpecies.WalkingWake,
  [PokemonVariety.WalkingWake],
);
new class IronLeavesSpecies extends Species {}(
  PokemonSpecies.IronLeaves,
  [PokemonVariety.IronLeaves],
);
new class DipplinSpecies extends Species {}(
  PokemonSpecies.Dipplin,
  [PokemonVariety.Dipplin],
);
new class PoltchageistSpecies extends Species {}(
  PokemonSpecies.Poltchageist,
  [PokemonVariety.Poltchageist],
);
new class SinistchaSpecies extends Species {}(
  PokemonSpecies.Sinistcha,
  [PokemonVariety.Sinistcha],
);
new class OkidogiSpecies extends Species {}(
  PokemonSpecies.Okidogi,
  [PokemonVariety.Okidogi],
);
new class MunkidoriSpecies extends Species {}(
  PokemonSpecies.Munkidori,
  [PokemonVariety.Munkidori],
);
new class FezandipitiSpecies extends Species {}(
  PokemonSpecies.Fezandipiti,
  [PokemonVariety.Fezandipiti],
);
new class OgerponSpecies extends Species {}(
  PokemonSpecies.Ogerpon,
  [PokemonVariety.Ogerpon, PokemonVariety.OgerponWellspringMask, PokemonVariety.OgerponHearthflameMask, PokemonVariety.OgerponCornerstoneMask],
);
new class ArchaludonSpecies extends Species {}(
  PokemonSpecies.Archaludon,
  [PokemonVariety.Archaludon],
);
new class HydrappleSpecies extends Species {}(
  PokemonSpecies.Hydrapple,
  [PokemonVariety.Hydrapple],
);
new class GougingFireSpecies extends Species {}(
  PokemonSpecies.GougingFire,
  [PokemonVariety.GougingFire],
);
new class RagingBoltSpecies extends Species {}(
  PokemonSpecies.RagingBolt,
  [PokemonVariety.RagingBolt],
);
new class IronBoulderSpecies extends Species {}(
  PokemonSpecies.IronBoulder,
  [PokemonVariety.IronBoulder],
);
new class IronCrownSpecies extends Species {}(
  PokemonSpecies.IronCrown,
  [PokemonVariety.IronCrown],
);
new class TerapagosSpecies extends Species {}(
  PokemonSpecies.Terapagos,
  [PokemonVariety.Terapagos, PokemonVariety.TerapagosTerastal, PokemonVariety.TerapagosStellar],
);
new class PecharuntSpecies extends Species {}(
  PokemonSpecies.Pecharunt,
  [PokemonVariety.Pecharunt],
);