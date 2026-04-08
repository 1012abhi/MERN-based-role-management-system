import LandingPage from './components/pages/LandingPage.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login.jsx'
import Signup from './components/pages/SignUp.jsx'
import AdminDashboard from './Admin/AdminDashboard.jsx'
import UserDashboard from './User/UserDashboard.jsx'
import ManagerDashboard from './Manager/ManagerDashboard.jsx'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<div><Login /></div>} />
      <Route path="/signup" element={<div><Signup /></div>} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/manager" element={<ManagerDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
     </Routes>
    </>
  )
}

export default App
