import { getFavouriteIngredients } from '../localstorage/localstorageforing';
import { createPage } from '../cocktailspage/getcocktailspage';
import { refs } from '../global/refs';

const favIngredientsList = document.querySelector('.fav-ingr__list');
const { favNoingr } = refs;

export function initializeFavouritesIng() {
  const data = getFavouriteIngredients();

  if (data === null || data.length === 0) {
    favIngredientsList.innerHTML = '';
    favNoingr.textContent = "You haven't added any favorite ingridients yet";
    favNoingr.classList.remove('is-hidden');
    return;
  }
  favNoingr.classList.add('is-hidden');
  let list = 'favIngredientsList'
  createPage(data, list)
}
