import axios from 'axios';

import { BASE_URL } from '../global/const';
import { refs } from '../global/refs';
import { createCocktailsMarkupByViewportSize } from './createCocktailsMarkupByViewportSize';
import { viewportWidthCheck } from '../global/viewportsize';
import { attachEvents } from '../modallearnmore/modal-learn-more';
import { attachFavouriteClickEvents } from '../favourites';
import { getValue } from '../createpage/createpage';
import { pagination } from '../paginations/pagination';

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
    const response = await axios.get(`${BASE_URL}/search.php?f=${letter}`);

    if (!response.data.drinks) {
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
      response.data.drinks.length / viewportWidthCheck()
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
    title.textContent = 'Searching results';
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
