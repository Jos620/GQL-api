import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { UsersResolver } from './resolvers/UsersResolver'
import { TodosResolver } from './resolvers/TodosResolver'

async function main() {
  const schema = await buildSchema({
    resolvers: [UsersResolver, TodosResolver],
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen()

  console.log(`Server listening on ${url}`)
}

main()
