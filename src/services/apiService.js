import axios from 'axios';

// Set up a base URL for all API calls
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/', // Adjust as per your backend server
  // You can add more default settings here
  // add auth0 token here
});

// Request interceptor
apiClient.interceptors.request.use(config => {
  // You can modify the request here (e.g., add authentication token)
  return config;
}, error => {
  // Handle request errors
  return Promise.reject(error);
});

// Response interceptor
apiClient.interceptors.response.use(response => {
  // Modify response here if needed
  return response;
}, error => {
  // Handle response errors
  // You could handle specific status codes or redirect on certain conditions
  return Promise.reject(error);
});



export default apiClient;