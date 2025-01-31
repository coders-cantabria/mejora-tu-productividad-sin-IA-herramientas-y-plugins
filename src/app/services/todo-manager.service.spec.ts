import { TestBed } from '@angular/core/testing';

import { TodoManagerService } from './todo-manager.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { TodoInterface } from '../presentation/types/todo.interface';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('TodoManagerService', () => {
  let service: TodoManagerService;
  let http: HttpTestingController;
  let currentLength: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideAnimations(), provideHttpClient(), provideHttpClientTesting()]
    });
    http = TestBed.inject(HttpTestingController);
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

  it('should update a todo', () => {
    service.addTodo({
      title: 'Test 1',
      date: new Date()
    });

    service.addTodo({
      title: 'Test 3',
      date: new Date()
    });

    expect(service.todos.length).toBe(currentLength + 2);

    const [todo] = service.todos;

    service.updateTodo({ ...todo, title: 'Test 2' });

    expect(service.todos[0].title).toBe('Test 2');
  });

  it('should fetch todos', () => {
    const mockTodos: TodoInterface[] = [
      { id: '1', title: 'Test Todo 1', date: new Date(), completed: false },
      { id: '2', title: 'Test Todo 2', date: new Date(), completed: false }
    ];

    service.fetchTodos();

    const req = http.expectOne('https://api.mockos.io/api/v1/todos');
    expect(req.request.method).toBe('GET');
    req.flush(mockTodos);

    expect(service.todos.length).toBe(mockTodos.length);
    expect(service.todos).toEqual(mockTodos);
  });

  it('should handle error when fetching todos', () => {
    service.loading.set(true);

    service.fetchTodos();

    const req = http.expectOne('https://api.mockos.io/api/v1/todos');
    expect(req.request.method).toBe('GET');
    req.flush('Error fetching data', { status: 500, statusText: 'Server Error' });

    expect(service.loading()).toBe(false);
  });
});
