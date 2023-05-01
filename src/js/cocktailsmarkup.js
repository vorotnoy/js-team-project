import { renderAddRemoveDrinkButton } from './favourites';

export function cocktailsMarkup(data) {
  let cocktailsMarkup = '';
  data.map(
    ({ strDrinkThumb, strDrink, idDrink }) =>
      (cocktailsMarkup += `
        <li class="cocktail-item">
            <div class="cocktail-card">
                <a class="cocktail-link" href="#" data-modal-open>
                    <img class="cocktail-picture" src="${strDrinkThumb}" 
                    alt="${strDrink}"  data-id="${idDrink}">
                </a>
                    <p class="cocktail-label">${strDrink}</p>
                     <div class="cocktail-card-btn-wrapper">
                    <button class="learnMore" data-id="${idDrink}" 
                    data-modal-open >Learn more</button>
                   ${renderAddRemoveDrinkButton(
                     idDrink, strDrink, strDrinkThumb
                   )}
            </div>
            </div>
        </li>
    `)
  );
  return cocktailsMarkup;
}