import { PATH_LETTER } from '../global/const';
import {getDataFromSearch} from './search'


export function searchCocktailsByFirstLetter(search) {
   getDataFromSearch(PATH_LETTER,search )
}
