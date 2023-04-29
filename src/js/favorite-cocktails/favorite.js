'use strict';
// export default updateSize;
import { attachEvents } from '../modallearnmore/modal-learn-more';
import {
  renderAddRemoveDrinkButton,
  attachFavouritesRemoveClickEvents,
} from '../favourites';
import { refs } from '../global/refs';
import { viewportWidthCheck } from '../global/viewportsize';
import { pagination } from '../paginations/pagination';
import {createPage} from '../cocktailspage/getcocktailspage'
export let getValueC = [];

const {
  favoritesList,
  favoritesTitle,
  favoriteSearchItem,
  prewButton,
  nextButton,
  pagContainer,
  favNococktails,
} = refs;

export function initializeFavourites() {
  favoriteSearchItem.classList.add('is-hidden');

  const getDataFromlocalStorage = JSON.parse(
    localStorage.getItem('favorite-cocktail')
  );

  if (getDataFromlocalStorage === null ) {
    favoritesList.innerHTML = '';
    favNococktails.textContent = "You haven't added any favorite cocktails yet";
    prewButton.classList.add('is-hiden');
    nextButton.classList.add('is-hiden');
    return;
  }
  favNococktails.classList.add('is-hidden');
  let list = 'favoritesList'
  createPage(getDataFromlocalStorage, list)
  }