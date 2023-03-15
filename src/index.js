import { getRandomCocktail } from "./js/mainblock/renderCocktails";
import { onSelectBtnClick } from   "./js/hero/onClickFunctions";
import { onAlphabetBtnClick } from "./js/hero/onClickFunctions";
import { refs } from "./js/refs";

const { selectBtn, alphabet } = refs;

selectBtn.addEventListener('click', onSelectBtnClick);
alphabet.addEventListener('click', onAlphabetBtnClick);

getRandomCocktail();
getRandomCocktail();
getRandomCocktail();