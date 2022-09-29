import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateTodoInput {
  @Field()
  userId: string

  @Field()
  text: string

  @Field({
    nullable: true,
  })
  done: boolean
}
