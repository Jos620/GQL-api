import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { UsersResolver } from './resolvers/UsersResolver'

async function main() {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen()

  console.log(`Server listening on ${url}`)
}

main()
