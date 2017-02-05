import 'rxjs/add/operator/toPromise';

import {Injectable}		from '@angular/core';
import {Headers, Http}	from '@angular/http';

import {CONFIG} from '../config';

import {PortfolioItem} from '../classes';

@Injectable()
export class PortfolioService {
	constructor (private http: Http) {}

	private apiUrl: string = CONFIG.url.server + '/portfolio';

	private headers = new Headers({'Content-Type': 'application/json'});

	private handleError(error: any): Promise<any> {
		console.error('error', error);
		return Promise.reject(error.message || error);
	}

	get(): Promise<PortfolioItem[]> {
		return this.http.get(this.apiUrl)
			.toPromise()
			.then(result => result.json() as PortfolioItem[])
			.catch(this.handleError);
	}

	post(portfolioItem: PortfolioItem): Promise<any> {
		return this.http.post(
			this.apiUrl,
			JSON.stringify(portfolioItem),
			{headers: this.headers}
		)
			.toPromise()
			.then(result => console.log('post portfolio item', result))
			.catch(this.handleError);
	}

	update(portfolioItem: PortfolioItem): Promise<any> {
		return this.http.put(
			this.apiUrl,
			JSON.stringify(portfolioItem),
			{headers: this.headers}
		)
			.toPromise()
			.then(result => console.log('update portfolio item', result))
			.catch(this.handleError);
	}

	delete(id: number): Promise<any> {
		return this.http.delete(`${this.apiUrl}/${id}`)
			.toPromise()
			.then(result => console.log('delete portfolio item', result))
			.catch(this.handleError);
	}
};
