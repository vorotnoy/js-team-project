import { refs } from '../refs';
import {
    renderAddRemoveDrinkButton,
    attachFavouritesRemoveClickEvents,
  } from '../favourites';


export function favCocktailsMarkup(arr){
    refs.favoritesList.innerHTML = arr
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

    //attachFavouritesRemoveClickEvents();
    //attachEvents();
}