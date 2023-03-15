const dropDownBtn = document.querySelector('.dropbtn')
const dropDownItems = document.querySelector('.dropdown-menu')
const bodyOn = document.querySelector('body')

function onClickDropdownOff(evt){
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
bodyOn.addEventListener('click', onClickDropdownOff)