const swiper = new Swiper('#swiper-team', {
  loop: true,
  spaceBetween: 15,
  mousewheel: true,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    // when window width is >= 480px
    1175: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1470: {
      slidesPerView: 4,
    }
  },
});
