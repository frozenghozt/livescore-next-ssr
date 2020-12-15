import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from '../../graphql/schema'
import { resolvers } from '../../graphql/resolvers'
import { ExternalApi } from '../../helpers/externalApi'
import { verifyToken } from '../../helpers/auth'
import Cookies from 'cookies'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      footballApi: new ExternalApi()
    }
  },
  context: ({ req, res }) => {
    const cookies = new Cookies(req, res)
    const token = cookies.get('auth-token')
    const user = verifyToken(token)
    return {
      cookies,
      user
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
