import { refs } from '../global/refs';
import { onIngredient } from './modal-learn-more-ingredient';

const { closeModalIngBtn, modal_ingredients } = refs;

export function modalIngListener(evt) {
  modal_ingredients.classList.remove('is-hidden');
  onIngredient(evt);
  document.body.addEventListener('click', closeModalIngOnBody);
  closeModalIngBtn.addEventListener('click', closeModalIngOnBtn);
}

export function closeModalIngOnBtn() {
  removeListener();
}

export function closeModalIngOnBody(evt) {
  if (evt.target.classList.contains('backdrop_ing')) {
    removeListener();
  }
}

function removeListener() {
  modal_ingredients.classList.add('is-hidden');
  closeModalIngBtn.removeEventListener('click', closeModalIngOnBtn);
  document.body.removeEventListener('click', closeModalIngOnBody);
}
