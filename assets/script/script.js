const loadingsection = document.querySelector("#loading");

window.addEventListener("load", () => {
  setTimeout(() => {
    loadingsection.style.display = "none";
  }, 5000);
});
