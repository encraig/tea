"use strict";

$(document).ready(function () {
  var getBag = function getBag() {
    //empty the bag
    $('.the-shopping-cart-items').find('li').remove();
    $('.the-shopping-cart-items').find('.subtotal').remove(); //updating message

    $('.the-shopping-cart-items .form').prepend('<span class="updating-cart-message" style="display: block; text-align: center; padding: 10px 0; font-size: 15px;">Updating shopping cart...</span>');
    setTimeout(function () {
      $.get('https://www.teacollection.com/?page=cart', function (data) {
        var items = $(data).find('section.item');
        var bagItems = 0; //get the total number of items in bag

        $.each(items, function (i, val) {
          var qty = $(val).find('dt')[2].innerText;
          qty = qty.replace('Quantity: ', '');
          qty = Number(qty);
          bagItems += qty;
        });
        console.log(bagItems);

        if (bagItems > 0) {
          console.log('you got something in your bag'); //change the bag icon

          $('.view-cart > img').attr('src', 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/header/nav/bag-icon-filled.png'); //add the number

          $('.view-cart > span').text(bagItems); //adjust css for single digits

          if (bagItems < 10) {
            $('.view-cart > span').css('left', '5px');
          } //remove css for double digits
          else if (bagItems > 9 && bagItems < 100) {
              $('.view-cart > span').removeAttr('style');
            } //adjust css for triple digits
            else if (bagItems > 99) {
                $('.view-cart > span').css('left', '1px');
              }

          $.each(items, function (i, val) {
            var pdpUrl = $(val).find('a')[0].href;
            var img = $(val).find('a')[0].childNodes[0].src; // console.log(pdpUrl, img);

            var title = $(val).find('h1').text();
            var price = $(val).find('.regular-price').text(); // console.log(title, price);

            var color = $(val).find('dd').text();
            var qty = $(val).find('dt')[2].innerText;
            console.log(qty);
            qty = qty.replace(' Quantity: ', ''); // console.log(color, qty);

            var edit = $(val).find('.ajax-cart-edit').attr('href'); // var editUrl = 'https://www.teacollection.com/?page=cart' + edit;

            var editUrl = edit;
            edit = edit.split('/')[0];
            edit = edit.replace('#', '');
            var size = $(val).find('dt')[1].innerText;
            size = size.replace('Size: ', '');
            var rmUrl = $(val).find('.ajax-cart-remove')[0].href; // console.log(edit, size, rmUrl);

            var elem = '<li><div class="left"><a href="' + pdpUrl + '"><img src="' + img + '" alt="' + title + '"></a></div><div class="right"><span class="bag-title"><a href="' + pdpUrl + '">' + title + '</a></span><span class="bag-price">' + price + '</span><span class="bag-color">color: ' + color + '</span><span class="bag-size">size: ' + size + '</span><span class="bag-qty">quantity: ' + qty + '</span><span class="bag-links"><a href="' + editUrl + '" class="bag-edit ajax-cart-edit">edit</a> | <a href="' + rmUrl + '" class="bag-remove">remove</a></div></span></li>';
            $('.the-shopping-cart-items .form ul').append(elem);
          }); //the total
          //get the subtotal, away from free shipping, and checkout url

          var subtotal = $(data).find('footer').find('h3')[0].innerText;
          var fs = $(data).find('footer').find('h3')[1].innerText; // console.log(subtotal, fs);
          // var checkout = $(data).find('footer').find('.ajax-checkout-button');

          var totalElem = '<div class="subtotal"><span class="sub-title">shopping bag</span><span>' + subtotal + '</span><span>' + fs + '</span><a href="/?page=checkout" class="sub-checkout">checkout</a><a href="/?page=cart" class="sub-bag-details">view bag details</a></div>'; // console.log(totalElem);

          $('.the-shopping-cart-items .form').append(totalElem); //edit quantity

          $('.the-qty').focusout(function () {
            $(this).closest('.bag-qty').prev('.bag-error-number').remove();
            console.log('changed input.the-qty');
            var num = Number($(this).val());
            console.log(num);
            var id = $(this).attr('name'); //not a number

            if (isNaN(num) || num == '') {
              var bag = $(this).closest('.bag-qty');
              $(bag).before('<span class="bag-error-number" style="color:red;">Please enter a valid number</span>');
              $(this).focus();
            } //is a number
            else {
                //remove error message
                $(this).closest('.bag-error-number').remove();
                console.log(id);
                $.post('https://www.teacollection.com/?page=cart&action=update&qty[' + id + ']=' + num, function (data) {
                  console.log('success on updating the cart from monetate');
                  getBag();
                });
              }
          }); //remove bag click

          $('.bag-remove').click(function (e) {
            e.preventDefault();
            var url = $(this).attr('href');
            console.log('bag removed clicked ', url);
            $.post(url, function (data) {
              console.log('removed successful from monetate');
              getBag();
            });
          });
          $('.bag-edit').click(function () {
            setTimeout(function () {
              $('#product-detail-page.quick-view .add-to-bag').click(function (e) {
                //console.log('add to bag monetate dynamic');
                getBag();
              });
            }, 1000);
          });
        } // else no items in bag
        else {
            console.log('nothing in bag'); //change the bag icon

            $('.view-cart > img').attr('src', 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/header/nav/bag-icon-empty.png');
            var signIn = $('#top-bar').find('ul.clearfix > li')[1].id; //get the free shipping

            var freeShip = $('#free-shipping-container p:last-of-type').text().split(' ');
            freeShip = freeShip[freeShip.length - 1];
            var emptyElem; //signed in

            if (signIn == 'welcome-member') {
              console.log('signed in from shopping bag');
              emptyElem = '<div class="subtotal"><span class="sub-title">shopping bag</span><span>Your shopping bag is empty</span><span>Free shipping on orders ' + freeShip + '+</span><a href="/" class="sub-checkout">start shopping</a><a href="/?page=wishlists" class="sub-bag-details">view wishlists</a></div>';
            } //signed out
            else {
                console.log('signed out from shoppping bag');
                emptyElem = '<div class="subtotal"><span class="sub-title">shopping bag</span><span>Your shopping bag is empty</span><span>Free shipping on orders ' + freeShip + '+</span><a href="/" class="sub-checkout">start shopping</a></div>';
              } // console.log(totalElem);


            $('.the-shopping-cart-items .form').append(emptyElem);
          } //remove updating message


        $('.updating-cart-message').remove();
      });
    }, 500);
  }; //toggle the cart
  // $('#new-icons ul li.the-bag-icon').click(function(e){
  // 	//e.preventDefault()
  // 	if(e.target.className == 'toggle'){
  // 		$(this).find('.the-shopping-cart-items').toggle();
  // 	}
  // });
  //hover show the cart


  $('#new-icons ul li.the-bag-icon').hover(function (e) {
    $(this).find('.the-shopping-cart-items').show();
  }, function () {
    $(this).find('.the-shopping-cart-items').hide();
  });
  getBag(); //on add to bag call getBag()

  $('.pdp-item-details-attributes button.add-to-bag').click(function () {
    console.log('added to bag from monetate'); //trigge the hover

    $('.view-cart').trigger('mouseenter'); // setTimeout(function(){
    // 	location.reload();
    // },1000);

    getBag();
  }); //dynamically added elements with clicks
  // $(".gift-shop-container, .girls-clothing-cat").on('DOMNodeInserted', function(e){
  // console.log(e);
  // $('.drop .cta').click(function(e){
  // 	console.log('added to bag from monetate');
  // console.log($(this));
  // console.log(e);
  //trigge the hover
  // $('.view-cart').trigger('mouseenter');
  // setTimeout(function(){
  // 	location.reload();
  // },1000);
  // getBag();
  // 	});
  // });
  //dynamically added elements with clicks

  $(".gift-shop-container .gift-it, .girls-clothing-cat .gift-it").on('click', function (e) {
    // console.log('clicked gift-it')
    setTimeout(function () {
      $('.drop .cta').click(function (e) {
        // console.log('add to bag monetate dynamic');
        getBag();
      });
    }, 1000);
  }); //dynamically added elements with clicks on category pages

  $('.item').on('mouseenter', function () {
    $(".quickview-overlay.active h2 a").on('click', function (e) {
      // console.log('clicked gift-it')
      setTimeout(function () {
        $('.add-to-bag').click(function (e) {
          // console.log('add to bag monetate dynamic cats');
          getBag();
        });
      }, 1000);
    });
  });
});
//# sourceMappingURL=icon-bag.js.map
