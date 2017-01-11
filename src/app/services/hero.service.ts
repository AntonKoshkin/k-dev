import 'rxjs/add/operator/toPromise';

import {Injectable}		from '@angular/core';
import {Headers, Http}	from '@angular/http';

import {Hero} from '../classes/hero.class';

@Injectable()
export class HeroService {
	constructor (private http: Http) {}

	private heroesUrl: string = 'localhost:1337/api/heroes';
	private headers = new Headers({'Content-Type': 'application/json'});

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
					.toPromise()
					.then(result => result.json().data as Hero[])
					.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

	getHero(id: number): Promise<Hero> {
		return this.http.get(`${this.heroesUrl}/${id}`)
					.toPromise()
					.then(result => result.json().data as Hero)
					.catch(this.handleError);
	}

	update(hero: Hero): Promise<Hero> {
		return this.http.put(
					`${this.heroesUrl}/${hero.id}`,
					JSON.stringify(hero),
					{headers: this.headers}
				)
					.toPromise()
					.then(() => hero)
					.catch(this.handleError);
	}

	create(name: string): Promise<Hero> {
		return this.http.post(
					this.heroesUrl,
					JSON.stringify({name}),
					{headers: this.headers}
				)
					.toPromise()
					.then(result => result.json().data)
					.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		return this.http.delete(
					`${this.heroesUrl}/${id}`,
					{headers: this.headers}
				)
					.toPromise()
					.then(() => null)
					.catch(this.handleError);
	}
};
