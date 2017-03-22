import {Component, OnInit}	from '@angular/core';
import {Router} from '@angular/router';

import {Project, ProjectImage} from '../../classes';

import {
	DataFixService,
	ProjectService
} from '../../services';

@Component({
	selector: 'project',
	styles  : [require('./project.component.styl')[0][1]],
	template: (require('./project.component.jade'))(),
})
export class ProjectComponent implements OnInit {
	constructor(
		private fix: DataFixService,
		private projectService: ProjectService,
		private router: Router
	) {}

	project: Project;

	ngOnInit(): void {
		console.log('project component');
		this.projectService.get(this.router.url.split('/').reverse()[0])
			.then(
				result => {
					console.log(result, 'res');
					this.project = result;
					this.dataFix();
				},
				error => {
					console.log(error, 'err');
				}
			);
	}

	dataFix() {
		this.project.images.forEach((imagesObj: ProjectImage) => {
			if (imagesObj.main) {
				this.project.mainImage = imagesObj;
			}
			for (let image in imagesObj) {
				if (typeof imagesObj[image] === 'string') {
					imagesObj[image] = this.fix.imagePath(imagesObj[image]);
				}
			}
		});
	}
};
