import { PokeRogueApi } from "../api/api";

export class GameInfo {
  public api = new PokeRogueApi(import.meta.env.VITE_API_BASE_URL as string);
}

/**
 * TODO: Load the Game Info
 * @returns The Game Info loaded
 */
export function loadGameInfo(): Promise<GameInfo> {
  return Promise.resolve(new GameInfo());
}