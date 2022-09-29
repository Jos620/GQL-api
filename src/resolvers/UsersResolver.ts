import { Query, Resolver } from 'type-graphql'
import { UserModel } from '../dto/models/UserModel'
import { InMemoryDatabase } from '../repositories/implementations/InMemoryDatabase'
import { SupabaseDatabase } from '../repositories/implementations/Supabase'

// const db = InMemoryDatabase.getInstance()
const db = new SupabaseDatabase()

@Resolver(() => UserModel)
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    return await db.getAllUsers()
  }
}
