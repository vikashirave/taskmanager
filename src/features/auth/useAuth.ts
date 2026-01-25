import { useContext } from "react"
import { AuthContext } from "./AuthContext"

export function useAuth() {
  const context = useContext(AuthContext)
  console.log("context:--", context);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }

  return context
}
