import LandingPage from './components/pages/LandingPage.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login.jsx'
import Signup from './components/pages/SignUp.jsx'
import AdminDashboard from './Admin/AdminDashboard.jsx'
import UserDashboard from './User/UserDashboard.jsx'
import ManagerDashboard from './Manager/ManagerDashboard.jsx'
import ManagerTable from './Admin/ManagerTable.jsx'
import Layout from './components/pages/Layout.jsx'
import AddManager from './Admin/AddManager.jsx'

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
              {/* Add other admin routes here */}
            </Routes>
          </Layout>
        }
      />
      <Route path='addmanager' element={<AddManager />} />
      <Route path="admin/dashboard" element={<AdminDashboard />} />
      <Route path="/manager" element={<ManagerDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="*" element={<div>404 Not Found</div>} />
     </Routes>
    </>
  )
}

export default App
