import React from 'react'
import AddPetOwnerForm from '../AddPetOwnerForm/AddPetOwnerForm'

import './AddPetOwner.css'

const AddPetOwner = ({petOwner}) => {

  return (
      <div class="addpet-details">
        <div className="formbox">
          <div class="Avatar">
            <div className="avatar-img">
              {petOwner.firstName[0].toUpperCase() + petOwner.lastName[0].toUpperCase()}
            </div>
            <div class="avatar-change">Change image</div>
            <div class="avatar-remove">Remove</div>
          </div>
          {petOwner && <AddPetOwnerForm petOwner={petOwner}/>}
        </div>
      </div>
  )
}

export default AddPetOwner
