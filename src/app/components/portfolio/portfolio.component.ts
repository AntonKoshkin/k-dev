import {Component, OnInit}	from '@angular/core';

import {PortfolioItem} from '../../classes';

import {PortfolioService} from '../../services/portfolio.service';
import {DataFixService} from '../../services';

@Component({
	selector: 'portfolio',
	styles  : [require('./portfolio.component.styl')[0][1]],
	template: (require('./portfolio.component.jade'))(),
})
export class PortfolioComponent implements OnInit {
	constructor(
		private portfolioService: PortfolioService,
		private fix: DataFixService
	) {}

	projects: PortfolioItem[];

	ngOnInit(): void {
		console.log('ya rodilsa');
		this.portfolioService.get()
			.then(
				result => {
					console.log(result, 'res');
					this.projects = result;
					// this.dataFix();
				},
				error => {
					console.log(error, 'err');
				}
			);
	}

	dataFix() {
		this.projects.forEach(item => {
			item.image = this.fix.imagePath(item.image);
		});
	}
};
