import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    username: String!
    password: String!
  }

  type Matches {
    competitions: [String]
    matches: [Match]
  }

  type Match {
    id: Int!
    hometeam: String!
    awayteam: String!
    competition: String!
    country: String!
    countrycode: String!
    status: String!
    winner: String
    fulltime: fulltime
    halftime: halftime
  }

  type fulltime {
    hometeam: Int
    awayteam: Int
  }

  type halftime {
    hometeam: Int
    awayteam: Int
  }

  type loginResponse {
    accessToken: String!
  }

  type Mutation {
    createUser(
      email: String!
      username: String!
      password: String!
      repeatedpw: String!
    ): User!
    login(username: String!, password: String!): loginResponse
  }

  type Query {
    getMatchesByDate(date: String!): Matches
  }

  type Subscription {
    messageAdded(message: String): String!
  }
`
