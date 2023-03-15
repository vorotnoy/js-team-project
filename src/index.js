import { pourCocktails } from "./js/mainblock/mainblock";
import { viewportWidthCheck } from "./js/mainblock/mainblock";
import { accumulateCocktails } from "./js/mainblock/mainblock";
import { VIEWPORT_SIZES } from "./js/const";

pourCocktails(accumulateCocktails(viewportWidthCheck(VIEWPORT_SIZES)));

const checkboxOn = document.querySelector('#js-checkbox')
const bodystyle = document.querySelector('body')

function checkBtn (){
    if (checkboxOn.checked){
        bodystyle.style.backgroundColor = "black";
    }
    else{
        bodystyle.style.backgroundColor = "white"
    }
}

checkboxOn.addEventListener('click', checkBtn)


const dropDownBtn = document.querySelector('.dropbtn')
const dropDownItems = document.querySelector('.is-hidden')

function onClickDropdownOff(evt){
    console.log(evt.target.className)
    if (evt.target.className !== "js-change-color"
    && dropDownItems.classList.contains("show")
    ){
        dropDownItems.classList.remove("show")
   }
}

function onClickDropdownOn (){
    dropDownItems.classList.toggle("show")
}

dropDownBtn.addEventListener('click', onClickDropdownOn)
bodystyle.addEventListener('click', onClickDropdownOff)