$('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8').on('inview', function(event, isInView) {
  if (isInView) {
    // element is now visible in the viewport
    // console.log('in view');
    var imgs = $(this).find('img');
    // console.log(imgs);
    $.each(imgs, function(i, val) {
      var src = $(val).attr('data-src');
      console.log(src);
      if (src) {
        $(val).attr('src', src);
      }
      $(val).removeAttr('data-src');
    });
  }
});