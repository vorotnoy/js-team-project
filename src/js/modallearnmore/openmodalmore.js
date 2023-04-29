import { refs } from '../global/refs';
import { PATH_SEARCH_ID } from '../global/const';
import {getDataFromSearch} from '../search/search'
import {displayMoreInfo} from './getmodalcard'
import {closeModalOnBtn, closeModalOnBody} from './closemodal'

const { modal, galleryEl, closeModalBtn } = refs;

export function modalListener(evt) {  
    document.body.addEventListener('click', closeModalOnBody);
    modal.classList.remove('is-hidden');
    closeModalBtn.addEventListener('click', closeModalOnBtn)
    onLearnMore(evt);  
}
// document.body.addEventListener('click', modalListener);

async function onLearnMore(evt) {
  evt.preventDefault();
  galleryEl.innerHTML = '';
  let getID = Number(evt.target.dataset.id);
  try {
    getDataFromSearch(PATH_SEARCH_ID, getID)
    .then(data=>{
      displayMoreInfo(data.data.drinks);
    })   
  } catch (error) {
    console.log(error.message);
  }
}

