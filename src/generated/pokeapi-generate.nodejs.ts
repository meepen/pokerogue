import { NamedAPIResource, PokemonClient } from "pokenode-ts";
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
  private cache = new Map<string, object>();
  private client = new PokemonClient();

  private async readFile(fileName: string) {
    try {
      await stat(fileName);
    } catch (err) {
      return null;
    }

    return JSON.parse(await readFile(fileName, 'utf8'));
  }

  async fetch<Key extends keyof PokemonClient>(
    key: Key,
    ...args: Parameters<PokemonClient[Key]>
  ): Promise<Awaited<ReturnType<PokemonClient[Key]>>> {
    const arg = [key, ...args].map(String).join('-');
    const cachePath = join(cacheDir, `${arg}.json`);

    let cachedData = this.cache.get(arg);
    if (cachedData) {
      return cachedData as Awaited<ReturnType<PokemonClient[Key]>>;
    }

    const fileData = await this.readFile(cachePath);
    if (fileData !== null) {
      this.cache.set(arg, fileData);
      return fileData;
    }

    const f = this.client[key];
    const res = await f.apply(this.client, args);
    
    this.cache.set(arg, res);
    await writeFile(
      cachePath,
      JSON.stringify(res, null, 2),
    );

    return res as Awaited<ReturnType<PokemonClient[Key]>>;
  }
}

const client = new PokemonClientLocalCache();


function apiNameToClassName(apiName: string) {
  return apiName
    .split(/[\-_ ]/g)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/^[^a-zA-Z]/, '_$&');
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

async function retrievePokemonInfo() {
  let speciesInfo: NamedAPIResource[] = [];

  let offset = 0;
  let count = 100;
  while (true) {
    const pokemon = await client.fetch('listPokemonSpecies', offset, count);
    console.log('pokemon offset @', offset)

    speciesInfo.push(...pokemon.results);

    if (pokemon.count < offset) {
      break;
    }

    offset += count;
  }

  console.log('species info:', speciesInfo.length);

  return speciesInfo;
}

async function fetchSpeciesInfo(speciesName: string) {
  console.log('fetching species:', speciesName);

  const species = await client.fetch('getPokemonSpeciesByName', speciesName);
  console.log('processing species:', species.name);

  const varieties = await runInParallel(
    species.varieties
      .map((variety) => () => client.fetch('getPokemonByName', variety.pokemon.name)),
  );

  console.log('varieties:', species.name, varieties.length);

  const forms = await runInParallel(
    varieties.flatMap(
      (pokemon) => pokemon.forms.map(
        (form) => () => client.fetch('getPokemonFormByName', form.name),
      ),
    ),
  );

  console.log('forms:', species.name, forms.length);

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

async function processAllPokemon() {
  const allSpeciesData = await retrievePokemonInfo();
  console.log('all species data:', allSpeciesData.length);

  const allPokemon = await runInParallel(
    allSpeciesData.map(
      (species) => () => fetchSpeciesInfo(species.name),
    ),
    50,
  );

  await writeFile(
    join(generatedDir, 'species.enum.ts'),
    `// AUTO GENERATED FILE\nexport enum PokemonSpecies {\n`
      + allPokemon
        .map((pokemon) => `${tabs(1)}${apiNameToClassName(pokemon.species.name)},\n`)
        .join('')
      + '}\n',
  )

  await writeFile(
    join(generatedDir, 'varieties.enum.ts'),
    `// AUTO GENERATED FILE\nexport enum PokemonVariety {\n`
      + allPokemon
        .map((pokemon) => pokemon.varieties.map((variety) => `${tabs(1)}${apiNameToClassName(variety.name)},\n`))
        .flat()
        .join('')
      + '}\n',
  );

  await writeFile(
    join(generatedDir, 'forms.enum.ts'),
    `// AUTO GENERATED FILE\nexport enum PokemonForm {\n`
      + allPokemon
        .map((pokemon) => pokemon.forms.map((form) => `${tabs(1)}${apiNameToClassName(form.name)},\n`))
        .flat()
        .join('')
      + '}\n',
  )

  await writeFile(
    join(generatedDir, 'species-list.ts'),
    `// AUTO GENERATED FILE
import { IPokemonSpecies } from "#pokeapi/pokemon-species.interface.ts";
import { PokemonSpecies } from "#pokeapi/generated/species.enum.ts";
import { PokemonVariety } from "#pokeapi/generated/varieties.enum.ts";

export const speciesList = new Map<PokemonSpecies, IPokemonSpecies>();
class Species extends IPokemonSpecies {
${tabs(1)}constructor(
${tabs(2)}species: PokemonSpecies,
${tabs(2)}varieties: PokemonVariety[],
${tabs(1)}) {
${tabs(2)}super(species, varieties);
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
);`
        )
        .join('\n')
  );

  allPokemon[0].varieties[0].forms

  await writeFile(
    join(generatedDir, 'varieties-list.ts'),
`// AUTO GENERATED FILE\nimport { IPokemonVariety } from "#pokeapi/pokemon-variety.interface.ts";
import { PokemonSpecies } from "#pokeapi/generated/species.enum.ts";
import { PokemonForm } from "#pokeapi/generated/forms.enum.ts";
import { PokemonVariety } from "#pokeapi/generated/varieties.enum.ts";

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
}\n\n`
      + allPokemon
        .map((pokemon) => pokemon.varieties)
        .flat()
        .map(
          (variety) => 
`new class ${apiNameToClassName(variety.name)}Variety extends Variety {}(
${tabs(1)}PokemonVariety.${apiNameToClassName(variety.name)},
${tabs(1)}PokemonSpecies.${apiNameToClassName(variety.species.name)},
${tabs(1)}[${variety.forms.map((f) => `PokemonForm.${apiNameToClassName(f.name)}`).join(', ')}],
);`
        )
        .join('\n')
  )
}

async function run() {
  await Promise.all(
    [cacheDir]
      .map((dir) => mkdir(dir, { recursive: true })),
  );

  console.log('processing pokemon');
  await processAllPokemon();
}

run()
  .then(() => console.log('done'))
  .catch((err) => console.error(err));
