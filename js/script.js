$(function () {
    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // testimonial slider

    $('.test_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1,                
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,

              }
            }
          ]
    });


    // team slider
    $('.team_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1,                
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,

              }
            }
          ]
    });

    // venobox
    $('.venobox').venobox();


    // scroll back to top
    $('body').materialScrollTop();
})

// var mixitup = require('.cont');
var mixer = mixitup('.cont');

// smoot scroll
$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 0
            }, 1000);
            return false;
        }
    }
});

// scroll menu fixed

$(function () {
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 100) {
            $('.menu').addClass('menu_fixed')
        }
        else {
            $('.menu').removeClass('menu_fixed')
        }
    });
});
