import LandingPage from './components/pages/LandingPage.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login.jsx'
import Signup from './components/pages/SignUp.jsx'
import AdminDashboard from './Admin/AdminDashboard.jsx'
import UserDashboard from './User/UserDashboard.jsx'
import ManagerDashboard from './Manager/ManagerDashboard.jsx'
import ManagerTable from './Admin/ManagerTable.jsx'
import Layout from './components/pages/Layout.jsx'
import UserTable from './Admin/UserTable.jsx'
import AddUserForm from './Admin/AddUserForm.jsx'
import UserProfile from './User/UserProfile.jsx'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<div><Login /></div>} />
      <Route path="/signup" element={<div><Signup /></div>} />
      <Route
        path="/admin/*"
        element={
          <Layout title="Admin Panel">
            <Routes>
              <Route path="managers" element={<ManagerTable />} />
              <Route path="users" element={<UserTable />} />
            </Routes>
          </Layout>
        }
      />
      <Route
        path="/manager/*"
        element={
          <Layout title="Manager Panel">
            <Routes>
              <Route path="users" element={<UserTable />} />

            </Routes>
          </Layout>
        }
      />
      <Route
        path="/user/*"
        element={
          <Layout title="User Panel">
            <Routes>
              {/* <Route path="dashboard" element={<UserDashboard />} /> */}
              <Route path="profile" element={<UserTable />} />
              <Route path="profile/:id" element={<UserProfile />} />
            </Routes>
          </Layout>
        }
      />


      <Route path='addmanager' element={<AddUserForm roleType="manager" />} />  //AddManager form
      <Route path="admin/dashboard" element={<AdminDashboard />} /> // Admin Dashboard
      <Route path="/manager/dashboard" element={<ManagerDashboard />} /> // Manager Dashboard
      <Route path='addusers' element={<AddUserForm roleType="users" />} />  //AddManager form
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="*" element={<div>404 Not Found</div>} />
     </Routes>
    </>
  )
}

export default App
