//select change
						$('.sizes-' + i).change(function(){
							var theVal = $(this).val();
							// if select is a number remove .disable from the add to bag
							if(theVal !== 'size') {
								$('.add-to-bag-' + i).removeClass('disabled');
								$('.error-' + i).hide();
							} else {
								$('.add-to-bag-' + i).addClass('disabled'); 
							}
						});