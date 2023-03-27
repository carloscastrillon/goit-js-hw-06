const decrementBtn = document.querySelector('[data-action="decrement"]');
const  incrementBtn= document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

const decrementClick = () =>{counterValue.textContent -= 1};
const incrementClick = () =>{counterValue.textContent  =  parseInt(counterValue.textContent) + 1};

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);