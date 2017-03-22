import '../style.styl';

import 'core-js/es6';
import 'zone.js';
import 'reflect-metadata';

import {enableProdMode}				from '@angular/core';
import {platformBrowserDynamic}	from '@angular/platform-browser-dynamic';

import {AppModule} from './modules';

if (process.env.NODE_ENV === 'production') {
	enableProdMode();
} else {
	console.log('development');
}
platformBrowserDynamic().bootstrapModule(AppModule);
