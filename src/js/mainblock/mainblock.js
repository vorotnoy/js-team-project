import { getRandomCocktail, renderCocktails, getCocktailMarkup } from "./renderCocktails";
import { VIEWPORT_SIZES } from "../const";

// export function viewportWidthCheck({ tablet, desktop }) {
  //  const currentVpWidth = document.body.clientWidth;

function viewportWidthCheck({ tablet, desktop }) {
    const currentVpWidth = window.innerWidth;

    if (currentVpWidth < tablet) return 3;
    if (currentVpWidth >= tablet && currentVpWidth < desktop) return 6;
    if (currentVpWidth >= desktop) return 9;
};

function accumulateCocktails(setSize) {
    const cocktailsSet = [];
    for (let i = 0; i < setSize; i++) {
        cocktailsSet.push(getRandomCocktail());
    };
    return cocktailsSet;
};

function pourCocktails(cocktailSetSize) {
    Promise.all(cocktailSetSize).then(data => renderCocktails(data.map(getCocktailMarkup).join("")));
};

export async function returnCocktails() {
    await pourCocktails(accumulateCocktails(viewportWidthCheck(VIEWPORT_SIZES)));
}