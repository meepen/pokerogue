import { PokemonMachine } from "#pokeapi/generated/machine.enum";
import { PokemonMove } from "#pokeapi/generated/move.enum";

export abstract class IPokemonMachine {
  constructor(
    protected readonly machine: PokemonMachine,
    protected readonly move: PokemonMove
  ) {
    allPokemonMachines.set(machine, this);
  }
}

export const allPokemonMachines = new Map<PokemonMachine, IPokemonMachine>();
