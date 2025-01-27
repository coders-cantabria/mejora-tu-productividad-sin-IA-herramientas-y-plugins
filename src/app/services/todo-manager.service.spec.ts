import { TestBed } from '@angular/core/testing';

import { TodoManagerService } from './todo-manager.service';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('TodoManagerService', () => {
  let service: TodoManagerService;
  let currentLength: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideAnimations()]
    });
    service = TestBed.inject(TodoManagerService);

    currentLength = service.todos.length;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a todo', () => {
    service.addTodo({
      title: 'Test 1',
      date: new Date()
    });

    expect(service.todos.length).toBe(currentLength + 1);
  });

  it('should remove a todo', () => {
    service.addTodo({
      title: 'Test 1',
      date: new Date()
    });

    expect(service.todos.length).toBe(currentLength + 1);

    const [todo] = service.todos;

    service.removeTodo(todo.id);

    expect(service.todos.length).toBe(currentLength);
  });

  it('should update a todo', () => {
    service.addTodo({
      title: 'Test 1',
      date: new Date()
    });

    expect(service.todos.length).toBe(currentLength + 1);

    const [todo] = service.todos;

    service.updateTodo({ ...todo, title: 'Test 2' });

    expect(service.todos[0].title).toBe('Test 2');
  });
});
