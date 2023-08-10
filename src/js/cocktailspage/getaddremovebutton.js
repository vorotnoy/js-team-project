import { getDrink } from '../localstorage/localstorageforcocktail';
import * as icons from '../../images/svg/symbol-defs.svg';

export function defuneButton(id, name, image) {
  if (getDrink(id)) {
    const title = "Remove"
    const typeClass = "removeFrom"
    const svg = "selected"
    return renderAddRemoveDrinkButton(
      id,
      name,
      image,
      title = title,
      typeClass = typeClass,
      svg = svg
    );
  }
  const title = "Add to"
  const typeClass = "addTo"
  const svg = ""
  return renderAddRemoveDrinkButton(
    id,
    name,
    image,
    title = title,
    typeClass = typeClass,
    svg = svg
  );
}

export function renderAddRemoveDrinkButton(
  id,
  name,
  image,
  title,
  typeClass,
  svg
) {
  return `<button class="favourite ${typeClass}" data-id="${id}" data-name="${name}" data-image="${image}">${title}
         <svg class="icon-heart${svg}">
             <use href="${icons}#heart"></use>
         </svg>
       </button>`;
}
