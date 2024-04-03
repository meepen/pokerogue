// AUTO GENERATED FILE
import { IPokemonForm } from "#pokeapi/pokemon-form.interface";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonForm } from "#pokeapi/generated/form.enum";
import { PokemonVariety } from "#pokeapi/generated/variety.enum";
import { PokemonType } from "#pokeapi/generated/type.enum";

export const formsList = new Map<PokemonForm, IPokemonForm>();

class Form extends IPokemonForm {
  constructor(
    form: PokemonForm,
    variety: PokemonVariety,
    species: PokemonSpecies,
    name: string | null,
    types: PokemonType[],
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
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class IvysaurForm extends Form {}(
  PokemonForm.Ivysaur,
  PokemonVariety.Ivysaur,
  PokemonSpecies.Ivysaur,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class VenusaurForm extends Form {}(
  PokemonForm.Venusaur,
  PokemonVariety.Venusaur,
  PokemonSpecies.Venusaur,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class VenusaurMegaForm extends Form {}(
  PokemonForm.VenusaurMega,
  PokemonVariety.VenusaurMega,
  PokemonSpecies.Venusaur,
  "Mega Venusaur",
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class VenusaurGmaxForm extends Form {}(
  PokemonForm.VenusaurGmax,
  PokemonVariety.VenusaurGmax,
  PokemonSpecies.Venusaur,
  "Gigantamax Venusaur",
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class CharmanderForm extends Form {}(
  PokemonForm.Charmander,
  PokemonVariety.Charmander,
  PokemonSpecies.Charmander,
  null,
  [ PokemonType.Fire ],
);
new class CharmeleonForm extends Form {}(
  PokemonForm.Charmeleon,
  PokemonVariety.Charmeleon,
  PokemonSpecies.Charmeleon,
  null,
  [ PokemonType.Fire ],
);
new class CharizardForm extends Form {}(
  PokemonForm.Charizard,
  PokemonVariety.Charizard,
  PokemonSpecies.Charizard,
  null,
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class CharizardMegaXForm extends Form {}(
  PokemonForm.CharizardMegaX,
  PokemonVariety.CharizardMegaX,
  PokemonSpecies.Charizard,
  "Mega Charizard X",
  [ PokemonType.Fire, PokemonType.Dragon ],
);
new class CharizardMegaYForm extends Form {}(
  PokemonForm.CharizardMegaY,
  PokemonVariety.CharizardMegaY,
  PokemonSpecies.Charizard,
  "Mega Charizard Y",
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class CharizardGmaxForm extends Form {}(
  PokemonForm.CharizardGmax,
  PokemonVariety.CharizardGmax,
  PokemonSpecies.Charizard,
  "Gigantamax Charizard",
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class SquirtleForm extends Form {}(
  PokemonForm.Squirtle,
  PokemonVariety.Squirtle,
  PokemonSpecies.Squirtle,
  null,
  [ PokemonType.Water ],
);
new class WartortleForm extends Form {}(
  PokemonForm.Wartortle,
  PokemonVariety.Wartortle,
  PokemonSpecies.Wartortle,
  null,
  [ PokemonType.Water ],
);
new class BlastoiseForm extends Form {}(
  PokemonForm.Blastoise,
  PokemonVariety.Blastoise,
  PokemonSpecies.Blastoise,
  null,
  [ PokemonType.Water ],
);
new class BlastoiseMegaForm extends Form {}(
  PokemonForm.BlastoiseMega,
  PokemonVariety.BlastoiseMega,
  PokemonSpecies.Blastoise,
  "Mega Blastoise",
  [ PokemonType.Water ],
);
new class BlastoiseGmaxForm extends Form {}(
  PokemonForm.BlastoiseGmax,
  PokemonVariety.BlastoiseGmax,
  PokemonSpecies.Blastoise,
  "Gigantamax Blastoise",
  [ PokemonType.Water ],
);
new class CaterpieForm extends Form {}(
  PokemonForm.Caterpie,
  PokemonVariety.Caterpie,
  PokemonSpecies.Caterpie,
  null,
  [ PokemonType.Bug ],
);
new class MetapodForm extends Form {}(
  PokemonForm.Metapod,
  PokemonVariety.Metapod,
  PokemonSpecies.Metapod,
  null,
  [ PokemonType.Bug ],
);
new class ButterfreeForm extends Form {}(
  PokemonForm.Butterfree,
  PokemonVariety.Butterfree,
  PokemonSpecies.Butterfree,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class ButterfreeGmaxForm extends Form {}(
  PokemonForm.ButterfreeGmax,
  PokemonVariety.ButterfreeGmax,
  PokemonSpecies.Butterfree,
  "Gigantamax Butterfree",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class WeedleForm extends Form {}(
  PokemonForm.Weedle,
  PokemonVariety.Weedle,
  PokemonSpecies.Weedle,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class KakunaForm extends Form {}(
  PokemonForm.Kakuna,
  PokemonVariety.Kakuna,
  PokemonSpecies.Kakuna,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class BeedrillForm extends Form {}(
  PokemonForm.Beedrill,
  PokemonVariety.Beedrill,
  PokemonSpecies.Beedrill,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class BeedrillMegaForm extends Form {}(
  PokemonForm.BeedrillMega,
  PokemonVariety.BeedrillMega,
  PokemonSpecies.Beedrill,
  "Mega Beedrill",
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class PidgeyForm extends Form {}(
  PokemonForm.Pidgey,
  PokemonVariety.Pidgey,
  PokemonSpecies.Pidgey,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class PidgeottoForm extends Form {}(
  PokemonForm.Pidgeotto,
  PokemonVariety.Pidgeotto,
  PokemonSpecies.Pidgeotto,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class PidgeotForm extends Form {}(
  PokemonForm.Pidgeot,
  PokemonVariety.Pidgeot,
  PokemonSpecies.Pidgeot,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class PidgeotMegaForm extends Form {}(
  PokemonForm.PidgeotMega,
  PokemonVariety.PidgeotMega,
  PokemonSpecies.Pidgeot,
  "Mega Pidgeot",
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class RattataForm extends Form {}(
  PokemonForm.Rattata,
  PokemonVariety.Rattata,
  PokemonSpecies.Rattata,
  null,
  [ PokemonType.Normal ],
);
new class RattataAlolaForm extends Form {}(
  PokemonForm.RattataAlola,
  PokemonVariety.RattataAlola,
  PokemonSpecies.Rattata,
  "Alolan Rattata",
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class RaticateForm extends Form {}(
  PokemonForm.Raticate,
  PokemonVariety.Raticate,
  PokemonSpecies.Raticate,
  null,
  [ PokemonType.Normal ],
);
new class RaticateAlolaForm extends Form {}(
  PokemonForm.RaticateAlola,
  PokemonVariety.RaticateAlola,
  PokemonSpecies.Raticate,
  "Alolan Raticate",
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class RaticateTotemAlolaForm extends Form {}(
  PokemonForm.RaticateTotemAlola,
  PokemonVariety.RaticateTotemAlola,
  PokemonSpecies.Raticate,
  "Totem Alolan Raticate",
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class SpearowForm extends Form {}(
  PokemonForm.Spearow,
  PokemonVariety.Spearow,
  PokemonSpecies.Spearow,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class FearowForm extends Form {}(
  PokemonForm.Fearow,
  PokemonVariety.Fearow,
  PokemonSpecies.Fearow,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class EkansForm extends Form {}(
  PokemonForm.Ekans,
  PokemonVariety.Ekans,
  PokemonSpecies.Ekans,
  null,
  [ PokemonType.Poison ],
);
new class ArbokForm extends Form {}(
  PokemonForm.Arbok,
  PokemonVariety.Arbok,
  PokemonSpecies.Arbok,
  null,
  [ PokemonType.Poison ],
);
new class PikachuForm extends Form {}(
  PokemonForm.Pikachu,
  PokemonVariety.Pikachu,
  PokemonSpecies.Pikachu,
  null,
  [ PokemonType.Electric ],
);
new class PikachuRockStarForm extends Form {}(
  PokemonForm.PikachuRockStar,
  PokemonVariety.PikachuRockStar,
  PokemonSpecies.Pikachu,
  "Pikachu Rock Star",
  [ PokemonType.Electric ],
);
new class PikachuBelleForm extends Form {}(
  PokemonForm.PikachuBelle,
  PokemonVariety.PikachuBelle,
  PokemonSpecies.Pikachu,
  "Pikachu Belle",
  [ PokemonType.Electric ],
);
new class PikachuPopStarForm extends Form {}(
  PokemonForm.PikachuPopStar,
  PokemonVariety.PikachuPopStar,
  PokemonSpecies.Pikachu,
  "Pikachu Pop Star",
  [ PokemonType.Electric ],
);
new class PikachuPhdForm extends Form {}(
  PokemonForm.PikachuPhd,
  PokemonVariety.PikachuPhd,
  PokemonSpecies.Pikachu,
  "Pikachu Ph.D.",
  [ PokemonType.Electric ],
);
new class PikachuLibreForm extends Form {}(
  PokemonForm.PikachuLibre,
  PokemonVariety.PikachuLibre,
  PokemonSpecies.Pikachu,
  "Pikachu Libre",
  [ PokemonType.Electric ],
);
new class PikachuCosplayForm extends Form {}(
  PokemonForm.PikachuCosplay,
  PokemonVariety.PikachuCosplay,
  PokemonSpecies.Pikachu,
  "Cosplay Pikachu",
  [ PokemonType.Electric ],
);
new class PikachuOriginalCapForm extends Form {}(
  PokemonForm.PikachuOriginalCap,
  PokemonVariety.PikachuOriginalCap,
  PokemonSpecies.Pikachu,
  "Original Cap Pikachu",
  [ PokemonType.Electric ],
);
new class PikachuHoennCapForm extends Form {}(
  PokemonForm.PikachuHoennCap,
  PokemonVariety.PikachuHoennCap,
  PokemonSpecies.Pikachu,
  "Hoenn Cap Pikachu",
  [ PokemonType.Electric ],
);
new class PikachuSinnohCapForm extends Form {}(
  PokemonForm.PikachuSinnohCap,
  PokemonVariety.PikachuSinnohCap,
  PokemonSpecies.Pikachu,
  "Sinnoh Cap Pikachu",
  [ PokemonType.Electric ],
);
new class PikachuUnovaCapForm extends Form {}(
  PokemonForm.PikachuUnovaCap,
  PokemonVariety.PikachuUnovaCap,
  PokemonSpecies.Pikachu,
  "Unova Cap Pikachu",
  [ PokemonType.Electric ],
);
new class PikachuKalosCapForm extends Form {}(
  PokemonForm.PikachuKalosCap,
  PokemonVariety.PikachuKalosCap,
  PokemonSpecies.Pikachu,
  "Kalos Cap Pikachu",
  [ PokemonType.Electric ],
);
new class PikachuAlolaCapForm extends Form {}(
  PokemonForm.PikachuAlolaCap,
  PokemonVariety.PikachuAlolaCap,
  PokemonSpecies.Pikachu,
  "Alola Cap Pikachu",
  [ PokemonType.Electric ],
);
new class PikachuPartnerCapForm extends Form {}(
  PokemonForm.PikachuPartnerCap,
  PokemonVariety.PikachuPartnerCap,
  PokemonSpecies.Pikachu,
  "Partner Cap Pikachu",
  [ PokemonType.Electric ],
);
new class PikachuStarterForm extends Form {}(
  PokemonForm.PikachuStarter,
  PokemonVariety.PikachuStarter,
  PokemonSpecies.Pikachu,
  "Partner Pikachu",
  [ PokemonType.Electric ],
);
new class PikachuWorldCapForm extends Form {}(
  PokemonForm.PikachuWorldCap,
  PokemonVariety.PikachuWorldCap,
  PokemonSpecies.Pikachu,
  "World Cap Pikachu",
  [ PokemonType.Electric ],
);
new class PikachuGmaxForm extends Form {}(
  PokemonForm.PikachuGmax,
  PokemonVariety.PikachuGmax,
  PokemonSpecies.Pikachu,
  "Gigantamax Pikachu",
  [ PokemonType.Electric ],
);
new class RaichuForm extends Form {}(
  PokemonForm.Raichu,
  PokemonVariety.Raichu,
  PokemonSpecies.Raichu,
  null,
  [ PokemonType.Electric ],
);
new class RaichuAlolaForm extends Form {}(
  PokemonForm.RaichuAlola,
  PokemonVariety.RaichuAlola,
  PokemonSpecies.Raichu,
  "Alolan Raichu",
  [ PokemonType.Electric, PokemonType.Psychic ],
);
new class SandshrewForm extends Form {}(
  PokemonForm.Sandshrew,
  PokemonVariety.Sandshrew,
  PokemonSpecies.Sandshrew,
  null,
  [ PokemonType.Ground ],
);
new class SandshrewAlolaForm extends Form {}(
  PokemonForm.SandshrewAlola,
  PokemonVariety.SandshrewAlola,
  PokemonSpecies.Sandshrew,
  "Alolan Sandshrew",
  [ PokemonType.Ice, PokemonType.Steel ],
);
new class SandslashForm extends Form {}(
  PokemonForm.Sandslash,
  PokemonVariety.Sandslash,
  PokemonSpecies.Sandslash,
  null,
  [ PokemonType.Ground ],
);
new class SandslashAlolaForm extends Form {}(
  PokemonForm.SandslashAlola,
  PokemonVariety.SandslashAlola,
  PokemonSpecies.Sandslash,
  "Alolan Sandslash",
  [ PokemonType.Ice, PokemonType.Steel ],
);
new class NidoranFForm extends Form {}(
  PokemonForm.NidoranF,
  PokemonVariety.NidoranF,
  PokemonSpecies.NidoranF,
  null,
  [ PokemonType.Poison ],
);
new class NidorinaForm extends Form {}(
  PokemonForm.Nidorina,
  PokemonVariety.Nidorina,
  PokemonSpecies.Nidorina,
  null,
  [ PokemonType.Poison ],
);
new class NidoqueenForm extends Form {}(
  PokemonForm.Nidoqueen,
  PokemonVariety.Nidoqueen,
  PokemonSpecies.Nidoqueen,
  null,
  [ PokemonType.Poison, PokemonType.Ground ],
);
new class NidoranMForm extends Form {}(
  PokemonForm.NidoranM,
  PokemonVariety.NidoranM,
  PokemonSpecies.NidoranM,
  null,
  [ PokemonType.Poison ],
);
new class NidorinoForm extends Form {}(
  PokemonForm.Nidorino,
  PokemonVariety.Nidorino,
  PokemonSpecies.Nidorino,
  null,
  [ PokemonType.Poison ],
);
new class NidokingForm extends Form {}(
  PokemonForm.Nidoking,
  PokemonVariety.Nidoking,
  PokemonSpecies.Nidoking,
  null,
  [ PokemonType.Poison, PokemonType.Ground ],
);
new class ClefairyForm extends Form {}(
  PokemonForm.Clefairy,
  PokemonVariety.Clefairy,
  PokemonSpecies.Clefairy,
  null,
  [ PokemonType.Fairy ],
);
new class ClefableForm extends Form {}(
  PokemonForm.Clefable,
  PokemonVariety.Clefable,
  PokemonSpecies.Clefable,
  null,
  [ PokemonType.Fairy ],
);
new class VulpixForm extends Form {}(
  PokemonForm.Vulpix,
  PokemonVariety.Vulpix,
  PokemonSpecies.Vulpix,
  null,
  [ PokemonType.Fire ],
);
new class VulpixAlolaForm extends Form {}(
  PokemonForm.VulpixAlola,
  PokemonVariety.VulpixAlola,
  PokemonSpecies.Vulpix,
  "Alolan Vulpix",
  [ PokemonType.Ice ],
);
new class NinetalesForm extends Form {}(
  PokemonForm.Ninetales,
  PokemonVariety.Ninetales,
  PokemonSpecies.Ninetales,
  null,
  [ PokemonType.Fire ],
);
new class NinetalesAlolaForm extends Form {}(
  PokemonForm.NinetalesAlola,
  PokemonVariety.NinetalesAlola,
  PokemonSpecies.Ninetales,
  "Alolan Ninetales",
  [ PokemonType.Ice, PokemonType.Fairy ],
);
new class JigglypuffForm extends Form {}(
  PokemonForm.Jigglypuff,
  PokemonVariety.Jigglypuff,
  PokemonSpecies.Jigglypuff,
  null,
  [ PokemonType.Normal, PokemonType.Fairy ],
);
new class WigglytuffForm extends Form {}(
  PokemonForm.Wigglytuff,
  PokemonVariety.Wigglytuff,
  PokemonSpecies.Wigglytuff,
  null,
  [ PokemonType.Normal, PokemonType.Fairy ],
);
new class ZubatForm extends Form {}(
  PokemonForm.Zubat,
  PokemonVariety.Zubat,
  PokemonSpecies.Zubat,
  null,
  [ PokemonType.Poison, PokemonType.Flying ],
);
new class GolbatForm extends Form {}(
  PokemonForm.Golbat,
  PokemonVariety.Golbat,
  PokemonSpecies.Golbat,
  null,
  [ PokemonType.Poison, PokemonType.Flying ],
);
new class OddishForm extends Form {}(
  PokemonForm.Oddish,
  PokemonVariety.Oddish,
  PokemonSpecies.Oddish,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class GloomForm extends Form {}(
  PokemonForm.Gloom,
  PokemonVariety.Gloom,
  PokemonSpecies.Gloom,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class VileplumeForm extends Form {}(
  PokemonForm.Vileplume,
  PokemonVariety.Vileplume,
  PokemonSpecies.Vileplume,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class ParasForm extends Form {}(
  PokemonForm.Paras,
  PokemonVariety.Paras,
  PokemonSpecies.Paras,
  null,
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class ParasectForm extends Form {}(
  PokemonForm.Parasect,
  PokemonVariety.Parasect,
  PokemonSpecies.Parasect,
  null,
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class VenonatForm extends Form {}(
  PokemonForm.Venonat,
  PokemonVariety.Venonat,
  PokemonSpecies.Venonat,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class VenomothForm extends Form {}(
  PokemonForm.Venomoth,
  PokemonVariety.Venomoth,
  PokemonSpecies.Venomoth,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class DiglettForm extends Form {}(
  PokemonForm.Diglett,
  PokemonVariety.Diglett,
  PokemonSpecies.Diglett,
  null,
  [ PokemonType.Ground ],
);
new class DiglettAlolaForm extends Form {}(
  PokemonForm.DiglettAlola,
  PokemonVariety.DiglettAlola,
  PokemonSpecies.Diglett,
  "Alolan Diglett",
  [ PokemonType.Ground, PokemonType.Steel ],
);
new class DugtrioForm extends Form {}(
  PokemonForm.Dugtrio,
  PokemonVariety.Dugtrio,
  PokemonSpecies.Dugtrio,
  null,
  [ PokemonType.Ground ],
);
new class DugtrioAlolaForm extends Form {}(
  PokemonForm.DugtrioAlola,
  PokemonVariety.DugtrioAlola,
  PokemonSpecies.Dugtrio,
  "Alolan Dugtrio",
  [ PokemonType.Ground, PokemonType.Steel ],
);
new class MeowthForm extends Form {}(
  PokemonForm.Meowth,
  PokemonVariety.Meowth,
  PokemonSpecies.Meowth,
  null,
  [ PokemonType.Normal ],
);
new class MeowthAlolaForm extends Form {}(
  PokemonForm.MeowthAlola,
  PokemonVariety.MeowthAlola,
  PokemonSpecies.Meowth,
  "Alolan Meowth",
  [ PokemonType.Dark ],
);
new class MeowthGalarForm extends Form {}(
  PokemonForm.MeowthGalar,
  PokemonVariety.MeowthGalar,
  PokemonSpecies.Meowth,
  "Galarian Meowth",
  [ PokemonType.Steel ],
);
new class MeowthGmaxForm extends Form {}(
  PokemonForm.MeowthGmax,
  PokemonVariety.MeowthGmax,
  PokemonSpecies.Meowth,
  "Gigantamax Meowth",
  [ PokemonType.Normal ],
);
new class PersianForm extends Form {}(
  PokemonForm.Persian,
  PokemonVariety.Persian,
  PokemonSpecies.Persian,
  null,
  [ PokemonType.Normal ],
);
new class PersianAlolaForm extends Form {}(
  PokemonForm.PersianAlola,
  PokemonVariety.PersianAlola,
  PokemonSpecies.Persian,
  "Alolan Persian",
  [ PokemonType.Dark ],
);
new class PsyduckForm extends Form {}(
  PokemonForm.Psyduck,
  PokemonVariety.Psyduck,
  PokemonSpecies.Psyduck,
  null,
  [ PokemonType.Water ],
);
new class GolduckForm extends Form {}(
  PokemonForm.Golduck,
  PokemonVariety.Golduck,
  PokemonSpecies.Golduck,
  null,
  [ PokemonType.Water ],
);
new class MankeyForm extends Form {}(
  PokemonForm.Mankey,
  PokemonVariety.Mankey,
  PokemonSpecies.Mankey,
  null,
  [ PokemonType.Fighting ],
);
new class PrimeapeForm extends Form {}(
  PokemonForm.Primeape,
  PokemonVariety.Primeape,
  PokemonSpecies.Primeape,
  null,
  [ PokemonType.Fighting ],
);
new class GrowlitheForm extends Form {}(
  PokemonForm.Growlithe,
  PokemonVariety.Growlithe,
  PokemonSpecies.Growlithe,
  null,
  [ PokemonType.Fire ],
);
new class GrowlitheHisuiForm extends Form {}(
  PokemonForm.GrowlitheHisui,
  PokemonVariety.GrowlitheHisui,
  PokemonSpecies.Growlithe,
  "Hisuian Growlithe",
  [ PokemonType.Fire, PokemonType.Rock ],
);
new class ArcanineForm extends Form {}(
  PokemonForm.Arcanine,
  PokemonVariety.Arcanine,
  PokemonSpecies.Arcanine,
  null,
  [ PokemonType.Fire ],
);
new class ArcanineHisuiForm extends Form {}(
  PokemonForm.ArcanineHisui,
  PokemonVariety.ArcanineHisui,
  PokemonSpecies.Arcanine,
  "Hisuian Arcanine",
  [ PokemonType.Fire, PokemonType.Rock ],
);
new class PoliwagForm extends Form {}(
  PokemonForm.Poliwag,
  PokemonVariety.Poliwag,
  PokemonSpecies.Poliwag,
  null,
  [ PokemonType.Water ],
);
new class PoliwhirlForm extends Form {}(
  PokemonForm.Poliwhirl,
  PokemonVariety.Poliwhirl,
  PokemonSpecies.Poliwhirl,
  null,
  [ PokemonType.Water ],
);
new class PoliwrathForm extends Form {}(
  PokemonForm.Poliwrath,
  PokemonVariety.Poliwrath,
  PokemonSpecies.Poliwrath,
  null,
  [ PokemonType.Water, PokemonType.Fighting ],
);
new class AbraForm extends Form {}(
  PokemonForm.Abra,
  PokemonVariety.Abra,
  PokemonSpecies.Abra,
  null,
  [ PokemonType.Psychic ],
);
new class KadabraForm extends Form {}(
  PokemonForm.Kadabra,
  PokemonVariety.Kadabra,
  PokemonSpecies.Kadabra,
  null,
  [ PokemonType.Psychic ],
);
new class AlakazamForm extends Form {}(
  PokemonForm.Alakazam,
  PokemonVariety.Alakazam,
  PokemonSpecies.Alakazam,
  null,
  [ PokemonType.Psychic ],
);
new class AlakazamMegaForm extends Form {}(
  PokemonForm.AlakazamMega,
  PokemonVariety.AlakazamMega,
  PokemonSpecies.Alakazam,
  "Mega Alakazam",
  [ PokemonType.Psychic ],
);
new class MachopForm extends Form {}(
  PokemonForm.Machop,
  PokemonVariety.Machop,
  PokemonSpecies.Machop,
  null,
  [ PokemonType.Fighting ],
);
new class MachokeForm extends Form {}(
  PokemonForm.Machoke,
  PokemonVariety.Machoke,
  PokemonSpecies.Machoke,
  null,
  [ PokemonType.Fighting ],
);
new class MachampForm extends Form {}(
  PokemonForm.Machamp,
  PokemonVariety.Machamp,
  PokemonSpecies.Machamp,
  null,
  [ PokemonType.Fighting ],
);
new class MachampGmaxForm extends Form {}(
  PokemonForm.MachampGmax,
  PokemonVariety.MachampGmax,
  PokemonSpecies.Machamp,
  "Gigantamax Machamp",
  [ PokemonType.Fighting ],
);
new class BellsproutForm extends Form {}(
  PokemonForm.Bellsprout,
  PokemonVariety.Bellsprout,
  PokemonSpecies.Bellsprout,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class WeepinbellForm extends Form {}(
  PokemonForm.Weepinbell,
  PokemonVariety.Weepinbell,
  PokemonSpecies.Weepinbell,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class VictreebelForm extends Form {}(
  PokemonForm.Victreebel,
  PokemonVariety.Victreebel,
  PokemonSpecies.Victreebel,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class TentacoolForm extends Form {}(
  PokemonForm.Tentacool,
  PokemonVariety.Tentacool,
  PokemonSpecies.Tentacool,
  null,
  [ PokemonType.Water, PokemonType.Poison ],
);
new class TentacruelForm extends Form {}(
  PokemonForm.Tentacruel,
  PokemonVariety.Tentacruel,
  PokemonSpecies.Tentacruel,
  null,
  [ PokemonType.Water, PokemonType.Poison ],
);
new class GeodudeForm extends Form {}(
  PokemonForm.Geodude,
  PokemonVariety.Geodude,
  PokemonSpecies.Geodude,
  null,
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class GeodudeAlolaForm extends Form {}(
  PokemonForm.GeodudeAlola,
  PokemonVariety.GeodudeAlola,
  PokemonSpecies.Geodude,
  "Alolan Geodude",
  [ PokemonType.Rock, PokemonType.Electric ],
);
new class GravelerForm extends Form {}(
  PokemonForm.Graveler,
  PokemonVariety.Graveler,
  PokemonSpecies.Graveler,
  null,
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class GravelerAlolaForm extends Form {}(
  PokemonForm.GravelerAlola,
  PokemonVariety.GravelerAlola,
  PokemonSpecies.Graveler,
  "Alolan Graveler",
  [ PokemonType.Rock, PokemonType.Electric ],
);
new class GolemForm extends Form {}(
  PokemonForm.Golem,
  PokemonVariety.Golem,
  PokemonSpecies.Golem,
  null,
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class GolemAlolaForm extends Form {}(
  PokemonForm.GolemAlola,
  PokemonVariety.GolemAlola,
  PokemonSpecies.Golem,
  "Alolan Golem",
  [ PokemonType.Rock, PokemonType.Electric ],
);
new class PonytaForm extends Form {}(
  PokemonForm.Ponyta,
  PokemonVariety.Ponyta,
  PokemonSpecies.Ponyta,
  null,
  [ PokemonType.Fire ],
);
new class PonytaGalarForm extends Form {}(
  PokemonForm.PonytaGalar,
  PokemonVariety.PonytaGalar,
  PokemonSpecies.Ponyta,
  "Galarian Ponyta",
  [ PokemonType.Psychic ],
);
new class RapidashForm extends Form {}(
  PokemonForm.Rapidash,
  PokemonVariety.Rapidash,
  PokemonSpecies.Rapidash,
  null,
  [ PokemonType.Fire ],
);
new class RapidashGalarForm extends Form {}(
  PokemonForm.RapidashGalar,
  PokemonVariety.RapidashGalar,
  PokemonSpecies.Rapidash,
  "Galarian Rapidash",
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class SlowpokeForm extends Form {}(
  PokemonForm.Slowpoke,
  PokemonVariety.Slowpoke,
  PokemonSpecies.Slowpoke,
  null,
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class SlowpokeGalarForm extends Form {}(
  PokemonForm.SlowpokeGalar,
  PokemonVariety.SlowpokeGalar,
  PokemonSpecies.Slowpoke,
  "Galarian Slowpoke",
  [ PokemonType.Psychic ],
);
new class SlowbroForm extends Form {}(
  PokemonForm.Slowbro,
  PokemonVariety.Slowbro,
  PokemonSpecies.Slowbro,
  null,
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class SlowbroMegaForm extends Form {}(
  PokemonForm.SlowbroMega,
  PokemonVariety.SlowbroMega,
  PokemonSpecies.Slowbro,
  "Mega Slowbro",
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class SlowbroGalarForm extends Form {}(
  PokemonForm.SlowbroGalar,
  PokemonVariety.SlowbroGalar,
  PokemonSpecies.Slowbro,
  "Galarian Slowbro",
  [ PokemonType.Poison, PokemonType.Psychic ],
);
new class MagnemiteForm extends Form {}(
  PokemonForm.Magnemite,
  PokemonVariety.Magnemite,
  PokemonSpecies.Magnemite,
  null,
  [ PokemonType.Electric, PokemonType.Steel ],
);
new class MagnetonForm extends Form {}(
  PokemonForm.Magneton,
  PokemonVariety.Magneton,
  PokemonSpecies.Magneton,
  null,
  [ PokemonType.Electric, PokemonType.Steel ],
);
new class FarfetchdForm extends Form {}(
  PokemonForm.Farfetchd,
  PokemonVariety.Farfetchd,
  PokemonSpecies.Farfetchd,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class FarfetchdGalarForm extends Form {}(
  PokemonForm.FarfetchdGalar,
  PokemonVariety.FarfetchdGalar,
  PokemonSpecies.Farfetchd,
  "Galarian Farfetch’d",
  [ PokemonType.Fighting ],
);
new class DoduoForm extends Form {}(
  PokemonForm.Doduo,
  PokemonVariety.Doduo,
  PokemonSpecies.Doduo,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class DodrioForm extends Form {}(
  PokemonForm.Dodrio,
  PokemonVariety.Dodrio,
  PokemonSpecies.Dodrio,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SeelForm extends Form {}(
  PokemonForm.Seel,
  PokemonVariety.Seel,
  PokemonSpecies.Seel,
  null,
  [ PokemonType.Water ],
);
new class DewgongForm extends Form {}(
  PokemonForm.Dewgong,
  PokemonVariety.Dewgong,
  PokemonSpecies.Dewgong,
  null,
  [ PokemonType.Water, PokemonType.Ice ],
);
new class GrimerForm extends Form {}(
  PokemonForm.Grimer,
  PokemonVariety.Grimer,
  PokemonSpecies.Grimer,
  null,
  [ PokemonType.Poison ],
);
new class GrimerAlolaForm extends Form {}(
  PokemonForm.GrimerAlola,
  PokemonVariety.GrimerAlola,
  PokemonSpecies.Grimer,
  "Alolan Grimer",
  [ PokemonType.Poison, PokemonType.Dark ],
);
new class MukForm extends Form {}(
  PokemonForm.Muk,
  PokemonVariety.Muk,
  PokemonSpecies.Muk,
  null,
  [ PokemonType.Poison ],
);
new class MukAlolaForm extends Form {}(
  PokemonForm.MukAlola,
  PokemonVariety.MukAlola,
  PokemonSpecies.Muk,
  "Alolan Muk",
  [ PokemonType.Poison, PokemonType.Dark ],
);
new class ShellderForm extends Form {}(
  PokemonForm.Shellder,
  PokemonVariety.Shellder,
  PokemonSpecies.Shellder,
  null,
  [ PokemonType.Water ],
);
new class CloysterForm extends Form {}(
  PokemonForm.Cloyster,
  PokemonVariety.Cloyster,
  PokemonSpecies.Cloyster,
  null,
  [ PokemonType.Water, PokemonType.Ice ],
);
new class GastlyForm extends Form {}(
  PokemonForm.Gastly,
  PokemonVariety.Gastly,
  PokemonSpecies.Gastly,
  null,
  [ PokemonType.Ghost, PokemonType.Poison ],
);
new class HaunterForm extends Form {}(
  PokemonForm.Haunter,
  PokemonVariety.Haunter,
  PokemonSpecies.Haunter,
  null,
  [ PokemonType.Ghost, PokemonType.Poison ],
);
new class GengarForm extends Form {}(
  PokemonForm.Gengar,
  PokemonVariety.Gengar,
  PokemonSpecies.Gengar,
  null,
  [ PokemonType.Ghost, PokemonType.Poison ],
);
new class GengarMegaForm extends Form {}(
  PokemonForm.GengarMega,
  PokemonVariety.GengarMega,
  PokemonSpecies.Gengar,
  "Mega Gengar",
  [ PokemonType.Ghost, PokemonType.Poison ],
);
new class GengarGmaxForm extends Form {}(
  PokemonForm.GengarGmax,
  PokemonVariety.GengarGmax,
  PokemonSpecies.Gengar,
  "Gigantamax Gengar",
  [ PokemonType.Ghost, PokemonType.Poison ],
);
new class OnixForm extends Form {}(
  PokemonForm.Onix,
  PokemonVariety.Onix,
  PokemonSpecies.Onix,
  null,
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class DrowzeeForm extends Form {}(
  PokemonForm.Drowzee,
  PokemonVariety.Drowzee,
  PokemonSpecies.Drowzee,
  null,
  [ PokemonType.Psychic ],
);
new class HypnoForm extends Form {}(
  PokemonForm.Hypno,
  PokemonVariety.Hypno,
  PokemonSpecies.Hypno,
  null,
  [ PokemonType.Psychic ],
);
new class KrabbyForm extends Form {}(
  PokemonForm.Krabby,
  PokemonVariety.Krabby,
  PokemonSpecies.Krabby,
  null,
  [ PokemonType.Water ],
);
new class KinglerForm extends Form {}(
  PokemonForm.Kingler,
  PokemonVariety.Kingler,
  PokemonSpecies.Kingler,
  null,
  [ PokemonType.Water ],
);
new class KinglerGmaxForm extends Form {}(
  PokemonForm.KinglerGmax,
  PokemonVariety.KinglerGmax,
  PokemonSpecies.Kingler,
  "Gigantamax Kingler",
  [ PokemonType.Water ],
);
new class VoltorbForm extends Form {}(
  PokemonForm.Voltorb,
  PokemonVariety.Voltorb,
  PokemonSpecies.Voltorb,
  null,
  [ PokemonType.Electric ],
);
new class VoltorbHisuiForm extends Form {}(
  PokemonForm.VoltorbHisui,
  PokemonVariety.VoltorbHisui,
  PokemonSpecies.Voltorb,
  "Hisuian Voltorb",
  [ PokemonType.Electric, PokemonType.Grass ],
);
new class ElectrodeForm extends Form {}(
  PokemonForm.Electrode,
  PokemonVariety.Electrode,
  PokemonSpecies.Electrode,
  null,
  [ PokemonType.Electric ],
);
new class ElectrodeHisuiForm extends Form {}(
  PokemonForm.ElectrodeHisui,
  PokemonVariety.ElectrodeHisui,
  PokemonSpecies.Electrode,
  "Hisuian Electrode",
  [ PokemonType.Electric, PokemonType.Grass ],
);
new class ExeggcuteForm extends Form {}(
  PokemonForm.Exeggcute,
  PokemonVariety.Exeggcute,
  PokemonSpecies.Exeggcute,
  null,
  [ PokemonType.Grass, PokemonType.Psychic ],
);
new class ExeggutorForm extends Form {}(
  PokemonForm.Exeggutor,
  PokemonVariety.Exeggutor,
  PokemonSpecies.Exeggutor,
  null,
  [ PokemonType.Grass, PokemonType.Psychic ],
);
new class ExeggutorAlolaForm extends Form {}(
  PokemonForm.ExeggutorAlola,
  PokemonVariety.ExeggutorAlola,
  PokemonSpecies.Exeggutor,
  "Alolan Exeggutor",
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class CuboneForm extends Form {}(
  PokemonForm.Cubone,
  PokemonVariety.Cubone,
  PokemonSpecies.Cubone,
  null,
  [ PokemonType.Ground ],
);
new class MarowakForm extends Form {}(
  PokemonForm.Marowak,
  PokemonVariety.Marowak,
  PokemonSpecies.Marowak,
  null,
  [ PokemonType.Ground ],
);
new class MarowakAlolaForm extends Form {}(
  PokemonForm.MarowakAlola,
  PokemonVariety.MarowakAlola,
  PokemonSpecies.Marowak,
  "Alolan Marowak",
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class MarowakTotemForm extends Form {}(
  PokemonForm.MarowakTotem,
  PokemonVariety.MarowakTotem,
  PokemonSpecies.Marowak,
  "Totem Alolan Marowak",
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class HitmonleeForm extends Form {}(
  PokemonForm.Hitmonlee,
  PokemonVariety.Hitmonlee,
  PokemonSpecies.Hitmonlee,
  null,
  [ PokemonType.Fighting ],
);
new class HitmonchanForm extends Form {}(
  PokemonForm.Hitmonchan,
  PokemonVariety.Hitmonchan,
  PokemonSpecies.Hitmonchan,
  null,
  [ PokemonType.Fighting ],
);
new class LickitungForm extends Form {}(
  PokemonForm.Lickitung,
  PokemonVariety.Lickitung,
  PokemonSpecies.Lickitung,
  null,
  [ PokemonType.Normal ],
);
new class KoffingForm extends Form {}(
  PokemonForm.Koffing,
  PokemonVariety.Koffing,
  PokemonSpecies.Koffing,
  null,
  [ PokemonType.Poison ],
);
new class WeezingForm extends Form {}(
  PokemonForm.Weezing,
  PokemonVariety.Weezing,
  PokemonSpecies.Weezing,
  null,
  [ PokemonType.Poison ],
);
new class WeezingGalarForm extends Form {}(
  PokemonForm.WeezingGalar,
  PokemonVariety.WeezingGalar,
  PokemonSpecies.Weezing,
  "Galarian Weezing",
  [ PokemonType.Poison, PokemonType.Fairy ],
);
new class RhyhornForm extends Form {}(
  PokemonForm.Rhyhorn,
  PokemonVariety.Rhyhorn,
  PokemonSpecies.Rhyhorn,
  null,
  [ PokemonType.Ground, PokemonType.Rock ],
);
new class RhydonForm extends Form {}(
  PokemonForm.Rhydon,
  PokemonVariety.Rhydon,
  PokemonSpecies.Rhydon,
  null,
  [ PokemonType.Ground, PokemonType.Rock ],
);
new class ChanseyForm extends Form {}(
  PokemonForm.Chansey,
  PokemonVariety.Chansey,
  PokemonSpecies.Chansey,
  null,
  [ PokemonType.Normal ],
);
new class TangelaForm extends Form {}(
  PokemonForm.Tangela,
  PokemonVariety.Tangela,
  PokemonSpecies.Tangela,
  null,
  [ PokemonType.Grass ],
);
new class KangaskhanForm extends Form {}(
  PokemonForm.Kangaskhan,
  PokemonVariety.Kangaskhan,
  PokemonSpecies.Kangaskhan,
  null,
  [ PokemonType.Normal ],
);
new class KangaskhanMegaForm extends Form {}(
  PokemonForm.KangaskhanMega,
  PokemonVariety.KangaskhanMega,
  PokemonSpecies.Kangaskhan,
  "Mega Kangaskhan",
  [ PokemonType.Normal ],
);
new class HorseaForm extends Form {}(
  PokemonForm.Horsea,
  PokemonVariety.Horsea,
  PokemonSpecies.Horsea,
  null,
  [ PokemonType.Water ],
);
new class SeadraForm extends Form {}(
  PokemonForm.Seadra,
  PokemonVariety.Seadra,
  PokemonSpecies.Seadra,
  null,
  [ PokemonType.Water ],
);
new class GoldeenForm extends Form {}(
  PokemonForm.Goldeen,
  PokemonVariety.Goldeen,
  PokemonSpecies.Goldeen,
  null,
  [ PokemonType.Water ],
);
new class SeakingForm extends Form {}(
  PokemonForm.Seaking,
  PokemonVariety.Seaking,
  PokemonSpecies.Seaking,
  null,
  [ PokemonType.Water ],
);
new class StaryuForm extends Form {}(
  PokemonForm.Staryu,
  PokemonVariety.Staryu,
  PokemonSpecies.Staryu,
  null,
  [ PokemonType.Water ],
);
new class StarmieForm extends Form {}(
  PokemonForm.Starmie,
  PokemonVariety.Starmie,
  PokemonSpecies.Starmie,
  null,
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class MrMimeForm extends Form {}(
  PokemonForm.MrMime,
  PokemonVariety.MrMime,
  PokemonSpecies.MrMime,
  null,
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class MrMimeGalarForm extends Form {}(
  PokemonForm.MrMimeGalar,
  PokemonVariety.MrMimeGalar,
  PokemonSpecies.MrMime,
  "Galarian Mr. Mime",
  [ PokemonType.Ice, PokemonType.Psychic ],
);
new class ScytherForm extends Form {}(
  PokemonForm.Scyther,
  PokemonVariety.Scyther,
  PokemonSpecies.Scyther,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class JynxForm extends Form {}(
  PokemonForm.Jynx,
  PokemonVariety.Jynx,
  PokemonSpecies.Jynx,
  null,
  [ PokemonType.Ice, PokemonType.Psychic ],
);
new class ElectabuzzForm extends Form {}(
  PokemonForm.Electabuzz,
  PokemonVariety.Electabuzz,
  PokemonSpecies.Electabuzz,
  null,
  [ PokemonType.Electric ],
);
new class MagmarForm extends Form {}(
  PokemonForm.Magmar,
  PokemonVariety.Magmar,
  PokemonSpecies.Magmar,
  null,
  [ PokemonType.Fire ],
);
new class PinsirForm extends Form {}(
  PokemonForm.Pinsir,
  PokemonVariety.Pinsir,
  PokemonSpecies.Pinsir,
  null,
  [ PokemonType.Bug ],
);
new class PinsirMegaForm extends Form {}(
  PokemonForm.PinsirMega,
  PokemonVariety.PinsirMega,
  PokemonSpecies.Pinsir,
  "Mega Pinsir",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class TaurosForm extends Form {}(
  PokemonForm.Tauros,
  PokemonVariety.Tauros,
  PokemonSpecies.Tauros,
  null,
  [ PokemonType.Normal ],
);
new class TaurosPaldeaCombatBreedForm extends Form {}(
  PokemonForm.TaurosPaldeaCombatBreed,
  PokemonVariety.TaurosPaldeaCombatBreed,
  PokemonSpecies.Tauros,
  null,
  [ PokemonType.Fighting ],
);
new class TaurosPaldeaBlazeBreedForm extends Form {}(
  PokemonForm.TaurosPaldeaBlazeBreed,
  PokemonVariety.TaurosPaldeaBlazeBreed,
  PokemonSpecies.Tauros,
  null,
  [ PokemonType.Fighting, PokemonType.Fire ],
);
new class TaurosPaldeaAquaBreedForm extends Form {}(
  PokemonForm.TaurosPaldeaAquaBreed,
  PokemonVariety.TaurosPaldeaAquaBreed,
  PokemonSpecies.Tauros,
  null,
  [ PokemonType.Fighting, PokemonType.Water ],
);
new class MagikarpForm extends Form {}(
  PokemonForm.Magikarp,
  PokemonVariety.Magikarp,
  PokemonSpecies.Magikarp,
  null,
  [ PokemonType.Water ],
);
new class GyaradosForm extends Form {}(
  PokemonForm.Gyarados,
  PokemonVariety.Gyarados,
  PokemonSpecies.Gyarados,
  null,
  [ PokemonType.Water, PokemonType.Flying ],
);
new class GyaradosMegaForm extends Form {}(
  PokemonForm.GyaradosMega,
  PokemonVariety.GyaradosMega,
  PokemonSpecies.Gyarados,
  "Mega Gyarados",
  [ PokemonType.Water, PokemonType.Dark ],
);
new class LaprasForm extends Form {}(
  PokemonForm.Lapras,
  PokemonVariety.Lapras,
  PokemonSpecies.Lapras,
  null,
  [ PokemonType.Water, PokemonType.Ice ],
);
new class LaprasGmaxForm extends Form {}(
  PokemonForm.LaprasGmax,
  PokemonVariety.LaprasGmax,
  PokemonSpecies.Lapras,
  "Gigantamax Lapras",
  [ PokemonType.Water, PokemonType.Ice ],
);
new class DittoForm extends Form {}(
  PokemonForm.Ditto,
  PokemonVariety.Ditto,
  PokemonSpecies.Ditto,
  null,
  [ PokemonType.Normal ],
);
new class EeveeForm extends Form {}(
  PokemonForm.Eevee,
  PokemonVariety.Eevee,
  PokemonSpecies.Eevee,
  null,
  [ PokemonType.Normal ],
);
new class EeveeStarterForm extends Form {}(
  PokemonForm.EeveeStarter,
  PokemonVariety.EeveeStarter,
  PokemonSpecies.Eevee,
  "Partner Eevee",
  [ PokemonType.Normal ],
);
new class EeveeGmaxForm extends Form {}(
  PokemonForm.EeveeGmax,
  PokemonVariety.EeveeGmax,
  PokemonSpecies.Eevee,
  "Gigantamax Eevee",
  [ PokemonType.Normal ],
);
new class VaporeonForm extends Form {}(
  PokemonForm.Vaporeon,
  PokemonVariety.Vaporeon,
  PokemonSpecies.Vaporeon,
  null,
  [ PokemonType.Water ],
);
new class JolteonForm extends Form {}(
  PokemonForm.Jolteon,
  PokemonVariety.Jolteon,
  PokemonSpecies.Jolteon,
  null,
  [ PokemonType.Electric ],
);
new class FlareonForm extends Form {}(
  PokemonForm.Flareon,
  PokemonVariety.Flareon,
  PokemonSpecies.Flareon,
  null,
  [ PokemonType.Fire ],
);
new class PorygonForm extends Form {}(
  PokemonForm.Porygon,
  PokemonVariety.Porygon,
  PokemonSpecies.Porygon,
  null,
  [ PokemonType.Normal ],
);
new class OmanyteForm extends Form {}(
  PokemonForm.Omanyte,
  PokemonVariety.Omanyte,
  PokemonSpecies.Omanyte,
  null,
  [ PokemonType.Rock, PokemonType.Water ],
);
new class OmastarForm extends Form {}(
  PokemonForm.Omastar,
  PokemonVariety.Omastar,
  PokemonSpecies.Omastar,
  null,
  [ PokemonType.Rock, PokemonType.Water ],
);
new class KabutoForm extends Form {}(
  PokemonForm.Kabuto,
  PokemonVariety.Kabuto,
  PokemonSpecies.Kabuto,
  null,
  [ PokemonType.Rock, PokemonType.Water ],
);
new class KabutopsForm extends Form {}(
  PokemonForm.Kabutops,
  PokemonVariety.Kabutops,
  PokemonSpecies.Kabutops,
  null,
  [ PokemonType.Rock, PokemonType.Water ],
);
new class AerodactylForm extends Form {}(
  PokemonForm.Aerodactyl,
  PokemonVariety.Aerodactyl,
  PokemonSpecies.Aerodactyl,
  null,
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class AerodactylMegaForm extends Form {}(
  PokemonForm.AerodactylMega,
  PokemonVariety.AerodactylMega,
  PokemonSpecies.Aerodactyl,
  "Mega Aerodactyl",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class SnorlaxForm extends Form {}(
  PokemonForm.Snorlax,
  PokemonVariety.Snorlax,
  PokemonSpecies.Snorlax,
  null,
  [ PokemonType.Normal ],
);
new class SnorlaxGmaxForm extends Form {}(
  PokemonForm.SnorlaxGmax,
  PokemonVariety.SnorlaxGmax,
  PokemonSpecies.Snorlax,
  "Gigantamax Snorlax",
  [ PokemonType.Normal ],
);
new class ArticunoForm extends Form {}(
  PokemonForm.Articuno,
  PokemonVariety.Articuno,
  PokemonSpecies.Articuno,
  null,
  [ PokemonType.Ice, PokemonType.Flying ],
);
new class ArticunoGalarForm extends Form {}(
  PokemonForm.ArticunoGalar,
  PokemonVariety.ArticunoGalar,
  PokemonSpecies.Articuno,
  "Galarian Articuno",
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class ZapdosForm extends Form {}(
  PokemonForm.Zapdos,
  PokemonVariety.Zapdos,
  PokemonSpecies.Zapdos,
  null,
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class ZapdosGalarForm extends Form {}(
  PokemonForm.ZapdosGalar,
  PokemonVariety.ZapdosGalar,
  PokemonSpecies.Zapdos,
  "Galarian Zapdos",
  [ PokemonType.Fighting, PokemonType.Flying ],
);
new class MoltresForm extends Form {}(
  PokemonForm.Moltres,
  PokemonVariety.Moltres,
  PokemonSpecies.Moltres,
  null,
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class MoltresGalarForm extends Form {}(
  PokemonForm.MoltresGalar,
  PokemonVariety.MoltresGalar,
  PokemonSpecies.Moltres,
  "Galarian Moltres",
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class DratiniForm extends Form {}(
  PokemonForm.Dratini,
  PokemonVariety.Dratini,
  PokemonSpecies.Dratini,
  null,
  [ PokemonType.Dragon ],
);
new class DragonairForm extends Form {}(
  PokemonForm.Dragonair,
  PokemonVariety.Dragonair,
  PokemonSpecies.Dragonair,
  null,
  [ PokemonType.Dragon ],
);
new class DragoniteForm extends Form {}(
  PokemonForm.Dragonite,
  PokemonVariety.Dragonite,
  PokemonSpecies.Dragonite,
  null,
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class MewtwoForm extends Form {}(
  PokemonForm.Mewtwo,
  PokemonVariety.Mewtwo,
  PokemonSpecies.Mewtwo,
  null,
  [ PokemonType.Psychic ],
);
new class MewtwoMegaXForm extends Form {}(
  PokemonForm.MewtwoMegaX,
  PokemonVariety.MewtwoMegaX,
  PokemonSpecies.Mewtwo,
  "Mega Mewtwo X",
  [ PokemonType.Psychic, PokemonType.Fighting ],
);
new class MewtwoMegaYForm extends Form {}(
  PokemonForm.MewtwoMegaY,
  PokemonVariety.MewtwoMegaY,
  PokemonSpecies.Mewtwo,
  "Mega Mewtwo Y",
  [ PokemonType.Psychic ],
);
new class MewForm extends Form {}(
  PokemonForm.Mew,
  PokemonVariety.Mew,
  PokemonSpecies.Mew,
  null,
  [ PokemonType.Psychic ],
);
new class ChikoritaForm extends Form {}(
  PokemonForm.Chikorita,
  PokemonVariety.Chikorita,
  PokemonSpecies.Chikorita,
  null,
  [ PokemonType.Grass ],
);
new class BayleefForm extends Form {}(
  PokemonForm.Bayleef,
  PokemonVariety.Bayleef,
  PokemonSpecies.Bayleef,
  null,
  [ PokemonType.Grass ],
);
new class MeganiumForm extends Form {}(
  PokemonForm.Meganium,
  PokemonVariety.Meganium,
  PokemonSpecies.Meganium,
  null,
  [ PokemonType.Grass ],
);
new class CyndaquilForm extends Form {}(
  PokemonForm.Cyndaquil,
  PokemonVariety.Cyndaquil,
  PokemonSpecies.Cyndaquil,
  null,
  [ PokemonType.Fire ],
);
new class QuilavaForm extends Form {}(
  PokemonForm.Quilava,
  PokemonVariety.Quilava,
  PokemonSpecies.Quilava,
  null,
  [ PokemonType.Fire ],
);
new class TyphlosionForm extends Form {}(
  PokemonForm.Typhlosion,
  PokemonVariety.Typhlosion,
  PokemonSpecies.Typhlosion,
  null,
  [ PokemonType.Fire ],
);
new class TyphlosionHisuiForm extends Form {}(
  PokemonForm.TyphlosionHisui,
  PokemonVariety.TyphlosionHisui,
  PokemonSpecies.Typhlosion,
  "Hisuian Typhlosion",
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class TotodileForm extends Form {}(
  PokemonForm.Totodile,
  PokemonVariety.Totodile,
  PokemonSpecies.Totodile,
  null,
  [ PokemonType.Water ],
);
new class CroconawForm extends Form {}(
  PokemonForm.Croconaw,
  PokemonVariety.Croconaw,
  PokemonSpecies.Croconaw,
  null,
  [ PokemonType.Water ],
);
new class FeraligatrForm extends Form {}(
  PokemonForm.Feraligatr,
  PokemonVariety.Feraligatr,
  PokemonSpecies.Feraligatr,
  null,
  [ PokemonType.Water ],
);
new class SentretForm extends Form {}(
  PokemonForm.Sentret,
  PokemonVariety.Sentret,
  PokemonSpecies.Sentret,
  null,
  [ PokemonType.Normal ],
);
new class FurretForm extends Form {}(
  PokemonForm.Furret,
  PokemonVariety.Furret,
  PokemonSpecies.Furret,
  null,
  [ PokemonType.Normal ],
);
new class HoothootForm extends Form {}(
  PokemonForm.Hoothoot,
  PokemonVariety.Hoothoot,
  PokemonSpecies.Hoothoot,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class NoctowlForm extends Form {}(
  PokemonForm.Noctowl,
  PokemonVariety.Noctowl,
  PokemonSpecies.Noctowl,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class LedybaForm extends Form {}(
  PokemonForm.Ledyba,
  PokemonVariety.Ledyba,
  PokemonSpecies.Ledyba,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class LedianForm extends Form {}(
  PokemonForm.Ledian,
  PokemonVariety.Ledian,
  PokemonSpecies.Ledian,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class SpinarakForm extends Form {}(
  PokemonForm.Spinarak,
  PokemonVariety.Spinarak,
  PokemonSpecies.Spinarak,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class AriadosForm extends Form {}(
  PokemonForm.Ariados,
  PokemonVariety.Ariados,
  PokemonSpecies.Ariados,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class CrobatForm extends Form {}(
  PokemonForm.Crobat,
  PokemonVariety.Crobat,
  PokemonSpecies.Crobat,
  null,
  [ PokemonType.Poison, PokemonType.Flying ],
);
new class ChinchouForm extends Form {}(
  PokemonForm.Chinchou,
  PokemonVariety.Chinchou,
  PokemonSpecies.Chinchou,
  null,
  [ PokemonType.Water, PokemonType.Electric ],
);
new class LanturnForm extends Form {}(
  PokemonForm.Lanturn,
  PokemonVariety.Lanturn,
  PokemonSpecies.Lanturn,
  null,
  [ PokemonType.Water, PokemonType.Electric ],
);
new class PichuForm extends Form {}(
  PokemonForm.Pichu,
  PokemonVariety.Pichu,
  PokemonSpecies.Pichu,
  null,
  [ PokemonType.Electric ],
);
new class PichuSpikyEaredForm extends Form {}(
  PokemonForm.PichuSpikyEared,
  PokemonVariety.Pichu,
  PokemonSpecies.Pichu,
  "Spiky-eared Pichu",
  [ PokemonType.Electric ],
);
new class CleffaForm extends Form {}(
  PokemonForm.Cleffa,
  PokemonVariety.Cleffa,
  PokemonSpecies.Cleffa,
  null,
  [ PokemonType.Fairy ],
);
new class IgglybuffForm extends Form {}(
  PokemonForm.Igglybuff,
  PokemonVariety.Igglybuff,
  PokemonSpecies.Igglybuff,
  null,
  [ PokemonType.Normal, PokemonType.Fairy ],
);
new class TogepiForm extends Form {}(
  PokemonForm.Togepi,
  PokemonVariety.Togepi,
  PokemonSpecies.Togepi,
  null,
  [ PokemonType.Fairy ],
);
new class TogeticForm extends Form {}(
  PokemonForm.Togetic,
  PokemonVariety.Togetic,
  PokemonSpecies.Togetic,
  null,
  [ PokemonType.Fairy, PokemonType.Flying ],
);
new class NatuForm extends Form {}(
  PokemonForm.Natu,
  PokemonVariety.Natu,
  PokemonSpecies.Natu,
  null,
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class XatuForm extends Form {}(
  PokemonForm.Xatu,
  PokemonVariety.Xatu,
  PokemonSpecies.Xatu,
  null,
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class MareepForm extends Form {}(
  PokemonForm.Mareep,
  PokemonVariety.Mareep,
  PokemonSpecies.Mareep,
  null,
  [ PokemonType.Electric ],
);
new class FlaaffyForm extends Form {}(
  PokemonForm.Flaaffy,
  PokemonVariety.Flaaffy,
  PokemonSpecies.Flaaffy,
  null,
  [ PokemonType.Electric ],
);
new class AmpharosForm extends Form {}(
  PokemonForm.Ampharos,
  PokemonVariety.Ampharos,
  PokemonSpecies.Ampharos,
  null,
  [ PokemonType.Electric ],
);
new class AmpharosMegaForm extends Form {}(
  PokemonForm.AmpharosMega,
  PokemonVariety.AmpharosMega,
  PokemonSpecies.Ampharos,
  "Mega Ampharos",
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class BellossomForm extends Form {}(
  PokemonForm.Bellossom,
  PokemonVariety.Bellossom,
  PokemonSpecies.Bellossom,
  null,
  [ PokemonType.Grass ],
);
new class MarillForm extends Form {}(
  PokemonForm.Marill,
  PokemonVariety.Marill,
  PokemonSpecies.Marill,
  null,
  [ PokemonType.Water, PokemonType.Fairy ],
);
new class AzumarillForm extends Form {}(
  PokemonForm.Azumarill,
  PokemonVariety.Azumarill,
  PokemonSpecies.Azumarill,
  null,
  [ PokemonType.Water, PokemonType.Fairy ],
);
new class SudowoodoForm extends Form {}(
  PokemonForm.Sudowoodo,
  PokemonVariety.Sudowoodo,
  PokemonSpecies.Sudowoodo,
  null,
  [ PokemonType.Rock ],
);
new class PolitoedForm extends Form {}(
  PokemonForm.Politoed,
  PokemonVariety.Politoed,
  PokemonSpecies.Politoed,
  null,
  [ PokemonType.Water ],
);
new class HoppipForm extends Form {}(
  PokemonForm.Hoppip,
  PokemonVariety.Hoppip,
  PokemonSpecies.Hoppip,
  null,
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class SkiploomForm extends Form {}(
  PokemonForm.Skiploom,
  PokemonVariety.Skiploom,
  PokemonSpecies.Skiploom,
  null,
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class JumpluffForm extends Form {}(
  PokemonForm.Jumpluff,
  PokemonVariety.Jumpluff,
  PokemonSpecies.Jumpluff,
  null,
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class AipomForm extends Form {}(
  PokemonForm.Aipom,
  PokemonVariety.Aipom,
  PokemonSpecies.Aipom,
  null,
  [ PokemonType.Normal ],
);
new class SunkernForm extends Form {}(
  PokemonForm.Sunkern,
  PokemonVariety.Sunkern,
  PokemonSpecies.Sunkern,
  null,
  [ PokemonType.Grass ],
);
new class SunfloraForm extends Form {}(
  PokemonForm.Sunflora,
  PokemonVariety.Sunflora,
  PokemonSpecies.Sunflora,
  null,
  [ PokemonType.Grass ],
);
new class YanmaForm extends Form {}(
  PokemonForm.Yanma,
  PokemonVariety.Yanma,
  PokemonSpecies.Yanma,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class WooperForm extends Form {}(
  PokemonForm.Wooper,
  PokemonVariety.Wooper,
  PokemonSpecies.Wooper,
  null,
  [ PokemonType.Water, PokemonType.Ground ],
);
new class WooperPaldeaForm extends Form {}(
  PokemonForm.WooperPaldea,
  PokemonVariety.WooperPaldea,
  PokemonSpecies.Wooper,
  null,
  [ PokemonType.Poison, PokemonType.Ground ],
);
new class QuagsireForm extends Form {}(
  PokemonForm.Quagsire,
  PokemonVariety.Quagsire,
  PokemonSpecies.Quagsire,
  null,
  [ PokemonType.Water, PokemonType.Ground ],
);
new class EspeonForm extends Form {}(
  PokemonForm.Espeon,
  PokemonVariety.Espeon,
  PokemonSpecies.Espeon,
  null,
  [ PokemonType.Psychic ],
);
new class UmbreonForm extends Form {}(
  PokemonForm.Umbreon,
  PokemonVariety.Umbreon,
  PokemonSpecies.Umbreon,
  null,
  [ PokemonType.Dark ],
);
new class MurkrowForm extends Form {}(
  PokemonForm.Murkrow,
  PokemonVariety.Murkrow,
  PokemonSpecies.Murkrow,
  null,
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class SlowkingForm extends Form {}(
  PokemonForm.Slowking,
  PokemonVariety.Slowking,
  PokemonSpecies.Slowking,
  null,
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class SlowkingGalarForm extends Form {}(
  PokemonForm.SlowkingGalar,
  PokemonVariety.SlowkingGalar,
  PokemonSpecies.Slowking,
  "Galarian Slowking",
  [ PokemonType.Poison, PokemonType.Psychic ],
);
new class MisdreavusForm extends Form {}(
  PokemonForm.Misdreavus,
  PokemonVariety.Misdreavus,
  PokemonSpecies.Misdreavus,
  null,
  [ PokemonType.Ghost ],
);
new class UnownAForm extends Form {}(
  PokemonForm.UnownA,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown A",
  [ PokemonType.Psychic ],
);
new class UnownBForm extends Form {}(
  PokemonForm.UnownB,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown B",
  [ PokemonType.Psychic ],
);
new class UnownCForm extends Form {}(
  PokemonForm.UnownC,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown C",
  [ PokemonType.Psychic ],
);
new class UnownDForm extends Form {}(
  PokemonForm.UnownD,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown D",
  [ PokemonType.Psychic ],
);
new class UnownEForm extends Form {}(
  PokemonForm.UnownE,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown E",
  [ PokemonType.Psychic ],
);
new class UnownFForm extends Form {}(
  PokemonForm.UnownF,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown F",
  [ PokemonType.Psychic ],
);
new class UnownGForm extends Form {}(
  PokemonForm.UnownG,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown G",
  [ PokemonType.Psychic ],
);
new class UnownHForm extends Form {}(
  PokemonForm.UnownH,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown H",
  [ PokemonType.Psychic ],
);
new class UnownIForm extends Form {}(
  PokemonForm.UnownI,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown I",
  [ PokemonType.Psychic ],
);
new class UnownJForm extends Form {}(
  PokemonForm.UnownJ,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown J",
  [ PokemonType.Psychic ],
);
new class UnownKForm extends Form {}(
  PokemonForm.UnownK,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown K",
  [ PokemonType.Psychic ],
);
new class UnownLForm extends Form {}(
  PokemonForm.UnownL,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown L",
  [ PokemonType.Psychic ],
);
new class UnownMForm extends Form {}(
  PokemonForm.UnownM,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown M",
  [ PokemonType.Psychic ],
);
new class UnownNForm extends Form {}(
  PokemonForm.UnownN,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown N",
  [ PokemonType.Psychic ],
);
new class UnownOForm extends Form {}(
  PokemonForm.UnownO,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown O",
  [ PokemonType.Psychic ],
);
new class UnownPForm extends Form {}(
  PokemonForm.UnownP,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown P",
  [ PokemonType.Psychic ],
);
new class UnownQForm extends Form {}(
  PokemonForm.UnownQ,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown Q",
  [ PokemonType.Psychic ],
);
new class UnownRForm extends Form {}(
  PokemonForm.UnownR,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown R",
  [ PokemonType.Psychic ],
);
new class UnownSForm extends Form {}(
  PokemonForm.UnownS,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown S",
  [ PokemonType.Psychic ],
);
new class UnownTForm extends Form {}(
  PokemonForm.UnownT,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown T",
  [ PokemonType.Psychic ],
);
new class UnownUForm extends Form {}(
  PokemonForm.UnownU,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown U",
  [ PokemonType.Psychic ],
);
new class UnownVForm extends Form {}(
  PokemonForm.UnownV,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown V",
  [ PokemonType.Psychic ],
);
new class UnownWForm extends Form {}(
  PokemonForm.UnownW,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown W",
  [ PokemonType.Psychic ],
);
new class UnownXForm extends Form {}(
  PokemonForm.UnownX,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown X",
  [ PokemonType.Psychic ],
);
new class UnownYForm extends Form {}(
  PokemonForm.UnownY,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown Y",
  [ PokemonType.Psychic ],
);
new class UnownZForm extends Form {}(
  PokemonForm.UnownZ,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown Z",
  [ PokemonType.Psychic ],
);
new class UnownExclamationForm extends Form {}(
  PokemonForm.UnownExclamation,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown !",
  [ PokemonType.Psychic ],
);
new class UnownQuestionForm extends Form {}(
  PokemonForm.UnownQuestion,
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  "Unown ?",
  [ PokemonType.Psychic ],
);
new class WobbuffetForm extends Form {}(
  PokemonForm.Wobbuffet,
  PokemonVariety.Wobbuffet,
  PokemonSpecies.Wobbuffet,
  null,
  [ PokemonType.Psychic ],
);
new class GirafarigForm extends Form {}(
  PokemonForm.Girafarig,
  PokemonVariety.Girafarig,
  PokemonSpecies.Girafarig,
  null,
  [ PokemonType.Normal, PokemonType.Psychic ],
);
new class PinecoForm extends Form {}(
  PokemonForm.Pineco,
  PokemonVariety.Pineco,
  PokemonSpecies.Pineco,
  null,
  [ PokemonType.Bug ],
);
new class ForretressForm extends Form {}(
  PokemonForm.Forretress,
  PokemonVariety.Forretress,
  PokemonSpecies.Forretress,
  null,
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class DunsparceForm extends Form {}(
  PokemonForm.Dunsparce,
  PokemonVariety.Dunsparce,
  PokemonSpecies.Dunsparce,
  null,
  [ PokemonType.Normal ],
);
new class GligarForm extends Form {}(
  PokemonForm.Gligar,
  PokemonVariety.Gligar,
  PokemonSpecies.Gligar,
  null,
  [ PokemonType.Ground, PokemonType.Flying ],
);
new class SteelixForm extends Form {}(
  PokemonForm.Steelix,
  PokemonVariety.Steelix,
  PokemonSpecies.Steelix,
  null,
  [ PokemonType.Steel, PokemonType.Ground ],
);
new class SteelixMegaForm extends Form {}(
  PokemonForm.SteelixMega,
  PokemonVariety.SteelixMega,
  PokemonSpecies.Steelix,
  "Mega Steelix",
  [ PokemonType.Steel, PokemonType.Ground ],
);
new class SnubbullForm extends Form {}(
  PokemonForm.Snubbull,
  PokemonVariety.Snubbull,
  PokemonSpecies.Snubbull,
  null,
  [ PokemonType.Fairy ],
);
new class GranbullForm extends Form {}(
  PokemonForm.Granbull,
  PokemonVariety.Granbull,
  PokemonSpecies.Granbull,
  null,
  [ PokemonType.Fairy ],
);
new class QwilfishForm extends Form {}(
  PokemonForm.Qwilfish,
  PokemonVariety.Qwilfish,
  PokemonSpecies.Qwilfish,
  null,
  [ PokemonType.Water, PokemonType.Poison ],
);
new class QwilfishHisuiForm extends Form {}(
  PokemonForm.QwilfishHisui,
  PokemonVariety.QwilfishHisui,
  PokemonSpecies.Qwilfish,
  "Hisuian Qwilfish",
  [ PokemonType.Dark, PokemonType.Poison ],
);
new class ScizorForm extends Form {}(
  PokemonForm.Scizor,
  PokemonVariety.Scizor,
  PokemonSpecies.Scizor,
  null,
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class ScizorMegaForm extends Form {}(
  PokemonForm.ScizorMega,
  PokemonVariety.ScizorMega,
  PokemonSpecies.Scizor,
  "Mega Scizor",
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class ShuckleForm extends Form {}(
  PokemonForm.Shuckle,
  PokemonVariety.Shuckle,
  PokemonSpecies.Shuckle,
  null,
  [ PokemonType.Bug, PokemonType.Rock ],
);
new class HeracrossForm extends Form {}(
  PokemonForm.Heracross,
  PokemonVariety.Heracross,
  PokemonSpecies.Heracross,
  null,
  [ PokemonType.Bug, PokemonType.Fighting ],
);
new class HeracrossMegaForm extends Form {}(
  PokemonForm.HeracrossMega,
  PokemonVariety.HeracrossMega,
  PokemonSpecies.Heracross,
  "Mega Heracross",
  [ PokemonType.Bug, PokemonType.Fighting ],
);
new class SneaselForm extends Form {}(
  PokemonForm.Sneasel,
  PokemonVariety.Sneasel,
  PokemonSpecies.Sneasel,
  null,
  [ PokemonType.Dark, PokemonType.Ice ],
);
new class SneaselHisuiForm extends Form {}(
  PokemonForm.SneaselHisui,
  PokemonVariety.SneaselHisui,
  PokemonSpecies.Sneasel,
  "Hisuian Sneasel",
  [ PokemonType.Fighting, PokemonType.Poison ],
);
new class TeddiursaForm extends Form {}(
  PokemonForm.Teddiursa,
  PokemonVariety.Teddiursa,
  PokemonSpecies.Teddiursa,
  null,
  [ PokemonType.Normal ],
);
new class UrsaringForm extends Form {}(
  PokemonForm.Ursaring,
  PokemonVariety.Ursaring,
  PokemonSpecies.Ursaring,
  null,
  [ PokemonType.Normal ],
);
new class SlugmaForm extends Form {}(
  PokemonForm.Slugma,
  PokemonVariety.Slugma,
  PokemonSpecies.Slugma,
  null,
  [ PokemonType.Fire ],
);
new class MagcargoForm extends Form {}(
  PokemonForm.Magcargo,
  PokemonVariety.Magcargo,
  PokemonSpecies.Magcargo,
  null,
  [ PokemonType.Fire, PokemonType.Rock ],
);
new class SwinubForm extends Form {}(
  PokemonForm.Swinub,
  PokemonVariety.Swinub,
  PokemonSpecies.Swinub,
  null,
  [ PokemonType.Ice, PokemonType.Ground ],
);
new class PiloswineForm extends Form {}(
  PokemonForm.Piloswine,
  PokemonVariety.Piloswine,
  PokemonSpecies.Piloswine,
  null,
  [ PokemonType.Ice, PokemonType.Ground ],
);
new class CorsolaForm extends Form {}(
  PokemonForm.Corsola,
  PokemonVariety.Corsola,
  PokemonSpecies.Corsola,
  null,
  [ PokemonType.Water, PokemonType.Rock ],
);
new class CorsolaGalarForm extends Form {}(
  PokemonForm.CorsolaGalar,
  PokemonVariety.CorsolaGalar,
  PokemonSpecies.Corsola,
  "Galarian Corsola",
  [ PokemonType.Ghost ],
);
new class RemoraidForm extends Form {}(
  PokemonForm.Remoraid,
  PokemonVariety.Remoraid,
  PokemonSpecies.Remoraid,
  null,
  [ PokemonType.Water ],
);
new class OctilleryForm extends Form {}(
  PokemonForm.Octillery,
  PokemonVariety.Octillery,
  PokemonSpecies.Octillery,
  null,
  [ PokemonType.Water ],
);
new class DelibirdForm extends Form {}(
  PokemonForm.Delibird,
  PokemonVariety.Delibird,
  PokemonSpecies.Delibird,
  null,
  [ PokemonType.Ice, PokemonType.Flying ],
);
new class MantineForm extends Form {}(
  PokemonForm.Mantine,
  PokemonVariety.Mantine,
  PokemonSpecies.Mantine,
  null,
  [ PokemonType.Water, PokemonType.Flying ],
);
new class SkarmoryForm extends Form {}(
  PokemonForm.Skarmory,
  PokemonVariety.Skarmory,
  PokemonSpecies.Skarmory,
  null,
  [ PokemonType.Steel, PokemonType.Flying ],
);
new class HoundourForm extends Form {}(
  PokemonForm.Houndour,
  PokemonVariety.Houndour,
  PokemonSpecies.Houndour,
  null,
  [ PokemonType.Dark, PokemonType.Fire ],
);
new class HoundoomForm extends Form {}(
  PokemonForm.Houndoom,
  PokemonVariety.Houndoom,
  PokemonSpecies.Houndoom,
  null,
  [ PokemonType.Dark, PokemonType.Fire ],
);
new class HoundoomMegaForm extends Form {}(
  PokemonForm.HoundoomMega,
  PokemonVariety.HoundoomMega,
  PokemonSpecies.Houndoom,
  "Mega Houndoom",
  [ PokemonType.Dark, PokemonType.Fire ],
);
new class KingdraForm extends Form {}(
  PokemonForm.Kingdra,
  PokemonVariety.Kingdra,
  PokemonSpecies.Kingdra,
  null,
  [ PokemonType.Water, PokemonType.Dragon ],
);
new class PhanpyForm extends Form {}(
  PokemonForm.Phanpy,
  PokemonVariety.Phanpy,
  PokemonSpecies.Phanpy,
  null,
  [ PokemonType.Ground ],
);
new class DonphanForm extends Form {}(
  PokemonForm.Donphan,
  PokemonVariety.Donphan,
  PokemonSpecies.Donphan,
  null,
  [ PokemonType.Ground ],
);
new class Porygon2Form extends Form {}(
  PokemonForm.Porygon2,
  PokemonVariety.Porygon2,
  PokemonSpecies.Porygon2,
  null,
  [ PokemonType.Normal ],
);
new class StantlerForm extends Form {}(
  PokemonForm.Stantler,
  PokemonVariety.Stantler,
  PokemonSpecies.Stantler,
  null,
  [ PokemonType.Normal ],
);
new class SmeargleForm extends Form {}(
  PokemonForm.Smeargle,
  PokemonVariety.Smeargle,
  PokemonSpecies.Smeargle,
  null,
  [ PokemonType.Normal ],
);
new class TyrogueForm extends Form {}(
  PokemonForm.Tyrogue,
  PokemonVariety.Tyrogue,
  PokemonSpecies.Tyrogue,
  null,
  [ PokemonType.Fighting ],
);
new class HitmontopForm extends Form {}(
  PokemonForm.Hitmontop,
  PokemonVariety.Hitmontop,
  PokemonSpecies.Hitmontop,
  null,
  [ PokemonType.Fighting ],
);
new class SmoochumForm extends Form {}(
  PokemonForm.Smoochum,
  PokemonVariety.Smoochum,
  PokemonSpecies.Smoochum,
  null,
  [ PokemonType.Ice, PokemonType.Psychic ],
);
new class ElekidForm extends Form {}(
  PokemonForm.Elekid,
  PokemonVariety.Elekid,
  PokemonSpecies.Elekid,
  null,
  [ PokemonType.Electric ],
);
new class MagbyForm extends Form {}(
  PokemonForm.Magby,
  PokemonVariety.Magby,
  PokemonSpecies.Magby,
  null,
  [ PokemonType.Fire ],
);
new class MiltankForm extends Form {}(
  PokemonForm.Miltank,
  PokemonVariety.Miltank,
  PokemonSpecies.Miltank,
  null,
  [ PokemonType.Normal ],
);
new class BlisseyForm extends Form {}(
  PokemonForm.Blissey,
  PokemonVariety.Blissey,
  PokemonSpecies.Blissey,
  null,
  [ PokemonType.Normal ],
);
new class RaikouForm extends Form {}(
  PokemonForm.Raikou,
  PokemonVariety.Raikou,
  PokemonSpecies.Raikou,
  null,
  [ PokemonType.Electric ],
);
new class EnteiForm extends Form {}(
  PokemonForm.Entei,
  PokemonVariety.Entei,
  PokemonSpecies.Entei,
  null,
  [ PokemonType.Fire ],
);
new class SuicuneForm extends Form {}(
  PokemonForm.Suicune,
  PokemonVariety.Suicune,
  PokemonSpecies.Suicune,
  null,
  [ PokemonType.Water ],
);
new class LarvitarForm extends Form {}(
  PokemonForm.Larvitar,
  PokemonVariety.Larvitar,
  PokemonSpecies.Larvitar,
  null,
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class PupitarForm extends Form {}(
  PokemonForm.Pupitar,
  PokemonVariety.Pupitar,
  PokemonSpecies.Pupitar,
  null,
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class TyranitarForm extends Form {}(
  PokemonForm.Tyranitar,
  PokemonVariety.Tyranitar,
  PokemonSpecies.Tyranitar,
  null,
  [ PokemonType.Rock, PokemonType.Dark ],
);
new class TyranitarMegaForm extends Form {}(
  PokemonForm.TyranitarMega,
  PokemonVariety.TyranitarMega,
  PokemonSpecies.Tyranitar,
  "Mega Tyranitar",
  [ PokemonType.Rock, PokemonType.Dark ],
);
new class LugiaForm extends Form {}(
  PokemonForm.Lugia,
  PokemonVariety.Lugia,
  PokemonSpecies.Lugia,
  null,
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class HoOhForm extends Form {}(
  PokemonForm.HoOh,
  PokemonVariety.HoOh,
  PokemonSpecies.HoOh,
  null,
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class CelebiForm extends Form {}(
  PokemonForm.Celebi,
  PokemonVariety.Celebi,
  PokemonSpecies.Celebi,
  null,
  [ PokemonType.Psychic, PokemonType.Grass ],
);
new class TreeckoForm extends Form {}(
  PokemonForm.Treecko,
  PokemonVariety.Treecko,
  PokemonSpecies.Treecko,
  null,
  [ PokemonType.Grass ],
);
new class GrovyleForm extends Form {}(
  PokemonForm.Grovyle,
  PokemonVariety.Grovyle,
  PokemonSpecies.Grovyle,
  null,
  [ PokemonType.Grass ],
);
new class SceptileForm extends Form {}(
  PokemonForm.Sceptile,
  PokemonVariety.Sceptile,
  PokemonSpecies.Sceptile,
  null,
  [ PokemonType.Grass ],
);
new class SceptileMegaForm extends Form {}(
  PokemonForm.SceptileMega,
  PokemonVariety.SceptileMega,
  PokemonSpecies.Sceptile,
  "Mega Sceptile",
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class TorchicForm extends Form {}(
  PokemonForm.Torchic,
  PokemonVariety.Torchic,
  PokemonSpecies.Torchic,
  null,
  [ PokemonType.Fire ],
);
new class CombuskenForm extends Form {}(
  PokemonForm.Combusken,
  PokemonVariety.Combusken,
  PokemonSpecies.Combusken,
  null,
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class BlazikenForm extends Form {}(
  PokemonForm.Blaziken,
  PokemonVariety.Blaziken,
  PokemonSpecies.Blaziken,
  null,
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class BlazikenMegaForm extends Form {}(
  PokemonForm.BlazikenMega,
  PokemonVariety.BlazikenMega,
  PokemonSpecies.Blaziken,
  "Mega Blaziken",
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class MudkipForm extends Form {}(
  PokemonForm.Mudkip,
  PokemonVariety.Mudkip,
  PokemonSpecies.Mudkip,
  null,
  [ PokemonType.Water ],
);
new class MarshtompForm extends Form {}(
  PokemonForm.Marshtomp,
  PokemonVariety.Marshtomp,
  PokemonSpecies.Marshtomp,
  null,
  [ PokemonType.Water, PokemonType.Ground ],
);
new class SwampertForm extends Form {}(
  PokemonForm.Swampert,
  PokemonVariety.Swampert,
  PokemonSpecies.Swampert,
  null,
  [ PokemonType.Water, PokemonType.Ground ],
);
new class SwampertMegaForm extends Form {}(
  PokemonForm.SwampertMega,
  PokemonVariety.SwampertMega,
  PokemonSpecies.Swampert,
  "Mega Swampert",
  [ PokemonType.Water, PokemonType.Ground ],
);
new class PoochyenaForm extends Form {}(
  PokemonForm.Poochyena,
  PokemonVariety.Poochyena,
  PokemonSpecies.Poochyena,
  null,
  [ PokemonType.Dark ],
);
new class MightyenaForm extends Form {}(
  PokemonForm.Mightyena,
  PokemonVariety.Mightyena,
  PokemonSpecies.Mightyena,
  null,
  [ PokemonType.Dark ],
);
new class ZigzagoonForm extends Form {}(
  PokemonForm.Zigzagoon,
  PokemonVariety.Zigzagoon,
  PokemonSpecies.Zigzagoon,
  null,
  [ PokemonType.Normal ],
);
new class ZigzagoonGalarForm extends Form {}(
  PokemonForm.ZigzagoonGalar,
  PokemonVariety.ZigzagoonGalar,
  PokemonSpecies.Zigzagoon,
  "Galarian Zigzagoon",
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class LinooneForm extends Form {}(
  PokemonForm.Linoone,
  PokemonVariety.Linoone,
  PokemonSpecies.Linoone,
  null,
  [ PokemonType.Normal ],
);
new class LinooneGalarForm extends Form {}(
  PokemonForm.LinooneGalar,
  PokemonVariety.LinooneGalar,
  PokemonSpecies.Linoone,
  "Galarian Linoone",
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class WurmpleForm extends Form {}(
  PokemonForm.Wurmple,
  PokemonVariety.Wurmple,
  PokemonSpecies.Wurmple,
  null,
  [ PokemonType.Bug ],
);
new class SilcoonForm extends Form {}(
  PokemonForm.Silcoon,
  PokemonVariety.Silcoon,
  PokemonSpecies.Silcoon,
  null,
  [ PokemonType.Bug ],
);
new class BeautiflyForm extends Form {}(
  PokemonForm.Beautifly,
  PokemonVariety.Beautifly,
  PokemonSpecies.Beautifly,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class CascoonForm extends Form {}(
  PokemonForm.Cascoon,
  PokemonVariety.Cascoon,
  PokemonSpecies.Cascoon,
  null,
  [ PokemonType.Bug ],
);
new class DustoxForm extends Form {}(
  PokemonForm.Dustox,
  PokemonVariety.Dustox,
  PokemonSpecies.Dustox,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class LotadForm extends Form {}(
  PokemonForm.Lotad,
  PokemonVariety.Lotad,
  PokemonSpecies.Lotad,
  null,
  [ PokemonType.Water, PokemonType.Grass ],
);
new class LombreForm extends Form {}(
  PokemonForm.Lombre,
  PokemonVariety.Lombre,
  PokemonSpecies.Lombre,
  null,
  [ PokemonType.Water, PokemonType.Grass ],
);
new class LudicoloForm extends Form {}(
  PokemonForm.Ludicolo,
  PokemonVariety.Ludicolo,
  PokemonSpecies.Ludicolo,
  null,
  [ PokemonType.Water, PokemonType.Grass ],
);
new class SeedotForm extends Form {}(
  PokemonForm.Seedot,
  PokemonVariety.Seedot,
  PokemonSpecies.Seedot,
  null,
  [ PokemonType.Grass ],
);
new class NuzleafForm extends Form {}(
  PokemonForm.Nuzleaf,
  PokemonVariety.Nuzleaf,
  PokemonSpecies.Nuzleaf,
  null,
  [ PokemonType.Grass, PokemonType.Dark ],
);
new class ShiftryForm extends Form {}(
  PokemonForm.Shiftry,
  PokemonVariety.Shiftry,
  PokemonSpecies.Shiftry,
  null,
  [ PokemonType.Grass, PokemonType.Dark ],
);
new class TaillowForm extends Form {}(
  PokemonForm.Taillow,
  PokemonVariety.Taillow,
  PokemonSpecies.Taillow,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SwellowForm extends Form {}(
  PokemonForm.Swellow,
  PokemonVariety.Swellow,
  PokemonSpecies.Swellow,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class WingullForm extends Form {}(
  PokemonForm.Wingull,
  PokemonVariety.Wingull,
  PokemonSpecies.Wingull,
  null,
  [ PokemonType.Water, PokemonType.Flying ],
);
new class PelipperForm extends Form {}(
  PokemonForm.Pelipper,
  PokemonVariety.Pelipper,
  PokemonSpecies.Pelipper,
  null,
  [ PokemonType.Water, PokemonType.Flying ],
);
new class RaltsForm extends Form {}(
  PokemonForm.Ralts,
  PokemonVariety.Ralts,
  PokemonSpecies.Ralts,
  null,
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class KirliaForm extends Form {}(
  PokemonForm.Kirlia,
  PokemonVariety.Kirlia,
  PokemonSpecies.Kirlia,
  null,
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class GardevoirForm extends Form {}(
  PokemonForm.Gardevoir,
  PokemonVariety.Gardevoir,
  PokemonSpecies.Gardevoir,
  null,
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class GardevoirMegaForm extends Form {}(
  PokemonForm.GardevoirMega,
  PokemonVariety.GardevoirMega,
  PokemonSpecies.Gardevoir,
  "Mega Gardevoir",
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class SurskitForm extends Form {}(
  PokemonForm.Surskit,
  PokemonVariety.Surskit,
  PokemonSpecies.Surskit,
  null,
  [ PokemonType.Bug, PokemonType.Water ],
);
new class MasquerainForm extends Form {}(
  PokemonForm.Masquerain,
  PokemonVariety.Masquerain,
  PokemonSpecies.Masquerain,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class ShroomishForm extends Form {}(
  PokemonForm.Shroomish,
  PokemonVariety.Shroomish,
  PokemonSpecies.Shroomish,
  null,
  [ PokemonType.Grass ],
);
new class BreloomForm extends Form {}(
  PokemonForm.Breloom,
  PokemonVariety.Breloom,
  PokemonSpecies.Breloom,
  null,
  [ PokemonType.Grass, PokemonType.Fighting ],
);
new class SlakothForm extends Form {}(
  PokemonForm.Slakoth,
  PokemonVariety.Slakoth,
  PokemonSpecies.Slakoth,
  null,
  [ PokemonType.Normal ],
);
new class VigorothForm extends Form {}(
  PokemonForm.Vigoroth,
  PokemonVariety.Vigoroth,
  PokemonSpecies.Vigoroth,
  null,
  [ PokemonType.Normal ],
);
new class SlakingForm extends Form {}(
  PokemonForm.Slaking,
  PokemonVariety.Slaking,
  PokemonSpecies.Slaking,
  null,
  [ PokemonType.Normal ],
);
new class NincadaForm extends Form {}(
  PokemonForm.Nincada,
  PokemonVariety.Nincada,
  PokemonSpecies.Nincada,
  null,
  [ PokemonType.Bug, PokemonType.Ground ],
);
new class NinjaskForm extends Form {}(
  PokemonForm.Ninjask,
  PokemonVariety.Ninjask,
  PokemonSpecies.Ninjask,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class ShedinjaForm extends Form {}(
  PokemonForm.Shedinja,
  PokemonVariety.Shedinja,
  PokemonSpecies.Shedinja,
  null,
  [ PokemonType.Bug, PokemonType.Ghost ],
);
new class WhismurForm extends Form {}(
  PokemonForm.Whismur,
  PokemonVariety.Whismur,
  PokemonSpecies.Whismur,
  null,
  [ PokemonType.Normal ],
);
new class LoudredForm extends Form {}(
  PokemonForm.Loudred,
  PokemonVariety.Loudred,
  PokemonSpecies.Loudred,
  null,
  [ PokemonType.Normal ],
);
new class ExploudForm extends Form {}(
  PokemonForm.Exploud,
  PokemonVariety.Exploud,
  PokemonSpecies.Exploud,
  null,
  [ PokemonType.Normal ],
);
new class MakuhitaForm extends Form {}(
  PokemonForm.Makuhita,
  PokemonVariety.Makuhita,
  PokemonSpecies.Makuhita,
  null,
  [ PokemonType.Fighting ],
);
new class HariyamaForm extends Form {}(
  PokemonForm.Hariyama,
  PokemonVariety.Hariyama,
  PokemonSpecies.Hariyama,
  null,
  [ PokemonType.Fighting ],
);
new class AzurillForm extends Form {}(
  PokemonForm.Azurill,
  PokemonVariety.Azurill,
  PokemonSpecies.Azurill,
  null,
  [ PokemonType.Normal, PokemonType.Fairy ],
);
new class NosepassForm extends Form {}(
  PokemonForm.Nosepass,
  PokemonVariety.Nosepass,
  PokemonSpecies.Nosepass,
  null,
  [ PokemonType.Rock ],
);
new class SkittyForm extends Form {}(
  PokemonForm.Skitty,
  PokemonVariety.Skitty,
  PokemonSpecies.Skitty,
  null,
  [ PokemonType.Normal ],
);
new class DelcattyForm extends Form {}(
  PokemonForm.Delcatty,
  PokemonVariety.Delcatty,
  PokemonSpecies.Delcatty,
  null,
  [ PokemonType.Normal ],
);
new class SableyeForm extends Form {}(
  PokemonForm.Sableye,
  PokemonVariety.Sableye,
  PokemonSpecies.Sableye,
  null,
  [ PokemonType.Dark, PokemonType.Ghost ],
);
new class SableyeMegaForm extends Form {}(
  PokemonForm.SableyeMega,
  PokemonVariety.SableyeMega,
  PokemonSpecies.Sableye,
  "Mega Sableye",
  [ PokemonType.Dark, PokemonType.Ghost ],
);
new class MawileForm extends Form {}(
  PokemonForm.Mawile,
  PokemonVariety.Mawile,
  PokemonSpecies.Mawile,
  null,
  [ PokemonType.Steel, PokemonType.Fairy ],
);
new class MawileMegaForm extends Form {}(
  PokemonForm.MawileMega,
  PokemonVariety.MawileMega,
  PokemonSpecies.Mawile,
  "Mega Mawile",
  [ PokemonType.Steel, PokemonType.Fairy ],
);
new class AronForm extends Form {}(
  PokemonForm.Aron,
  PokemonVariety.Aron,
  PokemonSpecies.Aron,
  null,
  [ PokemonType.Steel, PokemonType.Rock ],
);
new class LaironForm extends Form {}(
  PokemonForm.Lairon,
  PokemonVariety.Lairon,
  PokemonSpecies.Lairon,
  null,
  [ PokemonType.Steel, PokemonType.Rock ],
);
new class AggronForm extends Form {}(
  PokemonForm.Aggron,
  PokemonVariety.Aggron,
  PokemonSpecies.Aggron,
  null,
  [ PokemonType.Steel, PokemonType.Rock ],
);
new class AggronMegaForm extends Form {}(
  PokemonForm.AggronMega,
  PokemonVariety.AggronMega,
  PokemonSpecies.Aggron,
  "Mega Aggron",
  [ PokemonType.Steel ],
);
new class MedititeForm extends Form {}(
  PokemonForm.Meditite,
  PokemonVariety.Meditite,
  PokemonSpecies.Meditite,
  null,
  [ PokemonType.Fighting, PokemonType.Psychic ],
);
new class MedichamForm extends Form {}(
  PokemonForm.Medicham,
  PokemonVariety.Medicham,
  PokemonSpecies.Medicham,
  null,
  [ PokemonType.Fighting, PokemonType.Psychic ],
);
new class MedichamMegaForm extends Form {}(
  PokemonForm.MedichamMega,
  PokemonVariety.MedichamMega,
  PokemonSpecies.Medicham,
  "Mega Medicham",
  [ PokemonType.Fighting, PokemonType.Psychic ],
);
new class ElectrikeForm extends Form {}(
  PokemonForm.Electrike,
  PokemonVariety.Electrike,
  PokemonSpecies.Electrike,
  null,
  [ PokemonType.Electric ],
);
new class ManectricForm extends Form {}(
  PokemonForm.Manectric,
  PokemonVariety.Manectric,
  PokemonSpecies.Manectric,
  null,
  [ PokemonType.Electric ],
);
new class ManectricMegaForm extends Form {}(
  PokemonForm.ManectricMega,
  PokemonVariety.ManectricMega,
  PokemonSpecies.Manectric,
  "Mega Manectric",
  [ PokemonType.Electric ],
);
new class PlusleForm extends Form {}(
  PokemonForm.Plusle,
  PokemonVariety.Plusle,
  PokemonSpecies.Plusle,
  null,
  [ PokemonType.Electric ],
);
new class MinunForm extends Form {}(
  PokemonForm.Minun,
  PokemonVariety.Minun,
  PokemonSpecies.Minun,
  null,
  [ PokemonType.Electric ],
);
new class VolbeatForm extends Form {}(
  PokemonForm.Volbeat,
  PokemonVariety.Volbeat,
  PokemonSpecies.Volbeat,
  null,
  [ PokemonType.Bug ],
);
new class IllumiseForm extends Form {}(
  PokemonForm.Illumise,
  PokemonVariety.Illumise,
  PokemonSpecies.Illumise,
  null,
  [ PokemonType.Bug ],
);
new class RoseliaForm extends Form {}(
  PokemonForm.Roselia,
  PokemonVariety.Roselia,
  PokemonSpecies.Roselia,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class GulpinForm extends Form {}(
  PokemonForm.Gulpin,
  PokemonVariety.Gulpin,
  PokemonSpecies.Gulpin,
  null,
  [ PokemonType.Poison ],
);
new class SwalotForm extends Form {}(
  PokemonForm.Swalot,
  PokemonVariety.Swalot,
  PokemonSpecies.Swalot,
  null,
  [ PokemonType.Poison ],
);
new class CarvanhaForm extends Form {}(
  PokemonForm.Carvanha,
  PokemonVariety.Carvanha,
  PokemonSpecies.Carvanha,
  null,
  [ PokemonType.Water, PokemonType.Dark ],
);
new class SharpedoForm extends Form {}(
  PokemonForm.Sharpedo,
  PokemonVariety.Sharpedo,
  PokemonSpecies.Sharpedo,
  null,
  [ PokemonType.Water, PokemonType.Dark ],
);
new class SharpedoMegaForm extends Form {}(
  PokemonForm.SharpedoMega,
  PokemonVariety.SharpedoMega,
  PokemonSpecies.Sharpedo,
  "Mega Sharpedo",
  [ PokemonType.Water, PokemonType.Dark ],
);
new class WailmerForm extends Form {}(
  PokemonForm.Wailmer,
  PokemonVariety.Wailmer,
  PokemonSpecies.Wailmer,
  null,
  [ PokemonType.Water ],
);
new class WailordForm extends Form {}(
  PokemonForm.Wailord,
  PokemonVariety.Wailord,
  PokemonSpecies.Wailord,
  null,
  [ PokemonType.Water ],
);
new class NumelForm extends Form {}(
  PokemonForm.Numel,
  PokemonVariety.Numel,
  PokemonSpecies.Numel,
  null,
  [ PokemonType.Fire, PokemonType.Ground ],
);
new class CameruptForm extends Form {}(
  PokemonForm.Camerupt,
  PokemonVariety.Camerupt,
  PokemonSpecies.Camerupt,
  null,
  [ PokemonType.Fire, PokemonType.Ground ],
);
new class CameruptMegaForm extends Form {}(
  PokemonForm.CameruptMega,
  PokemonVariety.CameruptMega,
  PokemonSpecies.Camerupt,
  "Mega Camerupt",
  [ PokemonType.Fire, PokemonType.Ground ],
);
new class TorkoalForm extends Form {}(
  PokemonForm.Torkoal,
  PokemonVariety.Torkoal,
  PokemonSpecies.Torkoal,
  null,
  [ PokemonType.Fire ],
);
new class SpoinkForm extends Form {}(
  PokemonForm.Spoink,
  PokemonVariety.Spoink,
  PokemonSpecies.Spoink,
  null,
  [ PokemonType.Psychic ],
);
new class GrumpigForm extends Form {}(
  PokemonForm.Grumpig,
  PokemonVariety.Grumpig,
  PokemonSpecies.Grumpig,
  null,
  [ PokemonType.Psychic ],
);
new class SpindaForm extends Form {}(
  PokemonForm.Spinda,
  PokemonVariety.Spinda,
  PokemonSpecies.Spinda,
  null,
  [ PokemonType.Normal ],
);
new class TrapinchForm extends Form {}(
  PokemonForm.Trapinch,
  PokemonVariety.Trapinch,
  PokemonSpecies.Trapinch,
  null,
  [ PokemonType.Ground ],
);
new class VibravaForm extends Form {}(
  PokemonForm.Vibrava,
  PokemonVariety.Vibrava,
  PokemonSpecies.Vibrava,
  null,
  [ PokemonType.Ground, PokemonType.Dragon ],
);
new class FlygonForm extends Form {}(
  PokemonForm.Flygon,
  PokemonVariety.Flygon,
  PokemonSpecies.Flygon,
  null,
  [ PokemonType.Ground, PokemonType.Dragon ],
);
new class CacneaForm extends Form {}(
  PokemonForm.Cacnea,
  PokemonVariety.Cacnea,
  PokemonSpecies.Cacnea,
  null,
  [ PokemonType.Grass ],
);
new class CacturneForm extends Form {}(
  PokemonForm.Cacturne,
  PokemonVariety.Cacturne,
  PokemonSpecies.Cacturne,
  null,
  [ PokemonType.Grass, PokemonType.Dark ],
);
new class SwabluForm extends Form {}(
  PokemonForm.Swablu,
  PokemonVariety.Swablu,
  PokemonSpecies.Swablu,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class AltariaForm extends Form {}(
  PokemonForm.Altaria,
  PokemonVariety.Altaria,
  PokemonSpecies.Altaria,
  null,
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class AltariaMegaForm extends Form {}(
  PokemonForm.AltariaMega,
  PokemonVariety.AltariaMega,
  PokemonSpecies.Altaria,
  "Mega Altaria",
  [ PokemonType.Dragon, PokemonType.Fairy ],
);
new class ZangooseForm extends Form {}(
  PokemonForm.Zangoose,
  PokemonVariety.Zangoose,
  PokemonSpecies.Zangoose,
  null,
  [ PokemonType.Normal ],
);
new class SeviperForm extends Form {}(
  PokemonForm.Seviper,
  PokemonVariety.Seviper,
  PokemonSpecies.Seviper,
  null,
  [ PokemonType.Poison ],
);
new class LunatoneForm extends Form {}(
  PokemonForm.Lunatone,
  PokemonVariety.Lunatone,
  PokemonSpecies.Lunatone,
  null,
  [ PokemonType.Rock, PokemonType.Psychic ],
);
new class SolrockForm extends Form {}(
  PokemonForm.Solrock,
  PokemonVariety.Solrock,
  PokemonSpecies.Solrock,
  null,
  [ PokemonType.Rock, PokemonType.Psychic ],
);
new class BarboachForm extends Form {}(
  PokemonForm.Barboach,
  PokemonVariety.Barboach,
  PokemonSpecies.Barboach,
  null,
  [ PokemonType.Water, PokemonType.Ground ],
);
new class WhiscashForm extends Form {}(
  PokemonForm.Whiscash,
  PokemonVariety.Whiscash,
  PokemonSpecies.Whiscash,
  null,
  [ PokemonType.Water, PokemonType.Ground ],
);
new class CorphishForm extends Form {}(
  PokemonForm.Corphish,
  PokemonVariety.Corphish,
  PokemonSpecies.Corphish,
  null,
  [ PokemonType.Water ],
);
new class CrawdauntForm extends Form {}(
  PokemonForm.Crawdaunt,
  PokemonVariety.Crawdaunt,
  PokemonSpecies.Crawdaunt,
  null,
  [ PokemonType.Water, PokemonType.Dark ],
);
new class BaltoyForm extends Form {}(
  PokemonForm.Baltoy,
  PokemonVariety.Baltoy,
  PokemonSpecies.Baltoy,
  null,
  [ PokemonType.Ground, PokemonType.Psychic ],
);
new class ClaydolForm extends Form {}(
  PokemonForm.Claydol,
  PokemonVariety.Claydol,
  PokemonSpecies.Claydol,
  null,
  [ PokemonType.Ground, PokemonType.Psychic ],
);
new class LileepForm extends Form {}(
  PokemonForm.Lileep,
  PokemonVariety.Lileep,
  PokemonSpecies.Lileep,
  null,
  [ PokemonType.Rock, PokemonType.Grass ],
);
new class CradilyForm extends Form {}(
  PokemonForm.Cradily,
  PokemonVariety.Cradily,
  PokemonSpecies.Cradily,
  null,
  [ PokemonType.Rock, PokemonType.Grass ],
);
new class AnorithForm extends Form {}(
  PokemonForm.Anorith,
  PokemonVariety.Anorith,
  PokemonSpecies.Anorith,
  null,
  [ PokemonType.Rock, PokemonType.Bug ],
);
new class ArmaldoForm extends Form {}(
  PokemonForm.Armaldo,
  PokemonVariety.Armaldo,
  PokemonSpecies.Armaldo,
  null,
  [ PokemonType.Rock, PokemonType.Bug ],
);
new class FeebasForm extends Form {}(
  PokemonForm.Feebas,
  PokemonVariety.Feebas,
  PokemonSpecies.Feebas,
  null,
  [ PokemonType.Water ],
);
new class MiloticForm extends Form {}(
  PokemonForm.Milotic,
  PokemonVariety.Milotic,
  PokemonSpecies.Milotic,
  null,
  [ PokemonType.Water ],
);
new class CastformForm extends Form {}(
  PokemonForm.Castform,
  PokemonVariety.Castform,
  PokemonSpecies.Castform,
  null,
  [ PokemonType.Normal ],
);
new class CastformSunnyForm extends Form {}(
  PokemonForm.CastformSunny,
  PokemonVariety.CastformSunny,
  PokemonSpecies.Castform,
  "Sunny Castform",
  [ PokemonType.Fire ],
);
new class CastformRainyForm extends Form {}(
  PokemonForm.CastformRainy,
  PokemonVariety.CastformRainy,
  PokemonSpecies.Castform,
  "Rainy Castform",
  [ PokemonType.Water ],
);
new class CastformSnowyForm extends Form {}(
  PokemonForm.CastformSnowy,
  PokemonVariety.CastformSnowy,
  PokemonSpecies.Castform,
  "Snowy Castform",
  [ PokemonType.Ice ],
);
new class KecleonForm extends Form {}(
  PokemonForm.Kecleon,
  PokemonVariety.Kecleon,
  PokemonSpecies.Kecleon,
  null,
  [ PokemonType.Normal ],
);
new class ShuppetForm extends Form {}(
  PokemonForm.Shuppet,
  PokemonVariety.Shuppet,
  PokemonSpecies.Shuppet,
  null,
  [ PokemonType.Ghost ],
);
new class BanetteForm extends Form {}(
  PokemonForm.Banette,
  PokemonVariety.Banette,
  PokemonSpecies.Banette,
  null,
  [ PokemonType.Ghost ],
);
new class BanetteMegaForm extends Form {}(
  PokemonForm.BanetteMega,
  PokemonVariety.BanetteMega,
  PokemonSpecies.Banette,
  "Mega Banette",
  [ PokemonType.Ghost ],
);
new class DuskullForm extends Form {}(
  PokemonForm.Duskull,
  PokemonVariety.Duskull,
  PokemonSpecies.Duskull,
  null,
  [ PokemonType.Ghost ],
);
new class DusclopsForm extends Form {}(
  PokemonForm.Dusclops,
  PokemonVariety.Dusclops,
  PokemonSpecies.Dusclops,
  null,
  [ PokemonType.Ghost ],
);
new class TropiusForm extends Form {}(
  PokemonForm.Tropius,
  PokemonVariety.Tropius,
  PokemonSpecies.Tropius,
  null,
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class ChimechoForm extends Form {}(
  PokemonForm.Chimecho,
  PokemonVariety.Chimecho,
  PokemonSpecies.Chimecho,
  null,
  [ PokemonType.Psychic ],
);
new class AbsolForm extends Form {}(
  PokemonForm.Absol,
  PokemonVariety.Absol,
  PokemonSpecies.Absol,
  null,
  [ PokemonType.Dark ],
);
new class AbsolMegaForm extends Form {}(
  PokemonForm.AbsolMega,
  PokemonVariety.AbsolMega,
  PokemonSpecies.Absol,
  "Mega Absol",
  [ PokemonType.Dark ],
);
new class WynautForm extends Form {}(
  PokemonForm.Wynaut,
  PokemonVariety.Wynaut,
  PokemonSpecies.Wynaut,
  null,
  [ PokemonType.Psychic ],
);
new class SnoruntForm extends Form {}(
  PokemonForm.Snorunt,
  PokemonVariety.Snorunt,
  PokemonSpecies.Snorunt,
  null,
  [ PokemonType.Ice ],
);
new class GlalieForm extends Form {}(
  PokemonForm.Glalie,
  PokemonVariety.Glalie,
  PokemonSpecies.Glalie,
  null,
  [ PokemonType.Ice ],
);
new class GlalieMegaForm extends Form {}(
  PokemonForm.GlalieMega,
  PokemonVariety.GlalieMega,
  PokemonSpecies.Glalie,
  "Mega Glalie",
  [ PokemonType.Ice ],
);
new class SphealForm extends Form {}(
  PokemonForm.Spheal,
  PokemonVariety.Spheal,
  PokemonSpecies.Spheal,
  null,
  [ PokemonType.Ice, PokemonType.Water ],
);
new class SealeoForm extends Form {}(
  PokemonForm.Sealeo,
  PokemonVariety.Sealeo,
  PokemonSpecies.Sealeo,
  null,
  [ PokemonType.Ice, PokemonType.Water ],
);
new class WalreinForm extends Form {}(
  PokemonForm.Walrein,
  PokemonVariety.Walrein,
  PokemonSpecies.Walrein,
  null,
  [ PokemonType.Ice, PokemonType.Water ],
);
new class ClamperlForm extends Form {}(
  PokemonForm.Clamperl,
  PokemonVariety.Clamperl,
  PokemonSpecies.Clamperl,
  null,
  [ PokemonType.Water ],
);
new class HuntailForm extends Form {}(
  PokemonForm.Huntail,
  PokemonVariety.Huntail,
  PokemonSpecies.Huntail,
  null,
  [ PokemonType.Water ],
);
new class GorebyssForm extends Form {}(
  PokemonForm.Gorebyss,
  PokemonVariety.Gorebyss,
  PokemonSpecies.Gorebyss,
  null,
  [ PokemonType.Water ],
);
new class RelicanthForm extends Form {}(
  PokemonForm.Relicanth,
  PokemonVariety.Relicanth,
  PokemonSpecies.Relicanth,
  null,
  [ PokemonType.Water, PokemonType.Rock ],
);
new class LuvdiscForm extends Form {}(
  PokemonForm.Luvdisc,
  PokemonVariety.Luvdisc,
  PokemonSpecies.Luvdisc,
  null,
  [ PokemonType.Water ],
);
new class BagonForm extends Form {}(
  PokemonForm.Bagon,
  PokemonVariety.Bagon,
  PokemonSpecies.Bagon,
  null,
  [ PokemonType.Dragon ],
);
new class ShelgonForm extends Form {}(
  PokemonForm.Shelgon,
  PokemonVariety.Shelgon,
  PokemonSpecies.Shelgon,
  null,
  [ PokemonType.Dragon ],
);
new class SalamenceForm extends Form {}(
  PokemonForm.Salamence,
  PokemonVariety.Salamence,
  PokemonSpecies.Salamence,
  null,
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class SalamenceMegaForm extends Form {}(
  PokemonForm.SalamenceMega,
  PokemonVariety.SalamenceMega,
  PokemonSpecies.Salamence,
  "Mega Salamence",
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class BeldumForm extends Form {}(
  PokemonForm.Beldum,
  PokemonVariety.Beldum,
  PokemonSpecies.Beldum,
  null,
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class MetangForm extends Form {}(
  PokemonForm.Metang,
  PokemonVariety.Metang,
  PokemonSpecies.Metang,
  null,
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class MetagrossForm extends Form {}(
  PokemonForm.Metagross,
  PokemonVariety.Metagross,
  PokemonSpecies.Metagross,
  null,
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class MetagrossMegaForm extends Form {}(
  PokemonForm.MetagrossMega,
  PokemonVariety.MetagrossMega,
  PokemonSpecies.Metagross,
  "Mega Metagross",
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class RegirockForm extends Form {}(
  PokemonForm.Regirock,
  PokemonVariety.Regirock,
  PokemonSpecies.Regirock,
  null,
  [ PokemonType.Rock ],
);
new class RegiceForm extends Form {}(
  PokemonForm.Regice,
  PokemonVariety.Regice,
  PokemonSpecies.Regice,
  null,
  [ PokemonType.Ice ],
);
new class RegisteelForm extends Form {}(
  PokemonForm.Registeel,
  PokemonVariety.Registeel,
  PokemonSpecies.Registeel,
  null,
  [ PokemonType.Steel ],
);
new class LatiasForm extends Form {}(
  PokemonForm.Latias,
  PokemonVariety.Latias,
  PokemonSpecies.Latias,
  null,
  [ PokemonType.Dragon, PokemonType.Psychic ],
);
new class LatiasMegaForm extends Form {}(
  PokemonForm.LatiasMega,
  PokemonVariety.LatiasMega,
  PokemonSpecies.Latias,
  "Mega Latias",
  [ PokemonType.Dragon, PokemonType.Psychic ],
);
new class LatiosForm extends Form {}(
  PokemonForm.Latios,
  PokemonVariety.Latios,
  PokemonSpecies.Latios,
  null,
  [ PokemonType.Dragon, PokemonType.Psychic ],
);
new class LatiosMegaForm extends Form {}(
  PokemonForm.LatiosMega,
  PokemonVariety.LatiosMega,
  PokemonSpecies.Latios,
  "Mega Latios",
  [ PokemonType.Dragon, PokemonType.Psychic ],
);
new class KyogreForm extends Form {}(
  PokemonForm.Kyogre,
  PokemonVariety.Kyogre,
  PokemonSpecies.Kyogre,
  null,
  [ PokemonType.Water ],
);
new class KyogrePrimalForm extends Form {}(
  PokemonForm.KyogrePrimal,
  PokemonVariety.KyogrePrimal,
  PokemonSpecies.Kyogre,
  "Primal Kyogre",
  [ PokemonType.Water ],
);
new class GroudonForm extends Form {}(
  PokemonForm.Groudon,
  PokemonVariety.Groudon,
  PokemonSpecies.Groudon,
  null,
  [ PokemonType.Ground ],
);
new class GroudonPrimalForm extends Form {}(
  PokemonForm.GroudonPrimal,
  PokemonVariety.GroudonPrimal,
  PokemonSpecies.Groudon,
  "Primal Groudon",
  [ PokemonType.Ground, PokemonType.Fire ],
);
new class RayquazaForm extends Form {}(
  PokemonForm.Rayquaza,
  PokemonVariety.Rayquaza,
  PokemonSpecies.Rayquaza,
  null,
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class RayquazaMegaForm extends Form {}(
  PokemonForm.RayquazaMega,
  PokemonVariety.RayquazaMega,
  PokemonSpecies.Rayquaza,
  "Mega Rayquaza",
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class JirachiForm extends Form {}(
  PokemonForm.Jirachi,
  PokemonVariety.Jirachi,
  PokemonSpecies.Jirachi,
  null,
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class DeoxysNormalForm extends Form {}(
  PokemonForm.DeoxysNormal,
  PokemonVariety.DeoxysNormal,
  PokemonSpecies.Deoxys,
  "Normal Deoxys",
  [ PokemonType.Psychic ],
);
new class DeoxysAttackForm extends Form {}(
  PokemonForm.DeoxysAttack,
  PokemonVariety.DeoxysAttack,
  PokemonSpecies.Deoxys,
  "Attack Deoxys",
  [ PokemonType.Psychic ],
);
new class DeoxysDefenseForm extends Form {}(
  PokemonForm.DeoxysDefense,
  PokemonVariety.DeoxysDefense,
  PokemonSpecies.Deoxys,
  "Defense Deoxys",
  [ PokemonType.Psychic ],
);
new class DeoxysSpeedForm extends Form {}(
  PokemonForm.DeoxysSpeed,
  PokemonVariety.DeoxysSpeed,
  PokemonSpecies.Deoxys,
  "Speed Deoxys",
  [ PokemonType.Psychic ],
);
new class TurtwigForm extends Form {}(
  PokemonForm.Turtwig,
  PokemonVariety.Turtwig,
  PokemonSpecies.Turtwig,
  null,
  [ PokemonType.Grass ],
);
new class GrotleForm extends Form {}(
  PokemonForm.Grotle,
  PokemonVariety.Grotle,
  PokemonSpecies.Grotle,
  null,
  [ PokemonType.Grass ],
);
new class TorterraForm extends Form {}(
  PokemonForm.Torterra,
  PokemonVariety.Torterra,
  PokemonSpecies.Torterra,
  null,
  [ PokemonType.Grass, PokemonType.Ground ],
);
new class ChimcharForm extends Form {}(
  PokemonForm.Chimchar,
  PokemonVariety.Chimchar,
  PokemonSpecies.Chimchar,
  null,
  [ PokemonType.Fire ],
);
new class MonfernoForm extends Form {}(
  PokemonForm.Monferno,
  PokemonVariety.Monferno,
  PokemonSpecies.Monferno,
  null,
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class InfernapeForm extends Form {}(
  PokemonForm.Infernape,
  PokemonVariety.Infernape,
  PokemonSpecies.Infernape,
  null,
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class PiplupForm extends Form {}(
  PokemonForm.Piplup,
  PokemonVariety.Piplup,
  PokemonSpecies.Piplup,
  null,
  [ PokemonType.Water ],
);
new class PrinplupForm extends Form {}(
  PokemonForm.Prinplup,
  PokemonVariety.Prinplup,
  PokemonSpecies.Prinplup,
  null,
  [ PokemonType.Water ],
);
new class EmpoleonForm extends Form {}(
  PokemonForm.Empoleon,
  PokemonVariety.Empoleon,
  PokemonSpecies.Empoleon,
  null,
  [ PokemonType.Water, PokemonType.Steel ],
);
new class StarlyForm extends Form {}(
  PokemonForm.Starly,
  PokemonVariety.Starly,
  PokemonSpecies.Starly,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class StaraviaForm extends Form {}(
  PokemonForm.Staravia,
  PokemonVariety.Staravia,
  PokemonSpecies.Staravia,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class StaraptorForm extends Form {}(
  PokemonForm.Staraptor,
  PokemonVariety.Staraptor,
  PokemonSpecies.Staraptor,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class BidoofForm extends Form {}(
  PokemonForm.Bidoof,
  PokemonVariety.Bidoof,
  PokemonSpecies.Bidoof,
  null,
  [ PokemonType.Normal ],
);
new class BibarelForm extends Form {}(
  PokemonForm.Bibarel,
  PokemonVariety.Bibarel,
  PokemonSpecies.Bibarel,
  null,
  [ PokemonType.Normal, PokemonType.Water ],
);
new class KricketotForm extends Form {}(
  PokemonForm.Kricketot,
  PokemonVariety.Kricketot,
  PokemonSpecies.Kricketot,
  null,
  [ PokemonType.Bug ],
);
new class KricketuneForm extends Form {}(
  PokemonForm.Kricketune,
  PokemonVariety.Kricketune,
  PokemonSpecies.Kricketune,
  null,
  [ PokemonType.Bug ],
);
new class ShinxForm extends Form {}(
  PokemonForm.Shinx,
  PokemonVariety.Shinx,
  PokemonSpecies.Shinx,
  null,
  [ PokemonType.Electric ],
);
new class LuxioForm extends Form {}(
  PokemonForm.Luxio,
  PokemonVariety.Luxio,
  PokemonSpecies.Luxio,
  null,
  [ PokemonType.Electric ],
);
new class LuxrayForm extends Form {}(
  PokemonForm.Luxray,
  PokemonVariety.Luxray,
  PokemonSpecies.Luxray,
  null,
  [ PokemonType.Electric ],
);
new class BudewForm extends Form {}(
  PokemonForm.Budew,
  PokemonVariety.Budew,
  PokemonSpecies.Budew,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class RoseradeForm extends Form {}(
  PokemonForm.Roserade,
  PokemonVariety.Roserade,
  PokemonSpecies.Roserade,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class CranidosForm extends Form {}(
  PokemonForm.Cranidos,
  PokemonVariety.Cranidos,
  PokemonSpecies.Cranidos,
  null,
  [ PokemonType.Rock ],
);
new class RampardosForm extends Form {}(
  PokemonForm.Rampardos,
  PokemonVariety.Rampardos,
  PokemonSpecies.Rampardos,
  null,
  [ PokemonType.Rock ],
);
new class ShieldonForm extends Form {}(
  PokemonForm.Shieldon,
  PokemonVariety.Shieldon,
  PokemonSpecies.Shieldon,
  null,
  [ PokemonType.Rock, PokemonType.Steel ],
);
new class BastiodonForm extends Form {}(
  PokemonForm.Bastiodon,
  PokemonVariety.Bastiodon,
  PokemonSpecies.Bastiodon,
  null,
  [ PokemonType.Rock, PokemonType.Steel ],
);
new class BurmyPlantForm extends Form {}(
  PokemonForm.BurmyPlant,
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
  "Plant Burmy",
  [ PokemonType.Bug ],
);
new class BurmySandyForm extends Form {}(
  PokemonForm.BurmySandy,
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
  "Sandy Burmy",
  [ PokemonType.Bug ],
);
new class BurmyTrashForm extends Form {}(
  PokemonForm.BurmyTrash,
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
  "Trash Burmy",
  [ PokemonType.Bug ],
);
new class WormadamPlantForm extends Form {}(
  PokemonForm.WormadamPlant,
  PokemonVariety.WormadamPlant,
  PokemonSpecies.Wormadam,
  "Plant Wormadam",
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class WormadamSandyForm extends Form {}(
  PokemonForm.WormadamSandy,
  PokemonVariety.WormadamSandy,
  PokemonSpecies.Wormadam,
  "Sandy Wormadam",
  [ PokemonType.Bug, PokemonType.Ground ],
);
new class WormadamTrashForm extends Form {}(
  PokemonForm.WormadamTrash,
  PokemonVariety.WormadamTrash,
  PokemonSpecies.Wormadam,
  "Trash Wormadam",
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class MothimPlantForm extends Form {}(
  PokemonForm.MothimPlant,
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class MothimSandyForm extends Form {}(
  PokemonForm.MothimSandy,
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class MothimTrashForm extends Form {}(
  PokemonForm.MothimTrash,
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class CombeeForm extends Form {}(
  PokemonForm.Combee,
  PokemonVariety.Combee,
  PokemonSpecies.Combee,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VespiquenForm extends Form {}(
  PokemonForm.Vespiquen,
  PokemonVariety.Vespiquen,
  PokemonSpecies.Vespiquen,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class PachirisuForm extends Form {}(
  PokemonForm.Pachirisu,
  PokemonVariety.Pachirisu,
  PokemonSpecies.Pachirisu,
  null,
  [ PokemonType.Electric ],
);
new class BuizelForm extends Form {}(
  PokemonForm.Buizel,
  PokemonVariety.Buizel,
  PokemonSpecies.Buizel,
  null,
  [ PokemonType.Water ],
);
new class FloatzelForm extends Form {}(
  PokemonForm.Floatzel,
  PokemonVariety.Floatzel,
  PokemonSpecies.Floatzel,
  null,
  [ PokemonType.Water ],
);
new class CherubiForm extends Form {}(
  PokemonForm.Cherubi,
  PokemonVariety.Cherubi,
  PokemonSpecies.Cherubi,
  null,
  [ PokemonType.Grass ],
);
new class CherrimOvercastForm extends Form {}(
  PokemonForm.CherrimOvercast,
  PokemonVariety.Cherrim,
  PokemonSpecies.Cherrim,
  "Overcast Cherrim",
  [ PokemonType.Grass ],
);
new class CherrimSunshineForm extends Form {}(
  PokemonForm.CherrimSunshine,
  PokemonVariety.Cherrim,
  PokemonSpecies.Cherrim,
  "Sunshine Cherrim",
  [ PokemonType.Grass ],
);
new class ShellosWestForm extends Form {}(
  PokemonForm.ShellosWest,
  PokemonVariety.Shellos,
  PokemonSpecies.Shellos,
  "West Shellos",
  [ PokemonType.Water ],
);
new class ShellosEastForm extends Form {}(
  PokemonForm.ShellosEast,
  PokemonVariety.Shellos,
  PokemonSpecies.Shellos,
  "East Shellos",
  [ PokemonType.Water ],
);
new class GastrodonWestForm extends Form {}(
  PokemonForm.GastrodonWest,
  PokemonVariety.Gastrodon,
  PokemonSpecies.Gastrodon,
  "West Gastrodon",
  [ PokemonType.Water, PokemonType.Ground ],
);
new class GastrodonEastForm extends Form {}(
  PokemonForm.GastrodonEast,
  PokemonVariety.Gastrodon,
  PokemonSpecies.Gastrodon,
  "East Gastrodon",
  [ PokemonType.Water, PokemonType.Ground ],
);
new class AmbipomForm extends Form {}(
  PokemonForm.Ambipom,
  PokemonVariety.Ambipom,
  PokemonSpecies.Ambipom,
  null,
  [ PokemonType.Normal ],
);
new class DrifloonForm extends Form {}(
  PokemonForm.Drifloon,
  PokemonVariety.Drifloon,
  PokemonSpecies.Drifloon,
  null,
  [ PokemonType.Ghost, PokemonType.Flying ],
);
new class DrifblimForm extends Form {}(
  PokemonForm.Drifblim,
  PokemonVariety.Drifblim,
  PokemonSpecies.Drifblim,
  null,
  [ PokemonType.Ghost, PokemonType.Flying ],
);
new class BunearyForm extends Form {}(
  PokemonForm.Buneary,
  PokemonVariety.Buneary,
  PokemonSpecies.Buneary,
  null,
  [ PokemonType.Normal ],
);
new class LopunnyForm extends Form {}(
  PokemonForm.Lopunny,
  PokemonVariety.Lopunny,
  PokemonSpecies.Lopunny,
  null,
  [ PokemonType.Normal ],
);
new class LopunnyMegaForm extends Form {}(
  PokemonForm.LopunnyMega,
  PokemonVariety.LopunnyMega,
  PokemonSpecies.Lopunny,
  "Mega Lopunny",
  [ PokemonType.Normal, PokemonType.Fighting ],
);
new class MismagiusForm extends Form {}(
  PokemonForm.Mismagius,
  PokemonVariety.Mismagius,
  PokemonSpecies.Mismagius,
  null,
  [ PokemonType.Ghost ],
);
new class HonchkrowForm extends Form {}(
  PokemonForm.Honchkrow,
  PokemonVariety.Honchkrow,
  PokemonSpecies.Honchkrow,
  null,
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class GlameowForm extends Form {}(
  PokemonForm.Glameow,
  PokemonVariety.Glameow,
  PokemonSpecies.Glameow,
  null,
  [ PokemonType.Normal ],
);
new class PuruglyForm extends Form {}(
  PokemonForm.Purugly,
  PokemonVariety.Purugly,
  PokemonSpecies.Purugly,
  null,
  [ PokemonType.Normal ],
);
new class ChinglingForm extends Form {}(
  PokemonForm.Chingling,
  PokemonVariety.Chingling,
  PokemonSpecies.Chingling,
  null,
  [ PokemonType.Psychic ],
);
new class StunkyForm extends Form {}(
  PokemonForm.Stunky,
  PokemonVariety.Stunky,
  PokemonSpecies.Stunky,
  null,
  [ PokemonType.Poison, PokemonType.Dark ],
);
new class SkuntankForm extends Form {}(
  PokemonForm.Skuntank,
  PokemonVariety.Skuntank,
  PokemonSpecies.Skuntank,
  null,
  [ PokemonType.Poison, PokemonType.Dark ],
);
new class BronzorForm extends Form {}(
  PokemonForm.Bronzor,
  PokemonVariety.Bronzor,
  PokemonSpecies.Bronzor,
  null,
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class BronzongForm extends Form {}(
  PokemonForm.Bronzong,
  PokemonVariety.Bronzong,
  PokemonSpecies.Bronzong,
  null,
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class BonslyForm extends Form {}(
  PokemonForm.Bonsly,
  PokemonVariety.Bonsly,
  PokemonSpecies.Bonsly,
  null,
  [ PokemonType.Rock ],
);
new class MimeJrForm extends Form {}(
  PokemonForm.MimeJr,
  PokemonVariety.MimeJr,
  PokemonSpecies.MimeJr,
  null,
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class HappinyForm extends Form {}(
  PokemonForm.Happiny,
  PokemonVariety.Happiny,
  PokemonSpecies.Happiny,
  null,
  [ PokemonType.Normal ],
);
new class ChatotForm extends Form {}(
  PokemonForm.Chatot,
  PokemonVariety.Chatot,
  PokemonSpecies.Chatot,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SpiritombForm extends Form {}(
  PokemonForm.Spiritomb,
  PokemonVariety.Spiritomb,
  PokemonSpecies.Spiritomb,
  null,
  [ PokemonType.Ghost, PokemonType.Dark ],
);
new class GibleForm extends Form {}(
  PokemonForm.Gible,
  PokemonVariety.Gible,
  PokemonSpecies.Gible,
  null,
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class GabiteForm extends Form {}(
  PokemonForm.Gabite,
  PokemonVariety.Gabite,
  PokemonSpecies.Gabite,
  null,
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class GarchompForm extends Form {}(
  PokemonForm.Garchomp,
  PokemonVariety.Garchomp,
  PokemonSpecies.Garchomp,
  null,
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class GarchompMegaForm extends Form {}(
  PokemonForm.GarchompMega,
  PokemonVariety.GarchompMega,
  PokemonSpecies.Garchomp,
  "Mega Garchomp",
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class MunchlaxForm extends Form {}(
  PokemonForm.Munchlax,
  PokemonVariety.Munchlax,
  PokemonSpecies.Munchlax,
  null,
  [ PokemonType.Normal ],
);
new class RioluForm extends Form {}(
  PokemonForm.Riolu,
  PokemonVariety.Riolu,
  PokemonSpecies.Riolu,
  null,
  [ PokemonType.Fighting ],
);
new class LucarioForm extends Form {}(
  PokemonForm.Lucario,
  PokemonVariety.Lucario,
  PokemonSpecies.Lucario,
  null,
  [ PokemonType.Fighting, PokemonType.Steel ],
);
new class LucarioMegaForm extends Form {}(
  PokemonForm.LucarioMega,
  PokemonVariety.LucarioMega,
  PokemonSpecies.Lucario,
  "Mega Lucario",
  [ PokemonType.Fighting, PokemonType.Steel ],
);
new class HippopotasForm extends Form {}(
  PokemonForm.Hippopotas,
  PokemonVariety.Hippopotas,
  PokemonSpecies.Hippopotas,
  null,
  [ PokemonType.Ground ],
);
new class HippowdonForm extends Form {}(
  PokemonForm.Hippowdon,
  PokemonVariety.Hippowdon,
  PokemonSpecies.Hippowdon,
  null,
  [ PokemonType.Ground ],
);
new class SkorupiForm extends Form {}(
  PokemonForm.Skorupi,
  PokemonVariety.Skorupi,
  PokemonSpecies.Skorupi,
  null,
  [ PokemonType.Poison, PokemonType.Bug ],
);
new class DrapionForm extends Form {}(
  PokemonForm.Drapion,
  PokemonVariety.Drapion,
  PokemonSpecies.Drapion,
  null,
  [ PokemonType.Poison, PokemonType.Dark ],
);
new class CroagunkForm extends Form {}(
  PokemonForm.Croagunk,
  PokemonVariety.Croagunk,
  PokemonSpecies.Croagunk,
  null,
  [ PokemonType.Poison, PokemonType.Fighting ],
);
new class ToxicroakForm extends Form {}(
  PokemonForm.Toxicroak,
  PokemonVariety.Toxicroak,
  PokemonSpecies.Toxicroak,
  null,
  [ PokemonType.Poison, PokemonType.Fighting ],
);
new class CarnivineForm extends Form {}(
  PokemonForm.Carnivine,
  PokemonVariety.Carnivine,
  PokemonSpecies.Carnivine,
  null,
  [ PokemonType.Grass ],
);
new class FinneonForm extends Form {}(
  PokemonForm.Finneon,
  PokemonVariety.Finneon,
  PokemonSpecies.Finneon,
  null,
  [ PokemonType.Water ],
);
new class LumineonForm extends Form {}(
  PokemonForm.Lumineon,
  PokemonVariety.Lumineon,
  PokemonSpecies.Lumineon,
  null,
  [ PokemonType.Water ],
);
new class MantykeForm extends Form {}(
  PokemonForm.Mantyke,
  PokemonVariety.Mantyke,
  PokemonSpecies.Mantyke,
  null,
  [ PokemonType.Water, PokemonType.Flying ],
);
new class SnoverForm extends Form {}(
  PokemonForm.Snover,
  PokemonVariety.Snover,
  PokemonSpecies.Snover,
  null,
  [ PokemonType.Grass, PokemonType.Ice ],
);
new class AbomasnowForm extends Form {}(
  PokemonForm.Abomasnow,
  PokemonVariety.Abomasnow,
  PokemonSpecies.Abomasnow,
  null,
  [ PokemonType.Grass, PokemonType.Ice ],
);
new class AbomasnowMegaForm extends Form {}(
  PokemonForm.AbomasnowMega,
  PokemonVariety.AbomasnowMega,
  PokemonSpecies.Abomasnow,
  "Mega Abomasnow",
  [ PokemonType.Grass, PokemonType.Ice ],
);
new class WeavileForm extends Form {}(
  PokemonForm.Weavile,
  PokemonVariety.Weavile,
  PokemonSpecies.Weavile,
  null,
  [ PokemonType.Dark, PokemonType.Ice ],
);
new class MagnezoneForm extends Form {}(
  PokemonForm.Magnezone,
  PokemonVariety.Magnezone,
  PokemonSpecies.Magnezone,
  null,
  [ PokemonType.Electric, PokemonType.Steel ],
);
new class LickilickyForm extends Form {}(
  PokemonForm.Lickilicky,
  PokemonVariety.Lickilicky,
  PokemonSpecies.Lickilicky,
  null,
  [ PokemonType.Normal ],
);
new class RhyperiorForm extends Form {}(
  PokemonForm.Rhyperior,
  PokemonVariety.Rhyperior,
  PokemonSpecies.Rhyperior,
  null,
  [ PokemonType.Ground, PokemonType.Rock ],
);
new class TangrowthForm extends Form {}(
  PokemonForm.Tangrowth,
  PokemonVariety.Tangrowth,
  PokemonSpecies.Tangrowth,
  null,
  [ PokemonType.Grass ],
);
new class ElectivireForm extends Form {}(
  PokemonForm.Electivire,
  PokemonVariety.Electivire,
  PokemonSpecies.Electivire,
  null,
  [ PokemonType.Electric ],
);
new class MagmortarForm extends Form {}(
  PokemonForm.Magmortar,
  PokemonVariety.Magmortar,
  PokemonSpecies.Magmortar,
  null,
  [ PokemonType.Fire ],
);
new class TogekissForm extends Form {}(
  PokemonForm.Togekiss,
  PokemonVariety.Togekiss,
  PokemonSpecies.Togekiss,
  null,
  [ PokemonType.Fairy, PokemonType.Flying ],
);
new class YanmegaForm extends Form {}(
  PokemonForm.Yanmega,
  PokemonVariety.Yanmega,
  PokemonSpecies.Yanmega,
  null,
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class LeafeonForm extends Form {}(
  PokemonForm.Leafeon,
  PokemonVariety.Leafeon,
  PokemonSpecies.Leafeon,
  null,
  [ PokemonType.Grass ],
);
new class GlaceonForm extends Form {}(
  PokemonForm.Glaceon,
  PokemonVariety.Glaceon,
  PokemonSpecies.Glaceon,
  null,
  [ PokemonType.Ice ],
);
new class GliscorForm extends Form {}(
  PokemonForm.Gliscor,
  PokemonVariety.Gliscor,
  PokemonSpecies.Gliscor,
  null,
  [ PokemonType.Ground, PokemonType.Flying ],
);
new class MamoswineForm extends Form {}(
  PokemonForm.Mamoswine,
  PokemonVariety.Mamoswine,
  PokemonSpecies.Mamoswine,
  null,
  [ PokemonType.Ice, PokemonType.Ground ],
);
new class PorygonZForm extends Form {}(
  PokemonForm.PorygonZ,
  PokemonVariety.PorygonZ,
  PokemonSpecies.PorygonZ,
  null,
  [ PokemonType.Normal ],
);
new class GalladeForm extends Form {}(
  PokemonForm.Gallade,
  PokemonVariety.Gallade,
  PokemonSpecies.Gallade,
  null,
  [ PokemonType.Psychic, PokemonType.Fighting ],
);
new class GalladeMegaForm extends Form {}(
  PokemonForm.GalladeMega,
  PokemonVariety.GalladeMega,
  PokemonSpecies.Gallade,
  "Mega Gallade",
  [ PokemonType.Psychic, PokemonType.Fighting ],
);
new class ProbopassForm extends Form {}(
  PokemonForm.Probopass,
  PokemonVariety.Probopass,
  PokemonSpecies.Probopass,
  null,
  [ PokemonType.Rock, PokemonType.Steel ],
);
new class DusknoirForm extends Form {}(
  PokemonForm.Dusknoir,
  PokemonVariety.Dusknoir,
  PokemonSpecies.Dusknoir,
  null,
  [ PokemonType.Ghost ],
);
new class FroslassForm extends Form {}(
  PokemonForm.Froslass,
  PokemonVariety.Froslass,
  PokemonSpecies.Froslass,
  null,
  [ PokemonType.Ice, PokemonType.Ghost ],
);
new class RotomForm extends Form {}(
  PokemonForm.Rotom,
  PokemonVariety.Rotom,
  PokemonSpecies.Rotom,
  null,
  [ PokemonType.Electric, PokemonType.Ghost ],
);
new class RotomHeatForm extends Form {}(
  PokemonForm.RotomHeat,
  PokemonVariety.RotomHeat,
  PokemonSpecies.Rotom,
  "Heat Rotom",
  [ PokemonType.Electric, PokemonType.Fire ],
);
new class RotomWashForm extends Form {}(
  PokemonForm.RotomWash,
  PokemonVariety.RotomWash,
  PokemonSpecies.Rotom,
  "Wash Rotom",
  [ PokemonType.Electric, PokemonType.Water ],
);
new class RotomFrostForm extends Form {}(
  PokemonForm.RotomFrost,
  PokemonVariety.RotomFrost,
  PokemonSpecies.Rotom,
  "Frost Rotom",
  [ PokemonType.Electric, PokemonType.Ice ],
);
new class RotomFanForm extends Form {}(
  PokemonForm.RotomFan,
  PokemonVariety.RotomFan,
  PokemonSpecies.Rotom,
  "Fan Rotom",
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class RotomMowForm extends Form {}(
  PokemonForm.RotomMow,
  PokemonVariety.RotomMow,
  PokemonSpecies.Rotom,
  "Mow Rotom",
  [ PokemonType.Electric, PokemonType.Grass ],
);
new class UxieForm extends Form {}(
  PokemonForm.Uxie,
  PokemonVariety.Uxie,
  PokemonSpecies.Uxie,
  null,
  [ PokemonType.Psychic ],
);
new class MespritForm extends Form {}(
  PokemonForm.Mesprit,
  PokemonVariety.Mesprit,
  PokemonSpecies.Mesprit,
  null,
  [ PokemonType.Psychic ],
);
new class AzelfForm extends Form {}(
  PokemonForm.Azelf,
  PokemonVariety.Azelf,
  PokemonSpecies.Azelf,
  null,
  [ PokemonType.Psychic ],
);
new class DialgaForm extends Form {}(
  PokemonForm.Dialga,
  PokemonVariety.Dialga,
  PokemonSpecies.Dialga,
  null,
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class DialgaOriginForm extends Form {}(
  PokemonForm.DialgaOrigin,
  PokemonVariety.DialgaOrigin,
  PokemonSpecies.Dialga,
  "Origin Dialga",
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class PalkiaForm extends Form {}(
  PokemonForm.Palkia,
  PokemonVariety.Palkia,
  PokemonSpecies.Palkia,
  null,
  [ PokemonType.Water, PokemonType.Dragon ],
);
new class PalkiaOriginForm extends Form {}(
  PokemonForm.PalkiaOrigin,
  PokemonVariety.PalkiaOrigin,
  PokemonSpecies.Palkia,
  "Origin Palkia",
  [ PokemonType.Water, PokemonType.Dragon ],
);
new class HeatranForm extends Form {}(
  PokemonForm.Heatran,
  PokemonVariety.Heatran,
  PokemonSpecies.Heatran,
  null,
  [ PokemonType.Fire, PokemonType.Steel ],
);
new class RegigigasForm extends Form {}(
  PokemonForm.Regigigas,
  PokemonVariety.Regigigas,
  PokemonSpecies.Regigigas,
  null,
  [ PokemonType.Normal ],
);
new class GiratinaAlteredForm extends Form {}(
  PokemonForm.GiratinaAltered,
  PokemonVariety.GiratinaAltered,
  PokemonSpecies.Giratina,
  "Altered Giratina",
  [ PokemonType.Ghost, PokemonType.Dragon ],
);
new class GiratinaOriginForm extends Form {}(
  PokemonForm.GiratinaOrigin,
  PokemonVariety.GiratinaOrigin,
  PokemonSpecies.Giratina,
  "Origin Giratina",
  [ PokemonType.Ghost, PokemonType.Dragon ],
);
new class CresseliaForm extends Form {}(
  PokemonForm.Cresselia,
  PokemonVariety.Cresselia,
  PokemonSpecies.Cresselia,
  null,
  [ PokemonType.Psychic ],
);
new class PhioneForm extends Form {}(
  PokemonForm.Phione,
  PokemonVariety.Phione,
  PokemonSpecies.Phione,
  null,
  [ PokemonType.Water ],
);
new class ManaphyForm extends Form {}(
  PokemonForm.Manaphy,
  PokemonVariety.Manaphy,
  PokemonSpecies.Manaphy,
  null,
  [ PokemonType.Water ],
);
new class DarkraiForm extends Form {}(
  PokemonForm.Darkrai,
  PokemonVariety.Darkrai,
  PokemonSpecies.Darkrai,
  null,
  [ PokemonType.Dark ],
);
new class ShayminLandForm extends Form {}(
  PokemonForm.ShayminLand,
  PokemonVariety.ShayminLand,
  PokemonSpecies.Shaymin,
  "Land Shaymin",
  [ PokemonType.Grass ],
);
new class ShayminSkyForm extends Form {}(
  PokemonForm.ShayminSky,
  PokemonVariety.ShayminSky,
  PokemonSpecies.Shaymin,
  "Sky Shaymin",
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class ArceusNormalForm extends Form {}(
  PokemonForm.ArceusNormal,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Normal Arceus",
  [ PokemonType.Normal ],
);
new class ArceusBugForm extends Form {}(
  PokemonForm.ArceusBug,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Bug Arceus",
  [ PokemonType.Bug ],
);
new class ArceusDarkForm extends Form {}(
  PokemonForm.ArceusDark,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Dark Arceus",
  [ PokemonType.Dark ],
);
new class ArceusDragonForm extends Form {}(
  PokemonForm.ArceusDragon,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Dragon Arceus",
  [ PokemonType.Dragon ],
);
new class ArceusElectricForm extends Form {}(
  PokemonForm.ArceusElectric,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Electric Arceus",
  [ PokemonType.Electric ],
);
new class ArceusFightingForm extends Form {}(
  PokemonForm.ArceusFighting,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Fighting Arceus",
  [ PokemonType.Fighting ],
);
new class ArceusFireForm extends Form {}(
  PokemonForm.ArceusFire,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Fire Arceus",
  [ PokemonType.Fire ],
);
new class ArceusFlyingForm extends Form {}(
  PokemonForm.ArceusFlying,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Flying Arceus",
  [ PokemonType.Flying ],
);
new class ArceusGhostForm extends Form {}(
  PokemonForm.ArceusGhost,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Ghost Arceus",
  [ PokemonType.Ghost ],
);
new class ArceusGrassForm extends Form {}(
  PokemonForm.ArceusGrass,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Grass Arceus",
  [ PokemonType.Grass ],
);
new class ArceusGroundForm extends Form {}(
  PokemonForm.ArceusGround,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Ground Arceus",
  [ PokemonType.Ground ],
);
new class ArceusIceForm extends Form {}(
  PokemonForm.ArceusIce,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Ice Arceus",
  [ PokemonType.Ice ],
);
new class ArceusPoisonForm extends Form {}(
  PokemonForm.ArceusPoison,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Poison Arceus",
  [ PokemonType.Poison ],
);
new class ArceusPsychicForm extends Form {}(
  PokemonForm.ArceusPsychic,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Psychic Arceus",
  [ PokemonType.Psychic ],
);
new class ArceusRockForm extends Form {}(
  PokemonForm.ArceusRock,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Rock Arceus",
  [ PokemonType.Rock ],
);
new class ArceusSteelForm extends Form {}(
  PokemonForm.ArceusSteel,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Steel Arceus",
  [ PokemonType.Steel ],
);
new class ArceusWaterForm extends Form {}(
  PokemonForm.ArceusWater,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Water Arceus",
  [ PokemonType.Water ],
);
new class ArceusUnknownForm extends Form {}(
  PokemonForm.ArceusUnknown,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "??? Arceus",
  [ PokemonType.Unknown ],
);
new class ArceusFairyForm extends Form {}(
  PokemonForm.ArceusFairy,
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  "Fairy Arceus",
  [ PokemonType.Fairy ],
);
new class VictiniForm extends Form {}(
  PokemonForm.Victini,
  PokemonVariety.Victini,
  PokemonSpecies.Victini,
  null,
  [ PokemonType.Psychic, PokemonType.Fire ],
);
new class SnivyForm extends Form {}(
  PokemonForm.Snivy,
  PokemonVariety.Snivy,
  PokemonSpecies.Snivy,
  null,
  [ PokemonType.Grass ],
);
new class ServineForm extends Form {}(
  PokemonForm.Servine,
  PokemonVariety.Servine,
  PokemonSpecies.Servine,
  null,
  [ PokemonType.Grass ],
);
new class SerperiorForm extends Form {}(
  PokemonForm.Serperior,
  PokemonVariety.Serperior,
  PokemonSpecies.Serperior,
  null,
  [ PokemonType.Grass ],
);
new class TepigForm extends Form {}(
  PokemonForm.Tepig,
  PokemonVariety.Tepig,
  PokemonSpecies.Tepig,
  null,
  [ PokemonType.Fire ],
);
new class PigniteForm extends Form {}(
  PokemonForm.Pignite,
  PokemonVariety.Pignite,
  PokemonSpecies.Pignite,
  null,
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class EmboarForm extends Form {}(
  PokemonForm.Emboar,
  PokemonVariety.Emboar,
  PokemonSpecies.Emboar,
  null,
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class OshawottForm extends Form {}(
  PokemonForm.Oshawott,
  PokemonVariety.Oshawott,
  PokemonSpecies.Oshawott,
  null,
  [ PokemonType.Water ],
);
new class DewottForm extends Form {}(
  PokemonForm.Dewott,
  PokemonVariety.Dewott,
  PokemonSpecies.Dewott,
  null,
  [ PokemonType.Water ],
);
new class SamurottForm extends Form {}(
  PokemonForm.Samurott,
  PokemonVariety.Samurott,
  PokemonSpecies.Samurott,
  null,
  [ PokemonType.Water ],
);
new class SamurottHisuiForm extends Form {}(
  PokemonForm.SamurottHisui,
  PokemonVariety.SamurottHisui,
  PokemonSpecies.Samurott,
  "Hisuian Samurott",
  [ PokemonType.Water, PokemonType.Dark ],
);
new class PatratForm extends Form {}(
  PokemonForm.Patrat,
  PokemonVariety.Patrat,
  PokemonSpecies.Patrat,
  null,
  [ PokemonType.Normal ],
);
new class WatchogForm extends Form {}(
  PokemonForm.Watchog,
  PokemonVariety.Watchog,
  PokemonSpecies.Watchog,
  null,
  [ PokemonType.Normal ],
);
new class LillipupForm extends Form {}(
  PokemonForm.Lillipup,
  PokemonVariety.Lillipup,
  PokemonSpecies.Lillipup,
  null,
  [ PokemonType.Normal ],
);
new class HerdierForm extends Form {}(
  PokemonForm.Herdier,
  PokemonVariety.Herdier,
  PokemonSpecies.Herdier,
  null,
  [ PokemonType.Normal ],
);
new class StoutlandForm extends Form {}(
  PokemonForm.Stoutland,
  PokemonVariety.Stoutland,
  PokemonSpecies.Stoutland,
  null,
  [ PokemonType.Normal ],
);
new class PurrloinForm extends Form {}(
  PokemonForm.Purrloin,
  PokemonVariety.Purrloin,
  PokemonSpecies.Purrloin,
  null,
  [ PokemonType.Dark ],
);
new class LiepardForm extends Form {}(
  PokemonForm.Liepard,
  PokemonVariety.Liepard,
  PokemonSpecies.Liepard,
  null,
  [ PokemonType.Dark ],
);
new class PansageForm extends Form {}(
  PokemonForm.Pansage,
  PokemonVariety.Pansage,
  PokemonSpecies.Pansage,
  null,
  [ PokemonType.Grass ],
);
new class SimisageForm extends Form {}(
  PokemonForm.Simisage,
  PokemonVariety.Simisage,
  PokemonSpecies.Simisage,
  null,
  [ PokemonType.Grass ],
);
new class PansearForm extends Form {}(
  PokemonForm.Pansear,
  PokemonVariety.Pansear,
  PokemonSpecies.Pansear,
  null,
  [ PokemonType.Fire ],
);
new class SimisearForm extends Form {}(
  PokemonForm.Simisear,
  PokemonVariety.Simisear,
  PokemonSpecies.Simisear,
  null,
  [ PokemonType.Fire ],
);
new class PanpourForm extends Form {}(
  PokemonForm.Panpour,
  PokemonVariety.Panpour,
  PokemonSpecies.Panpour,
  null,
  [ PokemonType.Water ],
);
new class SimipourForm extends Form {}(
  PokemonForm.Simipour,
  PokemonVariety.Simipour,
  PokemonSpecies.Simipour,
  null,
  [ PokemonType.Water ],
);
new class MunnaForm extends Form {}(
  PokemonForm.Munna,
  PokemonVariety.Munna,
  PokemonSpecies.Munna,
  null,
  [ PokemonType.Psychic ],
);
new class MusharnaForm extends Form {}(
  PokemonForm.Musharna,
  PokemonVariety.Musharna,
  PokemonSpecies.Musharna,
  null,
  [ PokemonType.Psychic ],
);
new class PidoveForm extends Form {}(
  PokemonForm.Pidove,
  PokemonVariety.Pidove,
  PokemonSpecies.Pidove,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class TranquillForm extends Form {}(
  PokemonForm.Tranquill,
  PokemonVariety.Tranquill,
  PokemonSpecies.Tranquill,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class UnfezantForm extends Form {}(
  PokemonForm.Unfezant,
  PokemonVariety.Unfezant,
  PokemonSpecies.Unfezant,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class BlitzleForm extends Form {}(
  PokemonForm.Blitzle,
  PokemonVariety.Blitzle,
  PokemonSpecies.Blitzle,
  null,
  [ PokemonType.Electric ],
);
new class ZebstrikaForm extends Form {}(
  PokemonForm.Zebstrika,
  PokemonVariety.Zebstrika,
  PokemonSpecies.Zebstrika,
  null,
  [ PokemonType.Electric ],
);
new class RoggenrolaForm extends Form {}(
  PokemonForm.Roggenrola,
  PokemonVariety.Roggenrola,
  PokemonSpecies.Roggenrola,
  null,
  [ PokemonType.Rock ],
);
new class BoldoreForm extends Form {}(
  PokemonForm.Boldore,
  PokemonVariety.Boldore,
  PokemonSpecies.Boldore,
  null,
  [ PokemonType.Rock ],
);
new class GigalithForm extends Form {}(
  PokemonForm.Gigalith,
  PokemonVariety.Gigalith,
  PokemonSpecies.Gigalith,
  null,
  [ PokemonType.Rock ],
);
new class WoobatForm extends Form {}(
  PokemonForm.Woobat,
  PokemonVariety.Woobat,
  PokemonSpecies.Woobat,
  null,
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class SwoobatForm extends Form {}(
  PokemonForm.Swoobat,
  PokemonVariety.Swoobat,
  PokemonSpecies.Swoobat,
  null,
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class DrilburForm extends Form {}(
  PokemonForm.Drilbur,
  PokemonVariety.Drilbur,
  PokemonSpecies.Drilbur,
  null,
  [ PokemonType.Ground ],
);
new class ExcadrillForm extends Form {}(
  PokemonForm.Excadrill,
  PokemonVariety.Excadrill,
  PokemonSpecies.Excadrill,
  null,
  [ PokemonType.Ground, PokemonType.Steel ],
);
new class AudinoForm extends Form {}(
  PokemonForm.Audino,
  PokemonVariety.Audino,
  PokemonSpecies.Audino,
  null,
  [ PokemonType.Normal ],
);
new class AudinoMegaForm extends Form {}(
  PokemonForm.AudinoMega,
  PokemonVariety.AudinoMega,
  PokemonSpecies.Audino,
  "Mega Audino",
  [ PokemonType.Normal, PokemonType.Fairy ],
);
new class TimburrForm extends Form {}(
  PokemonForm.Timburr,
  PokemonVariety.Timburr,
  PokemonSpecies.Timburr,
  null,
  [ PokemonType.Fighting ],
);
new class GurdurrForm extends Form {}(
  PokemonForm.Gurdurr,
  PokemonVariety.Gurdurr,
  PokemonSpecies.Gurdurr,
  null,
  [ PokemonType.Fighting ],
);
new class ConkeldurrForm extends Form {}(
  PokemonForm.Conkeldurr,
  PokemonVariety.Conkeldurr,
  PokemonSpecies.Conkeldurr,
  null,
  [ PokemonType.Fighting ],
);
new class TympoleForm extends Form {}(
  PokemonForm.Tympole,
  PokemonVariety.Tympole,
  PokemonSpecies.Tympole,
  null,
  [ PokemonType.Water ],
);
new class PalpitoadForm extends Form {}(
  PokemonForm.Palpitoad,
  PokemonVariety.Palpitoad,
  PokemonSpecies.Palpitoad,
  null,
  [ PokemonType.Water, PokemonType.Ground ],
);
new class SeismitoadForm extends Form {}(
  PokemonForm.Seismitoad,
  PokemonVariety.Seismitoad,
  PokemonSpecies.Seismitoad,
  null,
  [ PokemonType.Water, PokemonType.Ground ],
);
new class ThrohForm extends Form {}(
  PokemonForm.Throh,
  PokemonVariety.Throh,
  PokemonSpecies.Throh,
  null,
  [ PokemonType.Fighting ],
);
new class SawkForm extends Form {}(
  PokemonForm.Sawk,
  PokemonVariety.Sawk,
  PokemonSpecies.Sawk,
  null,
  [ PokemonType.Fighting ],
);
new class SewaddleForm extends Form {}(
  PokemonForm.Sewaddle,
  PokemonVariety.Sewaddle,
  PokemonSpecies.Sewaddle,
  null,
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class SwadloonForm extends Form {}(
  PokemonForm.Swadloon,
  PokemonVariety.Swadloon,
  PokemonSpecies.Swadloon,
  null,
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class LeavannyForm extends Form {}(
  PokemonForm.Leavanny,
  PokemonVariety.Leavanny,
  PokemonSpecies.Leavanny,
  null,
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class VenipedeForm extends Form {}(
  PokemonForm.Venipede,
  PokemonVariety.Venipede,
  PokemonSpecies.Venipede,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class WhirlipedeForm extends Form {}(
  PokemonForm.Whirlipede,
  PokemonVariety.Whirlipede,
  PokemonSpecies.Whirlipede,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class ScolipedeForm extends Form {}(
  PokemonForm.Scolipede,
  PokemonVariety.Scolipede,
  PokemonSpecies.Scolipede,
  null,
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class CottoneeForm extends Form {}(
  PokemonForm.Cottonee,
  PokemonVariety.Cottonee,
  PokemonSpecies.Cottonee,
  null,
  [ PokemonType.Grass, PokemonType.Fairy ],
);
new class WhimsicottForm extends Form {}(
  PokemonForm.Whimsicott,
  PokemonVariety.Whimsicott,
  PokemonSpecies.Whimsicott,
  null,
  [ PokemonType.Grass, PokemonType.Fairy ],
);
new class PetililForm extends Form {}(
  PokemonForm.Petilil,
  PokemonVariety.Petilil,
  PokemonSpecies.Petilil,
  null,
  [ PokemonType.Grass ],
);
new class LilligantForm extends Form {}(
  PokemonForm.Lilligant,
  PokemonVariety.Lilligant,
  PokemonSpecies.Lilligant,
  null,
  [ PokemonType.Grass ],
);
new class LilligantHisuiForm extends Form {}(
  PokemonForm.LilligantHisui,
  PokemonVariety.LilligantHisui,
  PokemonSpecies.Lilligant,
  "Hisuian Lilligant",
  [ PokemonType.Grass, PokemonType.Fighting ],
);
new class BasculinRedStripedForm extends Form {}(
  PokemonForm.BasculinRedStriped,
  PokemonVariety.BasculinRedStriped,
  PokemonSpecies.Basculin,
  "Red-Striped Basculin",
  [ PokemonType.Water ],
);
new class BasculinBlueStripedForm extends Form {}(
  PokemonForm.BasculinBlueStriped,
  PokemonVariety.BasculinBlueStriped,
  PokemonSpecies.Basculin,
  "Blue-Striped Basculin",
  [ PokemonType.Water ],
);
new class BasculinWhiteStripedForm extends Form {}(
  PokemonForm.BasculinWhiteStriped,
  PokemonVariety.BasculinWhiteStriped,
  PokemonSpecies.Basculin,
  "White-Striped Basculin",
  [ PokemonType.Water ],
);
new class SandileForm extends Form {}(
  PokemonForm.Sandile,
  PokemonVariety.Sandile,
  PokemonSpecies.Sandile,
  null,
  [ PokemonType.Ground, PokemonType.Dark ],
);
new class KrokorokForm extends Form {}(
  PokemonForm.Krokorok,
  PokemonVariety.Krokorok,
  PokemonSpecies.Krokorok,
  null,
  [ PokemonType.Ground, PokemonType.Dark ],
);
new class KrookodileForm extends Form {}(
  PokemonForm.Krookodile,
  PokemonVariety.Krookodile,
  PokemonSpecies.Krookodile,
  null,
  [ PokemonType.Ground, PokemonType.Dark ],
);
new class DarumakaForm extends Form {}(
  PokemonForm.Darumaka,
  PokemonVariety.Darumaka,
  PokemonSpecies.Darumaka,
  null,
  [ PokemonType.Fire ],
);
new class DarumakaGalarForm extends Form {}(
  PokemonForm.DarumakaGalar,
  PokemonVariety.DarumakaGalar,
  PokemonSpecies.Darumaka,
  "Galarian Darumaka",
  [ PokemonType.Ice ],
);
new class DarmanitanStandardForm extends Form {}(
  PokemonForm.DarmanitanStandard,
  PokemonVariety.DarmanitanStandard,
  PokemonSpecies.Darmanitan,
  "Standard Darmanitan",
  [ PokemonType.Fire ],
);
new class DarmanitanZenForm extends Form {}(
  PokemonForm.DarmanitanZen,
  PokemonVariety.DarmanitanZen,
  PokemonSpecies.Darmanitan,
  "Zen Darmanitan",
  [ PokemonType.Fire, PokemonType.Psychic ],
);
new class DarmanitanGalarStandardForm extends Form {}(
  PokemonForm.DarmanitanGalarStandard,
  PokemonVariety.DarmanitanGalarStandard,
  PokemonSpecies.Darmanitan,
  "Standard Galarian Darmanitan",
  [ PokemonType.Ice ],
);
new class DarmanitanGalarZenForm extends Form {}(
  PokemonForm.DarmanitanGalarZen,
  PokemonVariety.DarmanitanGalarZen,
  PokemonSpecies.Darmanitan,
  "Zen Galarian Darmanitan",
  [ PokemonType.Ice, PokemonType.Fire ],
);
new class MaractusForm extends Form {}(
  PokemonForm.Maractus,
  PokemonVariety.Maractus,
  PokemonSpecies.Maractus,
  null,
  [ PokemonType.Grass ],
);
new class DwebbleForm extends Form {}(
  PokemonForm.Dwebble,
  PokemonVariety.Dwebble,
  PokemonSpecies.Dwebble,
  null,
  [ PokemonType.Bug, PokemonType.Rock ],
);
new class CrustleForm extends Form {}(
  PokemonForm.Crustle,
  PokemonVariety.Crustle,
  PokemonSpecies.Crustle,
  null,
  [ PokemonType.Bug, PokemonType.Rock ],
);
new class ScraggyForm extends Form {}(
  PokemonForm.Scraggy,
  PokemonVariety.Scraggy,
  PokemonSpecies.Scraggy,
  null,
  [ PokemonType.Dark, PokemonType.Fighting ],
);
new class ScraftyForm extends Form {}(
  PokemonForm.Scrafty,
  PokemonVariety.Scrafty,
  PokemonSpecies.Scrafty,
  null,
  [ PokemonType.Dark, PokemonType.Fighting ],
);
new class SigilyphForm extends Form {}(
  PokemonForm.Sigilyph,
  PokemonVariety.Sigilyph,
  PokemonSpecies.Sigilyph,
  null,
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class YamaskForm extends Form {}(
  PokemonForm.Yamask,
  PokemonVariety.Yamask,
  PokemonSpecies.Yamask,
  null,
  [ PokemonType.Ghost ],
);
new class YamaskGalarForm extends Form {}(
  PokemonForm.YamaskGalar,
  PokemonVariety.YamaskGalar,
  PokemonSpecies.Yamask,
  "Galarian Yamask",
  [ PokemonType.Ground, PokemonType.Ghost ],
);
new class CofagrigusForm extends Form {}(
  PokemonForm.Cofagrigus,
  PokemonVariety.Cofagrigus,
  PokemonSpecies.Cofagrigus,
  null,
  [ PokemonType.Ghost ],
);
new class TirtougaForm extends Form {}(
  PokemonForm.Tirtouga,
  PokemonVariety.Tirtouga,
  PokemonSpecies.Tirtouga,
  null,
  [ PokemonType.Water, PokemonType.Rock ],
);
new class CarracostaForm extends Form {}(
  PokemonForm.Carracosta,
  PokemonVariety.Carracosta,
  PokemonSpecies.Carracosta,
  null,
  [ PokemonType.Water, PokemonType.Rock ],
);
new class ArchenForm extends Form {}(
  PokemonForm.Archen,
  PokemonVariety.Archen,
  PokemonSpecies.Archen,
  null,
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class ArcheopsForm extends Form {}(
  PokemonForm.Archeops,
  PokemonVariety.Archeops,
  PokemonSpecies.Archeops,
  null,
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class TrubbishForm extends Form {}(
  PokemonForm.Trubbish,
  PokemonVariety.Trubbish,
  PokemonSpecies.Trubbish,
  null,
  [ PokemonType.Poison ],
);
new class GarbodorForm extends Form {}(
  PokemonForm.Garbodor,
  PokemonVariety.Garbodor,
  PokemonSpecies.Garbodor,
  null,
  [ PokemonType.Poison ],
);
new class GarbodorGmaxForm extends Form {}(
  PokemonForm.GarbodorGmax,
  PokemonVariety.GarbodorGmax,
  PokemonSpecies.Garbodor,
  "Gigantamax Garbodor",
  [ PokemonType.Poison ],
);
new class ZoruaForm extends Form {}(
  PokemonForm.Zorua,
  PokemonVariety.Zorua,
  PokemonSpecies.Zorua,
  null,
  [ PokemonType.Dark ],
);
new class ZoruaHisuiForm extends Form {}(
  PokemonForm.ZoruaHisui,
  PokemonVariety.ZoruaHisui,
  PokemonSpecies.Zorua,
  "Hisuian Zorua",
  [ PokemonType.Normal, PokemonType.Ghost ],
);
new class ZoroarkForm extends Form {}(
  PokemonForm.Zoroark,
  PokemonVariety.Zoroark,
  PokemonSpecies.Zoroark,
  null,
  [ PokemonType.Dark ],
);
new class ZoroarkHisuiForm extends Form {}(
  PokemonForm.ZoroarkHisui,
  PokemonVariety.ZoroarkHisui,
  PokemonSpecies.Zoroark,
  "Hisuian Zoroark",
  [ PokemonType.Normal, PokemonType.Ghost ],
);
new class MinccinoForm extends Form {}(
  PokemonForm.Minccino,
  PokemonVariety.Minccino,
  PokemonSpecies.Minccino,
  null,
  [ PokemonType.Normal ],
);
new class CinccinoForm extends Form {}(
  PokemonForm.Cinccino,
  PokemonVariety.Cinccino,
  PokemonSpecies.Cinccino,
  null,
  [ PokemonType.Normal ],
);
new class GothitaForm extends Form {}(
  PokemonForm.Gothita,
  PokemonVariety.Gothita,
  PokemonSpecies.Gothita,
  null,
  [ PokemonType.Psychic ],
);
new class GothoritaForm extends Form {}(
  PokemonForm.Gothorita,
  PokemonVariety.Gothorita,
  PokemonSpecies.Gothorita,
  null,
  [ PokemonType.Psychic ],
);
new class GothitelleForm extends Form {}(
  PokemonForm.Gothitelle,
  PokemonVariety.Gothitelle,
  PokemonSpecies.Gothitelle,
  null,
  [ PokemonType.Psychic ],
);
new class SolosisForm extends Form {}(
  PokemonForm.Solosis,
  PokemonVariety.Solosis,
  PokemonSpecies.Solosis,
  null,
  [ PokemonType.Psychic ],
);
new class DuosionForm extends Form {}(
  PokemonForm.Duosion,
  PokemonVariety.Duosion,
  PokemonSpecies.Duosion,
  null,
  [ PokemonType.Psychic ],
);
new class ReuniclusForm extends Form {}(
  PokemonForm.Reuniclus,
  PokemonVariety.Reuniclus,
  PokemonSpecies.Reuniclus,
  null,
  [ PokemonType.Psychic ],
);
new class DucklettForm extends Form {}(
  PokemonForm.Ducklett,
  PokemonVariety.Ducklett,
  PokemonSpecies.Ducklett,
  null,
  [ PokemonType.Water, PokemonType.Flying ],
);
new class SwannaForm extends Form {}(
  PokemonForm.Swanna,
  PokemonVariety.Swanna,
  PokemonSpecies.Swanna,
  null,
  [ PokemonType.Water, PokemonType.Flying ],
);
new class VanilliteForm extends Form {}(
  PokemonForm.Vanillite,
  PokemonVariety.Vanillite,
  PokemonSpecies.Vanillite,
  null,
  [ PokemonType.Ice ],
);
new class VanillishForm extends Form {}(
  PokemonForm.Vanillish,
  PokemonVariety.Vanillish,
  PokemonSpecies.Vanillish,
  null,
  [ PokemonType.Ice ],
);
new class VanilluxeForm extends Form {}(
  PokemonForm.Vanilluxe,
  PokemonVariety.Vanilluxe,
  PokemonSpecies.Vanilluxe,
  null,
  [ PokemonType.Ice ],
);
new class DeerlingSpringForm extends Form {}(
  PokemonForm.DeerlingSpring,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
  "Spring Deerling",
  [ PokemonType.Normal, PokemonType.Grass ],
);
new class DeerlingSummerForm extends Form {}(
  PokemonForm.DeerlingSummer,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
  "Summer Deerling",
  [ PokemonType.Normal, PokemonType.Grass ],
);
new class DeerlingAutumnForm extends Form {}(
  PokemonForm.DeerlingAutumn,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
  "Autumn Deerling",
  [ PokemonType.Normal, PokemonType.Grass ],
);
new class DeerlingWinterForm extends Form {}(
  PokemonForm.DeerlingWinter,
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
  "Winter Deerling",
  [ PokemonType.Normal, PokemonType.Grass ],
);
new class SawsbuckSpringForm extends Form {}(
  PokemonForm.SawsbuckSpring,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
  "Spring Sawsbuck",
  [ PokemonType.Normal, PokemonType.Grass ],
);
new class SawsbuckSummerForm extends Form {}(
  PokemonForm.SawsbuckSummer,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
  "Summer Sawsbuck",
  [ PokemonType.Normal, PokemonType.Grass ],
);
new class SawsbuckAutumnForm extends Form {}(
  PokemonForm.SawsbuckAutumn,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
  "Autumn Sawsbuck",
  [ PokemonType.Normal, PokemonType.Grass ],
);
new class SawsbuckWinterForm extends Form {}(
  PokemonForm.SawsbuckWinter,
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
  "Winter Sawsbuck",
  [ PokemonType.Normal, PokemonType.Grass ],
);
new class EmolgaForm extends Form {}(
  PokemonForm.Emolga,
  PokemonVariety.Emolga,
  PokemonSpecies.Emolga,
  null,
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class KarrablastForm extends Form {}(
  PokemonForm.Karrablast,
  PokemonVariety.Karrablast,
  PokemonSpecies.Karrablast,
  null,
  [ PokemonType.Bug ],
);
new class EscavalierForm extends Form {}(
  PokemonForm.Escavalier,
  PokemonVariety.Escavalier,
  PokemonSpecies.Escavalier,
  null,
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class FoongusForm extends Form {}(
  PokemonForm.Foongus,
  PokemonVariety.Foongus,
  PokemonSpecies.Foongus,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class AmoongussForm extends Form {}(
  PokemonForm.Amoonguss,
  PokemonVariety.Amoonguss,
  PokemonSpecies.Amoonguss,
  null,
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class FrillishForm extends Form {}(
  PokemonForm.Frillish,
  PokemonVariety.Frillish,
  PokemonSpecies.Frillish,
  null,
  [ PokemonType.Water, PokemonType.Ghost ],
);
new class JellicentForm extends Form {}(
  PokemonForm.Jellicent,
  PokemonVariety.Jellicent,
  PokemonSpecies.Jellicent,
  null,
  [ PokemonType.Water, PokemonType.Ghost ],
);
new class AlomomolaForm extends Form {}(
  PokemonForm.Alomomola,
  PokemonVariety.Alomomola,
  PokemonSpecies.Alomomola,
  null,
  [ PokemonType.Water ],
);
new class JoltikForm extends Form {}(
  PokemonForm.Joltik,
  PokemonVariety.Joltik,
  PokemonSpecies.Joltik,
  null,
  [ PokemonType.Bug, PokemonType.Electric ],
);
new class GalvantulaForm extends Form {}(
  PokemonForm.Galvantula,
  PokemonVariety.Galvantula,
  PokemonSpecies.Galvantula,
  null,
  [ PokemonType.Bug, PokemonType.Electric ],
);
new class FerroseedForm extends Form {}(
  PokemonForm.Ferroseed,
  PokemonVariety.Ferroseed,
  PokemonSpecies.Ferroseed,
  null,
  [ PokemonType.Grass, PokemonType.Steel ],
);
new class FerrothornForm extends Form {}(
  PokemonForm.Ferrothorn,
  PokemonVariety.Ferrothorn,
  PokemonSpecies.Ferrothorn,
  null,
  [ PokemonType.Grass, PokemonType.Steel ],
);
new class KlinkForm extends Form {}(
  PokemonForm.Klink,
  PokemonVariety.Klink,
  PokemonSpecies.Klink,
  null,
  [ PokemonType.Steel ],
);
new class KlangForm extends Form {}(
  PokemonForm.Klang,
  PokemonVariety.Klang,
  PokemonSpecies.Klang,
  null,
  [ PokemonType.Steel ],
);
new class KlinklangForm extends Form {}(
  PokemonForm.Klinklang,
  PokemonVariety.Klinklang,
  PokemonSpecies.Klinklang,
  null,
  [ PokemonType.Steel ],
);
new class TynamoForm extends Form {}(
  PokemonForm.Tynamo,
  PokemonVariety.Tynamo,
  PokemonSpecies.Tynamo,
  null,
  [ PokemonType.Electric ],
);
new class EelektrikForm extends Form {}(
  PokemonForm.Eelektrik,
  PokemonVariety.Eelektrik,
  PokemonSpecies.Eelektrik,
  null,
  [ PokemonType.Electric ],
);
new class EelektrossForm extends Form {}(
  PokemonForm.Eelektross,
  PokemonVariety.Eelektross,
  PokemonSpecies.Eelektross,
  null,
  [ PokemonType.Electric ],
);
new class ElgyemForm extends Form {}(
  PokemonForm.Elgyem,
  PokemonVariety.Elgyem,
  PokemonSpecies.Elgyem,
  null,
  [ PokemonType.Psychic ],
);
new class BeheeyemForm extends Form {}(
  PokemonForm.Beheeyem,
  PokemonVariety.Beheeyem,
  PokemonSpecies.Beheeyem,
  null,
  [ PokemonType.Psychic ],
);
new class LitwickForm extends Form {}(
  PokemonForm.Litwick,
  PokemonVariety.Litwick,
  PokemonSpecies.Litwick,
  null,
  [ PokemonType.Ghost, PokemonType.Fire ],
);
new class LampentForm extends Form {}(
  PokemonForm.Lampent,
  PokemonVariety.Lampent,
  PokemonSpecies.Lampent,
  null,
  [ PokemonType.Ghost, PokemonType.Fire ],
);
new class ChandelureForm extends Form {}(
  PokemonForm.Chandelure,
  PokemonVariety.Chandelure,
  PokemonSpecies.Chandelure,
  null,
  [ PokemonType.Ghost, PokemonType.Fire ],
);
new class AxewForm extends Form {}(
  PokemonForm.Axew,
  PokemonVariety.Axew,
  PokemonSpecies.Axew,
  null,
  [ PokemonType.Dragon ],
);
new class FraxureForm extends Form {}(
  PokemonForm.Fraxure,
  PokemonVariety.Fraxure,
  PokemonSpecies.Fraxure,
  null,
  [ PokemonType.Dragon ],
);
new class HaxorusForm extends Form {}(
  PokemonForm.Haxorus,
  PokemonVariety.Haxorus,
  PokemonSpecies.Haxorus,
  null,
  [ PokemonType.Dragon ],
);
new class CubchooForm extends Form {}(
  PokemonForm.Cubchoo,
  PokemonVariety.Cubchoo,
  PokemonSpecies.Cubchoo,
  null,
  [ PokemonType.Ice ],
);
new class BearticForm extends Form {}(
  PokemonForm.Beartic,
  PokemonVariety.Beartic,
  PokemonSpecies.Beartic,
  null,
  [ PokemonType.Ice ],
);
new class CryogonalForm extends Form {}(
  PokemonForm.Cryogonal,
  PokemonVariety.Cryogonal,
  PokemonSpecies.Cryogonal,
  null,
  [ PokemonType.Ice ],
);
new class ShelmetForm extends Form {}(
  PokemonForm.Shelmet,
  PokemonVariety.Shelmet,
  PokemonSpecies.Shelmet,
  null,
  [ PokemonType.Bug ],
);
new class AccelgorForm extends Form {}(
  PokemonForm.Accelgor,
  PokemonVariety.Accelgor,
  PokemonSpecies.Accelgor,
  null,
  [ PokemonType.Bug ],
);
new class StunfiskForm extends Form {}(
  PokemonForm.Stunfisk,
  PokemonVariety.Stunfisk,
  PokemonSpecies.Stunfisk,
  null,
  [ PokemonType.Ground, PokemonType.Electric ],
);
new class StunfiskGalarForm extends Form {}(
  PokemonForm.StunfiskGalar,
  PokemonVariety.StunfiskGalar,
  PokemonSpecies.Stunfisk,
  "Galarian Stunfisk",
  [ PokemonType.Ground, PokemonType.Steel ],
);
new class MienfooForm extends Form {}(
  PokemonForm.Mienfoo,
  PokemonVariety.Mienfoo,
  PokemonSpecies.Mienfoo,
  null,
  [ PokemonType.Fighting ],
);
new class MienshaoForm extends Form {}(
  PokemonForm.Mienshao,
  PokemonVariety.Mienshao,
  PokemonSpecies.Mienshao,
  null,
  [ PokemonType.Fighting ],
);
new class DruddigonForm extends Form {}(
  PokemonForm.Druddigon,
  PokemonVariety.Druddigon,
  PokemonSpecies.Druddigon,
  null,
  [ PokemonType.Dragon ],
);
new class GolettForm extends Form {}(
  PokemonForm.Golett,
  PokemonVariety.Golett,
  PokemonSpecies.Golett,
  null,
  [ PokemonType.Ground, PokemonType.Ghost ],
);
new class GolurkForm extends Form {}(
  PokemonForm.Golurk,
  PokemonVariety.Golurk,
  PokemonSpecies.Golurk,
  null,
  [ PokemonType.Ground, PokemonType.Ghost ],
);
new class PawniardForm extends Form {}(
  PokemonForm.Pawniard,
  PokemonVariety.Pawniard,
  PokemonSpecies.Pawniard,
  null,
  [ PokemonType.Dark, PokemonType.Steel ],
);
new class BisharpForm extends Form {}(
  PokemonForm.Bisharp,
  PokemonVariety.Bisharp,
  PokemonSpecies.Bisharp,
  null,
  [ PokemonType.Dark, PokemonType.Steel ],
);
new class BouffalantForm extends Form {}(
  PokemonForm.Bouffalant,
  PokemonVariety.Bouffalant,
  PokemonSpecies.Bouffalant,
  null,
  [ PokemonType.Normal ],
);
new class RuffletForm extends Form {}(
  PokemonForm.Rufflet,
  PokemonVariety.Rufflet,
  PokemonSpecies.Rufflet,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class BraviaryForm extends Form {}(
  PokemonForm.Braviary,
  PokemonVariety.Braviary,
  PokemonSpecies.Braviary,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class BraviaryHisuiForm extends Form {}(
  PokemonForm.BraviaryHisui,
  PokemonVariety.BraviaryHisui,
  PokemonSpecies.Braviary,
  "Hisuian Braviary",
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class VullabyForm extends Form {}(
  PokemonForm.Vullaby,
  PokemonVariety.Vullaby,
  PokemonSpecies.Vullaby,
  null,
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class MandibuzzForm extends Form {}(
  PokemonForm.Mandibuzz,
  PokemonVariety.Mandibuzz,
  PokemonSpecies.Mandibuzz,
  null,
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class HeatmorForm extends Form {}(
  PokemonForm.Heatmor,
  PokemonVariety.Heatmor,
  PokemonSpecies.Heatmor,
  null,
  [ PokemonType.Fire ],
);
new class DurantForm extends Form {}(
  PokemonForm.Durant,
  PokemonVariety.Durant,
  PokemonSpecies.Durant,
  null,
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class DeinoForm extends Form {}(
  PokemonForm.Deino,
  PokemonVariety.Deino,
  PokemonSpecies.Deino,
  null,
  [ PokemonType.Dark, PokemonType.Dragon ],
);
new class ZweilousForm extends Form {}(
  PokemonForm.Zweilous,
  PokemonVariety.Zweilous,
  PokemonSpecies.Zweilous,
  null,
  [ PokemonType.Dark, PokemonType.Dragon ],
);
new class HydreigonForm extends Form {}(
  PokemonForm.Hydreigon,
  PokemonVariety.Hydreigon,
  PokemonSpecies.Hydreigon,
  null,
  [ PokemonType.Dark, PokemonType.Dragon ],
);
new class LarvestaForm extends Form {}(
  PokemonForm.Larvesta,
  PokemonVariety.Larvesta,
  PokemonSpecies.Larvesta,
  null,
  [ PokemonType.Bug, PokemonType.Fire ],
);
new class VolcaronaForm extends Form {}(
  PokemonForm.Volcarona,
  PokemonVariety.Volcarona,
  PokemonSpecies.Volcarona,
  null,
  [ PokemonType.Bug, PokemonType.Fire ],
);
new class CobalionForm extends Form {}(
  PokemonForm.Cobalion,
  PokemonVariety.Cobalion,
  PokemonSpecies.Cobalion,
  null,
  [ PokemonType.Steel, PokemonType.Fighting ],
);
new class TerrakionForm extends Form {}(
  PokemonForm.Terrakion,
  PokemonVariety.Terrakion,
  PokemonSpecies.Terrakion,
  null,
  [ PokemonType.Rock, PokemonType.Fighting ],
);
new class VirizionForm extends Form {}(
  PokemonForm.Virizion,
  PokemonVariety.Virizion,
  PokemonSpecies.Virizion,
  null,
  [ PokemonType.Grass, PokemonType.Fighting ],
);
new class TornadusIncarnateForm extends Form {}(
  PokemonForm.TornadusIncarnate,
  PokemonVariety.TornadusIncarnate,
  PokemonSpecies.Tornadus,
  "Incarnate Tornadus",
  [ PokemonType.Flying ],
);
new class TornadusTherianForm extends Form {}(
  PokemonForm.TornadusTherian,
  PokemonVariety.TornadusTherian,
  PokemonSpecies.Tornadus,
  "Therian Tornadus",
  [ PokemonType.Flying ],
);
new class ThundurusIncarnateForm extends Form {}(
  PokemonForm.ThundurusIncarnate,
  PokemonVariety.ThundurusIncarnate,
  PokemonSpecies.Thundurus,
  "Incarnate Thundurus",
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class ThundurusTherianForm extends Form {}(
  PokemonForm.ThundurusTherian,
  PokemonVariety.ThundurusTherian,
  PokemonSpecies.Thundurus,
  "Therian Thundurus",
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class ReshiramForm extends Form {}(
  PokemonForm.Reshiram,
  PokemonVariety.Reshiram,
  PokemonSpecies.Reshiram,
  null,
  [ PokemonType.Dragon, PokemonType.Fire ],
);
new class ZekromForm extends Form {}(
  PokemonForm.Zekrom,
  PokemonVariety.Zekrom,
  PokemonSpecies.Zekrom,
  null,
  [ PokemonType.Dragon, PokemonType.Electric ],
);
new class LandorusIncarnateForm extends Form {}(
  PokemonForm.LandorusIncarnate,
  PokemonVariety.LandorusIncarnate,
  PokemonSpecies.Landorus,
  "Incarnate Landorus",
  [ PokemonType.Ground, PokemonType.Flying ],
);
new class LandorusTherianForm extends Form {}(
  PokemonForm.LandorusTherian,
  PokemonVariety.LandorusTherian,
  PokemonSpecies.Landorus,
  "Therian Landorus",
  [ PokemonType.Ground, PokemonType.Flying ],
);
new class KyuremForm extends Form {}(
  PokemonForm.Kyurem,
  PokemonVariety.Kyurem,
  PokemonSpecies.Kyurem,
  null,
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class KyuremBlackForm extends Form {}(
  PokemonForm.KyuremBlack,
  PokemonVariety.KyuremBlack,
  PokemonSpecies.Kyurem,
  "Black Kyurem",
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class KyuremWhiteForm extends Form {}(
  PokemonForm.KyuremWhite,
  PokemonVariety.KyuremWhite,
  PokemonSpecies.Kyurem,
  "White Kyurem",
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class KeldeoOrdinaryForm extends Form {}(
  PokemonForm.KeldeoOrdinary,
  PokemonVariety.KeldeoOrdinary,
  PokemonSpecies.Keldeo,
  "Ordinary Keldeo",
  [ PokemonType.Water, PokemonType.Fighting ],
);
new class KeldeoResoluteForm extends Form {}(
  PokemonForm.KeldeoResolute,
  PokemonVariety.KeldeoResolute,
  PokemonSpecies.Keldeo,
  "Resolute Keldeo",
  [ PokemonType.Water, PokemonType.Fighting ],
);
new class MeloettaAriaForm extends Form {}(
  PokemonForm.MeloettaAria,
  PokemonVariety.MeloettaAria,
  PokemonSpecies.Meloetta,
  "Aria Meloetta",
  [ PokemonType.Normal, PokemonType.Psychic ],
);
new class MeloettaPirouetteForm extends Form {}(
  PokemonForm.MeloettaPirouette,
  PokemonVariety.MeloettaPirouette,
  PokemonSpecies.Meloetta,
  "Pirouette Meloetta",
  [ PokemonType.Normal, PokemonType.Fighting ],
);
new class GenesectForm extends Form {}(
  PokemonForm.Genesect,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  null,
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class GenesectDouseForm extends Form {}(
  PokemonForm.GenesectDouse,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  "Douse Genesect",
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class GenesectShockForm extends Form {}(
  PokemonForm.GenesectShock,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  "Shock Genesect",
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class GenesectBurnForm extends Form {}(
  PokemonForm.GenesectBurn,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  "Burn Genesect",
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class GenesectChillForm extends Form {}(
  PokemonForm.GenesectChill,
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  "Chill Genesect",
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class ChespinForm extends Form {}(
  PokemonForm.Chespin,
  PokemonVariety.Chespin,
  PokemonSpecies.Chespin,
  null,
  [ PokemonType.Grass ],
);
new class QuilladinForm extends Form {}(
  PokemonForm.Quilladin,
  PokemonVariety.Quilladin,
  PokemonSpecies.Quilladin,
  null,
  [ PokemonType.Grass ],
);
new class ChesnaughtForm extends Form {}(
  PokemonForm.Chesnaught,
  PokemonVariety.Chesnaught,
  PokemonSpecies.Chesnaught,
  null,
  [ PokemonType.Grass, PokemonType.Fighting ],
);
new class FennekinForm extends Form {}(
  PokemonForm.Fennekin,
  PokemonVariety.Fennekin,
  PokemonSpecies.Fennekin,
  null,
  [ PokemonType.Fire ],
);
new class BraixenForm extends Form {}(
  PokemonForm.Braixen,
  PokemonVariety.Braixen,
  PokemonSpecies.Braixen,
  null,
  [ PokemonType.Fire ],
);
new class DelphoxForm extends Form {}(
  PokemonForm.Delphox,
  PokemonVariety.Delphox,
  PokemonSpecies.Delphox,
  null,
  [ PokemonType.Fire, PokemonType.Psychic ],
);
new class FroakieForm extends Form {}(
  PokemonForm.Froakie,
  PokemonVariety.Froakie,
  PokemonSpecies.Froakie,
  null,
  [ PokemonType.Water ],
);
new class FrogadierForm extends Form {}(
  PokemonForm.Frogadier,
  PokemonVariety.Frogadier,
  PokemonSpecies.Frogadier,
  null,
  [ PokemonType.Water ],
);
new class GreninjaForm extends Form {}(
  PokemonForm.Greninja,
  PokemonVariety.Greninja,
  PokemonSpecies.Greninja,
  null,
  [ PokemonType.Water, PokemonType.Dark ],
);
new class GreninjaBattleBondForm extends Form {}(
  PokemonForm.GreninjaBattleBond,
  PokemonVariety.GreninjaBattleBond,
  PokemonSpecies.Greninja,
  "Battle Bond Greninja",
  [ PokemonType.Water, PokemonType.Dark ],
);
new class GreninjaAshForm extends Form {}(
  PokemonForm.GreninjaAsh,
  PokemonVariety.GreninjaAsh,
  PokemonSpecies.Greninja,
  "Ash's Greninja",
  [ PokemonType.Water, PokemonType.Dark ],
);
new class BunnelbyForm extends Form {}(
  PokemonForm.Bunnelby,
  PokemonVariety.Bunnelby,
  PokemonSpecies.Bunnelby,
  null,
  [ PokemonType.Normal ],
);
new class DiggersbyForm extends Form {}(
  PokemonForm.Diggersby,
  PokemonVariety.Diggersby,
  PokemonSpecies.Diggersby,
  null,
  [ PokemonType.Normal, PokemonType.Ground ],
);
new class FletchlingForm extends Form {}(
  PokemonForm.Fletchling,
  PokemonVariety.Fletchling,
  PokemonSpecies.Fletchling,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class FletchinderForm extends Form {}(
  PokemonForm.Fletchinder,
  PokemonVariety.Fletchinder,
  PokemonSpecies.Fletchinder,
  null,
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class TalonflameForm extends Form {}(
  PokemonForm.Talonflame,
  PokemonVariety.Talonflame,
  PokemonSpecies.Talonflame,
  null,
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class ScatterbugIcySnowForm extends Form {}(
  PokemonForm.ScatterbugIcySnow,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugPolarForm extends Form {}(
  PokemonForm.ScatterbugPolar,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugTundraForm extends Form {}(
  PokemonForm.ScatterbugTundra,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugContinentalForm extends Form {}(
  PokemonForm.ScatterbugContinental,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugGardenForm extends Form {}(
  PokemonForm.ScatterbugGarden,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugElegantForm extends Form {}(
  PokemonForm.ScatterbugElegant,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugMeadowForm extends Form {}(
  PokemonForm.ScatterbugMeadow,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugModernForm extends Form {}(
  PokemonForm.ScatterbugModern,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugMarineForm extends Form {}(
  PokemonForm.ScatterbugMarine,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugArchipelagoForm extends Form {}(
  PokemonForm.ScatterbugArchipelago,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugHighPlainsForm extends Form {}(
  PokemonForm.ScatterbugHighPlains,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugSandstormForm extends Form {}(
  PokemonForm.ScatterbugSandstorm,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugRiverForm extends Form {}(
  PokemonForm.ScatterbugRiver,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugMonsoonForm extends Form {}(
  PokemonForm.ScatterbugMonsoon,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugSavannaForm extends Form {}(
  PokemonForm.ScatterbugSavanna,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugSunForm extends Form {}(
  PokemonForm.ScatterbugSun,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugOceanForm extends Form {}(
  PokemonForm.ScatterbugOcean,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugJungleForm extends Form {}(
  PokemonForm.ScatterbugJungle,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugFancyForm extends Form {}(
  PokemonForm.ScatterbugFancy,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class ScatterbugPokeBallForm extends Form {}(
  PokemonForm.ScatterbugPokeBall,
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaIcySnowForm extends Form {}(
  PokemonForm.SpewpaIcySnow,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaPolarForm extends Form {}(
  PokemonForm.SpewpaPolar,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaTundraForm extends Form {}(
  PokemonForm.SpewpaTundra,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaContinentalForm extends Form {}(
  PokemonForm.SpewpaContinental,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaGardenForm extends Form {}(
  PokemonForm.SpewpaGarden,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaElegantForm extends Form {}(
  PokemonForm.SpewpaElegant,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaMeadowForm extends Form {}(
  PokemonForm.SpewpaMeadow,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaModernForm extends Form {}(
  PokemonForm.SpewpaModern,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaMarineForm extends Form {}(
  PokemonForm.SpewpaMarine,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaArchipelagoForm extends Form {}(
  PokemonForm.SpewpaArchipelago,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaHighPlainsForm extends Form {}(
  PokemonForm.SpewpaHighPlains,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaSandstormForm extends Form {}(
  PokemonForm.SpewpaSandstorm,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaRiverForm extends Form {}(
  PokemonForm.SpewpaRiver,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaMonsoonForm extends Form {}(
  PokemonForm.SpewpaMonsoon,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaSavannaForm extends Form {}(
  PokemonForm.SpewpaSavanna,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaSunForm extends Form {}(
  PokemonForm.SpewpaSun,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaOceanForm extends Form {}(
  PokemonForm.SpewpaOcean,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaJungleForm extends Form {}(
  PokemonForm.SpewpaJungle,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaFancyForm extends Form {}(
  PokemonForm.SpewpaFancy,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class SpewpaPokeBallForm extends Form {}(
  PokemonForm.SpewpaPokeBall,
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  null,
  [ PokemonType.Bug ],
);
new class VivillonMeadowForm extends Form {}(
  PokemonForm.VivillonMeadow,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Meadow Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonIcySnowForm extends Form {}(
  PokemonForm.VivillonIcySnow,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Icy Snow Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonPolarForm extends Form {}(
  PokemonForm.VivillonPolar,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Polar Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonTundraForm extends Form {}(
  PokemonForm.VivillonTundra,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Tundra Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonContinentalForm extends Form {}(
  PokemonForm.VivillonContinental,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Continental Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonGardenForm extends Form {}(
  PokemonForm.VivillonGarden,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Garden Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonElegantForm extends Form {}(
  PokemonForm.VivillonElegant,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Elegant Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonModernForm extends Form {}(
  PokemonForm.VivillonModern,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Modern Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonMarineForm extends Form {}(
  PokemonForm.VivillonMarine,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Marine Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonArchipelagoForm extends Form {}(
  PokemonForm.VivillonArchipelago,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Archipelago Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonHighPlainsForm extends Form {}(
  PokemonForm.VivillonHighPlains,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "High Plains Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonSandstormForm extends Form {}(
  PokemonForm.VivillonSandstorm,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Sandstorm Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonRiverForm extends Form {}(
  PokemonForm.VivillonRiver,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "River Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonMonsoonForm extends Form {}(
  PokemonForm.VivillonMonsoon,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Monsoon Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonSavannaForm extends Form {}(
  PokemonForm.VivillonSavanna,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Savanna Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonSunForm extends Form {}(
  PokemonForm.VivillonSun,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Sun Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonOceanForm extends Form {}(
  PokemonForm.VivillonOcean,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Ocean Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonJungleForm extends Form {}(
  PokemonForm.VivillonJungle,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Jungle Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonFancyForm extends Form {}(
  PokemonForm.VivillonFancy,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Fancy Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VivillonPokeBallForm extends Form {}(
  PokemonForm.VivillonPokeBall,
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  "Poké Ball Vivillon",
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class LitleoForm extends Form {}(
  PokemonForm.Litleo,
  PokemonVariety.Litleo,
  PokemonSpecies.Litleo,
  null,
  [ PokemonType.Fire, PokemonType.Normal ],
);
new class PyroarForm extends Form {}(
  PokemonForm.Pyroar,
  PokemonVariety.Pyroar,
  PokemonSpecies.Pyroar,
  null,
  [ PokemonType.Fire, PokemonType.Normal ],
);
new class FlabebeRedForm extends Form {}(
  PokemonForm.FlabebeRed,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  "Red Flabébé",
  [ PokemonType.Fairy ],
);
new class FlabebeYellowForm extends Form {}(
  PokemonForm.FlabebeYellow,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  "Yellow Flabébé",
  [ PokemonType.Fairy ],
);
new class FlabebeOrangeForm extends Form {}(
  PokemonForm.FlabebeOrange,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  "Orange Flabébé",
  [ PokemonType.Fairy ],
);
new class FlabebeBlueForm extends Form {}(
  PokemonForm.FlabebeBlue,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  "Blue Flabébé",
  [ PokemonType.Fairy ],
);
new class FlabebeWhiteForm extends Form {}(
  PokemonForm.FlabebeWhite,
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  "White Flabébé",
  [ PokemonType.Fairy ],
);
new class FloetteRedForm extends Form {}(
  PokemonForm.FloetteRed,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  "Red Floette",
  [ PokemonType.Fairy ],
);
new class FloetteYellowForm extends Form {}(
  PokemonForm.FloetteYellow,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  "Yellow Floette",
  [ PokemonType.Fairy ],
);
new class FloetteOrangeForm extends Form {}(
  PokemonForm.FloetteOrange,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  "Orange Floette",
  [ PokemonType.Fairy ],
);
new class FloetteBlueForm extends Form {}(
  PokemonForm.FloetteBlue,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  "Blue Floette",
  [ PokemonType.Fairy ],
);
new class FloetteWhiteForm extends Form {}(
  PokemonForm.FloetteWhite,
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  "White Floette",
  [ PokemonType.Fairy ],
);
new class FloetteEternalForm extends Form {}(
  PokemonForm.FloetteEternal,
  PokemonVariety.FloetteEternal,
  PokemonSpecies.Floette,
  "Eternal Floette",
  [ PokemonType.Fairy ],
);
new class FlorgesRedForm extends Form {}(
  PokemonForm.FlorgesRed,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  "Red Florges",
  [ PokemonType.Fairy ],
);
new class FlorgesYellowForm extends Form {}(
  PokemonForm.FlorgesYellow,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  "Yellow Florges",
  [ PokemonType.Fairy ],
);
new class FlorgesOrangeForm extends Form {}(
  PokemonForm.FlorgesOrange,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  "Orange Florges",
  [ PokemonType.Fairy ],
);
new class FlorgesBlueForm extends Form {}(
  PokemonForm.FlorgesBlue,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  "Blue Florges",
  [ PokemonType.Fairy ],
);
new class FlorgesWhiteForm extends Form {}(
  PokemonForm.FlorgesWhite,
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  "White Florges",
  [ PokemonType.Fairy ],
);
new class SkiddoForm extends Form {}(
  PokemonForm.Skiddo,
  PokemonVariety.Skiddo,
  PokemonSpecies.Skiddo,
  null,
  [ PokemonType.Grass ],
);
new class GogoatForm extends Form {}(
  PokemonForm.Gogoat,
  PokemonVariety.Gogoat,
  PokemonSpecies.Gogoat,
  null,
  [ PokemonType.Grass ],
);
new class PanchamForm extends Form {}(
  PokemonForm.Pancham,
  PokemonVariety.Pancham,
  PokemonSpecies.Pancham,
  null,
  [ PokemonType.Fighting ],
);
new class PangoroForm extends Form {}(
  PokemonForm.Pangoro,
  PokemonVariety.Pangoro,
  PokemonSpecies.Pangoro,
  null,
  [ PokemonType.Fighting, PokemonType.Dark ],
);
new class FurfrouNaturalForm extends Form {}(
  PokemonForm.FurfrouNatural,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Natural Furfrou",
  [ PokemonType.Normal ],
);
new class FurfrouHeartForm extends Form {}(
  PokemonForm.FurfrouHeart,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Heart Furfrou",
  [ PokemonType.Normal ],
);
new class FurfrouStarForm extends Form {}(
  PokemonForm.FurfrouStar,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Star Furfrou",
  [ PokemonType.Normal ],
);
new class FurfrouDiamondForm extends Form {}(
  PokemonForm.FurfrouDiamond,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Diamond Furfrou",
  [ PokemonType.Normal ],
);
new class FurfrouDebutanteForm extends Form {}(
  PokemonForm.FurfrouDebutante,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Debutante Furfrou",
  [ PokemonType.Normal ],
);
new class FurfrouMatronForm extends Form {}(
  PokemonForm.FurfrouMatron,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Matron Furfrou",
  [ PokemonType.Normal ],
);
new class FurfrouDandyForm extends Form {}(
  PokemonForm.FurfrouDandy,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Dandy Furfrou",
  [ PokemonType.Normal ],
);
new class FurfrouLaReineForm extends Form {}(
  PokemonForm.FurfrouLaReine,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "La Reine Furfrou",
  [ PokemonType.Normal ],
);
new class FurfrouKabukiForm extends Form {}(
  PokemonForm.FurfrouKabuki,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Kabuki Furfrou",
  [ PokemonType.Normal ],
);
new class FurfrouPharaohForm extends Form {}(
  PokemonForm.FurfrouPharaoh,
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  "Pharaoh Furfrou",
  [ PokemonType.Normal ],
);
new class EspurrForm extends Form {}(
  PokemonForm.Espurr,
  PokemonVariety.Espurr,
  PokemonSpecies.Espurr,
  null,
  [ PokemonType.Psychic ],
);
new class MeowsticMaleForm extends Form {}(
  PokemonForm.MeowsticMale,
  PokemonVariety.MeowsticMale,
  PokemonSpecies.Meowstic,
  "Male Meowstic",
  [ PokemonType.Psychic ],
);
new class MeowsticFemaleForm extends Form {}(
  PokemonForm.MeowsticFemale,
  PokemonVariety.MeowsticFemale,
  PokemonSpecies.Meowstic,
  "Female Meowstic",
  [ PokemonType.Psychic ],
);
new class HonedgeForm extends Form {}(
  PokemonForm.Honedge,
  PokemonVariety.Honedge,
  PokemonSpecies.Honedge,
  null,
  [ PokemonType.Steel, PokemonType.Ghost ],
);
new class DoubladeForm extends Form {}(
  PokemonForm.Doublade,
  PokemonVariety.Doublade,
  PokemonSpecies.Doublade,
  null,
  [ PokemonType.Steel, PokemonType.Ghost ],
);
new class AegislashShieldForm extends Form {}(
  PokemonForm.AegislashShield,
  PokemonVariety.AegislashShield,
  PokemonSpecies.Aegislash,
  "Shield Aegislash",
  [ PokemonType.Steel, PokemonType.Ghost ],
);
new class AegislashBladeForm extends Form {}(
  PokemonForm.AegislashBlade,
  PokemonVariety.AegislashBlade,
  PokemonSpecies.Aegislash,
  "Blade Aegislash",
  [ PokemonType.Steel, PokemonType.Ghost ],
);
new class SpritzeeForm extends Form {}(
  PokemonForm.Spritzee,
  PokemonVariety.Spritzee,
  PokemonSpecies.Spritzee,
  null,
  [ PokemonType.Fairy ],
);
new class AromatisseForm extends Form {}(
  PokemonForm.Aromatisse,
  PokemonVariety.Aromatisse,
  PokemonSpecies.Aromatisse,
  null,
  [ PokemonType.Fairy ],
);
new class SwirlixForm extends Form {}(
  PokemonForm.Swirlix,
  PokemonVariety.Swirlix,
  PokemonSpecies.Swirlix,
  null,
  [ PokemonType.Fairy ],
);
new class SlurpuffForm extends Form {}(
  PokemonForm.Slurpuff,
  PokemonVariety.Slurpuff,
  PokemonSpecies.Slurpuff,
  null,
  [ PokemonType.Fairy ],
);
new class InkayForm extends Form {}(
  PokemonForm.Inkay,
  PokemonVariety.Inkay,
  PokemonSpecies.Inkay,
  null,
  [ PokemonType.Dark, PokemonType.Psychic ],
);
new class MalamarForm extends Form {}(
  PokemonForm.Malamar,
  PokemonVariety.Malamar,
  PokemonSpecies.Malamar,
  null,
  [ PokemonType.Dark, PokemonType.Psychic ],
);
new class BinacleForm extends Form {}(
  PokemonForm.Binacle,
  PokemonVariety.Binacle,
  PokemonSpecies.Binacle,
  null,
  [ PokemonType.Rock, PokemonType.Water ],
);
new class BarbaracleForm extends Form {}(
  PokemonForm.Barbaracle,
  PokemonVariety.Barbaracle,
  PokemonSpecies.Barbaracle,
  null,
  [ PokemonType.Rock, PokemonType.Water ],
);
new class SkrelpForm extends Form {}(
  PokemonForm.Skrelp,
  PokemonVariety.Skrelp,
  PokemonSpecies.Skrelp,
  null,
  [ PokemonType.Poison, PokemonType.Water ],
);
new class DragalgeForm extends Form {}(
  PokemonForm.Dragalge,
  PokemonVariety.Dragalge,
  PokemonSpecies.Dragalge,
  null,
  [ PokemonType.Poison, PokemonType.Dragon ],
);
new class ClauncherForm extends Form {}(
  PokemonForm.Clauncher,
  PokemonVariety.Clauncher,
  PokemonSpecies.Clauncher,
  null,
  [ PokemonType.Water ],
);
new class ClawitzerForm extends Form {}(
  PokemonForm.Clawitzer,
  PokemonVariety.Clawitzer,
  PokemonSpecies.Clawitzer,
  null,
  [ PokemonType.Water ],
);
new class HelioptileForm extends Form {}(
  PokemonForm.Helioptile,
  PokemonVariety.Helioptile,
  PokemonSpecies.Helioptile,
  null,
  [ PokemonType.Electric, PokemonType.Normal ],
);
new class HelioliskForm extends Form {}(
  PokemonForm.Heliolisk,
  PokemonVariety.Heliolisk,
  PokemonSpecies.Heliolisk,
  null,
  [ PokemonType.Electric, PokemonType.Normal ],
);
new class TyruntForm extends Form {}(
  PokemonForm.Tyrunt,
  PokemonVariety.Tyrunt,
  PokemonSpecies.Tyrunt,
  null,
  [ PokemonType.Rock, PokemonType.Dragon ],
);
new class TyrantrumForm extends Form {}(
  PokemonForm.Tyrantrum,
  PokemonVariety.Tyrantrum,
  PokemonSpecies.Tyrantrum,
  null,
  [ PokemonType.Rock, PokemonType.Dragon ],
);
new class AmauraForm extends Form {}(
  PokemonForm.Amaura,
  PokemonVariety.Amaura,
  PokemonSpecies.Amaura,
  null,
  [ PokemonType.Rock, PokemonType.Ice ],
);
new class AurorusForm extends Form {}(
  PokemonForm.Aurorus,
  PokemonVariety.Aurorus,
  PokemonSpecies.Aurorus,
  null,
  [ PokemonType.Rock, PokemonType.Ice ],
);
new class SylveonForm extends Form {}(
  PokemonForm.Sylveon,
  PokemonVariety.Sylveon,
  PokemonSpecies.Sylveon,
  null,
  [ PokemonType.Fairy ],
);
new class HawluchaForm extends Form {}(
  PokemonForm.Hawlucha,
  PokemonVariety.Hawlucha,
  PokemonSpecies.Hawlucha,
  null,
  [ PokemonType.Fighting, PokemonType.Flying ],
);
new class DedenneForm extends Form {}(
  PokemonForm.Dedenne,
  PokemonVariety.Dedenne,
  PokemonSpecies.Dedenne,
  null,
  [ PokemonType.Electric, PokemonType.Fairy ],
);
new class CarbinkForm extends Form {}(
  PokemonForm.Carbink,
  PokemonVariety.Carbink,
  PokemonSpecies.Carbink,
  null,
  [ PokemonType.Rock, PokemonType.Fairy ],
);
new class GoomyForm extends Form {}(
  PokemonForm.Goomy,
  PokemonVariety.Goomy,
  PokemonSpecies.Goomy,
  null,
  [ PokemonType.Dragon ],
);
new class SliggooForm extends Form {}(
  PokemonForm.Sliggoo,
  PokemonVariety.Sliggoo,
  PokemonSpecies.Sliggoo,
  null,
  [ PokemonType.Dragon ],
);
new class SliggooHisuiForm extends Form {}(
  PokemonForm.SliggooHisui,
  PokemonVariety.SliggooHisui,
  PokemonSpecies.Sliggoo,
  "Hisuian Sliggoo",
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class GoodraForm extends Form {}(
  PokemonForm.Goodra,
  PokemonVariety.Goodra,
  PokemonSpecies.Goodra,
  null,
  [ PokemonType.Dragon ],
);
new class GoodraHisuiForm extends Form {}(
  PokemonForm.GoodraHisui,
  PokemonVariety.GoodraHisui,
  PokemonSpecies.Goodra,
  "Hisuian Goodra",
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class KlefkiForm extends Form {}(
  PokemonForm.Klefki,
  PokemonVariety.Klefki,
  PokemonSpecies.Klefki,
  null,
  [ PokemonType.Steel, PokemonType.Fairy ],
);
new class PhantumpForm extends Form {}(
  PokemonForm.Phantump,
  PokemonVariety.Phantump,
  PokemonSpecies.Phantump,
  null,
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class TrevenantForm extends Form {}(
  PokemonForm.Trevenant,
  PokemonVariety.Trevenant,
  PokemonSpecies.Trevenant,
  null,
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class PumpkabooAverageForm extends Form {}(
  PokemonForm.PumpkabooAverage,
  PokemonVariety.PumpkabooAverage,
  PokemonSpecies.Pumpkaboo,
  "Average Pumpkaboo",
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class PumpkabooSmallForm extends Form {}(
  PokemonForm.PumpkabooSmall,
  PokemonVariety.PumpkabooSmall,
  PokemonSpecies.Pumpkaboo,
  "Small Pumpkaboo",
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class PumpkabooLargeForm extends Form {}(
  PokemonForm.PumpkabooLarge,
  PokemonVariety.PumpkabooLarge,
  PokemonSpecies.Pumpkaboo,
  "Large Pumpkaboo",
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class PumpkabooSuperForm extends Form {}(
  PokemonForm.PumpkabooSuper,
  PokemonVariety.PumpkabooSuper,
  PokemonSpecies.Pumpkaboo,
  "Super Pumpkaboo",
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class GourgeistAverageForm extends Form {}(
  PokemonForm.GourgeistAverage,
  PokemonVariety.GourgeistAverage,
  PokemonSpecies.Gourgeist,
  "Average Gourgeist",
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class GourgeistSmallForm extends Form {}(
  PokemonForm.GourgeistSmall,
  PokemonVariety.GourgeistSmall,
  PokemonSpecies.Gourgeist,
  "Small Gourgeist",
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class GourgeistLargeForm extends Form {}(
  PokemonForm.GourgeistLarge,
  PokemonVariety.GourgeistLarge,
  PokemonSpecies.Gourgeist,
  "Large Gourgeist",
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class GourgeistSuperForm extends Form {}(
  PokemonForm.GourgeistSuper,
  PokemonVariety.GourgeistSuper,
  PokemonSpecies.Gourgeist,
  "Super Gourgeist",
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class BergmiteForm extends Form {}(
  PokemonForm.Bergmite,
  PokemonVariety.Bergmite,
  PokemonSpecies.Bergmite,
  null,
  [ PokemonType.Ice ],
);
new class AvaluggForm extends Form {}(
  PokemonForm.Avalugg,
  PokemonVariety.Avalugg,
  PokemonSpecies.Avalugg,
  null,
  [ PokemonType.Ice ],
);
new class AvaluggHisuiForm extends Form {}(
  PokemonForm.AvaluggHisui,
  PokemonVariety.AvaluggHisui,
  PokemonSpecies.Avalugg,
  "Hisuian Avalugg",
  [ PokemonType.Ice, PokemonType.Rock ],
);
new class NoibatForm extends Form {}(
  PokemonForm.Noibat,
  PokemonVariety.Noibat,
  PokemonSpecies.Noibat,
  null,
  [ PokemonType.Flying, PokemonType.Dragon ],
);
new class NoivernForm extends Form {}(
  PokemonForm.Noivern,
  PokemonVariety.Noivern,
  PokemonSpecies.Noivern,
  null,
  [ PokemonType.Flying, PokemonType.Dragon ],
);
new class XerneasActiveForm extends Form {}(
  PokemonForm.XerneasActive,
  PokemonVariety.Xerneas,
  PokemonSpecies.Xerneas,
  "Active Xerneas",
  [ PokemonType.Fairy ],
);
new class XerneasNeutralForm extends Form {}(
  PokemonForm.XerneasNeutral,
  PokemonVariety.Xerneas,
  PokemonSpecies.Xerneas,
  "Neutral Xerneas",
  [ PokemonType.Fairy ],
);
new class YveltalForm extends Form {}(
  PokemonForm.Yveltal,
  PokemonVariety.Yveltal,
  PokemonSpecies.Yveltal,
  null,
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class Zygarde50Form extends Form {}(
  PokemonForm.Zygarde50,
  PokemonVariety.Zygarde50,
  PokemonSpecies.Zygarde,
  null,
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class Zygarde10PowerConstructForm extends Form {}(
  PokemonForm.Zygarde10PowerConstruct,
  PokemonVariety.Zygarde10PowerConstruct,
  PokemonSpecies.Zygarde,
  "10% Zygarde",
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class Zygarde50PowerConstructForm extends Form {}(
  PokemonForm.Zygarde50PowerConstruct,
  PokemonVariety.Zygarde50PowerConstruct,
  PokemonSpecies.Zygarde,
  "50% Zygarde",
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class ZygardeCompleteForm extends Form {}(
  PokemonForm.ZygardeComplete,
  PokemonVariety.ZygardeComplete,
  PokemonSpecies.Zygarde,
  "Complete Zygarde",
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class Zygarde10Form extends Form {}(
  PokemonForm.Zygarde10,
  PokemonVariety.Zygarde10,
  PokemonSpecies.Zygarde,
  "10% Zygarde",
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class DiancieForm extends Form {}(
  PokemonForm.Diancie,
  PokemonVariety.Diancie,
  PokemonSpecies.Diancie,
  null,
  [ PokemonType.Rock, PokemonType.Fairy ],
);
new class DiancieMegaForm extends Form {}(
  PokemonForm.DiancieMega,
  PokemonVariety.DiancieMega,
  PokemonSpecies.Diancie,
  "Mega Diancie",
  [ PokemonType.Rock, PokemonType.Fairy ],
);
new class HoopaForm extends Form {}(
  PokemonForm.Hoopa,
  PokemonVariety.Hoopa,
  PokemonSpecies.Hoopa,
  "Confined Hoopa",
  [ PokemonType.Psychic, PokemonType.Ghost ],
);
new class HoopaUnboundForm extends Form {}(
  PokemonForm.HoopaUnbound,
  PokemonVariety.HoopaUnbound,
  PokemonSpecies.Hoopa,
  "Hoopa Unbound",
  [ PokemonType.Psychic, PokemonType.Dark ],
);
new class VolcanionForm extends Form {}(
  PokemonForm.Volcanion,
  PokemonVariety.Volcanion,
  PokemonSpecies.Volcanion,
  null,
  [ PokemonType.Fire, PokemonType.Water ],
);
new class RowletForm extends Form {}(
  PokemonForm.Rowlet,
  PokemonVariety.Rowlet,
  PokemonSpecies.Rowlet,
  null,
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class DartrixForm extends Form {}(
  PokemonForm.Dartrix,
  PokemonVariety.Dartrix,
  PokemonSpecies.Dartrix,
  null,
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class DecidueyeForm extends Form {}(
  PokemonForm.Decidueye,
  PokemonVariety.Decidueye,
  PokemonSpecies.Decidueye,
  null,
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class DecidueyeHisuiForm extends Form {}(
  PokemonForm.DecidueyeHisui,
  PokemonVariety.DecidueyeHisui,
  PokemonSpecies.Decidueye,
  "Hisuian Decidueye",
  [ PokemonType.Grass, PokemonType.Fighting ],
);
new class LittenForm extends Form {}(
  PokemonForm.Litten,
  PokemonVariety.Litten,
  PokemonSpecies.Litten,
  null,
  [ PokemonType.Fire ],
);
new class TorracatForm extends Form {}(
  PokemonForm.Torracat,
  PokemonVariety.Torracat,
  PokemonSpecies.Torracat,
  null,
  [ PokemonType.Fire ],
);
new class IncineroarForm extends Form {}(
  PokemonForm.Incineroar,
  PokemonVariety.Incineroar,
  PokemonSpecies.Incineroar,
  null,
  [ PokemonType.Fire, PokemonType.Dark ],
);
new class PopplioForm extends Form {}(
  PokemonForm.Popplio,
  PokemonVariety.Popplio,
  PokemonSpecies.Popplio,
  null,
  [ PokemonType.Water ],
);
new class BrionneForm extends Form {}(
  PokemonForm.Brionne,
  PokemonVariety.Brionne,
  PokemonSpecies.Brionne,
  null,
  [ PokemonType.Water ],
);
new class PrimarinaForm extends Form {}(
  PokemonForm.Primarina,
  PokemonVariety.Primarina,
  PokemonSpecies.Primarina,
  null,
  [ PokemonType.Water, PokemonType.Fairy ],
);
new class PikipekForm extends Form {}(
  PokemonForm.Pikipek,
  PokemonVariety.Pikipek,
  PokemonSpecies.Pikipek,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class TrumbeakForm extends Form {}(
  PokemonForm.Trumbeak,
  PokemonVariety.Trumbeak,
  PokemonSpecies.Trumbeak,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class ToucannonForm extends Form {}(
  PokemonForm.Toucannon,
  PokemonVariety.Toucannon,
  PokemonSpecies.Toucannon,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class YungoosForm extends Form {}(
  PokemonForm.Yungoos,
  PokemonVariety.Yungoos,
  PokemonSpecies.Yungoos,
  null,
  [ PokemonType.Normal ],
);
new class GumshoosForm extends Form {}(
  PokemonForm.Gumshoos,
  PokemonVariety.Gumshoos,
  PokemonSpecies.Gumshoos,
  null,
  [ PokemonType.Normal ],
);
new class GumshoosTotemForm extends Form {}(
  PokemonForm.GumshoosTotem,
  PokemonVariety.GumshoosTotem,
  PokemonSpecies.Gumshoos,
  "Totem Gumshoos",
  [ PokemonType.Normal ],
);
new class GrubbinForm extends Form {}(
  PokemonForm.Grubbin,
  PokemonVariety.Grubbin,
  PokemonSpecies.Grubbin,
  null,
  [ PokemonType.Bug ],
);
new class CharjabugForm extends Form {}(
  PokemonForm.Charjabug,
  PokemonVariety.Charjabug,
  PokemonSpecies.Charjabug,
  null,
  [ PokemonType.Bug, PokemonType.Electric ],
);
new class VikavoltForm extends Form {}(
  PokemonForm.Vikavolt,
  PokemonVariety.Vikavolt,
  PokemonSpecies.Vikavolt,
  null,
  [ PokemonType.Bug, PokemonType.Electric ],
);
new class VikavoltTotemForm extends Form {}(
  PokemonForm.VikavoltTotem,
  PokemonVariety.VikavoltTotem,
  PokemonSpecies.Vikavolt,
  "Totem Vikavolt",
  [ PokemonType.Bug, PokemonType.Electric ],
);
new class CrabrawlerForm extends Form {}(
  PokemonForm.Crabrawler,
  PokemonVariety.Crabrawler,
  PokemonSpecies.Crabrawler,
  null,
  [ PokemonType.Fighting ],
);
new class CrabominableForm extends Form {}(
  PokemonForm.Crabominable,
  PokemonVariety.Crabominable,
  PokemonSpecies.Crabominable,
  null,
  [ PokemonType.Fighting, PokemonType.Ice ],
);
new class OricorioBaileForm extends Form {}(
  PokemonForm.OricorioBaile,
  PokemonVariety.OricorioBaile,
  PokemonSpecies.Oricorio,
  "Baile Oricorio",
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class OricorioPomPomForm extends Form {}(
  PokemonForm.OricorioPomPom,
  PokemonVariety.OricorioPomPom,
  PokemonSpecies.Oricorio,
  "Pom-pom Oricorio",
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class OricorioPauForm extends Form {}(
  PokemonForm.OricorioPau,
  PokemonVariety.OricorioPau,
  PokemonSpecies.Oricorio,
  "Pa’u Oricorio",
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class OricorioSensuForm extends Form {}(
  PokemonForm.OricorioSensu,
  PokemonVariety.OricorioSensu,
  PokemonSpecies.Oricorio,
  "Sensu Oricorio",
  [ PokemonType.Ghost, PokemonType.Flying ],
);
new class CutieflyForm extends Form {}(
  PokemonForm.Cutiefly,
  PokemonVariety.Cutiefly,
  PokemonSpecies.Cutiefly,
  null,
  [ PokemonType.Bug, PokemonType.Fairy ],
);
new class RibombeeForm extends Form {}(
  PokemonForm.Ribombee,
  PokemonVariety.Ribombee,
  PokemonSpecies.Ribombee,
  null,
  [ PokemonType.Bug, PokemonType.Fairy ],
);
new class RibombeeTotemForm extends Form {}(
  PokemonForm.RibombeeTotem,
  PokemonVariety.RibombeeTotem,
  PokemonSpecies.Ribombee,
  "Totem Ribombee",
  [ PokemonType.Bug, PokemonType.Fairy ],
);
new class RockruffForm extends Form {}(
  PokemonForm.Rockruff,
  PokemonVariety.Rockruff,
  PokemonSpecies.Rockruff,
  null,
  [ PokemonType.Rock ],
);
new class RockruffOwnTempoForm extends Form {}(
  PokemonForm.RockruffOwnTempo,
  PokemonVariety.RockruffOwnTempo,
  PokemonSpecies.Rockruff,
  "Own Tempo Rockruff",
  [ PokemonType.Rock ],
);
new class LycanrocMiddayForm extends Form {}(
  PokemonForm.LycanrocMidday,
  PokemonVariety.LycanrocMidday,
  PokemonSpecies.Lycanroc,
  "Midday Lycanroc",
  [ PokemonType.Rock ],
);
new class LycanrocMidnightForm extends Form {}(
  PokemonForm.LycanrocMidnight,
  PokemonVariety.LycanrocMidnight,
  PokemonSpecies.Lycanroc,
  "Midnight Lycanroc",
  [ PokemonType.Rock ],
);
new class LycanrocDuskForm extends Form {}(
  PokemonForm.LycanrocDusk,
  PokemonVariety.LycanrocDusk,
  PokemonSpecies.Lycanroc,
  "Dusk Lycanroc",
  [ PokemonType.Rock ],
);
new class WishiwashiSoloForm extends Form {}(
  PokemonForm.WishiwashiSolo,
  PokemonVariety.WishiwashiSolo,
  PokemonSpecies.Wishiwashi,
  "Solo Wishiwashi",
  [ PokemonType.Water ],
);
new class WishiwashiSchoolForm extends Form {}(
  PokemonForm.WishiwashiSchool,
  PokemonVariety.WishiwashiSchool,
  PokemonSpecies.Wishiwashi,
  "School Wishiwashi",
  [ PokemonType.Water ],
);
new class MareanieForm extends Form {}(
  PokemonForm.Mareanie,
  PokemonVariety.Mareanie,
  PokemonSpecies.Mareanie,
  null,
  [ PokemonType.Poison, PokemonType.Water ],
);
new class ToxapexForm extends Form {}(
  PokemonForm.Toxapex,
  PokemonVariety.Toxapex,
  PokemonSpecies.Toxapex,
  null,
  [ PokemonType.Poison, PokemonType.Water ],
);
new class MudbrayForm extends Form {}(
  PokemonForm.Mudbray,
  PokemonVariety.Mudbray,
  PokemonSpecies.Mudbray,
  null,
  [ PokemonType.Ground ],
);
new class MudsdaleForm extends Form {}(
  PokemonForm.Mudsdale,
  PokemonVariety.Mudsdale,
  PokemonSpecies.Mudsdale,
  null,
  [ PokemonType.Ground ],
);
new class DewpiderForm extends Form {}(
  PokemonForm.Dewpider,
  PokemonVariety.Dewpider,
  PokemonSpecies.Dewpider,
  null,
  [ PokemonType.Water, PokemonType.Bug ],
);
new class AraquanidForm extends Form {}(
  PokemonForm.Araquanid,
  PokemonVariety.Araquanid,
  PokemonSpecies.Araquanid,
  null,
  [ PokemonType.Water, PokemonType.Bug ],
);
new class AraquanidTotemForm extends Form {}(
  PokemonForm.AraquanidTotem,
  PokemonVariety.AraquanidTotem,
  PokemonSpecies.Araquanid,
  "Totem Araquanid",
  [ PokemonType.Water, PokemonType.Bug ],
);
new class FomantisForm extends Form {}(
  PokemonForm.Fomantis,
  PokemonVariety.Fomantis,
  PokemonSpecies.Fomantis,
  null,
  [ PokemonType.Grass ],
);
new class LurantisForm extends Form {}(
  PokemonForm.Lurantis,
  PokemonVariety.Lurantis,
  PokemonSpecies.Lurantis,
  null,
  [ PokemonType.Grass ],
);
new class LurantisTotemForm extends Form {}(
  PokemonForm.LurantisTotem,
  PokemonVariety.LurantisTotem,
  PokemonSpecies.Lurantis,
  "Totem Lurantis",
  [ PokemonType.Grass ],
);
new class MorelullForm extends Form {}(
  PokemonForm.Morelull,
  PokemonVariety.Morelull,
  PokemonSpecies.Morelull,
  null,
  [ PokemonType.Grass, PokemonType.Fairy ],
);
new class ShiinoticForm extends Form {}(
  PokemonForm.Shiinotic,
  PokemonVariety.Shiinotic,
  PokemonSpecies.Shiinotic,
  null,
  [ PokemonType.Grass, PokemonType.Fairy ],
);
new class SalanditForm extends Form {}(
  PokemonForm.Salandit,
  PokemonVariety.Salandit,
  PokemonSpecies.Salandit,
  null,
  [ PokemonType.Poison, PokemonType.Fire ],
);
new class SalazzleForm extends Form {}(
  PokemonForm.Salazzle,
  PokemonVariety.Salazzle,
  PokemonSpecies.Salazzle,
  null,
  [ PokemonType.Poison, PokemonType.Fire ],
);
new class SalazzleTotemForm extends Form {}(
  PokemonForm.SalazzleTotem,
  PokemonVariety.SalazzleTotem,
  PokemonSpecies.Salazzle,
  "Totem Salazzle",
  [ PokemonType.Poison, PokemonType.Fire ],
);
new class StuffulForm extends Form {}(
  PokemonForm.Stufful,
  PokemonVariety.Stufful,
  PokemonSpecies.Stufful,
  null,
  [ PokemonType.Normal, PokemonType.Fighting ],
);
new class BewearForm extends Form {}(
  PokemonForm.Bewear,
  PokemonVariety.Bewear,
  PokemonSpecies.Bewear,
  null,
  [ PokemonType.Normal, PokemonType.Fighting ],
);
new class BounsweetForm extends Form {}(
  PokemonForm.Bounsweet,
  PokemonVariety.Bounsweet,
  PokemonSpecies.Bounsweet,
  null,
  [ PokemonType.Grass ],
);
new class SteeneeForm extends Form {}(
  PokemonForm.Steenee,
  PokemonVariety.Steenee,
  PokemonSpecies.Steenee,
  null,
  [ PokemonType.Grass ],
);
new class TsareenaForm extends Form {}(
  PokemonForm.Tsareena,
  PokemonVariety.Tsareena,
  PokemonSpecies.Tsareena,
  null,
  [ PokemonType.Grass ],
);
new class ComfeyForm extends Form {}(
  PokemonForm.Comfey,
  PokemonVariety.Comfey,
  PokemonSpecies.Comfey,
  null,
  [ PokemonType.Fairy ],
);
new class OranguruForm extends Form {}(
  PokemonForm.Oranguru,
  PokemonVariety.Oranguru,
  PokemonSpecies.Oranguru,
  null,
  [ PokemonType.Normal, PokemonType.Psychic ],
);
new class PassimianForm extends Form {}(
  PokemonForm.Passimian,
  PokemonVariety.Passimian,
  PokemonSpecies.Passimian,
  null,
  [ PokemonType.Fighting ],
);
new class WimpodForm extends Form {}(
  PokemonForm.Wimpod,
  PokemonVariety.Wimpod,
  PokemonSpecies.Wimpod,
  null,
  [ PokemonType.Bug, PokemonType.Water ],
);
new class GolisopodForm extends Form {}(
  PokemonForm.Golisopod,
  PokemonVariety.Golisopod,
  PokemonSpecies.Golisopod,
  null,
  [ PokemonType.Bug, PokemonType.Water ],
);
new class SandygastForm extends Form {}(
  PokemonForm.Sandygast,
  PokemonVariety.Sandygast,
  PokemonSpecies.Sandygast,
  null,
  [ PokemonType.Ghost, PokemonType.Ground ],
);
new class PalossandForm extends Form {}(
  PokemonForm.Palossand,
  PokemonVariety.Palossand,
  PokemonSpecies.Palossand,
  null,
  [ PokemonType.Ghost, PokemonType.Ground ],
);
new class PyukumukuForm extends Form {}(
  PokemonForm.Pyukumuku,
  PokemonVariety.Pyukumuku,
  PokemonSpecies.Pyukumuku,
  null,
  [ PokemonType.Water ],
);
new class TypeNullForm extends Form {}(
  PokemonForm.TypeNull,
  PokemonVariety.TypeNull,
  PokemonSpecies.TypeNull,
  null,
  [ PokemonType.Normal ],
);
new class SilvallyNormalForm extends Form {}(
  PokemonForm.SilvallyNormal,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Normal ],
);
new class SilvallyFightingForm extends Form {}(
  PokemonForm.SilvallyFighting,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Fighting ],
);
new class SilvallyFlyingForm extends Form {}(
  PokemonForm.SilvallyFlying,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Flying ],
);
new class SilvallyPoisonForm extends Form {}(
  PokemonForm.SilvallyPoison,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Poison ],
);
new class SilvallyGroundForm extends Form {}(
  PokemonForm.SilvallyGround,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Ground ],
);
new class SilvallyRockForm extends Form {}(
  PokemonForm.SilvallyRock,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Rock ],
);
new class SilvallyBugForm extends Form {}(
  PokemonForm.SilvallyBug,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Bug ],
);
new class SilvallyGhostForm extends Form {}(
  PokemonForm.SilvallyGhost,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Ghost ],
);
new class SilvallySteelForm extends Form {}(
  PokemonForm.SilvallySteel,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Steel ],
);
new class SilvallyFireForm extends Form {}(
  PokemonForm.SilvallyFire,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Fire ],
);
new class SilvallyWaterForm extends Form {}(
  PokemonForm.SilvallyWater,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Water ],
);
new class SilvallyGrassForm extends Form {}(
  PokemonForm.SilvallyGrass,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Grass ],
);
new class SilvallyElectricForm extends Form {}(
  PokemonForm.SilvallyElectric,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Electric ],
);
new class SilvallyPsychicForm extends Form {}(
  PokemonForm.SilvallyPsychic,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Psychic ],
);
new class SilvallyIceForm extends Form {}(
  PokemonForm.SilvallyIce,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Ice ],
);
new class SilvallyDragonForm extends Form {}(
  PokemonForm.SilvallyDragon,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Dragon ],
);
new class SilvallyDarkForm extends Form {}(
  PokemonForm.SilvallyDark,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Dark ],
);
new class SilvallyFairyForm extends Form {}(
  PokemonForm.SilvallyFairy,
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  null,
  [ PokemonType.Fairy ],
);
new class MiniorRedMeteorForm extends Form {}(
  PokemonForm.MiniorRedMeteor,
  PokemonVariety.MiniorRedMeteor,
  PokemonSpecies.Minior,
  "Red Meteor Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorOrangeMeteorForm extends Form {}(
  PokemonForm.MiniorOrangeMeteor,
  PokemonVariety.MiniorOrangeMeteor,
  PokemonSpecies.Minior,
  "Orange Meteor Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorYellowMeteorForm extends Form {}(
  PokemonForm.MiniorYellowMeteor,
  PokemonVariety.MiniorYellowMeteor,
  PokemonSpecies.Minior,
  "Yellow Meteor Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorGreenMeteorForm extends Form {}(
  PokemonForm.MiniorGreenMeteor,
  PokemonVariety.MiniorGreenMeteor,
  PokemonSpecies.Minior,
  "Green Meteor Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorBlueMeteorForm extends Form {}(
  PokemonForm.MiniorBlueMeteor,
  PokemonVariety.MiniorBlueMeteor,
  PokemonSpecies.Minior,
  "Blue Meteor Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorIndigoMeteorForm extends Form {}(
  PokemonForm.MiniorIndigoMeteor,
  PokemonVariety.MiniorIndigoMeteor,
  PokemonSpecies.Minior,
  "Indigo Meteor Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorVioletMeteorForm extends Form {}(
  PokemonForm.MiniorVioletMeteor,
  PokemonVariety.MiniorVioletMeteor,
  PokemonSpecies.Minior,
  "Violet Meteor Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorRedForm extends Form {}(
  PokemonForm.MiniorRed,
  PokemonVariety.MiniorRed,
  PokemonSpecies.Minior,
  "Red Core Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorOrangeForm extends Form {}(
  PokemonForm.MiniorOrange,
  PokemonVariety.MiniorOrange,
  PokemonSpecies.Minior,
  "Orange Core Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorYellowForm extends Form {}(
  PokemonForm.MiniorYellow,
  PokemonVariety.MiniorYellow,
  PokemonSpecies.Minior,
  "Yellow Core Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorGreenForm extends Form {}(
  PokemonForm.MiniorGreen,
  PokemonVariety.MiniorGreen,
  PokemonSpecies.Minior,
  "Green Core Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorBlueForm extends Form {}(
  PokemonForm.MiniorBlue,
  PokemonVariety.MiniorBlue,
  PokemonSpecies.Minior,
  "Blue Core Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorIndigoForm extends Form {}(
  PokemonForm.MiniorIndigo,
  PokemonVariety.MiniorIndigo,
  PokemonSpecies.Minior,
  "Indigo Core Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorVioletForm extends Form {}(
  PokemonForm.MiniorViolet,
  PokemonVariety.MiniorViolet,
  PokemonSpecies.Minior,
  "Violet Core Minior",
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class KomalaForm extends Form {}(
  PokemonForm.Komala,
  PokemonVariety.Komala,
  PokemonSpecies.Komala,
  null,
  [ PokemonType.Normal ],
);
new class TurtonatorForm extends Form {}(
  PokemonForm.Turtonator,
  PokemonVariety.Turtonator,
  PokemonSpecies.Turtonator,
  null,
  [ PokemonType.Fire, PokemonType.Dragon ],
);
new class TogedemaruForm extends Form {}(
  PokemonForm.Togedemaru,
  PokemonVariety.Togedemaru,
  PokemonSpecies.Togedemaru,
  null,
  [ PokemonType.Electric, PokemonType.Steel ],
);
new class TogedemaruTotemForm extends Form {}(
  PokemonForm.TogedemaruTotem,
  PokemonVariety.TogedemaruTotem,
  PokemonSpecies.Togedemaru,
  "Totem Togedemaru",
  [ PokemonType.Electric, PokemonType.Steel ],
);
new class MimikyuDisguisedForm extends Form {}(
  PokemonForm.MimikyuDisguised,
  PokemonVariety.MimikyuDisguised,
  PokemonSpecies.Mimikyu,
  "Disguised Mimikyu",
  [ PokemonType.Ghost, PokemonType.Fairy ],
);
new class MimikyuBustedForm extends Form {}(
  PokemonForm.MimikyuBusted,
  PokemonVariety.MimikyuBusted,
  PokemonSpecies.Mimikyu,
  "Busted Mimikyu",
  [ PokemonType.Ghost, PokemonType.Fairy ],
);
new class MimikyuTotemDisguisedForm extends Form {}(
  PokemonForm.MimikyuTotemDisguised,
  PokemonVariety.MimikyuTotemDisguised,
  PokemonSpecies.Mimikyu,
  "Totem Disguised Mimikyu",
  [ PokemonType.Ghost, PokemonType.Fairy ],
);
new class MimikyuTotemBustedForm extends Form {}(
  PokemonForm.MimikyuTotemBusted,
  PokemonVariety.MimikyuTotemBusted,
  PokemonSpecies.Mimikyu,
  "Totem Busted Mimikyu",
  [ PokemonType.Ghost, PokemonType.Fairy ],
);
new class BruxishForm extends Form {}(
  PokemonForm.Bruxish,
  PokemonVariety.Bruxish,
  PokemonSpecies.Bruxish,
  null,
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class DrampaForm extends Form {}(
  PokemonForm.Drampa,
  PokemonVariety.Drampa,
  PokemonSpecies.Drampa,
  null,
  [ PokemonType.Normal, PokemonType.Dragon ],
);
new class DhelmiseForm extends Form {}(
  PokemonForm.Dhelmise,
  PokemonVariety.Dhelmise,
  PokemonSpecies.Dhelmise,
  null,
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class JangmoOForm extends Form {}(
  PokemonForm.JangmoO,
  PokemonVariety.JangmoO,
  PokemonSpecies.JangmoO,
  null,
  [ PokemonType.Dragon ],
);
new class HakamoOForm extends Form {}(
  PokemonForm.HakamoO,
  PokemonVariety.HakamoO,
  PokemonSpecies.HakamoO,
  null,
  [ PokemonType.Dragon, PokemonType.Fighting ],
);
new class KommoOForm extends Form {}(
  PokemonForm.KommoO,
  PokemonVariety.KommoO,
  PokemonSpecies.KommoO,
  null,
  [ PokemonType.Dragon, PokemonType.Fighting ],
);
new class KommoOTotemForm extends Form {}(
  PokemonForm.KommoOTotem,
  PokemonVariety.KommoOTotem,
  PokemonSpecies.KommoO,
  "Totem Kommo-o",
  [ PokemonType.Dragon, PokemonType.Fighting ],
);
new class TapuKokoForm extends Form {}(
  PokemonForm.TapuKoko,
  PokemonVariety.TapuKoko,
  PokemonSpecies.TapuKoko,
  null,
  [ PokemonType.Electric, PokemonType.Fairy ],
);
new class TapuLeleForm extends Form {}(
  PokemonForm.TapuLele,
  PokemonVariety.TapuLele,
  PokemonSpecies.TapuLele,
  null,
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class TapuBuluForm extends Form {}(
  PokemonForm.TapuBulu,
  PokemonVariety.TapuBulu,
  PokemonSpecies.TapuBulu,
  null,
  [ PokemonType.Grass, PokemonType.Fairy ],
);
new class TapuFiniForm extends Form {}(
  PokemonForm.TapuFini,
  PokemonVariety.TapuFini,
  PokemonSpecies.TapuFini,
  null,
  [ PokemonType.Water, PokemonType.Fairy ],
);
new class CosmogForm extends Form {}(
  PokemonForm.Cosmog,
  PokemonVariety.Cosmog,
  PokemonSpecies.Cosmog,
  null,
  [ PokemonType.Psychic ],
);
new class CosmoemForm extends Form {}(
  PokemonForm.Cosmoem,
  PokemonVariety.Cosmoem,
  PokemonSpecies.Cosmoem,
  null,
  [ PokemonType.Psychic ],
);
new class SolgaleoForm extends Form {}(
  PokemonForm.Solgaleo,
  PokemonVariety.Solgaleo,
  PokemonSpecies.Solgaleo,
  null,
  [ PokemonType.Psychic, PokemonType.Steel ],
);
new class LunalaForm extends Form {}(
  PokemonForm.Lunala,
  PokemonVariety.Lunala,
  PokemonSpecies.Lunala,
  null,
  [ PokemonType.Psychic, PokemonType.Ghost ],
);
new class NihilegoForm extends Form {}(
  PokemonForm.Nihilego,
  PokemonVariety.Nihilego,
  PokemonSpecies.Nihilego,
  null,
  [ PokemonType.Rock, PokemonType.Poison ],
);
new class BuzzwoleForm extends Form {}(
  PokemonForm.Buzzwole,
  PokemonVariety.Buzzwole,
  PokemonSpecies.Buzzwole,
  null,
  [ PokemonType.Bug, PokemonType.Fighting ],
);
new class PheromosaForm extends Form {}(
  PokemonForm.Pheromosa,
  PokemonVariety.Pheromosa,
  PokemonSpecies.Pheromosa,
  null,
  [ PokemonType.Bug, PokemonType.Fighting ],
);
new class XurkitreeForm extends Form {}(
  PokemonForm.Xurkitree,
  PokemonVariety.Xurkitree,
  PokemonSpecies.Xurkitree,
  null,
  [ PokemonType.Electric ],
);
new class CelesteelaForm extends Form {}(
  PokemonForm.Celesteela,
  PokemonVariety.Celesteela,
  PokemonSpecies.Celesteela,
  null,
  [ PokemonType.Steel, PokemonType.Flying ],
);
new class KartanaForm extends Form {}(
  PokemonForm.Kartana,
  PokemonVariety.Kartana,
  PokemonSpecies.Kartana,
  null,
  [ PokemonType.Grass, PokemonType.Steel ],
);
new class GuzzlordForm extends Form {}(
  PokemonForm.Guzzlord,
  PokemonVariety.Guzzlord,
  PokemonSpecies.Guzzlord,
  null,
  [ PokemonType.Dark, PokemonType.Dragon ],
);
new class NecrozmaForm extends Form {}(
  PokemonForm.Necrozma,
  PokemonVariety.Necrozma,
  PokemonSpecies.Necrozma,
  null,
  [ PokemonType.Psychic ],
);
new class NecrozmaDuskForm extends Form {}(
  PokemonForm.NecrozmaDusk,
  PokemonVariety.NecrozmaDusk,
  PokemonSpecies.Necrozma,
  "Dusk Necrozma",
  [ PokemonType.Psychic, PokemonType.Steel ],
);
new class NecrozmaDawnForm extends Form {}(
  PokemonForm.NecrozmaDawn,
  PokemonVariety.NecrozmaDawn,
  PokemonSpecies.Necrozma,
  "Dawn Necrozma",
  [ PokemonType.Psychic, PokemonType.Ghost ],
);
new class NecrozmaUltraForm extends Form {}(
  PokemonForm.NecrozmaUltra,
  PokemonVariety.NecrozmaUltra,
  PokemonSpecies.Necrozma,
  "Ultra Necrozma",
  [ PokemonType.Psychic, PokemonType.Dragon ],
);
new class MagearnaForm extends Form {}(
  PokemonForm.Magearna,
  PokemonVariety.Magearna,
  PokemonSpecies.Magearna,
  null,
  [ PokemonType.Steel, PokemonType.Fairy ],
);
new class MagearnaOriginalForm extends Form {}(
  PokemonForm.MagearnaOriginal,
  PokemonVariety.MagearnaOriginal,
  PokemonSpecies.Magearna,
  "Original Magearna",
  [ PokemonType.Steel, PokemonType.Fairy ],
);
new class MarshadowForm extends Form {}(
  PokemonForm.Marshadow,
  PokemonVariety.Marshadow,
  PokemonSpecies.Marshadow,
  null,
  [ PokemonType.Fighting, PokemonType.Ghost ],
);
new class PoipoleForm extends Form {}(
  PokemonForm.Poipole,
  PokemonVariety.Poipole,
  PokemonSpecies.Poipole,
  null,
  [ PokemonType.Poison ],
);
new class NaganadelForm extends Form {}(
  PokemonForm.Naganadel,
  PokemonVariety.Naganadel,
  PokemonSpecies.Naganadel,
  null,
  [ PokemonType.Poison, PokemonType.Dragon ],
);
new class StakatakaForm extends Form {}(
  PokemonForm.Stakataka,
  PokemonVariety.Stakataka,
  PokemonSpecies.Stakataka,
  null,
  [ PokemonType.Rock, PokemonType.Steel ],
);
new class BlacephalonForm extends Form {}(
  PokemonForm.Blacephalon,
  PokemonVariety.Blacephalon,
  PokemonSpecies.Blacephalon,
  null,
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class ZeraoraForm extends Form {}(
  PokemonForm.Zeraora,
  PokemonVariety.Zeraora,
  PokemonSpecies.Zeraora,
  null,
  [ PokemonType.Electric ],
);
new class MeltanForm extends Form {}(
  PokemonForm.Meltan,
  PokemonVariety.Meltan,
  PokemonSpecies.Meltan,
  null,
  [ PokemonType.Steel ],
);
new class MelmetalForm extends Form {}(
  PokemonForm.Melmetal,
  PokemonVariety.Melmetal,
  PokemonSpecies.Melmetal,
  null,
  [ PokemonType.Steel ],
);
new class MelmetalGmaxForm extends Form {}(
  PokemonForm.MelmetalGmax,
  PokemonVariety.MelmetalGmax,
  PokemonSpecies.Melmetal,
  "Gigantamax Melmetal",
  [ PokemonType.Steel ],
);
new class GrookeyForm extends Form {}(
  PokemonForm.Grookey,
  PokemonVariety.Grookey,
  PokemonSpecies.Grookey,
  null,
  [ PokemonType.Grass ],
);
new class ThwackeyForm extends Form {}(
  PokemonForm.Thwackey,
  PokemonVariety.Thwackey,
  PokemonSpecies.Thwackey,
  null,
  [ PokemonType.Grass ],
);
new class RillaboomForm extends Form {}(
  PokemonForm.Rillaboom,
  PokemonVariety.Rillaboom,
  PokemonSpecies.Rillaboom,
  null,
  [ PokemonType.Grass ],
);
new class RillaboomGmaxForm extends Form {}(
  PokemonForm.RillaboomGmax,
  PokemonVariety.RillaboomGmax,
  PokemonSpecies.Rillaboom,
  "Gigantamax Rillaboom",
  [ PokemonType.Grass ],
);
new class ScorbunnyForm extends Form {}(
  PokemonForm.Scorbunny,
  PokemonVariety.Scorbunny,
  PokemonSpecies.Scorbunny,
  null,
  [ PokemonType.Fire ],
);
new class RabootForm extends Form {}(
  PokemonForm.Raboot,
  PokemonVariety.Raboot,
  PokemonSpecies.Raboot,
  null,
  [ PokemonType.Fire ],
);
new class CinderaceForm extends Form {}(
  PokemonForm.Cinderace,
  PokemonVariety.Cinderace,
  PokemonSpecies.Cinderace,
  null,
  [ PokemonType.Fire ],
);
new class CinderaceGmaxForm extends Form {}(
  PokemonForm.CinderaceGmax,
  PokemonVariety.CinderaceGmax,
  PokemonSpecies.Cinderace,
  "Gigantamax Cinderace",
  [ PokemonType.Fire ],
);
new class SobbleForm extends Form {}(
  PokemonForm.Sobble,
  PokemonVariety.Sobble,
  PokemonSpecies.Sobble,
  null,
  [ PokemonType.Water ],
);
new class DrizzileForm extends Form {}(
  PokemonForm.Drizzile,
  PokemonVariety.Drizzile,
  PokemonSpecies.Drizzile,
  null,
  [ PokemonType.Water ],
);
new class InteleonForm extends Form {}(
  PokemonForm.Inteleon,
  PokemonVariety.Inteleon,
  PokemonSpecies.Inteleon,
  null,
  [ PokemonType.Water ],
);
new class InteleonGmaxForm extends Form {}(
  PokemonForm.InteleonGmax,
  PokemonVariety.InteleonGmax,
  PokemonSpecies.Inteleon,
  "Gigantamax Inteleon",
  [ PokemonType.Water ],
);
new class SkwovetForm extends Form {}(
  PokemonForm.Skwovet,
  PokemonVariety.Skwovet,
  PokemonSpecies.Skwovet,
  null,
  [ PokemonType.Normal ],
);
new class GreedentForm extends Form {}(
  PokemonForm.Greedent,
  PokemonVariety.Greedent,
  PokemonSpecies.Greedent,
  null,
  [ PokemonType.Normal ],
);
new class RookideeForm extends Form {}(
  PokemonForm.Rookidee,
  PokemonVariety.Rookidee,
  PokemonSpecies.Rookidee,
  null,
  [ PokemonType.Flying ],
);
new class CorvisquireForm extends Form {}(
  PokemonForm.Corvisquire,
  PokemonVariety.Corvisquire,
  PokemonSpecies.Corvisquire,
  null,
  [ PokemonType.Flying ],
);
new class CorviknightForm extends Form {}(
  PokemonForm.Corviknight,
  PokemonVariety.Corviknight,
  PokemonSpecies.Corviknight,
  null,
  [ PokemonType.Flying, PokemonType.Steel ],
);
new class CorviknightGmaxForm extends Form {}(
  PokemonForm.CorviknightGmax,
  PokemonVariety.CorviknightGmax,
  PokemonSpecies.Corviknight,
  "Gigantamax Corviknight",
  [ PokemonType.Flying, PokemonType.Steel ],
);
new class BlipbugForm extends Form {}(
  PokemonForm.Blipbug,
  PokemonVariety.Blipbug,
  PokemonSpecies.Blipbug,
  null,
  [ PokemonType.Bug ],
);
new class DottlerForm extends Form {}(
  PokemonForm.Dottler,
  PokemonVariety.Dottler,
  PokemonSpecies.Dottler,
  null,
  [ PokemonType.Bug, PokemonType.Psychic ],
);
new class OrbeetleForm extends Form {}(
  PokemonForm.Orbeetle,
  PokemonVariety.Orbeetle,
  PokemonSpecies.Orbeetle,
  null,
  [ PokemonType.Bug, PokemonType.Psychic ],
);
new class OrbeetleGmaxForm extends Form {}(
  PokemonForm.OrbeetleGmax,
  PokemonVariety.OrbeetleGmax,
  PokemonSpecies.Orbeetle,
  "Gigantamax Orbeetle",
  [ PokemonType.Bug, PokemonType.Psychic ],
);
new class NickitForm extends Form {}(
  PokemonForm.Nickit,
  PokemonVariety.Nickit,
  PokemonSpecies.Nickit,
  null,
  [ PokemonType.Dark ],
);
new class ThievulForm extends Form {}(
  PokemonForm.Thievul,
  PokemonVariety.Thievul,
  PokemonSpecies.Thievul,
  null,
  [ PokemonType.Dark ],
);
new class GossifleurForm extends Form {}(
  PokemonForm.Gossifleur,
  PokemonVariety.Gossifleur,
  PokemonSpecies.Gossifleur,
  null,
  [ PokemonType.Grass ],
);
new class EldegossForm extends Form {}(
  PokemonForm.Eldegoss,
  PokemonVariety.Eldegoss,
  PokemonSpecies.Eldegoss,
  null,
  [ PokemonType.Grass ],
);
new class WoolooForm extends Form {}(
  PokemonForm.Wooloo,
  PokemonVariety.Wooloo,
  PokemonSpecies.Wooloo,
  null,
  [ PokemonType.Normal ],
);
new class DubwoolForm extends Form {}(
  PokemonForm.Dubwool,
  PokemonVariety.Dubwool,
  PokemonSpecies.Dubwool,
  null,
  [ PokemonType.Normal ],
);
new class ChewtleForm extends Form {}(
  PokemonForm.Chewtle,
  PokemonVariety.Chewtle,
  PokemonSpecies.Chewtle,
  null,
  [ PokemonType.Water ],
);
new class DrednawForm extends Form {}(
  PokemonForm.Drednaw,
  PokemonVariety.Drednaw,
  PokemonSpecies.Drednaw,
  null,
  [ PokemonType.Water, PokemonType.Rock ],
);
new class DrednawGmaxForm extends Form {}(
  PokemonForm.DrednawGmax,
  PokemonVariety.DrednawGmax,
  PokemonSpecies.Drednaw,
  "Gigantamax Drednaw",
  [ PokemonType.Water, PokemonType.Rock ],
);
new class YamperForm extends Form {}(
  PokemonForm.Yamper,
  PokemonVariety.Yamper,
  PokemonSpecies.Yamper,
  null,
  [ PokemonType.Electric ],
);
new class BoltundForm extends Form {}(
  PokemonForm.Boltund,
  PokemonVariety.Boltund,
  PokemonSpecies.Boltund,
  null,
  [ PokemonType.Electric ],
);
new class RolycolyForm extends Form {}(
  PokemonForm.Rolycoly,
  PokemonVariety.Rolycoly,
  PokemonSpecies.Rolycoly,
  null,
  [ PokemonType.Rock ],
);
new class CarkolForm extends Form {}(
  PokemonForm.Carkol,
  PokemonVariety.Carkol,
  PokemonSpecies.Carkol,
  null,
  [ PokemonType.Rock, PokemonType.Fire ],
);
new class CoalossalForm extends Form {}(
  PokemonForm.Coalossal,
  PokemonVariety.Coalossal,
  PokemonSpecies.Coalossal,
  null,
  [ PokemonType.Rock, PokemonType.Fire ],
);
new class CoalossalGmaxForm extends Form {}(
  PokemonForm.CoalossalGmax,
  PokemonVariety.CoalossalGmax,
  PokemonSpecies.Coalossal,
  "Gigantamax Coalossal",
  [ PokemonType.Rock, PokemonType.Fire ],
);
new class ApplinForm extends Form {}(
  PokemonForm.Applin,
  PokemonVariety.Applin,
  PokemonSpecies.Applin,
  null,
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class FlappleForm extends Form {}(
  PokemonForm.Flapple,
  PokemonVariety.Flapple,
  PokemonSpecies.Flapple,
  null,
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class FlappleGmaxForm extends Form {}(
  PokemonForm.FlappleGmax,
  PokemonVariety.FlappleGmax,
  PokemonSpecies.Flapple,
  "Gigantamax Flapple",
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class AppletunForm extends Form {}(
  PokemonForm.Appletun,
  PokemonVariety.Appletun,
  PokemonSpecies.Appletun,
  null,
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class AppletunGmaxForm extends Form {}(
  PokemonForm.AppletunGmax,
  PokemonVariety.AppletunGmax,
  PokemonSpecies.Appletun,
  "Gigantamax Appletun",
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class SilicobraForm extends Form {}(
  PokemonForm.Silicobra,
  PokemonVariety.Silicobra,
  PokemonSpecies.Silicobra,
  null,
  [ PokemonType.Ground ],
);
new class SandacondaForm extends Form {}(
  PokemonForm.Sandaconda,
  PokemonVariety.Sandaconda,
  PokemonSpecies.Sandaconda,
  null,
  [ PokemonType.Ground ],
);
new class SandacondaGmaxForm extends Form {}(
  PokemonForm.SandacondaGmax,
  PokemonVariety.SandacondaGmax,
  PokemonSpecies.Sandaconda,
  "Gigantamax Sandaconda",
  [ PokemonType.Ground ],
);
new class CramorantForm extends Form {}(
  PokemonForm.Cramorant,
  PokemonVariety.Cramorant,
  PokemonSpecies.Cramorant,
  null,
  [ PokemonType.Flying, PokemonType.Water ],
);
new class CramorantGulpingForm extends Form {}(
  PokemonForm.CramorantGulping,
  PokemonVariety.CramorantGulping,
  PokemonSpecies.Cramorant,
  "Gulping Cramorant",
  [ PokemonType.Flying, PokemonType.Water ],
);
new class CramorantGorgingForm extends Form {}(
  PokemonForm.CramorantGorging,
  PokemonVariety.CramorantGorging,
  PokemonSpecies.Cramorant,
  "Gorging Cramorant",
  [ PokemonType.Flying, PokemonType.Water ],
);
new class ArrokudaForm extends Form {}(
  PokemonForm.Arrokuda,
  PokemonVariety.Arrokuda,
  PokemonSpecies.Arrokuda,
  null,
  [ PokemonType.Water ],
);
new class BarraskewdaForm extends Form {}(
  PokemonForm.Barraskewda,
  PokemonVariety.Barraskewda,
  PokemonSpecies.Barraskewda,
  null,
  [ PokemonType.Water ],
);
new class ToxelForm extends Form {}(
  PokemonForm.Toxel,
  PokemonVariety.Toxel,
  PokemonSpecies.Toxel,
  null,
  [ PokemonType.Electric, PokemonType.Poison ],
);
new class ToxtricityAmpedForm extends Form {}(
  PokemonForm.ToxtricityAmped,
  PokemonVariety.ToxtricityAmped,
  PokemonSpecies.Toxtricity,
  "Amped Toxtricity",
  [ PokemonType.Electric, PokemonType.Poison ],
);
new class ToxtricityLowKeyForm extends Form {}(
  PokemonForm.ToxtricityLowKey,
  PokemonVariety.ToxtricityLowKey,
  PokemonSpecies.Toxtricity,
  "Low Key Toxtricity",
  [ PokemonType.Electric, PokemonType.Poison ],
);
new class ToxtricityAmpedGmaxForm extends Form {}(
  PokemonForm.ToxtricityAmpedGmax,
  PokemonVariety.ToxtricityAmpedGmax,
  PokemonSpecies.Toxtricity,
  "Gigantamax Amped Toxtricity",
  [ PokemonType.Electric, PokemonType.Poison ],
);
new class ToxtricityLowKeyGmaxForm extends Form {}(
  PokemonForm.ToxtricityLowKeyGmax,
  PokemonVariety.ToxtricityLowKeyGmax,
  PokemonSpecies.Toxtricity,
  "Gigantamax Low Key Toxtricity",
  [ PokemonType.Electric, PokemonType.Poison ],
);
new class SizzlipedeForm extends Form {}(
  PokemonForm.Sizzlipede,
  PokemonVariety.Sizzlipede,
  PokemonSpecies.Sizzlipede,
  null,
  [ PokemonType.Fire, PokemonType.Bug ],
);
new class CentiskorchForm extends Form {}(
  PokemonForm.Centiskorch,
  PokemonVariety.Centiskorch,
  PokemonSpecies.Centiskorch,
  null,
  [ PokemonType.Fire, PokemonType.Bug ],
);
new class CentiskorchGmaxForm extends Form {}(
  PokemonForm.CentiskorchGmax,
  PokemonVariety.CentiskorchGmax,
  PokemonSpecies.Centiskorch,
  "Gigantamax Centiskorch",
  [ PokemonType.Fire, PokemonType.Bug ],
);
new class ClobbopusForm extends Form {}(
  PokemonForm.Clobbopus,
  PokemonVariety.Clobbopus,
  PokemonSpecies.Clobbopus,
  null,
  [ PokemonType.Fighting ],
);
new class GrapploctForm extends Form {}(
  PokemonForm.Grapploct,
  PokemonVariety.Grapploct,
  PokemonSpecies.Grapploct,
  null,
  [ PokemonType.Fighting ],
);
new class SinisteaPhonyForm extends Form {}(
  PokemonForm.SinisteaPhony,
  PokemonVariety.Sinistea,
  PokemonSpecies.Sinistea,
  "Phony Sinistea",
  [ PokemonType.Ghost ],
);
new class SinisteaAntiqueForm extends Form {}(
  PokemonForm.SinisteaAntique,
  PokemonVariety.Sinistea,
  PokemonSpecies.Sinistea,
  "Antique Sinistea",
  [ PokemonType.Ghost ],
);
new class PolteageistPhonyForm extends Form {}(
  PokemonForm.PolteageistPhony,
  PokemonVariety.Polteageist,
  PokemonSpecies.Polteageist,
  "Phony Polteageist",
  [ PokemonType.Ghost ],
);
new class PolteageistAntiqueForm extends Form {}(
  PokemonForm.PolteageistAntique,
  PokemonVariety.Polteageist,
  PokemonSpecies.Polteageist,
  "Antique Polteageist",
  [ PokemonType.Ghost ],
);
new class HatennaForm extends Form {}(
  PokemonForm.Hatenna,
  PokemonVariety.Hatenna,
  PokemonSpecies.Hatenna,
  null,
  [ PokemonType.Psychic ],
);
new class HattremForm extends Form {}(
  PokemonForm.Hattrem,
  PokemonVariety.Hattrem,
  PokemonSpecies.Hattrem,
  null,
  [ PokemonType.Psychic ],
);
new class HattereneForm extends Form {}(
  PokemonForm.Hatterene,
  PokemonVariety.Hatterene,
  PokemonSpecies.Hatterene,
  null,
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class HattereneGmaxForm extends Form {}(
  PokemonForm.HattereneGmax,
  PokemonVariety.HattereneGmax,
  PokemonSpecies.Hatterene,
  "Gigantamax Hatterene",
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class ImpidimpForm extends Form {}(
  PokemonForm.Impidimp,
  PokemonVariety.Impidimp,
  PokemonSpecies.Impidimp,
  null,
  [ PokemonType.Dark, PokemonType.Fairy ],
);
new class MorgremForm extends Form {}(
  PokemonForm.Morgrem,
  PokemonVariety.Morgrem,
  PokemonSpecies.Morgrem,
  null,
  [ PokemonType.Dark, PokemonType.Fairy ],
);
new class GrimmsnarlForm extends Form {}(
  PokemonForm.Grimmsnarl,
  PokemonVariety.Grimmsnarl,
  PokemonSpecies.Grimmsnarl,
  null,
  [ PokemonType.Dark, PokemonType.Fairy ],
);
new class GrimmsnarlGmaxForm extends Form {}(
  PokemonForm.GrimmsnarlGmax,
  PokemonVariety.GrimmsnarlGmax,
  PokemonSpecies.Grimmsnarl,
  "Gigantamax Grimmsnarl",
  [ PokemonType.Dark, PokemonType.Fairy ],
);
new class ObstagoonForm extends Form {}(
  PokemonForm.Obstagoon,
  PokemonVariety.Obstagoon,
  PokemonSpecies.Obstagoon,
  null,
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class PerrserkerForm extends Form {}(
  PokemonForm.Perrserker,
  PokemonVariety.Perrserker,
  PokemonSpecies.Perrserker,
  null,
  [ PokemonType.Steel ],
);
new class CursolaForm extends Form {}(
  PokemonForm.Cursola,
  PokemonVariety.Cursola,
  PokemonSpecies.Cursola,
  null,
  [ PokemonType.Ghost ],
);
new class SirfetchdForm extends Form {}(
  PokemonForm.Sirfetchd,
  PokemonVariety.Sirfetchd,
  PokemonSpecies.Sirfetchd,
  null,
  [ PokemonType.Fighting ],
);
new class MrRimeForm extends Form {}(
  PokemonForm.MrRime,
  PokemonVariety.MrRime,
  PokemonSpecies.MrRime,
  null,
  [ PokemonType.Ice, PokemonType.Psychic ],
);
new class RunerigusForm extends Form {}(
  PokemonForm.Runerigus,
  PokemonVariety.Runerigus,
  PokemonSpecies.Runerigus,
  null,
  [ PokemonType.Ground, PokemonType.Ghost ],
);
new class MilceryForm extends Form {}(
  PokemonForm.Milcery,
  PokemonVariety.Milcery,
  PokemonSpecies.Milcery,
  null,
  [ PokemonType.Fairy ],
);
new class AlcremieVanillaCreamForm extends Form {}(
  PokemonForm.AlcremieVanillaCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Vanilla Cream Alcremie",
  [ PokemonType.Fairy ],
);
new class AlcremieRubyCreamForm extends Form {}(
  PokemonForm.AlcremieRubyCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Ruby Cream Alcremie",
  [ PokemonType.Fairy ],
);
new class AlcremieMatchaCreamForm extends Form {}(
  PokemonForm.AlcremieMatchaCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Matcha Cream Alcremie",
  [ PokemonType.Fairy ],
);
new class AlcremieMintCreamForm extends Form {}(
  PokemonForm.AlcremieMintCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Mint Cream Alcremie",
  [ PokemonType.Fairy ],
);
new class AlcremieLemonCreamForm extends Form {}(
  PokemonForm.AlcremieLemonCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Lemon Cream Alcremie",
  [ PokemonType.Fairy ],
);
new class AlcremieSaltedCreamForm extends Form {}(
  PokemonForm.AlcremieSaltedCream,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Salted Cream Alcremie",
  [ PokemonType.Fairy ],
);
new class AlcremieRubySwirlForm extends Form {}(
  PokemonForm.AlcremieRubySwirl,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Ruby Swirl Alcremie",
  [ PokemonType.Fairy ],
);
new class AlcremieCaramelSwirlForm extends Form {}(
  PokemonForm.AlcremieCaramelSwirl,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Caramel Swirl Alcremie",
  [ PokemonType.Fairy ],
);
new class AlcremieRainbowSwirlForm extends Form {}(
  PokemonForm.AlcremieRainbowSwirl,
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  "Rainbow Swirl Alcremie",
  [ PokemonType.Fairy ],
);
new class AlcremieGmaxForm extends Form {}(
  PokemonForm.AlcremieGmax,
  PokemonVariety.AlcremieGmax,
  PokemonSpecies.Alcremie,
  "Gigantamax Alcremie",
  [ PokemonType.Fairy ],
);
new class FalinksForm extends Form {}(
  PokemonForm.Falinks,
  PokemonVariety.Falinks,
  PokemonSpecies.Falinks,
  null,
  [ PokemonType.Fighting ],
);
new class PincurchinForm extends Form {}(
  PokemonForm.Pincurchin,
  PokemonVariety.Pincurchin,
  PokemonSpecies.Pincurchin,
  null,
  [ PokemonType.Electric ],
);
new class SnomForm extends Form {}(
  PokemonForm.Snom,
  PokemonVariety.Snom,
  PokemonSpecies.Snom,
  null,
  [ PokemonType.Ice, PokemonType.Bug ],
);
new class FrosmothForm extends Form {}(
  PokemonForm.Frosmoth,
  PokemonVariety.Frosmoth,
  PokemonSpecies.Frosmoth,
  null,
  [ PokemonType.Ice, PokemonType.Bug ],
);
new class StonjournerForm extends Form {}(
  PokemonForm.Stonjourner,
  PokemonVariety.Stonjourner,
  PokemonSpecies.Stonjourner,
  null,
  [ PokemonType.Rock ],
);
new class EiscueIceForm extends Form {}(
  PokemonForm.EiscueIce,
  PokemonVariety.EiscueIce,
  PokemonSpecies.Eiscue,
  "Ice Eiscue",
  [ PokemonType.Ice ],
);
new class EiscueNoiceForm extends Form {}(
  PokemonForm.EiscueNoice,
  PokemonVariety.EiscueNoice,
  PokemonSpecies.Eiscue,
  "Noice Eiscue",
  [ PokemonType.Ice ],
);
new class IndeedeeMaleForm extends Form {}(
  PokemonForm.IndeedeeMale,
  PokemonVariety.IndeedeeMale,
  PokemonSpecies.Indeedee,
  "Male Indeedee",
  [ PokemonType.Psychic, PokemonType.Normal ],
);
new class IndeedeeFemaleForm extends Form {}(
  PokemonForm.IndeedeeFemale,
  PokemonVariety.IndeedeeFemale,
  PokemonSpecies.Indeedee,
  "Female Indeedee",
  [ PokemonType.Psychic, PokemonType.Normal ],
);
new class MorpekoFullBellyForm extends Form {}(
  PokemonForm.MorpekoFullBelly,
  PokemonVariety.MorpekoFullBelly,
  PokemonSpecies.Morpeko,
  "Full Belly Morpeko",
  [ PokemonType.Electric, PokemonType.Dark ],
);
new class MorpekoHangryForm extends Form {}(
  PokemonForm.MorpekoHangry,
  PokemonVariety.MorpekoHangry,
  PokemonSpecies.Morpeko,
  "Hangry Morpeko",
  [ PokemonType.Electric, PokemonType.Dark ],
);
new class CufantForm extends Form {}(
  PokemonForm.Cufant,
  PokemonVariety.Cufant,
  PokemonSpecies.Cufant,
  null,
  [ PokemonType.Steel ],
);
new class CopperajahForm extends Form {}(
  PokemonForm.Copperajah,
  PokemonVariety.Copperajah,
  PokemonSpecies.Copperajah,
  null,
  [ PokemonType.Steel ],
);
new class CopperajahGmaxForm extends Form {}(
  PokemonForm.CopperajahGmax,
  PokemonVariety.CopperajahGmax,
  PokemonSpecies.Copperajah,
  "Gigantamax Copperajah",
  [ PokemonType.Steel ],
);
new class DracozoltForm extends Form {}(
  PokemonForm.Dracozolt,
  PokemonVariety.Dracozolt,
  PokemonSpecies.Dracozolt,
  null,
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class ArctozoltForm extends Form {}(
  PokemonForm.Arctozolt,
  PokemonVariety.Arctozolt,
  PokemonSpecies.Arctozolt,
  null,
  [ PokemonType.Electric, PokemonType.Ice ],
);
new class DracovishForm extends Form {}(
  PokemonForm.Dracovish,
  PokemonVariety.Dracovish,
  PokemonSpecies.Dracovish,
  null,
  [ PokemonType.Water, PokemonType.Dragon ],
);
new class ArctovishForm extends Form {}(
  PokemonForm.Arctovish,
  PokemonVariety.Arctovish,
  PokemonSpecies.Arctovish,
  null,
  [ PokemonType.Water, PokemonType.Ice ],
);
new class DuraludonForm extends Form {}(
  PokemonForm.Duraludon,
  PokemonVariety.Duraludon,
  PokemonSpecies.Duraludon,
  null,
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class DuraludonGmaxForm extends Form {}(
  PokemonForm.DuraludonGmax,
  PokemonVariety.DuraludonGmax,
  PokemonSpecies.Duraludon,
  "Gigantamax Duraludon",
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class DreepyForm extends Form {}(
  PokemonForm.Dreepy,
  PokemonVariety.Dreepy,
  PokemonSpecies.Dreepy,
  null,
  [ PokemonType.Dragon, PokemonType.Ghost ],
);
new class DrakloakForm extends Form {}(
  PokemonForm.Drakloak,
  PokemonVariety.Drakloak,
  PokemonSpecies.Drakloak,
  null,
  [ PokemonType.Dragon, PokemonType.Ghost ],
);
new class DragapultForm extends Form {}(
  PokemonForm.Dragapult,
  PokemonVariety.Dragapult,
  PokemonSpecies.Dragapult,
  null,
  [ PokemonType.Dragon, PokemonType.Ghost ],
);
new class ZacianForm extends Form {}(
  PokemonForm.Zacian,
  PokemonVariety.Zacian,
  PokemonSpecies.Zacian,
  "Zacian",
  [ PokemonType.Fairy ],
);
new class ZacianCrownedForm extends Form {}(
  PokemonForm.ZacianCrowned,
  PokemonVariety.ZacianCrowned,
  PokemonSpecies.Zacian,
  "Crowned Zacian",
  [ PokemonType.Fairy, PokemonType.Steel ],
);
new class ZamazentaForm extends Form {}(
  PokemonForm.Zamazenta,
  PokemonVariety.Zamazenta,
  PokemonSpecies.Zamazenta,
  "Zamazenta",
  [ PokemonType.Fighting ],
);
new class ZamazentaCrownedForm extends Form {}(
  PokemonForm.ZamazentaCrowned,
  PokemonVariety.ZamazentaCrowned,
  PokemonSpecies.Zamazenta,
  "Crowned Zamazenta",
  [ PokemonType.Fighting, PokemonType.Steel ],
);
new class EternatusForm extends Form {}(
  PokemonForm.Eternatus,
  PokemonVariety.Eternatus,
  PokemonSpecies.Eternatus,
  null,
  [ PokemonType.Poison, PokemonType.Dragon ],
);
new class EternatusEternamaxForm extends Form {}(
  PokemonForm.EternatusEternamax,
  PokemonVariety.EternatusEternamax,
  PokemonSpecies.Eternatus,
  "Eternamax Eternatus",
  [ PokemonType.Poison, PokemonType.Dragon ],
);
new class KubfuForm extends Form {}(
  PokemonForm.Kubfu,
  PokemonVariety.Kubfu,
  PokemonSpecies.Kubfu,
  null,
  [ PokemonType.Fighting ],
);
new class UrshifuSingleStrikeForm extends Form {}(
  PokemonForm.UrshifuSingleStrike,
  PokemonVariety.UrshifuSingleStrike,
  PokemonSpecies.Urshifu,
  "Single Strike Urshifu",
  [ PokemonType.Fighting, PokemonType.Dark ],
);
new class UrshifuRapidStrikeForm extends Form {}(
  PokemonForm.UrshifuRapidStrike,
  PokemonVariety.UrshifuRapidStrike,
  PokemonSpecies.Urshifu,
  "Rapid Strike Urshifu",
  [ PokemonType.Fighting, PokemonType.Water ],
);
new class UrshifuSingleStrikeGmaxForm extends Form {}(
  PokemonForm.UrshifuSingleStrikeGmax,
  PokemonVariety.UrshifuSingleStrikeGmax,
  PokemonSpecies.Urshifu,
  "Gigantamax Single Strike Urshifu",
  [ PokemonType.Fighting, PokemonType.Dark ],
);
new class UrshifuRapidStrikeGmaxForm extends Form {}(
  PokemonForm.UrshifuRapidStrikeGmax,
  PokemonVariety.UrshifuRapidStrikeGmax,
  PokemonSpecies.Urshifu,
  "Gigantamax Rapid Strike Urshifu",
  [ PokemonType.Fighting, PokemonType.Water ],
);
new class ZarudeForm extends Form {}(
  PokemonForm.Zarude,
  PokemonVariety.Zarude,
  PokemonSpecies.Zarude,
  null,
  [ PokemonType.Dark, PokemonType.Grass ],
);
new class ZarudeDadaForm extends Form {}(
  PokemonForm.ZarudeDada,
  PokemonVariety.ZarudeDada,
  PokemonSpecies.Zarude,
  "Dada Zarude",
  [ PokemonType.Dark, PokemonType.Grass ],
);
new class RegielekiForm extends Form {}(
  PokemonForm.Regieleki,
  PokemonVariety.Regieleki,
  PokemonSpecies.Regieleki,
  null,
  [ PokemonType.Electric ],
);
new class RegidragoForm extends Form {}(
  PokemonForm.Regidrago,
  PokemonVariety.Regidrago,
  PokemonSpecies.Regidrago,
  null,
  [ PokemonType.Dragon ],
);
new class GlastrierForm extends Form {}(
  PokemonForm.Glastrier,
  PokemonVariety.Glastrier,
  PokemonSpecies.Glastrier,
  null,
  [ PokemonType.Ice ],
);
new class SpectrierForm extends Form {}(
  PokemonForm.Spectrier,
  PokemonVariety.Spectrier,
  PokemonSpecies.Spectrier,
  null,
  [ PokemonType.Ghost ],
);
new class CalyrexForm extends Form {}(
  PokemonForm.Calyrex,
  PokemonVariety.Calyrex,
  PokemonSpecies.Calyrex,
  null,
  [ PokemonType.Psychic, PokemonType.Grass ],
);
new class CalyrexIceForm extends Form {}(
  PokemonForm.CalyrexIce,
  PokemonVariety.CalyrexIce,
  PokemonSpecies.Calyrex,
  "Ice Calyrex",
  [ PokemonType.Psychic, PokemonType.Ice ],
);
new class CalyrexShadowForm extends Form {}(
  PokemonForm.CalyrexShadow,
  PokemonVariety.CalyrexShadow,
  PokemonSpecies.Calyrex,
  "Shadow Calyrex",
  [ PokemonType.Psychic, PokemonType.Ghost ],
);
new class WyrdeerForm extends Form {}(
  PokemonForm.Wyrdeer,
  PokemonVariety.Wyrdeer,
  PokemonSpecies.Wyrdeer,
  null,
  [ PokemonType.Normal, PokemonType.Psychic ],
);
new class KleavorForm extends Form {}(
  PokemonForm.Kleavor,
  PokemonVariety.Kleavor,
  PokemonSpecies.Kleavor,
  null,
  [ PokemonType.Bug, PokemonType.Rock ],
);
new class UrsalunaForm extends Form {}(
  PokemonForm.Ursaluna,
  PokemonVariety.Ursaluna,
  PokemonSpecies.Ursaluna,
  null,
  [ PokemonType.Ground, PokemonType.Normal ],
);
new class UrsalunaBloodmoonForm extends Form {}(
  PokemonForm.UrsalunaBloodmoon,
  PokemonVariety.UrsalunaBloodmoon,
  PokemonSpecies.Ursaluna,
  null,
  [ PokemonType.Ground, PokemonType.Normal ],
);
new class BasculegionMaleForm extends Form {}(
  PokemonForm.BasculegionMale,
  PokemonVariety.BasculegionMale,
  PokemonSpecies.Basculegion,
  "Male Basculegion",
  [ PokemonType.Water, PokemonType.Ghost ],
);
new class BasculegionFemaleForm extends Form {}(
  PokemonForm.BasculegionFemale,
  PokemonVariety.BasculegionFemale,
  PokemonSpecies.Basculegion,
  "Female Basculegion",
  [ PokemonType.Water, PokemonType.Ghost ],
);
new class SneaslerForm extends Form {}(
  PokemonForm.Sneasler,
  PokemonVariety.Sneasler,
  PokemonSpecies.Sneasler,
  null,
  [ PokemonType.Fighting, PokemonType.Poison ],
);
new class OverqwilForm extends Form {}(
  PokemonForm.Overqwil,
  PokemonVariety.Overqwil,
  PokemonSpecies.Overqwil,
  null,
  [ PokemonType.Dark, PokemonType.Poison ],
);
new class EnamorusIncarnateForm extends Form {}(
  PokemonForm.EnamorusIncarnate,
  PokemonVariety.EnamorusIncarnate,
  PokemonSpecies.Enamorus,
  "Incarnate Enamorus",
  [ PokemonType.Fairy, PokemonType.Flying ],
);
new class EnamorusTherianForm extends Form {}(
  PokemonForm.EnamorusTherian,
  PokemonVariety.EnamorusTherian,
  PokemonSpecies.Enamorus,
  "Therian Enamorus",
  [ PokemonType.Fairy, PokemonType.Flying ],
);
new class SprigatitoForm extends Form {}(
  PokemonForm.Sprigatito,
  PokemonVariety.Sprigatito,
  PokemonSpecies.Sprigatito,
  null,
  [ PokemonType.Grass ],
);
new class FloragatoForm extends Form {}(
  PokemonForm.Floragato,
  PokemonVariety.Floragato,
  PokemonSpecies.Floragato,
  null,
  [ PokemonType.Grass ],
);
new class MeowscaradaForm extends Form {}(
  PokemonForm.Meowscarada,
  PokemonVariety.Meowscarada,
  PokemonSpecies.Meowscarada,
  null,
  [ PokemonType.Grass, PokemonType.Dark ],
);
new class FuecocoForm extends Form {}(
  PokemonForm.Fuecoco,
  PokemonVariety.Fuecoco,
  PokemonSpecies.Fuecoco,
  null,
  [ PokemonType.Fire ],
);
new class CrocalorForm extends Form {}(
  PokemonForm.Crocalor,
  PokemonVariety.Crocalor,
  PokemonSpecies.Crocalor,
  null,
  [ PokemonType.Fire ],
);
new class SkeledirgeForm extends Form {}(
  PokemonForm.Skeledirge,
  PokemonVariety.Skeledirge,
  PokemonSpecies.Skeledirge,
  null,
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class QuaxlyForm extends Form {}(
  PokemonForm.Quaxly,
  PokemonVariety.Quaxly,
  PokemonSpecies.Quaxly,
  null,
  [ PokemonType.Water ],
);
new class QuaxwellForm extends Form {}(
  PokemonForm.Quaxwell,
  PokemonVariety.Quaxwell,
  PokemonSpecies.Quaxwell,
  null,
  [ PokemonType.Water ],
);
new class QuaquavalForm extends Form {}(
  PokemonForm.Quaquaval,
  PokemonVariety.Quaquaval,
  PokemonSpecies.Quaquaval,
  null,
  [ PokemonType.Water, PokemonType.Fighting ],
);
new class LechonkForm extends Form {}(
  PokemonForm.Lechonk,
  PokemonVariety.Lechonk,
  PokemonSpecies.Lechonk,
  null,
  [ PokemonType.Normal ],
);
new class OinkologneForm extends Form {}(
  PokemonForm.Oinkologne,
  PokemonVariety.Oinkologne,
  PokemonSpecies.Oinkologne,
  null,
  [ PokemonType.Normal ],
);
new class OinkologneFemaleForm extends Form {}(
  PokemonForm.OinkologneFemale,
  PokemonVariety.OinkologneFemale,
  PokemonSpecies.Oinkologne,
  null,
  [ PokemonType.Normal ],
);
new class TarountulaForm extends Form {}(
  PokemonForm.Tarountula,
  PokemonVariety.Tarountula,
  PokemonSpecies.Tarountula,
  null,
  [ PokemonType.Bug ],
);
new class SpidopsForm extends Form {}(
  PokemonForm.Spidops,
  PokemonVariety.Spidops,
  PokemonSpecies.Spidops,
  null,
  [ PokemonType.Bug ],
);
new class NymbleForm extends Form {}(
  PokemonForm.Nymble,
  PokemonVariety.Nymble,
  PokemonSpecies.Nymble,
  null,
  [ PokemonType.Bug ],
);
new class LokixForm extends Form {}(
  PokemonForm.Lokix,
  PokemonVariety.Lokix,
  PokemonSpecies.Lokix,
  null,
  [ PokemonType.Bug, PokemonType.Dark ],
);
new class PawmiForm extends Form {}(
  PokemonForm.Pawmi,
  PokemonVariety.Pawmi,
  PokemonSpecies.Pawmi,
  null,
  [ PokemonType.Electric ],
);
new class PawmoForm extends Form {}(
  PokemonForm.Pawmo,
  PokemonVariety.Pawmo,
  PokemonSpecies.Pawmo,
  null,
  [ PokemonType.Electric, PokemonType.Fighting ],
);
new class PawmotForm extends Form {}(
  PokemonForm.Pawmot,
  PokemonVariety.Pawmot,
  PokemonSpecies.Pawmot,
  null,
  [ PokemonType.Electric, PokemonType.Fighting ],
);
new class TandemausForm extends Form {}(
  PokemonForm.Tandemaus,
  PokemonVariety.Tandemaus,
  PokemonSpecies.Tandemaus,
  null,
  [ PokemonType.Normal ],
);
new class MausholdFamilyOfFourForm extends Form {}(
  PokemonForm.MausholdFamilyOfFour,
  PokemonVariety.Maushold,
  PokemonSpecies.Maushold,
  null,
  [ PokemonType.Normal ],
);
new class MausholdFamilyOfThreeForm extends Form {}(
  PokemonForm.MausholdFamilyOfThree,
  PokemonVariety.MausholdFamilyOfThree,
  PokemonSpecies.Maushold,
  null,
  [ PokemonType.Normal ],
);
new class FidoughForm extends Form {}(
  PokemonForm.Fidough,
  PokemonVariety.Fidough,
  PokemonSpecies.Fidough,
  null,
  [ PokemonType.Fairy ],
);
new class DachsbunForm extends Form {}(
  PokemonForm.Dachsbun,
  PokemonVariety.Dachsbun,
  PokemonSpecies.Dachsbun,
  null,
  [ PokemonType.Fairy ],
);
new class SmolivForm extends Form {}(
  PokemonForm.Smoliv,
  PokemonVariety.Smoliv,
  PokemonSpecies.Smoliv,
  null,
  [ PokemonType.Grass, PokemonType.Normal ],
);
new class DollivForm extends Form {}(
  PokemonForm.Dolliv,
  PokemonVariety.Dolliv,
  PokemonSpecies.Dolliv,
  null,
  [ PokemonType.Grass, PokemonType.Normal ],
);
new class ArbolivaForm extends Form {}(
  PokemonForm.Arboliva,
  PokemonVariety.Arboliva,
  PokemonSpecies.Arboliva,
  null,
  [ PokemonType.Grass, PokemonType.Normal ],
);
new class SquawkabillyGreenPlumageForm extends Form {}(
  PokemonForm.SquawkabillyGreenPlumage,
  PokemonVariety.Squawkabilly,
  PokemonSpecies.Squawkabilly,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SquawkabillyBluePlumageForm extends Form {}(
  PokemonForm.SquawkabillyBluePlumage,
  PokemonVariety.SquawkabillyBluePlumage,
  PokemonSpecies.Squawkabilly,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SquawkabillyYellowPlumageForm extends Form {}(
  PokemonForm.SquawkabillyYellowPlumage,
  PokemonVariety.SquawkabillyYellowPlumage,
  PokemonSpecies.Squawkabilly,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SquawkabillyWhitePlumageForm extends Form {}(
  PokemonForm.SquawkabillyWhitePlumage,
  PokemonVariety.SquawkabillyWhitePlumage,
  PokemonSpecies.Squawkabilly,
  null,
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class NacliForm extends Form {}(
  PokemonForm.Nacli,
  PokemonVariety.Nacli,
  PokemonSpecies.Nacli,
  null,
  [ PokemonType.Rock ],
);
new class NaclstackForm extends Form {}(
  PokemonForm.Naclstack,
  PokemonVariety.Naclstack,
  PokemonSpecies.Naclstack,
  null,
  [ PokemonType.Rock ],
);
new class GarganaclForm extends Form {}(
  PokemonForm.Garganacl,
  PokemonVariety.Garganacl,
  PokemonSpecies.Garganacl,
  null,
  [ PokemonType.Rock ],
);
new class CharcadetForm extends Form {}(
  PokemonForm.Charcadet,
  PokemonVariety.Charcadet,
  PokemonSpecies.Charcadet,
  null,
  [ PokemonType.Fire ],
);
new class ArmarougeForm extends Form {}(
  PokemonForm.Armarouge,
  PokemonVariety.Armarouge,
  PokemonSpecies.Armarouge,
  null,
  [ PokemonType.Fire, PokemonType.Psychic ],
);
new class CeruledgeForm extends Form {}(
  PokemonForm.Ceruledge,
  PokemonVariety.Ceruledge,
  PokemonSpecies.Ceruledge,
  null,
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class TadbulbForm extends Form {}(
  PokemonForm.Tadbulb,
  PokemonVariety.Tadbulb,
  PokemonSpecies.Tadbulb,
  null,
  [ PokemonType.Electric ],
);
new class BelliboltForm extends Form {}(
  PokemonForm.Bellibolt,
  PokemonVariety.Bellibolt,
  PokemonSpecies.Bellibolt,
  null,
  [ PokemonType.Electric ],
);
new class WattrelForm extends Form {}(
  PokemonForm.Wattrel,
  PokemonVariety.Wattrel,
  PokemonSpecies.Wattrel,
  null,
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class KilowattrelForm extends Form {}(
  PokemonForm.Kilowattrel,
  PokemonVariety.Kilowattrel,
  PokemonSpecies.Kilowattrel,
  null,
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class MaschiffForm extends Form {}(
  PokemonForm.Maschiff,
  PokemonVariety.Maschiff,
  PokemonSpecies.Maschiff,
  null,
  [ PokemonType.Dark ],
);
new class MabosstiffForm extends Form {}(
  PokemonForm.Mabosstiff,
  PokemonVariety.Mabosstiff,
  PokemonSpecies.Mabosstiff,
  null,
  [ PokemonType.Dark ],
);
new class ShroodleForm extends Form {}(
  PokemonForm.Shroodle,
  PokemonVariety.Shroodle,
  PokemonSpecies.Shroodle,
  null,
  [ PokemonType.Poison, PokemonType.Normal ],
);
new class GrafaiaiForm extends Form {}(
  PokemonForm.Grafaiai,
  PokemonVariety.Grafaiai,
  PokemonSpecies.Grafaiai,
  null,
  [ PokemonType.Poison, PokemonType.Normal ],
);
new class BramblinForm extends Form {}(
  PokemonForm.Bramblin,
  PokemonVariety.Bramblin,
  PokemonSpecies.Bramblin,
  null,
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class BrambleghastForm extends Form {}(
  PokemonForm.Brambleghast,
  PokemonVariety.Brambleghast,
  PokemonSpecies.Brambleghast,
  null,
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class ToedscoolForm extends Form {}(
  PokemonForm.Toedscool,
  PokemonVariety.Toedscool,
  PokemonSpecies.Toedscool,
  null,
  [ PokemonType.Ground, PokemonType.Grass ],
);
new class ToedscruelForm extends Form {}(
  PokemonForm.Toedscruel,
  PokemonVariety.Toedscruel,
  PokemonSpecies.Toedscruel,
  null,
  [ PokemonType.Ground, PokemonType.Grass ],
);
new class KlawfForm extends Form {}(
  PokemonForm.Klawf,
  PokemonVariety.Klawf,
  PokemonSpecies.Klawf,
  null,
  [ PokemonType.Rock ],
);
new class CapsakidForm extends Form {}(
  PokemonForm.Capsakid,
  PokemonVariety.Capsakid,
  PokemonSpecies.Capsakid,
  null,
  [ PokemonType.Grass ],
);
new class ScovillainForm extends Form {}(
  PokemonForm.Scovillain,
  PokemonVariety.Scovillain,
  PokemonSpecies.Scovillain,
  null,
  [ PokemonType.Grass, PokemonType.Fire ],
);
new class RellorForm extends Form {}(
  PokemonForm.Rellor,
  PokemonVariety.Rellor,
  PokemonSpecies.Rellor,
  null,
  [ PokemonType.Bug ],
);
new class RabscaForm extends Form {}(
  PokemonForm.Rabsca,
  PokemonVariety.Rabsca,
  PokemonSpecies.Rabsca,
  null,
  [ PokemonType.Bug, PokemonType.Psychic ],
);
new class FlittleForm extends Form {}(
  PokemonForm.Flittle,
  PokemonVariety.Flittle,
  PokemonSpecies.Flittle,
  null,
  [ PokemonType.Psychic ],
);
new class EspathraForm extends Form {}(
  PokemonForm.Espathra,
  PokemonVariety.Espathra,
  PokemonSpecies.Espathra,
  null,
  [ PokemonType.Psychic ],
);
new class TinkatinkForm extends Form {}(
  PokemonForm.Tinkatink,
  PokemonVariety.Tinkatink,
  PokemonSpecies.Tinkatink,
  null,
  [ PokemonType.Fairy, PokemonType.Steel ],
);
new class TinkatuffForm extends Form {}(
  PokemonForm.Tinkatuff,
  PokemonVariety.Tinkatuff,
  PokemonSpecies.Tinkatuff,
  null,
  [ PokemonType.Fairy, PokemonType.Steel ],
);
new class TinkatonForm extends Form {}(
  PokemonForm.Tinkaton,
  PokemonVariety.Tinkaton,
  PokemonSpecies.Tinkaton,
  null,
  [ PokemonType.Fairy, PokemonType.Steel ],
);
new class WiglettForm extends Form {}(
  PokemonForm.Wiglett,
  PokemonVariety.Wiglett,
  PokemonSpecies.Wiglett,
  null,
  [ PokemonType.Water ],
);
new class WugtrioForm extends Form {}(
  PokemonForm.Wugtrio,
  PokemonVariety.Wugtrio,
  PokemonSpecies.Wugtrio,
  null,
  [ PokemonType.Water ],
);
new class BombirdierForm extends Form {}(
  PokemonForm.Bombirdier,
  PokemonVariety.Bombirdier,
  PokemonSpecies.Bombirdier,
  null,
  [ PokemonType.Flying, PokemonType.Dark ],
);
new class FinizenForm extends Form {}(
  PokemonForm.Finizen,
  PokemonVariety.Finizen,
  PokemonSpecies.Finizen,
  null,
  [ PokemonType.Water ],
);
new class PalafinZeroForm extends Form {}(
  PokemonForm.PalafinZero,
  PokemonVariety.Palafin,
  PokemonSpecies.Palafin,
  null,
  [ PokemonType.Water ],
);
new class PalafinHeroForm extends Form {}(
  PokemonForm.PalafinHero,
  PokemonVariety.PalafinHero,
  PokemonSpecies.Palafin,
  null,
  [ PokemonType.Water ],
);
new class VaroomForm extends Form {}(
  PokemonForm.Varoom,
  PokemonVariety.Varoom,
  PokemonSpecies.Varoom,
  null,
  [ PokemonType.Steel, PokemonType.Poison ],
);
new class RevavroomForm extends Form {}(
  PokemonForm.Revavroom,
  PokemonVariety.Revavroom,
  PokemonSpecies.Revavroom,
  null,
  [ PokemonType.Steel, PokemonType.Poison ],
);
new class CyclizarForm extends Form {}(
  PokemonForm.Cyclizar,
  PokemonVariety.Cyclizar,
  PokemonSpecies.Cyclizar,
  null,
  [ PokemonType.Dragon, PokemonType.Normal ],
);
new class OrthwormForm extends Form {}(
  PokemonForm.Orthworm,
  PokemonVariety.Orthworm,
  PokemonSpecies.Orthworm,
  null,
  [ PokemonType.Steel ],
);
new class GlimmetForm extends Form {}(
  PokemonForm.Glimmet,
  PokemonVariety.Glimmet,
  PokemonSpecies.Glimmet,
  null,
  [ PokemonType.Rock, PokemonType.Poison ],
);
new class GlimmoraForm extends Form {}(
  PokemonForm.Glimmora,
  PokemonVariety.Glimmora,
  PokemonSpecies.Glimmora,
  null,
  [ PokemonType.Rock, PokemonType.Poison ],
);
new class GreavardForm extends Form {}(
  PokemonForm.Greavard,
  PokemonVariety.Greavard,
  PokemonSpecies.Greavard,
  null,
  [ PokemonType.Ghost ],
);
new class HoundstoneForm extends Form {}(
  PokemonForm.Houndstone,
  PokemonVariety.Houndstone,
  PokemonSpecies.Houndstone,
  null,
  [ PokemonType.Ghost ],
);
new class FlamigoForm extends Form {}(
  PokemonForm.Flamigo,
  PokemonVariety.Flamigo,
  PokemonSpecies.Flamigo,
  null,
  [ PokemonType.Flying, PokemonType.Fighting ],
);
new class CetoddleForm extends Form {}(
  PokemonForm.Cetoddle,
  PokemonVariety.Cetoddle,
  PokemonSpecies.Cetoddle,
  null,
  [ PokemonType.Ice ],
);
new class CetitanForm extends Form {}(
  PokemonForm.Cetitan,
  PokemonVariety.Cetitan,
  PokemonSpecies.Cetitan,
  null,
  [ PokemonType.Ice ],
);
new class VeluzaForm extends Form {}(
  PokemonForm.Veluza,
  PokemonVariety.Veluza,
  PokemonSpecies.Veluza,
  null,
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class DondozoForm extends Form {}(
  PokemonForm.Dondozo,
  PokemonVariety.Dondozo,
  PokemonSpecies.Dondozo,
  null,
  [ PokemonType.Water ],
);
new class TatsugiriCurlyForm extends Form {}(
  PokemonForm.TatsugiriCurly,
  PokemonVariety.Tatsugiri,
  PokemonSpecies.Tatsugiri,
  null,
  [ PokemonType.Dragon, PokemonType.Water ],
);
new class TatsugiriDroopyForm extends Form {}(
  PokemonForm.TatsugiriDroopy,
  PokemonVariety.TatsugiriDroopy,
  PokemonSpecies.Tatsugiri,
  null,
  [ PokemonType.Dragon, PokemonType.Water ],
);
new class TatsugiriStretchyForm extends Form {}(
  PokemonForm.TatsugiriStretchy,
  PokemonVariety.TatsugiriStretchy,
  PokemonSpecies.Tatsugiri,
  null,
  [ PokemonType.Dragon, PokemonType.Water ],
);
new class AnnihilapeForm extends Form {}(
  PokemonForm.Annihilape,
  PokemonVariety.Annihilape,
  PokemonSpecies.Annihilape,
  null,
  [ PokemonType.Fighting, PokemonType.Ghost ],
);
new class ClodsireForm extends Form {}(
  PokemonForm.Clodsire,
  PokemonVariety.Clodsire,
  PokemonSpecies.Clodsire,
  null,
  [ PokemonType.Poison, PokemonType.Ground ],
);
new class FarigirafForm extends Form {}(
  PokemonForm.Farigiraf,
  PokemonVariety.Farigiraf,
  PokemonSpecies.Farigiraf,
  null,
  [ PokemonType.Normal, PokemonType.Psychic ],
);
new class DudunsparceTwoSegmentForm extends Form {}(
  PokemonForm.DudunsparceTwoSegment,
  PokemonVariety.Dudunsparce,
  PokemonSpecies.Dudunsparce,
  null,
  [ PokemonType.Normal ],
);
new class DudunsparceThreeSegmentForm extends Form {}(
  PokemonForm.DudunsparceThreeSegment,
  PokemonVariety.DudunsparceThreeSegment,
  PokemonSpecies.Dudunsparce,
  null,
  [ PokemonType.Normal ],
);
new class KingambitForm extends Form {}(
  PokemonForm.Kingambit,
  PokemonVariety.Kingambit,
  PokemonSpecies.Kingambit,
  null,
  [ PokemonType.Dark, PokemonType.Steel ],
);
new class GreatTuskForm extends Form {}(
  PokemonForm.GreatTusk,
  PokemonVariety.GreatTusk,
  PokemonSpecies.GreatTusk,
  null,
  [ PokemonType.Ground, PokemonType.Fighting ],
);
new class ScreamTailForm extends Form {}(
  PokemonForm.ScreamTail,
  PokemonVariety.ScreamTail,
  PokemonSpecies.ScreamTail,
  null,
  [ PokemonType.Fairy, PokemonType.Psychic ],
);
new class BruteBonnetForm extends Form {}(
  PokemonForm.BruteBonnet,
  PokemonVariety.BruteBonnet,
  PokemonSpecies.BruteBonnet,
  null,
  [ PokemonType.Grass, PokemonType.Dark ],
);
new class FlutterManeForm extends Form {}(
  PokemonForm.FlutterMane,
  PokemonVariety.FlutterMane,
  PokemonSpecies.FlutterMane,
  null,
  [ PokemonType.Ghost, PokemonType.Fairy ],
);
new class SlitherWingForm extends Form {}(
  PokemonForm.SlitherWing,
  PokemonVariety.SlitherWing,
  PokemonSpecies.SlitherWing,
  null,
  [ PokemonType.Bug, PokemonType.Fighting ],
);
new class SandyShocksForm extends Form {}(
  PokemonForm.SandyShocks,
  PokemonVariety.SandyShocks,
  PokemonSpecies.SandyShocks,
  null,
  [ PokemonType.Electric, PokemonType.Ground ],
);
new class IronTreadsForm extends Form {}(
  PokemonForm.IronTreads,
  PokemonVariety.IronTreads,
  PokemonSpecies.IronTreads,
  null,
  [ PokemonType.Ground, PokemonType.Steel ],
);
new class IronBundleForm extends Form {}(
  PokemonForm.IronBundle,
  PokemonVariety.IronBundle,
  PokemonSpecies.IronBundle,
  null,
  [ PokemonType.Ice, PokemonType.Water ],
);
new class IronHandsForm extends Form {}(
  PokemonForm.IronHands,
  PokemonVariety.IronHands,
  PokemonSpecies.IronHands,
  null,
  [ PokemonType.Fighting, PokemonType.Electric ],
);
new class IronJugulisForm extends Form {}(
  PokemonForm.IronJugulis,
  PokemonVariety.IronJugulis,
  PokemonSpecies.IronJugulis,
  null,
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class IronMothForm extends Form {}(
  PokemonForm.IronMoth,
  PokemonVariety.IronMoth,
  PokemonSpecies.IronMoth,
  null,
  [ PokemonType.Fire, PokemonType.Poison ],
);
new class IronThornsForm extends Form {}(
  PokemonForm.IronThorns,
  PokemonVariety.IronThorns,
  PokemonSpecies.IronThorns,
  null,
  [ PokemonType.Rock, PokemonType.Electric ],
);
new class FrigibaxForm extends Form {}(
  PokemonForm.Frigibax,
  PokemonVariety.Frigibax,
  PokemonSpecies.Frigibax,
  null,
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class ArctibaxForm extends Form {}(
  PokemonForm.Arctibax,
  PokemonVariety.Arctibax,
  PokemonSpecies.Arctibax,
  null,
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class BaxcaliburForm extends Form {}(
  PokemonForm.Baxcalibur,
  PokemonVariety.Baxcalibur,
  PokemonSpecies.Baxcalibur,
  null,
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class GimmighoulChestForm extends Form {}(
  PokemonForm.GimmighoulChest,
  PokemonVariety.Gimmighoul,
  PokemonSpecies.Gimmighoul,
  null,
  [ PokemonType.Ghost ],
);
new class GimmighoulRoamingForm extends Form {}(
  PokemonForm.GimmighoulRoaming,
  PokemonVariety.GimmighoulRoaming,
  PokemonSpecies.Gimmighoul,
  null,
  [ PokemonType.Ghost ],
);
new class GholdengoForm extends Form {}(
  PokemonForm.Gholdengo,
  PokemonVariety.Gholdengo,
  PokemonSpecies.Gholdengo,
  null,
  [ PokemonType.Steel, PokemonType.Ghost ],
);
new class WoChienForm extends Form {}(
  PokemonForm.WoChien,
  PokemonVariety.WoChien,
  PokemonSpecies.WoChien,
  null,
  [ PokemonType.Dark, PokemonType.Grass ],
);
new class ChienPaoForm extends Form {}(
  PokemonForm.ChienPao,
  PokemonVariety.ChienPao,
  PokemonSpecies.ChienPao,
  null,
  [ PokemonType.Dark, PokemonType.Ice ],
);
new class TingLuForm extends Form {}(
  PokemonForm.TingLu,
  PokemonVariety.TingLu,
  PokemonSpecies.TingLu,
  null,
  [ PokemonType.Dark, PokemonType.Ground ],
);
new class ChiYuForm extends Form {}(
  PokemonForm.ChiYu,
  PokemonVariety.ChiYu,
  PokemonSpecies.ChiYu,
  null,
  [ PokemonType.Dark, PokemonType.Fire ],
);
new class RoaringMoonForm extends Form {}(
  PokemonForm.RoaringMoon,
  PokemonVariety.RoaringMoon,
  PokemonSpecies.RoaringMoon,
  null,
  [ PokemonType.Dragon, PokemonType.Dark ],
);
new class IronValiantForm extends Form {}(
  PokemonForm.IronValiant,
  PokemonVariety.IronValiant,
  PokemonSpecies.IronValiant,
  null,
  [ PokemonType.Fairy, PokemonType.Fighting ],
);
new class KoraidonApexBuildForm extends Form {}(
  PokemonForm.KoraidonApexBuild,
  PokemonVariety.Koraidon,
  PokemonSpecies.Koraidon,
  null,
  [ PokemonType.Fighting, PokemonType.Dragon ],
);
new class KoraidonLimitedBuildForm extends Form {}(
  PokemonForm.KoraidonLimitedBuild,
  PokemonVariety.KoraidonLimitedBuild,
  PokemonSpecies.Koraidon,
  null,
  [ PokemonType.Fighting, PokemonType.Dragon ],
);
new class KoraidonSprintingBuildForm extends Form {}(
  PokemonForm.KoraidonSprintingBuild,
  PokemonVariety.KoraidonSprintingBuild,
  PokemonSpecies.Koraidon,
  null,
  [ PokemonType.Fighting, PokemonType.Dragon ],
);
new class KoraidonSwimmingBuildForm extends Form {}(
  PokemonForm.KoraidonSwimmingBuild,
  PokemonVariety.KoraidonSwimmingBuild,
  PokemonSpecies.Koraidon,
  null,
  [ PokemonType.Fighting, PokemonType.Dragon ],
);
new class KoraidonGlidingBuildForm extends Form {}(
  PokemonForm.KoraidonGlidingBuild,
  PokemonVariety.KoraidonGlidingBuild,
  PokemonSpecies.Koraidon,
  null,
  [ PokemonType.Fighting, PokemonType.Dragon ],
);
new class MiraidonUltimateModeForm extends Form {}(
  PokemonForm.MiraidonUltimateMode,
  PokemonVariety.Miraidon,
  PokemonSpecies.Miraidon,
  null,
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class MiraidonLowPowerModeForm extends Form {}(
  PokemonForm.MiraidonLowPowerMode,
  PokemonVariety.MiraidonLowPowerMode,
  PokemonSpecies.Miraidon,
  null,
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class MiraidonDriveModeForm extends Form {}(
  PokemonForm.MiraidonDriveMode,
  PokemonVariety.MiraidonDriveMode,
  PokemonSpecies.Miraidon,
  null,
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class MiraidonAquaticModeForm extends Form {}(
  PokemonForm.MiraidonAquaticMode,
  PokemonVariety.MiraidonAquaticMode,
  PokemonSpecies.Miraidon,
  null,
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class MiraidonGlideModeForm extends Form {}(
  PokemonForm.MiraidonGlideMode,
  PokemonVariety.MiraidonGlideMode,
  PokemonSpecies.Miraidon,
  null,
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class WalkingWakeForm extends Form {}(
  PokemonForm.WalkingWake,
  PokemonVariety.WalkingWake,
  PokemonSpecies.WalkingWake,
  null,
  [ PokemonType.Water, PokemonType.Dragon ],
);
new class IronLeavesForm extends Form {}(
  PokemonForm.IronLeaves,
  PokemonVariety.IronLeaves,
  PokemonSpecies.IronLeaves,
  null,
  [ PokemonType.Grass, PokemonType.Psychic ],
);
new class DipplinForm extends Form {}(
  PokemonForm.Dipplin,
  PokemonVariety.Dipplin,
  PokemonSpecies.Dipplin,
  null,
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class PoltchageistCounterfeitForm extends Form {}(
  PokemonForm.PoltchageistCounterfeit,
  PokemonVariety.Poltchageist,
  PokemonSpecies.Poltchageist,
  null,
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class PoltchageistArtisanForm extends Form {}(
  PokemonForm.PoltchageistArtisan,
  PokemonVariety.Poltchageist,
  PokemonSpecies.Poltchageist,
  null,
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class SinistchaUnremarkableForm extends Form {}(
  PokemonForm.SinistchaUnremarkable,
  PokemonVariety.Sinistcha,
  PokemonSpecies.Sinistcha,
  null,
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class SinistchaMasterpieceForm extends Form {}(
  PokemonForm.SinistchaMasterpiece,
  PokemonVariety.Sinistcha,
  PokemonSpecies.Sinistcha,
  null,
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class OkidogiForm extends Form {}(
  PokemonForm.Okidogi,
  PokemonVariety.Okidogi,
  PokemonSpecies.Okidogi,
  null,
  [ PokemonType.Poison, PokemonType.Fighting ],
);
new class MunkidoriForm extends Form {}(
  PokemonForm.Munkidori,
  PokemonVariety.Munkidori,
  PokemonSpecies.Munkidori,
  null,
  [ PokemonType.Poison, PokemonType.Psychic ],
);
new class FezandipitiForm extends Form {}(
  PokemonForm.Fezandipiti,
  PokemonVariety.Fezandipiti,
  PokemonSpecies.Fezandipiti,
  null,
  [ PokemonType.Poison, PokemonType.Fairy ],
);
new class OgerponForm extends Form {}(
  PokemonForm.Ogerpon,
  PokemonVariety.Ogerpon,
  PokemonSpecies.Ogerpon,
  null,
  [ PokemonType.Grass ],
);
new class OgerponWellspringMaskForm extends Form {}(
  PokemonForm.OgerponWellspringMask,
  PokemonVariety.OgerponWellspringMask,
  PokemonSpecies.Ogerpon,
  null,
  [ PokemonType.Grass, PokemonType.Water ],
);
new class OgerponHearthflameMaskForm extends Form {}(
  PokemonForm.OgerponHearthflameMask,
  PokemonVariety.OgerponHearthflameMask,
  PokemonSpecies.Ogerpon,
  null,
  [ PokemonType.Grass, PokemonType.Fire ],
);
new class OgerponCornerstoneMaskForm extends Form {}(
  PokemonForm.OgerponCornerstoneMask,
  PokemonVariety.OgerponCornerstoneMask,
  PokemonSpecies.Ogerpon,
  null,
  [ PokemonType.Grass, PokemonType.Rock ],
);
new class ArchaludonForm extends Form {}(
  PokemonForm.Archaludon,
  PokemonVariety.Archaludon,
  PokemonSpecies.Archaludon,
  null,
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class HydrappleForm extends Form {}(
  PokemonForm.Hydrapple,
  PokemonVariety.Hydrapple,
  PokemonSpecies.Hydrapple,
  null,
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class GougingFireForm extends Form {}(
  PokemonForm.GougingFire,
  PokemonVariety.GougingFire,
  PokemonSpecies.GougingFire,
  null,
  [ PokemonType.Fire, PokemonType.Dragon ],
);
new class RagingBoltForm extends Form {}(
  PokemonForm.RagingBolt,
  PokemonVariety.RagingBolt,
  PokemonSpecies.RagingBolt,
  null,
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class IronBoulderForm extends Form {}(
  PokemonForm.IronBoulder,
  PokemonVariety.IronBoulder,
  PokemonSpecies.IronBoulder,
  null,
  [ PokemonType.Rock, PokemonType.Psychic ],
);
new class IronCrownForm extends Form {}(
  PokemonForm.IronCrown,
  PokemonVariety.IronCrown,
  PokemonSpecies.IronCrown,
  null,
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class TerapagosForm extends Form {}(
  PokemonForm.Terapagos,
  PokemonVariety.Terapagos,
  PokemonSpecies.Terapagos,
  null,
  [ PokemonType.Normal ],
);
new class TerapagosTerastalForm extends Form {}(
  PokemonForm.TerapagosTerastal,
  PokemonVariety.TerapagosTerastal,
  PokemonSpecies.Terapagos,
  null,
  [ PokemonType.Normal ],
);
new class TerapagosStellarForm extends Form {}(
  PokemonForm.TerapagosStellar,
  PokemonVariety.TerapagosStellar,
  PokemonSpecies.Terapagos,
  null,
  [ PokemonType.Normal ],
);
new class PecharuntForm extends Form {}(
  PokemonForm.Pecharunt,
  PokemonVariety.Pecharunt,
  PokemonSpecies.Pecharunt,
  null,
  [ PokemonType.Poison, PokemonType.Ghost ],
);