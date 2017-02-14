
import {BrowserModule}		from '@angular/platform-browser';
import {FormsModule}			from '@angular/forms';
import {HttpModule}			from '@angular/http';
import {NgModule}				from '@angular/core';
import {MaterialModule}		from '@angular/material';
import {FlexLayoutModule}	from '@angular/flex-layout';

import {AppRoutingModule}	from './app.routing.module';

import {AppComponent, HomePageComponent, PortfolioComponent} from '../components';
import {PersonalService, PortfolioService, DataFixService} from '../services';

import 'hammerjs';

@NgModule({
	bootstrap   : [AppComponent],
	declarations: [
		AppComponent,
		HomePageComponent,
		PortfolioComponent
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
		PortfolioService
	],
})
export class AppModule {};
