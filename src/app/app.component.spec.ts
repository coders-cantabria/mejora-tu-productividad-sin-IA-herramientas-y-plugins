import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import SpyObj = jasmine.SpyObj;
import { TodoManagerService } from './services/todo-manager.service';
import createSpyObj = jasmine.createSpyObj;
import { of } from 'rxjs';
import { todoMocks } from './presentation/mocks/todo.mocks';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let todoManagerServiceSpyObj: SpyObj<TodoManagerService>;

  beforeEach(async () => {
    todoManagerServiceSpyObj = createSpyObj({
      fetchTodos: of([todoMocks()])
    });

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideHttpClient(),
        {
          provide: TodoManagerService,
          useValue: todoManagerServiceSpyObj
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchTodos on ngOnInit', () => {
    component.ngOnInit();

    expect(todoManagerServiceSpyObj.fetchTodos).toHaveBeenCalled();
  });
});
