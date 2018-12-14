$(document).ready(function() {

  $('body').addClass('browse');

  //add loading...
  // $('.animal-lover, .dreamer, .explorer').append('<h2 class="loading">loading...</h2>');

  //start slideshow
  $('.pdps').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    responsive: [{
      breakpoint: 737,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  var output = function(elem, theData) {
    var theElem;
    if ($(window).width() > 737) {
      theElem = $(theData).find('.what[name="' + elem + '"] section.item');
    } else {
      theElem = $(theData).find('.what[name="' + elem + '"] .single-item-box');

      //change the image src
      $.each(theElem, function(i, val) {
        var img = $(val).find('.image-box').find('img');
        //in case there are two
        $.each(img, function(j, obj) {
          var src = $(obj).attr('data-cfsrc');
          var style = $(obj).attr('data-cfstyle');
          $(obj).attr('src', src);
          $(obj).attr('style', style);
          $(obj).addClass('show');
        });
      });

    }

    $('.' + elem + ' .pdps').append(theElem);

    //remove loading
    $('.loading').remove();
  };

  // $('img[usemap]').rwdImageMaps();
  /*
  $.get('https://www.teacollection.com/cms/girls-gift-shop-sku/skus/1.html', function(data) {
    var theData = $(data).find('.girls-skus');
    // console.log(theData);

    output('animal-lover', theData);
    output('dreamer', theData);
    output('explorer', theData);

    //add class to quickview
    $('.quickview-overlay').find('a').addClass('add2list');

    //show hide quick view
    $('section.item').hover(function() {
      $(this).find('.quickview-overlay').show();
    }, function() {
      $(this).find('.quickview-overlay').removeAttr('style');
    });

    //start slideshow
    $('.pdps').slick({
      infinite: true,
      slidesToShow: 3,
      arrows: false,
      autoplay: true,
      responsive: [{
        breakpoint: 737,
        settings: {
          slidesToShow: 2
        }
      }]
    });

  });
  */
});