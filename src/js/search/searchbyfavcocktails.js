import { refs } from '../global/refs';
// import {
//   renderAddRemoveDrinkButton,
//   attachFavouriteClickEvents,
// } from '../favourites';
// import { attachEvents } from '../modallearnmore/modal-learn-more';
import { defuneButton } from '../cocktailspage/getaddremovebutton';
import { getFavouriteDrinks } from '../localstorage/localstorageforcocktail';
import { createPage } from '../cocktailspage/getcocktailspage';
const { favoritesList, favoritesTitle, favoriteSearchItem, paginationBlock } =
  refs;

export function searchInFavCocktails(name) {
  // attachFavouriteClickEvents();
  // attachEvents();
  try {
    const response = getFavouriteDrinks();
    let data = [];
    for (let item of response) {
      if (item.strDrink.toLowerCase().includes(name.toLowerCase())) {
        data.push(item);
      }
    }
    if (data.length >0) {
      let list = 'favoritesList';
      createPage(data, list);
      return
    }
    favoritesTitle.textContent = `${name} - is not in your favorites cocktails`;
    // favoritesList.classList.add('is-hidden');
    // favoriteSearchItem.classList.remove('is-hidden');
    // favoritesTitle.textContent = 'Searching results';
    // paginationBlock.classList.add('is-hidden');
    // favoriteSearchItem.innerHTML = `<a class="cocktail-link" href="#" data-modal-open>
    //             <img src="${item.strDrinkThumb}" class="fav-cocktails__img" alt=${
    //   item.strDrink
    // } cocktail" data-id="${item.idDrink}">
    //           </a>
    //           <h3 class="fav-cocktails__item-title">${item.strDrink}</h3>
    //           <div class="fav-cocktails__buttons">
    //               <button type="button" class="learnMore" data-id="${
    //                 item.idDrink
    //               }" data-modal-open>Learn more</button>
    //               ${defuneButton(item.idDrink, item.strDrink, item.strDrinkThumb)}
    //           </div>`;

    // return;

    // else {
    //   favoritesTitle.textContent = `${name} - is not in your favorites cocktails`;
    // }
  } catch (error) {
    console.log(error);
  }
}
