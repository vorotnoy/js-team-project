import { refs } from "./js/refs";
import { onClickDropdownOn } from './js/header/dropdown';
import {checkBtn} from './js/header/checkbox';
import { VIEWPORT_SIZES } from "./js/const";
import { returnCocktails, viewportWidthCheck, accumulateCocktails,  pourCocktails} from "./js/mainblock/mainblock";
import { favouritesClickEvent } from "./js/favourites";
import { getRandomCocktail } from "./js/mainblock/renderCocktails";
import { onSelectBtnClick, onAlphabetBtnClick } from   "./js/hero/onClickFunctions";
import {searchCocktail} from './js/header/searchbyname'

//import { favCocktailsEvents } from "./js/favorite-cocktails/favorite"
// const { cocktailsList, selectBtn, alphabet, inputForm } = refs;
//cocktailsList.addEventListener('click', favouritesClickEvent);
// selectBtn.addEventListener('click', onSelectBtnClick);
// alphabet.addEventListener('click', onAlphabetBtnClick);

import{searchCoctailByName} from './js/header/searchbyname'

returnCocktails();