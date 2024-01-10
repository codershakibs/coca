var splide = new Splide('.splide', {
    perPage: 2,
    gap: 30,
    rewind: true,
    breakpoints: {
        350: { perPage: 1, gap: '1rem' },
        640: { perPage: 2, gap: 0 },
    },
});

splide.mount();


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },


});
