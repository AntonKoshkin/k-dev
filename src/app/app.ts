import '../style.styl';

import 'core-js/es6';
import 'zone.js';
import 'reflect-metadata';

import {platformBrowserDynamic}	from '@angular/platform-browser-dynamic';

import {AppModule} from './modules';


platformBrowserDynamic().bootstrapModule(AppModule);
