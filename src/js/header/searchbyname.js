import axios from 'axios';
import { BASE_URL } from '../const';
import { refs } from '../refs';
import { VIEWPORT_SIZES } from '../const';
import { viewportWidthCheck } from '../mainblock/mainblock';
import { attachEvents } from '../modallearnmore/modal-learn-more';
import { attachFavouriteClickEvents } from '../favourites';
import { createCocktailsMarkupByViewportSize} from '../hero/createCocktailsMarkupByViewportSize'

const { cocktailsList, cocktailsTitle, noCocktails, inputForm } = refs;


inputForm.addEventListener('submit', searchCoctailByName)


export function searchCoctailByName(evt){
    evt.preventDefault()
    searchByName(evt.currentTarget.elements.searchQuery.value)
    inputForm.reset()
}


async function searchByName(name) {
    cocktailsTitle.classList.remove('is-hidden');
    noCocktails.classList.add('is-hidden');
  
    try {
        const response =  await axios.get(`${BASE_URL}//search.php?s=${name}`);
        console.log(response.data.drinks)
      
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
  