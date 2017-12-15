import {Component, HostBinding, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef, IterableDiffers} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

export class TodoService {
  todos:BehaviorSubject<any[]> = new BehaviorSubject([])
  todosNo = 0;
	addTodo(newTodoText:string){
    this.todos.next(this.todos.value.concat([{text: newTodoText, completed: false}]))
    this.todosNo += 1;
	}
	completeTodo(completedTodo:any){
    this.todos.next(this.todos.value.filter(todo => todo !== completedTodo))
    this.todosNo -= 1;
	}
}

@Component({
	selector: 'todo-app',
	template: `
	  <h1>{{title}}</h1>
	  <input type="text" #todoInput>
	  <button (click)="addTodo(todoInput)">ADD</button>
	  <todo-list [todos]="todoService.todos | push" (completeTodo)="completeTodo($event)"></todo-list>
	`,
	encapsulation: ViewEncapsulation.Native,
	styles: [
		`
		:host {
			display: block;
			height: 300px;
			width: 300px;
			border: 1px solid black;
		}`
	],
	providers: [TodoService]
})
export class TodoApp {
  @Input() title = "To do app";
  @Output() added = new EventEmitter();
	constructor(public todoService:TodoService){}

	addTodo(input:HTMLInputElement){
    this.todoService.addTodo(input.value);
    input.value = '';
    this.added.emit({length: this.todoService.todosNo});
	}

	completeTodo(todo:any){
	  this.todoService.completeTodo(todo);
	}
}
