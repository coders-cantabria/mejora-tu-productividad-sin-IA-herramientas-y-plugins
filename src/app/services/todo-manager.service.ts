import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewTodo, Todo } from '../presentation/types/todo.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoManagerService {
  #todos = new BehaviorSubject<Todo[]>([]);
  todos$ = this.#todos.asObservable();

  get todos() {
    return this.#todos.getValue();
  }

  addTodo(newTodo: NewTodo) {
    this.#todos.next([
      ...this.todos,
      {
        ...newTodo,
        id: uuidv4(),
        completed: false
      }
    ]);
  }

  removeTodo(id: string) {
    this.#todos.next(this.todos.filter((todo) => todo.id !== id));
  }

  updateTodo(updatedTodo: Todo) {
    this.#todos.next(this.todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  }
}
