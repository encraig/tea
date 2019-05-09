$(document).ready(function() {
  //variables
  var url = window.location.href;
  var name, sku, price, qty, color, size;

  qty = $('.qty-input').val();
  if (qty == undefined) {
    qty = 1;
  }
  color = $('.pdp-item-details-attributes .selected-value')[0].innerText;
  size = $('.pdp-item-details-attributes .selected-value')[1].innerText;

  //desktop
  if ($(window).width() > 769) {
    name = $('#pdp-item-details hgroup h1').text();
    sku = $('#pdp-right form input[name="id"]').val();
    price = $('#store_price').text();
  }
  //mobile
  else {
    name = $('.pdp .common-wrap .heading')[0].innerText;
    sku = $('.pdp form input[name="id"]').val();
    price = $('.pdp .price').text();
  }

  //the data layer
  var theData = {
    'event': 'addToBag',
    'theUrl': url,
    'theSku': sku,
    'theName': name,
    'thePrice': price,
    'theQty': qty,
    'theColor': color,
    'theSize': size
  }

  //push the data layer
  $('button.add-to-bag, input.add-to-bag').click(function() {
    window.dataLayer.push(theData);
  });

});