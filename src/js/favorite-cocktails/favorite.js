'use strict';
// export default updateSize;
import BASE_URL from '../const';
import axios from 'axios';
import { attachEvents } from '../modallearnmore/modal-learn-more';
import {
  renderAddRemoveDrinkButton,
  attachFavouriteClickEvents,
} from '../favourites';


const refs = {
  favoritesList: document.querySelector('.fav-cocktails__list'),
};

//use function updateSize to render elements on click
export function initializeFavourites() {
  let windowWidth = window.innerWidth;
  console.log(JSON.parse(localStorage.getItem('favorite-cocktail')));
  if (localStorage.length === 0) {
    console.log('localStorage is empty');
    return;
  }
  if (windowWidth < 768) {
    // console.log('300px - 768px');
    favoritesMarkup(0, 3);
  } else if (windowWidth < 1280) {
    // console.log('768px - 1023px');
    favoritesMarkup(0, 6);
  } else {
    // console.log('1280px');
    favoritesMarkup(0, 9);
  }
}

//get objects from storage and renders elements
//markup adds "drinkId" attribute with element id for modal window fetch
//"start", "end" arguments for pagination
function favoritesMarkup(start, end) {
  const cocktailsArr = JSON.parse(localStorage.getItem('favorite-cocktail'));
  let arr = cocktailsArr.slice(start, end);

  refs.favoritesList.innerHTML = arr
    .map(
      e =>
        `<li class="fav-cocktails__item">
            <img src="${e.img}" class="fav-cocktails__img" alt=${
          e.name
        } cocktail>
            <h3 class="fav-cocktails__item-title">${e.name}</h3>
            <div class="fav-cocktails__buttons">
                <button type="button" class="learnMore" data-id="${
                  e.id
                }" data-modal-open>Learn more</button>
                ${renderAddRemoveDrinkButton(e.id, e.name, e.img)}
            </div>
        </li>`
    )
    .join('');

  attachFavouriteClickEvents();
  attachEvents();
}
