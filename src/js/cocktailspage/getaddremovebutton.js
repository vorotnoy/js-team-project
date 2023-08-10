import { getDrink } from '../localstorage/localstorageforcocktail';
import * as icons from '../../images/svg/symbol-defs.svg';

// export function defuneButton(id, name, image) {
//   if (getDrink(id)) {
//     return renderAddRemoveDrinkButton(
//       id,
//       name,
//       image,
//       (title = 'Remove'),
//       (typeClass = 'removeFrom'),
//       (svg = 'selected')
//     );
//   }
//   return renderAddRemoveDrinkButton(
//     id,
//     name,
//     image,
//     (title = 'Add to'),
//     (typeClass = 'addTo'),
//     (svg = '')
//   );
// }

// export function renderAddRemoveDrinkButton(
//   id,
//   name,
//   image,
//   title,
//   typeClass,
//   svg
// ) {
//   return `<button class="favourite ${typeClass}" data-id="${id}" data-name="${name}" data-image="${image}">${title}
//          <svg class="icon-heart${svg}">
//              <use href="${icons}#heart"></use>
//          </svg>
//        </button>`;
// }

export function defuneButton(id, name, image) {
  if (getDrink(id)) {
    return `<button class="favourite removeFrom" data-id="${id}" data-name="${name}" data-image="${image}">Remove
  <svg class="icon-heart selected">
      <use href="${icons}#heart"></use>
  </svg>
</button>`;
  }
  return `<button class="favourite addTo" data-id="${id}" data-name="${name}" data-image="${image}">Add to
  <svg class="icon-heart">
      <use href="${icons}#heart"></use>
  </svg>
</button>`;
}
