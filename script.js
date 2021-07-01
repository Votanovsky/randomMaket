// === аккордеон ===
document.querySelector('.faq-accordion').addEventListener('click', (event) => {
	if(event.target.closest('.faq-accordion__item')) {
		event.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active');
	}
});
// === /аккордеон ===

// Секция меню и навигация
// === меню-бурегр ===
const header = document.querySelector('.section-header');
const mainNavigation = document.getElementById('main-navigation')

document.querySelector('.btn-burger').addEventListener('click', function() { 

    header.classList.toggle('section-header--active-nav');

    if (header.classList.contains('section-header--active-nav')) {
        hideScroll();
    } else {
        showScroll();
    }

});
// === /меню-бурегр ===


// === отключение скролла при активности меню-бургер ===
const hideScroll = function() {
    const scrollWidth = '${getScrollbarWitdth()}px';

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    mainNavigation.style.paddingRight = scrollWidth; // - убирает отступ, чтобы меню не прыгало вправо при нажатии на кнопку
};
// === /отключение скролла при активности меню-бургер ===

// === включение скролла при активности меню-бургер ===
const showScroll = function() {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';

    mainNavigation.style.paddingRight = ''; //  - убирает отступ, чтобы меню не прыгало вправо при нажатии на кнопку
};
// === /включение скролла при активности меню-бургер ===


// === функция для отключения скролла при активности меню-бургер ===
const getScrollbarWitdth = function() {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visible = 'hidden';

    document.body.appendChild(outer);
    const scrollbarWitdth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWitdth;
};
// === /функция для отключения скролла при активности меню-бургер ===


// Если пользователь ресайзит сайт при открытом меню (а значит выключен скролл и на экране висит затемнение), то появляется проблема. Данная функция убирает эту проблему:
const resetNav = () => {
    header.classList.remove('section-header--active-nav');
    showScroll();
};
window.addEventListener('resize', resetNav);
// /Секция меню и навигация

// === Карусель ===
// 1)
new Swiper('.section-hero-image', {
    // // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.section-hero-image .dots',
      clickable: true,
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

// 2)
new Swiper('.slider-blog-container', {
    // // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.section-blog .dots',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-blog .btn-blog--next',
      prevEl: '.slider-blog .btn-blog--prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

// 3)
new Swiper('.slider-quotes-container', {
    // loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.section-quotes .dots',
      clickable: true,
    },
});
// === /Карусель ===