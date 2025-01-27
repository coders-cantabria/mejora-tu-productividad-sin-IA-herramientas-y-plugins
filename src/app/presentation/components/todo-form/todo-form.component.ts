import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoManagerService } from '../../../services/todo-manager.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  #formBuilder = inject(FormBuilder);
  #todosService = inject(TodoManagerService);

  todoForm: FormGroup = this.#formBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(100)]],
    description: ['', [Validators.maxLength(5000)]]
  });

  submitForm() {
    this.#todosService.addTodo({
      ...this.todoForm.value,
      date: new Date()
    });

    this.resetForm();
  }

  resetForm() {
    this.todoForm.reset(
      {
        title: ''
      },
      { emitEvent: true }
    );
  }
}
