$(document).ready(function() {

  $('.warehouse-popup .close, .warehouse-overlay').click(function() {
    $('.warehouse-overlay, .warehouse-popup').remove();
    document.cookie = 'closeSale=true; path=/';
  });

  var cookie = window.document.cookie;
  cookie = cookie.replace(/ /g, '');
  cookie = cookie.split(';');

  $.each(cookie, function(i, val) {
    // if they close the popup check for cookie
    if (val.indexOf('closeSale') !== -1) {
      console.log('already closed popup');
      //remove popup
      $('.warehouse-overlay, .warehouse-popup').remove();
      document.cookie = "warehouse=1; path=/";
      return false;

      //have not seen popup yet
    } else {

      if (val.indexOf('warehouse') == -1) {
        console.log('no warehouse creating cookie');
        document.cookie = "warehouse=1; path=/";

      } else {
        console.log('yes warehouse replacing cookie');
        //six page views pop the popup
        if (val == 'warehouse=5') {
          console.log('six page views kick off popup');
          $('.warehouse-popup, .warehouse-overlay').show();
          document.cookie = "warehouse=6; path=/";
          return false;

          //nope not six page views yet
        } else {
          var num = Number(val.split('=')[1]) + 1;
          document.cookie = "warehouse=" + num + "; path=/";
          console.log(val);
          return false;
        }

      }
    }

  });

});