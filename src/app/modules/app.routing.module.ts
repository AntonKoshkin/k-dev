import {NgModule}					from '@angular/core';
import {RouterModule, Routes}	from '@angular/router';

import {
	HomePageComponent,
	NotFoundComponent,
	PortfolioComponent,
	ProjectComponent
} from '../components';

const routes: Routes = [
	{
		path      : '',
		redirectTo: '/about',
		pathMatch : 'full',
	}, {
		path: 'about',
		component: HomePageComponent,
	}, {
		path: 'portfolio',
		component: PortfolioComponent,
	}, {
		path      : 'portfolio/:id',
		component: ProjectComponent,
	}, {
		path      : '404',
		component: NotFoundComponent,
	}, {
		path      : '**',
		redirectTo: '/404',
		pathMatch : 'full',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {};
