import { UserInputError } from 'apollo-server'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { CreateUserInput } from '../dto/inputs/CreateUserInput'
import { UserModel } from '../dto/models/UserModel'
import { User } from '../entities/User'
import { InMemoryDatabase } from '../repositories/implementations/InMemoryDatabase'

const db = InMemoryDatabase.getInstance()

@Resolver(() => UserModel)
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
    const emailAlreadyExists = await db.getUserByEmail(email)
    if (emailAlreadyExists) {
      throw new UserInputError('Email already exists', {
        argumentName: 'email',
      })
    }

    const user = new User({
      email,
      name,
    })

    await db.createUser(user)

    return user
  }
}
