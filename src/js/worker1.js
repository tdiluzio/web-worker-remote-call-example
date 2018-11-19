const API_URL = 'https://reqres.in/api/users?page=2';

onmessage = (event) => {
  console.log('Message received from main thread', event);
  fetch(API_URL)
    .then(response => response.json())
    .then(data => self.postMessage(data))
    .catch(error => console.log('An error occurred: ', error));
};