import Card from "../components/pages/Card";
import Layout from "../components/pages/Layout";

export default function ManagerDashboard() {
  return (
    <Layout title="Manager Dashboard">
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Add User" desc="Create users under your management." />
        <Card title="Edit User" desc="Update user information." />
        <Card title="View Users" desc="See all assigned users." />
        <Card title="Reports" desc="View user activity reports." />
        <Card title="Profile" desc="Manage your profile details." />
      </div>
    </Layout>
  );
}