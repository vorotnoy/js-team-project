import {attachEvents} from "../modallearnmore/modal-learn-more";
import {renderAddRemoveDrinkButton, attachFavouriteClickEvents} from '../favourites';
import {initializeFavourites} from '../favorite-cocktails/favorite';

// const pathname = window.location.pathname;
const refs = {
    favIngredientsList: document.querySelector('.fav-ingr__list'),
    favIngredientsTitle: document.querySelector('.fav-ingr__title') 
}
const favIngredientsList = document.querySelector('.fav-ingr__list');
const favIngredientsTitle = document.querySelector('.fav-ingr__title');

// window.addEventListener("resize", debounce(initializeFavouritesIng, 300));
export function initializeFavouritesIng() {
    let windowWidth = window.innerWidth;
    const localStorageLength = JSON.parse(localStorage.getItem('favorite-cocktail')).length;
    
    console.log(JSON.parse(localStorage.getItem('favorite-cocktail')));
    if (localStorageLength === 0) {
    favIngredientsTitle.textContent = 'You didn\'t choose any cocktail.'
      return;
    }
    if (windowWidth < 768) {
        favIngredientsMarkup(0, 3);
            console.log('ingr')
      // console.log('300px - 768px');
    } else if (windowWidth < 1280) {
        favIngredientsMarkup(0, 6);
            console.log('ingr')
      // console.log('768px - 1023px');
    } else {
        favIngredientsMarkup(0, 9);
            console.log('ingr')
      // console.log('1280px');
    }
  }

function favIngredientsMarkup(start, end){
    const cocktailsArr = JSON.parse(localStorage.getItem('favorite-cocktail'));
    let arr = cocktailsArr.slice(start, end);
    // console.log(cocktailsArr)
    favIngredientsList.innerHTML = arr.map(e => 
        `<li class="fav-ingr__item">
            <h3 class="fav-ingr__item-title">${e.name}</h3>
            <div class="fav-ingr__buttons">
                <button type="button" class="learnMore" data-name="${e.name} data-id=${e.id}" data-modal-open>Learn more</button>
                ${renderAddRemoveDrinkButton(e.id, e.name, e.img)}
            </div>
        </li>`
    ).join('');

    attachFavouriteClickEvents();
    attachEvents();
}
