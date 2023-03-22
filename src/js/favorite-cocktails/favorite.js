'use strict';
// export default updateSize;
import { attachEvents } from '../modallearnmore/modal-learn-more';
import {
  renderAddRemoveDrinkButton,
  attachFavouritesRemoveClickEvents,
} from '../favourites';
import { refs } from '../global/refs';
import { viewportWidthCheck } from '../global/viewportsize';
import { pagination } from '../paginations/pagination';
import {createPage} from '../cocktailspage/getcocktailspage'
export let getValueC = [];

const {
  favoritesList,
  favoritesTitle,
  favoriteSearchItem,
  prewButton,
  nextButton,
  pagContainer,
  favNococktails,
} = refs;

//use function updateSize to render elements on click
export function initializeFavourites() {
  favoriteSearchItem.classList.add('is-hidden');

  const getDataFromlocalStorage = JSON.parse(
    localStorage.getItem('favorite-cocktail')
  );

  if (getDataFromlocalStorage === null ) {
    favoritesList.innerHTML = '';
    favNococktails.textContent = "You haven't added any favorite cocktails yet";
    favNococktails.classList.add('is-hidden');
    prewButton.classList.add('is-hiden');
    nextButton.classList.add('is-hiden');
    return;
  }
  let list = 'favoritesList'
  console.log('give', getDataFromlocalStorage)
  createPage(getDataFromlocalStorage, list)
  
}

// function favoritesMarkup() {
//   const cocktailsArr = JSON.parse(localStorage.getItem('favorite-cocktail'));


//   let arr = cocktailsArr.slice(start, end);

//   favoritesList.innerHTML = arr
//     .map(
//       e =>
//         `<li class="fav-cocktails__item">
//             <a class="cocktail-link" href="#" data-modal-open>
//               <img src="${e.img}" class="fav-cocktails__img" alt=${
//           e.name
//         } cocktail" data-id="${e.id}">
//             </a>
//             <h3 class="fav-cocktails__item-title">${e.name}</h3>
//             <div class="fav-cocktails__buttons">
//                 <button type="button" class="learnMore" data-id="${
//                   e.id
//                 }" data-modal-open>Learn more</button>
//                 ${renderAddRemoveDrinkButton(e.id, e.name, e.img)}
//             </div>
//         </li>`
//     )
//     .join('');
// }
