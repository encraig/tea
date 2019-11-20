"use strict";

$(document).ready(function () {
  var url = window.location.pathname;
  var html = $('#shipping-message');

  if (url == "/order/shipping-info") {
    $('div[data-zone="category_pages"]').before(html);
    $(html).show();
  } else if ($('.customer-service .title').length == 1) {
    $('.customer-service .title').before(html);
    $(html).css('textAlign', 'center').show();
  }
});
//# sourceMappingURL=scripts.js.map
