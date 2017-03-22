import {Component, OnInit, ViewEncapsulation}	from '@angular/core';
import {DomSanitizer}									from '@angular/platform-browser';
import {MdIconRegistry}									from '@angular/material';

import {Personal, PersonalImage} from '../../classes';

import {PersonalService, DataFixService} from '../../services';

// import {blobToBase64} from '../../lib/converter';

@Component({
	selector     : 'home-page',
	styles       : [require('./home-page.component.styl')[0][1]],
	template     : (require('./home-page.component.jade'))(),
	viewProviders: [MdIconRegistry],
	encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit {
	constructor(
		private personalService: PersonalService,
		mdIconRegistry: MdIconRegistry,
		private sanitizer: DomSanitizer,
		private fix: DataFixService
	) {
		mdIconRegistry
			.addSvgIconSetInNamespace(
				'social',
				sanitizer.bypassSecurityTrustResourceUrl('/img/social.svg')
			);
	}

	personal: Personal;
	years: string;
	history: string[];
	logo: PersonalImage;

	ngOnInit(): void {
		this.personalService.get()
			.then(
				result => {
					// console.log(result, 'res');
					this.personal = result;
					this.dataFix();
				},
				error => {
					console.log(error, 'err');
				}
			);
	}

	dataFix() {
		this.personal.images.forEach(image => {
			if (image.isMain) {
				this.logo = image;
			}

			for (let picture in image) {
				image[picture] = this.fix.imagePath(image[picture]);
			}
		});

		let history: any = this.personal.about.split('\n');
		history.forEach((item, i) => {
			let line: any = item.split('|||');

			if (line.length >= 3) {
				line.forEach((peace, j) => {
					if (peace.includes('|')) {
						let name = peace.split('|')[0];
						let url = peace.split('|')[1];
						let link = `\<a href='${url}' target='_blank'\>${name}\<\/a\>`;
						line[j] = link;
						line = line.join('');
						history[i] = this.sanitizer.bypassSecurityTrustHtml(line);
					}
				});
			}
		});
		this.history = history;
		this.personal.age = this.fix.birthDateToAge(this.personal.birth);
		this.years = this.fix.setYearsWord(this.personal.age);
	}

	// submit(file: HTMLInputElement) {
	// 	blobToBase64(file.files[0])
	// 		.then(resFile => {
	// 			this.personalService.addImage(resFile)
	// 				.then(
	// 					result => console.log(result, 'result'),
	// 					error => console.log(error, 'error'),
	// 				);
	// 		});
	// }
};
