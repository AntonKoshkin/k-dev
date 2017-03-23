import 'rxjs/add/operator/toPromise';

import {Injectable}		from '@angular/core';
// import {Headers, Http}	from '@angular/http';
import {Http}	from '@angular/http';

import {CONFIG} from '../config';

import {Project} from '../classes';

@Injectable()
export class ProjectService {
	constructor (private http: Http) {}

	private apiUrl: string = CONFIG.url.server + '/api/portfolio/';

	// private headers = new Headers({'Content-Type': 'application/json'});

	private handleError(error: any): Promise<any> {
		console.error('error', error);
		return Promise.reject(error.message || error);
	}

	get(name: string): Promise<Project> {
		return this.http.get(this.apiUrl + name)
			.toPromise()
			.then(result => result.json() as Project)
			.catch(this.handleError);
	}

	// post(project: Project): Promise<any> {
	// 	return this.http.post(
	// 		this.apiUrl + project.id.toString,
	// 		JSON.stringify(project),
	// 		{headers: this.headers}
	// 	)
	// 		.toPromise()
	// 		.then(result => console.log('post project item', result))
	// 		.catch(this.handleError);
	// }

	// update(project: Project): Promise<any> {
	// 	return this.http.put(
	// 		this.apiUrl,
	// 		JSON.stringify(project),
	// 		{headers: this.headers}
	// 	)
	// 		.toPromise()
	// 		.then(result => console.log('update project item', result))
	// 		.catch(this.handleError);
	// }

	// delete(id: number): Promise<any> {
	// 	return this.http.delete(`${this.apiUrl}/${id}`)
	// 		.toPromise()
	// 		.then(result => console.log('delete project item', result))
	// 		.catch(this.handleError);
	// }
};
