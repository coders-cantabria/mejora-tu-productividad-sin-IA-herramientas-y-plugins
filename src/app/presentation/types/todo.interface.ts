export interface NewTodoInterface {
  title: string;
  description?: string;
  date: Date;
}

export interface TodoInterface extends NewTodoInterface {
  id: string;
  completed: boolean;
}
