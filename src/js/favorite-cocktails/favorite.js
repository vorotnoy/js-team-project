'use strict'
// export default updateSize;
import BASE_URL from "../const";
import axios from "axios";
import {attachEvents} from "../modallearnmore/modal-learn-more";
import {renderAddRemoveDrinkButton} from '../favourites';
// import attachEvents from "../modallearnmore/modal-lern-more"
const debounce = require('lodash.debounce');
 
export function favCocktailsEvents(){
    const refs = {
        favoritesList: document.querySelector('.fav-cocktails__list'),
        loadCocktailsBtn: document.querySelector('.loadCocktails')
    }
    refs.favoritesList.addEventListener('click', getCocktailId);
    refs.loadCocktailsBtn.addEventListener('click', updateSize);
}

const favoritesList = document.querySelector('.fav-cocktails__list');
const loadCocktailsBtn = document.querySelector('.loadCocktails');

// loadCocktailsBtn added to demonstrate render by click for header menu
loadCocktailsBtn.addEventListener('click', updateSize);
favoritesList.addEventListener('click', getCocktailId);

//unfinished
//function should get element ID and fetch data for modal window
//currently shows clicked element id
async function getCocktailId(event){
    let id;
    if(event.target.className === 'fav-cocktails__learn-more-btn'){
        id = event.target.attributes.drinkid.value;
        console.log('id: ', id);
        console.log(event)
        attachEvents();
    }

}

//function watch viewport size and load limited for current viewport amount of elements 
window.addEventListener("resize", debounce(updateSize, 300));

//use function updateSize to render elements on click
export function updateSize(){
    let windowWidth = window.innerWidth;
    if(localStorage.length === 0){
        console.log('localStorage is empty');
        return;
    }
    if(windowWidth < 768){
        // console.log('300px - 768px');
        favoritesMarkup(0, 3);
    } else if(windowWidth < 1280){
        // console.log('768px - 1023px');
        favoritesMarkup(0, 6);
    } else {
        // console.log('1280px');
        favoritesMarkup(0, 9);
    }
}

//get objects from storage and renders elements
//markup adds "drinkId" attribute with element id for modal window fetch
//"start", "end" arguments for pagination
function favoritesMarkup(start, end){
    const cocktailsArr = JSON.parse(localStorage.getItem('favorite-cocktail'));
    let arr = cocktailsArr.slice(start, end);
    // console.log(cocktailsTest);

    favoritesList.innerHTML = arr.map(e=>{
        return `<li class="fav-cocktails__item">
                    <img src="${e.img}" class="fav-cocktails__img" alt=${e.name} cocktail>
                    <h3 class="fav-cocktails__item-title">${e.name}</h3>
                    <div class="fav-cocktails__buttons">
                        <button type="button" class="fav-cocktails__learn-more-btn data-modal-open" drinkId=${e.id}>Learn more</button>
                        ${renderAddRemoveDrinkButton(e.name, e.img)}
                    </div>
                </li>`;
    }).join(''); 
}