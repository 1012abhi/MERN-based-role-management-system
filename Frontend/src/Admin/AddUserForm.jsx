import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useState } from "react";

export default function AddUserForm({ roleType, refreshUsers }) {
  const [open, setOpen] = useState(false);

  const config = {
    manager: {
      title: "Add Manager",
      description: "Fill details to add a new manager",
      api: "/api/v1/admin/createManager",
    },
    user: {
      title: "Add User",
      description: "Fill details to add a new user",
      api: "/api/v1/admin/createUser",
    },
  };

  const current = config[roleType] || config["manager"];

  const handleSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `http://localhost:4000${current.api}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        alert(`${current.title} added successfully`);
        setOpen(false);
        refreshUsers();
      } else {
        alert("Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
      {/* ✅ Same Button UI */}
      <DialogTrigger className="btn cursor-pointer bg-teal-500 text-white px-4 py-2 rounded">
        {current.title}
      </DialogTrigger>

      <DialogContent className="relative [&>button]:absolute [&>button]:right-4 [&>button]:top-4 [&>button]:cursor-pointer">
        <DialogHeader>
          <DialogTitle>{current.title}</DialogTitle>
          <DialogDescription>
            {current.description}
          </DialogDescription>
        </DialogHeader>

        {/* ✅ SAME FORM UI */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              role: roleType,
              password: formData.get("password"),
            };

            handleSubmit(data);
          }}
          className="space-y-4 px-8 py-8"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium">Role</label>
            <select
              name="role"
              value={roleType}
              disabled
              className="border border-gray-300 rounded-md py-2 px-3 w-full bg-gray-100 cursor-not-allowed"
            >
              <option value={roleType}>
                {roleType.charAt(0).toUpperCase() + roleType.slice(1)}
              </option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="btn border-2 px-4 py-1 rounded-lg cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary border-2 px-4 py-1 rounded-lg cursor-pointer"
            >
              Add
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}


