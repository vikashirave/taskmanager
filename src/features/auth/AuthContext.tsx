import { createContext } from "react"

export type User = {
  id: string
  name: string
  email: string
}

export type AuthContextType = {
  user: User | null
  login: (email: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
)