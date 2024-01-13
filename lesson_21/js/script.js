'use strict';

window.addEventListener('DOMContentLoaded', () => {

  const isMobile = window.matchMedia(
    '(pointer: coarse) and (max-width: 1100px)'
  ).matches;

  if (isMobile) {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const burgerIcon = document.querySelector('.burger-menu');
    const menuLinks = document.querySelectorAll('.menu__link');



    // const emptyDiv = document.createElement('div');


    burgerIcon.addEventListener('click', toggleHamburger);
    overlay.addEventListener('click', toggleHamburger);

    menuLinks.forEach((link) => {
      link.addEventListener('click', toggleHamburger);
    });

    function toggleHamburger() {
      menu.classList.toggle('open');
      burgerIcon.classList.toggle('open');
      if (menu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }


  // Swiper

  const swiper = new Swiper('.swiper', {
    // Optional parameter
    lazy: true,
    // If we need pagination
    pagination: {
      el: '.slider-swiper__pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const feedbackSwiper = new Swiper('.feedback__swiper', {
    // Optional parameter
    slidesPerView: 3,
    spaceBetween: 23,
    // If we need pagination
    pagination: {
      el: '.feedback__pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      630: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 23,
      },
    },
  });

});


