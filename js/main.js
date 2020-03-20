$(document).ready(function () {
  $('.stock__slider').slick({
    infinite: true,
    slidesToShow: 3,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }]
  });
});