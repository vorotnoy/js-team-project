import { getRandomCocktail, renderCocktails } from './rendercocktails';
import { viewportWidthCheck } from '../global/viewportsize';
import { refs } from '../global/refs';
import { getCocktailsCard } from '../cocktailspage/getcard';

const { title } = refs;

export function accumulateCocktails(setSize) {
  const cocktailsSet = [];
  for (let i = 0; i < setSize; i++) {
    cocktailsSet.push(getRandomCocktail());
  }
  return cocktailsSet;
}

export function pourCocktails(cocktailSetSize) {
  Promise.all(cocktailSetSize).then(data => {
    renderCocktails(data.map(e => getCocktailsCard(e.data.drinks[0])).join(''));
  });
}

export function returnCocktails() {
  title.textContent = 'Cocktails';
  pourCocktails(accumulateCocktails(viewportWidthCheck()));
}
