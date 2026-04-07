import { useState } from "react";
import Card from "../components/pages/Card";
import Layout from "../components/pages/Layout";
import { addManager, addUser } from "./api";

export default function AdminDashboard() {
  const [showManagerForm, setShowManagerForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);

  const handleAddManager = () => setShowManagerForm(true);
  const handleAddUser = () => setShowUserForm(true);

  const handleCloseForm = () => {
    setShowManagerForm(false);
    setShowUserForm(false);
  };

  const handleSubmitManager = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const managerData = Object.fromEntries(formData);
    try {
      const response = await addManager(managerData);
      alert(response.message);
      handleCloseForm();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmitUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);
    try {
      const response = await addUser(userData);
      alert(response.message);
      handleCloseForm();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout title="Admin Dashboard">
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="Add Manager"
          desc="Create and assign new managers."
          action={<button onClick={handleAddManager}>Add Manager</button>}
        />
        <Card
          title="Add User"
          desc="Add new users to the system."
          action={<button onClick={handleAddUser}>Add User</button>}
        />
        <Card title="Manage Users" desc="Edit, delete and control users." />
        <Card title="View Profiles" desc="Access all user and manager profiles." />
        <Card title="System Analytics" desc="Monitor system usage and stats." />
        <Card title="Settings" desc="Manage system configurations." />
      </div>

      {showManagerForm && (
        <div className="modal">
          <h2>Add Manager</h2>
          <form onSubmit={handleSubmitManager}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCloseForm}>Cancel</button>
          </form>
        </div>
      )}

      {showUserForm && (
        <div className="modal">
          <h2>Add User</h2>
          <form onSubmit={handleSubmitUser}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCloseForm}>Cancel</button>
          </form>
        </div>
      )}
    </Layout>
  );
}
