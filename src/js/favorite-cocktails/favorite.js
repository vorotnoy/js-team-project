'use strict';
// export default updateSize;
import { attachEvents } from '../modallearnmore/modal-learn-more';
import {
  renderAddRemoveDrinkButton,
  attachFavouritesRemoveClickEvents,
} from '../favourites';
import { refs } from '../global/refs';
import { viewportWidthCheck } from '../global/viewportsize';
import { pagination } from '../paginations/pagination';
export let getValueC = [];

const {
  favoritesList,
  favoritesTitle,
  favoriteSearchItem,
  prewButton,
  nextButton,
  pagContainer,
  favNococktails,
} = refs;

//use function updateSize to render elements on click
export function initializeFavourites() {
  favoriteSearchItem.classList.add('is-hidden');
  let windowWidth = window.innerWidth;
  const localStorageLength = JSON.parse(
    localStorage.getItem('favorite-cocktail')
  );
  getValueC.length = 0;

  if (localStorageLength === null || localStorageLength.length === 0) {
    favoritesList.innerHTML = '';
    favNococktails.textContent = "You haven't added any favorite cocktails yet";
    favNococktails.classList.remove('is-hidden');
    prewButton.classList.add('is-hiden');
    nextButton.classList.add('is-hiden');
    pagination(0, 1);
    return;
  }
  favNococktails.classList.add('is-hidden');
  let totalPage = Math.ceil(
    localStorageLength.length / viewportWidthCheck(VIEWPORT_SIZES)
  );

  for (
    let i = 0;
    i < localStorageLength.length;
    i += viewportWidthCheck(VIEWPORT_SIZES)
  ) {
    let myChunk = localStorageLength.slice(
      i,
      i + viewportWidthCheck(VIEWPORT_SIZES)
    );
    getValueC.push(myChunk);
  }

  if (windowWidth < 768) {
    favoritesMarkup(0, 3);
  } else if (windowWidth < 1280) {
    favoritesMarkup(0, 6);
  } else {
    favoritesMarkup(0, 9);
  }
  if (totalPage > 1) {
    prewButton.classList.remove('is-hiden');
    nextButton.classList.remove('is-hiden');
    nextButton.removeAttribute('disabled');
    pagContainer.classList.add('pading');
    pagination(totalPage, 1);
  } else {
    pagContainer.classList.add('pading');
    prewButton.classList.add('is-hiden');
    nextButton.classList.add('is-hiden');
    pagination(0, 1);
  }
}

//get objects from storage and renders elements
//markup adds "drinkId" attribute with element id for modal window fetch
//"start", "end" arguments for pagination
function favoritesMarkup(start, end) {
  const cocktailsArr = JSON.parse(localStorage.getItem('favorite-cocktail'));
  let arr = cocktailsArr.slice(start, end);

  favoritesList.innerHTML = arr
    .map(
      e =>
        `<li class="fav-cocktails__item">
            <a class="cocktail-link" href="#" data-modal-open>
              <img src="${e.img}" class="fav-cocktails__img" alt=${
          e.name
        } cocktail" data-id="${e.id}">
            </a>
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
}
