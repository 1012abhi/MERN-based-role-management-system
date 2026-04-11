import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const fetchUserProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUser((prev) => ({
        ...prev,
        ...res.data.user,
      }));
    } catch (err) {
      alert("Failed to fetch user profile. Please try again.");
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [id]);

  const updateUserProfile = async () => {
    try {
      const response = await axios.put("http://localhost:4000/api/v1/users/update-profile", user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

    } catch (error) {
      alert("Failed to update profile. Please try again.");
    }
  };

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
              placeholder="Enter Name"
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
              placeholder="Enter Email"
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
              placeholder="Enter Number"
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
                  updateUserProfile();
                  // alert("Profile updated!");
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