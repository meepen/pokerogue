import EventEmitter from "phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitter";
import { SystemSaveDataDto } from "./dto/trainer-data.dto";
import { AccountInfoDto } from "#app/api/dto/account-info.dto";

export class ApiError extends Error {
  constructor(message: string, public response: Response) {
    super(`ApiError ${response.statusText}: ${message}`);
  }
}

export interface LoginDetails {
  username: string;
  password: string;
}

export abstract class IPokeRogueApi extends EventEmitter {
  constructor() {
    super();
  }

  abstract restoreSession(token: string | null): void;
  abstract getPlayerCount(): Promise<number>;
  abstract register(details: LoginDetails): Promise<void>;
  abstract login(details: LoginDetails): Promise<void>;
  abstract retrieveAccountInfo(): Promise<AccountInfoDto>;
  abstract getTrainerData(): Promise<SystemSaveDataDto>;
}
