import React from 'react'
import AddPetOwnerFormComp from './AddPetOwnerFormComp'
import { useLocation } from 'react-router-dom'
import { Breadcrumb, Button, Flex } from 'antd'

import './AddPetOwnerComp.css'
const AddPetOwnerComp = () => {
  
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
        <AddPetOwnerFormComp />
      </div>
    </div>
  )
}

export default AddPetOwnerComp
