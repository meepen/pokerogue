import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonEvolutionTrigger } from "#pokeapi/generated/evolutiontrigger.enum";

interface EvolutionTriggerRequirements {
  trigger: PokemonEvolutionTrigger;
  // gender?: Gender
  // held_item	null
  // item	null
  // known_move	null
  // known_move_type	null
  // location	null
  // min_affection	null
  // min_beauty	null
  // min_happiness	null
  // min_level	38
  // needs_overworld_rain	false
  // party_species	null
  // party_type	null
  // relative_physical_stats	null
  // time_of_day	""
  // trade_species	null
  // turn_upside_down	false
}

export abstract class IPokemonEvolution {
  constructor(
    protected readonly fromSpecies: PokemonSpecies,
    protected readonly toSpecies: PokemonSpecies,
    protected readonly triggerType: PokemonEvolutionTrigger,
  ) {
    let chain = evolutionChains.get(fromSpecies);
    if (!chain) {
      chain = [];
      evolutionChains.set(fromSpecies, chain);
    }

    chain.push(this);
  }
}

export const evolutionChains = new Map<PokemonSpecies, IPokemonEvolution[]>();
