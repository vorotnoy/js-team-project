import { refs } from '../refs';
import {
  renderAddRemoveDrinkButton,
  attachFavouriteClickEvents,
} from '../favourites';
import { attachEvents } from '../modallearnmore/modal-learn-more';

const { favoritesList, favoritesTitle, favoriteSearchItem, paginationBlock } =
  refs;

export function searchInFavCocktails(name) {
      attachFavouriteClickEvents();
    attachEvents();
  try {
    const response = JSON.parse(localStorage.getItem('favorite-cocktail'));
    for (let item of response) {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        favoritesList.classList.add('is-hidden');
        favoriteSearchItem.classList.remove('is-hidden');
        favoritesTitle.textContent = 'Searching results';
        paginationBlock.classList.add('is-hidden');
        favoriteSearchItem.innerHTML = `<a class="cocktail-link" href="#" data-modal-open>
                    <img src="${item.img}" class="fav-cocktails__img" alt=${
          item.name
        } cocktail" data-id="${item.id}">
                  </a>
                  <h3 class="fav-cocktails__item-title">${item.name}</h3>
                  <div class="fav-cocktails__buttons">
                      <button type="button" class="learnMore" data-id="${
                        item.id
                      }" data-modal-open>Learn more</button>
                      ${renderAddRemoveDrinkButton(
                        item.id,
                        item.name,
                        item.img
                      )}
                  </div>`;

        return;
      } else {
        favoritesTitle.textContent = `${name} - is not in your favorites cocktails`;
      }
    }

  } catch (error) {
    console.log(error);
  }
}
