// PetOwnerhook.js
import {useState, useEffect, useCallback} from 'react';
import {
  getPetOwnerById,
  updatePetOwner,
} from "../services/record/apiPetOwner";

const usePetOwnerData = () => {
  const [petOwners, setPetOwners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPetOwnerById = useCallback(async (id) => {
    console.log('Fetching pet owner by ID:', id);
    setIsLoading(true);
    try {
      const response = await getPetOwnerById(id);
      setIsLoading(false);
      return response.data;
    } catch (err) {
      console.error('Error fetching pet owner:', err);
      setError(err);
      setIsLoading(false);
    }
  }, []);

  const updatePetOwnerData = async (id, petOwnerDetails) => {
    setIsLoading(true);
    try {
      await updatePetOwner(id, petOwnerDetails);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.error('Error updating pet owner:', err);
      setError(err);
      setIsLoading(false);
      return false;
    }
  };

  return {
    petOwners,
    isLoading,
    error,
    fetchPetOwnerById,
    updatePetOwner,
    updatePetOwnerData,
  };
};

export default usePetOwnerData;
