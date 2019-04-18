console.log('not pdp page');

$('body').off('click', '.add-to-bag').on('click', '.add-to-bag', function(e) {
  console.log('gtm add to bag not pdp page');
  var color = $('.pdp-item-details-attributes .selected-value')[0].innerText;
  var size = $('.size-label+.selected-value').text();
  var qty = $('.qty-input.js-qty-input').val();
  var name = $('#pdp-item-details').find('h1').text();
  var price = $('#store_price span[itemprop="price"]').text();
  var sku = $('input[type="hidden"][name="id"]')[1].value;
  console.log('the sku: ' + sku);

  //size has to be selected first
  if (size !== "") {
    window.dataLayer.push({
      event: 'addToBag',
      theCategory: 'addToBag',
      theUrl: url,
      theSku: sku,
      theSize: size,
      theQty: qty,
      thePrice: price,
      theName: name,
      theColor: color,
    });
  }
  // size not selected
  else {
    console.log('size not selected do nothing');
  }
});