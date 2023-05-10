import { getDrink } from './localstorage';
import {
  addIngredient,
  removeIngredient,
} from '../modalingredients/localstorage';
import { addDrink, removeDrink } from './localstorage';
import { defuneButton } from '../cocktailspage/getaddremovebutton';
import { renderAddRemoveIngredientButton } from '../modalingredients/renderbutton';


export function refreshFavouriteButtons(id) {
  let favouriteButton = document.querySelector(`.favourite[data-id="${id}"]`);
  let favourite = getDrink(id);
  if (
    (favourite && favouriteButton.classList.contains('addTo')) ||
    (!favourite && favouriteButton.classList.contains('removeFrom'))
  ) {
    let e = { target: favouriteButton };
    favouritesClickEvent(e);
  }
}

export function favouritesClickEvent(event) {
  let button = event.target;
  console.log('button',button)
  if (!button || !button.className || typeof(button.className) !== 'string')
    return;
  // if (button.dataset.type) {
  //   console.log('type', button.dataset.type)
  //   if (button.className && button.className.indexOf('addTo') > 0) {
  //     addIngredient(button.dataset.name, button.dataset.type);
  //   } else {
  //     removeIngredient(button.dataset.name, button.dataset.type);
  //   }
  //   button.insertAdjacentHTML(
  //     'beforebegin',
  //     renderAddRemoveIngredientButton(button.dataset.name, button.dataset.type)
  //   );
  // } else {
    if (button.className && button.className.indexOf('addTo') > 0) {
      addDrink(button.dataset.id, button.dataset.name, button.dataset.image);
    } else {
      removeDrink(button.dataset.id);
    }
    button.insertAdjacentHTML(
      'beforebegin',
      defuneButton(button.dataset.id, button.dataset.name, button.dataset.image)
    );
  // }

  button.remove();
  attachFavouriteClickEvents();
}

export function attachFavouriteClickEvents() {
  let buttons = document.querySelectorAll('.favourite');
  for (let button of buttons) {
    button.onclick = favouritesClickEvent;
  }
}

export function attachFavouritesRemoveClickEvents(event) {

  let button = event;
  console.log('attach', button)
  // if (!button || !button.className || typeof button.className != 'string')
  //   return;

  // if (button.dataset.type) {
  //   removeIngredient(button.dataset.name, button.dataset.type);
  // } else {
  //   removeDrink(button.dataset.id);
  // }

  // let location = window.location.pathname.split('/').pop();

  // if (location === 'cocktails.html') {
  //   initializeFavourites();
  // } else if (location === 'ingredients.html') {
  //   initializeFavouritesIng();
  // }
}
