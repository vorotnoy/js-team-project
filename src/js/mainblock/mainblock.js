import { getRandomCocktail, renderCocktails, getCocktailMarkup } from "./renderCocktails";
import { VIEWPORT_SIZES } from "../const";

export function viewportWidthCheck({ tablet, desktop }) {
    const currentVpWidth = window.innerWidth;
    if (currentVpWidth < tablet) {return drinksSetSize = 3};
    if (currentVpWidth >= tablet && currentVpWidth < desktop) {return drinksSetSize = 6};
    if (currentVpWidth >= desktop) {return drinksSetSize = 9};
};

export function accumulateCocktails(setSize) {
    const cocktailsSet = [];
    for (let i = 0; i < setSize; i++) {
        cocktailsSet.push(getRandomCocktail());
    };
    return cocktailsSet;
};

export function pourCocktails(cocktailSetSize) {
    Promise.all(cocktailSetSize).then(data => renderCocktails(data.map(getCocktailMarkup).join("")));
};