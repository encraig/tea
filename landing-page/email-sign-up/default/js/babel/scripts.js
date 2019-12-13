"use strict";

$(document).ready(function () {
  var url = window.location.href;
  var ac;
  var promo;

  if (url.indexOf('?') !== -1) {
    var paramArr = url.split('?')[1].split('&');
    $.each(paramArr, function (i, val) {
      if (val.indexOf('campaign') !== -1) {
        var str1 = val.split('=')[1];
        ac = str1;
      } else if (val.indexOf('promo') !== -1) {
        var str2 = val.split('=')[1];
        promo = str2;
      }
    });
    var message = "<p>save ".concat(promo, "% off</p>\n    <p>you're welcome.</p>\n    <p>btw the acquisition source is: ").concat(ac, "</p>\n    ");
    $('.email-wrap .default').hide();
    $('.email-wrap .promo-message').append(message);
  }
});
//# sourceMappingURL=scripts.js.map
