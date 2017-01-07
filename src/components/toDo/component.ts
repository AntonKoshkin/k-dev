import {Component} from '@angular/core';

class Todo {
	constructor(
		public title: string,
		public completed: boolean = false
	) {}
}

const todos: Todo[] = [
	{
		title    : 'learn JS',
		completed: true,
	},
	{
		title    : 'learn angular 2',
		completed: false,
	},
	{
		title    : 'make app',
		completed: false,
	}
];


@Component({
	selector: 'to-do',
	styles  : [require('./component.styl')[0][1]],
	template: (require('./component.jade'))(),
})
export class ToDoComponent {
	title       :	string	= 'Angular 2Do';
	todos       :	Todo[]	= todos;
	newTodoTitle:	string	= '';


	toggle(todo: Todo) {
		todo.completed = !todo.completed;
	}

	delete(todo: Todo) {
		const index = this.todos.indexOf(todo);

		if (index > -1) {
			this.todos.splice(index, 1);
		}
	}

	create() {
		const todo: Todo = new Todo(this.newTodoTitle);

		this.todos.push(todo);
		this.newTodoTitle = '';
	}
};
