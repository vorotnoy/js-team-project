import { PATH_SEARCH } from '../global/const';
import { refs } from '../global/refs';
import { searchInFavCocktails } from './searchbyfavcocktails';
import { getDataFromSearch, renderPage } from '../search/search';
import { location } from '../global/location';

const {
  btnSearchForm,
  btnSearchFormBurger,
  mobileMenu,
  inputFormBurger,
  cocktailsList,
  cocktailsTitle,
  noCocktails,
  inputForm,
} = refs;

inputForm.addEventListener('submit', getInputData);
inputFormBurger.addEventListener('submit', getInputData);

export function getInputData(evt) {
  evt.preventDefault();
  const inputData = evt.currentTarget.elements.searchQuery.value.trim();

  if (evt.currentTarget === inputFormBurger) {
    mobileMenu.classList.toggle('is-open');
  }
  /**перевірка на пустий інпут */
  if (!inputData) {
    cocktailsList.innerHTML = '';

    cocktailsTitle.textContent = `You need to enter the name of the cocktail`;
    noCocktails.classList.remove('is-hidden');
    return;
  }
  /**перевірка на сторінку вводу */
  if (location === 'cocktails.html') {
    searchInFavCocktails(inputData);
    return;
  }

  window.location.href = '#results';

  searchByName(inputData);

  inputForm.reset();
  inputFormBurger.reset();
}

function searchByName(name) {
  renderPage(getDataFromSearch(PATH_SEARCH, name));
}

btnSearchFormBurger.addEventListener(
  'click',
  () => (window.location.href = '#results')
);
btnSearchForm.addEventListener(
  'click',
  () => (window.location.href = '#results')
);
