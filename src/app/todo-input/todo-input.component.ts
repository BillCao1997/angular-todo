import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styles: [],
})
export class TodoInputComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  createTodo(titleInput: HTMLInputElement) {
    const title = titleInput.value;
    if (title.trim() === '') {
      alert('Title cannot be empty!');
      return;
    }

    this.todoService.createTodo(title);
    titleInput.value = '';
  }

}
