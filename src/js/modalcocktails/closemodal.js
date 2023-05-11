import { refs } from '../global/refs';

const { modal, closeModalBtn } = refs;

export function closeModalOnBtn() {
  removeListener();
}

export function closeModalOnBody(evt) {
  if (evt.target.classList.contains('backdrop')) {
    removeListener();
  }
}

export function removeListener() {
  modal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  closeModalBtn.removeEventListener('click', closeModalOnBtn);
  document.body.removeEventListener('click', closeModalOnBody);
}
