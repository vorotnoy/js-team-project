import { refs } from '../refs';
const { checkboxOn, bodyOn, clrwh, clror, clrgr, bgclr } = refs;

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
