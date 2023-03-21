import * as icons from '../images/svg/symbol-defs.svg';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { readFavoriteDrinks, writeFavoriteDrinks, deleteFavoriteDrink, userIdFunc } from './firebase';
import { update } from 'firebase/database';
import { getDatabase, ref, set, get, child, update, remove, onValue } from "firebase/database";


const auth = getAuth();

function getFavouriteDrinks() {
  return promise = new Promise((resolve, reject) => {
    const favDrinksArr = [];
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log('hello i am authorized,', uid);
        const db = getDatabase();
        const favoriteDrinksRef = ref(db, `users/${uid}/favoriteDrinks`);
        onValue(favoriteDrinksRef, (snapshot) => {
          const data = snapshot.val();
          for (const key in data) {
            favDrinksArr.push(data[key]);
          };
        });
        // ...
      } else {
        // User is signed out
        // ...
        console.log('hello i am NOT authorized');
        const favDrinksLocal = JSON.parse(localStorage.getItem('favorite-cocktail')) ?? [];
        favDrinksLocal.forEach(favDrink => favDrinksArr.push(favDrink));
        // console.log(favDrinksArr);
      }
    });
    resolve(favDrinksArr);
  });
};

// getFavouriteDrinks().then(drinks => console.log(drinks));

function setFavouriteDrinks(favourites) {
  localStorage.setItem('favorite-cocktail', JSON.stringify(favourites));
}

export function addDrink(id, name, image) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      if (!getDrink(id)) {
        let favouriteDrink = { id: id, name: name, img: image };
        getFavouriteDrinks().then(favourites => {
          favourites.push(favouriteDrink);
          setFavouriteDrinks(favourites);
          // console.log(favourites);
          writeFavoriteDrinks(uid, favourites);
        });
      }
    } else {
      console.log(`user is signed out`);
      if (!getDrink(id)) {
        let favouriteDrink = { id: id, name: name, img: image };
        getFavouriteDrinks().then(favourites => {
          favourites.push(favouriteDrink);
          setFavouriteDrinks(favourites);
          console.log(favourites);
        });
      }
    };
  });
}

export function removeDrink(id) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      console.log(`hello i am deleteFavoriteDrink for ${uid}`);
      console.log(`i delete id: ${id}`)
      deleteFavoriteDrink(uid, id);
    } else {
      getFavouriteDrinks().then(favourites => {
        let updatedFavourites = [];
        for (let i = 0; i < favourites.length; i++) {
          let drink = favourites[i];
          if (drink.id != id) {
            updatedFavourites.push(drink);
          }
        }
        setFavouriteDrinks(updatedFavourites);
      });
    };
  });
};

export function getDrink(id) {
  getFavouriteDrinks().then(favouriteDrinks => {
    for (let drink of favouriteDrinks) {
      if (drink.id === id) {
        console.log(id, drink.id);
        return drink;
      };
    };
  });
};

export function renderAddRemoveDrinkButton(id, name, image) {
  console.log('hello i am renderAddRemoveDrinkButton(id, name, image)');
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
  let updatedFavourites = [];
  for (let i = 0; i < favourites.length; i++) {
    let ingredient = favourites[i];
    if (ingredient.name != name && ingredient.type != type) {
      updatedFavourites.push(ingredient);
    }
  }
  setFavouriteIngredients(updatedFavourites);
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

    if (favourite && favouriteButton.classList.contains("addTo") || (!favourite && favouriteButton.classList.contains("removeFrom"))) {
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

export function attachFavouriteClickEvents() {
  let buttons = document.querySelectorAll('.favourite');
  for (let button of buttons) {
    button.onclick = favouritesClickEvent;
  }
}
