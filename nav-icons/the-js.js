$(document).ready(function(){
	//make copy of new nav for sticky header
	var copy = $('header#new-version').clone();

	//add the copy of new nav to the sticky header
	$('#new-sticky-header.version2').append(copy);
	
	//if logged in new sticky header click to show the dropdown
	// var member = $('#new-sticky-header').find('#welcome-member').find('span').find('a');
	// $(member).click(function(e){
	// 	e.preventDefault();
	// 	$('.popup-member').toggle();
	// });

	//close the drop down if logged in
	// var closeMember = $('#new-sticky-header').find('#welcome-member').find('.popup-member').find('.close');
	// $(closeMember).click(function(e){
	// 	$('.popup-member').hide();
	// });

	//on scroll show the new sticky header 
	$(window).scroll(function(e){
		//remove the original sticky header
		// $('#sticky-header').remove();

		var y = $(this).scrollTop();
		//console.log(y);
  		if (y > 90) {
  			$('#new-sticky-header.version2').css('top', y);
    		$('#new-sticky-header.version2').fadeIn();
  		} else {
    		$('#new-sticky-header.version2').fadeOut();
    		$('#new-sticky-header.version2').css('top', 0);
  		}
	});

	//triangle 1 animation on li hover
	$(' nav.new-nav ul li.girls-clothing,  nav.new-nav ul li.boys-clothing,  nav.new-nav ul li.baby-girl-clothes,  nav.new-nav ul li.baby-boy-clothes,  nav.new-nav ul li.newborn-clothes,  nav.new-nav ul li.clothing-sale').hover(function(e){
		
		var theHover = $(this).attr('class');
		var $this = $(this).position();
		var xPos;
		if(theHover == 'clothing-sale'){
			xPos = $this.left + 40;
		} else {
			xPos = $this.left;
		}
		
		 
		$('.triangle').animate({
			backgroundPositionX: xPos
		},'fast');

	}, function(e){
		//console.log('hover off')
		$('.triangle').stop();

	});

	//triangle 2 animation on li hover
	$(/*' nav.new-nav ul li.girls-clothing .level-2 li.girl-cats,  nav.new-nav ul li.boys-clothing .level-2 li.boy-cats,  nav.new-nav ul li.baby-girl-clothes .level-2 li.baby-girl-cats,  nav.new-nav ul li.baby-boy-clothes .level-2 li.baby-boy-cats,*/ '.clothing-sale .level-2 li').hover(function(e){
		console.log('hover');
		//var $this = $(this).position();
		var $this = $(this).find('span').position();
		
		var xPos = $this.left;
		$('.level-2').animate({
			backgroundPositionX: xPos
		},'fast');
	}, function(e){
		//console.log('hover off')
		$('.level-2').stop();
	});

	//triangle 1 show & hide on nav hover
	$(' nav.new-nav').hover(function(){
		$('.triangle').show();

	}, function(){
			$('.triangle').hide();
			// $('.triangle, .triangle-2').animate({
			// 	backgroundPositionX: '0%'
			// },400);
			$('.triangle').css('backgroundPositionX', '-2%');

	});

});  
$(document).ready(function(){

//-----------------------------------------------------------------------------------------------------
	var getSale = function(url, elem){
		$.get(url, function(data){
			var girl = $(data).find('#sidebar-Girl');
			var boy = $(data).find('#sidebar-Boy');
			var babyGirl = $(data).find('#sidebar-Baby-Girl');
			var babyBoy = $(data).find('#sidebar-Baby-Boy');
			
			var links = [];
			links.push(girl,boy,babyGirl,babyBoy);

			$(elem).append('<ul class="the-list"></ul>');

			$(links).each(function(i,val){
				var id = $(val).attr('id');
				var header = $(val).find('h2').find('a')[0].outerHTML;
				var list = $(val).find('ul')[0].outerHTML;
				var all = $(val).find('footer').find('a')[0].outerHTML;
				
				

				setTimeout(function(){
					list = $(list).append('<li class="view-all">'+ all +'</li>');
					list = list[0].outerHTML;
					$(elem + ' ul.the-list').append('<li>' + header + list + '</li>'); 
				},500);
				
			});
		});
	};

//-----------------------------------------------------------------------------------------------------
	var getSale2 = function(url, elem){
		$.get(url, function(data){

			//$(elem).append('<div class="nav-container"><div class="the-list"><div class="cats"><h2>Category</h2><ul></ul></div></div><div class="nav-img"></div></div>');

			var links = $(data).find('.dept-clothing-sale section');
			$(links).each(function(i,val){
				var link = $(val).find('h2').find('a');
				var li = $(val).find('li');
				var cat = $(link).html();
				var href = $(link).attr('href');
				var id = $(val).attr('id');
				var name = id.replace('sidebar-','');
				name = name.replace('-',' ').toLowerCase();

				//make level 2
				$(elem + ' .level-2').append('<li class="'+id+'"><span><a href="'+href+'">'+name+'</a></span></li>');

				//append the containers
				$(elem + ' .level-2 .' + id).append('<div class="nav-container"><div class="the-list"><div class="cats"><ul></ul></div></div><div class="nav-img"></div></div>');

				//append the list
				$(li).each(function(j,arr){
					var href = $(arr).find('a').attr('href');
					var cat = $(arr).find('a').text();
					$(elem + ' .level-2 .' + id +' .nav-container .the-list .cats ul').append('<li><a href="'+href+'">'+cat+'</a></li>');
				});
				

				//$(elem + ' .nav-container .the-list .cats ul').append('<li><a href="'+href+'">'+cat+'</a></li>');
			});

			var saleContent = $(data).find('.sale-content');
			// var htmlLink = saleContent.find('#content-block')[0].outerHTML;
			var htmlLink = saleContent.find('a')[0].outerHTML;
			var styleTag = saleContent.prev()[0].outerHTML;
			
			$('.clothing-sale .nav-container .nav-img').append(styleTag, htmlLink);

			$('.clothing-sale .nav-container .nav-img a img').css('width','100%');
			
			//change the url of the see what's new on sale
			$('.clothing-sale .nav-container .nav-img #content-block').attr('href','/clothing-sale');
		});
	};

//-----------------------------------------------------------------------------------------------------
	var getCat = function(url, selector, imgSrc){
		$.get(url, function(data){

			var favTitle = $(data).find('#sidebar-Favorites').find('h2').html();
			var favs = $(data).find('#sidebar-Favorites').find('li');

			var catsTitle;
			var cats;

			//if tween
			// if(url == 'https://www.teacollection.com/tween-girls-clothing'){
				// console.log('its tween');
				// catsTitle = $(data).find('#sidebar-Shop-By-Category').find('h2').html();
				// cats = $(data).find('#sidebar-Shop-By-Category').find('li');
				// console.log(catsTitle, cats);
			// }
			//not tween
			// else {
			// 	catsTitle = $(data).find('#sidebar-Shop-By-Category').find('h2').html();
			// 	cats = $(data).find('#sidebar-Shop-By-Category').find('li');
			// }

			catsTitle = $(data).find('#sidebar-Shop-By-Category').find('h2').html();
			cats = $(data).find('#sidebar-Shop-By-Category').find('li');

			var viewAll = $(data).find('#sidebar-Shop-By-Category').find('footer').find('a');
			var sale = $(data).find('#sidebar-Shop-By-Category').find('.sale').find('a');
			// console.log(sale);
			// var elem = url.split('.com/');
			// elem = '.' + elem[1];

			var elem = selector;

			var alt = elem.replace(/-/g,' ');
			alt = alt.replace('.','');
			
			//prod
			var baseUrl = 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/header/nav/test2/';

			//dev
			// var baseUrl = 'images/v4/';


			// if(viewAll.context !== undefined) {
			// 	viewAll =  viewAll[0].outerHTML;
			// }

			if(viewAll.length !== 0) {
				viewAll =  viewAll[0];
			} else {
				viewAll = 0;
			}

			if(sale.length !== 0) {
				sale = sale[0];
			} else {
				sale = 0;
			}

			// $(elem + ' .level-2-li').append('<div class="nav-container"></div>');
			$(elem).append('<div class="nav-container"></div>');

			//IF NOT NEWBORN
			if(url !== 'https://www.teacollection.com/newborn-clothes'){
				//ADD THE IMAGES TO THE DROP DOWN MENU
				$(elem  + ' .nav-container').append('<div class="the-list"><div class="favs"><h2>'+favTitle+'</h2><ul></ul></div><div class="cats"><div class="cats-1"><h2>'+catsTitle+'</h2><ul></ul></div><div class="cats-2"><ul></ul></div></div></div><div class="nav-img"><a href="'+url+'?nocache=1"><img src="'+imgSrc+'" alt="' + alt + '" /></a></div>');
			

				//ADD THE LIST TO THE DROP DOWN MENU
				$.each(favs, function(i,val){
					var text = $(val).find('a').text();
					var url = $(val).find('a').attr('href');
					url = url + '?nocache=1';
					// console.log(url, text);
					$(elem + ' .nav-container .the-list .favs ul').append('<li><a href="'+ url +'">'+ text +'</a></li>');
				});

				// $(elem + ' .nav-container .the-list .favs ul').append(favs);
				// $(elem + ' .nav-container .the-list .cats ul').append(cats);

				//ADD THE CATS
				$.each(cats, function(i,val){
					var text = $(val).find('a').text();
					var url = $(val).find('a').attr('href');
					url = url + '?nocache=1';
					if(i <= 5){
						$(elem + ' .nav-container .the-list .cats .cats-1 ul').append('<li><a href="'+ url +'">'+ text +'</a></li>');
					} else {
						$(elem + ' .nav-container .the-list .cats .cats-2 ul').append('<li><a href="'+ url +'">'+ text +'</a></li>');
					}
				
				});
				

				// //IF VIEWALL ADD TO TO DROP DOWN MENU
				if(viewAll !== 0){
					$(elem + ' .nav-container .the-list .cats .cats-2 ul').append('<li class="view-all"><a href="'+ viewAll.href +'?nocache=1">'+ viewAll.innerText +'</a></li>');
				}

			} else {
				//IF NEWBORN
				//ADD THE IMAGES TO THE DROP DOWN MENU
				$(elem  + ' .nav-container').append('<div class="the-list"><div class="favs"><h2>'+favTitle+'</h2><ul></ul></div><div class="nb-gift-shop"><ul></ul></div><div class="cats"><h2>'+catsTitle+'</h2><ul></ul></div></div><div class="nav-img"><a href="'+url+'?nocache=1"><img src="'+imgSrc+'" alt="' + alt + '" /></a></div>');

				//ADD THE LIST TO THE DROP DOWN MENU
				// $(elem + ' .nav-container .the-list .cats ul').append(favs,cats);
				// $(elem + ' .nav-container .the-list .favs ul').append(favs);

				//ADD THE FAVS
				$.each(favs, function(i,val){
					var text = $(val).text();
					var link = $(val).find('a').attr('href');
					link = link + '?nocache=1';
					//console.log(text, link);

					if(link == 'https://www.teacollection.com/newborn/gift-ideas?nocache=1'){
						//console.log(link);
						$(elem + ' .nav-container .the-list .nb-gift-shop').prepend('<h2><a href="'+link+'">Gift Shop</a></h2>');
					}

					else if(text == 'Gifts Under $30' || text == 'Gifts Under $50' || text == 'All Gifts'){
						$(elem + ' .nav-container .the-list .nb-gift-shop ul').append('<li><a href="'+ link +'">'+ text +'</a></li>');
					} 

					else {
						$(elem + ' .nav-container .the-list .favs ul').append('<li><a href="'+ link +'">'+ text +'</a></li>');
					}

					
				});

				//ADD THE CATS
				$.each(cats, function(i,val){
					var text = $(val).find('a').text();
					var url = $(val).find('a').attr('href');
					url = url + '?nocache=1';
					$(elem + ' .nav-container .the-list .cats ul').append('<li><a href="'+ url +'">'+ text +'</a></li>');
				});
				// $(elem + ' .nav-container .the-list .cats ul').append(cats);

				// //IF VIEWALL ADD TO TO DROP DOWN MENU
				if(viewAll !== 0){
					$(elem + ' .nav-container .the-list .cats ul').append('<li class="view-all"><a href="'+ viewAll.href +'?nocache=1">'+ viewAll.innerText +'</a></li>');
				}
			}

			//IF SALE ADD TO TO DROP DOWN MENU
			if (sale !== 0) {
				$(elem + ' .nav-container .the-list .cats .cats-2 ul').append('<li class="the-sale"><a href="'+ sale.href +'?nocache=1">'+ sale.innerText +'</a></li>');
			}
				
		});
	};

//-----------------------------------------------------------------------------------------------------
	//tween clothing
	getCat('https://www.teacollection.com/tween-girls-clothing','.tween-cats','https://s.tea-global.net/mas_assets/cache/image/2/b/8/7/416x416-178302.Jpg');

	//girls clothing
	getCat('https://www.teacollection.com/girls-clothing/new-arrivals','.girl-cats','https://s.tea-global.net/mas_assets/cache/image/2/d/8/2/416x416-186400.Jpg');

	//boys clothing
	getCat('https://www.teacollection.com/boys-clothing/new-arrivals','.boy-cats','https://s.tea-global.net/mas_assets/cache/image/2/d/8/1/416x416-186387.Jpg');

	//baby girl clothes
	getCat('https://www.teacollection.com/baby-girl-clothes/new-arrivals','.baby-girl-cats','https://s.tea-global.net/mas_assets/cache/image/2/d/7/b/416x416-186301.Jpg');

	//baby boy clothes
	getCat('https://www.teacollection.com/baby-boy-clothes/new-arrivals','.baby-boy-cats','https://s.tea-global.net/mas_assets/cache/image/2/d/7/d/416x416-186321.Jpg');

	//newborn clothes
	getCat('https://www.teacollection.com/newborn-clothes','.newborn-cats','https://s.tea-global.net/mas_assets/cache/image/2/6/8/e/416x416-157920.Jpg');

	//sale
	//the original
	// getSale('https://www.teacollection.com/sale/girls-clothing/view-all', '.clothing-sale')

	//the revised
	getSale2('https://www.teacollection.com/clothing-sale?nocache=12', '.clothing-sale');

	// inspiration
	// var footerContent = $('#cell-con').clone();
	// $('.inspiration').append(footerContent);

	// var inspDiv = $('.inspiration #cell-con div');
	// $(inspDiv).each(function(i,val){
	// 	//get only the top level of div
	// 	if($(val).attr('class') !== 'cell-con-image'){
	// 		//move the image
	// 		var img = $(val).find('.cell-con-image');
	// 		$(val).find('.header').prepend(img);
	// 	}
		
	// });

	
});
$(document).ready(function(){

var getBag = function(){

	//empty the bag
	$('.the-shopping-cart-items').find('li').remove();
	$('.the-shopping-cart-items').find('.subtotal').remove();

	//updating message
	$('.the-shopping-cart-items .form').prepend('<span class="updating-cart-message" style="display: block; text-align: center; padding: 10px 0; font-size: 15px;">Updating shopping cart...</span>');
setTimeout(function(){
	$.get('https://www.teacollection.com/?page=cart', function(data){
		var items = $(data).find('section.item');
		var bagItems = 0;
		//get the total number of items in bag
		$.each(items, function(i,val){
			var qty = $(val).find('dt')[2].innerText;
			qty = qty.replace('Quantity: ', '');
			qty = Number(qty);
			bagItems += qty;
		});

		console.log(bagItems);

		if(bagItems > 0){
			console.log('you got something in your bag');

			//change the bag icon
			$('.view-cart > img').attr('src','https://www.teacollection.com/mas_assets/theme/tea_collection/images/header/nav/bag-icon-filled.png');
			//add the number
			$('.view-cart > span').text(bagItems);

			//adjust css for single digits
			if(bagItems < 10){
				$('.view-cart > span').css('left', '5px');
			} 
			//remove css for double digits
			else if(bagItems > 9 && bagItems < 100){
				$('.view-cart > span').removeAttr('style');
			}
			//adjust css for triple digits
			else if (bagItems > 99){
				$('.view-cart > span').css('left', '1px');
			}

			$.each(items, function(i,val){
				var pdpUrl = $(val).find('a')[0].href;
				var img = $(val).find('a')[0].childNodes[0].src;
				// console.log(pdpUrl, img);
				var title = $(val).find('h1').text();
				var price = $(val).find('.regular-price').text();
				// console.log(title, price);
				var color = $(val).find('dd').text();
				var qty = $(val).find('dt')[2].innerText;
				console.log(qty);
				qty = qty.replace(' Quantity: ', '');
				// console.log(color, qty);
				var edit = $(val).find('.ajax-cart-edit').attr('href');
				// var editUrl = 'https://www.teacollection.com/?page=cart' + edit;
				var editUrl = edit;
				edit = edit.split('/')[0];
				edit = edit.replace('#','');
				var size = $(val).find('dt')[1].innerText;
				size = size.replace('Size: ', '');
				var rmUrl = $(val).find('.ajax-cart-remove')[0].href;
				// console.log(edit, size, rmUrl);

				var elem = '<li><div class="left"><a href="'+ pdpUrl +'"><img src="'+ img +'" alt="'+ title +'"></a></div><div class="right"><span class="bag-title"><a href="'+ pdpUrl +'">'+ title +'</a></span><span class="bag-price">'+price+'</span><span class="bag-color">color: '+ color +'</span><span class="bag-size">size: '+ size +'</span><span class="bag-qty">quantity: '+ qty +'</span><span class="bag-links"><a href="'+ editUrl +'" class="bag-edit ajax-cart-edit">edit</a> | <a href="'+ rmUrl +'" class="bag-remove">remove</a></div></span></li>';
				$('.the-shopping-cart-items .form ul').append(elem);
			});

			//the total
			//get the subtotal, away from free shipping, and checkout url
			var subtotal = $(data).find('footer').find('h3')[0].innerText;
			var fs = $(data).find('footer').find('h3')[1].innerText;
			// console.log(subtotal, fs);
			// var checkout = $(data).find('footer').find('.ajax-checkout-button');

			var totalElem =  '<div class="subtotal"><span class="sub-title">shopping bag</span><span>'+ subtotal +'</span><span>'+ fs +'</span><a href="/?page=checkout" class="sub-checkout">checkout</a><a href="/?page=cart" class="sub-bag-details">view bag details</a></div>';

			// console.log(totalElem);

			$('.the-shopping-cart-items .form').append(totalElem);

			//edit quantity
			$('.the-qty').focusout(function(){
				
				$(this).closest('.bag-qty').prev('.bag-error-number').remove();

				console.log('changed input.the-qty'); 
				var num = Number($(this).val());
				console.log(num);
				var id = $(this).attr('name');
				//not a number
				if(isNaN(num) || num == ''){
					var bag = $(this).closest('.bag-qty');
					$(bag).before('<span class="bag-error-number" style="color:red;">Please enter a valid number</span>')
					$(this).focus()
				}
				//is a number
				else {
					//remove error message
					$(this).closest('.bag-error-number').remove();
					
					console.log(id);
					$.post('https://www.teacollection.com/?page=cart&action=update&qty['+ id +']=' + num, function(data){
						console.log('success on updating the cart from monetate');
						getBag();
					});
				}
				
			});

			//remove bag click
			$('.bag-remove').click(function(e){ 
				e.preventDefault();
				var url = $(this).attr('href');
				console.log('bag removed clicked ', url);
				$.post(url, function(data){
					console.log('removed successful from monetate');
					getBag();
				});
			});

			$('.bag-edit').click(function(){
				setTimeout(function(){
					$('#product-detail-page.quick-view .add-to-bag').click(function(e){
						//console.log('add to bag monetate dynamic');
						getBag();
					});
				},1000);
			});

		}
		// else no items in bag
		else {
			console.log('nothing in bag');

			//change the bag icon
			$('.view-cart > img').attr('src','https://www.teacollection.com/mas_assets/theme/tea_collection/images/header/nav/bag-icon-empty.png');

			var signIn = $('#top-bar').find('ul.clearfix > li')[1].id;

			//get the free shipping
			var freeShip = $('#free-shipping-container p:last-of-type').text().split(' ');
			freeShip = freeShip[freeShip.length - 1];

			var emptyElem;
	
			//signed in
			if(signIn == 'welcome-member'){
				console.log('signed in from shopping bag');
				emptyElem =  '<div class="subtotal"><span class="sub-title">shopping bag</span><span>Your shopping bag is empty</span><span>Free shipping on orders '+ freeShip +'+</span><a href="/" class="sub-checkout">start shopping</a><a href="/?page=wishlists" class="sub-bag-details">view wishlists</a></div>';
			}
			//signed out
			else {
				console.log('signed out from shoppping bag');
				emptyElem =  '<div class="subtotal"><span class="sub-title">shopping bag</span><span>Your shopping bag is empty</span><span>Free shipping on orders '+ freeShip +'+</span><a href="/" class="sub-checkout">start shopping</a></div>';
			}

			// console.log(totalElem);

			$('.the-shopping-cart-items .form').append(emptyElem);
		}

		//remove updating message
		$('.updating-cart-message').remove();
		
	});

}, 500);

};


//toggle the cart
// $('#new-icons ul li.the-bag-icon').click(function(e){
// 	//e.preventDefault()
// 	if(e.target.className == 'toggle'){
// 		$(this).find('.the-shopping-cart-items').toggle();
// 	}
// });


//hover show the cart
$('#new-icons ul li.the-bag-icon').hover(function(e){
	$(this).find('.the-shopping-cart-items').show();
}, function(){
	$(this).find('.the-shopping-cart-items').hide();
});

getBag();

//on add to bag call getBag()
$('.pdp-item-details-attributes button.add-to-bag').click(function(){
	console.log('added to bag from monetate');
	//trigge the hover
	$('.view-cart').trigger('mouseenter');

	// setTimeout(function(){
	// 	location.reload();
	// },1000);


	getBag();

	
});

//dynamically added elements with clicks
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
$(".gift-shop-container .gift-it, .girls-clothing-cat .gift-it").on('click', function(e){
	// console.log('clicked gift-it')
	setTimeout(function(){
		$('.drop .cta').click(function(e){
			// console.log('add to bag monetate dynamic');
			getBag();
		});
	},1000);	
});

//dynamically added elements with clicks on category pages
$('.item').on('mouseenter', function(){
	$(".quickview-overlay.active h2 a").on('click', function(e){
		// console.log('clicked gift-it')
		setTimeout(function(){
			$('.add-to-bag').click(function(e){
				// console.log('add to bag monetate dynamic cats');
				getBag();
			});
		},1000);	
	});
});


});
$(document).ready(function(){
	//toggle the search bar
	$('.the-search-icon').click(function(){
		//$('.the-search-form').toggle();
		$('.search-container').show();
		// $('.the-search-form').css('left','0px');

		$(this).closest('ul').prev().find('.the-search-form').animate({
			left:'0px'
		}, function(){
			$(this).find('.monetate-search').focus();
		});

		// setTimeout(function(){
		// 	$('.monetate-search').focus();
		// },1000);
		
	});

	$('.new-nav, .content-wrapper, .close-the-search-form').click(function(){
		// $('.the-search-form').removeAttr('style');

		$('.the-search-form').animate({
			left:'300px'
		}, function(){
			$('.search-container').hide();
		});

		// setTimeout(function(){
		// 	$('.search-container').hide();
		// },1000);
	});
});
$(document).ready(function(){

	var signIn = $('#top-bar').find('ul.clearfix > li')[1].id;
	
	//signed in
	if(signIn == 'welcome-member'){
		console.log('signed in');

		//get the links
		var links = $('#' + signIn).find('.popup-member ul li a'); 
		//loop
		$.each(links, function(i,val){
			var url = $(val).attr('href');
			var text = $(val).text();
			//if sign out
			if(text == 'Sign Out') {
				$('.the-account-links ul').append('<li class="sign-out"><a href="'+ url +'">'+ text +'</a></li>');
			}
			//not sign out
			else {
				$('.the-account-links ul').append('<li><a href="'+ url +'">'+ text +'</a></li>');
			}
			
		});
	}
	//not signed in
	else {
		console.log('signed out');
		$('.the-account-links ul').append('<li class="create"><a href="/?page=register">create an account</a></li><li class="sign-in"><a href="/?page=login">sign in</a></li>');
	}

	//hover
	$('.the-account-icon').hover(function(){
		$(this).find('.the-account-links').show();
	}, function(){
		$(this).find('.the-account-links').hide();
	});

});