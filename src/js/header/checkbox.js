import { refs } from '../refs';
const { checkboxOn, bodyOn } = refs;

const clrwh = document.querySelectorAll('.js-changeclrwh');
const clror = document.querySelectorAll('.js-changeclror');
const clrgr = document.querySelectorAll('.js-changeclrgr');
const bgclr = document.querySelector('.js-changebgrclr');

/** change theme */
function checkBtn() {
  if (checkboxOn.checked) {
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
    bodyOn.classList.toggle('js-bgcblack');
    bgclr.classList.toggle('js-bgcblack');
    clror.forEach(item => {
      item.classList.toggle('js-colororange');
    });
    clrgr.forEach(item => {
      item.classList.toggle('js-colorgray');
    });
  }
}

checkboxOn.addEventListener('click', checkBtn);
