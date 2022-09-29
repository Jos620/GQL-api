import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { CreateUserInput } from '../dto/inputs/CreateUserInput'
import { UserModel } from '../dto/models/UserModel'
import { User } from '../entities/User'
import { InMemoryDatabase } from '../repositories/implementations/InMemoryDatabase'

const db = InMemoryDatabase.getInstance()

@Resolver()
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    return await db.getAllUsers()
  }

  @Mutation(() => UserModel)
  async createUser(
    @Arg('data')
    { email, name }: CreateUserInput
  ) {
    const user = new User({
      email,
      name,
    })

    await db.createUser(user)

    return user
  }
}
