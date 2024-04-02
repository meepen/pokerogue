// AUTO GENERATED FILE
import { IPokemonVariety } from "#pokeapi/pokemon-variety.interface";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonForm } from "#pokeapi/generated/forms.enum";
import { PokemonVariety } from "#pokeapi/generated/varieties.enum";

export const varietiesList = new Map<PokemonVariety, IPokemonVariety>();

class Variety extends IPokemonVariety {
  constructor(
    variety: PokemonVariety,
    species: PokemonSpecies,
    forms: PokemonForm[],
  ) {
    super(variety, species, forms);
    varietiesList.set(variety, this);
  }
}

new class BulbasaurVariety extends Variety {}(
  PokemonVariety.Bulbasaur,
  PokemonSpecies.Bulbasaur,
  [PokemonForm.Bulbasaur],
);
new class IvysaurVariety extends Variety {}(
  PokemonVariety.Ivysaur,
  PokemonSpecies.Ivysaur,
  [PokemonForm.Ivysaur],
);
new class VenusaurVariety extends Variety {}(
  PokemonVariety.Venusaur,
  PokemonSpecies.Venusaur,
  [PokemonForm.Venusaur],
);
new class VenusaurMegaVariety extends Variety {}(
  PokemonVariety.VenusaurMega,
  PokemonSpecies.Venusaur,
  [PokemonForm.VenusaurMega],
);
new class VenusaurGmaxVariety extends Variety {}(
  PokemonVariety.VenusaurGmax,
  PokemonSpecies.Venusaur,
  [PokemonForm.VenusaurGmax],
);
new class CharmanderVariety extends Variety {}(
  PokemonVariety.Charmander,
  PokemonSpecies.Charmander,
  [PokemonForm.Charmander],
);
new class CharmeleonVariety extends Variety {}(
  PokemonVariety.Charmeleon,
  PokemonSpecies.Charmeleon,
  [PokemonForm.Charmeleon],
);
new class CharizardVariety extends Variety {}(
  PokemonVariety.Charizard,
  PokemonSpecies.Charizard,
  [PokemonForm.Charizard],
);
new class CharizardMegaXVariety extends Variety {}(
  PokemonVariety.CharizardMegaX,
  PokemonSpecies.Charizard,
  [PokemonForm.CharizardMegaX],
);
new class CharizardMegaYVariety extends Variety {}(
  PokemonVariety.CharizardMegaY,
  PokemonSpecies.Charizard,
  [PokemonForm.CharizardMegaY],
);
new class CharizardGmaxVariety extends Variety {}(
  PokemonVariety.CharizardGmax,
  PokemonSpecies.Charizard,
  [PokemonForm.CharizardGmax],
);
new class SquirtleVariety extends Variety {}(
  PokemonVariety.Squirtle,
  PokemonSpecies.Squirtle,
  [PokemonForm.Squirtle],
);
new class WartortleVariety extends Variety {}(
  PokemonVariety.Wartortle,
  PokemonSpecies.Wartortle,
  [PokemonForm.Wartortle],
);
new class BlastoiseVariety extends Variety {}(
  PokemonVariety.Blastoise,
  PokemonSpecies.Blastoise,
  [PokemonForm.Blastoise],
);
new class BlastoiseMegaVariety extends Variety {}(
  PokemonVariety.BlastoiseMega,
  PokemonSpecies.Blastoise,
  [PokemonForm.BlastoiseMega],
);
new class BlastoiseGmaxVariety extends Variety {}(
  PokemonVariety.BlastoiseGmax,
  PokemonSpecies.Blastoise,
  [PokemonForm.BlastoiseGmax],
);
new class CaterpieVariety extends Variety {}(
  PokemonVariety.Caterpie,
  PokemonSpecies.Caterpie,
  [PokemonForm.Caterpie],
);
new class MetapodVariety extends Variety {}(
  PokemonVariety.Metapod,
  PokemonSpecies.Metapod,
  [PokemonForm.Metapod],
);
new class ButterfreeVariety extends Variety {}(
  PokemonVariety.Butterfree,
  PokemonSpecies.Butterfree,
  [PokemonForm.Butterfree],
);
new class ButterfreeGmaxVariety extends Variety {}(
  PokemonVariety.ButterfreeGmax,
  PokemonSpecies.Butterfree,
  [PokemonForm.ButterfreeGmax],
);
new class WeedleVariety extends Variety {}(
  PokemonVariety.Weedle,
  PokemonSpecies.Weedle,
  [PokemonForm.Weedle],
);
new class KakunaVariety extends Variety {}(
  PokemonVariety.Kakuna,
  PokemonSpecies.Kakuna,
  [PokemonForm.Kakuna],
);
new class BeedrillVariety extends Variety {}(
  PokemonVariety.Beedrill,
  PokemonSpecies.Beedrill,
  [PokemonForm.Beedrill],
);
new class BeedrillMegaVariety extends Variety {}(
  PokemonVariety.BeedrillMega,
  PokemonSpecies.Beedrill,
  [PokemonForm.BeedrillMega],
);
new class PidgeyVariety extends Variety {}(
  PokemonVariety.Pidgey,
  PokemonSpecies.Pidgey,
  [PokemonForm.Pidgey],
);
new class PidgeottoVariety extends Variety {}(
  PokemonVariety.Pidgeotto,
  PokemonSpecies.Pidgeotto,
  [PokemonForm.Pidgeotto],
);
new class PidgeotVariety extends Variety {}(
  PokemonVariety.Pidgeot,
  PokemonSpecies.Pidgeot,
  [PokemonForm.Pidgeot],
);
new class PidgeotMegaVariety extends Variety {}(
  PokemonVariety.PidgeotMega,
  PokemonSpecies.Pidgeot,
  [PokemonForm.PidgeotMega],
);
new class RattataVariety extends Variety {}(
  PokemonVariety.Rattata,
  PokemonSpecies.Rattata,
  [PokemonForm.Rattata],
);
new class RattataAlolaVariety extends Variety {}(
  PokemonVariety.RattataAlola,
  PokemonSpecies.Rattata,
  [PokemonForm.RattataAlola],
);
new class RaticateVariety extends Variety {}(
  PokemonVariety.Raticate,
  PokemonSpecies.Raticate,
  [PokemonForm.Raticate],
);
new class RaticateAlolaVariety extends Variety {}(
  PokemonVariety.RaticateAlola,
  PokemonSpecies.Raticate,
  [PokemonForm.RaticateAlola],
);
new class RaticateTotemAlolaVariety extends Variety {}(
  PokemonVariety.RaticateTotemAlola,
  PokemonSpecies.Raticate,
  [PokemonForm.RaticateTotemAlola],
);
new class SpearowVariety extends Variety {}(
  PokemonVariety.Spearow,
  PokemonSpecies.Spearow,
  [PokemonForm.Spearow],
);
new class FearowVariety extends Variety {}(
  PokemonVariety.Fearow,
  PokemonSpecies.Fearow,
  [PokemonForm.Fearow],
);
new class EkansVariety extends Variety {}(
  PokemonVariety.Ekans,
  PokemonSpecies.Ekans,
  [PokemonForm.Ekans],
);
new class ArbokVariety extends Variety {}(
  PokemonVariety.Arbok,
  PokemonSpecies.Arbok,
  [PokemonForm.Arbok],
);
new class PikachuVariety extends Variety {}(
  PokemonVariety.Pikachu,
  PokemonSpecies.Pikachu,
  [PokemonForm.Pikachu],
);
new class PikachuRockStarVariety extends Variety {}(
  PokemonVariety.PikachuRockStar,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuRockStar],
);
new class PikachuBelleVariety extends Variety {}(
  PokemonVariety.PikachuBelle,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuBelle],
);
new class PikachuPopStarVariety extends Variety {}(
  PokemonVariety.PikachuPopStar,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuPopStar],
);
new class PikachuPhdVariety extends Variety {}(
  PokemonVariety.PikachuPhd,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuPhd],
);
new class PikachuLibreVariety extends Variety {}(
  PokemonVariety.PikachuLibre,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuLibre],
);
new class PikachuCosplayVariety extends Variety {}(
  PokemonVariety.PikachuCosplay,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuCosplay],
);
new class PikachuOriginalCapVariety extends Variety {}(
  PokemonVariety.PikachuOriginalCap,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuOriginalCap],
);
new class PikachuHoennCapVariety extends Variety {}(
  PokemonVariety.PikachuHoennCap,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuHoennCap],
);
new class PikachuSinnohCapVariety extends Variety {}(
  PokemonVariety.PikachuSinnohCap,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuSinnohCap],
);
new class PikachuUnovaCapVariety extends Variety {}(
  PokemonVariety.PikachuUnovaCap,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuUnovaCap],
);
new class PikachuKalosCapVariety extends Variety {}(
  PokemonVariety.PikachuKalosCap,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuKalosCap],
);
new class PikachuAlolaCapVariety extends Variety {}(
  PokemonVariety.PikachuAlolaCap,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuAlolaCap],
);
new class PikachuPartnerCapVariety extends Variety {}(
  PokemonVariety.PikachuPartnerCap,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuPartnerCap],
);
new class PikachuStarterVariety extends Variety {}(
  PokemonVariety.PikachuStarter,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuStarter],
);
new class PikachuWorldCapVariety extends Variety {}(
  PokemonVariety.PikachuWorldCap,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuWorldCap],
);
new class PikachuGmaxVariety extends Variety {}(
  PokemonVariety.PikachuGmax,
  PokemonSpecies.Pikachu,
  [PokemonForm.PikachuGmax],
);
new class RaichuVariety extends Variety {}(
  PokemonVariety.Raichu,
  PokemonSpecies.Raichu,
  [PokemonForm.Raichu],
);
new class RaichuAlolaVariety extends Variety {}(
  PokemonVariety.RaichuAlola,
  PokemonSpecies.Raichu,
  [PokemonForm.RaichuAlola],
);
new class SandshrewVariety extends Variety {}(
  PokemonVariety.Sandshrew,
  PokemonSpecies.Sandshrew,
  [PokemonForm.Sandshrew],
);
new class SandshrewAlolaVariety extends Variety {}(
  PokemonVariety.SandshrewAlola,
  PokemonSpecies.Sandshrew,
  [PokemonForm.SandshrewAlola],
);
new class SandslashVariety extends Variety {}(
  PokemonVariety.Sandslash,
  PokemonSpecies.Sandslash,
  [PokemonForm.Sandslash],
);
new class SandslashAlolaVariety extends Variety {}(
  PokemonVariety.SandslashAlola,
  PokemonSpecies.Sandslash,
  [PokemonForm.SandslashAlola],
);
new class NidoranFVariety extends Variety {}(
  PokemonVariety.NidoranF,
  PokemonSpecies.NidoranF,
  [PokemonForm.NidoranF],
);
new class NidorinaVariety extends Variety {}(
  PokemonVariety.Nidorina,
  PokemonSpecies.Nidorina,
  [PokemonForm.Nidorina],
);
new class NidoqueenVariety extends Variety {}(
  PokemonVariety.Nidoqueen,
  PokemonSpecies.Nidoqueen,
  [PokemonForm.Nidoqueen],
);
new class NidoranMVariety extends Variety {}(
  PokemonVariety.NidoranM,
  PokemonSpecies.NidoranM,
  [PokemonForm.NidoranM],
);
new class NidorinoVariety extends Variety {}(
  PokemonVariety.Nidorino,
  PokemonSpecies.Nidorino,
  [PokemonForm.Nidorino],
);
new class NidokingVariety extends Variety {}(
  PokemonVariety.Nidoking,
  PokemonSpecies.Nidoking,
  [PokemonForm.Nidoking],
);
new class ClefairyVariety extends Variety {}(
  PokemonVariety.Clefairy,
  PokemonSpecies.Clefairy,
  [PokemonForm.Clefairy],
);
new class ClefableVariety extends Variety {}(
  PokemonVariety.Clefable,
  PokemonSpecies.Clefable,
  [PokemonForm.Clefable],
);
new class VulpixVariety extends Variety {}(
  PokemonVariety.Vulpix,
  PokemonSpecies.Vulpix,
  [PokemonForm.Vulpix],
);
new class VulpixAlolaVariety extends Variety {}(
  PokemonVariety.VulpixAlola,
  PokemonSpecies.Vulpix,
  [PokemonForm.VulpixAlola],
);
new class NinetalesVariety extends Variety {}(
  PokemonVariety.Ninetales,
  PokemonSpecies.Ninetales,
  [PokemonForm.Ninetales],
);
new class NinetalesAlolaVariety extends Variety {}(
  PokemonVariety.NinetalesAlola,
  PokemonSpecies.Ninetales,
  [PokemonForm.NinetalesAlola],
);
new class JigglypuffVariety extends Variety {}(
  PokemonVariety.Jigglypuff,
  PokemonSpecies.Jigglypuff,
  [PokemonForm.Jigglypuff],
);
new class WigglytuffVariety extends Variety {}(
  PokemonVariety.Wigglytuff,
  PokemonSpecies.Wigglytuff,
  [PokemonForm.Wigglytuff],
);
new class ZubatVariety extends Variety {}(
  PokemonVariety.Zubat,
  PokemonSpecies.Zubat,
  [PokemonForm.Zubat],
);
new class GolbatVariety extends Variety {}(
  PokemonVariety.Golbat,
  PokemonSpecies.Golbat,
  [PokemonForm.Golbat],
);
new class OddishVariety extends Variety {}(
  PokemonVariety.Oddish,
  PokemonSpecies.Oddish,
  [PokemonForm.Oddish],
);
new class GloomVariety extends Variety {}(
  PokemonVariety.Gloom,
  PokemonSpecies.Gloom,
  [PokemonForm.Gloom],
);
new class VileplumeVariety extends Variety {}(
  PokemonVariety.Vileplume,
  PokemonSpecies.Vileplume,
  [PokemonForm.Vileplume],
);
new class ParasVariety extends Variety {}(
  PokemonVariety.Paras,
  PokemonSpecies.Paras,
  [PokemonForm.Paras],
);
new class ParasectVariety extends Variety {}(
  PokemonVariety.Parasect,
  PokemonSpecies.Parasect,
  [PokemonForm.Parasect],
);
new class VenonatVariety extends Variety {}(
  PokemonVariety.Venonat,
  PokemonSpecies.Venonat,
  [PokemonForm.Venonat],
);
new class VenomothVariety extends Variety {}(
  PokemonVariety.Venomoth,
  PokemonSpecies.Venomoth,
  [PokemonForm.Venomoth],
);
new class DiglettVariety extends Variety {}(
  PokemonVariety.Diglett,
  PokemonSpecies.Diglett,
  [PokemonForm.Diglett],
);
new class DiglettAlolaVariety extends Variety {}(
  PokemonVariety.DiglettAlola,
  PokemonSpecies.Diglett,
  [PokemonForm.DiglettAlola],
);
new class DugtrioVariety extends Variety {}(
  PokemonVariety.Dugtrio,
  PokemonSpecies.Dugtrio,
  [PokemonForm.Dugtrio],
);
new class DugtrioAlolaVariety extends Variety {}(
  PokemonVariety.DugtrioAlola,
  PokemonSpecies.Dugtrio,
  [PokemonForm.DugtrioAlola],
);
new class MeowthVariety extends Variety {}(
  PokemonVariety.Meowth,
  PokemonSpecies.Meowth,
  [PokemonForm.Meowth],
);
new class MeowthAlolaVariety extends Variety {}(
  PokemonVariety.MeowthAlola,
  PokemonSpecies.Meowth,
  [PokemonForm.MeowthAlola],
);
new class MeowthGalarVariety extends Variety {}(
  PokemonVariety.MeowthGalar,
  PokemonSpecies.Meowth,
  [PokemonForm.MeowthGalar],
);
new class MeowthGmaxVariety extends Variety {}(
  PokemonVariety.MeowthGmax,
  PokemonSpecies.Meowth,
  [PokemonForm.MeowthGmax],
);
new class PersianVariety extends Variety {}(
  PokemonVariety.Persian,
  PokemonSpecies.Persian,
  [PokemonForm.Persian],
);
new class PersianAlolaVariety extends Variety {}(
  PokemonVariety.PersianAlola,
  PokemonSpecies.Persian,
  [PokemonForm.PersianAlola],
);
new class PsyduckVariety extends Variety {}(
  PokemonVariety.Psyduck,
  PokemonSpecies.Psyduck,
  [PokemonForm.Psyduck],
);
new class GolduckVariety extends Variety {}(
  PokemonVariety.Golduck,
  PokemonSpecies.Golduck,
  [PokemonForm.Golduck],
);
new class MankeyVariety extends Variety {}(
  PokemonVariety.Mankey,
  PokemonSpecies.Mankey,
  [PokemonForm.Mankey],
);
new class PrimeapeVariety extends Variety {}(
  PokemonVariety.Primeape,
  PokemonSpecies.Primeape,
  [PokemonForm.Primeape],
);
new class GrowlitheVariety extends Variety {}(
  PokemonVariety.Growlithe,
  PokemonSpecies.Growlithe,
  [PokemonForm.Growlithe],
);
new class GrowlitheHisuiVariety extends Variety {}(
  PokemonVariety.GrowlitheHisui,
  PokemonSpecies.Growlithe,
  [PokemonForm.GrowlitheHisui],
);
new class ArcanineVariety extends Variety {}(
  PokemonVariety.Arcanine,
  PokemonSpecies.Arcanine,
  [PokemonForm.Arcanine],
);
new class ArcanineHisuiVariety extends Variety {}(
  PokemonVariety.ArcanineHisui,
  PokemonSpecies.Arcanine,
  [PokemonForm.ArcanineHisui],
);
new class PoliwagVariety extends Variety {}(
  PokemonVariety.Poliwag,
  PokemonSpecies.Poliwag,
  [PokemonForm.Poliwag],
);
new class PoliwhirlVariety extends Variety {}(
  PokemonVariety.Poliwhirl,
  PokemonSpecies.Poliwhirl,
  [PokemonForm.Poliwhirl],
);
new class PoliwrathVariety extends Variety {}(
  PokemonVariety.Poliwrath,
  PokemonSpecies.Poliwrath,
  [PokemonForm.Poliwrath],
);
new class AbraVariety extends Variety {}(
  PokemonVariety.Abra,
  PokemonSpecies.Abra,
  [PokemonForm.Abra],
);
new class KadabraVariety extends Variety {}(
  PokemonVariety.Kadabra,
  PokemonSpecies.Kadabra,
  [PokemonForm.Kadabra],
);
new class AlakazamVariety extends Variety {}(
  PokemonVariety.Alakazam,
  PokemonSpecies.Alakazam,
  [PokemonForm.Alakazam],
);
new class AlakazamMegaVariety extends Variety {}(
  PokemonVariety.AlakazamMega,
  PokemonSpecies.Alakazam,
  [PokemonForm.AlakazamMega],
);
new class MachopVariety extends Variety {}(
  PokemonVariety.Machop,
  PokemonSpecies.Machop,
  [PokemonForm.Machop],
);
new class MachokeVariety extends Variety {}(
  PokemonVariety.Machoke,
  PokemonSpecies.Machoke,
  [PokemonForm.Machoke],
);
new class MachampVariety extends Variety {}(
  PokemonVariety.Machamp,
  PokemonSpecies.Machamp,
  [PokemonForm.Machamp],
);
new class MachampGmaxVariety extends Variety {}(
  PokemonVariety.MachampGmax,
  PokemonSpecies.Machamp,
  [PokemonForm.MachampGmax],
);
new class BellsproutVariety extends Variety {}(
  PokemonVariety.Bellsprout,
  PokemonSpecies.Bellsprout,
  [PokemonForm.Bellsprout],
);
new class WeepinbellVariety extends Variety {}(
  PokemonVariety.Weepinbell,
  PokemonSpecies.Weepinbell,
  [PokemonForm.Weepinbell],
);
new class VictreebelVariety extends Variety {}(
  PokemonVariety.Victreebel,
  PokemonSpecies.Victreebel,
  [PokemonForm.Victreebel],
);
new class TentacoolVariety extends Variety {}(
  PokemonVariety.Tentacool,
  PokemonSpecies.Tentacool,
  [PokemonForm.Tentacool],
);
new class TentacruelVariety extends Variety {}(
  PokemonVariety.Tentacruel,
  PokemonSpecies.Tentacruel,
  [PokemonForm.Tentacruel],
);
new class GeodudeVariety extends Variety {}(
  PokemonVariety.Geodude,
  PokemonSpecies.Geodude,
  [PokemonForm.Geodude],
);
new class GeodudeAlolaVariety extends Variety {}(
  PokemonVariety.GeodudeAlola,
  PokemonSpecies.Geodude,
  [PokemonForm.GeodudeAlola],
);
new class GravelerVariety extends Variety {}(
  PokemonVariety.Graveler,
  PokemonSpecies.Graveler,
  [PokemonForm.Graveler],
);
new class GravelerAlolaVariety extends Variety {}(
  PokemonVariety.GravelerAlola,
  PokemonSpecies.Graveler,
  [PokemonForm.GravelerAlola],
);
new class GolemVariety extends Variety {}(
  PokemonVariety.Golem,
  PokemonSpecies.Golem,
  [PokemonForm.Golem],
);
new class GolemAlolaVariety extends Variety {}(
  PokemonVariety.GolemAlola,
  PokemonSpecies.Golem,
  [PokemonForm.GolemAlola],
);
new class PonytaVariety extends Variety {}(
  PokemonVariety.Ponyta,
  PokemonSpecies.Ponyta,
  [PokemonForm.Ponyta],
);
new class PonytaGalarVariety extends Variety {}(
  PokemonVariety.PonytaGalar,
  PokemonSpecies.Ponyta,
  [PokemonForm.PonytaGalar],
);
new class RapidashVariety extends Variety {}(
  PokemonVariety.Rapidash,
  PokemonSpecies.Rapidash,
  [PokemonForm.Rapidash],
);
new class RapidashGalarVariety extends Variety {}(
  PokemonVariety.RapidashGalar,
  PokemonSpecies.Rapidash,
  [PokemonForm.RapidashGalar],
);
new class SlowpokeVariety extends Variety {}(
  PokemonVariety.Slowpoke,
  PokemonSpecies.Slowpoke,
  [PokemonForm.Slowpoke],
);
new class SlowpokeGalarVariety extends Variety {}(
  PokemonVariety.SlowpokeGalar,
  PokemonSpecies.Slowpoke,
  [PokemonForm.SlowpokeGalar],
);
new class SlowbroVariety extends Variety {}(
  PokemonVariety.Slowbro,
  PokemonSpecies.Slowbro,
  [PokemonForm.Slowbro],
);
new class SlowbroMegaVariety extends Variety {}(
  PokemonVariety.SlowbroMega,
  PokemonSpecies.Slowbro,
  [PokemonForm.SlowbroMega],
);
new class SlowbroGalarVariety extends Variety {}(
  PokemonVariety.SlowbroGalar,
  PokemonSpecies.Slowbro,
  [PokemonForm.SlowbroGalar],
);
new class MagnemiteVariety extends Variety {}(
  PokemonVariety.Magnemite,
  PokemonSpecies.Magnemite,
  [PokemonForm.Magnemite],
);
new class MagnetonVariety extends Variety {}(
  PokemonVariety.Magneton,
  PokemonSpecies.Magneton,
  [PokemonForm.Magneton],
);
new class FarfetchdVariety extends Variety {}(
  PokemonVariety.Farfetchd,
  PokemonSpecies.Farfetchd,
  [PokemonForm.Farfetchd],
);
new class FarfetchdGalarVariety extends Variety {}(
  PokemonVariety.FarfetchdGalar,
  PokemonSpecies.Farfetchd,
  [PokemonForm.FarfetchdGalar],
);
new class DoduoVariety extends Variety {}(
  PokemonVariety.Doduo,
  PokemonSpecies.Doduo,
  [PokemonForm.Doduo],
);
new class DodrioVariety extends Variety {}(
  PokemonVariety.Dodrio,
  PokemonSpecies.Dodrio,
  [PokemonForm.Dodrio],
);
new class SeelVariety extends Variety {}(
  PokemonVariety.Seel,
  PokemonSpecies.Seel,
  [PokemonForm.Seel],
);
new class DewgongVariety extends Variety {}(
  PokemonVariety.Dewgong,
  PokemonSpecies.Dewgong,
  [PokemonForm.Dewgong],
);
new class GrimerVariety extends Variety {}(
  PokemonVariety.Grimer,
  PokemonSpecies.Grimer,
  [PokemonForm.Grimer],
);
new class GrimerAlolaVariety extends Variety {}(
  PokemonVariety.GrimerAlola,
  PokemonSpecies.Grimer,
  [PokemonForm.GrimerAlola],
);
new class MukVariety extends Variety {}(
  PokemonVariety.Muk,
  PokemonSpecies.Muk,
  [PokemonForm.Muk],
);
new class MukAlolaVariety extends Variety {}(
  PokemonVariety.MukAlola,
  PokemonSpecies.Muk,
  [PokemonForm.MukAlola],
);
new class ShellderVariety extends Variety {}(
  PokemonVariety.Shellder,
  PokemonSpecies.Shellder,
  [PokemonForm.Shellder],
);
new class CloysterVariety extends Variety {}(
  PokemonVariety.Cloyster,
  PokemonSpecies.Cloyster,
  [PokemonForm.Cloyster],
);
new class GastlyVariety extends Variety {}(
  PokemonVariety.Gastly,
  PokemonSpecies.Gastly,
  [PokemonForm.Gastly],
);
new class HaunterVariety extends Variety {}(
  PokemonVariety.Haunter,
  PokemonSpecies.Haunter,
  [PokemonForm.Haunter],
);
new class GengarVariety extends Variety {}(
  PokemonVariety.Gengar,
  PokemonSpecies.Gengar,
  [PokemonForm.Gengar],
);
new class GengarMegaVariety extends Variety {}(
  PokemonVariety.GengarMega,
  PokemonSpecies.Gengar,
  [PokemonForm.GengarMega],
);
new class GengarGmaxVariety extends Variety {}(
  PokemonVariety.GengarGmax,
  PokemonSpecies.Gengar,
  [PokemonForm.GengarGmax],
);
new class OnixVariety extends Variety {}(
  PokemonVariety.Onix,
  PokemonSpecies.Onix,
  [PokemonForm.Onix],
);
new class DrowzeeVariety extends Variety {}(
  PokemonVariety.Drowzee,
  PokemonSpecies.Drowzee,
  [PokemonForm.Drowzee],
);
new class HypnoVariety extends Variety {}(
  PokemonVariety.Hypno,
  PokemonSpecies.Hypno,
  [PokemonForm.Hypno],
);
new class KrabbyVariety extends Variety {}(
  PokemonVariety.Krabby,
  PokemonSpecies.Krabby,
  [PokemonForm.Krabby],
);
new class KinglerVariety extends Variety {}(
  PokemonVariety.Kingler,
  PokemonSpecies.Kingler,
  [PokemonForm.Kingler],
);
new class KinglerGmaxVariety extends Variety {}(
  PokemonVariety.KinglerGmax,
  PokemonSpecies.Kingler,
  [PokemonForm.KinglerGmax],
);
new class VoltorbVariety extends Variety {}(
  PokemonVariety.Voltorb,
  PokemonSpecies.Voltorb,
  [PokemonForm.Voltorb],
);
new class VoltorbHisuiVariety extends Variety {}(
  PokemonVariety.VoltorbHisui,
  PokemonSpecies.Voltorb,
  [PokemonForm.VoltorbHisui],
);
new class ElectrodeVariety extends Variety {}(
  PokemonVariety.Electrode,
  PokemonSpecies.Electrode,
  [PokemonForm.Electrode],
);
new class ElectrodeHisuiVariety extends Variety {}(
  PokemonVariety.ElectrodeHisui,
  PokemonSpecies.Electrode,
  [PokemonForm.ElectrodeHisui],
);
new class ExeggcuteVariety extends Variety {}(
  PokemonVariety.Exeggcute,
  PokemonSpecies.Exeggcute,
  [PokemonForm.Exeggcute],
);
new class ExeggutorVariety extends Variety {}(
  PokemonVariety.Exeggutor,
  PokemonSpecies.Exeggutor,
  [PokemonForm.Exeggutor],
);
new class ExeggutorAlolaVariety extends Variety {}(
  PokemonVariety.ExeggutorAlola,
  PokemonSpecies.Exeggutor,
  [PokemonForm.ExeggutorAlola],
);
new class CuboneVariety extends Variety {}(
  PokemonVariety.Cubone,
  PokemonSpecies.Cubone,
  [PokemonForm.Cubone],
);
new class MarowakVariety extends Variety {}(
  PokemonVariety.Marowak,
  PokemonSpecies.Marowak,
  [PokemonForm.Marowak],
);
new class MarowakAlolaVariety extends Variety {}(
  PokemonVariety.MarowakAlola,
  PokemonSpecies.Marowak,
  [PokemonForm.MarowakAlola],
);
new class MarowakTotemVariety extends Variety {}(
  PokemonVariety.MarowakTotem,
  PokemonSpecies.Marowak,
  [PokemonForm.MarowakTotem],
);
new class HitmonleeVariety extends Variety {}(
  PokemonVariety.Hitmonlee,
  PokemonSpecies.Hitmonlee,
  [PokemonForm.Hitmonlee],
);
new class HitmonchanVariety extends Variety {}(
  PokemonVariety.Hitmonchan,
  PokemonSpecies.Hitmonchan,
  [PokemonForm.Hitmonchan],
);
new class LickitungVariety extends Variety {}(
  PokemonVariety.Lickitung,
  PokemonSpecies.Lickitung,
  [PokemonForm.Lickitung],
);
new class KoffingVariety extends Variety {}(
  PokemonVariety.Koffing,
  PokemonSpecies.Koffing,
  [PokemonForm.Koffing],
);
new class WeezingVariety extends Variety {}(
  PokemonVariety.Weezing,
  PokemonSpecies.Weezing,
  [PokemonForm.Weezing],
);
new class WeezingGalarVariety extends Variety {}(
  PokemonVariety.WeezingGalar,
  PokemonSpecies.Weezing,
  [PokemonForm.WeezingGalar],
);
new class RhyhornVariety extends Variety {}(
  PokemonVariety.Rhyhorn,
  PokemonSpecies.Rhyhorn,
  [PokemonForm.Rhyhorn],
);
new class RhydonVariety extends Variety {}(
  PokemonVariety.Rhydon,
  PokemonSpecies.Rhydon,
  [PokemonForm.Rhydon],
);
new class ChanseyVariety extends Variety {}(
  PokemonVariety.Chansey,
  PokemonSpecies.Chansey,
  [PokemonForm.Chansey],
);
new class TangelaVariety extends Variety {}(
  PokemonVariety.Tangela,
  PokemonSpecies.Tangela,
  [PokemonForm.Tangela],
);
new class KangaskhanVariety extends Variety {}(
  PokemonVariety.Kangaskhan,
  PokemonSpecies.Kangaskhan,
  [PokemonForm.Kangaskhan],
);
new class KangaskhanMegaVariety extends Variety {}(
  PokemonVariety.KangaskhanMega,
  PokemonSpecies.Kangaskhan,
  [PokemonForm.KangaskhanMega],
);
new class HorseaVariety extends Variety {}(
  PokemonVariety.Horsea,
  PokemonSpecies.Horsea,
  [PokemonForm.Horsea],
);
new class SeadraVariety extends Variety {}(
  PokemonVariety.Seadra,
  PokemonSpecies.Seadra,
  [PokemonForm.Seadra],
);
new class GoldeenVariety extends Variety {}(
  PokemonVariety.Goldeen,
  PokemonSpecies.Goldeen,
  [PokemonForm.Goldeen],
);
new class SeakingVariety extends Variety {}(
  PokemonVariety.Seaking,
  PokemonSpecies.Seaking,
  [PokemonForm.Seaking],
);
new class StaryuVariety extends Variety {}(
  PokemonVariety.Staryu,
  PokemonSpecies.Staryu,
  [PokemonForm.Staryu],
);
new class StarmieVariety extends Variety {}(
  PokemonVariety.Starmie,
  PokemonSpecies.Starmie,
  [PokemonForm.Starmie],
);
new class MrMimeVariety extends Variety {}(
  PokemonVariety.MrMime,
  PokemonSpecies.MrMime,
  [PokemonForm.MrMime],
);
new class MrMimeGalarVariety extends Variety {}(
  PokemonVariety.MrMimeGalar,
  PokemonSpecies.MrMime,
  [PokemonForm.MrMimeGalar],
);
new class ScytherVariety extends Variety {}(
  PokemonVariety.Scyther,
  PokemonSpecies.Scyther,
  [PokemonForm.Scyther],
);
new class JynxVariety extends Variety {}(
  PokemonVariety.Jynx,
  PokemonSpecies.Jynx,
  [PokemonForm.Jynx],
);
new class ElectabuzzVariety extends Variety {}(
  PokemonVariety.Electabuzz,
  PokemonSpecies.Electabuzz,
  [PokemonForm.Electabuzz],
);
new class MagmarVariety extends Variety {}(
  PokemonVariety.Magmar,
  PokemonSpecies.Magmar,
  [PokemonForm.Magmar],
);
new class PinsirVariety extends Variety {}(
  PokemonVariety.Pinsir,
  PokemonSpecies.Pinsir,
  [PokemonForm.Pinsir],
);
new class PinsirMegaVariety extends Variety {}(
  PokemonVariety.PinsirMega,
  PokemonSpecies.Pinsir,
  [PokemonForm.PinsirMega],
);
new class TaurosVariety extends Variety {}(
  PokemonVariety.Tauros,
  PokemonSpecies.Tauros,
  [PokemonForm.Tauros],
);
new class TaurosPaldeaCombatBreedVariety extends Variety {}(
  PokemonVariety.TaurosPaldeaCombatBreed,
  PokemonSpecies.Tauros,
  [PokemonForm.TaurosPaldeaCombatBreed],
);
new class TaurosPaldeaBlazeBreedVariety extends Variety {}(
  PokemonVariety.TaurosPaldeaBlazeBreed,
  PokemonSpecies.Tauros,
  [PokemonForm.TaurosPaldeaBlazeBreed],
);
new class TaurosPaldeaAquaBreedVariety extends Variety {}(
  PokemonVariety.TaurosPaldeaAquaBreed,
  PokemonSpecies.Tauros,
  [PokemonForm.TaurosPaldeaAquaBreed],
);
new class MagikarpVariety extends Variety {}(
  PokemonVariety.Magikarp,
  PokemonSpecies.Magikarp,
  [PokemonForm.Magikarp],
);
new class GyaradosVariety extends Variety {}(
  PokemonVariety.Gyarados,
  PokemonSpecies.Gyarados,
  [PokemonForm.Gyarados],
);
new class GyaradosMegaVariety extends Variety {}(
  PokemonVariety.GyaradosMega,
  PokemonSpecies.Gyarados,
  [PokemonForm.GyaradosMega],
);
new class LaprasVariety extends Variety {}(
  PokemonVariety.Lapras,
  PokemonSpecies.Lapras,
  [PokemonForm.Lapras],
);
new class LaprasGmaxVariety extends Variety {}(
  PokemonVariety.LaprasGmax,
  PokemonSpecies.Lapras,
  [PokemonForm.LaprasGmax],
);
new class DittoVariety extends Variety {}(
  PokemonVariety.Ditto,
  PokemonSpecies.Ditto,
  [PokemonForm.Ditto],
);
new class EeveeVariety extends Variety {}(
  PokemonVariety.Eevee,
  PokemonSpecies.Eevee,
  [PokemonForm.Eevee],
);
new class EeveeStarterVariety extends Variety {}(
  PokemonVariety.EeveeStarter,
  PokemonSpecies.Eevee,
  [PokemonForm.EeveeStarter],
);
new class EeveeGmaxVariety extends Variety {}(
  PokemonVariety.EeveeGmax,
  PokemonSpecies.Eevee,
  [PokemonForm.EeveeGmax],
);
new class VaporeonVariety extends Variety {}(
  PokemonVariety.Vaporeon,
  PokemonSpecies.Vaporeon,
  [PokemonForm.Vaporeon],
);
new class JolteonVariety extends Variety {}(
  PokemonVariety.Jolteon,
  PokemonSpecies.Jolteon,
  [PokemonForm.Jolteon],
);
new class FlareonVariety extends Variety {}(
  PokemonVariety.Flareon,
  PokemonSpecies.Flareon,
  [PokemonForm.Flareon],
);
new class PorygonVariety extends Variety {}(
  PokemonVariety.Porygon,
  PokemonSpecies.Porygon,
  [PokemonForm.Porygon],
);
new class OmanyteVariety extends Variety {}(
  PokemonVariety.Omanyte,
  PokemonSpecies.Omanyte,
  [PokemonForm.Omanyte],
);
new class OmastarVariety extends Variety {}(
  PokemonVariety.Omastar,
  PokemonSpecies.Omastar,
  [PokemonForm.Omastar],
);
new class KabutoVariety extends Variety {}(
  PokemonVariety.Kabuto,
  PokemonSpecies.Kabuto,
  [PokemonForm.Kabuto],
);
new class KabutopsVariety extends Variety {}(
  PokemonVariety.Kabutops,
  PokemonSpecies.Kabutops,
  [PokemonForm.Kabutops],
);
new class AerodactylVariety extends Variety {}(
  PokemonVariety.Aerodactyl,
  PokemonSpecies.Aerodactyl,
  [PokemonForm.Aerodactyl],
);
new class AerodactylMegaVariety extends Variety {}(
  PokemonVariety.AerodactylMega,
  PokemonSpecies.Aerodactyl,
  [PokemonForm.AerodactylMega],
);
new class SnorlaxVariety extends Variety {}(
  PokemonVariety.Snorlax,
  PokemonSpecies.Snorlax,
  [PokemonForm.Snorlax],
);
new class SnorlaxGmaxVariety extends Variety {}(
  PokemonVariety.SnorlaxGmax,
  PokemonSpecies.Snorlax,
  [PokemonForm.SnorlaxGmax],
);
new class ArticunoVariety extends Variety {}(
  PokemonVariety.Articuno,
  PokemonSpecies.Articuno,
  [PokemonForm.Articuno],
);
new class ArticunoGalarVariety extends Variety {}(
  PokemonVariety.ArticunoGalar,
  PokemonSpecies.Articuno,
  [PokemonForm.ArticunoGalar],
);
new class ZapdosVariety extends Variety {}(
  PokemonVariety.Zapdos,
  PokemonSpecies.Zapdos,
  [PokemonForm.Zapdos],
);
new class ZapdosGalarVariety extends Variety {}(
  PokemonVariety.ZapdosGalar,
  PokemonSpecies.Zapdos,
  [PokemonForm.ZapdosGalar],
);
new class MoltresVariety extends Variety {}(
  PokemonVariety.Moltres,
  PokemonSpecies.Moltres,
  [PokemonForm.Moltres],
);
new class MoltresGalarVariety extends Variety {}(
  PokemonVariety.MoltresGalar,
  PokemonSpecies.Moltres,
  [PokemonForm.MoltresGalar],
);
new class DratiniVariety extends Variety {}(
  PokemonVariety.Dratini,
  PokemonSpecies.Dratini,
  [PokemonForm.Dratini],
);
new class DragonairVariety extends Variety {}(
  PokemonVariety.Dragonair,
  PokemonSpecies.Dragonair,
  [PokemonForm.Dragonair],
);
new class DragoniteVariety extends Variety {}(
  PokemonVariety.Dragonite,
  PokemonSpecies.Dragonite,
  [PokemonForm.Dragonite],
);
new class MewtwoVariety extends Variety {}(
  PokemonVariety.Mewtwo,
  PokemonSpecies.Mewtwo,
  [PokemonForm.Mewtwo],
);
new class MewtwoMegaXVariety extends Variety {}(
  PokemonVariety.MewtwoMegaX,
  PokemonSpecies.Mewtwo,
  [PokemonForm.MewtwoMegaX],
);
new class MewtwoMegaYVariety extends Variety {}(
  PokemonVariety.MewtwoMegaY,
  PokemonSpecies.Mewtwo,
  [PokemonForm.MewtwoMegaY],
);
new class MewVariety extends Variety {}(
  PokemonVariety.Mew,
  PokemonSpecies.Mew,
  [PokemonForm.Mew],
);
new class ChikoritaVariety extends Variety {}(
  PokemonVariety.Chikorita,
  PokemonSpecies.Chikorita,
  [PokemonForm.Chikorita],
);
new class BayleefVariety extends Variety {}(
  PokemonVariety.Bayleef,
  PokemonSpecies.Bayleef,
  [PokemonForm.Bayleef],
);
new class MeganiumVariety extends Variety {}(
  PokemonVariety.Meganium,
  PokemonSpecies.Meganium,
  [PokemonForm.Meganium],
);
new class CyndaquilVariety extends Variety {}(
  PokemonVariety.Cyndaquil,
  PokemonSpecies.Cyndaquil,
  [PokemonForm.Cyndaquil],
);
new class QuilavaVariety extends Variety {}(
  PokemonVariety.Quilava,
  PokemonSpecies.Quilava,
  [PokemonForm.Quilava],
);
new class TyphlosionVariety extends Variety {}(
  PokemonVariety.Typhlosion,
  PokemonSpecies.Typhlosion,
  [PokemonForm.Typhlosion],
);
new class TyphlosionHisuiVariety extends Variety {}(
  PokemonVariety.TyphlosionHisui,
  PokemonSpecies.Typhlosion,
  [PokemonForm.TyphlosionHisui],
);
new class TotodileVariety extends Variety {}(
  PokemonVariety.Totodile,
  PokemonSpecies.Totodile,
  [PokemonForm.Totodile],
);
new class CroconawVariety extends Variety {}(
  PokemonVariety.Croconaw,
  PokemonSpecies.Croconaw,
  [PokemonForm.Croconaw],
);
new class FeraligatrVariety extends Variety {}(
  PokemonVariety.Feraligatr,
  PokemonSpecies.Feraligatr,
  [PokemonForm.Feraligatr],
);
new class SentretVariety extends Variety {}(
  PokemonVariety.Sentret,
  PokemonSpecies.Sentret,
  [PokemonForm.Sentret],
);
new class FurretVariety extends Variety {}(
  PokemonVariety.Furret,
  PokemonSpecies.Furret,
  [PokemonForm.Furret],
);
new class HoothootVariety extends Variety {}(
  PokemonVariety.Hoothoot,
  PokemonSpecies.Hoothoot,
  [PokemonForm.Hoothoot],
);
new class NoctowlVariety extends Variety {}(
  PokemonVariety.Noctowl,
  PokemonSpecies.Noctowl,
  [PokemonForm.Noctowl],
);
new class LedybaVariety extends Variety {}(
  PokemonVariety.Ledyba,
  PokemonSpecies.Ledyba,
  [PokemonForm.Ledyba],
);
new class LedianVariety extends Variety {}(
  PokemonVariety.Ledian,
  PokemonSpecies.Ledian,
  [PokemonForm.Ledian],
);
new class SpinarakVariety extends Variety {}(
  PokemonVariety.Spinarak,
  PokemonSpecies.Spinarak,
  [PokemonForm.Spinarak],
);
new class AriadosVariety extends Variety {}(
  PokemonVariety.Ariados,
  PokemonSpecies.Ariados,
  [PokemonForm.Ariados],
);
new class CrobatVariety extends Variety {}(
  PokemonVariety.Crobat,
  PokemonSpecies.Crobat,
  [PokemonForm.Crobat],
);
new class ChinchouVariety extends Variety {}(
  PokemonVariety.Chinchou,
  PokemonSpecies.Chinchou,
  [PokemonForm.Chinchou],
);
new class LanturnVariety extends Variety {}(
  PokemonVariety.Lanturn,
  PokemonSpecies.Lanturn,
  [PokemonForm.Lanturn],
);
new class PichuVariety extends Variety {}(
  PokemonVariety.Pichu,
  PokemonSpecies.Pichu,
  [PokemonForm.Pichu, PokemonForm.PichuSpikyEared],
);
new class CleffaVariety extends Variety {}(
  PokemonVariety.Cleffa,
  PokemonSpecies.Cleffa,
  [PokemonForm.Cleffa],
);
new class IgglybuffVariety extends Variety {}(
  PokemonVariety.Igglybuff,
  PokemonSpecies.Igglybuff,
  [PokemonForm.Igglybuff],
);
new class TogepiVariety extends Variety {}(
  PokemonVariety.Togepi,
  PokemonSpecies.Togepi,
  [PokemonForm.Togepi],
);
new class TogeticVariety extends Variety {}(
  PokemonVariety.Togetic,
  PokemonSpecies.Togetic,
  [PokemonForm.Togetic],
);
new class NatuVariety extends Variety {}(
  PokemonVariety.Natu,
  PokemonSpecies.Natu,
  [PokemonForm.Natu],
);
new class XatuVariety extends Variety {}(
  PokemonVariety.Xatu,
  PokemonSpecies.Xatu,
  [PokemonForm.Xatu],
);
new class MareepVariety extends Variety {}(
  PokemonVariety.Mareep,
  PokemonSpecies.Mareep,
  [PokemonForm.Mareep],
);
new class FlaaffyVariety extends Variety {}(
  PokemonVariety.Flaaffy,
  PokemonSpecies.Flaaffy,
  [PokemonForm.Flaaffy],
);
new class AmpharosVariety extends Variety {}(
  PokemonVariety.Ampharos,
  PokemonSpecies.Ampharos,
  [PokemonForm.Ampharos],
);
new class AmpharosMegaVariety extends Variety {}(
  PokemonVariety.AmpharosMega,
  PokemonSpecies.Ampharos,
  [PokemonForm.AmpharosMega],
);
new class BellossomVariety extends Variety {}(
  PokemonVariety.Bellossom,
  PokemonSpecies.Bellossom,
  [PokemonForm.Bellossom],
);
new class MarillVariety extends Variety {}(
  PokemonVariety.Marill,
  PokemonSpecies.Marill,
  [PokemonForm.Marill],
);
new class AzumarillVariety extends Variety {}(
  PokemonVariety.Azumarill,
  PokemonSpecies.Azumarill,
  [PokemonForm.Azumarill],
);
new class SudowoodoVariety extends Variety {}(
  PokemonVariety.Sudowoodo,
  PokemonSpecies.Sudowoodo,
  [PokemonForm.Sudowoodo],
);
new class PolitoedVariety extends Variety {}(
  PokemonVariety.Politoed,
  PokemonSpecies.Politoed,
  [PokemonForm.Politoed],
);
new class HoppipVariety extends Variety {}(
  PokemonVariety.Hoppip,
  PokemonSpecies.Hoppip,
  [PokemonForm.Hoppip],
);
new class SkiploomVariety extends Variety {}(
  PokemonVariety.Skiploom,
  PokemonSpecies.Skiploom,
  [PokemonForm.Skiploom],
);
new class JumpluffVariety extends Variety {}(
  PokemonVariety.Jumpluff,
  PokemonSpecies.Jumpluff,
  [PokemonForm.Jumpluff],
);
new class AipomVariety extends Variety {}(
  PokemonVariety.Aipom,
  PokemonSpecies.Aipom,
  [PokemonForm.Aipom],
);
new class SunkernVariety extends Variety {}(
  PokemonVariety.Sunkern,
  PokemonSpecies.Sunkern,
  [PokemonForm.Sunkern],
);
new class SunfloraVariety extends Variety {}(
  PokemonVariety.Sunflora,
  PokemonSpecies.Sunflora,
  [PokemonForm.Sunflora],
);
new class YanmaVariety extends Variety {}(
  PokemonVariety.Yanma,
  PokemonSpecies.Yanma,
  [PokemonForm.Yanma],
);
new class WooperVariety extends Variety {}(
  PokemonVariety.Wooper,
  PokemonSpecies.Wooper,
  [PokemonForm.Wooper],
);
new class WooperPaldeaVariety extends Variety {}(
  PokemonVariety.WooperPaldea,
  PokemonSpecies.Wooper,
  [PokemonForm.WooperPaldea],
);
new class QuagsireVariety extends Variety {}(
  PokemonVariety.Quagsire,
  PokemonSpecies.Quagsire,
  [PokemonForm.Quagsire],
);
new class EspeonVariety extends Variety {}(
  PokemonVariety.Espeon,
  PokemonSpecies.Espeon,
  [PokemonForm.Espeon],
);
new class UmbreonVariety extends Variety {}(
  PokemonVariety.Umbreon,
  PokemonSpecies.Umbreon,
  [PokemonForm.Umbreon],
);
new class MurkrowVariety extends Variety {}(
  PokemonVariety.Murkrow,
  PokemonSpecies.Murkrow,
  [PokemonForm.Murkrow],
);
new class SlowkingVariety extends Variety {}(
  PokemonVariety.Slowking,
  PokemonSpecies.Slowking,
  [PokemonForm.Slowking],
);
new class SlowkingGalarVariety extends Variety {}(
  PokemonVariety.SlowkingGalar,
  PokemonSpecies.Slowking,
  [PokemonForm.SlowkingGalar],
);
new class MisdreavusVariety extends Variety {}(
  PokemonVariety.Misdreavus,
  PokemonSpecies.Misdreavus,
  [PokemonForm.Misdreavus],
);
new class UnownVariety extends Variety {}(
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  [PokemonForm.UnownA, PokemonForm.UnownB, PokemonForm.UnownC, PokemonForm.UnownD, PokemonForm.UnownE, PokemonForm.UnownF, PokemonForm.UnownG, PokemonForm.UnownH, PokemonForm.UnownI, PokemonForm.UnownJ, PokemonForm.UnownK, PokemonForm.UnownL, PokemonForm.UnownM, PokemonForm.UnownN, PokemonForm.UnownO, PokemonForm.UnownP, PokemonForm.UnownQ, PokemonForm.UnownR, PokemonForm.UnownS, PokemonForm.UnownT, PokemonForm.UnownU, PokemonForm.UnownV, PokemonForm.UnownW, PokemonForm.UnownX, PokemonForm.UnownY, PokemonForm.UnownZ, PokemonForm.UnownExclamation, PokemonForm.UnownQuestion],
);
new class WobbuffetVariety extends Variety {}(
  PokemonVariety.Wobbuffet,
  PokemonSpecies.Wobbuffet,
  [PokemonForm.Wobbuffet],
);
new class GirafarigVariety extends Variety {}(
  PokemonVariety.Girafarig,
  PokemonSpecies.Girafarig,
  [PokemonForm.Girafarig],
);
new class PinecoVariety extends Variety {}(
  PokemonVariety.Pineco,
  PokemonSpecies.Pineco,
  [PokemonForm.Pineco],
);
new class ForretressVariety extends Variety {}(
  PokemonVariety.Forretress,
  PokemonSpecies.Forretress,
  [PokemonForm.Forretress],
);
new class DunsparceVariety extends Variety {}(
  PokemonVariety.Dunsparce,
  PokemonSpecies.Dunsparce,
  [PokemonForm.Dunsparce],
);
new class GligarVariety extends Variety {}(
  PokemonVariety.Gligar,
  PokemonSpecies.Gligar,
  [PokemonForm.Gligar],
);
new class SteelixVariety extends Variety {}(
  PokemonVariety.Steelix,
  PokemonSpecies.Steelix,
  [PokemonForm.Steelix],
);
new class SteelixMegaVariety extends Variety {}(
  PokemonVariety.SteelixMega,
  PokemonSpecies.Steelix,
  [PokemonForm.SteelixMega],
);
new class SnubbullVariety extends Variety {}(
  PokemonVariety.Snubbull,
  PokemonSpecies.Snubbull,
  [PokemonForm.Snubbull],
);
new class GranbullVariety extends Variety {}(
  PokemonVariety.Granbull,
  PokemonSpecies.Granbull,
  [PokemonForm.Granbull],
);
new class QwilfishVariety extends Variety {}(
  PokemonVariety.Qwilfish,
  PokemonSpecies.Qwilfish,
  [PokemonForm.Qwilfish],
);
new class QwilfishHisuiVariety extends Variety {}(
  PokemonVariety.QwilfishHisui,
  PokemonSpecies.Qwilfish,
  [PokemonForm.QwilfishHisui],
);
new class ScizorVariety extends Variety {}(
  PokemonVariety.Scizor,
  PokemonSpecies.Scizor,
  [PokemonForm.Scizor],
);
new class ScizorMegaVariety extends Variety {}(
  PokemonVariety.ScizorMega,
  PokemonSpecies.Scizor,
  [PokemonForm.ScizorMega],
);
new class ShuckleVariety extends Variety {}(
  PokemonVariety.Shuckle,
  PokemonSpecies.Shuckle,
  [PokemonForm.Shuckle],
);
new class HeracrossVariety extends Variety {}(
  PokemonVariety.Heracross,
  PokemonSpecies.Heracross,
  [PokemonForm.Heracross],
);
new class HeracrossMegaVariety extends Variety {}(
  PokemonVariety.HeracrossMega,
  PokemonSpecies.Heracross,
  [PokemonForm.HeracrossMega],
);
new class SneaselVariety extends Variety {}(
  PokemonVariety.Sneasel,
  PokemonSpecies.Sneasel,
  [PokemonForm.Sneasel],
);
new class SneaselHisuiVariety extends Variety {}(
  PokemonVariety.SneaselHisui,
  PokemonSpecies.Sneasel,
  [PokemonForm.SneaselHisui],
);
new class TeddiursaVariety extends Variety {}(
  PokemonVariety.Teddiursa,
  PokemonSpecies.Teddiursa,
  [PokemonForm.Teddiursa],
);
new class UrsaringVariety extends Variety {}(
  PokemonVariety.Ursaring,
  PokemonSpecies.Ursaring,
  [PokemonForm.Ursaring],
);
new class SlugmaVariety extends Variety {}(
  PokemonVariety.Slugma,
  PokemonSpecies.Slugma,
  [PokemonForm.Slugma],
);
new class MagcargoVariety extends Variety {}(
  PokemonVariety.Magcargo,
  PokemonSpecies.Magcargo,
  [PokemonForm.Magcargo],
);
new class SwinubVariety extends Variety {}(
  PokemonVariety.Swinub,
  PokemonSpecies.Swinub,
  [PokemonForm.Swinub],
);
new class PiloswineVariety extends Variety {}(
  PokemonVariety.Piloswine,
  PokemonSpecies.Piloswine,
  [PokemonForm.Piloswine],
);
new class CorsolaVariety extends Variety {}(
  PokemonVariety.Corsola,
  PokemonSpecies.Corsola,
  [PokemonForm.Corsola],
);
new class CorsolaGalarVariety extends Variety {}(
  PokemonVariety.CorsolaGalar,
  PokemonSpecies.Corsola,
  [PokemonForm.CorsolaGalar],
);
new class RemoraidVariety extends Variety {}(
  PokemonVariety.Remoraid,
  PokemonSpecies.Remoraid,
  [PokemonForm.Remoraid],
);
new class OctilleryVariety extends Variety {}(
  PokemonVariety.Octillery,
  PokemonSpecies.Octillery,
  [PokemonForm.Octillery],
);
new class DelibirdVariety extends Variety {}(
  PokemonVariety.Delibird,
  PokemonSpecies.Delibird,
  [PokemonForm.Delibird],
);
new class MantineVariety extends Variety {}(
  PokemonVariety.Mantine,
  PokemonSpecies.Mantine,
  [PokemonForm.Mantine],
);
new class SkarmoryVariety extends Variety {}(
  PokemonVariety.Skarmory,
  PokemonSpecies.Skarmory,
  [PokemonForm.Skarmory],
);
new class HoundourVariety extends Variety {}(
  PokemonVariety.Houndour,
  PokemonSpecies.Houndour,
  [PokemonForm.Houndour],
);
new class HoundoomVariety extends Variety {}(
  PokemonVariety.Houndoom,
  PokemonSpecies.Houndoom,
  [PokemonForm.Houndoom],
);
new class HoundoomMegaVariety extends Variety {}(
  PokemonVariety.HoundoomMega,
  PokemonSpecies.Houndoom,
  [PokemonForm.HoundoomMega],
);
new class KingdraVariety extends Variety {}(
  PokemonVariety.Kingdra,
  PokemonSpecies.Kingdra,
  [PokemonForm.Kingdra],
);
new class PhanpyVariety extends Variety {}(
  PokemonVariety.Phanpy,
  PokemonSpecies.Phanpy,
  [PokemonForm.Phanpy],
);
new class DonphanVariety extends Variety {}(
  PokemonVariety.Donphan,
  PokemonSpecies.Donphan,
  [PokemonForm.Donphan],
);
new class Porygon2Variety extends Variety {}(
  PokemonVariety.Porygon2,
  PokemonSpecies.Porygon2,
  [PokemonForm.Porygon2],
);
new class StantlerVariety extends Variety {}(
  PokemonVariety.Stantler,
  PokemonSpecies.Stantler,
  [PokemonForm.Stantler],
);
new class SmeargleVariety extends Variety {}(
  PokemonVariety.Smeargle,
  PokemonSpecies.Smeargle,
  [PokemonForm.Smeargle],
);
new class TyrogueVariety extends Variety {}(
  PokemonVariety.Tyrogue,
  PokemonSpecies.Tyrogue,
  [PokemonForm.Tyrogue],
);
new class HitmontopVariety extends Variety {}(
  PokemonVariety.Hitmontop,
  PokemonSpecies.Hitmontop,
  [PokemonForm.Hitmontop],
);
new class SmoochumVariety extends Variety {}(
  PokemonVariety.Smoochum,
  PokemonSpecies.Smoochum,
  [PokemonForm.Smoochum],
);
new class ElekidVariety extends Variety {}(
  PokemonVariety.Elekid,
  PokemonSpecies.Elekid,
  [PokemonForm.Elekid],
);
new class MagbyVariety extends Variety {}(
  PokemonVariety.Magby,
  PokemonSpecies.Magby,
  [PokemonForm.Magby],
);
new class MiltankVariety extends Variety {}(
  PokemonVariety.Miltank,
  PokemonSpecies.Miltank,
  [PokemonForm.Miltank],
);
new class BlisseyVariety extends Variety {}(
  PokemonVariety.Blissey,
  PokemonSpecies.Blissey,
  [PokemonForm.Blissey],
);
new class RaikouVariety extends Variety {}(
  PokemonVariety.Raikou,
  PokemonSpecies.Raikou,
  [PokemonForm.Raikou],
);
new class EnteiVariety extends Variety {}(
  PokemonVariety.Entei,
  PokemonSpecies.Entei,
  [PokemonForm.Entei],
);
new class SuicuneVariety extends Variety {}(
  PokemonVariety.Suicune,
  PokemonSpecies.Suicune,
  [PokemonForm.Suicune],
);
new class LarvitarVariety extends Variety {}(
  PokemonVariety.Larvitar,
  PokemonSpecies.Larvitar,
  [PokemonForm.Larvitar],
);
new class PupitarVariety extends Variety {}(
  PokemonVariety.Pupitar,
  PokemonSpecies.Pupitar,
  [PokemonForm.Pupitar],
);
new class TyranitarVariety extends Variety {}(
  PokemonVariety.Tyranitar,
  PokemonSpecies.Tyranitar,
  [PokemonForm.Tyranitar],
);
new class TyranitarMegaVariety extends Variety {}(
  PokemonVariety.TyranitarMega,
  PokemonSpecies.Tyranitar,
  [PokemonForm.TyranitarMega],
);
new class LugiaVariety extends Variety {}(
  PokemonVariety.Lugia,
  PokemonSpecies.Lugia,
  [PokemonForm.Lugia],
);
new class HoOhVariety extends Variety {}(
  PokemonVariety.HoOh,
  PokemonSpecies.HoOh,
  [PokemonForm.HoOh],
);
new class CelebiVariety extends Variety {}(
  PokemonVariety.Celebi,
  PokemonSpecies.Celebi,
  [PokemonForm.Celebi],
);
new class TreeckoVariety extends Variety {}(
  PokemonVariety.Treecko,
  PokemonSpecies.Treecko,
  [PokemonForm.Treecko],
);
new class GrovyleVariety extends Variety {}(
  PokemonVariety.Grovyle,
  PokemonSpecies.Grovyle,
  [PokemonForm.Grovyle],
);
new class SceptileVariety extends Variety {}(
  PokemonVariety.Sceptile,
  PokemonSpecies.Sceptile,
  [PokemonForm.Sceptile],
);
new class SceptileMegaVariety extends Variety {}(
  PokemonVariety.SceptileMega,
  PokemonSpecies.Sceptile,
  [PokemonForm.SceptileMega],
);
new class TorchicVariety extends Variety {}(
  PokemonVariety.Torchic,
  PokemonSpecies.Torchic,
  [PokemonForm.Torchic],
);
new class CombuskenVariety extends Variety {}(
  PokemonVariety.Combusken,
  PokemonSpecies.Combusken,
  [PokemonForm.Combusken],
);
new class BlazikenVariety extends Variety {}(
  PokemonVariety.Blaziken,
  PokemonSpecies.Blaziken,
  [PokemonForm.Blaziken],
);
new class BlazikenMegaVariety extends Variety {}(
  PokemonVariety.BlazikenMega,
  PokemonSpecies.Blaziken,
  [PokemonForm.BlazikenMega],
);
new class MudkipVariety extends Variety {}(
  PokemonVariety.Mudkip,
  PokemonSpecies.Mudkip,
  [PokemonForm.Mudkip],
);
new class MarshtompVariety extends Variety {}(
  PokemonVariety.Marshtomp,
  PokemonSpecies.Marshtomp,
  [PokemonForm.Marshtomp],
);
new class SwampertVariety extends Variety {}(
  PokemonVariety.Swampert,
  PokemonSpecies.Swampert,
  [PokemonForm.Swampert],
);
new class SwampertMegaVariety extends Variety {}(
  PokemonVariety.SwampertMega,
  PokemonSpecies.Swampert,
  [PokemonForm.SwampertMega],
);
new class PoochyenaVariety extends Variety {}(
  PokemonVariety.Poochyena,
  PokemonSpecies.Poochyena,
  [PokemonForm.Poochyena],
);
new class MightyenaVariety extends Variety {}(
  PokemonVariety.Mightyena,
  PokemonSpecies.Mightyena,
  [PokemonForm.Mightyena],
);
new class ZigzagoonVariety extends Variety {}(
  PokemonVariety.Zigzagoon,
  PokemonSpecies.Zigzagoon,
  [PokemonForm.Zigzagoon],
);
new class ZigzagoonGalarVariety extends Variety {}(
  PokemonVariety.ZigzagoonGalar,
  PokemonSpecies.Zigzagoon,
  [PokemonForm.ZigzagoonGalar],
);
new class LinooneVariety extends Variety {}(
  PokemonVariety.Linoone,
  PokemonSpecies.Linoone,
  [PokemonForm.Linoone],
);
new class LinooneGalarVariety extends Variety {}(
  PokemonVariety.LinooneGalar,
  PokemonSpecies.Linoone,
  [PokemonForm.LinooneGalar],
);
new class WurmpleVariety extends Variety {}(
  PokemonVariety.Wurmple,
  PokemonSpecies.Wurmple,
  [PokemonForm.Wurmple],
);
new class SilcoonVariety extends Variety {}(
  PokemonVariety.Silcoon,
  PokemonSpecies.Silcoon,
  [PokemonForm.Silcoon],
);
new class BeautiflyVariety extends Variety {}(
  PokemonVariety.Beautifly,
  PokemonSpecies.Beautifly,
  [PokemonForm.Beautifly],
);
new class CascoonVariety extends Variety {}(
  PokemonVariety.Cascoon,
  PokemonSpecies.Cascoon,
  [PokemonForm.Cascoon],
);
new class DustoxVariety extends Variety {}(
  PokemonVariety.Dustox,
  PokemonSpecies.Dustox,
  [PokemonForm.Dustox],
);
new class LotadVariety extends Variety {}(
  PokemonVariety.Lotad,
  PokemonSpecies.Lotad,
  [PokemonForm.Lotad],
);
new class LombreVariety extends Variety {}(
  PokemonVariety.Lombre,
  PokemonSpecies.Lombre,
  [PokemonForm.Lombre],
);
new class LudicoloVariety extends Variety {}(
  PokemonVariety.Ludicolo,
  PokemonSpecies.Ludicolo,
  [PokemonForm.Ludicolo],
);
new class SeedotVariety extends Variety {}(
  PokemonVariety.Seedot,
  PokemonSpecies.Seedot,
  [PokemonForm.Seedot],
);
new class NuzleafVariety extends Variety {}(
  PokemonVariety.Nuzleaf,
  PokemonSpecies.Nuzleaf,
  [PokemonForm.Nuzleaf],
);
new class ShiftryVariety extends Variety {}(
  PokemonVariety.Shiftry,
  PokemonSpecies.Shiftry,
  [PokemonForm.Shiftry],
);
new class TaillowVariety extends Variety {}(
  PokemonVariety.Taillow,
  PokemonSpecies.Taillow,
  [PokemonForm.Taillow],
);
new class SwellowVariety extends Variety {}(
  PokemonVariety.Swellow,
  PokemonSpecies.Swellow,
  [PokemonForm.Swellow],
);
new class WingullVariety extends Variety {}(
  PokemonVariety.Wingull,
  PokemonSpecies.Wingull,
  [PokemonForm.Wingull],
);
new class PelipperVariety extends Variety {}(
  PokemonVariety.Pelipper,
  PokemonSpecies.Pelipper,
  [PokemonForm.Pelipper],
);
new class RaltsVariety extends Variety {}(
  PokemonVariety.Ralts,
  PokemonSpecies.Ralts,
  [PokemonForm.Ralts],
);
new class KirliaVariety extends Variety {}(
  PokemonVariety.Kirlia,
  PokemonSpecies.Kirlia,
  [PokemonForm.Kirlia],
);
new class GardevoirVariety extends Variety {}(
  PokemonVariety.Gardevoir,
  PokemonSpecies.Gardevoir,
  [PokemonForm.Gardevoir],
);
new class GardevoirMegaVariety extends Variety {}(
  PokemonVariety.GardevoirMega,
  PokemonSpecies.Gardevoir,
  [PokemonForm.GardevoirMega],
);
new class SurskitVariety extends Variety {}(
  PokemonVariety.Surskit,
  PokemonSpecies.Surskit,
  [PokemonForm.Surskit],
);
new class MasquerainVariety extends Variety {}(
  PokemonVariety.Masquerain,
  PokemonSpecies.Masquerain,
  [PokemonForm.Masquerain],
);
new class ShroomishVariety extends Variety {}(
  PokemonVariety.Shroomish,
  PokemonSpecies.Shroomish,
  [PokemonForm.Shroomish],
);
new class BreloomVariety extends Variety {}(
  PokemonVariety.Breloom,
  PokemonSpecies.Breloom,
  [PokemonForm.Breloom],
);
new class SlakothVariety extends Variety {}(
  PokemonVariety.Slakoth,
  PokemonSpecies.Slakoth,
  [PokemonForm.Slakoth],
);
new class VigorothVariety extends Variety {}(
  PokemonVariety.Vigoroth,
  PokemonSpecies.Vigoroth,
  [PokemonForm.Vigoroth],
);
new class SlakingVariety extends Variety {}(
  PokemonVariety.Slaking,
  PokemonSpecies.Slaking,
  [PokemonForm.Slaking],
);
new class NincadaVariety extends Variety {}(
  PokemonVariety.Nincada,
  PokemonSpecies.Nincada,
  [PokemonForm.Nincada],
);
new class NinjaskVariety extends Variety {}(
  PokemonVariety.Ninjask,
  PokemonSpecies.Ninjask,
  [PokemonForm.Ninjask],
);
new class ShedinjaVariety extends Variety {}(
  PokemonVariety.Shedinja,
  PokemonSpecies.Shedinja,
  [PokemonForm.Shedinja],
);
new class WhismurVariety extends Variety {}(
  PokemonVariety.Whismur,
  PokemonSpecies.Whismur,
  [PokemonForm.Whismur],
);
new class LoudredVariety extends Variety {}(
  PokemonVariety.Loudred,
  PokemonSpecies.Loudred,
  [PokemonForm.Loudred],
);
new class ExploudVariety extends Variety {}(
  PokemonVariety.Exploud,
  PokemonSpecies.Exploud,
  [PokemonForm.Exploud],
);
new class MakuhitaVariety extends Variety {}(
  PokemonVariety.Makuhita,
  PokemonSpecies.Makuhita,
  [PokemonForm.Makuhita],
);
new class HariyamaVariety extends Variety {}(
  PokemonVariety.Hariyama,
  PokemonSpecies.Hariyama,
  [PokemonForm.Hariyama],
);
new class AzurillVariety extends Variety {}(
  PokemonVariety.Azurill,
  PokemonSpecies.Azurill,
  [PokemonForm.Azurill],
);
new class NosepassVariety extends Variety {}(
  PokemonVariety.Nosepass,
  PokemonSpecies.Nosepass,
  [PokemonForm.Nosepass],
);
new class SkittyVariety extends Variety {}(
  PokemonVariety.Skitty,
  PokemonSpecies.Skitty,
  [PokemonForm.Skitty],
);
new class DelcattyVariety extends Variety {}(
  PokemonVariety.Delcatty,
  PokemonSpecies.Delcatty,
  [PokemonForm.Delcatty],
);
new class SableyeVariety extends Variety {}(
  PokemonVariety.Sableye,
  PokemonSpecies.Sableye,
  [PokemonForm.Sableye],
);
new class SableyeMegaVariety extends Variety {}(
  PokemonVariety.SableyeMega,
  PokemonSpecies.Sableye,
  [PokemonForm.SableyeMega],
);
new class MawileVariety extends Variety {}(
  PokemonVariety.Mawile,
  PokemonSpecies.Mawile,
  [PokemonForm.Mawile],
);
new class MawileMegaVariety extends Variety {}(
  PokemonVariety.MawileMega,
  PokemonSpecies.Mawile,
  [PokemonForm.MawileMega],
);
new class AronVariety extends Variety {}(
  PokemonVariety.Aron,
  PokemonSpecies.Aron,
  [PokemonForm.Aron],
);
new class LaironVariety extends Variety {}(
  PokemonVariety.Lairon,
  PokemonSpecies.Lairon,
  [PokemonForm.Lairon],
);
new class AggronVariety extends Variety {}(
  PokemonVariety.Aggron,
  PokemonSpecies.Aggron,
  [PokemonForm.Aggron],
);
new class AggronMegaVariety extends Variety {}(
  PokemonVariety.AggronMega,
  PokemonSpecies.Aggron,
  [PokemonForm.AggronMega],
);
new class MedititeVariety extends Variety {}(
  PokemonVariety.Meditite,
  PokemonSpecies.Meditite,
  [PokemonForm.Meditite],
);
new class MedichamVariety extends Variety {}(
  PokemonVariety.Medicham,
  PokemonSpecies.Medicham,
  [PokemonForm.Medicham],
);
new class MedichamMegaVariety extends Variety {}(
  PokemonVariety.MedichamMega,
  PokemonSpecies.Medicham,
  [PokemonForm.MedichamMega],
);
new class ElectrikeVariety extends Variety {}(
  PokemonVariety.Electrike,
  PokemonSpecies.Electrike,
  [PokemonForm.Electrike],
);
new class ManectricVariety extends Variety {}(
  PokemonVariety.Manectric,
  PokemonSpecies.Manectric,
  [PokemonForm.Manectric],
);
new class ManectricMegaVariety extends Variety {}(
  PokemonVariety.ManectricMega,
  PokemonSpecies.Manectric,
  [PokemonForm.ManectricMega],
);
new class PlusleVariety extends Variety {}(
  PokemonVariety.Plusle,
  PokemonSpecies.Plusle,
  [PokemonForm.Plusle],
);
new class MinunVariety extends Variety {}(
  PokemonVariety.Minun,
  PokemonSpecies.Minun,
  [PokemonForm.Minun],
);
new class VolbeatVariety extends Variety {}(
  PokemonVariety.Volbeat,
  PokemonSpecies.Volbeat,
  [PokemonForm.Volbeat],
);
new class IllumiseVariety extends Variety {}(
  PokemonVariety.Illumise,
  PokemonSpecies.Illumise,
  [PokemonForm.Illumise],
);
new class RoseliaVariety extends Variety {}(
  PokemonVariety.Roselia,
  PokemonSpecies.Roselia,
  [PokemonForm.Roselia],
);
new class GulpinVariety extends Variety {}(
  PokemonVariety.Gulpin,
  PokemonSpecies.Gulpin,
  [PokemonForm.Gulpin],
);
new class SwalotVariety extends Variety {}(
  PokemonVariety.Swalot,
  PokemonSpecies.Swalot,
  [PokemonForm.Swalot],
);
new class CarvanhaVariety extends Variety {}(
  PokemonVariety.Carvanha,
  PokemonSpecies.Carvanha,
  [PokemonForm.Carvanha],
);
new class SharpedoVariety extends Variety {}(
  PokemonVariety.Sharpedo,
  PokemonSpecies.Sharpedo,
  [PokemonForm.Sharpedo],
);
new class SharpedoMegaVariety extends Variety {}(
  PokemonVariety.SharpedoMega,
  PokemonSpecies.Sharpedo,
  [PokemonForm.SharpedoMega],
);
new class WailmerVariety extends Variety {}(
  PokemonVariety.Wailmer,
  PokemonSpecies.Wailmer,
  [PokemonForm.Wailmer],
);
new class WailordVariety extends Variety {}(
  PokemonVariety.Wailord,
  PokemonSpecies.Wailord,
  [PokemonForm.Wailord],
);
new class NumelVariety extends Variety {}(
  PokemonVariety.Numel,
  PokemonSpecies.Numel,
  [PokemonForm.Numel],
);
new class CameruptVariety extends Variety {}(
  PokemonVariety.Camerupt,
  PokemonSpecies.Camerupt,
  [PokemonForm.Camerupt],
);
new class CameruptMegaVariety extends Variety {}(
  PokemonVariety.CameruptMega,
  PokemonSpecies.Camerupt,
  [PokemonForm.CameruptMega],
);
new class TorkoalVariety extends Variety {}(
  PokemonVariety.Torkoal,
  PokemonSpecies.Torkoal,
  [PokemonForm.Torkoal],
);
new class SpoinkVariety extends Variety {}(
  PokemonVariety.Spoink,
  PokemonSpecies.Spoink,
  [PokemonForm.Spoink],
);
new class GrumpigVariety extends Variety {}(
  PokemonVariety.Grumpig,
  PokemonSpecies.Grumpig,
  [PokemonForm.Grumpig],
);
new class SpindaVariety extends Variety {}(
  PokemonVariety.Spinda,
  PokemonSpecies.Spinda,
  [PokemonForm.Spinda],
);
new class TrapinchVariety extends Variety {}(
  PokemonVariety.Trapinch,
  PokemonSpecies.Trapinch,
  [PokemonForm.Trapinch],
);
new class VibravaVariety extends Variety {}(
  PokemonVariety.Vibrava,
  PokemonSpecies.Vibrava,
  [PokemonForm.Vibrava],
);
new class FlygonVariety extends Variety {}(
  PokemonVariety.Flygon,
  PokemonSpecies.Flygon,
  [PokemonForm.Flygon],
);
new class CacneaVariety extends Variety {}(
  PokemonVariety.Cacnea,
  PokemonSpecies.Cacnea,
  [PokemonForm.Cacnea],
);
new class CacturneVariety extends Variety {}(
  PokemonVariety.Cacturne,
  PokemonSpecies.Cacturne,
  [PokemonForm.Cacturne],
);
new class SwabluVariety extends Variety {}(
  PokemonVariety.Swablu,
  PokemonSpecies.Swablu,
  [PokemonForm.Swablu],
);
new class AltariaVariety extends Variety {}(
  PokemonVariety.Altaria,
  PokemonSpecies.Altaria,
  [PokemonForm.Altaria],
);
new class AltariaMegaVariety extends Variety {}(
  PokemonVariety.AltariaMega,
  PokemonSpecies.Altaria,
  [PokemonForm.AltariaMega],
);
new class ZangooseVariety extends Variety {}(
  PokemonVariety.Zangoose,
  PokemonSpecies.Zangoose,
  [PokemonForm.Zangoose],
);
new class SeviperVariety extends Variety {}(
  PokemonVariety.Seviper,
  PokemonSpecies.Seviper,
  [PokemonForm.Seviper],
);
new class LunatoneVariety extends Variety {}(
  PokemonVariety.Lunatone,
  PokemonSpecies.Lunatone,
  [PokemonForm.Lunatone],
);
new class SolrockVariety extends Variety {}(
  PokemonVariety.Solrock,
  PokemonSpecies.Solrock,
  [PokemonForm.Solrock],
);
new class BarboachVariety extends Variety {}(
  PokemonVariety.Barboach,
  PokemonSpecies.Barboach,
  [PokemonForm.Barboach],
);
new class WhiscashVariety extends Variety {}(
  PokemonVariety.Whiscash,
  PokemonSpecies.Whiscash,
  [PokemonForm.Whiscash],
);
new class CorphishVariety extends Variety {}(
  PokemonVariety.Corphish,
  PokemonSpecies.Corphish,
  [PokemonForm.Corphish],
);
new class CrawdauntVariety extends Variety {}(
  PokemonVariety.Crawdaunt,
  PokemonSpecies.Crawdaunt,
  [PokemonForm.Crawdaunt],
);
new class BaltoyVariety extends Variety {}(
  PokemonVariety.Baltoy,
  PokemonSpecies.Baltoy,
  [PokemonForm.Baltoy],
);
new class ClaydolVariety extends Variety {}(
  PokemonVariety.Claydol,
  PokemonSpecies.Claydol,
  [PokemonForm.Claydol],
);
new class LileepVariety extends Variety {}(
  PokemonVariety.Lileep,
  PokemonSpecies.Lileep,
  [PokemonForm.Lileep],
);
new class CradilyVariety extends Variety {}(
  PokemonVariety.Cradily,
  PokemonSpecies.Cradily,
  [PokemonForm.Cradily],
);
new class AnorithVariety extends Variety {}(
  PokemonVariety.Anorith,
  PokemonSpecies.Anorith,
  [PokemonForm.Anorith],
);
new class ArmaldoVariety extends Variety {}(
  PokemonVariety.Armaldo,
  PokemonSpecies.Armaldo,
  [PokemonForm.Armaldo],
);
new class FeebasVariety extends Variety {}(
  PokemonVariety.Feebas,
  PokemonSpecies.Feebas,
  [PokemonForm.Feebas],
);
new class MiloticVariety extends Variety {}(
  PokemonVariety.Milotic,
  PokemonSpecies.Milotic,
  [PokemonForm.Milotic],
);
new class CastformVariety extends Variety {}(
  PokemonVariety.Castform,
  PokemonSpecies.Castform,
  [PokemonForm.Castform],
);
new class CastformSunnyVariety extends Variety {}(
  PokemonVariety.CastformSunny,
  PokemonSpecies.Castform,
  [PokemonForm.CastformSunny],
);
new class CastformRainyVariety extends Variety {}(
  PokemonVariety.CastformRainy,
  PokemonSpecies.Castform,
  [PokemonForm.CastformRainy],
);
new class CastformSnowyVariety extends Variety {}(
  PokemonVariety.CastformSnowy,
  PokemonSpecies.Castform,
  [PokemonForm.CastformSnowy],
);
new class KecleonVariety extends Variety {}(
  PokemonVariety.Kecleon,
  PokemonSpecies.Kecleon,
  [PokemonForm.Kecleon],
);
new class ShuppetVariety extends Variety {}(
  PokemonVariety.Shuppet,
  PokemonSpecies.Shuppet,
  [PokemonForm.Shuppet],
);
new class BanetteVariety extends Variety {}(
  PokemonVariety.Banette,
  PokemonSpecies.Banette,
  [PokemonForm.Banette],
);
new class BanetteMegaVariety extends Variety {}(
  PokemonVariety.BanetteMega,
  PokemonSpecies.Banette,
  [PokemonForm.BanetteMega],
);
new class DuskullVariety extends Variety {}(
  PokemonVariety.Duskull,
  PokemonSpecies.Duskull,
  [PokemonForm.Duskull],
);
new class DusclopsVariety extends Variety {}(
  PokemonVariety.Dusclops,
  PokemonSpecies.Dusclops,
  [PokemonForm.Dusclops],
);
new class TropiusVariety extends Variety {}(
  PokemonVariety.Tropius,
  PokemonSpecies.Tropius,
  [PokemonForm.Tropius],
);
new class ChimechoVariety extends Variety {}(
  PokemonVariety.Chimecho,
  PokemonSpecies.Chimecho,
  [PokemonForm.Chimecho],
);
new class AbsolVariety extends Variety {}(
  PokemonVariety.Absol,
  PokemonSpecies.Absol,
  [PokemonForm.Absol],
);
new class AbsolMegaVariety extends Variety {}(
  PokemonVariety.AbsolMega,
  PokemonSpecies.Absol,
  [PokemonForm.AbsolMega],
);
new class WynautVariety extends Variety {}(
  PokemonVariety.Wynaut,
  PokemonSpecies.Wynaut,
  [PokemonForm.Wynaut],
);
new class SnoruntVariety extends Variety {}(
  PokemonVariety.Snorunt,
  PokemonSpecies.Snorunt,
  [PokemonForm.Snorunt],
);
new class GlalieVariety extends Variety {}(
  PokemonVariety.Glalie,
  PokemonSpecies.Glalie,
  [PokemonForm.Glalie],
);
new class GlalieMegaVariety extends Variety {}(
  PokemonVariety.GlalieMega,
  PokemonSpecies.Glalie,
  [PokemonForm.GlalieMega],
);
new class SphealVariety extends Variety {}(
  PokemonVariety.Spheal,
  PokemonSpecies.Spheal,
  [PokemonForm.Spheal],
);
new class SealeoVariety extends Variety {}(
  PokemonVariety.Sealeo,
  PokemonSpecies.Sealeo,
  [PokemonForm.Sealeo],
);
new class WalreinVariety extends Variety {}(
  PokemonVariety.Walrein,
  PokemonSpecies.Walrein,
  [PokemonForm.Walrein],
);
new class ClamperlVariety extends Variety {}(
  PokemonVariety.Clamperl,
  PokemonSpecies.Clamperl,
  [PokemonForm.Clamperl],
);
new class HuntailVariety extends Variety {}(
  PokemonVariety.Huntail,
  PokemonSpecies.Huntail,
  [PokemonForm.Huntail],
);
new class GorebyssVariety extends Variety {}(
  PokemonVariety.Gorebyss,
  PokemonSpecies.Gorebyss,
  [PokemonForm.Gorebyss],
);
new class RelicanthVariety extends Variety {}(
  PokemonVariety.Relicanth,
  PokemonSpecies.Relicanth,
  [PokemonForm.Relicanth],
);
new class LuvdiscVariety extends Variety {}(
  PokemonVariety.Luvdisc,
  PokemonSpecies.Luvdisc,
  [PokemonForm.Luvdisc],
);
new class BagonVariety extends Variety {}(
  PokemonVariety.Bagon,
  PokemonSpecies.Bagon,
  [PokemonForm.Bagon],
);
new class ShelgonVariety extends Variety {}(
  PokemonVariety.Shelgon,
  PokemonSpecies.Shelgon,
  [PokemonForm.Shelgon],
);
new class SalamenceVariety extends Variety {}(
  PokemonVariety.Salamence,
  PokemonSpecies.Salamence,
  [PokemonForm.Salamence],
);
new class SalamenceMegaVariety extends Variety {}(
  PokemonVariety.SalamenceMega,
  PokemonSpecies.Salamence,
  [PokemonForm.SalamenceMega],
);
new class BeldumVariety extends Variety {}(
  PokemonVariety.Beldum,
  PokemonSpecies.Beldum,
  [PokemonForm.Beldum],
);
new class MetangVariety extends Variety {}(
  PokemonVariety.Metang,
  PokemonSpecies.Metang,
  [PokemonForm.Metang],
);
new class MetagrossVariety extends Variety {}(
  PokemonVariety.Metagross,
  PokemonSpecies.Metagross,
  [PokemonForm.Metagross],
);
new class MetagrossMegaVariety extends Variety {}(
  PokemonVariety.MetagrossMega,
  PokemonSpecies.Metagross,
  [PokemonForm.MetagrossMega],
);
new class RegirockVariety extends Variety {}(
  PokemonVariety.Regirock,
  PokemonSpecies.Regirock,
  [PokemonForm.Regirock],
);
new class RegiceVariety extends Variety {}(
  PokemonVariety.Regice,
  PokemonSpecies.Regice,
  [PokemonForm.Regice],
);
new class RegisteelVariety extends Variety {}(
  PokemonVariety.Registeel,
  PokemonSpecies.Registeel,
  [PokemonForm.Registeel],
);
new class LatiasVariety extends Variety {}(
  PokemonVariety.Latias,
  PokemonSpecies.Latias,
  [PokemonForm.Latias],
);
new class LatiasMegaVariety extends Variety {}(
  PokemonVariety.LatiasMega,
  PokemonSpecies.Latias,
  [PokemonForm.LatiasMega],
);
new class LatiosVariety extends Variety {}(
  PokemonVariety.Latios,
  PokemonSpecies.Latios,
  [PokemonForm.Latios],
);
new class LatiosMegaVariety extends Variety {}(
  PokemonVariety.LatiosMega,
  PokemonSpecies.Latios,
  [PokemonForm.LatiosMega],
);
new class KyogreVariety extends Variety {}(
  PokemonVariety.Kyogre,
  PokemonSpecies.Kyogre,
  [PokemonForm.Kyogre],
);
new class KyogrePrimalVariety extends Variety {}(
  PokemonVariety.KyogrePrimal,
  PokemonSpecies.Kyogre,
  [PokemonForm.KyogrePrimal],
);
new class GroudonVariety extends Variety {}(
  PokemonVariety.Groudon,
  PokemonSpecies.Groudon,
  [PokemonForm.Groudon],
);
new class GroudonPrimalVariety extends Variety {}(
  PokemonVariety.GroudonPrimal,
  PokemonSpecies.Groudon,
  [PokemonForm.GroudonPrimal],
);
new class RayquazaVariety extends Variety {}(
  PokemonVariety.Rayquaza,
  PokemonSpecies.Rayquaza,
  [PokemonForm.Rayquaza],
);
new class RayquazaMegaVariety extends Variety {}(
  PokemonVariety.RayquazaMega,
  PokemonSpecies.Rayquaza,
  [PokemonForm.RayquazaMega],
);
new class JirachiVariety extends Variety {}(
  PokemonVariety.Jirachi,
  PokemonSpecies.Jirachi,
  [PokemonForm.Jirachi],
);
new class DeoxysNormalVariety extends Variety {}(
  PokemonVariety.DeoxysNormal,
  PokemonSpecies.Deoxys,
  [PokemonForm.DeoxysNormal],
);
new class DeoxysAttackVariety extends Variety {}(
  PokemonVariety.DeoxysAttack,
  PokemonSpecies.Deoxys,
  [PokemonForm.DeoxysAttack],
);
new class DeoxysDefenseVariety extends Variety {}(
  PokemonVariety.DeoxysDefense,
  PokemonSpecies.Deoxys,
  [PokemonForm.DeoxysDefense],
);
new class DeoxysSpeedVariety extends Variety {}(
  PokemonVariety.DeoxysSpeed,
  PokemonSpecies.Deoxys,
  [PokemonForm.DeoxysSpeed],
);
new class TurtwigVariety extends Variety {}(
  PokemonVariety.Turtwig,
  PokemonSpecies.Turtwig,
  [PokemonForm.Turtwig],
);
new class GrotleVariety extends Variety {}(
  PokemonVariety.Grotle,
  PokemonSpecies.Grotle,
  [PokemonForm.Grotle],
);
new class TorterraVariety extends Variety {}(
  PokemonVariety.Torterra,
  PokemonSpecies.Torterra,
  [PokemonForm.Torterra],
);
new class ChimcharVariety extends Variety {}(
  PokemonVariety.Chimchar,
  PokemonSpecies.Chimchar,
  [PokemonForm.Chimchar],
);
new class MonfernoVariety extends Variety {}(
  PokemonVariety.Monferno,
  PokemonSpecies.Monferno,
  [PokemonForm.Monferno],
);
new class InfernapeVariety extends Variety {}(
  PokemonVariety.Infernape,
  PokemonSpecies.Infernape,
  [PokemonForm.Infernape],
);
new class PiplupVariety extends Variety {}(
  PokemonVariety.Piplup,
  PokemonSpecies.Piplup,
  [PokemonForm.Piplup],
);
new class PrinplupVariety extends Variety {}(
  PokemonVariety.Prinplup,
  PokemonSpecies.Prinplup,
  [PokemonForm.Prinplup],
);
new class EmpoleonVariety extends Variety {}(
  PokemonVariety.Empoleon,
  PokemonSpecies.Empoleon,
  [PokemonForm.Empoleon],
);
new class StarlyVariety extends Variety {}(
  PokemonVariety.Starly,
  PokemonSpecies.Starly,
  [PokemonForm.Starly],
);
new class StaraviaVariety extends Variety {}(
  PokemonVariety.Staravia,
  PokemonSpecies.Staravia,
  [PokemonForm.Staravia],
);
new class StaraptorVariety extends Variety {}(
  PokemonVariety.Staraptor,
  PokemonSpecies.Staraptor,
  [PokemonForm.Staraptor],
);
new class BidoofVariety extends Variety {}(
  PokemonVariety.Bidoof,
  PokemonSpecies.Bidoof,
  [PokemonForm.Bidoof],
);
new class BibarelVariety extends Variety {}(
  PokemonVariety.Bibarel,
  PokemonSpecies.Bibarel,
  [PokemonForm.Bibarel],
);
new class KricketotVariety extends Variety {}(
  PokemonVariety.Kricketot,
  PokemonSpecies.Kricketot,
  [PokemonForm.Kricketot],
);
new class KricketuneVariety extends Variety {}(
  PokemonVariety.Kricketune,
  PokemonSpecies.Kricketune,
  [PokemonForm.Kricketune],
);
new class ShinxVariety extends Variety {}(
  PokemonVariety.Shinx,
  PokemonSpecies.Shinx,
  [PokemonForm.Shinx],
);
new class LuxioVariety extends Variety {}(
  PokemonVariety.Luxio,
  PokemonSpecies.Luxio,
  [PokemonForm.Luxio],
);
new class LuxrayVariety extends Variety {}(
  PokemonVariety.Luxray,
  PokemonSpecies.Luxray,
  [PokemonForm.Luxray],
);
new class BudewVariety extends Variety {}(
  PokemonVariety.Budew,
  PokemonSpecies.Budew,
  [PokemonForm.Budew],
);
new class RoseradeVariety extends Variety {}(
  PokemonVariety.Roserade,
  PokemonSpecies.Roserade,
  [PokemonForm.Roserade],
);
new class CranidosVariety extends Variety {}(
  PokemonVariety.Cranidos,
  PokemonSpecies.Cranidos,
  [PokemonForm.Cranidos],
);
new class RampardosVariety extends Variety {}(
  PokemonVariety.Rampardos,
  PokemonSpecies.Rampardos,
  [PokemonForm.Rampardos],
);
new class ShieldonVariety extends Variety {}(
  PokemonVariety.Shieldon,
  PokemonSpecies.Shieldon,
  [PokemonForm.Shieldon],
);
new class BastiodonVariety extends Variety {}(
  PokemonVariety.Bastiodon,
  PokemonSpecies.Bastiodon,
  [PokemonForm.Bastiodon],
);
new class BurmyVariety extends Variety {}(
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
  [PokemonForm.BurmyPlant, PokemonForm.BurmySandy, PokemonForm.BurmyTrash],
);
new class WormadamPlantVariety extends Variety {}(
  PokemonVariety.WormadamPlant,
  PokemonSpecies.Wormadam,
  [PokemonForm.WormadamPlant],
);
new class WormadamSandyVariety extends Variety {}(
  PokemonVariety.WormadamSandy,
  PokemonSpecies.Wormadam,
  [PokemonForm.WormadamSandy],
);
new class WormadamTrashVariety extends Variety {}(
  PokemonVariety.WormadamTrash,
  PokemonSpecies.Wormadam,
  [PokemonForm.WormadamTrash],
);
new class MothimVariety extends Variety {}(
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
  [PokemonForm.MothimPlant, PokemonForm.MothimSandy, PokemonForm.MothimTrash],
);
new class CombeeVariety extends Variety {}(
  PokemonVariety.Combee,
  PokemonSpecies.Combee,
  [PokemonForm.Combee],
);
new class VespiquenVariety extends Variety {}(
  PokemonVariety.Vespiquen,
  PokemonSpecies.Vespiquen,
  [PokemonForm.Vespiquen],
);
new class PachirisuVariety extends Variety {}(
  PokemonVariety.Pachirisu,
  PokemonSpecies.Pachirisu,
  [PokemonForm.Pachirisu],
);
new class BuizelVariety extends Variety {}(
  PokemonVariety.Buizel,
  PokemonSpecies.Buizel,
  [PokemonForm.Buizel],
);
new class FloatzelVariety extends Variety {}(
  PokemonVariety.Floatzel,
  PokemonSpecies.Floatzel,
  [PokemonForm.Floatzel],
);
new class CherubiVariety extends Variety {}(
  PokemonVariety.Cherubi,
  PokemonSpecies.Cherubi,
  [PokemonForm.Cherubi],
);
new class CherrimVariety extends Variety {}(
  PokemonVariety.Cherrim,
  PokemonSpecies.Cherrim,
  [PokemonForm.CherrimOvercast, PokemonForm.CherrimSunshine],
);
new class ShellosVariety extends Variety {}(
  PokemonVariety.Shellos,
  PokemonSpecies.Shellos,
  [PokemonForm.ShellosWest, PokemonForm.ShellosEast],
);
new class GastrodonVariety extends Variety {}(
  PokemonVariety.Gastrodon,
  PokemonSpecies.Gastrodon,
  [PokemonForm.GastrodonWest, PokemonForm.GastrodonEast],
);
new class AmbipomVariety extends Variety {}(
  PokemonVariety.Ambipom,
  PokemonSpecies.Ambipom,
  [PokemonForm.Ambipom],
);
new class DrifloonVariety extends Variety {}(
  PokemonVariety.Drifloon,
  PokemonSpecies.Drifloon,
  [PokemonForm.Drifloon],
);
new class DrifblimVariety extends Variety {}(
  PokemonVariety.Drifblim,
  PokemonSpecies.Drifblim,
  [PokemonForm.Drifblim],
);
new class BunearyVariety extends Variety {}(
  PokemonVariety.Buneary,
  PokemonSpecies.Buneary,
  [PokemonForm.Buneary],
);
new class LopunnyVariety extends Variety {}(
  PokemonVariety.Lopunny,
  PokemonSpecies.Lopunny,
  [PokemonForm.Lopunny],
);
new class LopunnyMegaVariety extends Variety {}(
  PokemonVariety.LopunnyMega,
  PokemonSpecies.Lopunny,
  [PokemonForm.LopunnyMega],
);
new class MismagiusVariety extends Variety {}(
  PokemonVariety.Mismagius,
  PokemonSpecies.Mismagius,
  [PokemonForm.Mismagius],
);
new class HonchkrowVariety extends Variety {}(
  PokemonVariety.Honchkrow,
  PokemonSpecies.Honchkrow,
  [PokemonForm.Honchkrow],
);
new class GlameowVariety extends Variety {}(
  PokemonVariety.Glameow,
  PokemonSpecies.Glameow,
  [PokemonForm.Glameow],
);
new class PuruglyVariety extends Variety {}(
  PokemonVariety.Purugly,
  PokemonSpecies.Purugly,
  [PokemonForm.Purugly],
);
new class ChinglingVariety extends Variety {}(
  PokemonVariety.Chingling,
  PokemonSpecies.Chingling,
  [PokemonForm.Chingling],
);
new class StunkyVariety extends Variety {}(
  PokemonVariety.Stunky,
  PokemonSpecies.Stunky,
  [PokemonForm.Stunky],
);
new class SkuntankVariety extends Variety {}(
  PokemonVariety.Skuntank,
  PokemonSpecies.Skuntank,
  [PokemonForm.Skuntank],
);
new class BronzorVariety extends Variety {}(
  PokemonVariety.Bronzor,
  PokemonSpecies.Bronzor,
  [PokemonForm.Bronzor],
);
new class BronzongVariety extends Variety {}(
  PokemonVariety.Bronzong,
  PokemonSpecies.Bronzong,
  [PokemonForm.Bronzong],
);
new class BonslyVariety extends Variety {}(
  PokemonVariety.Bonsly,
  PokemonSpecies.Bonsly,
  [PokemonForm.Bonsly],
);
new class MimeJrVariety extends Variety {}(
  PokemonVariety.MimeJr,
  PokemonSpecies.MimeJr,
  [PokemonForm.MimeJr],
);
new class HappinyVariety extends Variety {}(
  PokemonVariety.Happiny,
  PokemonSpecies.Happiny,
  [PokemonForm.Happiny],
);
new class ChatotVariety extends Variety {}(
  PokemonVariety.Chatot,
  PokemonSpecies.Chatot,
  [PokemonForm.Chatot],
);
new class SpiritombVariety extends Variety {}(
  PokemonVariety.Spiritomb,
  PokemonSpecies.Spiritomb,
  [PokemonForm.Spiritomb],
);
new class GibleVariety extends Variety {}(
  PokemonVariety.Gible,
  PokemonSpecies.Gible,
  [PokemonForm.Gible],
);
new class GabiteVariety extends Variety {}(
  PokemonVariety.Gabite,
  PokemonSpecies.Gabite,
  [PokemonForm.Gabite],
);
new class GarchompVariety extends Variety {}(
  PokemonVariety.Garchomp,
  PokemonSpecies.Garchomp,
  [PokemonForm.Garchomp],
);
new class GarchompMegaVariety extends Variety {}(
  PokemonVariety.GarchompMega,
  PokemonSpecies.Garchomp,
  [PokemonForm.GarchompMega],
);
new class MunchlaxVariety extends Variety {}(
  PokemonVariety.Munchlax,
  PokemonSpecies.Munchlax,
  [PokemonForm.Munchlax],
);
new class RioluVariety extends Variety {}(
  PokemonVariety.Riolu,
  PokemonSpecies.Riolu,
  [PokemonForm.Riolu],
);
new class LucarioVariety extends Variety {}(
  PokemonVariety.Lucario,
  PokemonSpecies.Lucario,
  [PokemonForm.Lucario],
);
new class LucarioMegaVariety extends Variety {}(
  PokemonVariety.LucarioMega,
  PokemonSpecies.Lucario,
  [PokemonForm.LucarioMega],
);
new class HippopotasVariety extends Variety {}(
  PokemonVariety.Hippopotas,
  PokemonSpecies.Hippopotas,
  [PokemonForm.Hippopotas],
);
new class HippowdonVariety extends Variety {}(
  PokemonVariety.Hippowdon,
  PokemonSpecies.Hippowdon,
  [PokemonForm.Hippowdon],
);
new class SkorupiVariety extends Variety {}(
  PokemonVariety.Skorupi,
  PokemonSpecies.Skorupi,
  [PokemonForm.Skorupi],
);
new class DrapionVariety extends Variety {}(
  PokemonVariety.Drapion,
  PokemonSpecies.Drapion,
  [PokemonForm.Drapion],
);
new class CroagunkVariety extends Variety {}(
  PokemonVariety.Croagunk,
  PokemonSpecies.Croagunk,
  [PokemonForm.Croagunk],
);
new class ToxicroakVariety extends Variety {}(
  PokemonVariety.Toxicroak,
  PokemonSpecies.Toxicroak,
  [PokemonForm.Toxicroak],
);
new class CarnivineVariety extends Variety {}(
  PokemonVariety.Carnivine,
  PokemonSpecies.Carnivine,
  [PokemonForm.Carnivine],
);
new class FinneonVariety extends Variety {}(
  PokemonVariety.Finneon,
  PokemonSpecies.Finneon,
  [PokemonForm.Finneon],
);
new class LumineonVariety extends Variety {}(
  PokemonVariety.Lumineon,
  PokemonSpecies.Lumineon,
  [PokemonForm.Lumineon],
);
new class MantykeVariety extends Variety {}(
  PokemonVariety.Mantyke,
  PokemonSpecies.Mantyke,
  [PokemonForm.Mantyke],
);
new class SnoverVariety extends Variety {}(
  PokemonVariety.Snover,
  PokemonSpecies.Snover,
  [PokemonForm.Snover],
);
new class AbomasnowVariety extends Variety {}(
  PokemonVariety.Abomasnow,
  PokemonSpecies.Abomasnow,
  [PokemonForm.Abomasnow],
);
new class AbomasnowMegaVariety extends Variety {}(
  PokemonVariety.AbomasnowMega,
  PokemonSpecies.Abomasnow,
  [PokemonForm.AbomasnowMega],
);
new class WeavileVariety extends Variety {}(
  PokemonVariety.Weavile,
  PokemonSpecies.Weavile,
  [PokemonForm.Weavile],
);
new class MagnezoneVariety extends Variety {}(
  PokemonVariety.Magnezone,
  PokemonSpecies.Magnezone,
  [PokemonForm.Magnezone],
);
new class LickilickyVariety extends Variety {}(
  PokemonVariety.Lickilicky,
  PokemonSpecies.Lickilicky,
  [PokemonForm.Lickilicky],
);
new class RhyperiorVariety extends Variety {}(
  PokemonVariety.Rhyperior,
  PokemonSpecies.Rhyperior,
  [PokemonForm.Rhyperior],
);
new class TangrowthVariety extends Variety {}(
  PokemonVariety.Tangrowth,
  PokemonSpecies.Tangrowth,
  [PokemonForm.Tangrowth],
);
new class ElectivireVariety extends Variety {}(
  PokemonVariety.Electivire,
  PokemonSpecies.Electivire,
  [PokemonForm.Electivire],
);
new class MagmortarVariety extends Variety {}(
  PokemonVariety.Magmortar,
  PokemonSpecies.Magmortar,
  [PokemonForm.Magmortar],
);
new class TogekissVariety extends Variety {}(
  PokemonVariety.Togekiss,
  PokemonSpecies.Togekiss,
  [PokemonForm.Togekiss],
);
new class YanmegaVariety extends Variety {}(
  PokemonVariety.Yanmega,
  PokemonSpecies.Yanmega,
  [PokemonForm.Yanmega],
);
new class LeafeonVariety extends Variety {}(
  PokemonVariety.Leafeon,
  PokemonSpecies.Leafeon,
  [PokemonForm.Leafeon],
);
new class GlaceonVariety extends Variety {}(
  PokemonVariety.Glaceon,
  PokemonSpecies.Glaceon,
  [PokemonForm.Glaceon],
);
new class GliscorVariety extends Variety {}(
  PokemonVariety.Gliscor,
  PokemonSpecies.Gliscor,
  [PokemonForm.Gliscor],
);
new class MamoswineVariety extends Variety {}(
  PokemonVariety.Mamoswine,
  PokemonSpecies.Mamoswine,
  [PokemonForm.Mamoswine],
);
new class PorygonZVariety extends Variety {}(
  PokemonVariety.PorygonZ,
  PokemonSpecies.PorygonZ,
  [PokemonForm.PorygonZ],
);
new class GalladeVariety extends Variety {}(
  PokemonVariety.Gallade,
  PokemonSpecies.Gallade,
  [PokemonForm.Gallade],
);
new class GalladeMegaVariety extends Variety {}(
  PokemonVariety.GalladeMega,
  PokemonSpecies.Gallade,
  [PokemonForm.GalladeMega],
);
new class ProbopassVariety extends Variety {}(
  PokemonVariety.Probopass,
  PokemonSpecies.Probopass,
  [PokemonForm.Probopass],
);
new class DusknoirVariety extends Variety {}(
  PokemonVariety.Dusknoir,
  PokemonSpecies.Dusknoir,
  [PokemonForm.Dusknoir],
);
new class FroslassVariety extends Variety {}(
  PokemonVariety.Froslass,
  PokemonSpecies.Froslass,
  [PokemonForm.Froslass],
);
new class RotomVariety extends Variety {}(
  PokemonVariety.Rotom,
  PokemonSpecies.Rotom,
  [PokemonForm.Rotom],
);
new class RotomHeatVariety extends Variety {}(
  PokemonVariety.RotomHeat,
  PokemonSpecies.Rotom,
  [PokemonForm.RotomHeat],
);
new class RotomWashVariety extends Variety {}(
  PokemonVariety.RotomWash,
  PokemonSpecies.Rotom,
  [PokemonForm.RotomWash],
);
new class RotomFrostVariety extends Variety {}(
  PokemonVariety.RotomFrost,
  PokemonSpecies.Rotom,
  [PokemonForm.RotomFrost],
);
new class RotomFanVariety extends Variety {}(
  PokemonVariety.RotomFan,
  PokemonSpecies.Rotom,
  [PokemonForm.RotomFan],
);
new class RotomMowVariety extends Variety {}(
  PokemonVariety.RotomMow,
  PokemonSpecies.Rotom,
  [PokemonForm.RotomMow],
);
new class UxieVariety extends Variety {}(
  PokemonVariety.Uxie,
  PokemonSpecies.Uxie,
  [PokemonForm.Uxie],
);
new class MespritVariety extends Variety {}(
  PokemonVariety.Mesprit,
  PokemonSpecies.Mesprit,
  [PokemonForm.Mesprit],
);
new class AzelfVariety extends Variety {}(
  PokemonVariety.Azelf,
  PokemonSpecies.Azelf,
  [PokemonForm.Azelf],
);
new class DialgaVariety extends Variety {}(
  PokemonVariety.Dialga,
  PokemonSpecies.Dialga,
  [PokemonForm.Dialga],
);
new class DialgaOriginVariety extends Variety {}(
  PokemonVariety.DialgaOrigin,
  PokemonSpecies.Dialga,
  [PokemonForm.DialgaOrigin],
);
new class PalkiaVariety extends Variety {}(
  PokemonVariety.Palkia,
  PokemonSpecies.Palkia,
  [PokemonForm.Palkia],
);
new class PalkiaOriginVariety extends Variety {}(
  PokemonVariety.PalkiaOrigin,
  PokemonSpecies.Palkia,
  [PokemonForm.PalkiaOrigin],
);
new class HeatranVariety extends Variety {}(
  PokemonVariety.Heatran,
  PokemonSpecies.Heatran,
  [PokemonForm.Heatran],
);
new class RegigigasVariety extends Variety {}(
  PokemonVariety.Regigigas,
  PokemonSpecies.Regigigas,
  [PokemonForm.Regigigas],
);
new class GiratinaAlteredVariety extends Variety {}(
  PokemonVariety.GiratinaAltered,
  PokemonSpecies.Giratina,
  [PokemonForm.GiratinaAltered],
);
new class GiratinaOriginVariety extends Variety {}(
  PokemonVariety.GiratinaOrigin,
  PokemonSpecies.Giratina,
  [PokemonForm.GiratinaOrigin],
);
new class CresseliaVariety extends Variety {}(
  PokemonVariety.Cresselia,
  PokemonSpecies.Cresselia,
  [PokemonForm.Cresselia],
);
new class PhioneVariety extends Variety {}(
  PokemonVariety.Phione,
  PokemonSpecies.Phione,
  [PokemonForm.Phione],
);
new class ManaphyVariety extends Variety {}(
  PokemonVariety.Manaphy,
  PokemonSpecies.Manaphy,
  [PokemonForm.Manaphy],
);
new class DarkraiVariety extends Variety {}(
  PokemonVariety.Darkrai,
  PokemonSpecies.Darkrai,
  [PokemonForm.Darkrai],
);
new class ShayminLandVariety extends Variety {}(
  PokemonVariety.ShayminLand,
  PokemonSpecies.Shaymin,
  [PokemonForm.ShayminLand],
);
new class ShayminSkyVariety extends Variety {}(
  PokemonVariety.ShayminSky,
  PokemonSpecies.Shaymin,
  [PokemonForm.ShayminSky],
);
new class ArceusVariety extends Variety {}(
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  [PokemonForm.ArceusNormal, PokemonForm.ArceusBug, PokemonForm.ArceusDark, PokemonForm.ArceusDragon, PokemonForm.ArceusElectric, PokemonForm.ArceusFighting, PokemonForm.ArceusFire, PokemonForm.ArceusFlying, PokemonForm.ArceusGhost, PokemonForm.ArceusGrass, PokemonForm.ArceusGround, PokemonForm.ArceusIce, PokemonForm.ArceusPoison, PokemonForm.ArceusPsychic, PokemonForm.ArceusRock, PokemonForm.ArceusSteel, PokemonForm.ArceusWater, PokemonForm.ArceusUnknown, PokemonForm.ArceusFairy],
);
new class VictiniVariety extends Variety {}(
  PokemonVariety.Victini,
  PokemonSpecies.Victini,
  [PokemonForm.Victini],
);
new class SnivyVariety extends Variety {}(
  PokemonVariety.Snivy,
  PokemonSpecies.Snivy,
  [PokemonForm.Snivy],
);
new class ServineVariety extends Variety {}(
  PokemonVariety.Servine,
  PokemonSpecies.Servine,
  [PokemonForm.Servine],
);
new class SerperiorVariety extends Variety {}(
  PokemonVariety.Serperior,
  PokemonSpecies.Serperior,
  [PokemonForm.Serperior],
);
new class TepigVariety extends Variety {}(
  PokemonVariety.Tepig,
  PokemonSpecies.Tepig,
  [PokemonForm.Tepig],
);
new class PigniteVariety extends Variety {}(
  PokemonVariety.Pignite,
  PokemonSpecies.Pignite,
  [PokemonForm.Pignite],
);
new class EmboarVariety extends Variety {}(
  PokemonVariety.Emboar,
  PokemonSpecies.Emboar,
  [PokemonForm.Emboar],
);
new class OshawottVariety extends Variety {}(
  PokemonVariety.Oshawott,
  PokemonSpecies.Oshawott,
  [PokemonForm.Oshawott],
);
new class DewottVariety extends Variety {}(
  PokemonVariety.Dewott,
  PokemonSpecies.Dewott,
  [PokemonForm.Dewott],
);
new class SamurottVariety extends Variety {}(
  PokemonVariety.Samurott,
  PokemonSpecies.Samurott,
  [PokemonForm.Samurott],
);
new class SamurottHisuiVariety extends Variety {}(
  PokemonVariety.SamurottHisui,
  PokemonSpecies.Samurott,
  [PokemonForm.SamurottHisui],
);
new class PatratVariety extends Variety {}(
  PokemonVariety.Patrat,
  PokemonSpecies.Patrat,
  [PokemonForm.Patrat],
);
new class WatchogVariety extends Variety {}(
  PokemonVariety.Watchog,
  PokemonSpecies.Watchog,
  [PokemonForm.Watchog],
);
new class LillipupVariety extends Variety {}(
  PokemonVariety.Lillipup,
  PokemonSpecies.Lillipup,
  [PokemonForm.Lillipup],
);
new class HerdierVariety extends Variety {}(
  PokemonVariety.Herdier,
  PokemonSpecies.Herdier,
  [PokemonForm.Herdier],
);
new class StoutlandVariety extends Variety {}(
  PokemonVariety.Stoutland,
  PokemonSpecies.Stoutland,
  [PokemonForm.Stoutland],
);
new class PurrloinVariety extends Variety {}(
  PokemonVariety.Purrloin,
  PokemonSpecies.Purrloin,
  [PokemonForm.Purrloin],
);
new class LiepardVariety extends Variety {}(
  PokemonVariety.Liepard,
  PokemonSpecies.Liepard,
  [PokemonForm.Liepard],
);
new class PansageVariety extends Variety {}(
  PokemonVariety.Pansage,
  PokemonSpecies.Pansage,
  [PokemonForm.Pansage],
);
new class SimisageVariety extends Variety {}(
  PokemonVariety.Simisage,
  PokemonSpecies.Simisage,
  [PokemonForm.Simisage],
);
new class PansearVariety extends Variety {}(
  PokemonVariety.Pansear,
  PokemonSpecies.Pansear,
  [PokemonForm.Pansear],
);
new class SimisearVariety extends Variety {}(
  PokemonVariety.Simisear,
  PokemonSpecies.Simisear,
  [PokemonForm.Simisear],
);
new class PanpourVariety extends Variety {}(
  PokemonVariety.Panpour,
  PokemonSpecies.Panpour,
  [PokemonForm.Panpour],
);
new class SimipourVariety extends Variety {}(
  PokemonVariety.Simipour,
  PokemonSpecies.Simipour,
  [PokemonForm.Simipour],
);
new class MunnaVariety extends Variety {}(
  PokemonVariety.Munna,
  PokemonSpecies.Munna,
  [PokemonForm.Munna],
);
new class MusharnaVariety extends Variety {}(
  PokemonVariety.Musharna,
  PokemonSpecies.Musharna,
  [PokemonForm.Musharna],
);
new class PidoveVariety extends Variety {}(
  PokemonVariety.Pidove,
  PokemonSpecies.Pidove,
  [PokemonForm.Pidove],
);
new class TranquillVariety extends Variety {}(
  PokemonVariety.Tranquill,
  PokemonSpecies.Tranquill,
  [PokemonForm.Tranquill],
);
new class UnfezantVariety extends Variety {}(
  PokemonVariety.Unfezant,
  PokemonSpecies.Unfezant,
  [PokemonForm.Unfezant],
);
new class BlitzleVariety extends Variety {}(
  PokemonVariety.Blitzle,
  PokemonSpecies.Blitzle,
  [PokemonForm.Blitzle],
);
new class ZebstrikaVariety extends Variety {}(
  PokemonVariety.Zebstrika,
  PokemonSpecies.Zebstrika,
  [PokemonForm.Zebstrika],
);
new class RoggenrolaVariety extends Variety {}(
  PokemonVariety.Roggenrola,
  PokemonSpecies.Roggenrola,
  [PokemonForm.Roggenrola],
);
new class BoldoreVariety extends Variety {}(
  PokemonVariety.Boldore,
  PokemonSpecies.Boldore,
  [PokemonForm.Boldore],
);
new class GigalithVariety extends Variety {}(
  PokemonVariety.Gigalith,
  PokemonSpecies.Gigalith,
  [PokemonForm.Gigalith],
);
new class WoobatVariety extends Variety {}(
  PokemonVariety.Woobat,
  PokemonSpecies.Woobat,
  [PokemonForm.Woobat],
);
new class SwoobatVariety extends Variety {}(
  PokemonVariety.Swoobat,
  PokemonSpecies.Swoobat,
  [PokemonForm.Swoobat],
);
new class DrilburVariety extends Variety {}(
  PokemonVariety.Drilbur,
  PokemonSpecies.Drilbur,
  [PokemonForm.Drilbur],
);
new class ExcadrillVariety extends Variety {}(
  PokemonVariety.Excadrill,
  PokemonSpecies.Excadrill,
  [PokemonForm.Excadrill],
);
new class AudinoVariety extends Variety {}(
  PokemonVariety.Audino,
  PokemonSpecies.Audino,
  [PokemonForm.Audino],
);
new class AudinoMegaVariety extends Variety {}(
  PokemonVariety.AudinoMega,
  PokemonSpecies.Audino,
  [PokemonForm.AudinoMega],
);
new class TimburrVariety extends Variety {}(
  PokemonVariety.Timburr,
  PokemonSpecies.Timburr,
  [PokemonForm.Timburr],
);
new class GurdurrVariety extends Variety {}(
  PokemonVariety.Gurdurr,
  PokemonSpecies.Gurdurr,
  [PokemonForm.Gurdurr],
);
new class ConkeldurrVariety extends Variety {}(
  PokemonVariety.Conkeldurr,
  PokemonSpecies.Conkeldurr,
  [PokemonForm.Conkeldurr],
);
new class TympoleVariety extends Variety {}(
  PokemonVariety.Tympole,
  PokemonSpecies.Tympole,
  [PokemonForm.Tympole],
);
new class PalpitoadVariety extends Variety {}(
  PokemonVariety.Palpitoad,
  PokemonSpecies.Palpitoad,
  [PokemonForm.Palpitoad],
);
new class SeismitoadVariety extends Variety {}(
  PokemonVariety.Seismitoad,
  PokemonSpecies.Seismitoad,
  [PokemonForm.Seismitoad],
);
new class ThrohVariety extends Variety {}(
  PokemonVariety.Throh,
  PokemonSpecies.Throh,
  [PokemonForm.Throh],
);
new class SawkVariety extends Variety {}(
  PokemonVariety.Sawk,
  PokemonSpecies.Sawk,
  [PokemonForm.Sawk],
);
new class SewaddleVariety extends Variety {}(
  PokemonVariety.Sewaddle,
  PokemonSpecies.Sewaddle,
  [PokemonForm.Sewaddle],
);
new class SwadloonVariety extends Variety {}(
  PokemonVariety.Swadloon,
  PokemonSpecies.Swadloon,
  [PokemonForm.Swadloon],
);
new class LeavannyVariety extends Variety {}(
  PokemonVariety.Leavanny,
  PokemonSpecies.Leavanny,
  [PokemonForm.Leavanny],
);
new class VenipedeVariety extends Variety {}(
  PokemonVariety.Venipede,
  PokemonSpecies.Venipede,
  [PokemonForm.Venipede],
);
new class WhirlipedeVariety extends Variety {}(
  PokemonVariety.Whirlipede,
  PokemonSpecies.Whirlipede,
  [PokemonForm.Whirlipede],
);
new class ScolipedeVariety extends Variety {}(
  PokemonVariety.Scolipede,
  PokemonSpecies.Scolipede,
  [PokemonForm.Scolipede],
);
new class CottoneeVariety extends Variety {}(
  PokemonVariety.Cottonee,
  PokemonSpecies.Cottonee,
  [PokemonForm.Cottonee],
);
new class WhimsicottVariety extends Variety {}(
  PokemonVariety.Whimsicott,
  PokemonSpecies.Whimsicott,
  [PokemonForm.Whimsicott],
);
new class PetililVariety extends Variety {}(
  PokemonVariety.Petilil,
  PokemonSpecies.Petilil,
  [PokemonForm.Petilil],
);
new class LilligantVariety extends Variety {}(
  PokemonVariety.Lilligant,
  PokemonSpecies.Lilligant,
  [PokemonForm.Lilligant],
);
new class LilligantHisuiVariety extends Variety {}(
  PokemonVariety.LilligantHisui,
  PokemonSpecies.Lilligant,
  [PokemonForm.LilligantHisui],
);
new class BasculinRedStripedVariety extends Variety {}(
  PokemonVariety.BasculinRedStriped,
  PokemonSpecies.Basculin,
  [PokemonForm.BasculinRedStriped],
);
new class BasculinBlueStripedVariety extends Variety {}(
  PokemonVariety.BasculinBlueStriped,
  PokemonSpecies.Basculin,
  [PokemonForm.BasculinBlueStriped],
);
new class BasculinWhiteStripedVariety extends Variety {}(
  PokemonVariety.BasculinWhiteStriped,
  PokemonSpecies.Basculin,
  [PokemonForm.BasculinWhiteStriped],
);
new class SandileVariety extends Variety {}(
  PokemonVariety.Sandile,
  PokemonSpecies.Sandile,
  [PokemonForm.Sandile],
);
new class KrokorokVariety extends Variety {}(
  PokemonVariety.Krokorok,
  PokemonSpecies.Krokorok,
  [PokemonForm.Krokorok],
);
new class KrookodileVariety extends Variety {}(
  PokemonVariety.Krookodile,
  PokemonSpecies.Krookodile,
  [PokemonForm.Krookodile],
);
new class DarumakaVariety extends Variety {}(
  PokemonVariety.Darumaka,
  PokemonSpecies.Darumaka,
  [PokemonForm.Darumaka],
);
new class DarumakaGalarVariety extends Variety {}(
  PokemonVariety.DarumakaGalar,
  PokemonSpecies.Darumaka,
  [PokemonForm.DarumakaGalar],
);
new class DarmanitanStandardVariety extends Variety {}(
  PokemonVariety.DarmanitanStandard,
  PokemonSpecies.Darmanitan,
  [PokemonForm.DarmanitanStandard],
);
new class DarmanitanZenVariety extends Variety {}(
  PokemonVariety.DarmanitanZen,
  PokemonSpecies.Darmanitan,
  [PokemonForm.DarmanitanZen],
);
new class DarmanitanGalarStandardVariety extends Variety {}(
  PokemonVariety.DarmanitanGalarStandard,
  PokemonSpecies.Darmanitan,
  [PokemonForm.DarmanitanGalarStandard],
);
new class DarmanitanGalarZenVariety extends Variety {}(
  PokemonVariety.DarmanitanGalarZen,
  PokemonSpecies.Darmanitan,
  [PokemonForm.DarmanitanGalarZen],
);
new class MaractusVariety extends Variety {}(
  PokemonVariety.Maractus,
  PokemonSpecies.Maractus,
  [PokemonForm.Maractus],
);
new class DwebbleVariety extends Variety {}(
  PokemonVariety.Dwebble,
  PokemonSpecies.Dwebble,
  [PokemonForm.Dwebble],
);
new class CrustleVariety extends Variety {}(
  PokemonVariety.Crustle,
  PokemonSpecies.Crustle,
  [PokemonForm.Crustle],
);
new class ScraggyVariety extends Variety {}(
  PokemonVariety.Scraggy,
  PokemonSpecies.Scraggy,
  [PokemonForm.Scraggy],
);
new class ScraftyVariety extends Variety {}(
  PokemonVariety.Scrafty,
  PokemonSpecies.Scrafty,
  [PokemonForm.Scrafty],
);
new class SigilyphVariety extends Variety {}(
  PokemonVariety.Sigilyph,
  PokemonSpecies.Sigilyph,
  [PokemonForm.Sigilyph],
);
new class YamaskVariety extends Variety {}(
  PokemonVariety.Yamask,
  PokemonSpecies.Yamask,
  [PokemonForm.Yamask],
);
new class YamaskGalarVariety extends Variety {}(
  PokemonVariety.YamaskGalar,
  PokemonSpecies.Yamask,
  [PokemonForm.YamaskGalar],
);
new class CofagrigusVariety extends Variety {}(
  PokemonVariety.Cofagrigus,
  PokemonSpecies.Cofagrigus,
  [PokemonForm.Cofagrigus],
);
new class TirtougaVariety extends Variety {}(
  PokemonVariety.Tirtouga,
  PokemonSpecies.Tirtouga,
  [PokemonForm.Tirtouga],
);
new class CarracostaVariety extends Variety {}(
  PokemonVariety.Carracosta,
  PokemonSpecies.Carracosta,
  [PokemonForm.Carracosta],
);
new class ArchenVariety extends Variety {}(
  PokemonVariety.Archen,
  PokemonSpecies.Archen,
  [PokemonForm.Archen],
);
new class ArcheopsVariety extends Variety {}(
  PokemonVariety.Archeops,
  PokemonSpecies.Archeops,
  [PokemonForm.Archeops],
);
new class TrubbishVariety extends Variety {}(
  PokemonVariety.Trubbish,
  PokemonSpecies.Trubbish,
  [PokemonForm.Trubbish],
);
new class GarbodorVariety extends Variety {}(
  PokemonVariety.Garbodor,
  PokemonSpecies.Garbodor,
  [PokemonForm.Garbodor],
);
new class GarbodorGmaxVariety extends Variety {}(
  PokemonVariety.GarbodorGmax,
  PokemonSpecies.Garbodor,
  [PokemonForm.GarbodorGmax],
);
new class ZoruaVariety extends Variety {}(
  PokemonVariety.Zorua,
  PokemonSpecies.Zorua,
  [PokemonForm.Zorua],
);
new class ZoruaHisuiVariety extends Variety {}(
  PokemonVariety.ZoruaHisui,
  PokemonSpecies.Zorua,
  [PokemonForm.ZoruaHisui],
);
new class ZoroarkVariety extends Variety {}(
  PokemonVariety.Zoroark,
  PokemonSpecies.Zoroark,
  [PokemonForm.Zoroark],
);
new class ZoroarkHisuiVariety extends Variety {}(
  PokemonVariety.ZoroarkHisui,
  PokemonSpecies.Zoroark,
  [PokemonForm.ZoroarkHisui],
);
new class MinccinoVariety extends Variety {}(
  PokemonVariety.Minccino,
  PokemonSpecies.Minccino,
  [PokemonForm.Minccino],
);
new class CinccinoVariety extends Variety {}(
  PokemonVariety.Cinccino,
  PokemonSpecies.Cinccino,
  [PokemonForm.Cinccino],
);
new class GothitaVariety extends Variety {}(
  PokemonVariety.Gothita,
  PokemonSpecies.Gothita,
  [PokemonForm.Gothita],
);
new class GothoritaVariety extends Variety {}(
  PokemonVariety.Gothorita,
  PokemonSpecies.Gothorita,
  [PokemonForm.Gothorita],
);
new class GothitelleVariety extends Variety {}(
  PokemonVariety.Gothitelle,
  PokemonSpecies.Gothitelle,
  [PokemonForm.Gothitelle],
);
new class SolosisVariety extends Variety {}(
  PokemonVariety.Solosis,
  PokemonSpecies.Solosis,
  [PokemonForm.Solosis],
);
new class DuosionVariety extends Variety {}(
  PokemonVariety.Duosion,
  PokemonSpecies.Duosion,
  [PokemonForm.Duosion],
);
new class ReuniclusVariety extends Variety {}(
  PokemonVariety.Reuniclus,
  PokemonSpecies.Reuniclus,
  [PokemonForm.Reuniclus],
);
new class DucklettVariety extends Variety {}(
  PokemonVariety.Ducklett,
  PokemonSpecies.Ducklett,
  [PokemonForm.Ducklett],
);
new class SwannaVariety extends Variety {}(
  PokemonVariety.Swanna,
  PokemonSpecies.Swanna,
  [PokemonForm.Swanna],
);
new class VanilliteVariety extends Variety {}(
  PokemonVariety.Vanillite,
  PokemonSpecies.Vanillite,
  [PokemonForm.Vanillite],
);
new class VanillishVariety extends Variety {}(
  PokemonVariety.Vanillish,
  PokemonSpecies.Vanillish,
  [PokemonForm.Vanillish],
);
new class VanilluxeVariety extends Variety {}(
  PokemonVariety.Vanilluxe,
  PokemonSpecies.Vanilluxe,
  [PokemonForm.Vanilluxe],
);
new class DeerlingVariety extends Variety {}(
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
  [PokemonForm.DeerlingSpring, PokemonForm.DeerlingSummer, PokemonForm.DeerlingAutumn, PokemonForm.DeerlingWinter],
);
new class SawsbuckVariety extends Variety {}(
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
  [PokemonForm.SawsbuckSpring, PokemonForm.SawsbuckSummer, PokemonForm.SawsbuckAutumn, PokemonForm.SawsbuckWinter],
);
new class EmolgaVariety extends Variety {}(
  PokemonVariety.Emolga,
  PokemonSpecies.Emolga,
  [PokemonForm.Emolga],
);
new class KarrablastVariety extends Variety {}(
  PokemonVariety.Karrablast,
  PokemonSpecies.Karrablast,
  [PokemonForm.Karrablast],
);
new class EscavalierVariety extends Variety {}(
  PokemonVariety.Escavalier,
  PokemonSpecies.Escavalier,
  [PokemonForm.Escavalier],
);
new class FoongusVariety extends Variety {}(
  PokemonVariety.Foongus,
  PokemonSpecies.Foongus,
  [PokemonForm.Foongus],
);
new class AmoongussVariety extends Variety {}(
  PokemonVariety.Amoonguss,
  PokemonSpecies.Amoonguss,
  [PokemonForm.Amoonguss],
);
new class FrillishVariety extends Variety {}(
  PokemonVariety.Frillish,
  PokemonSpecies.Frillish,
  [PokemonForm.Frillish],
);
new class JellicentVariety extends Variety {}(
  PokemonVariety.Jellicent,
  PokemonSpecies.Jellicent,
  [PokemonForm.Jellicent],
);
new class AlomomolaVariety extends Variety {}(
  PokemonVariety.Alomomola,
  PokemonSpecies.Alomomola,
  [PokemonForm.Alomomola],
);
new class JoltikVariety extends Variety {}(
  PokemonVariety.Joltik,
  PokemonSpecies.Joltik,
  [PokemonForm.Joltik],
);
new class GalvantulaVariety extends Variety {}(
  PokemonVariety.Galvantula,
  PokemonSpecies.Galvantula,
  [PokemonForm.Galvantula],
);
new class FerroseedVariety extends Variety {}(
  PokemonVariety.Ferroseed,
  PokemonSpecies.Ferroseed,
  [PokemonForm.Ferroseed],
);
new class FerrothornVariety extends Variety {}(
  PokemonVariety.Ferrothorn,
  PokemonSpecies.Ferrothorn,
  [PokemonForm.Ferrothorn],
);
new class KlinkVariety extends Variety {}(
  PokemonVariety.Klink,
  PokemonSpecies.Klink,
  [PokemonForm.Klink],
);
new class KlangVariety extends Variety {}(
  PokemonVariety.Klang,
  PokemonSpecies.Klang,
  [PokemonForm.Klang],
);
new class KlinklangVariety extends Variety {}(
  PokemonVariety.Klinklang,
  PokemonSpecies.Klinklang,
  [PokemonForm.Klinklang],
);
new class TynamoVariety extends Variety {}(
  PokemonVariety.Tynamo,
  PokemonSpecies.Tynamo,
  [PokemonForm.Tynamo],
);
new class EelektrikVariety extends Variety {}(
  PokemonVariety.Eelektrik,
  PokemonSpecies.Eelektrik,
  [PokemonForm.Eelektrik],
);
new class EelektrossVariety extends Variety {}(
  PokemonVariety.Eelektross,
  PokemonSpecies.Eelektross,
  [PokemonForm.Eelektross],
);
new class ElgyemVariety extends Variety {}(
  PokemonVariety.Elgyem,
  PokemonSpecies.Elgyem,
  [PokemonForm.Elgyem],
);
new class BeheeyemVariety extends Variety {}(
  PokemonVariety.Beheeyem,
  PokemonSpecies.Beheeyem,
  [PokemonForm.Beheeyem],
);
new class LitwickVariety extends Variety {}(
  PokemonVariety.Litwick,
  PokemonSpecies.Litwick,
  [PokemonForm.Litwick],
);
new class LampentVariety extends Variety {}(
  PokemonVariety.Lampent,
  PokemonSpecies.Lampent,
  [PokemonForm.Lampent],
);
new class ChandelureVariety extends Variety {}(
  PokemonVariety.Chandelure,
  PokemonSpecies.Chandelure,
  [PokemonForm.Chandelure],
);
new class AxewVariety extends Variety {}(
  PokemonVariety.Axew,
  PokemonSpecies.Axew,
  [PokemonForm.Axew],
);
new class FraxureVariety extends Variety {}(
  PokemonVariety.Fraxure,
  PokemonSpecies.Fraxure,
  [PokemonForm.Fraxure],
);
new class HaxorusVariety extends Variety {}(
  PokemonVariety.Haxorus,
  PokemonSpecies.Haxorus,
  [PokemonForm.Haxorus],
);
new class CubchooVariety extends Variety {}(
  PokemonVariety.Cubchoo,
  PokemonSpecies.Cubchoo,
  [PokemonForm.Cubchoo],
);
new class BearticVariety extends Variety {}(
  PokemonVariety.Beartic,
  PokemonSpecies.Beartic,
  [PokemonForm.Beartic],
);
new class CryogonalVariety extends Variety {}(
  PokemonVariety.Cryogonal,
  PokemonSpecies.Cryogonal,
  [PokemonForm.Cryogonal],
);
new class ShelmetVariety extends Variety {}(
  PokemonVariety.Shelmet,
  PokemonSpecies.Shelmet,
  [PokemonForm.Shelmet],
);
new class AccelgorVariety extends Variety {}(
  PokemonVariety.Accelgor,
  PokemonSpecies.Accelgor,
  [PokemonForm.Accelgor],
);
new class StunfiskVariety extends Variety {}(
  PokemonVariety.Stunfisk,
  PokemonSpecies.Stunfisk,
  [PokemonForm.Stunfisk],
);
new class StunfiskGalarVariety extends Variety {}(
  PokemonVariety.StunfiskGalar,
  PokemonSpecies.Stunfisk,
  [PokemonForm.StunfiskGalar],
);
new class MienfooVariety extends Variety {}(
  PokemonVariety.Mienfoo,
  PokemonSpecies.Mienfoo,
  [PokemonForm.Mienfoo],
);
new class MienshaoVariety extends Variety {}(
  PokemonVariety.Mienshao,
  PokemonSpecies.Mienshao,
  [PokemonForm.Mienshao],
);
new class DruddigonVariety extends Variety {}(
  PokemonVariety.Druddigon,
  PokemonSpecies.Druddigon,
  [PokemonForm.Druddigon],
);
new class GolettVariety extends Variety {}(
  PokemonVariety.Golett,
  PokemonSpecies.Golett,
  [PokemonForm.Golett],
);
new class GolurkVariety extends Variety {}(
  PokemonVariety.Golurk,
  PokemonSpecies.Golurk,
  [PokemonForm.Golurk],
);
new class PawniardVariety extends Variety {}(
  PokemonVariety.Pawniard,
  PokemonSpecies.Pawniard,
  [PokemonForm.Pawniard],
);
new class BisharpVariety extends Variety {}(
  PokemonVariety.Bisharp,
  PokemonSpecies.Bisharp,
  [PokemonForm.Bisharp],
);
new class BouffalantVariety extends Variety {}(
  PokemonVariety.Bouffalant,
  PokemonSpecies.Bouffalant,
  [PokemonForm.Bouffalant],
);
new class RuffletVariety extends Variety {}(
  PokemonVariety.Rufflet,
  PokemonSpecies.Rufflet,
  [PokemonForm.Rufflet],
);
new class BraviaryVariety extends Variety {}(
  PokemonVariety.Braviary,
  PokemonSpecies.Braviary,
  [PokemonForm.Braviary],
);
new class BraviaryHisuiVariety extends Variety {}(
  PokemonVariety.BraviaryHisui,
  PokemonSpecies.Braviary,
  [PokemonForm.BraviaryHisui],
);
new class VullabyVariety extends Variety {}(
  PokemonVariety.Vullaby,
  PokemonSpecies.Vullaby,
  [PokemonForm.Vullaby],
);
new class MandibuzzVariety extends Variety {}(
  PokemonVariety.Mandibuzz,
  PokemonSpecies.Mandibuzz,
  [PokemonForm.Mandibuzz],
);
new class HeatmorVariety extends Variety {}(
  PokemonVariety.Heatmor,
  PokemonSpecies.Heatmor,
  [PokemonForm.Heatmor],
);
new class DurantVariety extends Variety {}(
  PokemonVariety.Durant,
  PokemonSpecies.Durant,
  [PokemonForm.Durant],
);
new class DeinoVariety extends Variety {}(
  PokemonVariety.Deino,
  PokemonSpecies.Deino,
  [PokemonForm.Deino],
);
new class ZweilousVariety extends Variety {}(
  PokemonVariety.Zweilous,
  PokemonSpecies.Zweilous,
  [PokemonForm.Zweilous],
);
new class HydreigonVariety extends Variety {}(
  PokemonVariety.Hydreigon,
  PokemonSpecies.Hydreigon,
  [PokemonForm.Hydreigon],
);
new class LarvestaVariety extends Variety {}(
  PokemonVariety.Larvesta,
  PokemonSpecies.Larvesta,
  [PokemonForm.Larvesta],
);
new class VolcaronaVariety extends Variety {}(
  PokemonVariety.Volcarona,
  PokemonSpecies.Volcarona,
  [PokemonForm.Volcarona],
);
new class CobalionVariety extends Variety {}(
  PokemonVariety.Cobalion,
  PokemonSpecies.Cobalion,
  [PokemonForm.Cobalion],
);
new class TerrakionVariety extends Variety {}(
  PokemonVariety.Terrakion,
  PokemonSpecies.Terrakion,
  [PokemonForm.Terrakion],
);
new class VirizionVariety extends Variety {}(
  PokemonVariety.Virizion,
  PokemonSpecies.Virizion,
  [PokemonForm.Virizion],
);
new class TornadusIncarnateVariety extends Variety {}(
  PokemonVariety.TornadusIncarnate,
  PokemonSpecies.Tornadus,
  [PokemonForm.TornadusIncarnate],
);
new class TornadusTherianVariety extends Variety {}(
  PokemonVariety.TornadusTherian,
  PokemonSpecies.Tornadus,
  [PokemonForm.TornadusTherian],
);
new class ThundurusIncarnateVariety extends Variety {}(
  PokemonVariety.ThundurusIncarnate,
  PokemonSpecies.Thundurus,
  [PokemonForm.ThundurusIncarnate],
);
new class ThundurusTherianVariety extends Variety {}(
  PokemonVariety.ThundurusTherian,
  PokemonSpecies.Thundurus,
  [PokemonForm.ThundurusTherian],
);
new class ReshiramVariety extends Variety {}(
  PokemonVariety.Reshiram,
  PokemonSpecies.Reshiram,
  [PokemonForm.Reshiram],
);
new class ZekromVariety extends Variety {}(
  PokemonVariety.Zekrom,
  PokemonSpecies.Zekrom,
  [PokemonForm.Zekrom],
);
new class LandorusIncarnateVariety extends Variety {}(
  PokemonVariety.LandorusIncarnate,
  PokemonSpecies.Landorus,
  [PokemonForm.LandorusIncarnate],
);
new class LandorusTherianVariety extends Variety {}(
  PokemonVariety.LandorusTherian,
  PokemonSpecies.Landorus,
  [PokemonForm.LandorusTherian],
);
new class KyuremVariety extends Variety {}(
  PokemonVariety.Kyurem,
  PokemonSpecies.Kyurem,
  [PokemonForm.Kyurem],
);
new class KyuremBlackVariety extends Variety {}(
  PokemonVariety.KyuremBlack,
  PokemonSpecies.Kyurem,
  [PokemonForm.KyuremBlack],
);
new class KyuremWhiteVariety extends Variety {}(
  PokemonVariety.KyuremWhite,
  PokemonSpecies.Kyurem,
  [PokemonForm.KyuremWhite],
);
new class KeldeoOrdinaryVariety extends Variety {}(
  PokemonVariety.KeldeoOrdinary,
  PokemonSpecies.Keldeo,
  [PokemonForm.KeldeoOrdinary],
);
new class KeldeoResoluteVariety extends Variety {}(
  PokemonVariety.KeldeoResolute,
  PokemonSpecies.Keldeo,
  [PokemonForm.KeldeoResolute],
);
new class MeloettaAriaVariety extends Variety {}(
  PokemonVariety.MeloettaAria,
  PokemonSpecies.Meloetta,
  [PokemonForm.MeloettaAria],
);
new class MeloettaPirouetteVariety extends Variety {}(
  PokemonVariety.MeloettaPirouette,
  PokemonSpecies.Meloetta,
  [PokemonForm.MeloettaPirouette],
);
new class GenesectVariety extends Variety {}(
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  [PokemonForm.Genesect, PokemonForm.GenesectDouse, PokemonForm.GenesectShock, PokemonForm.GenesectBurn, PokemonForm.GenesectChill],
);
new class ChespinVariety extends Variety {}(
  PokemonVariety.Chespin,
  PokemonSpecies.Chespin,
  [PokemonForm.Chespin],
);
new class QuilladinVariety extends Variety {}(
  PokemonVariety.Quilladin,
  PokemonSpecies.Quilladin,
  [PokemonForm.Quilladin],
);
new class ChesnaughtVariety extends Variety {}(
  PokemonVariety.Chesnaught,
  PokemonSpecies.Chesnaught,
  [PokemonForm.Chesnaught],
);
new class FennekinVariety extends Variety {}(
  PokemonVariety.Fennekin,
  PokemonSpecies.Fennekin,
  [PokemonForm.Fennekin],
);
new class BraixenVariety extends Variety {}(
  PokemonVariety.Braixen,
  PokemonSpecies.Braixen,
  [PokemonForm.Braixen],
);
new class DelphoxVariety extends Variety {}(
  PokemonVariety.Delphox,
  PokemonSpecies.Delphox,
  [PokemonForm.Delphox],
);
new class FroakieVariety extends Variety {}(
  PokemonVariety.Froakie,
  PokemonSpecies.Froakie,
  [PokemonForm.Froakie],
);
new class FrogadierVariety extends Variety {}(
  PokemonVariety.Frogadier,
  PokemonSpecies.Frogadier,
  [PokemonForm.Frogadier],
);
new class GreninjaVariety extends Variety {}(
  PokemonVariety.Greninja,
  PokemonSpecies.Greninja,
  [PokemonForm.Greninja],
);
new class GreninjaBattleBondVariety extends Variety {}(
  PokemonVariety.GreninjaBattleBond,
  PokemonSpecies.Greninja,
  [PokemonForm.GreninjaBattleBond],
);
new class GreninjaAshVariety extends Variety {}(
  PokemonVariety.GreninjaAsh,
  PokemonSpecies.Greninja,
  [PokemonForm.GreninjaAsh],
);
new class BunnelbyVariety extends Variety {}(
  PokemonVariety.Bunnelby,
  PokemonSpecies.Bunnelby,
  [PokemonForm.Bunnelby],
);
new class DiggersbyVariety extends Variety {}(
  PokemonVariety.Diggersby,
  PokemonSpecies.Diggersby,
  [PokemonForm.Diggersby],
);
new class FletchlingVariety extends Variety {}(
  PokemonVariety.Fletchling,
  PokemonSpecies.Fletchling,
  [PokemonForm.Fletchling],
);
new class FletchinderVariety extends Variety {}(
  PokemonVariety.Fletchinder,
  PokemonSpecies.Fletchinder,
  [PokemonForm.Fletchinder],
);
new class TalonflameVariety extends Variety {}(
  PokemonVariety.Talonflame,
  PokemonSpecies.Talonflame,
  [PokemonForm.Talonflame],
);
new class ScatterbugVariety extends Variety {}(
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  [PokemonForm.ScatterbugIcySnow, PokemonForm.ScatterbugPolar, PokemonForm.ScatterbugTundra, PokemonForm.ScatterbugContinental, PokemonForm.ScatterbugGarden, PokemonForm.ScatterbugElegant, PokemonForm.ScatterbugMeadow, PokemonForm.ScatterbugModern, PokemonForm.ScatterbugMarine, PokemonForm.ScatterbugArchipelago, PokemonForm.ScatterbugHighPlains, PokemonForm.ScatterbugSandstorm, PokemonForm.ScatterbugRiver, PokemonForm.ScatterbugMonsoon, PokemonForm.ScatterbugSavanna, PokemonForm.ScatterbugSun, PokemonForm.ScatterbugOcean, PokemonForm.ScatterbugJungle, PokemonForm.ScatterbugFancy, PokemonForm.ScatterbugPokeBall],
);
new class SpewpaVariety extends Variety {}(
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  [PokemonForm.SpewpaIcySnow, PokemonForm.SpewpaPolar, PokemonForm.SpewpaTundra, PokemonForm.SpewpaContinental, PokemonForm.SpewpaGarden, PokemonForm.SpewpaElegant, PokemonForm.SpewpaMeadow, PokemonForm.SpewpaModern, PokemonForm.SpewpaMarine, PokemonForm.SpewpaArchipelago, PokemonForm.SpewpaHighPlains, PokemonForm.SpewpaSandstorm, PokemonForm.SpewpaRiver, PokemonForm.SpewpaMonsoon, PokemonForm.SpewpaSavanna, PokemonForm.SpewpaSun, PokemonForm.SpewpaOcean, PokemonForm.SpewpaJungle, PokemonForm.SpewpaFancy, PokemonForm.SpewpaPokeBall],
);
new class VivillonVariety extends Variety {}(
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  [PokemonForm.VivillonMeadow, PokemonForm.VivillonIcySnow, PokemonForm.VivillonPolar, PokemonForm.VivillonTundra, PokemonForm.VivillonContinental, PokemonForm.VivillonGarden, PokemonForm.VivillonElegant, PokemonForm.VivillonModern, PokemonForm.VivillonMarine, PokemonForm.VivillonArchipelago, PokemonForm.VivillonHighPlains, PokemonForm.VivillonSandstorm, PokemonForm.VivillonRiver, PokemonForm.VivillonMonsoon, PokemonForm.VivillonSavanna, PokemonForm.VivillonSun, PokemonForm.VivillonOcean, PokemonForm.VivillonJungle, PokemonForm.VivillonFancy, PokemonForm.VivillonPokeBall],
);
new class LitleoVariety extends Variety {}(
  PokemonVariety.Litleo,
  PokemonSpecies.Litleo,
  [PokemonForm.Litleo],
);
new class PyroarVariety extends Variety {}(
  PokemonVariety.Pyroar,
  PokemonSpecies.Pyroar,
  [PokemonForm.Pyroar],
);
new class FlabebeVariety extends Variety {}(
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  [PokemonForm.FlabebeRed, PokemonForm.FlabebeYellow, PokemonForm.FlabebeOrange, PokemonForm.FlabebeBlue, PokemonForm.FlabebeWhite],
);
new class FloetteVariety extends Variety {}(
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  [PokemonForm.FloetteRed, PokemonForm.FloetteYellow, PokemonForm.FloetteOrange, PokemonForm.FloetteBlue, PokemonForm.FloetteWhite],
);
new class FloetteEternalVariety extends Variety {}(
  PokemonVariety.FloetteEternal,
  PokemonSpecies.Floette,
  [PokemonForm.FloetteEternal],
);
new class FlorgesVariety extends Variety {}(
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  [PokemonForm.FlorgesRed, PokemonForm.FlorgesYellow, PokemonForm.FlorgesOrange, PokemonForm.FlorgesBlue, PokemonForm.FlorgesWhite],
);
new class SkiddoVariety extends Variety {}(
  PokemonVariety.Skiddo,
  PokemonSpecies.Skiddo,
  [PokemonForm.Skiddo],
);
new class GogoatVariety extends Variety {}(
  PokemonVariety.Gogoat,
  PokemonSpecies.Gogoat,
  [PokemonForm.Gogoat],
);
new class PanchamVariety extends Variety {}(
  PokemonVariety.Pancham,
  PokemonSpecies.Pancham,
  [PokemonForm.Pancham],
);
new class PangoroVariety extends Variety {}(
  PokemonVariety.Pangoro,
  PokemonSpecies.Pangoro,
  [PokemonForm.Pangoro],
);
new class FurfrouVariety extends Variety {}(
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  [PokemonForm.FurfrouNatural, PokemonForm.FurfrouHeart, PokemonForm.FurfrouStar, PokemonForm.FurfrouDiamond, PokemonForm.FurfrouDebutante, PokemonForm.FurfrouMatron, PokemonForm.FurfrouDandy, PokemonForm.FurfrouLaReine, PokemonForm.FurfrouKabuki, PokemonForm.FurfrouPharaoh],
);
new class EspurrVariety extends Variety {}(
  PokemonVariety.Espurr,
  PokemonSpecies.Espurr,
  [PokemonForm.Espurr],
);
new class MeowsticMaleVariety extends Variety {}(
  PokemonVariety.MeowsticMale,
  PokemonSpecies.Meowstic,
  [PokemonForm.MeowsticMale],
);
new class MeowsticFemaleVariety extends Variety {}(
  PokemonVariety.MeowsticFemale,
  PokemonSpecies.Meowstic,
  [PokemonForm.MeowsticFemale],
);
new class HonedgeVariety extends Variety {}(
  PokemonVariety.Honedge,
  PokemonSpecies.Honedge,
  [PokemonForm.Honedge],
);
new class DoubladeVariety extends Variety {}(
  PokemonVariety.Doublade,
  PokemonSpecies.Doublade,
  [PokemonForm.Doublade],
);
new class AegislashShieldVariety extends Variety {}(
  PokemonVariety.AegislashShield,
  PokemonSpecies.Aegislash,
  [PokemonForm.AegislashShield],
);
new class AegislashBladeVariety extends Variety {}(
  PokemonVariety.AegislashBlade,
  PokemonSpecies.Aegislash,
  [PokemonForm.AegislashBlade],
);
new class SpritzeeVariety extends Variety {}(
  PokemonVariety.Spritzee,
  PokemonSpecies.Spritzee,
  [PokemonForm.Spritzee],
);
new class AromatisseVariety extends Variety {}(
  PokemonVariety.Aromatisse,
  PokemonSpecies.Aromatisse,
  [PokemonForm.Aromatisse],
);
new class SwirlixVariety extends Variety {}(
  PokemonVariety.Swirlix,
  PokemonSpecies.Swirlix,
  [PokemonForm.Swirlix],
);
new class SlurpuffVariety extends Variety {}(
  PokemonVariety.Slurpuff,
  PokemonSpecies.Slurpuff,
  [PokemonForm.Slurpuff],
);
new class InkayVariety extends Variety {}(
  PokemonVariety.Inkay,
  PokemonSpecies.Inkay,
  [PokemonForm.Inkay],
);
new class MalamarVariety extends Variety {}(
  PokemonVariety.Malamar,
  PokemonSpecies.Malamar,
  [PokemonForm.Malamar],
);
new class BinacleVariety extends Variety {}(
  PokemonVariety.Binacle,
  PokemonSpecies.Binacle,
  [PokemonForm.Binacle],
);
new class BarbaracleVariety extends Variety {}(
  PokemonVariety.Barbaracle,
  PokemonSpecies.Barbaracle,
  [PokemonForm.Barbaracle],
);
new class SkrelpVariety extends Variety {}(
  PokemonVariety.Skrelp,
  PokemonSpecies.Skrelp,
  [PokemonForm.Skrelp],
);
new class DragalgeVariety extends Variety {}(
  PokemonVariety.Dragalge,
  PokemonSpecies.Dragalge,
  [PokemonForm.Dragalge],
);
new class ClauncherVariety extends Variety {}(
  PokemonVariety.Clauncher,
  PokemonSpecies.Clauncher,
  [PokemonForm.Clauncher],
);
new class ClawitzerVariety extends Variety {}(
  PokemonVariety.Clawitzer,
  PokemonSpecies.Clawitzer,
  [PokemonForm.Clawitzer],
);
new class HelioptileVariety extends Variety {}(
  PokemonVariety.Helioptile,
  PokemonSpecies.Helioptile,
  [PokemonForm.Helioptile],
);
new class HelioliskVariety extends Variety {}(
  PokemonVariety.Heliolisk,
  PokemonSpecies.Heliolisk,
  [PokemonForm.Heliolisk],
);
new class TyruntVariety extends Variety {}(
  PokemonVariety.Tyrunt,
  PokemonSpecies.Tyrunt,
  [PokemonForm.Tyrunt],
);
new class TyrantrumVariety extends Variety {}(
  PokemonVariety.Tyrantrum,
  PokemonSpecies.Tyrantrum,
  [PokemonForm.Tyrantrum],
);
new class AmauraVariety extends Variety {}(
  PokemonVariety.Amaura,
  PokemonSpecies.Amaura,
  [PokemonForm.Amaura],
);
new class AurorusVariety extends Variety {}(
  PokemonVariety.Aurorus,
  PokemonSpecies.Aurorus,
  [PokemonForm.Aurorus],
);
new class SylveonVariety extends Variety {}(
  PokemonVariety.Sylveon,
  PokemonSpecies.Sylveon,
  [PokemonForm.Sylveon],
);
new class HawluchaVariety extends Variety {}(
  PokemonVariety.Hawlucha,
  PokemonSpecies.Hawlucha,
  [PokemonForm.Hawlucha],
);
new class DedenneVariety extends Variety {}(
  PokemonVariety.Dedenne,
  PokemonSpecies.Dedenne,
  [PokemonForm.Dedenne],
);
new class CarbinkVariety extends Variety {}(
  PokemonVariety.Carbink,
  PokemonSpecies.Carbink,
  [PokemonForm.Carbink],
);
new class GoomyVariety extends Variety {}(
  PokemonVariety.Goomy,
  PokemonSpecies.Goomy,
  [PokemonForm.Goomy],
);
new class SliggooVariety extends Variety {}(
  PokemonVariety.Sliggoo,
  PokemonSpecies.Sliggoo,
  [PokemonForm.Sliggoo],
);
new class SliggooHisuiVariety extends Variety {}(
  PokemonVariety.SliggooHisui,
  PokemonSpecies.Sliggoo,
  [PokemonForm.SliggooHisui],
);
new class GoodraVariety extends Variety {}(
  PokemonVariety.Goodra,
  PokemonSpecies.Goodra,
  [PokemonForm.Goodra],
);
new class GoodraHisuiVariety extends Variety {}(
  PokemonVariety.GoodraHisui,
  PokemonSpecies.Goodra,
  [PokemonForm.GoodraHisui],
);
new class KlefkiVariety extends Variety {}(
  PokemonVariety.Klefki,
  PokemonSpecies.Klefki,
  [PokemonForm.Klefki],
);
new class PhantumpVariety extends Variety {}(
  PokemonVariety.Phantump,
  PokemonSpecies.Phantump,
  [PokemonForm.Phantump],
);
new class TrevenantVariety extends Variety {}(
  PokemonVariety.Trevenant,
  PokemonSpecies.Trevenant,
  [PokemonForm.Trevenant],
);
new class PumpkabooAverageVariety extends Variety {}(
  PokemonVariety.PumpkabooAverage,
  PokemonSpecies.Pumpkaboo,
  [PokemonForm.PumpkabooAverage],
);
new class PumpkabooSmallVariety extends Variety {}(
  PokemonVariety.PumpkabooSmall,
  PokemonSpecies.Pumpkaboo,
  [PokemonForm.PumpkabooSmall],
);
new class PumpkabooLargeVariety extends Variety {}(
  PokemonVariety.PumpkabooLarge,
  PokemonSpecies.Pumpkaboo,
  [PokemonForm.PumpkabooLarge],
);
new class PumpkabooSuperVariety extends Variety {}(
  PokemonVariety.PumpkabooSuper,
  PokemonSpecies.Pumpkaboo,
  [PokemonForm.PumpkabooSuper],
);
new class GourgeistAverageVariety extends Variety {}(
  PokemonVariety.GourgeistAverage,
  PokemonSpecies.Gourgeist,
  [PokemonForm.GourgeistAverage],
);
new class GourgeistSmallVariety extends Variety {}(
  PokemonVariety.GourgeistSmall,
  PokemonSpecies.Gourgeist,
  [PokemonForm.GourgeistSmall],
);
new class GourgeistLargeVariety extends Variety {}(
  PokemonVariety.GourgeistLarge,
  PokemonSpecies.Gourgeist,
  [PokemonForm.GourgeistLarge],
);
new class GourgeistSuperVariety extends Variety {}(
  PokemonVariety.GourgeistSuper,
  PokemonSpecies.Gourgeist,
  [PokemonForm.GourgeistSuper],
);
new class BergmiteVariety extends Variety {}(
  PokemonVariety.Bergmite,
  PokemonSpecies.Bergmite,
  [PokemonForm.Bergmite],
);
new class AvaluggVariety extends Variety {}(
  PokemonVariety.Avalugg,
  PokemonSpecies.Avalugg,
  [PokemonForm.Avalugg],
);
new class AvaluggHisuiVariety extends Variety {}(
  PokemonVariety.AvaluggHisui,
  PokemonSpecies.Avalugg,
  [PokemonForm.AvaluggHisui],
);
new class NoibatVariety extends Variety {}(
  PokemonVariety.Noibat,
  PokemonSpecies.Noibat,
  [PokemonForm.Noibat],
);
new class NoivernVariety extends Variety {}(
  PokemonVariety.Noivern,
  PokemonSpecies.Noivern,
  [PokemonForm.Noivern],
);
new class XerneasVariety extends Variety {}(
  PokemonVariety.Xerneas,
  PokemonSpecies.Xerneas,
  [PokemonForm.XerneasActive, PokemonForm.XerneasNeutral],
);
new class YveltalVariety extends Variety {}(
  PokemonVariety.Yveltal,
  PokemonSpecies.Yveltal,
  [PokemonForm.Yveltal],
);
new class Zygarde50Variety extends Variety {}(
  PokemonVariety.Zygarde50,
  PokemonSpecies.Zygarde,
  [PokemonForm.Zygarde50],
);
new class Zygarde10PowerConstructVariety extends Variety {}(
  PokemonVariety.Zygarde10PowerConstruct,
  PokemonSpecies.Zygarde,
  [PokemonForm.Zygarde10PowerConstruct],
);
new class Zygarde50PowerConstructVariety extends Variety {}(
  PokemonVariety.Zygarde50PowerConstruct,
  PokemonSpecies.Zygarde,
  [PokemonForm.Zygarde50PowerConstruct],
);
new class ZygardeCompleteVariety extends Variety {}(
  PokemonVariety.ZygardeComplete,
  PokemonSpecies.Zygarde,
  [PokemonForm.ZygardeComplete],
);
new class Zygarde10Variety extends Variety {}(
  PokemonVariety.Zygarde10,
  PokemonSpecies.Zygarde,
  [PokemonForm.Zygarde10],
);
new class DiancieVariety extends Variety {}(
  PokemonVariety.Diancie,
  PokemonSpecies.Diancie,
  [PokemonForm.Diancie],
);
new class DiancieMegaVariety extends Variety {}(
  PokemonVariety.DiancieMega,
  PokemonSpecies.Diancie,
  [PokemonForm.DiancieMega],
);
new class HoopaVariety extends Variety {}(
  PokemonVariety.Hoopa,
  PokemonSpecies.Hoopa,
  [PokemonForm.Hoopa],
);
new class HoopaUnboundVariety extends Variety {}(
  PokemonVariety.HoopaUnbound,
  PokemonSpecies.Hoopa,
  [PokemonForm.HoopaUnbound],
);
new class VolcanionVariety extends Variety {}(
  PokemonVariety.Volcanion,
  PokemonSpecies.Volcanion,
  [PokemonForm.Volcanion],
);
new class RowletVariety extends Variety {}(
  PokemonVariety.Rowlet,
  PokemonSpecies.Rowlet,
  [PokemonForm.Rowlet],
);
new class DartrixVariety extends Variety {}(
  PokemonVariety.Dartrix,
  PokemonSpecies.Dartrix,
  [PokemonForm.Dartrix],
);
new class DecidueyeVariety extends Variety {}(
  PokemonVariety.Decidueye,
  PokemonSpecies.Decidueye,
  [PokemonForm.Decidueye],
);
new class DecidueyeHisuiVariety extends Variety {}(
  PokemonVariety.DecidueyeHisui,
  PokemonSpecies.Decidueye,
  [PokemonForm.DecidueyeHisui],
);
new class LittenVariety extends Variety {}(
  PokemonVariety.Litten,
  PokemonSpecies.Litten,
  [PokemonForm.Litten],
);
new class TorracatVariety extends Variety {}(
  PokemonVariety.Torracat,
  PokemonSpecies.Torracat,
  [PokemonForm.Torracat],
);
new class IncineroarVariety extends Variety {}(
  PokemonVariety.Incineroar,
  PokemonSpecies.Incineroar,
  [PokemonForm.Incineroar],
);
new class PopplioVariety extends Variety {}(
  PokemonVariety.Popplio,
  PokemonSpecies.Popplio,
  [PokemonForm.Popplio],
);
new class BrionneVariety extends Variety {}(
  PokemonVariety.Brionne,
  PokemonSpecies.Brionne,
  [PokemonForm.Brionne],
);
new class PrimarinaVariety extends Variety {}(
  PokemonVariety.Primarina,
  PokemonSpecies.Primarina,
  [PokemonForm.Primarina],
);
new class PikipekVariety extends Variety {}(
  PokemonVariety.Pikipek,
  PokemonSpecies.Pikipek,
  [PokemonForm.Pikipek],
);
new class TrumbeakVariety extends Variety {}(
  PokemonVariety.Trumbeak,
  PokemonSpecies.Trumbeak,
  [PokemonForm.Trumbeak],
);
new class ToucannonVariety extends Variety {}(
  PokemonVariety.Toucannon,
  PokemonSpecies.Toucannon,
  [PokemonForm.Toucannon],
);
new class YungoosVariety extends Variety {}(
  PokemonVariety.Yungoos,
  PokemonSpecies.Yungoos,
  [PokemonForm.Yungoos],
);
new class GumshoosVariety extends Variety {}(
  PokemonVariety.Gumshoos,
  PokemonSpecies.Gumshoos,
  [PokemonForm.Gumshoos],
);
new class GumshoosTotemVariety extends Variety {}(
  PokemonVariety.GumshoosTotem,
  PokemonSpecies.Gumshoos,
  [PokemonForm.GumshoosTotem],
);
new class GrubbinVariety extends Variety {}(
  PokemonVariety.Grubbin,
  PokemonSpecies.Grubbin,
  [PokemonForm.Grubbin],
);
new class CharjabugVariety extends Variety {}(
  PokemonVariety.Charjabug,
  PokemonSpecies.Charjabug,
  [PokemonForm.Charjabug],
);
new class VikavoltVariety extends Variety {}(
  PokemonVariety.Vikavolt,
  PokemonSpecies.Vikavolt,
  [PokemonForm.Vikavolt],
);
new class VikavoltTotemVariety extends Variety {}(
  PokemonVariety.VikavoltTotem,
  PokemonSpecies.Vikavolt,
  [PokemonForm.VikavoltTotem],
);
new class CrabrawlerVariety extends Variety {}(
  PokemonVariety.Crabrawler,
  PokemonSpecies.Crabrawler,
  [PokemonForm.Crabrawler],
);
new class CrabominableVariety extends Variety {}(
  PokemonVariety.Crabominable,
  PokemonSpecies.Crabominable,
  [PokemonForm.Crabominable],
);
new class OricorioBaileVariety extends Variety {}(
  PokemonVariety.OricorioBaile,
  PokemonSpecies.Oricorio,
  [PokemonForm.OricorioBaile],
);
new class OricorioPomPomVariety extends Variety {}(
  PokemonVariety.OricorioPomPom,
  PokemonSpecies.Oricorio,
  [PokemonForm.OricorioPomPom],
);
new class OricorioPauVariety extends Variety {}(
  PokemonVariety.OricorioPau,
  PokemonSpecies.Oricorio,
  [PokemonForm.OricorioPau],
);
new class OricorioSensuVariety extends Variety {}(
  PokemonVariety.OricorioSensu,
  PokemonSpecies.Oricorio,
  [PokemonForm.OricorioSensu],
);
new class CutieflyVariety extends Variety {}(
  PokemonVariety.Cutiefly,
  PokemonSpecies.Cutiefly,
  [PokemonForm.Cutiefly],
);
new class RibombeeVariety extends Variety {}(
  PokemonVariety.Ribombee,
  PokemonSpecies.Ribombee,
  [PokemonForm.Ribombee],
);
new class RibombeeTotemVariety extends Variety {}(
  PokemonVariety.RibombeeTotem,
  PokemonSpecies.Ribombee,
  [PokemonForm.RibombeeTotem],
);
new class RockruffVariety extends Variety {}(
  PokemonVariety.Rockruff,
  PokemonSpecies.Rockruff,
  [PokemonForm.Rockruff],
);
new class RockruffOwnTempoVariety extends Variety {}(
  PokemonVariety.RockruffOwnTempo,
  PokemonSpecies.Rockruff,
  [PokemonForm.RockruffOwnTempo],
);
new class LycanrocMiddayVariety extends Variety {}(
  PokemonVariety.LycanrocMidday,
  PokemonSpecies.Lycanroc,
  [PokemonForm.LycanrocMidday],
);
new class LycanrocMidnightVariety extends Variety {}(
  PokemonVariety.LycanrocMidnight,
  PokemonSpecies.Lycanroc,
  [PokemonForm.LycanrocMidnight],
);
new class LycanrocDuskVariety extends Variety {}(
  PokemonVariety.LycanrocDusk,
  PokemonSpecies.Lycanroc,
  [PokemonForm.LycanrocDusk],
);
new class WishiwashiSoloVariety extends Variety {}(
  PokemonVariety.WishiwashiSolo,
  PokemonSpecies.Wishiwashi,
  [PokemonForm.WishiwashiSolo],
);
new class WishiwashiSchoolVariety extends Variety {}(
  PokemonVariety.WishiwashiSchool,
  PokemonSpecies.Wishiwashi,
  [PokemonForm.WishiwashiSchool],
);
new class MareanieVariety extends Variety {}(
  PokemonVariety.Mareanie,
  PokemonSpecies.Mareanie,
  [PokemonForm.Mareanie],
);
new class ToxapexVariety extends Variety {}(
  PokemonVariety.Toxapex,
  PokemonSpecies.Toxapex,
  [PokemonForm.Toxapex],
);
new class MudbrayVariety extends Variety {}(
  PokemonVariety.Mudbray,
  PokemonSpecies.Mudbray,
  [PokemonForm.Mudbray],
);
new class MudsdaleVariety extends Variety {}(
  PokemonVariety.Mudsdale,
  PokemonSpecies.Mudsdale,
  [PokemonForm.Mudsdale],
);
new class DewpiderVariety extends Variety {}(
  PokemonVariety.Dewpider,
  PokemonSpecies.Dewpider,
  [PokemonForm.Dewpider],
);
new class AraquanidVariety extends Variety {}(
  PokemonVariety.Araquanid,
  PokemonSpecies.Araquanid,
  [PokemonForm.Araquanid],
);
new class AraquanidTotemVariety extends Variety {}(
  PokemonVariety.AraquanidTotem,
  PokemonSpecies.Araquanid,
  [PokemonForm.AraquanidTotem],
);
new class FomantisVariety extends Variety {}(
  PokemonVariety.Fomantis,
  PokemonSpecies.Fomantis,
  [PokemonForm.Fomantis],
);
new class LurantisVariety extends Variety {}(
  PokemonVariety.Lurantis,
  PokemonSpecies.Lurantis,
  [PokemonForm.Lurantis],
);
new class LurantisTotemVariety extends Variety {}(
  PokemonVariety.LurantisTotem,
  PokemonSpecies.Lurantis,
  [PokemonForm.LurantisTotem],
);
new class MorelullVariety extends Variety {}(
  PokemonVariety.Morelull,
  PokemonSpecies.Morelull,
  [PokemonForm.Morelull],
);
new class ShiinoticVariety extends Variety {}(
  PokemonVariety.Shiinotic,
  PokemonSpecies.Shiinotic,
  [PokemonForm.Shiinotic],
);
new class SalanditVariety extends Variety {}(
  PokemonVariety.Salandit,
  PokemonSpecies.Salandit,
  [PokemonForm.Salandit],
);
new class SalazzleVariety extends Variety {}(
  PokemonVariety.Salazzle,
  PokemonSpecies.Salazzle,
  [PokemonForm.Salazzle],
);
new class SalazzleTotemVariety extends Variety {}(
  PokemonVariety.SalazzleTotem,
  PokemonSpecies.Salazzle,
  [PokemonForm.SalazzleTotem],
);
new class StuffulVariety extends Variety {}(
  PokemonVariety.Stufful,
  PokemonSpecies.Stufful,
  [PokemonForm.Stufful],
);
new class BewearVariety extends Variety {}(
  PokemonVariety.Bewear,
  PokemonSpecies.Bewear,
  [PokemonForm.Bewear],
);
new class BounsweetVariety extends Variety {}(
  PokemonVariety.Bounsweet,
  PokemonSpecies.Bounsweet,
  [PokemonForm.Bounsweet],
);
new class SteeneeVariety extends Variety {}(
  PokemonVariety.Steenee,
  PokemonSpecies.Steenee,
  [PokemonForm.Steenee],
);
new class TsareenaVariety extends Variety {}(
  PokemonVariety.Tsareena,
  PokemonSpecies.Tsareena,
  [PokemonForm.Tsareena],
);
new class ComfeyVariety extends Variety {}(
  PokemonVariety.Comfey,
  PokemonSpecies.Comfey,
  [PokemonForm.Comfey],
);
new class OranguruVariety extends Variety {}(
  PokemonVariety.Oranguru,
  PokemonSpecies.Oranguru,
  [PokemonForm.Oranguru],
);
new class PassimianVariety extends Variety {}(
  PokemonVariety.Passimian,
  PokemonSpecies.Passimian,
  [PokemonForm.Passimian],
);
new class WimpodVariety extends Variety {}(
  PokemonVariety.Wimpod,
  PokemonSpecies.Wimpod,
  [PokemonForm.Wimpod],
);
new class GolisopodVariety extends Variety {}(
  PokemonVariety.Golisopod,
  PokemonSpecies.Golisopod,
  [PokemonForm.Golisopod],
);
new class SandygastVariety extends Variety {}(
  PokemonVariety.Sandygast,
  PokemonSpecies.Sandygast,
  [PokemonForm.Sandygast],
);
new class PalossandVariety extends Variety {}(
  PokemonVariety.Palossand,
  PokemonSpecies.Palossand,
  [PokemonForm.Palossand],
);
new class PyukumukuVariety extends Variety {}(
  PokemonVariety.Pyukumuku,
  PokemonSpecies.Pyukumuku,
  [PokemonForm.Pyukumuku],
);
new class TypeNullVariety extends Variety {}(
  PokemonVariety.TypeNull,
  PokemonSpecies.TypeNull,
  [PokemonForm.TypeNull],
);
new class SilvallyVariety extends Variety {}(
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  [PokemonForm.SilvallyNormal, PokemonForm.SilvallyFighting, PokemonForm.SilvallyFlying, PokemonForm.SilvallyPoison, PokemonForm.SilvallyGround, PokemonForm.SilvallyRock, PokemonForm.SilvallyBug, PokemonForm.SilvallyGhost, PokemonForm.SilvallySteel, PokemonForm.SilvallyFire, PokemonForm.SilvallyWater, PokemonForm.SilvallyGrass, PokemonForm.SilvallyElectric, PokemonForm.SilvallyPsychic, PokemonForm.SilvallyIce, PokemonForm.SilvallyDragon, PokemonForm.SilvallyDark, PokemonForm.SilvallyFairy],
);
new class MiniorRedMeteorVariety extends Variety {}(
  PokemonVariety.MiniorRedMeteor,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorRedMeteor],
);
new class MiniorOrangeMeteorVariety extends Variety {}(
  PokemonVariety.MiniorOrangeMeteor,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorOrangeMeteor],
);
new class MiniorYellowMeteorVariety extends Variety {}(
  PokemonVariety.MiniorYellowMeteor,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorYellowMeteor],
);
new class MiniorGreenMeteorVariety extends Variety {}(
  PokemonVariety.MiniorGreenMeteor,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorGreenMeteor],
);
new class MiniorBlueMeteorVariety extends Variety {}(
  PokemonVariety.MiniorBlueMeteor,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorBlueMeteor],
);
new class MiniorIndigoMeteorVariety extends Variety {}(
  PokemonVariety.MiniorIndigoMeteor,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorIndigoMeteor],
);
new class MiniorVioletMeteorVariety extends Variety {}(
  PokemonVariety.MiniorVioletMeteor,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorVioletMeteor],
);
new class MiniorRedVariety extends Variety {}(
  PokemonVariety.MiniorRed,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorRed],
);
new class MiniorOrangeVariety extends Variety {}(
  PokemonVariety.MiniorOrange,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorOrange],
);
new class MiniorYellowVariety extends Variety {}(
  PokemonVariety.MiniorYellow,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorYellow],
);
new class MiniorGreenVariety extends Variety {}(
  PokemonVariety.MiniorGreen,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorGreen],
);
new class MiniorBlueVariety extends Variety {}(
  PokemonVariety.MiniorBlue,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorBlue],
);
new class MiniorIndigoVariety extends Variety {}(
  PokemonVariety.MiniorIndigo,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorIndigo],
);
new class MiniorVioletVariety extends Variety {}(
  PokemonVariety.MiniorViolet,
  PokemonSpecies.Minior,
  [PokemonForm.MiniorViolet],
);
new class KomalaVariety extends Variety {}(
  PokemonVariety.Komala,
  PokemonSpecies.Komala,
  [PokemonForm.Komala],
);
new class TurtonatorVariety extends Variety {}(
  PokemonVariety.Turtonator,
  PokemonSpecies.Turtonator,
  [PokemonForm.Turtonator],
);
new class TogedemaruVariety extends Variety {}(
  PokemonVariety.Togedemaru,
  PokemonSpecies.Togedemaru,
  [PokemonForm.Togedemaru],
);
new class TogedemaruTotemVariety extends Variety {}(
  PokemonVariety.TogedemaruTotem,
  PokemonSpecies.Togedemaru,
  [PokemonForm.TogedemaruTotem],
);
new class MimikyuDisguisedVariety extends Variety {}(
  PokemonVariety.MimikyuDisguised,
  PokemonSpecies.Mimikyu,
  [PokemonForm.MimikyuDisguised],
);
new class MimikyuBustedVariety extends Variety {}(
  PokemonVariety.MimikyuBusted,
  PokemonSpecies.Mimikyu,
  [PokemonForm.MimikyuBusted],
);
new class MimikyuTotemDisguisedVariety extends Variety {}(
  PokemonVariety.MimikyuTotemDisguised,
  PokemonSpecies.Mimikyu,
  [PokemonForm.MimikyuTotemDisguised],
);
new class MimikyuTotemBustedVariety extends Variety {}(
  PokemonVariety.MimikyuTotemBusted,
  PokemonSpecies.Mimikyu,
  [PokemonForm.MimikyuTotemBusted],
);
new class BruxishVariety extends Variety {}(
  PokemonVariety.Bruxish,
  PokemonSpecies.Bruxish,
  [PokemonForm.Bruxish],
);
new class DrampaVariety extends Variety {}(
  PokemonVariety.Drampa,
  PokemonSpecies.Drampa,
  [PokemonForm.Drampa],
);
new class DhelmiseVariety extends Variety {}(
  PokemonVariety.Dhelmise,
  PokemonSpecies.Dhelmise,
  [PokemonForm.Dhelmise],
);
new class JangmoOVariety extends Variety {}(
  PokemonVariety.JangmoO,
  PokemonSpecies.JangmoO,
  [PokemonForm.JangmoO],
);
new class HakamoOVariety extends Variety {}(
  PokemonVariety.HakamoO,
  PokemonSpecies.HakamoO,
  [PokemonForm.HakamoO],
);
new class KommoOVariety extends Variety {}(
  PokemonVariety.KommoO,
  PokemonSpecies.KommoO,
  [PokemonForm.KommoO],
);
new class KommoOTotemVariety extends Variety {}(
  PokemonVariety.KommoOTotem,
  PokemonSpecies.KommoO,
  [PokemonForm.KommoOTotem],
);
new class TapuKokoVariety extends Variety {}(
  PokemonVariety.TapuKoko,
  PokemonSpecies.TapuKoko,
  [PokemonForm.TapuKoko],
);
new class TapuLeleVariety extends Variety {}(
  PokemonVariety.TapuLele,
  PokemonSpecies.TapuLele,
  [PokemonForm.TapuLele],
);
new class TapuBuluVariety extends Variety {}(
  PokemonVariety.TapuBulu,
  PokemonSpecies.TapuBulu,
  [PokemonForm.TapuBulu],
);
new class TapuFiniVariety extends Variety {}(
  PokemonVariety.TapuFini,
  PokemonSpecies.TapuFini,
  [PokemonForm.TapuFini],
);
new class CosmogVariety extends Variety {}(
  PokemonVariety.Cosmog,
  PokemonSpecies.Cosmog,
  [PokemonForm.Cosmog],
);
new class CosmoemVariety extends Variety {}(
  PokemonVariety.Cosmoem,
  PokemonSpecies.Cosmoem,
  [PokemonForm.Cosmoem],
);
new class SolgaleoVariety extends Variety {}(
  PokemonVariety.Solgaleo,
  PokemonSpecies.Solgaleo,
  [PokemonForm.Solgaleo],
);
new class LunalaVariety extends Variety {}(
  PokemonVariety.Lunala,
  PokemonSpecies.Lunala,
  [PokemonForm.Lunala],
);
new class NihilegoVariety extends Variety {}(
  PokemonVariety.Nihilego,
  PokemonSpecies.Nihilego,
  [PokemonForm.Nihilego],
);
new class BuzzwoleVariety extends Variety {}(
  PokemonVariety.Buzzwole,
  PokemonSpecies.Buzzwole,
  [PokemonForm.Buzzwole],
);
new class PheromosaVariety extends Variety {}(
  PokemonVariety.Pheromosa,
  PokemonSpecies.Pheromosa,
  [PokemonForm.Pheromosa],
);
new class XurkitreeVariety extends Variety {}(
  PokemonVariety.Xurkitree,
  PokemonSpecies.Xurkitree,
  [PokemonForm.Xurkitree],
);
new class CelesteelaVariety extends Variety {}(
  PokemonVariety.Celesteela,
  PokemonSpecies.Celesteela,
  [PokemonForm.Celesteela],
);
new class KartanaVariety extends Variety {}(
  PokemonVariety.Kartana,
  PokemonSpecies.Kartana,
  [PokemonForm.Kartana],
);
new class GuzzlordVariety extends Variety {}(
  PokemonVariety.Guzzlord,
  PokemonSpecies.Guzzlord,
  [PokemonForm.Guzzlord],
);
new class NecrozmaVariety extends Variety {}(
  PokemonVariety.Necrozma,
  PokemonSpecies.Necrozma,
  [PokemonForm.Necrozma],
);
new class NecrozmaDuskVariety extends Variety {}(
  PokemonVariety.NecrozmaDusk,
  PokemonSpecies.Necrozma,
  [PokemonForm.NecrozmaDusk],
);
new class NecrozmaDawnVariety extends Variety {}(
  PokemonVariety.NecrozmaDawn,
  PokemonSpecies.Necrozma,
  [PokemonForm.NecrozmaDawn],
);
new class NecrozmaUltraVariety extends Variety {}(
  PokemonVariety.NecrozmaUltra,
  PokemonSpecies.Necrozma,
  [PokemonForm.NecrozmaUltra],
);
new class MagearnaVariety extends Variety {}(
  PokemonVariety.Magearna,
  PokemonSpecies.Magearna,
  [PokemonForm.Magearna],
);
new class MagearnaOriginalVariety extends Variety {}(
  PokemonVariety.MagearnaOriginal,
  PokemonSpecies.Magearna,
  [PokemonForm.MagearnaOriginal],
);
new class MarshadowVariety extends Variety {}(
  PokemonVariety.Marshadow,
  PokemonSpecies.Marshadow,
  [PokemonForm.Marshadow],
);
new class PoipoleVariety extends Variety {}(
  PokemonVariety.Poipole,
  PokemonSpecies.Poipole,
  [PokemonForm.Poipole],
);
new class NaganadelVariety extends Variety {}(
  PokemonVariety.Naganadel,
  PokemonSpecies.Naganadel,
  [PokemonForm.Naganadel],
);
new class StakatakaVariety extends Variety {}(
  PokemonVariety.Stakataka,
  PokemonSpecies.Stakataka,
  [PokemonForm.Stakataka],
);
new class BlacephalonVariety extends Variety {}(
  PokemonVariety.Blacephalon,
  PokemonSpecies.Blacephalon,
  [PokemonForm.Blacephalon],
);
new class ZeraoraVariety extends Variety {}(
  PokemonVariety.Zeraora,
  PokemonSpecies.Zeraora,
  [PokemonForm.Zeraora],
);
new class MeltanVariety extends Variety {}(
  PokemonVariety.Meltan,
  PokemonSpecies.Meltan,
  [PokemonForm.Meltan],
);
new class MelmetalVariety extends Variety {}(
  PokemonVariety.Melmetal,
  PokemonSpecies.Melmetal,
  [PokemonForm.Melmetal],
);
new class MelmetalGmaxVariety extends Variety {}(
  PokemonVariety.MelmetalGmax,
  PokemonSpecies.Melmetal,
  [PokemonForm.MelmetalGmax],
);
new class GrookeyVariety extends Variety {}(
  PokemonVariety.Grookey,
  PokemonSpecies.Grookey,
  [PokemonForm.Grookey],
);
new class ThwackeyVariety extends Variety {}(
  PokemonVariety.Thwackey,
  PokemonSpecies.Thwackey,
  [PokemonForm.Thwackey],
);
new class RillaboomVariety extends Variety {}(
  PokemonVariety.Rillaboom,
  PokemonSpecies.Rillaboom,
  [PokemonForm.Rillaboom],
);
new class RillaboomGmaxVariety extends Variety {}(
  PokemonVariety.RillaboomGmax,
  PokemonSpecies.Rillaboom,
  [PokemonForm.RillaboomGmax],
);
new class ScorbunnyVariety extends Variety {}(
  PokemonVariety.Scorbunny,
  PokemonSpecies.Scorbunny,
  [PokemonForm.Scorbunny],
);
new class RabootVariety extends Variety {}(
  PokemonVariety.Raboot,
  PokemonSpecies.Raboot,
  [PokemonForm.Raboot],
);
new class CinderaceVariety extends Variety {}(
  PokemonVariety.Cinderace,
  PokemonSpecies.Cinderace,
  [PokemonForm.Cinderace],
);
new class CinderaceGmaxVariety extends Variety {}(
  PokemonVariety.CinderaceGmax,
  PokemonSpecies.Cinderace,
  [PokemonForm.CinderaceGmax],
);
new class SobbleVariety extends Variety {}(
  PokemonVariety.Sobble,
  PokemonSpecies.Sobble,
  [PokemonForm.Sobble],
);
new class DrizzileVariety extends Variety {}(
  PokemonVariety.Drizzile,
  PokemonSpecies.Drizzile,
  [PokemonForm.Drizzile],
);
new class InteleonVariety extends Variety {}(
  PokemonVariety.Inteleon,
  PokemonSpecies.Inteleon,
  [PokemonForm.Inteleon],
);
new class InteleonGmaxVariety extends Variety {}(
  PokemonVariety.InteleonGmax,
  PokemonSpecies.Inteleon,
  [PokemonForm.InteleonGmax],
);
new class SkwovetVariety extends Variety {}(
  PokemonVariety.Skwovet,
  PokemonSpecies.Skwovet,
  [PokemonForm.Skwovet],
);
new class GreedentVariety extends Variety {}(
  PokemonVariety.Greedent,
  PokemonSpecies.Greedent,
  [PokemonForm.Greedent],
);
new class RookideeVariety extends Variety {}(
  PokemonVariety.Rookidee,
  PokemonSpecies.Rookidee,
  [PokemonForm.Rookidee],
);
new class CorvisquireVariety extends Variety {}(
  PokemonVariety.Corvisquire,
  PokemonSpecies.Corvisquire,
  [PokemonForm.Corvisquire],
);
new class CorviknightVariety extends Variety {}(
  PokemonVariety.Corviknight,
  PokemonSpecies.Corviknight,
  [PokemonForm.Corviknight],
);
new class CorviknightGmaxVariety extends Variety {}(
  PokemonVariety.CorviknightGmax,
  PokemonSpecies.Corviknight,
  [PokemonForm.CorviknightGmax],
);
new class BlipbugVariety extends Variety {}(
  PokemonVariety.Blipbug,
  PokemonSpecies.Blipbug,
  [PokemonForm.Blipbug],
);
new class DottlerVariety extends Variety {}(
  PokemonVariety.Dottler,
  PokemonSpecies.Dottler,
  [PokemonForm.Dottler],
);
new class OrbeetleVariety extends Variety {}(
  PokemonVariety.Orbeetle,
  PokemonSpecies.Orbeetle,
  [PokemonForm.Orbeetle],
);
new class OrbeetleGmaxVariety extends Variety {}(
  PokemonVariety.OrbeetleGmax,
  PokemonSpecies.Orbeetle,
  [PokemonForm.OrbeetleGmax],
);
new class NickitVariety extends Variety {}(
  PokemonVariety.Nickit,
  PokemonSpecies.Nickit,
  [PokemonForm.Nickit],
);
new class ThievulVariety extends Variety {}(
  PokemonVariety.Thievul,
  PokemonSpecies.Thievul,
  [PokemonForm.Thievul],
);
new class GossifleurVariety extends Variety {}(
  PokemonVariety.Gossifleur,
  PokemonSpecies.Gossifleur,
  [PokemonForm.Gossifleur],
);
new class EldegossVariety extends Variety {}(
  PokemonVariety.Eldegoss,
  PokemonSpecies.Eldegoss,
  [PokemonForm.Eldegoss],
);
new class WoolooVariety extends Variety {}(
  PokemonVariety.Wooloo,
  PokemonSpecies.Wooloo,
  [PokemonForm.Wooloo],
);
new class DubwoolVariety extends Variety {}(
  PokemonVariety.Dubwool,
  PokemonSpecies.Dubwool,
  [PokemonForm.Dubwool],
);
new class ChewtleVariety extends Variety {}(
  PokemonVariety.Chewtle,
  PokemonSpecies.Chewtle,
  [PokemonForm.Chewtle],
);
new class DrednawVariety extends Variety {}(
  PokemonVariety.Drednaw,
  PokemonSpecies.Drednaw,
  [PokemonForm.Drednaw],
);
new class DrednawGmaxVariety extends Variety {}(
  PokemonVariety.DrednawGmax,
  PokemonSpecies.Drednaw,
  [PokemonForm.DrednawGmax],
);
new class YamperVariety extends Variety {}(
  PokemonVariety.Yamper,
  PokemonSpecies.Yamper,
  [PokemonForm.Yamper],
);
new class BoltundVariety extends Variety {}(
  PokemonVariety.Boltund,
  PokemonSpecies.Boltund,
  [PokemonForm.Boltund],
);
new class RolycolyVariety extends Variety {}(
  PokemonVariety.Rolycoly,
  PokemonSpecies.Rolycoly,
  [PokemonForm.Rolycoly],
);
new class CarkolVariety extends Variety {}(
  PokemonVariety.Carkol,
  PokemonSpecies.Carkol,
  [PokemonForm.Carkol],
);
new class CoalossalVariety extends Variety {}(
  PokemonVariety.Coalossal,
  PokemonSpecies.Coalossal,
  [PokemonForm.Coalossal],
);
new class CoalossalGmaxVariety extends Variety {}(
  PokemonVariety.CoalossalGmax,
  PokemonSpecies.Coalossal,
  [PokemonForm.CoalossalGmax],
);
new class ApplinVariety extends Variety {}(
  PokemonVariety.Applin,
  PokemonSpecies.Applin,
  [PokemonForm.Applin],
);
new class FlappleVariety extends Variety {}(
  PokemonVariety.Flapple,
  PokemonSpecies.Flapple,
  [PokemonForm.Flapple],
);
new class FlappleGmaxVariety extends Variety {}(
  PokemonVariety.FlappleGmax,
  PokemonSpecies.Flapple,
  [PokemonForm.FlappleGmax],
);
new class AppletunVariety extends Variety {}(
  PokemonVariety.Appletun,
  PokemonSpecies.Appletun,
  [PokemonForm.Appletun],
);
new class AppletunGmaxVariety extends Variety {}(
  PokemonVariety.AppletunGmax,
  PokemonSpecies.Appletun,
  [PokemonForm.AppletunGmax],
);
new class SilicobraVariety extends Variety {}(
  PokemonVariety.Silicobra,
  PokemonSpecies.Silicobra,
  [PokemonForm.Silicobra],
);
new class SandacondaVariety extends Variety {}(
  PokemonVariety.Sandaconda,
  PokemonSpecies.Sandaconda,
  [PokemonForm.Sandaconda],
);
new class SandacondaGmaxVariety extends Variety {}(
  PokemonVariety.SandacondaGmax,
  PokemonSpecies.Sandaconda,
  [PokemonForm.SandacondaGmax],
);
new class CramorantVariety extends Variety {}(
  PokemonVariety.Cramorant,
  PokemonSpecies.Cramorant,
  [PokemonForm.Cramorant],
);
new class CramorantGulpingVariety extends Variety {}(
  PokemonVariety.CramorantGulping,
  PokemonSpecies.Cramorant,
  [PokemonForm.CramorantGulping],
);
new class CramorantGorgingVariety extends Variety {}(
  PokemonVariety.CramorantGorging,
  PokemonSpecies.Cramorant,
  [PokemonForm.CramorantGorging],
);
new class ArrokudaVariety extends Variety {}(
  PokemonVariety.Arrokuda,
  PokemonSpecies.Arrokuda,
  [PokemonForm.Arrokuda],
);
new class BarraskewdaVariety extends Variety {}(
  PokemonVariety.Barraskewda,
  PokemonSpecies.Barraskewda,
  [PokemonForm.Barraskewda],
);
new class ToxelVariety extends Variety {}(
  PokemonVariety.Toxel,
  PokemonSpecies.Toxel,
  [PokemonForm.Toxel],
);
new class ToxtricityAmpedVariety extends Variety {}(
  PokemonVariety.ToxtricityAmped,
  PokemonSpecies.Toxtricity,
  [PokemonForm.ToxtricityAmped],
);
new class ToxtricityLowKeyVariety extends Variety {}(
  PokemonVariety.ToxtricityLowKey,
  PokemonSpecies.Toxtricity,
  [PokemonForm.ToxtricityLowKey],
);
new class ToxtricityAmpedGmaxVariety extends Variety {}(
  PokemonVariety.ToxtricityAmpedGmax,
  PokemonSpecies.Toxtricity,
  [PokemonForm.ToxtricityAmpedGmax],
);
new class ToxtricityLowKeyGmaxVariety extends Variety {}(
  PokemonVariety.ToxtricityLowKeyGmax,
  PokemonSpecies.Toxtricity,
  [PokemonForm.ToxtricityLowKeyGmax],
);
new class SizzlipedeVariety extends Variety {}(
  PokemonVariety.Sizzlipede,
  PokemonSpecies.Sizzlipede,
  [PokemonForm.Sizzlipede],
);
new class CentiskorchVariety extends Variety {}(
  PokemonVariety.Centiskorch,
  PokemonSpecies.Centiskorch,
  [PokemonForm.Centiskorch],
);
new class CentiskorchGmaxVariety extends Variety {}(
  PokemonVariety.CentiskorchGmax,
  PokemonSpecies.Centiskorch,
  [PokemonForm.CentiskorchGmax],
);
new class ClobbopusVariety extends Variety {}(
  PokemonVariety.Clobbopus,
  PokemonSpecies.Clobbopus,
  [PokemonForm.Clobbopus],
);
new class GrapploctVariety extends Variety {}(
  PokemonVariety.Grapploct,
  PokemonSpecies.Grapploct,
  [PokemonForm.Grapploct],
);
new class SinisteaVariety extends Variety {}(
  PokemonVariety.Sinistea,
  PokemonSpecies.Sinistea,
  [PokemonForm.SinisteaPhony, PokemonForm.SinisteaAntique],
);
new class PolteageistVariety extends Variety {}(
  PokemonVariety.Polteageist,
  PokemonSpecies.Polteageist,
  [PokemonForm.PolteageistPhony, PokemonForm.PolteageistAntique],
);
new class HatennaVariety extends Variety {}(
  PokemonVariety.Hatenna,
  PokemonSpecies.Hatenna,
  [PokemonForm.Hatenna],
);
new class HattremVariety extends Variety {}(
  PokemonVariety.Hattrem,
  PokemonSpecies.Hattrem,
  [PokemonForm.Hattrem],
);
new class HattereneVariety extends Variety {}(
  PokemonVariety.Hatterene,
  PokemonSpecies.Hatterene,
  [PokemonForm.Hatterene],
);
new class HattereneGmaxVariety extends Variety {}(
  PokemonVariety.HattereneGmax,
  PokemonSpecies.Hatterene,
  [PokemonForm.HattereneGmax],
);
new class ImpidimpVariety extends Variety {}(
  PokemonVariety.Impidimp,
  PokemonSpecies.Impidimp,
  [PokemonForm.Impidimp],
);
new class MorgremVariety extends Variety {}(
  PokemonVariety.Morgrem,
  PokemonSpecies.Morgrem,
  [PokemonForm.Morgrem],
);
new class GrimmsnarlVariety extends Variety {}(
  PokemonVariety.Grimmsnarl,
  PokemonSpecies.Grimmsnarl,
  [PokemonForm.Grimmsnarl],
);
new class GrimmsnarlGmaxVariety extends Variety {}(
  PokemonVariety.GrimmsnarlGmax,
  PokemonSpecies.Grimmsnarl,
  [PokemonForm.GrimmsnarlGmax],
);
new class ObstagoonVariety extends Variety {}(
  PokemonVariety.Obstagoon,
  PokemonSpecies.Obstagoon,
  [PokemonForm.Obstagoon],
);
new class PerrserkerVariety extends Variety {}(
  PokemonVariety.Perrserker,
  PokemonSpecies.Perrserker,
  [PokemonForm.Perrserker],
);
new class CursolaVariety extends Variety {}(
  PokemonVariety.Cursola,
  PokemonSpecies.Cursola,
  [PokemonForm.Cursola],
);
new class SirfetchdVariety extends Variety {}(
  PokemonVariety.Sirfetchd,
  PokemonSpecies.Sirfetchd,
  [PokemonForm.Sirfetchd],
);
new class MrRimeVariety extends Variety {}(
  PokemonVariety.MrRime,
  PokemonSpecies.MrRime,
  [PokemonForm.MrRime],
);
new class RunerigusVariety extends Variety {}(
  PokemonVariety.Runerigus,
  PokemonSpecies.Runerigus,
  [PokemonForm.Runerigus],
);
new class MilceryVariety extends Variety {}(
  PokemonVariety.Milcery,
  PokemonSpecies.Milcery,
  [PokemonForm.Milcery],
);
new class AlcremieVariety extends Variety {}(
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  [PokemonForm.AlcremieVanillaCream, PokemonForm.AlcremieRubyCream, PokemonForm.AlcremieMatchaCream, PokemonForm.AlcremieMintCream, PokemonForm.AlcremieLemonCream, PokemonForm.AlcremieSaltedCream, PokemonForm.AlcremieRubySwirl, PokemonForm.AlcremieCaramelSwirl, PokemonForm.AlcremieRainbowSwirl],
);
new class AlcremieGmaxVariety extends Variety {}(
  PokemonVariety.AlcremieGmax,
  PokemonSpecies.Alcremie,
  [PokemonForm.AlcremieGmax],
);
new class FalinksVariety extends Variety {}(
  PokemonVariety.Falinks,
  PokemonSpecies.Falinks,
  [PokemonForm.Falinks],
);
new class PincurchinVariety extends Variety {}(
  PokemonVariety.Pincurchin,
  PokemonSpecies.Pincurchin,
  [PokemonForm.Pincurchin],
);
new class SnomVariety extends Variety {}(
  PokemonVariety.Snom,
  PokemonSpecies.Snom,
  [PokemonForm.Snom],
);
new class FrosmothVariety extends Variety {}(
  PokemonVariety.Frosmoth,
  PokemonSpecies.Frosmoth,
  [PokemonForm.Frosmoth],
);
new class StonjournerVariety extends Variety {}(
  PokemonVariety.Stonjourner,
  PokemonSpecies.Stonjourner,
  [PokemonForm.Stonjourner],
);
new class EiscueIceVariety extends Variety {}(
  PokemonVariety.EiscueIce,
  PokemonSpecies.Eiscue,
  [PokemonForm.EiscueIce],
);
new class EiscueNoiceVariety extends Variety {}(
  PokemonVariety.EiscueNoice,
  PokemonSpecies.Eiscue,
  [PokemonForm.EiscueNoice],
);
new class IndeedeeMaleVariety extends Variety {}(
  PokemonVariety.IndeedeeMale,
  PokemonSpecies.Indeedee,
  [PokemonForm.IndeedeeMale],
);
new class IndeedeeFemaleVariety extends Variety {}(
  PokemonVariety.IndeedeeFemale,
  PokemonSpecies.Indeedee,
  [PokemonForm.IndeedeeFemale],
);
new class MorpekoFullBellyVariety extends Variety {}(
  PokemonVariety.MorpekoFullBelly,
  PokemonSpecies.Morpeko,
  [PokemonForm.MorpekoFullBelly],
);
new class MorpekoHangryVariety extends Variety {}(
  PokemonVariety.MorpekoHangry,
  PokemonSpecies.Morpeko,
  [PokemonForm.MorpekoHangry],
);
new class CufantVariety extends Variety {}(
  PokemonVariety.Cufant,
  PokemonSpecies.Cufant,
  [PokemonForm.Cufant],
);
new class CopperajahVariety extends Variety {}(
  PokemonVariety.Copperajah,
  PokemonSpecies.Copperajah,
  [PokemonForm.Copperajah],
);
new class CopperajahGmaxVariety extends Variety {}(
  PokemonVariety.CopperajahGmax,
  PokemonSpecies.Copperajah,
  [PokemonForm.CopperajahGmax],
);
new class DracozoltVariety extends Variety {}(
  PokemonVariety.Dracozolt,
  PokemonSpecies.Dracozolt,
  [PokemonForm.Dracozolt],
);
new class ArctozoltVariety extends Variety {}(
  PokemonVariety.Arctozolt,
  PokemonSpecies.Arctozolt,
  [PokemonForm.Arctozolt],
);
new class DracovishVariety extends Variety {}(
  PokemonVariety.Dracovish,
  PokemonSpecies.Dracovish,
  [PokemonForm.Dracovish],
);
new class ArctovishVariety extends Variety {}(
  PokemonVariety.Arctovish,
  PokemonSpecies.Arctovish,
  [PokemonForm.Arctovish],
);
new class DuraludonVariety extends Variety {}(
  PokemonVariety.Duraludon,
  PokemonSpecies.Duraludon,
  [PokemonForm.Duraludon],
);
new class DuraludonGmaxVariety extends Variety {}(
  PokemonVariety.DuraludonGmax,
  PokemonSpecies.Duraludon,
  [PokemonForm.DuraludonGmax],
);
new class DreepyVariety extends Variety {}(
  PokemonVariety.Dreepy,
  PokemonSpecies.Dreepy,
  [PokemonForm.Dreepy],
);
new class DrakloakVariety extends Variety {}(
  PokemonVariety.Drakloak,
  PokemonSpecies.Drakloak,
  [PokemonForm.Drakloak],
);
new class DragapultVariety extends Variety {}(
  PokemonVariety.Dragapult,
  PokemonSpecies.Dragapult,
  [PokemonForm.Dragapult],
);
new class ZacianVariety extends Variety {}(
  PokemonVariety.Zacian,
  PokemonSpecies.Zacian,
  [PokemonForm.Zacian],
);
new class ZacianCrownedVariety extends Variety {}(
  PokemonVariety.ZacianCrowned,
  PokemonSpecies.Zacian,
  [PokemonForm.ZacianCrowned],
);
new class ZamazentaVariety extends Variety {}(
  PokemonVariety.Zamazenta,
  PokemonSpecies.Zamazenta,
  [PokemonForm.Zamazenta],
);
new class ZamazentaCrownedVariety extends Variety {}(
  PokemonVariety.ZamazentaCrowned,
  PokemonSpecies.Zamazenta,
  [PokemonForm.ZamazentaCrowned],
);
new class EternatusVariety extends Variety {}(
  PokemonVariety.Eternatus,
  PokemonSpecies.Eternatus,
  [PokemonForm.Eternatus],
);
new class EternatusEternamaxVariety extends Variety {}(
  PokemonVariety.EternatusEternamax,
  PokemonSpecies.Eternatus,
  [PokemonForm.EternatusEternamax],
);
new class KubfuVariety extends Variety {}(
  PokemonVariety.Kubfu,
  PokemonSpecies.Kubfu,
  [PokemonForm.Kubfu],
);
new class UrshifuSingleStrikeVariety extends Variety {}(
  PokemonVariety.UrshifuSingleStrike,
  PokemonSpecies.Urshifu,
  [PokemonForm.UrshifuSingleStrike],
);
new class UrshifuRapidStrikeVariety extends Variety {}(
  PokemonVariety.UrshifuRapidStrike,
  PokemonSpecies.Urshifu,
  [PokemonForm.UrshifuRapidStrike],
);
new class UrshifuSingleStrikeGmaxVariety extends Variety {}(
  PokemonVariety.UrshifuSingleStrikeGmax,
  PokemonSpecies.Urshifu,
  [PokemonForm.UrshifuSingleStrikeGmax],
);
new class UrshifuRapidStrikeGmaxVariety extends Variety {}(
  PokemonVariety.UrshifuRapidStrikeGmax,
  PokemonSpecies.Urshifu,
  [PokemonForm.UrshifuRapidStrikeGmax],
);
new class ZarudeVariety extends Variety {}(
  PokemonVariety.Zarude,
  PokemonSpecies.Zarude,
  [PokemonForm.Zarude],
);
new class ZarudeDadaVariety extends Variety {}(
  PokemonVariety.ZarudeDada,
  PokemonSpecies.Zarude,
  [PokemonForm.ZarudeDada],
);
new class RegielekiVariety extends Variety {}(
  PokemonVariety.Regieleki,
  PokemonSpecies.Regieleki,
  [PokemonForm.Regieleki],
);
new class RegidragoVariety extends Variety {}(
  PokemonVariety.Regidrago,
  PokemonSpecies.Regidrago,
  [PokemonForm.Regidrago],
);
new class GlastrierVariety extends Variety {}(
  PokemonVariety.Glastrier,
  PokemonSpecies.Glastrier,
  [PokemonForm.Glastrier],
);
new class SpectrierVariety extends Variety {}(
  PokemonVariety.Spectrier,
  PokemonSpecies.Spectrier,
  [PokemonForm.Spectrier],
);
new class CalyrexVariety extends Variety {}(
  PokemonVariety.Calyrex,
  PokemonSpecies.Calyrex,
  [PokemonForm.Calyrex],
);
new class CalyrexIceVariety extends Variety {}(
  PokemonVariety.CalyrexIce,
  PokemonSpecies.Calyrex,
  [PokemonForm.CalyrexIce],
);
new class CalyrexShadowVariety extends Variety {}(
  PokemonVariety.CalyrexShadow,
  PokemonSpecies.Calyrex,
  [PokemonForm.CalyrexShadow],
);
new class WyrdeerVariety extends Variety {}(
  PokemonVariety.Wyrdeer,
  PokemonSpecies.Wyrdeer,
  [PokemonForm.Wyrdeer],
);
new class KleavorVariety extends Variety {}(
  PokemonVariety.Kleavor,
  PokemonSpecies.Kleavor,
  [PokemonForm.Kleavor],
);
new class UrsalunaVariety extends Variety {}(
  PokemonVariety.Ursaluna,
  PokemonSpecies.Ursaluna,
  [PokemonForm.Ursaluna],
);
new class UrsalunaBloodmoonVariety extends Variety {}(
  PokemonVariety.UrsalunaBloodmoon,
  PokemonSpecies.Ursaluna,
  [PokemonForm.UrsalunaBloodmoon],
);
new class BasculegionMaleVariety extends Variety {}(
  PokemonVariety.BasculegionMale,
  PokemonSpecies.Basculegion,
  [PokemonForm.BasculegionMale],
);
new class BasculegionFemaleVariety extends Variety {}(
  PokemonVariety.BasculegionFemale,
  PokemonSpecies.Basculegion,
  [PokemonForm.BasculegionFemale],
);
new class SneaslerVariety extends Variety {}(
  PokemonVariety.Sneasler,
  PokemonSpecies.Sneasler,
  [PokemonForm.Sneasler],
);
new class OverqwilVariety extends Variety {}(
  PokemonVariety.Overqwil,
  PokemonSpecies.Overqwil,
  [PokemonForm.Overqwil],
);
new class EnamorusIncarnateVariety extends Variety {}(
  PokemonVariety.EnamorusIncarnate,
  PokemonSpecies.Enamorus,
  [PokemonForm.EnamorusIncarnate],
);
new class EnamorusTherianVariety extends Variety {}(
  PokemonVariety.EnamorusTherian,
  PokemonSpecies.Enamorus,
  [PokemonForm.EnamorusTherian],
);
new class SprigatitoVariety extends Variety {}(
  PokemonVariety.Sprigatito,
  PokemonSpecies.Sprigatito,
  [PokemonForm.Sprigatito],
);
new class FloragatoVariety extends Variety {}(
  PokemonVariety.Floragato,
  PokemonSpecies.Floragato,
  [PokemonForm.Floragato],
);
new class MeowscaradaVariety extends Variety {}(
  PokemonVariety.Meowscarada,
  PokemonSpecies.Meowscarada,
  [PokemonForm.Meowscarada],
);
new class FuecocoVariety extends Variety {}(
  PokemonVariety.Fuecoco,
  PokemonSpecies.Fuecoco,
  [PokemonForm.Fuecoco],
);
new class CrocalorVariety extends Variety {}(
  PokemonVariety.Crocalor,
  PokemonSpecies.Crocalor,
  [PokemonForm.Crocalor],
);
new class SkeledirgeVariety extends Variety {}(
  PokemonVariety.Skeledirge,
  PokemonSpecies.Skeledirge,
  [PokemonForm.Skeledirge],
);
new class QuaxlyVariety extends Variety {}(
  PokemonVariety.Quaxly,
  PokemonSpecies.Quaxly,
  [PokemonForm.Quaxly],
);
new class QuaxwellVariety extends Variety {}(
  PokemonVariety.Quaxwell,
  PokemonSpecies.Quaxwell,
  [PokemonForm.Quaxwell],
);
new class QuaquavalVariety extends Variety {}(
  PokemonVariety.Quaquaval,
  PokemonSpecies.Quaquaval,
  [PokemonForm.Quaquaval],
);
new class LechonkVariety extends Variety {}(
  PokemonVariety.Lechonk,
  PokemonSpecies.Lechonk,
  [PokemonForm.Lechonk],
);
new class OinkologneVariety extends Variety {}(
  PokemonVariety.Oinkologne,
  PokemonSpecies.Oinkologne,
  [PokemonForm.Oinkologne],
);
new class OinkologneFemaleVariety extends Variety {}(
  PokemonVariety.OinkologneFemale,
  PokemonSpecies.Oinkologne,
  [PokemonForm.OinkologneFemale],
);
new class TarountulaVariety extends Variety {}(
  PokemonVariety.Tarountula,
  PokemonSpecies.Tarountula,
  [PokemonForm.Tarountula],
);
new class SpidopsVariety extends Variety {}(
  PokemonVariety.Spidops,
  PokemonSpecies.Spidops,
  [PokemonForm.Spidops],
);
new class NymbleVariety extends Variety {}(
  PokemonVariety.Nymble,
  PokemonSpecies.Nymble,
  [PokemonForm.Nymble],
);
new class LokixVariety extends Variety {}(
  PokemonVariety.Lokix,
  PokemonSpecies.Lokix,
  [PokemonForm.Lokix],
);
new class PawmiVariety extends Variety {}(
  PokemonVariety.Pawmi,
  PokemonSpecies.Pawmi,
  [PokemonForm.Pawmi],
);
new class PawmoVariety extends Variety {}(
  PokemonVariety.Pawmo,
  PokemonSpecies.Pawmo,
  [PokemonForm.Pawmo],
);
new class PawmotVariety extends Variety {}(
  PokemonVariety.Pawmot,
  PokemonSpecies.Pawmot,
  [PokemonForm.Pawmot],
);
new class TandemausVariety extends Variety {}(
  PokemonVariety.Tandemaus,
  PokemonSpecies.Tandemaus,
  [PokemonForm.Tandemaus],
);
new class MausholdVariety extends Variety {}(
  PokemonVariety.Maushold,
  PokemonSpecies.Maushold,
  [PokemonForm.MausholdFamilyOfFour],
);
new class MausholdFamilyOfThreeVariety extends Variety {}(
  PokemonVariety.MausholdFamilyOfThree,
  PokemonSpecies.Maushold,
  [PokemonForm.MausholdFamilyOfThree],
);
new class FidoughVariety extends Variety {}(
  PokemonVariety.Fidough,
  PokemonSpecies.Fidough,
  [PokemonForm.Fidough],
);
new class DachsbunVariety extends Variety {}(
  PokemonVariety.Dachsbun,
  PokemonSpecies.Dachsbun,
  [PokemonForm.Dachsbun],
);
new class SmolivVariety extends Variety {}(
  PokemonVariety.Smoliv,
  PokemonSpecies.Smoliv,
  [PokemonForm.Smoliv],
);
new class DollivVariety extends Variety {}(
  PokemonVariety.Dolliv,
  PokemonSpecies.Dolliv,
  [PokemonForm.Dolliv],
);
new class ArbolivaVariety extends Variety {}(
  PokemonVariety.Arboliva,
  PokemonSpecies.Arboliva,
  [PokemonForm.Arboliva],
);
new class SquawkabillyVariety extends Variety {}(
  PokemonVariety.Squawkabilly,
  PokemonSpecies.Squawkabilly,
  [PokemonForm.SquawkabillyGreenPlumage],
);
new class SquawkabillyBluePlumageVariety extends Variety {}(
  PokemonVariety.SquawkabillyBluePlumage,
  PokemonSpecies.Squawkabilly,
  [PokemonForm.SquawkabillyBluePlumage],
);
new class SquawkabillyYellowPlumageVariety extends Variety {}(
  PokemonVariety.SquawkabillyYellowPlumage,
  PokemonSpecies.Squawkabilly,
  [PokemonForm.SquawkabillyYellowPlumage],
);
new class SquawkabillyWhitePlumageVariety extends Variety {}(
  PokemonVariety.SquawkabillyWhitePlumage,
  PokemonSpecies.Squawkabilly,
  [PokemonForm.SquawkabillyWhitePlumage],
);
new class NacliVariety extends Variety {}(
  PokemonVariety.Nacli,
  PokemonSpecies.Nacli,
  [PokemonForm.Nacli],
);
new class NaclstackVariety extends Variety {}(
  PokemonVariety.Naclstack,
  PokemonSpecies.Naclstack,
  [PokemonForm.Naclstack],
);
new class GarganaclVariety extends Variety {}(
  PokemonVariety.Garganacl,
  PokemonSpecies.Garganacl,
  [PokemonForm.Garganacl],
);
new class CharcadetVariety extends Variety {}(
  PokemonVariety.Charcadet,
  PokemonSpecies.Charcadet,
  [PokemonForm.Charcadet],
);
new class ArmarougeVariety extends Variety {}(
  PokemonVariety.Armarouge,
  PokemonSpecies.Armarouge,
  [PokemonForm.Armarouge],
);
new class CeruledgeVariety extends Variety {}(
  PokemonVariety.Ceruledge,
  PokemonSpecies.Ceruledge,
  [PokemonForm.Ceruledge],
);
new class TadbulbVariety extends Variety {}(
  PokemonVariety.Tadbulb,
  PokemonSpecies.Tadbulb,
  [PokemonForm.Tadbulb],
);
new class BelliboltVariety extends Variety {}(
  PokemonVariety.Bellibolt,
  PokemonSpecies.Bellibolt,
  [PokemonForm.Bellibolt],
);
new class WattrelVariety extends Variety {}(
  PokemonVariety.Wattrel,
  PokemonSpecies.Wattrel,
  [PokemonForm.Wattrel],
);
new class KilowattrelVariety extends Variety {}(
  PokemonVariety.Kilowattrel,
  PokemonSpecies.Kilowattrel,
  [PokemonForm.Kilowattrel],
);
new class MaschiffVariety extends Variety {}(
  PokemonVariety.Maschiff,
  PokemonSpecies.Maschiff,
  [PokemonForm.Maschiff],
);
new class MabosstiffVariety extends Variety {}(
  PokemonVariety.Mabosstiff,
  PokemonSpecies.Mabosstiff,
  [PokemonForm.Mabosstiff],
);
new class ShroodleVariety extends Variety {}(
  PokemonVariety.Shroodle,
  PokemonSpecies.Shroodle,
  [PokemonForm.Shroodle],
);
new class GrafaiaiVariety extends Variety {}(
  PokemonVariety.Grafaiai,
  PokemonSpecies.Grafaiai,
  [PokemonForm.Grafaiai],
);
new class BramblinVariety extends Variety {}(
  PokemonVariety.Bramblin,
  PokemonSpecies.Bramblin,
  [PokemonForm.Bramblin],
);
new class BrambleghastVariety extends Variety {}(
  PokemonVariety.Brambleghast,
  PokemonSpecies.Brambleghast,
  [PokemonForm.Brambleghast],
);
new class ToedscoolVariety extends Variety {}(
  PokemonVariety.Toedscool,
  PokemonSpecies.Toedscool,
  [PokemonForm.Toedscool],
);
new class ToedscruelVariety extends Variety {}(
  PokemonVariety.Toedscruel,
  PokemonSpecies.Toedscruel,
  [PokemonForm.Toedscruel],
);
new class KlawfVariety extends Variety {}(
  PokemonVariety.Klawf,
  PokemonSpecies.Klawf,
  [PokemonForm.Klawf],
);
new class CapsakidVariety extends Variety {}(
  PokemonVariety.Capsakid,
  PokemonSpecies.Capsakid,
  [PokemonForm.Capsakid],
);
new class ScovillainVariety extends Variety {}(
  PokemonVariety.Scovillain,
  PokemonSpecies.Scovillain,
  [PokemonForm.Scovillain],
);
new class RellorVariety extends Variety {}(
  PokemonVariety.Rellor,
  PokemonSpecies.Rellor,
  [PokemonForm.Rellor],
);
new class RabscaVariety extends Variety {}(
  PokemonVariety.Rabsca,
  PokemonSpecies.Rabsca,
  [PokemonForm.Rabsca],
);
new class FlittleVariety extends Variety {}(
  PokemonVariety.Flittle,
  PokemonSpecies.Flittle,
  [PokemonForm.Flittle],
);
new class EspathraVariety extends Variety {}(
  PokemonVariety.Espathra,
  PokemonSpecies.Espathra,
  [PokemonForm.Espathra],
);
new class TinkatinkVariety extends Variety {}(
  PokemonVariety.Tinkatink,
  PokemonSpecies.Tinkatink,
  [PokemonForm.Tinkatink],
);
new class TinkatuffVariety extends Variety {}(
  PokemonVariety.Tinkatuff,
  PokemonSpecies.Tinkatuff,
  [PokemonForm.Tinkatuff],
);
new class TinkatonVariety extends Variety {}(
  PokemonVariety.Tinkaton,
  PokemonSpecies.Tinkaton,
  [PokemonForm.Tinkaton],
);
new class WiglettVariety extends Variety {}(
  PokemonVariety.Wiglett,
  PokemonSpecies.Wiglett,
  [PokemonForm.Wiglett],
);
new class WugtrioVariety extends Variety {}(
  PokemonVariety.Wugtrio,
  PokemonSpecies.Wugtrio,
  [PokemonForm.Wugtrio],
);
new class BombirdierVariety extends Variety {}(
  PokemonVariety.Bombirdier,
  PokemonSpecies.Bombirdier,
  [PokemonForm.Bombirdier],
);
new class FinizenVariety extends Variety {}(
  PokemonVariety.Finizen,
  PokemonSpecies.Finizen,
  [PokemonForm.Finizen],
);
new class PalafinVariety extends Variety {}(
  PokemonVariety.Palafin,
  PokemonSpecies.Palafin,
  [PokemonForm.PalafinZero],
);
new class PalafinHeroVariety extends Variety {}(
  PokemonVariety.PalafinHero,
  PokemonSpecies.Palafin,
  [PokemonForm.PalafinHero],
);
new class VaroomVariety extends Variety {}(
  PokemonVariety.Varoom,
  PokemonSpecies.Varoom,
  [PokemonForm.Varoom],
);
new class RevavroomVariety extends Variety {}(
  PokemonVariety.Revavroom,
  PokemonSpecies.Revavroom,
  [PokemonForm.Revavroom],
);
new class CyclizarVariety extends Variety {}(
  PokemonVariety.Cyclizar,
  PokemonSpecies.Cyclizar,
  [PokemonForm.Cyclizar],
);
new class OrthwormVariety extends Variety {}(
  PokemonVariety.Orthworm,
  PokemonSpecies.Orthworm,
  [PokemonForm.Orthworm],
);
new class GlimmetVariety extends Variety {}(
  PokemonVariety.Glimmet,
  PokemonSpecies.Glimmet,
  [PokemonForm.Glimmet],
);
new class GlimmoraVariety extends Variety {}(
  PokemonVariety.Glimmora,
  PokemonSpecies.Glimmora,
  [PokemonForm.Glimmora],
);
new class GreavardVariety extends Variety {}(
  PokemonVariety.Greavard,
  PokemonSpecies.Greavard,
  [PokemonForm.Greavard],
);
new class HoundstoneVariety extends Variety {}(
  PokemonVariety.Houndstone,
  PokemonSpecies.Houndstone,
  [PokemonForm.Houndstone],
);
new class FlamigoVariety extends Variety {}(
  PokemonVariety.Flamigo,
  PokemonSpecies.Flamigo,
  [PokemonForm.Flamigo],
);
new class CetoddleVariety extends Variety {}(
  PokemonVariety.Cetoddle,
  PokemonSpecies.Cetoddle,
  [PokemonForm.Cetoddle],
);
new class CetitanVariety extends Variety {}(
  PokemonVariety.Cetitan,
  PokemonSpecies.Cetitan,
  [PokemonForm.Cetitan],
);
new class VeluzaVariety extends Variety {}(
  PokemonVariety.Veluza,
  PokemonSpecies.Veluza,
  [PokemonForm.Veluza],
);
new class DondozoVariety extends Variety {}(
  PokemonVariety.Dondozo,
  PokemonSpecies.Dondozo,
  [PokemonForm.Dondozo],
);
new class TatsugiriVariety extends Variety {}(
  PokemonVariety.Tatsugiri,
  PokemonSpecies.Tatsugiri,
  [PokemonForm.TatsugiriCurly],
);
new class TatsugiriDroopyVariety extends Variety {}(
  PokemonVariety.TatsugiriDroopy,
  PokemonSpecies.Tatsugiri,
  [PokemonForm.TatsugiriDroopy],
);
new class TatsugiriStretchyVariety extends Variety {}(
  PokemonVariety.TatsugiriStretchy,
  PokemonSpecies.Tatsugiri,
  [PokemonForm.TatsugiriStretchy],
);
new class AnnihilapeVariety extends Variety {}(
  PokemonVariety.Annihilape,
  PokemonSpecies.Annihilape,
  [PokemonForm.Annihilape],
);
new class ClodsireVariety extends Variety {}(
  PokemonVariety.Clodsire,
  PokemonSpecies.Clodsire,
  [PokemonForm.Clodsire],
);
new class FarigirafVariety extends Variety {}(
  PokemonVariety.Farigiraf,
  PokemonSpecies.Farigiraf,
  [PokemonForm.Farigiraf],
);
new class DudunsparceVariety extends Variety {}(
  PokemonVariety.Dudunsparce,
  PokemonSpecies.Dudunsparce,
  [PokemonForm.DudunsparceTwoSegment],
);
new class DudunsparceThreeSegmentVariety extends Variety {}(
  PokemonVariety.DudunsparceThreeSegment,
  PokemonSpecies.Dudunsparce,
  [PokemonForm.DudunsparceThreeSegment],
);
new class KingambitVariety extends Variety {}(
  PokemonVariety.Kingambit,
  PokemonSpecies.Kingambit,
  [PokemonForm.Kingambit],
);
new class GreatTuskVariety extends Variety {}(
  PokemonVariety.GreatTusk,
  PokemonSpecies.GreatTusk,
  [PokemonForm.GreatTusk],
);
new class ScreamTailVariety extends Variety {}(
  PokemonVariety.ScreamTail,
  PokemonSpecies.ScreamTail,
  [PokemonForm.ScreamTail],
);
new class BruteBonnetVariety extends Variety {}(
  PokemonVariety.BruteBonnet,
  PokemonSpecies.BruteBonnet,
  [PokemonForm.BruteBonnet],
);
new class FlutterManeVariety extends Variety {}(
  PokemonVariety.FlutterMane,
  PokemonSpecies.FlutterMane,
  [PokemonForm.FlutterMane],
);
new class SlitherWingVariety extends Variety {}(
  PokemonVariety.SlitherWing,
  PokemonSpecies.SlitherWing,
  [PokemonForm.SlitherWing],
);
new class SandyShocksVariety extends Variety {}(
  PokemonVariety.SandyShocks,
  PokemonSpecies.SandyShocks,
  [PokemonForm.SandyShocks],
);
new class IronTreadsVariety extends Variety {}(
  PokemonVariety.IronTreads,
  PokemonSpecies.IronTreads,
  [PokemonForm.IronTreads],
);
new class IronBundleVariety extends Variety {}(
  PokemonVariety.IronBundle,
  PokemonSpecies.IronBundle,
  [PokemonForm.IronBundle],
);
new class IronHandsVariety extends Variety {}(
  PokemonVariety.IronHands,
  PokemonSpecies.IronHands,
  [PokemonForm.IronHands],
);
new class IronJugulisVariety extends Variety {}(
  PokemonVariety.IronJugulis,
  PokemonSpecies.IronJugulis,
  [PokemonForm.IronJugulis],
);
new class IronMothVariety extends Variety {}(
  PokemonVariety.IronMoth,
  PokemonSpecies.IronMoth,
  [PokemonForm.IronMoth],
);
new class IronThornsVariety extends Variety {}(
  PokemonVariety.IronThorns,
  PokemonSpecies.IronThorns,
  [PokemonForm.IronThorns],
);
new class FrigibaxVariety extends Variety {}(
  PokemonVariety.Frigibax,
  PokemonSpecies.Frigibax,
  [PokemonForm.Frigibax],
);
new class ArctibaxVariety extends Variety {}(
  PokemonVariety.Arctibax,
  PokemonSpecies.Arctibax,
  [PokemonForm.Arctibax],
);
new class BaxcaliburVariety extends Variety {}(
  PokemonVariety.Baxcalibur,
  PokemonSpecies.Baxcalibur,
  [PokemonForm.Baxcalibur],
);
new class GimmighoulVariety extends Variety {}(
  PokemonVariety.Gimmighoul,
  PokemonSpecies.Gimmighoul,
  [PokemonForm.GimmighoulChest],
);
new class GimmighoulRoamingVariety extends Variety {}(
  PokemonVariety.GimmighoulRoaming,
  PokemonSpecies.Gimmighoul,
  [PokemonForm.GimmighoulRoaming],
);
new class GholdengoVariety extends Variety {}(
  PokemonVariety.Gholdengo,
  PokemonSpecies.Gholdengo,
  [PokemonForm.Gholdengo],
);
new class WoChienVariety extends Variety {}(
  PokemonVariety.WoChien,
  PokemonSpecies.WoChien,
  [PokemonForm.WoChien],
);
new class ChienPaoVariety extends Variety {}(
  PokemonVariety.ChienPao,
  PokemonSpecies.ChienPao,
  [PokemonForm.ChienPao],
);
new class TingLuVariety extends Variety {}(
  PokemonVariety.TingLu,
  PokemonSpecies.TingLu,
  [PokemonForm.TingLu],
);
new class ChiYuVariety extends Variety {}(
  PokemonVariety.ChiYu,
  PokemonSpecies.ChiYu,
  [PokemonForm.ChiYu],
);
new class RoaringMoonVariety extends Variety {}(
  PokemonVariety.RoaringMoon,
  PokemonSpecies.RoaringMoon,
  [PokemonForm.RoaringMoon],
);
new class IronValiantVariety extends Variety {}(
  PokemonVariety.IronValiant,
  PokemonSpecies.IronValiant,
  [PokemonForm.IronValiant],
);
new class KoraidonVariety extends Variety {}(
  PokemonVariety.Koraidon,
  PokemonSpecies.Koraidon,
  [PokemonForm.KoraidonApexBuild],
);
new class KoraidonLimitedBuildVariety extends Variety {}(
  PokemonVariety.KoraidonLimitedBuild,
  PokemonSpecies.Koraidon,
  [PokemonForm.KoraidonLimitedBuild],
);
new class KoraidonSprintingBuildVariety extends Variety {}(
  PokemonVariety.KoraidonSprintingBuild,
  PokemonSpecies.Koraidon,
  [PokemonForm.KoraidonSprintingBuild],
);
new class KoraidonSwimmingBuildVariety extends Variety {}(
  PokemonVariety.KoraidonSwimmingBuild,
  PokemonSpecies.Koraidon,
  [PokemonForm.KoraidonSwimmingBuild],
);
new class KoraidonGlidingBuildVariety extends Variety {}(
  PokemonVariety.KoraidonGlidingBuild,
  PokemonSpecies.Koraidon,
  [PokemonForm.KoraidonGlidingBuild],
);
new class MiraidonVariety extends Variety {}(
  PokemonVariety.Miraidon,
  PokemonSpecies.Miraidon,
  [PokemonForm.MiraidonUltimateMode],
);
new class MiraidonLowPowerModeVariety extends Variety {}(
  PokemonVariety.MiraidonLowPowerMode,
  PokemonSpecies.Miraidon,
  [PokemonForm.MiraidonLowPowerMode],
);
new class MiraidonDriveModeVariety extends Variety {}(
  PokemonVariety.MiraidonDriveMode,
  PokemonSpecies.Miraidon,
  [PokemonForm.MiraidonDriveMode],
);
new class MiraidonAquaticModeVariety extends Variety {}(
  PokemonVariety.MiraidonAquaticMode,
  PokemonSpecies.Miraidon,
  [PokemonForm.MiraidonAquaticMode],
);
new class MiraidonGlideModeVariety extends Variety {}(
  PokemonVariety.MiraidonGlideMode,
  PokemonSpecies.Miraidon,
  [PokemonForm.MiraidonGlideMode],
);
new class WalkingWakeVariety extends Variety {}(
  PokemonVariety.WalkingWake,
  PokemonSpecies.WalkingWake,
  [PokemonForm.WalkingWake],
);
new class IronLeavesVariety extends Variety {}(
  PokemonVariety.IronLeaves,
  PokemonSpecies.IronLeaves,
  [PokemonForm.IronLeaves],
);
new class DipplinVariety extends Variety {}(
  PokemonVariety.Dipplin,
  PokemonSpecies.Dipplin,
  [PokemonForm.Dipplin],
);
new class PoltchageistVariety extends Variety {}(
  PokemonVariety.Poltchageist,
  PokemonSpecies.Poltchageist,
  [PokemonForm.PoltchageistCounterfeit, PokemonForm.PoltchageistArtisan],
);
new class SinistchaVariety extends Variety {}(
  PokemonVariety.Sinistcha,
  PokemonSpecies.Sinistcha,
  [PokemonForm.SinistchaUnremarkable, PokemonForm.SinistchaMasterpiece],
);
new class OkidogiVariety extends Variety {}(
  PokemonVariety.Okidogi,
  PokemonSpecies.Okidogi,
  [PokemonForm.Okidogi],
);
new class MunkidoriVariety extends Variety {}(
  PokemonVariety.Munkidori,
  PokemonSpecies.Munkidori,
  [PokemonForm.Munkidori],
);
new class FezandipitiVariety extends Variety {}(
  PokemonVariety.Fezandipiti,
  PokemonSpecies.Fezandipiti,
  [PokemonForm.Fezandipiti],
);
new class OgerponVariety extends Variety {}(
  PokemonVariety.Ogerpon,
  PokemonSpecies.Ogerpon,
  [PokemonForm.Ogerpon],
);
new class OgerponWellspringMaskVariety extends Variety {}(
  PokemonVariety.OgerponWellspringMask,
  PokemonSpecies.Ogerpon,
  [PokemonForm.OgerponWellspringMask],
);
new class OgerponHearthflameMaskVariety extends Variety {}(
  PokemonVariety.OgerponHearthflameMask,
  PokemonSpecies.Ogerpon,
  [PokemonForm.OgerponHearthflameMask],
);
new class OgerponCornerstoneMaskVariety extends Variety {}(
  PokemonVariety.OgerponCornerstoneMask,
  PokemonSpecies.Ogerpon,
  [PokemonForm.OgerponCornerstoneMask],
);
new class ArchaludonVariety extends Variety {}(
  PokemonVariety.Archaludon,
  PokemonSpecies.Archaludon,
  [PokemonForm.Archaludon],
);
new class HydrappleVariety extends Variety {}(
  PokemonVariety.Hydrapple,
  PokemonSpecies.Hydrapple,
  [PokemonForm.Hydrapple],
);
new class GougingFireVariety extends Variety {}(
  PokemonVariety.GougingFire,
  PokemonSpecies.GougingFire,
  [PokemonForm.GougingFire],
);
new class RagingBoltVariety extends Variety {}(
  PokemonVariety.RagingBolt,
  PokemonSpecies.RagingBolt,
  [PokemonForm.RagingBolt],
);
new class IronBoulderVariety extends Variety {}(
  PokemonVariety.IronBoulder,
  PokemonSpecies.IronBoulder,
  [PokemonForm.IronBoulder],
);
new class IronCrownVariety extends Variety {}(
  PokemonVariety.IronCrown,
  PokemonSpecies.IronCrown,
  [PokemonForm.IronCrown],
);
new class TerapagosVariety extends Variety {}(
  PokemonVariety.Terapagos,
  PokemonSpecies.Terapagos,
  [PokemonForm.Terapagos],
);
new class TerapagosTerastalVariety extends Variety {}(
  PokemonVariety.TerapagosTerastal,
  PokemonSpecies.Terapagos,
  [PokemonForm.TerapagosTerastal],
);
new class TerapagosStellarVariety extends Variety {}(
  PokemonVariety.TerapagosStellar,
  PokemonSpecies.Terapagos,
  [PokemonForm.TerapagosStellar],
);
new class PecharuntVariety extends Variety {}(
  PokemonVariety.Pecharunt,
  PokemonSpecies.Pecharunt,
  [PokemonForm.Pecharunt],
);