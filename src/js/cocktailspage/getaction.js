import { modalListener } from '../modallearnmore/openmodalmore';
import { addDrink, removeDrink } from '../favourites';
import { defuneButton } from './getaddremovebutton';

export function defineClick(evt) {
  const data = evt.target.dataset;
  if (evt.target.classList.contains('js-data-modal-open')) {
    modalListener(evt);
  } else if (evt.target.classList.contains('addTo')) {
    addDrink(data.id, data.name, data.image);
    changeAdd(evt);
  } else if (evt.target.classList.contains('removeFrom')) {
    removeDrink(data.id);
    changeRemove(evt);
  }
}

function changeAdd(evt) {
  evt.target.classList.remove('addTo');
  evt.target.classList.add('removeFrom');
  evt.target.childNodes[1].classList.toggle('selected');
  evt.target.firstChild.textContent = 'Remove';
}
function changeRemove(evt) {
  evt.target.classList.remove('removeFrom');
  evt.target.classList.add('addTo');
  evt.target.childNodes[1].classList.toggle('selected');
  evt.target.firstChild.textContent = 'Add to';
}
