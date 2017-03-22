import {Component, ViewChild} from '@angular/core';
import {
	NavigationEnd,
	Router
} from '@angular/router';
import {MdSidenav} from '@angular/material';

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
	@ViewChild('sidenav') sidenav: MdSidenav;

	constructor(
		private router: Router
	) {
		this.router.events.subscribe(val => {
			if (val instanceof NavigationEnd) {
				let newTitleArray: any[] = this.menuItems.filter(item => item.link === this.router.url);
				if (newTitleArray.length) {
					this.title = newTitleArray[0].name;
				} else {
					if (val.url.includes('portfolio')) {
						let url: string = val.url.split('/').reverse()[0];
						this.title = 'Проект ' + url;
					}
				}
			}
			setTimeout(() => {
				this.sidenav.close();
			}, 100);
		});
	}

	title: string = 'some title';
	menuItems: MenuItem[] = [
		{
			name: 'Обо мне',
			link: '/about',
		}, {
			name: 'Портфолио',
			link: '/portfolio',
		// }, {
		// 	name: 'Бложек',
		// 	link: '/blog',
		}
	];
};
