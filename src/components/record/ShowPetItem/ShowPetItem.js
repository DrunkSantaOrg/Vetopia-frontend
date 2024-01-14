import React, { useState, useRef, useImperativeHandle } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Modal, Form, Button, message } from 'antd'
import EditPet from '../EditPet/EditPet'
import usePetsData from '../../../hooks/Pethook'
import './ShowPetItem.css'
import PetAvator from '../../../img/PetAvator.jpg'
const ShowPetItem = ({ index, pet,petId }) => {

  const navigate = useNavigate()
  const { updatePetsData,deletePetsData } = usePetsData()
  // turn pet.dateOfBirth into form's initial value
  
  pet.dateOfBirth = moment(pet.dateOfBirth)
  
  const [isDelBtnHovered, setIsDelBtnHovered] = React.useState(false)
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [isEditVisible, setIsEditVisible] = React.useState(false)
  const [formData, setFormData] = React.useState({})
  const changeFormdata = (newFormData) => {
    setFormData(newFormData)
    console.log("newFormData:"+newFormData)
  }
  
  
  const ShowEditForm = () => {
    setIsEditVisible(true)
  }

  const handleEditOk =  async() => {
    console.log('ok 1');
    
    try {
      console.log(formData)
      await updatePetsData(petId, formData);
      message.success('Pet updates successfully');
      navigate('/home/health-records');
      // refresh the page
      // window.location.reload()
    } catch (err) {
      message.error('Error updating pet')
    }
    // setIsEditVisible(false);
  }

  const handleEditCancel = () => {
    console.log('cancel')
    setIsEditVisible(false)
  }

  const handleDeleteClick = (event) => {
    event.stopPropagation()
    setIsModalVisible(true)
  }

  const handleOk = async(event) => {
    event.stopPropagation()
    try{
      await deletePetsData(petId)
      message.success('Pet deletes successfully');
      navigate('/home/health-records');
      // refresh the page
      window.location.reload()
    }catch(err){
      message.error('Error deleting pet')
    }
    setIsModalVisible(false)
  }
  const handleCancel = (event) => {
    event.stopPropagation()
    
    setIsModalVisible(false)
  }

  const handleMouseEnter = () => {
    setIsDelBtnHovered(true)
  }

  const handleMouseLeave = () => {
    setIsDelBtnHovered(false)
  }

  const okButtonStyle = {
    borderColor: '#6750A4',
    backgroundColor: '#6750A4',
  }

  const cancelButtonStyle = {
    borderColor: '#6750A4',
    color: '#6750A4',
  }

  return (
    <div>
      <div
        className={`pet-detail ${isDelBtnHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={ShowEditForm}
      >
        {isDelBtnHovered && (
          <div className="spi-delete-button" onClick={handleDeleteClick}>
            <span className="icon-Clear_outline"></span>
          </div>
        )}
        <div className="pet-detail-inner">
          <img src={PetAvator} alt="pet-avatar" />
          <div className="pet-detail-text">
            <div className="name-species">
              <div className="petName">{pet.name}</div>
              <div className="petSpecies">{pet.species}</div>
            </div>
            <div className="gender-age-weight">
              <div className="gender-age">
                {pet.gender} | {pet.age} years old
              </div>
              <div className="petWeight">{pet.weight}kg</div>
            </div>
          </div>
        </div>

        <Modal
          title={`Delete ${pet.name}`}
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText={'Confirm'}
          cancelText={'Cancel'}
          okButtonProps={{ style: okButtonStyle }}
          cancelButtonProps={{ style: cancelButtonStyle }}
        >
          <p>Are you sure you want to delete {pet.name}?</p>
        </Modal>
      </div>

      <Modal
        title="Pet Profile"
        open={isEditVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        width={'47.75rem'}
        cancelText="Cancel"
        okText="Update"
        okButtonProps={{ style: okButtonStyle }}
        cancelButtonProps={{ style: cancelButtonStyle }}
      >
        <EditPet pet={pet} onChange={changeFormdata} />
      </Modal>
    </div>
  )
}

export default ShowPetItem
