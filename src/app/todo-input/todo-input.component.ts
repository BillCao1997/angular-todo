import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styles: [],
})
export class TodoInputComponent implements OnInit {

  title;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  createTodo() {
    if (this.title.trim() === '') {
      alert('Title cannot be empty!');
      return;
    }

    this.todoService.createTodo(this.title);
    this.title = '';
  }

}
