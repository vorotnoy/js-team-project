import { getFavouriteDrinks } from '../localstorage/localstorageforcocktail';
import { refs } from '../global/refs';
import { createPage } from '../cocktailspage/getcocktailspage';

const {
  favoritesList,
  favoriteSearchItem,
  prewButton,
  nextButton,
  favNococktails,
} = refs;

export function initializeFavourites() {
  favoriteSearchItem.classList.add('is-hidden');

  const getDataFromlocalStorage = getFavouriteDrinks();

  if (getDataFromlocalStorage === null ||getDataFromlocalStorage.length === 0) {
    favoritesList.innerHTML = '';
    favNococktails.textContent = "You haven't added any favorite cocktails yet";
    prewButton.classList.add('is-hiden');
    nextButton.classList.add('is-hiden');
    return;
  }
  favNococktails.classList.add('is-hidden');
  let list = 'favoritesList';

  createPage(getDataFromlocalStorage, list);
}
