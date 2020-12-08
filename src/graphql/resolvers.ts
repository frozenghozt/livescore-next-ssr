/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import bcrypt from 'bcrypt'
import validator from 'validator'
// Models
import User, { UserShape } from '../models/user'
// Utils
import connectDB from '../helpers/connectDB'

connectDB()

export const resolvers = {
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
            awayteam: match.score.fullTime.homeTeam
          },
          halftime: {
            hometeam: match.score.halfTime.homeTeam,
            awayteam: match.score.halfTime.homeTeam
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
    // Create Account Mutation
    createUser: async (_, args: UserShape): Promise<UserShape> => {
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
      const encryptedPw = await bcrypt.hash(args.password, 12)
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
    }
  }
}
