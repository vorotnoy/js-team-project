import { refs } from "./js/refs";
import { onClickDropdownOn } from './js/header/dropdown';
import {checkBtn} from './js/header/checkbox';
import { VIEWPORT_SIZES } from "./js/const";

import { returnCocktails, viewportWidthCheck, accumulateCocktails,  pourCocktails} from "./js/mainblock/mainblock";

import { favouritesClickEvent } from "./js/favourites";
import { getRandomCocktail } from "./js/mainblock/renderCocktails";

import { onSelectBtnClick, onAlphabetBtnClick } from   "./js/hero/onClickFunctions";
import { initializeFavourites } from "./js/favorite-cocktails/favorite"

const debounce = require('lodash.debounce');

if (window.location.pathname === "/") {
    returnCocktails();
    const { cocktailsList, selectBtn, alphabet } = refs;
    
    //cocktailsList.addEventListener('click', favouritesClickEvent);
    
    selectBtn.addEventListener('click', onSelectBtnClick);
    alphabet.addEventListener('click', onAlphabetBtnClick);
} else if (window.location.pathname === "/cocktails.html") {
    //function watch viewport size and load limited for current viewport amount of elements 
    window.addEventListener("resize", debounce(initializeFavourites, 300));

    initializeFavourites();
}

