import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoManagerService } from './services/todo-manager.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  #todosManagerService = inject(TodoManagerService);

  title = 'productivity-coders';

  ngOnInit() {
    this.#todosManagerService.fetchTodos();
  }
}
