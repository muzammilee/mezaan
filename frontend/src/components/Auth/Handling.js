import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { showSuccess, showToast } from '../utility';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const authHandler = (formData, route, nextPagePath, navigate) => {
    // console.log(formData, route, nextPagePath, navigate);

    // Perform the API request
    API.post(route, formData)
      .then((response) => {
        // If the request is successful, navigate to the next page
        // console.log('Response:', response.data);
        showSuccess(response.data.message)
        navigate(nextPagePath);
      })
      .catch((error) => {
        // Enhanced error handling
        if (error.response) {
          // Server responded with an error (e.g., 400, 500)
          showToast(`${error.response.data.message || 'Something went wrong'}`);
          console.error('Response error:', error.response.data);
        } else if (error.request) {
          // No response received from the server
          showToast('No response from server');
          console.error('Request error:', error.request);
        } else {
          // Other types of errors (e.g., network errors, wrong request setup)
          showToast(`${error.message || 'An error occurred'}`);
          console.error('General error:', error.message);
        }

      });
};
