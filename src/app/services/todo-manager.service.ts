import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewTodoInterface, TodoInterface } from '../presentation/types/todo.interface';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoManagerService {
  #http = inject(HttpClient);

  loading = signal(true);

  #todos = new BehaviorSubject<TodoInterface[]>([]);
  todos$ = this.#todos.asObservable();

  get todos() {
    return this.#todos.getValue();
  }

  constructor() {}

  fetchTodos() {
    this.#http.get<TodoInterface[]>('https://api.mockos.io/api/v1/todos').subscribe({
      next: (data) => {
        this.#todos.next(data);

        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error fetching data', error);

        this.loading.set(false);
      }
    });
  }

  addTodo(newTodo: NewTodoInterface) {
    this.#todos.next([
      {
        ...newTodo,
        id: uuidv4(),
        completed: false
      },
      ...this.todos
    ]);
  }

  removeTodo(id: string) {
    this.#todos.next(this.todos.filter((todo) => todo.id !== id));
  }

  updateTodo(updatedTodo: TodoInterface) {
    this.#todos.next(this.todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  }
}
