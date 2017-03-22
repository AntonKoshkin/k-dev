import {Component}	from '@angular/core';

@Component({
	selector: 'notFound',
	styles  : [],
	template: `
<p>Этой страницы не существует. Возможно, она когда-нибудь здесь появится.</p>
<a routerLink='/about' style='color:blue;text-decoration:underline;'>На главную</a>
`,
})
export class NotFoundComponent {
	constructor() {}
};
