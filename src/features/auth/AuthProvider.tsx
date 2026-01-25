import { useState, useEffect } from "react"
import { AuthContext} from "./AuthContext"
import type { User } from "./AuthContext"
import api from "../../services/api"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true);

   // restore auth on page refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      api
        .get("/me")
        .then((res) => {
          setUser(res.data);
        })
        .catch(() => {
          localStorage.removeItem("token");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post("/login", { email, password });

    const { user, token } = res.data;

    localStorage.setItem("token", token);
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;

    setUser(user);
  };

  const logout = async () => {
    await api.post("/logout");

    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
