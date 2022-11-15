/*
Template Name: Hostar
Author: wpoceans
Version: 1.0
*/

(function ($) {
    'use strict';

    /*----- ELEMENTOR LOAD FUNTION CALL ---*/

    $(window).on('elementor/frontend/init', function () {

        var swiper_slide = function () {

            // HERO SLIDER
            var menu = [];
            jQuery('.swiper-slide').each(function (index) {
                menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
            });
            var interleaveOffset = 0.5;
            var swiperOptions = {
                loop: true,
                speed: 1000,
                parallax: true,
                autoplay: {
                    delay: 6500,
                    disableOnInteraction: false,
                },
                watchSlidesProgress: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                on: {
                    progress: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            var slideProgress = swiper.slides[i].progress;
                            var innerOffset = swiper.width * interleaveOffset;
                            var innerTranslate = slideProgress * innerOffset;
                            swiper.slides[i].querySelector(".slide-inner").style.transform =
                                "translate3d(" + innerTranslate + "px, 0, 0)";
                        }
                    },

                    touchStart: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = "";
                        }
                    },

                    setTransition: function (speed) {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            swiper.slides[i].style.transition = speed + "ms";
                            swiper.slides[i].querySelector(".slide-inner").style.transition =
                                speed + "ms";
                        }
                    }
                }
            };

            var swiper = new Swiper(".swiper-container", swiperOptions);


        }; // end

        var services_slider = function () {

            /*------------------------------------------
                = SERVICES SLIDER
            -------------------------------------------*/
            if ($(".services-slider").length) {
                var $carousel = $('.services-slider');
                $(".services-slider").owlCarousel({
                    loop: true,
                    margin: 30,
                    dots: ($carousel.data('dots') !== undefined) ? $carousel.data('dots') : false,
                    nav: false,
                    navText: ['<i class="fi flaticon-back"></i>', '<i class="fi flaticon-next"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        0: {
                            items: 1,
                        },

                        550: {
                            items: 2,
                            center: false,
                            margin: 10
                        },

                        992: {
                            items: 3,
                            center: false,
                            margin: 10
                        },

                        1400: {
                            items: 3
                        }
                    }
                });
            }


        }; // end



        var portfolio_slider = function () {

            /*------------------------------------------
                = PORTFOLIO SLIDER
            -------------------------------------------*/
            if ($(".portfolio-slider").length) {
                $(".portfolio-slider").owlCarousel({
                    autoplay: false,
                    smartSpeed: 300,
                    margin: 0,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    responsive: {
                        0: {
                            items: 1
                        },

                        500: {
                            items: 2
                        },

                        768: {
                            items: 3
                        },

                        1200: {
                            items: 4
                        },

                        1400: {
                            items: 5
                        }
                    }
                });
            }


        }; // end



        var portfolio_slider_s2 = function () {


            /*------------------------------------------
                = PORTFOLIO SLIDER S2
            -------------------------------------------*/
            if ($(".portfolio-slider-s2").length) {
                $(".portfolio-slider-s2").owlCarousel({
                    autoplay: false,
                    smartSpeed: 300,
                    margin: 0,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    responsive: {
                        0: {
                            items: 1
                        },

                        500: {
                            items: 2
                        },

                        768: {
                            items: 3
                        }
                    }
                });
            }


        }; // end


        var partners = function () {

            /*------------------------------------------
                 = PARTNERS SLIDER
             -------------------------------------------*/
            if ($(".partners-slider").length) {
                $(".partners-slider").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 30,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    responsive: {
                        0: {
                            items: 2
                        },

                        550: {
                            items: 3
                        },

                        992: {
                            items: 4
                        },

                        1200: {
                            items: 5
                        }
                    }
                });
            }


        }; // end

        var testimonials_slider = function () {


            if ($('.wpo-testimonial-active').length && $('.wpo-testimonial-thumbnil-active').length) {

                var $sync1 = $(".wpo-testimonial-active"),
                    $sync2 = $(".wpo-testimonial-thumbnil-active"),
                    flag = false,
                    duration = 500;

                $sync1
                    .owlCarousel({
                        items: 1,
                        margin: 0,
                        nav: true,
                        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                        dots: false
                    })
                    .on('changed.owl.carousel', function (e) {
                        if (!flag) {
                            flag = true;
                            $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                            flag = false;
                        }
                    });

                $sync2
                    .owlCarousel({
                        margin: 10,
                        items: 3,
                        nav: false,
                        dots: false,
                        center: false,
                        responsive: {
                            0: {
                                items: 2,
                                autoWidth: false
                            },
                            400: {
                                items: 2,
                                autoWidth: false
                            },
                            500: {
                                items: 3,
                                center: false,
                                autoWidth: false
                            },
                            600: {
                                items: 5,
                                autoWidth: false
                            },
                            1200: {
                                items: 5,
                                autoWidth: false
                            }
                        },
                    })
                    .on('click', '.owl-item', function () {
                        $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

                    })
                    .on('changed.owl.carousel', function (e) {
                        if (!flag) {
                            flag = true;
                            $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                            flag = false;
                        }
                    });

            };

        }; // end






        var progress_bar = function () {

            /*------------------------------------------
                 = TESTIMONIALS SLIDER S2
             -------------------------------------------*/
            if ($(".progress-bar").length) {
                var $progress_bar = $('.progress-bar');
                $progress_bar.appear();
                $(document.body).on('appear', '.progress-bar', function () {
                    var current_item = $(this);
                    if (!current_item.hasClass('appeared')) {
                        var percent = current_item.data('percent');
                        current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
                    }

                });
            };

        }; // end

        var odometer = function () {

            /*------------------------------------------
                = FUNFACT
            -------------------------------------------*/
            if ($(".odometer").length) {
                $('.odometer').appear();
                $(document.body).on('appear', '.odometer', function (e) {
                    var odo = $(".odometer");
                    odo.each(function () {
                        var countNumber = $(this).attr("data-count");
                        $(this).html(countNumber);
                    });
                });
            }


        }; // end

        var team_slider = function () {


            /*------------------------------------------
                = TEAM SLIDER
            -------------------------------------------*/
            if ($(".team-slider").length) {
                $(".team-slider").owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: true,
                    navText: ['<i class="fi ti-angle-left"></i>', '<i class="fi ti-angle-right"></i>'],
                    dots: false,
                    responsive: {
                        0: {
                            items: 1,
                        },

                        550: {
                            items: 2,
                            center: false,
                            margin: 10
                        },

                        992: {
                            items: 3
                        },

                        1200: {
                            items: 4
                        }
                    }
                });
            }

        }; // end


        //Service
        elementorFrontend.hooks.addAction('frontend/element_ready/tmx-hostar_slider.default', function ($scope, $) {
            swiper_slide();
        });


        //Service
        elementorFrontend.hooks.addAction('frontend/element_ready/tmx-hostar_service.default', function ($scope, $) {
            services_slider();
        });


        //Project
        elementorFrontend.hooks.addAction('frontend/element_ready/tmx-hostar_project.default', function ($scope, $) {
            portfolio_slider();
        });


        //Project
        elementorFrontend.hooks.addAction('frontend/element_ready/tmx-hostar_project.default', function ($scope, $) {
            portfolio_slider_s2();
        });


        //Testimonials
        elementorFrontend.hooks.addAction('frontend/element_ready/tmx-hostar_testimonial.default', function ($scope, $) {
            testimonials_slider();
        });

        //Client
        elementorFrontend.hooks.addAction('frontend/element_ready/tmx-hostar_client.default', function ($scope, $) {
            partners();
        });


        //Progarss
        elementorFrontend.hooks.addAction('frontend/element_ready/tmx-hostar_progress.default', function ($scope, $) {
            progress_bar();
        });


        //odometer
        elementorFrontend.hooks.addAction('frontend/element_ready/tmx-hostar_funfact.default', function ($scope, $) {
            odometer();
        });



        //Team
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-hostar_team.default', function ($scope, $) {
            team_slider();
        });





    });


})(jQuery);  