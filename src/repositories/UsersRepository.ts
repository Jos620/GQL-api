import { User } from '../entities/User'

export interface IUsersRepository {
  getAllUsers(): Promise<User[]>
  getUserById(id: string): Promise<User | undefined>
  getUserByEmail(email: string): Promise<User | undefined>
  createUser(user: User): Promise<void>
}
