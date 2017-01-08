import {Component, OnInit} from '@angular/core';

import {Hero} from '../../classes/hero.class';

import {HeroService} from '../../services/hero.service';

@Component({
	selector: 'dashboard',
	styles  : [require('./dashbord.component.styl')[0][1]],
	template: (require('./dashbord.component.jade'))(),
})
export class DashboardComponent implements OnInit {
	heroes: Hero[];

	constructor (private heroService: HeroService) {}

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(
				result => {
					this.heroes = result.slice(1, 5);
				}
			);
	}
};
