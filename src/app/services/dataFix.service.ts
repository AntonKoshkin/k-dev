import {Injectable} from '@angular/core';

import {CONFIG} from '../config';

@Injectable()
export class DataFixService {
	constructor() {}

	imagePath(path: string): string {
		return CONFIG.url.server + path;
	}

	setYearsWord(year: number): string {
		if (!year) {
			return 'null';
		} else {
			let lastChar: number = Number(year.toString().split('').reverse()[0]);

			if (year > 10 && year < 15) {
				return 'лет';
			} else {
				switch (lastChar) {
					case 0:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
						return 'лет';
					case 1:
						return 'год';
					case 2:
					case 3:
					case 4:
						return 'года';
				}
			}

			return 'null';
		}
	}

	birthDateToAge(birthDate: any) {
		birthDate = new Date(birthDate);

		let now = new Date();
		let age = now.getFullYear() - birthDate.getFullYear();

		return now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
	}

};
