import { Todo } from '../entities/Todo'

export interface ITodosRepository {
  getAllTodos(): Promise<Todo[]>
  getTodoById(id: string): Promise<Todo | undefined>
  createTodo(todo: Todo): Promise<void>
}
