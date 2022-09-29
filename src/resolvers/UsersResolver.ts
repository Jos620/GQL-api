import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { CreateUserInput } from '../dto/inputs/CreateUserInput'
import { UserModel } from '../dto/models/UserModel'

@Resolver()
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    return []
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
