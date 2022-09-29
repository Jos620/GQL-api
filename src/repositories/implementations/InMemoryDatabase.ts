import { User } from '../../entities/User'
import { IUsersRepository } from '../UsersRepository'

export class InMemoryDatabase implements IUsersRepository {
  private static instance: InMemoryDatabase
  public static getInstance() {
    if (!this.instance) this.instance = new InMemoryDatabase()

    return this.instance
  }
  private constructor() {}

  private users: User[] = []

  async getAllUsers(): Promise<User[]> {
    return this.users
  }

  async getUserById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id)
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email)
  }

  async createUser(user: User): Promise<void> {
    this.users.push(user)
  }
}
