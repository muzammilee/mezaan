
    API.post(`/auth/signup`, formData, {
      headers: { 'Content-Type': 'application/json' },
    },
     {
      withCredentials: true, 
  })
      .then((response) => {
        alert("verify your otp")
        navigate("/auth/OTPverification")
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          alert(`Error: ${error.response.data.message || 'Something went wrong'}`);
          console.error('Response error:', error.response);
        } else if (error.request) {
          alert('Error: No response from server');
          console.error('Request error:', error.request);
        } else {
          alert(`Error: ${error.message}`);
          console.error('General error:', error.message);
        }
      });