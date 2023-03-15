
import { getRandomCocktail } from "./js/mainblock/renderCocktails";
import { onSelectBtnClick } from   "./js/hero/onClickFunctions";
import { onAlphabetBtnClick } from "./js/hero/onClickFunctions";
import { refs } from "./js/refs";
import { pourCocktails } from "./js/mainblock/mainblock";
import { viewportWidthCheck } from "./js/mainblock/mainblock";
import { accumulateCocktails } from "./js/mainblock/mainblock";
import { VIEWPORT_SIZES } from "./js/const";

const { selectBtn, alphabet } = refs;

selectBtn.addEventListener('click', onSelectBtnClick);
alphabet.addEventListener('click', onAlphabetBtnClick);

pourCocktails(accumulateCocktails(viewportWidthCheck(VIEWPORT_SIZES)));