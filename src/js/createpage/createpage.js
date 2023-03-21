
import { refs } from '../global/refs'
import { pagination } from '../paginations/pagination';
import {createListOfCocktails} from "./createcard"

const {
    prewButton,
    nextButton,
    pagContainer,
    cocktailsList
  } = refs;

export function totalPage(lengthOfArr) {
   return Math.ceil(lengthOfArr / viewportWidthCheck());
}

export let getValue = [];

export function createPage(getData){
    getValue = []
    let lengthArr = getData.data.drinks.length
for (
    let i = 0;
    i < lengthArr;
    i += viewportWidthCheck()
  ) {
    let myChunk = getData.data.drinks.slice(
      i,
      i + viewportWidthCheck()
    );
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
}