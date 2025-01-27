import { Component, computed, inject } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodoManagerService } from '../../../services/todo-manager.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [TodoComponent, JsonPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  #todosService = inject(TodoManagerService);

  todos = toSignal(this.#todosService.todos$);

  hasTodos = computed(() => {
    const todos = this.todos();

    return todos && todos.length > 0;
  });
}
