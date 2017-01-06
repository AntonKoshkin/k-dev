import {Component} from '@angular/core';


@Component({
	selector: 'reddit',
	styles: [require('./component.styl')[0][1]],
	template: (require('./component.jade'))(),
})
export class RedditAppComponent{
	addArticle(title: HTMLInputElement, link: HTMLInputElement) {
		console.log(title.value + ' ' + link.value);
		return false;
	}
};
