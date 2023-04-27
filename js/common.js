// $('body').hide()

// mobile_menu-icon

const burger = document.querySelector('.mobile_menu-icon');
if (burger) {
    const menu = document.querySelector('.menu__body');
    burger.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
    });
}


//  mobile_menu
    
document.querySelectorAll('.menu__list-item').forEach((el) => {
    el.addEventListener('click', () => {
        if( el.classList.contains('opened')) {
            el.classList.remove('opened');
            return;
        }
        document.querySelectorAll('.menu__list-item').forEach(el => el.classList.remove('opened'));
        el.classList.add('opened');
    });
})


// header_slider

const slider = new Swiper('.head__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,



    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

})

// products-slider

const swiper = new Swiper('.products-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,

    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        }
    },


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });