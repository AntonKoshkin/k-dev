import {Component, OnInit}	from '@angular/core';

import {Personal}		from '../../classes/personal';

import {PersonalService} from '../../services/personal.service';

import {blobToBase64} from '../../lib/converter';

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
				},
				error => {
					console.log(error, 'err')
				}
			);
	}

	submit(file: HTMLInputElement) {
		blobToBase64(file.files[0])
			.then(resFile => {
				this.personalService.addImage(resFile)
					.then(
						result => console.log(result, 'result'),
						error => console.log(error, 'error'),
					);
			});
	}
};
