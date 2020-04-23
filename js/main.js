jQuery(function($) {


  function sl() {
    let slideWidth = $('.slide-item').outerWidth();
    let slideWrap = $('.slide-wrap');
    let scrollSlider = slideWrap.position().left - slideWidth;

    slideWrap.animate({
      'left': scrollSlider
    }, '500', 'swing', function() {
      slideWrap.find('.slide-item:first')
        .appendTo(slideWrap)
        .parent()
        .css({'left': 0});
    });
  }
  
  setInterval(sl, 3000);

})