import { getDrink } from '../localstorage/localstorageforcocktail';
import { defuneButton } from '../cocktailspage/getaddremovebutton';
import { location } from '../global/location';

export function refreshFavouriteButtons(id) {
  if (location === 'cocktails.html') return;
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
  if (!button || !button.className || typeof button.className !== 'string')
    return;
  button.insertAdjacentHTML(
    'beforebegin',
    defuneButton(button.dataset.id, button.dataset.name, button.dataset.image)
  );

  button.remove();
  attachFavouriteClickEvents();
}

export function attachFavouriteClickEvents() {
  let buttons = document.querySelectorAll('.favourite');
  for (let button of buttons) {
    button.onclick = favouritesClickEvent;
  }
}
