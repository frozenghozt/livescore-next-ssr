import { sign, verify } from 'jsonwebtoken'
import { User } from '../graphql/types'

export const createAccessToken = (user: User): string => {
  return sign({ userID: user._id }, process.env.ACCESS_TOKEN_SECRET)
}

export const createRefreshToken = (user: User): string => {
  return sign({ userID: user._id }, process.env.REFRESH_TOKEN_SECRET)
}

export const verifyToken = (token: string): string | object => {
  if (!token) return null
  try {
    return verify(token, process.env.ACCESS_TOKEN_SECRET)
  } catch {
    return null
  }
}
