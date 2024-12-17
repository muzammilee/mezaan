import axios from 'axios';

axios.get('https://api.github.com/users/octocat')
  .then(response => {
    console.log(response.data); // Log the valid user data
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });
