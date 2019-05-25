// wow -js
new WOW().init();

options = {
  attribute:  'data-delighter',
  classNames: ['delighter', 'started', 'ended'],
  start:      0.8, // default start threshold
  end:        0.8, // default end threshold
  autoInit:   true  // initialize when DOMContentLoaded
}

new Vivus("svg", { duration: 150 });

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: -30,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});