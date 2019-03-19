jQuery(document).ready(function() {
  var url = window.location.pathname;

  //pdp page add class positioning
  if (url.indexOf('/product/') !== -1) {
    jQuery('.the-badge').addClass('pdp-position');
  }

  // category page add class positioning
  else {
    jQuery('.the-badge').addClass('category-position');

    // mobile only
    if ($(window).width() < 737) {
      jQuery('.the-badge').css('width', '20%');
    }

  }

});