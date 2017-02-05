import {NgModule}					from '@angular/core';
import {RouterModule, Routes}	from '@angular/router';

import {HomePageComponent, PortfolioComponent} from '../components';

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
		path      : '**',
		redirectTo: '/about',
		pathMatch : 'full',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {};
