import '../../sass/index.css';
import axios from 'axios';

const contentEl = document.querySelector(`.content`);

// -----Відкриття та закриття модалки-------
export function attachIngredientEvents() {
    const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open-2]'),
    closeModalBtn: document.querySelector('[data-modal-close-2]'),
    modal: document.querySelector('[data-modal-2]'),
    };
    for (button of refs.openModalBtn) {
        button.addEventListener('click', toggleModal);
    }
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
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
    let favourites = JSON.parse(localStorage.getItem('favorite-ingredient')) ?? [];
    let exists = false;
    for (let ingredient of favourites) {
        if (ingredient.name == data[0].strIngredient) {
            exists = true;
            break;
        }
    }
    const result = data.map(ingredient =>
        `<h2 class="modal-header ingredient-header">${ingredient.strIngredient}</h2>
        <h3 class="modal-sub-header ingredient-sub-header">${ingredient.strType}</h3>
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
            let favourites = JSON.parse(localStorage.getItem('favorite-ingredient')) ?? [];
            let exists = false;
            for (let ingredient of favourites) {
                if (ingredient.name == event.target.dataset.name) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                let favouriteIngredient = { 'name': event.target.dataset.name, 'type': event.target.dataset.type };
                favourites.push(favouriteIngredient);
                localStorage.setItem('favorite-ingredient', JSON.stringify(favourites));
            }
            addBtnEl.classList.add(`is-hidden`);
            removeBtnEl.classList.remove(`is-hidden`);
        } catch (error) {
            console.error(error.message);
        }
    };

//------Remove from favorite кнопка видаляе елемент з Local storage-------
    function onRemoveBtn(event) {
        try {
            let favourites = JSON.parse(localStorage.getItem('favorite-ingredient')) ?? [];
            let updatedFavourites = [];
            for (let i = 0; i < favourites.length; i++) {
                let ingredient = favourites[i];
                if (ingredient.name != event.target.dataset.name && ingredient.type != event.target.dataset.type) { 
                    updatedFavourites.push(ingredient);
                } 
            }
            localStorage.setItem('favorite-ingredient', JSON.stringify(updatedFavourites));
            removeBtnEl.classList.add(`is-hidden`);
            addBtnEl.classList.remove(`is-hidden`);
        } catch (error) {
            console.error(error.message);
        };
    };
};