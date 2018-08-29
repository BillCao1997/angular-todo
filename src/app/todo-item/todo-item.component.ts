import { TodoService } from './../todo.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: 'todo-item.component.html',
  styles: []
})
export class TodoItemComponent {
  constructor(private todoService: TodoService) { }
}
