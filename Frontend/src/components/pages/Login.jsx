import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/users/login", {
        email,
        password,
      });
      
      const { token } = response.data;
      const { role } = response.data.user;
      
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "manager") {
        navigate("/manager/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (error) {
      
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="absolute top-8 left-8">
          <Link to='/' className="px-4 py-2 border rounded-lg cursor-pointer">Back</Link>
        </div>
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account? <Link
            to="/signup"
            className="font-semibold cursor-pointer"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
