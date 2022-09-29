import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { CreateUserInput } from '../dto/inputs/CreateUserInput'
import { UserModel } from '../dto/models/UserModel'
import { InMemoryDatabase } from '../repositories/implementations/InMemoryDatabase'

const db = InMemoryDatabase.getInstance()

@Resolver()
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    return await db.getAllUsers()
  }

  @Mutation(() => UserModel)
  async createUser(@Arg('data') data: CreateUserInput) {
    const user = {
      name: data.name,
      email: data.email,
    }

    return user
  }
}
