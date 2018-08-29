import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items = [];

  constructor(private http: Http) {
    this.http.get(apiUrl + '/todo')
      .subscribe((resp) => {
        if (resp.status !== 200) {
          alert('Error occurred when fetching');
          return;
        }
        const json = resp.json();
        this.items = json.items.slice();
      });
  }

  createTodo(title: String) {
    this.http.post(apiUrl + '/todo', { title: title })
      .subscribe(resp => {
        if (resp.status !== 201) {
          alert('Error occurred when creating');
          return;
        }
        const json = resp.json();
        this.items.push(json.item);
      });
  }

  toggleTodo(id: Number) {
    this.http.put(apiUrl + '/todo/' + id, {})
      .subscribe(resp => {
        if (resp.status !== 200) {
          alert('Error when toggling');
          return;
        }
        const json = resp.json();
        for (let i = 0; i < this.items.length; ++i) {
          if (this.items[i].id === id) {
            this.items.splice(i, 1, json.item);
            break;
          }
        }
      });
  }

  deleteTodo(id: Number) {
    this.http.delete(apiUrl + '/todo/' + id)
      .subscribe(resp => {
        if (resp.status !== 200) {
          alert('Error when deleting');
          return;
        }
        for (let i = 0; i < this.items.length; ++i) {
          if (this.items[i].id === id) {
            this.items.splice(i, 1);
            break;
          }
        }
      });
  }
}
