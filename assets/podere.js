//settings slider start
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        color: "black"
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    }
});