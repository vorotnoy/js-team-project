import {
  getRandomCocktail,
  renderCocktails,
  getCocktailMarkup,
} from './rendercocktails';
import { attachEvents } from '../modallearnmore/modal-learn-more';
import { VIEWPORT_SIZES } from '../const';
import { attachFavouriteClickEvents } from '../favourites';
import { refs } from '../refs';

const { title } = refs;
export function viewportWidthCheck({ tablet, desktop }) {
  const currentVpWidth = document.body.clientWidth;

  // export function viewportWidthCheck({ tablet, desktop }) {
  //     const currentVpWidth = window.innerWidth;

  //function pourCocktails(cocktailSetSize) {
  //     Promise.all(cocktailSetSize).then(data => renderCocktails(data.map(getCocktailMarkup).join(""))).then(attachEvents);
  // };

  if (currentVpWidth < tablet) return 3;
  if (currentVpWidth >= tablet && currentVpWidth < desktop) return 6;
  if (currentVpWidth >= desktop) return 9;
}

export function accumulateCocktails(setSize) {
  const cocktailsSet = [];
  for (let i = 0; i < setSize; i++) {
    cocktailsSet.push(getRandomCocktail());
  }
  return cocktailsSet;
}

export function pourCocktails(cocktailSetSize) {
  Promise.all(cocktailSetSize)
    .then(data => renderCocktails(data.map(getCocktailMarkup).join('')))
    .then(attachFavouriteClickEvents)
    .then(attachEvents);

  }

export function returnCocktails() {
  title.textContent = 'Cocktails';
  pourCocktails(accumulateCocktails(viewportWidthCheck(VIEWPORT_SIZES)));
}
