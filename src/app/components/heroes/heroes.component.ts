import {Component, OnInit} from '@angular/core';
import {Router}				from '@angular/router';

import {Hero}			from '../../classes/hero.class';
import {HeroService}	from '../../services/hero.service';


@Component({
	selector : 'heroes',
	styles   : [require('./heroes.component.styl')[0][1]],
	template : (require('./heroes.component.jade'))(),
})
export class HeroesComponent implements OnInit {
	constructor(
		private heroService: HeroService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getHeroes();
	}

	heroes: Hero[];
	selectedHero: Hero;

	getHeroes(): void {
		this.heroService.getHeroes().then(
			result => {
				this.heroes = result;
			}
		);
	}

	selectHero(hero: Hero) {
		this.selectedHero = hero;
	}

	gotoDetails(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	add(name: string) {
		name = name.trim();
		if (!name) {
			return;
		}

		this.heroService.create(name)
			.then(hero => {
				this.heroes.push(hero);
				this.selectedHero = null;
			});
	}

	delete(hero: Hero): void {
		this.heroService.delete(hero.id)
			.then(() => {
				this.heroes = this.heroes.filter(item => item !== hero);
				if (this.selectedHero === hero) this.selectedHero = null;
			});
	}
};
