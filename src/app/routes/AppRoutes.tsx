import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import NotFound from '../../pages/NotFound'
import AppLayout from '../layout/AppLayout'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
