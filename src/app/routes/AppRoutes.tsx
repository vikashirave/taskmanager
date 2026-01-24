import { Routes, Route } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import Dashboard from "../../pages/Dashboard"
import NotFound from "../../pages/NotFound"
import LoginPage from "../../features/auth/LoginPage"
import ProtectedRoute from "./ProtectedRoute"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}