import {Component} from '@angular/core';

@Component({
	selector: 'home-page',
	styles  : [require('./home-page.styl')[0][1]],
	template: (require('./home-page.jade'))(),
})
export class HomePageComponent {
	constructor() {}

	title: String = 'hemo-page';
};
