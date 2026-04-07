import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-xl font-bold">RBAC System</h1>
        <div className="space-x-4">
          <Link className="px-4 py-2 border rounded-lg cursor-pointer" to="/login">
            Login
          </Link>
          <Link className="px-4 py-2 bg-black text-white rounded-lg cursor-pointer" to="/signup">
            Signup
          </Link  >
        </div>
      </nav>
    </div>
  )
}

export default Navbar
