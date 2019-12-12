$(document).ready(function() {

  const url = window.location.pathname;
  const html = $('#shipping-message');

  if (url == "/order/shipping-info") {
    $('div[data-zone="category_pages"]').before(html);
    $(html).show();
  } else if ($('.customer-service .title').length == 1) {
    $('.customer-service .title').before(html);
    $(html).css('textAlign', 'center').show();
  }

});