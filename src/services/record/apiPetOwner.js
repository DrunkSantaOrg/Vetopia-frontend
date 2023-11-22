import apiClient from "../apiService";

const API_PATH = '/petowners';

// export const createPetOwner = petOwner => apiClient.post(API_PATH, petOwner);
// export const getAllPetOwners = () => apiClient.get(API_PATH);
export const getPetOwnerById = id => apiClient.get(`${API_PATH}/${id}`);
export const updatePetOwner = (id, petOwnerDetails) => apiClient.put(`${API_PATH}/${id}`, petOwnerDetails);
// export const deletePetOwner = id => apiClient.delete(`${API_PATH}/${id}`);
