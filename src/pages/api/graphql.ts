import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from '../../graphql/schema'
import { resolvers } from '../../graphql/resolvers'
import { ExternalApi } from '../../helpers/externalApi'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      footballApi: new ExternalApi()
    }
  }
})

const handler = apolloServer.createHandler({
  path: '/api/graphql'
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler
