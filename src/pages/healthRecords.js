import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { getAllPets } from '../services/petServices';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import HealthRecordsCom from '../components/HealthRecordComp';

const HealthRecords = () => {
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     const fetchPets = async () => {
//       const petsData = await getAllPets();
//       setPets(petsData);
//     };

//     fetchPets();
//   }, []);

  return (
    <div className='main'>
      <Sidebar />
      <div className='mainContent'>
        <Topbar />
        <HealthRecordsCom />
      </div>
    </div>
  );
};

export default HealthRecords;