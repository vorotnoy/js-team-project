import { cocktailsMarkup } from '../cocktailsmarkup';
import { cocktailsMarkupByCounter } from '../cocktailsmarkupbycounter';

export function createCocktailsMarkupByViewportSize(setSize, data) {

  if (data.length < setSize) {
    return cocktailsMarkup(data);
  }

  return cocktailsMarkupByCounter(setSize, data);
}



