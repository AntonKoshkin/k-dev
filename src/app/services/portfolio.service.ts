import 'rxjs/add/operator/toPromise';

import {Injectable}	from '@angular/core';
import {Http}			from '@angular/http';

import {CONFIG} from '../config';

import {PortfolioItem} from '../classes';

@Injectable()
export class PortfolioService {
	constructor (private http: Http) {}

	private apiUrl: string = CONFIG.url.server + '/portfolio';

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
};
