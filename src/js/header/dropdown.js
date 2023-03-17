import { refs } from '../refs';
const { bodyOn, dropDownBtn, dropDownItems,dropDownItemsM,  dropDownBtnM} = refs;

function onClickDropdownOff(evt) {
  if (evt.target.closest('.dropbtn')) {
    return;
  }
  dropDownItems.classList.remove('show');
  bodyOn.removeEventListener('click', onClickDropdownOff);
}

function onClickDropdownOn() {
  dropDownItems.classList.toggle('show');
  bodyOn.addEventListener('click', onClickDropdownOff);
}
function onClickDropdownOnM() {
  console.log('1')
  dropDownItemsM.classList.toggle('show');
  bodyOn.addEventListener('click', onClickDropdownOff);
}

dropDownBtn.addEventListener('click', onClickDropdownOn);
dropDownBtnM.addEventListener('click', onClickDropdownOnM);