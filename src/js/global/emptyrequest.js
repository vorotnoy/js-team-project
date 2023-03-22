import { refs } from '../global/refs';
const {
    cocktailsList,
    cocktailsTitle,
    noCocktails,
    prewButton,
    nextButton,
  } = refs;

export function emptyRequest (){

    cocktailsList.innerHTML = '';
    
    noCocktails.classList.remove('is-hidden');

    cocktailsTitle.textContent = `Sorry, we didn't find any cocktail for you`;

    ulTag.classList.add('is-hidden')
    prewButton.classList.add('is-hiden'); /**!!!!!!!!!!!!!!! виправити назву*/
    nextButton.classList.add('is-hiden'); /**!!!!!!!!!!!!!!! */
}