import EventEmitter from "phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitter";

export class ApiError extends Error {
  constructor(message: string, public response: Response) {
    super(`ApiError ${response.statusText}: ${message}`);
  }
}

export class PokeRogueApi extends EventEmitter {
  private baseUrl: URL;

  constructor(apiBaseUrl: string) {
    super();
    this.baseUrl = new URL(apiBaseUrl);
  }

  private authenticationToken?: string;

  /**
   * Authenticates with the server, if necessary.
   * @returns The authentication token.
   */
  private async authenticate() {
    if (!this.authenticationToken) {
      // TODO: Implement authentication
      return null;
    }
    else {
      return this.authenticationToken;
    }
  }

  /**
   * Populates the request with the necessary authentication headers.
   * @param init The request init object.
   * @returns The request init object with the authentication headers.
   */
  private async initAuthenticated(init: RequestInit) {
    const auth = await this.authenticate();

    return {
      ...init,
      headers: {
        ...init.headers ?? {},
        'Authorization': auth
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
}