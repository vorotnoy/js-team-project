import {refs} from '../global/refs'

const {modal} = refs

export function closeModalOnBtn (){
    modal.classList.add('is-hidden');
}

export function closeModalOnBody(evt) {
if (evt.target.classList.contains('backdrop')){
    modal.classList.add('is-hidden');
}
}


