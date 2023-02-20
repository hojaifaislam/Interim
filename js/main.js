(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });

        // Hamburger-menu
        $('.hamburger-menu, #menu li a').on('click', function () {
            $('.hamburger-menu .line-top, #menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });


        // Slider Initialize
        $('.owl-carousel.slider1').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            nav: true,
            navText: [
                '<i class="far fa-angle-left"></i>', 
                '<i class="far fa-angle-right"></i>'
            ],
            dots: true,
        });

        $('.owl-carousel.home_slider').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            nav: false,
            dots: false,
            // autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            mouseDrag: false,
            touchDrag: false,
        });

        // ease intialize
        $('#menu li a, .link_box').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = $('header').height();
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 600, 'easeInSine');
            event.preventDefault();
        });
    });

})(jQuery);