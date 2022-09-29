import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class TodoModel {
  @Field()
  id: string

  @Field()
  text: string

  @Field()
  done: boolean
}
