import { AccountInfoDto } from "#app/api/dto/account-info.dto";
import { SessionSaveData, SystemSaveDataDto } from "#app/api/dto/trainer-data.dto";
import { IPokeRogueApi, LoginDetails } from "#app/api/api";
import { getSessionToken, setSessionToken } from "./local-cookies";
import { PokeRogueApiRemote } from "#app/api/api-remote";
import { PokeRogueApiLocal } from "#app/api/api-local";

export class GameInfo {
  constructor(
    private api: IPokeRogueApi,
  ) {
    api.restoreSession(getSessionToken());
    api.on('authChanged', (token: string | null) => {
      console.log('authChanged', token);
      setSessionToken(token);
    });
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      await this.api.retrieveAccountInfo();
      return true;
    }
    catch (e) {
      console.warn(e);
      return false;
    }
  }

  async getPlayerCount(): Promise<number> {
    return await this.api.getPlayerCount();
  }
  async login(details: LoginDetails): Promise<void> {
    return await this.api.login(details);
  }
  async register(details: LoginDetails): Promise<void> {
    return await this.api.register(details);
  }
  async logOut(): Promise<void> {
    this.api.restoreSession(null);
  }
  async accountInfo(): Promise<AccountInfoDto> {
    return await this.api.retrieveAccountInfo();
  }
  async trainerInfo(): Promise<SystemSaveDataDto | null> {
    return await this.api.getTrainerData();
  }
  async sessionData(sessionNumber: number): Promise<SessionSaveData | null> {
    return await this.api.getSessionData(sessionNumber);
  }

  static async create(): Promise<GameInfo> {
    let pokeRogueApi: IPokeRogueApi;
    if (import.meta.env.VITE_BYPASS_LOGIN === '1') {
      pokeRogueApi = new PokeRogueApiLocal();
    } else {
      pokeRogueApi = new PokeRogueApiRemote(import.meta.env.VITE_API_BASE_URL);
    }

    return new GameInfo(pokeRogueApi);
  }
}
