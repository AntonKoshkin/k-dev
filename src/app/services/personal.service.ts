import 'rxjs/add/operator/toPromise';

import {Injectable}		from '@angular/core';
// import {Headers, Http}	from '@angular/http';
import {Http}	from '@angular/http';

import {CONFIG} from '../config';

import {Personal} from '../classes';

@Injectable()
export class PersonalService {
	constructor (private http: Http) {}

	private apiUrl: string = CONFIG.url.server + '/personal';
	// private addImageUrl: string = this.apiUrl + '/image';

	// private headers = new Headers({'Content-Type': 'application/json'});
	// private imageHeaders	= new Headers({'Content-Type': 'multipart/form-data'});

	private handleError(error: any): Promise<any> {
		console.error('error', error);
		return Promise.reject(error.message || error);
	}

	get(): Promise<Personal> {
		return this.http.get(this.apiUrl)
			.toPromise()
			.then(result => result.json() as Personal)
			.catch(this.handleError);
	}

	// update(personal: Personal): Promise<any> {
	// 	return this.http.put(
	// 		this.apiUrl,
	// 		JSON.stringify(personal),
	// 		{headers: this.headers}
	// 	)
	// 		.toPromise()
	// 		.then(result => console.log('update personal', result))
	// 		.catch(this.handleError);
	// }

	// addImage(image: any): Promise<any> {
	// 	console.log('img', JSON.stringify({img: image}))
	// 	return this.http.post(
	// 		this.addImageUrl,
	// 		JSON.stringify({img: image})
	// 	)
	// 		.toPromise()
	// 		.then(result => console.log('post image', result))
	// 		.catch(this.handleError);
	// }
};
