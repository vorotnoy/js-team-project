const checkboxOn = document.querySelector('#js-checkbox')

function checkBtn (){
    if (checkboxOn.checked){
        console.log('checked')
    }
    else{
        console.log('not')
    }
}

checkboxOn.addEventListener('click', checkBtn)