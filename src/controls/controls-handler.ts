import { initTouchControls } from '#app/touch-controls';

const keyCodes = Phaser.Input.Keyboard.KeyCodes;

export enum Button {
	UP,
	DOWN,
	LEFT,
	RIGHT,
	SUBMIT,
	ACTION,
	CANCEL,
	MENU,
	CYCLE_SHINY,
	CYCLE_FORM,
	CYCLE_GENDER,
	CYCLE_ABILITY,
	CYCLE_NATURE,
	SPEED_UP,
	SLOW_DOWN
}

export class ControlsHandler extends Phaser.Events.EventEmitter {
  private readonly buttonMap = new Map<Button, number[]>([
    [ Button.UP, [keyCodes.UP, keyCodes.W] ],
		[ Button.DOWN, [keyCodes.DOWN, keyCodes.S] ],
		[ Button.LEFT, [keyCodes.LEFT, keyCodes.A] ],
		[ Button.RIGHT, [keyCodes.RIGHT, keyCodes.D] ],
		[ Button.SUBMIT, [keyCodes.ENTER] ],
		[ Button.ACTION, [keyCodes.SPACE, keyCodes.ENTER, keyCodes.Z] ],
		[ Button.CANCEL, [keyCodes.BACKSPACE, keyCodes.X] ],
		[ Button.MENU, [keyCodes.ESC, keyCodes.M] ],
		[ Button.CYCLE_SHINY, [keyCodes.R] ],
		[ Button.CYCLE_FORM, [keyCodes.F] ],
		[ Button.CYCLE_GENDER, [keyCodes.G] ],
		[ Button.CYCLE_ABILITY, [keyCodes.E] ],
		[ Button.CYCLE_NATURE, [keyCodes.N] ],
		[ Button.SPEED_UP, [keyCodes.PLUS] ],
		[ Button.SLOW_DOWN, [keyCodes.MINUS ] ],
  ]);

	private readonly mobileKeys: Map<Button, Phaser.Input.Keyboard.Key> = new Map(
		Array.from(this.buttonMap.entries())
			.map(([button, keys]) => {
				return [ button, this.input.keyboard.addKey(keys[0], false) ];
			})
	);

  constructor(private readonly input: Phaser.Input.InputPlugin) {
		super();

		if (input.gamepad) {
			this.initGamepad(input.gamepad);
		}
		if (input.keyboard) {
			this.initKeyboard(input.keyboard);
		}

		this.initTouchControls();

		initTouchControls(this.mobileKeys);
  }

	private initTouchControls() {
	}

	private initGamepad(gamepad: Phaser.Input.Gamepad.GamepadPlugin) {

	}

	private initKeyboard(keyboard: Phaser.Input.Keyboard.KeyboardPlugin) {
		for (const [button, keys] of this.buttonMap.entries()) {
			for (const key of keys) {
				const keyButton = keyboard.addKey(key, false);
				if (!keyButton) {
					console.log('Failed to add key', key);
					continue;
				}

				this.listenToKey(keyButton, button);
			}
		}
	}

	private listenToKey(key: Phaser.Input.Keyboard.Key, button: Button) {
		key.on('down', () => {
			this.onButtonDown(button);
		});
		key.on('up', () => {
			this.onButtonUp(button);
		});
	}

	private onButtonDown(button: Button) {
		this.emit('buttondown', button);
	}

	private onButtonUp(button: Button) {
		this.emit('buttonup', button);
	}
}