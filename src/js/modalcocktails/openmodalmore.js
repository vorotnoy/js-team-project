import { refs } from '../global/refs';
import {onLearnMore} from './modal-learn-more'
import { closeModalOnBtn, closeModalOnBody } from './closemodal';
const { modal, closeModalBtn } = refs;

//активуємо слухачів закриття модалки
export function modalListener(evt) {
  modal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  document.body.addEventListener('click', closeModalOnBody);  
  closeModalBtn.addEventListener('click', closeModalOnBtn);
  onLearnMore(evt);
}

// async function onLearnMore(evt) {
//   evt.preventDefault();
//   galleryEl.innerHTML = '';
//   let getID = Number(evt.target.dataset.id);
//   try {
//     getDataFromSearch(PATH_SEARCH_ID, getID).then(data => {
//       displayMoreInfo(data.data.drinks)
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }
