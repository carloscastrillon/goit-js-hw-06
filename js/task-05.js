const nameI = document.querySelector('#name-input');
const nameO = document.querySelector('#name-output');


const validate = () =>{
    if (nameI.value.length > 0) {
        nameO.textContent = nameI.value;
    } else {
        nameO.textContent="Anonimo";
    }
};

nameI.addEventListener("input", validate);