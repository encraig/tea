
var theItems;

jQuery(document).ready(function() {

    //desktop
    if($(window).width() > 737){
       theItems = $('.items-list-wrapper .item').length; 
    }
    //mobile
    else if($(window).width() < 737){
       theItems = $('.thumb-wrapper .single-item-box').length; 
    }
    

    var contentCells = function(){ 
        //remove all the .cell
        $('.items-list-wrapper .item.cell, .thumb-wrapper .single-item-box.cell').remove();

        //url to pdf
    	var baseUrl = 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/categories/headers/180118/tween/';

        //url to images
        var baseUrl2 = 'https://www.teacollection.com/mas_assets/media/tea_collection/content-cells/2018/1004/tween/';

        //the content cell take over
        var images = [
            {num:1, img:'c1-v2.png', url:'/tween-girls-clothing/favorites/special-occasion', target:''},
            {num:6, img:'c6.png', url:'', target:''},
            {num:11, img:'c11.png', url:'', target:'_blank'},
            {num:13, img:'c13-v2.png', url:'https://www.instagram.com/explore/tags/teastylesquad/', target:'_blank'},
            {num:18, img:'c18.png', url:'', target:''},
            {num:22, img:'c22-v2.png', url:'field-notes-d.pdf', target:'_blank'},
            
            // {num:34, img:'c34.png', url:'http://blog.teacollection.com/behind-the-look', target:'_blank'},
           
        ];

       // console.log(images);

        //if mobile window width change
        // if($(window).width()< 737){
        //     $(window).resize(function(){
        //         //get the new height
        //         var height = Math.round($('.single-item-box')[1].getBoundingClientRect().height * 10)/10;

        //         //change the height on the items
        //         var items = $('.single-item-box');
        //         $(items).each(function(i,val){
        //             //if has class cell
        //             var yes = $(val).hasClass('cell');
        //             if(yes){
        //                 $(val).css({'height': height, 'overflow':'hidden'});
        //             }
        //         });
        //         // $('.single-item-box').hasClass('cell').css({'height': height, 'overflow':'hidden'});
        //     });
        // }

        //function to output to page
    	var outPut = function(num, url, imgSrc, baseUrl, target, prev){

    		var elem;
            var height;

    		//if desktop
    		if($(window).width() > 768){

                // get the height
                height = Math.round($('.items-list-wrapper .item')[1].getBoundingClientRect().height * 10)/10;
              
    			//if element has url
    			if(url !== ''){
    				elem = '<section class="item cell" style="height:'+height+'px !important; overflow:hidden"><a href="'+ url +'" target="'+ target +'"><img src="'+ baseUrl + imgSrc +'" alt="content cell '+ num +'" style="max-width:100%;"></a></section>';
    			} 
                //element does not have url
                else {
    				elem = '<section class="item cell" style="height:'+height+'px !important; overflow:hidden"><img src="'+ baseUrl + imgSrc +'" alt="content cell '+ num +'" style="max-width:100%;"></section>';
    			}

                // console.log('desktop out putting');

                //output item to page
                if(num !== null){
                    if(num == 53){ 
                            
                        var addedItem = jQuery('.items-list-wrapper .item').length;

                        if(addedItem == 52){
                            jQuery('.items-list-wrapper .item').eq(51).after(elem);
                        }
                           
                    } 
                    else {
                        jQuery('.items-list-wrapper .item').eq(prev).before(elem);
                    }  
                }   
    		}

    		// if mobile
    		else {

                // get the height
                height = Math.round($('.thumb-wrapper .single-item-box')[1].getBoundingClientRect().height * 10)/10;

    			// element has url 
    			if(url !== ''){
    		
                    elem = '<div class="single-item-box cell" style="height:'+height+'px !important; overflow:hidden"><a href="'+ url +'" target="'+target+'"><img src="'+ baseUrl + imgSrc +'" alt="content cell" style="max-width:100%; width:97%;"></a></div>';
    			} 
                // element doen't have url
                else {
    			
                    elem = '<div class="single-item-box cell" style="height:'+height+'px !important; overflow:hidden"><img src="'+ baseUrl + imgSrc + '" alt="content cell" style="max-width:100%;"></div>';
    			}

    			// output item to mobile page
                if(num !== null){
                    if(num == 53){ 
                            
                        var addedItem = jQuery('.thumb-wrapper .single-item-box').length;

                        if(addedItem == 51){
                            jQuery('.thumb-wrapper .single-item-box').eq(50).after(elem);
                        }
                           
                    } 
                    else if(num !== 16) {
                        jQuery('.thumb-wrapper .single-item-box').eq(prev).before(elem);
                    }  
                    
                }
    		}
    	};


        //loop through the content cell take overs
    	$.each(images, function(i,val){
            //the number
    		var num = val.num;

            //the img src
            var imgSrc = val.img;
    			
            //the prev item
    		var prev = num -1;

            //the url
            var url;
            // console.log('the url: ', val.url);
            if(val.url == 'field-notes-d.pdf'){
                // console.log('match');
                if($(window).width() < 737){
                    url = baseUrl + 'field-notes-m.pdf';
                    // console.log('mobile: ', url)
                }
                else {
                    url = baseUrl + val.url;
                    // console.log('desktop: ', url);
                }
            } else {
                url = val.url;
            }
                

            //the target
            var target = val.target;

            // console.log(num, url, imgSrc, prev);

            //output to screen
    		outPut(num, url, imgSrc, baseUrl2, target, prev);
    	});
    };

    //call contentCell
    contentCells();

    //call contentCell again on window scroll if number of .items changes
    $(window).scroll(function(){
        var newItems;

        //desktop
        if($(window).width() > 737){
            newItems = $('.items-list-wrapper .item').length;

            //for dev
            // if(newItems == 39){
            //         console.log('reached 39');
            //     for(i= newItems; i < 54; i++){
            //         var copy = $('.items-list-wrapper .item').eq(1).clone();
            //         $('.items-list-wrapper').append(copy);
            //     }
            //     contentCells();
            // } 
        }
        //mobile
        else if($(window).width() < 737){
            newItems = $('.thumb-wrapper .single-item-box').length;

            //for dev
            // if(newItems == 37){
            //     console.log('reached 37');
            //     for(i= newItems; i < 54; i++){
            //         var copy = $('.thumb-wrapper .single-item-box').eq(1).clone();
            //         $('.thumb-wrapper').append(copy);
            //     }
            //     contentCells();
            // }  
        }
        
        // console.log(theItems, newItems);


        //for prod
        if(theItems !== newItems){
            console.log(theItems, newItems);

            //call contentCells()
            contentCells();
            //change theItems = newItems
            theItems = newItems; 

            // console.log('theItems has been changed to: ' , theItems);
        }
    });

});

