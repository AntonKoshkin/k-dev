import {Component} from '@angular/core';

import {MenuItem} from '../../classes';

@Component({
	selector: 'app',
	styles: [
		require('./sidenav.styl')[0][1],
		require('./toolbar.styl')[0][1],
		require('./app.component.styl')[0][1]
	],
	template: (require('./app.component.jade'))(),
})
export class AppComponent {
	title: string = 'K-DEV';
	menuItems: MenuItem[] = [
		{
			name: 'Обо мне',
			link: '/about',
		}, {
			name: 'Мои работы',
			link: '/portfolio',
		}, {
			name: 'Бложек',
			link: '/blog',
		}
	];
};
