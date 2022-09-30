import { Field, InputType } from 'type-graphql'

@InputType()
export class ToggleTodoInput {
  @Field()
  id: string

  @Field({
    nullable: true,
  })
  done?: boolean
}
