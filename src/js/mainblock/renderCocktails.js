import { BASE_URL } from "../const";
import { refs } from "../refs";
import axios from "axios";

const { cocktailsList } = refs;
// ----------------------------------GETRANDOMCOCKTAIL--------------------------------- //
export async function getRandomCocktail() {
    try {
        const response = await axios.get(`${BASE_URL}/random.php`);
        renderCocktails(getCocktailMarkup(response.data.drinks));
    } catch (error) {
        console.log(error);
    }
};
// ----------------------------------renderCocktails--------------------------------- //
function renderCocktails(markup) {
    cocktailsList.insertAdjacentHTML('beforeend', markup);
};
// ----------------------------------GETCOCKTAILMARKUP--------------------------------- //
function getCocktailMarkup([{ strDrinkThumb, strDrink }]) {
    return `
        <li class="cocktail-item">
            <div class="cocktail-card">
                <a class="cocktail-link" href="#">
                    <img class="cocktail-picture" src="${strDrinkThumb}" alt="${strDrink}">
                </a>
                    <p class="cocktail-label">${strDrink}</p>
                    <button class="learnMore">Learn more</button>
                    <button class="addTo">Add to</button>
            </div>
        </li>
    `;
};