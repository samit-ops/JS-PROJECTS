const form = document.querySelector("#signupForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput =
  document.querySelector("#confirmPassword");

const termsInput = document.querySelector("#terms");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError =
  document.querySelector("#confirmPasswordError");

const termsError = document.querySelector("#termsError");
const successMessage =
  document.querySelector("#successMessage");

  // form validation part 

  form.addEventListener("submit", function (event){
    event.preventDefault();
     
    clearErrors();

    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    //name validation

    if(name ===""){
        nameError.textContent = "Name is required";
        isValid = false;
    }else if(name.length < 3){
        nameError.textContent = "Name must be at least 3 characters long";
        isValid = false;
    }

    //email validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email ===""){
        emailError.textContent = "email is required:"
        isValid = false;
    }else if(!emailPattern.test(email)){
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    //password validation

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if(password ===""){
        passwordError.textContent = "Password is requires";
        isValid = fale;
    }else if(!passwordPattern.test(password)){
        passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character";
        isValid = false;
    }

    //confirm password validation

    if(confirmPassword ===""){
        confirmPasswordError.textContent = "Please confirm your password";
        isValid = false;
    }else if(confirmPassword !== password){
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }
    //terms and conditions validation

    if(!termsInput.checked){
        termsError.textContent = "You must agree to the terms and conditions";
        isValid = false;
    }

    //final result

    if(isValid){
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    }
  });
// ham isse use kr rhe h taaki dobara form submit krne pr p tag ke jo erros wale messags h unhe hta ske 
  function clearErrors(){
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    termsError.textContent = "";
    successMessage.textContent = "";
  }
