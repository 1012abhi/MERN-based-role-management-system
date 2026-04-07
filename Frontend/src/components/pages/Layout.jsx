import { useNavigate } from "react-router-dom";

export default function Layout({ title, children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔹 Remove token (ya jo bhi use kar raha hai)
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // 🔹 Redirect to login
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6 hidden md:flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-8">RBAC System</h2>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
            <li className="hover:text-gray-300 cursor-pointer">Profile</li>
            <li className="hover:text-gray-300 cursor-pointer">Settings</li>
          </ul>
        </div>

        {/* 🔥 Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-10 w-full py-2 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-semibold"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">{title}</h1>
        {children}
      </div>
    </div>
  );
}