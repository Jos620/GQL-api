import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { CreateTodoInput } from '../dto/inputs/CreateTodoInput'
import { TodoModel } from '../dto/models/TodoModel'
import { Todo } from '../entities/Todo'
import { InMemoryDatabase } from '../repositories/implementations/InMemoryDatabase'

const db = InMemoryDatabase.getInstance()

@Resolver()
export class TodosResolver {
  @Query(() => [TodoModel])
  async todos() {
    return await db.getAllTodos()
  }

  @Mutation(() => TodoModel)
  async createTodo(
    @Arg('data')
    { text, done }: CreateTodoInput
  ) {
    const todo = new Todo({
      text,
      done,
    })

    await db.createTodo(todo)

    return todo
  }
}
