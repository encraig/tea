$(document).ready(function(){

	var signIn = $('#top-bar').find('ul.clearfix > li')[1].id;
	
	//signed in
	if(signIn == 'welcome-member'){
		console.log('signed in');

		//get the links
		var links = $('#' + signIn).find('.popup-member ul li a'); 
		//loop
		$.each(links, function(i,val){
			var url = $(val).attr('href');
			var text = $(val).text();
			//if sign out
			if(text == 'Sign Out') {
				$('.the-account-links ul').append('<li class="sign-out"><a href="'+ url +'">'+ text +'</a></li>');
			}
			//not sign out
			else {
				$('.the-account-links ul').append('<li><a href="'+ url +'">'+ text +'</a></li>');
			}
			
		});
	}
	//not signed in
	else {
		console.log('signed out');
		$('.the-account-links ul').append('<li class="create"><a href="/?page=register">create an account</a></li><li class="sign-in"><a href="/?page=login">sign in</a></li>');
	}

	//hover
	$('.the-account-icon').hover(function(){
		$(this).find('.the-account-links').show();
	}, function(){
		$(this).find('.the-account-links').hide();
	});

});