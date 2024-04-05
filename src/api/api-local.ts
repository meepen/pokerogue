import { IPokeRogueApi } from "#app/api/api";
import { SystemSaveDataDto } from "#app/api/dto/trainer-data.dto";

export class PokeRogueApiLocal extends IPokeRogueApi {
  private _authenticationToken: string | null = null;

  public override restoreSession(token: string | null) {
    this.emit('authChanged', token);
    this._authenticationToken = token;
  }

  public get authenticationToken() {
    return this._authenticationToken;
  }

  public override async getPlayerCount(): Promise<number> {
    return 0;
  }

  public override async register(): Promise<void> {
    return;
  }

  public override async login(): Promise<void> {
    return;
  }

  public override async retrieveAccountInfo() {
    return {
      username: 'local',
      lastSessionSlot: 0,
    };
  }

  public override async getTrainerData(): Promise<SystemSaveDataDto> {
    throw new Error('Not implemented');
  }

  public override async getSessionData(sessionNumber: number): Promise<any> {
    throw new Error('Not implemented');
  }
}
