import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './ShowPet.css'
import PetAvator from '../../../img/PetAvator.jpg'
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
      {petList.map((pet) => (
        <div className="pet-detail">
          <div className="pet-detail-inner">
            <img src={pet.petAvatarUrl} alt="pet-avatar" />
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
        </div>
      ))}
    </div>
  )
}

export default ShowPetComp
