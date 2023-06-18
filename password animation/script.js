const inputIcon = document.querySelector(".input__icon"); //span
const inputPassword = document.querySelector(".input__field"); //input

inputIcon.addEventListener("click", () => {
  inputIcon.classList.toggle("ri-eye-off-line");
  inputIcon.classList.toggle("ri-eye-line");
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
});