import { UserInputError } from 'apollo-server'
import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'
import { CreateUserInput } from '../dto/inputs/CreateUserInput'
import { TodoModel } from '../dto/models/TodoModel'
import { UserModel } from '../dto/models/UserModel'
import { User } from '../entities/User'
import { InMemoryDatabase } from '../repositories/implementations/InMemoryDatabase'
import { SupabaseDatabase } from '../repositories/implementations/Supabase'

// const db = InMemoryDatabase.getInstance()
const db = new SupabaseDatabase()

@Resolver(() => UserModel)
export class UserResolver {
  @Query(() => UserModel)
  async user(
    @Arg('id')
    id: string
  ) {
    return await db.getUserById(id)
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

  @FieldResolver(() => [TodoModel])
  async todos(
    @Root()
    user: UserModel
  ) {
    return await db.getUserTodos(user.id)
  }
}
