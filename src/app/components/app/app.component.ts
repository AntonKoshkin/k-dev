import {Component} from '@angular/core';


@Component({
	selector: 'app',
	styles: [require('./app.component.styl')[0][1]],
	template: (require('./app.component.jade'))(),
})
export class AppComponent {
	title: string = 'tour of heroes';
}