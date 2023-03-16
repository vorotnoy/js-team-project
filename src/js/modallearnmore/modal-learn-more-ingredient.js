import {addIngredient, removeIngredient, getIngredient} from '../favourites'
import axios from 'axios';

const contentEl = document.querySelector(`.content`);

// -----Відкриття та закриття модалки-------
export function attachIngredientEvents() {
    const refs = {
        openModalBtn: document.querySelectorAll('[data-modal-open-2]'),
        closeModalBtn: document.querySelector('[data-modal-close-2]'),
        modal: document.querySelector('[data-modal-2]'),
        modalContainer: document.querySelector('[data-modal-2] .container')
    };
    for (button of refs.openModalBtn) {
        button.addEventListener('click', toggleModal);
    }
    refs.closeModalBtn.onclick = toggleModal;
    refs.modal.onclick = toggleModal;
    
    function toggleModal(event) {
        event.stopPropagation();
        if (refs.modalContainer.contains(event.target) && !refs.closeModalBtn.contains(event.target))
        {
            return;
        }
        
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
    }
    let ingredientLinkEL = document.querySelectorAll(`.ingredient-link`);
    for (link of ingredientLinkEL) {
        link.addEventListener(`click`, onIngredient);
    } 
};

//-------Дістаемо імя з елемента лінка на який натиснули-------
async function fetchData(name) {
    const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
    try {
        const response = await axios.get(`${BASE_URL}?i=` + encodeURIComponent(name.toLowerCase()));
        return response.data;
    } catch (error) {
    console.log(error.message);
    }
};

//------Перевірити чи є атрибют в API та додати ------
async function onIngredient(event) {
    event.preventDefault();
    contentEl.innerHTML = '';
    try {
        const returnedData = await fetchData(event.target.dataset.name);
        displayMoreInfo(returnedData.ingredients);
        let ingredient = returnedData.ingredients[0];
        function checkType(ingredient) {
            let type = '';
            if (ingredient.strType != null) {
                type += `<h3 class="modal-sub-header ingredient-sub-header">${ingredient.strType}<hr /></h3>`
            }
            return type;
        }
        contentEl.querySelector('.ingredient-header').insertAdjacentHTML('afterend', checkType(ingredient));
        function ingredientDescription(ingredient) {
            let description = "";
            if (ingredient.strDescription != null) {
                description +=`<p class="modal-desc ingredient-desc">${ingredient.strDescription}</p>`
            }
            return description;
        }
        contentEl.querySelector('.ingredient-sub-header').insertAdjacentHTML('afterend', ingredientDescription(ingredient));
        function listInIngredient(ingredient) {
            let list = "";
            if (ingredient.strAlcohol != null) {
                list += `<li class="ingredient-list-item"><span class="ingredient-list-data">Alcohol: ${ingredient.strAlcohol} </span></li>`
            }
            if (ingredient.strABV != null) {
                list += `<li class="ingredient-list-item"><span class="ingredient-list-data">Alcohol by volume: ${ingredient.strABV} % </span></li>`
            }
            return list;
        }
        contentEl.querySelector('.ingredients-list').insertAdjacentHTML('beforeend', listInIngredient(ingredient));
    } catch (error) {
        console.log(error.message)
    }
};

//-----Додаемо елементи в розмітку------
export function displayMoreInfo(data) {
    let exists = getIngredient(data[0].strIngredient);
    
    const result = data.map(ingredient =>
        `<h2 class="modal-header ingredient-header">${ingredient.strIngredient}</h2>
        <ul class="ingredients-list modal-ingredients-list"></ul>
        <button type="submit" class="add-item-btn${exists ? " is-hidden" : ""}" data-name="${ingredient.strIngredient}" data-type="${ingredient.strType}">Add to favorite</button>
        <button type="submit" class="remove-item-btn${!exists ? " is-hidden" : ""}" data-name="${ingredient.strIngredient}" data-type="${ingredient.strType}">Remove from favorite</button>
        `
    ).join('');
    contentEl.insertAdjacentHTML('beforeend', result);

    const addBtnEl = contentEl.querySelector('.add-item-btn');
    const removeBtnEl = contentEl.querySelector('.remove-item-btn');

    addBtnEl.addEventListener(`click`, onAddBtn);
    removeBtnEl.addEventListener(`click`, onRemoveBtn);

// ---------Add to favorite кнопка додае назву та тип інгрідіенту коктелю до Local storage-------
    function onAddBtn(event) {
        try {
            addIngredient(event.target.dataset.name, event.target.dataset.type);
            addBtnEl.classList.add(`is-hidden`);
            removeBtnEl.classList.remove(`is-hidden`);
        } catch (error) {
            console.error(error.message);
        }
    };

//------Remove from favorite кнопка видаляе елемент з Local storage-------
    function onRemoveBtn(event) {
        try {
            removeIngredient(event.target.dataset.name, event.target.dataset.type);
            removeBtnEl.classList.add(`is-hidden`);
            addBtnEl.classList.remove(`is-hidden`);
        } catch (error) {
            console.error(error.message);
        };
    };
};

