import {Component, OnInit}	from '@angular/core';

import {Personal}		from '../../classes/personal';

import {PersonalService} from '../../services/personal.service';

import {CONFIG} from '../../config';

@Component({
	selector: 'home-page',
	styles  : [require('./home-page.styl')[0][1]],
	template: (require('./home-page.jade'))(),
})
export class HomePageComponent implements OnInit {
	constructor(private personalService: PersonalService) {}

	personal: Personal;

	ngOnInit(): void {
		this.personalService.get()
			.then(
				result => {
					console.log(result, 'res');
					this.personal = result;
					this.dataFix();
				},
				error => {
					console.log(error, 'err');
				}
			);
	}

	dataFix() {
		this.personal.image.forEach(image => {
			for (let photo in image) {
				this.personal.image[photo] = CONFIG.url.server + photo;
			}
		});
	}
};
