var dpSrc = null;
var dpAlt = null;

//function to call from flex field
var addCell = function(dpSrc, dpAlt, cells) {
  // console.log('do nothing');

  var url = 'https://www.teacollection.com/mas_assets/media/tea_collection/feature-shops/2019/special-occasion/0221/c';

  console.log('add the content cell');

  //remove all the content cells
  $('#infinite section.content-cell, #infinite div.content-cell').remove();

  $.each(cells, function(i, val) {

    var elem;
    //desktop
    if ($(window).width() > 737) {

      elem = '<section class="item content-cell" data-sku="' + val.sku + '"><picture><img src="' + url + val.ext + '" alt="' + val.alt +
        '" style="max-width:100%;"></picture></section>';
      $('#infinite section.item').eq(val.num - 1).before(elem);
    }
    //mobile
    else {

      elem = '<div class="single-item-box content-cell" data-sku="' + val.sku + '"><img src="' + url + val.ext + '" alt="' + val.alt +
        '" style="max-width:100%;"></div>';
      $('#infinite div.single-item-box').eq(val.num - 1).before(elem);
    }

  });


  $('.content-cell').click(function(e) {
    // console.log(e);
    return false;
    // var sku = $(this).attr('data-sku');
    // window.location.href = 'https://www.teacollection.com/product/' + sku;
  });
};

jQuery(document).ready(function() {

  var alt = "Mekong Memories This holiday, our Mekong Daydreams collection captures the magic of spring traditions in charming Vietnamese inspired styles, perfect for dressy family occasions.";

  $('.special-wrap img').attr('alt', alt);

  //desktop
  if ($(window).width() > 737) {

    //remove the page header
    $('.inline-header').text('');

    //change urls of left nav
    var leftNav = $('.dept-special-occasion section');

    $.each(leftNav, function(i, val) {
      var h2 = $(val).find('h2');
      var text = h2.text().replace(/\r?\n/g, '');
      // console.log(text);

      switch (text) {
        case 'Girl':
          h2.html('<h2><a href="">' + text + '</a></h2>');
          h2.find('a').attr('href', '/girls-clothing/favorites/special-occasion');
          break;
        case 'Tween':
          h2.html('<h2><a href="">' + text + '</a></h2>');
          h2.find('a').attr('href', '/tween-girls-clothing/favorites/special-occasion');
          break;
        case 'Boy':
          h2.html('<h2><a href="">' + text + '</a></h2>');
          h2.find('a').attr('href', '/boys-clothing/favorites/special-occasion');
          break;
        case 'Baby Girl':
          h2.html('<h2><a href="">' + text + '</a></h2>');
          h2.find('a').attr('href', '/baby-girl-clothes/favorites/special-occasion');
          break;
        case 'Baby Boy':
          h2.html('<h2><a href="">' + text + '</a></h2>');
          h2.find('a').attr('href', '/baby-boy-clothes/favorites/special-occasion');
          break;
      }
    });
  }

});