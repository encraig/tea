var getFunc = function(url, elem1, elem2) {
  $.get(url, function(data) {
    // console.log(data);
    var items = $(data).find('.what');
    // console.log(items);
    $.each(items, function(i, val) {
      var theItem = $(val).find('div');
      var name = $(val).attr('name');
      // console.log('name: ' + name);

      $.each(theItem, function(j, arr) {
        var image;
        var title = $(arr).find('.model').text();
        var price = $(arr).find('.price').text();
        var sizes = $(arr).find('.sizes').text();
        var url = $(arr).find('.url').text();
        var sku = $(arr).find('.sku').text();
        var color = $(arr).find('.color').text();
        var id = $(arr).attr('id');
        var teaStyle = $(arr).attr('data-tea-style');
        var teaStyleColor = $(arr).attr('data-tea-style-color');
        var teaSku = $(arr).attr('data-tea-sku');
        // console.log(image,title,price,sizes,url);
        var theElem;

        //desktop
        if ($(window).width() > 737) {
          image = $(arr).find('img').attr('src');
          theElem = '<section class="item" id="' + id + '" data-tea-style="' + teaStyle + '" data-tea-style-color="' + teaStyleColor + '" data-tea-sku="' + teaSku + '"><header><a href="' + url + '"><img src="' + image +
            '" alt="' + title + '"></a><div class="quickview-overlay"><h2><a href="#' + sku + '/' + color + '">Quick View</a></h2></div></header><section class="clearfix"><div class="item-details"><h2><a href="' + url + '">' +
            title + '</a></h2><div class="item-prices"><p>' + price + '</p></div><p class="size"><span class="thumb-sizes">' + sizes + '</span></p></div></section><footer class="clearfix"></footer></section>';
        } else {
          //mobile
          image = $(arr).find('img').attr('data-cfsrc');
          theElem = '<div id="' + id + '" class="single-item-box" data-tea-style="' + teaStyle + '" data-tea-style-color="' + teaStyleColor + '" data-tea-sku="' + teaSku +
            '"><div class="single-item-box-inner"><div class="image-box"><a href="' + url + '"><img src="' + image + '" alt="' + title + '"></a></div><div class="desc-box"><a href="' + url + '"><span>' + title +
            '</span></a><div class="price-wrapper"><span class="price">' + price + '</span></div><p class="sizes"><span>' + sizes + '</span></p><p class="thumb-rating"></p></div><div class="clear"></div></div></div>';
        }

        if (name !== 'newborn') {
          $(elem1).append(theElem);
        } else {
          $('#newborn-gifting').append(theElem);
        }

        // $(elem1).append(theElem);

      });

    });

    //hover
    $('.item').hover(function() {
      //show quickview
      $(this).find('.quickview-overlay').show();
    }, function() {
      //hide quickview
      $(this).find('.quickview-overlay').removeAttr('style');
    });

    //quickview
    // $('.quickview-overlay').find('a').click(qv);
    $('.quickview-overlay').find('a').addClass('add2list');

    // console.log('all done getting pdps! infinite: ' + infiniteLength + ' newborn: ' + newbornLength);

  });

};