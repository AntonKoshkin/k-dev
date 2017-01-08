import '../../helpers/rxjs-extentions';

import {Component, OnInit}	from '@angular/core';
import {Router}				from '@angular/router';
import {Observable}			from 'rxjs/Observable';
import {Subject}				from 'rxjs/Subject';
import {SearchService}		from '../../services/search.service';

import {Hero} from '../../classes/hero.class';


@Component({
	selector : 'search',
	styles   : [require('./search.component.styl')[0][1]],
	template : (require('./search.component.jade'))(),
	providers: [SearchService],
})
export class SearchComponent implements OnInit {
	constructor(
		private searchService: SearchService,
		private router: Router
	) {}

	heroes: Observable<Hero[]>;
	private searchTerms = new Subject<string>();

	ngOnInit(): void {
		this.heroes = this.searchTerms
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap(
				term => term ?
					this.searchService.search(term) :
					Observable.of<Hero[]>([])
			)
			.catch(error => {
				console.log(error);
				return Observable.of<Hero[]>([]);
			});
	}

	search(term: string): void {
		this.searchTerms.next(term);
	}

	gotoDetails(hero: Hero): void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
};
