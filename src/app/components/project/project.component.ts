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
		this.projects.forEach(item => {
			for (let img in item.image) {
				item.image[img] = this.fix.imagePath(item.image[img]);
			}
		});
	}
};
