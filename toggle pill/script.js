const btn = document.querySelector("button")
const body = document.querySelector(".body")

btn.addEventListener("click", () => {
    body.classList.toggle("show")
})

const pwd = document.querySelector('#pwd');
const chk = document.querySelector('#chk');

chk.onchange = () => {
pwd.type = chk.checked ? "text" : "password"
pwd.style.backgroundColor = chk.checked ? "red" : ""
}
