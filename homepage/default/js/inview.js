var changeSrc = function(array, attr1, attr2) {
  $.each(array, function(i, val) {
    var src = $(val).attr(attr1);
    $(val).attr(attr2, src);
    $(val).removeAttr(attr1);
  });
};

//lazy load the images
//desktop
if ($(window).width() > 737) {
  $('.hp .c0, .hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8, .hp .c9').on('inview', function(e, i) {
    // console.log('from inview');
    // console.log('images');

    // element is now visible in the viewport
    if (i) {
      var img = $(this).find('img');
      var source = $(this).find('source');
      changeSrc(img, 'data-src', 'src');

      var alt = $(this).find('p').text();
      $(img).attr('alt', alt);
      // changeSrc(source, 'data-srcset', 'srcset');
    }
  });
}

$('.hp .vimeo').on('inview', function(e, i) {
  // console.log('from inview');
  // console.log('images');

  // element is now visible in the viewport
  if (i) {
    var img = $(this).find('iframe');
    changeSrc(img, 'data-src', 'src');
  }
});