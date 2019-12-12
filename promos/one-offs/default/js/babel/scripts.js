"use strict";

jQuery(document).ready(function () {
  //array of urls to hide the banners
  var urlArray = [{
    name: 'hp',
    url: '/'
  } // {
  // 	name: 'black-friday',
  // 	url: '/black-friday'
  // },
  // {
  // 	name: 'sale-page',
  // 	url: '/clothing-sale'
  // },
  ]; //function to hide or show the banner

  var hideBanners = function hideBanners() {
    var url = window.location.pathname; // $('.the-promo .see-details').fancybox();

    $.each(urlArray, function (i, val) {
      if (url == val.url) {
        $('div[data-zone="sitewide_banner"]').empty();
      } // else if (url.split('/')[1] == 'select-styles') {
      // 	$('div[data-zone="sitewide_banner"]').hide();
      // 	$('div[data-zone="sitewide_banner_mobile"]').hide();
      // 	return false;
      // }

    }); //if black friday landing page change dropdown cta urls
    // if (url.split('/')[1] == 'black-friday') {
    // 	//desktop
    // 	if ($(window).width() > 737) {
    // 		var area = $('map[name="map-d"] area');
    // 		$.each(area, function(i, val) {
    // 			var text = $(val).attr('name');
    // 			if (text == 'girl') {
    // 				$(val).attr('href', '/black-friday/girl');
    // 			} else if (text == 'boy') {
    // 				$(val).attr('href', '/black-friday/boy');
    // 			} else if (text == 'baby girl') {
    // 				$(val).attr('href', '/black-friday/baby-girl');
    // 			} else if (text == 'baby boy') {
    // 				$(val).attr('href', '/black-friday/baby-boy');
    // 			} else if (text == 'tween') {
    // 				$(val).attr('href', '/black-friday/tween');
    // 			}
    // 		});
    // 	}
    // 	//mobile
    // 	else {
    // 		var ctas = $('.cta-drop-down a');
    // 		$.each(ctas, function(i, val) {
    // 			var text = $(val).text();
    // 			if (text == 'girl') {
    // 				$(val).attr('href', '/black-friday/girl');
    // 			} else if (text == 'boy') {
    // 				$(val).attr('href', '/black-friday/boy');
    // 			} else if (text == 'baby girl') {
    // 				$(val).attr('href', '/black-friday/baby-girl');
    // 			} else if (text == 'baby boy') {
    // 				$(val).attr('href', '/black-friday/baby-boy');
    // 			} else if (text == 'tween') {
    // 				$(val).attr('href', '/black-friday/tween');
    // 			}
    // 		});
    // 	}
    // }
  }; //on page load call hideBanners
  // hideBanners();


  $('.the-promo .see-details').fancybox();
  $('.close-fancy').click(function (e) {
    // e.preventDefault();
    $.fancybox.close();
  });
});
//# sourceMappingURL=scripts.js.map
