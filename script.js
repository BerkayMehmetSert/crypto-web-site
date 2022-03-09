const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("hamburger-active");
  menu.classList.toggle("menu-active");
});
