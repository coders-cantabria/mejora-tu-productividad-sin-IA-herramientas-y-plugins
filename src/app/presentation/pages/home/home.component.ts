import { Component, inject } from '@angular/core';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';
import { TodoManagerService } from '../../../services/todo-manager.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  imports: [TodoListComponent, TodoFormComponent, MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  #todosManagerService = inject(TodoManagerService);

  loading = this.#todosManagerService.loading;
}
