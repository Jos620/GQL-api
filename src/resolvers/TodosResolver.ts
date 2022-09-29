import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'
import { CreateTodoInput } from '../dto/inputs/CreateTodoInput'
import { TodoModel } from '../dto/models/TodoModel'
import { UserModel } from '../dto/models/UserModel'
import { Todo } from '../entities/Todo'
import { InMemoryDatabase } from '../repositories/implementations/InMemoryDatabase'
import { SupabaseDatabase } from '../repositories/implementations/Supabase'

// const db = InMemoryDatabase.getInstance()
const db = new SupabaseDatabase()

@Resolver(() => TodoModel)
export class TodosResolver {
  @Query(() => [TodoModel])
  async todos() {
    return await db.getAllTodos()
  }

  @Mutation(() => TodoModel)
  async createTodo(
    @Arg('data')
    { text, done, userId }: CreateTodoInput
  ) {
    const todo = new Todo({
      userId,
      text,
      done,
    })

    await db.createTodo(todo)

    return todo
  }

  @FieldResolver(() => UserModel)
  async user(
    @Root()
    todo: TodoModel
  ) {
    return db.getUserById(todo.userId)
  }
}
