import axios from 'axios';

import { BASE_URL } from '../const';
import { refs } from '../refs';
import { VIEWPORT_SIZES } from '../const';
import { createCocktailsMarkupByViewportSize } from './createCocktailsMarkupByViewportSize';
import { viewportWidthCheck } from '../mainblock/mainblock';
import { attachEvents } from '../modallearnmore/modal-learn-more';
import { attachFavouriteClickEvents } from '../favourites';

const { cocktailsList, cocktailsTitle, noCocktails } = refs;

export async function searchCocktailsByFirstLetter(letter) {
  cocktailsTitle.classList.remove('is-hidden');
  noCocktails.classList.add('is-hidden');

  try {
    const response = await axios.get(`${BASE_URL}/search.php?f=${letter}`);
    
    if (!response.data.drinks) {
      cocktailsList.innerHTML = '';

      cocktailsTitle.classList.add('is-hidden');
      noCocktails.classList.remove('is-hidden');

      return;
    }

    cocktailsList.innerHTML = createCocktailsMarkupByViewportSize(
      viewportWidthCheck(VIEWPORT_SIZES),
      response
    );

    attachEvents();
    attachFavouriteClickEvents();
  } catch (error) {
    console.log(error);
  }
}
