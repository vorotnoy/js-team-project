import { refs } from '../global/refs';
import { searchCocktailsByFirstLetter } from '../search/searchbyfirstletter';

const { selectBtn, selectMenu, alphabet } = refs;

export function onSelectBtnClick() {
  selectMenu.classList.add('select__list-open');
  selectMenu.addEventListener('click', onSelectDropdownMenuClick);
}

function onSelectDropdownMenuClick(event) {
  selectBtn.firstElementChild.textContent = event.target.textContent;

  selectMenu.classList.remove('select__list-open');
  selectBtn.classList.add('active');
  selectBtn.lastElementChild.classList.add('active');

  searchCocktailsByFirstLetter(event.target.textContent);

  selectMenu.removeEventListener('click', onSelectDropdownMenuClick);
}

export function onAlphabetBtnClick(event) {
  searchCocktailsByFirstLetter(event.target.textContent);
}

if (selectBtn) {
  selectBtn.addEventListener('click', onSelectBtnClick);
  alphabet.addEventListener('click', onAlphabetBtnClick);
}
