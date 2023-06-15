/** add your listiener here */
export const refs = {
  selectMenu: document.querySelector('#select__menu'),
  selectBtn: document.querySelector('#select__btn'),
  alphabet: document.querySelector('#alphabet'),

  dropDownBtn: document.querySelector('.dropbtn'),
  dropDownBtnMob: document.querySelector('.dropbtn-mob'),
  dropDownItems: document.querySelector('.js-dropdown-menu'),
  dropDownItemsMob: document.querySelector('.js-dropdown-menu-mob'),

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

  openModalBtn: document.querySelectorAll('.js-data-modal-open'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  closeModalIngBtn: document.querySelector('.modal-ingredient-close'),  
  modal: document.querySelector('[data-modal]'),
  modal_ingredients:document.querySelector('[data-modal-ingredients]'),
  modalContainer: document.querySelector('[data-modal] .container'),
  galleryEl: document.querySelector(`.modal-gallery`),
  contentEl: document.querySelector(`.content`),

  prewButton: document.querySelector('.prew-button'),
  nextButton: document.querySelector('.next-button'),
  ulTag: document.querySelector('.pagination-list'),
  pagContainer: document.querySelector('.pagination') /*** */,
  paginationBlock: document.querySelector('.pagination') /*** */,

  title: document.querySelector('.cocktails-title') /*** */,
  cocktailsTitle: document.querySelector('.cocktails-title') /*** */,
  noCocktails: document.querySelector('.no-cocktails__wrapper'),
  cocktailsList: document.querySelector('ul.cocktails-list'),
  favoritesList: document.querySelector('.fav-cocktails__list'),
  favoritesTitle: document.querySelector('.fav-cocktails__title'),
  favoriteSearchItem: document.querySelector('.fav-cocktails__item'),
  favNococktails: document.querySelector('.fav-nofav__cock'),
  favNoingr: document.querySelector('.fav-nofav__ingr'),
  favIngredientsList: document.querySelector('.fav-ingr__list'),

  toTopButton: document.querySelector('.to-top'),

  authorization: document.querySelector('#googleAuthBtn'),
  linkToSignOut: document.querySelector('#js-sign-out'),
};
