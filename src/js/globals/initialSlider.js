import Swiper from 'swiper/js/swiper.js';

var swiper = new Swiper('.big-slider .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

var reviews = new Swiper('.reviews__slider', {
  pagination: {
    el: '.swiper-pagination',
  },
});