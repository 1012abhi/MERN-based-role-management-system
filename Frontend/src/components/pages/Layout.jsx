import { useNavigate } from "react-router-dom";

export default function Layout({ title, children }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  // 🔥 Role-based menu config
  const menuConfig = {
    admin: [
      { name: "Dashboard", path: "/admin/dashboard" },
      { name: "Managers", path: "/admin/managers" },
      { name: "Users", path: "/admin/users" },
    ],
    manager: [
      { name: "Dashboard", path: "/manager/dashboard" },
      { name: "Users", path: "/manager/users" },
    ],
    user: [
      { name: "Dashboard", path: "/user/dashboard" },
      { name: "Profile", path: "/user/profile" },
    ],
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6 hidden md:flex flex-col justify-between">
        
        <div>
          <h2 className="text-xl font-bold mb-8">RBAC System</h2>

          <ul className="space-y-4 text-sm">
            {menuConfig[role]?.map((item, index) => (
              <li
                key={index}
                className="hover:text-gray-300 cursor-pointer"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-10 w-full py-2 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-semibold cursor-pointer"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">{title}</h1>
        {children}
      </div>
    </div>
  );
}