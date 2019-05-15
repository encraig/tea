//mobile
if ($(window).width() < 737) {

  //move the video below the slideshow
  $('.hp').after($('.hp .vimeo'));

  // $('#homepage').find('.da-rennab').append($('.video, .c8'));

  //move .c8 below the video
  // $('.video').after($('.c8'));

  //remove .c9
  $('.hp .c9').remove();

  //move .first .second .third .fourth after .c1
  $('.hp .c1').after($('.hp .c1 .first'));
  $('.hp .first').after($('.hp .c1 .second'));
  $('.hp .second').after($('.hp .c1 .third'));
  // $('.hp .third').after($('.hp .c1 .fourth'));

  //remove .c1
  $('.hp .c1').remove();

  //move .c6 after .c5
  // $('.hp .c5').after($('.hp .c6'));

  //change mobile img data-src to src
  var mImg = $('.hp img');
  $.each(mImg, function(i, val) {
    var src = $(val).attr('data-src');
    $(val).attr('src', src);
  });

  //change the height of vimeo video
  $('.vimeo #vimeo').height(220);

  //start bx slideshow
  $('.hp').bxSlider({
    infiniteLoop: true,
    auto: true,
    onSliderLoad: function() {
      console.log('show the slideshow');
      $('.hp').css('visibility', 'visible');
    }
  });

}
//desktop
else {
  $('.hp .c1').bxSlider({
    infiniteLoop: true,
    auto: true,
    onSliderLoad: function() {
      console.log('show the slideshow');
      $('.hp').css('visibility', 'visible');
    }
  });
}