import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
// import Dashboard from './components/test/Dashboard';
import HealthRecords from './pages/healthRecords';
import Appointment from './pages/Appointment';
import AddPet from './pages/AddPet';
import './App.css';
import ShowPet from './pages/ShowPet';
import Setting from './pages/Settingspage';
import EditProfile from './pages/EditProfile';

function App()  {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/health-records" element={<HealthRecords />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path='/health-records/add-pet' element={<AddPet />} />
            <Route path='/health-records/show-pet' element={<ShowPet />} />
            <Route path='/settings' element={<Setting />} />
            <Route path='/settings/edit-profile' element={<EditProfile />} />
          </Routes>
    </Router>
  );
}

export default App;