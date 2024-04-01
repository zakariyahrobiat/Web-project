login = document.getElementById("login");
showPassword = document.getElementById("show");

loginEmail = document.getElementById("loginEmail");
loginPassword = document.getElementById("loginPassword");
login.addEventListener("submit", (e) => {
  console.log("hoe");
  e.preventDefault();
  checkInput();
});
function checkInput() {
  loginEmailValue = loginEmail.value;
  loginPasswordValue = loginPassword.value;
  if (loginEmailValue === "") {
    setError(loginEmail, "email cannot be blank");
  }
  //   else if (loginEmailValue !== emailValue) {
  //     setError(loginEmail, "email incorrect");
  //   }
  else {
    setSucess(loginEmail);
  }
  if (loginPasswordValue === "") {
    setError(loginPassword, "password cannot be blank");
  }
  // else if (loginPasswordValue !== passwordValue) {
  //   setError(loginPassword, "password incorrect");
  // }
  else {
    setSucess(loginPassword);
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
showPassword.addEventListener("click", () => {
  if (loginPassword.type === "password") {
    loginPassword.type = "text";
  } else {
    loginPassword.type = "password";
  }
});
