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
  fulltime: {
    hometeam: string
    awayteam: string
  }
  halftime: {
    hometeam: string
    awayteam: string
  }
}

interface ContextTypes {
  isLive: boolean
  setIsLive: React.Dispatch<React.SetStateAction<boolean>>
  data: {
    competitions: string[]
    matches: Match[]
  }
}

export const Matches = createContext<ContextTypes>(null)

export const MatchesProvider = Matches.Provider
