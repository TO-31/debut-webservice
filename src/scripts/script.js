"use strict";
const navContainer = document.getElementById("nav__container");
const navBurgerMenu = document.getElementById("nav__burger-menu");

navBurgerMenu.addEventListener("click", () => {
  navContainer.classList.toggle("burger-menu-open");
})