var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 1040,
    effect: 'fade',
    loop: true,
    speed: 30,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });