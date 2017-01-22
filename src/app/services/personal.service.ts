import 'rxjs/add/operator/toPromise';

import {Injectable}		from '@angular/core';
import {Headers, Http}	from '@angular/http';

import {CONFIG} from '../config';

import {Personal} from '../classes/personal';

@Injectable()
export class PersonalService {
	constructor (private http: Http) {}

	private personalUrl: string = CONFIG.url.server + '/personal';
	private addImageUrl: string = this.personalUrl + '/image';

	private headers		= new Headers({'Content-Type': 'application/json'});
	// private imageHeaders	= new Headers({'Content-Type': 'multipart/form-data'});

	private handleError(error: any): Promise<any> {
		console.error('error', error);
		return Promise.reject(error.message || error);
	}

	get(): Promise<Personal> {
		return this.http.get(this.personalUrl)
			.toPromise()
			.then(result => result.json() as Personal)
			.catch(this.handleError);
	}

	update(personal: Personal): Promise<any> {
		return this.http.put(
			this.personalUrl,
			JSON.stringify(personal),
			{headers: this.headers}
		)
			.toPromise()
			.then(result => console.log('get personal', result))
			.catch(this.handleError);
	}

	addImage(image: any): Promise<any> {
		console.log('img', JSON.stringify({img: image}))
		return this.http.post(
			this.addImageUrl,
			JSON.stringify({img: image})
		)
			.toPromise()
			.then(result => console.log('post image', result))
			.catch(this.handleError);
	}
};
