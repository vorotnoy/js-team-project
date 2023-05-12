import { refs } from '../global/refs';
import { getFavouriteDrinks } from '../localstorage/localstorageforcocktail';
import { createPage } from '../cocktailspage/getcocktailspage';
const { favoritesTitle } = refs;

export function searchInFavCocktails(name) {
  try {
    const response = getFavouriteDrinks();
    let data = [];
    for (let item of response) {
      if (item.strDrink.toLowerCase().includes(name.toLowerCase())) {
        data.push(item);
      }
    }
    if (data.length > 0) {
      let list = 'favoritesList';
      createPage(data, list);
      return;
    }
    favoritesTitle.textContent = `${name} - is not in your favorites cocktails`;
  } catch (error) {
    console.log(error);
  }
}
