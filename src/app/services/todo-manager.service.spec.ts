import { TestBed } from '@angular/core/testing';

import { TodoManagerService } from './todo-manager.service';

describe('TodoManagerService', () => {
  let service: TodoManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a todo', () => {
    service.addTodo({
      title: 'Test 1',
      date: new Date()
    });

    expect(service.todos.length).toBe(1);
  });

  it('should remove a todo', () => {
    service.addTodo({
      title: 'Test 1',
      date: new Date()
    });

    expect(service.todos.length).toBe(1);

    const [todo] = service.todos;

    service.removeTodo(todo.id);

    expect(service.todos.length).toBe(0);
  });

  it('should update a todo', () => {
    service.addTodo({
      title: 'Test 1',
      date: new Date()
    });

    expect(service.todos.length).toBe(1);

    const [todo] = service.todos;

    service.updateTodo({ ...todo, title: 'Test 2' });

    expect(service.todos[0].title).toBe('Test 2');
  });
});
