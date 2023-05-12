//формуємо список інгридієнтів
export function listIngredients(drink) {
  let list = '';
  for (let i = 1; i < 16; i++) {
    let ingredientProperty = 'strIngredient' + i;
    if (drink[ingredientProperty] != null) {
      let measureProperty = ingredientProperty.replace(
        'strIngredient',
        'strMeasure'
      );
      list +=
        `<li class="modal-learn-more-item">
                <span class="modal-learn-more-data">
                <a class="ingredient-link" data-name="${
                  drink[ingredientProperty]
                }" data-modal-open-2>
                ${
                  drink[measureProperty] != null ? drink[measureProperty] : ''
                }` +
        ' ' +
        `${drink[ingredientProperty]}
                </a>
                </span>
                </li>`;
    } else {
      break;
    }
  }
  return list;
}
