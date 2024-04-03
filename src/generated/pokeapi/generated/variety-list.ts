// AUTO GENERATED FILE
import { IPokemonVariety } from "#pokeapi/pokemon-variety.interface";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonForm } from "#pokeapi/generated/form.enum";
import { PokemonVariety } from "#pokeapi/generated/variety.enum";
import { PokemonType } from "#pokeapi/generated/type.enum";

export const varietiesList = new Map<PokemonVariety, IPokemonVariety>();

class Variety extends IPokemonVariety {
  constructor(
    variety: PokemonVariety,
    species: PokemonSpecies,
    forms: PokemonForm[],
    types: PokemonType[],
  ) {
    super(variety, species, forms, types);
    varietiesList.set(variety, this);
  }
}

new class BulbasaurVariety extends Variety {}(
  PokemonVariety.Bulbasaur,
  PokemonSpecies.Bulbasaur,
  [ PokemonForm.Bulbasaur ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class IvysaurVariety extends Variety {}(
  PokemonVariety.Ivysaur,
  PokemonSpecies.Ivysaur,
  [ PokemonForm.Ivysaur ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class VenusaurVariety extends Variety {}(
  PokemonVariety.Venusaur,
  PokemonSpecies.Venusaur,
  [ PokemonForm.Venusaur ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class VenusaurMegaVariety extends Variety {}(
  PokemonVariety.VenusaurMega,
  PokemonSpecies.Venusaur,
  [ PokemonForm.VenusaurMega ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class VenusaurGmaxVariety extends Variety {}(
  PokemonVariety.VenusaurGmax,
  PokemonSpecies.Venusaur,
  [ PokemonForm.VenusaurGmax ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class CharmanderVariety extends Variety {}(
  PokemonVariety.Charmander,
  PokemonSpecies.Charmander,
  [ PokemonForm.Charmander ],
  [ PokemonType.Fire ],
);
new class CharmeleonVariety extends Variety {}(
  PokemonVariety.Charmeleon,
  PokemonSpecies.Charmeleon,
  [ PokemonForm.Charmeleon ],
  [ PokemonType.Fire ],
);
new class CharizardVariety extends Variety {}(
  PokemonVariety.Charizard,
  PokemonSpecies.Charizard,
  [ PokemonForm.Charizard ],
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class CharizardMegaXVariety extends Variety {}(
  PokemonVariety.CharizardMegaX,
  PokemonSpecies.Charizard,
  [ PokemonForm.CharizardMegaX ],
  [ PokemonType.Fire, PokemonType.Dragon ],
);
new class CharizardMegaYVariety extends Variety {}(
  PokemonVariety.CharizardMegaY,
  PokemonSpecies.Charizard,
  [ PokemonForm.CharizardMegaY ],
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class CharizardGmaxVariety extends Variety {}(
  PokemonVariety.CharizardGmax,
  PokemonSpecies.Charizard,
  [ PokemonForm.CharizardGmax ],
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class SquirtleVariety extends Variety {}(
  PokemonVariety.Squirtle,
  PokemonSpecies.Squirtle,
  [ PokemonForm.Squirtle ],
  [ PokemonType.Water ],
);
new class WartortleVariety extends Variety {}(
  PokemonVariety.Wartortle,
  PokemonSpecies.Wartortle,
  [ PokemonForm.Wartortle ],
  [ PokemonType.Water ],
);
new class BlastoiseVariety extends Variety {}(
  PokemonVariety.Blastoise,
  PokemonSpecies.Blastoise,
  [ PokemonForm.Blastoise ],
  [ PokemonType.Water ],
);
new class BlastoiseMegaVariety extends Variety {}(
  PokemonVariety.BlastoiseMega,
  PokemonSpecies.Blastoise,
  [ PokemonForm.BlastoiseMega ],
  [ PokemonType.Water ],
);
new class BlastoiseGmaxVariety extends Variety {}(
  PokemonVariety.BlastoiseGmax,
  PokemonSpecies.Blastoise,
  [ PokemonForm.BlastoiseGmax ],
  [ PokemonType.Water ],
);
new class CaterpieVariety extends Variety {}(
  PokemonVariety.Caterpie,
  PokemonSpecies.Caterpie,
  [ PokemonForm.Caterpie ],
  [ PokemonType.Bug ],
);
new class MetapodVariety extends Variety {}(
  PokemonVariety.Metapod,
  PokemonSpecies.Metapod,
  [ PokemonForm.Metapod ],
  [ PokemonType.Bug ],
);
new class ButterfreeVariety extends Variety {}(
  PokemonVariety.Butterfree,
  PokemonSpecies.Butterfree,
  [ PokemonForm.Butterfree ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class ButterfreeGmaxVariety extends Variety {}(
  PokemonVariety.ButterfreeGmax,
  PokemonSpecies.Butterfree,
  [ PokemonForm.ButterfreeGmax ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class WeedleVariety extends Variety {}(
  PokemonVariety.Weedle,
  PokemonSpecies.Weedle,
  [ PokemonForm.Weedle ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class KakunaVariety extends Variety {}(
  PokemonVariety.Kakuna,
  PokemonSpecies.Kakuna,
  [ PokemonForm.Kakuna ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class BeedrillVariety extends Variety {}(
  PokemonVariety.Beedrill,
  PokemonSpecies.Beedrill,
  [ PokemonForm.Beedrill ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class BeedrillMegaVariety extends Variety {}(
  PokemonVariety.BeedrillMega,
  PokemonSpecies.Beedrill,
  [ PokemonForm.BeedrillMega ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class PidgeyVariety extends Variety {}(
  PokemonVariety.Pidgey,
  PokemonSpecies.Pidgey,
  [ PokemonForm.Pidgey ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class PidgeottoVariety extends Variety {}(
  PokemonVariety.Pidgeotto,
  PokemonSpecies.Pidgeotto,
  [ PokemonForm.Pidgeotto ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class PidgeotVariety extends Variety {}(
  PokemonVariety.Pidgeot,
  PokemonSpecies.Pidgeot,
  [ PokemonForm.Pidgeot ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class PidgeotMegaVariety extends Variety {}(
  PokemonVariety.PidgeotMega,
  PokemonSpecies.Pidgeot,
  [ PokemonForm.PidgeotMega ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class RattataVariety extends Variety {}(
  PokemonVariety.Rattata,
  PokemonSpecies.Rattata,
  [ PokemonForm.Rattata ],
  [ PokemonType.Normal ],
);
new class RattataAlolaVariety extends Variety {}(
  PokemonVariety.RattataAlola,
  PokemonSpecies.Rattata,
  [ PokemonForm.RattataAlola ],
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class RaticateVariety extends Variety {}(
  PokemonVariety.Raticate,
  PokemonSpecies.Raticate,
  [ PokemonForm.Raticate ],
  [ PokemonType.Normal ],
);
new class RaticateAlolaVariety extends Variety {}(
  PokemonVariety.RaticateAlola,
  PokemonSpecies.Raticate,
  [ PokemonForm.RaticateAlola ],
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class RaticateTotemAlolaVariety extends Variety {}(
  PokemonVariety.RaticateTotemAlola,
  PokemonSpecies.Raticate,
  [ PokemonForm.RaticateTotemAlola ],
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class SpearowVariety extends Variety {}(
  PokemonVariety.Spearow,
  PokemonSpecies.Spearow,
  [ PokemonForm.Spearow ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class FearowVariety extends Variety {}(
  PokemonVariety.Fearow,
  PokemonSpecies.Fearow,
  [ PokemonForm.Fearow ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class EkansVariety extends Variety {}(
  PokemonVariety.Ekans,
  PokemonSpecies.Ekans,
  [ PokemonForm.Ekans ],
  [ PokemonType.Poison ],
);
new class ArbokVariety extends Variety {}(
  PokemonVariety.Arbok,
  PokemonSpecies.Arbok,
  [ PokemonForm.Arbok ],
  [ PokemonType.Poison ],
);
new class PikachuVariety extends Variety {}(
  PokemonVariety.Pikachu,
  PokemonSpecies.Pikachu,
  [ PokemonForm.Pikachu ],
  [ PokemonType.Electric ],
);
new class PikachuRockStarVariety extends Variety {}(
  PokemonVariety.PikachuRockStar,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuRockStar ],
  [ PokemonType.Electric ],
);
new class PikachuBelleVariety extends Variety {}(
  PokemonVariety.PikachuBelle,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuBelle ],
  [ PokemonType.Electric ],
);
new class PikachuPopStarVariety extends Variety {}(
  PokemonVariety.PikachuPopStar,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuPopStar ],
  [ PokemonType.Electric ],
);
new class PikachuPhdVariety extends Variety {}(
  PokemonVariety.PikachuPhd,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuPhd ],
  [ PokemonType.Electric ],
);
new class PikachuLibreVariety extends Variety {}(
  PokemonVariety.PikachuLibre,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuLibre ],
  [ PokemonType.Electric ],
);
new class PikachuCosplayVariety extends Variety {}(
  PokemonVariety.PikachuCosplay,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuCosplay ],
  [ PokemonType.Electric ],
);
new class PikachuOriginalCapVariety extends Variety {}(
  PokemonVariety.PikachuOriginalCap,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuOriginalCap ],
  [ PokemonType.Electric ],
);
new class PikachuHoennCapVariety extends Variety {}(
  PokemonVariety.PikachuHoennCap,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuHoennCap ],
  [ PokemonType.Electric ],
);
new class PikachuSinnohCapVariety extends Variety {}(
  PokemonVariety.PikachuSinnohCap,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuSinnohCap ],
  [ PokemonType.Electric ],
);
new class PikachuUnovaCapVariety extends Variety {}(
  PokemonVariety.PikachuUnovaCap,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuUnovaCap ],
  [ PokemonType.Electric ],
);
new class PikachuKalosCapVariety extends Variety {}(
  PokemonVariety.PikachuKalosCap,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuKalosCap ],
  [ PokemonType.Electric ],
);
new class PikachuAlolaCapVariety extends Variety {}(
  PokemonVariety.PikachuAlolaCap,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuAlolaCap ],
  [ PokemonType.Electric ],
);
new class PikachuPartnerCapVariety extends Variety {}(
  PokemonVariety.PikachuPartnerCap,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuPartnerCap ],
  [ PokemonType.Electric ],
);
new class PikachuStarterVariety extends Variety {}(
  PokemonVariety.PikachuStarter,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuStarter ],
  [ PokemonType.Electric ],
);
new class PikachuWorldCapVariety extends Variety {}(
  PokemonVariety.PikachuWorldCap,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuWorldCap ],
  [ PokemonType.Electric ],
);
new class PikachuGmaxVariety extends Variety {}(
  PokemonVariety.PikachuGmax,
  PokemonSpecies.Pikachu,
  [ PokemonForm.PikachuGmax ],
  [ PokemonType.Electric ],
);
new class RaichuVariety extends Variety {}(
  PokemonVariety.Raichu,
  PokemonSpecies.Raichu,
  [ PokemonForm.Raichu ],
  [ PokemonType.Electric ],
);
new class RaichuAlolaVariety extends Variety {}(
  PokemonVariety.RaichuAlola,
  PokemonSpecies.Raichu,
  [ PokemonForm.RaichuAlola ],
  [ PokemonType.Electric, PokemonType.Psychic ],
);
new class SandshrewVariety extends Variety {}(
  PokemonVariety.Sandshrew,
  PokemonSpecies.Sandshrew,
  [ PokemonForm.Sandshrew ],
  [ PokemonType.Ground ],
);
new class SandshrewAlolaVariety extends Variety {}(
  PokemonVariety.SandshrewAlola,
  PokemonSpecies.Sandshrew,
  [ PokemonForm.SandshrewAlola ],
  [ PokemonType.Ice, PokemonType.Steel ],
);
new class SandslashVariety extends Variety {}(
  PokemonVariety.Sandslash,
  PokemonSpecies.Sandslash,
  [ PokemonForm.Sandslash ],
  [ PokemonType.Ground ],
);
new class SandslashAlolaVariety extends Variety {}(
  PokemonVariety.SandslashAlola,
  PokemonSpecies.Sandslash,
  [ PokemonForm.SandslashAlola ],
  [ PokemonType.Ice, PokemonType.Steel ],
);
new class NidoranFVariety extends Variety {}(
  PokemonVariety.NidoranF,
  PokemonSpecies.NidoranF,
  [ PokemonForm.NidoranF ],
  [ PokemonType.Poison ],
);
new class NidorinaVariety extends Variety {}(
  PokemonVariety.Nidorina,
  PokemonSpecies.Nidorina,
  [ PokemonForm.Nidorina ],
  [ PokemonType.Poison ],
);
new class NidoqueenVariety extends Variety {}(
  PokemonVariety.Nidoqueen,
  PokemonSpecies.Nidoqueen,
  [ PokemonForm.Nidoqueen ],
  [ PokemonType.Poison, PokemonType.Ground ],
);
new class NidoranMVariety extends Variety {}(
  PokemonVariety.NidoranM,
  PokemonSpecies.NidoranM,
  [ PokemonForm.NidoranM ],
  [ PokemonType.Poison ],
);
new class NidorinoVariety extends Variety {}(
  PokemonVariety.Nidorino,
  PokemonSpecies.Nidorino,
  [ PokemonForm.Nidorino ],
  [ PokemonType.Poison ],
);
new class NidokingVariety extends Variety {}(
  PokemonVariety.Nidoking,
  PokemonSpecies.Nidoking,
  [ PokemonForm.Nidoking ],
  [ PokemonType.Poison, PokemonType.Ground ],
);
new class ClefairyVariety extends Variety {}(
  PokemonVariety.Clefairy,
  PokemonSpecies.Clefairy,
  [ PokemonForm.Clefairy ],
  [ PokemonType.Fairy ],
);
new class ClefableVariety extends Variety {}(
  PokemonVariety.Clefable,
  PokemonSpecies.Clefable,
  [ PokemonForm.Clefable ],
  [ PokemonType.Fairy ],
);
new class VulpixVariety extends Variety {}(
  PokemonVariety.Vulpix,
  PokemonSpecies.Vulpix,
  [ PokemonForm.Vulpix ],
  [ PokemonType.Fire ],
);
new class VulpixAlolaVariety extends Variety {}(
  PokemonVariety.VulpixAlola,
  PokemonSpecies.Vulpix,
  [ PokemonForm.VulpixAlola ],
  [ PokemonType.Ice ],
);
new class NinetalesVariety extends Variety {}(
  PokemonVariety.Ninetales,
  PokemonSpecies.Ninetales,
  [ PokemonForm.Ninetales ],
  [ PokemonType.Fire ],
);
new class NinetalesAlolaVariety extends Variety {}(
  PokemonVariety.NinetalesAlola,
  PokemonSpecies.Ninetales,
  [ PokemonForm.NinetalesAlola ],
  [ PokemonType.Ice, PokemonType.Fairy ],
);
new class JigglypuffVariety extends Variety {}(
  PokemonVariety.Jigglypuff,
  PokemonSpecies.Jigglypuff,
  [ PokemonForm.Jigglypuff ],
  [ PokemonType.Normal, PokemonType.Fairy ],
);
new class WigglytuffVariety extends Variety {}(
  PokemonVariety.Wigglytuff,
  PokemonSpecies.Wigglytuff,
  [ PokemonForm.Wigglytuff ],
  [ PokemonType.Normal, PokemonType.Fairy ],
);
new class ZubatVariety extends Variety {}(
  PokemonVariety.Zubat,
  PokemonSpecies.Zubat,
  [ PokemonForm.Zubat ],
  [ PokemonType.Poison, PokemonType.Flying ],
);
new class GolbatVariety extends Variety {}(
  PokemonVariety.Golbat,
  PokemonSpecies.Golbat,
  [ PokemonForm.Golbat ],
  [ PokemonType.Poison, PokemonType.Flying ],
);
new class OddishVariety extends Variety {}(
  PokemonVariety.Oddish,
  PokemonSpecies.Oddish,
  [ PokemonForm.Oddish ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class GloomVariety extends Variety {}(
  PokemonVariety.Gloom,
  PokemonSpecies.Gloom,
  [ PokemonForm.Gloom ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class VileplumeVariety extends Variety {}(
  PokemonVariety.Vileplume,
  PokemonSpecies.Vileplume,
  [ PokemonForm.Vileplume ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class ParasVariety extends Variety {}(
  PokemonVariety.Paras,
  PokemonSpecies.Paras,
  [ PokemonForm.Paras ],
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class ParasectVariety extends Variety {}(
  PokemonVariety.Parasect,
  PokemonSpecies.Parasect,
  [ PokemonForm.Parasect ],
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class VenonatVariety extends Variety {}(
  PokemonVariety.Venonat,
  PokemonSpecies.Venonat,
  [ PokemonForm.Venonat ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class VenomothVariety extends Variety {}(
  PokemonVariety.Venomoth,
  PokemonSpecies.Venomoth,
  [ PokemonForm.Venomoth ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class DiglettVariety extends Variety {}(
  PokemonVariety.Diglett,
  PokemonSpecies.Diglett,
  [ PokemonForm.Diglett ],
  [ PokemonType.Ground ],
);
new class DiglettAlolaVariety extends Variety {}(
  PokemonVariety.DiglettAlola,
  PokemonSpecies.Diglett,
  [ PokemonForm.DiglettAlola ],
  [ PokemonType.Ground, PokemonType.Steel ],
);
new class DugtrioVariety extends Variety {}(
  PokemonVariety.Dugtrio,
  PokemonSpecies.Dugtrio,
  [ PokemonForm.Dugtrio ],
  [ PokemonType.Ground ],
);
new class DugtrioAlolaVariety extends Variety {}(
  PokemonVariety.DugtrioAlola,
  PokemonSpecies.Dugtrio,
  [ PokemonForm.DugtrioAlola ],
  [ PokemonType.Ground, PokemonType.Steel ],
);
new class MeowthVariety extends Variety {}(
  PokemonVariety.Meowth,
  PokemonSpecies.Meowth,
  [ PokemonForm.Meowth ],
  [ PokemonType.Normal ],
);
new class MeowthAlolaVariety extends Variety {}(
  PokemonVariety.MeowthAlola,
  PokemonSpecies.Meowth,
  [ PokemonForm.MeowthAlola ],
  [ PokemonType.Dark ],
);
new class MeowthGalarVariety extends Variety {}(
  PokemonVariety.MeowthGalar,
  PokemonSpecies.Meowth,
  [ PokemonForm.MeowthGalar ],
  [ PokemonType.Steel ],
);
new class MeowthGmaxVariety extends Variety {}(
  PokemonVariety.MeowthGmax,
  PokemonSpecies.Meowth,
  [ PokemonForm.MeowthGmax ],
  [ PokemonType.Normal ],
);
new class PersianVariety extends Variety {}(
  PokemonVariety.Persian,
  PokemonSpecies.Persian,
  [ PokemonForm.Persian ],
  [ PokemonType.Normal ],
);
new class PersianAlolaVariety extends Variety {}(
  PokemonVariety.PersianAlola,
  PokemonSpecies.Persian,
  [ PokemonForm.PersianAlola ],
  [ PokemonType.Dark ],
);
new class PsyduckVariety extends Variety {}(
  PokemonVariety.Psyduck,
  PokemonSpecies.Psyduck,
  [ PokemonForm.Psyduck ],
  [ PokemonType.Water ],
);
new class GolduckVariety extends Variety {}(
  PokemonVariety.Golduck,
  PokemonSpecies.Golduck,
  [ PokemonForm.Golduck ],
  [ PokemonType.Water ],
);
new class MankeyVariety extends Variety {}(
  PokemonVariety.Mankey,
  PokemonSpecies.Mankey,
  [ PokemonForm.Mankey ],
  [ PokemonType.Fighting ],
);
new class PrimeapeVariety extends Variety {}(
  PokemonVariety.Primeape,
  PokemonSpecies.Primeape,
  [ PokemonForm.Primeape ],
  [ PokemonType.Fighting ],
);
new class GrowlitheVariety extends Variety {}(
  PokemonVariety.Growlithe,
  PokemonSpecies.Growlithe,
  [ PokemonForm.Growlithe ],
  [ PokemonType.Fire ],
);
new class GrowlitheHisuiVariety extends Variety {}(
  PokemonVariety.GrowlitheHisui,
  PokemonSpecies.Growlithe,
  [ PokemonForm.GrowlitheHisui ],
  [ PokemonType.Fire, PokemonType.Rock ],
);
new class ArcanineVariety extends Variety {}(
  PokemonVariety.Arcanine,
  PokemonSpecies.Arcanine,
  [ PokemonForm.Arcanine ],
  [ PokemonType.Fire ],
);
new class ArcanineHisuiVariety extends Variety {}(
  PokemonVariety.ArcanineHisui,
  PokemonSpecies.Arcanine,
  [ PokemonForm.ArcanineHisui ],
  [ PokemonType.Fire, PokemonType.Rock ],
);
new class PoliwagVariety extends Variety {}(
  PokemonVariety.Poliwag,
  PokemonSpecies.Poliwag,
  [ PokemonForm.Poliwag ],
  [ PokemonType.Water ],
);
new class PoliwhirlVariety extends Variety {}(
  PokemonVariety.Poliwhirl,
  PokemonSpecies.Poliwhirl,
  [ PokemonForm.Poliwhirl ],
  [ PokemonType.Water ],
);
new class PoliwrathVariety extends Variety {}(
  PokemonVariety.Poliwrath,
  PokemonSpecies.Poliwrath,
  [ PokemonForm.Poliwrath ],
  [ PokemonType.Water, PokemonType.Fighting ],
);
new class AbraVariety extends Variety {}(
  PokemonVariety.Abra,
  PokemonSpecies.Abra,
  [ PokemonForm.Abra ],
  [ PokemonType.Psychic ],
);
new class KadabraVariety extends Variety {}(
  PokemonVariety.Kadabra,
  PokemonSpecies.Kadabra,
  [ PokemonForm.Kadabra ],
  [ PokemonType.Psychic ],
);
new class AlakazamVariety extends Variety {}(
  PokemonVariety.Alakazam,
  PokemonSpecies.Alakazam,
  [ PokemonForm.Alakazam ],
  [ PokemonType.Psychic ],
);
new class AlakazamMegaVariety extends Variety {}(
  PokemonVariety.AlakazamMega,
  PokemonSpecies.Alakazam,
  [ PokemonForm.AlakazamMega ],
  [ PokemonType.Psychic ],
);
new class MachopVariety extends Variety {}(
  PokemonVariety.Machop,
  PokemonSpecies.Machop,
  [ PokemonForm.Machop ],
  [ PokemonType.Fighting ],
);
new class MachokeVariety extends Variety {}(
  PokemonVariety.Machoke,
  PokemonSpecies.Machoke,
  [ PokemonForm.Machoke ],
  [ PokemonType.Fighting ],
);
new class MachampVariety extends Variety {}(
  PokemonVariety.Machamp,
  PokemonSpecies.Machamp,
  [ PokemonForm.Machamp ],
  [ PokemonType.Fighting ],
);
new class MachampGmaxVariety extends Variety {}(
  PokemonVariety.MachampGmax,
  PokemonSpecies.Machamp,
  [ PokemonForm.MachampGmax ],
  [ PokemonType.Fighting ],
);
new class BellsproutVariety extends Variety {}(
  PokemonVariety.Bellsprout,
  PokemonSpecies.Bellsprout,
  [ PokemonForm.Bellsprout ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class WeepinbellVariety extends Variety {}(
  PokemonVariety.Weepinbell,
  PokemonSpecies.Weepinbell,
  [ PokemonForm.Weepinbell ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class VictreebelVariety extends Variety {}(
  PokemonVariety.Victreebel,
  PokemonSpecies.Victreebel,
  [ PokemonForm.Victreebel ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class TentacoolVariety extends Variety {}(
  PokemonVariety.Tentacool,
  PokemonSpecies.Tentacool,
  [ PokemonForm.Tentacool ],
  [ PokemonType.Water, PokemonType.Poison ],
);
new class TentacruelVariety extends Variety {}(
  PokemonVariety.Tentacruel,
  PokemonSpecies.Tentacruel,
  [ PokemonForm.Tentacruel ],
  [ PokemonType.Water, PokemonType.Poison ],
);
new class GeodudeVariety extends Variety {}(
  PokemonVariety.Geodude,
  PokemonSpecies.Geodude,
  [ PokemonForm.Geodude ],
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class GeodudeAlolaVariety extends Variety {}(
  PokemonVariety.GeodudeAlola,
  PokemonSpecies.Geodude,
  [ PokemonForm.GeodudeAlola ],
  [ PokemonType.Rock, PokemonType.Electric ],
);
new class GravelerVariety extends Variety {}(
  PokemonVariety.Graveler,
  PokemonSpecies.Graveler,
  [ PokemonForm.Graveler ],
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class GravelerAlolaVariety extends Variety {}(
  PokemonVariety.GravelerAlola,
  PokemonSpecies.Graveler,
  [ PokemonForm.GravelerAlola ],
  [ PokemonType.Rock, PokemonType.Electric ],
);
new class GolemVariety extends Variety {}(
  PokemonVariety.Golem,
  PokemonSpecies.Golem,
  [ PokemonForm.Golem ],
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class GolemAlolaVariety extends Variety {}(
  PokemonVariety.GolemAlola,
  PokemonSpecies.Golem,
  [ PokemonForm.GolemAlola ],
  [ PokemonType.Rock, PokemonType.Electric ],
);
new class PonytaVariety extends Variety {}(
  PokemonVariety.Ponyta,
  PokemonSpecies.Ponyta,
  [ PokemonForm.Ponyta ],
  [ PokemonType.Fire ],
);
new class PonytaGalarVariety extends Variety {}(
  PokemonVariety.PonytaGalar,
  PokemonSpecies.Ponyta,
  [ PokemonForm.PonytaGalar ],
  [ PokemonType.Psychic ],
);
new class RapidashVariety extends Variety {}(
  PokemonVariety.Rapidash,
  PokemonSpecies.Rapidash,
  [ PokemonForm.Rapidash ],
  [ PokemonType.Fire ],
);
new class RapidashGalarVariety extends Variety {}(
  PokemonVariety.RapidashGalar,
  PokemonSpecies.Rapidash,
  [ PokemonForm.RapidashGalar ],
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class SlowpokeVariety extends Variety {}(
  PokemonVariety.Slowpoke,
  PokemonSpecies.Slowpoke,
  [ PokemonForm.Slowpoke ],
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class SlowpokeGalarVariety extends Variety {}(
  PokemonVariety.SlowpokeGalar,
  PokemonSpecies.Slowpoke,
  [ PokemonForm.SlowpokeGalar ],
  [ PokemonType.Psychic ],
);
new class SlowbroVariety extends Variety {}(
  PokemonVariety.Slowbro,
  PokemonSpecies.Slowbro,
  [ PokemonForm.Slowbro ],
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class SlowbroMegaVariety extends Variety {}(
  PokemonVariety.SlowbroMega,
  PokemonSpecies.Slowbro,
  [ PokemonForm.SlowbroMega ],
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class SlowbroGalarVariety extends Variety {}(
  PokemonVariety.SlowbroGalar,
  PokemonSpecies.Slowbro,
  [ PokemonForm.SlowbroGalar ],
  [ PokemonType.Poison, PokemonType.Psychic ],
);
new class MagnemiteVariety extends Variety {}(
  PokemonVariety.Magnemite,
  PokemonSpecies.Magnemite,
  [ PokemonForm.Magnemite ],
  [ PokemonType.Electric, PokemonType.Steel ],
);
new class MagnetonVariety extends Variety {}(
  PokemonVariety.Magneton,
  PokemonSpecies.Magneton,
  [ PokemonForm.Magneton ],
  [ PokemonType.Electric, PokemonType.Steel ],
);
new class FarfetchdVariety extends Variety {}(
  PokemonVariety.Farfetchd,
  PokemonSpecies.Farfetchd,
  [ PokemonForm.Farfetchd ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class FarfetchdGalarVariety extends Variety {}(
  PokemonVariety.FarfetchdGalar,
  PokemonSpecies.Farfetchd,
  [ PokemonForm.FarfetchdGalar ],
  [ PokemonType.Fighting ],
);
new class DoduoVariety extends Variety {}(
  PokemonVariety.Doduo,
  PokemonSpecies.Doduo,
  [ PokemonForm.Doduo ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class DodrioVariety extends Variety {}(
  PokemonVariety.Dodrio,
  PokemonSpecies.Dodrio,
  [ PokemonForm.Dodrio ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SeelVariety extends Variety {}(
  PokemonVariety.Seel,
  PokemonSpecies.Seel,
  [ PokemonForm.Seel ],
  [ PokemonType.Water ],
);
new class DewgongVariety extends Variety {}(
  PokemonVariety.Dewgong,
  PokemonSpecies.Dewgong,
  [ PokemonForm.Dewgong ],
  [ PokemonType.Water, PokemonType.Ice ],
);
new class GrimerVariety extends Variety {}(
  PokemonVariety.Grimer,
  PokemonSpecies.Grimer,
  [ PokemonForm.Grimer ],
  [ PokemonType.Poison ],
);
new class GrimerAlolaVariety extends Variety {}(
  PokemonVariety.GrimerAlola,
  PokemonSpecies.Grimer,
  [ PokemonForm.GrimerAlola ],
  [ PokemonType.Poison, PokemonType.Dark ],
);
new class MukVariety extends Variety {}(
  PokemonVariety.Muk,
  PokemonSpecies.Muk,
  [ PokemonForm.Muk ],
  [ PokemonType.Poison ],
);
new class MukAlolaVariety extends Variety {}(
  PokemonVariety.MukAlola,
  PokemonSpecies.Muk,
  [ PokemonForm.MukAlola ],
  [ PokemonType.Poison, PokemonType.Dark ],
);
new class ShellderVariety extends Variety {}(
  PokemonVariety.Shellder,
  PokemonSpecies.Shellder,
  [ PokemonForm.Shellder ],
  [ PokemonType.Water ],
);
new class CloysterVariety extends Variety {}(
  PokemonVariety.Cloyster,
  PokemonSpecies.Cloyster,
  [ PokemonForm.Cloyster ],
  [ PokemonType.Water, PokemonType.Ice ],
);
new class GastlyVariety extends Variety {}(
  PokemonVariety.Gastly,
  PokemonSpecies.Gastly,
  [ PokemonForm.Gastly ],
  [ PokemonType.Ghost, PokemonType.Poison ],
);
new class HaunterVariety extends Variety {}(
  PokemonVariety.Haunter,
  PokemonSpecies.Haunter,
  [ PokemonForm.Haunter ],
  [ PokemonType.Ghost, PokemonType.Poison ],
);
new class GengarVariety extends Variety {}(
  PokemonVariety.Gengar,
  PokemonSpecies.Gengar,
  [ PokemonForm.Gengar ],
  [ PokemonType.Ghost, PokemonType.Poison ],
);
new class GengarMegaVariety extends Variety {}(
  PokemonVariety.GengarMega,
  PokemonSpecies.Gengar,
  [ PokemonForm.GengarMega ],
  [ PokemonType.Ghost, PokemonType.Poison ],
);
new class GengarGmaxVariety extends Variety {}(
  PokemonVariety.GengarGmax,
  PokemonSpecies.Gengar,
  [ PokemonForm.GengarGmax ],
  [ PokemonType.Ghost, PokemonType.Poison ],
);
new class OnixVariety extends Variety {}(
  PokemonVariety.Onix,
  PokemonSpecies.Onix,
  [ PokemonForm.Onix ],
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class DrowzeeVariety extends Variety {}(
  PokemonVariety.Drowzee,
  PokemonSpecies.Drowzee,
  [ PokemonForm.Drowzee ],
  [ PokemonType.Psychic ],
);
new class HypnoVariety extends Variety {}(
  PokemonVariety.Hypno,
  PokemonSpecies.Hypno,
  [ PokemonForm.Hypno ],
  [ PokemonType.Psychic ],
);
new class KrabbyVariety extends Variety {}(
  PokemonVariety.Krabby,
  PokemonSpecies.Krabby,
  [ PokemonForm.Krabby ],
  [ PokemonType.Water ],
);
new class KinglerVariety extends Variety {}(
  PokemonVariety.Kingler,
  PokemonSpecies.Kingler,
  [ PokemonForm.Kingler ],
  [ PokemonType.Water ],
);
new class KinglerGmaxVariety extends Variety {}(
  PokemonVariety.KinglerGmax,
  PokemonSpecies.Kingler,
  [ PokemonForm.KinglerGmax ],
  [ PokemonType.Water ],
);
new class VoltorbVariety extends Variety {}(
  PokemonVariety.Voltorb,
  PokemonSpecies.Voltorb,
  [ PokemonForm.Voltorb ],
  [ PokemonType.Electric ],
);
new class VoltorbHisuiVariety extends Variety {}(
  PokemonVariety.VoltorbHisui,
  PokemonSpecies.Voltorb,
  [ PokemonForm.VoltorbHisui ],
  [ PokemonType.Electric, PokemonType.Grass ],
);
new class ElectrodeVariety extends Variety {}(
  PokemonVariety.Electrode,
  PokemonSpecies.Electrode,
  [ PokemonForm.Electrode ],
  [ PokemonType.Electric ],
);
new class ElectrodeHisuiVariety extends Variety {}(
  PokemonVariety.ElectrodeHisui,
  PokemonSpecies.Electrode,
  [ PokemonForm.ElectrodeHisui ],
  [ PokemonType.Electric, PokemonType.Grass ],
);
new class ExeggcuteVariety extends Variety {}(
  PokemonVariety.Exeggcute,
  PokemonSpecies.Exeggcute,
  [ PokemonForm.Exeggcute ],
  [ PokemonType.Grass, PokemonType.Psychic ],
);
new class ExeggutorVariety extends Variety {}(
  PokemonVariety.Exeggutor,
  PokemonSpecies.Exeggutor,
  [ PokemonForm.Exeggutor ],
  [ PokemonType.Grass, PokemonType.Psychic ],
);
new class ExeggutorAlolaVariety extends Variety {}(
  PokemonVariety.ExeggutorAlola,
  PokemonSpecies.Exeggutor,
  [ PokemonForm.ExeggutorAlola ],
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class CuboneVariety extends Variety {}(
  PokemonVariety.Cubone,
  PokemonSpecies.Cubone,
  [ PokemonForm.Cubone ],
  [ PokemonType.Ground ],
);
new class MarowakVariety extends Variety {}(
  PokemonVariety.Marowak,
  PokemonSpecies.Marowak,
  [ PokemonForm.Marowak ],
  [ PokemonType.Ground ],
);
new class MarowakAlolaVariety extends Variety {}(
  PokemonVariety.MarowakAlola,
  PokemonSpecies.Marowak,
  [ PokemonForm.MarowakAlola ],
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class MarowakTotemVariety extends Variety {}(
  PokemonVariety.MarowakTotem,
  PokemonSpecies.Marowak,
  [ PokemonForm.MarowakTotem ],
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class HitmonleeVariety extends Variety {}(
  PokemonVariety.Hitmonlee,
  PokemonSpecies.Hitmonlee,
  [ PokemonForm.Hitmonlee ],
  [ PokemonType.Fighting ],
);
new class HitmonchanVariety extends Variety {}(
  PokemonVariety.Hitmonchan,
  PokemonSpecies.Hitmonchan,
  [ PokemonForm.Hitmonchan ],
  [ PokemonType.Fighting ],
);
new class LickitungVariety extends Variety {}(
  PokemonVariety.Lickitung,
  PokemonSpecies.Lickitung,
  [ PokemonForm.Lickitung ],
  [ PokemonType.Normal ],
);
new class KoffingVariety extends Variety {}(
  PokemonVariety.Koffing,
  PokemonSpecies.Koffing,
  [ PokemonForm.Koffing ],
  [ PokemonType.Poison ],
);
new class WeezingVariety extends Variety {}(
  PokemonVariety.Weezing,
  PokemonSpecies.Weezing,
  [ PokemonForm.Weezing ],
  [ PokemonType.Poison ],
);
new class WeezingGalarVariety extends Variety {}(
  PokemonVariety.WeezingGalar,
  PokemonSpecies.Weezing,
  [ PokemonForm.WeezingGalar ],
  [ PokemonType.Poison, PokemonType.Fairy ],
);
new class RhyhornVariety extends Variety {}(
  PokemonVariety.Rhyhorn,
  PokemonSpecies.Rhyhorn,
  [ PokemonForm.Rhyhorn ],
  [ PokemonType.Ground, PokemonType.Rock ],
);
new class RhydonVariety extends Variety {}(
  PokemonVariety.Rhydon,
  PokemonSpecies.Rhydon,
  [ PokemonForm.Rhydon ],
  [ PokemonType.Ground, PokemonType.Rock ],
);
new class ChanseyVariety extends Variety {}(
  PokemonVariety.Chansey,
  PokemonSpecies.Chansey,
  [ PokemonForm.Chansey ],
  [ PokemonType.Normal ],
);
new class TangelaVariety extends Variety {}(
  PokemonVariety.Tangela,
  PokemonSpecies.Tangela,
  [ PokemonForm.Tangela ],
  [ PokemonType.Grass ],
);
new class KangaskhanVariety extends Variety {}(
  PokemonVariety.Kangaskhan,
  PokemonSpecies.Kangaskhan,
  [ PokemonForm.Kangaskhan ],
  [ PokemonType.Normal ],
);
new class KangaskhanMegaVariety extends Variety {}(
  PokemonVariety.KangaskhanMega,
  PokemonSpecies.Kangaskhan,
  [ PokemonForm.KangaskhanMega ],
  [ PokemonType.Normal ],
);
new class HorseaVariety extends Variety {}(
  PokemonVariety.Horsea,
  PokemonSpecies.Horsea,
  [ PokemonForm.Horsea ],
  [ PokemonType.Water ],
);
new class SeadraVariety extends Variety {}(
  PokemonVariety.Seadra,
  PokemonSpecies.Seadra,
  [ PokemonForm.Seadra ],
  [ PokemonType.Water ],
);
new class GoldeenVariety extends Variety {}(
  PokemonVariety.Goldeen,
  PokemonSpecies.Goldeen,
  [ PokemonForm.Goldeen ],
  [ PokemonType.Water ],
);
new class SeakingVariety extends Variety {}(
  PokemonVariety.Seaking,
  PokemonSpecies.Seaking,
  [ PokemonForm.Seaking ],
  [ PokemonType.Water ],
);
new class StaryuVariety extends Variety {}(
  PokemonVariety.Staryu,
  PokemonSpecies.Staryu,
  [ PokemonForm.Staryu ],
  [ PokemonType.Water ],
);
new class StarmieVariety extends Variety {}(
  PokemonVariety.Starmie,
  PokemonSpecies.Starmie,
  [ PokemonForm.Starmie ],
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class MrMimeVariety extends Variety {}(
  PokemonVariety.MrMime,
  PokemonSpecies.MrMime,
  [ PokemonForm.MrMime ],
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class MrMimeGalarVariety extends Variety {}(
  PokemonVariety.MrMimeGalar,
  PokemonSpecies.MrMime,
  [ PokemonForm.MrMimeGalar ],
  [ PokemonType.Ice, PokemonType.Psychic ],
);
new class ScytherVariety extends Variety {}(
  PokemonVariety.Scyther,
  PokemonSpecies.Scyther,
  [ PokemonForm.Scyther ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class JynxVariety extends Variety {}(
  PokemonVariety.Jynx,
  PokemonSpecies.Jynx,
  [ PokemonForm.Jynx ],
  [ PokemonType.Ice, PokemonType.Psychic ],
);
new class ElectabuzzVariety extends Variety {}(
  PokemonVariety.Electabuzz,
  PokemonSpecies.Electabuzz,
  [ PokemonForm.Electabuzz ],
  [ PokemonType.Electric ],
);
new class MagmarVariety extends Variety {}(
  PokemonVariety.Magmar,
  PokemonSpecies.Magmar,
  [ PokemonForm.Magmar ],
  [ PokemonType.Fire ],
);
new class PinsirVariety extends Variety {}(
  PokemonVariety.Pinsir,
  PokemonSpecies.Pinsir,
  [ PokemonForm.Pinsir ],
  [ PokemonType.Bug ],
);
new class PinsirMegaVariety extends Variety {}(
  PokemonVariety.PinsirMega,
  PokemonSpecies.Pinsir,
  [ PokemonForm.PinsirMega ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class TaurosVariety extends Variety {}(
  PokemonVariety.Tauros,
  PokemonSpecies.Tauros,
  [ PokemonForm.Tauros ],
  [ PokemonType.Normal ],
);
new class TaurosPaldeaCombatBreedVariety extends Variety {}(
  PokemonVariety.TaurosPaldeaCombatBreed,
  PokemonSpecies.Tauros,
  [ PokemonForm.TaurosPaldeaCombatBreed ],
  [ PokemonType.Fighting ],
);
new class TaurosPaldeaBlazeBreedVariety extends Variety {}(
  PokemonVariety.TaurosPaldeaBlazeBreed,
  PokemonSpecies.Tauros,
  [ PokemonForm.TaurosPaldeaBlazeBreed ],
  [ PokemonType.Fighting, PokemonType.Fire ],
);
new class TaurosPaldeaAquaBreedVariety extends Variety {}(
  PokemonVariety.TaurosPaldeaAquaBreed,
  PokemonSpecies.Tauros,
  [ PokemonForm.TaurosPaldeaAquaBreed ],
  [ PokemonType.Fighting, PokemonType.Water ],
);
new class MagikarpVariety extends Variety {}(
  PokemonVariety.Magikarp,
  PokemonSpecies.Magikarp,
  [ PokemonForm.Magikarp ],
  [ PokemonType.Water ],
);
new class GyaradosVariety extends Variety {}(
  PokemonVariety.Gyarados,
  PokemonSpecies.Gyarados,
  [ PokemonForm.Gyarados ],
  [ PokemonType.Water, PokemonType.Flying ],
);
new class GyaradosMegaVariety extends Variety {}(
  PokemonVariety.GyaradosMega,
  PokemonSpecies.Gyarados,
  [ PokemonForm.GyaradosMega ],
  [ PokemonType.Water, PokemonType.Dark ],
);
new class LaprasVariety extends Variety {}(
  PokemonVariety.Lapras,
  PokemonSpecies.Lapras,
  [ PokemonForm.Lapras ],
  [ PokemonType.Water, PokemonType.Ice ],
);
new class LaprasGmaxVariety extends Variety {}(
  PokemonVariety.LaprasGmax,
  PokemonSpecies.Lapras,
  [ PokemonForm.LaprasGmax ],
  [ PokemonType.Water, PokemonType.Ice ],
);
new class DittoVariety extends Variety {}(
  PokemonVariety.Ditto,
  PokemonSpecies.Ditto,
  [ PokemonForm.Ditto ],
  [ PokemonType.Normal ],
);
new class EeveeVariety extends Variety {}(
  PokemonVariety.Eevee,
  PokemonSpecies.Eevee,
  [ PokemonForm.Eevee ],
  [ PokemonType.Normal ],
);
new class EeveeStarterVariety extends Variety {}(
  PokemonVariety.EeveeStarter,
  PokemonSpecies.Eevee,
  [ PokemonForm.EeveeStarter ],
  [ PokemonType.Normal ],
);
new class EeveeGmaxVariety extends Variety {}(
  PokemonVariety.EeveeGmax,
  PokemonSpecies.Eevee,
  [ PokemonForm.EeveeGmax ],
  [ PokemonType.Normal ],
);
new class VaporeonVariety extends Variety {}(
  PokemonVariety.Vaporeon,
  PokemonSpecies.Vaporeon,
  [ PokemonForm.Vaporeon ],
  [ PokemonType.Water ],
);
new class JolteonVariety extends Variety {}(
  PokemonVariety.Jolteon,
  PokemonSpecies.Jolteon,
  [ PokemonForm.Jolteon ],
  [ PokemonType.Electric ],
);
new class FlareonVariety extends Variety {}(
  PokemonVariety.Flareon,
  PokemonSpecies.Flareon,
  [ PokemonForm.Flareon ],
  [ PokemonType.Fire ],
);
new class PorygonVariety extends Variety {}(
  PokemonVariety.Porygon,
  PokemonSpecies.Porygon,
  [ PokemonForm.Porygon ],
  [ PokemonType.Normal ],
);
new class OmanyteVariety extends Variety {}(
  PokemonVariety.Omanyte,
  PokemonSpecies.Omanyte,
  [ PokemonForm.Omanyte ],
  [ PokemonType.Rock, PokemonType.Water ],
);
new class OmastarVariety extends Variety {}(
  PokemonVariety.Omastar,
  PokemonSpecies.Omastar,
  [ PokemonForm.Omastar ],
  [ PokemonType.Rock, PokemonType.Water ],
);
new class KabutoVariety extends Variety {}(
  PokemonVariety.Kabuto,
  PokemonSpecies.Kabuto,
  [ PokemonForm.Kabuto ],
  [ PokemonType.Rock, PokemonType.Water ],
);
new class KabutopsVariety extends Variety {}(
  PokemonVariety.Kabutops,
  PokemonSpecies.Kabutops,
  [ PokemonForm.Kabutops ],
  [ PokemonType.Rock, PokemonType.Water ],
);
new class AerodactylVariety extends Variety {}(
  PokemonVariety.Aerodactyl,
  PokemonSpecies.Aerodactyl,
  [ PokemonForm.Aerodactyl ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class AerodactylMegaVariety extends Variety {}(
  PokemonVariety.AerodactylMega,
  PokemonSpecies.Aerodactyl,
  [ PokemonForm.AerodactylMega ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class SnorlaxVariety extends Variety {}(
  PokemonVariety.Snorlax,
  PokemonSpecies.Snorlax,
  [ PokemonForm.Snorlax ],
  [ PokemonType.Normal ],
);
new class SnorlaxGmaxVariety extends Variety {}(
  PokemonVariety.SnorlaxGmax,
  PokemonSpecies.Snorlax,
  [ PokemonForm.SnorlaxGmax ],
  [ PokemonType.Normal ],
);
new class ArticunoVariety extends Variety {}(
  PokemonVariety.Articuno,
  PokemonSpecies.Articuno,
  [ PokemonForm.Articuno ],
  [ PokemonType.Ice, PokemonType.Flying ],
);
new class ArticunoGalarVariety extends Variety {}(
  PokemonVariety.ArticunoGalar,
  PokemonSpecies.Articuno,
  [ PokemonForm.ArticunoGalar ],
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class ZapdosVariety extends Variety {}(
  PokemonVariety.Zapdos,
  PokemonSpecies.Zapdos,
  [ PokemonForm.Zapdos ],
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class ZapdosGalarVariety extends Variety {}(
  PokemonVariety.ZapdosGalar,
  PokemonSpecies.Zapdos,
  [ PokemonForm.ZapdosGalar ],
  [ PokemonType.Fighting, PokemonType.Flying ],
);
new class MoltresVariety extends Variety {}(
  PokemonVariety.Moltres,
  PokemonSpecies.Moltres,
  [ PokemonForm.Moltres ],
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class MoltresGalarVariety extends Variety {}(
  PokemonVariety.MoltresGalar,
  PokemonSpecies.Moltres,
  [ PokemonForm.MoltresGalar ],
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class DratiniVariety extends Variety {}(
  PokemonVariety.Dratini,
  PokemonSpecies.Dratini,
  [ PokemonForm.Dratini ],
  [ PokemonType.Dragon ],
);
new class DragonairVariety extends Variety {}(
  PokemonVariety.Dragonair,
  PokemonSpecies.Dragonair,
  [ PokemonForm.Dragonair ],
  [ PokemonType.Dragon ],
);
new class DragoniteVariety extends Variety {}(
  PokemonVariety.Dragonite,
  PokemonSpecies.Dragonite,
  [ PokemonForm.Dragonite ],
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class MewtwoVariety extends Variety {}(
  PokemonVariety.Mewtwo,
  PokemonSpecies.Mewtwo,
  [ PokemonForm.Mewtwo ],
  [ PokemonType.Psychic ],
);
new class MewtwoMegaXVariety extends Variety {}(
  PokemonVariety.MewtwoMegaX,
  PokemonSpecies.Mewtwo,
  [ PokemonForm.MewtwoMegaX ],
  [ PokemonType.Psychic, PokemonType.Fighting ],
);
new class MewtwoMegaYVariety extends Variety {}(
  PokemonVariety.MewtwoMegaY,
  PokemonSpecies.Mewtwo,
  [ PokemonForm.MewtwoMegaY ],
  [ PokemonType.Psychic ],
);
new class MewVariety extends Variety {}(
  PokemonVariety.Mew,
  PokemonSpecies.Mew,
  [ PokemonForm.Mew ],
  [ PokemonType.Psychic ],
);
new class ChikoritaVariety extends Variety {}(
  PokemonVariety.Chikorita,
  PokemonSpecies.Chikorita,
  [ PokemonForm.Chikorita ],
  [ PokemonType.Grass ],
);
new class BayleefVariety extends Variety {}(
  PokemonVariety.Bayleef,
  PokemonSpecies.Bayleef,
  [ PokemonForm.Bayleef ],
  [ PokemonType.Grass ],
);
new class MeganiumVariety extends Variety {}(
  PokemonVariety.Meganium,
  PokemonSpecies.Meganium,
  [ PokemonForm.Meganium ],
  [ PokemonType.Grass ],
);
new class CyndaquilVariety extends Variety {}(
  PokemonVariety.Cyndaquil,
  PokemonSpecies.Cyndaquil,
  [ PokemonForm.Cyndaquil ],
  [ PokemonType.Fire ],
);
new class QuilavaVariety extends Variety {}(
  PokemonVariety.Quilava,
  PokemonSpecies.Quilava,
  [ PokemonForm.Quilava ],
  [ PokemonType.Fire ],
);
new class TyphlosionVariety extends Variety {}(
  PokemonVariety.Typhlosion,
  PokemonSpecies.Typhlosion,
  [ PokemonForm.Typhlosion ],
  [ PokemonType.Fire ],
);
new class TyphlosionHisuiVariety extends Variety {}(
  PokemonVariety.TyphlosionHisui,
  PokemonSpecies.Typhlosion,
  [ PokemonForm.TyphlosionHisui ],
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class TotodileVariety extends Variety {}(
  PokemonVariety.Totodile,
  PokemonSpecies.Totodile,
  [ PokemonForm.Totodile ],
  [ PokemonType.Water ],
);
new class CroconawVariety extends Variety {}(
  PokemonVariety.Croconaw,
  PokemonSpecies.Croconaw,
  [ PokemonForm.Croconaw ],
  [ PokemonType.Water ],
);
new class FeraligatrVariety extends Variety {}(
  PokemonVariety.Feraligatr,
  PokemonSpecies.Feraligatr,
  [ PokemonForm.Feraligatr ],
  [ PokemonType.Water ],
);
new class SentretVariety extends Variety {}(
  PokemonVariety.Sentret,
  PokemonSpecies.Sentret,
  [ PokemonForm.Sentret ],
  [ PokemonType.Normal ],
);
new class FurretVariety extends Variety {}(
  PokemonVariety.Furret,
  PokemonSpecies.Furret,
  [ PokemonForm.Furret ],
  [ PokemonType.Normal ],
);
new class HoothootVariety extends Variety {}(
  PokemonVariety.Hoothoot,
  PokemonSpecies.Hoothoot,
  [ PokemonForm.Hoothoot ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class NoctowlVariety extends Variety {}(
  PokemonVariety.Noctowl,
  PokemonSpecies.Noctowl,
  [ PokemonForm.Noctowl ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class LedybaVariety extends Variety {}(
  PokemonVariety.Ledyba,
  PokemonSpecies.Ledyba,
  [ PokemonForm.Ledyba ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class LedianVariety extends Variety {}(
  PokemonVariety.Ledian,
  PokemonSpecies.Ledian,
  [ PokemonForm.Ledian ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class SpinarakVariety extends Variety {}(
  PokemonVariety.Spinarak,
  PokemonSpecies.Spinarak,
  [ PokemonForm.Spinarak ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class AriadosVariety extends Variety {}(
  PokemonVariety.Ariados,
  PokemonSpecies.Ariados,
  [ PokemonForm.Ariados ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class CrobatVariety extends Variety {}(
  PokemonVariety.Crobat,
  PokemonSpecies.Crobat,
  [ PokemonForm.Crobat ],
  [ PokemonType.Poison, PokemonType.Flying ],
);
new class ChinchouVariety extends Variety {}(
  PokemonVariety.Chinchou,
  PokemonSpecies.Chinchou,
  [ PokemonForm.Chinchou ],
  [ PokemonType.Water, PokemonType.Electric ],
);
new class LanturnVariety extends Variety {}(
  PokemonVariety.Lanturn,
  PokemonSpecies.Lanturn,
  [ PokemonForm.Lanturn ],
  [ PokemonType.Water, PokemonType.Electric ],
);
new class PichuVariety extends Variety {}(
  PokemonVariety.Pichu,
  PokemonSpecies.Pichu,
  [ PokemonForm.Pichu, PokemonForm.PichuSpikyEared ],
  [ PokemonType.Electric ],
);
new class CleffaVariety extends Variety {}(
  PokemonVariety.Cleffa,
  PokemonSpecies.Cleffa,
  [ PokemonForm.Cleffa ],
  [ PokemonType.Fairy ],
);
new class IgglybuffVariety extends Variety {}(
  PokemonVariety.Igglybuff,
  PokemonSpecies.Igglybuff,
  [ PokemonForm.Igglybuff ],
  [ PokemonType.Normal, PokemonType.Fairy ],
);
new class TogepiVariety extends Variety {}(
  PokemonVariety.Togepi,
  PokemonSpecies.Togepi,
  [ PokemonForm.Togepi ],
  [ PokemonType.Fairy ],
);
new class TogeticVariety extends Variety {}(
  PokemonVariety.Togetic,
  PokemonSpecies.Togetic,
  [ PokemonForm.Togetic ],
  [ PokemonType.Fairy, PokemonType.Flying ],
);
new class NatuVariety extends Variety {}(
  PokemonVariety.Natu,
  PokemonSpecies.Natu,
  [ PokemonForm.Natu ],
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class XatuVariety extends Variety {}(
  PokemonVariety.Xatu,
  PokemonSpecies.Xatu,
  [ PokemonForm.Xatu ],
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class MareepVariety extends Variety {}(
  PokemonVariety.Mareep,
  PokemonSpecies.Mareep,
  [ PokemonForm.Mareep ],
  [ PokemonType.Electric ],
);
new class FlaaffyVariety extends Variety {}(
  PokemonVariety.Flaaffy,
  PokemonSpecies.Flaaffy,
  [ PokemonForm.Flaaffy ],
  [ PokemonType.Electric ],
);
new class AmpharosVariety extends Variety {}(
  PokemonVariety.Ampharos,
  PokemonSpecies.Ampharos,
  [ PokemonForm.Ampharos ],
  [ PokemonType.Electric ],
);
new class AmpharosMegaVariety extends Variety {}(
  PokemonVariety.AmpharosMega,
  PokemonSpecies.Ampharos,
  [ PokemonForm.AmpharosMega ],
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class BellossomVariety extends Variety {}(
  PokemonVariety.Bellossom,
  PokemonSpecies.Bellossom,
  [ PokemonForm.Bellossom ],
  [ PokemonType.Grass ],
);
new class MarillVariety extends Variety {}(
  PokemonVariety.Marill,
  PokemonSpecies.Marill,
  [ PokemonForm.Marill ],
  [ PokemonType.Water, PokemonType.Fairy ],
);
new class AzumarillVariety extends Variety {}(
  PokemonVariety.Azumarill,
  PokemonSpecies.Azumarill,
  [ PokemonForm.Azumarill ],
  [ PokemonType.Water, PokemonType.Fairy ],
);
new class SudowoodoVariety extends Variety {}(
  PokemonVariety.Sudowoodo,
  PokemonSpecies.Sudowoodo,
  [ PokemonForm.Sudowoodo ],
  [ PokemonType.Rock ],
);
new class PolitoedVariety extends Variety {}(
  PokemonVariety.Politoed,
  PokemonSpecies.Politoed,
  [ PokemonForm.Politoed ],
  [ PokemonType.Water ],
);
new class HoppipVariety extends Variety {}(
  PokemonVariety.Hoppip,
  PokemonSpecies.Hoppip,
  [ PokemonForm.Hoppip ],
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class SkiploomVariety extends Variety {}(
  PokemonVariety.Skiploom,
  PokemonSpecies.Skiploom,
  [ PokemonForm.Skiploom ],
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class JumpluffVariety extends Variety {}(
  PokemonVariety.Jumpluff,
  PokemonSpecies.Jumpluff,
  [ PokemonForm.Jumpluff ],
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class AipomVariety extends Variety {}(
  PokemonVariety.Aipom,
  PokemonSpecies.Aipom,
  [ PokemonForm.Aipom ],
  [ PokemonType.Normal ],
);
new class SunkernVariety extends Variety {}(
  PokemonVariety.Sunkern,
  PokemonSpecies.Sunkern,
  [ PokemonForm.Sunkern ],
  [ PokemonType.Grass ],
);
new class SunfloraVariety extends Variety {}(
  PokemonVariety.Sunflora,
  PokemonSpecies.Sunflora,
  [ PokemonForm.Sunflora ],
  [ PokemonType.Grass ],
);
new class YanmaVariety extends Variety {}(
  PokemonVariety.Yanma,
  PokemonSpecies.Yanma,
  [ PokemonForm.Yanma ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class WooperVariety extends Variety {}(
  PokemonVariety.Wooper,
  PokemonSpecies.Wooper,
  [ PokemonForm.Wooper ],
  [ PokemonType.Water, PokemonType.Ground ],
);
new class WooperPaldeaVariety extends Variety {}(
  PokemonVariety.WooperPaldea,
  PokemonSpecies.Wooper,
  [ PokemonForm.WooperPaldea ],
  [ PokemonType.Poison, PokemonType.Ground ],
);
new class QuagsireVariety extends Variety {}(
  PokemonVariety.Quagsire,
  PokemonSpecies.Quagsire,
  [ PokemonForm.Quagsire ],
  [ PokemonType.Water, PokemonType.Ground ],
);
new class EspeonVariety extends Variety {}(
  PokemonVariety.Espeon,
  PokemonSpecies.Espeon,
  [ PokemonForm.Espeon ],
  [ PokemonType.Psychic ],
);
new class UmbreonVariety extends Variety {}(
  PokemonVariety.Umbreon,
  PokemonSpecies.Umbreon,
  [ PokemonForm.Umbreon ],
  [ PokemonType.Dark ],
);
new class MurkrowVariety extends Variety {}(
  PokemonVariety.Murkrow,
  PokemonSpecies.Murkrow,
  [ PokemonForm.Murkrow ],
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class SlowkingVariety extends Variety {}(
  PokemonVariety.Slowking,
  PokemonSpecies.Slowking,
  [ PokemonForm.Slowking ],
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class SlowkingGalarVariety extends Variety {}(
  PokemonVariety.SlowkingGalar,
  PokemonSpecies.Slowking,
  [ PokemonForm.SlowkingGalar ],
  [ PokemonType.Poison, PokemonType.Psychic ],
);
new class MisdreavusVariety extends Variety {}(
  PokemonVariety.Misdreavus,
  PokemonSpecies.Misdreavus,
  [ PokemonForm.Misdreavus ],
  [ PokemonType.Ghost ],
);
new class UnownVariety extends Variety {}(
  PokemonVariety.Unown,
  PokemonSpecies.Unown,
  [ PokemonForm.UnownA, PokemonForm.UnownB, PokemonForm.UnownC, PokemonForm.UnownD, PokemonForm.UnownE, PokemonForm.UnownF, PokemonForm.UnownG, PokemonForm.UnownH, PokemonForm.UnownI, PokemonForm.UnownJ, PokemonForm.UnownK, PokemonForm.UnownL, PokemonForm.UnownM, PokemonForm.UnownN, PokemonForm.UnownO, PokemonForm.UnownP, PokemonForm.UnownQ, PokemonForm.UnownR, PokemonForm.UnownS, PokemonForm.UnownT, PokemonForm.UnownU, PokemonForm.UnownV, PokemonForm.UnownW, PokemonForm.UnownX, PokemonForm.UnownY, PokemonForm.UnownZ, PokemonForm.UnownExclamation, PokemonForm.UnownQuestion ],
  [ PokemonType.Psychic ],
);
new class WobbuffetVariety extends Variety {}(
  PokemonVariety.Wobbuffet,
  PokemonSpecies.Wobbuffet,
  [ PokemonForm.Wobbuffet ],
  [ PokemonType.Psychic ],
);
new class GirafarigVariety extends Variety {}(
  PokemonVariety.Girafarig,
  PokemonSpecies.Girafarig,
  [ PokemonForm.Girafarig ],
  [ PokemonType.Normal, PokemonType.Psychic ],
);
new class PinecoVariety extends Variety {}(
  PokemonVariety.Pineco,
  PokemonSpecies.Pineco,
  [ PokemonForm.Pineco ],
  [ PokemonType.Bug ],
);
new class ForretressVariety extends Variety {}(
  PokemonVariety.Forretress,
  PokemonSpecies.Forretress,
  [ PokemonForm.Forretress ],
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class DunsparceVariety extends Variety {}(
  PokemonVariety.Dunsparce,
  PokemonSpecies.Dunsparce,
  [ PokemonForm.Dunsparce ],
  [ PokemonType.Normal ],
);
new class GligarVariety extends Variety {}(
  PokemonVariety.Gligar,
  PokemonSpecies.Gligar,
  [ PokemonForm.Gligar ],
  [ PokemonType.Ground, PokemonType.Flying ],
);
new class SteelixVariety extends Variety {}(
  PokemonVariety.Steelix,
  PokemonSpecies.Steelix,
  [ PokemonForm.Steelix ],
  [ PokemonType.Steel, PokemonType.Ground ],
);
new class SteelixMegaVariety extends Variety {}(
  PokemonVariety.SteelixMega,
  PokemonSpecies.Steelix,
  [ PokemonForm.SteelixMega ],
  [ PokemonType.Steel, PokemonType.Ground ],
);
new class SnubbullVariety extends Variety {}(
  PokemonVariety.Snubbull,
  PokemonSpecies.Snubbull,
  [ PokemonForm.Snubbull ],
  [ PokemonType.Fairy ],
);
new class GranbullVariety extends Variety {}(
  PokemonVariety.Granbull,
  PokemonSpecies.Granbull,
  [ PokemonForm.Granbull ],
  [ PokemonType.Fairy ],
);
new class QwilfishVariety extends Variety {}(
  PokemonVariety.Qwilfish,
  PokemonSpecies.Qwilfish,
  [ PokemonForm.Qwilfish ],
  [ PokemonType.Water, PokemonType.Poison ],
);
new class QwilfishHisuiVariety extends Variety {}(
  PokemonVariety.QwilfishHisui,
  PokemonSpecies.Qwilfish,
  [ PokemonForm.QwilfishHisui ],
  [ PokemonType.Dark, PokemonType.Poison ],
);
new class ScizorVariety extends Variety {}(
  PokemonVariety.Scizor,
  PokemonSpecies.Scizor,
  [ PokemonForm.Scizor ],
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class ScizorMegaVariety extends Variety {}(
  PokemonVariety.ScizorMega,
  PokemonSpecies.Scizor,
  [ PokemonForm.ScizorMega ],
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class ShuckleVariety extends Variety {}(
  PokemonVariety.Shuckle,
  PokemonSpecies.Shuckle,
  [ PokemonForm.Shuckle ],
  [ PokemonType.Bug, PokemonType.Rock ],
);
new class HeracrossVariety extends Variety {}(
  PokemonVariety.Heracross,
  PokemonSpecies.Heracross,
  [ PokemonForm.Heracross ],
  [ PokemonType.Bug, PokemonType.Fighting ],
);
new class HeracrossMegaVariety extends Variety {}(
  PokemonVariety.HeracrossMega,
  PokemonSpecies.Heracross,
  [ PokemonForm.HeracrossMega ],
  [ PokemonType.Bug, PokemonType.Fighting ],
);
new class SneaselVariety extends Variety {}(
  PokemonVariety.Sneasel,
  PokemonSpecies.Sneasel,
  [ PokemonForm.Sneasel ],
  [ PokemonType.Dark, PokemonType.Ice ],
);
new class SneaselHisuiVariety extends Variety {}(
  PokemonVariety.SneaselHisui,
  PokemonSpecies.Sneasel,
  [ PokemonForm.SneaselHisui ],
  [ PokemonType.Fighting, PokemonType.Poison ],
);
new class TeddiursaVariety extends Variety {}(
  PokemonVariety.Teddiursa,
  PokemonSpecies.Teddiursa,
  [ PokemonForm.Teddiursa ],
  [ PokemonType.Normal ],
);
new class UrsaringVariety extends Variety {}(
  PokemonVariety.Ursaring,
  PokemonSpecies.Ursaring,
  [ PokemonForm.Ursaring ],
  [ PokemonType.Normal ],
);
new class SlugmaVariety extends Variety {}(
  PokemonVariety.Slugma,
  PokemonSpecies.Slugma,
  [ PokemonForm.Slugma ],
  [ PokemonType.Fire ],
);
new class MagcargoVariety extends Variety {}(
  PokemonVariety.Magcargo,
  PokemonSpecies.Magcargo,
  [ PokemonForm.Magcargo ],
  [ PokemonType.Fire, PokemonType.Rock ],
);
new class SwinubVariety extends Variety {}(
  PokemonVariety.Swinub,
  PokemonSpecies.Swinub,
  [ PokemonForm.Swinub ],
  [ PokemonType.Ice, PokemonType.Ground ],
);
new class PiloswineVariety extends Variety {}(
  PokemonVariety.Piloswine,
  PokemonSpecies.Piloswine,
  [ PokemonForm.Piloswine ],
  [ PokemonType.Ice, PokemonType.Ground ],
);
new class CorsolaVariety extends Variety {}(
  PokemonVariety.Corsola,
  PokemonSpecies.Corsola,
  [ PokemonForm.Corsola ],
  [ PokemonType.Water, PokemonType.Rock ],
);
new class CorsolaGalarVariety extends Variety {}(
  PokemonVariety.CorsolaGalar,
  PokemonSpecies.Corsola,
  [ PokemonForm.CorsolaGalar ],
  [ PokemonType.Ghost ],
);
new class RemoraidVariety extends Variety {}(
  PokemonVariety.Remoraid,
  PokemonSpecies.Remoraid,
  [ PokemonForm.Remoraid ],
  [ PokemonType.Water ],
);
new class OctilleryVariety extends Variety {}(
  PokemonVariety.Octillery,
  PokemonSpecies.Octillery,
  [ PokemonForm.Octillery ],
  [ PokemonType.Water ],
);
new class DelibirdVariety extends Variety {}(
  PokemonVariety.Delibird,
  PokemonSpecies.Delibird,
  [ PokemonForm.Delibird ],
  [ PokemonType.Ice, PokemonType.Flying ],
);
new class MantineVariety extends Variety {}(
  PokemonVariety.Mantine,
  PokemonSpecies.Mantine,
  [ PokemonForm.Mantine ],
  [ PokemonType.Water, PokemonType.Flying ],
);
new class SkarmoryVariety extends Variety {}(
  PokemonVariety.Skarmory,
  PokemonSpecies.Skarmory,
  [ PokemonForm.Skarmory ],
  [ PokemonType.Steel, PokemonType.Flying ],
);
new class HoundourVariety extends Variety {}(
  PokemonVariety.Houndour,
  PokemonSpecies.Houndour,
  [ PokemonForm.Houndour ],
  [ PokemonType.Dark, PokemonType.Fire ],
);
new class HoundoomVariety extends Variety {}(
  PokemonVariety.Houndoom,
  PokemonSpecies.Houndoom,
  [ PokemonForm.Houndoom ],
  [ PokemonType.Dark, PokemonType.Fire ],
);
new class HoundoomMegaVariety extends Variety {}(
  PokemonVariety.HoundoomMega,
  PokemonSpecies.Houndoom,
  [ PokemonForm.HoundoomMega ],
  [ PokemonType.Dark, PokemonType.Fire ],
);
new class KingdraVariety extends Variety {}(
  PokemonVariety.Kingdra,
  PokemonSpecies.Kingdra,
  [ PokemonForm.Kingdra ],
  [ PokemonType.Water, PokemonType.Dragon ],
);
new class PhanpyVariety extends Variety {}(
  PokemonVariety.Phanpy,
  PokemonSpecies.Phanpy,
  [ PokemonForm.Phanpy ],
  [ PokemonType.Ground ],
);
new class DonphanVariety extends Variety {}(
  PokemonVariety.Donphan,
  PokemonSpecies.Donphan,
  [ PokemonForm.Donphan ],
  [ PokemonType.Ground ],
);
new class Porygon2Variety extends Variety {}(
  PokemonVariety.Porygon2,
  PokemonSpecies.Porygon2,
  [ PokemonForm.Porygon2 ],
  [ PokemonType.Normal ],
);
new class StantlerVariety extends Variety {}(
  PokemonVariety.Stantler,
  PokemonSpecies.Stantler,
  [ PokemonForm.Stantler ],
  [ PokemonType.Normal ],
);
new class SmeargleVariety extends Variety {}(
  PokemonVariety.Smeargle,
  PokemonSpecies.Smeargle,
  [ PokemonForm.Smeargle ],
  [ PokemonType.Normal ],
);
new class TyrogueVariety extends Variety {}(
  PokemonVariety.Tyrogue,
  PokemonSpecies.Tyrogue,
  [ PokemonForm.Tyrogue ],
  [ PokemonType.Fighting ],
);
new class HitmontopVariety extends Variety {}(
  PokemonVariety.Hitmontop,
  PokemonSpecies.Hitmontop,
  [ PokemonForm.Hitmontop ],
  [ PokemonType.Fighting ],
);
new class SmoochumVariety extends Variety {}(
  PokemonVariety.Smoochum,
  PokemonSpecies.Smoochum,
  [ PokemonForm.Smoochum ],
  [ PokemonType.Ice, PokemonType.Psychic ],
);
new class ElekidVariety extends Variety {}(
  PokemonVariety.Elekid,
  PokemonSpecies.Elekid,
  [ PokemonForm.Elekid ],
  [ PokemonType.Electric ],
);
new class MagbyVariety extends Variety {}(
  PokemonVariety.Magby,
  PokemonSpecies.Magby,
  [ PokemonForm.Magby ],
  [ PokemonType.Fire ],
);
new class MiltankVariety extends Variety {}(
  PokemonVariety.Miltank,
  PokemonSpecies.Miltank,
  [ PokemonForm.Miltank ],
  [ PokemonType.Normal ],
);
new class BlisseyVariety extends Variety {}(
  PokemonVariety.Blissey,
  PokemonSpecies.Blissey,
  [ PokemonForm.Blissey ],
  [ PokemonType.Normal ],
);
new class RaikouVariety extends Variety {}(
  PokemonVariety.Raikou,
  PokemonSpecies.Raikou,
  [ PokemonForm.Raikou ],
  [ PokemonType.Electric ],
);
new class EnteiVariety extends Variety {}(
  PokemonVariety.Entei,
  PokemonSpecies.Entei,
  [ PokemonForm.Entei ],
  [ PokemonType.Fire ],
);
new class SuicuneVariety extends Variety {}(
  PokemonVariety.Suicune,
  PokemonSpecies.Suicune,
  [ PokemonForm.Suicune ],
  [ PokemonType.Water ],
);
new class LarvitarVariety extends Variety {}(
  PokemonVariety.Larvitar,
  PokemonSpecies.Larvitar,
  [ PokemonForm.Larvitar ],
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class PupitarVariety extends Variety {}(
  PokemonVariety.Pupitar,
  PokemonSpecies.Pupitar,
  [ PokemonForm.Pupitar ],
  [ PokemonType.Rock, PokemonType.Ground ],
);
new class TyranitarVariety extends Variety {}(
  PokemonVariety.Tyranitar,
  PokemonSpecies.Tyranitar,
  [ PokemonForm.Tyranitar ],
  [ PokemonType.Rock, PokemonType.Dark ],
);
new class TyranitarMegaVariety extends Variety {}(
  PokemonVariety.TyranitarMega,
  PokemonSpecies.Tyranitar,
  [ PokemonForm.TyranitarMega ],
  [ PokemonType.Rock, PokemonType.Dark ],
);
new class LugiaVariety extends Variety {}(
  PokemonVariety.Lugia,
  PokemonSpecies.Lugia,
  [ PokemonForm.Lugia ],
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class HoOhVariety extends Variety {}(
  PokemonVariety.HoOh,
  PokemonSpecies.HoOh,
  [ PokemonForm.HoOh ],
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class CelebiVariety extends Variety {}(
  PokemonVariety.Celebi,
  PokemonSpecies.Celebi,
  [ PokemonForm.Celebi ],
  [ PokemonType.Psychic, PokemonType.Grass ],
);
new class TreeckoVariety extends Variety {}(
  PokemonVariety.Treecko,
  PokemonSpecies.Treecko,
  [ PokemonForm.Treecko ],
  [ PokemonType.Grass ],
);
new class GrovyleVariety extends Variety {}(
  PokemonVariety.Grovyle,
  PokemonSpecies.Grovyle,
  [ PokemonForm.Grovyle ],
  [ PokemonType.Grass ],
);
new class SceptileVariety extends Variety {}(
  PokemonVariety.Sceptile,
  PokemonSpecies.Sceptile,
  [ PokemonForm.Sceptile ],
  [ PokemonType.Grass ],
);
new class SceptileMegaVariety extends Variety {}(
  PokemonVariety.SceptileMega,
  PokemonSpecies.Sceptile,
  [ PokemonForm.SceptileMega ],
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class TorchicVariety extends Variety {}(
  PokemonVariety.Torchic,
  PokemonSpecies.Torchic,
  [ PokemonForm.Torchic ],
  [ PokemonType.Fire ],
);
new class CombuskenVariety extends Variety {}(
  PokemonVariety.Combusken,
  PokemonSpecies.Combusken,
  [ PokemonForm.Combusken ],
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class BlazikenVariety extends Variety {}(
  PokemonVariety.Blaziken,
  PokemonSpecies.Blaziken,
  [ PokemonForm.Blaziken ],
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class BlazikenMegaVariety extends Variety {}(
  PokemonVariety.BlazikenMega,
  PokemonSpecies.Blaziken,
  [ PokemonForm.BlazikenMega ],
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class MudkipVariety extends Variety {}(
  PokemonVariety.Mudkip,
  PokemonSpecies.Mudkip,
  [ PokemonForm.Mudkip ],
  [ PokemonType.Water ],
);
new class MarshtompVariety extends Variety {}(
  PokemonVariety.Marshtomp,
  PokemonSpecies.Marshtomp,
  [ PokemonForm.Marshtomp ],
  [ PokemonType.Water, PokemonType.Ground ],
);
new class SwampertVariety extends Variety {}(
  PokemonVariety.Swampert,
  PokemonSpecies.Swampert,
  [ PokemonForm.Swampert ],
  [ PokemonType.Water, PokemonType.Ground ],
);
new class SwampertMegaVariety extends Variety {}(
  PokemonVariety.SwampertMega,
  PokemonSpecies.Swampert,
  [ PokemonForm.SwampertMega ],
  [ PokemonType.Water, PokemonType.Ground ],
);
new class PoochyenaVariety extends Variety {}(
  PokemonVariety.Poochyena,
  PokemonSpecies.Poochyena,
  [ PokemonForm.Poochyena ],
  [ PokemonType.Dark ],
);
new class MightyenaVariety extends Variety {}(
  PokemonVariety.Mightyena,
  PokemonSpecies.Mightyena,
  [ PokemonForm.Mightyena ],
  [ PokemonType.Dark ],
);
new class ZigzagoonVariety extends Variety {}(
  PokemonVariety.Zigzagoon,
  PokemonSpecies.Zigzagoon,
  [ PokemonForm.Zigzagoon ],
  [ PokemonType.Normal ],
);
new class ZigzagoonGalarVariety extends Variety {}(
  PokemonVariety.ZigzagoonGalar,
  PokemonSpecies.Zigzagoon,
  [ PokemonForm.ZigzagoonGalar ],
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class LinooneVariety extends Variety {}(
  PokemonVariety.Linoone,
  PokemonSpecies.Linoone,
  [ PokemonForm.Linoone ],
  [ PokemonType.Normal ],
);
new class LinooneGalarVariety extends Variety {}(
  PokemonVariety.LinooneGalar,
  PokemonSpecies.Linoone,
  [ PokemonForm.LinooneGalar ],
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class WurmpleVariety extends Variety {}(
  PokemonVariety.Wurmple,
  PokemonSpecies.Wurmple,
  [ PokemonForm.Wurmple ],
  [ PokemonType.Bug ],
);
new class SilcoonVariety extends Variety {}(
  PokemonVariety.Silcoon,
  PokemonSpecies.Silcoon,
  [ PokemonForm.Silcoon ],
  [ PokemonType.Bug ],
);
new class BeautiflyVariety extends Variety {}(
  PokemonVariety.Beautifly,
  PokemonSpecies.Beautifly,
  [ PokemonForm.Beautifly ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class CascoonVariety extends Variety {}(
  PokemonVariety.Cascoon,
  PokemonSpecies.Cascoon,
  [ PokemonForm.Cascoon ],
  [ PokemonType.Bug ],
);
new class DustoxVariety extends Variety {}(
  PokemonVariety.Dustox,
  PokemonSpecies.Dustox,
  [ PokemonForm.Dustox ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class LotadVariety extends Variety {}(
  PokemonVariety.Lotad,
  PokemonSpecies.Lotad,
  [ PokemonForm.Lotad ],
  [ PokemonType.Water, PokemonType.Grass ],
);
new class LombreVariety extends Variety {}(
  PokemonVariety.Lombre,
  PokemonSpecies.Lombre,
  [ PokemonForm.Lombre ],
  [ PokemonType.Water, PokemonType.Grass ],
);
new class LudicoloVariety extends Variety {}(
  PokemonVariety.Ludicolo,
  PokemonSpecies.Ludicolo,
  [ PokemonForm.Ludicolo ],
  [ PokemonType.Water, PokemonType.Grass ],
);
new class SeedotVariety extends Variety {}(
  PokemonVariety.Seedot,
  PokemonSpecies.Seedot,
  [ PokemonForm.Seedot ],
  [ PokemonType.Grass ],
);
new class NuzleafVariety extends Variety {}(
  PokemonVariety.Nuzleaf,
  PokemonSpecies.Nuzleaf,
  [ PokemonForm.Nuzleaf ],
  [ PokemonType.Grass, PokemonType.Dark ],
);
new class ShiftryVariety extends Variety {}(
  PokemonVariety.Shiftry,
  PokemonSpecies.Shiftry,
  [ PokemonForm.Shiftry ],
  [ PokemonType.Grass, PokemonType.Dark ],
);
new class TaillowVariety extends Variety {}(
  PokemonVariety.Taillow,
  PokemonSpecies.Taillow,
  [ PokemonForm.Taillow ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SwellowVariety extends Variety {}(
  PokemonVariety.Swellow,
  PokemonSpecies.Swellow,
  [ PokemonForm.Swellow ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class WingullVariety extends Variety {}(
  PokemonVariety.Wingull,
  PokemonSpecies.Wingull,
  [ PokemonForm.Wingull ],
  [ PokemonType.Water, PokemonType.Flying ],
);
new class PelipperVariety extends Variety {}(
  PokemonVariety.Pelipper,
  PokemonSpecies.Pelipper,
  [ PokemonForm.Pelipper ],
  [ PokemonType.Water, PokemonType.Flying ],
);
new class RaltsVariety extends Variety {}(
  PokemonVariety.Ralts,
  PokemonSpecies.Ralts,
  [ PokemonForm.Ralts ],
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class KirliaVariety extends Variety {}(
  PokemonVariety.Kirlia,
  PokemonSpecies.Kirlia,
  [ PokemonForm.Kirlia ],
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class GardevoirVariety extends Variety {}(
  PokemonVariety.Gardevoir,
  PokemonSpecies.Gardevoir,
  [ PokemonForm.Gardevoir ],
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class GardevoirMegaVariety extends Variety {}(
  PokemonVariety.GardevoirMega,
  PokemonSpecies.Gardevoir,
  [ PokemonForm.GardevoirMega ],
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class SurskitVariety extends Variety {}(
  PokemonVariety.Surskit,
  PokemonSpecies.Surskit,
  [ PokemonForm.Surskit ],
  [ PokemonType.Bug, PokemonType.Water ],
);
new class MasquerainVariety extends Variety {}(
  PokemonVariety.Masquerain,
  PokemonSpecies.Masquerain,
  [ PokemonForm.Masquerain ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class ShroomishVariety extends Variety {}(
  PokemonVariety.Shroomish,
  PokemonSpecies.Shroomish,
  [ PokemonForm.Shroomish ],
  [ PokemonType.Grass ],
);
new class BreloomVariety extends Variety {}(
  PokemonVariety.Breloom,
  PokemonSpecies.Breloom,
  [ PokemonForm.Breloom ],
  [ PokemonType.Grass, PokemonType.Fighting ],
);
new class SlakothVariety extends Variety {}(
  PokemonVariety.Slakoth,
  PokemonSpecies.Slakoth,
  [ PokemonForm.Slakoth ],
  [ PokemonType.Normal ],
);
new class VigorothVariety extends Variety {}(
  PokemonVariety.Vigoroth,
  PokemonSpecies.Vigoroth,
  [ PokemonForm.Vigoroth ],
  [ PokemonType.Normal ],
);
new class SlakingVariety extends Variety {}(
  PokemonVariety.Slaking,
  PokemonSpecies.Slaking,
  [ PokemonForm.Slaking ],
  [ PokemonType.Normal ],
);
new class NincadaVariety extends Variety {}(
  PokemonVariety.Nincada,
  PokemonSpecies.Nincada,
  [ PokemonForm.Nincada ],
  [ PokemonType.Bug, PokemonType.Ground ],
);
new class NinjaskVariety extends Variety {}(
  PokemonVariety.Ninjask,
  PokemonSpecies.Ninjask,
  [ PokemonForm.Ninjask ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class ShedinjaVariety extends Variety {}(
  PokemonVariety.Shedinja,
  PokemonSpecies.Shedinja,
  [ PokemonForm.Shedinja ],
  [ PokemonType.Bug, PokemonType.Ghost ],
);
new class WhismurVariety extends Variety {}(
  PokemonVariety.Whismur,
  PokemonSpecies.Whismur,
  [ PokemonForm.Whismur ],
  [ PokemonType.Normal ],
);
new class LoudredVariety extends Variety {}(
  PokemonVariety.Loudred,
  PokemonSpecies.Loudred,
  [ PokemonForm.Loudred ],
  [ PokemonType.Normal ],
);
new class ExploudVariety extends Variety {}(
  PokemonVariety.Exploud,
  PokemonSpecies.Exploud,
  [ PokemonForm.Exploud ],
  [ PokemonType.Normal ],
);
new class MakuhitaVariety extends Variety {}(
  PokemonVariety.Makuhita,
  PokemonSpecies.Makuhita,
  [ PokemonForm.Makuhita ],
  [ PokemonType.Fighting ],
);
new class HariyamaVariety extends Variety {}(
  PokemonVariety.Hariyama,
  PokemonSpecies.Hariyama,
  [ PokemonForm.Hariyama ],
  [ PokemonType.Fighting ],
);
new class AzurillVariety extends Variety {}(
  PokemonVariety.Azurill,
  PokemonSpecies.Azurill,
  [ PokemonForm.Azurill ],
  [ PokemonType.Normal, PokemonType.Fairy ],
);
new class NosepassVariety extends Variety {}(
  PokemonVariety.Nosepass,
  PokemonSpecies.Nosepass,
  [ PokemonForm.Nosepass ],
  [ PokemonType.Rock ],
);
new class SkittyVariety extends Variety {}(
  PokemonVariety.Skitty,
  PokemonSpecies.Skitty,
  [ PokemonForm.Skitty ],
  [ PokemonType.Normal ],
);
new class DelcattyVariety extends Variety {}(
  PokemonVariety.Delcatty,
  PokemonSpecies.Delcatty,
  [ PokemonForm.Delcatty ],
  [ PokemonType.Normal ],
);
new class SableyeVariety extends Variety {}(
  PokemonVariety.Sableye,
  PokemonSpecies.Sableye,
  [ PokemonForm.Sableye ],
  [ PokemonType.Dark, PokemonType.Ghost ],
);
new class SableyeMegaVariety extends Variety {}(
  PokemonVariety.SableyeMega,
  PokemonSpecies.Sableye,
  [ PokemonForm.SableyeMega ],
  [ PokemonType.Dark, PokemonType.Ghost ],
);
new class MawileVariety extends Variety {}(
  PokemonVariety.Mawile,
  PokemonSpecies.Mawile,
  [ PokemonForm.Mawile ],
  [ PokemonType.Steel, PokemonType.Fairy ],
);
new class MawileMegaVariety extends Variety {}(
  PokemonVariety.MawileMega,
  PokemonSpecies.Mawile,
  [ PokemonForm.MawileMega ],
  [ PokemonType.Steel, PokemonType.Fairy ],
);
new class AronVariety extends Variety {}(
  PokemonVariety.Aron,
  PokemonSpecies.Aron,
  [ PokemonForm.Aron ],
  [ PokemonType.Steel, PokemonType.Rock ],
);
new class LaironVariety extends Variety {}(
  PokemonVariety.Lairon,
  PokemonSpecies.Lairon,
  [ PokemonForm.Lairon ],
  [ PokemonType.Steel, PokemonType.Rock ],
);
new class AggronVariety extends Variety {}(
  PokemonVariety.Aggron,
  PokemonSpecies.Aggron,
  [ PokemonForm.Aggron ],
  [ PokemonType.Steel, PokemonType.Rock ],
);
new class AggronMegaVariety extends Variety {}(
  PokemonVariety.AggronMega,
  PokemonSpecies.Aggron,
  [ PokemonForm.AggronMega ],
  [ PokemonType.Steel ],
);
new class MedititeVariety extends Variety {}(
  PokemonVariety.Meditite,
  PokemonSpecies.Meditite,
  [ PokemonForm.Meditite ],
  [ PokemonType.Fighting, PokemonType.Psychic ],
);
new class MedichamVariety extends Variety {}(
  PokemonVariety.Medicham,
  PokemonSpecies.Medicham,
  [ PokemonForm.Medicham ],
  [ PokemonType.Fighting, PokemonType.Psychic ],
);
new class MedichamMegaVariety extends Variety {}(
  PokemonVariety.MedichamMega,
  PokemonSpecies.Medicham,
  [ PokemonForm.MedichamMega ],
  [ PokemonType.Fighting, PokemonType.Psychic ],
);
new class ElectrikeVariety extends Variety {}(
  PokemonVariety.Electrike,
  PokemonSpecies.Electrike,
  [ PokemonForm.Electrike ],
  [ PokemonType.Electric ],
);
new class ManectricVariety extends Variety {}(
  PokemonVariety.Manectric,
  PokemonSpecies.Manectric,
  [ PokemonForm.Manectric ],
  [ PokemonType.Electric ],
);
new class ManectricMegaVariety extends Variety {}(
  PokemonVariety.ManectricMega,
  PokemonSpecies.Manectric,
  [ PokemonForm.ManectricMega ],
  [ PokemonType.Electric ],
);
new class PlusleVariety extends Variety {}(
  PokemonVariety.Plusle,
  PokemonSpecies.Plusle,
  [ PokemonForm.Plusle ],
  [ PokemonType.Electric ],
);
new class MinunVariety extends Variety {}(
  PokemonVariety.Minun,
  PokemonSpecies.Minun,
  [ PokemonForm.Minun ],
  [ PokemonType.Electric ],
);
new class VolbeatVariety extends Variety {}(
  PokemonVariety.Volbeat,
  PokemonSpecies.Volbeat,
  [ PokemonForm.Volbeat ],
  [ PokemonType.Bug ],
);
new class IllumiseVariety extends Variety {}(
  PokemonVariety.Illumise,
  PokemonSpecies.Illumise,
  [ PokemonForm.Illumise ],
  [ PokemonType.Bug ],
);
new class RoseliaVariety extends Variety {}(
  PokemonVariety.Roselia,
  PokemonSpecies.Roselia,
  [ PokemonForm.Roselia ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class GulpinVariety extends Variety {}(
  PokemonVariety.Gulpin,
  PokemonSpecies.Gulpin,
  [ PokemonForm.Gulpin ],
  [ PokemonType.Poison ],
);
new class SwalotVariety extends Variety {}(
  PokemonVariety.Swalot,
  PokemonSpecies.Swalot,
  [ PokemonForm.Swalot ],
  [ PokemonType.Poison ],
);
new class CarvanhaVariety extends Variety {}(
  PokemonVariety.Carvanha,
  PokemonSpecies.Carvanha,
  [ PokemonForm.Carvanha ],
  [ PokemonType.Water, PokemonType.Dark ],
);
new class SharpedoVariety extends Variety {}(
  PokemonVariety.Sharpedo,
  PokemonSpecies.Sharpedo,
  [ PokemonForm.Sharpedo ],
  [ PokemonType.Water, PokemonType.Dark ],
);
new class SharpedoMegaVariety extends Variety {}(
  PokemonVariety.SharpedoMega,
  PokemonSpecies.Sharpedo,
  [ PokemonForm.SharpedoMega ],
  [ PokemonType.Water, PokemonType.Dark ],
);
new class WailmerVariety extends Variety {}(
  PokemonVariety.Wailmer,
  PokemonSpecies.Wailmer,
  [ PokemonForm.Wailmer ],
  [ PokemonType.Water ],
);
new class WailordVariety extends Variety {}(
  PokemonVariety.Wailord,
  PokemonSpecies.Wailord,
  [ PokemonForm.Wailord ],
  [ PokemonType.Water ],
);
new class NumelVariety extends Variety {}(
  PokemonVariety.Numel,
  PokemonSpecies.Numel,
  [ PokemonForm.Numel ],
  [ PokemonType.Fire, PokemonType.Ground ],
);
new class CameruptVariety extends Variety {}(
  PokemonVariety.Camerupt,
  PokemonSpecies.Camerupt,
  [ PokemonForm.Camerupt ],
  [ PokemonType.Fire, PokemonType.Ground ],
);
new class CameruptMegaVariety extends Variety {}(
  PokemonVariety.CameruptMega,
  PokemonSpecies.Camerupt,
  [ PokemonForm.CameruptMega ],
  [ PokemonType.Fire, PokemonType.Ground ],
);
new class TorkoalVariety extends Variety {}(
  PokemonVariety.Torkoal,
  PokemonSpecies.Torkoal,
  [ PokemonForm.Torkoal ],
  [ PokemonType.Fire ],
);
new class SpoinkVariety extends Variety {}(
  PokemonVariety.Spoink,
  PokemonSpecies.Spoink,
  [ PokemonForm.Spoink ],
  [ PokemonType.Psychic ],
);
new class GrumpigVariety extends Variety {}(
  PokemonVariety.Grumpig,
  PokemonSpecies.Grumpig,
  [ PokemonForm.Grumpig ],
  [ PokemonType.Psychic ],
);
new class SpindaVariety extends Variety {}(
  PokemonVariety.Spinda,
  PokemonSpecies.Spinda,
  [ PokemonForm.Spinda ],
  [ PokemonType.Normal ],
);
new class TrapinchVariety extends Variety {}(
  PokemonVariety.Trapinch,
  PokemonSpecies.Trapinch,
  [ PokemonForm.Trapinch ],
  [ PokemonType.Ground ],
);
new class VibravaVariety extends Variety {}(
  PokemonVariety.Vibrava,
  PokemonSpecies.Vibrava,
  [ PokemonForm.Vibrava ],
  [ PokemonType.Ground, PokemonType.Dragon ],
);
new class FlygonVariety extends Variety {}(
  PokemonVariety.Flygon,
  PokemonSpecies.Flygon,
  [ PokemonForm.Flygon ],
  [ PokemonType.Ground, PokemonType.Dragon ],
);
new class CacneaVariety extends Variety {}(
  PokemonVariety.Cacnea,
  PokemonSpecies.Cacnea,
  [ PokemonForm.Cacnea ],
  [ PokemonType.Grass ],
);
new class CacturneVariety extends Variety {}(
  PokemonVariety.Cacturne,
  PokemonSpecies.Cacturne,
  [ PokemonForm.Cacturne ],
  [ PokemonType.Grass, PokemonType.Dark ],
);
new class SwabluVariety extends Variety {}(
  PokemonVariety.Swablu,
  PokemonSpecies.Swablu,
  [ PokemonForm.Swablu ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class AltariaVariety extends Variety {}(
  PokemonVariety.Altaria,
  PokemonSpecies.Altaria,
  [ PokemonForm.Altaria ],
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class AltariaMegaVariety extends Variety {}(
  PokemonVariety.AltariaMega,
  PokemonSpecies.Altaria,
  [ PokemonForm.AltariaMega ],
  [ PokemonType.Dragon, PokemonType.Fairy ],
);
new class ZangooseVariety extends Variety {}(
  PokemonVariety.Zangoose,
  PokemonSpecies.Zangoose,
  [ PokemonForm.Zangoose ],
  [ PokemonType.Normal ],
);
new class SeviperVariety extends Variety {}(
  PokemonVariety.Seviper,
  PokemonSpecies.Seviper,
  [ PokemonForm.Seviper ],
  [ PokemonType.Poison ],
);
new class LunatoneVariety extends Variety {}(
  PokemonVariety.Lunatone,
  PokemonSpecies.Lunatone,
  [ PokemonForm.Lunatone ],
  [ PokemonType.Rock, PokemonType.Psychic ],
);
new class SolrockVariety extends Variety {}(
  PokemonVariety.Solrock,
  PokemonSpecies.Solrock,
  [ PokemonForm.Solrock ],
  [ PokemonType.Rock, PokemonType.Psychic ],
);
new class BarboachVariety extends Variety {}(
  PokemonVariety.Barboach,
  PokemonSpecies.Barboach,
  [ PokemonForm.Barboach ],
  [ PokemonType.Water, PokemonType.Ground ],
);
new class WhiscashVariety extends Variety {}(
  PokemonVariety.Whiscash,
  PokemonSpecies.Whiscash,
  [ PokemonForm.Whiscash ],
  [ PokemonType.Water, PokemonType.Ground ],
);
new class CorphishVariety extends Variety {}(
  PokemonVariety.Corphish,
  PokemonSpecies.Corphish,
  [ PokemonForm.Corphish ],
  [ PokemonType.Water ],
);
new class CrawdauntVariety extends Variety {}(
  PokemonVariety.Crawdaunt,
  PokemonSpecies.Crawdaunt,
  [ PokemonForm.Crawdaunt ],
  [ PokemonType.Water, PokemonType.Dark ],
);
new class BaltoyVariety extends Variety {}(
  PokemonVariety.Baltoy,
  PokemonSpecies.Baltoy,
  [ PokemonForm.Baltoy ],
  [ PokemonType.Ground, PokemonType.Psychic ],
);
new class ClaydolVariety extends Variety {}(
  PokemonVariety.Claydol,
  PokemonSpecies.Claydol,
  [ PokemonForm.Claydol ],
  [ PokemonType.Ground, PokemonType.Psychic ],
);
new class LileepVariety extends Variety {}(
  PokemonVariety.Lileep,
  PokemonSpecies.Lileep,
  [ PokemonForm.Lileep ],
  [ PokemonType.Rock, PokemonType.Grass ],
);
new class CradilyVariety extends Variety {}(
  PokemonVariety.Cradily,
  PokemonSpecies.Cradily,
  [ PokemonForm.Cradily ],
  [ PokemonType.Rock, PokemonType.Grass ],
);
new class AnorithVariety extends Variety {}(
  PokemonVariety.Anorith,
  PokemonSpecies.Anorith,
  [ PokemonForm.Anorith ],
  [ PokemonType.Rock, PokemonType.Bug ],
);
new class ArmaldoVariety extends Variety {}(
  PokemonVariety.Armaldo,
  PokemonSpecies.Armaldo,
  [ PokemonForm.Armaldo ],
  [ PokemonType.Rock, PokemonType.Bug ],
);
new class FeebasVariety extends Variety {}(
  PokemonVariety.Feebas,
  PokemonSpecies.Feebas,
  [ PokemonForm.Feebas ],
  [ PokemonType.Water ],
);
new class MiloticVariety extends Variety {}(
  PokemonVariety.Milotic,
  PokemonSpecies.Milotic,
  [ PokemonForm.Milotic ],
  [ PokemonType.Water ],
);
new class CastformVariety extends Variety {}(
  PokemonVariety.Castform,
  PokemonSpecies.Castform,
  [ PokemonForm.Castform ],
  [ PokemonType.Normal ],
);
new class CastformSunnyVariety extends Variety {}(
  PokemonVariety.CastformSunny,
  PokemonSpecies.Castform,
  [ PokemonForm.CastformSunny ],
  [ PokemonType.Fire ],
);
new class CastformRainyVariety extends Variety {}(
  PokemonVariety.CastformRainy,
  PokemonSpecies.Castform,
  [ PokemonForm.CastformRainy ],
  [ PokemonType.Water ],
);
new class CastformSnowyVariety extends Variety {}(
  PokemonVariety.CastformSnowy,
  PokemonSpecies.Castform,
  [ PokemonForm.CastformSnowy ],
  [ PokemonType.Ice ],
);
new class KecleonVariety extends Variety {}(
  PokemonVariety.Kecleon,
  PokemonSpecies.Kecleon,
  [ PokemonForm.Kecleon ],
  [ PokemonType.Normal ],
);
new class ShuppetVariety extends Variety {}(
  PokemonVariety.Shuppet,
  PokemonSpecies.Shuppet,
  [ PokemonForm.Shuppet ],
  [ PokemonType.Ghost ],
);
new class BanetteVariety extends Variety {}(
  PokemonVariety.Banette,
  PokemonSpecies.Banette,
  [ PokemonForm.Banette ],
  [ PokemonType.Ghost ],
);
new class BanetteMegaVariety extends Variety {}(
  PokemonVariety.BanetteMega,
  PokemonSpecies.Banette,
  [ PokemonForm.BanetteMega ],
  [ PokemonType.Ghost ],
);
new class DuskullVariety extends Variety {}(
  PokemonVariety.Duskull,
  PokemonSpecies.Duskull,
  [ PokemonForm.Duskull ],
  [ PokemonType.Ghost ],
);
new class DusclopsVariety extends Variety {}(
  PokemonVariety.Dusclops,
  PokemonSpecies.Dusclops,
  [ PokemonForm.Dusclops ],
  [ PokemonType.Ghost ],
);
new class TropiusVariety extends Variety {}(
  PokemonVariety.Tropius,
  PokemonSpecies.Tropius,
  [ PokemonForm.Tropius ],
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class ChimechoVariety extends Variety {}(
  PokemonVariety.Chimecho,
  PokemonSpecies.Chimecho,
  [ PokemonForm.Chimecho ],
  [ PokemonType.Psychic ],
);
new class AbsolVariety extends Variety {}(
  PokemonVariety.Absol,
  PokemonSpecies.Absol,
  [ PokemonForm.Absol ],
  [ PokemonType.Dark ],
);
new class AbsolMegaVariety extends Variety {}(
  PokemonVariety.AbsolMega,
  PokemonSpecies.Absol,
  [ PokemonForm.AbsolMega ],
  [ PokemonType.Dark ],
);
new class WynautVariety extends Variety {}(
  PokemonVariety.Wynaut,
  PokemonSpecies.Wynaut,
  [ PokemonForm.Wynaut ],
  [ PokemonType.Psychic ],
);
new class SnoruntVariety extends Variety {}(
  PokemonVariety.Snorunt,
  PokemonSpecies.Snorunt,
  [ PokemonForm.Snorunt ],
  [ PokemonType.Ice ],
);
new class GlalieVariety extends Variety {}(
  PokemonVariety.Glalie,
  PokemonSpecies.Glalie,
  [ PokemonForm.Glalie ],
  [ PokemonType.Ice ],
);
new class GlalieMegaVariety extends Variety {}(
  PokemonVariety.GlalieMega,
  PokemonSpecies.Glalie,
  [ PokemonForm.GlalieMega ],
  [ PokemonType.Ice ],
);
new class SphealVariety extends Variety {}(
  PokemonVariety.Spheal,
  PokemonSpecies.Spheal,
  [ PokemonForm.Spheal ],
  [ PokemonType.Ice, PokemonType.Water ],
);
new class SealeoVariety extends Variety {}(
  PokemonVariety.Sealeo,
  PokemonSpecies.Sealeo,
  [ PokemonForm.Sealeo ],
  [ PokemonType.Ice, PokemonType.Water ],
);
new class WalreinVariety extends Variety {}(
  PokemonVariety.Walrein,
  PokemonSpecies.Walrein,
  [ PokemonForm.Walrein ],
  [ PokemonType.Ice, PokemonType.Water ],
);
new class ClamperlVariety extends Variety {}(
  PokemonVariety.Clamperl,
  PokemonSpecies.Clamperl,
  [ PokemonForm.Clamperl ],
  [ PokemonType.Water ],
);
new class HuntailVariety extends Variety {}(
  PokemonVariety.Huntail,
  PokemonSpecies.Huntail,
  [ PokemonForm.Huntail ],
  [ PokemonType.Water ],
);
new class GorebyssVariety extends Variety {}(
  PokemonVariety.Gorebyss,
  PokemonSpecies.Gorebyss,
  [ PokemonForm.Gorebyss ],
  [ PokemonType.Water ],
);
new class RelicanthVariety extends Variety {}(
  PokemonVariety.Relicanth,
  PokemonSpecies.Relicanth,
  [ PokemonForm.Relicanth ],
  [ PokemonType.Water, PokemonType.Rock ],
);
new class LuvdiscVariety extends Variety {}(
  PokemonVariety.Luvdisc,
  PokemonSpecies.Luvdisc,
  [ PokemonForm.Luvdisc ],
  [ PokemonType.Water ],
);
new class BagonVariety extends Variety {}(
  PokemonVariety.Bagon,
  PokemonSpecies.Bagon,
  [ PokemonForm.Bagon ],
  [ PokemonType.Dragon ],
);
new class ShelgonVariety extends Variety {}(
  PokemonVariety.Shelgon,
  PokemonSpecies.Shelgon,
  [ PokemonForm.Shelgon ],
  [ PokemonType.Dragon ],
);
new class SalamenceVariety extends Variety {}(
  PokemonVariety.Salamence,
  PokemonSpecies.Salamence,
  [ PokemonForm.Salamence ],
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class SalamenceMegaVariety extends Variety {}(
  PokemonVariety.SalamenceMega,
  PokemonSpecies.Salamence,
  [ PokemonForm.SalamenceMega ],
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class BeldumVariety extends Variety {}(
  PokemonVariety.Beldum,
  PokemonSpecies.Beldum,
  [ PokemonForm.Beldum ],
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class MetangVariety extends Variety {}(
  PokemonVariety.Metang,
  PokemonSpecies.Metang,
  [ PokemonForm.Metang ],
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class MetagrossVariety extends Variety {}(
  PokemonVariety.Metagross,
  PokemonSpecies.Metagross,
  [ PokemonForm.Metagross ],
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class MetagrossMegaVariety extends Variety {}(
  PokemonVariety.MetagrossMega,
  PokemonSpecies.Metagross,
  [ PokemonForm.MetagrossMega ],
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class RegirockVariety extends Variety {}(
  PokemonVariety.Regirock,
  PokemonSpecies.Regirock,
  [ PokemonForm.Regirock ],
  [ PokemonType.Rock ],
);
new class RegiceVariety extends Variety {}(
  PokemonVariety.Regice,
  PokemonSpecies.Regice,
  [ PokemonForm.Regice ],
  [ PokemonType.Ice ],
);
new class RegisteelVariety extends Variety {}(
  PokemonVariety.Registeel,
  PokemonSpecies.Registeel,
  [ PokemonForm.Registeel ],
  [ PokemonType.Steel ],
);
new class LatiasVariety extends Variety {}(
  PokemonVariety.Latias,
  PokemonSpecies.Latias,
  [ PokemonForm.Latias ],
  [ PokemonType.Dragon, PokemonType.Psychic ],
);
new class LatiasMegaVariety extends Variety {}(
  PokemonVariety.LatiasMega,
  PokemonSpecies.Latias,
  [ PokemonForm.LatiasMega ],
  [ PokemonType.Dragon, PokemonType.Psychic ],
);
new class LatiosVariety extends Variety {}(
  PokemonVariety.Latios,
  PokemonSpecies.Latios,
  [ PokemonForm.Latios ],
  [ PokemonType.Dragon, PokemonType.Psychic ],
);
new class LatiosMegaVariety extends Variety {}(
  PokemonVariety.LatiosMega,
  PokemonSpecies.Latios,
  [ PokemonForm.LatiosMega ],
  [ PokemonType.Dragon, PokemonType.Psychic ],
);
new class KyogreVariety extends Variety {}(
  PokemonVariety.Kyogre,
  PokemonSpecies.Kyogre,
  [ PokemonForm.Kyogre ],
  [ PokemonType.Water ],
);
new class KyogrePrimalVariety extends Variety {}(
  PokemonVariety.KyogrePrimal,
  PokemonSpecies.Kyogre,
  [ PokemonForm.KyogrePrimal ],
  [ PokemonType.Water ],
);
new class GroudonVariety extends Variety {}(
  PokemonVariety.Groudon,
  PokemonSpecies.Groudon,
  [ PokemonForm.Groudon ],
  [ PokemonType.Ground ],
);
new class GroudonPrimalVariety extends Variety {}(
  PokemonVariety.GroudonPrimal,
  PokemonSpecies.Groudon,
  [ PokemonForm.GroudonPrimal ],
  [ PokemonType.Ground, PokemonType.Fire ],
);
new class RayquazaVariety extends Variety {}(
  PokemonVariety.Rayquaza,
  PokemonSpecies.Rayquaza,
  [ PokemonForm.Rayquaza ],
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class RayquazaMegaVariety extends Variety {}(
  PokemonVariety.RayquazaMega,
  PokemonSpecies.Rayquaza,
  [ PokemonForm.RayquazaMega ],
  [ PokemonType.Dragon, PokemonType.Flying ],
);
new class JirachiVariety extends Variety {}(
  PokemonVariety.Jirachi,
  PokemonSpecies.Jirachi,
  [ PokemonForm.Jirachi ],
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class DeoxysNormalVariety extends Variety {}(
  PokemonVariety.DeoxysNormal,
  PokemonSpecies.Deoxys,
  [ PokemonForm.DeoxysNormal ],
  [ PokemonType.Psychic ],
);
new class DeoxysAttackVariety extends Variety {}(
  PokemonVariety.DeoxysAttack,
  PokemonSpecies.Deoxys,
  [ PokemonForm.DeoxysAttack ],
  [ PokemonType.Psychic ],
);
new class DeoxysDefenseVariety extends Variety {}(
  PokemonVariety.DeoxysDefense,
  PokemonSpecies.Deoxys,
  [ PokemonForm.DeoxysDefense ],
  [ PokemonType.Psychic ],
);
new class DeoxysSpeedVariety extends Variety {}(
  PokemonVariety.DeoxysSpeed,
  PokemonSpecies.Deoxys,
  [ PokemonForm.DeoxysSpeed ],
  [ PokemonType.Psychic ],
);
new class TurtwigVariety extends Variety {}(
  PokemonVariety.Turtwig,
  PokemonSpecies.Turtwig,
  [ PokemonForm.Turtwig ],
  [ PokemonType.Grass ],
);
new class GrotleVariety extends Variety {}(
  PokemonVariety.Grotle,
  PokemonSpecies.Grotle,
  [ PokemonForm.Grotle ],
  [ PokemonType.Grass ],
);
new class TorterraVariety extends Variety {}(
  PokemonVariety.Torterra,
  PokemonSpecies.Torterra,
  [ PokemonForm.Torterra ],
  [ PokemonType.Grass, PokemonType.Ground ],
);
new class ChimcharVariety extends Variety {}(
  PokemonVariety.Chimchar,
  PokemonSpecies.Chimchar,
  [ PokemonForm.Chimchar ],
  [ PokemonType.Fire ],
);
new class MonfernoVariety extends Variety {}(
  PokemonVariety.Monferno,
  PokemonSpecies.Monferno,
  [ PokemonForm.Monferno ],
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class InfernapeVariety extends Variety {}(
  PokemonVariety.Infernape,
  PokemonSpecies.Infernape,
  [ PokemonForm.Infernape ],
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class PiplupVariety extends Variety {}(
  PokemonVariety.Piplup,
  PokemonSpecies.Piplup,
  [ PokemonForm.Piplup ],
  [ PokemonType.Water ],
);
new class PrinplupVariety extends Variety {}(
  PokemonVariety.Prinplup,
  PokemonSpecies.Prinplup,
  [ PokemonForm.Prinplup ],
  [ PokemonType.Water ],
);
new class EmpoleonVariety extends Variety {}(
  PokemonVariety.Empoleon,
  PokemonSpecies.Empoleon,
  [ PokemonForm.Empoleon ],
  [ PokemonType.Water, PokemonType.Steel ],
);
new class StarlyVariety extends Variety {}(
  PokemonVariety.Starly,
  PokemonSpecies.Starly,
  [ PokemonForm.Starly ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class StaraviaVariety extends Variety {}(
  PokemonVariety.Staravia,
  PokemonSpecies.Staravia,
  [ PokemonForm.Staravia ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class StaraptorVariety extends Variety {}(
  PokemonVariety.Staraptor,
  PokemonSpecies.Staraptor,
  [ PokemonForm.Staraptor ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class BidoofVariety extends Variety {}(
  PokemonVariety.Bidoof,
  PokemonSpecies.Bidoof,
  [ PokemonForm.Bidoof ],
  [ PokemonType.Normal ],
);
new class BibarelVariety extends Variety {}(
  PokemonVariety.Bibarel,
  PokemonSpecies.Bibarel,
  [ PokemonForm.Bibarel ],
  [ PokemonType.Normal, PokemonType.Water ],
);
new class KricketotVariety extends Variety {}(
  PokemonVariety.Kricketot,
  PokemonSpecies.Kricketot,
  [ PokemonForm.Kricketot ],
  [ PokemonType.Bug ],
);
new class KricketuneVariety extends Variety {}(
  PokemonVariety.Kricketune,
  PokemonSpecies.Kricketune,
  [ PokemonForm.Kricketune ],
  [ PokemonType.Bug ],
);
new class ShinxVariety extends Variety {}(
  PokemonVariety.Shinx,
  PokemonSpecies.Shinx,
  [ PokemonForm.Shinx ],
  [ PokemonType.Electric ],
);
new class LuxioVariety extends Variety {}(
  PokemonVariety.Luxio,
  PokemonSpecies.Luxio,
  [ PokemonForm.Luxio ],
  [ PokemonType.Electric ],
);
new class LuxrayVariety extends Variety {}(
  PokemonVariety.Luxray,
  PokemonSpecies.Luxray,
  [ PokemonForm.Luxray ],
  [ PokemonType.Electric ],
);
new class BudewVariety extends Variety {}(
  PokemonVariety.Budew,
  PokemonSpecies.Budew,
  [ PokemonForm.Budew ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class RoseradeVariety extends Variety {}(
  PokemonVariety.Roserade,
  PokemonSpecies.Roserade,
  [ PokemonForm.Roserade ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class CranidosVariety extends Variety {}(
  PokemonVariety.Cranidos,
  PokemonSpecies.Cranidos,
  [ PokemonForm.Cranidos ],
  [ PokemonType.Rock ],
);
new class RampardosVariety extends Variety {}(
  PokemonVariety.Rampardos,
  PokemonSpecies.Rampardos,
  [ PokemonForm.Rampardos ],
  [ PokemonType.Rock ],
);
new class ShieldonVariety extends Variety {}(
  PokemonVariety.Shieldon,
  PokemonSpecies.Shieldon,
  [ PokemonForm.Shieldon ],
  [ PokemonType.Rock, PokemonType.Steel ],
);
new class BastiodonVariety extends Variety {}(
  PokemonVariety.Bastiodon,
  PokemonSpecies.Bastiodon,
  [ PokemonForm.Bastiodon ],
  [ PokemonType.Rock, PokemonType.Steel ],
);
new class BurmyVariety extends Variety {}(
  PokemonVariety.Burmy,
  PokemonSpecies.Burmy,
  [ PokemonForm.BurmyPlant, PokemonForm.BurmySandy, PokemonForm.BurmyTrash ],
  [ PokemonType.Bug ],
);
new class WormadamPlantVariety extends Variety {}(
  PokemonVariety.WormadamPlant,
  PokemonSpecies.Wormadam,
  [ PokemonForm.WormadamPlant ],
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class WormadamSandyVariety extends Variety {}(
  PokemonVariety.WormadamSandy,
  PokemonSpecies.Wormadam,
  [ PokemonForm.WormadamSandy ],
  [ PokemonType.Bug, PokemonType.Ground ],
);
new class WormadamTrashVariety extends Variety {}(
  PokemonVariety.WormadamTrash,
  PokemonSpecies.Wormadam,
  [ PokemonForm.WormadamTrash ],
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class MothimVariety extends Variety {}(
  PokemonVariety.Mothim,
  PokemonSpecies.Mothim,
  [ PokemonForm.MothimPlant, PokemonForm.MothimSandy, PokemonForm.MothimTrash ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class CombeeVariety extends Variety {}(
  PokemonVariety.Combee,
  PokemonSpecies.Combee,
  [ PokemonForm.Combee ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class VespiquenVariety extends Variety {}(
  PokemonVariety.Vespiquen,
  PokemonSpecies.Vespiquen,
  [ PokemonForm.Vespiquen ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class PachirisuVariety extends Variety {}(
  PokemonVariety.Pachirisu,
  PokemonSpecies.Pachirisu,
  [ PokemonForm.Pachirisu ],
  [ PokemonType.Electric ],
);
new class BuizelVariety extends Variety {}(
  PokemonVariety.Buizel,
  PokemonSpecies.Buizel,
  [ PokemonForm.Buizel ],
  [ PokemonType.Water ],
);
new class FloatzelVariety extends Variety {}(
  PokemonVariety.Floatzel,
  PokemonSpecies.Floatzel,
  [ PokemonForm.Floatzel ],
  [ PokemonType.Water ],
);
new class CherubiVariety extends Variety {}(
  PokemonVariety.Cherubi,
  PokemonSpecies.Cherubi,
  [ PokemonForm.Cherubi ],
  [ PokemonType.Grass ],
);
new class CherrimVariety extends Variety {}(
  PokemonVariety.Cherrim,
  PokemonSpecies.Cherrim,
  [ PokemonForm.CherrimOvercast, PokemonForm.CherrimSunshine ],
  [ PokemonType.Grass ],
);
new class ShellosVariety extends Variety {}(
  PokemonVariety.Shellos,
  PokemonSpecies.Shellos,
  [ PokemonForm.ShellosWest, PokemonForm.ShellosEast ],
  [ PokemonType.Water ],
);
new class GastrodonVariety extends Variety {}(
  PokemonVariety.Gastrodon,
  PokemonSpecies.Gastrodon,
  [ PokemonForm.GastrodonWest, PokemonForm.GastrodonEast ],
  [ PokemonType.Water, PokemonType.Ground ],
);
new class AmbipomVariety extends Variety {}(
  PokemonVariety.Ambipom,
  PokemonSpecies.Ambipom,
  [ PokemonForm.Ambipom ],
  [ PokemonType.Normal ],
);
new class DrifloonVariety extends Variety {}(
  PokemonVariety.Drifloon,
  PokemonSpecies.Drifloon,
  [ PokemonForm.Drifloon ],
  [ PokemonType.Ghost, PokemonType.Flying ],
);
new class DrifblimVariety extends Variety {}(
  PokemonVariety.Drifblim,
  PokemonSpecies.Drifblim,
  [ PokemonForm.Drifblim ],
  [ PokemonType.Ghost, PokemonType.Flying ],
);
new class BunearyVariety extends Variety {}(
  PokemonVariety.Buneary,
  PokemonSpecies.Buneary,
  [ PokemonForm.Buneary ],
  [ PokemonType.Normal ],
);
new class LopunnyVariety extends Variety {}(
  PokemonVariety.Lopunny,
  PokemonSpecies.Lopunny,
  [ PokemonForm.Lopunny ],
  [ PokemonType.Normal ],
);
new class LopunnyMegaVariety extends Variety {}(
  PokemonVariety.LopunnyMega,
  PokemonSpecies.Lopunny,
  [ PokemonForm.LopunnyMega ],
  [ PokemonType.Normal, PokemonType.Fighting ],
);
new class MismagiusVariety extends Variety {}(
  PokemonVariety.Mismagius,
  PokemonSpecies.Mismagius,
  [ PokemonForm.Mismagius ],
  [ PokemonType.Ghost ],
);
new class HonchkrowVariety extends Variety {}(
  PokemonVariety.Honchkrow,
  PokemonSpecies.Honchkrow,
  [ PokemonForm.Honchkrow ],
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class GlameowVariety extends Variety {}(
  PokemonVariety.Glameow,
  PokemonSpecies.Glameow,
  [ PokemonForm.Glameow ],
  [ PokemonType.Normal ],
);
new class PuruglyVariety extends Variety {}(
  PokemonVariety.Purugly,
  PokemonSpecies.Purugly,
  [ PokemonForm.Purugly ],
  [ PokemonType.Normal ],
);
new class ChinglingVariety extends Variety {}(
  PokemonVariety.Chingling,
  PokemonSpecies.Chingling,
  [ PokemonForm.Chingling ],
  [ PokemonType.Psychic ],
);
new class StunkyVariety extends Variety {}(
  PokemonVariety.Stunky,
  PokemonSpecies.Stunky,
  [ PokemonForm.Stunky ],
  [ PokemonType.Poison, PokemonType.Dark ],
);
new class SkuntankVariety extends Variety {}(
  PokemonVariety.Skuntank,
  PokemonSpecies.Skuntank,
  [ PokemonForm.Skuntank ],
  [ PokemonType.Poison, PokemonType.Dark ],
);
new class BronzorVariety extends Variety {}(
  PokemonVariety.Bronzor,
  PokemonSpecies.Bronzor,
  [ PokemonForm.Bronzor ],
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class BronzongVariety extends Variety {}(
  PokemonVariety.Bronzong,
  PokemonSpecies.Bronzong,
  [ PokemonForm.Bronzong ],
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class BonslyVariety extends Variety {}(
  PokemonVariety.Bonsly,
  PokemonSpecies.Bonsly,
  [ PokemonForm.Bonsly ],
  [ PokemonType.Rock ],
);
new class MimeJrVariety extends Variety {}(
  PokemonVariety.MimeJr,
  PokemonSpecies.MimeJr,
  [ PokemonForm.MimeJr ],
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class HappinyVariety extends Variety {}(
  PokemonVariety.Happiny,
  PokemonSpecies.Happiny,
  [ PokemonForm.Happiny ],
  [ PokemonType.Normal ],
);
new class ChatotVariety extends Variety {}(
  PokemonVariety.Chatot,
  PokemonSpecies.Chatot,
  [ PokemonForm.Chatot ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SpiritombVariety extends Variety {}(
  PokemonVariety.Spiritomb,
  PokemonSpecies.Spiritomb,
  [ PokemonForm.Spiritomb ],
  [ PokemonType.Ghost, PokemonType.Dark ],
);
new class GibleVariety extends Variety {}(
  PokemonVariety.Gible,
  PokemonSpecies.Gible,
  [ PokemonForm.Gible ],
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class GabiteVariety extends Variety {}(
  PokemonVariety.Gabite,
  PokemonSpecies.Gabite,
  [ PokemonForm.Gabite ],
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class GarchompVariety extends Variety {}(
  PokemonVariety.Garchomp,
  PokemonSpecies.Garchomp,
  [ PokemonForm.Garchomp ],
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class GarchompMegaVariety extends Variety {}(
  PokemonVariety.GarchompMega,
  PokemonSpecies.Garchomp,
  [ PokemonForm.GarchompMega ],
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class MunchlaxVariety extends Variety {}(
  PokemonVariety.Munchlax,
  PokemonSpecies.Munchlax,
  [ PokemonForm.Munchlax ],
  [ PokemonType.Normal ],
);
new class RioluVariety extends Variety {}(
  PokemonVariety.Riolu,
  PokemonSpecies.Riolu,
  [ PokemonForm.Riolu ],
  [ PokemonType.Fighting ],
);
new class LucarioVariety extends Variety {}(
  PokemonVariety.Lucario,
  PokemonSpecies.Lucario,
  [ PokemonForm.Lucario ],
  [ PokemonType.Fighting, PokemonType.Steel ],
);
new class LucarioMegaVariety extends Variety {}(
  PokemonVariety.LucarioMega,
  PokemonSpecies.Lucario,
  [ PokemonForm.LucarioMega ],
  [ PokemonType.Fighting, PokemonType.Steel ],
);
new class HippopotasVariety extends Variety {}(
  PokemonVariety.Hippopotas,
  PokemonSpecies.Hippopotas,
  [ PokemonForm.Hippopotas ],
  [ PokemonType.Ground ],
);
new class HippowdonVariety extends Variety {}(
  PokemonVariety.Hippowdon,
  PokemonSpecies.Hippowdon,
  [ PokemonForm.Hippowdon ],
  [ PokemonType.Ground ],
);
new class SkorupiVariety extends Variety {}(
  PokemonVariety.Skorupi,
  PokemonSpecies.Skorupi,
  [ PokemonForm.Skorupi ],
  [ PokemonType.Poison, PokemonType.Bug ],
);
new class DrapionVariety extends Variety {}(
  PokemonVariety.Drapion,
  PokemonSpecies.Drapion,
  [ PokemonForm.Drapion ],
  [ PokemonType.Poison, PokemonType.Dark ],
);
new class CroagunkVariety extends Variety {}(
  PokemonVariety.Croagunk,
  PokemonSpecies.Croagunk,
  [ PokemonForm.Croagunk ],
  [ PokemonType.Poison, PokemonType.Fighting ],
);
new class ToxicroakVariety extends Variety {}(
  PokemonVariety.Toxicroak,
  PokemonSpecies.Toxicroak,
  [ PokemonForm.Toxicroak ],
  [ PokemonType.Poison, PokemonType.Fighting ],
);
new class CarnivineVariety extends Variety {}(
  PokemonVariety.Carnivine,
  PokemonSpecies.Carnivine,
  [ PokemonForm.Carnivine ],
  [ PokemonType.Grass ],
);
new class FinneonVariety extends Variety {}(
  PokemonVariety.Finneon,
  PokemonSpecies.Finneon,
  [ PokemonForm.Finneon ],
  [ PokemonType.Water ],
);
new class LumineonVariety extends Variety {}(
  PokemonVariety.Lumineon,
  PokemonSpecies.Lumineon,
  [ PokemonForm.Lumineon ],
  [ PokemonType.Water ],
);
new class MantykeVariety extends Variety {}(
  PokemonVariety.Mantyke,
  PokemonSpecies.Mantyke,
  [ PokemonForm.Mantyke ],
  [ PokemonType.Water, PokemonType.Flying ],
);
new class SnoverVariety extends Variety {}(
  PokemonVariety.Snover,
  PokemonSpecies.Snover,
  [ PokemonForm.Snover ],
  [ PokemonType.Grass, PokemonType.Ice ],
);
new class AbomasnowVariety extends Variety {}(
  PokemonVariety.Abomasnow,
  PokemonSpecies.Abomasnow,
  [ PokemonForm.Abomasnow ],
  [ PokemonType.Grass, PokemonType.Ice ],
);
new class AbomasnowMegaVariety extends Variety {}(
  PokemonVariety.AbomasnowMega,
  PokemonSpecies.Abomasnow,
  [ PokemonForm.AbomasnowMega ],
  [ PokemonType.Grass, PokemonType.Ice ],
);
new class WeavileVariety extends Variety {}(
  PokemonVariety.Weavile,
  PokemonSpecies.Weavile,
  [ PokemonForm.Weavile ],
  [ PokemonType.Dark, PokemonType.Ice ],
);
new class MagnezoneVariety extends Variety {}(
  PokemonVariety.Magnezone,
  PokemonSpecies.Magnezone,
  [ PokemonForm.Magnezone ],
  [ PokemonType.Electric, PokemonType.Steel ],
);
new class LickilickyVariety extends Variety {}(
  PokemonVariety.Lickilicky,
  PokemonSpecies.Lickilicky,
  [ PokemonForm.Lickilicky ],
  [ PokemonType.Normal ],
);
new class RhyperiorVariety extends Variety {}(
  PokemonVariety.Rhyperior,
  PokemonSpecies.Rhyperior,
  [ PokemonForm.Rhyperior ],
  [ PokemonType.Ground, PokemonType.Rock ],
);
new class TangrowthVariety extends Variety {}(
  PokemonVariety.Tangrowth,
  PokemonSpecies.Tangrowth,
  [ PokemonForm.Tangrowth ],
  [ PokemonType.Grass ],
);
new class ElectivireVariety extends Variety {}(
  PokemonVariety.Electivire,
  PokemonSpecies.Electivire,
  [ PokemonForm.Electivire ],
  [ PokemonType.Electric ],
);
new class MagmortarVariety extends Variety {}(
  PokemonVariety.Magmortar,
  PokemonSpecies.Magmortar,
  [ PokemonForm.Magmortar ],
  [ PokemonType.Fire ],
);
new class TogekissVariety extends Variety {}(
  PokemonVariety.Togekiss,
  PokemonSpecies.Togekiss,
  [ PokemonForm.Togekiss ],
  [ PokemonType.Fairy, PokemonType.Flying ],
);
new class YanmegaVariety extends Variety {}(
  PokemonVariety.Yanmega,
  PokemonSpecies.Yanmega,
  [ PokemonForm.Yanmega ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class LeafeonVariety extends Variety {}(
  PokemonVariety.Leafeon,
  PokemonSpecies.Leafeon,
  [ PokemonForm.Leafeon ],
  [ PokemonType.Grass ],
);
new class GlaceonVariety extends Variety {}(
  PokemonVariety.Glaceon,
  PokemonSpecies.Glaceon,
  [ PokemonForm.Glaceon ],
  [ PokemonType.Ice ],
);
new class GliscorVariety extends Variety {}(
  PokemonVariety.Gliscor,
  PokemonSpecies.Gliscor,
  [ PokemonForm.Gliscor ],
  [ PokemonType.Ground, PokemonType.Flying ],
);
new class MamoswineVariety extends Variety {}(
  PokemonVariety.Mamoswine,
  PokemonSpecies.Mamoswine,
  [ PokemonForm.Mamoswine ],
  [ PokemonType.Ice, PokemonType.Ground ],
);
new class PorygonZVariety extends Variety {}(
  PokemonVariety.PorygonZ,
  PokemonSpecies.PorygonZ,
  [ PokemonForm.PorygonZ ],
  [ PokemonType.Normal ],
);
new class GalladeVariety extends Variety {}(
  PokemonVariety.Gallade,
  PokemonSpecies.Gallade,
  [ PokemonForm.Gallade ],
  [ PokemonType.Psychic, PokemonType.Fighting ],
);
new class GalladeMegaVariety extends Variety {}(
  PokemonVariety.GalladeMega,
  PokemonSpecies.Gallade,
  [ PokemonForm.GalladeMega ],
  [ PokemonType.Psychic, PokemonType.Fighting ],
);
new class ProbopassVariety extends Variety {}(
  PokemonVariety.Probopass,
  PokemonSpecies.Probopass,
  [ PokemonForm.Probopass ],
  [ PokemonType.Rock, PokemonType.Steel ],
);
new class DusknoirVariety extends Variety {}(
  PokemonVariety.Dusknoir,
  PokemonSpecies.Dusknoir,
  [ PokemonForm.Dusknoir ],
  [ PokemonType.Ghost ],
);
new class FroslassVariety extends Variety {}(
  PokemonVariety.Froslass,
  PokemonSpecies.Froslass,
  [ PokemonForm.Froslass ],
  [ PokemonType.Ice, PokemonType.Ghost ],
);
new class RotomVariety extends Variety {}(
  PokemonVariety.Rotom,
  PokemonSpecies.Rotom,
  [ PokemonForm.Rotom ],
  [ PokemonType.Electric, PokemonType.Ghost ],
);
new class RotomHeatVariety extends Variety {}(
  PokemonVariety.RotomHeat,
  PokemonSpecies.Rotom,
  [ PokemonForm.RotomHeat ],
  [ PokemonType.Electric, PokemonType.Fire ],
);
new class RotomWashVariety extends Variety {}(
  PokemonVariety.RotomWash,
  PokemonSpecies.Rotom,
  [ PokemonForm.RotomWash ],
  [ PokemonType.Electric, PokemonType.Water ],
);
new class RotomFrostVariety extends Variety {}(
  PokemonVariety.RotomFrost,
  PokemonSpecies.Rotom,
  [ PokemonForm.RotomFrost ],
  [ PokemonType.Electric, PokemonType.Ice ],
);
new class RotomFanVariety extends Variety {}(
  PokemonVariety.RotomFan,
  PokemonSpecies.Rotom,
  [ PokemonForm.RotomFan ],
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class RotomMowVariety extends Variety {}(
  PokemonVariety.RotomMow,
  PokemonSpecies.Rotom,
  [ PokemonForm.RotomMow ],
  [ PokemonType.Electric, PokemonType.Grass ],
);
new class UxieVariety extends Variety {}(
  PokemonVariety.Uxie,
  PokemonSpecies.Uxie,
  [ PokemonForm.Uxie ],
  [ PokemonType.Psychic ],
);
new class MespritVariety extends Variety {}(
  PokemonVariety.Mesprit,
  PokemonSpecies.Mesprit,
  [ PokemonForm.Mesprit ],
  [ PokemonType.Psychic ],
);
new class AzelfVariety extends Variety {}(
  PokemonVariety.Azelf,
  PokemonSpecies.Azelf,
  [ PokemonForm.Azelf ],
  [ PokemonType.Psychic ],
);
new class DialgaVariety extends Variety {}(
  PokemonVariety.Dialga,
  PokemonSpecies.Dialga,
  [ PokemonForm.Dialga ],
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class DialgaOriginVariety extends Variety {}(
  PokemonVariety.DialgaOrigin,
  PokemonSpecies.Dialga,
  [ PokemonForm.DialgaOrigin ],
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class PalkiaVariety extends Variety {}(
  PokemonVariety.Palkia,
  PokemonSpecies.Palkia,
  [ PokemonForm.Palkia ],
  [ PokemonType.Water, PokemonType.Dragon ],
);
new class PalkiaOriginVariety extends Variety {}(
  PokemonVariety.PalkiaOrigin,
  PokemonSpecies.Palkia,
  [ PokemonForm.PalkiaOrigin ],
  [ PokemonType.Water, PokemonType.Dragon ],
);
new class HeatranVariety extends Variety {}(
  PokemonVariety.Heatran,
  PokemonSpecies.Heatran,
  [ PokemonForm.Heatran ],
  [ PokemonType.Fire, PokemonType.Steel ],
);
new class RegigigasVariety extends Variety {}(
  PokemonVariety.Regigigas,
  PokemonSpecies.Regigigas,
  [ PokemonForm.Regigigas ],
  [ PokemonType.Normal ],
);
new class GiratinaAlteredVariety extends Variety {}(
  PokemonVariety.GiratinaAltered,
  PokemonSpecies.Giratina,
  [ PokemonForm.GiratinaAltered ],
  [ PokemonType.Ghost, PokemonType.Dragon ],
);
new class GiratinaOriginVariety extends Variety {}(
  PokemonVariety.GiratinaOrigin,
  PokemonSpecies.Giratina,
  [ PokemonForm.GiratinaOrigin ],
  [ PokemonType.Ghost, PokemonType.Dragon ],
);
new class CresseliaVariety extends Variety {}(
  PokemonVariety.Cresselia,
  PokemonSpecies.Cresselia,
  [ PokemonForm.Cresselia ],
  [ PokemonType.Psychic ],
);
new class PhioneVariety extends Variety {}(
  PokemonVariety.Phione,
  PokemonSpecies.Phione,
  [ PokemonForm.Phione ],
  [ PokemonType.Water ],
);
new class ManaphyVariety extends Variety {}(
  PokemonVariety.Manaphy,
  PokemonSpecies.Manaphy,
  [ PokemonForm.Manaphy ],
  [ PokemonType.Water ],
);
new class DarkraiVariety extends Variety {}(
  PokemonVariety.Darkrai,
  PokemonSpecies.Darkrai,
  [ PokemonForm.Darkrai ],
  [ PokemonType.Dark ],
);
new class ShayminLandVariety extends Variety {}(
  PokemonVariety.ShayminLand,
  PokemonSpecies.Shaymin,
  [ PokemonForm.ShayminLand ],
  [ PokemonType.Grass ],
);
new class ShayminSkyVariety extends Variety {}(
  PokemonVariety.ShayminSky,
  PokemonSpecies.Shaymin,
  [ PokemonForm.ShayminSky ],
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class ArceusVariety extends Variety {}(
  PokemonVariety.Arceus,
  PokemonSpecies.Arceus,
  [ PokemonForm.ArceusNormal, PokemonForm.ArceusBug, PokemonForm.ArceusDark, PokemonForm.ArceusDragon, PokemonForm.ArceusElectric, PokemonForm.ArceusFighting, PokemonForm.ArceusFire, PokemonForm.ArceusFlying, PokemonForm.ArceusGhost, PokemonForm.ArceusGrass, PokemonForm.ArceusGround, PokemonForm.ArceusIce, PokemonForm.ArceusPoison, PokemonForm.ArceusPsychic, PokemonForm.ArceusRock, PokemonForm.ArceusSteel, PokemonForm.ArceusWater, PokemonForm.ArceusUnknown, PokemonForm.ArceusFairy ],
  [ PokemonType.Normal ],
);
new class VictiniVariety extends Variety {}(
  PokemonVariety.Victini,
  PokemonSpecies.Victini,
  [ PokemonForm.Victini ],
  [ PokemonType.Psychic, PokemonType.Fire ],
);
new class SnivyVariety extends Variety {}(
  PokemonVariety.Snivy,
  PokemonSpecies.Snivy,
  [ PokemonForm.Snivy ],
  [ PokemonType.Grass ],
);
new class ServineVariety extends Variety {}(
  PokemonVariety.Servine,
  PokemonSpecies.Servine,
  [ PokemonForm.Servine ],
  [ PokemonType.Grass ],
);
new class SerperiorVariety extends Variety {}(
  PokemonVariety.Serperior,
  PokemonSpecies.Serperior,
  [ PokemonForm.Serperior ],
  [ PokemonType.Grass ],
);
new class TepigVariety extends Variety {}(
  PokemonVariety.Tepig,
  PokemonSpecies.Tepig,
  [ PokemonForm.Tepig ],
  [ PokemonType.Fire ],
);
new class PigniteVariety extends Variety {}(
  PokemonVariety.Pignite,
  PokemonSpecies.Pignite,
  [ PokemonForm.Pignite ],
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class EmboarVariety extends Variety {}(
  PokemonVariety.Emboar,
  PokemonSpecies.Emboar,
  [ PokemonForm.Emboar ],
  [ PokemonType.Fire, PokemonType.Fighting ],
);
new class OshawottVariety extends Variety {}(
  PokemonVariety.Oshawott,
  PokemonSpecies.Oshawott,
  [ PokemonForm.Oshawott ],
  [ PokemonType.Water ],
);
new class DewottVariety extends Variety {}(
  PokemonVariety.Dewott,
  PokemonSpecies.Dewott,
  [ PokemonForm.Dewott ],
  [ PokemonType.Water ],
);
new class SamurottVariety extends Variety {}(
  PokemonVariety.Samurott,
  PokemonSpecies.Samurott,
  [ PokemonForm.Samurott ],
  [ PokemonType.Water ],
);
new class SamurottHisuiVariety extends Variety {}(
  PokemonVariety.SamurottHisui,
  PokemonSpecies.Samurott,
  [ PokemonForm.SamurottHisui ],
  [ PokemonType.Water, PokemonType.Dark ],
);
new class PatratVariety extends Variety {}(
  PokemonVariety.Patrat,
  PokemonSpecies.Patrat,
  [ PokemonForm.Patrat ],
  [ PokemonType.Normal ],
);
new class WatchogVariety extends Variety {}(
  PokemonVariety.Watchog,
  PokemonSpecies.Watchog,
  [ PokemonForm.Watchog ],
  [ PokemonType.Normal ],
);
new class LillipupVariety extends Variety {}(
  PokemonVariety.Lillipup,
  PokemonSpecies.Lillipup,
  [ PokemonForm.Lillipup ],
  [ PokemonType.Normal ],
);
new class HerdierVariety extends Variety {}(
  PokemonVariety.Herdier,
  PokemonSpecies.Herdier,
  [ PokemonForm.Herdier ],
  [ PokemonType.Normal ],
);
new class StoutlandVariety extends Variety {}(
  PokemonVariety.Stoutland,
  PokemonSpecies.Stoutland,
  [ PokemonForm.Stoutland ],
  [ PokemonType.Normal ],
);
new class PurrloinVariety extends Variety {}(
  PokemonVariety.Purrloin,
  PokemonSpecies.Purrloin,
  [ PokemonForm.Purrloin ],
  [ PokemonType.Dark ],
);
new class LiepardVariety extends Variety {}(
  PokemonVariety.Liepard,
  PokemonSpecies.Liepard,
  [ PokemonForm.Liepard ],
  [ PokemonType.Dark ],
);
new class PansageVariety extends Variety {}(
  PokemonVariety.Pansage,
  PokemonSpecies.Pansage,
  [ PokemonForm.Pansage ],
  [ PokemonType.Grass ],
);
new class SimisageVariety extends Variety {}(
  PokemonVariety.Simisage,
  PokemonSpecies.Simisage,
  [ PokemonForm.Simisage ],
  [ PokemonType.Grass ],
);
new class PansearVariety extends Variety {}(
  PokemonVariety.Pansear,
  PokemonSpecies.Pansear,
  [ PokemonForm.Pansear ],
  [ PokemonType.Fire ],
);
new class SimisearVariety extends Variety {}(
  PokemonVariety.Simisear,
  PokemonSpecies.Simisear,
  [ PokemonForm.Simisear ],
  [ PokemonType.Fire ],
);
new class PanpourVariety extends Variety {}(
  PokemonVariety.Panpour,
  PokemonSpecies.Panpour,
  [ PokemonForm.Panpour ],
  [ PokemonType.Water ],
);
new class SimipourVariety extends Variety {}(
  PokemonVariety.Simipour,
  PokemonSpecies.Simipour,
  [ PokemonForm.Simipour ],
  [ PokemonType.Water ],
);
new class MunnaVariety extends Variety {}(
  PokemonVariety.Munna,
  PokemonSpecies.Munna,
  [ PokemonForm.Munna ],
  [ PokemonType.Psychic ],
);
new class MusharnaVariety extends Variety {}(
  PokemonVariety.Musharna,
  PokemonSpecies.Musharna,
  [ PokemonForm.Musharna ],
  [ PokemonType.Psychic ],
);
new class PidoveVariety extends Variety {}(
  PokemonVariety.Pidove,
  PokemonSpecies.Pidove,
  [ PokemonForm.Pidove ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class TranquillVariety extends Variety {}(
  PokemonVariety.Tranquill,
  PokemonSpecies.Tranquill,
  [ PokemonForm.Tranquill ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class UnfezantVariety extends Variety {}(
  PokemonVariety.Unfezant,
  PokemonSpecies.Unfezant,
  [ PokemonForm.Unfezant ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class BlitzleVariety extends Variety {}(
  PokemonVariety.Blitzle,
  PokemonSpecies.Blitzle,
  [ PokemonForm.Blitzle ],
  [ PokemonType.Electric ],
);
new class ZebstrikaVariety extends Variety {}(
  PokemonVariety.Zebstrika,
  PokemonSpecies.Zebstrika,
  [ PokemonForm.Zebstrika ],
  [ PokemonType.Electric ],
);
new class RoggenrolaVariety extends Variety {}(
  PokemonVariety.Roggenrola,
  PokemonSpecies.Roggenrola,
  [ PokemonForm.Roggenrola ],
  [ PokemonType.Rock ],
);
new class BoldoreVariety extends Variety {}(
  PokemonVariety.Boldore,
  PokemonSpecies.Boldore,
  [ PokemonForm.Boldore ],
  [ PokemonType.Rock ],
);
new class GigalithVariety extends Variety {}(
  PokemonVariety.Gigalith,
  PokemonSpecies.Gigalith,
  [ PokemonForm.Gigalith ],
  [ PokemonType.Rock ],
);
new class WoobatVariety extends Variety {}(
  PokemonVariety.Woobat,
  PokemonSpecies.Woobat,
  [ PokemonForm.Woobat ],
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class SwoobatVariety extends Variety {}(
  PokemonVariety.Swoobat,
  PokemonSpecies.Swoobat,
  [ PokemonForm.Swoobat ],
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class DrilburVariety extends Variety {}(
  PokemonVariety.Drilbur,
  PokemonSpecies.Drilbur,
  [ PokemonForm.Drilbur ],
  [ PokemonType.Ground ],
);
new class ExcadrillVariety extends Variety {}(
  PokemonVariety.Excadrill,
  PokemonSpecies.Excadrill,
  [ PokemonForm.Excadrill ],
  [ PokemonType.Ground, PokemonType.Steel ],
);
new class AudinoVariety extends Variety {}(
  PokemonVariety.Audino,
  PokemonSpecies.Audino,
  [ PokemonForm.Audino ],
  [ PokemonType.Normal ],
);
new class AudinoMegaVariety extends Variety {}(
  PokemonVariety.AudinoMega,
  PokemonSpecies.Audino,
  [ PokemonForm.AudinoMega ],
  [ PokemonType.Normal, PokemonType.Fairy ],
);
new class TimburrVariety extends Variety {}(
  PokemonVariety.Timburr,
  PokemonSpecies.Timburr,
  [ PokemonForm.Timburr ],
  [ PokemonType.Fighting ],
);
new class GurdurrVariety extends Variety {}(
  PokemonVariety.Gurdurr,
  PokemonSpecies.Gurdurr,
  [ PokemonForm.Gurdurr ],
  [ PokemonType.Fighting ],
);
new class ConkeldurrVariety extends Variety {}(
  PokemonVariety.Conkeldurr,
  PokemonSpecies.Conkeldurr,
  [ PokemonForm.Conkeldurr ],
  [ PokemonType.Fighting ],
);
new class TympoleVariety extends Variety {}(
  PokemonVariety.Tympole,
  PokemonSpecies.Tympole,
  [ PokemonForm.Tympole ],
  [ PokemonType.Water ],
);
new class PalpitoadVariety extends Variety {}(
  PokemonVariety.Palpitoad,
  PokemonSpecies.Palpitoad,
  [ PokemonForm.Palpitoad ],
  [ PokemonType.Water, PokemonType.Ground ],
);
new class SeismitoadVariety extends Variety {}(
  PokemonVariety.Seismitoad,
  PokemonSpecies.Seismitoad,
  [ PokemonForm.Seismitoad ],
  [ PokemonType.Water, PokemonType.Ground ],
);
new class ThrohVariety extends Variety {}(
  PokemonVariety.Throh,
  PokemonSpecies.Throh,
  [ PokemonForm.Throh ],
  [ PokemonType.Fighting ],
);
new class SawkVariety extends Variety {}(
  PokemonVariety.Sawk,
  PokemonSpecies.Sawk,
  [ PokemonForm.Sawk ],
  [ PokemonType.Fighting ],
);
new class SewaddleVariety extends Variety {}(
  PokemonVariety.Sewaddle,
  PokemonSpecies.Sewaddle,
  [ PokemonForm.Sewaddle ],
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class SwadloonVariety extends Variety {}(
  PokemonVariety.Swadloon,
  PokemonSpecies.Swadloon,
  [ PokemonForm.Swadloon ],
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class LeavannyVariety extends Variety {}(
  PokemonVariety.Leavanny,
  PokemonSpecies.Leavanny,
  [ PokemonForm.Leavanny ],
  [ PokemonType.Bug, PokemonType.Grass ],
);
new class VenipedeVariety extends Variety {}(
  PokemonVariety.Venipede,
  PokemonSpecies.Venipede,
  [ PokemonForm.Venipede ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class WhirlipedeVariety extends Variety {}(
  PokemonVariety.Whirlipede,
  PokemonSpecies.Whirlipede,
  [ PokemonForm.Whirlipede ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class ScolipedeVariety extends Variety {}(
  PokemonVariety.Scolipede,
  PokemonSpecies.Scolipede,
  [ PokemonForm.Scolipede ],
  [ PokemonType.Bug, PokemonType.Poison ],
);
new class CottoneeVariety extends Variety {}(
  PokemonVariety.Cottonee,
  PokemonSpecies.Cottonee,
  [ PokemonForm.Cottonee ],
  [ PokemonType.Grass, PokemonType.Fairy ],
);
new class WhimsicottVariety extends Variety {}(
  PokemonVariety.Whimsicott,
  PokemonSpecies.Whimsicott,
  [ PokemonForm.Whimsicott ],
  [ PokemonType.Grass, PokemonType.Fairy ],
);
new class PetililVariety extends Variety {}(
  PokemonVariety.Petilil,
  PokemonSpecies.Petilil,
  [ PokemonForm.Petilil ],
  [ PokemonType.Grass ],
);
new class LilligantVariety extends Variety {}(
  PokemonVariety.Lilligant,
  PokemonSpecies.Lilligant,
  [ PokemonForm.Lilligant ],
  [ PokemonType.Grass ],
);
new class LilligantHisuiVariety extends Variety {}(
  PokemonVariety.LilligantHisui,
  PokemonSpecies.Lilligant,
  [ PokemonForm.LilligantHisui ],
  [ PokemonType.Grass, PokemonType.Fighting ],
);
new class BasculinRedStripedVariety extends Variety {}(
  PokemonVariety.BasculinRedStriped,
  PokemonSpecies.Basculin,
  [ PokemonForm.BasculinRedStriped ],
  [ PokemonType.Water ],
);
new class BasculinBlueStripedVariety extends Variety {}(
  PokemonVariety.BasculinBlueStriped,
  PokemonSpecies.Basculin,
  [ PokemonForm.BasculinBlueStriped ],
  [ PokemonType.Water ],
);
new class BasculinWhiteStripedVariety extends Variety {}(
  PokemonVariety.BasculinWhiteStriped,
  PokemonSpecies.Basculin,
  [ PokemonForm.BasculinWhiteStriped ],
  [ PokemonType.Water ],
);
new class SandileVariety extends Variety {}(
  PokemonVariety.Sandile,
  PokemonSpecies.Sandile,
  [ PokemonForm.Sandile ],
  [ PokemonType.Ground, PokemonType.Dark ],
);
new class KrokorokVariety extends Variety {}(
  PokemonVariety.Krokorok,
  PokemonSpecies.Krokorok,
  [ PokemonForm.Krokorok ],
  [ PokemonType.Ground, PokemonType.Dark ],
);
new class KrookodileVariety extends Variety {}(
  PokemonVariety.Krookodile,
  PokemonSpecies.Krookodile,
  [ PokemonForm.Krookodile ],
  [ PokemonType.Ground, PokemonType.Dark ],
);
new class DarumakaVariety extends Variety {}(
  PokemonVariety.Darumaka,
  PokemonSpecies.Darumaka,
  [ PokemonForm.Darumaka ],
  [ PokemonType.Fire ],
);
new class DarumakaGalarVariety extends Variety {}(
  PokemonVariety.DarumakaGalar,
  PokemonSpecies.Darumaka,
  [ PokemonForm.DarumakaGalar ],
  [ PokemonType.Ice ],
);
new class DarmanitanStandardVariety extends Variety {}(
  PokemonVariety.DarmanitanStandard,
  PokemonSpecies.Darmanitan,
  [ PokemonForm.DarmanitanStandard ],
  [ PokemonType.Fire ],
);
new class DarmanitanZenVariety extends Variety {}(
  PokemonVariety.DarmanitanZen,
  PokemonSpecies.Darmanitan,
  [ PokemonForm.DarmanitanZen ],
  [ PokemonType.Fire, PokemonType.Psychic ],
);
new class DarmanitanGalarStandardVariety extends Variety {}(
  PokemonVariety.DarmanitanGalarStandard,
  PokemonSpecies.Darmanitan,
  [ PokemonForm.DarmanitanGalarStandard ],
  [ PokemonType.Ice ],
);
new class DarmanitanGalarZenVariety extends Variety {}(
  PokemonVariety.DarmanitanGalarZen,
  PokemonSpecies.Darmanitan,
  [ PokemonForm.DarmanitanGalarZen ],
  [ PokemonType.Ice, PokemonType.Fire ],
);
new class MaractusVariety extends Variety {}(
  PokemonVariety.Maractus,
  PokemonSpecies.Maractus,
  [ PokemonForm.Maractus ],
  [ PokemonType.Grass ],
);
new class DwebbleVariety extends Variety {}(
  PokemonVariety.Dwebble,
  PokemonSpecies.Dwebble,
  [ PokemonForm.Dwebble ],
  [ PokemonType.Bug, PokemonType.Rock ],
);
new class CrustleVariety extends Variety {}(
  PokemonVariety.Crustle,
  PokemonSpecies.Crustle,
  [ PokemonForm.Crustle ],
  [ PokemonType.Bug, PokemonType.Rock ],
);
new class ScraggyVariety extends Variety {}(
  PokemonVariety.Scraggy,
  PokemonSpecies.Scraggy,
  [ PokemonForm.Scraggy ],
  [ PokemonType.Dark, PokemonType.Fighting ],
);
new class ScraftyVariety extends Variety {}(
  PokemonVariety.Scrafty,
  PokemonSpecies.Scrafty,
  [ PokemonForm.Scrafty ],
  [ PokemonType.Dark, PokemonType.Fighting ],
);
new class SigilyphVariety extends Variety {}(
  PokemonVariety.Sigilyph,
  PokemonSpecies.Sigilyph,
  [ PokemonForm.Sigilyph ],
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class YamaskVariety extends Variety {}(
  PokemonVariety.Yamask,
  PokemonSpecies.Yamask,
  [ PokemonForm.Yamask ],
  [ PokemonType.Ghost ],
);
new class YamaskGalarVariety extends Variety {}(
  PokemonVariety.YamaskGalar,
  PokemonSpecies.Yamask,
  [ PokemonForm.YamaskGalar ],
  [ PokemonType.Ground, PokemonType.Ghost ],
);
new class CofagrigusVariety extends Variety {}(
  PokemonVariety.Cofagrigus,
  PokemonSpecies.Cofagrigus,
  [ PokemonForm.Cofagrigus ],
  [ PokemonType.Ghost ],
);
new class TirtougaVariety extends Variety {}(
  PokemonVariety.Tirtouga,
  PokemonSpecies.Tirtouga,
  [ PokemonForm.Tirtouga ],
  [ PokemonType.Water, PokemonType.Rock ],
);
new class CarracostaVariety extends Variety {}(
  PokemonVariety.Carracosta,
  PokemonSpecies.Carracosta,
  [ PokemonForm.Carracosta ],
  [ PokemonType.Water, PokemonType.Rock ],
);
new class ArchenVariety extends Variety {}(
  PokemonVariety.Archen,
  PokemonSpecies.Archen,
  [ PokemonForm.Archen ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class ArcheopsVariety extends Variety {}(
  PokemonVariety.Archeops,
  PokemonSpecies.Archeops,
  [ PokemonForm.Archeops ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class TrubbishVariety extends Variety {}(
  PokemonVariety.Trubbish,
  PokemonSpecies.Trubbish,
  [ PokemonForm.Trubbish ],
  [ PokemonType.Poison ],
);
new class GarbodorVariety extends Variety {}(
  PokemonVariety.Garbodor,
  PokemonSpecies.Garbodor,
  [ PokemonForm.Garbodor ],
  [ PokemonType.Poison ],
);
new class GarbodorGmaxVariety extends Variety {}(
  PokemonVariety.GarbodorGmax,
  PokemonSpecies.Garbodor,
  [ PokemonForm.GarbodorGmax ],
  [ PokemonType.Poison ],
);
new class ZoruaVariety extends Variety {}(
  PokemonVariety.Zorua,
  PokemonSpecies.Zorua,
  [ PokemonForm.Zorua ],
  [ PokemonType.Dark ],
);
new class ZoruaHisuiVariety extends Variety {}(
  PokemonVariety.ZoruaHisui,
  PokemonSpecies.Zorua,
  [ PokemonForm.ZoruaHisui ],
  [ PokemonType.Normal, PokemonType.Ghost ],
);
new class ZoroarkVariety extends Variety {}(
  PokemonVariety.Zoroark,
  PokemonSpecies.Zoroark,
  [ PokemonForm.Zoroark ],
  [ PokemonType.Dark ],
);
new class ZoroarkHisuiVariety extends Variety {}(
  PokemonVariety.ZoroarkHisui,
  PokemonSpecies.Zoroark,
  [ PokemonForm.ZoroarkHisui ],
  [ PokemonType.Normal, PokemonType.Ghost ],
);
new class MinccinoVariety extends Variety {}(
  PokemonVariety.Minccino,
  PokemonSpecies.Minccino,
  [ PokemonForm.Minccino ],
  [ PokemonType.Normal ],
);
new class CinccinoVariety extends Variety {}(
  PokemonVariety.Cinccino,
  PokemonSpecies.Cinccino,
  [ PokemonForm.Cinccino ],
  [ PokemonType.Normal ],
);
new class GothitaVariety extends Variety {}(
  PokemonVariety.Gothita,
  PokemonSpecies.Gothita,
  [ PokemonForm.Gothita ],
  [ PokemonType.Psychic ],
);
new class GothoritaVariety extends Variety {}(
  PokemonVariety.Gothorita,
  PokemonSpecies.Gothorita,
  [ PokemonForm.Gothorita ],
  [ PokemonType.Psychic ],
);
new class GothitelleVariety extends Variety {}(
  PokemonVariety.Gothitelle,
  PokemonSpecies.Gothitelle,
  [ PokemonForm.Gothitelle ],
  [ PokemonType.Psychic ],
);
new class SolosisVariety extends Variety {}(
  PokemonVariety.Solosis,
  PokemonSpecies.Solosis,
  [ PokemonForm.Solosis ],
  [ PokemonType.Psychic ],
);
new class DuosionVariety extends Variety {}(
  PokemonVariety.Duosion,
  PokemonSpecies.Duosion,
  [ PokemonForm.Duosion ],
  [ PokemonType.Psychic ],
);
new class ReuniclusVariety extends Variety {}(
  PokemonVariety.Reuniclus,
  PokemonSpecies.Reuniclus,
  [ PokemonForm.Reuniclus ],
  [ PokemonType.Psychic ],
);
new class DucklettVariety extends Variety {}(
  PokemonVariety.Ducklett,
  PokemonSpecies.Ducklett,
  [ PokemonForm.Ducklett ],
  [ PokemonType.Water, PokemonType.Flying ],
);
new class SwannaVariety extends Variety {}(
  PokemonVariety.Swanna,
  PokemonSpecies.Swanna,
  [ PokemonForm.Swanna ],
  [ PokemonType.Water, PokemonType.Flying ],
);
new class VanilliteVariety extends Variety {}(
  PokemonVariety.Vanillite,
  PokemonSpecies.Vanillite,
  [ PokemonForm.Vanillite ],
  [ PokemonType.Ice ],
);
new class VanillishVariety extends Variety {}(
  PokemonVariety.Vanillish,
  PokemonSpecies.Vanillish,
  [ PokemonForm.Vanillish ],
  [ PokemonType.Ice ],
);
new class VanilluxeVariety extends Variety {}(
  PokemonVariety.Vanilluxe,
  PokemonSpecies.Vanilluxe,
  [ PokemonForm.Vanilluxe ],
  [ PokemonType.Ice ],
);
new class DeerlingVariety extends Variety {}(
  PokemonVariety.Deerling,
  PokemonSpecies.Deerling,
  [ PokemonForm.DeerlingSpring, PokemonForm.DeerlingSummer, PokemonForm.DeerlingAutumn, PokemonForm.DeerlingWinter ],
  [ PokemonType.Normal, PokemonType.Grass ],
);
new class SawsbuckVariety extends Variety {}(
  PokemonVariety.Sawsbuck,
  PokemonSpecies.Sawsbuck,
  [ PokemonForm.SawsbuckSpring, PokemonForm.SawsbuckSummer, PokemonForm.SawsbuckAutumn, PokemonForm.SawsbuckWinter ],
  [ PokemonType.Normal, PokemonType.Grass ],
);
new class EmolgaVariety extends Variety {}(
  PokemonVariety.Emolga,
  PokemonSpecies.Emolga,
  [ PokemonForm.Emolga ],
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class KarrablastVariety extends Variety {}(
  PokemonVariety.Karrablast,
  PokemonSpecies.Karrablast,
  [ PokemonForm.Karrablast ],
  [ PokemonType.Bug ],
);
new class EscavalierVariety extends Variety {}(
  PokemonVariety.Escavalier,
  PokemonSpecies.Escavalier,
  [ PokemonForm.Escavalier ],
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class FoongusVariety extends Variety {}(
  PokemonVariety.Foongus,
  PokemonSpecies.Foongus,
  [ PokemonForm.Foongus ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class AmoongussVariety extends Variety {}(
  PokemonVariety.Amoonguss,
  PokemonSpecies.Amoonguss,
  [ PokemonForm.Amoonguss ],
  [ PokemonType.Grass, PokemonType.Poison ],
);
new class FrillishVariety extends Variety {}(
  PokemonVariety.Frillish,
  PokemonSpecies.Frillish,
  [ PokemonForm.Frillish ],
  [ PokemonType.Water, PokemonType.Ghost ],
);
new class JellicentVariety extends Variety {}(
  PokemonVariety.Jellicent,
  PokemonSpecies.Jellicent,
  [ PokemonForm.Jellicent ],
  [ PokemonType.Water, PokemonType.Ghost ],
);
new class AlomomolaVariety extends Variety {}(
  PokemonVariety.Alomomola,
  PokemonSpecies.Alomomola,
  [ PokemonForm.Alomomola ],
  [ PokemonType.Water ],
);
new class JoltikVariety extends Variety {}(
  PokemonVariety.Joltik,
  PokemonSpecies.Joltik,
  [ PokemonForm.Joltik ],
  [ PokemonType.Bug, PokemonType.Electric ],
);
new class GalvantulaVariety extends Variety {}(
  PokemonVariety.Galvantula,
  PokemonSpecies.Galvantula,
  [ PokemonForm.Galvantula ],
  [ PokemonType.Bug, PokemonType.Electric ],
);
new class FerroseedVariety extends Variety {}(
  PokemonVariety.Ferroseed,
  PokemonSpecies.Ferroseed,
  [ PokemonForm.Ferroseed ],
  [ PokemonType.Grass, PokemonType.Steel ],
);
new class FerrothornVariety extends Variety {}(
  PokemonVariety.Ferrothorn,
  PokemonSpecies.Ferrothorn,
  [ PokemonForm.Ferrothorn ],
  [ PokemonType.Grass, PokemonType.Steel ],
);
new class KlinkVariety extends Variety {}(
  PokemonVariety.Klink,
  PokemonSpecies.Klink,
  [ PokemonForm.Klink ],
  [ PokemonType.Steel ],
);
new class KlangVariety extends Variety {}(
  PokemonVariety.Klang,
  PokemonSpecies.Klang,
  [ PokemonForm.Klang ],
  [ PokemonType.Steel ],
);
new class KlinklangVariety extends Variety {}(
  PokemonVariety.Klinklang,
  PokemonSpecies.Klinklang,
  [ PokemonForm.Klinklang ],
  [ PokemonType.Steel ],
);
new class TynamoVariety extends Variety {}(
  PokemonVariety.Tynamo,
  PokemonSpecies.Tynamo,
  [ PokemonForm.Tynamo ],
  [ PokemonType.Electric ],
);
new class EelektrikVariety extends Variety {}(
  PokemonVariety.Eelektrik,
  PokemonSpecies.Eelektrik,
  [ PokemonForm.Eelektrik ],
  [ PokemonType.Electric ],
);
new class EelektrossVariety extends Variety {}(
  PokemonVariety.Eelektross,
  PokemonSpecies.Eelektross,
  [ PokemonForm.Eelektross ],
  [ PokemonType.Electric ],
);
new class ElgyemVariety extends Variety {}(
  PokemonVariety.Elgyem,
  PokemonSpecies.Elgyem,
  [ PokemonForm.Elgyem ],
  [ PokemonType.Psychic ],
);
new class BeheeyemVariety extends Variety {}(
  PokemonVariety.Beheeyem,
  PokemonSpecies.Beheeyem,
  [ PokemonForm.Beheeyem ],
  [ PokemonType.Psychic ],
);
new class LitwickVariety extends Variety {}(
  PokemonVariety.Litwick,
  PokemonSpecies.Litwick,
  [ PokemonForm.Litwick ],
  [ PokemonType.Ghost, PokemonType.Fire ],
);
new class LampentVariety extends Variety {}(
  PokemonVariety.Lampent,
  PokemonSpecies.Lampent,
  [ PokemonForm.Lampent ],
  [ PokemonType.Ghost, PokemonType.Fire ],
);
new class ChandelureVariety extends Variety {}(
  PokemonVariety.Chandelure,
  PokemonSpecies.Chandelure,
  [ PokemonForm.Chandelure ],
  [ PokemonType.Ghost, PokemonType.Fire ],
);
new class AxewVariety extends Variety {}(
  PokemonVariety.Axew,
  PokemonSpecies.Axew,
  [ PokemonForm.Axew ],
  [ PokemonType.Dragon ],
);
new class FraxureVariety extends Variety {}(
  PokemonVariety.Fraxure,
  PokemonSpecies.Fraxure,
  [ PokemonForm.Fraxure ],
  [ PokemonType.Dragon ],
);
new class HaxorusVariety extends Variety {}(
  PokemonVariety.Haxorus,
  PokemonSpecies.Haxorus,
  [ PokemonForm.Haxorus ],
  [ PokemonType.Dragon ],
);
new class CubchooVariety extends Variety {}(
  PokemonVariety.Cubchoo,
  PokemonSpecies.Cubchoo,
  [ PokemonForm.Cubchoo ],
  [ PokemonType.Ice ],
);
new class BearticVariety extends Variety {}(
  PokemonVariety.Beartic,
  PokemonSpecies.Beartic,
  [ PokemonForm.Beartic ],
  [ PokemonType.Ice ],
);
new class CryogonalVariety extends Variety {}(
  PokemonVariety.Cryogonal,
  PokemonSpecies.Cryogonal,
  [ PokemonForm.Cryogonal ],
  [ PokemonType.Ice ],
);
new class ShelmetVariety extends Variety {}(
  PokemonVariety.Shelmet,
  PokemonSpecies.Shelmet,
  [ PokemonForm.Shelmet ],
  [ PokemonType.Bug ],
);
new class AccelgorVariety extends Variety {}(
  PokemonVariety.Accelgor,
  PokemonSpecies.Accelgor,
  [ PokemonForm.Accelgor ],
  [ PokemonType.Bug ],
);
new class StunfiskVariety extends Variety {}(
  PokemonVariety.Stunfisk,
  PokemonSpecies.Stunfisk,
  [ PokemonForm.Stunfisk ],
  [ PokemonType.Ground, PokemonType.Electric ],
);
new class StunfiskGalarVariety extends Variety {}(
  PokemonVariety.StunfiskGalar,
  PokemonSpecies.Stunfisk,
  [ PokemonForm.StunfiskGalar ],
  [ PokemonType.Ground, PokemonType.Steel ],
);
new class MienfooVariety extends Variety {}(
  PokemonVariety.Mienfoo,
  PokemonSpecies.Mienfoo,
  [ PokemonForm.Mienfoo ],
  [ PokemonType.Fighting ],
);
new class MienshaoVariety extends Variety {}(
  PokemonVariety.Mienshao,
  PokemonSpecies.Mienshao,
  [ PokemonForm.Mienshao ],
  [ PokemonType.Fighting ],
);
new class DruddigonVariety extends Variety {}(
  PokemonVariety.Druddigon,
  PokemonSpecies.Druddigon,
  [ PokemonForm.Druddigon ],
  [ PokemonType.Dragon ],
);
new class GolettVariety extends Variety {}(
  PokemonVariety.Golett,
  PokemonSpecies.Golett,
  [ PokemonForm.Golett ],
  [ PokemonType.Ground, PokemonType.Ghost ],
);
new class GolurkVariety extends Variety {}(
  PokemonVariety.Golurk,
  PokemonSpecies.Golurk,
  [ PokemonForm.Golurk ],
  [ PokemonType.Ground, PokemonType.Ghost ],
);
new class PawniardVariety extends Variety {}(
  PokemonVariety.Pawniard,
  PokemonSpecies.Pawniard,
  [ PokemonForm.Pawniard ],
  [ PokemonType.Dark, PokemonType.Steel ],
);
new class BisharpVariety extends Variety {}(
  PokemonVariety.Bisharp,
  PokemonSpecies.Bisharp,
  [ PokemonForm.Bisharp ],
  [ PokemonType.Dark, PokemonType.Steel ],
);
new class BouffalantVariety extends Variety {}(
  PokemonVariety.Bouffalant,
  PokemonSpecies.Bouffalant,
  [ PokemonForm.Bouffalant ],
  [ PokemonType.Normal ],
);
new class RuffletVariety extends Variety {}(
  PokemonVariety.Rufflet,
  PokemonSpecies.Rufflet,
  [ PokemonForm.Rufflet ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class BraviaryVariety extends Variety {}(
  PokemonVariety.Braviary,
  PokemonSpecies.Braviary,
  [ PokemonForm.Braviary ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class BraviaryHisuiVariety extends Variety {}(
  PokemonVariety.BraviaryHisui,
  PokemonSpecies.Braviary,
  [ PokemonForm.BraviaryHisui ],
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class VullabyVariety extends Variety {}(
  PokemonVariety.Vullaby,
  PokemonSpecies.Vullaby,
  [ PokemonForm.Vullaby ],
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class MandibuzzVariety extends Variety {}(
  PokemonVariety.Mandibuzz,
  PokemonSpecies.Mandibuzz,
  [ PokemonForm.Mandibuzz ],
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class HeatmorVariety extends Variety {}(
  PokemonVariety.Heatmor,
  PokemonSpecies.Heatmor,
  [ PokemonForm.Heatmor ],
  [ PokemonType.Fire ],
);
new class DurantVariety extends Variety {}(
  PokemonVariety.Durant,
  PokemonSpecies.Durant,
  [ PokemonForm.Durant ],
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class DeinoVariety extends Variety {}(
  PokemonVariety.Deino,
  PokemonSpecies.Deino,
  [ PokemonForm.Deino ],
  [ PokemonType.Dark, PokemonType.Dragon ],
);
new class ZweilousVariety extends Variety {}(
  PokemonVariety.Zweilous,
  PokemonSpecies.Zweilous,
  [ PokemonForm.Zweilous ],
  [ PokemonType.Dark, PokemonType.Dragon ],
);
new class HydreigonVariety extends Variety {}(
  PokemonVariety.Hydreigon,
  PokemonSpecies.Hydreigon,
  [ PokemonForm.Hydreigon ],
  [ PokemonType.Dark, PokemonType.Dragon ],
);
new class LarvestaVariety extends Variety {}(
  PokemonVariety.Larvesta,
  PokemonSpecies.Larvesta,
  [ PokemonForm.Larvesta ],
  [ PokemonType.Bug, PokemonType.Fire ],
);
new class VolcaronaVariety extends Variety {}(
  PokemonVariety.Volcarona,
  PokemonSpecies.Volcarona,
  [ PokemonForm.Volcarona ],
  [ PokemonType.Bug, PokemonType.Fire ],
);
new class CobalionVariety extends Variety {}(
  PokemonVariety.Cobalion,
  PokemonSpecies.Cobalion,
  [ PokemonForm.Cobalion ],
  [ PokemonType.Steel, PokemonType.Fighting ],
);
new class TerrakionVariety extends Variety {}(
  PokemonVariety.Terrakion,
  PokemonSpecies.Terrakion,
  [ PokemonForm.Terrakion ],
  [ PokemonType.Rock, PokemonType.Fighting ],
);
new class VirizionVariety extends Variety {}(
  PokemonVariety.Virizion,
  PokemonSpecies.Virizion,
  [ PokemonForm.Virizion ],
  [ PokemonType.Grass, PokemonType.Fighting ],
);
new class TornadusIncarnateVariety extends Variety {}(
  PokemonVariety.TornadusIncarnate,
  PokemonSpecies.Tornadus,
  [ PokemonForm.TornadusIncarnate ],
  [ PokemonType.Flying ],
);
new class TornadusTherianVariety extends Variety {}(
  PokemonVariety.TornadusTherian,
  PokemonSpecies.Tornadus,
  [ PokemonForm.TornadusTherian ],
  [ PokemonType.Flying ],
);
new class ThundurusIncarnateVariety extends Variety {}(
  PokemonVariety.ThundurusIncarnate,
  PokemonSpecies.Thundurus,
  [ PokemonForm.ThundurusIncarnate ],
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class ThundurusTherianVariety extends Variety {}(
  PokemonVariety.ThundurusTherian,
  PokemonSpecies.Thundurus,
  [ PokemonForm.ThundurusTherian ],
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class ReshiramVariety extends Variety {}(
  PokemonVariety.Reshiram,
  PokemonSpecies.Reshiram,
  [ PokemonForm.Reshiram ],
  [ PokemonType.Dragon, PokemonType.Fire ],
);
new class ZekromVariety extends Variety {}(
  PokemonVariety.Zekrom,
  PokemonSpecies.Zekrom,
  [ PokemonForm.Zekrom ],
  [ PokemonType.Dragon, PokemonType.Electric ],
);
new class LandorusIncarnateVariety extends Variety {}(
  PokemonVariety.LandorusIncarnate,
  PokemonSpecies.Landorus,
  [ PokemonForm.LandorusIncarnate ],
  [ PokemonType.Ground, PokemonType.Flying ],
);
new class LandorusTherianVariety extends Variety {}(
  PokemonVariety.LandorusTherian,
  PokemonSpecies.Landorus,
  [ PokemonForm.LandorusTherian ],
  [ PokemonType.Ground, PokemonType.Flying ],
);
new class KyuremVariety extends Variety {}(
  PokemonVariety.Kyurem,
  PokemonSpecies.Kyurem,
  [ PokemonForm.Kyurem ],
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class KyuremBlackVariety extends Variety {}(
  PokemonVariety.KyuremBlack,
  PokemonSpecies.Kyurem,
  [ PokemonForm.KyuremBlack ],
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class KyuremWhiteVariety extends Variety {}(
  PokemonVariety.KyuremWhite,
  PokemonSpecies.Kyurem,
  [ PokemonForm.KyuremWhite ],
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class KeldeoOrdinaryVariety extends Variety {}(
  PokemonVariety.KeldeoOrdinary,
  PokemonSpecies.Keldeo,
  [ PokemonForm.KeldeoOrdinary ],
  [ PokemonType.Water, PokemonType.Fighting ],
);
new class KeldeoResoluteVariety extends Variety {}(
  PokemonVariety.KeldeoResolute,
  PokemonSpecies.Keldeo,
  [ PokemonForm.KeldeoResolute ],
  [ PokemonType.Water, PokemonType.Fighting ],
);
new class MeloettaAriaVariety extends Variety {}(
  PokemonVariety.MeloettaAria,
  PokemonSpecies.Meloetta,
  [ PokemonForm.MeloettaAria ],
  [ PokemonType.Normal, PokemonType.Psychic ],
);
new class MeloettaPirouetteVariety extends Variety {}(
  PokemonVariety.MeloettaPirouette,
  PokemonSpecies.Meloetta,
  [ PokemonForm.MeloettaPirouette ],
  [ PokemonType.Normal, PokemonType.Fighting ],
);
new class GenesectVariety extends Variety {}(
  PokemonVariety.Genesect,
  PokemonSpecies.Genesect,
  [ PokemonForm.Genesect, PokemonForm.GenesectDouse, PokemonForm.GenesectShock, PokemonForm.GenesectBurn, PokemonForm.GenesectChill ],
  [ PokemonType.Bug, PokemonType.Steel ],
);
new class ChespinVariety extends Variety {}(
  PokemonVariety.Chespin,
  PokemonSpecies.Chespin,
  [ PokemonForm.Chespin ],
  [ PokemonType.Grass ],
);
new class QuilladinVariety extends Variety {}(
  PokemonVariety.Quilladin,
  PokemonSpecies.Quilladin,
  [ PokemonForm.Quilladin ],
  [ PokemonType.Grass ],
);
new class ChesnaughtVariety extends Variety {}(
  PokemonVariety.Chesnaught,
  PokemonSpecies.Chesnaught,
  [ PokemonForm.Chesnaught ],
  [ PokemonType.Grass, PokemonType.Fighting ],
);
new class FennekinVariety extends Variety {}(
  PokemonVariety.Fennekin,
  PokemonSpecies.Fennekin,
  [ PokemonForm.Fennekin ],
  [ PokemonType.Fire ],
);
new class BraixenVariety extends Variety {}(
  PokemonVariety.Braixen,
  PokemonSpecies.Braixen,
  [ PokemonForm.Braixen ],
  [ PokemonType.Fire ],
);
new class DelphoxVariety extends Variety {}(
  PokemonVariety.Delphox,
  PokemonSpecies.Delphox,
  [ PokemonForm.Delphox ],
  [ PokemonType.Fire, PokemonType.Psychic ],
);
new class FroakieVariety extends Variety {}(
  PokemonVariety.Froakie,
  PokemonSpecies.Froakie,
  [ PokemonForm.Froakie ],
  [ PokemonType.Water ],
);
new class FrogadierVariety extends Variety {}(
  PokemonVariety.Frogadier,
  PokemonSpecies.Frogadier,
  [ PokemonForm.Frogadier ],
  [ PokemonType.Water ],
);
new class GreninjaVariety extends Variety {}(
  PokemonVariety.Greninja,
  PokemonSpecies.Greninja,
  [ PokemonForm.Greninja ],
  [ PokemonType.Water, PokemonType.Dark ],
);
new class GreninjaBattleBondVariety extends Variety {}(
  PokemonVariety.GreninjaBattleBond,
  PokemonSpecies.Greninja,
  [ PokemonForm.GreninjaBattleBond ],
  [ PokemonType.Water, PokemonType.Dark ],
);
new class GreninjaAshVariety extends Variety {}(
  PokemonVariety.GreninjaAsh,
  PokemonSpecies.Greninja,
  [ PokemonForm.GreninjaAsh ],
  [ PokemonType.Water, PokemonType.Dark ],
);
new class BunnelbyVariety extends Variety {}(
  PokemonVariety.Bunnelby,
  PokemonSpecies.Bunnelby,
  [ PokemonForm.Bunnelby ],
  [ PokemonType.Normal ],
);
new class DiggersbyVariety extends Variety {}(
  PokemonVariety.Diggersby,
  PokemonSpecies.Diggersby,
  [ PokemonForm.Diggersby ],
  [ PokemonType.Normal, PokemonType.Ground ],
);
new class FletchlingVariety extends Variety {}(
  PokemonVariety.Fletchling,
  PokemonSpecies.Fletchling,
  [ PokemonForm.Fletchling ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class FletchinderVariety extends Variety {}(
  PokemonVariety.Fletchinder,
  PokemonSpecies.Fletchinder,
  [ PokemonForm.Fletchinder ],
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class TalonflameVariety extends Variety {}(
  PokemonVariety.Talonflame,
  PokemonSpecies.Talonflame,
  [ PokemonForm.Talonflame ],
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class ScatterbugVariety extends Variety {}(
  PokemonVariety.Scatterbug,
  PokemonSpecies.Scatterbug,
  [ PokemonForm.ScatterbugIcySnow, PokemonForm.ScatterbugPolar, PokemonForm.ScatterbugTundra, PokemonForm.ScatterbugContinental, PokemonForm.ScatterbugGarden, PokemonForm.ScatterbugElegant, PokemonForm.ScatterbugMeadow, PokemonForm.ScatterbugModern, PokemonForm.ScatterbugMarine, PokemonForm.ScatterbugArchipelago, PokemonForm.ScatterbugHighPlains, PokemonForm.ScatterbugSandstorm, PokemonForm.ScatterbugRiver, PokemonForm.ScatterbugMonsoon, PokemonForm.ScatterbugSavanna, PokemonForm.ScatterbugSun, PokemonForm.ScatterbugOcean, PokemonForm.ScatterbugJungle, PokemonForm.ScatterbugFancy, PokemonForm.ScatterbugPokeBall ],
  [ PokemonType.Bug ],
);
new class SpewpaVariety extends Variety {}(
  PokemonVariety.Spewpa,
  PokemonSpecies.Spewpa,
  [ PokemonForm.SpewpaIcySnow, PokemonForm.SpewpaPolar, PokemonForm.SpewpaTundra, PokemonForm.SpewpaContinental, PokemonForm.SpewpaGarden, PokemonForm.SpewpaElegant, PokemonForm.SpewpaMeadow, PokemonForm.SpewpaModern, PokemonForm.SpewpaMarine, PokemonForm.SpewpaArchipelago, PokemonForm.SpewpaHighPlains, PokemonForm.SpewpaSandstorm, PokemonForm.SpewpaRiver, PokemonForm.SpewpaMonsoon, PokemonForm.SpewpaSavanna, PokemonForm.SpewpaSun, PokemonForm.SpewpaOcean, PokemonForm.SpewpaJungle, PokemonForm.SpewpaFancy, PokemonForm.SpewpaPokeBall ],
  [ PokemonType.Bug ],
);
new class VivillonVariety extends Variety {}(
  PokemonVariety.Vivillon,
  PokemonSpecies.Vivillon,
  [ PokemonForm.VivillonMeadow, PokemonForm.VivillonIcySnow, PokemonForm.VivillonPolar, PokemonForm.VivillonTundra, PokemonForm.VivillonContinental, PokemonForm.VivillonGarden, PokemonForm.VivillonElegant, PokemonForm.VivillonModern, PokemonForm.VivillonMarine, PokemonForm.VivillonArchipelago, PokemonForm.VivillonHighPlains, PokemonForm.VivillonSandstorm, PokemonForm.VivillonRiver, PokemonForm.VivillonMonsoon, PokemonForm.VivillonSavanna, PokemonForm.VivillonSun, PokemonForm.VivillonOcean, PokemonForm.VivillonJungle, PokemonForm.VivillonFancy, PokemonForm.VivillonPokeBall ],
  [ PokemonType.Bug, PokemonType.Flying ],
);
new class LitleoVariety extends Variety {}(
  PokemonVariety.Litleo,
  PokemonSpecies.Litleo,
  [ PokemonForm.Litleo ],
  [ PokemonType.Fire, PokemonType.Normal ],
);
new class PyroarVariety extends Variety {}(
  PokemonVariety.Pyroar,
  PokemonSpecies.Pyroar,
  [ PokemonForm.Pyroar ],
  [ PokemonType.Fire, PokemonType.Normal ],
);
new class FlabebeVariety extends Variety {}(
  PokemonVariety.Flabebe,
  PokemonSpecies.Flabebe,
  [ PokemonForm.FlabebeRed, PokemonForm.FlabebeYellow, PokemonForm.FlabebeOrange, PokemonForm.FlabebeBlue, PokemonForm.FlabebeWhite ],
  [ PokemonType.Fairy ],
);
new class FloetteVariety extends Variety {}(
  PokemonVariety.Floette,
  PokemonSpecies.Floette,
  [ PokemonForm.FloetteRed, PokemonForm.FloetteYellow, PokemonForm.FloetteOrange, PokemonForm.FloetteBlue, PokemonForm.FloetteWhite ],
  [ PokemonType.Fairy ],
);
new class FloetteEternalVariety extends Variety {}(
  PokemonVariety.FloetteEternal,
  PokemonSpecies.Floette,
  [ PokemonForm.FloetteEternal ],
  [ PokemonType.Fairy ],
);
new class FlorgesVariety extends Variety {}(
  PokemonVariety.Florges,
  PokemonSpecies.Florges,
  [ PokemonForm.FlorgesRed, PokemonForm.FlorgesYellow, PokemonForm.FlorgesOrange, PokemonForm.FlorgesBlue, PokemonForm.FlorgesWhite ],
  [ PokemonType.Fairy ],
);
new class SkiddoVariety extends Variety {}(
  PokemonVariety.Skiddo,
  PokemonSpecies.Skiddo,
  [ PokemonForm.Skiddo ],
  [ PokemonType.Grass ],
);
new class GogoatVariety extends Variety {}(
  PokemonVariety.Gogoat,
  PokemonSpecies.Gogoat,
  [ PokemonForm.Gogoat ],
  [ PokemonType.Grass ],
);
new class PanchamVariety extends Variety {}(
  PokemonVariety.Pancham,
  PokemonSpecies.Pancham,
  [ PokemonForm.Pancham ],
  [ PokemonType.Fighting ],
);
new class PangoroVariety extends Variety {}(
  PokemonVariety.Pangoro,
  PokemonSpecies.Pangoro,
  [ PokemonForm.Pangoro ],
  [ PokemonType.Fighting, PokemonType.Dark ],
);
new class FurfrouVariety extends Variety {}(
  PokemonVariety.Furfrou,
  PokemonSpecies.Furfrou,
  [ PokemonForm.FurfrouNatural, PokemonForm.FurfrouHeart, PokemonForm.FurfrouStar, PokemonForm.FurfrouDiamond, PokemonForm.FurfrouDebutante, PokemonForm.FurfrouMatron, PokemonForm.FurfrouDandy, PokemonForm.FurfrouLaReine, PokemonForm.FurfrouKabuki, PokemonForm.FurfrouPharaoh ],
  [ PokemonType.Normal ],
);
new class EspurrVariety extends Variety {}(
  PokemonVariety.Espurr,
  PokemonSpecies.Espurr,
  [ PokemonForm.Espurr ],
  [ PokemonType.Psychic ],
);
new class MeowsticMaleVariety extends Variety {}(
  PokemonVariety.MeowsticMale,
  PokemonSpecies.Meowstic,
  [ PokemonForm.MeowsticMale ],
  [ PokemonType.Psychic ],
);
new class MeowsticFemaleVariety extends Variety {}(
  PokemonVariety.MeowsticFemale,
  PokemonSpecies.Meowstic,
  [ PokemonForm.MeowsticFemale ],
  [ PokemonType.Psychic ],
);
new class HonedgeVariety extends Variety {}(
  PokemonVariety.Honedge,
  PokemonSpecies.Honedge,
  [ PokemonForm.Honedge ],
  [ PokemonType.Steel, PokemonType.Ghost ],
);
new class DoubladeVariety extends Variety {}(
  PokemonVariety.Doublade,
  PokemonSpecies.Doublade,
  [ PokemonForm.Doublade ],
  [ PokemonType.Steel, PokemonType.Ghost ],
);
new class AegislashShieldVariety extends Variety {}(
  PokemonVariety.AegislashShield,
  PokemonSpecies.Aegislash,
  [ PokemonForm.AegislashShield ],
  [ PokemonType.Steel, PokemonType.Ghost ],
);
new class AegislashBladeVariety extends Variety {}(
  PokemonVariety.AegislashBlade,
  PokemonSpecies.Aegislash,
  [ PokemonForm.AegislashBlade ],
  [ PokemonType.Steel, PokemonType.Ghost ],
);
new class SpritzeeVariety extends Variety {}(
  PokemonVariety.Spritzee,
  PokemonSpecies.Spritzee,
  [ PokemonForm.Spritzee ],
  [ PokemonType.Fairy ],
);
new class AromatisseVariety extends Variety {}(
  PokemonVariety.Aromatisse,
  PokemonSpecies.Aromatisse,
  [ PokemonForm.Aromatisse ],
  [ PokemonType.Fairy ],
);
new class SwirlixVariety extends Variety {}(
  PokemonVariety.Swirlix,
  PokemonSpecies.Swirlix,
  [ PokemonForm.Swirlix ],
  [ PokemonType.Fairy ],
);
new class SlurpuffVariety extends Variety {}(
  PokemonVariety.Slurpuff,
  PokemonSpecies.Slurpuff,
  [ PokemonForm.Slurpuff ],
  [ PokemonType.Fairy ],
);
new class InkayVariety extends Variety {}(
  PokemonVariety.Inkay,
  PokemonSpecies.Inkay,
  [ PokemonForm.Inkay ],
  [ PokemonType.Dark, PokemonType.Psychic ],
);
new class MalamarVariety extends Variety {}(
  PokemonVariety.Malamar,
  PokemonSpecies.Malamar,
  [ PokemonForm.Malamar ],
  [ PokemonType.Dark, PokemonType.Psychic ],
);
new class BinacleVariety extends Variety {}(
  PokemonVariety.Binacle,
  PokemonSpecies.Binacle,
  [ PokemonForm.Binacle ],
  [ PokemonType.Rock, PokemonType.Water ],
);
new class BarbaracleVariety extends Variety {}(
  PokemonVariety.Barbaracle,
  PokemonSpecies.Barbaracle,
  [ PokemonForm.Barbaracle ],
  [ PokemonType.Rock, PokemonType.Water ],
);
new class SkrelpVariety extends Variety {}(
  PokemonVariety.Skrelp,
  PokemonSpecies.Skrelp,
  [ PokemonForm.Skrelp ],
  [ PokemonType.Poison, PokemonType.Water ],
);
new class DragalgeVariety extends Variety {}(
  PokemonVariety.Dragalge,
  PokemonSpecies.Dragalge,
  [ PokemonForm.Dragalge ],
  [ PokemonType.Poison, PokemonType.Dragon ],
);
new class ClauncherVariety extends Variety {}(
  PokemonVariety.Clauncher,
  PokemonSpecies.Clauncher,
  [ PokemonForm.Clauncher ],
  [ PokemonType.Water ],
);
new class ClawitzerVariety extends Variety {}(
  PokemonVariety.Clawitzer,
  PokemonSpecies.Clawitzer,
  [ PokemonForm.Clawitzer ],
  [ PokemonType.Water ],
);
new class HelioptileVariety extends Variety {}(
  PokemonVariety.Helioptile,
  PokemonSpecies.Helioptile,
  [ PokemonForm.Helioptile ],
  [ PokemonType.Electric, PokemonType.Normal ],
);
new class HelioliskVariety extends Variety {}(
  PokemonVariety.Heliolisk,
  PokemonSpecies.Heliolisk,
  [ PokemonForm.Heliolisk ],
  [ PokemonType.Electric, PokemonType.Normal ],
);
new class TyruntVariety extends Variety {}(
  PokemonVariety.Tyrunt,
  PokemonSpecies.Tyrunt,
  [ PokemonForm.Tyrunt ],
  [ PokemonType.Rock, PokemonType.Dragon ],
);
new class TyrantrumVariety extends Variety {}(
  PokemonVariety.Tyrantrum,
  PokemonSpecies.Tyrantrum,
  [ PokemonForm.Tyrantrum ],
  [ PokemonType.Rock, PokemonType.Dragon ],
);
new class AmauraVariety extends Variety {}(
  PokemonVariety.Amaura,
  PokemonSpecies.Amaura,
  [ PokemonForm.Amaura ],
  [ PokemonType.Rock, PokemonType.Ice ],
);
new class AurorusVariety extends Variety {}(
  PokemonVariety.Aurorus,
  PokemonSpecies.Aurorus,
  [ PokemonForm.Aurorus ],
  [ PokemonType.Rock, PokemonType.Ice ],
);
new class SylveonVariety extends Variety {}(
  PokemonVariety.Sylveon,
  PokemonSpecies.Sylveon,
  [ PokemonForm.Sylveon ],
  [ PokemonType.Fairy ],
);
new class HawluchaVariety extends Variety {}(
  PokemonVariety.Hawlucha,
  PokemonSpecies.Hawlucha,
  [ PokemonForm.Hawlucha ],
  [ PokemonType.Fighting, PokemonType.Flying ],
);
new class DedenneVariety extends Variety {}(
  PokemonVariety.Dedenne,
  PokemonSpecies.Dedenne,
  [ PokemonForm.Dedenne ],
  [ PokemonType.Electric, PokemonType.Fairy ],
);
new class CarbinkVariety extends Variety {}(
  PokemonVariety.Carbink,
  PokemonSpecies.Carbink,
  [ PokemonForm.Carbink ],
  [ PokemonType.Rock, PokemonType.Fairy ],
);
new class GoomyVariety extends Variety {}(
  PokemonVariety.Goomy,
  PokemonSpecies.Goomy,
  [ PokemonForm.Goomy ],
  [ PokemonType.Dragon ],
);
new class SliggooVariety extends Variety {}(
  PokemonVariety.Sliggoo,
  PokemonSpecies.Sliggoo,
  [ PokemonForm.Sliggoo ],
  [ PokemonType.Dragon ],
);
new class SliggooHisuiVariety extends Variety {}(
  PokemonVariety.SliggooHisui,
  PokemonSpecies.Sliggoo,
  [ PokemonForm.SliggooHisui ],
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class GoodraVariety extends Variety {}(
  PokemonVariety.Goodra,
  PokemonSpecies.Goodra,
  [ PokemonForm.Goodra ],
  [ PokemonType.Dragon ],
);
new class GoodraHisuiVariety extends Variety {}(
  PokemonVariety.GoodraHisui,
  PokemonSpecies.Goodra,
  [ PokemonForm.GoodraHisui ],
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class KlefkiVariety extends Variety {}(
  PokemonVariety.Klefki,
  PokemonSpecies.Klefki,
  [ PokemonForm.Klefki ],
  [ PokemonType.Steel, PokemonType.Fairy ],
);
new class PhantumpVariety extends Variety {}(
  PokemonVariety.Phantump,
  PokemonSpecies.Phantump,
  [ PokemonForm.Phantump ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class TrevenantVariety extends Variety {}(
  PokemonVariety.Trevenant,
  PokemonSpecies.Trevenant,
  [ PokemonForm.Trevenant ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class PumpkabooAverageVariety extends Variety {}(
  PokemonVariety.PumpkabooAverage,
  PokemonSpecies.Pumpkaboo,
  [ PokemonForm.PumpkabooAverage ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class PumpkabooSmallVariety extends Variety {}(
  PokemonVariety.PumpkabooSmall,
  PokemonSpecies.Pumpkaboo,
  [ PokemonForm.PumpkabooSmall ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class PumpkabooLargeVariety extends Variety {}(
  PokemonVariety.PumpkabooLarge,
  PokemonSpecies.Pumpkaboo,
  [ PokemonForm.PumpkabooLarge ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class PumpkabooSuperVariety extends Variety {}(
  PokemonVariety.PumpkabooSuper,
  PokemonSpecies.Pumpkaboo,
  [ PokemonForm.PumpkabooSuper ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class GourgeistAverageVariety extends Variety {}(
  PokemonVariety.GourgeistAverage,
  PokemonSpecies.Gourgeist,
  [ PokemonForm.GourgeistAverage ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class GourgeistSmallVariety extends Variety {}(
  PokemonVariety.GourgeistSmall,
  PokemonSpecies.Gourgeist,
  [ PokemonForm.GourgeistSmall ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class GourgeistLargeVariety extends Variety {}(
  PokemonVariety.GourgeistLarge,
  PokemonSpecies.Gourgeist,
  [ PokemonForm.GourgeistLarge ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class GourgeistSuperVariety extends Variety {}(
  PokemonVariety.GourgeistSuper,
  PokemonSpecies.Gourgeist,
  [ PokemonForm.GourgeistSuper ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class BergmiteVariety extends Variety {}(
  PokemonVariety.Bergmite,
  PokemonSpecies.Bergmite,
  [ PokemonForm.Bergmite ],
  [ PokemonType.Ice ],
);
new class AvaluggVariety extends Variety {}(
  PokemonVariety.Avalugg,
  PokemonSpecies.Avalugg,
  [ PokemonForm.Avalugg ],
  [ PokemonType.Ice ],
);
new class AvaluggHisuiVariety extends Variety {}(
  PokemonVariety.AvaluggHisui,
  PokemonSpecies.Avalugg,
  [ PokemonForm.AvaluggHisui ],
  [ PokemonType.Ice, PokemonType.Rock ],
);
new class NoibatVariety extends Variety {}(
  PokemonVariety.Noibat,
  PokemonSpecies.Noibat,
  [ PokemonForm.Noibat ],
  [ PokemonType.Flying, PokemonType.Dragon ],
);
new class NoivernVariety extends Variety {}(
  PokemonVariety.Noivern,
  PokemonSpecies.Noivern,
  [ PokemonForm.Noivern ],
  [ PokemonType.Flying, PokemonType.Dragon ],
);
new class XerneasVariety extends Variety {}(
  PokemonVariety.Xerneas,
  PokemonSpecies.Xerneas,
  [ PokemonForm.XerneasActive, PokemonForm.XerneasNeutral ],
  [ PokemonType.Fairy ],
);
new class YveltalVariety extends Variety {}(
  PokemonVariety.Yveltal,
  PokemonSpecies.Yveltal,
  [ PokemonForm.Yveltal ],
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class Zygarde50Variety extends Variety {}(
  PokemonVariety.Zygarde50,
  PokemonSpecies.Zygarde,
  [ PokemonForm.Zygarde50 ],
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class Zygarde10PowerConstructVariety extends Variety {}(
  PokemonVariety.Zygarde10PowerConstruct,
  PokemonSpecies.Zygarde,
  [ PokemonForm.Zygarde10PowerConstruct ],
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class Zygarde50PowerConstructVariety extends Variety {}(
  PokemonVariety.Zygarde50PowerConstruct,
  PokemonSpecies.Zygarde,
  [ PokemonForm.Zygarde50PowerConstruct ],
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class ZygardeCompleteVariety extends Variety {}(
  PokemonVariety.ZygardeComplete,
  PokemonSpecies.Zygarde,
  [ PokemonForm.ZygardeComplete ],
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class Zygarde10Variety extends Variety {}(
  PokemonVariety.Zygarde10,
  PokemonSpecies.Zygarde,
  [ PokemonForm.Zygarde10 ],
  [ PokemonType.Dragon, PokemonType.Ground ],
);
new class DiancieVariety extends Variety {}(
  PokemonVariety.Diancie,
  PokemonSpecies.Diancie,
  [ PokemonForm.Diancie ],
  [ PokemonType.Rock, PokemonType.Fairy ],
);
new class DiancieMegaVariety extends Variety {}(
  PokemonVariety.DiancieMega,
  PokemonSpecies.Diancie,
  [ PokemonForm.DiancieMega ],
  [ PokemonType.Rock, PokemonType.Fairy ],
);
new class HoopaVariety extends Variety {}(
  PokemonVariety.Hoopa,
  PokemonSpecies.Hoopa,
  [ PokemonForm.Hoopa ],
  [ PokemonType.Psychic, PokemonType.Ghost ],
);
new class HoopaUnboundVariety extends Variety {}(
  PokemonVariety.HoopaUnbound,
  PokemonSpecies.Hoopa,
  [ PokemonForm.HoopaUnbound ],
  [ PokemonType.Psychic, PokemonType.Dark ],
);
new class VolcanionVariety extends Variety {}(
  PokemonVariety.Volcanion,
  PokemonSpecies.Volcanion,
  [ PokemonForm.Volcanion ],
  [ PokemonType.Fire, PokemonType.Water ],
);
new class RowletVariety extends Variety {}(
  PokemonVariety.Rowlet,
  PokemonSpecies.Rowlet,
  [ PokemonForm.Rowlet ],
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class DartrixVariety extends Variety {}(
  PokemonVariety.Dartrix,
  PokemonSpecies.Dartrix,
  [ PokemonForm.Dartrix ],
  [ PokemonType.Grass, PokemonType.Flying ],
);
new class DecidueyeVariety extends Variety {}(
  PokemonVariety.Decidueye,
  PokemonSpecies.Decidueye,
  [ PokemonForm.Decidueye ],
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class DecidueyeHisuiVariety extends Variety {}(
  PokemonVariety.DecidueyeHisui,
  PokemonSpecies.Decidueye,
  [ PokemonForm.DecidueyeHisui ],
  [ PokemonType.Grass, PokemonType.Fighting ],
);
new class LittenVariety extends Variety {}(
  PokemonVariety.Litten,
  PokemonSpecies.Litten,
  [ PokemonForm.Litten ],
  [ PokemonType.Fire ],
);
new class TorracatVariety extends Variety {}(
  PokemonVariety.Torracat,
  PokemonSpecies.Torracat,
  [ PokemonForm.Torracat ],
  [ PokemonType.Fire ],
);
new class IncineroarVariety extends Variety {}(
  PokemonVariety.Incineroar,
  PokemonSpecies.Incineroar,
  [ PokemonForm.Incineroar ],
  [ PokemonType.Fire, PokemonType.Dark ],
);
new class PopplioVariety extends Variety {}(
  PokemonVariety.Popplio,
  PokemonSpecies.Popplio,
  [ PokemonForm.Popplio ],
  [ PokemonType.Water ],
);
new class BrionneVariety extends Variety {}(
  PokemonVariety.Brionne,
  PokemonSpecies.Brionne,
  [ PokemonForm.Brionne ],
  [ PokemonType.Water ],
);
new class PrimarinaVariety extends Variety {}(
  PokemonVariety.Primarina,
  PokemonSpecies.Primarina,
  [ PokemonForm.Primarina ],
  [ PokemonType.Water, PokemonType.Fairy ],
);
new class PikipekVariety extends Variety {}(
  PokemonVariety.Pikipek,
  PokemonSpecies.Pikipek,
  [ PokemonForm.Pikipek ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class TrumbeakVariety extends Variety {}(
  PokemonVariety.Trumbeak,
  PokemonSpecies.Trumbeak,
  [ PokemonForm.Trumbeak ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class ToucannonVariety extends Variety {}(
  PokemonVariety.Toucannon,
  PokemonSpecies.Toucannon,
  [ PokemonForm.Toucannon ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class YungoosVariety extends Variety {}(
  PokemonVariety.Yungoos,
  PokemonSpecies.Yungoos,
  [ PokemonForm.Yungoos ],
  [ PokemonType.Normal ],
);
new class GumshoosVariety extends Variety {}(
  PokemonVariety.Gumshoos,
  PokemonSpecies.Gumshoos,
  [ PokemonForm.Gumshoos ],
  [ PokemonType.Normal ],
);
new class GumshoosTotemVariety extends Variety {}(
  PokemonVariety.GumshoosTotem,
  PokemonSpecies.Gumshoos,
  [ PokemonForm.GumshoosTotem ],
  [ PokemonType.Normal ],
);
new class GrubbinVariety extends Variety {}(
  PokemonVariety.Grubbin,
  PokemonSpecies.Grubbin,
  [ PokemonForm.Grubbin ],
  [ PokemonType.Bug ],
);
new class CharjabugVariety extends Variety {}(
  PokemonVariety.Charjabug,
  PokemonSpecies.Charjabug,
  [ PokemonForm.Charjabug ],
  [ PokemonType.Bug, PokemonType.Electric ],
);
new class VikavoltVariety extends Variety {}(
  PokemonVariety.Vikavolt,
  PokemonSpecies.Vikavolt,
  [ PokemonForm.Vikavolt ],
  [ PokemonType.Bug, PokemonType.Electric ],
);
new class VikavoltTotemVariety extends Variety {}(
  PokemonVariety.VikavoltTotem,
  PokemonSpecies.Vikavolt,
  [ PokemonForm.VikavoltTotem ],
  [ PokemonType.Bug, PokemonType.Electric ],
);
new class CrabrawlerVariety extends Variety {}(
  PokemonVariety.Crabrawler,
  PokemonSpecies.Crabrawler,
  [ PokemonForm.Crabrawler ],
  [ PokemonType.Fighting ],
);
new class CrabominableVariety extends Variety {}(
  PokemonVariety.Crabominable,
  PokemonSpecies.Crabominable,
  [ PokemonForm.Crabominable ],
  [ PokemonType.Fighting, PokemonType.Ice ],
);
new class OricorioBaileVariety extends Variety {}(
  PokemonVariety.OricorioBaile,
  PokemonSpecies.Oricorio,
  [ PokemonForm.OricorioBaile ],
  [ PokemonType.Fire, PokemonType.Flying ],
);
new class OricorioPomPomVariety extends Variety {}(
  PokemonVariety.OricorioPomPom,
  PokemonSpecies.Oricorio,
  [ PokemonForm.OricorioPomPom ],
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class OricorioPauVariety extends Variety {}(
  PokemonVariety.OricorioPau,
  PokemonSpecies.Oricorio,
  [ PokemonForm.OricorioPau ],
  [ PokemonType.Psychic, PokemonType.Flying ],
);
new class OricorioSensuVariety extends Variety {}(
  PokemonVariety.OricorioSensu,
  PokemonSpecies.Oricorio,
  [ PokemonForm.OricorioSensu ],
  [ PokemonType.Ghost, PokemonType.Flying ],
);
new class CutieflyVariety extends Variety {}(
  PokemonVariety.Cutiefly,
  PokemonSpecies.Cutiefly,
  [ PokemonForm.Cutiefly ],
  [ PokemonType.Bug, PokemonType.Fairy ],
);
new class RibombeeVariety extends Variety {}(
  PokemonVariety.Ribombee,
  PokemonSpecies.Ribombee,
  [ PokemonForm.Ribombee ],
  [ PokemonType.Bug, PokemonType.Fairy ],
);
new class RibombeeTotemVariety extends Variety {}(
  PokemonVariety.RibombeeTotem,
  PokemonSpecies.Ribombee,
  [ PokemonForm.RibombeeTotem ],
  [ PokemonType.Bug, PokemonType.Fairy ],
);
new class RockruffVariety extends Variety {}(
  PokemonVariety.Rockruff,
  PokemonSpecies.Rockruff,
  [ PokemonForm.Rockruff ],
  [ PokemonType.Rock ],
);
new class RockruffOwnTempoVariety extends Variety {}(
  PokemonVariety.RockruffOwnTempo,
  PokemonSpecies.Rockruff,
  [ PokemonForm.RockruffOwnTempo ],
  [ PokemonType.Rock ],
);
new class LycanrocMiddayVariety extends Variety {}(
  PokemonVariety.LycanrocMidday,
  PokemonSpecies.Lycanroc,
  [ PokemonForm.LycanrocMidday ],
  [ PokemonType.Rock ],
);
new class LycanrocMidnightVariety extends Variety {}(
  PokemonVariety.LycanrocMidnight,
  PokemonSpecies.Lycanroc,
  [ PokemonForm.LycanrocMidnight ],
  [ PokemonType.Rock ],
);
new class LycanrocDuskVariety extends Variety {}(
  PokemonVariety.LycanrocDusk,
  PokemonSpecies.Lycanroc,
  [ PokemonForm.LycanrocDusk ],
  [ PokemonType.Rock ],
);
new class WishiwashiSoloVariety extends Variety {}(
  PokemonVariety.WishiwashiSolo,
  PokemonSpecies.Wishiwashi,
  [ PokemonForm.WishiwashiSolo ],
  [ PokemonType.Water ],
);
new class WishiwashiSchoolVariety extends Variety {}(
  PokemonVariety.WishiwashiSchool,
  PokemonSpecies.Wishiwashi,
  [ PokemonForm.WishiwashiSchool ],
  [ PokemonType.Water ],
);
new class MareanieVariety extends Variety {}(
  PokemonVariety.Mareanie,
  PokemonSpecies.Mareanie,
  [ PokemonForm.Mareanie ],
  [ PokemonType.Poison, PokemonType.Water ],
);
new class ToxapexVariety extends Variety {}(
  PokemonVariety.Toxapex,
  PokemonSpecies.Toxapex,
  [ PokemonForm.Toxapex ],
  [ PokemonType.Poison, PokemonType.Water ],
);
new class MudbrayVariety extends Variety {}(
  PokemonVariety.Mudbray,
  PokemonSpecies.Mudbray,
  [ PokemonForm.Mudbray ],
  [ PokemonType.Ground ],
);
new class MudsdaleVariety extends Variety {}(
  PokemonVariety.Mudsdale,
  PokemonSpecies.Mudsdale,
  [ PokemonForm.Mudsdale ],
  [ PokemonType.Ground ],
);
new class DewpiderVariety extends Variety {}(
  PokemonVariety.Dewpider,
  PokemonSpecies.Dewpider,
  [ PokemonForm.Dewpider ],
  [ PokemonType.Water, PokemonType.Bug ],
);
new class AraquanidVariety extends Variety {}(
  PokemonVariety.Araquanid,
  PokemonSpecies.Araquanid,
  [ PokemonForm.Araquanid ],
  [ PokemonType.Water, PokemonType.Bug ],
);
new class AraquanidTotemVariety extends Variety {}(
  PokemonVariety.AraquanidTotem,
  PokemonSpecies.Araquanid,
  [ PokemonForm.AraquanidTotem ],
  [ PokemonType.Water, PokemonType.Bug ],
);
new class FomantisVariety extends Variety {}(
  PokemonVariety.Fomantis,
  PokemonSpecies.Fomantis,
  [ PokemonForm.Fomantis ],
  [ PokemonType.Grass ],
);
new class LurantisVariety extends Variety {}(
  PokemonVariety.Lurantis,
  PokemonSpecies.Lurantis,
  [ PokemonForm.Lurantis ],
  [ PokemonType.Grass ],
);
new class LurantisTotemVariety extends Variety {}(
  PokemonVariety.LurantisTotem,
  PokemonSpecies.Lurantis,
  [ PokemonForm.LurantisTotem ],
  [ PokemonType.Grass ],
);
new class MorelullVariety extends Variety {}(
  PokemonVariety.Morelull,
  PokemonSpecies.Morelull,
  [ PokemonForm.Morelull ],
  [ PokemonType.Grass, PokemonType.Fairy ],
);
new class ShiinoticVariety extends Variety {}(
  PokemonVariety.Shiinotic,
  PokemonSpecies.Shiinotic,
  [ PokemonForm.Shiinotic ],
  [ PokemonType.Grass, PokemonType.Fairy ],
);
new class SalanditVariety extends Variety {}(
  PokemonVariety.Salandit,
  PokemonSpecies.Salandit,
  [ PokemonForm.Salandit ],
  [ PokemonType.Poison, PokemonType.Fire ],
);
new class SalazzleVariety extends Variety {}(
  PokemonVariety.Salazzle,
  PokemonSpecies.Salazzle,
  [ PokemonForm.Salazzle ],
  [ PokemonType.Poison, PokemonType.Fire ],
);
new class SalazzleTotemVariety extends Variety {}(
  PokemonVariety.SalazzleTotem,
  PokemonSpecies.Salazzle,
  [ PokemonForm.SalazzleTotem ],
  [ PokemonType.Poison, PokemonType.Fire ],
);
new class StuffulVariety extends Variety {}(
  PokemonVariety.Stufful,
  PokemonSpecies.Stufful,
  [ PokemonForm.Stufful ],
  [ PokemonType.Normal, PokemonType.Fighting ],
);
new class BewearVariety extends Variety {}(
  PokemonVariety.Bewear,
  PokemonSpecies.Bewear,
  [ PokemonForm.Bewear ],
  [ PokemonType.Normal, PokemonType.Fighting ],
);
new class BounsweetVariety extends Variety {}(
  PokemonVariety.Bounsweet,
  PokemonSpecies.Bounsweet,
  [ PokemonForm.Bounsweet ],
  [ PokemonType.Grass ],
);
new class SteeneeVariety extends Variety {}(
  PokemonVariety.Steenee,
  PokemonSpecies.Steenee,
  [ PokemonForm.Steenee ],
  [ PokemonType.Grass ],
);
new class TsareenaVariety extends Variety {}(
  PokemonVariety.Tsareena,
  PokemonSpecies.Tsareena,
  [ PokemonForm.Tsareena ],
  [ PokemonType.Grass ],
);
new class ComfeyVariety extends Variety {}(
  PokemonVariety.Comfey,
  PokemonSpecies.Comfey,
  [ PokemonForm.Comfey ],
  [ PokemonType.Fairy ],
);
new class OranguruVariety extends Variety {}(
  PokemonVariety.Oranguru,
  PokemonSpecies.Oranguru,
  [ PokemonForm.Oranguru ],
  [ PokemonType.Normal, PokemonType.Psychic ],
);
new class PassimianVariety extends Variety {}(
  PokemonVariety.Passimian,
  PokemonSpecies.Passimian,
  [ PokemonForm.Passimian ],
  [ PokemonType.Fighting ],
);
new class WimpodVariety extends Variety {}(
  PokemonVariety.Wimpod,
  PokemonSpecies.Wimpod,
  [ PokemonForm.Wimpod ],
  [ PokemonType.Bug, PokemonType.Water ],
);
new class GolisopodVariety extends Variety {}(
  PokemonVariety.Golisopod,
  PokemonSpecies.Golisopod,
  [ PokemonForm.Golisopod ],
  [ PokemonType.Bug, PokemonType.Water ],
);
new class SandygastVariety extends Variety {}(
  PokemonVariety.Sandygast,
  PokemonSpecies.Sandygast,
  [ PokemonForm.Sandygast ],
  [ PokemonType.Ghost, PokemonType.Ground ],
);
new class PalossandVariety extends Variety {}(
  PokemonVariety.Palossand,
  PokemonSpecies.Palossand,
  [ PokemonForm.Palossand ],
  [ PokemonType.Ghost, PokemonType.Ground ],
);
new class PyukumukuVariety extends Variety {}(
  PokemonVariety.Pyukumuku,
  PokemonSpecies.Pyukumuku,
  [ PokemonForm.Pyukumuku ],
  [ PokemonType.Water ],
);
new class TypeNullVariety extends Variety {}(
  PokemonVariety.TypeNull,
  PokemonSpecies.TypeNull,
  [ PokemonForm.TypeNull ],
  [ PokemonType.Normal ],
);
new class SilvallyVariety extends Variety {}(
  PokemonVariety.Silvally,
  PokemonSpecies.Silvally,
  [ PokemonForm.SilvallyNormal, PokemonForm.SilvallyFighting, PokemonForm.SilvallyFlying, PokemonForm.SilvallyPoison, PokemonForm.SilvallyGround, PokemonForm.SilvallyRock, PokemonForm.SilvallyBug, PokemonForm.SilvallyGhost, PokemonForm.SilvallySteel, PokemonForm.SilvallyFire, PokemonForm.SilvallyWater, PokemonForm.SilvallyGrass, PokemonForm.SilvallyElectric, PokemonForm.SilvallyPsychic, PokemonForm.SilvallyIce, PokemonForm.SilvallyDragon, PokemonForm.SilvallyDark, PokemonForm.SilvallyFairy ],
  [ PokemonType.Normal ],
);
new class MiniorRedMeteorVariety extends Variety {}(
  PokemonVariety.MiniorRedMeteor,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorRedMeteor ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorOrangeMeteorVariety extends Variety {}(
  PokemonVariety.MiniorOrangeMeteor,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorOrangeMeteor ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorYellowMeteorVariety extends Variety {}(
  PokemonVariety.MiniorYellowMeteor,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorYellowMeteor ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorGreenMeteorVariety extends Variety {}(
  PokemonVariety.MiniorGreenMeteor,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorGreenMeteor ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorBlueMeteorVariety extends Variety {}(
  PokemonVariety.MiniorBlueMeteor,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorBlueMeteor ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorIndigoMeteorVariety extends Variety {}(
  PokemonVariety.MiniorIndigoMeteor,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorIndigoMeteor ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorVioletMeteorVariety extends Variety {}(
  PokemonVariety.MiniorVioletMeteor,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorVioletMeteor ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorRedVariety extends Variety {}(
  PokemonVariety.MiniorRed,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorRed ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorOrangeVariety extends Variety {}(
  PokemonVariety.MiniorOrange,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorOrange ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorYellowVariety extends Variety {}(
  PokemonVariety.MiniorYellow,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorYellow ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorGreenVariety extends Variety {}(
  PokemonVariety.MiniorGreen,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorGreen ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorBlueVariety extends Variety {}(
  PokemonVariety.MiniorBlue,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorBlue ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorIndigoVariety extends Variety {}(
  PokemonVariety.MiniorIndigo,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorIndigo ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class MiniorVioletVariety extends Variety {}(
  PokemonVariety.MiniorViolet,
  PokemonSpecies.Minior,
  [ PokemonForm.MiniorViolet ],
  [ PokemonType.Rock, PokemonType.Flying ],
);
new class KomalaVariety extends Variety {}(
  PokemonVariety.Komala,
  PokemonSpecies.Komala,
  [ PokemonForm.Komala ],
  [ PokemonType.Normal ],
);
new class TurtonatorVariety extends Variety {}(
  PokemonVariety.Turtonator,
  PokemonSpecies.Turtonator,
  [ PokemonForm.Turtonator ],
  [ PokemonType.Fire, PokemonType.Dragon ],
);
new class TogedemaruVariety extends Variety {}(
  PokemonVariety.Togedemaru,
  PokemonSpecies.Togedemaru,
  [ PokemonForm.Togedemaru ],
  [ PokemonType.Electric, PokemonType.Steel ],
);
new class TogedemaruTotemVariety extends Variety {}(
  PokemonVariety.TogedemaruTotem,
  PokemonSpecies.Togedemaru,
  [ PokemonForm.TogedemaruTotem ],
  [ PokemonType.Electric, PokemonType.Steel ],
);
new class MimikyuDisguisedVariety extends Variety {}(
  PokemonVariety.MimikyuDisguised,
  PokemonSpecies.Mimikyu,
  [ PokemonForm.MimikyuDisguised ],
  [ PokemonType.Ghost, PokemonType.Fairy ],
);
new class MimikyuBustedVariety extends Variety {}(
  PokemonVariety.MimikyuBusted,
  PokemonSpecies.Mimikyu,
  [ PokemonForm.MimikyuBusted ],
  [ PokemonType.Ghost, PokemonType.Fairy ],
);
new class MimikyuTotemDisguisedVariety extends Variety {}(
  PokemonVariety.MimikyuTotemDisguised,
  PokemonSpecies.Mimikyu,
  [ PokemonForm.MimikyuTotemDisguised ],
  [ PokemonType.Ghost, PokemonType.Fairy ],
);
new class MimikyuTotemBustedVariety extends Variety {}(
  PokemonVariety.MimikyuTotemBusted,
  PokemonSpecies.Mimikyu,
  [ PokemonForm.MimikyuTotemBusted ],
  [ PokemonType.Ghost, PokemonType.Fairy ],
);
new class BruxishVariety extends Variety {}(
  PokemonVariety.Bruxish,
  PokemonSpecies.Bruxish,
  [ PokemonForm.Bruxish ],
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class DrampaVariety extends Variety {}(
  PokemonVariety.Drampa,
  PokemonSpecies.Drampa,
  [ PokemonForm.Drampa ],
  [ PokemonType.Normal, PokemonType.Dragon ],
);
new class DhelmiseVariety extends Variety {}(
  PokemonVariety.Dhelmise,
  PokemonSpecies.Dhelmise,
  [ PokemonForm.Dhelmise ],
  [ PokemonType.Ghost, PokemonType.Grass ],
);
new class JangmoOVariety extends Variety {}(
  PokemonVariety.JangmoO,
  PokemonSpecies.JangmoO,
  [ PokemonForm.JangmoO ],
  [ PokemonType.Dragon ],
);
new class HakamoOVariety extends Variety {}(
  PokemonVariety.HakamoO,
  PokemonSpecies.HakamoO,
  [ PokemonForm.HakamoO ],
  [ PokemonType.Dragon, PokemonType.Fighting ],
);
new class KommoOVariety extends Variety {}(
  PokemonVariety.KommoO,
  PokemonSpecies.KommoO,
  [ PokemonForm.KommoO ],
  [ PokemonType.Dragon, PokemonType.Fighting ],
);
new class KommoOTotemVariety extends Variety {}(
  PokemonVariety.KommoOTotem,
  PokemonSpecies.KommoO,
  [ PokemonForm.KommoOTotem ],
  [ PokemonType.Dragon, PokemonType.Fighting ],
);
new class TapuKokoVariety extends Variety {}(
  PokemonVariety.TapuKoko,
  PokemonSpecies.TapuKoko,
  [ PokemonForm.TapuKoko ],
  [ PokemonType.Electric, PokemonType.Fairy ],
);
new class TapuLeleVariety extends Variety {}(
  PokemonVariety.TapuLele,
  PokemonSpecies.TapuLele,
  [ PokemonForm.TapuLele ],
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class TapuBuluVariety extends Variety {}(
  PokemonVariety.TapuBulu,
  PokemonSpecies.TapuBulu,
  [ PokemonForm.TapuBulu ],
  [ PokemonType.Grass, PokemonType.Fairy ],
);
new class TapuFiniVariety extends Variety {}(
  PokemonVariety.TapuFini,
  PokemonSpecies.TapuFini,
  [ PokemonForm.TapuFini ],
  [ PokemonType.Water, PokemonType.Fairy ],
);
new class CosmogVariety extends Variety {}(
  PokemonVariety.Cosmog,
  PokemonSpecies.Cosmog,
  [ PokemonForm.Cosmog ],
  [ PokemonType.Psychic ],
);
new class CosmoemVariety extends Variety {}(
  PokemonVariety.Cosmoem,
  PokemonSpecies.Cosmoem,
  [ PokemonForm.Cosmoem ],
  [ PokemonType.Psychic ],
);
new class SolgaleoVariety extends Variety {}(
  PokemonVariety.Solgaleo,
  PokemonSpecies.Solgaleo,
  [ PokemonForm.Solgaleo ],
  [ PokemonType.Psychic, PokemonType.Steel ],
);
new class LunalaVariety extends Variety {}(
  PokemonVariety.Lunala,
  PokemonSpecies.Lunala,
  [ PokemonForm.Lunala ],
  [ PokemonType.Psychic, PokemonType.Ghost ],
);
new class NihilegoVariety extends Variety {}(
  PokemonVariety.Nihilego,
  PokemonSpecies.Nihilego,
  [ PokemonForm.Nihilego ],
  [ PokemonType.Rock, PokemonType.Poison ],
);
new class BuzzwoleVariety extends Variety {}(
  PokemonVariety.Buzzwole,
  PokemonSpecies.Buzzwole,
  [ PokemonForm.Buzzwole ],
  [ PokemonType.Bug, PokemonType.Fighting ],
);
new class PheromosaVariety extends Variety {}(
  PokemonVariety.Pheromosa,
  PokemonSpecies.Pheromosa,
  [ PokemonForm.Pheromosa ],
  [ PokemonType.Bug, PokemonType.Fighting ],
);
new class XurkitreeVariety extends Variety {}(
  PokemonVariety.Xurkitree,
  PokemonSpecies.Xurkitree,
  [ PokemonForm.Xurkitree ],
  [ PokemonType.Electric ],
);
new class CelesteelaVariety extends Variety {}(
  PokemonVariety.Celesteela,
  PokemonSpecies.Celesteela,
  [ PokemonForm.Celesteela ],
  [ PokemonType.Steel, PokemonType.Flying ],
);
new class KartanaVariety extends Variety {}(
  PokemonVariety.Kartana,
  PokemonSpecies.Kartana,
  [ PokemonForm.Kartana ],
  [ PokemonType.Grass, PokemonType.Steel ],
);
new class GuzzlordVariety extends Variety {}(
  PokemonVariety.Guzzlord,
  PokemonSpecies.Guzzlord,
  [ PokemonForm.Guzzlord ],
  [ PokemonType.Dark, PokemonType.Dragon ],
);
new class NecrozmaVariety extends Variety {}(
  PokemonVariety.Necrozma,
  PokemonSpecies.Necrozma,
  [ PokemonForm.Necrozma ],
  [ PokemonType.Psychic ],
);
new class NecrozmaDuskVariety extends Variety {}(
  PokemonVariety.NecrozmaDusk,
  PokemonSpecies.Necrozma,
  [ PokemonForm.NecrozmaDusk ],
  [ PokemonType.Psychic, PokemonType.Steel ],
);
new class NecrozmaDawnVariety extends Variety {}(
  PokemonVariety.NecrozmaDawn,
  PokemonSpecies.Necrozma,
  [ PokemonForm.NecrozmaDawn ],
  [ PokemonType.Psychic, PokemonType.Ghost ],
);
new class NecrozmaUltraVariety extends Variety {}(
  PokemonVariety.NecrozmaUltra,
  PokemonSpecies.Necrozma,
  [ PokemonForm.NecrozmaUltra ],
  [ PokemonType.Psychic, PokemonType.Dragon ],
);
new class MagearnaVariety extends Variety {}(
  PokemonVariety.Magearna,
  PokemonSpecies.Magearna,
  [ PokemonForm.Magearna ],
  [ PokemonType.Steel, PokemonType.Fairy ],
);
new class MagearnaOriginalVariety extends Variety {}(
  PokemonVariety.MagearnaOriginal,
  PokemonSpecies.Magearna,
  [ PokemonForm.MagearnaOriginal ],
  [ PokemonType.Steel, PokemonType.Fairy ],
);
new class MarshadowVariety extends Variety {}(
  PokemonVariety.Marshadow,
  PokemonSpecies.Marshadow,
  [ PokemonForm.Marshadow ],
  [ PokemonType.Fighting, PokemonType.Ghost ],
);
new class PoipoleVariety extends Variety {}(
  PokemonVariety.Poipole,
  PokemonSpecies.Poipole,
  [ PokemonForm.Poipole ],
  [ PokemonType.Poison ],
);
new class NaganadelVariety extends Variety {}(
  PokemonVariety.Naganadel,
  PokemonSpecies.Naganadel,
  [ PokemonForm.Naganadel ],
  [ PokemonType.Poison, PokemonType.Dragon ],
);
new class StakatakaVariety extends Variety {}(
  PokemonVariety.Stakataka,
  PokemonSpecies.Stakataka,
  [ PokemonForm.Stakataka ],
  [ PokemonType.Rock, PokemonType.Steel ],
);
new class BlacephalonVariety extends Variety {}(
  PokemonVariety.Blacephalon,
  PokemonSpecies.Blacephalon,
  [ PokemonForm.Blacephalon ],
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class ZeraoraVariety extends Variety {}(
  PokemonVariety.Zeraora,
  PokemonSpecies.Zeraora,
  [ PokemonForm.Zeraora ],
  [ PokemonType.Electric ],
);
new class MeltanVariety extends Variety {}(
  PokemonVariety.Meltan,
  PokemonSpecies.Meltan,
  [ PokemonForm.Meltan ],
  [ PokemonType.Steel ],
);
new class MelmetalVariety extends Variety {}(
  PokemonVariety.Melmetal,
  PokemonSpecies.Melmetal,
  [ PokemonForm.Melmetal ],
  [ PokemonType.Steel ],
);
new class MelmetalGmaxVariety extends Variety {}(
  PokemonVariety.MelmetalGmax,
  PokemonSpecies.Melmetal,
  [ PokemonForm.MelmetalGmax ],
  [ PokemonType.Steel ],
);
new class GrookeyVariety extends Variety {}(
  PokemonVariety.Grookey,
  PokemonSpecies.Grookey,
  [ PokemonForm.Grookey ],
  [ PokemonType.Grass ],
);
new class ThwackeyVariety extends Variety {}(
  PokemonVariety.Thwackey,
  PokemonSpecies.Thwackey,
  [ PokemonForm.Thwackey ],
  [ PokemonType.Grass ],
);
new class RillaboomVariety extends Variety {}(
  PokemonVariety.Rillaboom,
  PokemonSpecies.Rillaboom,
  [ PokemonForm.Rillaboom ],
  [ PokemonType.Grass ],
);
new class RillaboomGmaxVariety extends Variety {}(
  PokemonVariety.RillaboomGmax,
  PokemonSpecies.Rillaboom,
  [ PokemonForm.RillaboomGmax ],
  [ PokemonType.Grass ],
);
new class ScorbunnyVariety extends Variety {}(
  PokemonVariety.Scorbunny,
  PokemonSpecies.Scorbunny,
  [ PokemonForm.Scorbunny ],
  [ PokemonType.Fire ],
);
new class RabootVariety extends Variety {}(
  PokemonVariety.Raboot,
  PokemonSpecies.Raboot,
  [ PokemonForm.Raboot ],
  [ PokemonType.Fire ],
);
new class CinderaceVariety extends Variety {}(
  PokemonVariety.Cinderace,
  PokemonSpecies.Cinderace,
  [ PokemonForm.Cinderace ],
  [ PokemonType.Fire ],
);
new class CinderaceGmaxVariety extends Variety {}(
  PokemonVariety.CinderaceGmax,
  PokemonSpecies.Cinderace,
  [ PokemonForm.CinderaceGmax ],
  [ PokemonType.Fire ],
);
new class SobbleVariety extends Variety {}(
  PokemonVariety.Sobble,
  PokemonSpecies.Sobble,
  [ PokemonForm.Sobble ],
  [ PokemonType.Water ],
);
new class DrizzileVariety extends Variety {}(
  PokemonVariety.Drizzile,
  PokemonSpecies.Drizzile,
  [ PokemonForm.Drizzile ],
  [ PokemonType.Water ],
);
new class InteleonVariety extends Variety {}(
  PokemonVariety.Inteleon,
  PokemonSpecies.Inteleon,
  [ PokemonForm.Inteleon ],
  [ PokemonType.Water ],
);
new class InteleonGmaxVariety extends Variety {}(
  PokemonVariety.InteleonGmax,
  PokemonSpecies.Inteleon,
  [ PokemonForm.InteleonGmax ],
  [ PokemonType.Water ],
);
new class SkwovetVariety extends Variety {}(
  PokemonVariety.Skwovet,
  PokemonSpecies.Skwovet,
  [ PokemonForm.Skwovet ],
  [ PokemonType.Normal ],
);
new class GreedentVariety extends Variety {}(
  PokemonVariety.Greedent,
  PokemonSpecies.Greedent,
  [ PokemonForm.Greedent ],
  [ PokemonType.Normal ],
);
new class RookideeVariety extends Variety {}(
  PokemonVariety.Rookidee,
  PokemonSpecies.Rookidee,
  [ PokemonForm.Rookidee ],
  [ PokemonType.Flying ],
);
new class CorvisquireVariety extends Variety {}(
  PokemonVariety.Corvisquire,
  PokemonSpecies.Corvisquire,
  [ PokemonForm.Corvisquire ],
  [ PokemonType.Flying ],
);
new class CorviknightVariety extends Variety {}(
  PokemonVariety.Corviknight,
  PokemonSpecies.Corviknight,
  [ PokemonForm.Corviknight ],
  [ PokemonType.Flying, PokemonType.Steel ],
);
new class CorviknightGmaxVariety extends Variety {}(
  PokemonVariety.CorviknightGmax,
  PokemonSpecies.Corviknight,
  [ PokemonForm.CorviknightGmax ],
  [ PokemonType.Flying, PokemonType.Steel ],
);
new class BlipbugVariety extends Variety {}(
  PokemonVariety.Blipbug,
  PokemonSpecies.Blipbug,
  [ PokemonForm.Blipbug ],
  [ PokemonType.Bug ],
);
new class DottlerVariety extends Variety {}(
  PokemonVariety.Dottler,
  PokemonSpecies.Dottler,
  [ PokemonForm.Dottler ],
  [ PokemonType.Bug, PokemonType.Psychic ],
);
new class OrbeetleVariety extends Variety {}(
  PokemonVariety.Orbeetle,
  PokemonSpecies.Orbeetle,
  [ PokemonForm.Orbeetle ],
  [ PokemonType.Bug, PokemonType.Psychic ],
);
new class OrbeetleGmaxVariety extends Variety {}(
  PokemonVariety.OrbeetleGmax,
  PokemonSpecies.Orbeetle,
  [ PokemonForm.OrbeetleGmax ],
  [ PokemonType.Bug, PokemonType.Psychic ],
);
new class NickitVariety extends Variety {}(
  PokemonVariety.Nickit,
  PokemonSpecies.Nickit,
  [ PokemonForm.Nickit ],
  [ PokemonType.Dark ],
);
new class ThievulVariety extends Variety {}(
  PokemonVariety.Thievul,
  PokemonSpecies.Thievul,
  [ PokemonForm.Thievul ],
  [ PokemonType.Dark ],
);
new class GossifleurVariety extends Variety {}(
  PokemonVariety.Gossifleur,
  PokemonSpecies.Gossifleur,
  [ PokemonForm.Gossifleur ],
  [ PokemonType.Grass ],
);
new class EldegossVariety extends Variety {}(
  PokemonVariety.Eldegoss,
  PokemonSpecies.Eldegoss,
  [ PokemonForm.Eldegoss ],
  [ PokemonType.Grass ],
);
new class WoolooVariety extends Variety {}(
  PokemonVariety.Wooloo,
  PokemonSpecies.Wooloo,
  [ PokemonForm.Wooloo ],
  [ PokemonType.Normal ],
);
new class DubwoolVariety extends Variety {}(
  PokemonVariety.Dubwool,
  PokemonSpecies.Dubwool,
  [ PokemonForm.Dubwool ],
  [ PokemonType.Normal ],
);
new class ChewtleVariety extends Variety {}(
  PokemonVariety.Chewtle,
  PokemonSpecies.Chewtle,
  [ PokemonForm.Chewtle ],
  [ PokemonType.Water ],
);
new class DrednawVariety extends Variety {}(
  PokemonVariety.Drednaw,
  PokemonSpecies.Drednaw,
  [ PokemonForm.Drednaw ],
  [ PokemonType.Water, PokemonType.Rock ],
);
new class DrednawGmaxVariety extends Variety {}(
  PokemonVariety.DrednawGmax,
  PokemonSpecies.Drednaw,
  [ PokemonForm.DrednawGmax ],
  [ PokemonType.Water, PokemonType.Rock ],
);
new class YamperVariety extends Variety {}(
  PokemonVariety.Yamper,
  PokemonSpecies.Yamper,
  [ PokemonForm.Yamper ],
  [ PokemonType.Electric ],
);
new class BoltundVariety extends Variety {}(
  PokemonVariety.Boltund,
  PokemonSpecies.Boltund,
  [ PokemonForm.Boltund ],
  [ PokemonType.Electric ],
);
new class RolycolyVariety extends Variety {}(
  PokemonVariety.Rolycoly,
  PokemonSpecies.Rolycoly,
  [ PokemonForm.Rolycoly ],
  [ PokemonType.Rock ],
);
new class CarkolVariety extends Variety {}(
  PokemonVariety.Carkol,
  PokemonSpecies.Carkol,
  [ PokemonForm.Carkol ],
  [ PokemonType.Rock, PokemonType.Fire ],
);
new class CoalossalVariety extends Variety {}(
  PokemonVariety.Coalossal,
  PokemonSpecies.Coalossal,
  [ PokemonForm.Coalossal ],
  [ PokemonType.Rock, PokemonType.Fire ],
);
new class CoalossalGmaxVariety extends Variety {}(
  PokemonVariety.CoalossalGmax,
  PokemonSpecies.Coalossal,
  [ PokemonForm.CoalossalGmax ],
  [ PokemonType.Rock, PokemonType.Fire ],
);
new class ApplinVariety extends Variety {}(
  PokemonVariety.Applin,
  PokemonSpecies.Applin,
  [ PokemonForm.Applin ],
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class FlappleVariety extends Variety {}(
  PokemonVariety.Flapple,
  PokemonSpecies.Flapple,
  [ PokemonForm.Flapple ],
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class FlappleGmaxVariety extends Variety {}(
  PokemonVariety.FlappleGmax,
  PokemonSpecies.Flapple,
  [ PokemonForm.FlappleGmax ],
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class AppletunVariety extends Variety {}(
  PokemonVariety.Appletun,
  PokemonSpecies.Appletun,
  [ PokemonForm.Appletun ],
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class AppletunGmaxVariety extends Variety {}(
  PokemonVariety.AppletunGmax,
  PokemonSpecies.Appletun,
  [ PokemonForm.AppletunGmax ],
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class SilicobraVariety extends Variety {}(
  PokemonVariety.Silicobra,
  PokemonSpecies.Silicobra,
  [ PokemonForm.Silicobra ],
  [ PokemonType.Ground ],
);
new class SandacondaVariety extends Variety {}(
  PokemonVariety.Sandaconda,
  PokemonSpecies.Sandaconda,
  [ PokemonForm.Sandaconda ],
  [ PokemonType.Ground ],
);
new class SandacondaGmaxVariety extends Variety {}(
  PokemonVariety.SandacondaGmax,
  PokemonSpecies.Sandaconda,
  [ PokemonForm.SandacondaGmax ],
  [ PokemonType.Ground ],
);
new class CramorantVariety extends Variety {}(
  PokemonVariety.Cramorant,
  PokemonSpecies.Cramorant,
  [ PokemonForm.Cramorant ],
  [ PokemonType.Flying, PokemonType.Water ],
);
new class CramorantGulpingVariety extends Variety {}(
  PokemonVariety.CramorantGulping,
  PokemonSpecies.Cramorant,
  [ PokemonForm.CramorantGulping ],
  [ PokemonType.Flying, PokemonType.Water ],
);
new class CramorantGorgingVariety extends Variety {}(
  PokemonVariety.CramorantGorging,
  PokemonSpecies.Cramorant,
  [ PokemonForm.CramorantGorging ],
  [ PokemonType.Flying, PokemonType.Water ],
);
new class ArrokudaVariety extends Variety {}(
  PokemonVariety.Arrokuda,
  PokemonSpecies.Arrokuda,
  [ PokemonForm.Arrokuda ],
  [ PokemonType.Water ],
);
new class BarraskewdaVariety extends Variety {}(
  PokemonVariety.Barraskewda,
  PokemonSpecies.Barraskewda,
  [ PokemonForm.Barraskewda ],
  [ PokemonType.Water ],
);
new class ToxelVariety extends Variety {}(
  PokemonVariety.Toxel,
  PokemonSpecies.Toxel,
  [ PokemonForm.Toxel ],
  [ PokemonType.Electric, PokemonType.Poison ],
);
new class ToxtricityAmpedVariety extends Variety {}(
  PokemonVariety.ToxtricityAmped,
  PokemonSpecies.Toxtricity,
  [ PokemonForm.ToxtricityAmped ],
  [ PokemonType.Electric, PokemonType.Poison ],
);
new class ToxtricityLowKeyVariety extends Variety {}(
  PokemonVariety.ToxtricityLowKey,
  PokemonSpecies.Toxtricity,
  [ PokemonForm.ToxtricityLowKey ],
  [ PokemonType.Electric, PokemonType.Poison ],
);
new class ToxtricityAmpedGmaxVariety extends Variety {}(
  PokemonVariety.ToxtricityAmpedGmax,
  PokemonSpecies.Toxtricity,
  [ PokemonForm.ToxtricityAmpedGmax ],
  [ PokemonType.Electric, PokemonType.Poison ],
);
new class ToxtricityLowKeyGmaxVariety extends Variety {}(
  PokemonVariety.ToxtricityLowKeyGmax,
  PokemonSpecies.Toxtricity,
  [ PokemonForm.ToxtricityLowKeyGmax ],
  [ PokemonType.Electric, PokemonType.Poison ],
);
new class SizzlipedeVariety extends Variety {}(
  PokemonVariety.Sizzlipede,
  PokemonSpecies.Sizzlipede,
  [ PokemonForm.Sizzlipede ],
  [ PokemonType.Fire, PokemonType.Bug ],
);
new class CentiskorchVariety extends Variety {}(
  PokemonVariety.Centiskorch,
  PokemonSpecies.Centiskorch,
  [ PokemonForm.Centiskorch ],
  [ PokemonType.Fire, PokemonType.Bug ],
);
new class CentiskorchGmaxVariety extends Variety {}(
  PokemonVariety.CentiskorchGmax,
  PokemonSpecies.Centiskorch,
  [ PokemonForm.CentiskorchGmax ],
  [ PokemonType.Fire, PokemonType.Bug ],
);
new class ClobbopusVariety extends Variety {}(
  PokemonVariety.Clobbopus,
  PokemonSpecies.Clobbopus,
  [ PokemonForm.Clobbopus ],
  [ PokemonType.Fighting ],
);
new class GrapploctVariety extends Variety {}(
  PokemonVariety.Grapploct,
  PokemonSpecies.Grapploct,
  [ PokemonForm.Grapploct ],
  [ PokemonType.Fighting ],
);
new class SinisteaVariety extends Variety {}(
  PokemonVariety.Sinistea,
  PokemonSpecies.Sinistea,
  [ PokemonForm.SinisteaPhony, PokemonForm.SinisteaAntique ],
  [ PokemonType.Ghost ],
);
new class PolteageistVariety extends Variety {}(
  PokemonVariety.Polteageist,
  PokemonSpecies.Polteageist,
  [ PokemonForm.PolteageistPhony, PokemonForm.PolteageistAntique ],
  [ PokemonType.Ghost ],
);
new class HatennaVariety extends Variety {}(
  PokemonVariety.Hatenna,
  PokemonSpecies.Hatenna,
  [ PokemonForm.Hatenna ],
  [ PokemonType.Psychic ],
);
new class HattremVariety extends Variety {}(
  PokemonVariety.Hattrem,
  PokemonSpecies.Hattrem,
  [ PokemonForm.Hattrem ],
  [ PokemonType.Psychic ],
);
new class HattereneVariety extends Variety {}(
  PokemonVariety.Hatterene,
  PokemonSpecies.Hatterene,
  [ PokemonForm.Hatterene ],
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class HattereneGmaxVariety extends Variety {}(
  PokemonVariety.HattereneGmax,
  PokemonSpecies.Hatterene,
  [ PokemonForm.HattereneGmax ],
  [ PokemonType.Psychic, PokemonType.Fairy ],
);
new class ImpidimpVariety extends Variety {}(
  PokemonVariety.Impidimp,
  PokemonSpecies.Impidimp,
  [ PokemonForm.Impidimp ],
  [ PokemonType.Dark, PokemonType.Fairy ],
);
new class MorgremVariety extends Variety {}(
  PokemonVariety.Morgrem,
  PokemonSpecies.Morgrem,
  [ PokemonForm.Morgrem ],
  [ PokemonType.Dark, PokemonType.Fairy ],
);
new class GrimmsnarlVariety extends Variety {}(
  PokemonVariety.Grimmsnarl,
  PokemonSpecies.Grimmsnarl,
  [ PokemonForm.Grimmsnarl ],
  [ PokemonType.Dark, PokemonType.Fairy ],
);
new class GrimmsnarlGmaxVariety extends Variety {}(
  PokemonVariety.GrimmsnarlGmax,
  PokemonSpecies.Grimmsnarl,
  [ PokemonForm.GrimmsnarlGmax ],
  [ PokemonType.Dark, PokemonType.Fairy ],
);
new class ObstagoonVariety extends Variety {}(
  PokemonVariety.Obstagoon,
  PokemonSpecies.Obstagoon,
  [ PokemonForm.Obstagoon ],
  [ PokemonType.Dark, PokemonType.Normal ],
);
new class PerrserkerVariety extends Variety {}(
  PokemonVariety.Perrserker,
  PokemonSpecies.Perrserker,
  [ PokemonForm.Perrserker ],
  [ PokemonType.Steel ],
);
new class CursolaVariety extends Variety {}(
  PokemonVariety.Cursola,
  PokemonSpecies.Cursola,
  [ PokemonForm.Cursola ],
  [ PokemonType.Ghost ],
);
new class SirfetchdVariety extends Variety {}(
  PokemonVariety.Sirfetchd,
  PokemonSpecies.Sirfetchd,
  [ PokemonForm.Sirfetchd ],
  [ PokemonType.Fighting ],
);
new class MrRimeVariety extends Variety {}(
  PokemonVariety.MrRime,
  PokemonSpecies.MrRime,
  [ PokemonForm.MrRime ],
  [ PokemonType.Ice, PokemonType.Psychic ],
);
new class RunerigusVariety extends Variety {}(
  PokemonVariety.Runerigus,
  PokemonSpecies.Runerigus,
  [ PokemonForm.Runerigus ],
  [ PokemonType.Ground, PokemonType.Ghost ],
);
new class MilceryVariety extends Variety {}(
  PokemonVariety.Milcery,
  PokemonSpecies.Milcery,
  [ PokemonForm.Milcery ],
  [ PokemonType.Fairy ],
);
new class AlcremieVariety extends Variety {}(
  PokemonVariety.Alcremie,
  PokemonSpecies.Alcremie,
  [ PokemonForm.AlcremieVanillaCream, PokemonForm.AlcremieRubyCream, PokemonForm.AlcremieMatchaCream, PokemonForm.AlcremieMintCream, PokemonForm.AlcremieLemonCream, PokemonForm.AlcremieSaltedCream, PokemonForm.AlcremieRubySwirl, PokemonForm.AlcremieCaramelSwirl, PokemonForm.AlcremieRainbowSwirl ],
  [ PokemonType.Fairy ],
);
new class AlcremieGmaxVariety extends Variety {}(
  PokemonVariety.AlcremieGmax,
  PokemonSpecies.Alcremie,
  [ PokemonForm.AlcremieGmax ],
  [ PokemonType.Fairy ],
);
new class FalinksVariety extends Variety {}(
  PokemonVariety.Falinks,
  PokemonSpecies.Falinks,
  [ PokemonForm.Falinks ],
  [ PokemonType.Fighting ],
);
new class PincurchinVariety extends Variety {}(
  PokemonVariety.Pincurchin,
  PokemonSpecies.Pincurchin,
  [ PokemonForm.Pincurchin ],
  [ PokemonType.Electric ],
);
new class SnomVariety extends Variety {}(
  PokemonVariety.Snom,
  PokemonSpecies.Snom,
  [ PokemonForm.Snom ],
  [ PokemonType.Ice, PokemonType.Bug ],
);
new class FrosmothVariety extends Variety {}(
  PokemonVariety.Frosmoth,
  PokemonSpecies.Frosmoth,
  [ PokemonForm.Frosmoth ],
  [ PokemonType.Ice, PokemonType.Bug ],
);
new class StonjournerVariety extends Variety {}(
  PokemonVariety.Stonjourner,
  PokemonSpecies.Stonjourner,
  [ PokemonForm.Stonjourner ],
  [ PokemonType.Rock ],
);
new class EiscueIceVariety extends Variety {}(
  PokemonVariety.EiscueIce,
  PokemonSpecies.Eiscue,
  [ PokemonForm.EiscueIce ],
  [ PokemonType.Ice ],
);
new class EiscueNoiceVariety extends Variety {}(
  PokemonVariety.EiscueNoice,
  PokemonSpecies.Eiscue,
  [ PokemonForm.EiscueNoice ],
  [ PokemonType.Ice ],
);
new class IndeedeeMaleVariety extends Variety {}(
  PokemonVariety.IndeedeeMale,
  PokemonSpecies.Indeedee,
  [ PokemonForm.IndeedeeMale ],
  [ PokemonType.Psychic, PokemonType.Normal ],
);
new class IndeedeeFemaleVariety extends Variety {}(
  PokemonVariety.IndeedeeFemale,
  PokemonSpecies.Indeedee,
  [ PokemonForm.IndeedeeFemale ],
  [ PokemonType.Psychic, PokemonType.Normal ],
);
new class MorpekoFullBellyVariety extends Variety {}(
  PokemonVariety.MorpekoFullBelly,
  PokemonSpecies.Morpeko,
  [ PokemonForm.MorpekoFullBelly ],
  [ PokemonType.Electric, PokemonType.Dark ],
);
new class MorpekoHangryVariety extends Variety {}(
  PokemonVariety.MorpekoHangry,
  PokemonSpecies.Morpeko,
  [ PokemonForm.MorpekoHangry ],
  [ PokemonType.Electric, PokemonType.Dark ],
);
new class CufantVariety extends Variety {}(
  PokemonVariety.Cufant,
  PokemonSpecies.Cufant,
  [ PokemonForm.Cufant ],
  [ PokemonType.Steel ],
);
new class CopperajahVariety extends Variety {}(
  PokemonVariety.Copperajah,
  PokemonSpecies.Copperajah,
  [ PokemonForm.Copperajah ],
  [ PokemonType.Steel ],
);
new class CopperajahGmaxVariety extends Variety {}(
  PokemonVariety.CopperajahGmax,
  PokemonSpecies.Copperajah,
  [ PokemonForm.CopperajahGmax ],
  [ PokemonType.Steel ],
);
new class DracozoltVariety extends Variety {}(
  PokemonVariety.Dracozolt,
  PokemonSpecies.Dracozolt,
  [ PokemonForm.Dracozolt ],
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class ArctozoltVariety extends Variety {}(
  PokemonVariety.Arctozolt,
  PokemonSpecies.Arctozolt,
  [ PokemonForm.Arctozolt ],
  [ PokemonType.Electric, PokemonType.Ice ],
);
new class DracovishVariety extends Variety {}(
  PokemonVariety.Dracovish,
  PokemonSpecies.Dracovish,
  [ PokemonForm.Dracovish ],
  [ PokemonType.Water, PokemonType.Dragon ],
);
new class ArctovishVariety extends Variety {}(
  PokemonVariety.Arctovish,
  PokemonSpecies.Arctovish,
  [ PokemonForm.Arctovish ],
  [ PokemonType.Water, PokemonType.Ice ],
);
new class DuraludonVariety extends Variety {}(
  PokemonVariety.Duraludon,
  PokemonSpecies.Duraludon,
  [ PokemonForm.Duraludon ],
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class DuraludonGmaxVariety extends Variety {}(
  PokemonVariety.DuraludonGmax,
  PokemonSpecies.Duraludon,
  [ PokemonForm.DuraludonGmax ],
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class DreepyVariety extends Variety {}(
  PokemonVariety.Dreepy,
  PokemonSpecies.Dreepy,
  [ PokemonForm.Dreepy ],
  [ PokemonType.Dragon, PokemonType.Ghost ],
);
new class DrakloakVariety extends Variety {}(
  PokemonVariety.Drakloak,
  PokemonSpecies.Drakloak,
  [ PokemonForm.Drakloak ],
  [ PokemonType.Dragon, PokemonType.Ghost ],
);
new class DragapultVariety extends Variety {}(
  PokemonVariety.Dragapult,
  PokemonSpecies.Dragapult,
  [ PokemonForm.Dragapult ],
  [ PokemonType.Dragon, PokemonType.Ghost ],
);
new class ZacianVariety extends Variety {}(
  PokemonVariety.Zacian,
  PokemonSpecies.Zacian,
  [ PokemonForm.Zacian ],
  [ PokemonType.Fairy ],
);
new class ZacianCrownedVariety extends Variety {}(
  PokemonVariety.ZacianCrowned,
  PokemonSpecies.Zacian,
  [ PokemonForm.ZacianCrowned ],
  [ PokemonType.Fairy, PokemonType.Steel ],
);
new class ZamazentaVariety extends Variety {}(
  PokemonVariety.Zamazenta,
  PokemonSpecies.Zamazenta,
  [ PokemonForm.Zamazenta ],
  [ PokemonType.Fighting ],
);
new class ZamazentaCrownedVariety extends Variety {}(
  PokemonVariety.ZamazentaCrowned,
  PokemonSpecies.Zamazenta,
  [ PokemonForm.ZamazentaCrowned ],
  [ PokemonType.Fighting, PokemonType.Steel ],
);
new class EternatusVariety extends Variety {}(
  PokemonVariety.Eternatus,
  PokemonSpecies.Eternatus,
  [ PokemonForm.Eternatus ],
  [ PokemonType.Poison, PokemonType.Dragon ],
);
new class EternatusEternamaxVariety extends Variety {}(
  PokemonVariety.EternatusEternamax,
  PokemonSpecies.Eternatus,
  [ PokemonForm.EternatusEternamax ],
  [ PokemonType.Poison, PokemonType.Dragon ],
);
new class KubfuVariety extends Variety {}(
  PokemonVariety.Kubfu,
  PokemonSpecies.Kubfu,
  [ PokemonForm.Kubfu ],
  [ PokemonType.Fighting ],
);
new class UrshifuSingleStrikeVariety extends Variety {}(
  PokemonVariety.UrshifuSingleStrike,
  PokemonSpecies.Urshifu,
  [ PokemonForm.UrshifuSingleStrike ],
  [ PokemonType.Fighting, PokemonType.Dark ],
);
new class UrshifuRapidStrikeVariety extends Variety {}(
  PokemonVariety.UrshifuRapidStrike,
  PokemonSpecies.Urshifu,
  [ PokemonForm.UrshifuRapidStrike ],
  [ PokemonType.Fighting, PokemonType.Water ],
);
new class UrshifuSingleStrikeGmaxVariety extends Variety {}(
  PokemonVariety.UrshifuSingleStrikeGmax,
  PokemonSpecies.Urshifu,
  [ PokemonForm.UrshifuSingleStrikeGmax ],
  [ PokemonType.Fighting, PokemonType.Dark ],
);
new class UrshifuRapidStrikeGmaxVariety extends Variety {}(
  PokemonVariety.UrshifuRapidStrikeGmax,
  PokemonSpecies.Urshifu,
  [ PokemonForm.UrshifuRapidStrikeGmax ],
  [ PokemonType.Fighting, PokemonType.Water ],
);
new class ZarudeVariety extends Variety {}(
  PokemonVariety.Zarude,
  PokemonSpecies.Zarude,
  [ PokemonForm.Zarude ],
  [ PokemonType.Dark, PokemonType.Grass ],
);
new class ZarudeDadaVariety extends Variety {}(
  PokemonVariety.ZarudeDada,
  PokemonSpecies.Zarude,
  [ PokemonForm.ZarudeDada ],
  [ PokemonType.Dark, PokemonType.Grass ],
);
new class RegielekiVariety extends Variety {}(
  PokemonVariety.Regieleki,
  PokemonSpecies.Regieleki,
  [ PokemonForm.Regieleki ],
  [ PokemonType.Electric ],
);
new class RegidragoVariety extends Variety {}(
  PokemonVariety.Regidrago,
  PokemonSpecies.Regidrago,
  [ PokemonForm.Regidrago ],
  [ PokemonType.Dragon ],
);
new class GlastrierVariety extends Variety {}(
  PokemonVariety.Glastrier,
  PokemonSpecies.Glastrier,
  [ PokemonForm.Glastrier ],
  [ PokemonType.Ice ],
);
new class SpectrierVariety extends Variety {}(
  PokemonVariety.Spectrier,
  PokemonSpecies.Spectrier,
  [ PokemonForm.Spectrier ],
  [ PokemonType.Ghost ],
);
new class CalyrexVariety extends Variety {}(
  PokemonVariety.Calyrex,
  PokemonSpecies.Calyrex,
  [ PokemonForm.Calyrex ],
  [ PokemonType.Psychic, PokemonType.Grass ],
);
new class CalyrexIceVariety extends Variety {}(
  PokemonVariety.CalyrexIce,
  PokemonSpecies.Calyrex,
  [ PokemonForm.CalyrexIce ],
  [ PokemonType.Psychic, PokemonType.Ice ],
);
new class CalyrexShadowVariety extends Variety {}(
  PokemonVariety.CalyrexShadow,
  PokemonSpecies.Calyrex,
  [ PokemonForm.CalyrexShadow ],
  [ PokemonType.Psychic, PokemonType.Ghost ],
);
new class WyrdeerVariety extends Variety {}(
  PokemonVariety.Wyrdeer,
  PokemonSpecies.Wyrdeer,
  [ PokemonForm.Wyrdeer ],
  [ PokemonType.Normal, PokemonType.Psychic ],
);
new class KleavorVariety extends Variety {}(
  PokemonVariety.Kleavor,
  PokemonSpecies.Kleavor,
  [ PokemonForm.Kleavor ],
  [ PokemonType.Bug, PokemonType.Rock ],
);
new class UrsalunaVariety extends Variety {}(
  PokemonVariety.Ursaluna,
  PokemonSpecies.Ursaluna,
  [ PokemonForm.Ursaluna ],
  [ PokemonType.Ground, PokemonType.Normal ],
);
new class UrsalunaBloodmoonVariety extends Variety {}(
  PokemonVariety.UrsalunaBloodmoon,
  PokemonSpecies.Ursaluna,
  [ PokemonForm.UrsalunaBloodmoon ],
  [ PokemonType.Ground, PokemonType.Normal ],
);
new class BasculegionMaleVariety extends Variety {}(
  PokemonVariety.BasculegionMale,
  PokemonSpecies.Basculegion,
  [ PokemonForm.BasculegionMale ],
  [ PokemonType.Water, PokemonType.Ghost ],
);
new class BasculegionFemaleVariety extends Variety {}(
  PokemonVariety.BasculegionFemale,
  PokemonSpecies.Basculegion,
  [ PokemonForm.BasculegionFemale ],
  [ PokemonType.Water, PokemonType.Ghost ],
);
new class SneaslerVariety extends Variety {}(
  PokemonVariety.Sneasler,
  PokemonSpecies.Sneasler,
  [ PokemonForm.Sneasler ],
  [ PokemonType.Fighting, PokemonType.Poison ],
);
new class OverqwilVariety extends Variety {}(
  PokemonVariety.Overqwil,
  PokemonSpecies.Overqwil,
  [ PokemonForm.Overqwil ],
  [ PokemonType.Dark, PokemonType.Poison ],
);
new class EnamorusIncarnateVariety extends Variety {}(
  PokemonVariety.EnamorusIncarnate,
  PokemonSpecies.Enamorus,
  [ PokemonForm.EnamorusIncarnate ],
  [ PokemonType.Fairy, PokemonType.Flying ],
);
new class EnamorusTherianVariety extends Variety {}(
  PokemonVariety.EnamorusTherian,
  PokemonSpecies.Enamorus,
  [ PokemonForm.EnamorusTherian ],
  [ PokemonType.Fairy, PokemonType.Flying ],
);
new class SprigatitoVariety extends Variety {}(
  PokemonVariety.Sprigatito,
  PokemonSpecies.Sprigatito,
  [ PokemonForm.Sprigatito ],
  [ PokemonType.Grass ],
);
new class FloragatoVariety extends Variety {}(
  PokemonVariety.Floragato,
  PokemonSpecies.Floragato,
  [ PokemonForm.Floragato ],
  [ PokemonType.Grass ],
);
new class MeowscaradaVariety extends Variety {}(
  PokemonVariety.Meowscarada,
  PokemonSpecies.Meowscarada,
  [ PokemonForm.Meowscarada ],
  [ PokemonType.Grass, PokemonType.Dark ],
);
new class FuecocoVariety extends Variety {}(
  PokemonVariety.Fuecoco,
  PokemonSpecies.Fuecoco,
  [ PokemonForm.Fuecoco ],
  [ PokemonType.Fire ],
);
new class CrocalorVariety extends Variety {}(
  PokemonVariety.Crocalor,
  PokemonSpecies.Crocalor,
  [ PokemonForm.Crocalor ],
  [ PokemonType.Fire ],
);
new class SkeledirgeVariety extends Variety {}(
  PokemonVariety.Skeledirge,
  PokemonSpecies.Skeledirge,
  [ PokemonForm.Skeledirge ],
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class QuaxlyVariety extends Variety {}(
  PokemonVariety.Quaxly,
  PokemonSpecies.Quaxly,
  [ PokemonForm.Quaxly ],
  [ PokemonType.Water ],
);
new class QuaxwellVariety extends Variety {}(
  PokemonVariety.Quaxwell,
  PokemonSpecies.Quaxwell,
  [ PokemonForm.Quaxwell ],
  [ PokemonType.Water ],
);
new class QuaquavalVariety extends Variety {}(
  PokemonVariety.Quaquaval,
  PokemonSpecies.Quaquaval,
  [ PokemonForm.Quaquaval ],
  [ PokemonType.Water, PokemonType.Fighting ],
);
new class LechonkVariety extends Variety {}(
  PokemonVariety.Lechonk,
  PokemonSpecies.Lechonk,
  [ PokemonForm.Lechonk ],
  [ PokemonType.Normal ],
);
new class OinkologneVariety extends Variety {}(
  PokemonVariety.Oinkologne,
  PokemonSpecies.Oinkologne,
  [ PokemonForm.Oinkologne ],
  [ PokemonType.Normal ],
);
new class OinkologneFemaleVariety extends Variety {}(
  PokemonVariety.OinkologneFemale,
  PokemonSpecies.Oinkologne,
  [ PokemonForm.OinkologneFemale ],
  [ PokemonType.Normal ],
);
new class TarountulaVariety extends Variety {}(
  PokemonVariety.Tarountula,
  PokemonSpecies.Tarountula,
  [ PokemonForm.Tarountula ],
  [ PokemonType.Bug ],
);
new class SpidopsVariety extends Variety {}(
  PokemonVariety.Spidops,
  PokemonSpecies.Spidops,
  [ PokemonForm.Spidops ],
  [ PokemonType.Bug ],
);
new class NymbleVariety extends Variety {}(
  PokemonVariety.Nymble,
  PokemonSpecies.Nymble,
  [ PokemonForm.Nymble ],
  [ PokemonType.Bug ],
);
new class LokixVariety extends Variety {}(
  PokemonVariety.Lokix,
  PokemonSpecies.Lokix,
  [ PokemonForm.Lokix ],
  [ PokemonType.Bug, PokemonType.Dark ],
);
new class PawmiVariety extends Variety {}(
  PokemonVariety.Pawmi,
  PokemonSpecies.Pawmi,
  [ PokemonForm.Pawmi ],
  [ PokemonType.Electric ],
);
new class PawmoVariety extends Variety {}(
  PokemonVariety.Pawmo,
  PokemonSpecies.Pawmo,
  [ PokemonForm.Pawmo ],
  [ PokemonType.Electric, PokemonType.Fighting ],
);
new class PawmotVariety extends Variety {}(
  PokemonVariety.Pawmot,
  PokemonSpecies.Pawmot,
  [ PokemonForm.Pawmot ],
  [ PokemonType.Electric, PokemonType.Fighting ],
);
new class TandemausVariety extends Variety {}(
  PokemonVariety.Tandemaus,
  PokemonSpecies.Tandemaus,
  [ PokemonForm.Tandemaus ],
  [ PokemonType.Normal ],
);
new class MausholdVariety extends Variety {}(
  PokemonVariety.Maushold,
  PokemonSpecies.Maushold,
  [ PokemonForm.MausholdFamilyOfFour ],
  [ PokemonType.Normal ],
);
new class MausholdFamilyOfThreeVariety extends Variety {}(
  PokemonVariety.MausholdFamilyOfThree,
  PokemonSpecies.Maushold,
  [ PokemonForm.MausholdFamilyOfThree ],
  [ PokemonType.Normal ],
);
new class FidoughVariety extends Variety {}(
  PokemonVariety.Fidough,
  PokemonSpecies.Fidough,
  [ PokemonForm.Fidough ],
  [ PokemonType.Fairy ],
);
new class DachsbunVariety extends Variety {}(
  PokemonVariety.Dachsbun,
  PokemonSpecies.Dachsbun,
  [ PokemonForm.Dachsbun ],
  [ PokemonType.Fairy ],
);
new class SmolivVariety extends Variety {}(
  PokemonVariety.Smoliv,
  PokemonSpecies.Smoliv,
  [ PokemonForm.Smoliv ],
  [ PokemonType.Grass, PokemonType.Normal ],
);
new class DollivVariety extends Variety {}(
  PokemonVariety.Dolliv,
  PokemonSpecies.Dolliv,
  [ PokemonForm.Dolliv ],
  [ PokemonType.Grass, PokemonType.Normal ],
);
new class ArbolivaVariety extends Variety {}(
  PokemonVariety.Arboliva,
  PokemonSpecies.Arboliva,
  [ PokemonForm.Arboliva ],
  [ PokemonType.Grass, PokemonType.Normal ],
);
new class SquawkabillyVariety extends Variety {}(
  PokemonVariety.Squawkabilly,
  PokemonSpecies.Squawkabilly,
  [ PokemonForm.SquawkabillyGreenPlumage ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SquawkabillyBluePlumageVariety extends Variety {}(
  PokemonVariety.SquawkabillyBluePlumage,
  PokemonSpecies.Squawkabilly,
  [ PokemonForm.SquawkabillyBluePlumage ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SquawkabillyYellowPlumageVariety extends Variety {}(
  PokemonVariety.SquawkabillyYellowPlumage,
  PokemonSpecies.Squawkabilly,
  [ PokemonForm.SquawkabillyYellowPlumage ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class SquawkabillyWhitePlumageVariety extends Variety {}(
  PokemonVariety.SquawkabillyWhitePlumage,
  PokemonSpecies.Squawkabilly,
  [ PokemonForm.SquawkabillyWhitePlumage ],
  [ PokemonType.Normal, PokemonType.Flying ],
);
new class NacliVariety extends Variety {}(
  PokemonVariety.Nacli,
  PokemonSpecies.Nacli,
  [ PokemonForm.Nacli ],
  [ PokemonType.Rock ],
);
new class NaclstackVariety extends Variety {}(
  PokemonVariety.Naclstack,
  PokemonSpecies.Naclstack,
  [ PokemonForm.Naclstack ],
  [ PokemonType.Rock ],
);
new class GarganaclVariety extends Variety {}(
  PokemonVariety.Garganacl,
  PokemonSpecies.Garganacl,
  [ PokemonForm.Garganacl ],
  [ PokemonType.Rock ],
);
new class CharcadetVariety extends Variety {}(
  PokemonVariety.Charcadet,
  PokemonSpecies.Charcadet,
  [ PokemonForm.Charcadet ],
  [ PokemonType.Fire ],
);
new class ArmarougeVariety extends Variety {}(
  PokemonVariety.Armarouge,
  PokemonSpecies.Armarouge,
  [ PokemonForm.Armarouge ],
  [ PokemonType.Fire, PokemonType.Psychic ],
);
new class CeruledgeVariety extends Variety {}(
  PokemonVariety.Ceruledge,
  PokemonSpecies.Ceruledge,
  [ PokemonForm.Ceruledge ],
  [ PokemonType.Fire, PokemonType.Ghost ],
);
new class TadbulbVariety extends Variety {}(
  PokemonVariety.Tadbulb,
  PokemonSpecies.Tadbulb,
  [ PokemonForm.Tadbulb ],
  [ PokemonType.Electric ],
);
new class BelliboltVariety extends Variety {}(
  PokemonVariety.Bellibolt,
  PokemonSpecies.Bellibolt,
  [ PokemonForm.Bellibolt ],
  [ PokemonType.Electric ],
);
new class WattrelVariety extends Variety {}(
  PokemonVariety.Wattrel,
  PokemonSpecies.Wattrel,
  [ PokemonForm.Wattrel ],
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class KilowattrelVariety extends Variety {}(
  PokemonVariety.Kilowattrel,
  PokemonSpecies.Kilowattrel,
  [ PokemonForm.Kilowattrel ],
  [ PokemonType.Electric, PokemonType.Flying ],
);
new class MaschiffVariety extends Variety {}(
  PokemonVariety.Maschiff,
  PokemonSpecies.Maschiff,
  [ PokemonForm.Maschiff ],
  [ PokemonType.Dark ],
);
new class MabosstiffVariety extends Variety {}(
  PokemonVariety.Mabosstiff,
  PokemonSpecies.Mabosstiff,
  [ PokemonForm.Mabosstiff ],
  [ PokemonType.Dark ],
);
new class ShroodleVariety extends Variety {}(
  PokemonVariety.Shroodle,
  PokemonSpecies.Shroodle,
  [ PokemonForm.Shroodle ],
  [ PokemonType.Poison, PokemonType.Normal ],
);
new class GrafaiaiVariety extends Variety {}(
  PokemonVariety.Grafaiai,
  PokemonSpecies.Grafaiai,
  [ PokemonForm.Grafaiai ],
  [ PokemonType.Poison, PokemonType.Normal ],
);
new class BramblinVariety extends Variety {}(
  PokemonVariety.Bramblin,
  PokemonSpecies.Bramblin,
  [ PokemonForm.Bramblin ],
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class BrambleghastVariety extends Variety {}(
  PokemonVariety.Brambleghast,
  PokemonSpecies.Brambleghast,
  [ PokemonForm.Brambleghast ],
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class ToedscoolVariety extends Variety {}(
  PokemonVariety.Toedscool,
  PokemonSpecies.Toedscool,
  [ PokemonForm.Toedscool ],
  [ PokemonType.Ground, PokemonType.Grass ],
);
new class ToedscruelVariety extends Variety {}(
  PokemonVariety.Toedscruel,
  PokemonSpecies.Toedscruel,
  [ PokemonForm.Toedscruel ],
  [ PokemonType.Ground, PokemonType.Grass ],
);
new class KlawfVariety extends Variety {}(
  PokemonVariety.Klawf,
  PokemonSpecies.Klawf,
  [ PokemonForm.Klawf ],
  [ PokemonType.Rock ],
);
new class CapsakidVariety extends Variety {}(
  PokemonVariety.Capsakid,
  PokemonSpecies.Capsakid,
  [ PokemonForm.Capsakid ],
  [ PokemonType.Grass ],
);
new class ScovillainVariety extends Variety {}(
  PokemonVariety.Scovillain,
  PokemonSpecies.Scovillain,
  [ PokemonForm.Scovillain ],
  [ PokemonType.Grass, PokemonType.Fire ],
);
new class RellorVariety extends Variety {}(
  PokemonVariety.Rellor,
  PokemonSpecies.Rellor,
  [ PokemonForm.Rellor ],
  [ PokemonType.Bug ],
);
new class RabscaVariety extends Variety {}(
  PokemonVariety.Rabsca,
  PokemonSpecies.Rabsca,
  [ PokemonForm.Rabsca ],
  [ PokemonType.Bug, PokemonType.Psychic ],
);
new class FlittleVariety extends Variety {}(
  PokemonVariety.Flittle,
  PokemonSpecies.Flittle,
  [ PokemonForm.Flittle ],
  [ PokemonType.Psychic ],
);
new class EspathraVariety extends Variety {}(
  PokemonVariety.Espathra,
  PokemonSpecies.Espathra,
  [ PokemonForm.Espathra ],
  [ PokemonType.Psychic ],
);
new class TinkatinkVariety extends Variety {}(
  PokemonVariety.Tinkatink,
  PokemonSpecies.Tinkatink,
  [ PokemonForm.Tinkatink ],
  [ PokemonType.Fairy, PokemonType.Steel ],
);
new class TinkatuffVariety extends Variety {}(
  PokemonVariety.Tinkatuff,
  PokemonSpecies.Tinkatuff,
  [ PokemonForm.Tinkatuff ],
  [ PokemonType.Fairy, PokemonType.Steel ],
);
new class TinkatonVariety extends Variety {}(
  PokemonVariety.Tinkaton,
  PokemonSpecies.Tinkaton,
  [ PokemonForm.Tinkaton ],
  [ PokemonType.Fairy, PokemonType.Steel ],
);
new class WiglettVariety extends Variety {}(
  PokemonVariety.Wiglett,
  PokemonSpecies.Wiglett,
  [ PokemonForm.Wiglett ],
  [ PokemonType.Water ],
);
new class WugtrioVariety extends Variety {}(
  PokemonVariety.Wugtrio,
  PokemonSpecies.Wugtrio,
  [ PokemonForm.Wugtrio ],
  [ PokemonType.Water ],
);
new class BombirdierVariety extends Variety {}(
  PokemonVariety.Bombirdier,
  PokemonSpecies.Bombirdier,
  [ PokemonForm.Bombirdier ],
  [ PokemonType.Flying, PokemonType.Dark ],
);
new class FinizenVariety extends Variety {}(
  PokemonVariety.Finizen,
  PokemonSpecies.Finizen,
  [ PokemonForm.Finizen ],
  [ PokemonType.Water ],
);
new class PalafinVariety extends Variety {}(
  PokemonVariety.Palafin,
  PokemonSpecies.Palafin,
  [ PokemonForm.PalafinZero ],
  [ PokemonType.Water ],
);
new class PalafinHeroVariety extends Variety {}(
  PokemonVariety.PalafinHero,
  PokemonSpecies.Palafin,
  [ PokemonForm.PalafinHero ],
  [ PokemonType.Water ],
);
new class VaroomVariety extends Variety {}(
  PokemonVariety.Varoom,
  PokemonSpecies.Varoom,
  [ PokemonForm.Varoom ],
  [ PokemonType.Steel, PokemonType.Poison ],
);
new class RevavroomVariety extends Variety {}(
  PokemonVariety.Revavroom,
  PokemonSpecies.Revavroom,
  [ PokemonForm.Revavroom ],
  [ PokemonType.Steel, PokemonType.Poison ],
);
new class CyclizarVariety extends Variety {}(
  PokemonVariety.Cyclizar,
  PokemonSpecies.Cyclizar,
  [ PokemonForm.Cyclizar ],
  [ PokemonType.Dragon, PokemonType.Normal ],
);
new class OrthwormVariety extends Variety {}(
  PokemonVariety.Orthworm,
  PokemonSpecies.Orthworm,
  [ PokemonForm.Orthworm ],
  [ PokemonType.Steel ],
);
new class GlimmetVariety extends Variety {}(
  PokemonVariety.Glimmet,
  PokemonSpecies.Glimmet,
  [ PokemonForm.Glimmet ],
  [ PokemonType.Rock, PokemonType.Poison ],
);
new class GlimmoraVariety extends Variety {}(
  PokemonVariety.Glimmora,
  PokemonSpecies.Glimmora,
  [ PokemonForm.Glimmora ],
  [ PokemonType.Rock, PokemonType.Poison ],
);
new class GreavardVariety extends Variety {}(
  PokemonVariety.Greavard,
  PokemonSpecies.Greavard,
  [ PokemonForm.Greavard ],
  [ PokemonType.Ghost ],
);
new class HoundstoneVariety extends Variety {}(
  PokemonVariety.Houndstone,
  PokemonSpecies.Houndstone,
  [ PokemonForm.Houndstone ],
  [ PokemonType.Ghost ],
);
new class FlamigoVariety extends Variety {}(
  PokemonVariety.Flamigo,
  PokemonSpecies.Flamigo,
  [ PokemonForm.Flamigo ],
  [ PokemonType.Flying, PokemonType.Fighting ],
);
new class CetoddleVariety extends Variety {}(
  PokemonVariety.Cetoddle,
  PokemonSpecies.Cetoddle,
  [ PokemonForm.Cetoddle ],
  [ PokemonType.Ice ],
);
new class CetitanVariety extends Variety {}(
  PokemonVariety.Cetitan,
  PokemonSpecies.Cetitan,
  [ PokemonForm.Cetitan ],
  [ PokemonType.Ice ],
);
new class VeluzaVariety extends Variety {}(
  PokemonVariety.Veluza,
  PokemonSpecies.Veluza,
  [ PokemonForm.Veluza ],
  [ PokemonType.Water, PokemonType.Psychic ],
);
new class DondozoVariety extends Variety {}(
  PokemonVariety.Dondozo,
  PokemonSpecies.Dondozo,
  [ PokemonForm.Dondozo ],
  [ PokemonType.Water ],
);
new class TatsugiriVariety extends Variety {}(
  PokemonVariety.Tatsugiri,
  PokemonSpecies.Tatsugiri,
  [ PokemonForm.TatsugiriCurly ],
  [ PokemonType.Dragon, PokemonType.Water ],
);
new class TatsugiriDroopyVariety extends Variety {}(
  PokemonVariety.TatsugiriDroopy,
  PokemonSpecies.Tatsugiri,
  [ PokemonForm.TatsugiriDroopy ],
  [ PokemonType.Dragon, PokemonType.Water ],
);
new class TatsugiriStretchyVariety extends Variety {}(
  PokemonVariety.TatsugiriStretchy,
  PokemonSpecies.Tatsugiri,
  [ PokemonForm.TatsugiriStretchy ],
  [ PokemonType.Dragon, PokemonType.Water ],
);
new class AnnihilapeVariety extends Variety {}(
  PokemonVariety.Annihilape,
  PokemonSpecies.Annihilape,
  [ PokemonForm.Annihilape ],
  [ PokemonType.Fighting, PokemonType.Ghost ],
);
new class ClodsireVariety extends Variety {}(
  PokemonVariety.Clodsire,
  PokemonSpecies.Clodsire,
  [ PokemonForm.Clodsire ],
  [ PokemonType.Poison, PokemonType.Ground ],
);
new class FarigirafVariety extends Variety {}(
  PokemonVariety.Farigiraf,
  PokemonSpecies.Farigiraf,
  [ PokemonForm.Farigiraf ],
  [ PokemonType.Normal, PokemonType.Psychic ],
);
new class DudunsparceVariety extends Variety {}(
  PokemonVariety.Dudunsparce,
  PokemonSpecies.Dudunsparce,
  [ PokemonForm.DudunsparceTwoSegment ],
  [ PokemonType.Normal ],
);
new class DudunsparceThreeSegmentVariety extends Variety {}(
  PokemonVariety.DudunsparceThreeSegment,
  PokemonSpecies.Dudunsparce,
  [ PokemonForm.DudunsparceThreeSegment ],
  [ PokemonType.Normal ],
);
new class KingambitVariety extends Variety {}(
  PokemonVariety.Kingambit,
  PokemonSpecies.Kingambit,
  [ PokemonForm.Kingambit ],
  [ PokemonType.Dark, PokemonType.Steel ],
);
new class GreatTuskVariety extends Variety {}(
  PokemonVariety.GreatTusk,
  PokemonSpecies.GreatTusk,
  [ PokemonForm.GreatTusk ],
  [ PokemonType.Ground, PokemonType.Fighting ],
);
new class ScreamTailVariety extends Variety {}(
  PokemonVariety.ScreamTail,
  PokemonSpecies.ScreamTail,
  [ PokemonForm.ScreamTail ],
  [ PokemonType.Fairy, PokemonType.Psychic ],
);
new class BruteBonnetVariety extends Variety {}(
  PokemonVariety.BruteBonnet,
  PokemonSpecies.BruteBonnet,
  [ PokemonForm.BruteBonnet ],
  [ PokemonType.Grass, PokemonType.Dark ],
);
new class FlutterManeVariety extends Variety {}(
  PokemonVariety.FlutterMane,
  PokemonSpecies.FlutterMane,
  [ PokemonForm.FlutterMane ],
  [ PokemonType.Ghost, PokemonType.Fairy ],
);
new class SlitherWingVariety extends Variety {}(
  PokemonVariety.SlitherWing,
  PokemonSpecies.SlitherWing,
  [ PokemonForm.SlitherWing ],
  [ PokemonType.Bug, PokemonType.Fighting ],
);
new class SandyShocksVariety extends Variety {}(
  PokemonVariety.SandyShocks,
  PokemonSpecies.SandyShocks,
  [ PokemonForm.SandyShocks ],
  [ PokemonType.Electric, PokemonType.Ground ],
);
new class IronTreadsVariety extends Variety {}(
  PokemonVariety.IronTreads,
  PokemonSpecies.IronTreads,
  [ PokemonForm.IronTreads ],
  [ PokemonType.Ground, PokemonType.Steel ],
);
new class IronBundleVariety extends Variety {}(
  PokemonVariety.IronBundle,
  PokemonSpecies.IronBundle,
  [ PokemonForm.IronBundle ],
  [ PokemonType.Ice, PokemonType.Water ],
);
new class IronHandsVariety extends Variety {}(
  PokemonVariety.IronHands,
  PokemonSpecies.IronHands,
  [ PokemonForm.IronHands ],
  [ PokemonType.Fighting, PokemonType.Electric ],
);
new class IronJugulisVariety extends Variety {}(
  PokemonVariety.IronJugulis,
  PokemonSpecies.IronJugulis,
  [ PokemonForm.IronJugulis ],
  [ PokemonType.Dark, PokemonType.Flying ],
);
new class IronMothVariety extends Variety {}(
  PokemonVariety.IronMoth,
  PokemonSpecies.IronMoth,
  [ PokemonForm.IronMoth ],
  [ PokemonType.Fire, PokemonType.Poison ],
);
new class IronThornsVariety extends Variety {}(
  PokemonVariety.IronThorns,
  PokemonSpecies.IronThorns,
  [ PokemonForm.IronThorns ],
  [ PokemonType.Rock, PokemonType.Electric ],
);
new class FrigibaxVariety extends Variety {}(
  PokemonVariety.Frigibax,
  PokemonSpecies.Frigibax,
  [ PokemonForm.Frigibax ],
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class ArctibaxVariety extends Variety {}(
  PokemonVariety.Arctibax,
  PokemonSpecies.Arctibax,
  [ PokemonForm.Arctibax ],
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class BaxcaliburVariety extends Variety {}(
  PokemonVariety.Baxcalibur,
  PokemonSpecies.Baxcalibur,
  [ PokemonForm.Baxcalibur ],
  [ PokemonType.Dragon, PokemonType.Ice ],
);
new class GimmighoulVariety extends Variety {}(
  PokemonVariety.Gimmighoul,
  PokemonSpecies.Gimmighoul,
  [ PokemonForm.GimmighoulChest ],
  [ PokemonType.Ghost ],
);
new class GimmighoulRoamingVariety extends Variety {}(
  PokemonVariety.GimmighoulRoaming,
  PokemonSpecies.Gimmighoul,
  [ PokemonForm.GimmighoulRoaming ],
  [ PokemonType.Ghost ],
);
new class GholdengoVariety extends Variety {}(
  PokemonVariety.Gholdengo,
  PokemonSpecies.Gholdengo,
  [ PokemonForm.Gholdengo ],
  [ PokemonType.Steel, PokemonType.Ghost ],
);
new class WoChienVariety extends Variety {}(
  PokemonVariety.WoChien,
  PokemonSpecies.WoChien,
  [ PokemonForm.WoChien ],
  [ PokemonType.Dark, PokemonType.Grass ],
);
new class ChienPaoVariety extends Variety {}(
  PokemonVariety.ChienPao,
  PokemonSpecies.ChienPao,
  [ PokemonForm.ChienPao ],
  [ PokemonType.Dark, PokemonType.Ice ],
);
new class TingLuVariety extends Variety {}(
  PokemonVariety.TingLu,
  PokemonSpecies.TingLu,
  [ PokemonForm.TingLu ],
  [ PokemonType.Dark, PokemonType.Ground ],
);
new class ChiYuVariety extends Variety {}(
  PokemonVariety.ChiYu,
  PokemonSpecies.ChiYu,
  [ PokemonForm.ChiYu ],
  [ PokemonType.Dark, PokemonType.Fire ],
);
new class RoaringMoonVariety extends Variety {}(
  PokemonVariety.RoaringMoon,
  PokemonSpecies.RoaringMoon,
  [ PokemonForm.RoaringMoon ],
  [ PokemonType.Dragon, PokemonType.Dark ],
);
new class IronValiantVariety extends Variety {}(
  PokemonVariety.IronValiant,
  PokemonSpecies.IronValiant,
  [ PokemonForm.IronValiant ],
  [ PokemonType.Fairy, PokemonType.Fighting ],
);
new class KoraidonVariety extends Variety {}(
  PokemonVariety.Koraidon,
  PokemonSpecies.Koraidon,
  [ PokemonForm.KoraidonApexBuild ],
  [ PokemonType.Fighting, PokemonType.Dragon ],
);
new class KoraidonLimitedBuildVariety extends Variety {}(
  PokemonVariety.KoraidonLimitedBuild,
  PokemonSpecies.Koraidon,
  [ PokemonForm.KoraidonLimitedBuild ],
  [ PokemonType.Fighting, PokemonType.Dragon ],
);
new class KoraidonSprintingBuildVariety extends Variety {}(
  PokemonVariety.KoraidonSprintingBuild,
  PokemonSpecies.Koraidon,
  [ PokemonForm.KoraidonSprintingBuild ],
  [ PokemonType.Fighting, PokemonType.Dragon ],
);
new class KoraidonSwimmingBuildVariety extends Variety {}(
  PokemonVariety.KoraidonSwimmingBuild,
  PokemonSpecies.Koraidon,
  [ PokemonForm.KoraidonSwimmingBuild ],
  [ PokemonType.Fighting, PokemonType.Dragon ],
);
new class KoraidonGlidingBuildVariety extends Variety {}(
  PokemonVariety.KoraidonGlidingBuild,
  PokemonSpecies.Koraidon,
  [ PokemonForm.KoraidonGlidingBuild ],
  [ PokemonType.Fighting, PokemonType.Dragon ],
);
new class MiraidonVariety extends Variety {}(
  PokemonVariety.Miraidon,
  PokemonSpecies.Miraidon,
  [ PokemonForm.MiraidonUltimateMode ],
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class MiraidonLowPowerModeVariety extends Variety {}(
  PokemonVariety.MiraidonLowPowerMode,
  PokemonSpecies.Miraidon,
  [ PokemonForm.MiraidonLowPowerMode ],
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class MiraidonDriveModeVariety extends Variety {}(
  PokemonVariety.MiraidonDriveMode,
  PokemonSpecies.Miraidon,
  [ PokemonForm.MiraidonDriveMode ],
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class MiraidonAquaticModeVariety extends Variety {}(
  PokemonVariety.MiraidonAquaticMode,
  PokemonSpecies.Miraidon,
  [ PokemonForm.MiraidonAquaticMode ],
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class MiraidonGlideModeVariety extends Variety {}(
  PokemonVariety.MiraidonGlideMode,
  PokemonSpecies.Miraidon,
  [ PokemonForm.MiraidonGlideMode ],
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class WalkingWakeVariety extends Variety {}(
  PokemonVariety.WalkingWake,
  PokemonSpecies.WalkingWake,
  [ PokemonForm.WalkingWake ],
  [ PokemonType.Water, PokemonType.Dragon ],
);
new class IronLeavesVariety extends Variety {}(
  PokemonVariety.IronLeaves,
  PokemonSpecies.IronLeaves,
  [ PokemonForm.IronLeaves ],
  [ PokemonType.Grass, PokemonType.Psychic ],
);
new class DipplinVariety extends Variety {}(
  PokemonVariety.Dipplin,
  PokemonSpecies.Dipplin,
  [ PokemonForm.Dipplin ],
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class PoltchageistVariety extends Variety {}(
  PokemonVariety.Poltchageist,
  PokemonSpecies.Poltchageist,
  [ PokemonForm.PoltchageistCounterfeit, PokemonForm.PoltchageistArtisan ],
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class SinistchaVariety extends Variety {}(
  PokemonVariety.Sinistcha,
  PokemonSpecies.Sinistcha,
  [ PokemonForm.SinistchaUnremarkable, PokemonForm.SinistchaMasterpiece ],
  [ PokemonType.Grass, PokemonType.Ghost ],
);
new class OkidogiVariety extends Variety {}(
  PokemonVariety.Okidogi,
  PokemonSpecies.Okidogi,
  [ PokemonForm.Okidogi ],
  [ PokemonType.Poison, PokemonType.Fighting ],
);
new class MunkidoriVariety extends Variety {}(
  PokemonVariety.Munkidori,
  PokemonSpecies.Munkidori,
  [ PokemonForm.Munkidori ],
  [ PokemonType.Poison, PokemonType.Psychic ],
);
new class FezandipitiVariety extends Variety {}(
  PokemonVariety.Fezandipiti,
  PokemonSpecies.Fezandipiti,
  [ PokemonForm.Fezandipiti ],
  [ PokemonType.Poison, PokemonType.Fairy ],
);
new class OgerponVariety extends Variety {}(
  PokemonVariety.Ogerpon,
  PokemonSpecies.Ogerpon,
  [ PokemonForm.Ogerpon ],
  [ PokemonType.Grass ],
);
new class OgerponWellspringMaskVariety extends Variety {}(
  PokemonVariety.OgerponWellspringMask,
  PokemonSpecies.Ogerpon,
  [ PokemonForm.OgerponWellspringMask ],
  [ PokemonType.Grass, PokemonType.Water ],
);
new class OgerponHearthflameMaskVariety extends Variety {}(
  PokemonVariety.OgerponHearthflameMask,
  PokemonSpecies.Ogerpon,
  [ PokemonForm.OgerponHearthflameMask ],
  [ PokemonType.Grass, PokemonType.Fire ],
);
new class OgerponCornerstoneMaskVariety extends Variety {}(
  PokemonVariety.OgerponCornerstoneMask,
  PokemonSpecies.Ogerpon,
  [ PokemonForm.OgerponCornerstoneMask ],
  [ PokemonType.Grass, PokemonType.Rock ],
);
new class ArchaludonVariety extends Variety {}(
  PokemonVariety.Archaludon,
  PokemonSpecies.Archaludon,
  [ PokemonForm.Archaludon ],
  [ PokemonType.Steel, PokemonType.Dragon ],
);
new class HydrappleVariety extends Variety {}(
  PokemonVariety.Hydrapple,
  PokemonSpecies.Hydrapple,
  [ PokemonForm.Hydrapple ],
  [ PokemonType.Grass, PokemonType.Dragon ],
);
new class GougingFireVariety extends Variety {}(
  PokemonVariety.GougingFire,
  PokemonSpecies.GougingFire,
  [ PokemonForm.GougingFire ],
  [ PokemonType.Fire, PokemonType.Dragon ],
);
new class RagingBoltVariety extends Variety {}(
  PokemonVariety.RagingBolt,
  PokemonSpecies.RagingBolt,
  [ PokemonForm.RagingBolt ],
  [ PokemonType.Electric, PokemonType.Dragon ],
);
new class IronBoulderVariety extends Variety {}(
  PokemonVariety.IronBoulder,
  PokemonSpecies.IronBoulder,
  [ PokemonForm.IronBoulder ],
  [ PokemonType.Rock, PokemonType.Psychic ],
);
new class IronCrownVariety extends Variety {}(
  PokemonVariety.IronCrown,
  PokemonSpecies.IronCrown,
  [ PokemonForm.IronCrown ],
  [ PokemonType.Steel, PokemonType.Psychic ],
);
new class TerapagosVariety extends Variety {}(
  PokemonVariety.Terapagos,
  PokemonSpecies.Terapagos,
  [ PokemonForm.Terapagos ],
  [ PokemonType.Normal ],
);
new class TerapagosTerastalVariety extends Variety {}(
  PokemonVariety.TerapagosTerastal,
  PokemonSpecies.Terapagos,
  [ PokemonForm.TerapagosTerastal ],
  [ PokemonType.Normal ],
);
new class TerapagosStellarVariety extends Variety {}(
  PokemonVariety.TerapagosStellar,
  PokemonSpecies.Terapagos,
  [ PokemonForm.TerapagosStellar ],
  [ PokemonType.Normal ],
);
new class PecharuntVariety extends Variety {}(
  PokemonVariety.Pecharunt,
  PokemonSpecies.Pecharunt,
  [ PokemonForm.Pecharunt ],
  [ PokemonType.Poison, PokemonType.Ghost ],
);