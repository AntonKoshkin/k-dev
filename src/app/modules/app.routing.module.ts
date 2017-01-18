import {NgModule}					from '@angular/core';
import {RouterModule, Routes}	from '@angular/router';

import {HomePageComponent} from '../components/home-page/home-page';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
	}, {
		path      : '**',
		redirectTo: '',
		pathMatch : 'full',
	}
	// {
	// 	path      : '',
	// 	redirectTo: '/home-page',
	// 	pathMatch : 'full',
	// }, 
	//  {
	// 	path     : 'dashboard',
	// 	component: DashboardComponent,
	// }, {
	// 	path     : 'heroes',
	// 	component: HeroesComponent,
	// }, {
	// 	path     : 'detail/:id',
	// 	component: HeroDetailComponent,
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {};
