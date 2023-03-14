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
        <li class="CocktailItem">
            <div class="CocktailCard">
                <a class="CocktailLink" href="#">
                    <img class="CocktailPicture" src="${strDrinkThumb}" alt="${strDrink}">
                </a>
                    <p class="CocktailLabel">${strDrink}</p>
                    <button class="LearnMore">Learn more</button>
                    <button class="AddTo">Add to</button>
            </div>
        </li>
    `;
};