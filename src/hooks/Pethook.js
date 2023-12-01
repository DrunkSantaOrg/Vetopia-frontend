// PetOwnerhook.js
import {useState, useEffect, useCallback} from 'react';
import {
  getPetsByPetOwnerId,
    createPets,
    updatePets,
    deletePets,
} from "../services/record/apiPet";

const usePetsData = () => {
  const [pets, setPets] = useState([]);
  const [isPetLoading, setIsPetLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPetsByPetOwnerId = useCallback(async (petOwnerId) => {
    console.log('Fetching pets by petOwnerId:', petOwnerId);
    setIsPetLoading(true);
    try {
      const response = await getPetsByPetOwnerId(petOwnerId);
      setIsPetLoading(false);
      return response.data;
    } catch (err) {
      console.error('Error fetching pets:', err);
      setError(err);
      setIsPetLoading(false);
    }
  }, []);

  const createPetsData = async (petOwnerId, petDetails) => {
    setIsPetLoading(true);
    try {
      await createPets(petOwnerId, petDetails);
      setIsPetLoading(false);
      return true;
    } catch (err) {
      console.error('Error creating pets:', err);
      setError(err);
      setIsPetLoading(false);
      return false;
    }
  };

  const updatePetsData = async ( petId, petDetails) => {
    setIsPetLoading(true);
    try {
      await updatePets(petId, petDetails);
      setIsPetLoading(false);
      return true;
    } catch (err) {
      console.error('Error updating pets:', err);
      setError(err);
      setIsPetLoading(false);
      return false;
    }
  };

  const deletePetsData = async ( petId) => {
    setIsPetLoading(true);
    try {
      await deletePets( petId);
      setIsPetLoading(false);
      return true;
    } catch (err) {
      console.error('Error deleting pets:', err);
      setError(err);
      setIsPetLoading(false);
      return false;
    }
  }

  return {
    pets,
    isPetLoading,
    error,
    fetchPetsByPetOwnerId,
    createPetsData,
    updatePetsData,
    deletePetsData,
  };
};

export default usePetsData;