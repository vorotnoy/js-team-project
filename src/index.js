import { authorize } from './js/firebase';
import { refs } from './js/global/refs';
import { authorize } from './js/firebase';
import { onClickDropdownOn } from './js/header/dropdown';
import { checkBtn } from './js/header/checkbox';
import { defineClick } from './js/cocktailspage/getaction';
import { location } from './js/global/location';

import {
  returnCocktails,
  viewportWidthCheck,
  accumulateCocktails,
  pourCocktails,
} from './js/mainblock/mainblock';
import { favouritesClickEvent } from './js/modalcocktails/changebutton';
import { getRandomCocktail } from './js/mainblock/rendercocktails';
import { toggleMenu } from './js/header/mobile-menu';

import {
  onSelectBtnClick,
  onAlphabetBtnClick,

} from './js/hero/onclickfunctions';

import { getCocktailId, updateSize } from './js/favorite-cocktails/favorite';

import { getInputData } from './js/search/searchbyname';

import { initializeFavourites } from './js/favorite-cocktails/favorite';
import { initializeFavouritesIng } from './js/favorite-ingredients/favorite-ingredients';

const debounce = require('lodash.debounce');

const {
  authorization,
  cocktailsList,
  selectBtn,
  alphabet,
  openMenuBtn,
  closeMenuBtn,
  toTopButton,
  openModalBtn,
} = refs;
authorization.addEventListener('click', authorize);
document.body.addEventListener('click', defineClick);

import { closeModalOnBody } from './js/modalcocktails/closemodal';

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

if (location === '' || location === 'index.html') {
  returnCocktails();
  //cocktailsList.addEventListener('click', favouritesClickEvent);

  selectBtn.addEventListener('click', onSelectBtnClick);
  alphabet.addEventListener('click', onAlphabetBtnClick);
} else if (location === 'cocktails.html') {
  //function watch viewport size and load limited for current viewport amount of elements
  window.addEventListener('resize', debounce(initializeFavourites, 300));
  initializeFavourites();
} else if (location === 'ingredients.html') {
  //watch viewport size and load limited for current viewport amount of elements
  window.addEventListener('resize', debounce(initializeFavouritesIng, 300));

  initializeFavouritesIng();
}

//scroll
document.addEventListener('scroll', function () {
  toTopButton.classList.remove('is-hidden');

  if (!window.pageYOffset) {
    toTopButton.classList.add('is-hidden');
  }
});

toTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
