import {Component, OnInit}	from '@angular/core';

import {Project} from '../../classes';

import {DataFixService, ProjectService} from '../../services';

@Component({
	selector: 'project',
	styles  : [require('./project.component.styl')[0][1]],
	template: (require('./project.component.jade'))(),
})
export class ProjectComponent implements OnInit {
	constructor(
		private projectService: ProjectService,
		private fix: DataFixService
	) {}

	projects: Project[];

	ngOnInit(): void {
		console.log('ya rodilsa');
		this.projectService.get(123)
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
		this.projects.forEach(project => {
			project.images.forEach((imagesObj: Object) => {
				for (let image in imagesObj) {
					imagesObj[image] = this.fix.imagePath(imagesObj[image]);
				}
			});
		});
	}
};
