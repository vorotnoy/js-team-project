import {location} from '../global/location';
import {initializeFavourites} from '../favorite-cocktails/favorite';
import {removeListener} from '../modalcocktails/closemodal'

export function getDrink(id) {
    for (let drink of getFavouriteDrinks()) {
      if (drink.idDrink == id) {
        return drink;
      }
    }
  }

export function getFavouriteDrinks() {
  return JSON.parse(localStorage.getItem('favorite-cocktail')) ?? [];
}

export function setFavouriteDrinks(favourites) {
  localStorage.setItem('favorite-cocktail', JSON.stringify(favourites));
}

export function addDrink(id, name, image) {
  if (!getDrink(id)) {
    let favouriteDrink = { idDrink: id, strDrink: name, strDrinkThumb: image };
    let favourites = getFavouriteDrinks();
    favourites.push(favouriteDrink);
    setFavouriteDrinks(favourites);
    
  }
}

export function removeDrink(id) {
  let favourites = getFavouriteDrinks();
  let updatedFavourites = [];

  for (let i = 0; i < favourites.length; i++) {
    let drink = favourites[i];
    if (drink.idDrink != id) {
      updatedFavourites.push(drink);
    }
  }
  setFavouriteDrinks(updatedFavourites);
  if (location ==='cocktails.html'){
    initializeFavourites()
    removeListener()
  }
}
