var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 3000, // Intervalo de 3 segundos
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// mySwiperLogo
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 7,
  spaceBetween: 5,
  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 5,
    },
  },
});

// mySwiperEbookStar
var swiper = new Swiper(".mySwiperEbookStar", {
  slidesPerView: 2,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 4, 
      spaceBetween: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});