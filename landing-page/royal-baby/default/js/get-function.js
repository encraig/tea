var getFunc = function(url, elem) {
  $.get(url, function(data) {
    var mpd = $(data).find('#the-mpd').text();
    mpd = JSON.parse(mpd);
    // console.log('get done');
    console.log(mpd);
    //loop
    $.each(mpd.parent_data, function(i, val) {
      // console.log(i, val);
      var li = '';
      var option = '';
      var size = val.size;
      // var size = val.sku;
      // size = size.split('-')[2];
      size = size.replace('_', '-');
      size = size + ' M';
      // console.log(val.store_quantity);
      if (val.store_quantity == 0) {
        li = '<li class="sold-out"><strike>' + size + '</strike> sold out</li>';
        option = '<option class="sold-out" disabled><strike>' + size + '</strike> sold out</option>';
        // console.log(li);

      } else {
        li = '<li data-sku="' + val.sku + '">' + size + '</li>';
        option = '<option data-sku="' + val.sku + '">' + size + '</option>';
      }
      $(elem + ' .sizes-container ul').append(li);
      $(elem + ' .sizes-container select').append(option);
    });

    //add completely sold out maybe
    var liLength = $(elem + ' .sizes-container li').length - 1;
    var liSoldOut = $(elem + ' .sizes-container li.sold-out').length;
    console.log(liLength, liSoldOut);
    if (liLength == liSoldOut) {
      $(elem + ' .sizes-container, ' + elem + ' .add-to-bag').addClass('completely-sold-out');
    }
  });
};