import { refs } from '../global/refs';
const {
  burgerOn,
  checkboxBurgerOn,
  checkboxOn,
  bodyOn,
  clrwh,
  clror,
  clrgr,
  bgclr,
} = refs;

/** change theme */
function checkBtn(event) {
  checkboxOn.removeEventListener('click', checkBtn);
  checkboxBurgerOn.removeEventListener('click', checkBtn);
  if (event) {
    if (event.target.id == checkboxOn.id) {
      checkboxBurgerOn.checked = event.target.checked;
    } else {
      checkboxOn.checked = event.target.checked;
    }
  }
  updateStyle();

  localStorage.setItem('darkTheme', JSON.stringify(checkboxOn.checked));
  checkboxOn.addEventListener('click', checkBtn);
  checkboxBurgerOn.addEventListener('click', checkBtn);
}

checkboxOn.addEventListener('click', checkBtn);
checkboxBurgerOn.addEventListener('click', checkBtn);

let useDarkTheme = JSON.parse(localStorage.getItem('darkTheme')) ?? false;
if (useDarkTheme) {
  checkboxOn.checked = true;
  checkboxBurgerOn.checked = true;
  checkBtn();
}

function updateStyle() {
  burgerOn.classList.toggle('js-bgcblack');
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
