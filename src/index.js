import { refs } from "./js/refs";
import { onClickDropdownOn } from './js/header/dropdown';
import {checkBtn} from './js/header/checkbox';
import { VIEWPORT_SIZES } from "./js/const";

import { returnCocktails, viewportWidthCheck, accumulateCocktails,  pourCocktails} from "./js/mainblock/mainblock";

import { favouritesClickEvent } from "./js/favourites";
import { getRandomCocktail } from "./js/mainblock/renderCocktails";

import { onSelectBtnClick, onAlphabetBtnClick } from "./js/hero/onClickFunctions";

import { toggleMenu } from "./js/hero/header/mobile-menu";

returnCocktails();
const { cocktailsList, selectBtn, alphabet, openMenuBtn, closeMenuBtn  } = refs;

//cocktailsList.addEventListener('click', favouritesClickEvent);

selectBtn.addEventListener('click', onSelectBtnClick);
alphabet.addEventListener('click', onAlphabetBtnClick);


openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
