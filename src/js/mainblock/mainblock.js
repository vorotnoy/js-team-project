import {
  getRandomCocktail,
  renderCocktails,
} from './rendercocktails';
import { attachEvents } from '../modallearnmore/modal-learn-more';
import { attachFavouriteClickEvents } from '../favourites';
import {viewportWidthCheck} from '../global/viewportsize';
import { refs } from '../global/refs';
import { getCard } from './getcardstart';
const { title } = refs;


export function accumulateCocktails(setSize) {
  const cocktailsSet = [];
  for (let i = 0; i < setSize; i++) {
    cocktailsSet.push(getRandomCocktail());
  }
  return cocktailsSet;
}

export function pourCocktails(cocktailSetSize) {
  Promise.all(cocktailSetSize)
    .then(data => renderCocktails(data.map(getCard).join('')))
    .then(attachFavouriteClickEvents)
    .then(attachEvents);

  }

export function returnCocktails() {
  title.textContent = 'Cocktails';
  pourCocktails(accumulateCocktails(viewportWidthCheck()));
}
