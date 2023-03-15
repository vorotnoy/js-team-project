import {refs} from '../refs'
const {checkboxOn, bodyOn} =refs
/** change theme */
function checkBtn (){
    if (checkboxOn.checked){
        bodyOn.style.backgroundColor = "black";
    }
    else{
        bodyOn.style.backgroundColor = "white"
    }
}

checkboxOn.addEventListener('click', checkBtn)