import React from 'react'
import './EditProfileComp.css'
import AddPetOwnerComp from './AddPetOwnerComp'
const EditProfileComp = () => {
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
      <AddPetOwnerComp/>
    </div>
  )
}

export default EditProfileComp
