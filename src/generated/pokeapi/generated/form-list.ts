// AUTO GENERATED FILE
import { IPokemonForm } from "#pokeapi/pokemon-form.interface";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonForm } from "#pokeapi/generated/form.enum";
import { PokemonVariety } from "#pokeapi/generated/variety.enum";

export const formsList = new Map<PokemonForm, IPokemonForm>();

class Form extends IPokemonForm {
  constructor(
    form: PokemonForm,
    variety: PokemonVariety,
    species: PokemonSpecies,
  ) {
    super(form, variety, species);
    formsList.set(form, this);
  }
}

new class BulbasaurForm extends Form {}(
  PokemonForm.Bulbasaur,
  PokemonVariety.Bulbasaur,
  PokemonSpecies.Bulbasaur,
);
new class IvysaurForm extends Form {}(
  PokemonForm.Ivysaur,
  PokemonVariety.Ivysaur,
  PokemonSpecies.Ivysaur,
);
new class VenusaurForm extends Form {}(
  PokemonForm.Venusaur,
  PokemonVariety.Venusaur,
  PokemonSpecies.Venusaur,
);
new class VenusaurMegaForm extends Form {}(
  PokemonForm.VenusaurMega,
  PokemonVariety.VenusaurMega,
  PokemonSpecies.Venusaur,
);
new class VenusaurGmaxForm extends Form {}(
  PokemonForm.VenusaurGmax,
  PokemonVariety.VenusaurGmax,
  PokemonSpecies.Venusaur,
);
new class CharmanderForm extends Form {}(
  PokemonForm.Charmander,
  PokemonVariety.Charmander,
  PokemonSpecies.Charmander,
);
new class CharmeleonForm extends Form {}(
  PokemonForm.Charmeleon,
  PokemonVariety.Charmeleon,
  PokemonSpecies.Charmeleon,
);
new class CharizardForm extends Form {}(
  PokemonForm.Charizard,
  PokemonVariety.Charizard,
  PokemonSpecies.Charizard,
);
new class CharizardMegaXForm extends Form {}(
  PokemonForm.CharizardMegaX,
  PokemonVariety.CharizardMegaX,
  PokemonSpecies.Charizard,
);
new class CharizardMegaYForm extends Form {}(
  PokemonForm.CharizardMegaY,
  PokemonVariety.CharizardMegaY,
  PokemonSpecies.Charizard,
);
new class CharizardGmaxForm extends Form {}(
  PokemonForm.CharizardGmax,
  PokemonVariety.CharizardGmax,
  PokemonSpecies.Charizard,
);
new class SquirtleForm extends Form {}(
  PokemonForm.Squirtle,
  PokemonVariety.Squirtle,
  PokemonSpecies.Squirtle,
);
new class WartortleForm extends Form {}(
  PokemonForm.Wartortle,
  PokemonVariety.Wartortle,
  PokemonSpecies.Wartortle,
);
new class BlastoiseForm extends Form {}(
  PokemonForm.Blastoise,
  PokemonVariety.Blastoise,
  PokemonSpecies.Blastoise,
);
new class BlastoiseMegaForm extends Form {}(
  PokemonForm.BlastoiseMega,
  PokemonVariety.BlastoiseMega,
  PokemonSpecies.Blastoise,
);
new class BlastoiseGmaxForm extends Form {}(
  PokemonForm.BlastoiseGmax,
  PokemonVariety.BlastoiseGmax,
  PokemonSpecies.Blastoise,
);
new class CaterpieForm extends Form {}(
  PokemonForm.Caterpie,
  PokemonVariety.Caterpie,
  PokemonSpecies.Caterpie,
);
new class MetapodForm extends Form {}(
  PokemonForm.Metapod,
  PokemonVariety.Metapod,
  PokemonSpecies.Metapod,
);
new class ButterfreeForm extends Form {}(
  PokemonForm.Butterfree,
  PokemonVariety.Butterfree,
  PokemonSpecies.Butterfree,
);
new class ButterfreeGmaxForm extends Form {}(
  PokemonForm.ButterfreeGmax,
  PokemonVariety.ButterfreeGmax,
  PokemonSpecies.Butterfree,
);
new class WeedleForm extends Form {}(
  PokemonForm.Weedle,
  PokemonVariety.Weedle,
  PokemonSpecies.Weedle,
);
new class KakunaForm extends Form {}(
  PokemonForm.Kakuna,
  PokemonVariety.Kakuna,
  PokemonSpecies.Kakuna,
);
new class BeedrillForm extends Form {}(
  PokemonForm.Beedrill,
  PokemonVariety.Beedrill,
  PokemonSpecies.Beedrill,
);
new class BeedrillMegaForm extends Form {}(
  PokemonForm.BeedrillMega,
  PokemonVariety.BeedrillMega,
  PokemonSpecies.Beedrill,
);
new class PidgeyForm extends Form {}(
  PokemonForm.Pidgey,
  PokemonVariety.Pidgey,
  PokemonSpecies.Pidgey,
);
new class PidgeottoForm extends Form {}(
  PokemonForm.Pidgeotto,
  PokemonVariety.Pidgeotto,
  PokemonSpecies.Pidgeotto,
);
new class PidgeotForm extends Form {}(
  PokemonForm.Pidgeot,
  PokemonVariety.Pidgeot,
  PokemonSpecies.Pidgeot,
);
new class PidgeotMegaForm extends Form {}(
  PokemonForm.PidgeotMega,
  PokemonVariety.PidgeotMega,
  PokemonSpecies.Pidgeot,
);
new class RattataForm extends Form {}(
  PokemonForm.Rattata,
  PokemonVariety.Rattata,
  PokemonSpecies.Rattata,
);
new class RattataAlolaForm extends Form {}(
  PokemonForm.RattataAlola,
  PokemonVariety.RattataAlola,
  PokemonSpecies.Rattata,
);
new class RaticateForm extends Form {}(
  PokemonForm.Raticate,
  PokemonVariety.Raticate,
  PokemonSpecies.Raticate,
);
new class RaticateAlolaForm extends Form {}(
  PokemonForm.RaticateAlola,
  PokemonVariety.RaticateAlola,
  PokemonSpecies.Raticate,
);
new class RaticateTotemAlolaForm extends Form {}(
  PokemonForm.RaticateTotemAlola,
  PokemonVariety.RaticateTotemAlola,
  PokemonSpecies.Raticate,
);
new class SpearowForm extends Form {}(
  PokemonForm.Spearow,
  PokemonVariety.Spearow,
  PokemonSpecies.Spearow,
);
new class FearowForm extends Form {}(
  PokemonForm.Fearow,
  PokemonVariety.Fearow,
  PokemonSpecies.Fearow,
);
new class EkansForm extends Form {}(
  PokemonForm.Ekans,
  PokemonVariety.Ekans,
  PokemonSpecies.Ekans,
);
new class ArbokForm extends Form {}(
  PokemonForm.Arbok,
  PokemonVariety.Arbok,
  PokemonSpecies.Arbok,
);
new class PikachuForm extends Form {}(
  PokemonForm.Pikachu,
  PokemonVariety.Pikachu,
  PokemonSpecies.Pikachu,
);
new class PikachuRockStarForm extends Form {}(
  PokemonForm.PikachuRockStar,
  PokemonVariety.PikachuRockStar,
  PokemonSpecies.Pikachu,
);
new class PikachuBelleForm extends Form {}(
  PokemonForm.PikachuBelle,
  PokemonVariety.PikachuBelle,
  PokemonSpecies.Pikachu,
);
new class PikachuPopStarForm extends Form {}(
  PokemonForm.PikachuPopStar,
  PokemonVariety.PikachuPopStar,
  PokemonSpecies.Pikachu,
);
new class PikachuPhdForm extends Form {}(
  PokemonForm.PikachuPhd,
  PokemonVariety.PikachuPhd,
  PokemonSpecies.Pikachu,
);
new class PikachuLibreForm extends Form {}(
  PokemonForm.PikachuLibre,
  PokemonVariety.PikachuLibre,
  PokemonSpecies.Pikachu,
);
new class PikachuCosplayForm extends Form {}(
  PokemonForm.PikachuCosplay,
  PokemonVariety.PikachuCosplay,
  PokemonSpecies.Pikachu,
);
new class PikachuOriginalCapForm extends Form {}(
  PokemonForm.PikachuOriginalCap,
  PokemonVariety.PikachuOriginalCap,
  PokemonSpecies.Pikachu,
);
new class PikachuHoennCapForm extends Form {}(
  PokemonForm.PikachuHoennCap,
  PokemonVariety.PikachuHoennCap,
  PokemonSpecies.Pikachu,
);
new class PikachuSinnohCapForm extends Form {}(
  PokemonForm.PikachuSinnohCap,
  PokemonVariety.PikachuSinnohCap,
  PokemonSpecies.Pikachu,
);
new class PikachuUnovaCapForm extends Form {}(
  PokemonForm.PikachuUnovaCap,
  PokemonVariety.PikachuUnovaCap,
  PokemonSpecies.Pikachu,
);
new class PikachuKalosCapForm extends Form {}(
  PokemonForm.PikachuKalosCap,
  PokemonVariety.PikachuKalosCap,
  PokemonSpecies.Pikachu,
);
new class PikachuAlolaCapForm extends Form {}(
  PokemonForm.PikachuAlolaCap,
  PokemonVariety.PikachuAlolaCap,
  PokemonSpecies.Pikachu,
);
new class PikachuPartnerCapForm extends Form {}(
  PokemonForm.PikachuPartnerCap,
  PokemonVariety.PikachuPartnerCap,
  PokemonSpecies.Pikachu,
);
new class PikachuStarterForm extends Form {}(
  PokemonForm.PikachuStarter,
  PokemonVariety.PikachuStarter,
  PokemonSpecies.Pikachu,
);
new class PikachuWorldCapForm extends Form {}(
  PokemonForm.PikachuWorldCap,
  PokemonVariety.PikachuWorldCap,
  PokemonSpecies.Pikachu,
);
new class PikachuGmaxForm extends Form {}(
  PokemonForm.PikachuGmax,
  PokemonVariety.PikachuGmax,
  PokemonSpecies.Pikachu,
);
new class RaichuForm extends Form {}(
  PokemonForm.Raichu,
  PokemonVariety.Raichu,
  PokemonSpecies.Raichu,
);
new class RaichuAlolaForm extends Form {}(
  PokemonForm.RaichuAlola,
  PokemonVariety.RaichuAlola,
  PokemonSpecies.Raichu,
);
new class SandshrewForm extends Form {}(
  PokemonForm.Sandshrew,
  PokemonVariety.Sandshrew,
  PokemonSpecies.Sandshrew,
);
new class SandshrewAlolaForm extends Form {}(
  PokemonForm.SandshrewAlola,
  PokemonVariety.SandshrewAlola,
  PokemonSpecies.Sandshrew,
);
new class SandslashForm extends Form {}(
  PokemonForm.Sandslash,
  PokemonVariety.Sandslash,
  PokemonSpecies.Sandslash,
);
new class SandslashAlolaForm extends Form {}(
  PokemonForm.SandslashAlola,
  PokemonVariety.SandslashAlola,
  PokemonSpecies.Sandslash,
);
new class NidoranFForm extends Form {}(
  PokemonForm.NidoranF,
  PokemonVariety.NidoranF,
  PokemonSpecies.NidoranF,
);
new class NidorinaForm extends Form {}(
  PokemonForm.Nidorina,
  PokemonVariety.Nidorina,
  PokemonSpecies.Nidorina,
);
new class NidoqueenForm extends Form {}(
  PokemonForm.Nidoqueen,
  PokemonVariety.Nidoqueen,
  PokemonSpecies.Nidoqueen,
);
new class NidoranMForm extends Form {}(
  PokemonForm.NidoranM,
  PokemonVariety.NidoranM,
  PokemonSpecies.NidoranM,
);
new class NidorinoForm extends Form {}(
  PokemonForm.Nidorino,
  PokemonVariety.Nidorino,
  PokemonSpecies.Nidorino,
);
new class NidokingForm extends Form {}(
  PokemonForm.Nidoking,
  PokemonVariety.Nidoking,
  PokemonSpecies.Nidoking,
);
new class ClefairyForm extends Form {}(
  PokemonForm.Clefairy,
  PokemonVariety.Clefairy,
  PokemonSpecies.Clefairy,
);
new class ClefableForm extends Form {}(
  PokemonForm.Clefable,
  PokemonVariety.Clefable,
  PokemonSpecies.Clefable,
);
new class VulpixForm extends Form {}(
  PokemonForm.Vulpix,
  PokemonVariety.Vulpix,
  PokemonSpecies.Vulpix,
);
new class VulpixAlolaForm extends Form {}(
  PokemonForm.VulpixAlola,
  PokemonVariety.VulpixAlola,
  PokemonSpecies.Vulpix,
);
new class NinetalesForm extends Form {}(
  PokemonForm.Ninetales,
  PokemonVariety.Ninetales,
  PokemonSpecies.Ninetales,
);
new class NinetalesAlolaForm extends Form {}(
  PokemonForm.NinetalesAlola,
  PokemonVariety.NinetalesAlola,
  PokemonSpecies.Ninetales,
);
new class JigglypuffForm extends Form {}(
  PokemonForm.Jigglypuff,
  PokemonVariety.Jigglypuff,
  PokemonSpecies.Jigglypuff,
);
new class WigglytuffForm extends Form {}(
  PokemonForm.Wigglytuff,
  PokemonVariety.Wigglytuff,
  PokemonSpecies.Wigglytuff,
);
new class ZubatForm extends Form {}(
  PokemonForm.Zubat,
  PokemonVariety.Zubat,
  PokemonSpecies.Zubat,
);
new class GolbatForm extends Form {}(
  PokemonForm.Golbat,
  PokemonVariety.Golbat,
  PokemonSpecies.Golbat,
);
new class OddishForm extends Form {}(
  PokemonForm.Oddish,
  PokemonVariety.Oddish,
  PokemonSpecies.Oddish,
);
new class GloomForm extends Form {}(
  PokemonForm.Gloom,
  PokemonVariety.Gloom,
  PokemonSpecies.Gloom,
);
new class VileplumeForm extends Form {}(
  PokemonForm.Vileplume,
  PokemonVariety.Vileplume,
  PokemonSpecies.Vileplume,
);
new class ParasForm extends Form {}(
  PokemonForm.Paras,
  PokemonVariety.Paras,
  PokemonSpecies.Paras,
);
new class ParasectForm extends Form {}(
  PokemonForm.Parasect,
  PokemonVariety.Parasect,
  PokemonSpecies.Parasect,
);
new class VenonatForm extends Form {}(
  PokemonForm.Venonat,
  PokemonVariety.Venonat,
  PokemonSpecies.Venonat,
);
new class VenomothForm extends Form {}(
  PokemonForm.Venomoth,
  PokemonVariety.Venomoth,
  PokemonSpecies.Venomoth,
);
new class DiglettForm extends Form {}(
  PokemonForm.Diglett,
  PokemonVariety.Diglett,
  PokemonSpecies.Diglett,
);
new class DiglettAlolaForm extends Form {}(
  PokemonForm.DiglettAlola,
  PokemonVariety.DiglettAlola,
  PokemonSpecies.Diglett,
);
new class DugtrioForm extends Form {}(
  PokemonForm.Dugtrio,
  PokemonVariety.Dugtrio,
  PokemonSpecies.Dugtrio,
);
new class DugtrioAlolaForm extends Form {}(
  PokemonForm.DugtrioAlola,
  PokemonVariety.DugtrioAlola,
  PokemonSpecies.Dugtrio,
);
new class MeowthForm extends Form {}(
  PokemonForm.Meowth,
  PokemonVariety.Meowth,
  PokemonSpecies.Meowth,
);
new class MeowthAlolaForm extends Form {}(
  PokemonForm.MeowthAlola,
  PokemonVariety.MeowthAlola,
  PokemonSpecies.Meowth,
);
new class MeowthGalarForm extends Form {}(
  PokemonForm.MeowthGalar,
  PokemonVariety.MeowthGalar,
  PokemonSpecies.Meowth,
);
new class MeowthGmaxForm extends Form {}(
  PokemonForm.MeowthGmax,
  PokemonVariety.MeowthGmax,
  PokemonSpecies.Meowth,
);
new class PersianForm extends Form {}(
  PokemonForm.Persian,
  PokemonVariety.Persian,
  PokemonSpecies.Persian,
);
new class PersianAlolaForm extends Form {}(
  PokemonForm.PersianAlola,
  PokemonVariety.PersianAlola,
  PokemonSpecies.Persian,
);
new class PsyduckForm extends Form {}(
  PokemonForm.Psyduck,
  PokemonVariety.Psyduck,
  PokemonSpecies.Psyduck,
);
new class GolduckForm extends Form {}(
  PokemonForm.Golduck,
  PokemonVariety.Golduck,
  PokemonSpecies.Golduck,
);
new class MankeyForm extends Form {}(
  PokemonForm.Mankey,
  PokemonVariety.Mankey,
  PokemonSpecies.Mankey,
);
new class PrimeapeForm extends Form {}(
  PokemonForm.Primeape,
  PokemonVariety.Primeape,
  PokemonSpecies.Primeape,
);
new class GrowlitheForm extends Form {}(
  PokemonForm.Growlithe,
  PokemonVariety.Growlithe,
  PokemonSpecies.Growlithe,
);
new class GrowlitheHisuiForm extends Form {}(
  PokemonForm.GrowlitheHisui,
  PokemonVariety.GrowlitheHisui,
  PokemonSpecies.Growlithe,
);
new class ArcanineForm extends Form {}(
  PokemonForm.Arcanine,
  PokemonVariety.Arcanine,
  PokemonSpecies.Arcanine,
);
new class ArcanineHisuiForm extends Form {}(
  PokemonForm.ArcanineHisui,
  PokemonVariety.ArcanineHisui,
  PokemonSpecies.Arcanine,
);
new class PoliwagForm extends Form {}(
  PokemonForm.Poliwag,
  PokemonVariety.Poliwag,
  PokemonSpecies.Poliwag,
);
new class PoliwhirlForm extends Form {}(
  PokemonForm.Poliwhirl,
  PokemonVariety.Poliwhirl,
  PokemonSpecies.Poliwhirl,
);
new class PoliwrathForm extends Form {}(
  PokemonForm.Poliwrath,
  PokemonVariety.Poliwrath,
  PokemonSpecies.Poliwrath,
);
new class AbraForm extends Form {}(
  PokemonForm.Abra,
  PokemonVariety.Abra,
  PokemonSpecies.Abra,
);
new class KadabraForm extends Form {}(
  PokemonForm.Kadabra,
  PokemonVariety.Kadabra,
  PokemonSpecies.Kadabra,
);
new class AlakazamForm extends Form {}(
  PokemonForm.Alakazam,
  PokemonVariety.Alakazam,
  PokemonSpecies.Alakazam,
);
new class AlakazamMegaForm extends Form {}(
  PokemonForm.AlakazamMega,
  PokemonVariety.AlakazamMega,
  PokemonSpecies.Alakazam,
);
new class MachopForm extends Form {}(
  PokemonForm.Machop,
  PokemonVariety.Machop,
  PokemonSpecies.Machop,
);
new class MachokeForm extends Form {}(
  PokemonForm.Machoke,
  PokemonVariety.Machoke,
  PokemonSpecies.Machoke,
);
new class MachampForm extends Form {}(
  PokemonForm.Machamp,
  PokemonVariety.Machamp,
  PokemonSpecies.Machamp,
);
new class MachampGmaxForm extends Form {}(
  PokemonForm.MachampGmax,
  PokemonVariety.MachampGmax,
  PokemonSpecies.Machamp,
);
new class BellsproutForm extends Form {}(
  PokemonForm.Bellsprout,
  PokemonVariety.Bellsprout,
  PokemonSpecies.Bellsprout,
);
new class WeepinbellForm extends Form {}(
  PokemonForm.Weepinbell,
  PokemonVariety.Weepinbell,
  PokemonSpecies.Weepinbell,
);
new class VictreebelForm extends Form {}(
  PokemonForm.Victreebel,
  PokemonVariety.Victreebel,
  PokemonSpecies.Victreebel,
);
new class TentacoolForm extends Form {}(
  PokemonForm.Tentacool,
  PokemonVariety.Tentacool,
  PokemonSpecies.Tentacool,
);
new class TentacruelForm extends Form {}(
  PokemonForm.Tentacruel,
  PokemonVariety.Tentacruel,
  PokemonSpecies.Tentacruel,
);
new class GeodudeForm extends Form {}(
  PokemonForm.Geodude,
  PokemonVariety.Geodude,
  PokemonSpecies.Geodude,
);
new class GeodudeAlolaForm extends Form {}(
  PokemonForm.GeodudeAlola,
  PokemonVariety.GeodudeAlola,
  PokemonSpecies.Geodude,
);
new class GravelerForm extends Form {}(
  PokemonForm.Graveler,
  PokemonVariety.Graveler,
  PokemonSpecies.Graveler,
);
new class GravelerAlolaForm extends Form {}(
  PokemonForm.GravelerAlola,
  PokemonVariety.GravelerAlola,
  PokemonSpecies.Graveler,
);
new class GolemForm extends Form {}(
  PokemonForm.Golem,
  PokemonVariety.Golem,
  PokemonSpecies.Golem,
);
new class GolemAlolaForm extends Form {}(
  PokemonForm.GolemAlola,
  PokemonVariety.GolemAlola,
  PokemonSpecies.Golem,
);
new class PonytaForm extends Form {}(
  PokemonForm.Ponyta,
  PokemonVariety.Ponyta,
  PokemonSpecies.Ponyta,
);
new class PonytaGalarForm extends Form {}(
  PokemonForm.PonytaGalar,
  PokemonVariety.PonytaGalar,
  PokemonSpecies.Ponyta,
);
new class RapidashForm extends Form {}(
  PokemonForm.Rapidash,
  PokemonVariety.Rapidash,
  PokemonSpecies.Rapidash,
);
new class RapidashGalarForm extends Form {}(
  PokemonForm.RapidashGalar,
  PokemonVariety.RapidashGalar,
  PokemonSpecies.Rapidash,
);
new class SlowpokeForm extends Form {}(
  PokemonForm.Slowpoke,
  PokemonVariety.Slowpoke,
  PokemonSpecies.Slowpoke,
);
new class SlowpokeGalarForm extends Form {}(
  PokemonForm.SlowpokeGalar,
  PokemonVariety.SlowpokeGalar,
  PokemonSpecies.Slowpoke,
);
new class SlowbroForm extends Form {}(
  PokemonForm.Slowbro,
  PokemonVariety.Slowbro,
  PokemonSpecies.Slowbro,
);
new class SlowbroMegaForm extends Form {}(
  PokemonForm.SlowbroMega,
  PokemonVariety.SlowbroMega,
  PokemonSpecies.Slowbro,
);
new class SlowbroGalarForm extends Form {}(
  PokemonForm.SlowbroGalar,
  PokemonVariety.SlowbroGalar,
  PokemonSpecies.Slowbro,
);
new class MagnemiteForm extends Form {}(
  PokemonForm.Magnemite,
  PokemonVariety.Magnemite,
  PokemonSpecies.Magnemite,
);
new class MagnetonForm extends Form {}(
  PokemonForm.Magneton,
  PokemonVariety.Magneton,
  PokemonSpecies.Magneton,
);
new class FarfetchdForm extends Form {}(
  PokemonForm.Farfetchd,
  PokemonVariety.Farfetchd,
  PokemonSpecies.Farfetchd,
);
new class FarfetchdGalarForm extends Form {}(
  PokemonForm.FarfetchdGalar,
  PokemonVariety.FarfetchdGalar,
  PokemonSpecies.Farfetchd,
);
new class DoduoForm extends Form {}(
  PokemonForm.Doduo,
  PokemonVariety.Doduo,
  PokemonSpecies.Doduo,
);
new class DodrioForm extends Form {}(
  PokemonForm.Dodrio,
  PokemonVariety.Dodrio,
  PokemonSpecies.Dodrio,
);
new class SeelForm extends Form {}(
  PokemonForm.Seel,
  PokemonVariety.Seel,
  PokemonSpecies.Seel,
);
new class DewgongForm extends Form {}(
  PokemonForm.Dewgong,
  PokemonVariety.Dewgong,
  PokemonSpecies.Dewgong,
);
new class GrimerForm extends Form {}(
  PokemonForm.Grimer,
  PokemonVariety.Grimer,
  PokemonSpecies.Grimer,
);
new class GrimerAlolaForm extends Form {}(
  PokemonForm.GrimerAlola,
  PokemonVariety.GrimerAlola,
  PokemonSpecies.Grimer,
);
new class MukForm extends Form {}(
  PokemonForm.Muk,
  PokemonVariety.Muk,
  PokemonSpecies.Muk,
);
new class MukAlolaForm extends Form {}(
  PokemonForm.MukAlola,
  PokemonVariety.MukAlola,
  PokemonSpecies.Muk,
);
new class ShellderForm extends Form {}(
  PokemonForm.Shellder,
  PokemonVariety.Shellder,
  PokemonSpecies.Shellder,
);
new class CloysterForm extends Form {}(
  PokemonForm.Cloyster,
  PokemonVariety.Cloyster,
  PokemonSpecies.Cloyster,
);
new class GastlyForm extends Form {}(
  PokemonForm.Gastly,
  PokemonVariety.Gastly,
  PokemonSpecies.Gastly,
);
new class HaunterForm extends Form {}(
  PokemonForm.Haunter,
  PokemonVariety.Haunter,
  PokemonSpecies.Haunter,
);
new class GengarForm extends Form {}(
  PokemonForm.Gengar,
  PokemonVariety.Gengar,
  PokemonSpecies.Gengar,
);
new class GengarMegaForm extends Form {}(
  PokemonForm.GengarMega,
  PokemonVariety.GengarMega,
  PokemonSpecies.Gengar,
);
new class GengarGmaxForm extends Form {}(
  PokemonForm.GengarGmax,
  PokemonVariety.GengarGmax,
  PokemonSpecies.Gengar,
);
new class OnixForm extends Form {}(
  PokemonForm.Onix,
  PokemonVariety.Onix,
  PokemonSpecies.Onix,
);
new class DrowzeeForm extends Form {}(
  PokemonForm.Drowzee,
  PokemonVariety.Drowzee,
  PokemonSpecies.Drowzee,
);
new class HypnoForm extends Form {}(
  PokemonForm.Hypno,
  PokemonVariety.Hypno,
  PokemonSpecies.Hypno,
);
new class KrabbyForm extends Form {}(
  PokemonForm.Krabby,
  PokemonVariety.Krabby,
  PokemonSpecies.Krabby,
);
new class KinglerForm extends Form {}(
  PokemonForm.Kingler,
  PokemonVariety.Kingler,
  PokemonSpecies.Kingler,
);
new class KinglerGmaxForm extends Form {}(
  PokemonForm.KinglerGmax,
  PokemonVariety.KinglerGmax,
  PokemonSpecies.Kingler,
);
new class VoltorbForm extends Form {}(
  PokemonForm.Voltorb,
  PokemonVariety.Voltorb,
  PokemonSpecies.Voltorb,
);
new class VoltorbHisuiForm extends Form {}(
  PokemonForm.VoltorbHisui,
  PokemonVariety.VoltorbHisui,
  PokemonSpecies.Voltorb,
);
new class ElectrodeForm extends Form {}(
  PokemonForm.Electrode,
  PokemonVariety.Electrode,
  PokemonSpecies.Electrode,
);
new class ElectrodeHisuiForm extends Form {}(
  PokemonForm.ElectrodeHisui,
  PokemonVariety.ElectrodeHisui,
  PokemonSpecies.Electrode,
);
new class ExeggcuteForm extends Form {}(
  PokemonForm.Exeggcute,
  PokemonVariety.Exeggcute,
  PokemonSpecies.Exeggcute,
);
new class ExeggutorForm extends Form {}(
  PokemonForm.Exeggutor,
  PokemonVariety.Exeggutor,
  PokemonSpecies.Exeggutor,
);
new class ExeggutorAlolaForm extends Form {}(
  PokemonForm.ExeggutorAlola,
  PokemonVariety.ExeggutorAlola,
  PokemonSpecies.Exeggutor,
);
new class CuboneForm extends Form {}(
  PokemonForm.Cubone,
  PokemonVariety.Cubone,
  PokemonSpecies.Cubone,
);
new class MarowakForm extends Form {}(
  PokemonForm.Marowak,
  PokemonVariety.Marowak,
  PokemonSpecies.Marowak,
);
new class MarowakAlolaForm extends Form {}(
  PokemonForm.MarowakAlola,
  PokemonVariety.MarowakAlola,
  PokemonSpecies.Marowak,
);
new class MarowakTotemForm extends Form {}(
  PokemonForm.MarowakTotem,
  PokemonVariety.MarowakTotem,
  PokemonSpecies.Marowak,
);
new class HitmonleeForm extends Form {}(
  PokemonForm.Hitmonlee,
  PokemonVariety.Hitmonlee,
  PokemonSpecies.Hitmonlee,
);
new class HitmonchanForm extends Form {}(
  PokemonForm.Hitmonchan,
  PokemonVariety.Hitmonchan,
  PokemonSpecies.Hitmonchan,
);
new class LickitungForm extends Form {}(
  PokemonForm.Lickitung,
  PokemonVariety.Lickitung,
  PokemonSpecies.Lickitung,
);
new class KoffingForm extends Form {}(
  PokemonForm.Koffing,
  PokemonVariety.Koffing,
  PokemonSpecies.Koffing,
);
new class WeezingForm extends Form {}(
  PokemonForm.Weezing,
  PokemonVariety.Weezing,
  PokemonSpecies.Weezing,
);
new class WeezingGalarForm extends Form {}(
  PokemonForm.WeezingGalar,
  PokemonVariety.WeezingGalar,
  PokemonSpecies.Weezing,
);
new class RhyhornForm extends Form {}(
  PokemonForm.Rhyhorn,
  PokemonVariety.Rhyhorn,
  PokemonSpecies.Rhyhorn,
);
new class RhydonForm extends Form {}(
  PokemonForm.Rhydon,
  PokemonVariety.Rhydon,
  PokemonSpecies.Rhydon,
);
new class ChanseyForm extends Form {}(
  PokemonForm.Chansey,
  PokemonVariety.Chansey,
  PokemonSpecies.Chansey,
);
new class TangelaForm extends Form {}(
  PokemonForm.Tangela,
  PokemonVariety.Tangela,
  PokemonSpecies.Tangela,
);
new class KangaskhanForm extends Form {}(
  PokemonForm.Kangaskhan,
  PokemonVariety.Kangaskhan,
  PokemonSpecies.Kangaskhan,
);
new class KangaskhanMegaForm extends Form {}(
  PokemonForm.KangaskhanMega,
  PokemonVariety.KangaskhanMega,
  PokemonSpecies.Kangaskhan,
);
new class HorseaForm extends Form {}(
  PokemonForm.Horsea,
  PokemonVariety.Horsea,
  PokemonSpecies.Horsea,
);
new class SeadraForm extends Form {}(
  PokemonForm.Seadra,
  PokemonVariety.Seadra,
  PokemonSpecies.Seadra,
);
new class GoldeenForm extends Form {}(
  PokemonForm.Goldeen,
  PokemonVariety.Goldeen,
  PokemonSpecies.Goldeen,
);
new class SeakingForm extends Form {}(
  PokemonForm.Seaking,
  PokemonVariety.Seaking,
  PokemonSpecies.Seaking,
);
new class StaryuForm extends Form {}(
  PokemonForm.Staryu,
  PokemonVariety.Staryu,
  PokemonSpecies.Staryu,
);
new class StarmieForm extends Form {}(
  PokemonForm.Starmie,
  PokemonVariety.Starmie,
  PokemonSpecies.Starmie,
);
new class MrMimeForm extends Form {}(
  PokemonForm.MrMime,
  PokemonVariety.MrMime,
  PokemonSpecies.MrMime,
);
new class MrMimeGalarForm extends Form {}(
  PokemonForm.MrMimeGalar,
  PokemonVariety.MrMimeGalar,
  PokemonSpecies.MrMime,
);
new class ScytherForm extends Form {}(
  PokemonForm.Scyther,
  PokemonVariety.Scyther,
  PokemonSpecies.Scyther,
);
new class JynxForm extends Form {}(
  PokemonForm.Jynx,
  PokemonVariety.Jynx,
  PokemonSpecies.Jynx,
);
new class ElectabuzzForm extends Form {}(
  PokemonForm.Electabuzz,
  PokemonVariety.Electabuzz,
  PokemonSpecies.Electabuzz,
);
new class MagmarForm extends Form {}(
  PokemonForm.Magmar,
  PokemonVariety.Magmar,
  PokemonSpecies.Magmar,
);
new class PinsirForm extends Form {}(
  PokemonForm.Pinsir,
  PokemonVariety.Pinsir,
  PokemonSpecies.Pinsir,
);
new class PinsirMegaForm extends Form {}(
  PokemonForm.PinsirMega,
  PokemonVariety.PinsirMega,
  PokemonSpecies.Pinsir,
);
new class TaurosForm extends Form {}(
  PokemonForm.Tauros,
  PokemonVariety.Tauros,
  PokemonSpecies.Tauros,
);
new class TaurosPaldeaCombatBreedForm extends Form {}(
  PokemonForm.TaurosPaldeaCombatBreed,
  PokemonVariety.TaurosPaldeaCombatBreed,
  PokemonSpecies.Tauros,
);
new class TaurosPaldeaBlazeBreedForm extends Form {}(
  PokemonForm.TaurosPaldeaBlazeBreed,
  PokemonVariety.TaurosPaldeaBlazeBreed,
  PokemonSpecies.Tauros,
);
new class TaurosPaldeaAquaBreedForm extends Form {}(
  PokemonForm.TaurosPaldeaAquaBreed,
  PokemonVariety.TaurosPaldeaAquaBreed,
  PokemonSpecies.Tauros,
);
new class MagikarpForm extends Form {}(
  PokemonForm.Magikarp,
  PokemonVariety.Magikarp,
  PokemonSpecies.Magikarp,
);
new class GyaradosForm extends Form {}(
  PokemonForm.Gyarados,
  PokemonVariety.Gyarados,
  PokemonSpecies.Gyarados,
);
new class GyaradosMegaForm extends Form {}(
  PokemonForm.GyaradosMega,
  PokemonVariety.GyaradosMega,
  PokemonSpecies.Gyarados,
);
new class LaprasForm extends Form {}(
  PokemonForm.Lapras,
  PokemonVariety.Lapras,
  PokemonSpecies.Lapras,
);
new class LaprasGmaxForm extends Form {}(
  PokemonForm.LaprasGmax,
  PokemonVariety.LaprasGmax,
  PokemonSpecies.Lapras,
);
new class DittoForm extends Form {}(
  PokemonForm.Ditto,
  PokemonVariety.Ditto,
  PokemonSpecies.Ditto,
);
new class EeveeForm extends Form {}(
  PokemonForm.Eevee,
  PokemonVariety.Eevee,
  PokemonSpecies.Eevee,
);
new class EeveeStarterForm extends Form {}(
  PokemonForm.EeveeStarter,
  PokemonVariety.EeveeStarter,
  PokemonSpecies.Eevee,
);
new class EeveeGmaxForm extends Form {}(
  PokemonForm.EeveeGmax,
  PokemonVariety.EeveeGmax,
  PokemonSpecies.Eevee,
);
new class VaporeonForm extends Form {}(
  PokemonForm.Vaporeon,
  PokemonVariety.Vaporeon,
  PokemonSpecies.Vaporeon,
);
new class JolteonForm extends Form {}(
  PokemonForm.Jolteon,
  PokemonVariety.Jolteon,
  PokemonSpecies.Jolteon,
);
new class FlareonForm extends Form {}(
  PokemonForm.Flareon,
  PokemonVariety.Flareon,
  PokemonSpecies.Flareon,
);
new class PorygonForm extends Form {}(
  PokemonForm.Porygon,
  PokemonVariety.Porygon,
  PokemonSpecies.Porygon,
);
new class OmanyteForm extends Form {}(
  PokemonForm.Omanyte,
  PokemonVariety.Omanyte,
  PokemonSpecies.Omanyte,
);
new class OmastarForm extends Form {}(
  PokemonForm.Omastar,
  PokemonVariety.Omastar,
  PokemonSpecies.Omastar,
);
new class KabutoForm extends Form {}(
  PokemonForm.Kabuto,
  PokemonVariety.Kabuto,
  PokemonSpecies.Kabuto,
);
new class KabutopsForm extends Form {}(
  PokemonForm.Kabutops,
  PokemonVariety.Kabutops,
  PokemonSpecies.Kabutops,
);
new class AerodactylForm extends Form {}(
  PokemonForm.Aerodactyl,
  PokemonVariety.Aerodactyl,
  PokemonSpecies.Aerodactyl,
);
new class AerodactylMegaForm extends Form {}(
  PokemonForm.AerodactylMega,
  PokemonVariety.AerodactylMega,
  PokemonSpecies.Aerodactyl,
);
new class SnorlaxForm extends Form {}(
  PokemonForm.Snorlax,
  PokemonVariety.Snorlax,
  PokemonSpecies.Snorlax,
);
new class SnorlaxGmaxForm extends Form {}(
  PokemonForm.SnorlaxGmax,
  PokemonVariety.SnorlaxGmax,
  PokemonSpecies.Snorlax,
);
new class ArticunoForm extends Form {}(
  PokemonForm.Articuno,
  PokemonVariety.Articuno,
  PokemonSpecies.Articuno,
);
new class ArticunoGalarForm extends Form {}(
  PokemonForm.ArticunoGalar,
  PokemonVariety.ArticunoGalar,
  PokemonSpecies.Articuno,
);
new class ZapdosForm extends Form {}(
  PokemonForm.Zapdos,
  PokemonVariety.Zapdos,
  PokemonSpecies.Zapdos,
);
new class ZapdosGalarForm extends Form {}(
  PokemonForm.ZapdosGalar,
  PokemonVariety.ZapdosGalar,
  PokemonSpecies.Zapdos,
);
new class MoltresForm extends Form {}(
  PokemonForm.Moltres,
  PokemonVariety.Moltres,
  PokemonSpecies.Moltres,
);
new class MoltresGalarForm extends Form {}(
  PokemonForm.MoltresGalar,
  PokemonVariety.MoltresGalar,
  PokemonSpecies.Moltres,
);
new class DratiniForm extends Form {}(
  PokemonForm.Dratini,
  PokemonVariety.Dratini,
  PokemonSpecies.Dratini,
);
new class DragonairForm extends Form {}(
  PokemonForm.Dragonair,
  PokemonVariety.Dragonair,
  PokemonSpecies.Dragonair,
);
new class DragoniteForm extends Form {}(
  PokemonForm.Dragonite,
  PokemonVariety.Dragonite,
  PokemonSpecies.Dragonite,
);
new class MewtwoForm extends Form {}(
  PokemonForm.Mewtwo,
  PokemonVariety.Mewtwo,
  PokemonSpecies.Mewtwo,
);
new class MewtwoMegaXForm extends Form {}(
  PokemonForm.MewtwoMegaX,
  PokemonVariety.MewtwoMegaX,
  PokemonSpecies.Mewtwo,
);
new class MewtwoMegaYForm extends Form {}(
  PokemonForm.MewtwoMegaY,
  PokemonVariety.MewtwoMegaY,
  PokemonSpecies.Mewtwo,
);
new class MewForm extends Form {}(
  PokemonForm.Mew,
  PokemonVariety.Mew,
  PokemonSpecies.Mew,
);
new class ChikoritaForm extends Form {}(
  PokemonForm.Chikorita,
  PokemonVariety.Chikorita,
  PokemonSpecies.Chikorita,
);
new class BayleefForm extends Form {}(
  PokemonForm.Bayleef,
  PokemonVariety.Bayleef,
  PokemonSpecies.Bayleef,
);
new class MeganiumForm extends Form {}(
  PokemonForm.Meganium,
  PokemonVariety.Meganium,
  PokemonSpecies.Meganium,
);
new class CyndaquilForm extends Form {}(
  PokemonForm.Cyndaquil,
  PokemonVariety.Cyndaquil,
  PokemonSpecies.Cyndaquil,
);
new class QuilavaForm extends Form {}(
  PokemonForm.Quilava,
  PokemonVariety.Quilava,
  PokemonSpecies.Quilava,
);
new class TyphlosionForm extends Form {}(
  PokemonForm.Typhlosion,
  PokemonVariety.Typhlosion,
  PokemonSpecies.Typhlosion,
);
new class TyphlosionHisuiForm extends Form {}(
  PokemonForm.TyphlosionHisui,
  PokemonVariety.TyphlosionHisui,
  PokemonSpecies.Typhlosion,
);
new class TotodileForm extends Form {}(
  PokemonForm.Totodile,
  PokemonVariety.Totodile,
  PokemonSpecies.Totodile,
);
new class CroconawForm extends Form {}(
  PokemonForm.Croconaw,
  PokemonVariety.Croconaw,
  PokemonSpecies.Croconaw,
);
new class FeraligatrForm extends Form {}(
  PokemonForm.Feraligatr,
  PokemonVariety.Feraligatr,
  PokemonSpecies.Feraligatr,
);
new class SentretForm extends Form {}(
  PokemonForm.Sentret,
  PokemonVariety.Sentret,
  PokemonSpecies.Sentret,
);
new class FurretForm extends Form {}(
  PokemonForm.Furret,
  PokemonVariety.Furret,
  PokemonSpecies.Furret,
);
new class HoothootForm extends Form {}(
  PokemonForm.Hoothoot,
  PokemonVariety.Hoothoot,
  PokemonSpecies.Hoothoot,
);
new class NoctowlForm extends Form {}(
  PokemonForm.Noctowl,
  PokemonVariety.Noctowl,
  PokemonSpecies.Noctowl,
);
new class LedybaForm extends Form {}(
  PokemonForm.Ledyba,
  PokemonVariety.Ledyba,
  PokemonSpecies.Ledyba,
);
new class LedianForm extends Form {}(
  PokemonForm.Ledian,
  PokemonVariety.Ledian,
  PokemonSpecies.Ledian,
);
new class SpinarakForm extends Form {}(
  PokemonForm.Spinarak,
  PokemonVariety.Spinarak,
  PokemonSpecies.Spinarak,
);
new class AriadosForm extends Form {}(
  PokemonForm.Ariados,
  PokemonVariety.Ariados,
  PokemonSpecies.Ariados,
);
new class CrobatForm extends Form {}(
  PokemonForm.Crobat,
  PokemonVariety.Crobat,
  PokemonSpecies.Crobat,
);
new class ChinchouForm extends Form {}(
  PokemonForm.Chinchou,
  PokemonVariety.Chinchou,
  PokemonSpecies.Chinchou,
);
new class LanturnForm extends Form {}(
  PokemonForm.Lanturn,
  PokemonVariety.Lanturn,
  PokemonSpecies.Lanturn,
);
new class PichuForm extends Form {}(
  PokemonForm.Pichu,
  PokemonVariety.Pichu,
  PokemonSpecies.Pichu,
);
new class PichuSpikyEaredForm extends Form {}(
  PokemonForm.PichuSpikyEared,
  PokemonVariety.Pichu,
  PokemonSpecies.Pichu,
);
new class CleffaForm extends Form {}(
  PokemonForm.Cleffa,
  PokemonVariety.Cleffa,
  PokemonSpecies.Cleffa,
);
new class IgglybuffForm extends Form {}(
  PokemonForm.Igglybuff,
  PokemonVariety.Igglybuff,
  PokemonSpecies.Igglybuff,
);
new class TogepiForm extends Form {}(
  PokemonForm.Togepi,
  PokemonVariety.Togepi,
  PokemonSpecies.Togepi,
);
new class TogeticForm extends Form {}(
  PokemonForm.Togetic,
  PokemonVariety.Togetic,
  PokemonSpecies.Togetic,
);
new class NatuForm extends Form {}(
  PokemonForm.Natu,
  PokemonVariety.Natu,
  PokemonSpecies.Natu,
);
new class XatuForm extends Form {}(
  PokemonForm.Xatu,
  PokemonVariety.Xatu,
  PokemonSpecies.Xatu,
);
new class MareepForm extends Form {}(
  PokemonForm.Mareep,
  PokemonVariety.Mareep,
  PokemonSpecies.Mareep,
);
new class FlaaffyForm extends Form {}(
  PokemonForm.Flaaffy,
  PokemonVariety.Flaaffy,
  PokemonSpecies.Flaaffy,
);
new class AmpharosForm extends Form {}(
  PokemonForm.Ampharos,
  PokemonVariety.Ampharos,
  PokemonSpecies.Ampharos,
);
new class AmpharosMegaForm extends Form {}(
  PokemonForm.AmpharosMega,
  PokemonVariety.AmpharosMega,
  PokemonSpecies.Ampharos,
);
new class BellossomForm extends Form {}(
  PokemonForm.Bellossom,
  PokemonVariety.Bellossom,
  PokemonSpecies.Bellossom,
);
new class MarillForm extends Form {}(
  PokemonForm.Marill,
  PokemonVariety.Marill,
  PokemonSpecies.Marill,
);
new class AzumarillForm extends Form {}(
  PokemonForm.Azumarill,
  PokemonVariety.Azumarill,
  PokemonSpecies.Azumarill,
);
new class SudowoodoForm extends Form {}(
  PokemonForm.Sudowoodo,
  PokemonVariety.Sudowoodo,
  PokemonSpecies.Sudowoodo,
);
new class PolitoedForm extends Form {}(
  PokemonForm.Politoed,
  PokemonVariety.Politoed,
  PokemonSpecies.Politoed,
);
new class HoppipForm extends Form {}(
  PokemonForm.Hoppip,
  PokemonVariety.Hoppip,
  PokemonSpecies.Hoppip,
);
new class SkiploomForm extends Form {}(
  PokemonForm.Skiploom,
  PokemonVariety.Skiploom,
  PokemonSpecies.Skiploom,
);
new class JumpluffForm extends Form {}(
  PokemonForm.Jumpluff,
  PokemonVariety.Jumpluff,
  PokemonSpecies.Jumpluff,
);
new class AipomForm extends Form {}(
  PokemonForm.Aipom,
  PokemonVariety.Aipom,
  PokemonSpecies.Aipom,
);
new class SunkernForm extends Form {}(
  PokemonForm.Sunkern,
  PokemonVariety.Sunkern,
  PokemonSpecies.Sunkern,
);
new class SunfloraForm extends Form {}(
  PokemonForm.Sunflora,
  PokemonVariety.Sunflora,
  PokemonSpecies.Sunflora,
);
new class YanmaForm extends Form {}(
  PokemonForm.Yanma,
  PokemonVariety.Yanma,
  PokemonSpecies.Yanma,
);
new class WooperForm extends Form {}(
  PokemonForm.Wooper,
  PokemonVariety.Wooper,
  PokemonSpecies.Wooper,
);
new class WooperPaldeaForm extends Form {}(
  PokemonForm.WooperPaldea,
  PokemonVariety.WooperPaldea,
  PokemonSpecies.Wooper,
);
new class QuagsireForm extends Form {}(
  PokemonForm.Quagsire,
  PokemonVariety.Quagsire,
  PokemonSpecies.Quagsire,
);
new class EspeonForm extends Form {}(
  PokemonForm.Espeon,
  PokemonVariety.Espeon,
  PokemonSpecies.Espeon,
);
new class UmbreonForm extends Form {}(
  PokemonForm.Umbreon,
  PokemonVariety.Umbreon,
  PokemonSpecies.Umbreon,
);
new class MurkrowForm extends Form {}(
  PokemonForm.Murkrow,
  PokemonVariety.Murkrow,
  PokemonSpecies.Murkrow,
);
new class SlowkingForm extends Form {}(
  PokemonForm.Slowking,
  PokemonVariety.Slowking,
  PokemonSpecies.Slowking,
);
new class SlowkingGalarForm extends Form {}(
  PokemonForm.SlowkingGalar,
  PokemonVariety.SlowkingGalar,
  PokemonSpecies.Slowking,
);
new class MisdreavusForm extends Form {}(
  PokemonForm.Misdreavus,
  PokemonVariety.Misdreavus,
  PokemonSpecies.Misdreavus,
);
new class UnownAForm extends Form {}(
  PokemonForm.UnownA,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownBForm extends Form {}(
  PokemonForm.UnownB,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownCForm extends Form {}(
  PokemonForm.UnownC,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownDForm extends Form {}(
  PokemonForm.UnownD,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownEForm extends Form {}(
  PokemonForm.UnownE,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownFForm extends Form {}(
  PokemonForm.UnownF,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownGForm extends Form {}(
  PokemonForm.UnownG,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownHForm extends Form {}(
  PokemonForm.UnownH,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownIForm extends Form {}(
  PokemonForm.UnownI,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownJForm extends Form {}(
  PokemonForm.UnownJ,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownKForm extends Form {}(
  PokemonForm.UnownK,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownLForm extends Form {}(
  PokemonForm.UnownL,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownMForm extends Form {}(
  PokemonForm.UnownM,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownNForm extends Form {}(
  PokemonForm.UnownN,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownOForm extends Form {}(
  PokemonForm.UnownO,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownPForm extends Form {}(
  PokemonForm.UnownP,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownQForm extends Form {}(
  PokemonForm.UnownQ,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownRForm extends Form {}(
  PokemonForm.UnownR,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownSForm extends Form {}(
  PokemonForm.UnownS,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownTForm extends Form {}(
  PokemonForm.UnownT,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownUForm extends Form {}(
  PokemonForm.UnownU,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownVForm extends Form {}(
  PokemonForm.UnownV,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownWForm extends Form {}(
  PokemonForm.UnownW,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownXForm extends Form {}(
  PokemonForm.UnownX,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownYForm extends Form {}(
  PokemonForm.UnownY,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownZForm extends Form {}(
  PokemonForm.UnownZ,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownExclamationForm extends Form {}(
  PokemonForm.UnownExclamation,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class UnownQuestionForm extends Form {}(
  PokemonForm.UnownQuestion,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
);
new class WobbuffetForm extends Form {}(
  PokemonForm.Wobbuffet,
  PokemonVariety.Wobbuffet,
  PokemonSpecies.Wobbuffet,
);
new class GirafarigForm extends Form {}(
  PokemonForm.Girafarig,
  PokemonVariety.Girafarig,
  PokemonSpecies.Girafarig,
);
new class PinecoForm extends Form {}(
  PokemonForm.Pineco,
  PokemonVariety.Pineco,
  PokemonSpecies.Pineco,
);
new class ForretressForm extends Form {}(
  PokemonForm.Forretress,
  PokemonVariety.Forretress,
  PokemonSpecies.Forretress,
);
new class DunsparceForm extends Form {}(
  PokemonForm.Dunsparce,
  PokemonVariety.Dunsparce,
  PokemonSpecies.Dunsparce,
);
new class GligarForm extends Form {}(
  PokemonForm.Gligar,
  PokemonVariety.Gligar,
  PokemonSpecies.Gligar,
);
new class SteelixForm extends Form {}(
  PokemonForm.Steelix,
  PokemonVariety.Steelix,
  PokemonSpecies.Steelix,
);
new class SteelixMegaForm extends Form {}(
  PokemonForm.SteelixMega,
  PokemonVariety.SteelixMega,
  PokemonSpecies.Steelix,
);
new class SnubbullForm extends Form {}(
  PokemonForm.Snubbull,
  PokemonVariety.Snubbull,
  PokemonSpecies.Snubbull,
);
new class GranbullForm extends Form {}(
  PokemonForm.Granbull,
  PokemonVariety.Granbull,
  PokemonSpecies.Granbull,
);
new class QwilfishForm extends Form {}(
  PokemonForm.Qwilfish,
  PokemonVariety.Qwilfish,
  PokemonSpecies.Qwilfish,
);
new class QwilfishHisuiForm extends Form {}(
  PokemonForm.QwilfishHisui,
  PokemonVariety.QwilfishHisui,
  PokemonSpecies.Qwilfish,
);
new class ScizorForm extends Form {}(
  PokemonForm.Scizor,
  PokemonVariety.Scizor,
  PokemonSpecies.Scizor,
);
new class ScizorMegaForm extends Form {}(
  PokemonForm.ScizorMega,
  PokemonVariety.ScizorMega,
  PokemonSpecies.Scizor,
);
new class ShuckleForm extends Form {}(
  PokemonForm.Shuckle,
  PokemonVariety.Shuckle,
  PokemonSpecies.Shuckle,
);
new class HeracrossForm extends Form {}(
  PokemonForm.Heracross,
  PokemonVariety.Heracross,
  PokemonSpecies.Heracross,
);
new class HeracrossMegaForm extends Form {}(
  PokemonForm.HeracrossMega,
  PokemonVariety.HeracrossMega,
  PokemonSpecies.Heracross,
);
new class SneaselForm extends Form {}(
  PokemonForm.Sneasel,
  PokemonVariety.Sneasel,
  PokemonSpecies.Sneasel,
);
new class SneaselHisuiForm extends Form {}(
  PokemonForm.SneaselHisui,
  PokemonVariety.SneaselHisui,
  PokemonSpecies.Sneasel,
);
new class TeddiursaForm extends Form {}(
  PokemonForm.Teddiursa,
  PokemonVariety.Teddiursa,
  PokemonSpecies.Teddiursa,
);
new class UrsaringForm extends Form {}(
  PokemonForm.Ursaring,
  PokemonVariety.Ursaring,
  PokemonSpecies.Ursaring,
);
new class SlugmaForm extends Form {}(
  PokemonForm.Slugma,
  PokemonVariety.Slugma,
  PokemonSpecies.Slugma,
);
new class MagcargoForm extends Form {}(
  PokemonForm.Magcargo,
  PokemonVariety.Magcargo,
  PokemonSpecies.Magcargo,
);
new class SwinubForm extends Form {}(
  PokemonForm.Swinub,
  PokemonVariety.Swinub,
  PokemonSpecies.Swinub,
);
new class PiloswineForm extends Form {}(
  PokemonForm.Piloswine,
  PokemonVariety.Piloswine,
  PokemonSpecies.Piloswine,
);
new class CorsolaForm extends Form {}(
  PokemonForm.Corsola,
  PokemonVariety.Corsola,
  PokemonSpecies.Corsola,
);
new class CorsolaGalarForm extends Form {}(
  PokemonForm.CorsolaGalar,
  PokemonVariety.CorsolaGalar,
  PokemonSpecies.Corsola,
);
new class RemoraidForm extends Form {}(
  PokemonForm.Remoraid,
  PokemonVariety.Remoraid,
  PokemonSpecies.Remoraid,
);
new class OctilleryForm extends Form {}(
  PokemonForm.Octillery,
  PokemonVariety.Octillery,
  PokemonSpecies.Octillery,
);
new class DelibirdForm extends Form {}(
  PokemonForm.Delibird,
  PokemonVariety.Delibird,
  PokemonSpecies.Delibird,
);
new class MantineForm extends Form {}(
  PokemonForm.Mantine,
  PokemonVariety.Mantine,
  PokemonSpecies.Mantine,
);
new class SkarmoryForm extends Form {}(
  PokemonForm.Skarmory,
  PokemonVariety.Skarmory,
  PokemonSpecies.Skarmory,
);
new class HoundourForm extends Form {}(
  PokemonForm.Houndour,
  PokemonVariety.Houndour,
  PokemonSpecies.Houndour,
);
new class HoundoomForm extends Form {}(
  PokemonForm.Houndoom,
  PokemonVariety.Houndoom,
  PokemonSpecies.Houndoom,
);
new class HoundoomMegaForm extends Form {}(
  PokemonForm.HoundoomMega,
  PokemonVariety.HoundoomMega,
  PokemonSpecies.Houndoom,
);
new class KingdraForm extends Form {}(
  PokemonForm.Kingdra,
  PokemonVariety.Kingdra,
  PokemonSpecies.Kingdra,
);
new class PhanpyForm extends Form {}(
  PokemonForm.Phanpy,
  PokemonVariety.Phanpy,
  PokemonSpecies.Phanpy,
);
new class DonphanForm extends Form {}(
  PokemonForm.Donphan,
  PokemonVariety.Donphan,
  PokemonSpecies.Donphan,
);
new class Porygon2Form extends Form {}(
  PokemonForm.Porygon2,
  PokemonVariety.Porygon2,
  PokemonSpecies.Porygon2,
);
new class StantlerForm extends Form {}(
  PokemonForm.Stantler,
  PokemonVariety.Stantler,
  PokemonSpecies.Stantler,
);
new class SmeargleForm extends Form {}(
  PokemonForm.Smeargle,
  PokemonVariety.Smeargle,
  PokemonSpecies.Smeargle,
);
new class TyrogueForm extends Form {}(
  PokemonForm.Tyrogue,
  PokemonVariety.Tyrogue,
  PokemonSpecies.Tyrogue,
);
new class HitmontopForm extends Form {}(
  PokemonForm.Hitmontop,
  PokemonVariety.Hitmontop,
  PokemonSpecies.Hitmontop,
);
new class SmoochumForm extends Form {}(
  PokemonForm.Smoochum,
  PokemonVariety.Smoochum,
  PokemonSpecies.Smoochum,
);
new class ElekidForm extends Form {}(
  PokemonForm.Elekid,
  PokemonVariety.Elekid,
  PokemonSpecies.Elekid,
);
new class MagbyForm extends Form {}(
  PokemonForm.Magby,
  PokemonVariety.Magby,
  PokemonSpecies.Magby,
);
new class MiltankForm extends Form {}(
  PokemonForm.Miltank,
  PokemonVariety.Miltank,
  PokemonSpecies.Miltank,
);
new class BlisseyForm extends Form {}(
  PokemonForm.Blissey,
  PokemonVariety.Blissey,
  PokemonSpecies.Blissey,
);
new class RaikouForm extends Form {}(
  PokemonForm.Raikou,
  PokemonVariety.Raikou,
  PokemonSpecies.Raikou,
);
new class EnteiForm extends Form {}(
  PokemonForm.Entei,
  PokemonVariety.Entei,
  PokemonSpecies.Entei,
);
new class SuicuneForm extends Form {}(
  PokemonForm.Suicune,
  PokemonVariety.Suicune,
  PokemonSpecies.Suicune,
);
new class LarvitarForm extends Form {}(
  PokemonForm.Larvitar,
  PokemonVariety.Larvitar,
  PokemonSpecies.Larvitar,
);
new class PupitarForm extends Form {}(
  PokemonForm.Pupitar,
  PokemonVariety.Pupitar,
  PokemonSpecies.Pupitar,
);
new class TyranitarForm extends Form {}(
  PokemonForm.Tyranitar,
  PokemonVariety.Tyranitar,
  PokemonSpecies.Tyranitar,
);
new class TyranitarMegaForm extends Form {}(
  PokemonForm.TyranitarMega,
  PokemonVariety.TyranitarMega,
  PokemonSpecies.Tyranitar,
);
new class LugiaForm extends Form {}(
  PokemonForm.Lugia,
  PokemonVariety.Lugia,
  PokemonSpecies.Lugia,
);
new class HoOhForm extends Form {}(
  PokemonForm.HoOh,
  PokemonVariety.HoOh,
  PokemonSpecies.HoOh,
);
new class CelebiForm extends Form {}(
  PokemonForm.Celebi,
  PokemonVariety.Celebi,
  PokemonSpecies.Celebi,
);
new class TreeckoForm extends Form {}(
  PokemonForm.Treecko,
  PokemonVariety.Treecko,
  PokemonSpecies.Treecko,
);
new class GrovyleForm extends Form {}(
  PokemonForm.Grovyle,
  PokemonVariety.Grovyle,
  PokemonSpecies.Grovyle,
);
new class SceptileForm extends Form {}(
  PokemonForm.Sceptile,
  PokemonVariety.Sceptile,
  PokemonSpecies.Sceptile,
);
new class SceptileMegaForm extends Form {}(
  PokemonForm.SceptileMega,
  PokemonVariety.SceptileMega,
  PokemonSpecies.Sceptile,
);
new class TorchicForm extends Form {}(
  PokemonForm.Torchic,
  PokemonVariety.Torchic,
  PokemonSpecies.Torchic,
);
new class CombuskenForm extends Form {}(
  PokemonForm.Combusken,
  PokemonVariety.Combusken,
  PokemonSpecies.Combusken,
);
new class BlazikenForm extends Form {}(
  PokemonForm.Blaziken,
  PokemonVariety.Blaziken,
  PokemonSpecies.Blaziken,
);
new class BlazikenMegaForm extends Form {}(
  PokemonForm.BlazikenMega,
  PokemonVariety.BlazikenMega,
  PokemonSpecies.Blaziken,
);
new class MudkipForm extends Form {}(
  PokemonForm.Mudkip,
  PokemonVariety.Mudkip,
  PokemonSpecies.Mudkip,
);
new class MarshtompForm extends Form {}(
  PokemonForm.Marshtomp,
  PokemonVariety.Marshtomp,
  PokemonSpecies.Marshtomp,
);
new class SwampertForm extends Form {}(
  PokemonForm.Swampert,
  PokemonVariety.Swampert,
  PokemonSpecies.Swampert,
);
new class SwampertMegaForm extends Form {}(
  PokemonForm.SwampertMega,
  PokemonVariety.SwampertMega,
  PokemonSpecies.Swampert,
);
new class PoochyenaForm extends Form {}(
  PokemonForm.Poochyena,
  PokemonVariety.Poochyena,
  PokemonSpecies.Poochyena,
);
new class MightyenaForm extends Form {}(
  PokemonForm.Mightyena,
  PokemonVariety.Mightyena,
  PokemonSpecies.Mightyena,
);
new class ZigzagoonForm extends Form {}(
  PokemonForm.Zigzagoon,
  PokemonVariety.Zigzagoon,
  PokemonSpecies.Zigzagoon,
);
new class ZigzagoonGalarForm extends Form {}(
  PokemonForm.ZigzagoonGalar,
  PokemonVariety.ZigzagoonGalar,
  PokemonSpecies.Zigzagoon,
);
new class LinooneForm extends Form {}(
  PokemonForm.Linoone,
  PokemonVariety.Linoone,
  PokemonSpecies.Linoone,
);
new class LinooneGalarForm extends Form {}(
  PokemonForm.LinooneGalar,
  PokemonVariety.LinooneGalar,
  PokemonSpecies.Linoone,
);
new class WurmpleForm extends Form {}(
  PokemonForm.Wurmple,
  PokemonVariety.Wurmple,
  PokemonSpecies.Wurmple,
);
new class SilcoonForm extends Form {}(
  PokemonForm.Silcoon,
  PokemonVariety.Silcoon,
  PokemonSpecies.Silcoon,
);
new class BeautiflyForm extends Form {}(
  PokemonForm.Beautifly,
  PokemonVariety.Beautifly,
  PokemonSpecies.Beautifly,
);
new class CascoonForm extends Form {}(
  PokemonForm.Cascoon,
  PokemonVariety.Cascoon,
  PokemonSpecies.Cascoon,
);
new class DustoxForm extends Form {}(
  PokemonForm.Dustox,
  PokemonVariety.Dustox,
  PokemonSpecies.Dustox,
);
new class LotadForm extends Form {}(
  PokemonForm.Lotad,
  PokemonVariety.Lotad,
  PokemonSpecies.Lotad,
);
new class LombreForm extends Form {}(
  PokemonForm.Lombre,
  PokemonVariety.Lombre,
  PokemonSpecies.Lombre,
);
new class LudicoloForm extends Form {}(
  PokemonForm.Ludicolo,
  PokemonVariety.Ludicolo,
  PokemonSpecies.Ludicolo,
);
new class SeedotForm extends Form {}(
  PokemonForm.Seedot,
  PokemonVariety.Seedot,
  PokemonSpecies.Seedot,
);
new class NuzleafForm extends Form {}(
  PokemonForm.Nuzleaf,
  PokemonVariety.Nuzleaf,
  PokemonSpecies.Nuzleaf,
);
new class ShiftryForm extends Form {}(
  PokemonForm.Shiftry,
  PokemonVariety.Shiftry,
  PokemonSpecies.Shiftry,
);
new class TaillowForm extends Form {}(
  PokemonForm.Taillow,
  PokemonVariety.Taillow,
  PokemonSpecies.Taillow,
);
new class SwellowForm extends Form {}(
  PokemonForm.Swellow,
  PokemonVariety.Swellow,
  PokemonSpecies.Swellow,
);
new class WingullForm extends Form {}(
  PokemonForm.Wingull,
  PokemonVariety.Wingull,
  PokemonSpecies.Wingull,
);
new class PelipperForm extends Form {}(
  PokemonForm.Pelipper,
  PokemonVariety.Pelipper,
  PokemonSpecies.Pelipper,
);
new class RaltsForm extends Form {}(
  PokemonForm.Ralts,
  PokemonVariety.Ralts,
  PokemonSpecies.Ralts,
);
new class KirliaForm extends Form {}(
  PokemonForm.Kirlia,
  PokemonVariety.Kirlia,
  PokemonSpecies.Kirlia,
);
new class GardevoirForm extends Form {}(
  PokemonForm.Gardevoir,
  PokemonVariety.Gardevoir,
  PokemonSpecies.Gardevoir,
);
new class GardevoirMegaForm extends Form {}(
  PokemonForm.GardevoirMega,
  PokemonVariety.GardevoirMega,
  PokemonSpecies.Gardevoir,
);
new class SurskitForm extends Form {}(
  PokemonForm.Surskit,
  PokemonVariety.Surskit,
  PokemonSpecies.Surskit,
);
new class MasquerainForm extends Form {}(
  PokemonForm.Masquerain,
  PokemonVariety.Masquerain,
  PokemonSpecies.Masquerain,
);
new class ShroomishForm extends Form {}(
  PokemonForm.Shroomish,
  PokemonVariety.Shroomish,
  PokemonSpecies.Shroomish,
);
new class BreloomForm extends Form {}(
  PokemonForm.Breloom,
  PokemonVariety.Breloom,
  PokemonSpecies.Breloom,
);
new class SlakothForm extends Form {}(
  PokemonForm.Slakoth,
  PokemonVariety.Slakoth,
  PokemonSpecies.Slakoth,
);
new class VigorothForm extends Form {}(
  PokemonForm.Vigoroth,
  PokemonVariety.Vigoroth,
  PokemonSpecies.Vigoroth,
);
new class SlakingForm extends Form {}(
  PokemonForm.Slaking,
  PokemonVariety.Slaking,
  PokemonSpecies.Slaking,
);
new class NincadaForm extends Form {}(
  PokemonForm.Nincada,
  PokemonVariety.Nincada,
  PokemonSpecies.Nincada,
);
new class NinjaskForm extends Form {}(
  PokemonForm.Ninjask,
  PokemonVariety.Ninjask,
  PokemonSpecies.Ninjask,
);
new class ShedinjaForm extends Form {}(
  PokemonForm.Shedinja,
  PokemonVariety.Shedinja,
  PokemonSpecies.Shedinja,
);
new class WhismurForm extends Form {}(
  PokemonForm.Whismur,
  PokemonVariety.Whismur,
  PokemonSpecies.Whismur,
);
new class LoudredForm extends Form {}(
  PokemonForm.Loudred,
  PokemonVariety.Loudred,
  PokemonSpecies.Loudred,
);
new class ExploudForm extends Form {}(
  PokemonForm.Exploud,
  PokemonVariety.Exploud,
  PokemonSpecies.Exploud,
);
new class MakuhitaForm extends Form {}(
  PokemonForm.Makuhita,
  PokemonVariety.Makuhita,
  PokemonSpecies.Makuhita,
);
new class HariyamaForm extends Form {}(
  PokemonForm.Hariyama,
  PokemonVariety.Hariyama,
  PokemonSpecies.Hariyama,
);
new class AzurillForm extends Form {}(
  PokemonForm.Azurill,
  PokemonVariety.Azurill,
  PokemonSpecies.Azurill,
);
new class NosepassForm extends Form {}(
  PokemonForm.Nosepass,
  PokemonVariety.Nosepass,
  PokemonSpecies.Nosepass,
);
new class SkittyForm extends Form {}(
  PokemonForm.Skitty,
  PokemonVariety.Skitty,
  PokemonSpecies.Skitty,
);
new class DelcattyForm extends Form {}(
  PokemonForm.Delcatty,
  PokemonVariety.Delcatty,
  PokemonSpecies.Delcatty,
);
new class SableyeForm extends Form {}(
  PokemonForm.Sableye,
  PokemonVariety.Sableye,
  PokemonSpecies.Sableye,
);
new class SableyeMegaForm extends Form {}(
  PokemonForm.SableyeMega,
  PokemonVariety.SableyeMega,
  PokemonSpecies.Sableye,
);
new class MawileForm extends Form {}(
  PokemonForm.Mawile,
  PokemonVariety.Mawile,
  PokemonSpecies.Mawile,
);
new class MawileMegaForm extends Form {}(
  PokemonForm.MawileMega,
  PokemonVariety.MawileMega,
  PokemonSpecies.Mawile,
);
new class AronForm extends Form {}(
  PokemonForm.Aron,
  PokemonVariety.Aron,
  PokemonSpecies.Aron,
);
new class LaironForm extends Form {}(
  PokemonForm.Lairon,
  PokemonVariety.Lairon,
  PokemonSpecies.Lairon,
);
new class AggronForm extends Form {}(
  PokemonForm.Aggron,
  PokemonVariety.Aggron,
  PokemonSpecies.Aggron,
);
new class AggronMegaForm extends Form {}(
  PokemonForm.AggronMega,
  PokemonVariety.AggronMega,
  PokemonSpecies.Aggron,
);
new class MedititeForm extends Form {}(
  PokemonForm.Meditite,
  PokemonVariety.Meditite,
  PokemonSpecies.Meditite,
);
new class MedichamForm extends Form {}(
  PokemonForm.Medicham,
  PokemonVariety.Medicham,
  PokemonSpecies.Medicham,
);
new class MedichamMegaForm extends Form {}(
  PokemonForm.MedichamMega,
  PokemonVariety.MedichamMega,
  PokemonSpecies.Medicham,
);
new class ElectrikeForm extends Form {}(
  PokemonForm.Electrike,
  PokemonVariety.Electrike,
  PokemonSpecies.Electrike,
);
new class ManectricForm extends Form {}(
  PokemonForm.Manectric,
  PokemonVariety.Manectric,
  PokemonSpecies.Manectric,
);
new class ManectricMegaForm extends Form {}(
  PokemonForm.ManectricMega,
  PokemonVariety.ManectricMega,
  PokemonSpecies.Manectric,
);
new class PlusleForm extends Form {}(
  PokemonForm.Plusle,
  PokemonVariety.Plusle,
  PokemonSpecies.Plusle,
);
new class MinunForm extends Form {}(
  PokemonForm.Minun,
  PokemonVariety.Minun,
  PokemonSpecies.Minun,
);
new class VolbeatForm extends Form {}(
  PokemonForm.Volbeat,
  PokemonVariety.Volbeat,
  PokemonSpecies.Volbeat,
);
new class IllumiseForm extends Form {}(
  PokemonForm.Illumise,
  PokemonVariety.Illumise,
  PokemonSpecies.Illumise,
);
new class RoseliaForm extends Form {}(
  PokemonForm.Roselia,
  PokemonVariety.Roselia,
  PokemonSpecies.Roselia,
);
new class GulpinForm extends Form {}(
  PokemonForm.Gulpin,
  PokemonVariety.Gulpin,
  PokemonSpecies.Gulpin,
);
new class SwalotForm extends Form {}(
  PokemonForm.Swalot,
  PokemonVariety.Swalot,
  PokemonSpecies.Swalot,
);
new class CarvanhaForm extends Form {}(
  PokemonForm.Carvanha,
  PokemonVariety.Carvanha,
  PokemonSpecies.Carvanha,
);
new class SharpedoForm extends Form {}(
  PokemonForm.Sharpedo,
  PokemonVariety.Sharpedo,
  PokemonSpecies.Sharpedo,
);
new class SharpedoMegaForm extends Form {}(
  PokemonForm.SharpedoMega,
  PokemonVariety.SharpedoMega,
  PokemonSpecies.Sharpedo,
);
new class WailmerForm extends Form {}(
  PokemonForm.Wailmer,
  PokemonVariety.Wailmer,
  PokemonSpecies.Wailmer,
);
new class WailordForm extends Form {}(
  PokemonForm.Wailord,
  PokemonVariety.Wailord,
  PokemonSpecies.Wailord,
);
new class NumelForm extends Form {}(
  PokemonForm.Numel,
  PokemonVariety.Numel,
  PokemonSpecies.Numel,
);
new class CameruptForm extends Form {}(
  PokemonForm.Camerupt,
  PokemonVariety.Camerupt,
  PokemonSpecies.Camerupt,
);
new class CameruptMegaForm extends Form {}(
  PokemonForm.CameruptMega,
  PokemonVariety.CameruptMega,
  PokemonSpecies.Camerupt,
);
new class TorkoalForm extends Form {}(
  PokemonForm.Torkoal,
  PokemonVariety.Torkoal,
  PokemonSpecies.Torkoal,
);
new class SpoinkForm extends Form {}(
  PokemonForm.Spoink,
  PokemonVariety.Spoink,
  PokemonSpecies.Spoink,
);
new class GrumpigForm extends Form {}(
  PokemonForm.Grumpig,
  PokemonVariety.Grumpig,
  PokemonSpecies.Grumpig,
);
new class SpindaForm extends Form {}(
  PokemonForm.Spinda,
  PokemonVariety.Spinda,
  PokemonSpecies.Spinda,
);
new class TrapinchForm extends Form {}(
  PokemonForm.Trapinch,
  PokemonVariety.Trapinch,
  PokemonSpecies.Trapinch,
);
new class VibravaForm extends Form {}(
  PokemonForm.Vibrava,
  PokemonVariety.Vibrava,
  PokemonSpecies.Vibrava,
);
new class FlygonForm extends Form {}(
  PokemonForm.Flygon,
  PokemonVariety.Flygon,
  PokemonSpecies.Flygon,
);
new class CacneaForm extends Form {}(
  PokemonForm.Cacnea,
  PokemonVariety.Cacnea,
  PokemonSpecies.Cacnea,
);
new class CacturneForm extends Form {}(
  PokemonForm.Cacturne,
  PokemonVariety.Cacturne,
  PokemonSpecies.Cacturne,
);
new class SwabluForm extends Form {}(
  PokemonForm.Swablu,
  PokemonVariety.Swablu,
  PokemonSpecies.Swablu,
);
new class AltariaForm extends Form {}(
  PokemonForm.Altaria,
  PokemonVariety.Altaria,
  PokemonSpecies.Altaria,
);
new class AltariaMegaForm extends Form {}(
  PokemonForm.AltariaMega,
  PokemonVariety.AltariaMega,
  PokemonSpecies.Altaria,
);
new class ZangooseForm extends Form {}(
  PokemonForm.Zangoose,
  PokemonVariety.Zangoose,
  PokemonSpecies.Zangoose,
);
new class SeviperForm extends Form {}(
  PokemonForm.Seviper,
  PokemonVariety.Seviper,
  PokemonSpecies.Seviper,
);
new class LunatoneForm extends Form {}(
  PokemonForm.Lunatone,
  PokemonVariety.Lunatone,
  PokemonSpecies.Lunatone,
);
new class SolrockForm extends Form {}(
  PokemonForm.Solrock,
  PokemonVariety.Solrock,
  PokemonSpecies.Solrock,
);
new class BarboachForm extends Form {}(
  PokemonForm.Barboach,
  PokemonVariety.Barboach,
  PokemonSpecies.Barboach,
);
new class WhiscashForm extends Form {}(
  PokemonForm.Whiscash,
  PokemonVariety.Whiscash,
  PokemonSpecies.Whiscash,
);
new class CorphishForm extends Form {}(
  PokemonForm.Corphish,
  PokemonVariety.Corphish,
  PokemonSpecies.Corphish,
);
new class CrawdauntForm extends Form {}(
  PokemonForm.Crawdaunt,
  PokemonVariety.Crawdaunt,
  PokemonSpecies.Crawdaunt,
);
new class BaltoyForm extends Form {}(
  PokemonForm.Baltoy,
  PokemonVariety.Baltoy,
  PokemonSpecies.Baltoy,
);
new class ClaydolForm extends Form {}(
  PokemonForm.Claydol,
  PokemonVariety.Claydol,
  PokemonSpecies.Claydol,
);
new class LileepForm extends Form {}(
  PokemonForm.Lileep,
  PokemonVariety.Lileep,
  PokemonSpecies.Lileep,
);
new class CradilyForm extends Form {}(
  PokemonForm.Cradily,
  PokemonVariety.Cradily,
  PokemonSpecies.Cradily,
);
new class AnorithForm extends Form {}(
  PokemonForm.Anorith,
  PokemonVariety.Anorith,
  PokemonSpecies.Anorith,
);
new class ArmaldoForm extends Form {}(
  PokemonForm.Armaldo,
  PokemonVariety.Armaldo,
  PokemonSpecies.Armaldo,
);
new class FeebasForm extends Form {}(
  PokemonForm.Feebas,
  PokemonVariety.Feebas,
  PokemonSpecies.Feebas,
);
new class MiloticForm extends Form {}(
  PokemonForm.Milotic,
  PokemonVariety.Milotic,
  PokemonSpecies.Milotic,
);
new class CastformForm extends Form {}(
  PokemonForm.Castform,
  PokemonVariety.Castform,
  PokemonSpecies.Castform,
);
new class CastformSunnyForm extends Form {}(
  PokemonForm.CastformSunny,
  PokemonVariety.CastformSunny,
  PokemonSpecies.Castform,
);
new class CastformRainyForm extends Form {}(
  PokemonForm.CastformRainy,
  PokemonVariety.CastformRainy,
  PokemonSpecies.Castform,
);
new class CastformSnowyForm extends Form {}(
  PokemonForm.CastformSnowy,
  PokemonVariety.CastformSnowy,
  PokemonSpecies.Castform,
);
new class KecleonForm extends Form {}(
  PokemonForm.Kecleon,
  PokemonVariety.Kecleon,
  PokemonSpecies.Kecleon,
);
new class ShuppetForm extends Form {}(
  PokemonForm.Shuppet,
  PokemonVariety.Shuppet,
  PokemonSpecies.Shuppet,
);
new class BanetteForm extends Form {}(
  PokemonForm.Banette,
  PokemonVariety.Banette,
  PokemonSpecies.Banette,
);
new class BanetteMegaForm extends Form {}(
  PokemonForm.BanetteMega,
  PokemonVariety.BanetteMega,
  PokemonSpecies.Banette,
);
new class DuskullForm extends Form {}(
  PokemonForm.Duskull,
  PokemonVariety.Duskull,
  PokemonSpecies.Duskull,
);
new class DusclopsForm extends Form {}(
  PokemonForm.Dusclops,
  PokemonVariety.Dusclops,
  PokemonSpecies.Dusclops,
);
new class TropiusForm extends Form {}(
  PokemonForm.Tropius,
  PokemonVariety.Tropius,
  PokemonSpecies.Tropius,
);
new class ChimechoForm extends Form {}(
  PokemonForm.Chimecho,
  PokemonVariety.Chimecho,
  PokemonSpecies.Chimecho,
);
new class AbsolForm extends Form {}(
  PokemonForm.Absol,
  PokemonVariety.Absol,
  PokemonSpecies.Absol,
);
new class AbsolMegaForm extends Form {}(
  PokemonForm.AbsolMega,
  PokemonVariety.AbsolMega,
  PokemonSpecies.Absol,
);
new class WynautForm extends Form {}(
  PokemonForm.Wynaut,
  PokemonVariety.Wynaut,
  PokemonSpecies.Wynaut,
);
new class SnoruntForm extends Form {}(
  PokemonForm.Snorunt,
  PokemonVariety.Snorunt,
  PokemonSpecies.Snorunt,
);
new class GlalieForm extends Form {}(
  PokemonForm.Glalie,
  PokemonVariety.Glalie,
  PokemonSpecies.Glalie,
);
new class GlalieMegaForm extends Form {}(
  PokemonForm.GlalieMega,
  PokemonVariety.GlalieMega,
  PokemonSpecies.Glalie,
);
new class SphealForm extends Form {}(
  PokemonForm.Spheal,
  PokemonVariety.Spheal,
  PokemonSpecies.Spheal,
);
new class SealeoForm extends Form {}(
  PokemonForm.Sealeo,
  PokemonVariety.Sealeo,
  PokemonSpecies.Sealeo,
);
new class WalreinForm extends Form {}(
  PokemonForm.Walrein,
  PokemonVariety.Walrein,
  PokemonSpecies.Walrein,
);
new class ClamperlForm extends Form {}(
  PokemonForm.Clamperl,
  PokemonVariety.Clamperl,
  PokemonSpecies.Clamperl,
);
new class HuntailForm extends Form {}(
  PokemonForm.Huntail,
  PokemonVariety.Huntail,
  PokemonSpecies.Huntail,
);
new class GorebyssForm extends Form {}(
  PokemonForm.Gorebyss,
  PokemonVariety.Gorebyss,
  PokemonSpecies.Gorebyss,
);
new class RelicanthForm extends Form {}(
  PokemonForm.Relicanth,
  PokemonVariety.Relicanth,
  PokemonSpecies.Relicanth,
);
new class LuvdiscForm extends Form {}(
  PokemonForm.Luvdisc,
  PokemonVariety.Luvdisc,
  PokemonSpecies.Luvdisc,
);
new class BagonForm extends Form {}(
  PokemonForm.Bagon,
  PokemonVariety.Bagon,
  PokemonSpecies.Bagon,
);
new class ShelgonForm extends Form {}(
  PokemonForm.Shelgon,
  PokemonVariety.Shelgon,
  PokemonSpecies.Shelgon,
);
new class SalamenceForm extends Form {}(
  PokemonForm.Salamence,
  PokemonVariety.Salamence,
  PokemonSpecies.Salamence,
);
new class SalamenceMegaForm extends Form {}(
  PokemonForm.SalamenceMega,
  PokemonVariety.SalamenceMega,
  PokemonSpecies.Salamence,
);
new class BeldumForm extends Form {}(
  PokemonForm.Beldum,
  PokemonVariety.Beldum,
  PokemonSpecies.Beldum,
);
new class MetangForm extends Form {}(
  PokemonForm.Metang,
  PokemonVariety.Metang,
  PokemonSpecies.Metang,
);
new class MetagrossForm extends Form {}(
  PokemonForm.Metagross,
  PokemonVariety.Metagross,
  PokemonSpecies.Metagross,
);
new class MetagrossMegaForm extends Form {}(
  PokemonForm.MetagrossMega,
  PokemonVariety.MetagrossMega,
  PokemonSpecies.Metagross,
);
new class RegirockForm extends Form {}(
  PokemonForm.Regirock,
  PokemonVariety.Regirock,
  PokemonSpecies.Regirock,
);
new class RegiceForm extends Form {}(
  PokemonForm.Regice,
  PokemonVariety.Regice,
  PokemonSpecies.Regice,
);
new class RegisteelForm extends Form {}(
  PokemonForm.Registeel,
  PokemonVariety.Registeel,
  PokemonSpecies.Registeel,
);
new class LatiasForm extends Form {}(
  PokemonForm.Latias,
  PokemonVariety.Latias,
  PokemonSpecies.Latias,
);
new class LatiasMegaForm extends Form {}(
  PokemonForm.LatiasMega,
  PokemonVariety.LatiasMega,
  PokemonSpecies.Latias,
);
new class LatiosForm extends Form {}(
  PokemonForm.Latios,
  PokemonVariety.Latios,
  PokemonSpecies.Latios,
);
new class LatiosMegaForm extends Form {}(
  PokemonForm.LatiosMega,
  PokemonVariety.LatiosMega,
  PokemonSpecies.Latios,
);
new class KyogreForm extends Form {}(
  PokemonForm.Kyogre,
  PokemonVariety.Kyogre,
  PokemonSpecies.Kyogre,
);
new class KyogrePrimalForm extends Form {}(
  PokemonForm.KyogrePrimal,
  PokemonVariety.KyogrePrimal,
  PokemonSpecies.Kyogre,
);
new class GroudonForm extends Form {}(
  PokemonForm.Groudon,
  PokemonVariety.Groudon,
  PokemonSpecies.Groudon,
);
new class GroudonPrimalForm extends Form {}(
  PokemonForm.GroudonPrimal,
  PokemonVariety.GroudonPrimal,
  PokemonSpecies.Groudon,
);
new class RayquazaForm extends Form {}(
  PokemonForm.Rayquaza,
  PokemonVariety.Rayquaza,
  PokemonSpecies.Rayquaza,
);
new class RayquazaMegaForm extends Form {}(
  PokemonForm.RayquazaMega,
  PokemonVariety.RayquazaMega,
  PokemonSpecies.Rayquaza,
);
new class JirachiForm extends Form {}(
  PokemonForm.Jirachi,
  PokemonVariety.Jirachi,
  PokemonSpecies.Jirachi,
);
new class DeoxysNormalForm extends Form {}(
  PokemonForm.DeoxysNormal,
  PokemonVariety.DeoxysNormal,
  PokemonSpecies.Deoxys,
);
new class DeoxysAttackForm extends Form {}(
  PokemonForm.DeoxysAttack,
  PokemonVariety.DeoxysAttack,
  PokemonSpecies.Deoxys,
);
new class DeoxysDefenseForm extends Form {}(
  PokemonForm.DeoxysDefense,
  PokemonVariety.DeoxysDefense,
  PokemonSpecies.Deoxys,
);
new class DeoxysSpeedForm extends Form {}(
  PokemonForm.DeoxysSpeed,
  PokemonVariety.DeoxysSpeed,
  PokemonSpecies.Deoxys,
);
new class TurtwigForm extends Form {}(
  PokemonForm.Turtwig,
  PokemonVariety.Turtwig,
  PokemonSpecies.Turtwig,
);
new class GrotleForm extends Form {}(
  PokemonForm.Grotle,
  PokemonVariety.Grotle,
  PokemonSpecies.Grotle,
);
new class TorterraForm extends Form {}(
  PokemonForm.Torterra,
  PokemonVariety.Torterra,
  PokemonSpecies.Torterra,
);
new class ChimcharForm extends Form {}(
  PokemonForm.Chimchar,
  PokemonVariety.Chimchar,
  PokemonSpecies.Chimchar,
);
new class MonfernoForm extends Form {}(
  PokemonForm.Monferno,
  PokemonVariety.Monferno,
  PokemonSpecies.Monferno,
);
new class InfernapeForm extends Form {}(
  PokemonForm.Infernape,
  PokemonVariety.Infernape,
  PokemonSpecies.Infernape,
);
new class PiplupForm extends Form {}(
  PokemonForm.Piplup,
  PokemonVariety.Piplup,
  PokemonSpecies.Piplup,
);
new class PrinplupForm extends Form {}(
  PokemonForm.Prinplup,
  PokemonVariety.Prinplup,
  PokemonSpecies.Prinplup,
);
new class EmpoleonForm extends Form {}(
  PokemonForm.Empoleon,
  PokemonVariety.Empoleon,
  PokemonSpecies.Empoleon,
);
new class StarlyForm extends Form {}(
  PokemonForm.Starly,
  PokemonVariety.Starly,
  PokemonSpecies.Starly,
);
new class StaraviaForm extends Form {}(
  PokemonForm.Staravia,
  PokemonVariety.Staravia,
  PokemonSpecies.Staravia,
);
new class StaraptorForm extends Form {}(
  PokemonForm.Staraptor,
  PokemonVariety.Staraptor,
  PokemonSpecies.Staraptor,
);
new class BidoofForm extends Form {}(
  PokemonForm.Bidoof,
  PokemonVariety.Bidoof,
  PokemonSpecies.Bidoof,
);
new class BibarelForm extends Form {}(
  PokemonForm.Bibarel,
  PokemonVariety.Bibarel,
  PokemonSpecies.Bibarel,
);
new class KricketotForm extends Form {}(
  PokemonForm.Kricketot,
  PokemonVariety.Kricketot,
  PokemonSpecies.Kricketot,
);
new class KricketuneForm extends Form {}(
  PokemonForm.Kricketune,
  PokemonVariety.Kricketune,
  PokemonSpecies.Kricketune,
);
new class ShinxForm extends Form {}(
  PokemonForm.Shinx,
  PokemonVariety.Shinx,
  PokemonSpecies.Shinx,
);
new class LuxioForm extends Form {}(
  PokemonForm.Luxio,
  PokemonVariety.Luxio,
  PokemonSpecies.Luxio,
);
new class LuxrayForm extends Form {}(
  PokemonForm.Luxray,
  PokemonVariety.Luxray,
  PokemonSpecies.Luxray,
);
new class BudewForm extends Form {}(
  PokemonForm.Budew,
  PokemonVariety.Budew,
  PokemonSpecies.Budew,
);
new class RoseradeForm extends Form {}(
  PokemonForm.Roserade,
  PokemonVariety.Roserade,
  PokemonSpecies.Roserade,
);
new class CranidosForm extends Form {}(
  PokemonForm.Cranidos,
  PokemonVariety.Cranidos,
  PokemonSpecies.Cranidos,
);
new class RampardosForm extends Form {}(
  PokemonForm.Rampardos,
  PokemonVariety.Rampardos,
  PokemonSpecies.Rampardos,
);
new class ShieldonForm extends Form {}(
  PokemonForm.Shieldon,
  PokemonVariety.Shieldon,
  PokemonSpecies.Shieldon,
);
new class BastiodonForm extends Form {}(
  PokemonForm.Bastiodon,
  PokemonVariety.Bastiodon,
  PokemonSpecies.Bastiodon,
);
new class BurmyPlantForm extends Form {}(
  PokemonForm.BurmyPlant,
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
);
new class BurmySandyForm extends Form {}(
  PokemonForm.BurmySandy,
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
);
new class BurmyTrashForm extends Form {}(
  PokemonForm.BurmyTrash,
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
);
new class WormadamPlantForm extends Form {}(
  PokemonForm.WormadamPlant,
  PokemonVariety.WormadamPlant,
  PokemonSpecies.Wormadam,
);
new class WormadamSandyForm extends Form {}(
  PokemonForm.WormadamSandy,
  PokemonVariety.WormadamSandy,
  PokemonSpecies.Wormadam,
);
new class WormadamTrashForm extends Form {}(
  PokemonForm.WormadamTrash,
  PokemonVariety.WormadamTrash,
  PokemonSpecies.Wormadam,
);
new class MothimPlantForm extends Form {}(
  PokemonForm.MothimPlant,
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
);
new class MothimSandyForm extends Form {}(
  PokemonForm.MothimSandy,
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
);
new class MothimTrashForm extends Form {}(
  PokemonForm.MothimTrash,
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
);
new class CombeeForm extends Form {}(
  PokemonForm.Combee,
  PokemonVariety.Combee,
  PokemonSpecies.Combee,
);
new class VespiquenForm extends Form {}(
  PokemonForm.Vespiquen,
  PokemonVariety.Vespiquen,
  PokemonSpecies.Vespiquen,
);
new class PachirisuForm extends Form {}(
  PokemonForm.Pachirisu,
  PokemonVariety.Pachirisu,
  PokemonSpecies.Pachirisu,
);
new class BuizelForm extends Form {}(
  PokemonForm.Buizel,
  PokemonVariety.Buizel,
  PokemonSpecies.Buizel,
);
new class FloatzelForm extends Form {}(
  PokemonForm.Floatzel,
  PokemonVariety.Floatzel,
  PokemonSpecies.Floatzel,
);
new class CherubiForm extends Form {}(
  PokemonForm.Cherubi,
  PokemonVariety.Cherubi,
  PokemonSpecies.Cherubi,
);
new class CherrimOvercastForm extends Form {}(
  PokemonForm.CherrimOvercast,
  PokemonVariety.Cherrim,
  PokemonSpecies.Cherrim,
);
new class CherrimSunshineForm extends Form {}(
  PokemonForm.CherrimSunshine,
  PokemonVariety.Cherrim,
  PokemonSpecies.Cherrim,
);
new class ShellosWestForm extends Form {}(
  PokemonForm.ShellosWest,
  PokemonVariety.Shellos,
  PokemonSpecies.Shellos,
);
new class ShellosEastForm extends Form {}(
  PokemonForm.ShellosEast,
  PokemonVariety.Shellos,
  PokemonSpecies.Shellos,
);
new class GastrodonWestForm extends Form {}(
  PokemonForm.GastrodonWest,
  PokemonVariety.Gastrodon,
  PokemonSpecies.Gastrodon,
);
new class GastrodonEastForm extends Form {}(
  PokemonForm.GastrodonEast,
  PokemonVariety.Gastrodon,
  PokemonSpecies.Gastrodon,
);
new class AmbipomForm extends Form {}(
  PokemonForm.Ambipom,
  PokemonVariety.Ambipom,
  PokemonSpecies.Ambipom,
);
new class DrifloonForm extends Form {}(
  PokemonForm.Drifloon,
  PokemonVariety.Drifloon,
  PokemonSpecies.Drifloon,
);
new class DrifblimForm extends Form {}(
  PokemonForm.Drifblim,
  PokemonVariety.Drifblim,
  PokemonSpecies.Drifblim,
);
new class BunearyForm extends Form {}(
  PokemonForm.Buneary,
  PokemonVariety.Buneary,
  PokemonSpecies.Buneary,
);
new class LopunnyForm extends Form {}(
  PokemonForm.Lopunny,
  PokemonVariety.Lopunny,
  PokemonSpecies.Lopunny,
);
new class LopunnyMegaForm extends Form {}(
  PokemonForm.LopunnyMega,
  PokemonVariety.LopunnyMega,
  PokemonSpecies.Lopunny,
);
new class MismagiusForm extends Form {}(
  PokemonForm.Mismagius,
  PokemonVariety.Mismagius,
  PokemonSpecies.Mismagius,
);
new class HonchkrowForm extends Form {}(
  PokemonForm.Honchkrow,
  PokemonVariety.Honchkrow,
  PokemonSpecies.Honchkrow,
);
new class GlameowForm extends Form {}(
  PokemonForm.Glameow,
  PokemonVariety.Glameow,
  PokemonSpecies.Glameow,
);
new class PuruglyForm extends Form {}(
  PokemonForm.Purugly,
  PokemonVariety.Purugly,
  PokemonSpecies.Purugly,
);
new class ChinglingForm extends Form {}(
  PokemonForm.Chingling,
  PokemonVariety.Chingling,
  PokemonSpecies.Chingling,
);
new class StunkyForm extends Form {}(
  PokemonForm.Stunky,
  PokemonVariety.Stunky,
  PokemonSpecies.Stunky,
);
new class SkuntankForm extends Form {}(
  PokemonForm.Skuntank,
  PokemonVariety.Skuntank,
  PokemonSpecies.Skuntank,
);
new class BronzorForm extends Form {}(
  PokemonForm.Bronzor,
  PokemonVariety.Bronzor,
  PokemonSpecies.Bronzor,
);
new class BronzongForm extends Form {}(
  PokemonForm.Bronzong,
  PokemonVariety.Bronzong,
  PokemonSpecies.Bronzong,
);
new class BonslyForm extends Form {}(
  PokemonForm.Bonsly,
  PokemonVariety.Bonsly,
  PokemonSpecies.Bonsly,
);
new class MimeJrForm extends Form {}(
  PokemonForm.MimeJr,
  PokemonVariety.MimeJr,
  PokemonSpecies.MimeJr,
);
new class HappinyForm extends Form {}(
  PokemonForm.Happiny,
  PokemonVariety.Happiny,
  PokemonSpecies.Happiny,
);
new class ChatotForm extends Form {}(
  PokemonForm.Chatot,
  PokemonVariety.Chatot,
  PokemonSpecies.Chatot,
);
new class SpiritombForm extends Form {}(
  PokemonForm.Spiritomb,
  PokemonVariety.Spiritomb,
  PokemonSpecies.Spiritomb,
);
new class GibleForm extends Form {}(
  PokemonForm.Gible,
  PokemonVariety.Gible,
  PokemonSpecies.Gible,
);
new class GabiteForm extends Form {}(
  PokemonForm.Gabite,
  PokemonVariety.Gabite,
  PokemonSpecies.Gabite,
);
new class GarchompForm extends Form {}(
  PokemonForm.Garchomp,
  PokemonVariety.Garchomp,
  PokemonSpecies.Garchomp,
);
new class GarchompMegaForm extends Form {}(
  PokemonForm.GarchompMega,
  PokemonVariety.GarchompMega,
  PokemonSpecies.Garchomp,
);
new class MunchlaxForm extends Form {}(
  PokemonForm.Munchlax,
  PokemonVariety.Munchlax,
  PokemonSpecies.Munchlax,
);
new class RioluForm extends Form {}(
  PokemonForm.Riolu,
  PokemonVariety.Riolu,
  PokemonSpecies.Riolu,
);
new class LucarioForm extends Form {}(
  PokemonForm.Lucario,
  PokemonVariety.Lucario,
  PokemonSpecies.Lucario,
);
new class LucarioMegaForm extends Form {}(
  PokemonForm.LucarioMega,
  PokemonVariety.LucarioMega,
  PokemonSpecies.Lucario,
);
new class HippopotasForm extends Form {}(
  PokemonForm.Hippopotas,
  PokemonVariety.Hippopotas,
  PokemonSpecies.Hippopotas,
);
new class HippowdonForm extends Form {}(
  PokemonForm.Hippowdon,
  PokemonVariety.Hippowdon,
  PokemonSpecies.Hippowdon,
);
new class SkorupiForm extends Form {}(
  PokemonForm.Skorupi,
  PokemonVariety.Skorupi,
  PokemonSpecies.Skorupi,
);
new class DrapionForm extends Form {}(
  PokemonForm.Drapion,
  PokemonVariety.Drapion,
  PokemonSpecies.Drapion,
);
new class CroagunkForm extends Form {}(
  PokemonForm.Croagunk,
  PokemonVariety.Croagunk,
  PokemonSpecies.Croagunk,
);
new class ToxicroakForm extends Form {}(
  PokemonForm.Toxicroak,
  PokemonVariety.Toxicroak,
  PokemonSpecies.Toxicroak,
);
new class CarnivineForm extends Form {}(
  PokemonForm.Carnivine,
  PokemonVariety.Carnivine,
  PokemonSpecies.Carnivine,
);
new class FinneonForm extends Form {}(
  PokemonForm.Finneon,
  PokemonVariety.Finneon,
  PokemonSpecies.Finneon,
);
new class LumineonForm extends Form {}(
  PokemonForm.Lumineon,
  PokemonVariety.Lumineon,
  PokemonSpecies.Lumineon,
);
new class MantykeForm extends Form {}(
  PokemonForm.Mantyke,
  PokemonVariety.Mantyke,
  PokemonSpecies.Mantyke,
);
new class SnoverForm extends Form {}(
  PokemonForm.Snover,
  PokemonVariety.Snover,
  PokemonSpecies.Snover,
);
new class AbomasnowForm extends Form {}(
  PokemonForm.Abomasnow,
  PokemonVariety.Abomasnow,
  PokemonSpecies.Abomasnow,
);
new class AbomasnowMegaForm extends Form {}(
  PokemonForm.AbomasnowMega,
  PokemonVariety.AbomasnowMega,
  PokemonSpecies.Abomasnow,
);
new class WeavileForm extends Form {}(
  PokemonForm.Weavile,
  PokemonVariety.Weavile,
  PokemonSpecies.Weavile,
);
new class MagnezoneForm extends Form {}(
  PokemonForm.Magnezone,
  PokemonVariety.Magnezone,
  PokemonSpecies.Magnezone,
);
new class LickilickyForm extends Form {}(
  PokemonForm.Lickilicky,
  PokemonVariety.Lickilicky,
  PokemonSpecies.Lickilicky,
);
new class RhyperiorForm extends Form {}(
  PokemonForm.Rhyperior,
  PokemonVariety.Rhyperior,
  PokemonSpecies.Rhyperior,
);
new class TangrowthForm extends Form {}(
  PokemonForm.Tangrowth,
  PokemonVariety.Tangrowth,
  PokemonSpecies.Tangrowth,
);
new class ElectivireForm extends Form {}(
  PokemonForm.Electivire,
  PokemonVariety.Electivire,
  PokemonSpecies.Electivire,
);
new class MagmortarForm extends Form {}(
  PokemonForm.Magmortar,
  PokemonVariety.Magmortar,
  PokemonSpecies.Magmortar,
);
new class TogekissForm extends Form {}(
  PokemonForm.Togekiss,
  PokemonVariety.Togekiss,
  PokemonSpecies.Togekiss,
);
new class YanmegaForm extends Form {}(
  PokemonForm.Yanmega,
  PokemonVariety.Yanmega,
  PokemonSpecies.Yanmega,
);
new class LeafeonForm extends Form {}(
  PokemonForm.Leafeon,
  PokemonVariety.Leafeon,
  PokemonSpecies.Leafeon,
);
new class GlaceonForm extends Form {}(
  PokemonForm.Glaceon,
  PokemonVariety.Glaceon,
  PokemonSpecies.Glaceon,
);
new class GliscorForm extends Form {}(
  PokemonForm.Gliscor,
  PokemonVariety.Gliscor,
  PokemonSpecies.Gliscor,
);
new class MamoswineForm extends Form {}(
  PokemonForm.Mamoswine,
  PokemonVariety.Mamoswine,
  PokemonSpecies.Mamoswine,
);
new class PorygonZForm extends Form {}(
  PokemonForm.PorygonZ,
  PokemonVariety.PorygonZ,
  PokemonSpecies.PorygonZ,
);
new class GalladeForm extends Form {}(
  PokemonForm.Gallade,
  PokemonVariety.Gallade,
  PokemonSpecies.Gallade,
);
new class GalladeMegaForm extends Form {}(
  PokemonForm.GalladeMega,
  PokemonVariety.GalladeMega,
  PokemonSpecies.Gallade,
);
new class ProbopassForm extends Form {}(
  PokemonForm.Probopass,
  PokemonVariety.Probopass,
  PokemonSpecies.Probopass,
);
new class DusknoirForm extends Form {}(
  PokemonForm.Dusknoir,
  PokemonVariety.Dusknoir,
  PokemonSpecies.Dusknoir,
);
new class FroslassForm extends Form {}(
  PokemonForm.Froslass,
  PokemonVariety.Froslass,
  PokemonSpecies.Froslass,
);
new class RotomForm extends Form {}(
  PokemonForm.Rotom,
  PokemonVariety.Rotom,
  PokemonSpecies.Rotom,
);
new class RotomHeatForm extends Form {}(
  PokemonForm.RotomHeat,
  PokemonVariety.RotomHeat,
  PokemonSpecies.Rotom,
);
new class RotomWashForm extends Form {}(
  PokemonForm.RotomWash,
  PokemonVariety.RotomWash,
  PokemonSpecies.Rotom,
);
new class RotomFrostForm extends Form {}(
  PokemonForm.RotomFrost,
  PokemonVariety.RotomFrost,
  PokemonSpecies.Rotom,
);
new class RotomFanForm extends Form {}(
  PokemonForm.RotomFan,
  PokemonVariety.RotomFan,
  PokemonSpecies.Rotom,
);
new class RotomMowForm extends Form {}(
  PokemonForm.RotomMow,
  PokemonVariety.RotomMow,
  PokemonSpecies.Rotom,
);
new class UxieForm extends Form {}(
  PokemonForm.Uxie,
  PokemonVariety.Uxie,
  PokemonSpecies.Uxie,
);
new class MespritForm extends Form {}(
  PokemonForm.Mesprit,
  PokemonVariety.Mesprit,
  PokemonSpecies.Mesprit,
);
new class AzelfForm extends Form {}(
  PokemonForm.Azelf,
  PokemonVariety.Azelf,
  PokemonSpecies.Azelf,
);
new class DialgaForm extends Form {}(
  PokemonForm.Dialga,
  PokemonVariety.Dialga,
  PokemonSpecies.Dialga,
);
new class DialgaOriginForm extends Form {}(
  PokemonForm.DialgaOrigin,
  PokemonVariety.DialgaOrigin,
  PokemonSpecies.Dialga,
);
new class PalkiaForm extends Form {}(
  PokemonForm.Palkia,
  PokemonVariety.Palkia,
  PokemonSpecies.Palkia,
);
new class PalkiaOriginForm extends Form {}(
  PokemonForm.PalkiaOrigin,
  PokemonVariety.PalkiaOrigin,
  PokemonSpecies.Palkia,
);
new class HeatranForm extends Form {}(
  PokemonForm.Heatran,
  PokemonVariety.Heatran,
  PokemonSpecies.Heatran,
);
new class RegigigasForm extends Form {}(
  PokemonForm.Regigigas,
  PokemonVariety.Regigigas,
  PokemonSpecies.Regigigas,
);
new class GiratinaAlteredForm extends Form {}(
  PokemonForm.GiratinaAltered,
  PokemonVariety.GiratinaAltered,
  PokemonSpecies.Giratina,
);
new class GiratinaOriginForm extends Form {}(
  PokemonForm.GiratinaOrigin,
  PokemonVariety.GiratinaOrigin,
  PokemonSpecies.Giratina,
);
new class CresseliaForm extends Form {}(
  PokemonForm.Cresselia,
  PokemonVariety.Cresselia,
  PokemonSpecies.Cresselia,
);
new class PhioneForm extends Form {}(
  PokemonForm.Phione,
  PokemonVariety.Phione,
  PokemonSpecies.Phione,
);
new class ManaphyForm extends Form {}(
  PokemonForm.Manaphy,
  PokemonVariety.Manaphy,
  PokemonSpecies.Manaphy,
);
new class DarkraiForm extends Form {}(
  PokemonForm.Darkrai,
  PokemonVariety.Darkrai,
  PokemonSpecies.Darkrai,
);
new class ShayminLandForm extends Form {}(
  PokemonForm.ShayminLand,
  PokemonVariety.ShayminLand,
  PokemonSpecies.Shaymin,
);
new class ShayminSkyForm extends Form {}(
  PokemonForm.ShayminSky,
  PokemonVariety.ShayminSky,
  PokemonSpecies.Shaymin,
);
new class ArceusNormalForm extends Form {}(
  PokemonForm.ArceusNormal,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusBugForm extends Form {}(
  PokemonForm.ArceusBug,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusDarkForm extends Form {}(
  PokemonForm.ArceusDark,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusDragonForm extends Form {}(
  PokemonForm.ArceusDragon,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusElectricForm extends Form {}(
  PokemonForm.ArceusElectric,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusFightingForm extends Form {}(
  PokemonForm.ArceusFighting,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusFireForm extends Form {}(
  PokemonForm.ArceusFire,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusFlyingForm extends Form {}(
  PokemonForm.ArceusFlying,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusGhostForm extends Form {}(
  PokemonForm.ArceusGhost,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusGrassForm extends Form {}(
  PokemonForm.ArceusGrass,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusGroundForm extends Form {}(
  PokemonForm.ArceusGround,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusIceForm extends Form {}(
  PokemonForm.ArceusIce,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusPoisonForm extends Form {}(
  PokemonForm.ArceusPoison,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusPsychicForm extends Form {}(
  PokemonForm.ArceusPsychic,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusRockForm extends Form {}(
  PokemonForm.ArceusRock,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusSteelForm extends Form {}(
  PokemonForm.ArceusSteel,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusWaterForm extends Form {}(
  PokemonForm.ArceusWater,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusUnknownForm extends Form {}(
  PokemonForm.ArceusUnknown,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class ArceusFairyForm extends Form {}(
  PokemonForm.ArceusFairy,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
);
new class VictiniForm extends Form {}(
  PokemonForm.Victini,
  PokemonVariety.Victini,
  PokemonSpecies.Victini,
);
new class SnivyForm extends Form {}(
  PokemonForm.Snivy,
  PokemonVariety.Snivy,
  PokemonSpecies.Snivy,
);
new class ServineForm extends Form {}(
  PokemonForm.Servine,
  PokemonVariety.Servine,
  PokemonSpecies.Servine,
);
new class SerperiorForm extends Form {}(
  PokemonForm.Serperior,
  PokemonVariety.Serperior,
  PokemonSpecies.Serperior,
);
new class TepigForm extends Form {}(
  PokemonForm.Tepig,
  PokemonVariety.Tepig,
  PokemonSpecies.Tepig,
);
new class PigniteForm extends Form {}(
  PokemonForm.Pignite,
  PokemonVariety.Pignite,
  PokemonSpecies.Pignite,
);
new class EmboarForm extends Form {}(
  PokemonForm.Emboar,
  PokemonVariety.Emboar,
  PokemonSpecies.Emboar,
);
new class OshawottForm extends Form {}(
  PokemonForm.Oshawott,
  PokemonVariety.Oshawott,
  PokemonSpecies.Oshawott,
);
new class DewottForm extends Form {}(
  PokemonForm.Dewott,
  PokemonVariety.Dewott,
  PokemonSpecies.Dewott,
);
new class SamurottForm extends Form {}(
  PokemonForm.Samurott,
  PokemonVariety.Samurott,
  PokemonSpecies.Samurott,
);
new class SamurottHisuiForm extends Form {}(
  PokemonForm.SamurottHisui,
  PokemonVariety.SamurottHisui,
  PokemonSpecies.Samurott,
);
new class PatratForm extends Form {}(
  PokemonForm.Patrat,
  PokemonVariety.Patrat,
  PokemonSpecies.Patrat,
);
new class WatchogForm extends Form {}(
  PokemonForm.Watchog,
  PokemonVariety.Watchog,
  PokemonSpecies.Watchog,
);
new class LillipupForm extends Form {}(
  PokemonForm.Lillipup,
  PokemonVariety.Lillipup,
  PokemonSpecies.Lillipup,
);
new class HerdierForm extends Form {}(
  PokemonForm.Herdier,
  PokemonVariety.Herdier,
  PokemonSpecies.Herdier,
);
new class StoutlandForm extends Form {}(
  PokemonForm.Stoutland,
  PokemonVariety.Stoutland,
  PokemonSpecies.Stoutland,
);
new class PurrloinForm extends Form {}(
  PokemonForm.Purrloin,
  PokemonVariety.Purrloin,
  PokemonSpecies.Purrloin,
);
new class LiepardForm extends Form {}(
  PokemonForm.Liepard,
  PokemonVariety.Liepard,
  PokemonSpecies.Liepard,
);
new class PansageForm extends Form {}(
  PokemonForm.Pansage,
  PokemonVariety.Pansage,
  PokemonSpecies.Pansage,
);
new class SimisageForm extends Form {}(
  PokemonForm.Simisage,
  PokemonVariety.Simisage,
  PokemonSpecies.Simisage,
);
new class PansearForm extends Form {}(
  PokemonForm.Pansear,
  PokemonVariety.Pansear,
  PokemonSpecies.Pansear,
);
new class SimisearForm extends Form {}(
  PokemonForm.Simisear,
  PokemonVariety.Simisear,
  PokemonSpecies.Simisear,
);
new class PanpourForm extends Form {}(
  PokemonForm.Panpour,
  PokemonVariety.Panpour,
  PokemonSpecies.Panpour,
);
new class SimipourForm extends Form {}(
  PokemonForm.Simipour,
  PokemonVariety.Simipour,
  PokemonSpecies.Simipour,
);
new class MunnaForm extends Form {}(
  PokemonForm.Munna,
  PokemonVariety.Munna,
  PokemonSpecies.Munna,
);
new class MusharnaForm extends Form {}(
  PokemonForm.Musharna,
  PokemonVariety.Musharna,
  PokemonSpecies.Musharna,
);
new class PidoveForm extends Form {}(
  PokemonForm.Pidove,
  PokemonVariety.Pidove,
  PokemonSpecies.Pidove,
);
new class TranquillForm extends Form {}(
  PokemonForm.Tranquill,
  PokemonVariety.Tranquill,
  PokemonSpecies.Tranquill,
);
new class UnfezantForm extends Form {}(
  PokemonForm.Unfezant,
  PokemonVariety.Unfezant,
  PokemonSpecies.Unfezant,
);
new class BlitzleForm extends Form {}(
  PokemonForm.Blitzle,
  PokemonVariety.Blitzle,
  PokemonSpecies.Blitzle,
);
new class ZebstrikaForm extends Form {}(
  PokemonForm.Zebstrika,
  PokemonVariety.Zebstrika,
  PokemonSpecies.Zebstrika,
);
new class RoggenrolaForm extends Form {}(
  PokemonForm.Roggenrola,
  PokemonVariety.Roggenrola,
  PokemonSpecies.Roggenrola,
);
new class BoldoreForm extends Form {}(
  PokemonForm.Boldore,
  PokemonVariety.Boldore,
  PokemonSpecies.Boldore,
);
new class GigalithForm extends Form {}(
  PokemonForm.Gigalith,
  PokemonVariety.Gigalith,
  PokemonSpecies.Gigalith,
);
new class WoobatForm extends Form {}(
  PokemonForm.Woobat,
  PokemonVariety.Woobat,
  PokemonSpecies.Woobat,
);
new class SwoobatForm extends Form {}(
  PokemonForm.Swoobat,
  PokemonVariety.Swoobat,
  PokemonSpecies.Swoobat,
);
new class DrilburForm extends Form {}(
  PokemonForm.Drilbur,
  PokemonVariety.Drilbur,
  PokemonSpecies.Drilbur,
);
new class ExcadrillForm extends Form {}(
  PokemonForm.Excadrill,
  PokemonVariety.Excadrill,
  PokemonSpecies.Excadrill,
);
new class AudinoForm extends Form {}(
  PokemonForm.Audino,
  PokemonVariety.Audino,
  PokemonSpecies.Audino,
);
new class AudinoMegaForm extends Form {}(
  PokemonForm.AudinoMega,
  PokemonVariety.AudinoMega,
  PokemonSpecies.Audino,
);
new class TimburrForm extends Form {}(
  PokemonForm.Timburr,
  PokemonVariety.Timburr,
  PokemonSpecies.Timburr,
);
new class GurdurrForm extends Form {}(
  PokemonForm.Gurdurr,
  PokemonVariety.Gurdurr,
  PokemonSpecies.Gurdurr,
);
new class ConkeldurrForm extends Form {}(
  PokemonForm.Conkeldurr,
  PokemonVariety.Conkeldurr,
  PokemonSpecies.Conkeldurr,
);
new class TympoleForm extends Form {}(
  PokemonForm.Tympole,
  PokemonVariety.Tympole,
  PokemonSpecies.Tympole,
);
new class PalpitoadForm extends Form {}(
  PokemonForm.Palpitoad,
  PokemonVariety.Palpitoad,
  PokemonSpecies.Palpitoad,
);
new class SeismitoadForm extends Form {}(
  PokemonForm.Seismitoad,
  PokemonVariety.Seismitoad,
  PokemonSpecies.Seismitoad,
);
new class ThrohForm extends Form {}(
  PokemonForm.Throh,
  PokemonVariety.Throh,
  PokemonSpecies.Throh,
);
new class SawkForm extends Form {}(
  PokemonForm.Sawk,
  PokemonVariety.Sawk,
  PokemonSpecies.Sawk,
);
new class SewaddleForm extends Form {}(
  PokemonForm.Sewaddle,
  PokemonVariety.Sewaddle,
  PokemonSpecies.Sewaddle,
);
new class SwadloonForm extends Form {}(
  PokemonForm.Swadloon,
  PokemonVariety.Swadloon,
  PokemonSpecies.Swadloon,
);
new class LeavannyForm extends Form {}(
  PokemonForm.Leavanny,
  PokemonVariety.Leavanny,
  PokemonSpecies.Leavanny,
);
new class VenipedeForm extends Form {}(
  PokemonForm.Venipede,
  PokemonVariety.Venipede,
  PokemonSpecies.Venipede,
);
new class WhirlipedeForm extends Form {}(
  PokemonForm.Whirlipede,
  PokemonVariety.Whirlipede,
  PokemonSpecies.Whirlipede,
);
new class ScolipedeForm extends Form {}(
  PokemonForm.Scolipede,
  PokemonVariety.Scolipede,
  PokemonSpecies.Scolipede,
);
new class CottoneeForm extends Form {}(
  PokemonForm.Cottonee,
  PokemonVariety.Cottonee,
  PokemonSpecies.Cottonee,
);
new class WhimsicottForm extends Form {}(
  PokemonForm.Whimsicott,
  PokemonVariety.Whimsicott,
  PokemonSpecies.Whimsicott,
);
new class PetililForm extends Form {}(
  PokemonForm.Petilil,
  PokemonVariety.Petilil,
  PokemonSpecies.Petilil,
);
new class LilligantForm extends Form {}(
  PokemonForm.Lilligant,
  PokemonVariety.Lilligant,
  PokemonSpecies.Lilligant,
);
new class LilligantHisuiForm extends Form {}(
  PokemonForm.LilligantHisui,
  PokemonVariety.LilligantHisui,
  PokemonSpecies.Lilligant,
);
new class BasculinRedStripedForm extends Form {}(
  PokemonForm.BasculinRedStriped,
  PokemonVariety.BasculinRedStriped,
  PokemonSpecies.Basculin,
);
new class BasculinBlueStripedForm extends Form {}(
  PokemonForm.BasculinBlueStriped,
  PokemonVariety.BasculinBlueStriped,
  PokemonSpecies.Basculin,
);
new class BasculinWhiteStripedForm extends Form {}(
  PokemonForm.BasculinWhiteStriped,
  PokemonVariety.BasculinWhiteStriped,
  PokemonSpecies.Basculin,
);
new class SandileForm extends Form {}(
  PokemonForm.Sandile,
  PokemonVariety.Sandile,
  PokemonSpecies.Sandile,
);
new class KrokorokForm extends Form {}(
  PokemonForm.Krokorok,
  PokemonVariety.Krokorok,
  PokemonSpecies.Krokorok,
);
new class KrookodileForm extends Form {}(
  PokemonForm.Krookodile,
  PokemonVariety.Krookodile,
  PokemonSpecies.Krookodile,
);
new class DarumakaForm extends Form {}(
  PokemonForm.Darumaka,
  PokemonVariety.Darumaka,
  PokemonSpecies.Darumaka,
);
new class DarumakaGalarForm extends Form {}(
  PokemonForm.DarumakaGalar,
  PokemonVariety.DarumakaGalar,
  PokemonSpecies.Darumaka,
);
new class DarmanitanStandardForm extends Form {}(
  PokemonForm.DarmanitanStandard,
  PokemonVariety.DarmanitanStandard,
  PokemonSpecies.Darmanitan,
);
new class DarmanitanZenForm extends Form {}(
  PokemonForm.DarmanitanZen,
  PokemonVariety.DarmanitanZen,
  PokemonSpecies.Darmanitan,
);
new class DarmanitanGalarStandardForm extends Form {}(
  PokemonForm.DarmanitanGalarStandard,
  PokemonVariety.DarmanitanGalarStandard,
  PokemonSpecies.Darmanitan,
);
new class DarmanitanGalarZenForm extends Form {}(
  PokemonForm.DarmanitanGalarZen,
  PokemonVariety.DarmanitanGalarZen,
  PokemonSpecies.Darmanitan,
);
new class MaractusForm extends Form {}(
  PokemonForm.Maractus,
  PokemonVariety.Maractus,
  PokemonSpecies.Maractus,
);
new class DwebbleForm extends Form {}(
  PokemonForm.Dwebble,
  PokemonVariety.Dwebble,
  PokemonSpecies.Dwebble,
);
new class CrustleForm extends Form {}(
  PokemonForm.Crustle,
  PokemonVariety.Crustle,
  PokemonSpecies.Crustle,
);
new class ScraggyForm extends Form {}(
  PokemonForm.Scraggy,
  PokemonVariety.Scraggy,
  PokemonSpecies.Scraggy,
);
new class ScraftyForm extends Form {}(
  PokemonForm.Scrafty,
  PokemonVariety.Scrafty,
  PokemonSpecies.Scrafty,
);
new class SigilyphForm extends Form {}(
  PokemonForm.Sigilyph,
  PokemonVariety.Sigilyph,
  PokemonSpecies.Sigilyph,
);
new class YamaskForm extends Form {}(
  PokemonForm.Yamask,
  PokemonVariety.Yamask,
  PokemonSpecies.Yamask,
);
new class YamaskGalarForm extends Form {}(
  PokemonForm.YamaskGalar,
  PokemonVariety.YamaskGalar,
  PokemonSpecies.Yamask,
);
new class CofagrigusForm extends Form {}(
  PokemonForm.Cofagrigus,
  PokemonVariety.Cofagrigus,
  PokemonSpecies.Cofagrigus,
);
new class TirtougaForm extends Form {}(
  PokemonForm.Tirtouga,
  PokemonVariety.Tirtouga,
  PokemonSpecies.Tirtouga,
);
new class CarracostaForm extends Form {}(
  PokemonForm.Carracosta,
  PokemonVariety.Carracosta,
  PokemonSpecies.Carracosta,
);
new class ArchenForm extends Form {}(
  PokemonForm.Archen,
  PokemonVariety.Archen,
  PokemonSpecies.Archen,
);
new class ArcheopsForm extends Form {}(
  PokemonForm.Archeops,
  PokemonVariety.Archeops,
  PokemonSpecies.Archeops,
);
new class TrubbishForm extends Form {}(
  PokemonForm.Trubbish,
  PokemonVariety.Trubbish,
  PokemonSpecies.Trubbish,
);
new class GarbodorForm extends Form {}(
  PokemonForm.Garbodor,
  PokemonVariety.Garbodor,
  PokemonSpecies.Garbodor,
);
new class GarbodorGmaxForm extends Form {}(
  PokemonForm.GarbodorGmax,
  PokemonVariety.GarbodorGmax,
  PokemonSpecies.Garbodor,
);
new class ZoruaForm extends Form {}(
  PokemonForm.Zorua,
  PokemonVariety.Zorua,
  PokemonSpecies.Zorua,
);
new class ZoruaHisuiForm extends Form {}(
  PokemonForm.ZoruaHisui,
  PokemonVariety.ZoruaHisui,
  PokemonSpecies.Zorua,
);
new class ZoroarkForm extends Form {}(
  PokemonForm.Zoroark,
  PokemonVariety.Zoroark,
  PokemonSpecies.Zoroark,
);
new class ZoroarkHisuiForm extends Form {}(
  PokemonForm.ZoroarkHisui,
  PokemonVariety.ZoroarkHisui,
  PokemonSpecies.Zoroark,
);
new class MinccinoForm extends Form {}(
  PokemonForm.Minccino,
  PokemonVariety.Minccino,
  PokemonSpecies.Minccino,
);
new class CinccinoForm extends Form {}(
  PokemonForm.Cinccino,
  PokemonVariety.Cinccino,
  PokemonSpecies.Cinccino,
);
new class GothitaForm extends Form {}(
  PokemonForm.Gothita,
  PokemonVariety.Gothita,
  PokemonSpecies.Gothita,
);
new class GothoritaForm extends Form {}(
  PokemonForm.Gothorita,
  PokemonVariety.Gothorita,
  PokemonSpecies.Gothorita,
);
new class GothitelleForm extends Form {}(
  PokemonForm.Gothitelle,
  PokemonVariety.Gothitelle,
  PokemonSpecies.Gothitelle,
);
new class SolosisForm extends Form {}(
  PokemonForm.Solosis,
  PokemonVariety.Solosis,
  PokemonSpecies.Solosis,
);
new class DuosionForm extends Form {}(
  PokemonForm.Duosion,
  PokemonVariety.Duosion,
  PokemonSpecies.Duosion,
);
new class ReuniclusForm extends Form {}(
  PokemonForm.Reuniclus,
  PokemonVariety.Reuniclus,
  PokemonSpecies.Reuniclus,
);
new class DucklettForm extends Form {}(
  PokemonForm.Ducklett,
  PokemonVariety.Ducklett,
  PokemonSpecies.Ducklett,
);
new class SwannaForm extends Form {}(
  PokemonForm.Swanna,
  PokemonVariety.Swanna,
  PokemonSpecies.Swanna,
);
new class VanilliteForm extends Form {}(
  PokemonForm.Vanillite,
  PokemonVariety.Vanillite,
  PokemonSpecies.Vanillite,
);
new class VanillishForm extends Form {}(
  PokemonForm.Vanillish,
  PokemonVariety.Vanillish,
  PokemonSpecies.Vanillish,
);
new class VanilluxeForm extends Form {}(
  PokemonForm.Vanilluxe,
  PokemonVariety.Vanilluxe,
  PokemonSpecies.Vanilluxe,
);
new class DeerlingSpringForm extends Form {}(
  PokemonForm.DeerlingSpring,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
);
new class DeerlingSummerForm extends Form {}(
  PokemonForm.DeerlingSummer,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
);
new class DeerlingAutumnForm extends Form {}(
  PokemonForm.DeerlingAutumn,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
);
new class DeerlingWinterForm extends Form {}(
  PokemonForm.DeerlingWinter,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
);
new class SawsbuckSpringForm extends Form {}(
  PokemonForm.SawsbuckSpring,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
);
new class SawsbuckSummerForm extends Form {}(
  PokemonForm.SawsbuckSummer,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
);
new class SawsbuckAutumnForm extends Form {}(
  PokemonForm.SawsbuckAutumn,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
);
new class SawsbuckWinterForm extends Form {}(
  PokemonForm.SawsbuckWinter,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
);
new class EmolgaForm extends Form {}(
  PokemonForm.Emolga,
  PokemonVariety.Emolga,
  PokemonSpecies.Emolga,
);
new class KarrablastForm extends Form {}(
  PokemonForm.Karrablast,
  PokemonVariety.Karrablast,
  PokemonSpecies.Karrablast,
);
new class EscavalierForm extends Form {}(
  PokemonForm.Escavalier,
  PokemonVariety.Escavalier,
  PokemonSpecies.Escavalier,
);
new class FoongusForm extends Form {}(
  PokemonForm.Foongus,
  PokemonVariety.Foongus,
  PokemonSpecies.Foongus,
);
new class AmoongussForm extends Form {}(
  PokemonForm.Amoonguss,
  PokemonVariety.Amoonguss,
  PokemonSpecies.Amoonguss,
);
new class FrillishForm extends Form {}(
  PokemonForm.Frillish,
  PokemonVariety.Frillish,
  PokemonSpecies.Frillish,
);
new class JellicentForm extends Form {}(
  PokemonForm.Jellicent,
  PokemonVariety.Jellicent,
  PokemonSpecies.Jellicent,
);
new class AlomomolaForm extends Form {}(
  PokemonForm.Alomomola,
  PokemonVariety.Alomomola,
  PokemonSpecies.Alomomola,
);
new class JoltikForm extends Form {}(
  PokemonForm.Joltik,
  PokemonVariety.Joltik,
  PokemonSpecies.Joltik,
);
new class GalvantulaForm extends Form {}(
  PokemonForm.Galvantula,
  PokemonVariety.Galvantula,
  PokemonSpecies.Galvantula,
);
new class FerroseedForm extends Form {}(
  PokemonForm.Ferroseed,
  PokemonVariety.Ferroseed,
  PokemonSpecies.Ferroseed,
);
new class FerrothornForm extends Form {}(
  PokemonForm.Ferrothorn,
  PokemonVariety.Ferrothorn,
  PokemonSpecies.Ferrothorn,
);
new class KlinkForm extends Form {}(
  PokemonForm.Klink,
  PokemonVariety.Klink,
  PokemonSpecies.Klink,
);
new class KlangForm extends Form {}(
  PokemonForm.Klang,
  PokemonVariety.Klang,
  PokemonSpecies.Klang,
);
new class KlinklangForm extends Form {}(
  PokemonForm.Klinklang,
  PokemonVariety.Klinklang,
  PokemonSpecies.Klinklang,
);
new class TynamoForm extends Form {}(
  PokemonForm.Tynamo,
  PokemonVariety.Tynamo,
  PokemonSpecies.Tynamo,
);
new class EelektrikForm extends Form {}(
  PokemonForm.Eelektrik,
  PokemonVariety.Eelektrik,
  PokemonSpecies.Eelektrik,
);
new class EelektrossForm extends Form {}(
  PokemonForm.Eelektross,
  PokemonVariety.Eelektross,
  PokemonSpecies.Eelektross,
);
new class ElgyemForm extends Form {}(
  PokemonForm.Elgyem,
  PokemonVariety.Elgyem,
  PokemonSpecies.Elgyem,
);
new class BeheeyemForm extends Form {}(
  PokemonForm.Beheeyem,
  PokemonVariety.Beheeyem,
  PokemonSpecies.Beheeyem,
);
new class LitwickForm extends Form {}(
  PokemonForm.Litwick,
  PokemonVariety.Litwick,
  PokemonSpecies.Litwick,
);
new class LampentForm extends Form {}(
  PokemonForm.Lampent,
  PokemonVariety.Lampent,
  PokemonSpecies.Lampent,
);
new class ChandelureForm extends Form {}(
  PokemonForm.Chandelure,
  PokemonVariety.Chandelure,
  PokemonSpecies.Chandelure,
);
new class AxewForm extends Form {}(
  PokemonForm.Axew,
  PokemonVariety.Axew,
  PokemonSpecies.Axew,
);
new class FraxureForm extends Form {}(
  PokemonForm.Fraxure,
  PokemonVariety.Fraxure,
  PokemonSpecies.Fraxure,
);
new class HaxorusForm extends Form {}(
  PokemonForm.Haxorus,
  PokemonVariety.Haxorus,
  PokemonSpecies.Haxorus,
);
new class CubchooForm extends Form {}(
  PokemonForm.Cubchoo,
  PokemonVariety.Cubchoo,
  PokemonSpecies.Cubchoo,
);
new class BearticForm extends Form {}(
  PokemonForm.Beartic,
  PokemonVariety.Beartic,
  PokemonSpecies.Beartic,
);
new class CryogonalForm extends Form {}(
  PokemonForm.Cryogonal,
  PokemonVariety.Cryogonal,
  PokemonSpecies.Cryogonal,
);
new class ShelmetForm extends Form {}(
  PokemonForm.Shelmet,
  PokemonVariety.Shelmet,
  PokemonSpecies.Shelmet,
);
new class AccelgorForm extends Form {}(
  PokemonForm.Accelgor,
  PokemonVariety.Accelgor,
  PokemonSpecies.Accelgor,
);
new class StunfiskForm extends Form {}(
  PokemonForm.Stunfisk,
  PokemonVariety.Stunfisk,
  PokemonSpecies.Stunfisk,
);
new class StunfiskGalarForm extends Form {}(
  PokemonForm.StunfiskGalar,
  PokemonVariety.StunfiskGalar,
  PokemonSpecies.Stunfisk,
);
new class MienfooForm extends Form {}(
  PokemonForm.Mienfoo,
  PokemonVariety.Mienfoo,
  PokemonSpecies.Mienfoo,
);
new class MienshaoForm extends Form {}(
  PokemonForm.Mienshao,
  PokemonVariety.Mienshao,
  PokemonSpecies.Mienshao,
);
new class DruddigonForm extends Form {}(
  PokemonForm.Druddigon,
  PokemonVariety.Druddigon,
  PokemonSpecies.Druddigon,
);
new class GolettForm extends Form {}(
  PokemonForm.Golett,
  PokemonVariety.Golett,
  PokemonSpecies.Golett,
);
new class GolurkForm extends Form {}(
  PokemonForm.Golurk,
  PokemonVariety.Golurk,
  PokemonSpecies.Golurk,
);
new class PawniardForm extends Form {}(
  PokemonForm.Pawniard,
  PokemonVariety.Pawniard,
  PokemonSpecies.Pawniard,
);
new class BisharpForm extends Form {}(
  PokemonForm.Bisharp,
  PokemonVariety.Bisharp,
  PokemonSpecies.Bisharp,
);
new class BouffalantForm extends Form {}(
  PokemonForm.Bouffalant,
  PokemonVariety.Bouffalant,
  PokemonSpecies.Bouffalant,
);
new class RuffletForm extends Form {}(
  PokemonForm.Rufflet,
  PokemonVariety.Rufflet,
  PokemonSpecies.Rufflet,
);
new class BraviaryForm extends Form {}(
  PokemonForm.Braviary,
  PokemonVariety.Braviary,
  PokemonSpecies.Braviary,
);
new class BraviaryHisuiForm extends Form {}(
  PokemonForm.BraviaryHisui,
  PokemonVariety.BraviaryHisui,
  PokemonSpecies.Braviary,
);
new class VullabyForm extends Form {}(
  PokemonForm.Vullaby,
  PokemonVariety.Vullaby,
  PokemonSpecies.Vullaby,
);
new class MandibuzzForm extends Form {}(
  PokemonForm.Mandibuzz,
  PokemonVariety.Mandibuzz,
  PokemonSpecies.Mandibuzz,
);
new class HeatmorForm extends Form {}(
  PokemonForm.Heatmor,
  PokemonVariety.Heatmor,
  PokemonSpecies.Heatmor,
);
new class DurantForm extends Form {}(
  PokemonForm.Durant,
  PokemonVariety.Durant,
  PokemonSpecies.Durant,
);
new class DeinoForm extends Form {}(
  PokemonForm.Deino,
  PokemonVariety.Deino,
  PokemonSpecies.Deino,
);
new class ZweilousForm extends Form {}(
  PokemonForm.Zweilous,
  PokemonVariety.Zweilous,
  PokemonSpecies.Zweilous,
);
new class HydreigonForm extends Form {}(
  PokemonForm.Hydreigon,
  PokemonVariety.Hydreigon,
  PokemonSpecies.Hydreigon,
);
new class LarvestaForm extends Form {}(
  PokemonForm.Larvesta,
  PokemonVariety.Larvesta,
  PokemonSpecies.Larvesta,
);
new class VolcaronaForm extends Form {}(
  PokemonForm.Volcarona,
  PokemonVariety.Volcarona,
  PokemonSpecies.Volcarona,
);
new class CobalionForm extends Form {}(
  PokemonForm.Cobalion,
  PokemonVariety.Cobalion,
  PokemonSpecies.Cobalion,
);
new class TerrakionForm extends Form {}(
  PokemonForm.Terrakion,
  PokemonVariety.Terrakion,
  PokemonSpecies.Terrakion,
);
new class VirizionForm extends Form {}(
  PokemonForm.Virizion,
  PokemonVariety.Virizion,
  PokemonSpecies.Virizion,
);
new class TornadusIncarnateForm extends Form {}(
  PokemonForm.TornadusIncarnate,
  PokemonVariety.TornadusIncarnate,
  PokemonSpecies.Tornadus,
);
new class TornadusTherianForm extends Form {}(
  PokemonForm.TornadusTherian,
  PokemonVariety.TornadusTherian,
  PokemonSpecies.Tornadus,
);
new class ThundurusIncarnateForm extends Form {}(
  PokemonForm.ThundurusIncarnate,
  PokemonVariety.ThundurusIncarnate,
  PokemonSpecies.Thundurus,
);
new class ThundurusTherianForm extends Form {}(
  PokemonForm.ThundurusTherian,
  PokemonVariety.ThundurusTherian,
  PokemonSpecies.Thundurus,
);
new class ReshiramForm extends Form {}(
  PokemonForm.Reshiram,
  PokemonVariety.Reshiram,
  PokemonSpecies.Reshiram,
);
new class ZekromForm extends Form {}(
  PokemonForm.Zekrom,
  PokemonVariety.Zekrom,
  PokemonSpecies.Zekrom,
);
new class LandorusIncarnateForm extends Form {}(
  PokemonForm.LandorusIncarnate,
  PokemonVariety.LandorusIncarnate,
  PokemonSpecies.Landorus,
);
new class LandorusTherianForm extends Form {}(
  PokemonForm.LandorusTherian,
  PokemonVariety.LandorusTherian,
  PokemonSpecies.Landorus,
);
new class KyuremForm extends Form {}(
  PokemonForm.Kyurem,
  PokemonVariety.Kyurem,
  PokemonSpecies.Kyurem,
);
new class KyuremBlackForm extends Form {}(
  PokemonForm.KyuremBlack,
  PokemonVariety.KyuremBlack,
  PokemonSpecies.Kyurem,
);
new class KyuremWhiteForm extends Form {}(
  PokemonForm.KyuremWhite,
  PokemonVariety.KyuremWhite,
  PokemonSpecies.Kyurem,
);
new class KeldeoOrdinaryForm extends Form {}(
  PokemonForm.KeldeoOrdinary,
  PokemonVariety.KeldeoOrdinary,
  PokemonSpecies.Keldeo,
);
new class KeldeoResoluteForm extends Form {}(
  PokemonForm.KeldeoResolute,
  PokemonVariety.KeldeoResolute,
  PokemonSpecies.Keldeo,
);
new class MeloettaAriaForm extends Form {}(
  PokemonForm.MeloettaAria,
  PokemonVariety.MeloettaAria,
  PokemonSpecies.Meloetta,
);
new class MeloettaPirouetteForm extends Form {}(
  PokemonForm.MeloettaPirouette,
  PokemonVariety.MeloettaPirouette,
  PokemonSpecies.Meloetta,
);
new class GenesectForm extends Form {}(
  PokemonForm.Genesect,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
);
new class GenesectDouseForm extends Form {}(
  PokemonForm.GenesectDouse,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
);
new class GenesectShockForm extends Form {}(
  PokemonForm.GenesectShock,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
);
new class GenesectBurnForm extends Form {}(
  PokemonForm.GenesectBurn,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
);
new class GenesectChillForm extends Form {}(
  PokemonForm.GenesectChill,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
);
new class ChespinForm extends Form {}(
  PokemonForm.Chespin,
  PokemonVariety.Chespin,
  PokemonSpecies.Chespin,
);
new class QuilladinForm extends Form {}(
  PokemonForm.Quilladin,
  PokemonVariety.Quilladin,
  PokemonSpecies.Quilladin,
);
new class ChesnaughtForm extends Form {}(
  PokemonForm.Chesnaught,
  PokemonVariety.Chesnaught,
  PokemonSpecies.Chesnaught,
);
new class FennekinForm extends Form {}(
  PokemonForm.Fennekin,
  PokemonVariety.Fennekin,
  PokemonSpecies.Fennekin,
);
new class BraixenForm extends Form {}(
  PokemonForm.Braixen,
  PokemonVariety.Braixen,
  PokemonSpecies.Braixen,
);
new class DelphoxForm extends Form {}(
  PokemonForm.Delphox,
  PokemonVariety.Delphox,
  PokemonSpecies.Delphox,
);
new class FroakieForm extends Form {}(
  PokemonForm.Froakie,
  PokemonVariety.Froakie,
  PokemonSpecies.Froakie,
);
new class FrogadierForm extends Form {}(
  PokemonForm.Frogadier,
  PokemonVariety.Frogadier,
  PokemonSpecies.Frogadier,
);
new class GreninjaForm extends Form {}(
  PokemonForm.Greninja,
  PokemonVariety.Greninja,
  PokemonSpecies.Greninja,
);
new class GreninjaBattleBondForm extends Form {}(
  PokemonForm.GreninjaBattleBond,
  PokemonVariety.GreninjaBattleBond,
  PokemonSpecies.Greninja,
);
new class GreninjaAshForm extends Form {}(
  PokemonForm.GreninjaAsh,
  PokemonVariety.GreninjaAsh,
  PokemonSpecies.Greninja,
);
new class BunnelbyForm extends Form {}(
  PokemonForm.Bunnelby,
  PokemonVariety.Bunnelby,
  PokemonSpecies.Bunnelby,
);
new class DiggersbyForm extends Form {}(
  PokemonForm.Diggersby,
  PokemonVariety.Diggersby,
  PokemonSpecies.Diggersby,
);
new class FletchlingForm extends Form {}(
  PokemonForm.Fletchling,
  PokemonVariety.Fletchling,
  PokemonSpecies.Fletchling,
);
new class FletchinderForm extends Form {}(
  PokemonForm.Fletchinder,
  PokemonVariety.Fletchinder,
  PokemonSpecies.Fletchinder,
);
new class TalonflameForm extends Form {}(
  PokemonForm.Talonflame,
  PokemonVariety.Talonflame,
  PokemonSpecies.Talonflame,
);
new class ScatterbugIcySnowForm extends Form {}(
  PokemonForm.ScatterbugIcySnow,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugPolarForm extends Form {}(
  PokemonForm.ScatterbugPolar,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugTundraForm extends Form {}(
  PokemonForm.ScatterbugTundra,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugContinentalForm extends Form {}(
  PokemonForm.ScatterbugContinental,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugGardenForm extends Form {}(
  PokemonForm.ScatterbugGarden,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugElegantForm extends Form {}(
  PokemonForm.ScatterbugElegant,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugMeadowForm extends Form {}(
  PokemonForm.ScatterbugMeadow,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugModernForm extends Form {}(
  PokemonForm.ScatterbugModern,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugMarineForm extends Form {}(
  PokemonForm.ScatterbugMarine,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugArchipelagoForm extends Form {}(
  PokemonForm.ScatterbugArchipelago,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugHighPlainsForm extends Form {}(
  PokemonForm.ScatterbugHighPlains,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugSandstormForm extends Form {}(
  PokemonForm.ScatterbugSandstorm,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugRiverForm extends Form {}(
  PokemonForm.ScatterbugRiver,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugMonsoonForm extends Form {}(
  PokemonForm.ScatterbugMonsoon,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugSavannaForm extends Form {}(
  PokemonForm.ScatterbugSavanna,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugSunForm extends Form {}(
  PokemonForm.ScatterbugSun,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugOceanForm extends Form {}(
  PokemonForm.ScatterbugOcean,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugJungleForm extends Form {}(
  PokemonForm.ScatterbugJungle,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugFancyForm extends Form {}(
  PokemonForm.ScatterbugFancy,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class ScatterbugPokeBallForm extends Form {}(
  PokemonForm.ScatterbugPokeBall,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
);
new class SpewpaIcySnowForm extends Form {}(
  PokemonForm.SpewpaIcySnow,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaPolarForm extends Form {}(
  PokemonForm.SpewpaPolar,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaTundraForm extends Form {}(
  PokemonForm.SpewpaTundra,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaContinentalForm extends Form {}(
  PokemonForm.SpewpaContinental,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaGardenForm extends Form {}(
  PokemonForm.SpewpaGarden,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaElegantForm extends Form {}(
  PokemonForm.SpewpaElegant,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaMeadowForm extends Form {}(
  PokemonForm.SpewpaMeadow,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaModernForm extends Form {}(
  PokemonForm.SpewpaModern,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaMarineForm extends Form {}(
  PokemonForm.SpewpaMarine,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaArchipelagoForm extends Form {}(
  PokemonForm.SpewpaArchipelago,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaHighPlainsForm extends Form {}(
  PokemonForm.SpewpaHighPlains,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaSandstormForm extends Form {}(
  PokemonForm.SpewpaSandstorm,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaRiverForm extends Form {}(
  PokemonForm.SpewpaRiver,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaMonsoonForm extends Form {}(
  PokemonForm.SpewpaMonsoon,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaSavannaForm extends Form {}(
  PokemonForm.SpewpaSavanna,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaSunForm extends Form {}(
  PokemonForm.SpewpaSun,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaOceanForm extends Form {}(
  PokemonForm.SpewpaOcean,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaJungleForm extends Form {}(
  PokemonForm.SpewpaJungle,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaFancyForm extends Form {}(
  PokemonForm.SpewpaFancy,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class SpewpaPokeBallForm extends Form {}(
  PokemonForm.SpewpaPokeBall,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
);
new class VivillonMeadowForm extends Form {}(
  PokemonForm.VivillonMeadow,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonIcySnowForm extends Form {}(
  PokemonForm.VivillonIcySnow,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonPolarForm extends Form {}(
  PokemonForm.VivillonPolar,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonTundraForm extends Form {}(
  PokemonForm.VivillonTundra,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonContinentalForm extends Form {}(
  PokemonForm.VivillonContinental,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonGardenForm extends Form {}(
  PokemonForm.VivillonGarden,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonElegantForm extends Form {}(
  PokemonForm.VivillonElegant,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonModernForm extends Form {}(
  PokemonForm.VivillonModern,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonMarineForm extends Form {}(
  PokemonForm.VivillonMarine,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonArchipelagoForm extends Form {}(
  PokemonForm.VivillonArchipelago,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonHighPlainsForm extends Form {}(
  PokemonForm.VivillonHighPlains,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonSandstormForm extends Form {}(
  PokemonForm.VivillonSandstorm,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonRiverForm extends Form {}(
  PokemonForm.VivillonRiver,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonMonsoonForm extends Form {}(
  PokemonForm.VivillonMonsoon,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonSavannaForm extends Form {}(
  PokemonForm.VivillonSavanna,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonSunForm extends Form {}(
  PokemonForm.VivillonSun,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonOceanForm extends Form {}(
  PokemonForm.VivillonOcean,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonJungleForm extends Form {}(
  PokemonForm.VivillonJungle,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonFancyForm extends Form {}(
  PokemonForm.VivillonFancy,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class VivillonPokeBallForm extends Form {}(
  PokemonForm.VivillonPokeBall,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
);
new class LitleoForm extends Form {}(
  PokemonForm.Litleo,
  PokemonVariety.Litleo,
  PokemonSpecies.Litleo,
);
new class PyroarForm extends Form {}(
  PokemonForm.Pyroar,
  PokemonVariety.Pyroar,
  PokemonSpecies.Pyroar,
);
new class FlabebeRedForm extends Form {}(
  PokemonForm.FlabebeRed,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
);
new class FlabebeYellowForm extends Form {}(
  PokemonForm.FlabebeYellow,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
);
new class FlabebeOrangeForm extends Form {}(
  PokemonForm.FlabebeOrange,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
);
new class FlabebeBlueForm extends Form {}(
  PokemonForm.FlabebeBlue,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
);
new class FlabebeWhiteForm extends Form {}(
  PokemonForm.FlabebeWhite,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
);
new class FloetteRedForm extends Form {}(
  PokemonForm.FloetteRed,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
);
new class FloetteYellowForm extends Form {}(
  PokemonForm.FloetteYellow,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
);
new class FloetteOrangeForm extends Form {}(
  PokemonForm.FloetteOrange,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
);
new class FloetteBlueForm extends Form {}(
  PokemonForm.FloetteBlue,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
);
new class FloetteWhiteForm extends Form {}(
  PokemonForm.FloetteWhite,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
);
new class FloetteEternalForm extends Form {}(
  PokemonForm.FloetteEternal,
  PokemonVariety.FloetteEternal,
  PokemonSpecies.Floette,
);
new class FlorgesRedForm extends Form {}(
  PokemonForm.FlorgesRed,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
);
new class FlorgesYellowForm extends Form {}(
  PokemonForm.FlorgesYellow,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
);
new class FlorgesOrangeForm extends Form {}(
  PokemonForm.FlorgesOrange,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
);
new class FlorgesBlueForm extends Form {}(
  PokemonForm.FlorgesBlue,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
);
new class FlorgesWhiteForm extends Form {}(
  PokemonForm.FlorgesWhite,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
);
new class SkiddoForm extends Form {}(
  PokemonForm.Skiddo,
  PokemonVariety.Skiddo,
  PokemonSpecies.Skiddo,
);
new class GogoatForm extends Form {}(
  PokemonForm.Gogoat,
  PokemonVariety.Gogoat,
  PokemonSpecies.Gogoat,
);
new class PanchamForm extends Form {}(
  PokemonForm.Pancham,
  PokemonVariety.Pancham,
  PokemonSpecies.Pancham,
);
new class PangoroForm extends Form {}(
  PokemonForm.Pangoro,
  PokemonVariety.Pangoro,
  PokemonSpecies.Pangoro,
);
new class FurfrouNaturalForm extends Form {}(
  PokemonForm.FurfrouNatural,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
);
new class FurfrouHeartForm extends Form {}(
  PokemonForm.FurfrouHeart,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
);
new class FurfrouStarForm extends Form {}(
  PokemonForm.FurfrouStar,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
);
new class FurfrouDiamondForm extends Form {}(
  PokemonForm.FurfrouDiamond,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
);
new class FurfrouDebutanteForm extends Form {}(
  PokemonForm.FurfrouDebutante,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
);
new class FurfrouMatronForm extends Form {}(
  PokemonForm.FurfrouMatron,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
);
new class FurfrouDandyForm extends Form {}(
  PokemonForm.FurfrouDandy,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
);
new class FurfrouLaReineForm extends Form {}(
  PokemonForm.FurfrouLaReine,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
);
new class FurfrouKabukiForm extends Form {}(
  PokemonForm.FurfrouKabuki,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
);
new class FurfrouPharaohForm extends Form {}(
  PokemonForm.FurfrouPharaoh,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
);
new class EspurrForm extends Form {}(
  PokemonForm.Espurr,
  PokemonVariety.Espurr,
  PokemonSpecies.Espurr,
);
new class MeowsticMaleForm extends Form {}(
  PokemonForm.MeowsticMale,
  PokemonVariety.MeowsticMale,
  PokemonSpecies.Meowstic,
);
new class MeowsticFemaleForm extends Form {}(
  PokemonForm.MeowsticFemale,
  PokemonVariety.MeowsticFemale,
  PokemonSpecies.Meowstic,
);
new class HonedgeForm extends Form {}(
  PokemonForm.Honedge,
  PokemonVariety.Honedge,
  PokemonSpecies.Honedge,
);
new class DoubladeForm extends Form {}(
  PokemonForm.Doublade,
  PokemonVariety.Doublade,
  PokemonSpecies.Doublade,
);
new class AegislashShieldForm extends Form {}(
  PokemonForm.AegislashShield,
  PokemonVariety.AegislashShield,
  PokemonSpecies.Aegislash,
);
new class AegislashBladeForm extends Form {}(
  PokemonForm.AegislashBlade,
  PokemonVariety.AegislashBlade,
  PokemonSpecies.Aegislash,
);
new class SpritzeeForm extends Form {}(
  PokemonForm.Spritzee,
  PokemonVariety.Spritzee,
  PokemonSpecies.Spritzee,
);
new class AromatisseForm extends Form {}(
  PokemonForm.Aromatisse,
  PokemonVariety.Aromatisse,
  PokemonSpecies.Aromatisse,
);
new class SwirlixForm extends Form {}(
  PokemonForm.Swirlix,
  PokemonVariety.Swirlix,
  PokemonSpecies.Swirlix,
);
new class SlurpuffForm extends Form {}(
  PokemonForm.Slurpuff,
  PokemonVariety.Slurpuff,
  PokemonSpecies.Slurpuff,
);
new class InkayForm extends Form {}(
  PokemonForm.Inkay,
  PokemonVariety.Inkay,
  PokemonSpecies.Inkay,
);
new class MalamarForm extends Form {}(
  PokemonForm.Malamar,
  PokemonVariety.Malamar,
  PokemonSpecies.Malamar,
);
new class BinacleForm extends Form {}(
  PokemonForm.Binacle,
  PokemonVariety.Binacle,
  PokemonSpecies.Binacle,
);
new class BarbaracleForm extends Form {}(
  PokemonForm.Barbaracle,
  PokemonVariety.Barbaracle,
  PokemonSpecies.Barbaracle,
);
new class SkrelpForm extends Form {}(
  PokemonForm.Skrelp,
  PokemonVariety.Skrelp,
  PokemonSpecies.Skrelp,
);
new class DragalgeForm extends Form {}(
  PokemonForm.Dragalge,
  PokemonVariety.Dragalge,
  PokemonSpecies.Dragalge,
);
new class ClauncherForm extends Form {}(
  PokemonForm.Clauncher,
  PokemonVariety.Clauncher,
  PokemonSpecies.Clauncher,
);
new class ClawitzerForm extends Form {}(
  PokemonForm.Clawitzer,
  PokemonVariety.Clawitzer,
  PokemonSpecies.Clawitzer,
);
new class HelioptileForm extends Form {}(
  PokemonForm.Helioptile,
  PokemonVariety.Helioptile,
  PokemonSpecies.Helioptile,
);
new class HelioliskForm extends Form {}(
  PokemonForm.Heliolisk,
  PokemonVariety.Heliolisk,
  PokemonSpecies.Heliolisk,
);
new class TyruntForm extends Form {}(
  PokemonForm.Tyrunt,
  PokemonVariety.Tyrunt,
  PokemonSpecies.Tyrunt,
);
new class TyrantrumForm extends Form {}(
  PokemonForm.Tyrantrum,
  PokemonVariety.Tyrantrum,
  PokemonSpecies.Tyrantrum,
);
new class AmauraForm extends Form {}(
  PokemonForm.Amaura,
  PokemonVariety.Amaura,
  PokemonSpecies.Amaura,
);
new class AurorusForm extends Form {}(
  PokemonForm.Aurorus,
  PokemonVariety.Aurorus,
  PokemonSpecies.Aurorus,
);
new class SylveonForm extends Form {}(
  PokemonForm.Sylveon,
  PokemonVariety.Sylveon,
  PokemonSpecies.Sylveon,
);
new class HawluchaForm extends Form {}(
  PokemonForm.Hawlucha,
  PokemonVariety.Hawlucha,
  PokemonSpecies.Hawlucha,
);
new class DedenneForm extends Form {}(
  PokemonForm.Dedenne,
  PokemonVariety.Dedenne,
  PokemonSpecies.Dedenne,
);
new class CarbinkForm extends Form {}(
  PokemonForm.Carbink,
  PokemonVariety.Carbink,
  PokemonSpecies.Carbink,
);
new class GoomyForm extends Form {}(
  PokemonForm.Goomy,
  PokemonVariety.Goomy,
  PokemonSpecies.Goomy,
);
new class SliggooForm extends Form {}(
  PokemonForm.Sliggoo,
  PokemonVariety.Sliggoo,
  PokemonSpecies.Sliggoo,
);
new class SliggooHisuiForm extends Form {}(
  PokemonForm.SliggooHisui,
  PokemonVariety.SliggooHisui,
  PokemonSpecies.Sliggoo,
);
new class GoodraForm extends Form {}(
  PokemonForm.Goodra,
  PokemonVariety.Goodra,
  PokemonSpecies.Goodra,
);
new class GoodraHisuiForm extends Form {}(
  PokemonForm.GoodraHisui,
  PokemonVariety.GoodraHisui,
  PokemonSpecies.Goodra,
);
new class KlefkiForm extends Form {}(
  PokemonForm.Klefki,
  PokemonVariety.Klefki,
  PokemonSpecies.Klefki,
);
new class PhantumpForm extends Form {}(
  PokemonForm.Phantump,
  PokemonVariety.Phantump,
  PokemonSpecies.Phantump,
);
new class TrevenantForm extends Form {}(
  PokemonForm.Trevenant,
  PokemonVariety.Trevenant,
  PokemonSpecies.Trevenant,
);
new class PumpkabooAverageForm extends Form {}(
  PokemonForm.PumpkabooAverage,
  PokemonVariety.PumpkabooAverage,
  PokemonSpecies.Pumpkaboo,
);
new class PumpkabooSmallForm extends Form {}(
  PokemonForm.PumpkabooSmall,
  PokemonVariety.PumpkabooSmall,
  PokemonSpecies.Pumpkaboo,
);
new class PumpkabooLargeForm extends Form {}(
  PokemonForm.PumpkabooLarge,
  PokemonVariety.PumpkabooLarge,
  PokemonSpecies.Pumpkaboo,
);
new class PumpkabooSuperForm extends Form {}(
  PokemonForm.PumpkabooSuper,
  PokemonVariety.PumpkabooSuper,
  PokemonSpecies.Pumpkaboo,
);
new class GourgeistAverageForm extends Form {}(
  PokemonForm.GourgeistAverage,
  PokemonVariety.GourgeistAverage,
  PokemonSpecies.Gourgeist,
);
new class GourgeistSmallForm extends Form {}(
  PokemonForm.GourgeistSmall,
  PokemonVariety.GourgeistSmall,
  PokemonSpecies.Gourgeist,
);
new class GourgeistLargeForm extends Form {}(
  PokemonForm.GourgeistLarge,
  PokemonVariety.GourgeistLarge,
  PokemonSpecies.Gourgeist,
);
new class GourgeistSuperForm extends Form {}(
  PokemonForm.GourgeistSuper,
  PokemonVariety.GourgeistSuper,
  PokemonSpecies.Gourgeist,
);
new class BergmiteForm extends Form {}(
  PokemonForm.Bergmite,
  PokemonVariety.Bergmite,
  PokemonSpecies.Bergmite,
);
new class AvaluggForm extends Form {}(
  PokemonForm.Avalugg,
  PokemonVariety.Avalugg,
  PokemonSpecies.Avalugg,
);
new class AvaluggHisuiForm extends Form {}(
  PokemonForm.AvaluggHisui,
  PokemonVariety.AvaluggHisui,
  PokemonSpecies.Avalugg,
);
new class NoibatForm extends Form {}(
  PokemonForm.Noibat,
  PokemonVariety.Noibat,
  PokemonSpecies.Noibat,
);
new class NoivernForm extends Form {}(
  PokemonForm.Noivern,
  PokemonVariety.Noivern,
  PokemonSpecies.Noivern,
);
new class XerneasActiveForm extends Form {}(
  PokemonForm.XerneasActive,
  PokemonVariety.Xerneas,
  PokemonSpecies.Xerneas,
);
new class XerneasNeutralForm extends Form {}(
  PokemonForm.XerneasNeutral,
  PokemonVariety.Xerneas,
  PokemonSpecies.Xerneas,
);
new class YveltalForm extends Form {}(
  PokemonForm.Yveltal,
  PokemonVariety.Yveltal,
  PokemonSpecies.Yveltal,
);
new class Zygarde50Form extends Form {}(
  PokemonForm.Zygarde50,
  PokemonVariety.Zygarde50,
  PokemonSpecies.Zygarde,
);
new class Zygarde10PowerConstructForm extends Form {}(
  PokemonForm.Zygarde10PowerConstruct,
  PokemonVariety.Zygarde10PowerConstruct,
  PokemonSpecies.Zygarde,
);
new class Zygarde50PowerConstructForm extends Form {}(
  PokemonForm.Zygarde50PowerConstruct,
  PokemonVariety.Zygarde50PowerConstruct,
  PokemonSpecies.Zygarde,
);
new class ZygardeCompleteForm extends Form {}(
  PokemonForm.ZygardeComplete,
  PokemonVariety.ZygardeComplete,
  PokemonSpecies.Zygarde,
);
new class Zygarde10Form extends Form {}(
  PokemonForm.Zygarde10,
  PokemonVariety.Zygarde10,
  PokemonSpecies.Zygarde,
);
new class DiancieForm extends Form {}(
  PokemonForm.Diancie,
  PokemonVariety.Diancie,
  PokemonSpecies.Diancie,
);
new class DiancieMegaForm extends Form {}(
  PokemonForm.DiancieMega,
  PokemonVariety.DiancieMega,
  PokemonSpecies.Diancie,
);
new class HoopaForm extends Form {}(
  PokemonForm.Hoopa,
  PokemonVariety.Hoopa,
  PokemonSpecies.Hoopa,
);
new class HoopaUnboundForm extends Form {}(
  PokemonForm.HoopaUnbound,
  PokemonVariety.HoopaUnbound,
  PokemonSpecies.Hoopa,
);
new class VolcanionForm extends Form {}(
  PokemonForm.Volcanion,
  PokemonVariety.Volcanion,
  PokemonSpecies.Volcanion,
);
new class RowletForm extends Form {}(
  PokemonForm.Rowlet,
  PokemonVariety.Rowlet,
  PokemonSpecies.Rowlet,
);
new class DartrixForm extends Form {}(
  PokemonForm.Dartrix,
  PokemonVariety.Dartrix,
  PokemonSpecies.Dartrix,
);
new class DecidueyeForm extends Form {}(
  PokemonForm.Decidueye,
  PokemonVariety.Decidueye,
  PokemonSpecies.Decidueye,
);
new class DecidueyeHisuiForm extends Form {}(
  PokemonForm.DecidueyeHisui,
  PokemonVariety.DecidueyeHisui,
  PokemonSpecies.Decidueye,
);
new class LittenForm extends Form {}(
  PokemonForm.Litten,
  PokemonVariety.Litten,
  PokemonSpecies.Litten,
);
new class TorracatForm extends Form {}(
  PokemonForm.Torracat,
  PokemonVariety.Torracat,
  PokemonSpecies.Torracat,
);
new class IncineroarForm extends Form {}(
  PokemonForm.Incineroar,
  PokemonVariety.Incineroar,
  PokemonSpecies.Incineroar,
);
new class PopplioForm extends Form {}(
  PokemonForm.Popplio,
  PokemonVariety.Popplio,
  PokemonSpecies.Popplio,
);
new class BrionneForm extends Form {}(
  PokemonForm.Brionne,
  PokemonVariety.Brionne,
  PokemonSpecies.Brionne,
);
new class PrimarinaForm extends Form {}(
  PokemonForm.Primarina,
  PokemonVariety.Primarina,
  PokemonSpecies.Primarina,
);
new class PikipekForm extends Form {}(
  PokemonForm.Pikipek,
  PokemonVariety.Pikipek,
  PokemonSpecies.Pikipek,
);
new class TrumbeakForm extends Form {}(
  PokemonForm.Trumbeak,
  PokemonVariety.Trumbeak,
  PokemonSpecies.Trumbeak,
);
new class ToucannonForm extends Form {}(
  PokemonForm.Toucannon,
  PokemonVariety.Toucannon,
  PokemonSpecies.Toucannon,
);
new class YungoosForm extends Form {}(
  PokemonForm.Yungoos,
  PokemonVariety.Yungoos,
  PokemonSpecies.Yungoos,
);
new class GumshoosForm extends Form {}(
  PokemonForm.Gumshoos,
  PokemonVariety.Gumshoos,
  PokemonSpecies.Gumshoos,
);
new class GumshoosTotemForm extends Form {}(
  PokemonForm.GumshoosTotem,
  PokemonVariety.GumshoosTotem,
  PokemonSpecies.Gumshoos,
);
new class GrubbinForm extends Form {}(
  PokemonForm.Grubbin,
  PokemonVariety.Grubbin,
  PokemonSpecies.Grubbin,
);
new class CharjabugForm extends Form {}(
  PokemonForm.Charjabug,
  PokemonVariety.Charjabug,
  PokemonSpecies.Charjabug,
);
new class VikavoltForm extends Form {}(
  PokemonForm.Vikavolt,
  PokemonVariety.Vikavolt,
  PokemonSpecies.Vikavolt,
);
new class VikavoltTotemForm extends Form {}(
  PokemonForm.VikavoltTotem,
  PokemonVariety.VikavoltTotem,
  PokemonSpecies.Vikavolt,
);
new class CrabrawlerForm extends Form {}(
  PokemonForm.Crabrawler,
  PokemonVariety.Crabrawler,
  PokemonSpecies.Crabrawler,
);
new class CrabominableForm extends Form {}(
  PokemonForm.Crabominable,
  PokemonVariety.Crabominable,
  PokemonSpecies.Crabominable,
);
new class OricorioBaileForm extends Form {}(
  PokemonForm.OricorioBaile,
  PokemonVariety.OricorioBaile,
  PokemonSpecies.Oricorio,
);
new class OricorioPomPomForm extends Form {}(
  PokemonForm.OricorioPomPom,
  PokemonVariety.OricorioPomPom,
  PokemonSpecies.Oricorio,
);
new class OricorioPauForm extends Form {}(
  PokemonForm.OricorioPau,
  PokemonVariety.OricorioPau,
  PokemonSpecies.Oricorio,
);
new class OricorioSensuForm extends Form {}(
  PokemonForm.OricorioSensu,
  PokemonVariety.OricorioSensu,
  PokemonSpecies.Oricorio,
);
new class CutieflyForm extends Form {}(
  PokemonForm.Cutiefly,
  PokemonVariety.Cutiefly,
  PokemonSpecies.Cutiefly,
);
new class RibombeeForm extends Form {}(
  PokemonForm.Ribombee,
  PokemonVariety.Ribombee,
  PokemonSpecies.Ribombee,
);
new class RibombeeTotemForm extends Form {}(
  PokemonForm.RibombeeTotem,
  PokemonVariety.RibombeeTotem,
  PokemonSpecies.Ribombee,
);
new class RockruffForm extends Form {}(
  PokemonForm.Rockruff,
  PokemonVariety.Rockruff,
  PokemonSpecies.Rockruff,
);
new class RockruffOwnTempoForm extends Form {}(
  PokemonForm.RockruffOwnTempo,
  PokemonVariety.RockruffOwnTempo,
  PokemonSpecies.Rockruff,
);
new class LycanrocMiddayForm extends Form {}(
  PokemonForm.LycanrocMidday,
  PokemonVariety.LycanrocMidday,
  PokemonSpecies.Lycanroc,
);
new class LycanrocMidnightForm extends Form {}(
  PokemonForm.LycanrocMidnight,
  PokemonVariety.LycanrocMidnight,
  PokemonSpecies.Lycanroc,
);
new class LycanrocDuskForm extends Form {}(
  PokemonForm.LycanrocDusk,
  PokemonVariety.LycanrocDusk,
  PokemonSpecies.Lycanroc,
);
new class WishiwashiSoloForm extends Form {}(
  PokemonForm.WishiwashiSolo,
  PokemonVariety.WishiwashiSolo,
  PokemonSpecies.Wishiwashi,
);
new class WishiwashiSchoolForm extends Form {}(
  PokemonForm.WishiwashiSchool,
  PokemonVariety.WishiwashiSchool,
  PokemonSpecies.Wishiwashi,
);
new class MareanieForm extends Form {}(
  PokemonForm.Mareanie,
  PokemonVariety.Mareanie,
  PokemonSpecies.Mareanie,
);
new class ToxapexForm extends Form {}(
  PokemonForm.Toxapex,
  PokemonVariety.Toxapex,
  PokemonSpecies.Toxapex,
);
new class MudbrayForm extends Form {}(
  PokemonForm.Mudbray,
  PokemonVariety.Mudbray,
  PokemonSpecies.Mudbray,
);
new class MudsdaleForm extends Form {}(
  PokemonForm.Mudsdale,
  PokemonVariety.Mudsdale,
  PokemonSpecies.Mudsdale,
);
new class DewpiderForm extends Form {}(
  PokemonForm.Dewpider,
  PokemonVariety.Dewpider,
  PokemonSpecies.Dewpider,
);
new class AraquanidForm extends Form {}(
  PokemonForm.Araquanid,
  PokemonVariety.Araquanid,
  PokemonSpecies.Araquanid,
);
new class AraquanidTotemForm extends Form {}(
  PokemonForm.AraquanidTotem,
  PokemonVariety.AraquanidTotem,
  PokemonSpecies.Araquanid,
);
new class FomantisForm extends Form {}(
  PokemonForm.Fomantis,
  PokemonVariety.Fomantis,
  PokemonSpecies.Fomantis,
);
new class LurantisForm extends Form {}(
  PokemonForm.Lurantis,
  PokemonVariety.Lurantis,
  PokemonSpecies.Lurantis,
);
new class LurantisTotemForm extends Form {}(
  PokemonForm.LurantisTotem,
  PokemonVariety.LurantisTotem,
  PokemonSpecies.Lurantis,
);
new class MorelullForm extends Form {}(
  PokemonForm.Morelull,
  PokemonVariety.Morelull,
  PokemonSpecies.Morelull,
);
new class ShiinoticForm extends Form {}(
  PokemonForm.Shiinotic,
  PokemonVariety.Shiinotic,
  PokemonSpecies.Shiinotic,
);
new class SalanditForm extends Form {}(
  PokemonForm.Salandit,
  PokemonVariety.Salandit,
  PokemonSpecies.Salandit,
);
new class SalazzleForm extends Form {}(
  PokemonForm.Salazzle,
  PokemonVariety.Salazzle,
  PokemonSpecies.Salazzle,
);
new class SalazzleTotemForm extends Form {}(
  PokemonForm.SalazzleTotem,
  PokemonVariety.SalazzleTotem,
  PokemonSpecies.Salazzle,
);
new class StuffulForm extends Form {}(
  PokemonForm.Stufful,
  PokemonVariety.Stufful,
  PokemonSpecies.Stufful,
);
new class BewearForm extends Form {}(
  PokemonForm.Bewear,
  PokemonVariety.Bewear,
  PokemonSpecies.Bewear,
);
new class BounsweetForm extends Form {}(
  PokemonForm.Bounsweet,
  PokemonVariety.Bounsweet,
  PokemonSpecies.Bounsweet,
);
new class SteeneeForm extends Form {}(
  PokemonForm.Steenee,
  PokemonVariety.Steenee,
  PokemonSpecies.Steenee,
);
new class TsareenaForm extends Form {}(
  PokemonForm.Tsareena,
  PokemonVariety.Tsareena,
  PokemonSpecies.Tsareena,
);
new class ComfeyForm extends Form {}(
  PokemonForm.Comfey,
  PokemonVariety.Comfey,
  PokemonSpecies.Comfey,
);
new class OranguruForm extends Form {}(
  PokemonForm.Oranguru,
  PokemonVariety.Oranguru,
  PokemonSpecies.Oranguru,
);
new class PassimianForm extends Form {}(
  PokemonForm.Passimian,
  PokemonVariety.Passimian,
  PokemonSpecies.Passimian,
);
new class WimpodForm extends Form {}(
  PokemonForm.Wimpod,
  PokemonVariety.Wimpod,
  PokemonSpecies.Wimpod,
);
new class GolisopodForm extends Form {}(
  PokemonForm.Golisopod,
  PokemonVariety.Golisopod,
  PokemonSpecies.Golisopod,
);
new class SandygastForm extends Form {}(
  PokemonForm.Sandygast,
  PokemonVariety.Sandygast,
  PokemonSpecies.Sandygast,
);
new class PalossandForm extends Form {}(
  PokemonForm.Palossand,
  PokemonVariety.Palossand,
  PokemonSpecies.Palossand,
);
new class PyukumukuForm extends Form {}(
  PokemonForm.Pyukumuku,
  PokemonVariety.Pyukumuku,
  PokemonSpecies.Pyukumuku,
);
new class TypeNullForm extends Form {}(
  PokemonForm.TypeNull,
  PokemonVariety.TypeNull,
  PokemonSpecies.TypeNull,
);
new class SilvallyNormalForm extends Form {}(
  PokemonForm.SilvallyNormal,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyFightingForm extends Form {}(
  PokemonForm.SilvallyFighting,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyFlyingForm extends Form {}(
  PokemonForm.SilvallyFlying,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyPoisonForm extends Form {}(
  PokemonForm.SilvallyPoison,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyGroundForm extends Form {}(
  PokemonForm.SilvallyGround,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyRockForm extends Form {}(
  PokemonForm.SilvallyRock,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyBugForm extends Form {}(
  PokemonForm.SilvallyBug,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyGhostForm extends Form {}(
  PokemonForm.SilvallyGhost,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallySteelForm extends Form {}(
  PokemonForm.SilvallySteel,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyFireForm extends Form {}(
  PokemonForm.SilvallyFire,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyWaterForm extends Form {}(
  PokemonForm.SilvallyWater,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyGrassForm extends Form {}(
  PokemonForm.SilvallyGrass,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyElectricForm extends Form {}(
  PokemonForm.SilvallyElectric,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyPsychicForm extends Form {}(
  PokemonForm.SilvallyPsychic,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyIceForm extends Form {}(
  PokemonForm.SilvallyIce,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyDragonForm extends Form {}(
  PokemonForm.SilvallyDragon,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyDarkForm extends Form {}(
  PokemonForm.SilvallyDark,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class SilvallyFairyForm extends Form {}(
  PokemonForm.SilvallyFairy,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
);
new class MiniorRedMeteorForm extends Form {}(
  PokemonForm.MiniorRedMeteor,
  PokemonVariety.MiniorRedMeteor,
  PokemonSpecies.Minior,
);
new class MiniorOrangeMeteorForm extends Form {}(
  PokemonForm.MiniorOrangeMeteor,
  PokemonVariety.MiniorOrangeMeteor,
  PokemonSpecies.Minior,
);
new class MiniorYellowMeteorForm extends Form {}(
  PokemonForm.MiniorYellowMeteor,
  PokemonVariety.MiniorYellowMeteor,
  PokemonSpecies.Minior,
);
new class MiniorGreenMeteorForm extends Form {}(
  PokemonForm.MiniorGreenMeteor,
  PokemonVariety.MiniorGreenMeteor,
  PokemonSpecies.Minior,
);
new class MiniorBlueMeteorForm extends Form {}(
  PokemonForm.MiniorBlueMeteor,
  PokemonVariety.MiniorBlueMeteor,
  PokemonSpecies.Minior,
);
new class MiniorIndigoMeteorForm extends Form {}(
  PokemonForm.MiniorIndigoMeteor,
  PokemonVariety.MiniorIndigoMeteor,
  PokemonSpecies.Minior,
);
new class MiniorVioletMeteorForm extends Form {}(
  PokemonForm.MiniorVioletMeteor,
  PokemonVariety.MiniorVioletMeteor,
  PokemonSpecies.Minior,
);
new class MiniorRedForm extends Form {}(
  PokemonForm.MiniorRed,
  PokemonVariety.MiniorRed,
  PokemonSpecies.Minior,
);
new class MiniorOrangeForm extends Form {}(
  PokemonForm.MiniorOrange,
  PokemonVariety.MiniorOrange,
  PokemonSpecies.Minior,
);
new class MiniorYellowForm extends Form {}(
  PokemonForm.MiniorYellow,
  PokemonVariety.MiniorYellow,
  PokemonSpecies.Minior,
);
new class MiniorGreenForm extends Form {}(
  PokemonForm.MiniorGreen,
  PokemonVariety.MiniorGreen,
  PokemonSpecies.Minior,
);
new class MiniorBlueForm extends Form {}(
  PokemonForm.MiniorBlue,
  PokemonVariety.MiniorBlue,
  PokemonSpecies.Minior,
);
new class MiniorIndigoForm extends Form {}(
  PokemonForm.MiniorIndigo,
  PokemonVariety.MiniorIndigo,
  PokemonSpecies.Minior,
);
new class MiniorVioletForm extends Form {}(
  PokemonForm.MiniorViolet,
  PokemonVariety.MiniorViolet,
  PokemonSpecies.Minior,
);
new class KomalaForm extends Form {}(
  PokemonForm.Komala,
  PokemonVariety.Komala,
  PokemonSpecies.Komala,
);
new class TurtonatorForm extends Form {}(
  PokemonForm.Turtonator,
  PokemonVariety.Turtonator,
  PokemonSpecies.Turtonator,
);
new class TogedemaruForm extends Form {}(
  PokemonForm.Togedemaru,
  PokemonVariety.Togedemaru,
  PokemonSpecies.Togedemaru,
);
new class TogedemaruTotemForm extends Form {}(
  PokemonForm.TogedemaruTotem,
  PokemonVariety.TogedemaruTotem,
  PokemonSpecies.Togedemaru,
);
new class MimikyuDisguisedForm extends Form {}(
  PokemonForm.MimikyuDisguised,
  PokemonVariety.MimikyuDisguised,
  PokemonSpecies.Mimikyu,
);
new class MimikyuBustedForm extends Form {}(
  PokemonForm.MimikyuBusted,
  PokemonVariety.MimikyuBusted,
  PokemonSpecies.Mimikyu,
);
new class MimikyuTotemDisguisedForm extends Form {}(
  PokemonForm.MimikyuTotemDisguised,
  PokemonVariety.MimikyuTotemDisguised,
  PokemonSpecies.Mimikyu,
);
new class MimikyuTotemBustedForm extends Form {}(
  PokemonForm.MimikyuTotemBusted,
  PokemonVariety.MimikyuTotemBusted,
  PokemonSpecies.Mimikyu,
);
new class BruxishForm extends Form {}(
  PokemonForm.Bruxish,
  PokemonVariety.Bruxish,
  PokemonSpecies.Bruxish,
);
new class DrampaForm extends Form {}(
  PokemonForm.Drampa,
  PokemonVariety.Drampa,
  PokemonSpecies.Drampa,
);
new class DhelmiseForm extends Form {}(
  PokemonForm.Dhelmise,
  PokemonVariety.Dhelmise,
  PokemonSpecies.Dhelmise,
);
new class JangmoOForm extends Form {}(
  PokemonForm.JangmoO,
  PokemonVariety.JangmoO,
  PokemonSpecies.JangmoO,
);
new class HakamoOForm extends Form {}(
  PokemonForm.HakamoO,
  PokemonVariety.HakamoO,
  PokemonSpecies.HakamoO,
);
new class KommoOForm extends Form {}(
  PokemonForm.KommoO,
  PokemonVariety.KommoO,
  PokemonSpecies.KommoO,
);
new class KommoOTotemForm extends Form {}(
  PokemonForm.KommoOTotem,
  PokemonVariety.KommoOTotem,
  PokemonSpecies.KommoO,
);
new class TapuKokoForm extends Form {}(
  PokemonForm.TapuKoko,
  PokemonVariety.TapuKoko,
  PokemonSpecies.TapuKoko,
);
new class TapuLeleForm extends Form {}(
  PokemonForm.TapuLele,
  PokemonVariety.TapuLele,
  PokemonSpecies.TapuLele,
);
new class TapuBuluForm extends Form {}(
  PokemonForm.TapuBulu,
  PokemonVariety.TapuBulu,
  PokemonSpecies.TapuBulu,
);
new class TapuFiniForm extends Form {}(
  PokemonForm.TapuFini,
  PokemonVariety.TapuFini,
  PokemonSpecies.TapuFini,
);
new class CosmogForm extends Form {}(
  PokemonForm.Cosmog,
  PokemonVariety.Cosmog,
  PokemonSpecies.Cosmog,
);
new class CosmoemForm extends Form {}(
  PokemonForm.Cosmoem,
  PokemonVariety.Cosmoem,
  PokemonSpecies.Cosmoem,
);
new class SolgaleoForm extends Form {}(
  PokemonForm.Solgaleo,
  PokemonVariety.Solgaleo,
  PokemonSpecies.Solgaleo,
);
new class LunalaForm extends Form {}(
  PokemonForm.Lunala,
  PokemonVariety.Lunala,
  PokemonSpecies.Lunala,
);
new class NihilegoForm extends Form {}(
  PokemonForm.Nihilego,
  PokemonVariety.Nihilego,
  PokemonSpecies.Nihilego,
);
new class BuzzwoleForm extends Form {}(
  PokemonForm.Buzzwole,
  PokemonVariety.Buzzwole,
  PokemonSpecies.Buzzwole,
);
new class PheromosaForm extends Form {}(
  PokemonForm.Pheromosa,
  PokemonVariety.Pheromosa,
  PokemonSpecies.Pheromosa,
);
new class XurkitreeForm extends Form {}(
  PokemonForm.Xurkitree,
  PokemonVariety.Xurkitree,
  PokemonSpecies.Xurkitree,
);
new class CelesteelaForm extends Form {}(
  PokemonForm.Celesteela,
  PokemonVariety.Celesteela,
  PokemonSpecies.Celesteela,
);
new class KartanaForm extends Form {}(
  PokemonForm.Kartana,
  PokemonVariety.Kartana,
  PokemonSpecies.Kartana,
);
new class GuzzlordForm extends Form {}(
  PokemonForm.Guzzlord,
  PokemonVariety.Guzzlord,
  PokemonSpecies.Guzzlord,
);
new class NecrozmaForm extends Form {}(
  PokemonForm.Necrozma,
  PokemonVariety.Necrozma,
  PokemonSpecies.Necrozma,
);
new class NecrozmaDuskForm extends Form {}(
  PokemonForm.NecrozmaDusk,
  PokemonVariety.NecrozmaDusk,
  PokemonSpecies.Necrozma,
);
new class NecrozmaDawnForm extends Form {}(
  PokemonForm.NecrozmaDawn,
  PokemonVariety.NecrozmaDawn,
  PokemonSpecies.Necrozma,
);
new class NecrozmaUltraForm extends Form {}(
  PokemonForm.NecrozmaUltra,
  PokemonVariety.NecrozmaUltra,
  PokemonSpecies.Necrozma,
);
new class MagearnaForm extends Form {}(
  PokemonForm.Magearna,
  PokemonVariety.Magearna,
  PokemonSpecies.Magearna,
);
new class MagearnaOriginalForm extends Form {}(
  PokemonForm.MagearnaOriginal,
  PokemonVariety.MagearnaOriginal,
  PokemonSpecies.Magearna,
);
new class MarshadowForm extends Form {}(
  PokemonForm.Marshadow,
  PokemonVariety.Marshadow,
  PokemonSpecies.Marshadow,
);
new class PoipoleForm extends Form {}(
  PokemonForm.Poipole,
  PokemonVariety.Poipole,
  PokemonSpecies.Poipole,
);
new class NaganadelForm extends Form {}(
  PokemonForm.Naganadel,
  PokemonVariety.Naganadel,
  PokemonSpecies.Naganadel,
);
new class StakatakaForm extends Form {}(
  PokemonForm.Stakataka,
  PokemonVariety.Stakataka,
  PokemonSpecies.Stakataka,
);
new class BlacephalonForm extends Form {}(
  PokemonForm.Blacephalon,
  PokemonVariety.Blacephalon,
  PokemonSpecies.Blacephalon,
);
new class ZeraoraForm extends Form {}(
  PokemonForm.Zeraora,
  PokemonVariety.Zeraora,
  PokemonSpecies.Zeraora,
);
new class MeltanForm extends Form {}(
  PokemonForm.Meltan,
  PokemonVariety.Meltan,
  PokemonSpecies.Meltan,
);
new class MelmetalForm extends Form {}(
  PokemonForm.Melmetal,
  PokemonVariety.Melmetal,
  PokemonSpecies.Melmetal,
);
new class MelmetalGmaxForm extends Form {}(
  PokemonForm.MelmetalGmax,
  PokemonVariety.MelmetalGmax,
  PokemonSpecies.Melmetal,
);
new class GrookeyForm extends Form {}(
  PokemonForm.Grookey,
  PokemonVariety.Grookey,
  PokemonSpecies.Grookey,
);
new class ThwackeyForm extends Form {}(
  PokemonForm.Thwackey,
  PokemonVariety.Thwackey,
  PokemonSpecies.Thwackey,
);
new class RillaboomForm extends Form {}(
  PokemonForm.Rillaboom,
  PokemonVariety.Rillaboom,
  PokemonSpecies.Rillaboom,
);
new class RillaboomGmaxForm extends Form {}(
  PokemonForm.RillaboomGmax,
  PokemonVariety.RillaboomGmax,
  PokemonSpecies.Rillaboom,
);
new class ScorbunnyForm extends Form {}(
  PokemonForm.Scorbunny,
  PokemonVariety.Scorbunny,
  PokemonSpecies.Scorbunny,
);
new class RabootForm extends Form {}(
  PokemonForm.Raboot,
  PokemonVariety.Raboot,
  PokemonSpecies.Raboot,
);
new class CinderaceForm extends Form {}(
  PokemonForm.Cinderace,
  PokemonVariety.Cinderace,
  PokemonSpecies.Cinderace,
);
new class CinderaceGmaxForm extends Form {}(
  PokemonForm.CinderaceGmax,
  PokemonVariety.CinderaceGmax,
  PokemonSpecies.Cinderace,
);
new class SobbleForm extends Form {}(
  PokemonForm.Sobble,
  PokemonVariety.Sobble,
  PokemonSpecies.Sobble,
);
new class DrizzileForm extends Form {}(
  PokemonForm.Drizzile,
  PokemonVariety.Drizzile,
  PokemonSpecies.Drizzile,
);
new class InteleonForm extends Form {}(
  PokemonForm.Inteleon,
  PokemonVariety.Inteleon,
  PokemonSpecies.Inteleon,
);
new class InteleonGmaxForm extends Form {}(
  PokemonForm.InteleonGmax,
  PokemonVariety.InteleonGmax,
  PokemonSpecies.Inteleon,
);
new class SkwovetForm extends Form {}(
  PokemonForm.Skwovet,
  PokemonVariety.Skwovet,
  PokemonSpecies.Skwovet,
);
new class GreedentForm extends Form {}(
  PokemonForm.Greedent,
  PokemonVariety.Greedent,
  PokemonSpecies.Greedent,
);
new class RookideeForm extends Form {}(
  PokemonForm.Rookidee,
  PokemonVariety.Rookidee,
  PokemonSpecies.Rookidee,
);
new class CorvisquireForm extends Form {}(
  PokemonForm.Corvisquire,
  PokemonVariety.Corvisquire,
  PokemonSpecies.Corvisquire,
);
new class CorviknightForm extends Form {}(
  PokemonForm.Corviknight,
  PokemonVariety.Corviknight,
  PokemonSpecies.Corviknight,
);
new class CorviknightGmaxForm extends Form {}(
  PokemonForm.CorviknightGmax,
  PokemonVariety.CorviknightGmax,
  PokemonSpecies.Corviknight,
);
new class BlipbugForm extends Form {}(
  PokemonForm.Blipbug,
  PokemonVariety.Blipbug,
  PokemonSpecies.Blipbug,
);
new class DottlerForm extends Form {}(
  PokemonForm.Dottler,
  PokemonVariety.Dottler,
  PokemonSpecies.Dottler,
);
new class OrbeetleForm extends Form {}(
  PokemonForm.Orbeetle,
  PokemonVariety.Orbeetle,
  PokemonSpecies.Orbeetle,
);
new class OrbeetleGmaxForm extends Form {}(
  PokemonForm.OrbeetleGmax,
  PokemonVariety.OrbeetleGmax,
  PokemonSpecies.Orbeetle,
);
new class NickitForm extends Form {}(
  PokemonForm.Nickit,
  PokemonVariety.Nickit,
  PokemonSpecies.Nickit,
);
new class ThievulForm extends Form {}(
  PokemonForm.Thievul,
  PokemonVariety.Thievul,
  PokemonSpecies.Thievul,
);
new class GossifleurForm extends Form {}(
  PokemonForm.Gossifleur,
  PokemonVariety.Gossifleur,
  PokemonSpecies.Gossifleur,
);
new class EldegossForm extends Form {}(
  PokemonForm.Eldegoss,
  PokemonVariety.Eldegoss,
  PokemonSpecies.Eldegoss,
);
new class WoolooForm extends Form {}(
  PokemonForm.Wooloo,
  PokemonVariety.Wooloo,
  PokemonSpecies.Wooloo,
);
new class DubwoolForm extends Form {}(
  PokemonForm.Dubwool,
  PokemonVariety.Dubwool,
  PokemonSpecies.Dubwool,
);
new class ChewtleForm extends Form {}(
  PokemonForm.Chewtle,
  PokemonVariety.Chewtle,
  PokemonSpecies.Chewtle,
);
new class DrednawForm extends Form {}(
  PokemonForm.Drednaw,
  PokemonVariety.Drednaw,
  PokemonSpecies.Drednaw,
);
new class DrednawGmaxForm extends Form {}(
  PokemonForm.DrednawGmax,
  PokemonVariety.DrednawGmax,
  PokemonSpecies.Drednaw,
);
new class YamperForm extends Form {}(
  PokemonForm.Yamper,
  PokemonVariety.Yamper,
  PokemonSpecies.Yamper,
);
new class BoltundForm extends Form {}(
  PokemonForm.Boltund,
  PokemonVariety.Boltund,
  PokemonSpecies.Boltund,
);
new class RolycolyForm extends Form {}(
  PokemonForm.Rolycoly,
  PokemonVariety.Rolycoly,
  PokemonSpecies.Rolycoly,
);
new class CarkolForm extends Form {}(
  PokemonForm.Carkol,
  PokemonVariety.Carkol,
  PokemonSpecies.Carkol,
);
new class CoalossalForm extends Form {}(
  PokemonForm.Coalossal,
  PokemonVariety.Coalossal,
  PokemonSpecies.Coalossal,
);
new class CoalossalGmaxForm extends Form {}(
  PokemonForm.CoalossalGmax,
  PokemonVariety.CoalossalGmax,
  PokemonSpecies.Coalossal,
);
new class ApplinForm extends Form {}(
  PokemonForm.Applin,
  PokemonVariety.Applin,
  PokemonSpecies.Applin,
);
new class FlappleForm extends Form {}(
  PokemonForm.Flapple,
  PokemonVariety.Flapple,
  PokemonSpecies.Flapple,
);
new class FlappleGmaxForm extends Form {}(
  PokemonForm.FlappleGmax,
  PokemonVariety.FlappleGmax,
  PokemonSpecies.Flapple,
);
new class AppletunForm extends Form {}(
  PokemonForm.Appletun,
  PokemonVariety.Appletun,
  PokemonSpecies.Appletun,
);
new class AppletunGmaxForm extends Form {}(
  PokemonForm.AppletunGmax,
  PokemonVariety.AppletunGmax,
  PokemonSpecies.Appletun,
);
new class SilicobraForm extends Form {}(
  PokemonForm.Silicobra,
  PokemonVariety.Silicobra,
  PokemonSpecies.Silicobra,
);
new class SandacondaForm extends Form {}(
  PokemonForm.Sandaconda,
  PokemonVariety.Sandaconda,
  PokemonSpecies.Sandaconda,
);
new class SandacondaGmaxForm extends Form {}(
  PokemonForm.SandacondaGmax,
  PokemonVariety.SandacondaGmax,
  PokemonSpecies.Sandaconda,
);
new class CramorantForm extends Form {}(
  PokemonForm.Cramorant,
  PokemonVariety.Cramorant,
  PokemonSpecies.Cramorant,
);
new class CramorantGulpingForm extends Form {}(
  PokemonForm.CramorantGulping,
  PokemonVariety.CramorantGulping,
  PokemonSpecies.Cramorant,
);
new class CramorantGorgingForm extends Form {}(
  PokemonForm.CramorantGorging,
  PokemonVariety.CramorantGorging,
  PokemonSpecies.Cramorant,
);
new class ArrokudaForm extends Form {}(
  PokemonForm.Arrokuda,
  PokemonVariety.Arrokuda,
  PokemonSpecies.Arrokuda,
);
new class BarraskewdaForm extends Form {}(
  PokemonForm.Barraskewda,
  PokemonVariety.Barraskewda,
  PokemonSpecies.Barraskewda,
);
new class ToxelForm extends Form {}(
  PokemonForm.Toxel,
  PokemonVariety.Toxel,
  PokemonSpecies.Toxel,
);
new class ToxtricityAmpedForm extends Form {}(
  PokemonForm.ToxtricityAmped,
  PokemonVariety.ToxtricityAmped,
  PokemonSpecies.Toxtricity,
);
new class ToxtricityLowKeyForm extends Form {}(
  PokemonForm.ToxtricityLowKey,
  PokemonVariety.ToxtricityLowKey,
  PokemonSpecies.Toxtricity,
);
new class ToxtricityAmpedGmaxForm extends Form {}(
  PokemonForm.ToxtricityAmpedGmax,
  PokemonVariety.ToxtricityAmpedGmax,
  PokemonSpecies.Toxtricity,
);
new class ToxtricityLowKeyGmaxForm extends Form {}(
  PokemonForm.ToxtricityLowKeyGmax,
  PokemonVariety.ToxtricityLowKeyGmax,
  PokemonSpecies.Toxtricity,
);
new class SizzlipedeForm extends Form {}(
  PokemonForm.Sizzlipede,
  PokemonVariety.Sizzlipede,
  PokemonSpecies.Sizzlipede,
);
new class CentiskorchForm extends Form {}(
  PokemonForm.Centiskorch,
  PokemonVariety.Centiskorch,
  PokemonSpecies.Centiskorch,
);
new class CentiskorchGmaxForm extends Form {}(
  PokemonForm.CentiskorchGmax,
  PokemonVariety.CentiskorchGmax,
  PokemonSpecies.Centiskorch,
);
new class ClobbopusForm extends Form {}(
  PokemonForm.Clobbopus,
  PokemonVariety.Clobbopus,
  PokemonSpecies.Clobbopus,
);
new class GrapploctForm extends Form {}(
  PokemonForm.Grapploct,
  PokemonVariety.Grapploct,
  PokemonSpecies.Grapploct,
);
new class SinisteaPhonyForm extends Form {}(
  PokemonForm.SinisteaPhony,
  PokemonVariety.Sinistea,
  PokemonSpecies.Sinistea,
);
new class SinisteaAntiqueForm extends Form {}(
  PokemonForm.SinisteaAntique,
  PokemonVariety.Sinistea,
  PokemonSpecies.Sinistea,
);
new class PolteageistPhonyForm extends Form {}(
  PokemonForm.PolteageistPhony,
  PokemonVariety.Polteageist,
  PokemonSpecies.Polteageist,
);
new class PolteageistAntiqueForm extends Form {}(
  PokemonForm.PolteageistAntique,
  PokemonVariety.Polteageist,
  PokemonSpecies.Polteageist,
);
new class HatennaForm extends Form {}(
  PokemonForm.Hatenna,
  PokemonVariety.Hatenna,
  PokemonSpecies.Hatenna,
);
new class HattremForm extends Form {}(
  PokemonForm.Hattrem,
  PokemonVariety.Hattrem,
  PokemonSpecies.Hattrem,
);
new class HattereneForm extends Form {}(
  PokemonForm.Hatterene,
  PokemonVariety.Hatterene,
  PokemonSpecies.Hatterene,
);
new class HattereneGmaxForm extends Form {}(
  PokemonForm.HattereneGmax,
  PokemonVariety.HattereneGmax,
  PokemonSpecies.Hatterene,
);
new class ImpidimpForm extends Form {}(
  PokemonForm.Impidimp,
  PokemonVariety.Impidimp,
  PokemonSpecies.Impidimp,
);
new class MorgremForm extends Form {}(
  PokemonForm.Morgrem,
  PokemonVariety.Morgrem,
  PokemonSpecies.Morgrem,
);
new class GrimmsnarlForm extends Form {}(
  PokemonForm.Grimmsnarl,
  PokemonVariety.Grimmsnarl,
  PokemonSpecies.Grimmsnarl,
);
new class GrimmsnarlGmaxForm extends Form {}(
  PokemonForm.GrimmsnarlGmax,
  PokemonVariety.GrimmsnarlGmax,
  PokemonSpecies.Grimmsnarl,
);
new class ObstagoonForm extends Form {}(
  PokemonForm.Obstagoon,
  PokemonVariety.Obstagoon,
  PokemonSpecies.Obstagoon,
);
new class PerrserkerForm extends Form {}(
  PokemonForm.Perrserker,
  PokemonVariety.Perrserker,
  PokemonSpecies.Perrserker,
);
new class CursolaForm extends Form {}(
  PokemonForm.Cursola,
  PokemonVariety.Cursola,
  PokemonSpecies.Cursola,
);
new class SirfetchdForm extends Form {}(
  PokemonForm.Sirfetchd,
  PokemonVariety.Sirfetchd,
  PokemonSpecies.Sirfetchd,
);
new class MrRimeForm extends Form {}(
  PokemonForm.MrRime,
  PokemonVariety.MrRime,
  PokemonSpecies.MrRime,
);
new class RunerigusForm extends Form {}(
  PokemonForm.Runerigus,
  PokemonVariety.Runerigus,
  PokemonSpecies.Runerigus,
);
new class MilceryForm extends Form {}(
  PokemonForm.Milcery,
  PokemonVariety.Milcery,
  PokemonSpecies.Milcery,
);
new class AlcremieVanillaCreamForm extends Form {}(
  PokemonForm.AlcremieVanillaCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
);
new class AlcremieRubyCreamForm extends Form {}(
  PokemonForm.AlcremieRubyCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
);
new class AlcremieMatchaCreamForm extends Form {}(
  PokemonForm.AlcremieMatchaCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
);
new class AlcremieMintCreamForm extends Form {}(
  PokemonForm.AlcremieMintCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
);
new class AlcremieLemonCreamForm extends Form {}(
  PokemonForm.AlcremieLemonCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
);
new class AlcremieSaltedCreamForm extends Form {}(
  PokemonForm.AlcremieSaltedCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
);
new class AlcremieRubySwirlForm extends Form {}(
  PokemonForm.AlcremieRubySwirl,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
);
new class AlcremieCaramelSwirlForm extends Form {}(
  PokemonForm.AlcremieCaramelSwirl,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
);
new class AlcremieRainbowSwirlForm extends Form {}(
  PokemonForm.AlcremieRainbowSwirl,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
);
new class AlcremieGmaxForm extends Form {}(
  PokemonForm.AlcremieGmax,
  PokemonVariety.AlcremieGmax,
  PokemonSpecies.Alcremie,
);
new class FalinksForm extends Form {}(
  PokemonForm.Falinks,
  PokemonVariety.Falinks,
  PokemonSpecies.Falinks,
);
new class PincurchinForm extends Form {}(
  PokemonForm.Pincurchin,
  PokemonVariety.Pincurchin,
  PokemonSpecies.Pincurchin,
);
new class SnomForm extends Form {}(
  PokemonForm.Snom,
  PokemonVariety.Snom,
  PokemonSpecies.Snom,
);
new class FrosmothForm extends Form {}(
  PokemonForm.Frosmoth,
  PokemonVariety.Frosmoth,
  PokemonSpecies.Frosmoth,
);
new class StonjournerForm extends Form {}(
  PokemonForm.Stonjourner,
  PokemonVariety.Stonjourner,
  PokemonSpecies.Stonjourner,
);
new class EiscueIceForm extends Form {}(
  PokemonForm.EiscueIce,
  PokemonVariety.EiscueIce,
  PokemonSpecies.Eiscue,
);
new class EiscueNoiceForm extends Form {}(
  PokemonForm.EiscueNoice,
  PokemonVariety.EiscueNoice,
  PokemonSpecies.Eiscue,
);
new class IndeedeeMaleForm extends Form {}(
  PokemonForm.IndeedeeMale,
  PokemonVariety.IndeedeeMale,
  PokemonSpecies.Indeedee,
);
new class IndeedeeFemaleForm extends Form {}(
  PokemonForm.IndeedeeFemale,
  PokemonVariety.IndeedeeFemale,
  PokemonSpecies.Indeedee,
);
new class MorpekoFullBellyForm extends Form {}(
  PokemonForm.MorpekoFullBelly,
  PokemonVariety.MorpekoFullBelly,
  PokemonSpecies.Morpeko,
);
new class MorpekoHangryForm extends Form {}(
  PokemonForm.MorpekoHangry,
  PokemonVariety.MorpekoHangry,
  PokemonSpecies.Morpeko,
);
new class CufantForm extends Form {}(
  PokemonForm.Cufant,
  PokemonVariety.Cufant,
  PokemonSpecies.Cufant,
);
new class CopperajahForm extends Form {}(
  PokemonForm.Copperajah,
  PokemonVariety.Copperajah,
  PokemonSpecies.Copperajah,
);
new class CopperajahGmaxForm extends Form {}(
  PokemonForm.CopperajahGmax,
  PokemonVariety.CopperajahGmax,
  PokemonSpecies.Copperajah,
);
new class DracozoltForm extends Form {}(
  PokemonForm.Dracozolt,
  PokemonVariety.Dracozolt,
  PokemonSpecies.Dracozolt,
);
new class ArctozoltForm extends Form {}(
  PokemonForm.Arctozolt,
  PokemonVariety.Arctozolt,
  PokemonSpecies.Arctozolt,
);
new class DracovishForm extends Form {}(
  PokemonForm.Dracovish,
  PokemonVariety.Dracovish,
  PokemonSpecies.Dracovish,
);
new class ArctovishForm extends Form {}(
  PokemonForm.Arctovish,
  PokemonVariety.Arctovish,
  PokemonSpecies.Arctovish,
);
new class DuraludonForm extends Form {}(
  PokemonForm.Duraludon,
  PokemonVariety.Duraludon,
  PokemonSpecies.Duraludon,
);
new class DuraludonGmaxForm extends Form {}(
  PokemonForm.DuraludonGmax,
  PokemonVariety.DuraludonGmax,
  PokemonSpecies.Duraludon,
);
new class DreepyForm extends Form {}(
  PokemonForm.Dreepy,
  PokemonVariety.Dreepy,
  PokemonSpecies.Dreepy,
);
new class DrakloakForm extends Form {}(
  PokemonForm.Drakloak,
  PokemonVariety.Drakloak,
  PokemonSpecies.Drakloak,
);
new class DragapultForm extends Form {}(
  PokemonForm.Dragapult,
  PokemonVariety.Dragapult,
  PokemonSpecies.Dragapult,
);
new class ZacianForm extends Form {}(
  PokemonForm.Zacian,
  PokemonVariety.Zacian,
  PokemonSpecies.Zacian,
);
new class ZacianCrownedForm extends Form {}(
  PokemonForm.ZacianCrowned,
  PokemonVariety.ZacianCrowned,
  PokemonSpecies.Zacian,
);
new class ZamazentaForm extends Form {}(
  PokemonForm.Zamazenta,
  PokemonVariety.Zamazenta,
  PokemonSpecies.Zamazenta,
);
new class ZamazentaCrownedForm extends Form {}(
  PokemonForm.ZamazentaCrowned,
  PokemonVariety.ZamazentaCrowned,
  PokemonSpecies.Zamazenta,
);
new class EternatusForm extends Form {}(
  PokemonForm.Eternatus,
  PokemonVariety.Eternatus,
  PokemonSpecies.Eternatus,
);
new class EternatusEternamaxForm extends Form {}(
  PokemonForm.EternatusEternamax,
  PokemonVariety.EternatusEternamax,
  PokemonSpecies.Eternatus,
);
new class KubfuForm extends Form {}(
  PokemonForm.Kubfu,
  PokemonVariety.Kubfu,
  PokemonSpecies.Kubfu,
);
new class UrshifuSingleStrikeForm extends Form {}(
  PokemonForm.UrshifuSingleStrike,
  PokemonVariety.UrshifuSingleStrike,
  PokemonSpecies.Urshifu,
);
new class UrshifuRapidStrikeForm extends Form {}(
  PokemonForm.UrshifuRapidStrike,
  PokemonVariety.UrshifuRapidStrike,
  PokemonSpecies.Urshifu,
);
new class UrshifuSingleStrikeGmaxForm extends Form {}(
  PokemonForm.UrshifuSingleStrikeGmax,
  PokemonVariety.UrshifuSingleStrikeGmax,
  PokemonSpecies.Urshifu,
);
new class UrshifuRapidStrikeGmaxForm extends Form {}(
  PokemonForm.UrshifuRapidStrikeGmax,
  PokemonVariety.UrshifuRapidStrikeGmax,
  PokemonSpecies.Urshifu,
);
new class ZarudeForm extends Form {}(
  PokemonForm.Zarude,
  PokemonVariety.Zarude,
  PokemonSpecies.Zarude,
);
new class ZarudeDadaForm extends Form {}(
  PokemonForm.ZarudeDada,
  PokemonVariety.ZarudeDada,
  PokemonSpecies.Zarude,
);
new class RegielekiForm extends Form {}(
  PokemonForm.Regieleki,
  PokemonVariety.Regieleki,
  PokemonSpecies.Regieleki,
);
new class RegidragoForm extends Form {}(
  PokemonForm.Regidrago,
  PokemonVariety.Regidrago,
  PokemonSpecies.Regidrago,
);
new class GlastrierForm extends Form {}(
  PokemonForm.Glastrier,
  PokemonVariety.Glastrier,
  PokemonSpecies.Glastrier,
);
new class SpectrierForm extends Form {}(
  PokemonForm.Spectrier,
  PokemonVariety.Spectrier,
  PokemonSpecies.Spectrier,
);
new class CalyrexForm extends Form {}(
  PokemonForm.Calyrex,
  PokemonVariety.Calyrex,
  PokemonSpecies.Calyrex,
);
new class CalyrexIceForm extends Form {}(
  PokemonForm.CalyrexIce,
  PokemonVariety.CalyrexIce,
  PokemonSpecies.Calyrex,
);
new class CalyrexShadowForm extends Form {}(
  PokemonForm.CalyrexShadow,
  PokemonVariety.CalyrexShadow,
  PokemonSpecies.Calyrex,
);
new class WyrdeerForm extends Form {}(
  PokemonForm.Wyrdeer,
  PokemonVariety.Wyrdeer,
  PokemonSpecies.Wyrdeer,
);
new class KleavorForm extends Form {}(
  PokemonForm.Kleavor,
  PokemonVariety.Kleavor,
  PokemonSpecies.Kleavor,
);
new class UrsalunaForm extends Form {}(
  PokemonForm.Ursaluna,
  PokemonVariety.Ursaluna,
  PokemonSpecies.Ursaluna,
);
new class UrsalunaBloodmoonForm extends Form {}(
  PokemonForm.UrsalunaBloodmoon,
  PokemonVariety.UrsalunaBloodmoon,
  PokemonSpecies.Ursaluna,
);
new class BasculegionMaleForm extends Form {}(
  PokemonForm.BasculegionMale,
  PokemonVariety.BasculegionMale,
  PokemonSpecies.Basculegion,
);
new class BasculegionFemaleForm extends Form {}(
  PokemonForm.BasculegionFemale,
  PokemonVariety.BasculegionFemale,
  PokemonSpecies.Basculegion,
);
new class SneaslerForm extends Form {}(
  PokemonForm.Sneasler,
  PokemonVariety.Sneasler,
  PokemonSpecies.Sneasler,
);
new class OverqwilForm extends Form {}(
  PokemonForm.Overqwil,
  PokemonVariety.Overqwil,
  PokemonSpecies.Overqwil,
);
new class EnamorusIncarnateForm extends Form {}(
  PokemonForm.EnamorusIncarnate,
  PokemonVariety.EnamorusIncarnate,
  PokemonSpecies.Enamorus,
);
new class EnamorusTherianForm extends Form {}(
  PokemonForm.EnamorusTherian,
  PokemonVariety.EnamorusTherian,
  PokemonSpecies.Enamorus,
);
new class SprigatitoForm extends Form {}(
  PokemonForm.Sprigatito,
  PokemonVariety.Sprigatito,
  PokemonSpecies.Sprigatito,
);
new class FloragatoForm extends Form {}(
  PokemonForm.Floragato,
  PokemonVariety.Floragato,
  PokemonSpecies.Floragato,
);
new class MeowscaradaForm extends Form {}(
  PokemonForm.Meowscarada,
  PokemonVariety.Meowscarada,
  PokemonSpecies.Meowscarada,
);
new class FuecocoForm extends Form {}(
  PokemonForm.Fuecoco,
  PokemonVariety.Fuecoco,
  PokemonSpecies.Fuecoco,
);
new class CrocalorForm extends Form {}(
  PokemonForm.Crocalor,
  PokemonVariety.Crocalor,
  PokemonSpecies.Crocalor,
);
new class SkeledirgeForm extends Form {}(
  PokemonForm.Skeledirge,
  PokemonVariety.Skeledirge,
  PokemonSpecies.Skeledirge,
);
new class QuaxlyForm extends Form {}(
  PokemonForm.Quaxly,
  PokemonVariety.Quaxly,
  PokemonSpecies.Quaxly,
);
new class QuaxwellForm extends Form {}(
  PokemonForm.Quaxwell,
  PokemonVariety.Quaxwell,
  PokemonSpecies.Quaxwell,
);
new class QuaquavalForm extends Form {}(
  PokemonForm.Quaquaval,
  PokemonVariety.Quaquaval,
  PokemonSpecies.Quaquaval,
);
new class LechonkForm extends Form {}(
  PokemonForm.Lechonk,
  PokemonVariety.Lechonk,
  PokemonSpecies.Lechonk,
);
new class OinkologneForm extends Form {}(
  PokemonForm.Oinkologne,
  PokemonVariety.Oinkologne,
  PokemonSpecies.Oinkologne,
);
new class OinkologneFemaleForm extends Form {}(
  PokemonForm.OinkologneFemale,
  PokemonVariety.OinkologneFemale,
  PokemonSpecies.Oinkologne,
);
new class TarountulaForm extends Form {}(
  PokemonForm.Tarountula,
  PokemonVariety.Tarountula,
  PokemonSpecies.Tarountula,
);
new class SpidopsForm extends Form {}(
  PokemonForm.Spidops,
  PokemonVariety.Spidops,
  PokemonSpecies.Spidops,
);
new class NymbleForm extends Form {}(
  PokemonForm.Nymble,
  PokemonVariety.Nymble,
  PokemonSpecies.Nymble,
);
new class LokixForm extends Form {}(
  PokemonForm.Lokix,
  PokemonVariety.Lokix,
  PokemonSpecies.Lokix,
);
new class PawmiForm extends Form {}(
  PokemonForm.Pawmi,
  PokemonVariety.Pawmi,
  PokemonSpecies.Pawmi,
);
new class PawmoForm extends Form {}(
  PokemonForm.Pawmo,
  PokemonVariety.Pawmo,
  PokemonSpecies.Pawmo,
);
new class PawmotForm extends Form {}(
  PokemonForm.Pawmot,
  PokemonVariety.Pawmot,
  PokemonSpecies.Pawmot,
);
new class TandemausForm extends Form {}(
  PokemonForm.Tandemaus,
  PokemonVariety.Tandemaus,
  PokemonSpecies.Tandemaus,
);
new class MausholdFamilyOfFourForm extends Form {}(
  PokemonForm.MausholdFamilyOfFour,
  PokemonVariety.Maushold,
  PokemonSpecies.Maushold,
);
new class MausholdFamilyOfThreeForm extends Form {}(
  PokemonForm.MausholdFamilyOfThree,
  PokemonVariety.MausholdFamilyOfThree,
  PokemonSpecies.Maushold,
);
new class FidoughForm extends Form {}(
  PokemonForm.Fidough,
  PokemonVariety.Fidough,
  PokemonSpecies.Fidough,
);
new class DachsbunForm extends Form {}(
  PokemonForm.Dachsbun,
  PokemonVariety.Dachsbun,
  PokemonSpecies.Dachsbun,
);
new class SmolivForm extends Form {}(
  PokemonForm.Smoliv,
  PokemonVariety.Smoliv,
  PokemonSpecies.Smoliv,
);
new class DollivForm extends Form {}(
  PokemonForm.Dolliv,
  PokemonVariety.Dolliv,
  PokemonSpecies.Dolliv,
);
new class ArbolivaForm extends Form {}(
  PokemonForm.Arboliva,
  PokemonVariety.Arboliva,
  PokemonSpecies.Arboliva,
);
new class SquawkabillyGreenPlumageForm extends Form {}(
  PokemonForm.SquawkabillyGreenPlumage,
  PokemonVariety.Squawkabilly,
  PokemonSpecies.Squawkabilly,
);
new class SquawkabillyBluePlumageForm extends Form {}(
  PokemonForm.SquawkabillyBluePlumage,
  PokemonVariety.SquawkabillyBluePlumage,
  PokemonSpecies.Squawkabilly,
);
new class SquawkabillyYellowPlumageForm extends Form {}(
  PokemonForm.SquawkabillyYellowPlumage,
  PokemonVariety.SquawkabillyYellowPlumage,
  PokemonSpecies.Squawkabilly,
);
new class SquawkabillyWhitePlumageForm extends Form {}(
  PokemonForm.SquawkabillyWhitePlumage,
  PokemonVariety.SquawkabillyWhitePlumage,
  PokemonSpecies.Squawkabilly,
);
new class NacliForm extends Form {}(
  PokemonForm.Nacli,
  PokemonVariety.Nacli,
  PokemonSpecies.Nacli,
);
new class NaclstackForm extends Form {}(
  PokemonForm.Naclstack,
  PokemonVariety.Naclstack,
  PokemonSpecies.Naclstack,
);
new class GarganaclForm extends Form {}(
  PokemonForm.Garganacl,
  PokemonVariety.Garganacl,
  PokemonSpecies.Garganacl,
);
new class CharcadetForm extends Form {}(
  PokemonForm.Charcadet,
  PokemonVariety.Charcadet,
  PokemonSpecies.Charcadet,
);
new class ArmarougeForm extends Form {}(
  PokemonForm.Armarouge,
  PokemonVariety.Armarouge,
  PokemonSpecies.Armarouge,
);
new class CeruledgeForm extends Form {}(
  PokemonForm.Ceruledge,
  PokemonVariety.Ceruledge,
  PokemonSpecies.Ceruledge,
);
new class TadbulbForm extends Form {}(
  PokemonForm.Tadbulb,
  PokemonVariety.Tadbulb,
  PokemonSpecies.Tadbulb,
);
new class BelliboltForm extends Form {}(
  PokemonForm.Bellibolt,
  PokemonVariety.Bellibolt,
  PokemonSpecies.Bellibolt,
);
new class WattrelForm extends Form {}(
  PokemonForm.Wattrel,
  PokemonVariety.Wattrel,
  PokemonSpecies.Wattrel,
);
new class KilowattrelForm extends Form {}(
  PokemonForm.Kilowattrel,
  PokemonVariety.Kilowattrel,
  PokemonSpecies.Kilowattrel,
);
new class MaschiffForm extends Form {}(
  PokemonForm.Maschiff,
  PokemonVariety.Maschiff,
  PokemonSpecies.Maschiff,
);
new class MabosstiffForm extends Form {}(
  PokemonForm.Mabosstiff,
  PokemonVariety.Mabosstiff,
  PokemonSpecies.Mabosstiff,
);
new class ShroodleForm extends Form {}(
  PokemonForm.Shroodle,
  PokemonVariety.Shroodle,
  PokemonSpecies.Shroodle,
);
new class GrafaiaiForm extends Form {}(
  PokemonForm.Grafaiai,
  PokemonVariety.Grafaiai,
  PokemonSpecies.Grafaiai,
);
new class BramblinForm extends Form {}(
  PokemonForm.Bramblin,
  PokemonVariety.Bramblin,
  PokemonSpecies.Bramblin,
);
new class BrambleghastForm extends Form {}(
  PokemonForm.Brambleghast,
  PokemonVariety.Brambleghast,
  PokemonSpecies.Brambleghast,
);
new class ToedscoolForm extends Form {}(
  PokemonForm.Toedscool,
  PokemonVariety.Toedscool,
  PokemonSpecies.Toedscool,
);
new class ToedscruelForm extends Form {}(
  PokemonForm.Toedscruel,
  PokemonVariety.Toedscruel,
  PokemonSpecies.Toedscruel,
);
new class KlawfForm extends Form {}(
  PokemonForm.Klawf,
  PokemonVariety.Klawf,
  PokemonSpecies.Klawf,
);
new class CapsakidForm extends Form {}(
  PokemonForm.Capsakid,
  PokemonVariety.Capsakid,
  PokemonSpecies.Capsakid,
);
new class ScovillainForm extends Form {}(
  PokemonForm.Scovillain,
  PokemonVariety.Scovillain,
  PokemonSpecies.Scovillain,
);
new class RellorForm extends Form {}(
  PokemonForm.Rellor,
  PokemonVariety.Rellor,
  PokemonSpecies.Rellor,
);
new class RabscaForm extends Form {}(
  PokemonForm.Rabsca,
  PokemonVariety.Rabsca,
  PokemonSpecies.Rabsca,
);
new class FlittleForm extends Form {}(
  PokemonForm.Flittle,
  PokemonVariety.Flittle,
  PokemonSpecies.Flittle,
);
new class EspathraForm extends Form {}(
  PokemonForm.Espathra,
  PokemonVariety.Espathra,
  PokemonSpecies.Espathra,
);
new class TinkatinkForm extends Form {}(
  PokemonForm.Tinkatink,
  PokemonVariety.Tinkatink,
  PokemonSpecies.Tinkatink,
);
new class TinkatuffForm extends Form {}(
  PokemonForm.Tinkatuff,
  PokemonVariety.Tinkatuff,
  PokemonSpecies.Tinkatuff,
);
new class TinkatonForm extends Form {}(
  PokemonForm.Tinkaton,
  PokemonVariety.Tinkaton,
  PokemonSpecies.Tinkaton,
);
new class WiglettForm extends Form {}(
  PokemonForm.Wiglett,
  PokemonVariety.Wiglett,
  PokemonSpecies.Wiglett,
);
new class WugtrioForm extends Form {}(
  PokemonForm.Wugtrio,
  PokemonVariety.Wugtrio,
  PokemonSpecies.Wugtrio,
);
new class BombirdierForm extends Form {}(
  PokemonForm.Bombirdier,
  PokemonVariety.Bombirdier,
  PokemonSpecies.Bombirdier,
);
new class FinizenForm extends Form {}(
  PokemonForm.Finizen,
  PokemonVariety.Finizen,
  PokemonSpecies.Finizen,
);
new class PalafinZeroForm extends Form {}(
  PokemonForm.PalafinZero,
  PokemonVariety.Palafin,
  PokemonSpecies.Palafin,
);
new class PalafinHeroForm extends Form {}(
  PokemonForm.PalafinHero,
  PokemonVariety.PalafinHero,
  PokemonSpecies.Palafin,
);
new class VaroomForm extends Form {}(
  PokemonForm.Varoom,
  PokemonVariety.Varoom,
  PokemonSpecies.Varoom,
);
new class RevavroomForm extends Form {}(
  PokemonForm.Revavroom,
  PokemonVariety.Revavroom,
  PokemonSpecies.Revavroom,
);
new class CyclizarForm extends Form {}(
  PokemonForm.Cyclizar,
  PokemonVariety.Cyclizar,
  PokemonSpecies.Cyclizar,
);
new class OrthwormForm extends Form {}(
  PokemonForm.Orthworm,
  PokemonVariety.Orthworm,
  PokemonSpecies.Orthworm,
);
new class GlimmetForm extends Form {}(
  PokemonForm.Glimmet,
  PokemonVariety.Glimmet,
  PokemonSpecies.Glimmet,
);
new class GlimmoraForm extends Form {}(
  PokemonForm.Glimmora,
  PokemonVariety.Glimmora,
  PokemonSpecies.Glimmora,
);
new class GreavardForm extends Form {}(
  PokemonForm.Greavard,
  PokemonVariety.Greavard,
  PokemonSpecies.Greavard,
);
new class HoundstoneForm extends Form {}(
  PokemonForm.Houndstone,
  PokemonVariety.Houndstone,
  PokemonSpecies.Houndstone,
);
new class FlamigoForm extends Form {}(
  PokemonForm.Flamigo,
  PokemonVariety.Flamigo,
  PokemonSpecies.Flamigo,
);
new class CetoddleForm extends Form {}(
  PokemonForm.Cetoddle,
  PokemonVariety.Cetoddle,
  PokemonSpecies.Cetoddle,
);
new class CetitanForm extends Form {}(
  PokemonForm.Cetitan,
  PokemonVariety.Cetitan,
  PokemonSpecies.Cetitan,
);
new class VeluzaForm extends Form {}(
  PokemonForm.Veluza,
  PokemonVariety.Veluza,
  PokemonSpecies.Veluza,
);
new class DondozoForm extends Form {}(
  PokemonForm.Dondozo,
  PokemonVariety.Dondozo,
  PokemonSpecies.Dondozo,
);
new class TatsugiriCurlyForm extends Form {}(
  PokemonForm.TatsugiriCurly,
  PokemonVariety.Tatsugiri,
  PokemonSpecies.Tatsugiri,
);
new class TatsugiriDroopyForm extends Form {}(
  PokemonForm.TatsugiriDroopy,
  PokemonVariety.TatsugiriDroopy,
  PokemonSpecies.Tatsugiri,
);
new class TatsugiriStretchyForm extends Form {}(
  PokemonForm.TatsugiriStretchy,
  PokemonVariety.TatsugiriStretchy,
  PokemonSpecies.Tatsugiri,
);
new class AnnihilapeForm extends Form {}(
  PokemonForm.Annihilape,
  PokemonVariety.Annihilape,
  PokemonSpecies.Annihilape,
);
new class ClodsireForm extends Form {}(
  PokemonForm.Clodsire,
  PokemonVariety.Clodsire,
  PokemonSpecies.Clodsire,
);
new class FarigirafForm extends Form {}(
  PokemonForm.Farigiraf,
  PokemonVariety.Farigiraf,
  PokemonSpecies.Farigiraf,
);
new class DudunsparceTwoSegmentForm extends Form {}(
  PokemonForm.DudunsparceTwoSegment,
  PokemonVariety.Dudunsparce,
  PokemonSpecies.Dudunsparce,
);
new class DudunsparceThreeSegmentForm extends Form {}(
  PokemonForm.DudunsparceThreeSegment,
  PokemonVariety.DudunsparceThreeSegment,
  PokemonSpecies.Dudunsparce,
);
new class KingambitForm extends Form {}(
  PokemonForm.Kingambit,
  PokemonVariety.Kingambit,
  PokemonSpecies.Kingambit,
);
new class GreatTuskForm extends Form {}(
  PokemonForm.GreatTusk,
  PokemonVariety.GreatTusk,
  PokemonSpecies.GreatTusk,
);
new class ScreamTailForm extends Form {}(
  PokemonForm.ScreamTail,
  PokemonVariety.ScreamTail,
  PokemonSpecies.ScreamTail,
);
new class BruteBonnetForm extends Form {}(
  PokemonForm.BruteBonnet,
  PokemonVariety.BruteBonnet,
  PokemonSpecies.BruteBonnet,
);
new class FlutterManeForm extends Form {}(
  PokemonForm.FlutterMane,
  PokemonVariety.FlutterMane,
  PokemonSpecies.FlutterMane,
);
new class SlitherWingForm extends Form {}(
  PokemonForm.SlitherWing,
  PokemonVariety.SlitherWing,
  PokemonSpecies.SlitherWing,
);
new class SandyShocksForm extends Form {}(
  PokemonForm.SandyShocks,
  PokemonVariety.SandyShocks,
  PokemonSpecies.SandyShocks,
);
new class IronTreadsForm extends Form {}(
  PokemonForm.IronTreads,
  PokemonVariety.IronTreads,
  PokemonSpecies.IronTreads,
);
new class IronBundleForm extends Form {}(
  PokemonForm.IronBundle,
  PokemonVariety.IronBundle,
  PokemonSpecies.IronBundle,
);
new class IronHandsForm extends Form {}(
  PokemonForm.IronHands,
  PokemonVariety.IronHands,
  PokemonSpecies.IronHands,
);
new class IronJugulisForm extends Form {}(
  PokemonForm.IronJugulis,
  PokemonVariety.IronJugulis,
  PokemonSpecies.IronJugulis,
);
new class IronMothForm extends Form {}(
  PokemonForm.IronMoth,
  PokemonVariety.IronMoth,
  PokemonSpecies.IronMoth,
);
new class IronThornsForm extends Form {}(
  PokemonForm.IronThorns,
  PokemonVariety.IronThorns,
  PokemonSpecies.IronThorns,
);
new class FrigibaxForm extends Form {}(
  PokemonForm.Frigibax,
  PokemonVariety.Frigibax,
  PokemonSpecies.Frigibax,
);
new class ArctibaxForm extends Form {}(
  PokemonForm.Arctibax,
  PokemonVariety.Arctibax,
  PokemonSpecies.Arctibax,
);
new class BaxcaliburForm extends Form {}(
  PokemonForm.Baxcalibur,
  PokemonVariety.Baxcalibur,
  PokemonSpecies.Baxcalibur,
);
new class GimmighoulChestForm extends Form {}(
  PokemonForm.GimmighoulChest,
  PokemonVariety.Gimmighoul,
  PokemonSpecies.Gimmighoul,
);
new class GimmighoulRoamingForm extends Form {}(
  PokemonForm.GimmighoulRoaming,
  PokemonVariety.GimmighoulRoaming,
  PokemonSpecies.Gimmighoul,
);
new class GholdengoForm extends Form {}(
  PokemonForm.Gholdengo,
  PokemonVariety.Gholdengo,
  PokemonSpecies.Gholdengo,
);
new class WoChienForm extends Form {}(
  PokemonForm.WoChien,
  PokemonVariety.WoChien,
  PokemonSpecies.WoChien,
);
new class ChienPaoForm extends Form {}(
  PokemonForm.ChienPao,
  PokemonVariety.ChienPao,
  PokemonSpecies.ChienPao,
);
new class TingLuForm extends Form {}(
  PokemonForm.TingLu,
  PokemonVariety.TingLu,
  PokemonSpecies.TingLu,
);
new class ChiYuForm extends Form {}(
  PokemonForm.ChiYu,
  PokemonVariety.ChiYu,
  PokemonSpecies.ChiYu,
);
new class RoaringMoonForm extends Form {}(
  PokemonForm.RoaringMoon,
  PokemonVariety.RoaringMoon,
  PokemonSpecies.RoaringMoon,
);
new class IronValiantForm extends Form {}(
  PokemonForm.IronValiant,
  PokemonVariety.IronValiant,
  PokemonSpecies.IronValiant,
);
new class KoraidonApexBuildForm extends Form {}(
  PokemonForm.KoraidonApexBuild,
  PokemonVariety.Koraidon,
  PokemonSpecies.Koraidon,
);
new class KoraidonLimitedBuildForm extends Form {}(
  PokemonForm.KoraidonLimitedBuild,
  PokemonVariety.KoraidonLimitedBuild,
  PokemonSpecies.Koraidon,
);
new class KoraidonSprintingBuildForm extends Form {}(
  PokemonForm.KoraidonSprintingBuild,
  PokemonVariety.KoraidonSprintingBuild,
  PokemonSpecies.Koraidon,
);
new class KoraidonSwimmingBuildForm extends Form {}(
  PokemonForm.KoraidonSwimmingBuild,
  PokemonVariety.KoraidonSwimmingBuild,
  PokemonSpecies.Koraidon,
);
new class KoraidonGlidingBuildForm extends Form {}(
  PokemonForm.KoraidonGlidingBuild,
  PokemonVariety.KoraidonGlidingBuild,
  PokemonSpecies.Koraidon,
);
new class MiraidonUltimateModeForm extends Form {}(
  PokemonForm.MiraidonUltimateMode,
  PokemonVariety.Miraidon,
  PokemonSpecies.Miraidon,
);
new class MiraidonLowPowerModeForm extends Form {}(
  PokemonForm.MiraidonLowPowerMode,
  PokemonVariety.MiraidonLowPowerMode,
  PokemonSpecies.Miraidon,
);
new class MiraidonDriveModeForm extends Form {}(
  PokemonForm.MiraidonDriveMode,
  PokemonVariety.MiraidonDriveMode,
  PokemonSpecies.Miraidon,
);
new class MiraidonAquaticModeForm extends Form {}(
  PokemonForm.MiraidonAquaticMode,
  PokemonVariety.MiraidonAquaticMode,
  PokemonSpecies.Miraidon,
);
new class MiraidonGlideModeForm extends Form {}(
  PokemonForm.MiraidonGlideMode,
  PokemonVariety.MiraidonGlideMode,
  PokemonSpecies.Miraidon,
);
new class WalkingWakeForm extends Form {}(
  PokemonForm.WalkingWake,
  PokemonVariety.WalkingWake,
  PokemonSpecies.WalkingWake,
);
new class IronLeavesForm extends Form {}(
  PokemonForm.IronLeaves,
  PokemonVariety.IronLeaves,
  PokemonSpecies.IronLeaves,
);
new class DipplinForm extends Form {}(
  PokemonForm.Dipplin,
  PokemonVariety.Dipplin,
  PokemonSpecies.Dipplin,
);
new class PoltchageistCounterfeitForm extends Form {}(
  PokemonForm.PoltchageistCounterfeit,
  PokemonVariety.Poltchageist,
  PokemonSpecies.Poltchageist,
);
new class PoltchageistArtisanForm extends Form {}(
  PokemonForm.PoltchageistArtisan,
  PokemonVariety.Poltchageist,
  PokemonSpecies.Poltchageist,
);
new class SinistchaUnremarkableForm extends Form {}(
  PokemonForm.SinistchaUnremarkable,
  PokemonVariety.Sinistcha,
  PokemonSpecies.Sinistcha,
);
new class SinistchaMasterpieceForm extends Form {}(
  PokemonForm.SinistchaMasterpiece,
  PokemonVariety.Sinistcha,
  PokemonSpecies.Sinistcha,
);
new class OkidogiForm extends Form {}(
  PokemonForm.Okidogi,
  PokemonVariety.Okidogi,
  PokemonSpecies.Okidogi,
);
new class MunkidoriForm extends Form {}(
  PokemonForm.Munkidori,
  PokemonVariety.Munkidori,
  PokemonSpecies.Munkidori,
);
new class FezandipitiForm extends Form {}(
  PokemonForm.Fezandipiti,
  PokemonVariety.Fezandipiti,
  PokemonSpecies.Fezandipiti,
);
new class OgerponForm extends Form {}(
  PokemonForm.Ogerpon,
  PokemonVariety.Ogerpon,
  PokemonSpecies.Ogerpon,
);
new class OgerponWellspringMaskForm extends Form {}(
  PokemonForm.OgerponWellspringMask,
  PokemonVariety.OgerponWellspringMask,
  PokemonSpecies.Ogerpon,
);
new class OgerponHearthflameMaskForm extends Form {}(
  PokemonForm.OgerponHearthflameMask,
  PokemonVariety.OgerponHearthflameMask,
  PokemonSpecies.Ogerpon,
);
new class OgerponCornerstoneMaskForm extends Form {}(
  PokemonForm.OgerponCornerstoneMask,
  PokemonVariety.OgerponCornerstoneMask,
  PokemonSpecies.Ogerpon,
);
new class ArchaludonForm extends Form {}(
  PokemonForm.Archaludon,
  PokemonVariety.Archaludon,
  PokemonSpecies.Archaludon,
);
new class HydrappleForm extends Form {}(
  PokemonForm.Hydrapple,
  PokemonVariety.Hydrapple,
  PokemonSpecies.Hydrapple,
);
new class GougingFireForm extends Form {}(
  PokemonForm.GougingFire,
  PokemonVariety.GougingFire,
  PokemonSpecies.GougingFire,
);
new class RagingBoltForm extends Form {}(
  PokemonForm.RagingBolt,
  PokemonVariety.RagingBolt,
  PokemonSpecies.RagingBolt,
);
new class IronBoulderForm extends Form {}(
  PokemonForm.IronBoulder,
  PokemonVariety.IronBoulder,
  PokemonSpecies.IronBoulder,
);
new class IronCrownForm extends Form {}(
  PokemonForm.IronCrown,
  PokemonVariety.IronCrown,
  PokemonSpecies.IronCrown,
);
new class TerapagosForm extends Form {}(
  PokemonForm.Terapagos,
  PokemonVariety.Terapagos,
  PokemonSpecies.Terapagos,
);
new class TerapagosTerastalForm extends Form {}(
  PokemonForm.TerapagosTerastal,
  PokemonVariety.TerapagosTerastal,
  PokemonSpecies.Terapagos,
);
new class TerapagosStellarForm extends Form {}(
  PokemonForm.TerapagosStellar,
  PokemonVariety.TerapagosStellar,
  PokemonSpecies.Terapagos,
);
new class PecharuntForm extends Form {}(
  PokemonForm.Pecharunt,
  PokemonVariety.Pecharunt,
  PokemonSpecies.Pecharunt,
);