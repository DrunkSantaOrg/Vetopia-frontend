import React from 'react'
import { useSelector } from 'react-redux'

import './ShowPet.css'
import PetAvator from '../../../img/PetAvator.jpg'
const ShowPetComp = () => {
  // get the petList from redux store

  // const petList = useSelector((state) => state.petList)

  // static petList for testing
  const petList = [
    {
      petAvatarUrl: PetAvator,
      petName: 'Snow',
      petSpecies: 'Corgi',
      petBreed: '',
      petGender: 'Male',
      petAge: '2',
      petWeight: '23lbs',
    },
  ]
  return (
    <div className="show-pets-detail">
      {/* use petList to create a list of pet detail */}
      {petList.map((pet) => (
        <div className="pet-detail">
          <div className="pet-detail-inner">
            <img src={pet.petAvatarUrl} alt="pet-avatar" />
            <div className="pet-detail-text">
              <div className="name-species">
                <div className="petName">{pet.petName}</div>
                <div className="petSpecies">{pet.petSpecies}</div>
              </div>
              <div className="gender-age-weight">
                <div className="gender-age">
                  {pet.petGender} | {pet.petAge} years old
                </div>
                <div className="petWeight">{pet.petWeight}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShowPetComp
