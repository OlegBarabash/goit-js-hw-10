import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_ZO7AZyKDbAHYmC4bIS7qlq96qhotIpuYVAAUgYcv39yWCmq6bgSeRpYSiBIaGR7W';
axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
  const END_POINT = '/breeds';
  return fetchInfo(END_POINT);
}

function fetchCatByBreed(breedId) {
  const END_POINT = `/images/search?breed_ids=${breedId}`;
  return fetchInfo(END_POINT);
}

function fetchInfo(endPoint) {
  return axios.get(`${BASE_URL}${endPoint}`);
}

export { fetchBreeds, fetchCatByBreed };
