import { getIngredient, addButtonListener} from '../localstorage/localstorageforing';
import axios from 'axios';
import { refs } from '../global/refs';
const {
  openModalBtn,
  closeModalBtn,
  modal,
  modalContainer,
  contentEl,
  modal_ingredients,
} = refs;

// // -----Відкриття та закриття модалки-------
// export function attachIngredientEvents() {
//   for (let button of openModalBtn) {
//     button.addEventListener('click', toggleModal);
//   }
//   closeModalBtn.onclick = toggleModal;
//   modal.onclick = toggleModal;

//   function toggleModal(event) {
//     event.stopPropagation();
//     if (
//       modalContainer.contains(event.target) &&
//       !closeModalBtn.contains(event.target)
//     ) {
//       return;
//     }
//     if (!modal.classList.contains('is-hidden')) {
//       document.body.classList.toggle('data-modal-ingredients');
//       modal.classList.toggle('is-hidden');
//     }
//   }
//   let ingredientLinkEL = document.querySelectorAll(`.ingredient-link`);
//   for (let link of ingredientLinkEL) {
//     link.addEventListener(`click`, onIngredient);
//   }
// }

//-------Дістаемо імя з елемента лінка на який натиснули-------
async function fetchData(name) {
  const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
  try {
    const response = await axios.get(
      `${BASE_URL}?i=` + encodeURIComponent(name.toLowerCase())
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

// //------Перевірити чи є атрибют в API та додати ------
export async function onIngredient(event) {
  // console.log('ing', event.target.dataset.name);

  event.preventDefault();
  contentEl.innerHTML = '';
  try {
    const returnedData = await fetchData(event.target.dataset.name);
    displayMoreInfo(returnedData.ingredients);
    let ingredient = returnedData.ingredients[0];
    function checkType(ingredient) {
      let type = '';
      if (ingredient.strType != null) {
        type += `<h3 class="modal-sub-header ingredient-sub-header">${ingredient.strType}<hr /></h3>`;
      }
      return type;
    }
    contentEl
      .querySelector('.ingredient-header')
      .insertAdjacentHTML('afterend', checkType(ingredient));
    function ingredientDescription(ingredient) {
      let description = '';
      if (ingredient.strDescription != null) {
        description += `<p class="modal-desc ingredient-desc">${ingredient.strDescription}</p>`;
      }
      return description;
    }

    if (contentEl.querySelector('.ingredient-sub-header')) {
      contentEl
        .querySelector('.ingredient-sub-header')
        .insertAdjacentHTML('afterend', ingredientDescription(ingredient));
    } else {
      contentEl.insertAdjacentHTML(
        'afterend',
        ingredientDescription(ingredient)
      );
    }

    function listInIngredient(ingredient) {
      let list = '';
      if (ingredient.strAlcohol != null) {
        list += `<li class="ingredient-list-item"><span class="ingredient-list-data">Alcohol: ${ingredient.strAlcohol} </span></li>`;
      }
      if (ingredient.strABV != null) {
        list += `<li class="ingredient-list-item"><span class="ingredient-list-data">Alcohol by volume: ${ingredient.strABV} % </span></li>`;
      }
      return list;
    }
    contentEl
      .querySelector('.ingredients-list')
      .insertAdjacentHTML('beforeend', listInIngredient(ingredient));
    // document.body.classList.toggle('modal-open-2');
    // modal_ingredients.classList.toggle('is-hidden');
  } catch (error) {
    console.log(error.message);
  }
}

// //-----Додаемо елементи в розмітку------
export function displayMoreInfo(data) {
  let exists = getIngredient(data[0].strIngredient);
// console.log('data', data)
  const result = data
    .map(
      ingredient =>
        `<h2 class="modal-header ingredient-header">${
          ingredient.strIngredient
        }</h2>
        <ul class="ingredients-list modal-ingredients-list"></ul>
        <button type="submit" class="add-item-btn${
          exists ? ' is-hidden' : ''
        }" data-name="${ingredient.strIngredient}" data-type="${
          ingredient.strType
        }">Add to favorite</button>
        <button type="submit" class="remove-item-btn${
          !exists ? ' is-hidden' : ''
        }" data-name="${ingredient.strIngredient}" data-type="${
          ingredient.strType
        }">Remove from favorite</button>
        `
    )
    .join('');
  contentEl.insertAdjacentHTML('beforeend', result);
  addButtonListener();
}

