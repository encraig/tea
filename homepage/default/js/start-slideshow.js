//mobile
if ($(window).width() < 737) {

  //change mobile img data-src to src
  var mImg = $('.hp img');
  $.each(mImg, function(i, val) {
    var src = $(val).attr('data-src');
    $(val).attr('src', src);
  });

  //start bx slideshow
  $('.hp.mobile').bxSlider({
    infiniteLoop: true,
    auto: true,
    onSliderLoad: function() {
      // console.log('show the slideshow');
      // $('.hp').css('visibility', 'visible');
    }
  });

}
//desktop
else {
  $('.c1').bxSlider({
    infiniteLoop: true,
    auto: true,
    onSliderLoad: function() {
      // console.log('show the slideshow');
      // $('.hp').css('visibility', 'visible');
    }
  });
}