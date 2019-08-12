jQuery(document).ready(function() {

  //desktop
  if ($(window).width() > 737) {

    //remove the page header
    // $('.inline-header').text('');

    //change urls of left nav
    var leftNav = $('.dept-baby-new-arrivals section');

    $.each(leftNav, function(i, val) {
      var h2 = $(val).find('h2');
      var text = h2.text().replace(/\r?\n/g, '');
      console.log(text);

      switch (text) {
        case ' Baby Girl':
          h2.html('<h2><a href="">' + text + '</a></h2>');
          h2.find('a').attr('href', '/baby-girl-clothes/new-arrivals');
          break;
        case ' Baby Boy':
          h2.html('<h2><a href="">' + text + '</a></h2>');
          h2.find('a').attr('href', '/baby-boy-clothes/new-arrivals');
          break;

      }
    });
  }

});