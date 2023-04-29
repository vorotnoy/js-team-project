import { PATH_LETTER } from '../global/const';
import {getDataFromSearch, renderPage} from './search'


export function searchCocktailsByFirstLetter(search) {
   renderPage(getDataFromSearch(PATH_LETTER,search))
}
