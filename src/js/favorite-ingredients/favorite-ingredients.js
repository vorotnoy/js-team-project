import { attachIngredientEvents } from '../modalingredients/modal-learn-more-ingredient';
import { getFavouriteIngredients } from '../localstorage/localstorageforing';
import { viewportWidthCheck } from '../global/viewportsize';
import {
  renderAddRemoveIngredientButton,
} from './renderbutton';
import { refs } from '../global/refs';

const favIngredientsList = document.querySelector('.fav-ingr__list');
const favIngredientsTitle = document.querySelector('.fav-ingr__title');
const { favNoingr } = refs;

export function initializeFavouritesIng() {
  let windowWidth = viewportWidthCheck();
  const localStorage = getFavouriteIngredients();

  if (localStorage === null || localStorage.length === 0) {
    favIngredientsList.innerHTML = '';
    favNoingr.textContent = "You haven't added any favorite ingridients yet";
    favNoingr.classList.remove('is-hidden');
    return;
  }
  favNoingr.classList.add('is-hidden');
  favIngredientsMarkup(0, windowWidth);
}

function drinkCheck(ingr) {
  if (ingr === 'null') {
    return 'Not a drink';
  } else {
    return ingr;
  }
}

function favIngredientsMarkup(start, end) {
  const cocktailsArr = getFavouriteIngredients();
  let arr = cocktailsArr.slice(start, end);

  favIngredientsList.innerHTML = arr
    .map(
      e =>
        `<li id="favourite_${e.name
          .replace(' ', '')
          .toLowerCase()}" class="fav-ingr__item">
            <h3 class="fav-ingr__item-title">${e.name}</h3>
            <p class="fav-ingr__type">${drinkCheck(e.type)}</p>
            <div class="fav-ingr__buttons">
                <button class="ingredient-link learnMore" data-name="${
                  e.name
                }" data-type="${e.type}" data-modal-open-2>Learn more</button>
                ${renderAddRemoveIngredientButton(e.name, e.type)}
            </div>
        </li>`
    )
    .join('');
  // attachIngredientEvents();
  // attachFavouritesRemoveClickEvents();
}
