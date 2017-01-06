import {platformBrowserDynamic}	from '@angular/platform-browser-dynamic';

// import {HelloAngularAppModule} from './modules/HelloAngularAppModule';
import {RedditAppModule} from './modules/RedditAppModule';

// platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);
platformBrowserDynamic().bootstrapModule(RedditAppModule);