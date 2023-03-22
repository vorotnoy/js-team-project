import { getCocktailsCard } from './getcard';

export function getCoctailsList(data) {
  return data.map(getCocktailsCard).join('');
}
