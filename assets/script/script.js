const loader = document.querySelector("#loader");

ScrollReveal({
  reset: true,
  duration: 2000,
}).reveal(".header-txt");

ScrollReveal({
  reset: true,
  duration: 1000,
}).reveal(".hero-para");

ScrollReveal({
  reset: true,
  duration: 1500,
}).reveal(".button");

ScrollReveal({
  reset: true,
  duration: 2500,
  interval: 200,
}).reveal(".logo");

ScrollReveal({
  reset: true,
  duration: 2500,
}).reveal(".abt-txt");

ScrollReveal({
  reset: true,
  interval: 200,
}).reveal(".abo-d");

window.addEventListener("load", () => {
  loader.style.display = "none";
});
