import EventEmitter from "phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitter";
import { SystemSaveDataDto } from "./system-save-data.dto";

export class ApiError extends Error {
  constructor(message: string, public response: Response) {
    super(`ApiError ${response.statusText}: ${message}`);
  }
}

export interface LoginDetails {
  username: string;
  password: string;
}

export interface AccountInfo {}

export class PokeRogueApi extends EventEmitter {
  private baseUrl: URL;

  constructor(apiBaseUrl: string) {
    super();
    this.baseUrl = new URL(apiBaseUrl);
  }

  private _authenticationToken: string | null = null;
  
  public set authenticationToken(token: string | null) {
    this.emit('authChanged', token);
    this._authenticationToken = token;
  }

  public get authenticationToken() {
    return this._authenticationToken;
  }

  /**
   * Populates the request with the necessary authentication headers.
   * @param init The request init object.
   * @returns The request init object with the authentication headers.
   */
  private initAuthenticated(init: RequestInit = {}) {
    if (!this.authenticationToken) {
      throw new Error('No authentication token set');
    }

    return {
      ...init,
      headers: {
        ...init.headers ?? {},
        'Authorization': this.authenticationToken
      },
    };
  }

  /**
   * Fetches the player count from the server. No authentication is required.
   * @returns The player count.
   * @throws ApiError if the request fails.
   */
  public async getPlayerCount(): Promise<number> {
    const response = await fetch(new URL('game/playercount', this.baseUrl).toString());

    if (response.ok) {
      const resp = await response.json();
      if (typeof resp === 'number') {
        return resp;
      } else {
        throw new ApiError('Invalid response', response);
      }
    }

    throw new ApiError('Failed to fetch player count', response);
  }

  /**
   * Registers a new account with the server.
   * @param details The login details.
   * @throws ApiError if the request fails.
   */
  public async register(details: LoginDetails): Promise<void> {
    const response = await fetch(new URL('account/register', this.baseUrl).toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: details.password,
        username: details.username,
      }),
    });

    if (response.status === 400) {
      throw new Error((await response.text()).trim());
    }

    if (!response.ok) {
      throw new ApiError('Failed to register', response);
    }
  }

  /**
   * Logs in to the server.
   * @param details The login details.
   * @returns The authentication token.
   * @throws ApiError if the request fails.
   */
  public async login(details: LoginDetails): Promise<void> {
    const response = await fetch(new URL('account/login', this.baseUrl).toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: details.password,
        username: details.username,
      }),
    });

    if (response.status === 400) {
      throw new Error((await response.text()).trim());
    }

    if (!response.ok) {
      throw new ApiError('Failed to login', response);
    }

    const resp = await response.json();
    if (typeof resp !== 'object') {
      throw new ApiError('Invalid response', response);
    }

    if (typeof resp['token'] !== 'string') {
      throw new ApiError('Invalid response: no token', response);
    }

    this.authenticationToken = resp['token'];
  }

  public async retrieveAccountInfo(): Promise<SystemSaveDataDto> {
    const response = await fetch(new URL('account/info', this.baseUrl).toString(), this.initAuthenticated());

    if (!response.ok) {
      throw new ApiError('Failed to retrieve account info', response);
    }

    const resp = await response.json();
    return resp as SystemSaveDataDto;
  }
}