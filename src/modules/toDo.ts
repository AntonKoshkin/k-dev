import {NgModule}			from '@angular/core';
import {BrowserModule}	from '@angular/platform-browser';
import {FormsModule}		from '@angular/forms';

import {ToDoComponent} from '../components/toDo/component';

@NgModule({
	imports     : [BrowserModule, FormsModule],
	declarations: [ToDoComponent],
	bootstrap   : [ToDoComponent],
})
export class ToDoModule {}