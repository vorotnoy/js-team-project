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