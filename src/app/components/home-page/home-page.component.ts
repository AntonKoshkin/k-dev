import {Component, OnInit, ViewEncapsulation}	from '@angular/core';
import {DomSanitizer}									from '@angular/platform-browser';
import {MdIconRegistry}									from '@angular/material';

import {Personal}		from '../../classes';

import {PersonalService} from '../../services';

import {blobToBase64} from '../../lib/converter';

import {CONFIG} from '../../config';

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
		private sanitizer: DomSanitizer
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
		this.setYears();
	}

	setYears() {
		let lastChar: number = Number(this.personal.age.toString().split('').reverse()[0]);

		if (this.personal.age > 10 && this.personal.age < 15) {
			this.years = 'лет';
		} else {
			switch (lastChar) {
				case 0:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					this.years = 'лет';
					break;
				case 1:
					this.years = 'год';
					break;
				case 2:
				case 3:
				case 4:
					this.years = 'года';
					break;
			}
		}
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
