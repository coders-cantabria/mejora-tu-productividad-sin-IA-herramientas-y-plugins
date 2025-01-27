import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ComponentRef } from '@angular/core';
import { todoMocks } from '../../mocks/todo.mocks';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import { TodoManagerService } from '../../../services/todo-manager.service';
import { By } from '@angular/platform-browser';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let componentRef: ComponentRef<TodoComponent>;
  let todoManagerServiceSpyObj: SpyObj<TodoManagerService>;

  beforeEach(async () => {
    todoManagerServiceSpyObj = createSpyObj({
      removeTodo: () => {}
    });

    await TestBed.configureTestingModule({
      imports: [TodoComponent],
      providers: [
        provideAnimations(),
        {
          provide: TodoManagerService,
          useValue: todoManagerServiceSpyObj
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('todo', todoMocks());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove todo', () => {
    spyOn(component, 'removeTodo').and.callThrough();

    const removeButton = fixture.debugElement.query(By.css('.todo__actions button'));

    removeButton.triggerEventHandler('click');

    expect(component.removeTodo).toHaveBeenCalled();
    expect(todoManagerServiceSpyObj.removeTodo).toHaveBeenCalledWith(todoMocks().id);
  });
});
