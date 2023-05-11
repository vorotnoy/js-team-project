import { getCocktailsCard } from './getcard';
import { location } from '../global/location';
import { getFavouriteIngredientsCard } from '../favorite-ingredients/getcard';

export function getCoctailsList(data) {
  if (location ==='ingredients.html'){
    return data.map(getFavouriteIngredientsCard).join('')
  }
  return data.map(getCocktailsCard).join('');
}
