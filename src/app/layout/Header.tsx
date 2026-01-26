import { useAuth } from "../../features/auth/useAuth";


export default function Header({ onToggleNav,}: {
  onToggleNav: () => void;
}) {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleNav}
          className="text-gray-600 hover:text-black"
        >
          ☰
        </button>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <>
            <span className="text-sm text-gray-600">
              {user.email}
            </span>
            <button
              onClick={logout}
              className="text-sm text-red-600 hover:underline"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}
