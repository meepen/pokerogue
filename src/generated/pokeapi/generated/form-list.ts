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
    name: string | null,
  ) {
    super(form, variety, species, name);
    formsList.set(form, this);
  }
}

new class BulbasaurForm extends Form {}(
  PokemonForm.Bulbasaur,
  PokemonVariety.Bulbasaur,
  PokemonSpecies.Bulbasaur,
  null,
);
new class IvysaurForm extends Form {}(
  PokemonForm.Ivysaur,
  PokemonVariety.Ivysaur,
  PokemonSpecies.Ivysaur,
  null,
);
new class VenusaurForm extends Form {}(
  PokemonForm.Venusaur,
  PokemonVariety.Venusaur,
  PokemonSpecies.Venusaur,
  null,
);
new class VenusaurMegaForm extends Form {}(
  PokemonForm.VenusaurMega,
  PokemonVariety.VenusaurMega,
  PokemonSpecies.Venusaur,
  "Mega Venusaur",
);
new class VenusaurGmaxForm extends Form {}(
  PokemonForm.VenusaurGmax,
  PokemonVariety.VenusaurGmax,
  PokemonSpecies.Venusaur,
  "Gigantamax Form",
);
new class CharmanderForm extends Form {}(
  PokemonForm.Charmander,
  PokemonVariety.Charmander,
  PokemonSpecies.Charmander,
  null,
);
new class CharmeleonForm extends Form {}(
  PokemonForm.Charmeleon,
  PokemonVariety.Charmeleon,
  PokemonSpecies.Charmeleon,
  null,
);
new class CharizardForm extends Form {}(
  PokemonForm.Charizard,
  PokemonVariety.Charizard,
  PokemonSpecies.Charizard,
  null,
);
new class CharizardMegaXForm extends Form {}(
  PokemonForm.CharizardMegaX,
  PokemonVariety.CharizardMegaX,
  PokemonSpecies.Charizard,
  "Mega Charizard X",
);
new class CharizardMegaYForm extends Form {}(
  PokemonForm.CharizardMegaY,
  PokemonVariety.CharizardMegaY,
  PokemonSpecies.Charizard,
  "Mega Charizard Y",
);
new class CharizardGmaxForm extends Form {}(
  PokemonForm.CharizardGmax,
  PokemonVariety.CharizardGmax,
  PokemonSpecies.Charizard,
  "Gigantamax Form",
);
new class SquirtleForm extends Form {}(
  PokemonForm.Squirtle,
  PokemonVariety.Squirtle,
  PokemonSpecies.Squirtle,
  null,
);
new class WartortleForm extends Form {}(
  PokemonForm.Wartortle,
  PokemonVariety.Wartortle,
  PokemonSpecies.Wartortle,
  null,
);
new class BlastoiseForm extends Form {}(
  PokemonForm.Blastoise,
  PokemonVariety.Blastoise,
  PokemonSpecies.Blastoise,
  null,
);
new class BlastoiseMegaForm extends Form {}(
  PokemonForm.BlastoiseMega,
  PokemonVariety.BlastoiseMega,
  PokemonSpecies.Blastoise,
  "Mega Blastoise",
);
new class BlastoiseGmaxForm extends Form {}(
  PokemonForm.BlastoiseGmax,
  PokemonVariety.BlastoiseGmax,
  PokemonSpecies.Blastoise,
  "Gigantamax Form",
);
new class CaterpieForm extends Form {}(
  PokemonForm.Caterpie,
  PokemonVariety.Caterpie,
  PokemonSpecies.Caterpie,
  null,
);
new class MetapodForm extends Form {}(
  PokemonForm.Metapod,
  PokemonVariety.Metapod,
  PokemonSpecies.Metapod,
  null,
);
new class ButterfreeForm extends Form {}(
  PokemonForm.Butterfree,
  PokemonVariety.Butterfree,
  PokemonSpecies.Butterfree,
  null,
);
new class ButterfreeGmaxForm extends Form {}(
  PokemonForm.ButterfreeGmax,
  PokemonVariety.ButterfreeGmax,
  PokemonSpecies.Butterfree,
  "Gigantamax Form",
);
new class WeedleForm extends Form {}(
  PokemonForm.Weedle,
  PokemonVariety.Weedle,
  PokemonSpecies.Weedle,
  null,
);
new class KakunaForm extends Form {}(
  PokemonForm.Kakuna,
  PokemonVariety.Kakuna,
  PokemonSpecies.Kakuna,
  null,
);
new class BeedrillForm extends Form {}(
  PokemonForm.Beedrill,
  PokemonVariety.Beedrill,
  PokemonSpecies.Beedrill,
  null,
);
new class BeedrillMegaForm extends Form {}(
  PokemonForm.BeedrillMega,
  PokemonVariety.BeedrillMega,
  PokemonSpecies.Beedrill,
  "Mega Beedrill",
);
new class PidgeyForm extends Form {}(
  PokemonForm.Pidgey,
  PokemonVariety.Pidgey,
  PokemonSpecies.Pidgey,
  null,
);
new class PidgeottoForm extends Form {}(
  PokemonForm.Pidgeotto,
  PokemonVariety.Pidgeotto,
  PokemonSpecies.Pidgeotto,
  null,
);
new class PidgeotForm extends Form {}(
  PokemonForm.Pidgeot,
  PokemonVariety.Pidgeot,
  PokemonSpecies.Pidgeot,
  null,
);
new class PidgeotMegaForm extends Form {}(
  PokemonForm.PidgeotMega,
  PokemonVariety.PidgeotMega,
  PokemonSpecies.Pidgeot,
  "Mega Pidgeot",
);
new class RattataForm extends Form {}(
  PokemonForm.Rattata,
  PokemonVariety.Rattata,
  PokemonSpecies.Rattata,
  null,
);
new class RattataAlolaForm extends Form {}(
  PokemonForm.RattataAlola,
  PokemonVariety.RattataAlola,
  PokemonSpecies.Rattata,
  "Alolan Form",
);
new class RaticateForm extends Form {}(
  PokemonForm.Raticate,
  PokemonVariety.Raticate,
  PokemonSpecies.Raticate,
  null,
);
new class RaticateAlolaForm extends Form {}(
  PokemonForm.RaticateAlola,
  PokemonVariety.RaticateAlola,
  PokemonSpecies.Raticate,
  "Alolan Form",
);
new class RaticateTotemAlolaForm extends Form {}(
  PokemonForm.RaticateTotemAlola,
  PokemonVariety.RaticateTotemAlola,
  PokemonSpecies.Raticate,
  null,
);
new class SpearowForm extends Form {}(
  PokemonForm.Spearow,
  PokemonVariety.Spearow,
  PokemonSpecies.Spearow,
  null,
);
new class FearowForm extends Form {}(
  PokemonForm.Fearow,
  PokemonVariety.Fearow,
  PokemonSpecies.Fearow,
  null,
);
new class EkansForm extends Form {}(
  PokemonForm.Ekans,
  PokemonVariety.Ekans,
  PokemonSpecies.Ekans,
  null,
);
new class ArbokForm extends Form {}(
  PokemonForm.Arbok,
  PokemonVariety.Arbok,
  PokemonSpecies.Arbok,
  null,
);
new class PikachuForm extends Form {}(
  PokemonForm.Pikachu,
  PokemonVariety.Pikachu,
  PokemonSpecies.Pikachu,
  null,
);
new class PikachuRockStarForm extends Form {}(
  PokemonForm.PikachuRockStar,
  PokemonVariety.PikachuRockStar,
  PokemonSpecies.Pikachu,
  "Pikachu Rock Star",
);
new class PikachuBelleForm extends Form {}(
  PokemonForm.PikachuBelle,
  PokemonVariety.PikachuBelle,
  PokemonSpecies.Pikachu,
  "Pikachu Belle",
);
new class PikachuPopStarForm extends Form {}(
  PokemonForm.PikachuPopStar,
  PokemonVariety.PikachuPopStar,
  PokemonSpecies.Pikachu,
  "Pikachu Pop Star",
);
new class PikachuPhdForm extends Form {}(
  PokemonForm.PikachuPhd,
  PokemonVariety.PikachuPhd,
  PokemonSpecies.Pikachu,
  "Pikachu Ph.D.",
);
new class PikachuLibreForm extends Form {}(
  PokemonForm.PikachuLibre,
  PokemonVariety.PikachuLibre,
  PokemonSpecies.Pikachu,
  "Pikachu Libre",
);
new class PikachuCosplayForm extends Form {}(
  PokemonForm.PikachuCosplay,
  PokemonVariety.PikachuCosplay,
  PokemonSpecies.Pikachu,
  "Cosplay Pikachu",
);
new class PikachuOriginalCapForm extends Form {}(
  PokemonForm.PikachuOriginalCap,
  PokemonVariety.PikachuOriginalCap,
  PokemonSpecies.Pikachu,
  "Original Cap",
);
new class PikachuHoennCapForm extends Form {}(
  PokemonForm.PikachuHoennCap,
  PokemonVariety.PikachuHoennCap,
  PokemonSpecies.Pikachu,
  "Hoenn Cap",
);
new class PikachuSinnohCapForm extends Form {}(
  PokemonForm.PikachuSinnohCap,
  PokemonVariety.PikachuSinnohCap,
  PokemonSpecies.Pikachu,
  "Sinnoh Cap",
);
new class PikachuUnovaCapForm extends Form {}(
  PokemonForm.PikachuUnovaCap,
  PokemonVariety.PikachuUnovaCap,
  PokemonSpecies.Pikachu,
  "Unova Cap",
);
new class PikachuKalosCapForm extends Form {}(
  PokemonForm.PikachuKalosCap,
  PokemonVariety.PikachuKalosCap,
  PokemonSpecies.Pikachu,
  "Kalos Cap",
);
new class PikachuAlolaCapForm extends Form {}(
  PokemonForm.PikachuAlolaCap,
  PokemonVariety.PikachuAlolaCap,
  PokemonSpecies.Pikachu,
  "Alola Cap",
);
new class PikachuPartnerCapForm extends Form {}(
  PokemonForm.PikachuPartnerCap,
  PokemonVariety.PikachuPartnerCap,
  PokemonSpecies.Pikachu,
  "Partner Cap",
);
new class PikachuStarterForm extends Form {}(
  PokemonForm.PikachuStarter,
  PokemonVariety.PikachuStarter,
  PokemonSpecies.Pikachu,
  null,
);
new class PikachuWorldCapForm extends Form {}(
  PokemonForm.PikachuWorldCap,
  PokemonVariety.PikachuWorldCap,
  PokemonSpecies.Pikachu,
  "World Cap",
);
new class PikachuGmaxForm extends Form {}(
  PokemonForm.PikachuGmax,
  PokemonVariety.PikachuGmax,
  PokemonSpecies.Pikachu,
  "Gigantamax Form",
);
new class RaichuForm extends Form {}(
  PokemonForm.Raichu,
  PokemonVariety.Raichu,
  PokemonSpecies.Raichu,
  null,
);
new class RaichuAlolaForm extends Form {}(
  PokemonForm.RaichuAlola,
  PokemonVariety.RaichuAlola,
  PokemonSpecies.Raichu,
  "Alolan Form",
);
new class SandshrewForm extends Form {}(
  PokemonForm.Sandshrew,
  PokemonVariety.Sandshrew,
  PokemonSpecies.Sandshrew,
  null,
);
new class SandshrewAlolaForm extends Form {}(
  PokemonForm.SandshrewAlola,
  PokemonVariety.SandshrewAlola,
  PokemonSpecies.Sandshrew,
  "Alolan Form",
);
new class SandslashForm extends Form {}(
  PokemonForm.Sandslash,
  PokemonVariety.Sandslash,
  PokemonSpecies.Sandslash,
  null,
);
new class SandslashAlolaForm extends Form {}(
  PokemonForm.SandslashAlola,
  PokemonVariety.SandslashAlola,
  PokemonSpecies.Sandslash,
  "Alolan Form",
);
new class NidoranFForm extends Form {}(
  PokemonForm.NidoranF,
  PokemonVariety.NidoranF,
  PokemonSpecies.NidoranF,
  null,
);
new class NidorinaForm extends Form {}(
  PokemonForm.Nidorina,
  PokemonVariety.Nidorina,
  PokemonSpecies.Nidorina,
  null,
);
new class NidoqueenForm extends Form {}(
  PokemonForm.Nidoqueen,
  PokemonVariety.Nidoqueen,
  PokemonSpecies.Nidoqueen,
  null,
);
new class NidoranMForm extends Form {}(
  PokemonForm.NidoranM,
  PokemonVariety.NidoranM,
  PokemonSpecies.NidoranM,
  null,
);
new class NidorinoForm extends Form {}(
  PokemonForm.Nidorino,
  PokemonVariety.Nidorino,
  PokemonSpecies.Nidorino,
  null,
);
new class NidokingForm extends Form {}(
  PokemonForm.Nidoking,
  PokemonVariety.Nidoking,
  PokemonSpecies.Nidoking,
  null,
);
new class ClefairyForm extends Form {}(
  PokemonForm.Clefairy,
  PokemonVariety.Clefairy,
  PokemonSpecies.Clefairy,
  null,
);
new class ClefableForm extends Form {}(
  PokemonForm.Clefable,
  PokemonVariety.Clefable,
  PokemonSpecies.Clefable,
  null,
);
new class VulpixForm extends Form {}(
  PokemonForm.Vulpix,
  PokemonVariety.Vulpix,
  PokemonSpecies.Vulpix,
  null,
);
new class VulpixAlolaForm extends Form {}(
  PokemonForm.VulpixAlola,
  PokemonVariety.VulpixAlola,
  PokemonSpecies.Vulpix,
  "Alolan Form",
);
new class NinetalesForm extends Form {}(
  PokemonForm.Ninetales,
  PokemonVariety.Ninetales,
  PokemonSpecies.Ninetales,
  null,
);
new class NinetalesAlolaForm extends Form {}(
  PokemonForm.NinetalesAlola,
  PokemonVariety.NinetalesAlola,
  PokemonSpecies.Ninetales,
  "Alolan Form",
);
new class JigglypuffForm extends Form {}(
  PokemonForm.Jigglypuff,
  PokemonVariety.Jigglypuff,
  PokemonSpecies.Jigglypuff,
  null,
);
new class WigglytuffForm extends Form {}(
  PokemonForm.Wigglytuff,
  PokemonVariety.Wigglytuff,
  PokemonSpecies.Wigglytuff,
  null,
);
new class ZubatForm extends Form {}(
  PokemonForm.Zubat,
  PokemonVariety.Zubat,
  PokemonSpecies.Zubat,
  null,
);
new class GolbatForm extends Form {}(
  PokemonForm.Golbat,
  PokemonVariety.Golbat,
  PokemonSpecies.Golbat,
  null,
);
new class OddishForm extends Form {}(
  PokemonForm.Oddish,
  PokemonVariety.Oddish,
  PokemonSpecies.Oddish,
  null,
);
new class GloomForm extends Form {}(
  PokemonForm.Gloom,
  PokemonVariety.Gloom,
  PokemonSpecies.Gloom,
  null,
);
new class VileplumeForm extends Form {}(
  PokemonForm.Vileplume,
  PokemonVariety.Vileplume,
  PokemonSpecies.Vileplume,
  null,
);
new class ParasForm extends Form {}(
  PokemonForm.Paras,
  PokemonVariety.Paras,
  PokemonSpecies.Paras,
  null,
);
new class ParasectForm extends Form {}(
  PokemonForm.Parasect,
  PokemonVariety.Parasect,
  PokemonSpecies.Parasect,
  null,
);
new class VenonatForm extends Form {}(
  PokemonForm.Venonat,
  PokemonVariety.Venonat,
  PokemonSpecies.Venonat,
  null,
);
new class VenomothForm extends Form {}(
  PokemonForm.Venomoth,
  PokemonVariety.Venomoth,
  PokemonSpecies.Venomoth,
  null,
);
new class DiglettForm extends Form {}(
  PokemonForm.Diglett,
  PokemonVariety.Diglett,
  PokemonSpecies.Diglett,
  null,
);
new class DiglettAlolaForm extends Form {}(
  PokemonForm.DiglettAlola,
  PokemonVariety.DiglettAlola,
  PokemonSpecies.Diglett,
  "Alolan Form",
);
new class DugtrioForm extends Form {}(
  PokemonForm.Dugtrio,
  PokemonVariety.Dugtrio,
  PokemonSpecies.Dugtrio,
  null,
);
new class DugtrioAlolaForm extends Form {}(
  PokemonForm.DugtrioAlola,
  PokemonVariety.DugtrioAlola,
  PokemonSpecies.Dugtrio,
  "Alolan Form",
);
new class MeowthForm extends Form {}(
  PokemonForm.Meowth,
  PokemonVariety.Meowth,
  PokemonSpecies.Meowth,
  null,
);
new class MeowthAlolaForm extends Form {}(
  PokemonForm.MeowthAlola,
  PokemonVariety.MeowthAlola,
  PokemonSpecies.Meowth,
  "Alolan Form",
);
new class MeowthGalarForm extends Form {}(
  PokemonForm.MeowthGalar,
  PokemonVariety.MeowthGalar,
  PokemonSpecies.Meowth,
  "Galarian Form",
);
new class MeowthGmaxForm extends Form {}(
  PokemonForm.MeowthGmax,
  PokemonVariety.MeowthGmax,
  PokemonSpecies.Meowth,
  "Gigantamax Form",
);
new class PersianForm extends Form {}(
  PokemonForm.Persian,
  PokemonVariety.Persian,
  PokemonSpecies.Persian,
  null,
);
new class PersianAlolaForm extends Form {}(
  PokemonForm.PersianAlola,
  PokemonVariety.PersianAlola,
  PokemonSpecies.Persian,
  "Alolan Form",
);
new class PsyduckForm extends Form {}(
  PokemonForm.Psyduck,
  PokemonVariety.Psyduck,
  PokemonSpecies.Psyduck,
  null,
);
new class GolduckForm extends Form {}(
  PokemonForm.Golduck,
  PokemonVariety.Golduck,
  PokemonSpecies.Golduck,
  null,
);
new class MankeyForm extends Form {}(
  PokemonForm.Mankey,
  PokemonVariety.Mankey,
  PokemonSpecies.Mankey,
  null,
);
new class PrimeapeForm extends Form {}(
  PokemonForm.Primeape,
  PokemonVariety.Primeape,
  PokemonSpecies.Primeape,
  null,
);
new class GrowlitheForm extends Form {}(
  PokemonForm.Growlithe,
  PokemonVariety.Growlithe,
  PokemonSpecies.Growlithe,
  null,
);
new class GrowlitheHisuiForm extends Form {}(
  PokemonForm.GrowlitheHisui,
  PokemonVariety.GrowlitheHisui,
  PokemonSpecies.Growlithe,
  "Hisuian Form",
);
new class ArcanineForm extends Form {}(
  PokemonForm.Arcanine,
  PokemonVariety.Arcanine,
  PokemonSpecies.Arcanine,
  null,
);
new class ArcanineHisuiForm extends Form {}(
  PokemonForm.ArcanineHisui,
  PokemonVariety.ArcanineHisui,
  PokemonSpecies.Arcanine,
  "Hisuian Form",
);
new class PoliwagForm extends Form {}(
  PokemonForm.Poliwag,
  PokemonVariety.Poliwag,
  PokemonSpecies.Poliwag,
  null,
);
new class PoliwhirlForm extends Form {}(
  PokemonForm.Poliwhirl,
  PokemonVariety.Poliwhirl,
  PokemonSpecies.Poliwhirl,
  null,
);
new class PoliwrathForm extends Form {}(
  PokemonForm.Poliwrath,
  PokemonVariety.Poliwrath,
  PokemonSpecies.Poliwrath,
  null,
);
new class AbraForm extends Form {}(
  PokemonForm.Abra,
  PokemonVariety.Abra,
  PokemonSpecies.Abra,
  null,
);
new class KadabraForm extends Form {}(
  PokemonForm.Kadabra,
  PokemonVariety.Kadabra,
  PokemonSpecies.Kadabra,
  null,
);
new class AlakazamForm extends Form {}(
  PokemonForm.Alakazam,
  PokemonVariety.Alakazam,
  PokemonSpecies.Alakazam,
  null,
);
new class AlakazamMegaForm extends Form {}(
  PokemonForm.AlakazamMega,
  PokemonVariety.AlakazamMega,
  PokemonSpecies.Alakazam,
  "Mega Alakazam",
);
new class MachopForm extends Form {}(
  PokemonForm.Machop,
  PokemonVariety.Machop,
  PokemonSpecies.Machop,
  null,
);
new class MachokeForm extends Form {}(
  PokemonForm.Machoke,
  PokemonVariety.Machoke,
  PokemonSpecies.Machoke,
  null,
);
new class MachampForm extends Form {}(
  PokemonForm.Machamp,
  PokemonVariety.Machamp,
  PokemonSpecies.Machamp,
  null,
);
new class MachampGmaxForm extends Form {}(
  PokemonForm.MachampGmax,
  PokemonVariety.MachampGmax,
  PokemonSpecies.Machamp,
  "Gigantamax Form",
);
new class BellsproutForm extends Form {}(
  PokemonForm.Bellsprout,
  PokemonVariety.Bellsprout,
  PokemonSpecies.Bellsprout,
  null,
);
new class WeepinbellForm extends Form {}(
  PokemonForm.Weepinbell,
  PokemonVariety.Weepinbell,
  PokemonSpecies.Weepinbell,
  null,
);
new class VictreebelForm extends Form {}(
  PokemonForm.Victreebel,
  PokemonVariety.Victreebel,
  PokemonSpecies.Victreebel,
  null,
);
new class TentacoolForm extends Form {}(
  PokemonForm.Tentacool,
  PokemonVariety.Tentacool,
  PokemonSpecies.Tentacool,
  null,
);
new class TentacruelForm extends Form {}(
  PokemonForm.Tentacruel,
  PokemonVariety.Tentacruel,
  PokemonSpecies.Tentacruel,
  null,
);
new class GeodudeForm extends Form {}(
  PokemonForm.Geodude,
  PokemonVariety.Geodude,
  PokemonSpecies.Geodude,
  null,
);
new class GeodudeAlolaForm extends Form {}(
  PokemonForm.GeodudeAlola,
  PokemonVariety.GeodudeAlola,
  PokemonSpecies.Geodude,
  "Alolan Form",
);
new class GravelerForm extends Form {}(
  PokemonForm.Graveler,
  PokemonVariety.Graveler,
  PokemonSpecies.Graveler,
  null,
);
new class GravelerAlolaForm extends Form {}(
  PokemonForm.GravelerAlola,
  PokemonVariety.GravelerAlola,
  PokemonSpecies.Graveler,
  "Alolan Form",
);
new class GolemForm extends Form {}(
  PokemonForm.Golem,
  PokemonVariety.Golem,
  PokemonSpecies.Golem,
  null,
);
new class GolemAlolaForm extends Form {}(
  PokemonForm.GolemAlola,
  PokemonVariety.GolemAlola,
  PokemonSpecies.Golem,
  "Alolan Form",
);
new class PonytaForm extends Form {}(
  PokemonForm.Ponyta,
  PokemonVariety.Ponyta,
  PokemonSpecies.Ponyta,
  null,
);
new class PonytaGalarForm extends Form {}(
  PokemonForm.PonytaGalar,
  PokemonVariety.PonytaGalar,
  PokemonSpecies.Ponyta,
  "Galarian Form",
);
new class RapidashForm extends Form {}(
  PokemonForm.Rapidash,
  PokemonVariety.Rapidash,
  PokemonSpecies.Rapidash,
  null,
);
new class RapidashGalarForm extends Form {}(
  PokemonForm.RapidashGalar,
  PokemonVariety.RapidashGalar,
  PokemonSpecies.Rapidash,
  "Galarian Form",
);
new class SlowpokeForm extends Form {}(
  PokemonForm.Slowpoke,
  PokemonVariety.Slowpoke,
  PokemonSpecies.Slowpoke,
  null,
);
new class SlowpokeGalarForm extends Form {}(
  PokemonForm.SlowpokeGalar,
  PokemonVariety.SlowpokeGalar,
  PokemonSpecies.Slowpoke,
  "Galarian Form",
);
new class SlowbroForm extends Form {}(
  PokemonForm.Slowbro,
  PokemonVariety.Slowbro,
  PokemonSpecies.Slowbro,
  null,
);
new class SlowbroMegaForm extends Form {}(
  PokemonForm.SlowbroMega,
  PokemonVariety.SlowbroMega,
  PokemonSpecies.Slowbro,
  "Mega Slowbro",
);
new class SlowbroGalarForm extends Form {}(
  PokemonForm.SlowbroGalar,
  PokemonVariety.SlowbroGalar,
  PokemonSpecies.Slowbro,
  "Galarian Form",
);
new class MagnemiteForm extends Form {}(
  PokemonForm.Magnemite,
  PokemonVariety.Magnemite,
  PokemonSpecies.Magnemite,
  null,
);
new class MagnetonForm extends Form {}(
  PokemonForm.Magneton,
  PokemonVariety.Magneton,
  PokemonSpecies.Magneton,
  null,
);
new class FarfetchdForm extends Form {}(
  PokemonForm.Farfetchd,
  PokemonVariety.Farfetchd,
  PokemonSpecies.Farfetchd,
  null,
);
new class FarfetchdGalarForm extends Form {}(
  PokemonForm.FarfetchdGalar,
  PokemonVariety.FarfetchdGalar,
  PokemonSpecies.Farfetchd,
  "Galarian Form",
);
new class DoduoForm extends Form {}(
  PokemonForm.Doduo,
  PokemonVariety.Doduo,
  PokemonSpecies.Doduo,
  null,
);
new class DodrioForm extends Form {}(
  PokemonForm.Dodrio,
  PokemonVariety.Dodrio,
  PokemonSpecies.Dodrio,
  null,
);
new class SeelForm extends Form {}(
  PokemonForm.Seel,
  PokemonVariety.Seel,
  PokemonSpecies.Seel,
  null,
);
new class DewgongForm extends Form {}(
  PokemonForm.Dewgong,
  PokemonVariety.Dewgong,
  PokemonSpecies.Dewgong,
  null,
);
new class GrimerForm extends Form {}(
  PokemonForm.Grimer,
  PokemonVariety.Grimer,
  PokemonSpecies.Grimer,
  null,
);
new class GrimerAlolaForm extends Form {}(
  PokemonForm.GrimerAlola,
  PokemonVariety.GrimerAlola,
  PokemonSpecies.Grimer,
  "Alolan Form",
);
new class MukForm extends Form {}(
  PokemonForm.Muk,
  PokemonVariety.Muk,
  PokemonSpecies.Muk,
  null,
);
new class MukAlolaForm extends Form {}(
  PokemonForm.MukAlola,
  PokemonVariety.MukAlola,
  PokemonSpecies.Muk,
  "Alolan Form",
);
new class ShellderForm extends Form {}(
  PokemonForm.Shellder,
  PokemonVariety.Shellder,
  PokemonSpecies.Shellder,
  null,
);
new class CloysterForm extends Form {}(
  PokemonForm.Cloyster,
  PokemonVariety.Cloyster,
  PokemonSpecies.Cloyster,
  null,
);
new class GastlyForm extends Form {}(
  PokemonForm.Gastly,
  PokemonVariety.Gastly,
  PokemonSpecies.Gastly,
  null,
);
new class HaunterForm extends Form {}(
  PokemonForm.Haunter,
  PokemonVariety.Haunter,
  PokemonSpecies.Haunter,
  null,
);
new class GengarForm extends Form {}(
  PokemonForm.Gengar,
  PokemonVariety.Gengar,
  PokemonSpecies.Gengar,
  null,
);
new class GengarMegaForm extends Form {}(
  PokemonForm.GengarMega,
  PokemonVariety.GengarMega,
  PokemonSpecies.Gengar,
  "Mega Gengar",
);
new class GengarGmaxForm extends Form {}(
  PokemonForm.GengarGmax,
  PokemonVariety.GengarGmax,
  PokemonSpecies.Gengar,
  "Gigantamax Form",
);
new class OnixForm extends Form {}(
  PokemonForm.Onix,
  PokemonVariety.Onix,
  PokemonSpecies.Onix,
  null,
);
new class DrowzeeForm extends Form {}(
  PokemonForm.Drowzee,
  PokemonVariety.Drowzee,
  PokemonSpecies.Drowzee,
  null,
);
new class HypnoForm extends Form {}(
  PokemonForm.Hypno,
  PokemonVariety.Hypno,
  PokemonSpecies.Hypno,
  null,
);
new class KrabbyForm extends Form {}(
  PokemonForm.Krabby,
  PokemonVariety.Krabby,
  PokemonSpecies.Krabby,
  null,
);
new class KinglerForm extends Form {}(
  PokemonForm.Kingler,
  PokemonVariety.Kingler,
  PokemonSpecies.Kingler,
  null,
);
new class KinglerGmaxForm extends Form {}(
  PokemonForm.KinglerGmax,
  PokemonVariety.KinglerGmax,
  PokemonSpecies.Kingler,
  "Gigantamax Form",
);
new class VoltorbForm extends Form {}(
  PokemonForm.Voltorb,
  PokemonVariety.Voltorb,
  PokemonSpecies.Voltorb,
  null,
);
new class VoltorbHisuiForm extends Form {}(
  PokemonForm.VoltorbHisui,
  PokemonVariety.VoltorbHisui,
  PokemonSpecies.Voltorb,
  "Hisuian Form",
);
new class ElectrodeForm extends Form {}(
  PokemonForm.Electrode,
  PokemonVariety.Electrode,
  PokemonSpecies.Electrode,
  null,
);
new class ElectrodeHisuiForm extends Form {}(
  PokemonForm.ElectrodeHisui,
  PokemonVariety.ElectrodeHisui,
  PokemonSpecies.Electrode,
  "Hisuian Form",
);
new class ExeggcuteForm extends Form {}(
  PokemonForm.Exeggcute,
  PokemonVariety.Exeggcute,
  PokemonSpecies.Exeggcute,
  null,
);
new class ExeggutorForm extends Form {}(
  PokemonForm.Exeggutor,
  PokemonVariety.Exeggutor,
  PokemonSpecies.Exeggutor,
  null,
);
new class ExeggutorAlolaForm extends Form {}(
  PokemonForm.ExeggutorAlola,
  PokemonVariety.ExeggutorAlola,
  PokemonSpecies.Exeggutor,
  "Alolan Form",
);
new class CuboneForm extends Form {}(
  PokemonForm.Cubone,
  PokemonVariety.Cubone,
  PokemonSpecies.Cubone,
  null,
);
new class MarowakForm extends Form {}(
  PokemonForm.Marowak,
  PokemonVariety.Marowak,
  PokemonSpecies.Marowak,
  null,
);
new class MarowakAlolaForm extends Form {}(
  PokemonForm.MarowakAlola,
  PokemonVariety.MarowakAlola,
  PokemonSpecies.Marowak,
  "Alolan Form",
);
new class MarowakTotemForm extends Form {}(
  PokemonForm.MarowakTotem,
  PokemonVariety.MarowakTotem,
  PokemonSpecies.Marowak,
  null,
);
new class HitmonleeForm extends Form {}(
  PokemonForm.Hitmonlee,
  PokemonVariety.Hitmonlee,
  PokemonSpecies.Hitmonlee,
  null,
);
new class HitmonchanForm extends Form {}(
  PokemonForm.Hitmonchan,
  PokemonVariety.Hitmonchan,
  PokemonSpecies.Hitmonchan,
  null,
);
new class LickitungForm extends Form {}(
  PokemonForm.Lickitung,
  PokemonVariety.Lickitung,
  PokemonSpecies.Lickitung,
  null,
);
new class KoffingForm extends Form {}(
  PokemonForm.Koffing,
  PokemonVariety.Koffing,
  PokemonSpecies.Koffing,
  null,
);
new class WeezingForm extends Form {}(
  PokemonForm.Weezing,
  PokemonVariety.Weezing,
  PokemonSpecies.Weezing,
  null,
);
new class WeezingGalarForm extends Form {}(
  PokemonForm.WeezingGalar,
  PokemonVariety.WeezingGalar,
  PokemonSpecies.Weezing,
  "Galarian Form",
);
new class RhyhornForm extends Form {}(
  PokemonForm.Rhyhorn,
  PokemonVariety.Rhyhorn,
  PokemonSpecies.Rhyhorn,
  null,
);
new class RhydonForm extends Form {}(
  PokemonForm.Rhydon,
  PokemonVariety.Rhydon,
  PokemonSpecies.Rhydon,
  null,
);
new class ChanseyForm extends Form {}(
  PokemonForm.Chansey,
  PokemonVariety.Chansey,
  PokemonSpecies.Chansey,
  null,
);
new class TangelaForm extends Form {}(
  PokemonForm.Tangela,
  PokemonVariety.Tangela,
  PokemonSpecies.Tangela,
  null,
);
new class KangaskhanForm extends Form {}(
  PokemonForm.Kangaskhan,
  PokemonVariety.Kangaskhan,
  PokemonSpecies.Kangaskhan,
  null,
);
new class KangaskhanMegaForm extends Form {}(
  PokemonForm.KangaskhanMega,
  PokemonVariety.KangaskhanMega,
  PokemonSpecies.Kangaskhan,
  "Mega Kangaskhan",
);
new class HorseaForm extends Form {}(
  PokemonForm.Horsea,
  PokemonVariety.Horsea,
  PokemonSpecies.Horsea,
  null,
);
new class SeadraForm extends Form {}(
  PokemonForm.Seadra,
  PokemonVariety.Seadra,
  PokemonSpecies.Seadra,
  null,
);
new class GoldeenForm extends Form {}(
  PokemonForm.Goldeen,
  PokemonVariety.Goldeen,
  PokemonSpecies.Goldeen,
  null,
);
new class SeakingForm extends Form {}(
  PokemonForm.Seaking,
  PokemonVariety.Seaking,
  PokemonSpecies.Seaking,
  null,
);
new class StaryuForm extends Form {}(
  PokemonForm.Staryu,
  PokemonVariety.Staryu,
  PokemonSpecies.Staryu,
  null,
);
new class StarmieForm extends Form {}(
  PokemonForm.Starmie,
  PokemonVariety.Starmie,
  PokemonSpecies.Starmie,
  null,
);
new class MrMimeForm extends Form {}(
  PokemonForm.MrMime,
  PokemonVariety.MrMime,
  PokemonSpecies.MrMime,
  null,
);
new class MrMimeGalarForm extends Form {}(
  PokemonForm.MrMimeGalar,
  PokemonVariety.MrMimeGalar,
  PokemonSpecies.MrMime,
  "Galarian Form",
);
new class ScytherForm extends Form {}(
  PokemonForm.Scyther,
  PokemonVariety.Scyther,
  PokemonSpecies.Scyther,
  null,
);
new class JynxForm extends Form {}(
  PokemonForm.Jynx,
  PokemonVariety.Jynx,
  PokemonSpecies.Jynx,
  null,
);
new class ElectabuzzForm extends Form {}(
  PokemonForm.Electabuzz,
  PokemonVariety.Electabuzz,
  PokemonSpecies.Electabuzz,
  null,
);
new class MagmarForm extends Form {}(
  PokemonForm.Magmar,
  PokemonVariety.Magmar,
  PokemonSpecies.Magmar,
  null,
);
new class PinsirForm extends Form {}(
  PokemonForm.Pinsir,
  PokemonVariety.Pinsir,
  PokemonSpecies.Pinsir,
  null,
);
new class PinsirMegaForm extends Form {}(
  PokemonForm.PinsirMega,
  PokemonVariety.PinsirMega,
  PokemonSpecies.Pinsir,
  "Mega Pinsir",
);
new class TaurosForm extends Form {}(
  PokemonForm.Tauros,
  PokemonVariety.Tauros,
  PokemonSpecies.Tauros,
  null,
);
new class TaurosPaldeaCombatBreedForm extends Form {}(
  PokemonForm.TaurosPaldeaCombatBreed,
  PokemonVariety.TaurosPaldeaCombatBreed,
  PokemonSpecies.Tauros,
  "Paldean Form",
);
new class TaurosPaldeaBlazeBreedForm extends Form {}(
  PokemonForm.TaurosPaldeaBlazeBreed,
  PokemonVariety.TaurosPaldeaBlazeBreed,
  PokemonSpecies.Tauros,
  "Paldean Form",
);
new class TaurosPaldeaAquaBreedForm extends Form {}(
  PokemonForm.TaurosPaldeaAquaBreed,
  PokemonVariety.TaurosPaldeaAquaBreed,
  PokemonSpecies.Tauros,
  "Paldean Form",
);
new class MagikarpForm extends Form {}(
  PokemonForm.Magikarp,
  PokemonVariety.Magikarp,
  PokemonSpecies.Magikarp,
  null,
);
new class GyaradosForm extends Form {}(
  PokemonForm.Gyarados,
  PokemonVariety.Gyarados,
  PokemonSpecies.Gyarados,
  null,
);
new class GyaradosMegaForm extends Form {}(
  PokemonForm.GyaradosMega,
  PokemonVariety.GyaradosMega,
  PokemonSpecies.Gyarados,
  "Mega Gyarados",
);
new class LaprasForm extends Form {}(
  PokemonForm.Lapras,
  PokemonVariety.Lapras,
  PokemonSpecies.Lapras,
  null,
);
new class LaprasGmaxForm extends Form {}(
  PokemonForm.LaprasGmax,
  PokemonVariety.LaprasGmax,
  PokemonSpecies.Lapras,
  "Gigantamax Form",
);
new class DittoForm extends Form {}(
  PokemonForm.Ditto,
  PokemonVariety.Ditto,
  PokemonSpecies.Ditto,
  null,
);
new class EeveeForm extends Form {}(
  PokemonForm.Eevee,
  PokemonVariety.Eevee,
  PokemonSpecies.Eevee,
  null,
);
new class EeveeStarterForm extends Form {}(
  PokemonForm.EeveeStarter,
  PokemonVariety.EeveeStarter,
  PokemonSpecies.Eevee,
  null,
);
new class EeveeGmaxForm extends Form {}(
  PokemonForm.EeveeGmax,
  PokemonVariety.EeveeGmax,
  PokemonSpecies.Eevee,
  "Gigantamax Form",
);
new class VaporeonForm extends Form {}(
  PokemonForm.Vaporeon,
  PokemonVariety.Vaporeon,
  PokemonSpecies.Vaporeon,
  null,
);
new class JolteonForm extends Form {}(
  PokemonForm.Jolteon,
  PokemonVariety.Jolteon,
  PokemonSpecies.Jolteon,
  null,
);
new class FlareonForm extends Form {}(
  PokemonForm.Flareon,
  PokemonVariety.Flareon,
  PokemonSpecies.Flareon,
  null,
);
new class PorygonForm extends Form {}(
  PokemonForm.Porygon,
  PokemonVariety.Porygon,
  PokemonSpecies.Porygon,
  null,
);
new class OmanyteForm extends Form {}(
  PokemonForm.Omanyte,
  PokemonVariety.Omanyte,
  PokemonSpecies.Omanyte,
  null,
);
new class OmastarForm extends Form {}(
  PokemonForm.Omastar,
  PokemonVariety.Omastar,
  PokemonSpecies.Omastar,
  null,
);
new class KabutoForm extends Form {}(
  PokemonForm.Kabuto,
  PokemonVariety.Kabuto,
  PokemonSpecies.Kabuto,
  null,
);
new class KabutopsForm extends Form {}(
  PokemonForm.Kabutops,
  PokemonVariety.Kabutops,
  PokemonSpecies.Kabutops,
  null,
);
new class AerodactylForm extends Form {}(
  PokemonForm.Aerodactyl,
  PokemonVariety.Aerodactyl,
  PokemonSpecies.Aerodactyl,
  null,
);
new class AerodactylMegaForm extends Form {}(
  PokemonForm.AerodactylMega,
  PokemonVariety.AerodactylMega,
  PokemonSpecies.Aerodactyl,
  "Mega Aerodactyl",
);
new class SnorlaxForm extends Form {}(
  PokemonForm.Snorlax,
  PokemonVariety.Snorlax,
  PokemonSpecies.Snorlax,
  null,
);
new class SnorlaxGmaxForm extends Form {}(
  PokemonForm.SnorlaxGmax,
  PokemonVariety.SnorlaxGmax,
  PokemonSpecies.Snorlax,
  "Gigantamax Form",
);
new class ArticunoForm extends Form {}(
  PokemonForm.Articuno,
  PokemonVariety.Articuno,
  PokemonSpecies.Articuno,
  null,
);
new class ArticunoGalarForm extends Form {}(
  PokemonForm.ArticunoGalar,
  PokemonVariety.ArticunoGalar,
  PokemonSpecies.Articuno,
  "Galarian Form",
);
new class ZapdosForm extends Form {}(
  PokemonForm.Zapdos,
  PokemonVariety.Zapdos,
  PokemonSpecies.Zapdos,
  null,
);
new class ZapdosGalarForm extends Form {}(
  PokemonForm.ZapdosGalar,
  PokemonVariety.ZapdosGalar,
  PokemonSpecies.Zapdos,
  "Galarian Form",
);
new class MoltresForm extends Form {}(
  PokemonForm.Moltres,
  PokemonVariety.Moltres,
  PokemonSpecies.Moltres,
  null,
);
new class MoltresGalarForm extends Form {}(
  PokemonForm.MoltresGalar,
  PokemonVariety.MoltresGalar,
  PokemonSpecies.Moltres,
  "Galarian Form",
);
new class DratiniForm extends Form {}(
  PokemonForm.Dratini,
  PokemonVariety.Dratini,
  PokemonSpecies.Dratini,
  null,
);
new class DragonairForm extends Form {}(
  PokemonForm.Dragonair,
  PokemonVariety.Dragonair,
  PokemonSpecies.Dragonair,
  null,
);
new class DragoniteForm extends Form {}(
  PokemonForm.Dragonite,
  PokemonVariety.Dragonite,
  PokemonSpecies.Dragonite,
  null,
);
new class MewtwoForm extends Form {}(
  PokemonForm.Mewtwo,
  PokemonVariety.Mewtwo,
  PokemonSpecies.Mewtwo,
  null,
);
new class MewtwoMegaXForm extends Form {}(
  PokemonForm.MewtwoMegaX,
  PokemonVariety.MewtwoMegaX,
  PokemonSpecies.Mewtwo,
  "Mega Mewtwo X",
);
new class MewtwoMegaYForm extends Form {}(
  PokemonForm.MewtwoMegaY,
  PokemonVariety.MewtwoMegaY,
  PokemonSpecies.Mewtwo,
  "Mega Mewtwo Y",
);
new class MewForm extends Form {}(
  PokemonForm.Mew,
  PokemonVariety.Mew,
  PokemonSpecies.Mew,
  null,
);
new class ChikoritaForm extends Form {}(
  PokemonForm.Chikorita,
  PokemonVariety.Chikorita,
  PokemonSpecies.Chikorita,
  null,
);
new class BayleefForm extends Form {}(
  PokemonForm.Bayleef,
  PokemonVariety.Bayleef,
  PokemonSpecies.Bayleef,
  null,
);
new class MeganiumForm extends Form {}(
  PokemonForm.Meganium,
  PokemonVariety.Meganium,
  PokemonSpecies.Meganium,
  null,
);
new class CyndaquilForm extends Form {}(
  PokemonForm.Cyndaquil,
  PokemonVariety.Cyndaquil,
  PokemonSpecies.Cyndaquil,
  null,
);
new class QuilavaForm extends Form {}(
  PokemonForm.Quilava,
  PokemonVariety.Quilava,
  PokemonSpecies.Quilava,
  null,
);
new class TyphlosionForm extends Form {}(
  PokemonForm.Typhlosion,
  PokemonVariety.Typhlosion,
  PokemonSpecies.Typhlosion,
  null,
);
new class TyphlosionHisuiForm extends Form {}(
  PokemonForm.TyphlosionHisui,
  PokemonVariety.TyphlosionHisui,
  PokemonSpecies.Typhlosion,
  "Hisuian Form",
);
new class TotodileForm extends Form {}(
  PokemonForm.Totodile,
  PokemonVariety.Totodile,
  PokemonSpecies.Totodile,
  null,
);
new class CroconawForm extends Form {}(
  PokemonForm.Croconaw,
  PokemonVariety.Croconaw,
  PokemonSpecies.Croconaw,
  null,
);
new class FeraligatrForm extends Form {}(
  PokemonForm.Feraligatr,
  PokemonVariety.Feraligatr,
  PokemonSpecies.Feraligatr,
  null,
);
new class SentretForm extends Form {}(
  PokemonForm.Sentret,
  PokemonVariety.Sentret,
  PokemonSpecies.Sentret,
  null,
);
new class FurretForm extends Form {}(
  PokemonForm.Furret,
  PokemonVariety.Furret,
  PokemonSpecies.Furret,
  null,
);
new class HoothootForm extends Form {}(
  PokemonForm.Hoothoot,
  PokemonVariety.Hoothoot,
  PokemonSpecies.Hoothoot,
  null,
);
new class NoctowlForm extends Form {}(
  PokemonForm.Noctowl,
  PokemonVariety.Noctowl,
  PokemonSpecies.Noctowl,
  null,
);
new class LedybaForm extends Form {}(
  PokemonForm.Ledyba,
  PokemonVariety.Ledyba,
  PokemonSpecies.Ledyba,
  null,
);
new class LedianForm extends Form {}(
  PokemonForm.Ledian,
  PokemonVariety.Ledian,
  PokemonSpecies.Ledian,
  null,
);
new class SpinarakForm extends Form {}(
  PokemonForm.Spinarak,
  PokemonVariety.Spinarak,
  PokemonSpecies.Spinarak,
  null,
);
new class AriadosForm extends Form {}(
  PokemonForm.Ariados,
  PokemonVariety.Ariados,
  PokemonSpecies.Ariados,
  null,
);
new class CrobatForm extends Form {}(
  PokemonForm.Crobat,
  PokemonVariety.Crobat,
  PokemonSpecies.Crobat,
  null,
);
new class ChinchouForm extends Form {}(
  PokemonForm.Chinchou,
  PokemonVariety.Chinchou,
  PokemonSpecies.Chinchou,
  null,
);
new class LanturnForm extends Form {}(
  PokemonForm.Lanturn,
  PokemonVariety.Lanturn,
  PokemonSpecies.Lanturn,
  null,
);
new class PichuForm extends Form {}(
  PokemonForm.Pichu,
  PokemonVariety.Pichu,
  PokemonSpecies.Pichu,
  null,
);
new class PichuSpikyEaredForm extends Form {}(
  PokemonForm.PichuSpikyEared,
  PokemonVariety.Pichu,
  PokemonSpecies.Pichu,
  "Spiky-eared",
);
new class CleffaForm extends Form {}(
  PokemonForm.Cleffa,
  PokemonVariety.Cleffa,
  PokemonSpecies.Cleffa,
  null,
);
new class IgglybuffForm extends Form {}(
  PokemonForm.Igglybuff,
  PokemonVariety.Igglybuff,
  PokemonSpecies.Igglybuff,
  null,
);
new class TogepiForm extends Form {}(
  PokemonForm.Togepi,
  PokemonVariety.Togepi,
  PokemonSpecies.Togepi,
  null,
);
new class TogeticForm extends Form {}(
  PokemonForm.Togetic,
  PokemonVariety.Togetic,
  PokemonSpecies.Togetic,
  null,
);
new class NatuForm extends Form {}(
  PokemonForm.Natu,
  PokemonVariety.Natu,
  PokemonSpecies.Natu,
  null,
);
new class XatuForm extends Form {}(
  PokemonForm.Xatu,
  PokemonVariety.Xatu,
  PokemonSpecies.Xatu,
  null,
);
new class MareepForm extends Form {}(
  PokemonForm.Mareep,
  PokemonVariety.Mareep,
  PokemonSpecies.Mareep,
  null,
);
new class FlaaffyForm extends Form {}(
  PokemonForm.Flaaffy,
  PokemonVariety.Flaaffy,
  PokemonSpecies.Flaaffy,
  null,
);
new class AmpharosForm extends Form {}(
  PokemonForm.Ampharos,
  PokemonVariety.Ampharos,
  PokemonSpecies.Ampharos,
  null,
);
new class AmpharosMegaForm extends Form {}(
  PokemonForm.AmpharosMega,
  PokemonVariety.AmpharosMega,
  PokemonSpecies.Ampharos,
  "Mega Ampharos",
);
new class BellossomForm extends Form {}(
  PokemonForm.Bellossom,
  PokemonVariety.Bellossom,
  PokemonSpecies.Bellossom,
  null,
);
new class MarillForm extends Form {}(
  PokemonForm.Marill,
  PokemonVariety.Marill,
  PokemonSpecies.Marill,
  null,
);
new class AzumarillForm extends Form {}(
  PokemonForm.Azumarill,
  PokemonVariety.Azumarill,
  PokemonSpecies.Azumarill,
  null,
);
new class SudowoodoForm extends Form {}(
  PokemonForm.Sudowoodo,
  PokemonVariety.Sudowoodo,
  PokemonSpecies.Sudowoodo,
  null,
);
new class PolitoedForm extends Form {}(
  PokemonForm.Politoed,
  PokemonVariety.Politoed,
  PokemonSpecies.Politoed,
  null,
);
new class HoppipForm extends Form {}(
  PokemonForm.Hoppip,
  PokemonVariety.Hoppip,
  PokemonSpecies.Hoppip,
  null,
);
new class SkiploomForm extends Form {}(
  PokemonForm.Skiploom,
  PokemonVariety.Skiploom,
  PokemonSpecies.Skiploom,
  null,
);
new class JumpluffForm extends Form {}(
  PokemonForm.Jumpluff,
  PokemonVariety.Jumpluff,
  PokemonSpecies.Jumpluff,
  null,
);
new class AipomForm extends Form {}(
  PokemonForm.Aipom,
  PokemonVariety.Aipom,
  PokemonSpecies.Aipom,
  null,
);
new class SunkernForm extends Form {}(
  PokemonForm.Sunkern,
  PokemonVariety.Sunkern,
  PokemonSpecies.Sunkern,
  null,
);
new class SunfloraForm extends Form {}(
  PokemonForm.Sunflora,
  PokemonVariety.Sunflora,
  PokemonSpecies.Sunflora,
  null,
);
new class YanmaForm extends Form {}(
  PokemonForm.Yanma,
  PokemonVariety.Yanma,
  PokemonSpecies.Yanma,
  null,
);
new class WooperForm extends Form {}(
  PokemonForm.Wooper,
  PokemonVariety.Wooper,
  PokemonSpecies.Wooper,
  null,
);
new class WooperPaldeaForm extends Form {}(
  PokemonForm.WooperPaldea,
  PokemonVariety.WooperPaldea,
  PokemonSpecies.Wooper,
  "Paldean Form",
);
new class QuagsireForm extends Form {}(
  PokemonForm.Quagsire,
  PokemonVariety.Quagsire,
  PokemonSpecies.Quagsire,
  null,
);
new class EspeonForm extends Form {}(
  PokemonForm.Espeon,
  PokemonVariety.Espeon,
  PokemonSpecies.Espeon,
  null,
);
new class UmbreonForm extends Form {}(
  PokemonForm.Umbreon,
  PokemonVariety.Umbreon,
  PokemonSpecies.Umbreon,
  null,
);
new class MurkrowForm extends Form {}(
  PokemonForm.Murkrow,
  PokemonVariety.Murkrow,
  PokemonSpecies.Murkrow,
  null,
);
new class SlowkingForm extends Form {}(
  PokemonForm.Slowking,
  PokemonVariety.Slowking,
  PokemonSpecies.Slowking,
  null,
);
new class SlowkingGalarForm extends Form {}(
  PokemonForm.SlowkingGalar,
  PokemonVariety.SlowkingGalar,
  PokemonSpecies.Slowking,
  "Galarian Form",
);
new class MisdreavusForm extends Form {}(
  PokemonForm.Misdreavus,
  PokemonVariety.Misdreavus,
  PokemonSpecies.Misdreavus,
  null,
);
new class UnownAForm extends Form {}(
  PokemonForm.UnownA,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "A",
);
new class UnownBForm extends Form {}(
  PokemonForm.UnownB,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "B",
);
new class UnownCForm extends Form {}(
  PokemonForm.UnownC,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "C",
);
new class UnownDForm extends Form {}(
  PokemonForm.UnownD,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "D",
);
new class UnownEForm extends Form {}(
  PokemonForm.UnownE,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "E",
);
new class UnownFForm extends Form {}(
  PokemonForm.UnownF,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "F",
);
new class UnownGForm extends Form {}(
  PokemonForm.UnownG,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "G",
);
new class UnownHForm extends Form {}(
  PokemonForm.UnownH,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "H",
);
new class UnownIForm extends Form {}(
  PokemonForm.UnownI,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "I",
);
new class UnownJForm extends Form {}(
  PokemonForm.UnownJ,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "J",
);
new class UnownKForm extends Form {}(
  PokemonForm.UnownK,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "K",
);
new class UnownLForm extends Form {}(
  PokemonForm.UnownL,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "L",
);
new class UnownMForm extends Form {}(
  PokemonForm.UnownM,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "M",
);
new class UnownNForm extends Form {}(
  PokemonForm.UnownN,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "N",
);
new class UnownOForm extends Form {}(
  PokemonForm.UnownO,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "O",
);
new class UnownPForm extends Form {}(
  PokemonForm.UnownP,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "P",
);
new class UnownQForm extends Form {}(
  PokemonForm.UnownQ,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Q",
);
new class UnownRForm extends Form {}(
  PokemonForm.UnownR,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "R",
);
new class UnownSForm extends Form {}(
  PokemonForm.UnownS,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "S",
);
new class UnownTForm extends Form {}(
  PokemonForm.UnownT,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "T",
);
new class UnownUForm extends Form {}(
  PokemonForm.UnownU,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "U",
);
new class UnownVForm extends Form {}(
  PokemonForm.UnownV,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "V",
);
new class UnownWForm extends Form {}(
  PokemonForm.UnownW,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "W",
);
new class UnownXForm extends Form {}(
  PokemonForm.UnownX,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "X",
);
new class UnownYForm extends Form {}(
  PokemonForm.UnownY,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Y",
);
new class UnownZForm extends Form {}(
  PokemonForm.UnownZ,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Z",
);
new class UnownExclamationForm extends Form {}(
  PokemonForm.UnownExclamation,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "!",
);
new class UnownQuestionForm extends Form {}(
  PokemonForm.UnownQuestion,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "?",
);
new class WobbuffetForm extends Form {}(
  PokemonForm.Wobbuffet,
  PokemonVariety.Wobbuffet,
  PokemonSpecies.Wobbuffet,
  null,
);
new class GirafarigForm extends Form {}(
  PokemonForm.Girafarig,
  PokemonVariety.Girafarig,
  PokemonSpecies.Girafarig,
  null,
);
new class PinecoForm extends Form {}(
  PokemonForm.Pineco,
  PokemonVariety.Pineco,
  PokemonSpecies.Pineco,
  null,
);
new class ForretressForm extends Form {}(
  PokemonForm.Forretress,
  PokemonVariety.Forretress,
  PokemonSpecies.Forretress,
  null,
);
new class DunsparceForm extends Form {}(
  PokemonForm.Dunsparce,
  PokemonVariety.Dunsparce,
  PokemonSpecies.Dunsparce,
  null,
);
new class GligarForm extends Form {}(
  PokemonForm.Gligar,
  PokemonVariety.Gligar,
  PokemonSpecies.Gligar,
  null,
);
new class SteelixForm extends Form {}(
  PokemonForm.Steelix,
  PokemonVariety.Steelix,
  PokemonSpecies.Steelix,
  null,
);
new class SteelixMegaForm extends Form {}(
  PokemonForm.SteelixMega,
  PokemonVariety.SteelixMega,
  PokemonSpecies.Steelix,
  "Mega Steelix",
);
new class SnubbullForm extends Form {}(
  PokemonForm.Snubbull,
  PokemonVariety.Snubbull,
  PokemonSpecies.Snubbull,
  null,
);
new class GranbullForm extends Form {}(
  PokemonForm.Granbull,
  PokemonVariety.Granbull,
  PokemonSpecies.Granbull,
  null,
);
new class QwilfishForm extends Form {}(
  PokemonForm.Qwilfish,
  PokemonVariety.Qwilfish,
  PokemonSpecies.Qwilfish,
  null,
);
new class QwilfishHisuiForm extends Form {}(
  PokemonForm.QwilfishHisui,
  PokemonVariety.QwilfishHisui,
  PokemonSpecies.Qwilfish,
  "Hisuian Form",
);
new class ScizorForm extends Form {}(
  PokemonForm.Scizor,
  PokemonVariety.Scizor,
  PokemonSpecies.Scizor,
  null,
);
new class ScizorMegaForm extends Form {}(
  PokemonForm.ScizorMega,
  PokemonVariety.ScizorMega,
  PokemonSpecies.Scizor,
  "Mega Scizor",
);
new class ShuckleForm extends Form {}(
  PokemonForm.Shuckle,
  PokemonVariety.Shuckle,
  PokemonSpecies.Shuckle,
  null,
);
new class HeracrossForm extends Form {}(
  PokemonForm.Heracross,
  PokemonVariety.Heracross,
  PokemonSpecies.Heracross,
  null,
);
new class HeracrossMegaForm extends Form {}(
  PokemonForm.HeracrossMega,
  PokemonVariety.HeracrossMega,
  PokemonSpecies.Heracross,
  "Mega Heracross",
);
new class SneaselForm extends Form {}(
  PokemonForm.Sneasel,
  PokemonVariety.Sneasel,
  PokemonSpecies.Sneasel,
  null,
);
new class SneaselHisuiForm extends Form {}(
  PokemonForm.SneaselHisui,
  PokemonVariety.SneaselHisui,
  PokemonSpecies.Sneasel,
  "Hisuian Form",
);
new class TeddiursaForm extends Form {}(
  PokemonForm.Teddiursa,
  PokemonVariety.Teddiursa,
  PokemonSpecies.Teddiursa,
  null,
);
new class UrsaringForm extends Form {}(
  PokemonForm.Ursaring,
  PokemonVariety.Ursaring,
  PokemonSpecies.Ursaring,
  null,
);
new class SlugmaForm extends Form {}(
  PokemonForm.Slugma,
  PokemonVariety.Slugma,
  PokemonSpecies.Slugma,
  null,
);
new class MagcargoForm extends Form {}(
  PokemonForm.Magcargo,
  PokemonVariety.Magcargo,
  PokemonSpecies.Magcargo,
  null,
);
new class SwinubForm extends Form {}(
  PokemonForm.Swinub,
  PokemonVariety.Swinub,
  PokemonSpecies.Swinub,
  null,
);
new class PiloswineForm extends Form {}(
  PokemonForm.Piloswine,
  PokemonVariety.Piloswine,
  PokemonSpecies.Piloswine,
  null,
);
new class CorsolaForm extends Form {}(
  PokemonForm.Corsola,
  PokemonVariety.Corsola,
  PokemonSpecies.Corsola,
  null,
);
new class CorsolaGalarForm extends Form {}(
  PokemonForm.CorsolaGalar,
  PokemonVariety.CorsolaGalar,
  PokemonSpecies.Corsola,
  "Galarian Form",
);
new class RemoraidForm extends Form {}(
  PokemonForm.Remoraid,
  PokemonVariety.Remoraid,
  PokemonSpecies.Remoraid,
  null,
);
new class OctilleryForm extends Form {}(
  PokemonForm.Octillery,
  PokemonVariety.Octillery,
  PokemonSpecies.Octillery,
  null,
);
new class DelibirdForm extends Form {}(
  PokemonForm.Delibird,
  PokemonVariety.Delibird,
  PokemonSpecies.Delibird,
  null,
);
new class MantineForm extends Form {}(
  PokemonForm.Mantine,
  PokemonVariety.Mantine,
  PokemonSpecies.Mantine,
  null,
);
new class SkarmoryForm extends Form {}(
  PokemonForm.Skarmory,
  PokemonVariety.Skarmory,
  PokemonSpecies.Skarmory,
  null,
);
new class HoundourForm extends Form {}(
  PokemonForm.Houndour,
  PokemonVariety.Houndour,
  PokemonSpecies.Houndour,
  null,
);
new class HoundoomForm extends Form {}(
  PokemonForm.Houndoom,
  PokemonVariety.Houndoom,
  PokemonSpecies.Houndoom,
  null,
);
new class HoundoomMegaForm extends Form {}(
  PokemonForm.HoundoomMega,
  PokemonVariety.HoundoomMega,
  PokemonSpecies.Houndoom,
  "Mega Houndoom",
);
new class KingdraForm extends Form {}(
  PokemonForm.Kingdra,
  PokemonVariety.Kingdra,
  PokemonSpecies.Kingdra,
  null,
);
new class PhanpyForm extends Form {}(
  PokemonForm.Phanpy,
  PokemonVariety.Phanpy,
  PokemonSpecies.Phanpy,
  null,
);
new class DonphanForm extends Form {}(
  PokemonForm.Donphan,
  PokemonVariety.Donphan,
  PokemonSpecies.Donphan,
  null,
);
new class Porygon2Form extends Form {}(
  PokemonForm.Porygon2,
  PokemonVariety.Porygon2,
  PokemonSpecies.Porygon2,
  null,
);
new class StantlerForm extends Form {}(
  PokemonForm.Stantler,
  PokemonVariety.Stantler,
  PokemonSpecies.Stantler,
  null,
);
new class SmeargleForm extends Form {}(
  PokemonForm.Smeargle,
  PokemonVariety.Smeargle,
  PokemonSpecies.Smeargle,
  null,
);
new class TyrogueForm extends Form {}(
  PokemonForm.Tyrogue,
  PokemonVariety.Tyrogue,
  PokemonSpecies.Tyrogue,
  null,
);
new class HitmontopForm extends Form {}(
  PokemonForm.Hitmontop,
  PokemonVariety.Hitmontop,
  PokemonSpecies.Hitmontop,
  null,
);
new class SmoochumForm extends Form {}(
  PokemonForm.Smoochum,
  PokemonVariety.Smoochum,
  PokemonSpecies.Smoochum,
  null,
);
new class ElekidForm extends Form {}(
  PokemonForm.Elekid,
  PokemonVariety.Elekid,
  PokemonSpecies.Elekid,
  null,
);
new class MagbyForm extends Form {}(
  PokemonForm.Magby,
  PokemonVariety.Magby,
  PokemonSpecies.Magby,
  null,
);
new class MiltankForm extends Form {}(
  PokemonForm.Miltank,
  PokemonVariety.Miltank,
  PokemonSpecies.Miltank,
  null,
);
new class BlisseyForm extends Form {}(
  PokemonForm.Blissey,
  PokemonVariety.Blissey,
  PokemonSpecies.Blissey,
  null,
);
new class RaikouForm extends Form {}(
  PokemonForm.Raikou,
  PokemonVariety.Raikou,
  PokemonSpecies.Raikou,
  null,
);
new class EnteiForm extends Form {}(
  PokemonForm.Entei,
  PokemonVariety.Entei,
  PokemonSpecies.Entei,
  null,
);
new class SuicuneForm extends Form {}(
  PokemonForm.Suicune,
  PokemonVariety.Suicune,
  PokemonSpecies.Suicune,
  null,
);
new class LarvitarForm extends Form {}(
  PokemonForm.Larvitar,
  PokemonVariety.Larvitar,
  PokemonSpecies.Larvitar,
  null,
);
new class PupitarForm extends Form {}(
  PokemonForm.Pupitar,
  PokemonVariety.Pupitar,
  PokemonSpecies.Pupitar,
  null,
);
new class TyranitarForm extends Form {}(
  PokemonForm.Tyranitar,
  PokemonVariety.Tyranitar,
  PokemonSpecies.Tyranitar,
  null,
);
new class TyranitarMegaForm extends Form {}(
  PokemonForm.TyranitarMega,
  PokemonVariety.TyranitarMega,
  PokemonSpecies.Tyranitar,
  "Mega Tyranitar",
);
new class LugiaForm extends Form {}(
  PokemonForm.Lugia,
  PokemonVariety.Lugia,
  PokemonSpecies.Lugia,
  null,
);
new class HoOhForm extends Form {}(
  PokemonForm.HoOh,
  PokemonVariety.HoOh,
  PokemonSpecies.HoOh,
  null,
);
new class CelebiForm extends Form {}(
  PokemonForm.Celebi,
  PokemonVariety.Celebi,
  PokemonSpecies.Celebi,
  null,
);
new class TreeckoForm extends Form {}(
  PokemonForm.Treecko,
  PokemonVariety.Treecko,
  PokemonSpecies.Treecko,
  null,
);
new class GrovyleForm extends Form {}(
  PokemonForm.Grovyle,
  PokemonVariety.Grovyle,
  PokemonSpecies.Grovyle,
  null,
);
new class SceptileForm extends Form {}(
  PokemonForm.Sceptile,
  PokemonVariety.Sceptile,
  PokemonSpecies.Sceptile,
  null,
);
new class SceptileMegaForm extends Form {}(
  PokemonForm.SceptileMega,
  PokemonVariety.SceptileMega,
  PokemonSpecies.Sceptile,
  "Mega Sceptile",
);
new class TorchicForm extends Form {}(
  PokemonForm.Torchic,
  PokemonVariety.Torchic,
  PokemonSpecies.Torchic,
  null,
);
new class CombuskenForm extends Form {}(
  PokemonForm.Combusken,
  PokemonVariety.Combusken,
  PokemonSpecies.Combusken,
  null,
);
new class BlazikenForm extends Form {}(
  PokemonForm.Blaziken,
  PokemonVariety.Blaziken,
  PokemonSpecies.Blaziken,
  null,
);
new class BlazikenMegaForm extends Form {}(
  PokemonForm.BlazikenMega,
  PokemonVariety.BlazikenMega,
  PokemonSpecies.Blaziken,
  "Mega Blaziken",
);
new class MudkipForm extends Form {}(
  PokemonForm.Mudkip,
  PokemonVariety.Mudkip,
  PokemonSpecies.Mudkip,
  null,
);
new class MarshtompForm extends Form {}(
  PokemonForm.Marshtomp,
  PokemonVariety.Marshtomp,
  PokemonSpecies.Marshtomp,
  null,
);
new class SwampertForm extends Form {}(
  PokemonForm.Swampert,
  PokemonVariety.Swampert,
  PokemonSpecies.Swampert,
  null,
);
new class SwampertMegaForm extends Form {}(
  PokemonForm.SwampertMega,
  PokemonVariety.SwampertMega,
  PokemonSpecies.Swampert,
  "Mega Swampert",
);
new class PoochyenaForm extends Form {}(
  PokemonForm.Poochyena,
  PokemonVariety.Poochyena,
  PokemonSpecies.Poochyena,
  null,
);
new class MightyenaForm extends Form {}(
  PokemonForm.Mightyena,
  PokemonVariety.Mightyena,
  PokemonSpecies.Mightyena,
  null,
);
new class ZigzagoonForm extends Form {}(
  PokemonForm.Zigzagoon,
  PokemonVariety.Zigzagoon,
  PokemonSpecies.Zigzagoon,
  null,
);
new class ZigzagoonGalarForm extends Form {}(
  PokemonForm.ZigzagoonGalar,
  PokemonVariety.ZigzagoonGalar,
  PokemonSpecies.Zigzagoon,
  "Galarian Form",
);
new class LinooneForm extends Form {}(
  PokemonForm.Linoone,
  PokemonVariety.Linoone,
  PokemonSpecies.Linoone,
  null,
);
new class LinooneGalarForm extends Form {}(
  PokemonForm.LinooneGalar,
  PokemonVariety.LinooneGalar,
  PokemonSpecies.Linoone,
  "Galarian Form",
);
new class WurmpleForm extends Form {}(
  PokemonForm.Wurmple,
  PokemonVariety.Wurmple,
  PokemonSpecies.Wurmple,
  null,
);
new class SilcoonForm extends Form {}(
  PokemonForm.Silcoon,
  PokemonVariety.Silcoon,
  PokemonSpecies.Silcoon,
  null,
);
new class BeautiflyForm extends Form {}(
  PokemonForm.Beautifly,
  PokemonVariety.Beautifly,
  PokemonSpecies.Beautifly,
  null,
);
new class CascoonForm extends Form {}(
  PokemonForm.Cascoon,
  PokemonVariety.Cascoon,
  PokemonSpecies.Cascoon,
  null,
);
new class DustoxForm extends Form {}(
  PokemonForm.Dustox,
  PokemonVariety.Dustox,
  PokemonSpecies.Dustox,
  null,
);
new class LotadForm extends Form {}(
  PokemonForm.Lotad,
  PokemonVariety.Lotad,
  PokemonSpecies.Lotad,
  null,
);
new class LombreForm extends Form {}(
  PokemonForm.Lombre,
  PokemonVariety.Lombre,
  PokemonSpecies.Lombre,
  null,
);
new class LudicoloForm extends Form {}(
  PokemonForm.Ludicolo,
  PokemonVariety.Ludicolo,
  PokemonSpecies.Ludicolo,
  null,
);
new class SeedotForm extends Form {}(
  PokemonForm.Seedot,
  PokemonVariety.Seedot,
  PokemonSpecies.Seedot,
  null,
);
new class NuzleafForm extends Form {}(
  PokemonForm.Nuzleaf,
  PokemonVariety.Nuzleaf,
  PokemonSpecies.Nuzleaf,
  null,
);
new class ShiftryForm extends Form {}(
  PokemonForm.Shiftry,
  PokemonVariety.Shiftry,
  PokemonSpecies.Shiftry,
  null,
);
new class TaillowForm extends Form {}(
  PokemonForm.Taillow,
  PokemonVariety.Taillow,
  PokemonSpecies.Taillow,
  null,
);
new class SwellowForm extends Form {}(
  PokemonForm.Swellow,
  PokemonVariety.Swellow,
  PokemonSpecies.Swellow,
  null,
);
new class WingullForm extends Form {}(
  PokemonForm.Wingull,
  PokemonVariety.Wingull,
  PokemonSpecies.Wingull,
  null,
);
new class PelipperForm extends Form {}(
  PokemonForm.Pelipper,
  PokemonVariety.Pelipper,
  PokemonSpecies.Pelipper,
  null,
);
new class RaltsForm extends Form {}(
  PokemonForm.Ralts,
  PokemonVariety.Ralts,
  PokemonSpecies.Ralts,
  null,
);
new class KirliaForm extends Form {}(
  PokemonForm.Kirlia,
  PokemonVariety.Kirlia,
  PokemonSpecies.Kirlia,
  null,
);
new class GardevoirForm extends Form {}(
  PokemonForm.Gardevoir,
  PokemonVariety.Gardevoir,
  PokemonSpecies.Gardevoir,
  null,
);
new class GardevoirMegaForm extends Form {}(
  PokemonForm.GardevoirMega,
  PokemonVariety.GardevoirMega,
  PokemonSpecies.Gardevoir,
  "Mega Gardevoir",
);
new class SurskitForm extends Form {}(
  PokemonForm.Surskit,
  PokemonVariety.Surskit,
  PokemonSpecies.Surskit,
  null,
);
new class MasquerainForm extends Form {}(
  PokemonForm.Masquerain,
  PokemonVariety.Masquerain,
  PokemonSpecies.Masquerain,
  null,
);
new class ShroomishForm extends Form {}(
  PokemonForm.Shroomish,
  PokemonVariety.Shroomish,
  PokemonSpecies.Shroomish,
  null,
);
new class BreloomForm extends Form {}(
  PokemonForm.Breloom,
  PokemonVariety.Breloom,
  PokemonSpecies.Breloom,
  null,
);
new class SlakothForm extends Form {}(
  PokemonForm.Slakoth,
  PokemonVariety.Slakoth,
  PokemonSpecies.Slakoth,
  null,
);
new class VigorothForm extends Form {}(
  PokemonForm.Vigoroth,
  PokemonVariety.Vigoroth,
  PokemonSpecies.Vigoroth,
  null,
);
new class SlakingForm extends Form {}(
  PokemonForm.Slaking,
  PokemonVariety.Slaking,
  PokemonSpecies.Slaking,
  null,
);
new class NincadaForm extends Form {}(
  PokemonForm.Nincada,
  PokemonVariety.Nincada,
  PokemonSpecies.Nincada,
  null,
);
new class NinjaskForm extends Form {}(
  PokemonForm.Ninjask,
  PokemonVariety.Ninjask,
  PokemonSpecies.Ninjask,
  null,
);
new class ShedinjaForm extends Form {}(
  PokemonForm.Shedinja,
  PokemonVariety.Shedinja,
  PokemonSpecies.Shedinja,
  null,
);
new class WhismurForm extends Form {}(
  PokemonForm.Whismur,
  PokemonVariety.Whismur,
  PokemonSpecies.Whismur,
  null,
);
new class LoudredForm extends Form {}(
  PokemonForm.Loudred,
  PokemonVariety.Loudred,
  PokemonSpecies.Loudred,
  null,
);
new class ExploudForm extends Form {}(
  PokemonForm.Exploud,
  PokemonVariety.Exploud,
  PokemonSpecies.Exploud,
  null,
);
new class MakuhitaForm extends Form {}(
  PokemonForm.Makuhita,
  PokemonVariety.Makuhita,
  PokemonSpecies.Makuhita,
  null,
);
new class HariyamaForm extends Form {}(
  PokemonForm.Hariyama,
  PokemonVariety.Hariyama,
  PokemonSpecies.Hariyama,
  null,
);
new class AzurillForm extends Form {}(
  PokemonForm.Azurill,
  PokemonVariety.Azurill,
  PokemonSpecies.Azurill,
  null,
);
new class NosepassForm extends Form {}(
  PokemonForm.Nosepass,
  PokemonVariety.Nosepass,
  PokemonSpecies.Nosepass,
  null,
);
new class SkittyForm extends Form {}(
  PokemonForm.Skitty,
  PokemonVariety.Skitty,
  PokemonSpecies.Skitty,
  null,
);
new class DelcattyForm extends Form {}(
  PokemonForm.Delcatty,
  PokemonVariety.Delcatty,
  PokemonSpecies.Delcatty,
  null,
);
new class SableyeForm extends Form {}(
  PokemonForm.Sableye,
  PokemonVariety.Sableye,
  PokemonSpecies.Sableye,
  null,
);
new class SableyeMegaForm extends Form {}(
  PokemonForm.SableyeMega,
  PokemonVariety.SableyeMega,
  PokemonSpecies.Sableye,
  "Mega Sableye",
);
new class MawileForm extends Form {}(
  PokemonForm.Mawile,
  PokemonVariety.Mawile,
  PokemonSpecies.Mawile,
  null,
);
new class MawileMegaForm extends Form {}(
  PokemonForm.MawileMega,
  PokemonVariety.MawileMega,
  PokemonSpecies.Mawile,
  "Mega Mawile",
);
new class AronForm extends Form {}(
  PokemonForm.Aron,
  PokemonVariety.Aron,
  PokemonSpecies.Aron,
  null,
);
new class LaironForm extends Form {}(
  PokemonForm.Lairon,
  PokemonVariety.Lairon,
  PokemonSpecies.Lairon,
  null,
);
new class AggronForm extends Form {}(
  PokemonForm.Aggron,
  PokemonVariety.Aggron,
  PokemonSpecies.Aggron,
  null,
);
new class AggronMegaForm extends Form {}(
  PokemonForm.AggronMega,
  PokemonVariety.AggronMega,
  PokemonSpecies.Aggron,
  "Mega Aggron",
);
new class MedititeForm extends Form {}(
  PokemonForm.Meditite,
  PokemonVariety.Meditite,
  PokemonSpecies.Meditite,
  null,
);
new class MedichamForm extends Form {}(
  PokemonForm.Medicham,
  PokemonVariety.Medicham,
  PokemonSpecies.Medicham,
  null,
);
new class MedichamMegaForm extends Form {}(
  PokemonForm.MedichamMega,
  PokemonVariety.MedichamMega,
  PokemonSpecies.Medicham,
  "Mega Medicham",
);
new class ElectrikeForm extends Form {}(
  PokemonForm.Electrike,
  PokemonVariety.Electrike,
  PokemonSpecies.Electrike,
  null,
);
new class ManectricForm extends Form {}(
  PokemonForm.Manectric,
  PokemonVariety.Manectric,
  PokemonSpecies.Manectric,
  null,
);
new class ManectricMegaForm extends Form {}(
  PokemonForm.ManectricMega,
  PokemonVariety.ManectricMega,
  PokemonSpecies.Manectric,
  "Mega Manectric",
);
new class PlusleForm extends Form {}(
  PokemonForm.Plusle,
  PokemonVariety.Plusle,
  PokemonSpecies.Plusle,
  null,
);
new class MinunForm extends Form {}(
  PokemonForm.Minun,
  PokemonVariety.Minun,
  PokemonSpecies.Minun,
  null,
);
new class VolbeatForm extends Form {}(
  PokemonForm.Volbeat,
  PokemonVariety.Volbeat,
  PokemonSpecies.Volbeat,
  null,
);
new class IllumiseForm extends Form {}(
  PokemonForm.Illumise,
  PokemonVariety.Illumise,
  PokemonSpecies.Illumise,
  null,
);
new class RoseliaForm extends Form {}(
  PokemonForm.Roselia,
  PokemonVariety.Roselia,
  PokemonSpecies.Roselia,
  null,
);
new class GulpinForm extends Form {}(
  PokemonForm.Gulpin,
  PokemonVariety.Gulpin,
  PokemonSpecies.Gulpin,
  null,
);
new class SwalotForm extends Form {}(
  PokemonForm.Swalot,
  PokemonVariety.Swalot,
  PokemonSpecies.Swalot,
  null,
);
new class CarvanhaForm extends Form {}(
  PokemonForm.Carvanha,
  PokemonVariety.Carvanha,
  PokemonSpecies.Carvanha,
  null,
);
new class SharpedoForm extends Form {}(
  PokemonForm.Sharpedo,
  PokemonVariety.Sharpedo,
  PokemonSpecies.Sharpedo,
  null,
);
new class SharpedoMegaForm extends Form {}(
  PokemonForm.SharpedoMega,
  PokemonVariety.SharpedoMega,
  PokemonSpecies.Sharpedo,
  "Mega Sharpedo",
);
new class WailmerForm extends Form {}(
  PokemonForm.Wailmer,
  PokemonVariety.Wailmer,
  PokemonSpecies.Wailmer,
  null,
);
new class WailordForm extends Form {}(
  PokemonForm.Wailord,
  PokemonVariety.Wailord,
  PokemonSpecies.Wailord,
  null,
);
new class NumelForm extends Form {}(
  PokemonForm.Numel,
  PokemonVariety.Numel,
  PokemonSpecies.Numel,
  null,
);
new class CameruptForm extends Form {}(
  PokemonForm.Camerupt,
  PokemonVariety.Camerupt,
  PokemonSpecies.Camerupt,
  null,
);
new class CameruptMegaForm extends Form {}(
  PokemonForm.CameruptMega,
  PokemonVariety.CameruptMega,
  PokemonSpecies.Camerupt,
  "Mega Camerupt",
);
new class TorkoalForm extends Form {}(
  PokemonForm.Torkoal,
  PokemonVariety.Torkoal,
  PokemonSpecies.Torkoal,
  null,
);
new class SpoinkForm extends Form {}(
  PokemonForm.Spoink,
  PokemonVariety.Spoink,
  PokemonSpecies.Spoink,
  null,
);
new class GrumpigForm extends Form {}(
  PokemonForm.Grumpig,
  PokemonVariety.Grumpig,
  PokemonSpecies.Grumpig,
  null,
);
new class SpindaForm extends Form {}(
  PokemonForm.Spinda,
  PokemonVariety.Spinda,
  PokemonSpecies.Spinda,
  null,
);
new class TrapinchForm extends Form {}(
  PokemonForm.Trapinch,
  PokemonVariety.Trapinch,
  PokemonSpecies.Trapinch,
  null,
);
new class VibravaForm extends Form {}(
  PokemonForm.Vibrava,
  PokemonVariety.Vibrava,
  PokemonSpecies.Vibrava,
  null,
);
new class FlygonForm extends Form {}(
  PokemonForm.Flygon,
  PokemonVariety.Flygon,
  PokemonSpecies.Flygon,
  null,
);
new class CacneaForm extends Form {}(
  PokemonForm.Cacnea,
  PokemonVariety.Cacnea,
  PokemonSpecies.Cacnea,
  null,
);
new class CacturneForm extends Form {}(
  PokemonForm.Cacturne,
  PokemonVariety.Cacturne,
  PokemonSpecies.Cacturne,
  null,
);
new class SwabluForm extends Form {}(
  PokemonForm.Swablu,
  PokemonVariety.Swablu,
  PokemonSpecies.Swablu,
  null,
);
new class AltariaForm extends Form {}(
  PokemonForm.Altaria,
  PokemonVariety.Altaria,
  PokemonSpecies.Altaria,
  null,
);
new class AltariaMegaForm extends Form {}(
  PokemonForm.AltariaMega,
  PokemonVariety.AltariaMega,
  PokemonSpecies.Altaria,
  "Mega Altaria",
);
new class ZangooseForm extends Form {}(
  PokemonForm.Zangoose,
  PokemonVariety.Zangoose,
  PokemonSpecies.Zangoose,
  null,
);
new class SeviperForm extends Form {}(
  PokemonForm.Seviper,
  PokemonVariety.Seviper,
  PokemonSpecies.Seviper,
  null,
);
new class LunatoneForm extends Form {}(
  PokemonForm.Lunatone,
  PokemonVariety.Lunatone,
  PokemonSpecies.Lunatone,
  null,
);
new class SolrockForm extends Form {}(
  PokemonForm.Solrock,
  PokemonVariety.Solrock,
  PokemonSpecies.Solrock,
  null,
);
new class BarboachForm extends Form {}(
  PokemonForm.Barboach,
  PokemonVariety.Barboach,
  PokemonSpecies.Barboach,
  null,
);
new class WhiscashForm extends Form {}(
  PokemonForm.Whiscash,
  PokemonVariety.Whiscash,
  PokemonSpecies.Whiscash,
  null,
);
new class CorphishForm extends Form {}(
  PokemonForm.Corphish,
  PokemonVariety.Corphish,
  PokemonSpecies.Corphish,
  null,
);
new class CrawdauntForm extends Form {}(
  PokemonForm.Crawdaunt,
  PokemonVariety.Crawdaunt,
  PokemonSpecies.Crawdaunt,
  null,
);
new class BaltoyForm extends Form {}(
  PokemonForm.Baltoy,
  PokemonVariety.Baltoy,
  PokemonSpecies.Baltoy,
  null,
);
new class ClaydolForm extends Form {}(
  PokemonForm.Claydol,
  PokemonVariety.Claydol,
  PokemonSpecies.Claydol,
  null,
);
new class LileepForm extends Form {}(
  PokemonForm.Lileep,
  PokemonVariety.Lileep,
  PokemonSpecies.Lileep,
  null,
);
new class CradilyForm extends Form {}(
  PokemonForm.Cradily,
  PokemonVariety.Cradily,
  PokemonSpecies.Cradily,
  null,
);
new class AnorithForm extends Form {}(
  PokemonForm.Anorith,
  PokemonVariety.Anorith,
  PokemonSpecies.Anorith,
  null,
);
new class ArmaldoForm extends Form {}(
  PokemonForm.Armaldo,
  PokemonVariety.Armaldo,
  PokemonSpecies.Armaldo,
  null,
);
new class FeebasForm extends Form {}(
  PokemonForm.Feebas,
  PokemonVariety.Feebas,
  PokemonSpecies.Feebas,
  null,
);
new class MiloticForm extends Form {}(
  PokemonForm.Milotic,
  PokemonVariety.Milotic,
  PokemonSpecies.Milotic,
  null,
);
new class CastformForm extends Form {}(
  PokemonForm.Castform,
  PokemonVariety.Castform,
  PokemonSpecies.Castform,
  "Normal",
);
new class CastformSunnyForm extends Form {}(
  PokemonForm.CastformSunny,
  PokemonVariety.CastformSunny,
  PokemonSpecies.Castform,
  "Sunny Form",
);
new class CastformRainyForm extends Form {}(
  PokemonForm.CastformRainy,
  PokemonVariety.CastformRainy,
  PokemonSpecies.Castform,
  "Rainy Form",
);
new class CastformSnowyForm extends Form {}(
  PokemonForm.CastformSnowy,
  PokemonVariety.CastformSnowy,
  PokemonSpecies.Castform,
  "Snowy Form",
);
new class KecleonForm extends Form {}(
  PokemonForm.Kecleon,
  PokemonVariety.Kecleon,
  PokemonSpecies.Kecleon,
  null,
);
new class ShuppetForm extends Form {}(
  PokemonForm.Shuppet,
  PokemonVariety.Shuppet,
  PokemonSpecies.Shuppet,
  null,
);
new class BanetteForm extends Form {}(
  PokemonForm.Banette,
  PokemonVariety.Banette,
  PokemonSpecies.Banette,
  null,
);
new class BanetteMegaForm extends Form {}(
  PokemonForm.BanetteMega,
  PokemonVariety.BanetteMega,
  PokemonSpecies.Banette,
  "Mega Banette",
);
new class DuskullForm extends Form {}(
  PokemonForm.Duskull,
  PokemonVariety.Duskull,
  PokemonSpecies.Duskull,
  null,
);
new class DusclopsForm extends Form {}(
  PokemonForm.Dusclops,
  PokemonVariety.Dusclops,
  PokemonSpecies.Dusclops,
  null,
);
new class TropiusForm extends Form {}(
  PokemonForm.Tropius,
  PokemonVariety.Tropius,
  PokemonSpecies.Tropius,
  null,
);
new class ChimechoForm extends Form {}(
  PokemonForm.Chimecho,
  PokemonVariety.Chimecho,
  PokemonSpecies.Chimecho,
  null,
);
new class AbsolForm extends Form {}(
  PokemonForm.Absol,
  PokemonVariety.Absol,
  PokemonSpecies.Absol,
  null,
);
new class AbsolMegaForm extends Form {}(
  PokemonForm.AbsolMega,
  PokemonVariety.AbsolMega,
  PokemonSpecies.Absol,
  "Mega Absol",
);
new class WynautForm extends Form {}(
  PokemonForm.Wynaut,
  PokemonVariety.Wynaut,
  PokemonSpecies.Wynaut,
  null,
);
new class SnoruntForm extends Form {}(
  PokemonForm.Snorunt,
  PokemonVariety.Snorunt,
  PokemonSpecies.Snorunt,
  null,
);
new class GlalieForm extends Form {}(
  PokemonForm.Glalie,
  PokemonVariety.Glalie,
  PokemonSpecies.Glalie,
  null,
);
new class GlalieMegaForm extends Form {}(
  PokemonForm.GlalieMega,
  PokemonVariety.GlalieMega,
  PokemonSpecies.Glalie,
  "Mega Glalie",
);
new class SphealForm extends Form {}(
  PokemonForm.Spheal,
  PokemonVariety.Spheal,
  PokemonSpecies.Spheal,
  null,
);
new class SealeoForm extends Form {}(
  PokemonForm.Sealeo,
  PokemonVariety.Sealeo,
  PokemonSpecies.Sealeo,
  null,
);
new class WalreinForm extends Form {}(
  PokemonForm.Walrein,
  PokemonVariety.Walrein,
  PokemonSpecies.Walrein,
  null,
);
new class ClamperlForm extends Form {}(
  PokemonForm.Clamperl,
  PokemonVariety.Clamperl,
  PokemonSpecies.Clamperl,
  null,
);
new class HuntailForm extends Form {}(
  PokemonForm.Huntail,
  PokemonVariety.Huntail,
  PokemonSpecies.Huntail,
  null,
);
new class GorebyssForm extends Form {}(
  PokemonForm.Gorebyss,
  PokemonVariety.Gorebyss,
  PokemonSpecies.Gorebyss,
  null,
);
new class RelicanthForm extends Form {}(
  PokemonForm.Relicanth,
  PokemonVariety.Relicanth,
  PokemonSpecies.Relicanth,
  null,
);
new class LuvdiscForm extends Form {}(
  PokemonForm.Luvdisc,
  PokemonVariety.Luvdisc,
  PokemonSpecies.Luvdisc,
  null,
);
new class BagonForm extends Form {}(
  PokemonForm.Bagon,
  PokemonVariety.Bagon,
  PokemonSpecies.Bagon,
  null,
);
new class ShelgonForm extends Form {}(
  PokemonForm.Shelgon,
  PokemonVariety.Shelgon,
  PokemonSpecies.Shelgon,
  null,
);
new class SalamenceForm extends Form {}(
  PokemonForm.Salamence,
  PokemonVariety.Salamence,
  PokemonSpecies.Salamence,
  null,
);
new class SalamenceMegaForm extends Form {}(
  PokemonForm.SalamenceMega,
  PokemonVariety.SalamenceMega,
  PokemonSpecies.Salamence,
  "Mega Salamence",
);
new class BeldumForm extends Form {}(
  PokemonForm.Beldum,
  PokemonVariety.Beldum,
  PokemonSpecies.Beldum,
  null,
);
new class MetangForm extends Form {}(
  PokemonForm.Metang,
  PokemonVariety.Metang,
  PokemonSpecies.Metang,
  null,
);
new class MetagrossForm extends Form {}(
  PokemonForm.Metagross,
  PokemonVariety.Metagross,
  PokemonSpecies.Metagross,
  null,
);
new class MetagrossMegaForm extends Form {}(
  PokemonForm.MetagrossMega,
  PokemonVariety.MetagrossMega,
  PokemonSpecies.Metagross,
  "Mega Metagross",
);
new class RegirockForm extends Form {}(
  PokemonForm.Regirock,
  PokemonVariety.Regirock,
  PokemonSpecies.Regirock,
  null,
);
new class RegiceForm extends Form {}(
  PokemonForm.Regice,
  PokemonVariety.Regice,
  PokemonSpecies.Regice,
  null,
);
new class RegisteelForm extends Form {}(
  PokemonForm.Registeel,
  PokemonVariety.Registeel,
  PokemonSpecies.Registeel,
  null,
);
new class LatiasForm extends Form {}(
  PokemonForm.Latias,
  PokemonVariety.Latias,
  PokemonSpecies.Latias,
  null,
);
new class LatiasMegaForm extends Form {}(
  PokemonForm.LatiasMega,
  PokemonVariety.LatiasMega,
  PokemonSpecies.Latias,
  "Mega Latias",
);
new class LatiosForm extends Form {}(
  PokemonForm.Latios,
  PokemonVariety.Latios,
  PokemonSpecies.Latios,
  null,
);
new class LatiosMegaForm extends Form {}(
  PokemonForm.LatiosMega,
  PokemonVariety.LatiosMega,
  PokemonSpecies.Latios,
  "Mega Latios",
);
new class KyogreForm extends Form {}(
  PokemonForm.Kyogre,
  PokemonVariety.Kyogre,
  PokemonSpecies.Kyogre,
  "Kyogre",
);
new class KyogrePrimalForm extends Form {}(
  PokemonForm.KyogrePrimal,
  PokemonVariety.KyogrePrimal,
  PokemonSpecies.Kyogre,
  "Primal Reversion",
);
new class GroudonForm extends Form {}(
  PokemonForm.Groudon,
  PokemonVariety.Groudon,
  PokemonSpecies.Groudon,
  "Groudon",
);
new class GroudonPrimalForm extends Form {}(
  PokemonForm.GroudonPrimal,
  PokemonVariety.GroudonPrimal,
  PokemonSpecies.Groudon,
  "Primal Reversion",
);
new class RayquazaForm extends Form {}(
  PokemonForm.Rayquaza,
  PokemonVariety.Rayquaza,
  PokemonSpecies.Rayquaza,
  null,
);
new class RayquazaMegaForm extends Form {}(
  PokemonForm.RayquazaMega,
  PokemonVariety.RayquazaMega,
  PokemonSpecies.Rayquaza,
  "Mega Rayquaza",
);
new class JirachiForm extends Form {}(
  PokemonForm.Jirachi,
  PokemonVariety.Jirachi,
  PokemonSpecies.Jirachi,
  null,
);
new class DeoxysNormalForm extends Form {}(
  PokemonForm.DeoxysNormal,
  PokemonVariety.DeoxysNormal,
  PokemonSpecies.Deoxys,
  "Normal Forme",
);
new class DeoxysAttackForm extends Form {}(
  PokemonForm.DeoxysAttack,
  PokemonVariety.DeoxysAttack,
  PokemonSpecies.Deoxys,
  "Attack Forme",
);
new class DeoxysDefenseForm extends Form {}(
  PokemonForm.DeoxysDefense,
  PokemonVariety.DeoxysDefense,
  PokemonSpecies.Deoxys,
  "Defense Forme",
);
new class DeoxysSpeedForm extends Form {}(
  PokemonForm.DeoxysSpeed,
  PokemonVariety.DeoxysSpeed,
  PokemonSpecies.Deoxys,
  "Speed Forme",
);
new class TurtwigForm extends Form {}(
  PokemonForm.Turtwig,
  PokemonVariety.Turtwig,
  PokemonSpecies.Turtwig,
  null,
);
new class GrotleForm extends Form {}(
  PokemonForm.Grotle,
  PokemonVariety.Grotle,
  PokemonSpecies.Grotle,
  null,
);
new class TorterraForm extends Form {}(
  PokemonForm.Torterra,
  PokemonVariety.Torterra,
  PokemonSpecies.Torterra,
  null,
);
new class ChimcharForm extends Form {}(
  PokemonForm.Chimchar,
  PokemonVariety.Chimchar,
  PokemonSpecies.Chimchar,
  null,
);
new class MonfernoForm extends Form {}(
  PokemonForm.Monferno,
  PokemonVariety.Monferno,
  PokemonSpecies.Monferno,
  null,
);
new class InfernapeForm extends Form {}(
  PokemonForm.Infernape,
  PokemonVariety.Infernape,
  PokemonSpecies.Infernape,
  null,
);
new class PiplupForm extends Form {}(
  PokemonForm.Piplup,
  PokemonVariety.Piplup,
  PokemonSpecies.Piplup,
  null,
);
new class PrinplupForm extends Form {}(
  PokemonForm.Prinplup,
  PokemonVariety.Prinplup,
  PokemonSpecies.Prinplup,
  null,
);
new class EmpoleonForm extends Form {}(
  PokemonForm.Empoleon,
  PokemonVariety.Empoleon,
  PokemonSpecies.Empoleon,
  null,
);
new class StarlyForm extends Form {}(
  PokemonForm.Starly,
  PokemonVariety.Starly,
  PokemonSpecies.Starly,
  null,
);
new class StaraviaForm extends Form {}(
  PokemonForm.Staravia,
  PokemonVariety.Staravia,
  PokemonSpecies.Staravia,
  null,
);
new class StaraptorForm extends Form {}(
  PokemonForm.Staraptor,
  PokemonVariety.Staraptor,
  PokemonSpecies.Staraptor,
  null,
);
new class BidoofForm extends Form {}(
  PokemonForm.Bidoof,
  PokemonVariety.Bidoof,
  PokemonSpecies.Bidoof,
  null,
);
new class BibarelForm extends Form {}(
  PokemonForm.Bibarel,
  PokemonVariety.Bibarel,
  PokemonSpecies.Bibarel,
  null,
);
new class KricketotForm extends Form {}(
  PokemonForm.Kricketot,
  PokemonVariety.Kricketot,
  PokemonSpecies.Kricketot,
  null,
);
new class KricketuneForm extends Form {}(
  PokemonForm.Kricketune,
  PokemonVariety.Kricketune,
  PokemonSpecies.Kricketune,
  null,
);
new class ShinxForm extends Form {}(
  PokemonForm.Shinx,
  PokemonVariety.Shinx,
  PokemonSpecies.Shinx,
  null,
);
new class LuxioForm extends Form {}(
  PokemonForm.Luxio,
  PokemonVariety.Luxio,
  PokemonSpecies.Luxio,
  null,
);
new class LuxrayForm extends Form {}(
  PokemonForm.Luxray,
  PokemonVariety.Luxray,
  PokemonSpecies.Luxray,
  null,
);
new class BudewForm extends Form {}(
  PokemonForm.Budew,
  PokemonVariety.Budew,
  PokemonSpecies.Budew,
  null,
);
new class RoseradeForm extends Form {}(
  PokemonForm.Roserade,
  PokemonVariety.Roserade,
  PokemonSpecies.Roserade,
  null,
);
new class CranidosForm extends Form {}(
  PokemonForm.Cranidos,
  PokemonVariety.Cranidos,
  PokemonSpecies.Cranidos,
  null,
);
new class RampardosForm extends Form {}(
  PokemonForm.Rampardos,
  PokemonVariety.Rampardos,
  PokemonSpecies.Rampardos,
  null,
);
new class ShieldonForm extends Form {}(
  PokemonForm.Shieldon,
  PokemonVariety.Shieldon,
  PokemonSpecies.Shieldon,
  null,
);
new class BastiodonForm extends Form {}(
  PokemonForm.Bastiodon,
  PokemonVariety.Bastiodon,
  PokemonSpecies.Bastiodon,
  null,
);
new class BurmyPlantForm extends Form {}(
  PokemonForm.BurmyPlant,
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
  "Plant Cloak",
);
new class BurmySandyForm extends Form {}(
  PokemonForm.BurmySandy,
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
  "Sandy Cloak",
);
new class BurmyTrashForm extends Form {}(
  PokemonForm.BurmyTrash,
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
  "Trash Cloak",
);
new class WormadamPlantForm extends Form {}(
  PokemonForm.WormadamPlant,
  PokemonVariety.WormadamPlant,
  PokemonSpecies.Wormadam,
  "Plant Cloak",
);
new class WormadamSandyForm extends Form {}(
  PokemonForm.WormadamSandy,
  PokemonVariety.WormadamSandy,
  PokemonSpecies.Wormadam,
  "Sandy Cloak",
);
new class WormadamTrashForm extends Form {}(
  PokemonForm.WormadamTrash,
  PokemonVariety.WormadamTrash,
  PokemonSpecies.Wormadam,
  "Trash Cloak",
);
new class MothimPlantForm extends Form {}(
  PokemonForm.MothimPlant,
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
  null,
);
new class MothimSandyForm extends Form {}(
  PokemonForm.MothimSandy,
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
  null,
);
new class MothimTrashForm extends Form {}(
  PokemonForm.MothimTrash,
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
  null,
);
new class CombeeForm extends Form {}(
  PokemonForm.Combee,
  PokemonVariety.Combee,
  PokemonSpecies.Combee,
  null,
);
new class VespiquenForm extends Form {}(
  PokemonForm.Vespiquen,
  PokemonVariety.Vespiquen,
  PokemonSpecies.Vespiquen,
  null,
);
new class PachirisuForm extends Form {}(
  PokemonForm.Pachirisu,
  PokemonVariety.Pachirisu,
  PokemonSpecies.Pachirisu,
  null,
);
new class BuizelForm extends Form {}(
  PokemonForm.Buizel,
  PokemonVariety.Buizel,
  PokemonSpecies.Buizel,
  null,
);
new class FloatzelForm extends Form {}(
  PokemonForm.Floatzel,
  PokemonVariety.Floatzel,
  PokemonSpecies.Floatzel,
  null,
);
new class CherubiForm extends Form {}(
  PokemonForm.Cherubi,
  PokemonVariety.Cherubi,
  PokemonSpecies.Cherubi,
  null,
);
new class CherrimOvercastForm extends Form {}(
  PokemonForm.CherrimOvercast,
  PokemonVariety.Cherrim,
  PokemonSpecies.Cherrim,
  "Overcast Form",
);
new class CherrimSunshineForm extends Form {}(
  PokemonForm.CherrimSunshine,
  PokemonVariety.Cherrim,
  PokemonSpecies.Cherrim,
  "Sunshine Form",
);
new class ShellosWestForm extends Form {}(
  PokemonForm.ShellosWest,
  PokemonVariety.Shellos,
  PokemonSpecies.Shellos,
  "West Sea",
);
new class ShellosEastForm extends Form {}(
  PokemonForm.ShellosEast,
  PokemonVariety.Shellos,
  PokemonSpecies.Shellos,
  "East Sea",
);
new class GastrodonWestForm extends Form {}(
  PokemonForm.GastrodonWest,
  PokemonVariety.Gastrodon,
  PokemonSpecies.Gastrodon,
  "West Sea",
);
new class GastrodonEastForm extends Form {}(
  PokemonForm.GastrodonEast,
  PokemonVariety.Gastrodon,
  PokemonSpecies.Gastrodon,
  "East Sea",
);
new class AmbipomForm extends Form {}(
  PokemonForm.Ambipom,
  PokemonVariety.Ambipom,
  PokemonSpecies.Ambipom,
  null,
);
new class DrifloonForm extends Form {}(
  PokemonForm.Drifloon,
  PokemonVariety.Drifloon,
  PokemonSpecies.Drifloon,
  null,
);
new class DrifblimForm extends Form {}(
  PokemonForm.Drifblim,
  PokemonVariety.Drifblim,
  PokemonSpecies.Drifblim,
  null,
);
new class BunearyForm extends Form {}(
  PokemonForm.Buneary,
  PokemonVariety.Buneary,
  PokemonSpecies.Buneary,
  null,
);
new class LopunnyForm extends Form {}(
  PokemonForm.Lopunny,
  PokemonVariety.Lopunny,
  PokemonSpecies.Lopunny,
  null,
);
new class LopunnyMegaForm extends Form {}(
  PokemonForm.LopunnyMega,
  PokemonVariety.LopunnyMega,
  PokemonSpecies.Lopunny,
  "Mega Lopunny",
);
new class MismagiusForm extends Form {}(
  PokemonForm.Mismagius,
  PokemonVariety.Mismagius,
  PokemonSpecies.Mismagius,
  null,
);
new class HonchkrowForm extends Form {}(
  PokemonForm.Honchkrow,
  PokemonVariety.Honchkrow,
  PokemonSpecies.Honchkrow,
  null,
);
new class GlameowForm extends Form {}(
  PokemonForm.Glameow,
  PokemonVariety.Glameow,
  PokemonSpecies.Glameow,
  null,
);
new class PuruglyForm extends Form {}(
  PokemonForm.Purugly,
  PokemonVariety.Purugly,
  PokemonSpecies.Purugly,
  null,
);
new class ChinglingForm extends Form {}(
  PokemonForm.Chingling,
  PokemonVariety.Chingling,
  PokemonSpecies.Chingling,
  null,
);
new class StunkyForm extends Form {}(
  PokemonForm.Stunky,
  PokemonVariety.Stunky,
  PokemonSpecies.Stunky,
  null,
);
new class SkuntankForm extends Form {}(
  PokemonForm.Skuntank,
  PokemonVariety.Skuntank,
  PokemonSpecies.Skuntank,
  null,
);
new class BronzorForm extends Form {}(
  PokemonForm.Bronzor,
  PokemonVariety.Bronzor,
  PokemonSpecies.Bronzor,
  null,
);
new class BronzongForm extends Form {}(
  PokemonForm.Bronzong,
  PokemonVariety.Bronzong,
  PokemonSpecies.Bronzong,
  null,
);
new class BonslyForm extends Form {}(
  PokemonForm.Bonsly,
  PokemonVariety.Bonsly,
  PokemonSpecies.Bonsly,
  null,
);
new class MimeJrForm extends Form {}(
  PokemonForm.MimeJr,
  PokemonVariety.MimeJr,
  PokemonSpecies.MimeJr,
  null,
);
new class HappinyForm extends Form {}(
  PokemonForm.Happiny,
  PokemonVariety.Happiny,
  PokemonSpecies.Happiny,
  null,
);
new class ChatotForm extends Form {}(
  PokemonForm.Chatot,
  PokemonVariety.Chatot,
  PokemonSpecies.Chatot,
  null,
);
new class SpiritombForm extends Form {}(
  PokemonForm.Spiritomb,
  PokemonVariety.Spiritomb,
  PokemonSpecies.Spiritomb,
  null,
);
new class GibleForm extends Form {}(
  PokemonForm.Gible,
  PokemonVariety.Gible,
  PokemonSpecies.Gible,
  null,
);
new class GabiteForm extends Form {}(
  PokemonForm.Gabite,
  PokemonVariety.Gabite,
  PokemonSpecies.Gabite,
  null,
);
new class GarchompForm extends Form {}(
  PokemonForm.Garchomp,
  PokemonVariety.Garchomp,
  PokemonSpecies.Garchomp,
  null,
);
new class GarchompMegaForm extends Form {}(
  PokemonForm.GarchompMega,
  PokemonVariety.GarchompMega,
  PokemonSpecies.Garchomp,
  "Mega Garchomp",
);
new class MunchlaxForm extends Form {}(
  PokemonForm.Munchlax,
  PokemonVariety.Munchlax,
  PokemonSpecies.Munchlax,
  null,
);
new class RioluForm extends Form {}(
  PokemonForm.Riolu,
  PokemonVariety.Riolu,
  PokemonSpecies.Riolu,
  null,
);
new class LucarioForm extends Form {}(
  PokemonForm.Lucario,
  PokemonVariety.Lucario,
  PokemonSpecies.Lucario,
  null,
);
new class LucarioMegaForm extends Form {}(
  PokemonForm.LucarioMega,
  PokemonVariety.LucarioMega,
  PokemonSpecies.Lucario,
  "Mega Lucario",
);
new class HippopotasForm extends Form {}(
  PokemonForm.Hippopotas,
  PokemonVariety.Hippopotas,
  PokemonSpecies.Hippopotas,
  null,
);
new class HippowdonForm extends Form {}(
  PokemonForm.Hippowdon,
  PokemonVariety.Hippowdon,
  PokemonSpecies.Hippowdon,
  null,
);
new class SkorupiForm extends Form {}(
  PokemonForm.Skorupi,
  PokemonVariety.Skorupi,
  PokemonSpecies.Skorupi,
  null,
);
new class DrapionForm extends Form {}(
  PokemonForm.Drapion,
  PokemonVariety.Drapion,
  PokemonSpecies.Drapion,
  null,
);
new class CroagunkForm extends Form {}(
  PokemonForm.Croagunk,
  PokemonVariety.Croagunk,
  PokemonSpecies.Croagunk,
  null,
);
new class ToxicroakForm extends Form {}(
  PokemonForm.Toxicroak,
  PokemonVariety.Toxicroak,
  PokemonSpecies.Toxicroak,
  null,
);
new class CarnivineForm extends Form {}(
  PokemonForm.Carnivine,
  PokemonVariety.Carnivine,
  PokemonSpecies.Carnivine,
  null,
);
new class FinneonForm extends Form {}(
  PokemonForm.Finneon,
  PokemonVariety.Finneon,
  PokemonSpecies.Finneon,
  null,
);
new class LumineonForm extends Form {}(
  PokemonForm.Lumineon,
  PokemonVariety.Lumineon,
  PokemonSpecies.Lumineon,
  null,
);
new class MantykeForm extends Form {}(
  PokemonForm.Mantyke,
  PokemonVariety.Mantyke,
  PokemonSpecies.Mantyke,
  null,
);
new class SnoverForm extends Form {}(
  PokemonForm.Snover,
  PokemonVariety.Snover,
  PokemonSpecies.Snover,
  null,
);
new class AbomasnowForm extends Form {}(
  PokemonForm.Abomasnow,
  PokemonVariety.Abomasnow,
  PokemonSpecies.Abomasnow,
  null,
);
new class AbomasnowMegaForm extends Form {}(
  PokemonForm.AbomasnowMega,
  PokemonVariety.AbomasnowMega,
  PokemonSpecies.Abomasnow,
  "Mega Abomasnow",
);
new class WeavileForm extends Form {}(
  PokemonForm.Weavile,
  PokemonVariety.Weavile,
  PokemonSpecies.Weavile,
  null,
);
new class MagnezoneForm extends Form {}(
  PokemonForm.Magnezone,
  PokemonVariety.Magnezone,
  PokemonSpecies.Magnezone,
  null,
);
new class LickilickyForm extends Form {}(
  PokemonForm.Lickilicky,
  PokemonVariety.Lickilicky,
  PokemonSpecies.Lickilicky,
  null,
);
new class RhyperiorForm extends Form {}(
  PokemonForm.Rhyperior,
  PokemonVariety.Rhyperior,
  PokemonSpecies.Rhyperior,
  null,
);
new class TangrowthForm extends Form {}(
  PokemonForm.Tangrowth,
  PokemonVariety.Tangrowth,
  PokemonSpecies.Tangrowth,
  null,
);
new class ElectivireForm extends Form {}(
  PokemonForm.Electivire,
  PokemonVariety.Electivire,
  PokemonSpecies.Electivire,
  null,
);
new class MagmortarForm extends Form {}(
  PokemonForm.Magmortar,
  PokemonVariety.Magmortar,
  PokemonSpecies.Magmortar,
  null,
);
new class TogekissForm extends Form {}(
  PokemonForm.Togekiss,
  PokemonVariety.Togekiss,
  PokemonSpecies.Togekiss,
  null,
);
new class YanmegaForm extends Form {}(
  PokemonForm.Yanmega,
  PokemonVariety.Yanmega,
  PokemonSpecies.Yanmega,
  null,
);
new class LeafeonForm extends Form {}(
  PokemonForm.Leafeon,
  PokemonVariety.Leafeon,
  PokemonSpecies.Leafeon,
  null,
);
new class GlaceonForm extends Form {}(
  PokemonForm.Glaceon,
  PokemonVariety.Glaceon,
  PokemonSpecies.Glaceon,
  null,
);
new class GliscorForm extends Form {}(
  PokemonForm.Gliscor,
  PokemonVariety.Gliscor,
  PokemonSpecies.Gliscor,
  null,
);
new class MamoswineForm extends Form {}(
  PokemonForm.Mamoswine,
  PokemonVariety.Mamoswine,
  PokemonSpecies.Mamoswine,
  null,
);
new class PorygonZForm extends Form {}(
  PokemonForm.PorygonZ,
  PokemonVariety.PorygonZ,
  PokemonSpecies.PorygonZ,
  null,
);
new class GalladeForm extends Form {}(
  PokemonForm.Gallade,
  PokemonVariety.Gallade,
  PokemonSpecies.Gallade,
  null,
);
new class GalladeMegaForm extends Form {}(
  PokemonForm.GalladeMega,
  PokemonVariety.GalladeMega,
  PokemonSpecies.Gallade,
  "Mega Gallade",
);
new class ProbopassForm extends Form {}(
  PokemonForm.Probopass,
  PokemonVariety.Probopass,
  PokemonSpecies.Probopass,
  null,
);
new class DusknoirForm extends Form {}(
  PokemonForm.Dusknoir,
  PokemonVariety.Dusknoir,
  PokemonSpecies.Dusknoir,
  null,
);
new class FroslassForm extends Form {}(
  PokemonForm.Froslass,
  PokemonVariety.Froslass,
  PokemonSpecies.Froslass,
  null,
);
new class RotomForm extends Form {}(
  PokemonForm.Rotom,
  PokemonVariety.Rotom,
  PokemonSpecies.Rotom,
  "Rotom",
);
new class RotomHeatForm extends Form {}(
  PokemonForm.RotomHeat,
  PokemonVariety.RotomHeat,
  PokemonSpecies.Rotom,
  "Heat Rotom",
);
new class RotomWashForm extends Form {}(
  PokemonForm.RotomWash,
  PokemonVariety.RotomWash,
  PokemonSpecies.Rotom,
  "Wash Rotom",
);
new class RotomFrostForm extends Form {}(
  PokemonForm.RotomFrost,
  PokemonVariety.RotomFrost,
  PokemonSpecies.Rotom,
  "Frost Rotom",
);
new class RotomFanForm extends Form {}(
  PokemonForm.RotomFan,
  PokemonVariety.RotomFan,
  PokemonSpecies.Rotom,
  "Fan Rotom",
);
new class RotomMowForm extends Form {}(
  PokemonForm.RotomMow,
  PokemonVariety.RotomMow,
  PokemonSpecies.Rotom,
  "Mow Rotom",
);
new class UxieForm extends Form {}(
  PokemonForm.Uxie,
  PokemonVariety.Uxie,
  PokemonSpecies.Uxie,
  null,
);
new class MespritForm extends Form {}(
  PokemonForm.Mesprit,
  PokemonVariety.Mesprit,
  PokemonSpecies.Mesprit,
  null,
);
new class AzelfForm extends Form {}(
  PokemonForm.Azelf,
  PokemonVariety.Azelf,
  PokemonSpecies.Azelf,
  null,
);
new class DialgaForm extends Form {}(
  PokemonForm.Dialga,
  PokemonVariety.Dialga,
  PokemonSpecies.Dialga,
  null,
);
new class DialgaOriginForm extends Form {}(
  PokemonForm.DialgaOrigin,
  PokemonVariety.DialgaOrigin,
  PokemonSpecies.Dialga,
  "Origin Forme",
);
new class PalkiaForm extends Form {}(
  PokemonForm.Palkia,
  PokemonVariety.Palkia,
  PokemonSpecies.Palkia,
  null,
);
new class PalkiaOriginForm extends Form {}(
  PokemonForm.PalkiaOrigin,
  PokemonVariety.PalkiaOrigin,
  PokemonSpecies.Palkia,
  "Origin Forme",
);
new class HeatranForm extends Form {}(
  PokemonForm.Heatran,
  PokemonVariety.Heatran,
  PokemonSpecies.Heatran,
  null,
);
new class RegigigasForm extends Form {}(
  PokemonForm.Regigigas,
  PokemonVariety.Regigigas,
  PokemonSpecies.Regigigas,
  null,
);
new class GiratinaAlteredForm extends Form {}(
  PokemonForm.GiratinaAltered,
  PokemonVariety.GiratinaAltered,
  PokemonSpecies.Giratina,
  "Altered Forme",
);
new class GiratinaOriginForm extends Form {}(
  PokemonForm.GiratinaOrigin,
  PokemonVariety.GiratinaOrigin,
  PokemonSpecies.Giratina,
  "Origin Forme",
);
new class CresseliaForm extends Form {}(
  PokemonForm.Cresselia,
  PokemonVariety.Cresselia,
  PokemonSpecies.Cresselia,
  null,
);
new class PhioneForm extends Form {}(
  PokemonForm.Phione,
  PokemonVariety.Phione,
  PokemonSpecies.Phione,
  null,
);
new class ManaphyForm extends Form {}(
  PokemonForm.Manaphy,
  PokemonVariety.Manaphy,
  PokemonSpecies.Manaphy,
  null,
);
new class DarkraiForm extends Form {}(
  PokemonForm.Darkrai,
  PokemonVariety.Darkrai,
  PokemonSpecies.Darkrai,
  null,
);
new class ShayminLandForm extends Form {}(
  PokemonForm.ShayminLand,
  PokemonVariety.ShayminLand,
  PokemonSpecies.Shaymin,
  "Land Forme",
);
new class ShayminSkyForm extends Form {}(
  PokemonForm.ShayminSky,
  PokemonVariety.ShayminSky,
  PokemonSpecies.Shaymin,
  "Sky Forme",
);
new class ArceusNormalForm extends Form {}(
  PokemonForm.ArceusNormal,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Normal Type",
);
new class ArceusBugForm extends Form {}(
  PokemonForm.ArceusBug,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Bug Type",
);
new class ArceusDarkForm extends Form {}(
  PokemonForm.ArceusDark,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Dark Type",
);
new class ArceusDragonForm extends Form {}(
  PokemonForm.ArceusDragon,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Dragon Type",
);
new class ArceusElectricForm extends Form {}(
  PokemonForm.ArceusElectric,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Electric Type",
);
new class ArceusFightingForm extends Form {}(
  PokemonForm.ArceusFighting,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Fighting Type",
);
new class ArceusFireForm extends Form {}(
  PokemonForm.ArceusFire,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Fire Type",
);
new class ArceusFlyingForm extends Form {}(
  PokemonForm.ArceusFlying,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Flying Type",
);
new class ArceusGhostForm extends Form {}(
  PokemonForm.ArceusGhost,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Ghost Type",
);
new class ArceusGrassForm extends Form {}(
  PokemonForm.ArceusGrass,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Grass Type",
);
new class ArceusGroundForm extends Form {}(
  PokemonForm.ArceusGround,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Ground Type",
);
new class ArceusIceForm extends Form {}(
  PokemonForm.ArceusIce,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Ice Type",
);
new class ArceusPoisonForm extends Form {}(
  PokemonForm.ArceusPoison,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Poison Type",
);
new class ArceusPsychicForm extends Form {}(
  PokemonForm.ArceusPsychic,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Psychic Type",
);
new class ArceusRockForm extends Form {}(
  PokemonForm.ArceusRock,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Rock Type",
);
new class ArceusSteelForm extends Form {}(
  PokemonForm.ArceusSteel,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Steel Type",
);
new class ArceusWaterForm extends Form {}(
  PokemonForm.ArceusWater,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Water Type",
);
new class ArceusUnknownForm extends Form {}(
  PokemonForm.ArceusUnknown,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "??? Type",
);
new class ArceusFairyForm extends Form {}(
  PokemonForm.ArceusFairy,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Fairy Type",
);
new class VictiniForm extends Form {}(
  PokemonForm.Victini,
  PokemonVariety.Victini,
  PokemonSpecies.Victini,
  null,
);
new class SnivyForm extends Form {}(
  PokemonForm.Snivy,
  PokemonVariety.Snivy,
  PokemonSpecies.Snivy,
  null,
);
new class ServineForm extends Form {}(
  PokemonForm.Servine,
  PokemonVariety.Servine,
  PokemonSpecies.Servine,
  null,
);
new class SerperiorForm extends Form {}(
  PokemonForm.Serperior,
  PokemonVariety.Serperior,
  PokemonSpecies.Serperior,
  null,
);
new class TepigForm extends Form {}(
  PokemonForm.Tepig,
  PokemonVariety.Tepig,
  PokemonSpecies.Tepig,
  null,
);
new class PigniteForm extends Form {}(
  PokemonForm.Pignite,
  PokemonVariety.Pignite,
  PokemonSpecies.Pignite,
  null,
);
new class EmboarForm extends Form {}(
  PokemonForm.Emboar,
  PokemonVariety.Emboar,
  PokemonSpecies.Emboar,
  null,
);
new class OshawottForm extends Form {}(
  PokemonForm.Oshawott,
  PokemonVariety.Oshawott,
  PokemonSpecies.Oshawott,
  null,
);
new class DewottForm extends Form {}(
  PokemonForm.Dewott,
  PokemonVariety.Dewott,
  PokemonSpecies.Dewott,
  null,
);
new class SamurottForm extends Form {}(
  PokemonForm.Samurott,
  PokemonVariety.Samurott,
  PokemonSpecies.Samurott,
  null,
);
new class SamurottHisuiForm extends Form {}(
  PokemonForm.SamurottHisui,
  PokemonVariety.SamurottHisui,
  PokemonSpecies.Samurott,
  "Hisuian Form",
);
new class PatratForm extends Form {}(
  PokemonForm.Patrat,
  PokemonVariety.Patrat,
  PokemonSpecies.Patrat,
  null,
);
new class WatchogForm extends Form {}(
  PokemonForm.Watchog,
  PokemonVariety.Watchog,
  PokemonSpecies.Watchog,
  null,
);
new class LillipupForm extends Form {}(
  PokemonForm.Lillipup,
  PokemonVariety.Lillipup,
  PokemonSpecies.Lillipup,
  null,
);
new class HerdierForm extends Form {}(
  PokemonForm.Herdier,
  PokemonVariety.Herdier,
  PokemonSpecies.Herdier,
  null,
);
new class StoutlandForm extends Form {}(
  PokemonForm.Stoutland,
  PokemonVariety.Stoutland,
  PokemonSpecies.Stoutland,
  null,
);
new class PurrloinForm extends Form {}(
  PokemonForm.Purrloin,
  PokemonVariety.Purrloin,
  PokemonSpecies.Purrloin,
  null,
);
new class LiepardForm extends Form {}(
  PokemonForm.Liepard,
  PokemonVariety.Liepard,
  PokemonSpecies.Liepard,
  null,
);
new class PansageForm extends Form {}(
  PokemonForm.Pansage,
  PokemonVariety.Pansage,
  PokemonSpecies.Pansage,
  null,
);
new class SimisageForm extends Form {}(
  PokemonForm.Simisage,
  PokemonVariety.Simisage,
  PokemonSpecies.Simisage,
  null,
);
new class PansearForm extends Form {}(
  PokemonForm.Pansear,
  PokemonVariety.Pansear,
  PokemonSpecies.Pansear,
  null,
);
new class SimisearForm extends Form {}(
  PokemonForm.Simisear,
  PokemonVariety.Simisear,
  PokemonSpecies.Simisear,
  null,
);
new class PanpourForm extends Form {}(
  PokemonForm.Panpour,
  PokemonVariety.Panpour,
  PokemonSpecies.Panpour,
  null,
);
new class SimipourForm extends Form {}(
  PokemonForm.Simipour,
  PokemonVariety.Simipour,
  PokemonSpecies.Simipour,
  null,
);
new class MunnaForm extends Form {}(
  PokemonForm.Munna,
  PokemonVariety.Munna,
  PokemonSpecies.Munna,
  null,
);
new class MusharnaForm extends Form {}(
  PokemonForm.Musharna,
  PokemonVariety.Musharna,
  PokemonSpecies.Musharna,
  null,
);
new class PidoveForm extends Form {}(
  PokemonForm.Pidove,
  PokemonVariety.Pidove,
  PokemonSpecies.Pidove,
  null,
);
new class TranquillForm extends Form {}(
  PokemonForm.Tranquill,
  PokemonVariety.Tranquill,
  PokemonSpecies.Tranquill,
  null,
);
new class UnfezantForm extends Form {}(
  PokemonForm.Unfezant,
  PokemonVariety.Unfezant,
  PokemonSpecies.Unfezant,
  null,
);
new class BlitzleForm extends Form {}(
  PokemonForm.Blitzle,
  PokemonVariety.Blitzle,
  PokemonSpecies.Blitzle,
  null,
);
new class ZebstrikaForm extends Form {}(
  PokemonForm.Zebstrika,
  PokemonVariety.Zebstrika,
  PokemonSpecies.Zebstrika,
  null,
);
new class RoggenrolaForm extends Form {}(
  PokemonForm.Roggenrola,
  PokemonVariety.Roggenrola,
  PokemonSpecies.Roggenrola,
  null,
);
new class BoldoreForm extends Form {}(
  PokemonForm.Boldore,
  PokemonVariety.Boldore,
  PokemonSpecies.Boldore,
  null,
);
new class GigalithForm extends Form {}(
  PokemonForm.Gigalith,
  PokemonVariety.Gigalith,
  PokemonSpecies.Gigalith,
  null,
);
new class WoobatForm extends Form {}(
  PokemonForm.Woobat,
  PokemonVariety.Woobat,
  PokemonSpecies.Woobat,
  null,
);
new class SwoobatForm extends Form {}(
  PokemonForm.Swoobat,
  PokemonVariety.Swoobat,
  PokemonSpecies.Swoobat,
  null,
);
new class DrilburForm extends Form {}(
  PokemonForm.Drilbur,
  PokemonVariety.Drilbur,
  PokemonSpecies.Drilbur,
  null,
);
new class ExcadrillForm extends Form {}(
  PokemonForm.Excadrill,
  PokemonVariety.Excadrill,
  PokemonSpecies.Excadrill,
  null,
);
new class AudinoForm extends Form {}(
  PokemonForm.Audino,
  PokemonVariety.Audino,
  PokemonSpecies.Audino,
  null,
);
new class AudinoMegaForm extends Form {}(
  PokemonForm.AudinoMega,
  PokemonVariety.AudinoMega,
  PokemonSpecies.Audino,
  "Mega Audino",
);
new class TimburrForm extends Form {}(
  PokemonForm.Timburr,
  PokemonVariety.Timburr,
  PokemonSpecies.Timburr,
  null,
);
new class GurdurrForm extends Form {}(
  PokemonForm.Gurdurr,
  PokemonVariety.Gurdurr,
  PokemonSpecies.Gurdurr,
  null,
);
new class ConkeldurrForm extends Form {}(
  PokemonForm.Conkeldurr,
  PokemonVariety.Conkeldurr,
  PokemonSpecies.Conkeldurr,
  null,
);
new class TympoleForm extends Form {}(
  PokemonForm.Tympole,
  PokemonVariety.Tympole,
  PokemonSpecies.Tympole,
  null,
);
new class PalpitoadForm extends Form {}(
  PokemonForm.Palpitoad,
  PokemonVariety.Palpitoad,
  PokemonSpecies.Palpitoad,
  null,
);
new class SeismitoadForm extends Form {}(
  PokemonForm.Seismitoad,
  PokemonVariety.Seismitoad,
  PokemonSpecies.Seismitoad,
  null,
);
new class ThrohForm extends Form {}(
  PokemonForm.Throh,
  PokemonVariety.Throh,
  PokemonSpecies.Throh,
  null,
);
new class SawkForm extends Form {}(
  PokemonForm.Sawk,
  PokemonVariety.Sawk,
  PokemonSpecies.Sawk,
  null,
);
new class SewaddleForm extends Form {}(
  PokemonForm.Sewaddle,
  PokemonVariety.Sewaddle,
  PokemonSpecies.Sewaddle,
  null,
);
new class SwadloonForm extends Form {}(
  PokemonForm.Swadloon,
  PokemonVariety.Swadloon,
  PokemonSpecies.Swadloon,
  null,
);
new class LeavannyForm extends Form {}(
  PokemonForm.Leavanny,
  PokemonVariety.Leavanny,
  PokemonSpecies.Leavanny,
  null,
);
new class VenipedeForm extends Form {}(
  PokemonForm.Venipede,
  PokemonVariety.Venipede,
  PokemonSpecies.Venipede,
  null,
);
new class WhirlipedeForm extends Form {}(
  PokemonForm.Whirlipede,
  PokemonVariety.Whirlipede,
  PokemonSpecies.Whirlipede,
  null,
);
new class ScolipedeForm extends Form {}(
  PokemonForm.Scolipede,
  PokemonVariety.Scolipede,
  PokemonSpecies.Scolipede,
  null,
);
new class CottoneeForm extends Form {}(
  PokemonForm.Cottonee,
  PokemonVariety.Cottonee,
  PokemonSpecies.Cottonee,
  null,
);
new class WhimsicottForm extends Form {}(
  PokemonForm.Whimsicott,
  PokemonVariety.Whimsicott,
  PokemonSpecies.Whimsicott,
  null,
);
new class PetililForm extends Form {}(
  PokemonForm.Petilil,
  PokemonVariety.Petilil,
  PokemonSpecies.Petilil,
  null,
);
new class LilligantForm extends Form {}(
  PokemonForm.Lilligant,
  PokemonVariety.Lilligant,
  PokemonSpecies.Lilligant,
  null,
);
new class LilligantHisuiForm extends Form {}(
  PokemonForm.LilligantHisui,
  PokemonVariety.LilligantHisui,
  PokemonSpecies.Lilligant,
  "Hisuian Form",
);
new class BasculinRedStripedForm extends Form {}(
  PokemonForm.BasculinRedStriped,
  PokemonVariety.BasculinRedStriped,
  PokemonSpecies.Basculin,
  "Red-Striped Form",
);
new class BasculinBlueStripedForm extends Form {}(
  PokemonForm.BasculinBlueStriped,
  PokemonVariety.BasculinBlueStriped,
  PokemonSpecies.Basculin,
  "Blue-Striped Form",
);
new class BasculinWhiteStripedForm extends Form {}(
  PokemonForm.BasculinWhiteStriped,
  PokemonVariety.BasculinWhiteStriped,
  PokemonSpecies.Basculin,
  "White-Striped Form",
);
new class SandileForm extends Form {}(
  PokemonForm.Sandile,
  PokemonVariety.Sandile,
  PokemonSpecies.Sandile,
  null,
);
new class KrokorokForm extends Form {}(
  PokemonForm.Krokorok,
  PokemonVariety.Krokorok,
  PokemonSpecies.Krokorok,
  null,
);
new class KrookodileForm extends Form {}(
  PokemonForm.Krookodile,
  PokemonVariety.Krookodile,
  PokemonSpecies.Krookodile,
  null,
);
new class DarumakaForm extends Form {}(
  PokemonForm.Darumaka,
  PokemonVariety.Darumaka,
  PokemonSpecies.Darumaka,
  null,
);
new class DarumakaGalarForm extends Form {}(
  PokemonForm.DarumakaGalar,
  PokemonVariety.DarumakaGalar,
  PokemonSpecies.Darumaka,
  "Galarian Form",
);
new class DarmanitanStandardForm extends Form {}(
  PokemonForm.DarmanitanStandard,
  PokemonVariety.DarmanitanStandard,
  PokemonSpecies.Darmanitan,
  "Standard Mode",
);
new class DarmanitanZenForm extends Form {}(
  PokemonForm.DarmanitanZen,
  PokemonVariety.DarmanitanZen,
  PokemonSpecies.Darmanitan,
  "Zen Mode",
);
new class DarmanitanGalarStandardForm extends Form {}(
  PokemonForm.DarmanitanGalarStandard,
  PokemonVariety.DarmanitanGalarStandard,
  PokemonSpecies.Darmanitan,
  "Galarian Form",
);
new class DarmanitanGalarZenForm extends Form {}(
  PokemonForm.DarmanitanGalarZen,
  PokemonVariety.DarmanitanGalarZen,
  PokemonSpecies.Darmanitan,
  "Zen Mode",
);
new class MaractusForm extends Form {}(
  PokemonForm.Maractus,
  PokemonVariety.Maractus,
  PokemonSpecies.Maractus,
  null,
);
new class DwebbleForm extends Form {}(
  PokemonForm.Dwebble,
  PokemonVariety.Dwebble,
  PokemonSpecies.Dwebble,
  null,
);
new class CrustleForm extends Form {}(
  PokemonForm.Crustle,
  PokemonVariety.Crustle,
  PokemonSpecies.Crustle,
  null,
);
new class ScraggyForm extends Form {}(
  PokemonForm.Scraggy,
  PokemonVariety.Scraggy,
  PokemonSpecies.Scraggy,
  null,
);
new class ScraftyForm extends Form {}(
  PokemonForm.Scrafty,
  PokemonVariety.Scrafty,
  PokemonSpecies.Scrafty,
  null,
);
new class SigilyphForm extends Form {}(
  PokemonForm.Sigilyph,
  PokemonVariety.Sigilyph,
  PokemonSpecies.Sigilyph,
  null,
);
new class YamaskForm extends Form {}(
  PokemonForm.Yamask,
  PokemonVariety.Yamask,
  PokemonSpecies.Yamask,
  null,
);
new class YamaskGalarForm extends Form {}(
  PokemonForm.YamaskGalar,
  PokemonVariety.YamaskGalar,
  PokemonSpecies.Yamask,
  "Galarian Form",
);
new class CofagrigusForm extends Form {}(
  PokemonForm.Cofagrigus,
  PokemonVariety.Cofagrigus,
  PokemonSpecies.Cofagrigus,
  null,
);
new class TirtougaForm extends Form {}(
  PokemonForm.Tirtouga,
  PokemonVariety.Tirtouga,
  PokemonSpecies.Tirtouga,
  null,
);
new class CarracostaForm extends Form {}(
  PokemonForm.Carracosta,
  PokemonVariety.Carracosta,
  PokemonSpecies.Carracosta,
  null,
);
new class ArchenForm extends Form {}(
  PokemonForm.Archen,
  PokemonVariety.Archen,
  PokemonSpecies.Archen,
  null,
);
new class ArcheopsForm extends Form {}(
  PokemonForm.Archeops,
  PokemonVariety.Archeops,
  PokemonSpecies.Archeops,
  null,
);
new class TrubbishForm extends Form {}(
  PokemonForm.Trubbish,
  PokemonVariety.Trubbish,
  PokemonSpecies.Trubbish,
  null,
);
new class GarbodorForm extends Form {}(
  PokemonForm.Garbodor,
  PokemonVariety.Garbodor,
  PokemonSpecies.Garbodor,
  null,
);
new class GarbodorGmaxForm extends Form {}(
  PokemonForm.GarbodorGmax,
  PokemonVariety.GarbodorGmax,
  PokemonSpecies.Garbodor,
  "Gigantamax Form",
);
new class ZoruaForm extends Form {}(
  PokemonForm.Zorua,
  PokemonVariety.Zorua,
  PokemonSpecies.Zorua,
  null,
);
new class ZoruaHisuiForm extends Form {}(
  PokemonForm.ZoruaHisui,
  PokemonVariety.ZoruaHisui,
  PokemonSpecies.Zorua,
  "Hisuian Form",
);
new class ZoroarkForm extends Form {}(
  PokemonForm.Zoroark,
  PokemonVariety.Zoroark,
  PokemonSpecies.Zoroark,
  null,
);
new class ZoroarkHisuiForm extends Form {}(
  PokemonForm.ZoroarkHisui,
  PokemonVariety.ZoroarkHisui,
  PokemonSpecies.Zoroark,
  "Hisuian Form",
);
new class MinccinoForm extends Form {}(
  PokemonForm.Minccino,
  PokemonVariety.Minccino,
  PokemonSpecies.Minccino,
  null,
);
new class CinccinoForm extends Form {}(
  PokemonForm.Cinccino,
  PokemonVariety.Cinccino,
  PokemonSpecies.Cinccino,
  null,
);
new class GothitaForm extends Form {}(
  PokemonForm.Gothita,
  PokemonVariety.Gothita,
  PokemonSpecies.Gothita,
  null,
);
new class GothoritaForm extends Form {}(
  PokemonForm.Gothorita,
  PokemonVariety.Gothorita,
  PokemonSpecies.Gothorita,
  null,
);
new class GothitelleForm extends Form {}(
  PokemonForm.Gothitelle,
  PokemonVariety.Gothitelle,
  PokemonSpecies.Gothitelle,
  null,
);
new class SolosisForm extends Form {}(
  PokemonForm.Solosis,
  PokemonVariety.Solosis,
  PokemonSpecies.Solosis,
  null,
);
new class DuosionForm extends Form {}(
  PokemonForm.Duosion,
  PokemonVariety.Duosion,
  PokemonSpecies.Duosion,
  null,
);
new class ReuniclusForm extends Form {}(
  PokemonForm.Reuniclus,
  PokemonVariety.Reuniclus,
  PokemonSpecies.Reuniclus,
  null,
);
new class DucklettForm extends Form {}(
  PokemonForm.Ducklett,
  PokemonVariety.Ducklett,
  PokemonSpecies.Ducklett,
  null,
);
new class SwannaForm extends Form {}(
  PokemonForm.Swanna,
  PokemonVariety.Swanna,
  PokemonSpecies.Swanna,
  null,
);
new class VanilliteForm extends Form {}(
  PokemonForm.Vanillite,
  PokemonVariety.Vanillite,
  PokemonSpecies.Vanillite,
  null,
);
new class VanillishForm extends Form {}(
  PokemonForm.Vanillish,
  PokemonVariety.Vanillish,
  PokemonSpecies.Vanillish,
  null,
);
new class VanilluxeForm extends Form {}(
  PokemonForm.Vanilluxe,
  PokemonVariety.Vanilluxe,
  PokemonSpecies.Vanilluxe,
  null,
);
new class DeerlingSpringForm extends Form {}(
  PokemonForm.DeerlingSpring,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
  "Spring Form",
);
new class DeerlingSummerForm extends Form {}(
  PokemonForm.DeerlingSummer,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
  "Summer Form",
);
new class DeerlingAutumnForm extends Form {}(
  PokemonForm.DeerlingAutumn,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
  "Autumn Form",
);
new class DeerlingWinterForm extends Form {}(
  PokemonForm.DeerlingWinter,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
  "Winter Form",
);
new class SawsbuckSpringForm extends Form {}(
  PokemonForm.SawsbuckSpring,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
  "Spring Form",
);
new class SawsbuckSummerForm extends Form {}(
  PokemonForm.SawsbuckSummer,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
  "Summer Form",
);
new class SawsbuckAutumnForm extends Form {}(
  PokemonForm.SawsbuckAutumn,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
  "Autumn Form",
);
new class SawsbuckWinterForm extends Form {}(
  PokemonForm.SawsbuckWinter,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
  "Winter Form",
);
new class EmolgaForm extends Form {}(
  PokemonForm.Emolga,
  PokemonVariety.Emolga,
  PokemonSpecies.Emolga,
  null,
);
new class KarrablastForm extends Form {}(
  PokemonForm.Karrablast,
  PokemonVariety.Karrablast,
  PokemonSpecies.Karrablast,
  null,
);
new class EscavalierForm extends Form {}(
  PokemonForm.Escavalier,
  PokemonVariety.Escavalier,
  PokemonSpecies.Escavalier,
  null,
);
new class FoongusForm extends Form {}(
  PokemonForm.Foongus,
  PokemonVariety.Foongus,
  PokemonSpecies.Foongus,
  null,
);
new class AmoongussForm extends Form {}(
  PokemonForm.Amoonguss,
  PokemonVariety.Amoonguss,
  PokemonSpecies.Amoonguss,
  null,
);
new class FrillishForm extends Form {}(
  PokemonForm.Frillish,
  PokemonVariety.Frillish,
  PokemonSpecies.Frillish,
  null,
);
new class JellicentForm extends Form {}(
  PokemonForm.Jellicent,
  PokemonVariety.Jellicent,
  PokemonSpecies.Jellicent,
  null,
);
new class AlomomolaForm extends Form {}(
  PokemonForm.Alomomola,
  PokemonVariety.Alomomola,
  PokemonSpecies.Alomomola,
  null,
);
new class JoltikForm extends Form {}(
  PokemonForm.Joltik,
  PokemonVariety.Joltik,
  PokemonSpecies.Joltik,
  null,
);
new class GalvantulaForm extends Form {}(
  PokemonForm.Galvantula,
  PokemonVariety.Galvantula,
  PokemonSpecies.Galvantula,
  null,
);
new class FerroseedForm extends Form {}(
  PokemonForm.Ferroseed,
  PokemonVariety.Ferroseed,
  PokemonSpecies.Ferroseed,
  null,
);
new class FerrothornForm extends Form {}(
  PokemonForm.Ferrothorn,
  PokemonVariety.Ferrothorn,
  PokemonSpecies.Ferrothorn,
  null,
);
new class KlinkForm extends Form {}(
  PokemonForm.Klink,
  PokemonVariety.Klink,
  PokemonSpecies.Klink,
  null,
);
new class KlangForm extends Form {}(
  PokemonForm.Klang,
  PokemonVariety.Klang,
  PokemonSpecies.Klang,
  null,
);
new class KlinklangForm extends Form {}(
  PokemonForm.Klinklang,
  PokemonVariety.Klinklang,
  PokemonSpecies.Klinklang,
  null,
);
new class TynamoForm extends Form {}(
  PokemonForm.Tynamo,
  PokemonVariety.Tynamo,
  PokemonSpecies.Tynamo,
  null,
);
new class EelektrikForm extends Form {}(
  PokemonForm.Eelektrik,
  PokemonVariety.Eelektrik,
  PokemonSpecies.Eelektrik,
  null,
);
new class EelektrossForm extends Form {}(
  PokemonForm.Eelektross,
  PokemonVariety.Eelektross,
  PokemonSpecies.Eelektross,
  null,
);
new class ElgyemForm extends Form {}(
  PokemonForm.Elgyem,
  PokemonVariety.Elgyem,
  PokemonSpecies.Elgyem,
  null,
);
new class BeheeyemForm extends Form {}(
  PokemonForm.Beheeyem,
  PokemonVariety.Beheeyem,
  PokemonSpecies.Beheeyem,
  null,
);
new class LitwickForm extends Form {}(
  PokemonForm.Litwick,
  PokemonVariety.Litwick,
  PokemonSpecies.Litwick,
  null,
);
new class LampentForm extends Form {}(
  PokemonForm.Lampent,
  PokemonVariety.Lampent,
  PokemonSpecies.Lampent,
  null,
);
new class ChandelureForm extends Form {}(
  PokemonForm.Chandelure,
  PokemonVariety.Chandelure,
  PokemonSpecies.Chandelure,
  null,
);
new class AxewForm extends Form {}(
  PokemonForm.Axew,
  PokemonVariety.Axew,
  PokemonSpecies.Axew,
  null,
);
new class FraxureForm extends Form {}(
  PokemonForm.Fraxure,
  PokemonVariety.Fraxure,
  PokemonSpecies.Fraxure,
  null,
);
new class HaxorusForm extends Form {}(
  PokemonForm.Haxorus,
  PokemonVariety.Haxorus,
  PokemonSpecies.Haxorus,
  null,
);
new class CubchooForm extends Form {}(
  PokemonForm.Cubchoo,
  PokemonVariety.Cubchoo,
  PokemonSpecies.Cubchoo,
  null,
);
new class BearticForm extends Form {}(
  PokemonForm.Beartic,
  PokemonVariety.Beartic,
  PokemonSpecies.Beartic,
  null,
);
new class CryogonalForm extends Form {}(
  PokemonForm.Cryogonal,
  PokemonVariety.Cryogonal,
  PokemonSpecies.Cryogonal,
  null,
);
new class ShelmetForm extends Form {}(
  PokemonForm.Shelmet,
  PokemonVariety.Shelmet,
  PokemonSpecies.Shelmet,
  null,
);
new class AccelgorForm extends Form {}(
  PokemonForm.Accelgor,
  PokemonVariety.Accelgor,
  PokemonSpecies.Accelgor,
  null,
);
new class StunfiskForm extends Form {}(
  PokemonForm.Stunfisk,
  PokemonVariety.Stunfisk,
  PokemonSpecies.Stunfisk,
  null,
);
new class StunfiskGalarForm extends Form {}(
  PokemonForm.StunfiskGalar,
  PokemonVariety.StunfiskGalar,
  PokemonSpecies.Stunfisk,
  "Galarian Form",
);
new class MienfooForm extends Form {}(
  PokemonForm.Mienfoo,
  PokemonVariety.Mienfoo,
  PokemonSpecies.Mienfoo,
  null,
);
new class MienshaoForm extends Form {}(
  PokemonForm.Mienshao,
  PokemonVariety.Mienshao,
  PokemonSpecies.Mienshao,
  null,
);
new class DruddigonForm extends Form {}(
  PokemonForm.Druddigon,
  PokemonVariety.Druddigon,
  PokemonSpecies.Druddigon,
  null,
);
new class GolettForm extends Form {}(
  PokemonForm.Golett,
  PokemonVariety.Golett,
  PokemonSpecies.Golett,
  null,
);
new class GolurkForm extends Form {}(
  PokemonForm.Golurk,
  PokemonVariety.Golurk,
  PokemonSpecies.Golurk,
  null,
);
new class PawniardForm extends Form {}(
  PokemonForm.Pawniard,
  PokemonVariety.Pawniard,
  PokemonSpecies.Pawniard,
  null,
);
new class BisharpForm extends Form {}(
  PokemonForm.Bisharp,
  PokemonVariety.Bisharp,
  PokemonSpecies.Bisharp,
  null,
);
new class BouffalantForm extends Form {}(
  PokemonForm.Bouffalant,
  PokemonVariety.Bouffalant,
  PokemonSpecies.Bouffalant,
  null,
);
new class RuffletForm extends Form {}(
  PokemonForm.Rufflet,
  PokemonVariety.Rufflet,
  PokemonSpecies.Rufflet,
  null,
);
new class BraviaryForm extends Form {}(
  PokemonForm.Braviary,
  PokemonVariety.Braviary,
  PokemonSpecies.Braviary,
  null,
);
new class BraviaryHisuiForm extends Form {}(
  PokemonForm.BraviaryHisui,
  PokemonVariety.BraviaryHisui,
  PokemonSpecies.Braviary,
  "Hisuian Form",
);
new class VullabyForm extends Form {}(
  PokemonForm.Vullaby,
  PokemonVariety.Vullaby,
  PokemonSpecies.Vullaby,
  null,
);
new class MandibuzzForm extends Form {}(
  PokemonForm.Mandibuzz,
  PokemonVariety.Mandibuzz,
  PokemonSpecies.Mandibuzz,
  null,
);
new class HeatmorForm extends Form {}(
  PokemonForm.Heatmor,
  PokemonVariety.Heatmor,
  PokemonSpecies.Heatmor,
  null,
);
new class DurantForm extends Form {}(
  PokemonForm.Durant,
  PokemonVariety.Durant,
  PokemonSpecies.Durant,
  null,
);
new class DeinoForm extends Form {}(
  PokemonForm.Deino,
  PokemonVariety.Deino,
  PokemonSpecies.Deino,
  null,
);
new class ZweilousForm extends Form {}(
  PokemonForm.Zweilous,
  PokemonVariety.Zweilous,
  PokemonSpecies.Zweilous,
  null,
);
new class HydreigonForm extends Form {}(
  PokemonForm.Hydreigon,
  PokemonVariety.Hydreigon,
  PokemonSpecies.Hydreigon,
  null,
);
new class LarvestaForm extends Form {}(
  PokemonForm.Larvesta,
  PokemonVariety.Larvesta,
  PokemonSpecies.Larvesta,
  null,
);
new class VolcaronaForm extends Form {}(
  PokemonForm.Volcarona,
  PokemonVariety.Volcarona,
  PokemonSpecies.Volcarona,
  null,
);
new class CobalionForm extends Form {}(
  PokemonForm.Cobalion,
  PokemonVariety.Cobalion,
  PokemonSpecies.Cobalion,
  null,
);
new class TerrakionForm extends Form {}(
  PokemonForm.Terrakion,
  PokemonVariety.Terrakion,
  PokemonSpecies.Terrakion,
  null,
);
new class VirizionForm extends Form {}(
  PokemonForm.Virizion,
  PokemonVariety.Virizion,
  PokemonSpecies.Virizion,
  null,
);
new class TornadusIncarnateForm extends Form {}(
  PokemonForm.TornadusIncarnate,
  PokemonVariety.TornadusIncarnate,
  PokemonSpecies.Tornadus,
  "Incarnate Forme",
);
new class TornadusTherianForm extends Form {}(
  PokemonForm.TornadusTherian,
  PokemonVariety.TornadusTherian,
  PokemonSpecies.Tornadus,
  "Therian Forme",
);
new class ThundurusIncarnateForm extends Form {}(
  PokemonForm.ThundurusIncarnate,
  PokemonVariety.ThundurusIncarnate,
  PokemonSpecies.Thundurus,
  "Incarnate Forme",
);
new class ThundurusTherianForm extends Form {}(
  PokemonForm.ThundurusTherian,
  PokemonVariety.ThundurusTherian,
  PokemonSpecies.Thundurus,
  "Therian Forme",
);
new class ReshiramForm extends Form {}(
  PokemonForm.Reshiram,
  PokemonVariety.Reshiram,
  PokemonSpecies.Reshiram,
  null,
);
new class ZekromForm extends Form {}(
  PokemonForm.Zekrom,
  PokemonVariety.Zekrom,
  PokemonSpecies.Zekrom,
  null,
);
new class LandorusIncarnateForm extends Form {}(
  PokemonForm.LandorusIncarnate,
  PokemonVariety.LandorusIncarnate,
  PokemonSpecies.Landorus,
  "Incarnate Forme",
);
new class LandorusTherianForm extends Form {}(
  PokemonForm.LandorusTherian,
  PokemonVariety.LandorusTherian,
  PokemonSpecies.Landorus,
  "Therian Forme",
);
new class KyuremForm extends Form {}(
  PokemonForm.Kyurem,
  PokemonVariety.Kyurem,
  PokemonSpecies.Kyurem,
  "Kyurem",
);
new class KyuremBlackForm extends Form {}(
  PokemonForm.KyuremBlack,
  PokemonVariety.KyuremBlack,
  PokemonSpecies.Kyurem,
  "Black Kyurem",
);
new class KyuremWhiteForm extends Form {}(
  PokemonForm.KyuremWhite,
  PokemonVariety.KyuremWhite,
  PokemonSpecies.Kyurem,
  "White Kyurem",
);
new class KeldeoOrdinaryForm extends Form {}(
  PokemonForm.KeldeoOrdinary,
  PokemonVariety.KeldeoOrdinary,
  PokemonSpecies.Keldeo,
  "Ordinary Form",
);
new class KeldeoResoluteForm extends Form {}(
  PokemonForm.KeldeoResolute,
  PokemonVariety.KeldeoResolute,
  PokemonSpecies.Keldeo,
  "Resolute Form",
);
new class MeloettaAriaForm extends Form {}(
  PokemonForm.MeloettaAria,
  PokemonVariety.MeloettaAria,
  PokemonSpecies.Meloetta,
  "Aria Forme",
);
new class MeloettaPirouetteForm extends Form {}(
  PokemonForm.MeloettaPirouette,
  PokemonVariety.MeloettaPirouette,
  PokemonSpecies.Meloetta,
  "Pirouette Forme",
);
new class GenesectForm extends Form {}(
  PokemonForm.Genesect,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  null,
);
new class GenesectDouseForm extends Form {}(
  PokemonForm.GenesectDouse,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  "Douse Drive",
);
new class GenesectShockForm extends Form {}(
  PokemonForm.GenesectShock,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  "Shock Drive",
);
new class GenesectBurnForm extends Form {}(
  PokemonForm.GenesectBurn,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  "Burn Drive",
);
new class GenesectChillForm extends Form {}(
  PokemonForm.GenesectChill,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  "Chill Drive",
);
new class ChespinForm extends Form {}(
  PokemonForm.Chespin,
  PokemonVariety.Chespin,
  PokemonSpecies.Chespin,
  null,
);
new class QuilladinForm extends Form {}(
  PokemonForm.Quilladin,
  PokemonVariety.Quilladin,
  PokemonSpecies.Quilladin,
  null,
);
new class ChesnaughtForm extends Form {}(
  PokemonForm.Chesnaught,
  PokemonVariety.Chesnaught,
  PokemonSpecies.Chesnaught,
  null,
);
new class FennekinForm extends Form {}(
  PokemonForm.Fennekin,
  PokemonVariety.Fennekin,
  PokemonSpecies.Fennekin,
  null,
);
new class BraixenForm extends Form {}(
  PokemonForm.Braixen,
  PokemonVariety.Braixen,
  PokemonSpecies.Braixen,
  null,
);
new class DelphoxForm extends Form {}(
  PokemonForm.Delphox,
  PokemonVariety.Delphox,
  PokemonSpecies.Delphox,
  null,
);
new class FroakieForm extends Form {}(
  PokemonForm.Froakie,
  PokemonVariety.Froakie,
  PokemonSpecies.Froakie,
  null,
);
new class FrogadierForm extends Form {}(
  PokemonForm.Frogadier,
  PokemonVariety.Frogadier,
  PokemonSpecies.Frogadier,
  null,
);
new class GreninjaForm extends Form {}(
  PokemonForm.Greninja,
  PokemonVariety.Greninja,
  PokemonSpecies.Greninja,
  null,
);
new class GreninjaBattleBondForm extends Form {}(
  PokemonForm.GreninjaBattleBond,
  PokemonVariety.GreninjaBattleBond,
  PokemonSpecies.Greninja,
  null,
);
new class GreninjaAshForm extends Form {}(
  PokemonForm.GreninjaAsh,
  PokemonVariety.GreninjaAsh,
  PokemonSpecies.Greninja,
  "Ash-Greninja",
);
new class BunnelbyForm extends Form {}(
  PokemonForm.Bunnelby,
  PokemonVariety.Bunnelby,
  PokemonSpecies.Bunnelby,
  null,
);
new class DiggersbyForm extends Form {}(
  PokemonForm.Diggersby,
  PokemonVariety.Diggersby,
  PokemonSpecies.Diggersby,
  null,
);
new class FletchlingForm extends Form {}(
  PokemonForm.Fletchling,
  PokemonVariety.Fletchling,
  PokemonSpecies.Fletchling,
  null,
);
new class FletchinderForm extends Form {}(
  PokemonForm.Fletchinder,
  PokemonVariety.Fletchinder,
  PokemonSpecies.Fletchinder,
  null,
);
new class TalonflameForm extends Form {}(
  PokemonForm.Talonflame,
  PokemonVariety.Talonflame,
  PokemonSpecies.Talonflame,
  null,
);
new class ScatterbugIcySnowForm extends Form {}(
  PokemonForm.ScatterbugIcySnow,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugPolarForm extends Form {}(
  PokemonForm.ScatterbugPolar,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugTundraForm extends Form {}(
  PokemonForm.ScatterbugTundra,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugContinentalForm extends Form {}(
  PokemonForm.ScatterbugContinental,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugGardenForm extends Form {}(
  PokemonForm.ScatterbugGarden,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugElegantForm extends Form {}(
  PokemonForm.ScatterbugElegant,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugMeadowForm extends Form {}(
  PokemonForm.ScatterbugMeadow,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugModernForm extends Form {}(
  PokemonForm.ScatterbugModern,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugMarineForm extends Form {}(
  PokemonForm.ScatterbugMarine,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugArchipelagoForm extends Form {}(
  PokemonForm.ScatterbugArchipelago,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugHighPlainsForm extends Form {}(
  PokemonForm.ScatterbugHighPlains,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugSandstormForm extends Form {}(
  PokemonForm.ScatterbugSandstorm,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugRiverForm extends Form {}(
  PokemonForm.ScatterbugRiver,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugMonsoonForm extends Form {}(
  PokemonForm.ScatterbugMonsoon,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugSavannaForm extends Form {}(
  PokemonForm.ScatterbugSavanna,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugSunForm extends Form {}(
  PokemonForm.ScatterbugSun,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugOceanForm extends Form {}(
  PokemonForm.ScatterbugOcean,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugJungleForm extends Form {}(
  PokemonForm.ScatterbugJungle,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugFancyForm extends Form {}(
  PokemonForm.ScatterbugFancy,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class ScatterbugPokeBallForm extends Form {}(
  PokemonForm.ScatterbugPokeBall,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
);
new class SpewpaIcySnowForm extends Form {}(
  PokemonForm.SpewpaIcySnow,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaPolarForm extends Form {}(
  PokemonForm.SpewpaPolar,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaTundraForm extends Form {}(
  PokemonForm.SpewpaTundra,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaContinentalForm extends Form {}(
  PokemonForm.SpewpaContinental,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaGardenForm extends Form {}(
  PokemonForm.SpewpaGarden,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaElegantForm extends Form {}(
  PokemonForm.SpewpaElegant,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaMeadowForm extends Form {}(
  PokemonForm.SpewpaMeadow,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaModernForm extends Form {}(
  PokemonForm.SpewpaModern,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaMarineForm extends Form {}(
  PokemonForm.SpewpaMarine,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaArchipelagoForm extends Form {}(
  PokemonForm.SpewpaArchipelago,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaHighPlainsForm extends Form {}(
  PokemonForm.SpewpaHighPlains,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaSandstormForm extends Form {}(
  PokemonForm.SpewpaSandstorm,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaRiverForm extends Form {}(
  PokemonForm.SpewpaRiver,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaMonsoonForm extends Form {}(
  PokemonForm.SpewpaMonsoon,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaSavannaForm extends Form {}(
  PokemonForm.SpewpaSavanna,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaSunForm extends Form {}(
  PokemonForm.SpewpaSun,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaOceanForm extends Form {}(
  PokemonForm.SpewpaOcean,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaJungleForm extends Form {}(
  PokemonForm.SpewpaJungle,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaFancyForm extends Form {}(
  PokemonForm.SpewpaFancy,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class SpewpaPokeBallForm extends Form {}(
  PokemonForm.SpewpaPokeBall,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
);
new class VivillonMeadowForm extends Form {}(
  PokemonForm.VivillonMeadow,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Meadow Pattern",
);
new class VivillonIcySnowForm extends Form {}(
  PokemonForm.VivillonIcySnow,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Icy Snow Pattern",
);
new class VivillonPolarForm extends Form {}(
  PokemonForm.VivillonPolar,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Polar Pattern",
);
new class VivillonTundraForm extends Form {}(
  PokemonForm.VivillonTundra,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Tundra Pattern",
);
new class VivillonContinentalForm extends Form {}(
  PokemonForm.VivillonContinental,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Continental Pattern",
);
new class VivillonGardenForm extends Form {}(
  PokemonForm.VivillonGarden,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Garden Pattern",
);
new class VivillonElegantForm extends Form {}(
  PokemonForm.VivillonElegant,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Elegant Pattern",
);
new class VivillonModernForm extends Form {}(
  PokemonForm.VivillonModern,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Modern Pattern",
);
new class VivillonMarineForm extends Form {}(
  PokemonForm.VivillonMarine,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Marine Pattern",
);
new class VivillonArchipelagoForm extends Form {}(
  PokemonForm.VivillonArchipelago,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Archipelago Pattern",
);
new class VivillonHighPlainsForm extends Form {}(
  PokemonForm.VivillonHighPlains,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "High Plains Pattern",
);
new class VivillonSandstormForm extends Form {}(
  PokemonForm.VivillonSandstorm,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Sandstorm Pattern",
);
new class VivillonRiverForm extends Form {}(
  PokemonForm.VivillonRiver,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "River Pattern",
);
new class VivillonMonsoonForm extends Form {}(
  PokemonForm.VivillonMonsoon,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Monsoon Pattern",
);
new class VivillonSavannaForm extends Form {}(
  PokemonForm.VivillonSavanna,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Savanna Pattern",
);
new class VivillonSunForm extends Form {}(
  PokemonForm.VivillonSun,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Sun Pattern",
);
new class VivillonOceanForm extends Form {}(
  PokemonForm.VivillonOcean,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Ocean Pattern",
);
new class VivillonJungleForm extends Form {}(
  PokemonForm.VivillonJungle,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Jungle Pattern",
);
new class VivillonFancyForm extends Form {}(
  PokemonForm.VivillonFancy,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Fancy Pattern",
);
new class VivillonPokeBallForm extends Form {}(
  PokemonForm.VivillonPokeBall,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Poké Ball Pattern",
);
new class LitleoForm extends Form {}(
  PokemonForm.Litleo,
  PokemonVariety.Litleo,
  PokemonSpecies.Litleo,
  null,
);
new class PyroarForm extends Form {}(
  PokemonForm.Pyroar,
  PokemonVariety.Pyroar,
  PokemonSpecies.Pyroar,
  null,
);
new class FlabebeRedForm extends Form {}(
  PokemonForm.FlabebeRed,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  "Red Flower",
);
new class FlabebeYellowForm extends Form {}(
  PokemonForm.FlabebeYellow,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  "Yellow Flower",
);
new class FlabebeOrangeForm extends Form {}(
  PokemonForm.FlabebeOrange,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  "Orange Flower",
);
new class FlabebeBlueForm extends Form {}(
  PokemonForm.FlabebeBlue,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  "Blue Flower",
);
new class FlabebeWhiteForm extends Form {}(
  PokemonForm.FlabebeWhite,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  "White Flower",
);
new class FloetteRedForm extends Form {}(
  PokemonForm.FloetteRed,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  "Red Flower",
);
new class FloetteYellowForm extends Form {}(
  PokemonForm.FloetteYellow,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  "Yellow Flower",
);
new class FloetteOrangeForm extends Form {}(
  PokemonForm.FloetteOrange,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  "Orange Flower",
);
new class FloetteBlueForm extends Form {}(
  PokemonForm.FloetteBlue,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  "Blue Flower",
);
new class FloetteWhiteForm extends Form {}(
  PokemonForm.FloetteWhite,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  "White Flower",
);
new class FloetteEternalForm extends Form {}(
  PokemonForm.FloetteEternal,
  PokemonVariety.FloetteEternal,
  PokemonSpecies.Floette,
  "Eternal Flower",
);
new class FlorgesRedForm extends Form {}(
  PokemonForm.FlorgesRed,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  "Red Flower",
);
new class FlorgesYellowForm extends Form {}(
  PokemonForm.FlorgesYellow,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  "Yellow Flower",
);
new class FlorgesOrangeForm extends Form {}(
  PokemonForm.FlorgesOrange,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  "Orange Flower",
);
new class FlorgesBlueForm extends Form {}(
  PokemonForm.FlorgesBlue,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  "Blue Flower",
);
new class FlorgesWhiteForm extends Form {}(
  PokemonForm.FlorgesWhite,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  "White Flower",
);
new class SkiddoForm extends Form {}(
  PokemonForm.Skiddo,
  PokemonVariety.Skiddo,
  PokemonSpecies.Skiddo,
  null,
);
new class GogoatForm extends Form {}(
  PokemonForm.Gogoat,
  PokemonVariety.Gogoat,
  PokemonSpecies.Gogoat,
  null,
);
new class PanchamForm extends Form {}(
  PokemonForm.Pancham,
  PokemonVariety.Pancham,
  PokemonSpecies.Pancham,
  null,
);
new class PangoroForm extends Form {}(
  PokemonForm.Pangoro,
  PokemonVariety.Pangoro,
  PokemonSpecies.Pangoro,
  null,
);
new class FurfrouNaturalForm extends Form {}(
  PokemonForm.FurfrouNatural,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Natural Form",
);
new class FurfrouHeartForm extends Form {}(
  PokemonForm.FurfrouHeart,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Heart Trim",
);
new class FurfrouStarForm extends Form {}(
  PokemonForm.FurfrouStar,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Star Trim",
);
new class FurfrouDiamondForm extends Form {}(
  PokemonForm.FurfrouDiamond,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Diamond Trim",
);
new class FurfrouDebutanteForm extends Form {}(
  PokemonForm.FurfrouDebutante,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Debutante Trim",
);
new class FurfrouMatronForm extends Form {}(
  PokemonForm.FurfrouMatron,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Matron Trim",
);
new class FurfrouDandyForm extends Form {}(
  PokemonForm.FurfrouDandy,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Dandy Trim",
);
new class FurfrouLaReineForm extends Form {}(
  PokemonForm.FurfrouLaReine,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "La Reine Trim",
);
new class FurfrouKabukiForm extends Form {}(
  PokemonForm.FurfrouKabuki,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Kabuki Trim",
);
new class FurfrouPharaohForm extends Form {}(
  PokemonForm.FurfrouPharaoh,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Pharaoh Trim",
);
new class EspurrForm extends Form {}(
  PokemonForm.Espurr,
  PokemonVariety.Espurr,
  PokemonSpecies.Espurr,
  null,
);
new class MeowsticMaleForm extends Form {}(
  PokemonForm.MeowsticMale,
  PokemonVariety.MeowsticMale,
  PokemonSpecies.Meowstic,
  "Male",
);
new class MeowsticFemaleForm extends Form {}(
  PokemonForm.MeowsticFemale,
  PokemonVariety.MeowsticFemale,
  PokemonSpecies.Meowstic,
  "Female",
);
new class HonedgeForm extends Form {}(
  PokemonForm.Honedge,
  PokemonVariety.Honedge,
  PokemonSpecies.Honedge,
  null,
);
new class DoubladeForm extends Form {}(
  PokemonForm.Doublade,
  PokemonVariety.Doublade,
  PokemonSpecies.Doublade,
  null,
);
new class AegislashShieldForm extends Form {}(
  PokemonForm.AegislashShield,
  PokemonVariety.AegislashShield,
  PokemonSpecies.Aegislash,
  "Shield Forme",
);
new class AegislashBladeForm extends Form {}(
  PokemonForm.AegislashBlade,
  PokemonVariety.AegislashBlade,
  PokemonSpecies.Aegislash,
  "Blade Forme",
);
new class SpritzeeForm extends Form {}(
  PokemonForm.Spritzee,
  PokemonVariety.Spritzee,
  PokemonSpecies.Spritzee,
  null,
);
new class AromatisseForm extends Form {}(
  PokemonForm.Aromatisse,
  PokemonVariety.Aromatisse,
  PokemonSpecies.Aromatisse,
  null,
);
new class SwirlixForm extends Form {}(
  PokemonForm.Swirlix,
  PokemonVariety.Swirlix,
  PokemonSpecies.Swirlix,
  null,
);
new class SlurpuffForm extends Form {}(
  PokemonForm.Slurpuff,
  PokemonVariety.Slurpuff,
  PokemonSpecies.Slurpuff,
  null,
);
new class InkayForm extends Form {}(
  PokemonForm.Inkay,
  PokemonVariety.Inkay,
  PokemonSpecies.Inkay,
  null,
);
new class MalamarForm extends Form {}(
  PokemonForm.Malamar,
  PokemonVariety.Malamar,
  PokemonSpecies.Malamar,
  null,
);
new class BinacleForm extends Form {}(
  PokemonForm.Binacle,
  PokemonVariety.Binacle,
  PokemonSpecies.Binacle,
  null,
);
new class BarbaracleForm extends Form {}(
  PokemonForm.Barbaracle,
  PokemonVariety.Barbaracle,
  PokemonSpecies.Barbaracle,
  null,
);
new class SkrelpForm extends Form {}(
  PokemonForm.Skrelp,
  PokemonVariety.Skrelp,
  PokemonSpecies.Skrelp,
  null,
);
new class DragalgeForm extends Form {}(
  PokemonForm.Dragalge,
  PokemonVariety.Dragalge,
  PokemonSpecies.Dragalge,
  null,
);
new class ClauncherForm extends Form {}(
  PokemonForm.Clauncher,
  PokemonVariety.Clauncher,
  PokemonSpecies.Clauncher,
  null,
);
new class ClawitzerForm extends Form {}(
  PokemonForm.Clawitzer,
  PokemonVariety.Clawitzer,
  PokemonSpecies.Clawitzer,
  null,
);
new class HelioptileForm extends Form {}(
  PokemonForm.Helioptile,
  PokemonVariety.Helioptile,
  PokemonSpecies.Helioptile,
  null,
);
new class HelioliskForm extends Form {}(
  PokemonForm.Heliolisk,
  PokemonVariety.Heliolisk,
  PokemonSpecies.Heliolisk,
  null,
);
new class TyruntForm extends Form {}(
  PokemonForm.Tyrunt,
  PokemonVariety.Tyrunt,
  PokemonSpecies.Tyrunt,
  null,
);
new class TyrantrumForm extends Form {}(
  PokemonForm.Tyrantrum,
  PokemonVariety.Tyrantrum,
  PokemonSpecies.Tyrantrum,
  null,
);
new class AmauraForm extends Form {}(
  PokemonForm.Amaura,
  PokemonVariety.Amaura,
  PokemonSpecies.Amaura,
  null,
);
new class AurorusForm extends Form {}(
  PokemonForm.Aurorus,
  PokemonVariety.Aurorus,
  PokemonSpecies.Aurorus,
  null,
);
new class SylveonForm extends Form {}(
  PokemonForm.Sylveon,
  PokemonVariety.Sylveon,
  PokemonSpecies.Sylveon,
  null,
);
new class HawluchaForm extends Form {}(
  PokemonForm.Hawlucha,
  PokemonVariety.Hawlucha,
  PokemonSpecies.Hawlucha,
  null,
);
new class DedenneForm extends Form {}(
  PokemonForm.Dedenne,
  PokemonVariety.Dedenne,
  PokemonSpecies.Dedenne,
  null,
);
new class CarbinkForm extends Form {}(
  PokemonForm.Carbink,
  PokemonVariety.Carbink,
  PokemonSpecies.Carbink,
  null,
);
new class GoomyForm extends Form {}(
  PokemonForm.Goomy,
  PokemonVariety.Goomy,
  PokemonSpecies.Goomy,
  null,
);
new class SliggooForm extends Form {}(
  PokemonForm.Sliggoo,
  PokemonVariety.Sliggoo,
  PokemonSpecies.Sliggoo,
  null,
);
new class SliggooHisuiForm extends Form {}(
  PokemonForm.SliggooHisui,
  PokemonVariety.SliggooHisui,
  PokemonSpecies.Sliggoo,
  "Hisuian Form",
);
new class GoodraForm extends Form {}(
  PokemonForm.Goodra,
  PokemonVariety.Goodra,
  PokemonSpecies.Goodra,
  null,
);
new class GoodraHisuiForm extends Form {}(
  PokemonForm.GoodraHisui,
  PokemonVariety.GoodraHisui,
  PokemonSpecies.Goodra,
  "Hisuian Form",
);
new class KlefkiForm extends Form {}(
  PokemonForm.Klefki,
  PokemonVariety.Klefki,
  PokemonSpecies.Klefki,
  null,
);
new class PhantumpForm extends Form {}(
  PokemonForm.Phantump,
  PokemonVariety.Phantump,
  PokemonSpecies.Phantump,
  null,
);
new class TrevenantForm extends Form {}(
  PokemonForm.Trevenant,
  PokemonVariety.Trevenant,
  PokemonSpecies.Trevenant,
  null,
);
new class PumpkabooAverageForm extends Form {}(
  PokemonForm.PumpkabooAverage,
  PokemonVariety.PumpkabooAverage,
  PokemonSpecies.Pumpkaboo,
  "Average Size",
);
new class PumpkabooSmallForm extends Form {}(
  PokemonForm.PumpkabooSmall,
  PokemonVariety.PumpkabooSmall,
  PokemonSpecies.Pumpkaboo,
  "Small Size",
);
new class PumpkabooLargeForm extends Form {}(
  PokemonForm.PumpkabooLarge,
  PokemonVariety.PumpkabooLarge,
  PokemonSpecies.Pumpkaboo,
  "Large Size",
);
new class PumpkabooSuperForm extends Form {}(
  PokemonForm.PumpkabooSuper,
  PokemonVariety.PumpkabooSuper,
  PokemonSpecies.Pumpkaboo,
  "Super Size",
);
new class GourgeistAverageForm extends Form {}(
  PokemonForm.GourgeistAverage,
  PokemonVariety.GourgeistAverage,
  PokemonSpecies.Gourgeist,
  "Average Size",
);
new class GourgeistSmallForm extends Form {}(
  PokemonForm.GourgeistSmall,
  PokemonVariety.GourgeistSmall,
  PokemonSpecies.Gourgeist,
  "Small Size",
);
new class GourgeistLargeForm extends Form {}(
  PokemonForm.GourgeistLarge,
  PokemonVariety.GourgeistLarge,
  PokemonSpecies.Gourgeist,
  "Large Size",
);
new class GourgeistSuperForm extends Form {}(
  PokemonForm.GourgeistSuper,
  PokemonVariety.GourgeistSuper,
  PokemonSpecies.Gourgeist,
  "Super Size",
);
new class BergmiteForm extends Form {}(
  PokemonForm.Bergmite,
  PokemonVariety.Bergmite,
  PokemonSpecies.Bergmite,
  null,
);
new class AvaluggForm extends Form {}(
  PokemonForm.Avalugg,
  PokemonVariety.Avalugg,
  PokemonSpecies.Avalugg,
  null,
);
new class AvaluggHisuiForm extends Form {}(
  PokemonForm.AvaluggHisui,
  PokemonVariety.AvaluggHisui,
  PokemonSpecies.Avalugg,
  "Hisuian Form",
);
new class NoibatForm extends Form {}(
  PokemonForm.Noibat,
  PokemonVariety.Noibat,
  PokemonSpecies.Noibat,
  null,
);
new class NoivernForm extends Form {}(
  PokemonForm.Noivern,
  PokemonVariety.Noivern,
  PokemonSpecies.Noivern,
  null,
);
new class XerneasActiveForm extends Form {}(
  PokemonForm.XerneasActive,
  PokemonVariety.Xerneas,
  PokemonSpecies.Xerneas,
  "Active Mode",
);
new class XerneasNeutralForm extends Form {}(
  PokemonForm.XerneasNeutral,
  PokemonVariety.Xerneas,
  PokemonSpecies.Xerneas,
  "Neutral Mode",
);
new class YveltalForm extends Form {}(
  PokemonForm.Yveltal,
  PokemonVariety.Yveltal,
  PokemonSpecies.Yveltal,
  null,
);
new class Zygarde50Form extends Form {}(
  PokemonForm.Zygarde50,
  PokemonVariety.Zygarde50,
  PokemonSpecies.Zygarde,
  "50% Forme",
);
new class Zygarde10PowerConstructForm extends Form {}(
  PokemonForm.Zygarde10PowerConstruct,
  PokemonVariety.Zygarde10PowerConstruct,
  PokemonSpecies.Zygarde,
  "10% Forme",
);
new class Zygarde50PowerConstructForm extends Form {}(
  PokemonForm.Zygarde50PowerConstruct,
  PokemonVariety.Zygarde50PowerConstruct,
  PokemonSpecies.Zygarde,
  "50% Forme",
);
new class ZygardeCompleteForm extends Form {}(
  PokemonForm.ZygardeComplete,
  PokemonVariety.ZygardeComplete,
  PokemonSpecies.Zygarde,
  "Complete Forme",
);
new class Zygarde10Form extends Form {}(
  PokemonForm.Zygarde10,
  PokemonVariety.Zygarde10,
  PokemonSpecies.Zygarde,
  "10% Forme",
);
new class DiancieForm extends Form {}(
  PokemonForm.Diancie,
  PokemonVariety.Diancie,
  PokemonSpecies.Diancie,
  null,
);
new class DiancieMegaForm extends Form {}(
  PokemonForm.DiancieMega,
  PokemonVariety.DiancieMega,
  PokemonSpecies.Diancie,
  "Mega Diancie",
);
new class HoopaForm extends Form {}(
  PokemonForm.Hoopa,
  PokemonVariety.Hoopa,
  PokemonSpecies.Hoopa,
  "Hoopa Confined",
);
new class HoopaUnboundForm extends Form {}(
  PokemonForm.HoopaUnbound,
  PokemonVariety.HoopaUnbound,
  PokemonSpecies.Hoopa,
  "Hoopa Unbound",
);
new class VolcanionForm extends Form {}(
  PokemonForm.Volcanion,
  PokemonVariety.Volcanion,
  PokemonSpecies.Volcanion,
  null,
);
new class RowletForm extends Form {}(
  PokemonForm.Rowlet,
  PokemonVariety.Rowlet,
  PokemonSpecies.Rowlet,
  null,
);
new class DartrixForm extends Form {}(
  PokemonForm.Dartrix,
  PokemonVariety.Dartrix,
  PokemonSpecies.Dartrix,
  null,
);
new class DecidueyeForm extends Form {}(
  PokemonForm.Decidueye,
  PokemonVariety.Decidueye,
  PokemonSpecies.Decidueye,
  null,
);
new class DecidueyeHisuiForm extends Form {}(
  PokemonForm.DecidueyeHisui,
  PokemonVariety.DecidueyeHisui,
  PokemonSpecies.Decidueye,
  "Hisuian Form",
);
new class LittenForm extends Form {}(
  PokemonForm.Litten,
  PokemonVariety.Litten,
  PokemonSpecies.Litten,
  null,
);
new class TorracatForm extends Form {}(
  PokemonForm.Torracat,
  PokemonVariety.Torracat,
  PokemonSpecies.Torracat,
  null,
);
new class IncineroarForm extends Form {}(
  PokemonForm.Incineroar,
  PokemonVariety.Incineroar,
  PokemonSpecies.Incineroar,
  null,
);
new class PopplioForm extends Form {}(
  PokemonForm.Popplio,
  PokemonVariety.Popplio,
  PokemonSpecies.Popplio,
  null,
);
new class BrionneForm extends Form {}(
  PokemonForm.Brionne,
  PokemonVariety.Brionne,
  PokemonSpecies.Brionne,
  null,
);
new class PrimarinaForm extends Form {}(
  PokemonForm.Primarina,
  PokemonVariety.Primarina,
  PokemonSpecies.Primarina,
  null,
);
new class PikipekForm extends Form {}(
  PokemonForm.Pikipek,
  PokemonVariety.Pikipek,
  PokemonSpecies.Pikipek,
  null,
);
new class TrumbeakForm extends Form {}(
  PokemonForm.Trumbeak,
  PokemonVariety.Trumbeak,
  PokemonSpecies.Trumbeak,
  null,
);
new class ToucannonForm extends Form {}(
  PokemonForm.Toucannon,
  PokemonVariety.Toucannon,
  PokemonSpecies.Toucannon,
  null,
);
new class YungoosForm extends Form {}(
  PokemonForm.Yungoos,
  PokemonVariety.Yungoos,
  PokemonSpecies.Yungoos,
  null,
);
new class GumshoosForm extends Form {}(
  PokemonForm.Gumshoos,
  PokemonVariety.Gumshoos,
  PokemonSpecies.Gumshoos,
  null,
);
new class GumshoosTotemForm extends Form {}(
  PokemonForm.GumshoosTotem,
  PokemonVariety.GumshoosTotem,
  PokemonSpecies.Gumshoos,
  null,
);
new class GrubbinForm extends Form {}(
  PokemonForm.Grubbin,
  PokemonVariety.Grubbin,
  PokemonSpecies.Grubbin,
  null,
);
new class CharjabugForm extends Form {}(
  PokemonForm.Charjabug,
  PokemonVariety.Charjabug,
  PokemonSpecies.Charjabug,
  null,
);
new class VikavoltForm extends Form {}(
  PokemonForm.Vikavolt,
  PokemonVariety.Vikavolt,
  PokemonSpecies.Vikavolt,
  null,
);
new class VikavoltTotemForm extends Form {}(
  PokemonForm.VikavoltTotem,
  PokemonVariety.VikavoltTotem,
  PokemonSpecies.Vikavolt,
  null,
);
new class CrabrawlerForm extends Form {}(
  PokemonForm.Crabrawler,
  PokemonVariety.Crabrawler,
  PokemonSpecies.Crabrawler,
  null,
);
new class CrabominableForm extends Form {}(
  PokemonForm.Crabominable,
  PokemonVariety.Crabominable,
  PokemonSpecies.Crabominable,
  null,
);
new class OricorioBaileForm extends Form {}(
  PokemonForm.OricorioBaile,
  PokemonVariety.OricorioBaile,
  PokemonSpecies.Oricorio,
  "Baile Style",
);
new class OricorioPomPomForm extends Form {}(
  PokemonForm.OricorioPomPom,
  PokemonVariety.OricorioPomPom,
  PokemonSpecies.Oricorio,
  "Pom-Pom Style",
);
new class OricorioPauForm extends Form {}(
  PokemonForm.OricorioPau,
  PokemonVariety.OricorioPau,
  PokemonSpecies.Oricorio,
  "Pa’u Style",
);
new class OricorioSensuForm extends Form {}(
  PokemonForm.OricorioSensu,
  PokemonVariety.OricorioSensu,
  PokemonSpecies.Oricorio,
  "Sensu Style",
);
new class CutieflyForm extends Form {}(
  PokemonForm.Cutiefly,
  PokemonVariety.Cutiefly,
  PokemonSpecies.Cutiefly,
  null,
);
new class RibombeeForm extends Form {}(
  PokemonForm.Ribombee,
  PokemonVariety.Ribombee,
  PokemonSpecies.Ribombee,
  null,
);
new class RibombeeTotemForm extends Form {}(
  PokemonForm.RibombeeTotem,
  PokemonVariety.RibombeeTotem,
  PokemonSpecies.Ribombee,
  null,
);
new class RockruffForm extends Form {}(
  PokemonForm.Rockruff,
  PokemonVariety.Rockruff,
  PokemonSpecies.Rockruff,
  null,
);
new class RockruffOwnTempoForm extends Form {}(
  PokemonForm.RockruffOwnTempo,
  PokemonVariety.RockruffOwnTempo,
  PokemonSpecies.Rockruff,
  null,
);
new class LycanrocMiddayForm extends Form {}(
  PokemonForm.LycanrocMidday,
  PokemonVariety.LycanrocMidday,
  PokemonSpecies.Lycanroc,
  "Midday Form",
);
new class LycanrocMidnightForm extends Form {}(
  PokemonForm.LycanrocMidnight,
  PokemonVariety.LycanrocMidnight,
  PokemonSpecies.Lycanroc,
  "Midnight Form",
);
new class LycanrocDuskForm extends Form {}(
  PokemonForm.LycanrocDusk,
  PokemonVariety.LycanrocDusk,
  PokemonSpecies.Lycanroc,
  "Dusk Form",
);
new class WishiwashiSoloForm extends Form {}(
  PokemonForm.WishiwashiSolo,
  PokemonVariety.WishiwashiSolo,
  PokemonSpecies.Wishiwashi,
  "Solo Form",
);
new class WishiwashiSchoolForm extends Form {}(
  PokemonForm.WishiwashiSchool,
  PokemonVariety.WishiwashiSchool,
  PokemonSpecies.Wishiwashi,
  "School Form",
);
new class MareanieForm extends Form {}(
  PokemonForm.Mareanie,
  PokemonVariety.Mareanie,
  PokemonSpecies.Mareanie,
  null,
);
new class ToxapexForm extends Form {}(
  PokemonForm.Toxapex,
  PokemonVariety.Toxapex,
  PokemonSpecies.Toxapex,
  null,
);
new class MudbrayForm extends Form {}(
  PokemonForm.Mudbray,
  PokemonVariety.Mudbray,
  PokemonSpecies.Mudbray,
  null,
);
new class MudsdaleForm extends Form {}(
  PokemonForm.Mudsdale,
  PokemonVariety.Mudsdale,
  PokemonSpecies.Mudsdale,
  null,
);
new class DewpiderForm extends Form {}(
  PokemonForm.Dewpider,
  PokemonVariety.Dewpider,
  PokemonSpecies.Dewpider,
  null,
);
new class AraquanidForm extends Form {}(
  PokemonForm.Araquanid,
  PokemonVariety.Araquanid,
  PokemonSpecies.Araquanid,
  null,
);
new class AraquanidTotemForm extends Form {}(
  PokemonForm.AraquanidTotem,
  PokemonVariety.AraquanidTotem,
  PokemonSpecies.Araquanid,
  null,
);
new class FomantisForm extends Form {}(
  PokemonForm.Fomantis,
  PokemonVariety.Fomantis,
  PokemonSpecies.Fomantis,
  null,
);
new class LurantisForm extends Form {}(
  PokemonForm.Lurantis,
  PokemonVariety.Lurantis,
  PokemonSpecies.Lurantis,
  null,
);
new class LurantisTotemForm extends Form {}(
  PokemonForm.LurantisTotem,
  PokemonVariety.LurantisTotem,
  PokemonSpecies.Lurantis,
  null,
);
new class MorelullForm extends Form {}(
  PokemonForm.Morelull,
  PokemonVariety.Morelull,
  PokemonSpecies.Morelull,
  null,
);
new class ShiinoticForm extends Form {}(
  PokemonForm.Shiinotic,
  PokemonVariety.Shiinotic,
  PokemonSpecies.Shiinotic,
  null,
);
new class SalanditForm extends Form {}(
  PokemonForm.Salandit,
  PokemonVariety.Salandit,
  PokemonSpecies.Salandit,
  null,
);
new class SalazzleForm extends Form {}(
  PokemonForm.Salazzle,
  PokemonVariety.Salazzle,
  PokemonSpecies.Salazzle,
  null,
);
new class SalazzleTotemForm extends Form {}(
  PokemonForm.SalazzleTotem,
  PokemonVariety.SalazzleTotem,
  PokemonSpecies.Salazzle,
  null,
);
new class StuffulForm extends Form {}(
  PokemonForm.Stufful,
  PokemonVariety.Stufful,
  PokemonSpecies.Stufful,
  null,
);
new class BewearForm extends Form {}(
  PokemonForm.Bewear,
  PokemonVariety.Bewear,
  PokemonSpecies.Bewear,
  null,
);
new class BounsweetForm extends Form {}(
  PokemonForm.Bounsweet,
  PokemonVariety.Bounsweet,
  PokemonSpecies.Bounsweet,
  null,
);
new class SteeneeForm extends Form {}(
  PokemonForm.Steenee,
  PokemonVariety.Steenee,
  PokemonSpecies.Steenee,
  null,
);
new class TsareenaForm extends Form {}(
  PokemonForm.Tsareena,
  PokemonVariety.Tsareena,
  PokemonSpecies.Tsareena,
  null,
);
new class ComfeyForm extends Form {}(
  PokemonForm.Comfey,
  PokemonVariety.Comfey,
  PokemonSpecies.Comfey,
  null,
);
new class OranguruForm extends Form {}(
  PokemonForm.Oranguru,
  PokemonVariety.Oranguru,
  PokemonSpecies.Oranguru,
  null,
);
new class PassimianForm extends Form {}(
  PokemonForm.Passimian,
  PokemonVariety.Passimian,
  PokemonSpecies.Passimian,
  null,
);
new class WimpodForm extends Form {}(
  PokemonForm.Wimpod,
  PokemonVariety.Wimpod,
  PokemonSpecies.Wimpod,
  null,
);
new class GolisopodForm extends Form {}(
  PokemonForm.Golisopod,
  PokemonVariety.Golisopod,
  PokemonSpecies.Golisopod,
  null,
);
new class SandygastForm extends Form {}(
  PokemonForm.Sandygast,
  PokemonVariety.Sandygast,
  PokemonSpecies.Sandygast,
  null,
);
new class PalossandForm extends Form {}(
  PokemonForm.Palossand,
  PokemonVariety.Palossand,
  PokemonSpecies.Palossand,
  null,
);
new class PyukumukuForm extends Form {}(
  PokemonForm.Pyukumuku,
  PokemonVariety.Pyukumuku,
  PokemonSpecies.Pyukumuku,
  null,
);
new class TypeNullForm extends Form {}(
  PokemonForm.TypeNull,
  PokemonVariety.TypeNull,
  PokemonSpecies.TypeNull,
  null,
);
new class SilvallyNormalForm extends Form {}(
  PokemonForm.SilvallyNormal,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Normal",
);
new class SilvallyFightingForm extends Form {}(
  PokemonForm.SilvallyFighting,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Fighting",
);
new class SilvallyFlyingForm extends Form {}(
  PokemonForm.SilvallyFlying,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Flying",
);
new class SilvallyPoisonForm extends Form {}(
  PokemonForm.SilvallyPoison,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Poison",
);
new class SilvallyGroundForm extends Form {}(
  PokemonForm.SilvallyGround,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Ground",
);
new class SilvallyRockForm extends Form {}(
  PokemonForm.SilvallyRock,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Rock",
);
new class SilvallyBugForm extends Form {}(
  PokemonForm.SilvallyBug,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Bug",
);
new class SilvallyGhostForm extends Form {}(
  PokemonForm.SilvallyGhost,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Ghost",
);
new class SilvallySteelForm extends Form {}(
  PokemonForm.SilvallySteel,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Steel",
);
new class SilvallyFireForm extends Form {}(
  PokemonForm.SilvallyFire,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Fire",
);
new class SilvallyWaterForm extends Form {}(
  PokemonForm.SilvallyWater,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Water",
);
new class SilvallyGrassForm extends Form {}(
  PokemonForm.SilvallyGrass,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Grass",
);
new class SilvallyElectricForm extends Form {}(
  PokemonForm.SilvallyElectric,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Electric",
);
new class SilvallyPsychicForm extends Form {}(
  PokemonForm.SilvallyPsychic,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Psychic",
);
new class SilvallyIceForm extends Form {}(
  PokemonForm.SilvallyIce,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Ice",
);
new class SilvallyDragonForm extends Form {}(
  PokemonForm.SilvallyDragon,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Dragon",
);
new class SilvallyDarkForm extends Form {}(
  PokemonForm.SilvallyDark,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Dark",
);
new class SilvallyFairyForm extends Form {}(
  PokemonForm.SilvallyFairy,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  "Type: Fairy",
);
new class MiniorRedMeteorForm extends Form {}(
  PokemonForm.MiniorRedMeteor,
  PokemonVariety.MiniorRedMeteor,
  PokemonSpecies.Minior,
  "Meteor Form",
);
new class MiniorOrangeMeteorForm extends Form {}(
  PokemonForm.MiniorOrangeMeteor,
  PokemonVariety.MiniorOrangeMeteor,
  PokemonSpecies.Minior,
  "Meteor Form",
);
new class MiniorYellowMeteorForm extends Form {}(
  PokemonForm.MiniorYellowMeteor,
  PokemonVariety.MiniorYellowMeteor,
  PokemonSpecies.Minior,
  "Meteor Form",
);
new class MiniorGreenMeteorForm extends Form {}(
  PokemonForm.MiniorGreenMeteor,
  PokemonVariety.MiniorGreenMeteor,
  PokemonSpecies.Minior,
  "Meteor Form",
);
new class MiniorBlueMeteorForm extends Form {}(
  PokemonForm.MiniorBlueMeteor,
  PokemonVariety.MiniorBlueMeteor,
  PokemonSpecies.Minior,
  "Meteor Form",
);
new class MiniorIndigoMeteorForm extends Form {}(
  PokemonForm.MiniorIndigoMeteor,
  PokemonVariety.MiniorIndigoMeteor,
  PokemonSpecies.Minior,
  "Meteor Form",
);
new class MiniorVioletMeteorForm extends Form {}(
  PokemonForm.MiniorVioletMeteor,
  PokemonVariety.MiniorVioletMeteor,
  PokemonSpecies.Minior,
  "Meteor Form",
);
new class MiniorRedForm extends Form {}(
  PokemonForm.MiniorRed,
  PokemonVariety.MiniorRed,
  PokemonSpecies.Minior,
  "Red Core",
);
new class MiniorOrangeForm extends Form {}(
  PokemonForm.MiniorOrange,
  PokemonVariety.MiniorOrange,
  PokemonSpecies.Minior,
  "Orange Core",
);
new class MiniorYellowForm extends Form {}(
  PokemonForm.MiniorYellow,
  PokemonVariety.MiniorYellow,
  PokemonSpecies.Minior,
  "Yellow Core",
);
new class MiniorGreenForm extends Form {}(
  PokemonForm.MiniorGreen,
  PokemonVariety.MiniorGreen,
  PokemonSpecies.Minior,
  "Green Core",
);
new class MiniorBlueForm extends Form {}(
  PokemonForm.MiniorBlue,
  PokemonVariety.MiniorBlue,
  PokemonSpecies.Minior,
  "Blue Core",
);
new class MiniorIndigoForm extends Form {}(
  PokemonForm.MiniorIndigo,
  PokemonVariety.MiniorIndigo,
  PokemonSpecies.Minior,
  "Indigo Core",
);
new class MiniorVioletForm extends Form {}(
  PokemonForm.MiniorViolet,
  PokemonVariety.MiniorViolet,
  PokemonSpecies.Minior,
  "Violet Core",
);
new class KomalaForm extends Form {}(
  PokemonForm.Komala,
  PokemonVariety.Komala,
  PokemonSpecies.Komala,
  null,
);
new class TurtonatorForm extends Form {}(
  PokemonForm.Turtonator,
  PokemonVariety.Turtonator,
  PokemonSpecies.Turtonator,
  null,
);
new class TogedemaruForm extends Form {}(
  PokemonForm.Togedemaru,
  PokemonVariety.Togedemaru,
  PokemonSpecies.Togedemaru,
  null,
);
new class TogedemaruTotemForm extends Form {}(
  PokemonForm.TogedemaruTotem,
  PokemonVariety.TogedemaruTotem,
  PokemonSpecies.Togedemaru,
  null,
);
new class MimikyuDisguisedForm extends Form {}(
  PokemonForm.MimikyuDisguised,
  PokemonVariety.MimikyuDisguised,
  PokemonSpecies.Mimikyu,
  "Disguised Form",
);
new class MimikyuBustedForm extends Form {}(
  PokemonForm.MimikyuBusted,
  PokemonVariety.MimikyuBusted,
  PokemonSpecies.Mimikyu,
  "Busted Form",
);
new class MimikyuTotemDisguisedForm extends Form {}(
  PokemonForm.MimikyuTotemDisguised,
  PokemonVariety.MimikyuTotemDisguised,
  PokemonSpecies.Mimikyu,
  null,
);
new class MimikyuTotemBustedForm extends Form {}(
  PokemonForm.MimikyuTotemBusted,
  PokemonVariety.MimikyuTotemBusted,
  PokemonSpecies.Mimikyu,
  null,
);
new class BruxishForm extends Form {}(
  PokemonForm.Bruxish,
  PokemonVariety.Bruxish,
  PokemonSpecies.Bruxish,
  null,
);
new class DrampaForm extends Form {}(
  PokemonForm.Drampa,
  PokemonVariety.Drampa,
  PokemonSpecies.Drampa,
  null,
);
new class DhelmiseForm extends Form {}(
  PokemonForm.Dhelmise,
  PokemonVariety.Dhelmise,
  PokemonSpecies.Dhelmise,
  null,
);
new class JangmoOForm extends Form {}(
  PokemonForm.JangmoO,
  PokemonVariety.JangmoO,
  PokemonSpecies.JangmoO,
  null,
);
new class HakamoOForm extends Form {}(
  PokemonForm.HakamoO,
  PokemonVariety.HakamoO,
  PokemonSpecies.HakamoO,
  null,
);
new class KommoOForm extends Form {}(
  PokemonForm.KommoO,
  PokemonVariety.KommoO,
  PokemonSpecies.KommoO,
  null,
);
new class KommoOTotemForm extends Form {}(
  PokemonForm.KommoOTotem,
  PokemonVariety.KommoOTotem,
  PokemonSpecies.KommoO,
  null,
);
new class TapuKokoForm extends Form {}(
  PokemonForm.TapuKoko,
  PokemonVariety.TapuKoko,
  PokemonSpecies.TapuKoko,
  null,
);
new class TapuLeleForm extends Form {}(
  PokemonForm.TapuLele,
  PokemonVariety.TapuLele,
  PokemonSpecies.TapuLele,
  null,
);
new class TapuBuluForm extends Form {}(
  PokemonForm.TapuBulu,
  PokemonVariety.TapuBulu,
  PokemonSpecies.TapuBulu,
  null,
);
new class TapuFiniForm extends Form {}(
  PokemonForm.TapuFini,
  PokemonVariety.TapuFini,
  PokemonSpecies.TapuFini,
  null,
);
new class CosmogForm extends Form {}(
  PokemonForm.Cosmog,
  PokemonVariety.Cosmog,
  PokemonSpecies.Cosmog,
  null,
);
new class CosmoemForm extends Form {}(
  PokemonForm.Cosmoem,
  PokemonVariety.Cosmoem,
  PokemonSpecies.Cosmoem,
  null,
);
new class SolgaleoForm extends Form {}(
  PokemonForm.Solgaleo,
  PokemonVariety.Solgaleo,
  PokemonSpecies.Solgaleo,
  null,
);
new class LunalaForm extends Form {}(
  PokemonForm.Lunala,
  PokemonVariety.Lunala,
  PokemonSpecies.Lunala,
  null,
);
new class NihilegoForm extends Form {}(
  PokemonForm.Nihilego,
  PokemonVariety.Nihilego,
  PokemonSpecies.Nihilego,
  null,
);
new class BuzzwoleForm extends Form {}(
  PokemonForm.Buzzwole,
  PokemonVariety.Buzzwole,
  PokemonSpecies.Buzzwole,
  null,
);
new class PheromosaForm extends Form {}(
  PokemonForm.Pheromosa,
  PokemonVariety.Pheromosa,
  PokemonSpecies.Pheromosa,
  null,
);
new class XurkitreeForm extends Form {}(
  PokemonForm.Xurkitree,
  PokemonVariety.Xurkitree,
  PokemonSpecies.Xurkitree,
  null,
);
new class CelesteelaForm extends Form {}(
  PokemonForm.Celesteela,
  PokemonVariety.Celesteela,
  PokemonSpecies.Celesteela,
  null,
);
new class KartanaForm extends Form {}(
  PokemonForm.Kartana,
  PokemonVariety.Kartana,
  PokemonSpecies.Kartana,
  null,
);
new class GuzzlordForm extends Form {}(
  PokemonForm.Guzzlord,
  PokemonVariety.Guzzlord,
  PokemonSpecies.Guzzlord,
  null,
);
new class NecrozmaForm extends Form {}(
  PokemonForm.Necrozma,
  PokemonVariety.Necrozma,
  PokemonSpecies.Necrozma,
  null,
);
new class NecrozmaDuskForm extends Form {}(
  PokemonForm.NecrozmaDusk,
  PokemonVariety.NecrozmaDusk,
  PokemonSpecies.Necrozma,
  "Dusk Mane",
);
new class NecrozmaDawnForm extends Form {}(
  PokemonForm.NecrozmaDawn,
  PokemonVariety.NecrozmaDawn,
  PokemonSpecies.Necrozma,
  "Dawn Wings",
);
new class NecrozmaUltraForm extends Form {}(
  PokemonForm.NecrozmaUltra,
  PokemonVariety.NecrozmaUltra,
  PokemonSpecies.Necrozma,
  "Ultra Necrozma",
);
new class MagearnaForm extends Form {}(
  PokemonForm.Magearna,
  PokemonVariety.Magearna,
  PokemonSpecies.Magearna,
  null,
);
new class MagearnaOriginalForm extends Form {}(
  PokemonForm.MagearnaOriginal,
  PokemonVariety.MagearnaOriginal,
  PokemonSpecies.Magearna,
  "Original Color",
);
new class MarshadowForm extends Form {}(
  PokemonForm.Marshadow,
  PokemonVariety.Marshadow,
  PokemonSpecies.Marshadow,
  null,
);
new class PoipoleForm extends Form {}(
  PokemonForm.Poipole,
  PokemonVariety.Poipole,
  PokemonSpecies.Poipole,
  null,
);
new class NaganadelForm extends Form {}(
  PokemonForm.Naganadel,
  PokemonVariety.Naganadel,
  PokemonSpecies.Naganadel,
  null,
);
new class StakatakaForm extends Form {}(
  PokemonForm.Stakataka,
  PokemonVariety.Stakataka,
  PokemonSpecies.Stakataka,
  null,
);
new class BlacephalonForm extends Form {}(
  PokemonForm.Blacephalon,
  PokemonVariety.Blacephalon,
  PokemonSpecies.Blacephalon,
  null,
);
new class ZeraoraForm extends Form {}(
  PokemonForm.Zeraora,
  PokemonVariety.Zeraora,
  PokemonSpecies.Zeraora,
  null,
);
new class MeltanForm extends Form {}(
  PokemonForm.Meltan,
  PokemonVariety.Meltan,
  PokemonSpecies.Meltan,
  null,
);
new class MelmetalForm extends Form {}(
  PokemonForm.Melmetal,
  PokemonVariety.Melmetal,
  PokemonSpecies.Melmetal,
  null,
);
new class MelmetalGmaxForm extends Form {}(
  PokemonForm.MelmetalGmax,
  PokemonVariety.MelmetalGmax,
  PokemonSpecies.Melmetal,
  "Gigantamax Form",
);
new class GrookeyForm extends Form {}(
  PokemonForm.Grookey,
  PokemonVariety.Grookey,
  PokemonSpecies.Grookey,
  null,
);
new class ThwackeyForm extends Form {}(
  PokemonForm.Thwackey,
  PokemonVariety.Thwackey,
  PokemonSpecies.Thwackey,
  null,
);
new class RillaboomForm extends Form {}(
  PokemonForm.Rillaboom,
  PokemonVariety.Rillaboom,
  PokemonSpecies.Rillaboom,
  null,
);
new class RillaboomGmaxForm extends Form {}(
  PokemonForm.RillaboomGmax,
  PokemonVariety.RillaboomGmax,
  PokemonSpecies.Rillaboom,
  "Gigantamax Form",
);
new class ScorbunnyForm extends Form {}(
  PokemonForm.Scorbunny,
  PokemonVariety.Scorbunny,
  PokemonSpecies.Scorbunny,
  null,
);
new class RabootForm extends Form {}(
  PokemonForm.Raboot,
  PokemonVariety.Raboot,
  PokemonSpecies.Raboot,
  null,
);
new class CinderaceForm extends Form {}(
  PokemonForm.Cinderace,
  PokemonVariety.Cinderace,
  PokemonSpecies.Cinderace,
  null,
);
new class CinderaceGmaxForm extends Form {}(
  PokemonForm.CinderaceGmax,
  PokemonVariety.CinderaceGmax,
  PokemonSpecies.Cinderace,
  "Gigantamax Form",
);
new class SobbleForm extends Form {}(
  PokemonForm.Sobble,
  PokemonVariety.Sobble,
  PokemonSpecies.Sobble,
  null,
);
new class DrizzileForm extends Form {}(
  PokemonForm.Drizzile,
  PokemonVariety.Drizzile,
  PokemonSpecies.Drizzile,
  null,
);
new class InteleonForm extends Form {}(
  PokemonForm.Inteleon,
  PokemonVariety.Inteleon,
  PokemonSpecies.Inteleon,
  null,
);
new class InteleonGmaxForm extends Form {}(
  PokemonForm.InteleonGmax,
  PokemonVariety.InteleonGmax,
  PokemonSpecies.Inteleon,
  "Gigantamax Form",
);
new class SkwovetForm extends Form {}(
  PokemonForm.Skwovet,
  PokemonVariety.Skwovet,
  PokemonSpecies.Skwovet,
  null,
);
new class GreedentForm extends Form {}(
  PokemonForm.Greedent,
  PokemonVariety.Greedent,
  PokemonSpecies.Greedent,
  null,
);
new class RookideeForm extends Form {}(
  PokemonForm.Rookidee,
  PokemonVariety.Rookidee,
  PokemonSpecies.Rookidee,
  null,
);
new class CorvisquireForm extends Form {}(
  PokemonForm.Corvisquire,
  PokemonVariety.Corvisquire,
  PokemonSpecies.Corvisquire,
  null,
);
new class CorviknightForm extends Form {}(
  PokemonForm.Corviknight,
  PokemonVariety.Corviknight,
  PokemonSpecies.Corviknight,
  null,
);
new class CorviknightGmaxForm extends Form {}(
  PokemonForm.CorviknightGmax,
  PokemonVariety.CorviknightGmax,
  PokemonSpecies.Corviknight,
  "Gigantamax Form",
);
new class BlipbugForm extends Form {}(
  PokemonForm.Blipbug,
  PokemonVariety.Blipbug,
  PokemonSpecies.Blipbug,
  null,
);
new class DottlerForm extends Form {}(
  PokemonForm.Dottler,
  PokemonVariety.Dottler,
  PokemonSpecies.Dottler,
  null,
);
new class OrbeetleForm extends Form {}(
  PokemonForm.Orbeetle,
  PokemonVariety.Orbeetle,
  PokemonSpecies.Orbeetle,
  null,
);
new class OrbeetleGmaxForm extends Form {}(
  PokemonForm.OrbeetleGmax,
  PokemonVariety.OrbeetleGmax,
  PokemonSpecies.Orbeetle,
  "Gigantamax Form",
);
new class NickitForm extends Form {}(
  PokemonForm.Nickit,
  PokemonVariety.Nickit,
  PokemonSpecies.Nickit,
  null,
);
new class ThievulForm extends Form {}(
  PokemonForm.Thievul,
  PokemonVariety.Thievul,
  PokemonSpecies.Thievul,
  null,
);
new class GossifleurForm extends Form {}(
  PokemonForm.Gossifleur,
  PokemonVariety.Gossifleur,
  PokemonSpecies.Gossifleur,
  null,
);
new class EldegossForm extends Form {}(
  PokemonForm.Eldegoss,
  PokemonVariety.Eldegoss,
  PokemonSpecies.Eldegoss,
  null,
);
new class WoolooForm extends Form {}(
  PokemonForm.Wooloo,
  PokemonVariety.Wooloo,
  PokemonSpecies.Wooloo,
  null,
);
new class DubwoolForm extends Form {}(
  PokemonForm.Dubwool,
  PokemonVariety.Dubwool,
  PokemonSpecies.Dubwool,
  null,
);
new class ChewtleForm extends Form {}(
  PokemonForm.Chewtle,
  PokemonVariety.Chewtle,
  PokemonSpecies.Chewtle,
  null,
);
new class DrednawForm extends Form {}(
  PokemonForm.Drednaw,
  PokemonVariety.Drednaw,
  PokemonSpecies.Drednaw,
  null,
);
new class DrednawGmaxForm extends Form {}(
  PokemonForm.DrednawGmax,
  PokemonVariety.DrednawGmax,
  PokemonSpecies.Drednaw,
  "Gigantamax Form",
);
new class YamperForm extends Form {}(
  PokemonForm.Yamper,
  PokemonVariety.Yamper,
  PokemonSpecies.Yamper,
  null,
);
new class BoltundForm extends Form {}(
  PokemonForm.Boltund,
  PokemonVariety.Boltund,
  PokemonSpecies.Boltund,
  null,
);
new class RolycolyForm extends Form {}(
  PokemonForm.Rolycoly,
  PokemonVariety.Rolycoly,
  PokemonSpecies.Rolycoly,
  null,
);
new class CarkolForm extends Form {}(
  PokemonForm.Carkol,
  PokemonVariety.Carkol,
  PokemonSpecies.Carkol,
  null,
);
new class CoalossalForm extends Form {}(
  PokemonForm.Coalossal,
  PokemonVariety.Coalossal,
  PokemonSpecies.Coalossal,
  null,
);
new class CoalossalGmaxForm extends Form {}(
  PokemonForm.CoalossalGmax,
  PokemonVariety.CoalossalGmax,
  PokemonSpecies.Coalossal,
  "Gigantamax Form",
);
new class ApplinForm extends Form {}(
  PokemonForm.Applin,
  PokemonVariety.Applin,
  PokemonSpecies.Applin,
  null,
);
new class FlappleForm extends Form {}(
  PokemonForm.Flapple,
  PokemonVariety.Flapple,
  PokemonSpecies.Flapple,
  null,
);
new class FlappleGmaxForm extends Form {}(
  PokemonForm.FlappleGmax,
  PokemonVariety.FlappleGmax,
  PokemonSpecies.Flapple,
  "Gigantamax Form",
);
new class AppletunForm extends Form {}(
  PokemonForm.Appletun,
  PokemonVariety.Appletun,
  PokemonSpecies.Appletun,
  null,
);
new class AppletunGmaxForm extends Form {}(
  PokemonForm.AppletunGmax,
  PokemonVariety.AppletunGmax,
  PokemonSpecies.Appletun,
  "Gigantamax Form",
);
new class SilicobraForm extends Form {}(
  PokemonForm.Silicobra,
  PokemonVariety.Silicobra,
  PokemonSpecies.Silicobra,
  null,
);
new class SandacondaForm extends Form {}(
  PokemonForm.Sandaconda,
  PokemonVariety.Sandaconda,
  PokemonSpecies.Sandaconda,
  null,
);
new class SandacondaGmaxForm extends Form {}(
  PokemonForm.SandacondaGmax,
  PokemonVariety.SandacondaGmax,
  PokemonSpecies.Sandaconda,
  "Gigantamax Form",
);
new class CramorantForm extends Form {}(
  PokemonForm.Cramorant,
  PokemonVariety.Cramorant,
  PokemonSpecies.Cramorant,
  null,
);
new class CramorantGulpingForm extends Form {}(
  PokemonForm.CramorantGulping,
  PokemonVariety.CramorantGulping,
  PokemonSpecies.Cramorant,
  "Gulping Form",
);
new class CramorantGorgingForm extends Form {}(
  PokemonForm.CramorantGorging,
  PokemonVariety.CramorantGorging,
  PokemonSpecies.Cramorant,
  "Gorging Form",
);
new class ArrokudaForm extends Form {}(
  PokemonForm.Arrokuda,
  PokemonVariety.Arrokuda,
  PokemonSpecies.Arrokuda,
  null,
);
new class BarraskewdaForm extends Form {}(
  PokemonForm.Barraskewda,
  PokemonVariety.Barraskewda,
  PokemonSpecies.Barraskewda,
  null,
);
new class ToxelForm extends Form {}(
  PokemonForm.Toxel,
  PokemonVariety.Toxel,
  PokemonSpecies.Toxel,
  null,
);
new class ToxtricityAmpedForm extends Form {}(
  PokemonForm.ToxtricityAmped,
  PokemonVariety.ToxtricityAmped,
  PokemonSpecies.Toxtricity,
  "Amped Form",
);
new class ToxtricityLowKeyForm extends Form {}(
  PokemonForm.ToxtricityLowKey,
  PokemonVariety.ToxtricityLowKey,
  PokemonSpecies.Toxtricity,
  "Low Key Form",
);
new class ToxtricityAmpedGmaxForm extends Form {}(
  PokemonForm.ToxtricityAmpedGmax,
  PokemonVariety.ToxtricityAmpedGmax,
  PokemonSpecies.Toxtricity,
  "Gigantamax Form",
);
new class ToxtricityLowKeyGmaxForm extends Form {}(
  PokemonForm.ToxtricityLowKeyGmax,
  PokemonVariety.ToxtricityLowKeyGmax,
  PokemonSpecies.Toxtricity,
  "Gigantamax Form",
);
new class SizzlipedeForm extends Form {}(
  PokemonForm.Sizzlipede,
  PokemonVariety.Sizzlipede,
  PokemonSpecies.Sizzlipede,
  null,
);
new class CentiskorchForm extends Form {}(
  PokemonForm.Centiskorch,
  PokemonVariety.Centiskorch,
  PokemonSpecies.Centiskorch,
  null,
);
new class CentiskorchGmaxForm extends Form {}(
  PokemonForm.CentiskorchGmax,
  PokemonVariety.CentiskorchGmax,
  PokemonSpecies.Centiskorch,
  "Gigantamax Form",
);
new class ClobbopusForm extends Form {}(
  PokemonForm.Clobbopus,
  PokemonVariety.Clobbopus,
  PokemonSpecies.Clobbopus,
  null,
);
new class GrapploctForm extends Form {}(
  PokemonForm.Grapploct,
  PokemonVariety.Grapploct,
  PokemonSpecies.Grapploct,
  null,
);
new class SinisteaPhonyForm extends Form {}(
  PokemonForm.SinisteaPhony,
  PokemonVariety.Sinistea,
  PokemonSpecies.Sinistea,
  "Phony Form",
);
new class SinisteaAntiqueForm extends Form {}(
  PokemonForm.SinisteaAntique,
  PokemonVariety.Sinistea,
  PokemonSpecies.Sinistea,
  "Antique Form",
);
new class PolteageistPhonyForm extends Form {}(
  PokemonForm.PolteageistPhony,
  PokemonVariety.Polteageist,
  PokemonSpecies.Polteageist,
  "Phony Form",
);
new class PolteageistAntiqueForm extends Form {}(
  PokemonForm.PolteageistAntique,
  PokemonVariety.Polteageist,
  PokemonSpecies.Polteageist,
  "Antique Form",
);
new class HatennaForm extends Form {}(
  PokemonForm.Hatenna,
  PokemonVariety.Hatenna,
  PokemonSpecies.Hatenna,
  null,
);
new class HattremForm extends Form {}(
  PokemonForm.Hattrem,
  PokemonVariety.Hattrem,
  PokemonSpecies.Hattrem,
  null,
);
new class HattereneForm extends Form {}(
  PokemonForm.Hatterene,
  PokemonVariety.Hatterene,
  PokemonSpecies.Hatterene,
  null,
);
new class HattereneGmaxForm extends Form {}(
  PokemonForm.HattereneGmax,
  PokemonVariety.HattereneGmax,
  PokemonSpecies.Hatterene,
  "Gigantamax Form",
);
new class ImpidimpForm extends Form {}(
  PokemonForm.Impidimp,
  PokemonVariety.Impidimp,
  PokemonSpecies.Impidimp,
  null,
);
new class MorgremForm extends Form {}(
  PokemonForm.Morgrem,
  PokemonVariety.Morgrem,
  PokemonSpecies.Morgrem,
  null,
);
new class GrimmsnarlForm extends Form {}(
  PokemonForm.Grimmsnarl,
  PokemonVariety.Grimmsnarl,
  PokemonSpecies.Grimmsnarl,
  null,
);
new class GrimmsnarlGmaxForm extends Form {}(
  PokemonForm.GrimmsnarlGmax,
  PokemonVariety.GrimmsnarlGmax,
  PokemonSpecies.Grimmsnarl,
  "Gigantamax Form",
);
new class ObstagoonForm extends Form {}(
  PokemonForm.Obstagoon,
  PokemonVariety.Obstagoon,
  PokemonSpecies.Obstagoon,
  null,
);
new class PerrserkerForm extends Form {}(
  PokemonForm.Perrserker,
  PokemonVariety.Perrserker,
  PokemonSpecies.Perrserker,
  null,
);
new class CursolaForm extends Form {}(
  PokemonForm.Cursola,
  PokemonVariety.Cursola,
  PokemonSpecies.Cursola,
  null,
);
new class SirfetchdForm extends Form {}(
  PokemonForm.Sirfetchd,
  PokemonVariety.Sirfetchd,
  PokemonSpecies.Sirfetchd,
  null,
);
new class MrRimeForm extends Form {}(
  PokemonForm.MrRime,
  PokemonVariety.MrRime,
  PokemonSpecies.MrRime,
  null,
);
new class RunerigusForm extends Form {}(
  PokemonForm.Runerigus,
  PokemonVariety.Runerigus,
  PokemonSpecies.Runerigus,
  null,
);
new class MilceryForm extends Form {}(
  PokemonForm.Milcery,
  PokemonVariety.Milcery,
  PokemonSpecies.Milcery,
  null,
);
new class AlcremieVanillaCreamForm extends Form {}(
  PokemonForm.AlcremieVanillaCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Vanilla Cream",
);
new class AlcremieRubyCreamForm extends Form {}(
  PokemonForm.AlcremieRubyCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Ruby Cream",
);
new class AlcremieMatchaCreamForm extends Form {}(
  PokemonForm.AlcremieMatchaCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Matcha Cream",
);
new class AlcremieMintCreamForm extends Form {}(
  PokemonForm.AlcremieMintCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Mint Cream",
);
new class AlcremieLemonCreamForm extends Form {}(
  PokemonForm.AlcremieLemonCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Lemon Cream",
);
new class AlcremieSaltedCreamForm extends Form {}(
  PokemonForm.AlcremieSaltedCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Salted Cream",
);
new class AlcremieRubySwirlForm extends Form {}(
  PokemonForm.AlcremieRubySwirl,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Ruby Swirl",
);
new class AlcremieCaramelSwirlForm extends Form {}(
  PokemonForm.AlcremieCaramelSwirl,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Caramel Swirl",
);
new class AlcremieRainbowSwirlForm extends Form {}(
  PokemonForm.AlcremieRainbowSwirl,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Rainbow Swirl",
);
new class AlcremieGmaxForm extends Form {}(
  PokemonForm.AlcremieGmax,
  PokemonVariety.AlcremieGmax,
  PokemonSpecies.Alcremie,
  "Gigantamax Form",
);
new class FalinksForm extends Form {}(
  PokemonForm.Falinks,
  PokemonVariety.Falinks,
  PokemonSpecies.Falinks,
  null,
);
new class PincurchinForm extends Form {}(
  PokemonForm.Pincurchin,
  PokemonVariety.Pincurchin,
  PokemonSpecies.Pincurchin,
  null,
);
new class SnomForm extends Form {}(
  PokemonForm.Snom,
  PokemonVariety.Snom,
  PokemonSpecies.Snom,
  null,
);
new class FrosmothForm extends Form {}(
  PokemonForm.Frosmoth,
  PokemonVariety.Frosmoth,
  PokemonSpecies.Frosmoth,
  null,
);
new class StonjournerForm extends Form {}(
  PokemonForm.Stonjourner,
  PokemonVariety.Stonjourner,
  PokemonSpecies.Stonjourner,
  null,
);
new class EiscueIceForm extends Form {}(
  PokemonForm.EiscueIce,
  PokemonVariety.EiscueIce,
  PokemonSpecies.Eiscue,
  "Ice Face",
);
new class EiscueNoiceForm extends Form {}(
  PokemonForm.EiscueNoice,
  PokemonVariety.EiscueNoice,
  PokemonSpecies.Eiscue,
  "Noice Face",
);
new class IndeedeeMaleForm extends Form {}(
  PokemonForm.IndeedeeMale,
  PokemonVariety.IndeedeeMale,
  PokemonSpecies.Indeedee,
  "Male",
);
new class IndeedeeFemaleForm extends Form {}(
  PokemonForm.IndeedeeFemale,
  PokemonVariety.IndeedeeFemale,
  PokemonSpecies.Indeedee,
  "Female",
);
new class MorpekoFullBellyForm extends Form {}(
  PokemonForm.MorpekoFullBelly,
  PokemonVariety.MorpekoFullBelly,
  PokemonSpecies.Morpeko,
  "Full Belly Mode",
);
new class MorpekoHangryForm extends Form {}(
  PokemonForm.MorpekoHangry,
  PokemonVariety.MorpekoHangry,
  PokemonSpecies.Morpeko,
  "Hangry Mode",
);
new class CufantForm extends Form {}(
  PokemonForm.Cufant,
  PokemonVariety.Cufant,
  PokemonSpecies.Cufant,
  null,
);
new class CopperajahForm extends Form {}(
  PokemonForm.Copperajah,
  PokemonVariety.Copperajah,
  PokemonSpecies.Copperajah,
  null,
);
new class CopperajahGmaxForm extends Form {}(
  PokemonForm.CopperajahGmax,
  PokemonVariety.CopperajahGmax,
  PokemonSpecies.Copperajah,
  "Gigantamax Form",
);
new class DracozoltForm extends Form {}(
  PokemonForm.Dracozolt,
  PokemonVariety.Dracozolt,
  PokemonSpecies.Dracozolt,
  null,
);
new class ArctozoltForm extends Form {}(
  PokemonForm.Arctozolt,
  PokemonVariety.Arctozolt,
  PokemonSpecies.Arctozolt,
  null,
);
new class DracovishForm extends Form {}(
  PokemonForm.Dracovish,
  PokemonVariety.Dracovish,
  PokemonSpecies.Dracovish,
  null,
);
new class ArctovishForm extends Form {}(
  PokemonForm.Arctovish,
  PokemonVariety.Arctovish,
  PokemonSpecies.Arctovish,
  null,
);
new class DuraludonForm extends Form {}(
  PokemonForm.Duraludon,
  PokemonVariety.Duraludon,
  PokemonSpecies.Duraludon,
  null,
);
new class DuraludonGmaxForm extends Form {}(
  PokemonForm.DuraludonGmax,
  PokemonVariety.DuraludonGmax,
  PokemonSpecies.Duraludon,
  "Gigantamax Form",
);
new class DreepyForm extends Form {}(
  PokemonForm.Dreepy,
  PokemonVariety.Dreepy,
  PokemonSpecies.Dreepy,
  null,
);
new class DrakloakForm extends Form {}(
  PokemonForm.Drakloak,
  PokemonVariety.Drakloak,
  PokemonSpecies.Drakloak,
  null,
);
new class DragapultForm extends Form {}(
  PokemonForm.Dragapult,
  PokemonVariety.Dragapult,
  PokemonSpecies.Dragapult,
  null,
);
new class ZacianForm extends Form {}(
  PokemonForm.Zacian,
  PokemonVariety.Zacian,
  PokemonSpecies.Zacian,
  "Hero of Many Battles",
);
new class ZacianCrownedForm extends Form {}(
  PokemonForm.ZacianCrowned,
  PokemonVariety.ZacianCrowned,
  PokemonSpecies.Zacian,
  "Crowned Sword",
);
new class ZamazentaForm extends Form {}(
  PokemonForm.Zamazenta,
  PokemonVariety.Zamazenta,
  PokemonSpecies.Zamazenta,
  "Hero of Many Battles",
);
new class ZamazentaCrownedForm extends Form {}(
  PokemonForm.ZamazentaCrowned,
  PokemonVariety.ZamazentaCrowned,
  PokemonSpecies.Zamazenta,
  "Crowned Shield",
);
new class EternatusForm extends Form {}(
  PokemonForm.Eternatus,
  PokemonVariety.Eternatus,
  PokemonSpecies.Eternatus,
  null,
);
new class EternatusEternamaxForm extends Form {}(
  PokemonForm.EternatusEternamax,
  PokemonVariety.EternatusEternamax,
  PokemonSpecies.Eternatus,
  "Eternamax",
);
new class KubfuForm extends Form {}(
  PokemonForm.Kubfu,
  PokemonVariety.Kubfu,
  PokemonSpecies.Kubfu,
  null,
);
new class UrshifuSingleStrikeForm extends Form {}(
  PokemonForm.UrshifuSingleStrike,
  PokemonVariety.UrshifuSingleStrike,
  PokemonSpecies.Urshifu,
  "Single Strike Style",
);
new class UrshifuRapidStrikeForm extends Form {}(
  PokemonForm.UrshifuRapidStrike,
  PokemonVariety.UrshifuRapidStrike,
  PokemonSpecies.Urshifu,
  "Rapid Strike Style",
);
new class UrshifuSingleStrikeGmaxForm extends Form {}(
  PokemonForm.UrshifuSingleStrikeGmax,
  PokemonVariety.UrshifuSingleStrikeGmax,
  PokemonSpecies.Urshifu,
  "Gigantamax Form",
);
new class UrshifuRapidStrikeGmaxForm extends Form {}(
  PokemonForm.UrshifuRapidStrikeGmax,
  PokemonVariety.UrshifuRapidStrikeGmax,
  PokemonSpecies.Urshifu,
  "Gigantamax Form",
);
new class ZarudeForm extends Form {}(
  PokemonForm.Zarude,
  PokemonVariety.Zarude,
  PokemonSpecies.Zarude,
  null,
);
new class ZarudeDadaForm extends Form {}(
  PokemonForm.ZarudeDada,
  PokemonVariety.ZarudeDada,
  PokemonSpecies.Zarude,
  "Dada",
);
new class RegielekiForm extends Form {}(
  PokemonForm.Regieleki,
  PokemonVariety.Regieleki,
  PokemonSpecies.Regieleki,
  null,
);
new class RegidragoForm extends Form {}(
  PokemonForm.Regidrago,
  PokemonVariety.Regidrago,
  PokemonSpecies.Regidrago,
  null,
);
new class GlastrierForm extends Form {}(
  PokemonForm.Glastrier,
  PokemonVariety.Glastrier,
  PokemonSpecies.Glastrier,
  null,
);
new class SpectrierForm extends Form {}(
  PokemonForm.Spectrier,
  PokemonVariety.Spectrier,
  PokemonSpecies.Spectrier,
  null,
);
new class CalyrexForm extends Form {}(
  PokemonForm.Calyrex,
  PokemonVariety.Calyrex,
  PokemonSpecies.Calyrex,
  null,
);
new class CalyrexIceForm extends Form {}(
  PokemonForm.CalyrexIce,
  PokemonVariety.CalyrexIce,
  PokemonSpecies.Calyrex,
  "Ice Rider",
);
new class CalyrexShadowForm extends Form {}(
  PokemonForm.CalyrexShadow,
  PokemonVariety.CalyrexShadow,
  PokemonSpecies.Calyrex,
  "Shadow Rider",
);
new class WyrdeerForm extends Form {}(
  PokemonForm.Wyrdeer,
  PokemonVariety.Wyrdeer,
  PokemonSpecies.Wyrdeer,
  null,
);
new class KleavorForm extends Form {}(
  PokemonForm.Kleavor,
  PokemonVariety.Kleavor,
  PokemonSpecies.Kleavor,
  null,
);
new class UrsalunaForm extends Form {}(
  PokemonForm.Ursaluna,
  PokemonVariety.Ursaluna,
  PokemonSpecies.Ursaluna,
  null,
);
new class UrsalunaBloodmoonForm extends Form {}(
  PokemonForm.UrsalunaBloodmoon,
  PokemonVariety.UrsalunaBloodmoon,
  PokemonSpecies.Ursaluna,
  "Bloodmoon",
);
new class BasculegionMaleForm extends Form {}(
  PokemonForm.BasculegionMale,
  PokemonVariety.BasculegionMale,
  PokemonSpecies.Basculegion,
  "Male",
);
new class BasculegionFemaleForm extends Form {}(
  PokemonForm.BasculegionFemale,
  PokemonVariety.BasculegionFemale,
  PokemonSpecies.Basculegion,
  "Female",
);
new class SneaslerForm extends Form {}(
  PokemonForm.Sneasler,
  PokemonVariety.Sneasler,
  PokemonSpecies.Sneasler,
  null,
);
new class OverqwilForm extends Form {}(
  PokemonForm.Overqwil,
  PokemonVariety.Overqwil,
  PokemonSpecies.Overqwil,
  null,
);
new class EnamorusIncarnateForm extends Form {}(
  PokemonForm.EnamorusIncarnate,
  PokemonVariety.EnamorusIncarnate,
  PokemonSpecies.Enamorus,
  "Incarnate Forme",
);
new class EnamorusTherianForm extends Form {}(
  PokemonForm.EnamorusTherian,
  PokemonVariety.EnamorusTherian,
  PokemonSpecies.Enamorus,
  "Therian Forme",
);
new class SprigatitoForm extends Form {}(
  PokemonForm.Sprigatito,
  PokemonVariety.Sprigatito,
  PokemonSpecies.Sprigatito,
  null,
);
new class FloragatoForm extends Form {}(
  PokemonForm.Floragato,
  PokemonVariety.Floragato,
  PokemonSpecies.Floragato,
  null,
);
new class MeowscaradaForm extends Form {}(
  PokemonForm.Meowscarada,
  PokemonVariety.Meowscarada,
  PokemonSpecies.Meowscarada,
  null,
);
new class FuecocoForm extends Form {}(
  PokemonForm.Fuecoco,
  PokemonVariety.Fuecoco,
  PokemonSpecies.Fuecoco,
  null,
);
new class CrocalorForm extends Form {}(
  PokemonForm.Crocalor,
  PokemonVariety.Crocalor,
  PokemonSpecies.Crocalor,
  null,
);
new class SkeledirgeForm extends Form {}(
  PokemonForm.Skeledirge,
  PokemonVariety.Skeledirge,
  PokemonSpecies.Skeledirge,
  null,
);
new class QuaxlyForm extends Form {}(
  PokemonForm.Quaxly,
  PokemonVariety.Quaxly,
  PokemonSpecies.Quaxly,
  null,
);
new class QuaxwellForm extends Form {}(
  PokemonForm.Quaxwell,
  PokemonVariety.Quaxwell,
  PokemonSpecies.Quaxwell,
  null,
);
new class QuaquavalForm extends Form {}(
  PokemonForm.Quaquaval,
  PokemonVariety.Quaquaval,
  PokemonSpecies.Quaquaval,
  null,
);
new class LechonkForm extends Form {}(
  PokemonForm.Lechonk,
  PokemonVariety.Lechonk,
  PokemonSpecies.Lechonk,
  null,
);
new class OinkologneForm extends Form {}(
  PokemonForm.Oinkologne,
  PokemonVariety.Oinkologne,
  PokemonSpecies.Oinkologne,
  "Male",
);
new class OinkologneFemaleForm extends Form {}(
  PokemonForm.OinkologneFemale,
  PokemonVariety.OinkologneFemale,
  PokemonSpecies.Oinkologne,
  "Female",
);
new class TarountulaForm extends Form {}(
  PokemonForm.Tarountula,
  PokemonVariety.Tarountula,
  PokemonSpecies.Tarountula,
  null,
);
new class SpidopsForm extends Form {}(
  PokemonForm.Spidops,
  PokemonVariety.Spidops,
  PokemonSpecies.Spidops,
  null,
);
new class NymbleForm extends Form {}(
  PokemonForm.Nymble,
  PokemonVariety.Nymble,
  PokemonSpecies.Nymble,
  null,
);
new class LokixForm extends Form {}(
  PokemonForm.Lokix,
  PokemonVariety.Lokix,
  PokemonSpecies.Lokix,
  null,
);
new class PawmiForm extends Form {}(
  PokemonForm.Pawmi,
  PokemonVariety.Pawmi,
  PokemonSpecies.Pawmi,
  null,
);
new class PawmoForm extends Form {}(
  PokemonForm.Pawmo,
  PokemonVariety.Pawmo,
  PokemonSpecies.Pawmo,
  null,
);
new class PawmotForm extends Form {}(
  PokemonForm.Pawmot,
  PokemonVariety.Pawmot,
  PokemonSpecies.Pawmot,
  null,
);
new class TandemausForm extends Form {}(
  PokemonForm.Tandemaus,
  PokemonVariety.Tandemaus,
  PokemonSpecies.Tandemaus,
  null,
);
new class MausholdFamilyOfFourForm extends Form {}(
  PokemonForm.MausholdFamilyOfFour,
  PokemonVariety.Maushold,
  PokemonSpecies.Maushold,
  "Family of Four",
);
new class MausholdFamilyOfThreeForm extends Form {}(
  PokemonForm.MausholdFamilyOfThree,
  PokemonVariety.MausholdFamilyOfThree,
  PokemonSpecies.Maushold,
  "Family of Three",
);
new class FidoughForm extends Form {}(
  PokemonForm.Fidough,
  PokemonVariety.Fidough,
  PokemonSpecies.Fidough,
  null,
);
new class DachsbunForm extends Form {}(
  PokemonForm.Dachsbun,
  PokemonVariety.Dachsbun,
  PokemonSpecies.Dachsbun,
  null,
);
new class SmolivForm extends Form {}(
  PokemonForm.Smoliv,
  PokemonVariety.Smoliv,
  PokemonSpecies.Smoliv,
  null,
);
new class DollivForm extends Form {}(
  PokemonForm.Dolliv,
  PokemonVariety.Dolliv,
  PokemonSpecies.Dolliv,
  null,
);
new class ArbolivaForm extends Form {}(
  PokemonForm.Arboliva,
  PokemonVariety.Arboliva,
  PokemonSpecies.Arboliva,
  null,
);
new class SquawkabillyGreenPlumageForm extends Form {}(
  PokemonForm.SquawkabillyGreenPlumage,
  PokemonVariety.Squawkabilly,
  PokemonSpecies.Squawkabilly,
  "Green Plumage",
);
new class SquawkabillyBluePlumageForm extends Form {}(
  PokemonForm.SquawkabillyBluePlumage,
  PokemonVariety.SquawkabillyBluePlumage,
  PokemonSpecies.Squawkabilly,
  "Blue Plumage",
);
new class SquawkabillyYellowPlumageForm extends Form {}(
  PokemonForm.SquawkabillyYellowPlumage,
  PokemonVariety.SquawkabillyYellowPlumage,
  PokemonSpecies.Squawkabilly,
  "Yellow Plumage",
);
new class SquawkabillyWhitePlumageForm extends Form {}(
  PokemonForm.SquawkabillyWhitePlumage,
  PokemonVariety.SquawkabillyWhitePlumage,
  PokemonSpecies.Squawkabilly,
  "White Plumage",
);
new class NacliForm extends Form {}(
  PokemonForm.Nacli,
  PokemonVariety.Nacli,
  PokemonSpecies.Nacli,
  null,
);
new class NaclstackForm extends Form {}(
  PokemonForm.Naclstack,
  PokemonVariety.Naclstack,
  PokemonSpecies.Naclstack,
  null,
);
new class GarganaclForm extends Form {}(
  PokemonForm.Garganacl,
  PokemonVariety.Garganacl,
  PokemonSpecies.Garganacl,
  null,
);
new class CharcadetForm extends Form {}(
  PokemonForm.Charcadet,
  PokemonVariety.Charcadet,
  PokemonSpecies.Charcadet,
  null,
);
new class ArmarougeForm extends Form {}(
  PokemonForm.Armarouge,
  PokemonVariety.Armarouge,
  PokemonSpecies.Armarouge,
  null,
);
new class CeruledgeForm extends Form {}(
  PokemonForm.Ceruledge,
  PokemonVariety.Ceruledge,
  PokemonSpecies.Ceruledge,
  null,
);
new class TadbulbForm extends Form {}(
  PokemonForm.Tadbulb,
  PokemonVariety.Tadbulb,
  PokemonSpecies.Tadbulb,
  null,
);
new class BelliboltForm extends Form {}(
  PokemonForm.Bellibolt,
  PokemonVariety.Bellibolt,
  PokemonSpecies.Bellibolt,
  null,
);
new class WattrelForm extends Form {}(
  PokemonForm.Wattrel,
  PokemonVariety.Wattrel,
  PokemonSpecies.Wattrel,
  null,
);
new class KilowattrelForm extends Form {}(
  PokemonForm.Kilowattrel,
  PokemonVariety.Kilowattrel,
  PokemonSpecies.Kilowattrel,
  null,
);
new class MaschiffForm extends Form {}(
  PokemonForm.Maschiff,
  PokemonVariety.Maschiff,
  PokemonSpecies.Maschiff,
  null,
);
new class MabosstiffForm extends Form {}(
  PokemonForm.Mabosstiff,
  PokemonVariety.Mabosstiff,
  PokemonSpecies.Mabosstiff,
  null,
);
new class ShroodleForm extends Form {}(
  PokemonForm.Shroodle,
  PokemonVariety.Shroodle,
  PokemonSpecies.Shroodle,
  null,
);
new class GrafaiaiForm extends Form {}(
  PokemonForm.Grafaiai,
  PokemonVariety.Grafaiai,
  PokemonSpecies.Grafaiai,
  null,
);
new class BramblinForm extends Form {}(
  PokemonForm.Bramblin,
  PokemonVariety.Bramblin,
  PokemonSpecies.Bramblin,
  null,
);
new class BrambleghastForm extends Form {}(
  PokemonForm.Brambleghast,
  PokemonVariety.Brambleghast,
  PokemonSpecies.Brambleghast,
  null,
);
new class ToedscoolForm extends Form {}(
  PokemonForm.Toedscool,
  PokemonVariety.Toedscool,
  PokemonSpecies.Toedscool,
  null,
);
new class ToedscruelForm extends Form {}(
  PokemonForm.Toedscruel,
  PokemonVariety.Toedscruel,
  PokemonSpecies.Toedscruel,
  null,
);
new class KlawfForm extends Form {}(
  PokemonForm.Klawf,
  PokemonVariety.Klawf,
  PokemonSpecies.Klawf,
  null,
);
new class CapsakidForm extends Form {}(
  PokemonForm.Capsakid,
  PokemonVariety.Capsakid,
  PokemonSpecies.Capsakid,
  null,
);
new class ScovillainForm extends Form {}(
  PokemonForm.Scovillain,
  PokemonVariety.Scovillain,
  PokemonSpecies.Scovillain,
  null,
);
new class RellorForm extends Form {}(
  PokemonForm.Rellor,
  PokemonVariety.Rellor,
  PokemonSpecies.Rellor,
  null,
);
new class RabscaForm extends Form {}(
  PokemonForm.Rabsca,
  PokemonVariety.Rabsca,
  PokemonSpecies.Rabsca,
  null,
);
new class FlittleForm extends Form {}(
  PokemonForm.Flittle,
  PokemonVariety.Flittle,
  PokemonSpecies.Flittle,
  null,
);
new class EspathraForm extends Form {}(
  PokemonForm.Espathra,
  PokemonVariety.Espathra,
  PokemonSpecies.Espathra,
  null,
);
new class TinkatinkForm extends Form {}(
  PokemonForm.Tinkatink,
  PokemonVariety.Tinkatink,
  PokemonSpecies.Tinkatink,
  null,
);
new class TinkatuffForm extends Form {}(
  PokemonForm.Tinkatuff,
  PokemonVariety.Tinkatuff,
  PokemonSpecies.Tinkatuff,
  null,
);
new class TinkatonForm extends Form {}(
  PokemonForm.Tinkaton,
  PokemonVariety.Tinkaton,
  PokemonSpecies.Tinkaton,
  null,
);
new class WiglettForm extends Form {}(
  PokemonForm.Wiglett,
  PokemonVariety.Wiglett,
  PokemonSpecies.Wiglett,
  null,
);
new class WugtrioForm extends Form {}(
  PokemonForm.Wugtrio,
  PokemonVariety.Wugtrio,
  PokemonSpecies.Wugtrio,
  null,
);
new class BombirdierForm extends Form {}(
  PokemonForm.Bombirdier,
  PokemonVariety.Bombirdier,
  PokemonSpecies.Bombirdier,
  null,
);
new class FinizenForm extends Form {}(
  PokemonForm.Finizen,
  PokemonVariety.Finizen,
  PokemonSpecies.Finizen,
  null,
);
new class PalafinZeroForm extends Form {}(
  PokemonForm.PalafinZero,
  PokemonVariety.Palafin,
  PokemonSpecies.Palafin,
  "Zero Form",
);
new class PalafinHeroForm extends Form {}(
  PokemonForm.PalafinHero,
  PokemonVariety.PalafinHero,
  PokemonSpecies.Palafin,
  "Hero Form",
);
new class VaroomForm extends Form {}(
  PokemonForm.Varoom,
  PokemonVariety.Varoom,
  PokemonSpecies.Varoom,
  null,
);
new class RevavroomForm extends Form {}(
  PokemonForm.Revavroom,
  PokemonVariety.Revavroom,
  PokemonSpecies.Revavroom,
  null,
);
new class CyclizarForm extends Form {}(
  PokemonForm.Cyclizar,
  PokemonVariety.Cyclizar,
  PokemonSpecies.Cyclizar,
  null,
);
new class OrthwormForm extends Form {}(
  PokemonForm.Orthworm,
  PokemonVariety.Orthworm,
  PokemonSpecies.Orthworm,
  null,
);
new class GlimmetForm extends Form {}(
  PokemonForm.Glimmet,
  PokemonVariety.Glimmet,
  PokemonSpecies.Glimmet,
  null,
);
new class GlimmoraForm extends Form {}(
  PokemonForm.Glimmora,
  PokemonVariety.Glimmora,
  PokemonSpecies.Glimmora,
  null,
);
new class GreavardForm extends Form {}(
  PokemonForm.Greavard,
  PokemonVariety.Greavard,
  PokemonSpecies.Greavard,
  null,
);
new class HoundstoneForm extends Form {}(
  PokemonForm.Houndstone,
  PokemonVariety.Houndstone,
  PokemonSpecies.Houndstone,
  null,
);
new class FlamigoForm extends Form {}(
  PokemonForm.Flamigo,
  PokemonVariety.Flamigo,
  PokemonSpecies.Flamigo,
  null,
);
new class CetoddleForm extends Form {}(
  PokemonForm.Cetoddle,
  PokemonVariety.Cetoddle,
  PokemonSpecies.Cetoddle,
  null,
);
new class CetitanForm extends Form {}(
  PokemonForm.Cetitan,
  PokemonVariety.Cetitan,
  PokemonSpecies.Cetitan,
  null,
);
new class VeluzaForm extends Form {}(
  PokemonForm.Veluza,
  PokemonVariety.Veluza,
  PokemonSpecies.Veluza,
  null,
);
new class DondozoForm extends Form {}(
  PokemonForm.Dondozo,
  PokemonVariety.Dondozo,
  PokemonSpecies.Dondozo,
  null,
);
new class TatsugiriCurlyForm extends Form {}(
  PokemonForm.TatsugiriCurly,
  PokemonVariety.Tatsugiri,
  PokemonSpecies.Tatsugiri,
  "Curly Form",
);
new class TatsugiriDroopyForm extends Form {}(
  PokemonForm.TatsugiriDroopy,
  PokemonVariety.TatsugiriDroopy,
  PokemonSpecies.Tatsugiri,
  "Droopy Form",
);
new class TatsugiriStretchyForm extends Form {}(
  PokemonForm.TatsugiriStretchy,
  PokemonVariety.TatsugiriStretchy,
  PokemonSpecies.Tatsugiri,
  "Stretchy Form",
);
new class AnnihilapeForm extends Form {}(
  PokemonForm.Annihilape,
  PokemonVariety.Annihilape,
  PokemonSpecies.Annihilape,
  null,
);
new class ClodsireForm extends Form {}(
  PokemonForm.Clodsire,
  PokemonVariety.Clodsire,
  PokemonSpecies.Clodsire,
  null,
);
new class FarigirafForm extends Form {}(
  PokemonForm.Farigiraf,
  PokemonVariety.Farigiraf,
  PokemonSpecies.Farigiraf,
  null,
);
new class DudunsparceTwoSegmentForm extends Form {}(
  PokemonForm.DudunsparceTwoSegment,
  PokemonVariety.Dudunsparce,
  PokemonSpecies.Dudunsparce,
  "Two-Segment Form",
);
new class DudunsparceThreeSegmentForm extends Form {}(
  PokemonForm.DudunsparceThreeSegment,
  PokemonVariety.DudunsparceThreeSegment,
  PokemonSpecies.Dudunsparce,
  "Three-Segment Form",
);
new class KingambitForm extends Form {}(
  PokemonForm.Kingambit,
  PokemonVariety.Kingambit,
  PokemonSpecies.Kingambit,
  null,
);
new class GreatTuskForm extends Form {}(
  PokemonForm.GreatTusk,
  PokemonVariety.GreatTusk,
  PokemonSpecies.GreatTusk,
  null,
);
new class ScreamTailForm extends Form {}(
  PokemonForm.ScreamTail,
  PokemonVariety.ScreamTail,
  PokemonSpecies.ScreamTail,
  null,
);
new class BruteBonnetForm extends Form {}(
  PokemonForm.BruteBonnet,
  PokemonVariety.BruteBonnet,
  PokemonSpecies.BruteBonnet,
  null,
);
new class FlutterManeForm extends Form {}(
  PokemonForm.FlutterMane,
  PokemonVariety.FlutterMane,
  PokemonSpecies.FlutterMane,
  null,
);
new class SlitherWingForm extends Form {}(
  PokemonForm.SlitherWing,
  PokemonVariety.SlitherWing,
  PokemonSpecies.SlitherWing,
  null,
);
new class SandyShocksForm extends Form {}(
  PokemonForm.SandyShocks,
  PokemonVariety.SandyShocks,
  PokemonSpecies.SandyShocks,
  null,
);
new class IronTreadsForm extends Form {}(
  PokemonForm.IronTreads,
  PokemonVariety.IronTreads,
  PokemonSpecies.IronTreads,
  null,
);
new class IronBundleForm extends Form {}(
  PokemonForm.IronBundle,
  PokemonVariety.IronBundle,
  PokemonSpecies.IronBundle,
  null,
);
new class IronHandsForm extends Form {}(
  PokemonForm.IronHands,
  PokemonVariety.IronHands,
  PokemonSpecies.IronHands,
  null,
);
new class IronJugulisForm extends Form {}(
  PokemonForm.IronJugulis,
  PokemonVariety.IronJugulis,
  PokemonSpecies.IronJugulis,
  null,
);
new class IronMothForm extends Form {}(
  PokemonForm.IronMoth,
  PokemonVariety.IronMoth,
  PokemonSpecies.IronMoth,
  null,
);
new class IronThornsForm extends Form {}(
  PokemonForm.IronThorns,
  PokemonVariety.IronThorns,
  PokemonSpecies.IronThorns,
  null,
);
new class FrigibaxForm extends Form {}(
  PokemonForm.Frigibax,
  PokemonVariety.Frigibax,
  PokemonSpecies.Frigibax,
  null,
);
new class ArctibaxForm extends Form {}(
  PokemonForm.Arctibax,
  PokemonVariety.Arctibax,
  PokemonSpecies.Arctibax,
  null,
);
new class BaxcaliburForm extends Form {}(
  PokemonForm.Baxcalibur,
  PokemonVariety.Baxcalibur,
  PokemonSpecies.Baxcalibur,
  null,
);
new class GimmighoulChestForm extends Form {}(
  PokemonForm.GimmighoulChest,
  PokemonVariety.Gimmighoul,
  PokemonSpecies.Gimmighoul,
  "Chest Form",
);
new class GimmighoulRoamingForm extends Form {}(
  PokemonForm.GimmighoulRoaming,
  PokemonVariety.GimmighoulRoaming,
  PokemonSpecies.Gimmighoul,
  "Roaming Form",
);
new class GholdengoForm extends Form {}(
  PokemonForm.Gholdengo,
  PokemonVariety.Gholdengo,
  PokemonSpecies.Gholdengo,
  null,
);
new class WoChienForm extends Form {}(
  PokemonForm.WoChien,
  PokemonVariety.WoChien,
  PokemonSpecies.WoChien,
  null,
);
new class ChienPaoForm extends Form {}(
  PokemonForm.ChienPao,
  PokemonVariety.ChienPao,
  PokemonSpecies.ChienPao,
  null,
);
new class TingLuForm extends Form {}(
  PokemonForm.TingLu,
  PokemonVariety.TingLu,
  PokemonSpecies.TingLu,
  null,
);
new class ChiYuForm extends Form {}(
  PokemonForm.ChiYu,
  PokemonVariety.ChiYu,
  PokemonSpecies.ChiYu,
  null,
);
new class RoaringMoonForm extends Form {}(
  PokemonForm.RoaringMoon,
  PokemonVariety.RoaringMoon,
  PokemonSpecies.RoaringMoon,
  null,
);
new class IronValiantForm extends Form {}(
  PokemonForm.IronValiant,
  PokemonVariety.IronValiant,
  PokemonSpecies.IronValiant,
  null,
);
new class KoraidonApexBuildForm extends Form {}(
  PokemonForm.KoraidonApexBuild,
  PokemonVariety.Koraidon,
  PokemonSpecies.Koraidon,
  "Apex Build",
);
new class KoraidonLimitedBuildForm extends Form {}(
  PokemonForm.KoraidonLimitedBuild,
  PokemonVariety.KoraidonLimitedBuild,
  PokemonSpecies.Koraidon,
  "Limited Build",
);
new class KoraidonSprintingBuildForm extends Form {}(
  PokemonForm.KoraidonSprintingBuild,
  PokemonVariety.KoraidonSprintingBuild,
  PokemonSpecies.Koraidon,
  "Sprinting Build",
);
new class KoraidonSwimmingBuildForm extends Form {}(
  PokemonForm.KoraidonSwimmingBuild,
  PokemonVariety.KoraidonSwimmingBuild,
  PokemonSpecies.Koraidon,
  "Swimming Build",
);
new class KoraidonGlidingBuildForm extends Form {}(
  PokemonForm.KoraidonGlidingBuild,
  PokemonVariety.KoraidonGlidingBuild,
  PokemonSpecies.Koraidon,
  "Gliding Build",
);
new class MiraidonUltimateModeForm extends Form {}(
  PokemonForm.MiraidonUltimateMode,
  PokemonVariety.Miraidon,
  PokemonSpecies.Miraidon,
  "Ultimate Mode",
);
new class MiraidonLowPowerModeForm extends Form {}(
  PokemonForm.MiraidonLowPowerMode,
  PokemonVariety.MiraidonLowPowerMode,
  PokemonSpecies.Miraidon,
  "Low-Power Mode",
);
new class MiraidonDriveModeForm extends Form {}(
  PokemonForm.MiraidonDriveMode,
  PokemonVariety.MiraidonDriveMode,
  PokemonSpecies.Miraidon,
  "Drive Mode",
);
new class MiraidonAquaticModeForm extends Form {}(
  PokemonForm.MiraidonAquaticMode,
  PokemonVariety.MiraidonAquaticMode,
  PokemonSpecies.Miraidon,
  "Aquatic Mode",
);
new class MiraidonGlideModeForm extends Form {}(
  PokemonForm.MiraidonGlideMode,
  PokemonVariety.MiraidonGlideMode,
  PokemonSpecies.Miraidon,
  "Glide Mode",
);
new class WalkingWakeForm extends Form {}(
  PokemonForm.WalkingWake,
  PokemonVariety.WalkingWake,
  PokemonSpecies.WalkingWake,
  null,
);
new class IronLeavesForm extends Form {}(
  PokemonForm.IronLeaves,
  PokemonVariety.IronLeaves,
  PokemonSpecies.IronLeaves,
  null,
);
new class DipplinForm extends Form {}(
  PokemonForm.Dipplin,
  PokemonVariety.Dipplin,
  PokemonSpecies.Dipplin,
  null,
);
new class PoltchageistCounterfeitForm extends Form {}(
  PokemonForm.PoltchageistCounterfeit,
  PokemonVariety.Poltchageist,
  PokemonSpecies.Poltchageist,
  "Counterfeit Form",
);
new class PoltchageistArtisanForm extends Form {}(
  PokemonForm.PoltchageistArtisan,
  PokemonVariety.Poltchageist,
  PokemonSpecies.Poltchageist,
  "Artisan Form",
);
new class SinistchaUnremarkableForm extends Form {}(
  PokemonForm.SinistchaUnremarkable,
  PokemonVariety.Sinistcha,
  PokemonSpecies.Sinistcha,
  "Unremarkable Form",
);
new class SinistchaMasterpieceForm extends Form {}(
  PokemonForm.SinistchaMasterpiece,
  PokemonVariety.Sinistcha,
  PokemonSpecies.Sinistcha,
  "Masterpiece Form",
);
new class OkidogiForm extends Form {}(
  PokemonForm.Okidogi,
  PokemonVariety.Okidogi,
  PokemonSpecies.Okidogi,
  null,
);
new class MunkidoriForm extends Form {}(
  PokemonForm.Munkidori,
  PokemonVariety.Munkidori,
  PokemonSpecies.Munkidori,
  null,
);
new class FezandipitiForm extends Form {}(
  PokemonForm.Fezandipiti,
  PokemonVariety.Fezandipiti,
  PokemonSpecies.Fezandipiti,
  null,
);
new class OgerponForm extends Form {}(
  PokemonForm.Ogerpon,
  PokemonVariety.Ogerpon,
  PokemonSpecies.Ogerpon,
  "Teal Mask",
);
new class OgerponWellspringMaskForm extends Form {}(
  PokemonForm.OgerponWellspringMask,
  PokemonVariety.OgerponWellspringMask,
  PokemonSpecies.Ogerpon,
  "Wellspring Mask",
);
new class OgerponHearthflameMaskForm extends Form {}(
  PokemonForm.OgerponHearthflameMask,
  PokemonVariety.OgerponHearthflameMask,
  PokemonSpecies.Ogerpon,
  "Hearthflame Mask",
);
new class OgerponCornerstoneMaskForm extends Form {}(
  PokemonForm.OgerponCornerstoneMask,
  PokemonVariety.OgerponCornerstoneMask,
  PokemonSpecies.Ogerpon,
  "Cornerstone Mask",
);
new class ArchaludonForm extends Form {}(
  PokemonForm.Archaludon,
  PokemonVariety.Archaludon,
  PokemonSpecies.Archaludon,
  null,
);
new class HydrappleForm extends Form {}(
  PokemonForm.Hydrapple,
  PokemonVariety.Hydrapple,
  PokemonSpecies.Hydrapple,
  null,
);
new class GougingFireForm extends Form {}(
  PokemonForm.GougingFire,
  PokemonVariety.GougingFire,
  PokemonSpecies.GougingFire,
  null,
);
new class RagingBoltForm extends Form {}(
  PokemonForm.RagingBolt,
  PokemonVariety.RagingBolt,
  PokemonSpecies.RagingBolt,
  null,
);
new class IronBoulderForm extends Form {}(
  PokemonForm.IronBoulder,
  PokemonVariety.IronBoulder,
  PokemonSpecies.IronBoulder,
  null,
);
new class IronCrownForm extends Form {}(
  PokemonForm.IronCrown,
  PokemonVariety.IronCrown,
  PokemonSpecies.IronCrown,
  null,
);
new class TerapagosForm extends Form {}(
  PokemonForm.Terapagos,
  PokemonVariety.Terapagos,
  PokemonSpecies.Terapagos,
  "Normal Form",
);
new class TerapagosTerastalForm extends Form {}(
  PokemonForm.TerapagosTerastal,
  PokemonVariety.TerapagosTerastal,
  PokemonSpecies.Terapagos,
  "Terastal Form",
);
new class TerapagosStellarForm extends Form {}(
  PokemonForm.TerapagosStellar,
  PokemonVariety.TerapagosStellar,
  PokemonSpecies.Terapagos,
  "Stellar Form",
);
new class PecharuntForm extends Form {}(
  PokemonForm.Pecharunt,
  PokemonVariety.Pecharunt,
  PokemonSpecies.Pecharunt,
  null,
);