const background = document.querySelector(".background");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const button = document.querySelectorAll(".button");

burger.addEventListener("click", function () {
  menu.classList.toggle("menu-hide");
});

button.forEach(function (item) {
  item.addEventListener("click", function (event) {
    background.removeAttribute("class");
    background.classList.add(event.target.classList[1]);
    menu.classList.toggle("menu-hide");
  });
});
