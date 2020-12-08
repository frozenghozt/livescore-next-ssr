import React, { createContext } from 'react'

type Match = {
  id: number
  awayteam: string
  competition: string
  country: string
  countrycode: string
  hometeam: string
  status: string
  winner: string
}

interface ContextTypes {
  isAlive: boolean
  setIsAlive: React.Dispatch<React.SetStateAction<boolean>>
  data: {
    competitions: string[]
    matches: Array<Match>
  }
}

export const Matches = createContext<ContextTypes>(null)

export const MatchesProvider = Matches.Provider
