
import {BrowserModule}		from '@angular/platform-browser';
import {FormsModule}			from '@angular/forms';
import {HttpModule}			from '@angular/http';
import {NgModule}				from '@angular/core';
import {MaterialModule}		from '@angular/material';
import {FlexLayoutModule}	from '@angular/flex-layout';

import {AppRoutingModule}	from './app.routing.module';

import {
	AppComponent,
	HomePageComponent,
	NotFoundComponent,
	PortfolioComponent,
	ProjectComponent
} from '../components';

import {
	DataFixService,
	PersonalService,
	PortfolioService,
	ProjectService
} from '../services';

import 'hammerjs';

@NgModule({
	bootstrap   : [AppComponent],
	declarations: [
		AppComponent,
		HomePageComponent,
		NotFoundComponent,
		PortfolioComponent,
		ProjectComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FlexLayoutModule.forRoot(),
		FormsModule,
		HttpModule,
		MaterialModule.forRoot()
	],
	providers: [
		DataFixService,
		PersonalService,
		PortfolioService,
		ProjectService
	],
})
export class AppModule {};
