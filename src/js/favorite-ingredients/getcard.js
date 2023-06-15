import { renderAddRemoveIngredientButton } from './renderbutton';

function drinkCheck(ingr) {
  if (ingr === 'null') {
    return 'Not a drink';
  } else {
    return ingr;
  }
}

export function getFavouriteIngredientsCard(data) {
  return `<li id="favourite_${data.name
    .replace(' ', '')
    .toLowerCase()}" class="fav-ingr__item">
              <h3 class="fav-ingr__item-title">${data.name}</h3>
              <p class="fav-ingr__type">${drinkCheck(data.type)}</p>
              <div class="fav-ingr__buttons">
                  <button class="ingredient-link learnMore" data-name="${
                    data.name
                  }" data-type="${
    data.type
  }" data-modal-open-2>Learn more</button>
                  ${renderAddRemoveIngredientButton(data.name, data.type)}
              </div>
          </li>`;
}
