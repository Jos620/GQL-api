import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateTodoInput {
  @Field()
  text: string

  @Field({
    nullable: true,
  })
  done: boolean
}
