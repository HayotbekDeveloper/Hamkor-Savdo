window.addEventListener('load', function (e) {
    AOS.init();

    $(document).ready(function () {
        $("main .photo .owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 800,
            lazyLoad: true,
            animateOut: 'fadeOut',
            slideTransition: 'ease-in-out',
        });

        $("header .owl-carousel").owlCarousel({
            loop: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 800,
            autoplay: true,
            lazyLoad: true,
            margin: 10,
            slideTransition: 'ease-in-out',
            nav: true,
            dots: false,
            navSpeed: 800,
            responsive: {
                320: {
                    items: 1,
                    info: true
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }

            }

        });

        $("main .action .owl-carousel").owlCarousel({
            loop: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 800,
            autoplay: true,
            lazyLoad: true,
            margin: 10,
            slideTransition: 'ease-in-out',
            nav: false,
            dots: false,
            navSpeed: 800,
            responsive: {
                320: {
                    items: 1,
                    info: true
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }

            }

        });

        $("main .video_action .owl-carousel").owlCarousel({
            loop: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 800,
            lazyLoad: true,
            margin: 10,
            slideTransition: 'ease-in-out',
            nav: true,
            dots: false,
            navSpeed: 800,
            responsive: {
                320: {
                    items: 1,
                    info: true
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
                    items: 2
                }

            }

        });
    });

    let mask = document.querySelector('.mask');

    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600)

    $('.move-to-top').on('click', function() {
        $(window).scrollTop(0)
    })

    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop()

        if (scroll >= 50) {
            $('.header_top').addClass('sticy')
            $('.move-to-top').removeClass('hide')
        } else {
            $('.header_top').removeClass('sticy')
            $('.move-to-top').addClass('hide')
        }
    })
})

