import axios from 'axios';
import { BASE_URL } from '../const';
import { refs } from '../refs';
import { VIEWPORT_SIZES } from '../const';
import { viewportWidthCheck } from '../mainblock/mainblock';
import { attachEvents } from '../modallearnmore/modal-learn-more';
import { attachFavouriteClickEvents } from '../favourites';
import { createCocktailsMarkupByViewportSize } from '../hero/createCocktailsMarkupByViewportSize';
import { pagination } from '../pagination';

const {
  btnSearchForm,
  btnSearchFormBurger,
  mobileMenu,
  inputFormBurger,
  title,
  cocktailsList,
  cocktailsTitle,
  noCocktails,
  inputForm,
  prewButton,
  nextButton,
  pagContainer,
} = refs;
export let getValue = [];

inputForm.addEventListener('submit', searchCoctailByName);
inputFormBurger.addEventListener('submit', searchCoctailByName);

export function searchCoctailByName(evt) {
  evt.preventDefault();

  if (evt.currentTarget === inputFormBurger) {
    mobileMenu.classList.toggle('is-open');
  }

  if (!evt.currentTarget.elements.searchQuery.value) {
    cocktailsList.innerHTML = '';

    title.textContent = `Sorry, we didn't find any cocktail for you`;
    noCocktails.classList.remove('is-hidden');

    return;
  }
  window.location.href = '#results';
  title.textContent = 'Searching results';
  searchByName(evt.currentTarget.elements.searchQuery.value);
  inputForm.reset();
  inputFormBurger.reset();
}

async function searchByName(name) {
  cocktailsTitle.classList.remove('is-hidden');
  noCocktails.classList.add('is-hidden');
  getValue.length = 0;

  try {
    const response = await axios.get(`${BASE_URL}//search.php?s=${name}`);
    if (!response.data.drinks) {
      cocktailsList.innerHTML = '';

      // cocktailsTitle.classList.add('is-hidden');
      title.textContent = `Sorry, we didn't find any cocktail for you`;
      noCocktails.classList.remove('is-hidden');

      prewButton.classList.add('is-hiden');
      nextButton.classList.add('is-hiden');
      pagination(0, 1);

      return;
    }

    let totalPage = Math.ceil(
      response.data.drinks.length / viewportWidthCheck(VIEWPORT_SIZES)
    );

    for (
      let i = 0;
      i < response.data.drinks.length;
      i += viewportWidthCheck(VIEWPORT_SIZES)
    ) {
      let myChunk = response.data.drinks.slice(
        i,
        i + viewportWidthCheck(VIEWPORT_SIZES)
      );
      getValue.push(myChunk);
    }

    cocktailsList.innerHTML = createCocktailsMarkupByViewportSize(
      viewportWidthCheck(VIEWPORT_SIZES),
      response
    );

    if (totalPage > 1) {
      prewButton.classList.remove('is-hiden');
      nextButton.classList.remove('is-hiden');
      nextButton.removeAttribute('disabled');
      pagContainer.classList.add('pading');
      pagination(totalPage, 1);
    } else {
      pagContainer.classList.add('pading');
      prewButton.classList.add('is-hiden');
      nextButton.classList.add('is-hiden');
      pagination(0, 1);
    }

    //attachEvents();
    //attachFavouriteClickEvents();
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
