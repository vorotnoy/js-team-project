'use strict';
// export default updateSize;
import { attachEvents } from '../modallearnmore/modal-learn-more';
import { refs } from '../refs';
import { VIEWPORT_SIZES } from '../const';
import { viewportWidthCheck } from '../mainblock/mainblock';
import { pagination } from '../pagination';
import { favCocktailsMarkup } from './fav-cocktails-markup'
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

//use function updateSize to render elements on click
export function initializeFavourites() {
  favoriteSearchItem.classList.add('is-hidden');

  let windowWidth = window.innerWidth;
  const localStorageLength = JSON.parse(
    localStorage.getItem('favorite-cocktail')
  );
  
  getValueC.length = 0;

  if (localStorageLength === null || !localStorageLength.length) {
    favoritesList.innerHTML = '';
    favNococktails.textContent = "You haven't added any favorite cocktails yet";

    favNococktails.classList.remove('is-hidden');
    prewButton.classList.add('is-hiden');
    nextButton.classList.add('is-hiden');

    pagination(0, 1);

    return;
  }
  
  favNococktails.classList.add('is-hidden');
  let totalPage = Math.ceil(
    localStorageLength.length / viewportWidthCheck(VIEWPORT_SIZES)
  );

  for (
    let i = 0;
    i < localStorageLength.length;
    i += viewportWidthCheck(VIEWPORT_SIZES)
  ) {
    let myChunk = localStorageLength.slice(
      i,
      i + viewportWidthCheck(VIEWPORT_SIZES)
    );
    getValueC.push(myChunk);
  }

  if (windowWidth < 768) {
    favoritesMarkup(0, 3);
  } else if (windowWidth < 1280) {
    favoritesMarkup(0, 6);
  } else {
    favoritesMarkup(0, 9);
  }
  
  if (totalPage > 1) {
    prewButton.classList.remove('is-hiden');
    nextButton.classList.remove('is-hiden');
    nextButton.removeAttribute('disabled');
    pagContainer.classList.add('pading');
    
    pagination(totalPage, 1);
  } else {
    pagContainer.classList.add('pading');
    prewButton.classList.add('is-hiden');
    nextButton.classList.add('is-hiden');
    
    pagination(0, 1);
  }
}

//get objects from storage and renders elements
//markup adds "drinkId" attribute with element id for modal window fetch
//"start", "end" arguments for pagination
function favoritesMarkup(start, end) {
  const cocktailsArr = JSON.parse(localStorage.getItem('favorite-cocktail'));
  let partCocktailArr = cocktailsArr.slice(start, end);
  
  favCocktailsMarkup(partCocktailArr);
}