import { Field, InputType } from 'type-graphql'
import { TodoModel } from '../models/TodoModel'

@InputType()
export class ToggleTodoInput {
  @Field()
  id: string

  @Field({
    nullable: true,
  })
  done?: boolean
}
