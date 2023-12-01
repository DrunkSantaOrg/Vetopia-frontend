import React from 'react'
import { Router, Route, Routes, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import usePetsData from '../../../hooks/Pethook'
import usePetOwnerData from '../../../hooks/PetOwnerhook'

import { useSelector, useDispatch } from 'react-redux'

import ShowPet from '../ShowPet/ShowPet'

import './HealthRecord.css'

const HealthRecord = () => {
  const { fetchPetsByPetOwnerId } = usePetsData()
  const [pets, setPets] = React.useState([])
  const [isPetLoading, setIsPetLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [petOwnerId, setPetOwnerId] = React.useState(null)
  // define dispatch
  const dispatch = useDispatch()
  // get the petOwner from redux store
  const petOwner = useSelector((state) => state.petOwner)

  // SET petOwnerId
  React.useEffect(() => {
    if (petOwner) {
      console.log(2)
      setPetOwnerId(petOwner.id)
    }
  }, [petOwner, ])

  console.log('petOwnerusingRedux:', petOwner)

  React.useEffect(
    () => {
      // define fetchPetsData
      const fetchPetsData = async () => {
        const data = await fetchPetsByPetOwnerId(petOwnerId)
        if (data) {
          setPets(data)
          console.log('pets:', data)
          if (data.length > 0) {
            setIsPetLoading(true)
          } else {
            setIsPetLoading(false)
          }
        }
      }

      // run fetchPetsData
      fetchPetsData()
    },
    // run fetchPetsData when petOwnerId changes or when fetchPetsByPetOwnerId changes
    [petOwnerId]
  )



  if (isPetLoading) {
    return <ShowPet petsList={pets} />
  } else {
    return (
      <div class="main-container">
        <div class="content">
          <div class="image-wrapper">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea9ec88b-1043-4518-820b-fcdc9c6939f3?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&"
              class="image"
            />
            <div class="message">
              Currently there is no pet data to display. <br /> Go ahead and add
              one!
            </div>
          </div>
          <Link to={'add-pet'} className="add-pet-form">
            <div class="add-pet-container">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/912e55fe-0284-4678-bd3b-1c49d4ed7d0a?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&"
                class="add-pet-image"
              />
              <div to="/health-records/add-pet" class="add-pet-button">
                Add pet
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default HealthRecord
