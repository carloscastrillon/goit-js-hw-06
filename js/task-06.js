const validationInput = document.querySelector('#validation-input');


const validateLenght = () =>{
    let inputLenght =  validationInput.value.length;
    let minLenght = validationInput.dataset.length;
    

    if (inputLenght < minLenght) {
        validationInput.style.borderColor = "#f44336";
    } else {
        validationInput.style.borderColor = "#4caf50";
    }

};

validationInput.addEventListener('blur', validateLenght);