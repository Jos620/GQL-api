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

const db = InMemoryDatabase.getInstance()

@Resolver(() => UserModel)
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    return await db.getAllUsers()
  }

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
    if (emailAlreadyExists) throw new Error('Email already exists')

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
    console.log({ user: user.id })

    const todos = await db.getUserTodos(user.id)
    console.log({ todos })

    return todos
  }
}
