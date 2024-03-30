import Phaser from 'phaser';
import InvertPostFX from './pipelines/invert';
import { version } from '../package.json';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import BBCodeTextPlugin from 'phaser3-rex-plugins/plugins/bbcodetext-plugin';
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin.js';
import { LoadGameScene } from './ui2/scenes/load-game/load-game.scene';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.WEBGL,
	parent: 'app',
	scale: {
		width: 1920,
		height: 1080,
		mode: Phaser.Scale.FIT
	},
	plugins: {
		global: [{
			key: 'rexInputTextPlugin',
			plugin: InputTextPlugin,
			start: true
		}, {
			key: 'rexBBCodeTextPlugin',
			plugin: BBCodeTextPlugin,
			start: true
		}],
		scene: [{
			key: 'rexUI',
			plugin: UIPlugin,
			mapping: 'rexUI'
		}]
	},
	input: {
		mouse: {
			target: 'app'
		},
		touch: {
			target: 'app'
		},
	},
	dom: {
		createContainer: true
	},
	pixelArt: true,
	pipeline: [ InvertPostFX ] as unknown as Phaser.Types.Core.PipelineConfig,
	scene: [ LoadGameScene ],
	version: version
};

document.fonts.load('16px emerald').then(() => document.fonts.load('10px pkmnems'));

const game = new Phaser.Game(config);
game.sound.pauseOnBlur = false;

export default game;