$(document).ready(function() {
  const url = window.location.href;
  const button = $('.email-wrap').find('button');

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  var ac;
  var promo;
  if (url.indexOf('?') !== -1) {
    let paramArr = url.split('?')[1].split('&');
    $.each(paramArr, function(i, val) {
      if (val.indexOf('c') !== -1) {
        var str1 = val.split('=')[1];
        ac = str1;
      } else if (val.indexOf('p') !== -1) {
        var str2 = val.split('=')[1];
        promo = str2;
      }
    });

    const message = `<p>Sign up for exclusive offers, new<br> styles, and ${promo}% off your first order!*</p>`;
    $('.email-wrap .sign-up .default').hide();
    $('.email-wrap .sign-up .promo-message').append(message);
    $('.email-wrap .new-customers').show();

    const thanksMessage = `<p>Keep an eye on your<br> inbox for ${promo}% off.</p>`;
    $('.email-wrap .thanks .default').hide();
    $('.email-wrap .thanks .promo-message').append(thanksMessage);

  } else {
    ac = "email sign up landing page";
  }

  $(button).click(function(e) {
    e.preventDefault();
    let email = $('.email-wrap').find('input').val();
    $('.email-wrap .error').hide();

    // console.log(email, ac, promo);
    var valid = emailIsValid(email);
    // console.log('valid:' + valid);
    if (valid) {
      $('.email-wrap .sending').show();

      Sailthru.integration("userSignUp", {
        "id": email,
        "email": email,
        "lists": {
          // "MASTER_CONTACTS_LIST": 1
          "test list": 1
        },
        "vars": {
          "ACQUISITION_SOURCE": ac,
        },
        "source": ac,
        "onSuccess": function() {
          console.log('sailthru email sign up page success');
          $('.email-wrap .sign-up').hide();
          $('.email-wrap .thanks').show();
        },
        "onError": function() {
          console.log('sailthru email sign up page error');
        }
      });
    } else {
      $('.email-wrap .error').show();
      $('.email-wrap .sending').hide();
    }
  });


});