(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const console = require('./test.js');

jQuery(document).ready(function() {

  //CHANGE THE STRING FOR THE ALT FOR ALL PROMO DESKTOP AND MOBILE IMAGES
  // var alt = "LAST CHANCE SALE SAVE UP TO 65%";

  // $('.promo-img-alt').attr('alt', alt);

  //function to add alt to area
  let addAltArea = function(map, str) {
    var area = $(map).find('area');
    $(area).each(function(i, val) {

      var href = $(val).attr('href');
      href = href.replace("/", "");
      var cat = href.split("-");
      if (cat[0] == 'baby') {
        cat = cat[0] + " " + cat[1];
      } else if (cat[0].indexOf('#') !== -1) {
        cat = 'see details';
      } else {
        cat = cat[0]
      }

      //add the alt
      $(val).attr('alt', cat + areaAlt + ' ' + str);

    });
  };


  var areaAlt = ' promo banner cta';

  //add the alt to areas
  // addAltArea('map[name="map-d"]', 'desktop')
  // addAltArea('map[name="map-m"]', 'mobile')

  //responsive image map
  // jQuery('img[usemap]').rwdImageMaps();

  //array of urls to hide the banners
  var urlArray = [{
      name: 'hp',
      url: '/',
    },
    // {
    // 	name: 'black-friday',
    // 	url: '/black-friday'
    // },
    // {
    // 	name:'sale-page',
    // 	url:'/clothing-sale'
    // },
  ];

  //function to hide or show the banner
  var hideBanners = function() {
    var url = window.location.pathname;

    // $('.the-promo .see-details').fancybox();


    $.each(urlArray, function(i, val) {
      if (url == val.url) {
        $('div[data-zone="sitewide_banner"]').empty();
      }
      // else if (url.split('/')[1] == 'select-styles') {
      // 	$('div[data-zone="sitewide_banner"]').hide();
      // 	$('div[data-zone="sitewide_banner_mobile"]').hide();
      // 	return false;
      // }
    });

    //if black friday landing page change dropdown cta urls
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
  };

  //on page load call hideBanners
  hideBanners();


  // slide toggle the fineprint
  // $('.mobile-promo-fat.see-details, #details-promo .close-fancy, .the-promo .see-details').click(function(e) {
  // 	e.preventDefault();
  // 	if ($(window).width() > 769) {
  // 		if(e.target.className == 'see-details'){
  // 			$('.the-promo .see-details').fancybox();
  // 		}
  // 	}
  // 	if ($(window).width() < 769) {
  // 		if(e.target.className == 'see-details'){
  // 				$('#details-promo').slideToggle();
  // 		}
  // 	}
  // });

  $('.the-promo .see-details').fancybox();


  // $('.the-promo').click(function(e) {
  // console.log(e.target.parentNode.className);
  // e.preventDefault();
  // if (e.target.className == 'see-details') {
  // 	$('.the-promo .see-details').fancybox();
  // }

  // if ($(window).width() > 767) {
  // 	if (e.target.className == 'see-details') {
  // 		$('.the-promo .see-details').fancybox();
  // 	}
  // }
  // if ($(window).width() < 767) {
  // 	e.preventDefault();
  // 	if (e.target.parentNode.className == "mobile-promo-fat see-details") {
  // 		$('#details-promo').slideToggle();
  // 	}
  // }
  // });


  $('.close-fancy').click(function(e) {
    // e.preventDefault();
    $.fancybox.close();

    // if ($(window).width() == 768) {
    // 	$.fancybox.close();
    // }
    // if ($(window).width() < 767) {
    // 	$('#details-promo').slideToggle();
    // }
  });


});
},{"./test.js":2}],2:[function(require,module,exports){
module.exports = {
  sayHelloInEnglish: function() {
    console.log('browserify test');
  },
};
},{}]},{},[1]);
