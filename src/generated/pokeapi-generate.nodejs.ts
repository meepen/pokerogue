import { GameClient, Generation, MoveClient, NamedAPIResourceList, PokemonClient, PokemonMove, PokemonSpecies } from "pokenode-ts";
import { readFile, stat, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { mkdir as mkdirCallback } from "fs";

async function mkdir(path: string, options?: any): Promise<void> {
  return new Promise((res, rej) => {
    mkdirCallback(path, options, (err) => {
      if (err) {
        rej(err);
      } else {
        res(undefined);
      }
    });
  });
}

const baseDir = dirname(fileURLToPath(import.meta.url));
const cacheDir = join(baseDir, 'pokeapi/cache');
const generatedDir = join(baseDir, 'pokeapi/generated');

class PokemonClientLocalCache {
  private readonly cache = new Map<string, object>();
  private readonly client = new PokemonClient();
  private readonly movesClient = new MoveClient();
  private readonly gameClient = new GameClient();

  private async readFile(fileName: string) {
    try {
      await stat(fileName);
    } catch (err) {
      return null;
    }

    return JSON.parse(await readFile(fileName, 'utf8'));
  }

  private async fetchFrom<
    T extends { constructor: Function },
    Key extends keyof T,
    MethodType extends (...args: any[]) => any = T[Key] extends (...args: any[]) => Promise<object> ? T[Key] : never,
    RetType extends Awaited<ReturnType<MethodType>> = Awaited<ReturnType<MethodType>>,
  >(
    client: T,
    key: Key,
    ...args: Parameters<MethodType>
  ): Promise<RetType> {
    const arg = [client.constructor.name, key, ...args].map(String).join('-');
    const cachePath = join(cacheDir, `${arg}.json`);

    let cachedData = this.cache.get(arg);
    if (cachedData) {
      return cachedData as RetType;
    }

    const fileData = await this.readFile(cachePath);
    if (fileData !== null) {
      this.cache.set(arg, fileData);
      return fileData;
    }

    const f = client[key] as MethodType;
    const res = await f.apply(this.client, args) as RetType;
    
    this.cache.set(arg, res);
    await writeFile(
      cachePath,
      JSON.stringify(res, null, 2),
    );

    return res;
  }

  fetch<Key extends keyof PokemonClient>(
    key: Key,
    ...args: Parameters<PokemonClient[Key]>
  ) {
    return this.fetchFrom(this.client, key, ...args);
  }

  fetchMoves<Key extends keyof MoveClient>(
    key: Key,
    ...args: Parameters<MoveClient[Key]>
  ) {
    return this.fetchFrom(this.movesClient, key, ...args);
  }

  fetchGame<Key extends keyof GameClient>(
    key: Key,
    ...args: Parameters<GameClient[Key]>
  ) {
    return this.fetchFrom(this.gameClient, key, ...args);
  }
}

const client = new PokemonClientLocalCache();


function apiNameToClassName(apiName: string) {
  const className = apiName
    .split(/[\-_ ]/g)
    .map((part) => part.length === 0 ? '_' : part[0].toUpperCase() + part.slice(1))
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/^[^a-zA-Z]/, '_$&');
  
  return className.startsWith('Generation')
    ? 'Generation' + className.slice('Generation'.length).toUpperCase()
    : className;
}


async function runInParallel<T>(jobs: (() => Promise<T>)[], maxParallelism = 10) {
  let index = 0;

  let results = new Array<T>(jobs.length);

  async function runSingleJob() {
    while (index < jobs.length) {
      const currentIndex = index;
      index += 1;

      results[currentIndex] = await jobs[currentIndex]();
    }
  }

  await Promise.all(
    new Array(maxParallelism).fill(null).map(() => runSingleJob())
  );

  return results;
}

async function collectResources<T>(
  fetch: (offset: number, count: number) => Promise<NamedAPIResourceList>,
) {
  console.log('collecting resources');
  const fetchPer = 100;

  const firstResources = await fetch(0, fetchPer);
  console.log('resource count: ', firstResources.count);
  
  const results = await runInParallel(
    new Array(
      Math.ceil(firstResources.count / fetchPer)
    ).fill(null).map(
      (_, i) => () => fetch((i + 1) * fetchPer, fetchPer)
    ),
  );

  return [
    ...firstResources.results,
    ...results.flatMap((r) => r.results),
  ];
}

function createEnumData<T extends { id: number; name: string }[]>(data: T): string[] {
  return data
    .sort((a, b) => a.id - b.id)
    .map((item, i) => {
      const last = data[i - 1];
      if (!last || last.id + 1 !== item.id) {
        return `${apiNameToClassName(item.name)} = ${item.id}`;
      } else {
        return apiNameToClassName(item.name);
      }
    });
}

/**
 * Write an enum file to the generated directory
 * @param enumName The enum name, without the `.enum.ts` extension or the `Pokemon` prefix
 * @param data The data to write to the file
 */
async function writeEnumFile<T extends { id: number; name: string }[]>(enumName: string, data: T) {
  await writeFile(
    join(generatedDir, `${enumName.toLowerCase()}.enum.ts`),
    `// AUTO GENERATED FILE\nexport enum Pokemon${enumName[0].toUpperCase()}${enumName.slice(1)} {\n`
      + createEnumData(data)
        .map((line) => `${tabs(1)}${line},\n`)
        .join('')
      + '}\n',
  );
}

async function retrievePokemonInfo() {
  let speciesInfo = await collectResources(
    (offset, count) => client.fetch('listPokemonSpecies', offset, count)
  );

  console.log('species info:', speciesInfo.length);
  return speciesInfo;
}

async function fetchSpeciesInfo(speciesName: string) {
  const species = await client.fetch('getPokemonSpeciesByName', speciesName);

  const varieties = await runInParallel(
    species.varieties
      .map((variety) => () => client.fetch('getPokemonByName', variety.pokemon.name)),
  );

  const forms = await runInParallel(
    varieties.flatMap(
      (pokemon) => pokemon.forms.map(
        (form) => async () => ({
          variety: pokemon,
          form: await client.fetch('getPokemonFormByName', form.name),
        })
      ),
    ),
  );

  return {
    species,
    forms,
    varieties,
  };
}

const tab = '  ';
function tabs(n: number) {
  return tab.repeat(n);
}

async function processAllGenerations() {
  const generations = await collectResources(
    (offset, count) => client.fetchGame('listGenerations', offset, count)
  );

  console.log('generations:', generations.length);
  const generationData = await runInParallel(
    generations.map(
      (generation) => () => client.fetchGame('getGenerationByName', generation.name),
    ),
  );

  await writeEnumFile('Generation', generationData);

  return {
    versionGroups: new Map<string, Generation>(
      generationData.flatMap((gen) => 
        gen.version_groups.map((group) => [group.name, gen] as const)
      ),
    ),
    latestGeneration: generationData.sort((a, b) => b.id - a.id)[0],
  };
}

async function processAllPokemon(generations: Awaited<ReturnType<typeof processAllGenerations>>) {
  const allSpeciesData = await retrievePokemonInfo();
  console.log('all species data:', allSpeciesData.length);

  const allPokemon = await runInParallel(
    allSpeciesData.map(
      (species) => () => fetchSpeciesInfo(species.name),
    ),
    50,
  );

  await writeEnumFile(
    'Species', 
    allPokemon
      .map((pokemon) => pokemon.species)
  );

  await writeEnumFile(
    'Variety',
    allPokemon
      .flatMap((pokemon) => pokemon.varieties)
  );

  await writeEnumFile(
    'Form',
    allPokemon
      .flatMap((pokemon) => pokemon.forms.map(({ form }) => form))
  );

  function createSpeciesFlags(species: PokemonSpecies) {
    const speciesFlags = [
      species.is_baby ? 'Baby' : null,
      species.is_legendary ? 'Legendary' : null,
      species.is_mythical ? 'Mythical' : null,
    ]
      .filter((f) => f !== null)
      .map((x) => `PokemonSpeciesFlags.${x}`)
      .join(' | ');

    return speciesFlags.length === 0
      ? 'PokemonSpeciesFlags.None'
      : speciesFlags;
  }

  await writeFile(
    join(generatedDir, 'species-list.ts'),
    `// AUTO GENERATED FILE
import { IPokemonSpecies, PokemonSpeciesFlags } from "#pokeapi/pokemon-species.interface";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonVariety } from "#pokeapi/generated/variety.enum";

export const speciesList = new Map<PokemonSpecies, IPokemonSpecies>();
class Species extends IPokemonSpecies {
${tabs(1)}constructor(
${tabs(2)}species: PokemonSpecies,
${tabs(2)}varieties: PokemonVariety[],
${tabs(2)}name: string,
${tabs(2)}captureRate: number,
${tabs(2)}baseHappiness: number | null,
${tabs(2)}speciesFlags: PokemonSpeciesFlags,
${tabs(2)}genderRate: number,
${tabs(1)}) {
${tabs(2)}super(species, varieties, name, captureRate, baseHappiness, speciesFlags, genderRate);
${tabs(2)}speciesList.set(species, this);
${tabs(1)}}
}\n\n`
      + allPokemon
        .map((pokemon) => pokemon.species)
        .map(
          (species) => 
`new class ${apiNameToClassName(species.name)}Species extends Species {}(
${tabs(1)}PokemonSpecies.${apiNameToClassName(species.name)},
${tabs(1)}[${species.varieties.map((v) => `PokemonVariety.${apiNameToClassName(v.pokemon.name)}`).join(', ')}],
${tabs(1)}${JSON.stringify(species.names.find((n) => n.language.name === 'en')?.name ?? null)},
${tabs(1)}${species.capture_rate},
${tabs(1)}${species.base_happiness},
${tabs(1)}${createSpeciesFlags(species)},
${tabs(1)}${species.gender_rate},
);`
        )
        .join('\n')
  );

  /**
   * Creates a list of active learnable moves for a pokemon variety based on the latest generation moveset
   * @param moves The moves from the pokemon variety
   * @param baseTabs The number of tabs to use for the output string
   * @returns The list of active learnable moves, formatted as a string
   */
  function getActiveLearnableMoves(moves: PokemonMove[], baseTabs: number): string {
    const allowedMoves = moves
      .flatMap((move) =>
        move.version_group_details
          .filter(
            (version) => generations.versionGroups.get(version.version_group.name) === generations.latestGeneration,
          )
          .map((version) => ({
            move: move.move,
            version_group_details: version,
          })),
      );

    const learnTypes = Array.from(
      new Set(
        allowedMoves.map((move) => move.version_group_details.move_learn_method.name)
      ),
    );

    const movesByLearnType = new Map<string, string[]>(
      learnTypes
        .map((learnType) => 
          [
            learnType,
            allowedMoves
              .filter(({ move, version_group_details }) =>
                version_group_details.move_learn_method.name === learnType
              )
              .sort((a, b) => {
                const learnSorted = learnType === 'level-up'
                  ? a.version_group_details.level_learned_at - b.version_group_details.level_learned_at
                  : 0;
                return learnSorted === 0
                  ? a.move.name.localeCompare(b.move.name)
                  : learnSorted;
              })
              .map(({ move, version_group_details }) =>
                learnType === 'level-up'
                  ? `[ PokemonMove.${apiNameToClassName(move.name)}, ${version_group_details.level_learned_at} ]`
                  : `PokemonMove.${apiNameToClassName(move.name)}`),
          ]
        ),
    );

    return `new Map([
${learnTypes
      .map(
        (learnType) =>
`${tabs(baseTabs + 1)}[
${tabs(baseTabs + 2)}PokemonMoveLearnType.${apiNameToClassName(learnType)},
${tabs(baseTabs + 2)}[
${movesByLearnType.get(learnType)!.map((move) => `${tabs(baseTabs + 3)}${move},\n`).join('')}${tabs(baseTabs + 2)}],
${tabs(baseTabs + 1)}],`
      )
      .join('\n')}
${tabs(baseTabs)}]) as LearnableMoves`;
  }

  await writeFile(
    join(generatedDir, 'variety-list.ts'),
`// AUTO GENERATED FILE
import { IPokemonVariety, LearnableMoves } from "#pokeapi/pokemon-variety.interface";
import { PokemonSpecies } from "#pokeapi/generated/species.enum";
import { PokemonForm } from "#pokeapi/generated/form.enum";
import { PokemonVariety } from "#pokeapi/generated/variety.enum";
import { PokemonType } from "#pokeapi/generated/type.enum";
import { PokemonMove } from "#pokeapi/generated/move.enum";
import { PokemonMoveLearnType } from "#pokeapi/generated/movelearntype.enum";

export const varietiesList = new Map<PokemonVariety, IPokemonVariety>();

class Variety extends IPokemonVariety {
  constructor(
    variety: PokemonVariety,
    species: PokemonSpecies,
    forms: PokemonForm[],
    types: PokemonType[],
    learnableMoves: LearnableMoves,
  ) {
    super(variety, species, forms, types, learnableMoves);
    varietiesList.set(variety, this);
  }
}\n\n`
      + allPokemon
        .map((pokemon) => pokemon.varieties)
        .flat()
        .map(
          (variety) => 
`new class ${apiNameToClassName(variety.name)}Variety extends Variety {}(
${tabs(1)}PokemonVariety.${apiNameToClassName(variety.name)},
${tabs(1)}PokemonSpecies.${apiNameToClassName(variety.species.name)},
${tabs(1)}[ ${variety.forms.map((f) => `PokemonForm.${apiNameToClassName(f.name)}`).join(', ')} ],
${tabs(1)}[ ${variety.types.map((n) => `PokemonType.${apiNameToClassName(n.type.name)}`).join(', ')} ],
${tabs(1)}${getActiveLearnableMoves(variety.moves, 1)},
);`
        )
        .join('\n')
  );

  await writeFile(
    join(generatedDir, 'form-list.ts'),
`// AUTO GENERATED FILE
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
}\n\n`
      + allPokemon
        .map((pokemon) => pokemon.forms)
        .flat()
        .map(
          ({ variety, form }) =>
`new class ${apiNameToClassName(form.name)}Form extends Form {}(
${tabs(1)}PokemonForm.${apiNameToClassName(form.name)},
${tabs(1)}PokemonVariety.${apiNameToClassName(variety.name)},
${tabs(1)}PokemonSpecies.${apiNameToClassName(variety.species.name)},
${tabs(1)}${JSON.stringify(form.names.find((n) => n.language.name === 'en')?.name ?? null)},
${tabs(1)}[ ${form.types.map((n) => `PokemonType.${apiNameToClassName(n.type.name)}`).join(', ')} ],
);`
        )
        .join('\n')
  );

  return allPokemon;
}

async function processTypes() {
  const types = await collectResources(
    (offset, count) => client.fetch('listTypes', offset, count),
  );

  console.log('types:', types.length);

  const typeData = await runInParallel(
    types.map(
      (type) => () => client.fetch('getTypeByName', type.name),
    ),
  );

  await writeEnumFile('Type', typeData);

  await writeFile(
    join(generatedDir, 'type-list.ts'),
`// AUTO GENERATED FILE
import { IPokemonType } from "#pokeapi/pokemon-type.interface";
import { PokemonType } from "#pokeapi/generated/type.enum";

export const typesList = new Map<PokemonType, IPokemonType>();

class Type extends IPokemonType {
  constructor(
    type: PokemonType,
    damageToMultipliers: Map<PokemonType, number>,
  ) {
    super(type, damageToMultipliers);
    typesList.set(type, this);
  }
}\n\n`
      + typeData
        .map(
          (type) =>
`new class ${apiNameToClassName(type.name)}Type extends Type {}(
${tabs(1)}PokemonType.${apiNameToClassName(type.name)},
${tabs(1)}new Map<PokemonType, number>([
${
  [
    ...type.damage_relations.double_damage_to
      .map<[string, number]>((t) => [ t.name, 2 ]),
    ...type.damage_relations.half_damage_to
      .map<[string, number]>((t) => [ t.name, 0.5 ]),
    ...type.damage_relations.no_damage_to
      .map<[string, number]>((t) => [ t.name, 0 ]),
  ]
    .map(([typeName, multiplier]) => `${tabs(2)}[ PokemonType.${apiNameToClassName(typeName)}, ${multiplier} ],\n`)
    .join('')
}${tabs(1)}]),
);`
        )
        .join('\n')
  );

  return types;
}

async function processAllMoves(allPokemon: Awaited<ReturnType<typeof processAllPokemon>>) {
  const allMoves = await collectResources(
    (offset, count) => client.fetchMoves('listMoves', offset, count),
  );
  console.log('moves count:', allMoves.length);

  const moveData = await runInParallel(
    allMoves.map(
      (move) => () => 
        client.fetchMoves('getMoveByName', move.name),
    ),
  );

  const pokemonMoveLearnTypes = await runInParallel(
    Array.from(
      new Set(
        allPokemon
          .flatMap((pokemon) => pokemon.varieties)
          .flatMap((variety) => variety.moves)
          .flatMap((move) => move.version_group_details)
          .map((detail) => detail.move_learn_method.name)
      )
    ).map((moveLearnType) => () => client.fetchMoves('getMoveLearnMethodByName', moveLearnType)),
  );
  
  await writeEnumFile('MoveLearnType', pokemonMoveLearnTypes);
  await writeEnumFile('Move', moveData);

  await writeFile(
    join(generatedDir, 'move-list.ts'),
`// AUTO GENERATED FILE
import { IMove } from "#pokeapi/move.interface";
import { PokemonMove } from "#pokeapi/generated/move.enum";
import { PokemonType } from "#pokeapi/generated/type.enum";

export const movesList = new Map<PokemonMove, IMove>();

class Move extends IMove {
  constructor(
    move: PokemonMove,
    accuracy: number | null,
    power: number | null,
    pp: number | null,
    priority: number,
    type: PokemonType,
  ) {
    super(move, accuracy, power, pp, priority, type);
    movesList.set(move, this);
  }
}\n\n`
      + moveData
        .map(
          (move) =>
`new class ${apiNameToClassName(move.name)}Move extends Move {}(
${tabs(1)}PokemonMove.${apiNameToClassName(move.name)},
${tabs(1)}${move.accuracy ?? null},
${tabs(1)}${move.power ?? null},
${tabs(1)}${move.pp},
${tabs(1)}${move.priority},
${tabs(1)}PokemonType.${apiNameToClassName(move.type.name)},
);`
        )
        .join('\n')
  );

  return moveData;
}

async function run() {
  await Promise.all(
    [cacheDir]
      .map((dir) => mkdir(dir, { recursive: true })),
  );

  console.log('processing generations');
  const allGenerations = await processAllGenerations();

  console.log('processing pokemon');
  const allPokemon = await processAllPokemon(allGenerations);

  console.log('processing types');
  await processTypes();

  console.log('processing moves');
  await processAllMoves(allPokemon);
}

run()
  .then(() => console.log('done'))
  .catch((err) => console.error(err));
