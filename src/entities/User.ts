import { randomUUID } from 'node:crypto'

interface UserProps {
  name: string
  email: string
}

export class User {
  public readonly id: string

  public name: string
  public email: string

  constructor({ name, email }: UserProps, id?: string) {
    this.name = name
    this.email = email

    this.id = id ?? randomUUID()
  }
}
