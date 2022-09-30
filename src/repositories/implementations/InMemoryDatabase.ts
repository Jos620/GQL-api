import { Todo } from '../../entities/Todo'
import { User } from '../../entities/User'
import { ITodosRepository } from '../TodosRepository'
import { IUsersRepository } from '../UsersRepository'

export class InMemoryDatabase implements IUsersRepository, ITodosRepository {
  private static instance: InMemoryDatabase
  public static getInstance() {
    if (!this.instance) this.instance = new InMemoryDatabase()

    return this.instance
  }
  private constructor() {}

  private users: User[] = []

  async getAllUsers(): Promise<User[]> {
    return this.users
  }

  async getUserById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id)
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email)
  }

  async createUser(user: User): Promise<void> {
    this.users.push(user)
  }

  private todos: Todo[] = []

  async getAllTodos(): Promise<Todo[]> {
    return this.todos
  }

  async getUserTodos(userId: string): Promise<Todo[]> {
    const todos = this.todos.filter((todo) => todo.userId === userId) || []

    return todos
  }

  async getTodoById(id: string): Promise<Todo | null> {
    return this.todos.find((todo) => todo.id === id) || null
  }

  async createTodo(todo: Todo): Promise<void> {
    this.todos.push(todo)
  }

  async toggleTodo({ id, done }: Todo): Promise<Todo | null> {
    const index = this.todos.findIndex(todo => todo.id === id)

    this.todos[index].done = done

    return this.todos[index] || null
  }
}
