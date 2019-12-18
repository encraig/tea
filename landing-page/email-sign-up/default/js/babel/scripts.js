"use strict";

$(document).ready(function () {
  var url = window.location.href;
  var button = $('.email-wrap').find('button');

  var emailIsValid = function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  var ac;
  var promo = null;

  if (url.indexOf('?') !== -1) {
    var paramArr = url.split('?')[1].split('&');
    $.each(paramArr, function (i, val) {
      if (val.indexOf('utm_campaign') !== -1) {
        var str1 = val.split('=')[1];
        ac = str1;
      } else if (val.indexOf('p') !== -1) {
        var str2 = val.split('=')[1];
        promo = str2;
      }
    });
    console.log(promo);

    if (promo !== null) {
      var message = "<p>Sign up for exclusive offers, new<br> styles, and ".concat(promo, "% off your first order!*</p>");
      $('.email-wrap .sign-up .default').hide();
      $('.email-wrap .sign-up .promo-message').append(message);
      $('.email-wrap .new-customers').show();
      var thanksMessage = "<p>Keep an eye on your<br class=\"br-m\"> inbox for ".concat(promo, "% off.</p>");
      $('.email-wrap .thanks .default').hide();
      $('.email-wrap .thanks .promo-message').append(thanksMessage);
    }
  } else {
    ac = "email sign up landing page";
  }

  $(button).click(function (e) {
    e.preventDefault();
    var email = $('.email-wrap').find('input').val();
    $('.email-wrap .error').hide(); // console.log(email, ac, promo);

    var valid = emailIsValid(email); // console.log('valid:' + valid);

    if (valid) {
      $('.email-wrap .sign-up .load-more-wrap').show();
      $('.email-wrap .input-fields').hide();
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
          $('.email-wrap .sign-up').hide();
          $('.email-wrap .thanks').show();
        },
        "onError": function onError() {
          console.log('sailthru email sign up page error');
        }
      });
    } else {
      $('.email-wrap .error').show();
      $('.email-wrap .input-fields').show();
      $('.email-wrap .sign-up .load-more-wrap').hide();
    }
  });
});
//# sourceMappingURL=scripts.js.map
