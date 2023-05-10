import {getIngredient} from './localstorage';
import * as icons from '../../images/svg/symbol-defs.svg';

export function renderAddRemoveIngredientButton(name, type) {
  if (getIngredient(name)) {
    return `<button class="favourite removeFrom" data-name="${name}" data-type="${type}">Remove
        <svg class="icon-heart-selected">
            <use href="${icons}#heart"></use>
        </svg>
      </button>`;
  }

  return `<button class="favourite addTo" data-name="${name}" data-type="${type}">Add to
      <svg class="icon-heart">
        <use href="${icons}#heart"></use>
      </svg>
      </button>`;
}