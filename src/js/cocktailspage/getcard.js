import { renderAddRemoveDrinkButton } from '../favourites';

export function getCocktailsCard(data) {

  return `
        <li class="cocktail-item">
            <div class="cocktail-card">
                <a class="cocktail-link" href="#" data-modal-open>
                    <img class="cocktail-picture" src="${
                      data.strDrinkThumb
                    }" alt="${data.strDrink}" data-id="${
      data.idDrink
    }">
                </a>
                    <p class="cocktail-label">${data.strDrink}</p>

                    <div class="cocktail-card-btn-wrapper">
                    <button class="learnMore" data-id="${
                      data.idDrink
                    }" data-modal-open>Learn more</button>
                    ${renderAddRemoveDrinkButton(
                      data.idDrink,
                      data.strDrink,
                      data.strDrinkThumb
                    )}
            </div>
            </div>
        </li>
    `
}
