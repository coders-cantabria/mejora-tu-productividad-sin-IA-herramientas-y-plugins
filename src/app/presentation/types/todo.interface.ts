export interface NewTodo {
  title: string;
  description?: string;
  date: Date;
}

export interface Todo extends NewTodo {
  id: string;
  completed: boolean;
}
