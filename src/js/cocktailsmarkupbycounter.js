import { renderAddRemoveDrinkButton } from './favourites';

 export function cocktailsMarkupByCounter(counter, data) {
  let cocktailsMarkup = '';

  for (let i = 0; i < counter; i++) {
    cocktailsMarkup += `
        <li class="cocktail-item">
            <div class="cocktail-card">
                <a class="cocktail-link" href="#" data-modal-open>
                    <img class="cocktail-picture" src="${
                      data[i].strDrinkThumb
                    }" alt="${data[i].strDrink}" data-id="${data[i].idDrink}">
                </a>
                    <p class="cocktail-label">${data[i].strDrink}</p>
                    <div class="cocktail-card-btn-wrapper">
                    <button class="learnMore" data-id="${
                      data[i].idDrink
                    }" data-modal-open>Learn more</button>
                    ${renderAddRemoveDrinkButton(
                      data[i].idDrink, data[i].strDrink, data[i].strDrinkThumb
                    )}
            </div>
            </div>
        </li>
    `;
  }
  return cocktailsMarkup;
}
