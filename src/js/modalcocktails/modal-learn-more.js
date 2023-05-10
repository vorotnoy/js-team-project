import axios from 'axios';
import { attachIngredientEvents } from '../modalingredients/modal-learn-more-ingredient';
import {refs} from '../global/refs'
import {displayMoreInfo} from './render-learm-more'
import { BASE_URL, PATH_SEARCH_ID } from '../global/const';
import {listIngredients} from './render-ingredient-list';
import { closeModalOnBtn, closeModalOnBody } from './closemodal';

const {openModalBtn,closeModalBtn , modal,modalContainer, galleryEl } = refs


// -----Відкриття та закриття модалки-------
// export function attachEvents() {
//   for (let button of openModalBtn) {
//     button.addEventListener('click', toggleModal);
//   }
//   closeModalBtn.onclick = toggleModal;
//   modal.onclick = toggleModal;

//   function toggleModal(event) {
//     event.stopPropagation();
//     if (
//       modalContainer.contains(event.target) &&
//       !closeModalBtn.contains(event.target)
//     ) {
//       return;
//     }

//     if (!modal.classList.contains('is-hidden')) {
//       document.body.classList.toggle('modal-open');
//       modal.classList.toggle('is-hidden');
//     }
//   }
//   let learnMoreEL = document.querySelectorAll(`.learnMore`);
//   for (let button of learnMoreEL) {
//     button.addEventListener('click', onLearnMore);
//   }
//   // add the same for cocktail links (added by Illia)
//   let cocktailLink = document.querySelectorAll('.cocktail-link');
//   for (let link of cocktailLink) {
//     link.addEventListener('click', onLearnMore);
//   }
//   // add the same for cocktail links (added by Illia)
// }

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
    // console.log(drink)
    galleryEl
      .querySelector('.modal-ingredients-list')
      .insertAdjacentHTML('beforeend', listIngredients(drink));
    // attachIngredientEvents();
    // document.body.addEventListener('click', closeModalOnBody);  
    // closeModalBtn.addEventListener('click', closeModalOnBtn);

    // document.body.classList.toggle('modal-open');
    // modal.classList.toggle('is-hidden');
  } catch (error) {
    console.log(error.message);
  }
}