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