import { TodoInterface } from '../types/todo.interface';

export const todoMocks = (): TodoInterface => ({
  id: '1',
  title: 'Test title',
  description: 'Test description',
  date: new Date(),
  completed: false
});
