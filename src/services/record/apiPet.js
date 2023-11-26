import apiClient from "../apiService";

const API_PATH = '/pets';


// getPetsByPetOwnerId is used to get all the pets for the pet owner path = /owner-id/{ownerId}/pets
export const getPetsByPetOwnerId = petOwnerId => apiClient.get(`${API_PATH}/owner-id/${petOwnerId}/pets`);

// createPets is used to create a new pet for the pet owner
export const createPets = (petOwnerId, petDetails) => apiClient.post(`${API_PATH}/${petOwnerId}/pets`, petDetails);

// updatePets is used to update the pet owner's pet details
export const updatePets = (petId, petDetails) => apiClient.put(`${API_PATH}/${petId}`, petDetails);

// detelePets is used to delete the pet owner's pet details
export const deletePets =( petId )=> apiClient.delete(`${API_PATH}/${petId}`);
