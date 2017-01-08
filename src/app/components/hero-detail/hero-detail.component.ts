import 'rxjs/add/operator/switchMap';

import {Component, Input, OnInit}	from '@angular/core';
import {ActivatedRoute, Params}		from '@angular/router';
import {Location}							from '@angular/common';

import {HeroService} from '../../services/hero.service';

import {Hero} from '../../classes/hero.class';

@Component({
	selector: 'hero-detail',
	styles  : [require('./hero-detail.component.styl')[0][1]],
	template: (require('./hero-detail.component.jade'))(),
})
export class HeroDetailComponent implements OnInit {
	constructor(
		private heroService: HeroService,
		private location: Location,
		private route: ActivatedRoute
	) {}

	@Input() hero: Hero;

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
	}

	save(): void {
		this.heroService.update(this.hero)
			.then(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}
};
