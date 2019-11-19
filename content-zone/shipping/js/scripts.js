$(document).ready(function() {

  const url = window.location.href;
  const html = $('#shipping-message');

  if (url == "http://tea-development.teacollection.com/order/shipping-info") {
    $('div[data-zone="category_pages"]').before(html);
    $(html).show();
  } else {
    $('.customer-service .title').before(html);
    $(html).css('textAlign', 'center').show();
  }

});