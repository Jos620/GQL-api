import { Todo } from '../entities/Todo'

export interface ITodosRepository {
  getAllTodos(): Promise<Todo[]>
  getTodoById(id: string): Promise<Todo | null>
  createTodo(todo: Todo): Promise<void>
  getUserTodos(userId: string): Promise<Todo[]>
  toggleTodo(todo: Todo): Promise<Todo | null>
}
