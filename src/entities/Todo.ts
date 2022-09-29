import { randomUUID } from 'node:crypto'

interface TodoProps {
  userId: string
  text: string
  done?: boolean
}

export class Todo {
  public readonly id: string
  public readonly userId: string

  public text: string
  public done: boolean

  constructor({ text, done = false, userId }: TodoProps, id?: string) {
    this.text = text
    this.done = done
    this.userId = userId

    this.id = id ?? randomUUID()
  }
}
