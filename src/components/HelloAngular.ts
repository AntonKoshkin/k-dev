import {Component} from '@angular/core';


@Component({
	selector: 'hello-angular',
	template: `
		<div>
			<ul>
				<li *ngFor='let name of names'>Hello, {{name}}!</li>
			</ul>
		</div>
	`,
})
export class HelloAngular {
	names: string[];

	constructor() {
		this.names = ['Zar', 'Zena', 'Zemfira', 'Zak'];
	}
};
