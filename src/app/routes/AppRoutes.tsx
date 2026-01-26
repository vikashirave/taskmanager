import { Routes, Route } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import Dashboard from "../../pages/Dashboard"
import NotFound from "../../pages/NotFound"
import LoginPage from "../../features/auth/LoginPage"
import ProtectedRoute from "./ProtectedRoute"
import Tasks from "../../pages/Tasks"

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
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  )
}