import axios from 'axios';
import {
  attachIngredientEvents,
  onBackdrop,
} from './modal-learn-more-ingredient';
import { addDrink, removeDrink, getDrink, refreshFavouriteButtons } from '../favourites';

const galleryEl = document.querySelector(`.gallery`);

// -----Відкриття та закриття модалки-------
export function attachEvents() {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalContainer: document.querySelector('[data-modal] .container'),
  };
  for (let button of refs.openModalBtn) {
    button.addEventListener('click', toggleModal);
  }
  refs.closeModalBtn.onclick = toggleModal;
  refs.modal.onclick = toggleModal;

  function toggleModal(event) {
    event.stopPropagation();
    if (
      refs.modalContainer.contains(event.target) &&
      !refs.closeModalBtn.contains(event.target)
    ) {
      return;
    }

    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
  let learnMoreEL = document.querySelectorAll(`.learnMore`);
  for (let button of learnMoreEL) {
    button.addEventListener('click', onLearnMore);
  }
}

//-------Дістаемо ID з елемента на якому натиснули learn more-------
async function fetchData(id) {
  const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';
  try {
    const response = await axios.get(`${BASE_URL}?i=` + id);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

//------Перевірити чи є атрибют в API та додати до листа------
async function onLearnMore(event) {
  event.preventDefault();
  galleryEl.innerHTML = '';
  try {
    const returnedData = await fetchData(event.target.dataset.id);
    displayMoreInfo(returnedData.drinks);
    let drink = returnedData.drinks[0];
    function listIngredients(drink) {
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
                    ${
                      drink[measureProperty] != null
                        ? drink[measureProperty]
                        : ''
                    }` +
            ' ' +
            `
                    <a class="ingredient-link" data-name="${drink[ingredientProperty]}" data-modal-open-2>
                    ${drink[ingredientProperty]}
                    </a>
                    </span>
                    </li>`;
        } else {
          break;
        }
      }
      return list;
    }
    galleryEl
      .querySelector('.modal-ingredients-list')
      .insertAdjacentHTML('beforeend', listIngredients(drink));
    attachIngredientEvents();
  } catch (error) {
    console.log(error.message);
  }
}

//-----Додаемо елементи в розмітку------
export function displayMoreInfo(data) {
  let exists = getDrink(data[0].idDrink);

  const result = data
    .map(
      drink =>
        `<h2 class="modal-header js-changeclrwh">${drink.strDrink}</h2>
        <div class="modal-layout-flex">
            <div class="modal-instraction-box">
                <h3 class="modal-sub-header">Instructions: </h3>
                <p class="modal-desc">${drink.strInstructions}</p>
            </div>
            <div class="modal-layout-box">
                <div class="modal-img-box"><img class="modal-image" src="${
                  drink.strDrinkThumb
                }" alt="${drink.strDrink}"/></div>
                <div class="modal-ingr-box">
                    <h3 class="modal-ingr-desk">Ingredients</h3>
                    <p class="modal-per-glass">Per cocktail</p>
                    <ul class="modal-ingredients-list"></ul>
                </div>
                </div>
            </div>
        </div>
        <button type="submit" class="add-item-btn${
          exists ? ' is-hidden' : ''
        }" data-id="${drink.idDrink}" data-name="${drink.strDrink}" data-img="${
          drink.strDrinkThumb
        }">Add to favorite</button>
        <button type="submit" class="remove-item-btn${
          !exists ? ' is-hidden' : ''
        }" data-id="${drink.idDrink}" data-name="${drink.strDrink}" data-img="${
          drink.strDrinkThumb
        }">Remove from favorite</button>
        `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', result);

  const addBtnEl = galleryEl.querySelector('.add-item-btn');
  const removeBtnEl = galleryEl.querySelector('.remove-item-btn');

  addBtnEl.addEventListener(`click`, onAddBtn);
  removeBtnEl.addEventListener(`click`, onRemoveBtn);

  // ---------Add to favorite кнопка додае картинку та назву коктелю до Local storage-------
  function onAddBtn(event) {
    try {
      addDrink(
        event.target.dataset.id,
        event.target.dataset.name,
        event.target.dataset.img
      );
      refreshFavouriteButtons(event.target.dataset.id);
      addBtnEl.classList.add(`is-hidden`);
      removeBtnEl.classList.remove(`is-hidden`);
    } catch (error) {
      console.error(error.message);
    }
  }

  //------Remove from favorite кнопка видаляе елемент з Local storage-------
  function onRemoveBtn(event) {
    try {
      removeDrink(event.target.dataset.id);
      refreshFavouriteButtons(event.target.dataset.id);
      removeBtnEl.classList.add(`is-hidden`);
      addBtnEl.classList.remove(`is-hidden`);
    } catch (error) {
      console.error(error.message);
    }
  }
}
