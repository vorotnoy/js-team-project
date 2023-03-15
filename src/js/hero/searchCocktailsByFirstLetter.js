import { BASE_URL } from '../const';
import { refs } from '../refs';
import axios from 'axios';

const { cocktailsList, cocktailsTitle, noCocktails } = refs;

export async function searchCocktailsByFirstLetter(letter) {
  cocktailsTitle.classList.remove('is-hidden');
  noCocktails.classList.add('is-hidden');

  try {
    const response = await axios.get(`${BASE_URL}/search.php?f=${letter}`);

    if (!response.data.drinks) {
      cocktailsList.remove();

      cocktailsTitle.classList.add('is-hidden');
      noCocktails.classList.remove('is-hidden');

      return;
    }
  } catch (error) {
    console.log(error);
  }
}
