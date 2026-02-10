const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const formTitle = document.getElementById("form-title");

document.getElementById("show-register").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  formTitle.textContent = "Register";
});

document.getElementById("show-login").addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
  formTitle.textContent = "Login";
});
