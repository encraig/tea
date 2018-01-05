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

			$(elem + ' .level-2-li').append('<div class="nav-container"></div>');

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
	//girls clothing
	getCat('https://www.teacollection.com/girls-clothing/new-arrivals','.girls-clothing','https://s.tea-global.net/mas_assets/cache/image/2/0/d/1/1000x-134423.Jpg');

	//boys clothing
	getCat('https://www.teacollection.com/boys-clothing/new-arrivals','.boys-clothing','https://s.tea-global.net/mas_assets/cache/image/2/0/d/4/1000x-134467.Jpg');

	//baby girl clothes
	getCat('https://www.teacollection.com/baby-girl-clothes/new-arrivals','.baby-girl-clothes','https://s.tea-global.net/mas_assets/cache/image/2/1/6/1/1000x-136731.Jpg');

	//baby boy clothes
	getCat('https://www.teacollection.com/baby-boy-clothes/new-arrivals','.baby-boy-clothes','https://s.tea-global.net/mas_assets/cache/image/2/0/d/2/1000x-134435.Jpg');

	//newborn clothes
	getCat('https://www.teacollection.com/newborn-clothes','.newborn-clothes','https://s.tea-global.net/mas_assets/cache/image/1/c/9/6/416x416-117097.Jpg');

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