
$('body').off('click', '.ajax-cart-remove').on('click', '.ajax-cart-remove', function(e){

  console.log('removed from bag not cart page')
  //var $this = $(this).closest('dd').text();
  //console.log($this);
  var url = window.location.href;
  var name = $(this).closest('dl').siblings('h1').text();
  var sku = $(this).attr('href').split('/')[3].split('sku')[1];
  sku = sku.replace('=','');
  var price = $(this).closest('dl').siblings('p')[0].firstChild.data;
  price = price.replace('\n','');
  var color = $(this).closest('dl').find('dd').text()
  var size = $(this).closest('dl').find('dt')[1].innerText;
  size = size.toLowerCase().replace('size: ','').replace('\n','').replace(' ','');
  var qty = $(this).closest('dl').find('dt')[2].innerText;
  qty = qty.toLowerCase().replace('quantity: ', '').replace('\n','').replace(' ','')

  //console.log(url, name, sku, price, color, size, qty);

  window.dataLayer.push({
    event: 'removeFromBag',
    theCategory: 'removeFromBag',
    theUrl: url,
    theSku: sku,
    theSize: size,
    theQty: qty,
    thePrice: price,
    theName: name,
    theColor: color,
  });

});
