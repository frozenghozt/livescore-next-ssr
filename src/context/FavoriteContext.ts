import React, { createContext } from 'react'

interface ContextTypes {
  favmatches: number[]
  setFavorite: React.Dispatch<{ type; payload }>
}

export const Favorite = createContext<ContextTypes>(null)

export const FavoriteProvider = Favorite.Provider
