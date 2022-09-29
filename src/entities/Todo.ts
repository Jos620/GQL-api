import { randomUUID } from 'node:crypto'

interface TodoProps {
  text: string
  done?: boolean
}

export class Todo {
  public readonly id: string

  public text: string
  public done: boolean

  constructor({ text, done = false }: TodoProps, id?: string) {
    this.text = text
    this.done = done

    this.id = id ?? randomUUID()
  }
}
