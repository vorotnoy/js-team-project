import {refs} from "../refs"

const {bodyOn,dropDownBtn, dropDownItems } = refs

function onClickDropdownOff(evt){
   (evt.target.classList).forEach((item)=>{
    console.log(item)
    if (item !== "dropbtn" && dropDownItems.classList.contains("show")
    ){
        dropDownItems.classList.remove("show")
   }
   })
}
function onClickDropdownOn (){
    dropDownItems.classList.toggle("show");    
    bodyOn.addEventListener('click', onClickDropdownOff)
}

dropDownBtn.addEventListener('click', onClickDropdownOn)

