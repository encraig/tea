$(document).ready(function() {

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  $('.signup .form button').click(function(e) {
    console.log(e.target);
    var email = e.target.previousElementSibling.value;
    var valid = emailIsValid(email);
    console.log('valid:' + valid);
    if (valid) {
      $('.signup .form').hide();
      $('.signup .sending').show();
      Sailthru.integration("userSignUp", {
        "id": email,
        "email": email,
        "lists": {
          "MASTER_CONTACTS_LIST": 1
          // "test list": 1
        },
        "vars": {
          "ACQUISITION_SOURCE": "Desktop pop-up",
        },
        "source": "Desktop pop-up",
        "onSuccess": function() {
          $('.signup .the-form').hide();
          $('.signup .thanks').show();
        }
      });

    } else {
      $('.signup .error').show();
      $('.signup input').focus();
    }
  });


  //close the signup form
  $('.the-overlay, #close-icon2').click(function() {
    // console.log('close desktop');
    divinity.box.close();
    $('#tea-promo-subscribe').remove();
  });

});