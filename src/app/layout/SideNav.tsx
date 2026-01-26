import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ListTodo,
  CheckSquare,
  Users,
  Settings,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Tasks", path: "/tasks", icon: ListTodo },
  { label: "My Tasks", path: "/my-tasks", icon: CheckSquare },
  { label: "Team", path: "/team", icon: Users },
  { label: "Settings", path: "/settings", icon: Settings },
];

export default function SideNav({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  return (
    <aside
      className={`bg-gray-900 text-white h-screen transition-all duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-64"}`}
    >
      {/* Logo + Toggle */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-700">
        {!collapsed && (
          <span className="text-lg font-bold">TaskFlow</span>
        )}
        <button
          onClick={onToggle}
          className="text-gray-400 hover:text-white"
        >
          {collapsed ? <ChevronsRight /> : <ChevronsLeft />}
        </button>
      </div>

      {/* Nav */}
      <nav className="mt-4 space-y-1 px-2">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors
               ${
                 isActive
                   ? "bg-gray-700 text-white"
                   : "text-gray-300 hover:bg-gray-800"
               }`
            }
          >
            <Icon size={20} />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
