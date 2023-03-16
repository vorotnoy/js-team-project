import '../../sass/components/_modal-ingredients.scss';
import axios from 'axios';

const galleryEl = document.querySelector(`.gallery`);

// -----Відкриття та закриття модалки-------
export function attachEvents() {
    const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    };
    for (let button of refs.openModalBtn) {
        button.addEventListener('click', toggleModal);
    }
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
        document.body.classList.toggle('modal-open');
        refs.modal.classList.toggle('is-hidden');
    }
    let learnMoreEL = document.querySelectorAll(`.learnMore`);
    for (let button of learnMoreEL) {
        button.addEventListener(`click`, onLearnMore);
    } 
};

//-------Дістаемо ID з елемента на якому натиснули learn more-------
async function fetchData(id) {
    const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';
    try {
        const response = await axios.get(`${BASE_URL}?i=` + id);
        return response.data;
    } catch (error) {
    console.log(error.message);
    }
};

//------Перевірити чи є атрибют в API та додати до листа------
async function onLearnMore(event) {
    event.preventDefault();
    try {
        const returnedData = await fetchData(event.target.dataset.id);
        displayMoreInfo(returnedData.drinks);
        let drink = returnedData.drinks[0];
        function listIngredients(drink) {
            list = "";
            for (let i = 1; i < 16; i++) {
                let ingredientProperty = "strIngredient" + i;
                if (drink[ingredientProperty] != null) {
                    let measureProperty = ingredientProperty.replace("strIngredient", "strMeasure");
                    list += `<li class="modal-ingredients-item"><span class="modal-ingredients-data">${(drink[measureProperty] != null ? drink[measureProperty] : "")}`+' '+`<a href="#" class="ingredient">${drink[ingredientProperty]}</a></span></li>`;
                } else {
                    break;
                }
            }
            return list;
        }
        galleryEl.querySelector('.modal-ingredients-list').insertAdjacentHTML('beforeend', listIngredients(drink));
    } catch (error) {
        console.log(error.message)
    }
};

//-----Додаемо елементи в розмітку------
function displayMoreInfo(data) {
    const result = data.map(drink =>
        `<h2 class="modal-header">${drink.strDrink}</h2>
        <h3 class="modal-sub-header">Instractions: </h3>
        <p class="modal-desc">${drink.strInstructions}</p>
        <img class="modal-image" src="${drink.strDrinkThumb}" alt="${drink.strDrink}"/>
        <h3 class="modal-ingr-desk">Ingredients</h3>
        <p class="modal-per-glass">Per cocktail</p>
        <ul class="modal-ingredients-list"></ul>
        <button type="submit" class="add-item-btn" data-name="${drink.strDrink}" data-img="${drink.strDrinkThumb}">Add to favorite</button>
        <button type="submit" class="remove-item-btn is-hidden" data-name="${drink.strDrink}" data-category="${drink.strCategory}">Remove from favorite</button>
        `
    ).join('');
    galleryEl.insertAdjacentHTML('beforeend', result);

    const addBtnEl = galleryEl.querySelector('.add-item-btn');
    const removeBtnEl = galleryEl.querySelector('.remove-item-btn');

    addBtnEl.addEventListener(`click`, onAddBtn);
    removeBtnEl.addEventListener(`click`, onRemoveBtn);

// ---------Add to favorite кнопка додае картинку та назву коктелю до Local storage-------
    function onAddBtn(event) {
        try {
            let favourites = JSON.parse(localStorage.getItem('favorite-cocktail')) ?? [];
            let favouriteDrink = { 'name': event.target.dataset.name, 'img': event.target.dataset.img };
            favourites.push(favouriteDrink);
            localStorage.setItem('favorite-cocktail', JSON.stringify(favourites));
            addBtnEl.classList.add(`is-hidden`);
            removeBtnEl.classList.remove(`is-hidden`);
        } catch (error) {
            console.error(error.message);
        }
    };

//------Remove from favorite кнопка видаляе елемент з Local storage-------
    function onRemoveBtn(event) {
        try {
            let favourites = JSON.parse(localStorage.getItem('favorite-cocktail')) ?? [];
            let updatedFavourites = [];
            for (let i = 0; i < favourites.length; i++) {
                let drink = favourites[i];
                if (drink.name != event.target.dataset.name && drink.img != event.target.dataset.img) { 
                    updatedFavourites.push(drink);
                } 
            }
            localStorage.setItem('favorite-cocktail', JSON.stringify(updatedFavourites));
            removeBtnEl.classList.add(`is-hidden`);
            addBtnEl.classList.remove(`is-hidden`);
        } catch (error) {
            console.error(error.message);
        };
    };
};