import { BASE_URL } from "../const";
import { refs } from "../refs";
import axios from "axios";

const { cocktailsList } = refs;
// ----------------------------------GETRANDOMCOCKTAIL--------------------------------- //
export function getRandomCocktail() {
    return new Promise (resolve => {
        // обробити помилку у разі помилки запиту. читати документацію по axios
        const randomCocktail = axios.get(`${BASE_URL}/random.php`);
        resolve(randomCocktail);
    });
};
// ----------------------------------renderCocktails--------------------------------- //
export function renderCocktails(markup) {
    cocktailsList.insertAdjacentHTML('beforeend', markup);
};
// ----------------------------------GETCOCKTAILMARKUP--------------------------------- //

export function getCocktailMarkup({data}) {
    return `
        <li class="cocktail-item">
            <div class="cocktail-card">
                <a class="cocktail-link" href="#">
                    <img class="cocktail-picture" src="${data.drinks[0].strDrinkThumb}" alt="${data.drinks[0].strDrink}">
                </a>
                    <p class="cocktail-label">${data.drinks[0].strDrink}</p>
                    <button class="learnMore">Learn more</button>
                    <button class="addTo">Add to</button>
            </div>
        </li>
    `;
};