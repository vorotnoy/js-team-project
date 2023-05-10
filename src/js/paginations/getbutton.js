import { getValue, typeOfList} from '../cocktailspage/getcocktailspage';
import {reloadButton, pagination} from './pagination'
import { getCoctailsList } from '../cocktailspage/getcocktailslist';
import { refs } from '../global/refs';
const {cocktailsList, favoritesList } =refs


export function getPageArr(page) {
    array = getValue;
    typeOfList === 'cocktailsList'? cocktailsList.innerHTML= getCoctailsList(array[page - 1]) :
    favoritesList.innerHTML= getCoctailsList(array[page - 1])
    reloadButton(array.length, page);
    pagination(array.length, page);
  }