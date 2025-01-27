import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewTodoInterface, TodoInterface } from '../presentation/types/todo.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoManagerService {
  #todos = new BehaviorSubject<TodoInterface[]>([
    {
      id: uuidv4(),
      title: 'Configurar Angular CLI',
      description: 'Instalar Angular CLI y crear el proyecto base.',
      date: new Date(),
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Agregar rutas principales',
      description: 'Configurar el enrutador para navegar entre páginas.',
      date: new Date(),
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Optimizar para producción',
      description: 'Asegurarse de que la aplicación está optimizada para el despliegue.',
      date: new Date(),
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Configurar Angular CLI',
      description: 'Instalar Angular CLI y crear el proyecto base.',
      date: new Date(),
      completed: false
    }
  ]);
  todos$ = this.#todos.asObservable();

  get todos() {
    return this.#todos.getValue();
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
