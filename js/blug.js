/*global $, document,*/

$(document).scroll(function () {
    "use strict";
    
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
});



var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
      pagination: {
        el: '.swiper-pagination',
      },
    });