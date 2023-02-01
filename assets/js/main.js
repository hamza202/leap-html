let main = (function () {

    let hero_swiper = function () {
        if ($('#hero_swiper').length > 0) {
            let hero_slider = new Swiper("#hero_swiper", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                loop: true,
                // effect: "fade",
            });
        }
    };
    let companies_swiper = function () {
        if ($('#companies_swiper').length > 0) {
            let companies_slider = new Swiper("#companies_swiper", {
                slidesPerView: 1,
                spaceBetween: 60,
                slidesPerGroup: 2,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".companies_swiper-pagination",
                    clickable: true,
                },
                speed: 1500,
                // noSwiping: false,
                // noSwipingClass: 'swiper-slide',
                breakpoints: {
                    '640': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    '1366': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    '1440': {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    },

                },
            });
        }
    }


    function isRtl() {
        let dir = $("html").attr("dir");
        return dir === "rtl";
    }
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            document.querySelector('.main-menu').classList.add('active')
            document.querySelector('.hamburger').classList.add('is-active')
            document.querySelector('.hamburger').classList.remove('unactive')
        } else {
            document.querySelector('.main-menu').classList.remove('active')
            document.querySelector('.hamburger').classList.remove('is-active')
            document.querySelector('.hamburger').classList.add('unactive')
        }
    })
    return {
        init: function () {
            hero_swiper();
            companies_swiper();
        }
    };
})();
$(document).ready(function () {
    main.init();
});
