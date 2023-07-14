import axios from 'axios';

function fetchBreeds() {
  const URL = 'https://api.thecatapi.com/v1/breeds';
  const API_KEY =
    'live_ZO7AZyKDbAHYmC4bIS7qlq96qhotIpuYVAAUgYcv39yWCmq6bgSeRpYSiBIaGR7W';
  axios.defaults.headers.common['x-api-key'] = API_KEY;

  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export { fetchBreeds };
