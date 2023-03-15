import { refs } from "./js/refs";
import { onClickDropdownOn } from './js/header/dropdown';
import {checkBtn} from './js/header/checkbox';
import { VIEWPORT_SIZES } from "./js/const";

import { returnCocktails, viewportWidthCheck, accumulateCocktails,  pourCocktails} from "./js/mainblock/mainblock";

// import { toggleFavorites } from "./js/mainblock/toggleFavoriteCocktail";
// import { getRandomCocktail } from "./js/mainblock/renderCocktails";

// import { onSelectBtnClick, onAlphabetBtnClick } from   "./js/hero/onClickFunctions";


const { cocktailsList, selectBtn, alphabet } = refs;


returnCocktails();
// cocktailsList.addEventListener('click', toggleFavorites);

// pourCocktails(accumulateCocktails(viewportWidthCheck(VIEWPORT_SIZES)));


// selectBtn.addEventListener('click', onSelectBtnClick);
// alphabet.addEventListener('click', onAlphabetBtnClick);

