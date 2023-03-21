import { renderAddRemoveDrinkButton } from '../favourites';

export function getCard({ data }) {
  return `
        <li class="cocktail-item">
            <div class="cocktail-card">
                <a class="cocktail-link" href="#" data-modal-open>
                    <img class="cocktail-picture" src="${
                      data.drinks[0].strDrinkThumb
                    }" alt="${data.drinks[0].strDrink}" data-id="${
    data.drinks[0].idDrink
  }">
                </a>

                <p class="cocktail-label js-changeclrwh" data-cocktail="${
                  data.drinks[0].strDrink
                }">${data.drinks[0].strDrink}</p>
                <div class="cocktail-card-btn-wrapper">

                    <button class="learnMore" data-id="${
                      data.drinks[0].idDrink
                    }" data-modal-open>Learn more</button>
                    ${renderAddRemoveDrinkButton(
                      data.drinks[0].idDrink,
                      data.drinks[0].strDrink,
                      data.drinks[0].strDrinkThumb
                    )}
            </div>
        </li>
    `;
}