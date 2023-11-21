import React from 'react'
import {
  Navigate,
  Routes,
  Route,
  useMatch,
  useLocation,
} from 'react-router-dom'
import Sidebar from '../../components/publicComponents/Sidebar'
import Topbar from '../../components/publicComponents/Topbar'
import HeadnBread from '../../components/HeadnBread'

import DashboardContent from '../../components/DashboardContent'
import Appointment from '../../components/Appointment'
import HealthRecord from '../../components/HealthRecord'
import AddPet from '../../components/AddPet'
import Setting from '../../components/Setting'
import EditProfile from '../../components/EditProfile'

import './Homepage.css'
import '../../styles/icon.css'
import '../../styles/global.css'

const HomePage = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="mainContent">
        <Topbar />
        <HeadnBread />
        <Routes>
          <Route path="" element={<Navigate to="dashboard" />} />

          <Route path="dashboard" element={<DashboardContent />} />

          <Route path="health-records" element={<HealthRecord />} />
          <Route path="health-records/add-pet" element={<AddPet />} />

          <Route path="appointment" element={<Appointment />} />

          <Route path="settings" element={<Setting />} />
          <Route path="settings/edit-profile" element={<EditProfile />} />
        </Routes>
      </div>

      {/* Add dashboard content here */}
    </div>
  )
}

export default HomePage
