import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/Homepage';

// import Dashboard from './pages/Dashboard';
// // import Dashboard from './components/test/Dashboard';
// import HealthRecords from './pages/healthRecords';
// import Appointment from './pages/Appointment';
// import AddPet from './pages/AddPet';

// import ShowPet from './pages/ShowPet';
// import Setting from './pages/Settingspage';
// import EditProfile from './pages/EditProfile';

import './App.css';

function App()  {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home/*" element={<HomePage />} />
            {/* <Route path="/dashboard" element={<HomePage />} />
            <Route path="/health-records" element={<HealthRecords />} />
            <Route path="/appointment" element={<Appointment />} /> */}
            {/* <Route path='/health-records/add-pet' element={<AddPet />} />
            <Route path='/health-records/show-pet' element={<ShowPet />} />
            <Route path='/settings' element={<Setting />} />
            <Route path='/settings/edit-profile' element={<EditProfile />} /> */}
          </Routes>
    </Router>
  );
}

export default App;