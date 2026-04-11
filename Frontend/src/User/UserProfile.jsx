import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Abhishek Maheshwari",
    email: "abhishek@gmail.com",
    role: "User",
    phone: "9876543210",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6">
        
        {/* Header */}
        <div className="flex items-center gap-6 border-b pb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            className="w-24 h-24 rounded-full border"
          />

          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
              {user.role}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Name */}
          <div>
            <label className="text-sm text-gray-500">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border rounded-md px-3 py-2 mt-1 disabled:bg-gray-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled
              className="w-full border rounded-md px-3 py-2 mt-1 bg-gray-100"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-500">Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border rounded-md px-3 py-2 mt-1 disabled:bg-gray-100"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm text-gray-500">Role</label>
            <input
              type="text"
              value={user.role}
              disabled
              className="w-full border rounded-md px-3 py-2 mt-1 bg-gray-100"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  alert("Profile updated!");
                }}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}