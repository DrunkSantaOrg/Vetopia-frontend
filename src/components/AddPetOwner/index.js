import React from 'react'
import AddPetOwnerForm from '../AddPetOwnerForm'
import { useLocation } from 'react-router-dom'
import { Breadcrumb, Button, Flex } from 'antd'

import './AddPetOwner.css'
const AddPetOwner = () => {
  
  return (
    <div class="addpet-details">
      <div className="formbox">
        <div class="Avatar">
          <div className="avatar-img">
            AB
          </div>
          <div class="avatar-change">Change image</div>
          <div class="avatar-remove">Remove</div>
        </div>
        <AddPetOwnerForm />
      </div>
    </div>
  )
}

export default AddPetOwner
