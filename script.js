const stars = Array.from(document.querySelectorAll(".feedback__star"));

const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  effect: "cards",
  grabCursor: true,
  keyboard: true,
  loop: true,
  mousewheel: true,
  cardsEffect: {
    slideShadows: false,
    rotate: false,
    perSlideOffset: 10,
  },
});
