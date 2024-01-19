fetch('https://api.ipify.org?format=json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });

  
