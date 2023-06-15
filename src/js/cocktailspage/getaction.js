import { modalListener } from '../modalcocktails/openmodalmore';
import { addDrink, removeDrink } from '../localstorage/localstorageforcocktail';
import { modalIngListener } from '../modalingredients/modalclose';
import { removeIngredient } from '../localstorage/localstorageforing';
import { initializeFavouritesIng } from '../favorite-ingredients/favorite-ingredients';
// глобальний прослуховувач клику

export function defineClick(evt) {
  const data = evt.target.dataset;
  if (evt.target.classList.contains('js-data-modal-open')) {
    modalListener(evt);
  } else if (evt.target.closest('.ingredient-link')) {
    modalIngListener(evt);
  } 
  else if(evt.target.classList.contains('learnMore')){
    modalIngListener(evt);
  } 
  else if (evt.target.classList.contains('addTo')) {
    addDrink(data.id, data.name, data.image);
    onClickAdd(evt);
  } else if (evt.target.classList.contains('removeFrom')) {
    removeDrink(data.id);
    onClickRemove(evt);
  }
  else if(evt.target.classList.contains('removeFromIng')){
    removeIngredient(evt.target.dataset.name,evt.target.dataset.type)
    initializeFavouritesIng()
  }
}

function onClickAdd(evt) {
  evt.target.classList.remove('addTo');
  evt.target.classList.add('removeFrom');
  evt.target.childNodes[1].classList.toggle('selected');
  evt.target.firstChild.textContent = 'Remove';
}
function onClickRemove(evt) {
  evt.target.classList.remove('removeFrom');
  evt.target.classList.add('addTo');
  evt.target.childNodes[1].classList.toggle('selected');
  evt.target.firstChild.textContent = 'Add to';
}
