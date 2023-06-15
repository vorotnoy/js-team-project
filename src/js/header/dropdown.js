import { refs } from '../global/refs';
const {
  dropDownBtnMob,
  bodyOn,
  dropDownBtn,
  dropDownItems,
  dropDownItemsMob,
  dropDownBtnM,
} = refs;

function onClickDropdownOff(evt) {
  if (evt.target.closest('.dropbtn')) {
    return;
  } else if (evt.target.closest('.dropbtn-mob')) {
    return;
  }
  dropDownItems.classList.remove('show');
  dropDownItemsMob.classList.remove('show');
  bodyOn.removeEventListener('click', onClickDropdownOff);
}

export function onClickDropdownOn() {
  dropDownItems.classList.toggle('show');
  dropDownItemsMob.classList.toggle('show');
  bodyOn.addEventListener('click', onClickDropdownOff);
}

dropDownBtn.addEventListener('click', onClickDropdownOn);
dropDownBtnMob.addEventListener('click', onClickDropdownOn);
