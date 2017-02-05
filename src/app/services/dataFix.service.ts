import {Injectable} from '@angular/core';

import {CONFIG} from '../config';

@Injectable()
export class DataFixService {
	constructor() {}

	imagePath(path: string): string {
		return CONFIG.url.server + path;
	}
};
