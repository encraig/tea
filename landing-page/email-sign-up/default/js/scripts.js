$(document).ready(function() {
  const url = window.location.href;
  var ac;
  var promo;
  if (url.indexOf('?') !== -1) {
    let paramArr = url.split('?')[1].split('&');
    $.each(paramArr, function(i, val) {
      if (val.indexOf('campaign') !== -1) {
        var str1 = val.split('=')[1];
        ac = str1;
      } else if (val.indexOf('promo') !== -1) {
        var str2 = val.split('=')[1];
        promo = str2;
      }
    });

    const message = `<p>save ${promo}% off</p>
    <p>you're welcome.</p>
    <p>btw the acquisition source is: ${ac}</p>
    `;
    $('.email-wrap .default').hide();
    $('.email-wrap .promo-message').append(message);
  }
});