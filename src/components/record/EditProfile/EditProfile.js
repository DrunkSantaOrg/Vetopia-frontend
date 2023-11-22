import React from 'react'
import './EditProfile.css'
import AddPetOwner from '../AddPetOwner/AddPetOwner'
import {useLocation} from "react-router-dom";

const EditProfile = () => {
  const secNavBarList = [
    'My Profile',
    'Notification',
    'Payment & Credits',
    'Password & Security',
  ]

  const location = useLocation();
  const {petOwner} = location.state || {};

  if (!petOwner) {
    return <div>No pet owner data available.</div>;
  }
  return (
      <div className="settings-main">
        <div className="second-nav-bar">
          {secNavBarList.map((item, index) => {
            return <div key={index} className="second-nav-bar-item">{item}</div>;
          })}
        </div>
        <AddPetOwner petOwner={petOwner}/>
      </div>
  )
}

export default EditProfile
