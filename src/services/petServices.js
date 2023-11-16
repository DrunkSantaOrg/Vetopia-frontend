import axios from 'axios';

const BASE_URL = 'http://localhost:8080/pets';

const getAllPets = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    // Handle the error here
    console.error('There was an error fetching the pets data', error);
  }
};

// Export other methods similarly
export { getAllPets };