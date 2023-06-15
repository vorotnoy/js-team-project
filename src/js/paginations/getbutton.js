import { getValue, typeOfList } from '../cocktailspage/getcocktailspage';
import { reloadButton, pagination } from './pagination';
import { getCoctailsList } from '../cocktailspage/getcocktailslist';
import { refs } from '../global/refs';
const { cocktailsList, favoritesList, favIngredientsList } = refs;

export function getPageArr(page) {
  array = getValue;

  switch (typeOfList) {
    case 'cocktailsList':
      cocktailsList.innerHTML = getCoctailsList(array[page - 1]);
      break;
    case 'favoritesList':
      favoritesList.innerHTML = getCoctailsList(array[page - 1]);
      break;
    case 'favIngredientsList':
      favIngredientsList.innerHTML = getCoctailsList(array[page - 1]);
      break;
    default:
      cocktailsList.innerHTML = getCoctailsList(getValue[0]);
  }
  reloadButton(array.length, page);
  pagination(array.length, page);
}
