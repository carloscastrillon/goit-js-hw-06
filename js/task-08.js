const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', validateForm);

function validateForm(event){
    event.preventDefault();
    
    const formElements = event.currentTarget.elements; 
    const email = formElements.email.value;
    const password = formElements.password.value;
    
    if (email == '' || password == '') {
        alert("Todos los espacios deben ser rellenados!");
        loginForm.reset();
        return false;
    }
    
    console.log("email =" + email + " Password= " + password);
    
    loginForm.reset();

}
