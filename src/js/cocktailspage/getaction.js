import { modalListener } from '../modalcocktails/openmodalmore';
import { addDrink, removeDrink } from '../localstorage/localstorageforcocktail';
import { modalIngListener } from '../modalingredients/modalclose';

// глобальний прослуховувач клику

export function defineClick(evt) {
  const data = evt.target.dataset;

  console.log('click', evt.target.classList)
  if (evt.target.classList.contains('js-data-modal-open')) {
    modalListener(evt);
  } else if (evt.target.closest('.modal-learn-more-item')) {
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
