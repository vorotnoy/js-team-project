import axios from 'axios';
import { BASE_URL } from '../global/const';
import { refs } from '../global/refs';
import { createCocktailsMarkupByViewportSize } from '../hero/createcocktailsmarkupbyviewportsize';

import { searchInFavCocktails } from './searchbyfavcocktails';
import {viewportWidthCheck,  createPage} from  '../createpage/createpage'

const {
  btnSearchForm,
  btnSearchFormBurger,
  mobileMenu,
  inputFormBurger,
  cocktailsList,
  cocktailsTitle,
  noCocktails,
  inputForm,
  prewButton,
  nextButton,
  pagContainer,
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
  if (window.location.pathname.includes('cocktails.html')) {
    searchInFavCocktails(inputData);
    return;
  }

  window.location.href = '#results';
  cocktailsTitle.textContent = 'Searching results';

  searchByName(inputData);

  inputForm.reset();
  inputFormBurger.reset();
}


async function searchByName(name) {
  try {
    const data = await axios.get(`${BASE_URL}/search.php?s=${name}`);
console.log('початкова data', data)
    if (!data.data.drinks) {      
      cocktailsList.innerHTML = '';
      
      noCocktails.classList.remove('is-hidden')

      cocktailsTitle.textContent = `Sorry, we didn't find any cocktail for you`;

      prewButton.classList.add('is-hiden');/**!!!!!!!!!!!!!!! виправити назву*/
      nextButton.classList.add('is-hiden');/**!!!!!!!!!!!!!!! */
      
      // pagination(0, 1);

      return;
    }

    // cocktailsList.innerHTML = createCocktailsMarkupByViewportSize(
    //   viewportWidthCheck(),
    //   data
    // );
    createPage(data)
    
  } catch (error) {
    console.log(error);
  }
}

btnSearchFormBurger.addEventListener(
  'click',
  () => (window.location.href = '#results')
);
btnSearchForm.addEventListener(
  'click',
  () => (window.location.href = '#results')
);
