import { refreshFavouriteButtons } from './changebutton';
import {
  getDrink,
  addDrink,
  removeDrink,
} from '../localstorage/localstorageforcocktail';
import { refs } from '../global/refs';
const { galleryEl } = refs;

export function displayMoreInfo(data) {
  let exists = getDrink(data[0].idDrink);
  const result = data
    .map(
      drink =>
        `<h2 class="modal-header">${drink.strDrink}</h2>
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
                      <ul class="modal-ingredients-list list-scroll"></ul>
                  </div>
                  </div>
              </div>
          </div>
          <button type="submit" class="add-item-btn${
            exists ? ' is-hidden' : ''
          }" data-id="${drink.idDrink}" data-name="${
          drink.strDrink
        }" data-img="${drink.strDrinkThumb}">Add to favorite</button>
          <button type="submit" class="remove-item-btn${
            !exists ? ' is-hidden' : ''
          }" data-id="${drink.idDrink}" data-name="${
          drink.strDrink
        }" data-img="${drink.strDrinkThumb}">Remove from favorite</button>
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
      removeBtnEl.classList.add(`is-hidden`);
      addBtnEl.classList.remove(`is-hidden`);
      removeDrink(event.target.dataset.id);
      refreshFavouriteButtons(event.target.dataset.id);
    } catch (error) {
      console.error(error.message);
    }
  }
}
