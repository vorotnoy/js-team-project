import axios from 'axios';

import { BASE_URL } from '../const';
import { refs } from '../refs';
import { VIEWPORT_SIZES } from '../const';
import { createCocktailsMarkupByViewportSize } from './createcocktailsmarkupbyviewportsize';
import { viewportWidthCheck } from '../mainblock/mainblock';
import { attachEvents } from '../modallearnmore/modal-learn-more';
import { attachFavouriteClickEvents } from '../favourites';
import { getValue } from '../header/searchbyname';
import { pagination } from '../pagination';

const {
  title,
  cocktailsList,
  cocktailsTitle,
  noCocktails,
  prewButton,
  nextButton,
  pagContainer,
} = refs;

export async function searchCocktailsByFirstLetter(letter) {
  cocktailsTitle.classList.remove('is-hidden');
  noCocktails.classList.add('is-hidden');
  getValue.length = 0;

  try {
    const dataCocktails = await axios.get(`${BASE_URL}/search.php?f=${letter}`);
    const cocktailsArr = dataCocktails.data.drinks;
    
    if (!cocktailsArr) {
      cocktailsList.innerHTML = '';

      window.location.href = '#results';
      title.textContent = `Sorry, we didn't find any cocktail for you`;

      noCocktails.classList.remove('is-hidden');

      prewButton.classList.add('is-hiden');
      nextButton.classList.add('is-hiden');
      pagination(0, 1);

      return;
    }

    let totalPage = Math.ceil(
      cocktailsArr.length / viewportWidthCheck(VIEWPORT_SIZES)
    );

    for (
      let i = 0;
      i < cocktailsArr.length;
      i += viewportWidthCheck(VIEWPORT_SIZES)
    ) {
      let myChunk = cocktailsArr.slice(
        i,
        i + viewportWidthCheck(VIEWPORT_SIZES)
      );
      getValue.push(myChunk);
    }
    title.textContent = 'Searching results';
    cocktailsList.innerHTML = createCocktailsMarkupByViewportSize(
      viewportWidthCheck(VIEWPORT_SIZES), cocktailsArr
    );

    if (totalPage > 1) {
      prewButton.classList.remove('is-hiden');
      nextButton.classList.remove('is-hiden');
      nextButton.removeAttribute('disabled');
      pagContainer.classList.add('pading');
      pagination(totalPage, 1);
    } else {
      prewButton.classList.add('is-hiden');
      nextButton.classList.add('is-hiden');
      pagContainer.classList.add('pading');
      pagination(0, 1);
    }
    window.location.href = '#results';
    // attachEvents();
    // attachFavouriteClickEvents();
  } catch (error) {
    console.log(error);
  }
}
