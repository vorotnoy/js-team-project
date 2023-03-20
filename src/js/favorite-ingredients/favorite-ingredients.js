import {
  getFavouriteIngredients,
} from '../modallearnmore/modal-learn-more-ingredient';
import {
  getFavouriteIngredients,
} from '../favourites';
import { refs } from '../refs';
import { favIngrMarkup } from './fav-ingr-markup';

const favIngredientsList = document.querySelector('.fav-ingr__list');
const favIngredientsTitle = document.querySelector('.fav-ingr__title');
const { favNoingr } = refs;

export function initializeFavouritesIng() {
  let windowWidth = window.innerWidth;
  const localStorage = getFavouriteIngredients();

  if (localStorage === null || !localStorage.length) {
    
    favIngredientsList.innerHTML = '';
    favNoingr.textContent = "You haven't added any favorite ingridients yet";
    
    favNoingr.classList.remove('is-hidden');
    
    return;
  }

  favNoingr.classList.add('is-hidden');
  
  if (windowWidth < 768) {
    favIngredientsMarkup(0, 3);
  } else if (windowWidth < 1280) {
    favIngredientsMarkup(0, 6);
  } else {
    favIngredientsMarkup(0, 9);
  }
}

function favIngredientsMarkup(start, end) {
  const cocktailsArr = getFavouriteIngredients();
  let partCocktailArr = cocktailsArr.slice(start, end);

  favIngrMarkup(partCocktailArr);
}