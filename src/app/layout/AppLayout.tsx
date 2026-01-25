import { Outlet } from "react-router-dom"
import { useAuth } from "../../features/auth/useAuth";

export default function AppLayout() {
  const { logout, user } = useAuth();
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="h-14 bg-white border-b flex items-center px-6">
        <h1 className="text-lg font-semibold">TaskFlow</h1>
        {user && (
          <button
            onClick={logout}
            className="text-sm text-red-600"
          >
            Logout
          </button>
        )}
      </header>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <nav className="space-y-2">
            <div className="font-medium"> Dashboard (Phase 1 Live 🚀)</div>
            <div className="text-gray-300">Tasks</div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
