import { Todo } from '../../entities/Todo'
import { User } from '../../entities/User'
import { supabase } from '../../lib/supabase'
import { ITodosRepository } from '../TodosRepository'
import { IUsersRepository } from '../UsersRepository'

export class SupabaseDatabase implements IUsersRepository, ITodosRepository {
  async getAllUsers(): Promise<User[]> {
    const { data } = await supabase.from<User>('users').select()

    return data || []
  }

  async getUserById(id: string): Promise<User | undefined> {
    const { data } = await supabase
      .from<User>('users')
      .select()
      .eq('id', id)
      .single()

    return data || undefined
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const { data } = await supabase
      .from<User>('users')
      .select()
      .eq('email', email)
      .single()

    return data || undefined
  }

  async createUser(user: User): Promise<void> {
    await supabase.from<User>('users').insert(user)
  }

  async getAllTodos(): Promise<Todo[]> {
    const { data } = await supabase.from<Todo>('todos').select()

    return data || []
  }

  async getTodoById(id: string): Promise<Todo | undefined> {
    const { data } = await supabase
      .from<Todo>('todos')
      .select()
      .eq('id', id)
      .single()

    return data || undefined
  }

  async createTodo(todo: Todo): Promise<void> {
    await supabase.from<Todo>('todos').insert(todo)
  }

  async getUserTodos(userId: string): Promise<Todo[]> {
    const { data } = await supabase.from<Todo>('todos').select().match({
      userId: userId,
    })

    return data || []
  }
}
