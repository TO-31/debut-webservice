"use strict";
const nav = document.getElementsByClassName("nav")
const navBurgerMenu = document.getElementsByClassName("nav__burger-menu");


navBurgerMenu[0].addEventListener("click", () => {
  nav[0].classList.toggle("nav__burger-menu_open");
})