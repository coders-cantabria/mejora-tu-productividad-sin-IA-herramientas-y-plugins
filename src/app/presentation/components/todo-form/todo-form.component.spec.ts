import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TodoManagerService } from '../../../services/todo-manager.service';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import { By } from '@angular/platform-browser';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let todoManagerServiceSpyObj: SpyObj<TodoManagerService>;

  const title = 'New TODO';
  const description = 'New TODO description';

  beforeEach(async () => {
    todoManagerServiceSpyObj = createSpyObj({
      addTodo: () => {}
    });

    await TestBed.configureTestingModule({
      imports: [TodoFormComponent],
      providers: [
        provideAnimations(),
        {
          provide: TodoManagerService,
          useValue: todoManagerServiceSpyObj
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new todo with title only', () => {
    const input = fixture.debugElement.query(By.css('.todo-form input'));

    input.nativeElement.value = title;

    input.triggerEventHandler('input', { target: input.nativeElement });

    const submitButton = fixture.debugElement.query(By.css('button'));

    submitButton.triggerEventHandler('click');

    expect(todoManagerServiceSpyObj.addTodo).toHaveBeenCalledWith({
      title,
      description: '',
      date: jasmine.any(Date)
    });
  });

  it('should create a new todo with title and description', () => {
    const input = fixture.debugElement.query(By.css('.todo-form input'));

    input.nativeElement.value = title;

    input.triggerEventHandler('input', { target: input.nativeElement });

    const textarea = fixture.debugElement.query(By.css('.todo-form textarea'));

    textarea.nativeElement.value = description;

    textarea.triggerEventHandler('input', { target: textarea.nativeElement });

    const submitButton = fixture.debugElement.query(By.css('button'));

    submitButton.triggerEventHandler('click');

    expect(todoManagerServiceSpyObj.addTodo).toHaveBeenCalledWith({
      title,
      description,
      date: jasmine.any(Date)
    });
  });

  it('should reset form after submit', () => {
    const input = fixture.debugElement.query(By.css('.todo-form input'));

    input.nativeElement.value = title;

    input.triggerEventHandler('input', { target: input.nativeElement });

    expect(component.todoForm.controls['title'].value).toEqual(title);

    component.resetForm();

    expect(component.todoForm.controls['title'].value).toEqual('');
  });
});
