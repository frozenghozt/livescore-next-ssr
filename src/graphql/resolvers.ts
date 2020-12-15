/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { hash, compare } from 'bcrypt'
import validator from 'validator'
import { createAccessToken, createRefreshToken } from '../helpers/auth'
import { PubSub } from 'apollo-server'
// Models
import User from '../models/user'
// Utils
import connectDB from '../helpers/connectDB'
// Types
import { RegisterArgs, LoginArgs, LoginContext, LoginResponse } from './types'

connectDB()
const pubsub = new PubSub()

export const resolvers = {
  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterator(['MESSAGE_ADDED'])
    }
  },
  Query: {
    // Get match data
    getMatchesByDate: async (_, args, { dataSources }) => {
      // External Api data fetch
      const data = await dataSources.footballApi.getMatches()
      // Competitions array
      const competitions = []
      // Matches array
      const matches = []
      // Data reshaper and sorter
      data.matches.forEach(match => {
        // Pushes non repeated competition leagues
        competitions.indexOf(match.competition.name) < 0 &&
          competitions.push(match.competition.name)
        // Pushes the reshaped data object
        matches.push({
          id: match.id,
          hometeam: match.homeTeam.name,
          awayteam: match.awayTeam.name,
          competition: match.competition.name,
          country: match.competition.area.name,
          countrycode: match.competition.area.code,
          status: match.status,
          winner: match.score.winner,
          fulltime: {
            hometeam: match.score.fullTime.homeTeam,
            awayteam: match.score.fullTime.awayTeam
          },
          halftime: {
            hometeam: match.score.halfTime.homeTeam,
            awayteam: match.score.halfTime.awayteam
          }
        })
      })
      // Returns the matches data
      return {
        competitions,
        matches
      }
    }
  },
  Mutation: {
    addMessage: async (_, args) => {
      pubsub.publish('MESSAGE_ADDED', { messageAdded: args })
    },
    // Create Account Mutation
    createUser: async (_, args: RegisterArgs): Promise<RegisterArgs> => {
      // Validation
      const errors = []
      // Email validation
      if (!validator.isEmail(args.email)) {
        errors.push({ message: 'E-mail is invalid.' })
      } else if (
        // Username validation
        validator.isEmpty(args.username) ||
        !validator.isLength(args.username, { min: 3, max: 10 })
      ) {
        errors.push({
          message:
            'Username needs a 3 character minimum length and 10 character maximum length.'
        })
      } else if (
        // Password validation
        validator.isEmpty(args.password) ||
        !validator.isLength(args.password, { min: 5 })
      ) {
        errors.push({
          message: 'Password too short!'
        })
      } else if (args.password !== args.repeatedpw) {
        errors.push({
          message: 'Password doesnt match'
        })
      }
      // Throw input Error
      if (errors.length > 0) {
        const inputError = new Error('Invalid input.')
        throw inputError
      }
      // Search on database for already registered accounts
      const existingEmail = await User.findOne({ email: args.email })
      const existingUsername = await User.findOne({ username: args.username })
      // Checks email availability
      if (existingEmail) {
        const emailError = new Error('Email already in use.')
        throw emailError
        // Checks username availability
      } else if (existingUsername) {
        const usernameError = new Error('Username already in use.')
        throw usernameError
      }
      // Encrypts the password received
      const encryptedPw = await hash(args.password, 12)
      // Creates a new User model instance
      const newUser = new User({
        email: args.email,
        username: args.username,
        password: encryptedPw
      })
      // Saves the new model in mongo database
      const savedUser = await newUser.save()
      // Returns the registration details
      return savedUser
    },
    // Login Account Mutation
    login: async (
      _,
      args: LoginArgs,
      context: LoginContext
    ): Promise<LoginResponse> => {
      const user = await User.findOne({ username: args.username }).exec()
      if (!user) {
        throw new Error('could not find user')
      }
      const isValid = await compare(args.password, user.password)
      if (!isValid) {
        throw new Error('Wrong password')
      }

      context.cookies.set('auth-token', createRefreshToken(user), {
        httpOnly: true,
        sameSite: 'lax',
        // here we put 6 hours, but you can put whatever you want (the shorter the safer, but also more annoying)
        maxAge: 6 * 60 * 60 * 1000 * 200,
        secure: process.env.NODE_ENV === 'production'
      })

      return {
        accessToken: createAccessToken(user)
      }
    }
  }
}
