(function ($) {
  var heroCarouselLength = $(".hero_carousel").length;

  if (heroCarouselLength > 0) {
    $(".hero_carousel").slick({
      dots: false,
      infinite: true,
      speed: 900,
      autoplaySpeed: 3000,
      autoplay: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: true,
      prevArrow:
        '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
    });
  }
})(jQuery);
