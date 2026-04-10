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

export default function AddManager() {
  const [open, setOpen] = useState(false);

  const handleAddManager = async (managerData) => {

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:4000/api/v1/admin/createManager`,
        managerData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if (response.status == 201) {
        alert("Manager added successfully.");
        setOpen(false);
        // fetchAllUsers(); // Refresh the user list
      } else {
        alert("Failed to add manager.");
      }
    } catch (error) {
      alert("An error occurred while adding the manager.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="btn cursor-pointer bg-teal-500 text-white px-4 py-2 rounded">
        Add Manager
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Manager</DialogTitle>
          <DialogDescription>
            Fill details to add a new manager
          </DialogDescription>
        </DialogHeader>

        <form 
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const managerData = {
            name: formData.get("name"),
            email: formData.get("email"),
            role: formData.get("role"),
            password: formData.get("password"),
          };
          handleAddManager(managerData);
        }}
        className="mt-4 space-y-4 px-8">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Role</label>
            <select 
            name="role"
            className="border border-gray-300 rounded-md py-2 px-3 w-full">
              <option value="manager" className="text-sm">
                Manager
              </option>
              {/* <option value="admin">Admin</option> */}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          <div className="flex justify-end gap-8">
            <button type="button" className="btn border-2 px-4 py-1 rounded-lg cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary border-2 px-4 py-1 rounded-lg cursor-pointer">
              Add
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}