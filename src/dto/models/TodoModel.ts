import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Todo {
  @Field()
  id: string

  @Field()
  userId: string

  @Field()
  text: string

  @Field()
  done: boolean
}
