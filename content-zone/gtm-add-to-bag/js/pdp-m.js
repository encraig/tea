console.log('pdp page');
$('.add-to-bag').unbind('click').click(function(e){
	//wait for color to load
	setTimeout(function(){
		console.log('gtm add to bag pdp page');
		var color = $('.pdp-item-details-attributes dl').find('.selected-value')[0].innerText;
		var size = $('.numeric.selected .size-label').text();

		//size has to be selected first
		if(size !== ""){
			window.dataLayer.push({
{/literal}
				event: 'addToBag',
				theCategory: 'addToBag',
				theUrl: url,
				theSku: '{$sku}',
				theSize: size,
				theQty: '1',
				thePrice: '{$store_price|string_format:"%.2f"}',
				theName: '{$brand} {$model}',
				theColor: color,
{literal}
			});
		}
		// size not selected
		else {
			console.log('size not selected do nothing');
		}
	}, 500);
});
