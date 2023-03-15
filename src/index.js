
import { returnCocktails } from "./js/mainblock/mainblock";
import { refs } from "./js/refs";
import { toggleFavorites } from "./js/mainblock/toggleFavoriteCocktail";
import { getRandomCocktail } from "./js/mainblock/renderCocktails";
import { onSelectBtnClick } from   "./js/hero/onClickFunctions";
import { onAlphabetBtnClick } from "./js/hero/onClickFunctions";
import { refs } from "./js/refs";
import { pourCocktails } from "./js/mainblock/mainblock";
import { viewportWidthCheck } from "./js/mainblock/mainblock";
import { accumulateCocktails } from "./js/mainblock/mainblock";
import { VIEWPORT_SIZES } from "./js/const";
import {checkBtn} from './js/header/checkbox'
import {onClickDropdownOn} from './js/header/dropdown'


returnCocktails();
refs.cocktailsList.addEventListener('click', toggleFavorites);

pourCocktails(accumulateCocktails(viewportWidthCheck(VIEWPORT_SIZES)));

const { selectBtn, alphabet } = refs;
selectBtn.addEventListener('click', onSelectBtnClick);
alphabet.addEventListener('click', onAlphabetBtnClick);

