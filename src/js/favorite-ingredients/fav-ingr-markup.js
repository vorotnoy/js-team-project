import {
    renderAddRemoveIngredientButton,
    attachFavouritesRemoveClickEvents,
} from '../favourites';
import {
    attachIngredientEvents,
} from '../modallearnmore/modal-learn-more-ingredient';

const favIngredientsList = document.querySelector('.fav-ingr__list');
// const favIngredientsTitle = document.querySelector('.fav-ingr__title');

function drinkCheck(ingr) {
    return ingr === 'null' ? 'Not a drink' : ingr;
}

export function favIngrMarkup (arr){
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
  attachIngredientEvents();
  attachFavouritesRemoveClickEvents();
}