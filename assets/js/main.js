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


    /* Toggle Video Modal
  -----------------------------------------*/
    function toggle_video_modal() {

        // Click on video thumbnail or link
        $(".service-card__content button").on("click", function(e){

            // prevent default behavior for a-tags, button tags, etc.
            e.preventDefault();

            // Grab the video ID from the element clicked
            var id = $(this).attr('data-youtube-id');

            // Autoplay when the modal appears
            // Note: this is intetnionally disabled on most mobile devices
            // If critical on mobile, then some alternate method is needed
            var autoplay = '?autoplay=1';

            // Don't show the 'Related Videos' view when the video ends
            var related_no = '&rel=0';

            // String the ID and param variables together
            var src = 'https://www.youtube.com/embed/'+id+autoplay+related_no;

            // Pass the YouTube video ID into the iframe template...
            // Set the source on the iframe to match the video ID
            $("#youtube").attr('src', src);

            // Add class to the body to visually reveal the modal
            $(".video-modal-content").addClass("fixed");
            $(".video-modal-content").removeClass("hidden");

        });

        // Close and Reset the Video Modal
        function close_video_modal() {

            event.preventDefault();

            // re-hide the video modal
            $(".video-modal-content").removeClass("fixed");
            $(".video-modal-content").addClass("hidden");


            // reset the source attribute for the iframe template, kills the video
            $("#youtube").attr('src', '');

        }
        // if the 'close' button/element, or the overlay are clicked
        $('body').on('click', '#close_modal', function(event) {

            // call the close and reset function
            close_video_modal();

        });
        // if the ESC key is tapped
        $('body').keyup(function(e) {
            // ESC key maps to keycode `27`
            if ($('.close-video-modal').length > 0) {
                if (e.keyCode == 27) {

                    // call the close and reset function
                    close_video_modal();

                }
            }
        });
    }
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
            toggle_video_modal();
        }
    };
})();
$(document).ready(function () {
    main.init();
});
$(window).on('load', function () {
    $('#loading').hide();
})
