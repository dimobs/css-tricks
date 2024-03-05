const button = document.querySelector(".button");

button.addEventListener("click", () => {
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
    button
      .querySelector("i")
      .classList.replace("bx-cloud-download", "bx-check-circle");
    button.querySelector("span").textContent = "Completed";

    setTimeout(() => {
      button
        .querySelector("i")
        .classList.replace("bx-check-circle", "bx-cloud-download");
      button.querySelector("span").textContent = "Download Again";
    }, 3000);
  }, 6000);
});