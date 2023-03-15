import { pourCocktails } from "./js/mainblock/mainblock";
import { viewportWidthCheck } from "./js/mainblock/mainblock";
import { accumulateCocktails } from "./js/mainblock/mainblock";
import { VIEWPORT_SIZES } from "./js/const";

pourCocktails(accumulateCocktails(viewportWidthCheck(VIEWPORT_SIZES)));

import {checkBtn} from './js/header/checkbox'
import {onClickDropdownOn} from './js/header/dropdown'