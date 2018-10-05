//sold out function
		var soldOut = function(elem, i, badge){
			//if badge
			if(badge == 'comingsoon'){
				// console.log('coming soon');
				//add the coming soon badge
				//add some css
				if($(window).width() > 737){
					$('.li-' + i).css('top','-96px');
				}
				else if($(window).width() < 737){
					$('.li-' + i).css('top','-90px');
				}
				
				$('.li-' + i + '> div').prepend('<img src="https://s.tea-global.net/mas_assets/theme/tea_collection/images/misc/ComingSoonBadge_lrg.gif" alt="coming soon" class="sold-out">');
				//hide the dropdown and add to bag
				$('.li-' + i).find('.sizes-container').hide();
				$('.li-' + i).find('select').hide();
				$('.li-' + i).find('.cta').hide();
			}
			//if sold out
			else if($(elem).length < 2){
				// console.log('sold out');
				//add the sold out badge
				//add some css
				$('.li-' + i).css('top','-71px');
				$('.li-' + i + '> div').prepend('<img src="https://s.tea-global.net/mas_assets/theme/tea_collection/images/misc/SoldOutBadge_lrg.gif" alt="sold out" class="sold-out">');
				//hide the dropdown and add to bag
				$('.li-' + i).find('.sizes-container').hide();
				$('.li-' + i).find('select').hide();
				$('.li-' + i).find('.cta').hide();
			}

		};