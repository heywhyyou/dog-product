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

/*

// 📫 Open Modal
const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

btnsOpenModal.forEach(item => item.addEventListener("click", openModal));

// 📪 Close Modal Actions
const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

// Close modal, button
btnCloseModal.addEventListener("click", closeModal);

// Close modal, overlay
overlay.addEventListener("click", closeModal);

// Close modal, ESC
document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

*/
