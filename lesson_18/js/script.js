"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');
  const burgerIcon = document.querySelector(".burger-menu");
  const menuLinksParent = document.querySelectorAll('.menu__item--parent');
  const subMenuItems = document.querySelectorAll('.sub-menu__item');

  burgerIcon.addEventListener("click", toggleHamburger);
  overlay.addEventListener('click', toggleHamburger);

  subMenuItems.forEach((subLink) => {
    subLink.addEventListener('click', toggleHamburger);
  });

  menuLinksParent.forEach((link) => {
    link.addEventListener('click', toggleSubmenu);
  })

  function toggleHamburger() {
    menu.classList.toggle('open');
  }

  function toggleSubmenu(e) {
    menuLinksParent.forEach((link) => {
      link.classList.remove('open');
    })
    e.currentTarget.classList.toggle('open');

  }
});