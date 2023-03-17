import { refs } from './js/refs';
import { onClickDropdownOn } from './js/header/dropdown';
import { checkBtn } from './js/header/checkbox';
import { VIEWPORT_SIZES } from './js/const';
import {
  returnCocktails,
  viewportWidthCheck,
  accumulateCocktails,
  pourCocktails,
} from './js/mainblock/mainblock';
import { favouritesClickEvent } from './js/favourites';
import { getRandomCocktail } from './js/mainblock/renderCocktails';

import { toggleMenu } from './js/header/mobile-menu';

import {
  onSelectBtnClick,
  onAlphabetBtnClick,
} from './js/hero/onClickFunctions';
import { searchCocktail } from './js/header/searchbyname';

import { getCocktailId, updateSize } from './js/favorite-cocktails/favorite';

//import { favCocktailsEvents } from "./js/favorite-cocktails/favorite"
// const { cocktailsList, selectBtn, alphabet, inputForm } = refs;

import { searchCoctailByName } from './js/header/searchbyname';

import { initializeFavourites } from './js/favorite-cocktails/favorite';
import { initializeFavouritesIng } from './js//favorite-ingredients/favorite-ingredients';

const debounce = require('lodash.debounce');
const { cocktailsList, selectBtn, alphabet, openMenuBtn, closeMenuBtn } =
refs;
openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
const pathname = window.location.pathname;
const location = pathname.split('/').pop();


if (location === ''||location === '/index.html') {
  returnCocktails();
  //cocktailsList.addEventListener('click', favouritesClickEvent);

  selectBtn.addEventListener('click', onSelectBtnClick);
  alphabet.addEventListener('click', onAlphabetBtnClick);
} else if (location === 'cocktails.html') {
  //function watch viewport size and load limited for current viewport amount of elements
  window.addEventListener('resize', debounce(initializeFavourites, 300));
  initializeFavourites();

} else if (window.location.pathname === "/cocktails.html") {
    //function watch viewport size and load limited for current viewport amount of elements 
    window.addEventListener("resize", debounce(initializeFavourites, 300));

    initializeFavourites();

} else if (pathname === '/ingredients.html'){
  //watch viewport size and load limited for current viewport amount of elements 
  window.addEventListener("resize", debounce(initializeFavouritesIng, 300));
  
  initializeFavouritesIng();
}
