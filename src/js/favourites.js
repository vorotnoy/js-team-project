import * as icons from '../images/svg/symbol-defs.svg';
import { initializeFavourites } from './favorite-cocktails/favorite';
import { initializeFavouritesIng } from './favorite-ingredients/favorite-ingredients';

//---------------------------------Вступ до роботи з бекендом-------------------------------------------//
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { readFavoriteDrinks, writeFavoriteDrinks, deleteFavoriteDrink, userIdFunc } from './firebase';
// import { getDatabase, ref, set, get, child, update, remove, onValue } from "firebase/database";

// const auth = getAuth();

// onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         // console.log('hello i am authorized,', uid);
//         const dbRef = ref(getDatabase());
//         await get(child(dbRef, `users/${uid}/favoriteDrinks`)).then(snapshot => {
//         if (snapshot.exists()) {
//             localStorage.setItem('favorite-cocktail', JSON.stringify(Object.values(snapshot.val())));
//             // window.location.reload();
//             // window.location.replace('/');
//             } else {
//                 console.log("No data available");
//             }
//         }).catch(error => console.log(error));
//         // ...
//       } else {
//           alert('please authorize by click on the user icon');
//       }
//     });
//---------------------------------Вступ до роботи з бекендом-------------------------------------------//

export function getFavouriteDrinks() {
  return JSON.parse(localStorage.getItem('favorite-cocktail')) ?? [];
}

function setFavouriteDrinks(favourites) {
  localStorage.setItem('favorite-cocktail', JSON.stringify(favourites));
}

export function addDrink(id, name, image) {
  if (!getDrink(id)) {
    let favouriteDrink = { id: id, name: name, img: image };
    let favourites = getFavouriteDrinks();
    favourites.push(favouriteDrink);
    setFavouriteDrinks(favourites);
  }
}

export function removeDrink(id) {
  let favourites = getFavouriteDrinks();
  let updatedFavourites = [];
  for (let i = 0; i < favourites.length; i++) {
    let drink = favourites[i];
    if (drink.id != id) {
      updatedFavourites.push(drink);
    }
  }
  setFavouriteDrinks(updatedFavourites);
}

export function getDrink(id) {
  for (let drink of getFavouriteDrinks()) {
    if (drink.id == id) {
      return drink;
    }
  }
}

export function renderAddRemoveDrinkButton(id, name, image) {
  if (getDrink(id)) {
    return `<button class="favourite removeFrom" data-id="${id}" data-name="${name}" data-image="${image}">Remove
        <svg class="icon-heart-selected">
            <use href="${icons}#heart"></use>
        </svg>
      </button>`;
  }

  return `<button class="favourite addTo" data-id="${id}" data-name="${name}" data-image="${image}">Add to
      <svg class="icon-heart">
        <use href="${icons}#heart"></use>
      </svg>
      </button>`;
}

export function getFavouriteIngredients() {
  return JSON.parse(localStorage.getItem('favorite-ingredient')) ?? [];
}

function setFavouriteIngredients(favourites) {
  localStorage.setItem('favorite-ingredient', JSON.stringify(favourites));
}

export function addIngredient(name, type) {
  if (!getIngredient(name)) {
    let favouriteIngredient = { name: name, type: type };
    let favourites = getFavouriteIngredients();
    favourites.push(favouriteIngredient);
    setFavouriteIngredients(favourites);
  }
}

export function removeIngredient(name, type) {
  let favourites = getFavouriteIngredients();
  favourites.splice(favourites.findIndex((o) => { return o.name === name && o.type === type }), 1);
  setFavouriteIngredients(favourites);
}

export function getIngredient(name) {
  for (let ingredient of getFavouriteIngredients()) {
    if (ingredient.name == name) {
      return ingredient;
    }
  }
}

export function renderAddRemoveIngredientButton(name, type) {
  if (getIngredient(name)) {
    return `<button class="favourite removeFrom" data-name="${name}" data-type="${type}">Remove
        <svg class="icon-heart-selected">
            <use href="${icons}#heart"></use>
        </svg>
      </button>`;
  }

  return `<button class="favourite addTo" data-name="${name}" data-type="${type}">Add to
      <svg class="icon-heart">
        <use href="${icons}#heart"></use>
      </svg>
      </button>`;
}

export function refreshFavouriteButtons(id) {
  let favouriteButton = document.querySelector(`.favourite[data-id="${id}"]`);
  let favourite = getDrink(id);

  if (
    (favourite && favouriteButton.classList.contains('addTo')) ||
    (!favourite && favouriteButton.classList.contains('removeFrom'))
  ) {
    let e = { target: favouriteButton };
    favouritesClickEvent(e);
  }
}

export function favouritesClickEvent(event) {
  let button = event.target;

  if (!button || !button.className || typeof button.className != 'string')
    return;

  if (button.dataset.type) {
    if (button.className && button.className.indexOf('addTo') > 0) {
      addIngredient(button.dataset.name, button.dataset.type);
    } else {
      removeIngredient(button.dataset.name, button.dataset.type);
    }
    button.insertAdjacentHTML(
      'beforebegin',
      renderAddRemoveIngredientButton(button.dataset.name, button.dataset.type)
    );
  } else {
    if (button.className && button.className.indexOf('addTo') > 0) {
      addDrink(button.dataset.id, button.dataset.name, button.dataset.image);
    } else {
      removeDrink(button.dataset.id);
    }
    button.insertAdjacentHTML(
      'beforebegin',
      renderAddRemoveDrinkButton(
        button.dataset.id,
        button.dataset.name,
        button.dataset.image
      )
    );
  }

  button.remove();
  attachFavouriteClickEvents();
}

export function favouritesRemoveClickEvent(event) {
  let button = event.target;

  if (!button || !button.className || typeof button.className != 'string')
    return;

  if (button.dataset.type) {
    removeIngredient(button.dataset.name, button.dataset.type);
  } else {
    removeDrink(button.dataset.id);
  }

  let location = window.location.pathname.split('/').pop();

  if (location === 'cocktails.html') {
    initializeFavourites();
  } else if (location === 'ingredients.html') {
    initializeFavouritesIng();
  }
}

export function attachFavouriteClickEvents() {
  let buttons = document.querySelectorAll('.favourite');
  for (let button of buttons) {
    button.onclick = favouritesClickEvent;
  }
}

export function attachFavouritesRemoveClickEvents() {
  let buttons = document.querySelectorAll('.favourite');

  for (let button of buttons) {
    button.onclick = favouritesRemoveClickEvent;
  }
}