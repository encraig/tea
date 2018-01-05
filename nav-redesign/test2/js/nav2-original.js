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

			$(elem).append('<div class="nav-container"><div class="the-list"><div class="cats"><h2>Category</h2><ul></ul></div></div></div>');

			var links = $(data).find('.dept-clothing-sale section');
			$(links).each(function(i,val){
				var link = $(val).find('h2').find('a');
				var cat = $(link).html();
				var href = $(link).attr('href');
				$(elem + ' .nav-container .the-list .cats ul').append('<li><a href="'+href+'">'+cat+'</a></li>');
			});
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

			var subElem;

			switch(elem){
				case '.girls-clothing':
					subElem = '.girl-cats';
					break;
				case '.boys-clothing':
					subElem = '.boy-cats';
					break;
				case '.baby-girl-clothes':
					subElem = '.baby-girl-cats';
					break;
				case '.baby-boy-clothes':
					subElem = '.baby-boy-cats';
					break;
			}

			// console.log(subElem); 

			var alt = elem.replace(/-/g,' ');
			alt = alt.replace('.','');
			
			//prod
			var baseUrl = 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/header/nav/test2/';

			//dev
			// var baseUrl = 'images/v4/';


			if(viewAll.context !== undefined) {
				viewAll =  viewAll[0].outerHTML;
			}

			if(sale.length !== 0) {
				sale = sale[0].outerHTML;
			}

			if(elem == '.newborn-clothes'){
				$(elem).append('<div class="nav-container"></div>');
			} else {
				$(elem + ' ' + subElem).append('<div class="nav-container"></div>');
			}
			

			if(url !== 'https://www.teacollection.com/newborn-clothes'){
				//ADD THE IMAGES TO THE DROP DOWN MENU
				$(elem  + ' .nav-container').append('<div class="the-list"><div class="favs"><h2>'+favTitle+'</h2><ul></ul></div><div class="cats"><h2>'+catsTitle+'</h2><ul></ul></div></div><div class="nav-img"><a href="'+url+'"><img src="'+baseUrl+imgSrc+'" alt="' + alt + '" /></a></div>');
			

				//ADD THE LIST TO THE DROP DOWN MENU
				$(elem + ' .nav-container .the-list .favs ul').append(favs);
				$(elem + ' .nav-container .the-list .cats ul').append(cats);

				// //IF VIEWALL ADD TO TO DROP DOWN MENU
				// if(viewAll && sale){
				// 	$(elem + ' .nav-container .the-list .cats ul').append('<li class="view-all">'+viewAll+'</li>');
				// }

			} else {
				//ADD THE IMAGES TO THE DROP DOWN MENU
				$(elem  + ' .nav-container').append('<div class="the-list"><div class="cats"><h2>'+catsTitle+'</h2><ul></ul></div></div><div class="nav-img"><a href="'+url+'"><img src="'+baseUrl+imgSrc+'" alt="' + alt + '" /></a></div>');

				//ADD THE LIST TO THE DROP DOWN MENU
				$(elem + ' .nav-container .the-list .cats ul').append(favs,cats);
			}

			//IF SALE ADD TO TO DROP DOWN MENU
			if (sale.length !== 0) {
				$(elem + ' .nav-container .the-list .cats ul').append('<li class="the-sale">'+sale+'</li>');
			}
				
		});
	};
 
//-----------------------------------------------------------------------------------------------------
	//girls clothing
	getCat('https://www.teacollection.com/girls-clothing/new-arrivals','.girls-clothing','g.jpg');

	//boys clothing
	getCat('https://www.teacollection.com/boys-clothing/new-arrivals','.boys-clothing','b.jpg');

	//baby girl clothes
	getCat('https://www.teacollection.com/baby-girl-clothes/new-arrivals','.baby-girl-clothes','bg.jpg');

	//baby boy clothes
	getCat('https://www.teacollection.com/baby-boy-clothes/new-arrivals','.baby-boy-clothes','bb.jpg');

	//newborn clothes
	getCat('https://www.teacollection.com/newborn-clothes','.newborn-clothes','nb.jpg');

	//sale
	//the original
	// getSale('https://www.teacollection.com/sale/girls-clothing/view-all', '.clothing-sale')

	//the revised
	getSale2('https://www.teacollection.com/clothing-sale', '.clothing-sale');

	// inspiration
	var footerContent = $('#cell-con').clone();
	$('.inspiration').append(footerContent);

	var inspDiv = $('.inspiration #cell-con div');
	$(inspDiv).each(function(i,val){
		//get only the top level of div
		if($(val).attr('class') !== 'cell-con-image'){
			//move the image
			var img = $(val).find('.cell-con-image');
			$(val).find('.header').prepend(img);
		}
		
	});

	
});