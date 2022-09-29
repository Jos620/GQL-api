import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'

async function main() {
  const server = new ApolloServer({})

  const { url } = await server.listen()

  console.log(`Server listening on ${url}`)
}

main()
