import { refs } from '../refs';
const { bodyOn, dropDownBtn, dropDownItems } = refs;

function onClickDropdownOff(evt) {
  if (evt.target.closest('.dropbtn')) {
    return;
  }
  dropDownItems.classList.remove('show');
  bodyOn.removeEventListener('click', onClickDropdownOff);
}

function onClickDropdownOn() {
  console.log('1')
  dropDownItems.classList.toggle('show');
  bodyOn.addEventListener('click', onClickDropdownOff);
}

dropDownBtn.addEventListener('click', onClickDropdownOn);
