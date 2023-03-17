import { refs } from '../refs';
const { bodyOn, dropDownBtn, dropDownItems,dropDownItemsM,  dropDownBtnM} = refs;

function onClickDropdownOff(evt) {
  if (evt.target.closest('.dropbtn')) {
    return;
  }
  dropDownItems.classList.remove('show');
  // dropDownItemsM.classList.toggle('show');
  bodyOn.removeEventListener('click', onClickDropdownOff);
}

function onClickDropdownOn() {
  dropDownItems.classList.toggle('show');
  bodyOn.addEventListener('click', onClickDropdownOff);
}
function onClickDropdownOnM() {
  dropDownItemsM.classList.toggle('show');
}

dropDownBtn.addEventListener('click', onClickDropdownOn);
// dropDownBtnM.addEventListener('click', onClickDropdownOnM);