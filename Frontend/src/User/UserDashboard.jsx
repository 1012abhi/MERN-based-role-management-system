import Card from "../components/pages/Card";
import Layout from "../components/pages/Layout";

export default function UserDashboard() {
  return (
    <Layout title="User Dashboard">
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="View Profile" desc="Check your personal information." />
        <Card title="Edit Profile" desc="Update your details anytime." />
        <Card title="Activity" desc="Track your recent activity." />
        <Card title="Settings" desc="Manage your preferences." />
      </div>
    </Layout>
  );
}
