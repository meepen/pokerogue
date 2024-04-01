import { Button } from "../controls/controls-handler";

export abstract class ISceneComponent {
  preload(): void {}
  create(): void {}
  init(): void {}
  buttonPressed?(button: Button): void;
  buttonReleased?(button: Button): void;
}