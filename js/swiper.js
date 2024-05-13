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
    slidesPerView: 'auto', // عرض عدد الشرائح تلقائيًا بناءً على عرض العناصر
    spaceBetween: 10, // المسافة بين الشرائح
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        // تعديل الإعدادات للهواتف المحمولة
        768: {
            slidesPerView: 1, // عرض شريحة واحدة في كل مرة على الهواتف
            spaceBetween: 0 // إزالة المسافة بين الشرائح
        }
    }
});
