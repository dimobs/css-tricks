document.getElementById("search").oninput = function () {
    const p = document.getElementById('card');
    const r = new RegExp(`(${this.value})`, "gi");
    p.innerHTML = p.textContent.replace(r, '<mark>$1</mark>')
}