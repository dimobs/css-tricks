const chk = document.querySelector('.check');
const pwd = document.querySelector('.pass');

chk.onchange = () => {
    pwd.type = chk.checked ? "text" : "password"
}
