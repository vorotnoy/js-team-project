import { attachIngredientEvents } from '../modalingredients/modal-learn-more-ingredient';
import { getFavouriteIngredients } from '../localstorage/localstorageforing';
import { viewportWidthCheck } from '../global/viewportsize';
import { createPage } from '../cocktailspage/getcocktailspage';
import { refs } from '../global/refs';
import { getFavouriteIngredientsCard } from './getcard';

const favIngredientsList = document.querySelector('.fav-ingr__list');
const favIngredientsTitle = document.querySelector('.fav-ingr__title');
const { favNoingr } = refs;

export function initializeFavouritesIng() {
  let windowWidth = viewportWidthCheck();
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
  // favIngredientsMarkup(0, windowWidth);
}



// function favIngredientsMarkup(start, end) {
//   const cocktailsArr = getFavouriteIngredients();
//   let arr = cocktailsArr.slice(start, end);

//   favIngredientsList.innerHTML = arr
//     .map(
//       e =>getFavouriteIngredientsCard(e)       
//     )
//     .join('');
//   // attachIngredientEvents();
//   // attachFavouritesRemoveClickEvents();
// }
