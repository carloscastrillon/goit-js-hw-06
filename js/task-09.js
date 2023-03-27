function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyPage = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', changeColor);

function changeColor(){
  let color = getRandomHexColor();
  bodyPage.style.backgroundColor = color;
  spanColor.textContent = color;
}
