/** add your listiener here */
export const refs = {
  cocktailsList: document.querySelector('ul.cocktails-list'),
  selectMenu: document.querySelector('#select__menu'),
  selectBtn: document.querySelector('#select__btn'),
  alphabet: document.querySelector('#alphabet'),
  dropDownBtn: document.querySelector('.dropbtn'),
  dropDownBtnMob: document.querySelector('.dropbtn-mob'),

  dropDownItems: document.querySelector('.js-dropdown-menu'),
  dropDownItemsMob: document.querySelector('.js-dropdown-menu-mob'),
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
  inputFormBurger: document.querySelector('.search__form.mob'),
  btnSearchForm: document.querySelector('.search__btn'),
  btnSearchFormBurger: document.querySelector('.search__btn.burger'),

  favoritesList: document.querySelector('.fav-cocktails__list'),
  favoritesTitle: document.querySelector('.fav-cocktails__title'),

  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),

  galleryEl: document.querySelector(`.gallery`),
  prewButton: document.querySelector('.prew-button'),
  nextButton: document.querySelector('.next-button'),
  ulTag: document.querySelector('.pagination-list'),
  pagContainer: document.querySelector('.pagination'),
  title: document.querySelector('.cocktails-title'),

  favoriteSearchItem: document.querySelector('.fav-cocktails__item'),
  paginationBlock: document.querySelector('.pagination'),

  favNococktails: document.querySelector('.fav-nofav__cock'),
  favNoingr: document.querySelector('.fav-nofav__ingr'),

  toTopButton: document.querySelector('.to-top'),
};
