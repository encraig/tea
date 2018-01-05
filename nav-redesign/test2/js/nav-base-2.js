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
	$('.header-left nav.new-nav ul li.girls-clothing, .header-left nav.new-nav ul li.boys-clothing, .header-left nav.new-nav ul li.baby-clothes, .header-left nav.new-nav ul li.clothing-sale').hover(function(e){
		
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