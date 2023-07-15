import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const select = document.querySelector('.breed-select');
const fullCatInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

select.addEventListener('change', handlerFullCatInfo);
select.classList.add('is-hidden');
error.classList.add('is-hidden');

fetchBreeds()
  .then(breeds => {
    setBreeds(breeds.data);
  })
  .catch(err => {
    console.log('Error', err);
    error.classList.remove('is-hidden');
  })
  .finally(() => {
    loader.classList.add('is-hidden');
    select.classList.remove('is-hidden');
  });

function handlerFullCatInfo() {
  select.classList.add('is-hidden');
  loader.classList.remove('is-hidden');
  fullCatInfo.innerHTML = '';

  fetchCatByBreed(select.value).then(catInfo => {
    showCatInfo(catInfo);

    loader.classList.add('is-hidden');
    select.classList.remove('is-hidden');
  });
}

function setBreeds(arrBreeds) {
  const markup = arrBreeds
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  select.insertAdjacentHTML('beforeend', markup);
}

function showCatInfo({ data }) {
  fullCatInfo.insertAdjacentHTML(
    'beforeend',
    `<img width = 300px src="${data[0].url}" alt="${data[0].breeds[0].name}" />
    <div class="cat-text-info">
    <h2>${data[0].breeds[0].name}</h2>
    <p>${data[0].breeds[0].description}</p>
    <p><span style="font-weight: 600">Temperament:</span> ${data[0].breeds[0].temperament}</p>
    </div>`
  );
}
