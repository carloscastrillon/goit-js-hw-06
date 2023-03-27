const fontSizeControl = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');
fontSizeControl.addEventListener("input", changeSize);

function changeSize(){
    textToChange.style.fontSize = fontSizeControl.value + "px";
}