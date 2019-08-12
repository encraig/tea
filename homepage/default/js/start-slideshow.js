//desktop
if ($(window).width() > 737) {
  $('#c1.cta2').after($('#c1.cta5'));
}
//mobile
if ($(window).width() < 737) {

  //move the video below the slideshow
  // $('.hp').after($('.hp .vimeo'));

  // $('#homepage').find('.da-rennab').append($('.video, .c8'));

  //move .c8 below the video
  // $('.video').after($('.c8'));

  //moving ctas around
  // $('#c1.cta2').after($('#c1.cta5'))

  // for (i = 1; i < 8; i++) {
  //   $('.c1 .cta' + i).addClass('cta');
  // }

  //remove .c9
  $('.hp .c9').remove();

  //move .c6 after .c5
  // $('.hp .c1 .cta5').after($('.hp .c1 .cta3'));
  // $('.hp .c1 .cta7').addClass('tween');

  //change mobile img data-src to src
  var mImg = $('.hp img');
  $.each(mImg, function(i, val) {
    var src = $(val).attr('data-src');
    $(val).attr('src', src);
  });

  //change the height of vimeo video
  // $('.vimeo #vimeo').height(220);

  //start bx slideshow
  $('.hp').bxSlider({
    infiniteLoop: true,
    auto: true,
    onSliderLoad: function() {
      // console.log('show the slideshow');
      $('.hp').css('visibility', 'visible');
    }
  });

}