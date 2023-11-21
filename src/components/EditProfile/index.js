import React from 'react'
import './EditProfile.css'
import AddPetOwner from '../AddPetOwner'
const EditProfile = () => {
  const secNavBarList = [
    'My Profile',
    'Notification',
    'Payment & Credits',
    'Password & Security',
  ]
  return (
    <div className="settings-main">
      <div className="second-nav-bar">
        {secNavBarList.map((item) => {
          return <div className="second-nav-bar-item">{item}</div>
        })}
      </div>
      <AddPetOwner/>
    </div>
  )
}

export default EditProfile
