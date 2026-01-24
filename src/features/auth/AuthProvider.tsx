import { useState } from "react"
import { AuthContext} from "./AuthContext"
import type { User } from "./AuthContext"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string) => {
    // fake user for now
    setUser({
      id: "1",
      name: "Vikas",
      email,
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
