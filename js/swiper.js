var swiper = new Swiper(".myyySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    autoplay: {
        delay: 3500,
    },
    loop: true,
});

var swiper = new Swiper(".sale_sec", {
    slidesPerView: 5,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});
