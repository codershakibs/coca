var splide = new Splide('.splide', {
    perPage: 2,
    gap: 30,
    rewind: true,
});

splide.mount();


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },

});