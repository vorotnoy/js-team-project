import { PATH_LETTER } from '../global/const';
import {getDataFromSearch} from '../global/search'


export function searchCocktailsByFirstLetter(search) {
   getDataFromSearch(PATH_LETTER,search )
}
