import {attachIngredientEvents} from "../modallearnmore/modal-learn-more-ingredient";
import { getFavouriteIngredients, renderAddRemoveIngredientButton } from '../favourites';
import {initializeFavourites} from '../favorite-cocktails/favorite';

// const pathname = window.location.pathname;
const refs = {
    favIngredientsList: document.querySelector('.fav-ingr__list'),
    favIngredientsTitle: document.querySelector('.fav-ingr__title') 
}
const favIngredientsList = document.querySelector('.fav-ingr__list');
const favIngredientsTitle = document.querySelector('.fav-ingr__title');

export function initializeFavouritesIng() {
    let windowWidth = window.innerWidth;
    const localStorageLength = getFavouriteIngredients().length;
    
    if (localStorageLength === 0) {
        favIngredientsTitle.textContent = 'You didn\'t choose any ingredients.'
        return;
    }
    if (windowWidth < 768) {
        favIngredientsMarkup(0, 3);
    } else if (windowWidth < 1280) {
        favIngredientsMarkup(0, 6);
    } else {
        favIngredientsMarkup(0, 9);
    }
  }

function favIngredientsMarkup(start, end){
    const cocktailsArr = getFavouriteIngredients();
    let arr = cocktailsArr.slice(start, end);
    
    favIngredientsList.innerHTML = arr.map(e => 
        `<li class="fav-ingr__item">
            <img src="https://www.thecocktaildb.com/images/ingredients/${e.name}-Small.png" height="100" width="100" alt="${e.name}" />
            <h3 class="fav-ingr__item-title">${e.name}</h3>
            <div class="fav-ingr__buttons">
                <button class="ingredient-link" data-name="${e.name}" data-type="${e.type}" data-modal-open-2>Learn more</button>
                ${renderAddRemoveIngredientButton(e.name, e.type)}
            </div>
        </li>`
    ).join('');
    attachIngredientEvents();
}
