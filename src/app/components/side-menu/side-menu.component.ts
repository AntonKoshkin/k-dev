import {Component} from '@angular/core';

import {MenuItem} from '../../classes/menu-item';

@Component({
	selector: 'side-menu',
	styles  : [require('./side-menu.component.styl')[0][1]],
	template: (require('./side-menu.component.jade')()),
})
export class SideMenuComponent {
	constructor() {}

	sideMenuIsOpened: boolean = false;

	menuItems: MenuItem[] = [
		{
			name  : 'Обо мне',
			link  : '/',
			active: true,
		}, {
			name  : 'Мои работы',
			link  : '/portfolio',
			active: false,
		}
	];

	toggleSideMenu() {
		this.sideMenuIsOpened = !this.sideMenuIsOpened;
	}
};
