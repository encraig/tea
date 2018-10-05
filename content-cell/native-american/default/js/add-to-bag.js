//add to bag click
						$('.add-to-bag-' + i).click(function(e){ 
							e.preventDefault();
							var li = $(this).closest('li');
							var title = $(li).find('.title').text();

							//desktop
							if($(window).width()>737){
								var select = $(this).siblings('.sizes-container').find('.selected').html();
							}

							//mobile
							else if($(window).width()<737){
								var select = $(this).siblings('select').val();
							}

							//if size not selected
							if(select == undefined || select == 'size'){
								$('.error-' + i).show();
								$('.sizes-' + i).focus();
							} else {
								$('.error-' + i).hide();
								//build the url
								var buyUrl = '/?page=item&action=buy&id[0]=' + val + '-' + select + '&qty[0]=1';

								//hide the cta
								$('.add-to-bag-' + i).hide();
								//add the processing message
								$('.add-to-bag-' + i).after('<h4 class="processing">PROCESSING...</h4>');
								//add to bag function
								$.post(buyUrl, function(){
									$('.processing').html('SUCCESS!!!');

									$(li).append('<div class="success"><h3>'+title+' added to cart.</h3><i>'+closeSvg+'</i></div>');
									
									$('#view-cart').trigger('mouseenter');
									
									// close the popup on click
									$('.success i').click(function(){
										$('.success').remove();
										$('.processing').remove();
										$('.add-to-bag-' + i).fadeIn();
									});

									setTimeout(function(){
										$('.processing').remove();
										$('.success').fadeOut();
										$('.add-to-bag-' + i).fadeIn();
									},2000);
								});

							}
						});