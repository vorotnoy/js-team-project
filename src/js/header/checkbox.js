import { refs } from '../refs';
const { burgerOn, checkboxBurgerOn, checkboxOn, bodyOn, clrwh, clror, clrgr, bgclr } = refs;

/** change theme */
function checkBtn() {
  if (checkboxOn.checked) {
    burgerOn.classList.toggle('js-bgcblack')
    bodyOn.classList.toggle('js-bgcblack');
    bgclr.classList.toggle('js-bgcblack');
    clrwh.forEach(item => {
      item.classList.toggle('js-colorwhite');
    });
    clror.forEach(item => {
      item.classList.toggle('js-colororange');
    });
    clrgr.forEach(item => {
      item.classList.toggle('js-colorgray');
    });
  } else {
    burgerOn.classList.toggle('js-bgcblack')
    bodyOn.classList.toggle('js-bgcblack');
    bgclr.classList.toggle('js-bgcblack');
    clrwh.forEach(item => {
      item.classList.toggle('js-colorwhite');
    });
    clror.forEach(item => {
      item.classList.toggle('js-colororange');
    });
    clrgr.forEach(item => {
      item.classList.toggle('js-colorgray');
    });
  }
}

checkboxOn.addEventListener('click', checkBtn);
checkboxBurgerOn.addEventListener('click', checkBtn);
