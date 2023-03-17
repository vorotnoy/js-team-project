/** add your listiener here */
export const refs = {
  cocktailsList: document.querySelector('ul.cocktails-list'),
  selectMenu: document.querySelector('#select__menu'),
  selectBtn: document.querySelector('#select__btn'),
  alphabet: document.querySelector('#alphabet'),
  dropDownBtn: document.querySelector('.dropbtn'),
  dropDownItems: document.querySelector('.js-dropdown-menu'),
  cocktailsTitle: document.querySelector('.cocktails-title'),
  noCocktails: document.querySelector('.no-cocktails__wrapper'),

  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),

  checkboxBurgerOn: document.querySelector('#js-checkbox-burger'),
  checkboxOn: document.querySelector('.switch__input'),
  bodyOn: document.querySelector('body'),
  burgerOn: document.querySelector('.js-menu-container'),
  clrwh: document.querySelectorAll('.js-changeclrwh'),
  clror: document.querySelectorAll('.js-changeclror'),
  clrgr: document.querySelectorAll('.js-changeclrgr'),
  bgclr: document.querySelector('.js-changebgrclr'),
  inputForm: document.querySelector('.search__form'),

  favoritesList: document.querySelector('.fav-cocktails__list'),
  loadCocktailsBtn: document.querySelector('.loadCocktails'),

  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),

  galleryEl: document.querySelector(`.gallery`),
};
