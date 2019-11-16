"use strict";

$(document).ready(function () {
  var bf = $('div[data-zone="black_friday_landing"]');
  $('.site-content').prepend(bf);
  var url = window.location.pathname;
  var bfCat = window.location.pathname;
  bfCat = bfCat.split('/')[2];
  var html;

  if (url == "/black-friday") {
    $('.shop-all-cats').show();
  } else if (bfCat == "newborn") {
    html = "\n      <a href=\"/black-friday/newborn\">shop all</a>\n      <a href=\"/black-friday/newborn/12\">$12 <span>styles</span></a>\n      <a href=\"/black-friday/newborn/15\">$15 <span>styles</span></a>";
    $('.shop-all-cats .bf-desktop, .shop-all-cats .bf-mobile').children().remove();
    $('.shop-all-cats .bf-desktop, .shop-all-cats .bf-mobile').addClass('price-buckets').append(html);
    $('.shop-all-cats').show();
  } else {
    html = "\n      <a href=\"/black-friday/".concat(bfCat, "/\">shop all</a>\n      <a href=\"/black-friday/").concat(bfCat, "/10\">$10 <span>styles</span></a>\n      <a href=\"/black-friday/").concat(bfCat, "/12\">$12 <span>styles</span></a>\n      <a href=\"/black-friday/").concat(bfCat, "/15\">$15 <span>styles</span></a>\n      <a href=\"/black-friday/").concat(bfCat, "/20\">$20 <span>styles</span></a>\n      ");
    $('.shop-all-cats .bf-desktop, .shop-all-cats .bf-mobile').children().remove();
    $('.shop-all-cats .bf-desktop, .shop-all-cats .bf-mobile').addClass('price-buckets').append(html);
    $('.shop-all-cats').show();
  }
});
//# sourceMappingURL=scripts.js.map
