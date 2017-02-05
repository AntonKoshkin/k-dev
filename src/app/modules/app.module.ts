
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

console.assert(HttpModule, 'HttpModule')
console.assert(NgModule, 'NgModule')
console.assert(MaterialModule, 'MaterialModule')
console.assert(FlexLayoutModule, 'FlexLayoutModule')
console.assert(AppRoutingModule, 'AppRoutingModule')
console.assert(AppComponent, 'AppComponent')
console.assert(HomePageComponent, 'HomePageComponent')
console.assert(PortfolioComponent, 'PortfolioComponent')
console.assert(PersonalService, 'PersonalService')
console.assert(PortfolioService, 'PortfolioService')
console.assert(DataFixService, 'DataFixService')

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
