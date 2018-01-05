$(document).ready(function(){
	//make copy of header for sticky header
	var copy = $('.header-left').clone();
	var logoCopy = $('#company-logo').clone();
	var signInCopy = $('#top-bar').find('ul').clone();
	var searchCopy = $('#site-search').clone();
	$('header[role="banner"]').prepend($('#new-sticky-header'));
	$('#new-sticky-header').append(copy);
	$('#new-sticky-header').find('.triangle').after(logoCopy);
	$('#new-sticky-header').find('.new-nav').append('<div class="sign-in-copy"></div>');
	$('.sign-in-copy').append(signInCopy);
	$('.sign-in-copy').append(searchCopy);
	$('#new-sticky-header').find('.search-btn').text('');
	$('#sticky-header').remove();

	//on scroll show the sticky header
	$(window).scroll(function(e){
		
		$('#sticky-header').remove();

		var y = $(this).scrollTop();
		//console.log(y);
  		if (y > 90) {
  			$('#new-sticky-header').css('top', y);
    		$('#new-sticky-header').fadeIn();
  		} else {
    		$('#new-sticky-header').fadeOut();
    		$('#new-sticky-header').css('top', 0);
  		}
	});

	//triangle 1 animation on li hover
	$('.header-left nav.new-nav ul li.girls-clothing, .header-left nav.new-nav ul li.boys-clothing, .header-left nav.new-nav ul li.baby-girl-clothes, .header-left nav.new-nav ul li.baby-boy-clothes, .header-left nav.new-nav ul li.newborn-clothes, .header-left nav.new-nav ul li.clothing-sale').hover(function(e){
		//console.log('hover on');
		var $this = $(this).position();
		//var xPos = $this.left + 55;
		var xPos = $this.left;
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
			$('.triangle').css('backgroundPositionX', '0%');

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