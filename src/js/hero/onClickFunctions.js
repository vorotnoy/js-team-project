import { refs } from '../refs';
import { searchCocktailsByFirstLetter } from './searchCocktailsByFirstLetter';

const { selectBtn, selectMenu } = refs;

export function onSelectBtnClick() {
  selectMenu.classList.add('select__list-open');
  selectMenu.addEventListener('click', onSelectDropdownMenuClick);
}

function onSelectDropdownMenuClick(event) {
  selectBtn.firstElementChild.textContent = event.target.textContent;

  searchCocktailsByFirstLetter(event.target.textContent);
}

export function onAlphabetBtnClick(event) {
  searchCocktailsByFirstLetter(event.target.textContent);
}
