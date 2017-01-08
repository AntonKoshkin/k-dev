import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {BrowserModule}	from '@angular/platform-browser';
import {FormsModule}		from '@angular/forms';
import {HttpModule}		from '@angular/http';
import {NgModule}			from '@angular/core';

import {AppRoutingModule} from './app.routing.module';

import {AppComponent}			from '../components/app/app.component';
import {DashboardComponent}	from '../components/dashboard/dashbord.component';
import {HeroDetailComponent}	from '../components/hero-detail/hero-detail.component';
import {HeroesComponent}		from '../components/heroes/heroes.component';
import {SearchComponent}		from '../components/search/search.component';

import {HeroService}			from '../services/hero.service';
import {DataService}			from '../services/data.service';

@NgModule({
	bootstrap   : [AppComponent],
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroDetailComponent,
		HeroesComponent,
		SearchComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(DataService)
	],
	providers: [HeroService],
})
export class AppModule {};
