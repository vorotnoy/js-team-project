import { refs } from './refs';
import { getValue } from './header/searchbyname';
import { renderAddRemoveDrinkButton } from './favourites';
import { attachEvents } from '../js/modallearnmore/modal-learn-more';
import { attachFavouriteClickEvents } from './favourites';
import { getValueC } from './favorite-cocktails/favorite';

const { prewButton, nextButton, ulTag, cocktailsList, favoritesList } = refs;
let page = 1;
let array = [];
export function pagination(totalPages, page) {
  let liTag = '';
  let thirdPagesAnd = totalPages - 2;
  let thirdPages = page - 2;
  let curentPage = page;
  attachEvents();
  attachFavouriteClickEvents();
  if (totalPages > 6) {
    if (page < 3) {
      thirdPages = 1;
      page = 3;
    }
    if (page > totalPages - 3) {
      page = totalPages - 3;
      thirdPages = page - 2;
    }
    for (let i = thirdPages; i <= page; i++) {
      if (i === curentPage) {
        liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
      } else {
        liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
      }
    }
    liTag += `<li class="pagination-item dot-item"><span>...</span></li>`;
    for (let i = thirdPagesAnd; i <= totalPages; i++) {
      if (i === curentPage) {
        liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
      } else {
        liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
      }
    }
  } else {
    for (let i = 1; i < page; i++) {
      liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
    }
    for (let i = page; i <= totalPages; i++) {
      if (i === page) {
        liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
      } else {
        liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
      }
    }
  }
  ulTag.innerHTML = liTag;
}

function reloadButton(totalPage, page) {
  if (page === 1) {
    prewButton.setAttribute('disabled', 'true');
  } else {
    prewButton.removeAttribute('disabled');
  }
  if (page === totalPage) {
    nextButton.setAttribute('disabled', 'true');
  } else {
    nextButton.removeAttribute('disabled');
  }
}

async function loadMor(event) {
  if (
    event.target.classList.contains('pagination-arrow') ||
    event.target.classList.contains('pagination-number')
  ) {
    page = Number(event.target.textContent);
    array = getValue.length === 0 ? getValueC : getValue;
    if (window.location.pathname === '/cocktails.html') {
      favoritesList.innerHTML = makeFaviritelist(array[page - 1]);
    } else {
      cocktailsList.innerHTML = createListItem(array[page - 1]);
    }
    reloadButton(array.length, page);
    pagination(array.length, page);
  } else {
    return;
  }
}

async function prewList(event) {
  page -= 1;
  array = getValue.length === 0 ? getValueC : getValue;
  if (window.location.pathname === '/cocktails.html') {
    favoritesList.innerHTML = makeFaviritelist(array[page - 1]);
  } else {
    cocktailsList.innerHTML = createListItem(array[page - 1]);
  }

  reloadButton(array.length, page);
  pagination(array.length, page);
}

export async function nextList(event) {
  page += 1;
  array = getValue.length === 0 ? getValueC : getValue;
  if (window.location.pathname === '/cocktails.html') {
    favoritesList.innerHTML = makeFaviritelist(array[page - 1]);
  } else {
    cocktailsList.innerHTML = createListItem(array[page - 1]);
  }

  reloadButton(array.length, page);
  pagination(array.length, page);
}

ulTag.addEventListener('click', loadMor);

prewButton.addEventListener('click', prewList);

nextButton.addEventListener('click', nextList);

function createListItem(data) {
  let cocktailsMarkup = '';
  for (let i = 0; i < data.length; i++) {
    cocktailsMarkup += `
        <li class="cocktail-item">
            <div class="cocktail-card">
                <a class="cocktail-link" href="#" data-modal-open>
                    <img class="cocktail-picture" src="${
                      data[i].strDrinkThumb
                    }" alt="${data[i].strDrink}" data-id="${data[i].idDrink}">
                </a>
                    <p class="cocktail-label">${data[i].strDrink}</p>

                    <div class="cocktail-card-btn-wrapper">
                    <button class="learnMore" data-id="${
                      data[i].idDrink
                    }" data-modal-open>Learn more</button>
                    ${renderAddRemoveDrinkButton(
                      data[i].idDrink,
                      data[i].strDrink,
                      data[i].strDrinkThumb
                    )}
            </div>

            </div>
        </li>
    `;
  }
  return cocktailsMarkup;
}

function makeFaviritelist(data) {
  return data
    .map(
      e =>
        `<li class="fav-cocktails__item">
            <a class="cocktail-link" href="#" data-modal-open>
              <img src="${e.img}" class="fav-cocktails__img" alt=${
          e.name
        } cocktail" data-id="${e.id}">
            </a>
            <h3 class="fav-cocktails__item-title">${e.name}</h3>
            <div class="fav-cocktails__buttons">
                <button type="button" class="learnMore" data-id="${
                  e.id
                }" data-modal-open>Learn more</button>
                ${renderAddRemoveDrinkButton(e.id, e.name, e.img)}
            </div>
        </li>`
    )
    .join('');
}
