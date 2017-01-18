import {BrowserModule}	from '@angular/platform-browser';
import {FormsModule}		from '@angular/forms';
import {HttpModule}		from '@angular/http';
import {NgModule}			from '@angular/core';

import {AppRoutingModule}	from './app.routing.module';


import {AppComponent}		from '../components/app/app.component';
import {HomePageComponent}	from '../components/home-page/home-page';
import {SideMenuComponent}	from '../components/side-menu/side-menu.component';

@NgModule({
	bootstrap   : [AppComponent],
	declarations: [
		AppComponent,
		HomePageComponent,
		SideMenuComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
})
export class AppModule {};
