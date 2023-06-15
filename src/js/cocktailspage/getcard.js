import { defuneButton } from './getaddremovebutton';

export function getCocktailsCard(data) {
  return `
    <li class="cocktail-item">
      <div class="cocktail-card">
        <a class="cocktail-link js-data-modal-open" href="#">
          <img class="cocktail-picture" src="${data.strDrinkThumb}" alt="${
    data.strDrink
  }" data-id="${data.idDrink}">
        </a>
        <p class="cocktail-label">${data.strDrink}</p>
        <div class="cocktail-card-btn-wrapper">
          <button class="learnMore js-data-modal-open" data-id="${
            data.idDrink
          }">Learn more
          </button>
          ${defuneButton(data.idDrink, data.strDrink, data.strDrinkThumb)}
        </div>
      </div>
    </li>
    `;
}
