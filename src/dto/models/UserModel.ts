import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserModel {
  @Field()
  name: string

  @Field()
  email: string
}
