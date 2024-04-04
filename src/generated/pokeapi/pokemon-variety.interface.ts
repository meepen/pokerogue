import { PokemonForm } from "#pokeapi/generated/form.enum";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonVariety } from "#pokeapi/generated/variety.enum";
import { PokemonMove } from "#pokeapi/generated/move.enum";
import { PokemonType } from "#pokeapi/generated/type.enum";
import { PokemonMoveLearnType } from "#pokeapi/generated/movelearntype.enum";

export type LearnableMoves = 
  & Map<Omit<PokemonMoveLearnType, PokemonMoveLearnType.LevelUp>, PokemonMove[]>
  & Map<PokemonMoveLearnType.LevelUp, [ PokemonMove, number ][]>;

export abstract class IPokemonVariety {
  constructor(
    protected readonly variety: PokemonVariety,
    protected readonly species: PokemonSpecies,
    protected readonly forms: PokemonForm[],
    protected readonly types: PokemonType[],
    protected readonly learnableMoves: LearnableMoves,
  ) {}
}
