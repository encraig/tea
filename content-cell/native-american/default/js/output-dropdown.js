					//desktop output sizes dropdown
					if($(window).width()> 737){
						//add the sizes to the dropdown
						$.each(sizesArray, function(k, size){
							//if qty = 0
							if(size.qty == 0){
								$('.sizes-' + i).append('<li value="'+size.size+'" data-qty="not-this"><del>'+size.size+'</del></li>');
							}
							else {
								$('.sizes-' + i).append('<li value="'+size.size+'">'+size.size+'</li>');
							} 
							
						});


						//if sold out
						//sold out function
						include "../js/sold-out.js" 

						//hide show the sizes dropdown
						$('.sizes-' + i).click(function(){
							$(this).closest('.sizes-container').toggleClass('show-sizes');
						});

						//sizes dropdown li click
						$('.sizes-' + i + ' li').click(function(){
							if($(this).attr('data-qty') !== 'not-this'){
								$('.sizes-' + i + ' li').removeAttr('class');
								var text = $(this).text();
								if(text !== 'size') {
									$(this).addClass('selected');
									var num = $(this).text();
									$('.sizes-' + i + ' li:first-of-type').text(num);
									$('.add-to-bag-' + i).removeClass('disabled');
									$('.error-' + i).hide();
								}
							}
							
						});
					}

					// mobile output sizes dropdown
					else if($(window).width()< 737) {
						//add the sizes to the dropdown
						$.each(sizesArray, function(k, size){
							//if qty = 0
							if(size.qty == 0){
								$('.sizes-' + i).append('<option value="'+ size.size +'" data-qty="not-this"><del>'+ size.size +'</del></option>');
							}
							else {
								$('.sizes-' + i).append('<option value="'+ size.size +'">'+ size.size +'</option>');
							} 
						});

						//if sold out
						//sold out function
						include "../js/sold-out.js" 
					}