"use strict";

$(document).ready(function () {
  var url = window.location.href;
  var email = $('.email-wrap').find('input').val();
  var button = $('.email-wrap').find('button');

  var emailIsValid = function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  var ac;
  var promo;

  if (url.indexOf('?') !== -1) {
    var paramArr = url.split('?')[1].split('&');
    $.each(paramArr, function (i, val) {
      if (val.indexOf('c') !== -1) {
        var str1 = val.split('=')[1];
        ac = str1;
      } else if (val.indexOf('p') !== -1) {
        var str2 = val.split('=')[1];
        promo = str2;
      }
    });
    var message = "<p>Sign up for exclusive offers, new styles, and ".concat(promo, "% off your first order!*</p>");
    $('.email-wrap .default').hide();
    $('.email-wrap .promo-message').append(message);
    $('.email-wrap .new-customers').show();
  } else {
    ac = "email sign up landing page";
  }

  $(button).click(function (e) {
    e.preventDefault();
    console.log(email, ac, promo);
    var valid = emailIsValid(email);
    console.log('valid:' + valid);

    if (valid) {
      Sailthru.integration("userSignUp", {
        "id": email,
        "email": email,
        "lists": {
          // "MASTER_CONTACTS_LIST": 1
          "test list": 1
        },
        "vars": {
          "ACQUISITION_SOURCE": ac
        },
        "source": ac,
        "onSuccess": function onSuccess() {
          console.log('sailthru email sign up page success');
        },
        "onError": function onError() {
          console.log('sailthru email sign up page error');
        }
      });
    }
  });
});
//# sourceMappingURL=scripts.js.map
