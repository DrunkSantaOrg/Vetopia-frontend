import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


import './ShowPet.css'
import PetAvator from '../../../img/PetAvator.jpg'

import ShowPetItem from '../ShowPetItem/ShowPetItem'
const ShowPetComp = ({ petsList }) => {
  // get the petList from redux store

  // const petList = useSelector((state) => state.petList)

  // static petList for testing
  const [petList, setPetList] = React.useState(petsList)




  React.useEffect(() => {
    setPetList(petsList)
  }, [petsList])

  return (
    <div className="show-pets-detail">
      <div className="add-pet-button-box">
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
      {/* use petList to create a list of pet detail */}
      {petList.map((pet, index) => (
        <ShowPetItem petId={pet.id}  pet={pet} key={index} />
      ))}

  
    </div>
  )
}

export default ShowPetComp
