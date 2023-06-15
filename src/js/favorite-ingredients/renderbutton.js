import {getIngredient} from '../localstorage/localstorageforing';
import * as icons from '../../images/svg/symbol-defs.svg';

export function renderAddRemoveIngredientButton(name, type) {
  if (getIngredient(name)) {
    return renderAddRemoveDrinkButton(
      name,
      type,
      (titleName = 'Remove'),
      (typeClass = 'removeFromIng'),
      (svg = ' selected')
    );
  }
  return renderAddRemoveDrinkButton(
    name,
    type,
    (titleName = 'Add to'),
    (typeClass = 'addToIng'),
    (svg = '')
  );
}

function renderAddRemoveDrinkButton(
  name,
  type,
  titleName,
  typeClass,
  svg
) {
  return `<button class="favourite ${typeClass}"  data-name="${name}"  data-type="${type}">${titleName}
         <svg class="icon-heart${svg}">
             <use href="${icons}#heart"></use>
         </svg>
       </button>`;
}

