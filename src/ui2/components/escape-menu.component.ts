import { MenuItemSelectComponent } from "./menu-item-select.component";

export class EscapeMenuComponent extends MenuItemSelectComponent {
  constructor(scene) {
    super(scene, {
      items: [
        {
          text: 'Game Settings',
          onSelect: () => {
            console.log('Game Settings');
          },
        },
        {
          text: 'Achievements',
          onSelect() {
            console.log('Achievements');
          },
        },
        {
          text: 'Stats',
          onSelect() {
            console.log('Stats');
          },
        },
        {
          text: 'Vouchers',
          onSelect() {
            console.log('Vouchers');
          },
        },
        {
          text: 'Egg List',
          onSelect() {
            console.log('Egg List');
          },
        },
        {
          text: 'Egg Gacha',
          onSelect() {
            console.log('Egg Gacha');
          },
        },
        {
          text: 'Manage Data',
          onSelect() {
            console.log('Manage Data');
          },
        },
        {
          text: 'Community',
          onSelect() {
            console.log('Community');
          },
        },
        {
          text: 'Log Out',
          onSelect() {
            console.log('Log Out');
          },
        },
      ]
    });
  }

  get visible() {
    return this.container.visible;
  }

  set visible(visible) {
    this.container.visible = visible;
  }

  create() {
    super.create();

    this.visible = false;
    this.container.depth = Infinity;
  }
}