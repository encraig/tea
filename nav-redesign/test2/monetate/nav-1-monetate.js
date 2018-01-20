$(document).ready(function(){
	//make copy of new nav for sticky header
	var copy = $('.header-left').clone();
	//make copy of logo for sticky header
	var logoCopy = $('#company-logo').clone();

	//make copy of the sign in and bag for sticky header
	// var signInCopy = $('#top-bar').find('ul').clone();

	//make copy of the search for sticky header
	// var searchCopy = $('#site-search').clone();

	//move the new sticky header
	$('header[role="banner"]').prepend($('#new-sticky-header'));
	//move the ref image
	$('header[role="banner"]').prepend($('#background'));
	//add the copy of new nav to the sticky header
	$('#new-sticky-header').append(copy);
	//add the logo to the sticky header
	$('#new-sticky-header').find('.triangle').after(logoCopy);

	//add the sign in copy and search copy to the sticky header
	// $('#new-sticky-header').find('.new-nav').append('<div class="sign-in-copy"></div>');
	// $('.sign-in-copy').append(signInCopy);
	// $('.sign-in-copy').append(searchCopy);
	
	//change the sticky header search button text to ""
	$('#new-sticky-header').find('.search-btn').text('');
	//remove the orginal sticky header
	$('#sticky-header').remove();

	//if logged in new sticky header click to show the dropdown
	var member = $('#new-sticky-header').find('#welcome-member').find('span').find('a');
	$(member).click(function(e){
		e.preventDefault();
		$('.popup-member').toggle();
	});

	//close the drop down if logged in
	var closeMember = $('#new-sticky-header').find('#welcome-member').find('.popup-member').find('.close');
	$(closeMember).click(function(e){
		$('.popup-member').hide();
	});

	//on scroll show the new sticky header 
	$(window).scroll(function(e){
		//remove the original sticky header
		$('#sticky-header').remove();

		var y = $(this).scrollTop();
		//console.log(y);
  		if (y > 90) {
  			$('#new-sticky-header').css('top', y - 20);
    		$('#new-sticky-header').fadeIn();
  		} else {
    		$('#new-sticky-header').fadeOut();
    		$('#new-sticky-header').css('top', 0);
  		}
	});

	//triangle 1 animation on li hover
	$('.header-left nav.new-nav ul li.girls-clothing, .header-left nav.new-nav ul li.boys-clothing, .header-left nav.new-nav ul li.baby-girl-clothes, .header-left nav.new-nav ul li.baby-boy-clothes, .header-left nav.new-nav ul li.newborn-clothes, .header-left nav.new-nav ul li.clothing-sale').hover(function(e){
		
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
	$(/*'.header-left nav.new-nav ul li.girls-clothing .level-2 li.girl-cats, .header-left nav.new-nav ul li.boys-clothing .level-2 li.boy-cats, .header-left nav.new-nav ul li.baby-girl-clothes .level-2 li.baby-girl-cats, .header-left nav.new-nav ul li.baby-boy-clothes .level-2 li.baby-boy-cats,*/ '.clothing-sale .level-2 li').hover(function(e){
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
	$('.header-left nav.new-nav').hover(function(){
		$('.triangle').show();

	}, function(){
			$('.triangle').hide();
			// $('.triangle, .triangle-2').animate({
			// 	backgroundPositionX: '0%'
			// },400);
			$('.triangle').css('backgroundPositionX', '-2%');

	});

	//triangle 2 show & hide on nav hover
	// $('.header-left nav.new-nav ul li .level-2').hover(function(){
	// 	$('.triangle-2').show();

	// }, function(){
	// 		$('.triangle-2').hide();
	// 		$('.level-2').animate({
	// 			backgroundPositionX: '-25px'
	// 		},400);
			
	// });


	//on click toggle the search form
	// $('.the-search').click(function(){
	// 	$('.the-search-form').toggle();
	// });

	//closes the search form
	// $('.the-search-close-icon').click(function(){
	// 	$('.the-search-form').toggle();
	// });

	//binds the two search form on keyup
	// $('.the-search-form input').keyup(function(){
	// 	var letter = $(this).val();
	// 	$('.the-search-form input').val(letter);
	// });
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
			var htmlLink = saleContent.find('#content-block')[0].outerHTML;
			var styleTag = saleContent.prev()[0].outerHTML;
			
			$('.clothing-sale .nav-container .nav-img').append(styleTag, htmlLink);
			
			//change the url of the see what's new on sale
			$('.clothing-sale .nav-container .nav-img #content-block').attr('href','/clothing-sale');
		});
	};

//-----------------------------------------------------------------------------------------------------
	var getCat = function(url, selector, imgSrc){
		$.get(url, function(data){

			var favTitle = $(data).find('#sidebar-Favorites').find('h2').html();
			var favs = $(data).find('#sidebar-Favorites').find('li');

			var catsTitle = $(data).find('#sidebar-Shop-By-Category').find('h2').html();
			var cats = $(data).find('#sidebar-Shop-By-Category').find('li');
			
			var viewAll = $(data).find('#sidebar-Shop-By-Category').find('footer').find('a');
			var sale = $(data).find('#sidebar-Shop-By-Category').find('.sale').find('a');

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

			if(viewAll.length > 0) {
				viewAll =  viewAll[0].outerHTML;
			}

			if(sale.length !== 0) {
				sale = sale[0].outerHTML;
			}

			// $(elem + ' .level-2-li').append('<div class="nav-container"></div>');
			$(elem).append('<div class="nav-container"></div>');

			//IF NOT NEWBORN
			if(url !== 'https://www.teacollection.com/newborn-clothes'){
				//ADD THE IMAGES TO THE DROP DOWN MENU
				$(elem  + ' .nav-container').append('<div class="the-list"><div class="favs"><h2>'+favTitle+'</h2><ul></ul></div><div class="cats"><div class="cats-1"><h2>'+catsTitle+'</h2><ul></ul></div><div class="cats-2"><ul></ul></div></div></div><div class="nav-img"><a href="'+url+'"><img src="'+imgSrc+'" alt="' + alt + '" /></a></div>');
			

				//ADD THE LIST TO THE DROP DOWN MENU
				$(elem + ' .nav-container .the-list .favs ul').append(favs);
				// $(elem + ' .nav-container .the-list .cats ul').append(cats);

				//ADD THE CATS
				$.each(cats, function(i,val){
					if(i <= 5){
						$(elem + ' .nav-container .the-list .cats .cats-1 ul').append(val);
					} else {
						$(elem + ' .nav-container .the-list .cats .cats-2 ul').append(val);
					}
				
				});
				

				// //IF VIEWALL ADD TO TO DROP DOWN MENU
				if(viewAll && sale){
					$(elem + ' .nav-container .the-list .cats .cats-2 ul').append('<li class="view-all">'+viewAll+'</li>');
				}

			} else {
				//IF NEWBORN
				//ADD THE IMAGES TO THE DROP DOWN MENU
				$(elem  + ' .nav-container').append('<div class="the-list"><div class="favs"><h2>'+favTitle+'</h2><ul></ul></div><div class="nb-gift-shop"><ul></ul></div><div class="cats"><h2>'+catsTitle+'</h2><ul></ul></div></div><div class="nav-img"><a href="'+url+'"><img src="'+imgSrc+'" alt="' + alt + '" /></a></div>');

				//ADD THE LIST TO THE DROP DOWN MENU
				// $(elem + ' .nav-container .the-list .cats ul').append(favs,cats);
				// $(elem + ' .nav-container .the-list .favs ul').append(favs);

				//ADD THE FAVS
				$.each(favs, function(i,val){
					var text = $(val).text();
					var link = $(val).find('a').attr('href');
					//console.log(text, link);

					if(link == 'https://www.teacollection.com/newborn/gift-ideas'){
						//console.log(link);
						$(elem + ' .nav-container .the-list .nb-gift-shop').prepend('<h2><a href="'+link+'">Gift Shop</a></h2>');
					}

					else if(text == 'Gifts Under $30' || text == 'Gifts Under $50' || text == 'All Gifts'){
						$(elem + ' .nav-container .the-list .nb-gift-shop ul').append(val);
					} 

					else {
						$(elem + ' .nav-container .the-list .favs ul').append(val);
					}

					
				});

				//ADD THE CATS
				$(elem + ' .nav-container .the-list .cats ul').append(cats);

				// //IF VIEWALL ADD TO TO DROP DOWN MENU
				if(viewAll && sale){
					$(elem + ' .nav-container .the-list .cats ul').append('<li class="view-all">'+viewAll+'</li>');
				}
			}

			//IF SALE ADD TO TO DROP DOWN MENU
			if (sale.length !== 0) {
				$(elem + ' .nav-container .the-list .cats .cats-2 ul').append('<li class="the-sale">'+sale+'</li>');
			}
				
		});
	};

//-----------------------------------------------------------------------------------------------------
	//tween clothing
	getCat('https://www.teacollection.com/girls-clothing/new-arrivals','.tween-cats','https://s.tea-global.net/mas_assets/cache/image/2/0/d/1/1000x-134423.Jpg');

	//girls clothing
	getCat('https://www.teacollection.com/girls-clothing/new-arrivals','.girl-cats','https://s.tea-global.net/mas_assets/cache/image/2/0/d/1/1000x-134423.Jpg');

	//boys clothing
	getCat('https://www.teacollection.com/boys-clothing/new-arrivals','.boy-cats','https://s.tea-global.net/mas_assets/cache/image/2/0/d/4/1000x-134467.Jpg');

	//baby girl clothes
	getCat('https://www.teacollection.com/baby-girl-clothes/new-arrivals','.baby-girl-cats','https://s.tea-global.net/mas_assets/cache/image/2/1/6/1/1000x-136731.Jpg');

	//baby boy clothes
	getCat('https://www.teacollection.com/baby-boy-clothes/new-arrivals','.baby-boy-cats','https://s.tea-global.net/mas_assets/cache/image/2/0/d/2/1000x-134435.Jpg');

	//newborn clothes
	getCat('https://www.teacollection.com/newborn-clothes','.newborn-cats','https://s.tea-global.net/mas_assets/cache/image/1/c/9/6/416x416-117097.Jpg');

	//sale
	//the original
	// getSale('https://www.teacollection.com/sale/girls-clothing/view-all', '.clothing-sale')

	//the revised
	getSale2('https://www.teacollection.com/clothing-sale', '.clothing-sale');

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