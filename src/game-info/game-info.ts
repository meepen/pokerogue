import { Generation } from "#gameinfo/species/generation";
import { AccountInfo, LoginDetails, PokeRogueApi } from "../api/api";
import { getSessionToken, setSessionToken } from "./local-cookies";
import { NamedAPIResourceList, PokemonClient } from "pokenode-ts";

export abstract class GameInfo {
  protected readonly pokeApi = new PokemonClient();
  constructor() {}

  abstract isLoggedIn(): Promise<boolean>;
  abstract getPlayerCount(): Promise<number>;
  abstract login(details: LoginDetails): Promise<void>;
  abstract register(details: LoginDetails): Promise<void>;
  abstract logOut(): Promise<void>;
  abstract accountInfo(): Promise<AccountInfo>;

  private allPokemons: Promise<NamedAPIResourceList>;
  private async getAllPokemon() {
    return this.pokeApi.listPokemons();
  }

  private evolutionInfo
  getEvolutions(generation: Generation) {
    this.pokeApi.listPokemons()
  }
}

class GameInfoLocal extends GameInfo {
  constructor() {
    super();
  }

  override async getPlayerCount() {
    return -1337;
  }

  override async isLoggedIn() {
    return true;
  }

  override async login(details: LoginDetails) {}
  override async register(details: LoginDetails) {}
  override async logOut() {}
  override async accountInfo() {
    return {};
  }
}

class GameInfoRemote extends GameInfo {
  private api = new PokeRogueApi(import.meta.env.VITE_API_BASE_URL);

  constructor() {
    super();
    this.api.authenticationToken = getSessionToken();
    this.api.on('authChanged', (token: string | null) => {
      console.log('authChanged', token);
      setSessionToken(token);
    });
  }

  override getPlayerCount() {
    return this.api.getPlayerCount();
  }

  override async isLoggedIn() {
    try {
      await this.api.retrieveAccountInfo();
      return true;
    }
    catch (e) {
      console.warn(e);
      return false;
    }
  }

  override login(details: LoginDetails) {
    return this.api.login(details);
  }

  override register(details: LoginDetails) {
    return this.api.register(details);
  }

  override async logOut() {
    this.api.authenticationToken = null;
    setSessionToken(null);
  }

  override accountInfo() {
    return this.api.retrieveAccountInfo();
  }

  static async create(): Promise<GameInfo> {
    const game = new GameInfoRemote();

    return game;
  }
} 

export async function loadGameInfo(): Promise<GameInfo> {
  if (import.meta.env.VITE_BYPASS_LOGIN === '1') {
    return new GameInfoLocal();
  }

  return GameInfoRemote.create();
}