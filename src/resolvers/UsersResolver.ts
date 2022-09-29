import { Query, Resolver } from 'type-graphql'
import { UserModel } from '../dto/models/UserModel'
import { InMemoryDatabase } from '../repositories/implementations/InMemoryDatabase'

const db = InMemoryDatabase.getInstance()

@Resolver(() => UserModel)
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    return await db.getAllUsers()
  }
}
