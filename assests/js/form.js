form = document.getElementById("form");

email = document.getElementById("email");
confirmEmail = document.getElementById("confirmEmail");
password = document.getElementById("password");
confirmPassword = document.getElementById("confirmPassword");
console.log(confirmPassword);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  confirmInput();
});
function confirmInput() {
  emailValue = email.value;
  confirmEmailValue = confirmEmail.value;
  passwordValue = password.value;
  confirmPasswordValue = confirmPassword.value;

  if (emailValue === "") {
    setError(email, "email cannot be blank");
  } else {
    setSucess(email);
  }
  if (confirmEmailValue === "") {
    setError(confirmEmail, "confirm your email");
  } else if (confirmEmailValue !== emailValue) {
    setError(confirmEmail, "email does not match");
  } else {
    setSucess(confirmEmail);
  }
  if (passwordValue === "") {
    setError(password, "password cannot be blank");
  } else {
    setSucess(password);
  }
  if (confirmPasswordValue === "") {
    setError(confirmPassword, "password cannot be blank");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "password does not match");
  } else {
    setSucess(confirmPassword);
  }
}
function setError(input, message) {
  formControl = input.parentElement;
  small = formControl.querySelector("small");
  small.innerHTML = message;
  formControl.classList = "form-control error";
}
function setSucess(input) {
  formControl = input.parentElement;
  formControl.classList = "form-control success";
}
