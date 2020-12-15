import { createContext } from 'react'

interface ContextTypes {
  items: Array<string>
}

export const Structure = createContext<ContextTypes>(null)

export const StructureProvider = Structure.Provider
