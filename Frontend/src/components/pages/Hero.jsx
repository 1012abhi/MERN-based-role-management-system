import React from 'react'

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Role-Based Access Management System</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          A secure MERN stack application with Admin, Manager, and User roles.
          Manage users, control access, and streamline workflows efficiently.
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 bg-black text-white rounded-xl cursor-pointer">Get Started</button>
          <button className="px-6 py-3 border rounded-xl cursor-pointer">Learn More</button>
        </div>
      </section>

    </div>
  )
}

export default Hero
