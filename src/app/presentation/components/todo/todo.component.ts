import { Component, inject, input } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { TodoManagerService } from '../../../services/todo-manager.service';

@Component({
  selector: 'app-todo',
  imports: [MatButtonModule, MatIconModule, DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  #todosService = inject(TodoManagerService);

  todo = input.required<TodoInterface>();

  removeTodo() {
    this.#todosService.removeTodo(this.todo().id);
  }
}
