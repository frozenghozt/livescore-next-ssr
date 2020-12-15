import { NextApiRequest, NextApiResponse } from 'next'
import { ICookies } from 'cookies'

export interface User {
  _id: string
  username: string
  password: string
}

export interface RegisterArgs {
  email: string
  username: string
  password: string
  repeatedpw: string
}

export interface LoginContext {
  req: NextApiRequest
  res: NextApiResponse
  cookies: ICookies
  user: string | object
}

export interface LoginArgs {
  username: string
  password: string
}

export interface LoginResponse {
  accessToken: string
}
