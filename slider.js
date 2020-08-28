$(document).ready(function(){
    $('.lazy').slick({
        // lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: false,
        nextArrow: '<img src="images/arrow1.png" class="galary-slider__arrow galary-slider__arrow_right">',
        prevArrow: '<img src="images/arrow1.png" class="galary-slider__arrow">',
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    });

    $('.menu-btn').on('click', function() {
        $('.menu').slideToggle();
    })
  });