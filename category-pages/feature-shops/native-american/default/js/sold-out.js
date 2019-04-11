//sold out function
(function soldOut(i, sizesArray){
	var notThis, thisText;

	//desktop
	if($(window).width()> 737){
		notThis = $('.sizes-' + i + ' li[data-qty="not-this"]').length;
		thisText = $('.li-' + i).find('.title').text().length;
		// console.log('notThis: ' + notThis + ' thisText: ' + thisText);
	}
	//mobile
	else {
		notThis = $('.sizes-' + i + ' option[data-qty="not-this"]').length;
	}
	// console.log(notThis, sizesArray.length);
	if(notThis == sizesArray.length){
		// console.log('match');
		var thisText = $('.li-' + i).find('.title').text().length;
		// console.log('thisText: ' + thisText);
		//desktop only
		if($(window).width()> 737){
			if(thisText > 34){
				$('.li-' + i).css('top','-71px');
			}
			else {
				$('.li-' + i).css('top','-96px');
			}
		}
		//mobile
		else {
			if(thisText > 24){
				$('.li-' + i).css('top','-90px');
			}
		}
		
							
		$('.li-' + i + '> div').prepend('<img src="https://s.tea-global.net/mas_assets/theme/tea_collection/images/misc/SoldOutBadge_lrg.gif" alt="sold out" class="sold-out">');
		//hide the dropdown and add to bag
		$('.li-' + i).find('.sizes-container').hide();
		$('.li-' + i).find('select').hide();
		$('.li-' + i).find('.cta').hide();
	}
})(i, sizesArray);