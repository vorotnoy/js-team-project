import { getCoctailsList } from './getcocktailslist';
import { refs } from '../global/refs';
import { pagination } from '../paginations/pagination';
import { viewportWidthCheck } from '../global/viewportsize';

const {
  prewButton,
  nextButton,
  pagContainer,
  cocktailsList,
  cocktailsTitle,
  noCocktails,
  favoritesList,
} = refs;

export function totalPage(lengthOfArr) {
  return Math.ceil(lengthOfArr / viewportWidthCheck());
}

export let getValue = [];

export function createPage(getData, list) {
  let tempArray = [];
  if (list === 'cocktailsList') {
    noCocktails.classList.add('is-hidden');
    cocktailsTitle.textContent = 'Searching results';
    cocktailsTitle.classList.remove('is-hidden');
    tempArray = getData.data.drinks;
  }
  else if (list === 'favoritesList') {
    tempArray = getData;
  }

  getValue = [];

  let lengthArr = tempArray.length;

  for (let i = 0; i < lengthArr; i += viewportWidthCheck()) {
    let myChunk = tempArray.slice(i, i + viewportWidthCheck());
    getValue.push(myChunk);
  }
  if (totalPage(lengthArr) > 1) {
    prewButton.classList.remove('is-hiden');
    nextButton.classList.remove('is-hiden');
    nextButton.removeAttribute('disabled');
    pagContainer.classList.add('pading');
    pagination(totalPage(lengthArr), 1);
  } else {
    pagContainer.classList.add('pading');
    prewButton.classList.add('is-hiden');
    nextButton.classList.add('is-hiden');
    pagination(0, 1);
  }

  if (list === 'cocktailsList'){
    cocktailsList.innerHTML= getCoctailsList(getValue[0]);}
    else{
      favoritesList.innerHTML= getCoctailsList(getValue[0]);
    }
}
