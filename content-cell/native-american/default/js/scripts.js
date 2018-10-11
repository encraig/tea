//gift-it click
$('.gift-it').click(function(e){
	e.preventDefault();

	//remove any .drop on the page
	$('.drop').remove();

	//variables
	var div = $(this).closest('.cell');
	var sku1 = $(div).attr('data-sku-1');
	var sku2 = $(div).attr('data-sku-2');
	var sku3 = $(div).attr('data-sku-3');
	var sku4 = $(div).attr('data-sku-4');
	var sku5 = $(div).attr('data-sku-5');
	var sku6 = $(div).attr('data-sku-6');
	var sku7 = $(div).attr('data-sku-7');
	var sku8 = $(div).attr('data-sku-8');
	var sku9 = $(div).attr('data-sku-9');
	var sku10 = $(div).attr('data-sku-10');

	var skus = [sku1, sku2, sku3, sku4, sku5, sku6, sku7, sku8, sku9, sku10];

	// close svg element
	var closeSvg = '<span class="close"><svg width="15" height="15" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>X to close</title><desc>Created using Figma</desc><g id="Canvas" transform="translate(4130 14276)"><g id="X to close"><g id="Rectangle"><use xlink:href="#path0_fill" transform="matrix(-0.707974 -0.706238 0.706284 -0.707928 -4129.23 -14261)" fill="#666666"/></g><g id="Rectangle"><use xlink:href="#path1_fill" transform="matrix(-0.706284 0.707928 -0.707974 -0.706238 -4115 -14261.8)" fill="#666666"/></g></g></g><defs><path id="path0_fill" d="M 0 0L 1.05949 0L 1.05949 20.1303L 0 20.1303L 0 0Z"/><path id="path1_fill" d="M 0 0L 1.05949 0L 1.05949 20.1303L 0 20.1303L 0 0Z"/></defs></svg></span>';

	$(div).after('<h3 class="loading" style="text-align:center; font-size:2em; margin:0 0 20px 0;">LOADING...</h3>');

	//add the .drop element
	$('.loading').after('<div class="drop"><ul><li class="close-svg">'+closeSvg+'</li></ul></div>');

	//hide the close icon
	$('.close-svg, .drop').hide();

	//.close click
	$('.close').click(function(){
		$('.drop').remove();
	});

	//console.log(skus);

	//get the items
setTimeout(function(){
	$.each(skus, function(i,val){
		if(val !== undefined){
			var sku = val.split('-')[0];
			var skuColor = val.split('-')[1];

			$.ajax({
				url:'https://www.teacollection.com/product/' + sku,
				async:false,
				success: function(data){
					// console.log(data);

					var theData = $(data).find('#the-mpd').text();
					var jsonData = JSON.parse(theData);
					console.log(jsonData);

					var id = Object.keys(jsonData.parent_data)[0];
					// console.log(id);

					var title = jsonData.parent_data[id].model;
					var price = jsonData.parent_data[id].store_price;
					var theBadge = jsonData.parent_data[id].badge;
					// console.log(theBadge);
					var imgSrc;

					//the url
					var pdp = title.toLowerCase().replace(/ /g, '-');
					var pdpUrl;
						
						
					//get the sizes
					var sizesArray = [];

					//loop through jsonData
					$.each(jsonData.parent_data, function(j,obj){
							
						var objSku = obj.sku.split('-')[1];
						// console.log(skuColor, objSku);

						//if matches color num
						if(skuColor == objSku){
							// console.log('match', skuColor, objSku, obj);

							var colorName = obj.color;
							colorName = colorName.toLowerCase();
							pdpUrl = '/product/' + sku + '/' + pdp + '.html?nocache=1#' + colorName;

							//get the image src
							imgSrc = obj.small_image_url;
							// console.log(j,obj,imgSrc);

							//if store_quantity > 0
							// if(obj.store_quantity > 0){
								//push to sizesArray
								sizesArray.push({size: obj.size, qty: obj.per_color_qty});
							// }
						}
					});

					// console.log(sizesArray);

					//add the reorder if else
					include "../js/reorder.js"


					//desktop
					if($(window).width() > 737){
						var li = '<li class="li-'+i+'"><div><a href="'+ pdpUrl +'" target="_blank"><img src="'+imgSrc+'" alt="'+title+'"/></a><h3><span class="title"><a href="'+ pdpUrl +'" target="_blank">'+title+'</a></span><br><span class="price">'+price+'</span></h3><div class="sizes-container sizes-wrap-'+i+'"><ul class="sizes-'+i+'"><li>size</li></ul></div><a href="#" class="cta add-to-bag-'+i+' disabled">add to bag</a><h4 class="size-error error-'+i+'">Please select a size</h4></div></li>';
					}
					//mobile
					else if($(window).width() < 737){
						var li = '<li class="li-'+i+'"><div><a href="'+ pdpUrl +'" target="_blank"><img src="'+imgSrc+'" alt="'+title+'"/></a><h3><span class="title"><a href="'+ pdpUrl +'" target="_blank">'+title+'</a></span><br><span class="price">'+price+'</span></h3><select class="sizes-'+i+'"><option>size</option></select><a href="#" class="cta add-to-bag-'+i+' disabled">add to bag</a><h4 class="size-error error-'+i+'">Please select a size</h4></div></li>';
					}  

						
					//make the drop down element
					$('.drop > ul').append(li);

					//show the close svg icon
					$('.close-svg').show();
						
					//output dropdown
					include "../js/output-dropdown.js"

					//add the select change function
					include "../js/select-change.js"  

					//add the add to bag function
					include "../js/add-to-bag.js" 

					// console.log('all done with $.ajax');

				}
			});
					
		} 

	});

	// console.log('all done looping');
	//show .drop
	$('.drop').show();
	//remove the loading
	$('.loading').remove();

},2000);


});