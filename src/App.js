import React from 'react'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import HomePage from './pages/Homepage/Homepage'
import { connect, useDispatch } from 'react-redux'

import { setPetOwner } from './actions/actions'
import usePetOwnerData from './hooks/PetOwnerhook'
// import Dashboard from './pages/Dashboard';
// // import Dashboard from './components/test/Dashboard';
// import HealthRecords from './pages/healthRecords';
// import Appointment from './pages/Appointment';
// import AddPet from './pages/AddPet';

// import ShowPet from './pages/ShowPet';
// import Setting from './pages/Settingspage';
// import EditProfile from './pages/EditProfile';

import './App.css'

function App() {
  const { fetchPetOwnerById } = usePetOwnerData()
  const dispatch = useDispatch()
  // Hardcoded ID for testing
  const petOwnerId = 1

  useEffect(() => {
    const fetchPetOwnerData = async () => {
      const data = await fetchPetOwnerById(petOwnerId)
      if (data) {
        dispatch(setPetOwner(data))
        console.log("dispatched petOwner data: ", data)
      }
    }
    fetchPetOwnerData()
  }, [fetchPetOwnerById, petOwnerId, setPetOwner])

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
  )
}

const mapStateToProps = (state) => {
  return {
    petOwner: state.petOwner,
  }
}

const mapDispatchToProps = {
  setPetOwner,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

