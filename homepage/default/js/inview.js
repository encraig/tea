$('.hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8').on('inview', function(event, isInView) {
  if (isInView) {
    // element is now visible in the viewport
    // console.log('in view');
    let imgs = $(this).find('img');
    let width = $(window).width();
    // console.log(imgs);
    // console.log(width);
    $.each(imgs, function(i, val) {
      let src = $(val).attr('data-src');
      // console.log(src);
      if (src) {
        $(val).attr('src', src);
      }
      $(val).removeAttr('data-src');
    });
  }
});

$('.hp .c1').on('inview', function(event, isInView) {
  if (isInView) {
    // element is now visible in the viewport
    // console.log('in view');
    let imgs = $(this).find('img');
    let width = $(window).width();
    // console.log(imgs);
    // console.log(width);

    $.each(imgs, function(i, val) {
      let theClass = $(val).attr('class');
      let src = $(val).attr('data-src');
      // console.log(src);
      $(val).attr('src', src);
    });
  }
});