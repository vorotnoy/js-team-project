import * as icons from '../../images/svg/symbol-defs.svg';
import { BASE_URL } from '../const';
import { refs } from '../refs';
import axios from 'axios';
import { renderAddRemoveDrinkButton } from '../favourites';

const { cocktailsList } = refs;

// ----------------------------------GETRANDOMCOCKTAIL--------------------------------- //
export function getRandomCocktail() {
  return new Promise(resolve => {
    // обробити помилку у разі помилки запиту. читати документацію по axios
    const randomCocktail = axios.get(`${BASE_URL}/random.php`);
    resolve(randomCocktail);
  });
}
// ----------------------------------renderCocktails--------------------------------- //
export function renderCocktails(markup) {
  if (!cocktailsList){
    return
  }
  cocktailsList.insertAdjacentHTML('beforeend', markup);
}
// ----------------------------------GETCOCKTAILMARKUP--------------------------------- //

export function getCocktailMarkup({ data }) {
  return `
        <li class="cocktail-item">
            <div class="cocktail-card">
                <a class="cocktail-link" href="#">
                    <img class="cocktail-picture" src="${data.drinks[0].strDrinkThumb}" alt="${data.drinks[0].strDrink}">
                </a>

                <p class="cocktail-label js-changeclrwh" data-cocktail="${data.drinks[0].strDrink}">${data.drinks[0].strDrink}</p>
                <div class="cocktail-card-btn-wrapper">

                    <button class="learnMore" data-id="${data.drinks[0].idDrink}" data-modal-open>Learn more</button>
                    ${renderAddRemoveDrinkButton(data.drinks[0].idDrink, data.drinks[0].strDrink, data.drinks[0].strDrinkThumb)}
            </div>
        </li>
    `;
}

// <p class="cocktail-label">${data.drinks[0].strDrink}</p>
