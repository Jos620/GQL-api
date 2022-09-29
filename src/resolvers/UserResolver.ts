import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import { TodoModel } from '../dto/models/TodoModel'
import { UserModel } from '../dto/models/UserModel'
import { InMemoryDatabase } from '../repositories/implementations/InMemoryDatabase'

const db = InMemoryDatabase.getInstance()

@Resolver(() => UserModel)
export class UserResolver {
  @Query(() => UserModel)
  async user(
    @Arg('id')
    id: string
  ) {
    return await db.getUserById(id)
  }

  @FieldResolver(() => [TodoModel])
  async todos(
    @Root()
    user: UserModel
  ) {
    return await db.getUserTodos(user.id)
  }
}
