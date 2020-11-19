'use strict';

(function () {
  // Обработчик клика для открытия/закрытия блока
  var addTabsClickToggle = function (button, activeClass) {
    button.addEventListener('click', function () {
      button.classList.toggle(activeClass);
    });
  };

  // открытие/закрытие меню в мобильной версии
  var header = document.querySelector('.header');
  var navToggle = document.querySelector('.header button');

  header.classList.remove('header--nojs');
  header.classList.remove('header--opened');
  header.classList.add('header--closed');

  navToggle.addEventListener('click', function () {
    if (header.classList.contains('header--closed')) {
      header.classList.remove('header--closed');
      header.classList.add('header--opened');
    } else {
      header.classList.add('header--closed');
      header.classList.remove('header--opened');
    }
  });

  // слайдер New In
  var createNewInSwiper = function () {
    var newInSwiper = new Swiper('.product-slider__swiper-container', { // eslint-disable-line
      spaceBetween: 0,
      slidesPerView: 4,
      slidesPerGroup: 4,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class=' + className + '>' + (index + 1) + '</span>';
            },
          },
        },
        1024: {
        // when window width is >= 1024px
          slidesPerView: 3,
          slidesPerGroup: 3,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class=' + className + '>' + (index + 1) + '</span>';
            },
          },
        },
        1252: {
          // when window width is >= 1252px
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class=' + className + '>' + (index + 1) + '</span>';
            },
          },
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

  createNewInSwiper();

  window.addEventListener('resize', function () {
    createNewInSwiper();
  });

  // FAQ
  var faq = document.querySelector('.faq');

  if (faq) {
    faq.classList.remove('faq--nojs');
    var faqButtons = faq.querySelectorAll('.faq button');
    for (var i = 0; i < faqButtons.length; i++) {
      addTabsClickToggle(faqButtons[i], 'faq__button--active');
    }
  }
})();