import { Component } from '@angular/core';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';

@Component({
  selector: 'app-home',
  imports: [TodoListComponent, TodoFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
