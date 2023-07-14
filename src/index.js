import { fetchBreeds } from './js/cat-api';

fetchBreeds().then(breeds => setBreeds(breeds));

function setBreeds(arrBreeds) {
  const select = document.querySelector('.breed-select');

  const markup = arrBreeds
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  select.insertAdjacentHTML('beforeend', markup);
}
