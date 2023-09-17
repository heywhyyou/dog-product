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
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // }
});

/*
 <!-- <div class="swiper-controls">
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div> -->
*/

document.querySelector(".stars").addEventListener("click", function (e) {
  console.log(e.target);
});

let userRating = 0;

stars.forEach((item) => {
  item.addEventListener("click", () => {
    const { itemValue } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;
    userRating = itemValue;
  });
});
