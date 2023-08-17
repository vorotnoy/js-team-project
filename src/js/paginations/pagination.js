import { refs } from '../global/refs';
import {
  attachFavouriteClickEvents,
  attachFavouritesRemoveClickEvents,
} from '../modalcocktails/changebutton';
import { getPageArr } from './getbutton';
import { location } from '../global/location';

const { ulTag, prewButton, nextButton } = refs;

export let page = 1;
let array = [];

export function pagination(totalPages, page) {
  let liTag = '';
  let thirdPagesAnd = totalPages - 2;
  let thirdPages = page - 2;
  let curentPage = page;

  attachFavouriteClickEvents();

  // if (location === '' || location === 'index.html') {
  //   attachFavouriteClickEvents();
  // } else if (location === 'cocktails.html') {
  //   attachFavouriteClickEvents();
  // } else if (location === 'ingredients.html') {
  //   attachFavouriteClickEvents();
  // }

  if (totalPages > 6) {
    if (page < 3) {
      thirdPages = 1;
      page = 3;
    }
    if (page > totalPages - 3) {
      page = totalPages - 3;
      thirdPages = page - 2;
    }
    for (let i = thirdPages; i <= page; i++) {
      if (i === curentPage) {
        liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
      } else {
        liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
      }
    }
    liTag += `<li class="pagination-item dot-item"><span>...</span></li>`;
    for (let i = thirdPagesAnd; i <= totalPages; i++) {
      if (i === curentPage) {
        liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
      } else {
        liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
      }
    }
  } else {
    for (let i = 1; i < page; i++) {
      liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
    }
    for (let i = page; i <= totalPages; i++) {
      if (i === page) {
        liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
      } else {
        liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
      }
    }
  }
  ulTag.innerHTML = liTag;
}

/***бокові кнопки листання */
export function reloadButton(totalPage, page) {
  if (page === 1) {
    prewButton.setAttribute(
      'disabled',
      'true'
    ); /***!!!!ljдобавить не кликабельность */
  } else {
    prewButton.removeAttribute('disabled');
  }
  if (page === totalPage) {
    nextButton.setAttribute(
      'disabled',
      'true'
    ); /***!!!!ljдобавить не кликабельность */
  } else {
    nextButton.removeAttribute('disabled');
  }
}
/*** */
async function loadMor(event) {
  if (
    event.target.classList.contains('pagination-arrow') ||
    event.target.classList.contains('pagination-number')
  ) {
    page = Number(event.target.textContent);
    getPageArr(page);
  } else {
    return;
  }
}

async function prewList(event) {
  page -= 1;
  getPageArr(page);
}

export async function nextList(event) {
  page += 1;
  getPageArr(page);
}

prewButton.addEventListener('click', prewList);

nextButton.addEventListener('click', nextList);

ulTag.addEventListener('click', loadMor);
