import axios from 'axios';
import { refs } from '../global/refs';
import { displayMoreInfo } from './render-learm-more';
import { BASE_URL, PATH_SEARCH_ID } from '../global/const';
import { listIngredients } from './render-ingredient-list';

const { openModalBtn, closeModalBtn, modal, modalContainer, galleryEl } = refs;

//-------Дістаемо ID з елемента на якому натиснули learn more-------
async function fetchData(id) {
  try {
    const response = await axios.get(`${BASE_URL}${PATH_SEARCH_ID}` + id);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

//------Перевірити чи є атрибют в API та додати до листа------
export async function onLearnMore(event) {
  event.preventDefault();
  galleryEl.innerHTML = '';
  try {
    const returnedData = await fetchData(event.target.dataset.id);
    displayMoreInfo(returnedData.drinks);
    let drink = returnedData.drinks[0];
    galleryEl
      .querySelector('.modal-ingredients-list')
      .insertAdjacentHTML('beforeend', listIngredients(drink));
  } catch (error) {
    console.log(error.message);
  }
}
