import { getCocktailsCard } from './getcard';

export function getCoctailsList(data) {
  console.log(data)
  return data.map(getCocktailsCard).join('');
}
