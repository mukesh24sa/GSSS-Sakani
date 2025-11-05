(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel(
        {
            autoplay: true,
            smartSpeed: 1500,
            center: true,
            dots: true,
            loop: true,
            margin: 50,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    // staff
    $('.team-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="fa fa-chevron-left text-primary"></i>',
            '<i class="fa fa-chevron-right text-primary"></i>'
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 }
        }
    });



    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    // Pause scrolling animation when hovered
    // Pause news scroll on hover (extra control)
    const newsContainer = document.querySelector('.news-container');
    newsContainer.addEventListener('mouseenter', () => {
        newsContainer.querySelector('.news-wrapper').style.animationPlayState = 'paused';
    });
    newsContainer.addEventListener('mouseleave', () => {
        newsContainer.querySelector('.news-wrapper').style.animationPlayState = 'running';
    });



})(jQuery);

