import React from 'react'

const Features = () => {
  return (
    <div>
       {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <h3 className="text-2xl font-bold text-center mb-10">Features</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Role Management</h4>
            <p className="text-sm text-gray-600">Admin, Manager, and User roles with different permissions.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Authentication</h4>
            <p className="text-sm text-gray-600">Secure login and signup system with access control.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h4 className="font-semibold mb-2">User Dashboard</h4>
            <p className="text-sm text-gray-600">Dedicated dashboards for each role with profile management.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
