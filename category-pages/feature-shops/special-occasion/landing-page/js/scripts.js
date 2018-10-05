    var theItems;

    jQuery(document).ready(function() {

        //desktop
        if($(window).width() > 737){
           theItems = $('.items-list-wrapper .item').length;
           console.log('on page load: ' + theItems); 

           //remove the page header
           $('.inline-header').text('');

            //change urls of left nav
            var leftNav = $('.dept-special-occasion section');

            $.each(leftNav, function(i,val){
                var h2 = $(val).find('h2');
                var text = h2.text().replace(/\r?\n/g, '');
                // console.log(text);
                    
                switch(text){
                    case 'Girl':
                    h2.html('<h2><a href="">'+ text +'</a></h2>');
                    h2.find('a').attr('href','/girls-clothing/favorites/special-occasion');
                        break;
                    case 'Tween':
                    h2.html('<h2><a href="">'+ text +'</a></h2>');
                    h2.find('a').attr('href','/tween-girls-clothing/favorites/special-occasion');
                        break;
                    case 'Boy':
                    h2.html('<h2><a href="">'+ text +'</a></h2>');
                    h2.find('a').attr('href','/boys-clothing/favorites/special-occasion');
                        break;
                    case 'Baby Girl':
                    h2.html('<h2><a href="">'+ text +'</a></h2>');
                    h2.find('a').attr('href','/baby-girl-clothes/favorites/special-occasion');
                        break;
                    case 'Baby Boy':
                    h2.html('<h2><a href="">'+ text +'</a></h2>');
                    h2.find('a').attr('href','/baby-boy-clothes/favorites/special-occasion');
                        break;
                }
            });
        }
        //mobile
        else if($(window).width() < 737){
           theItems = $('.thumb-wrapper .single-item-box').length; 
           console.log('on page load: ' + theItems); 
        }
         

        var contentCells = function(){ 
            //remove all the .cell
            $('.items-list-wrapper .item.cell, .thumb-wrapper .single-item-box.cell').remove();

            //url to pdf
            var baseUrl = 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/categories/headers/180118/tween/';

            //url to images
            var baseUrl2 = 'https://www.teacollection.com/mas_assets/media/tea_collection/feature-shops/2018/1004/special-occasion/landing-page/';

            //the content cell take over
            var images = [
                {num:4, img:'c4.png', url:'', target:''},
                {num:12, img:'c12.png', url:'', target:''},
                {num:16, img:'c16.png', url:'', target:''},
                {num:26, img:'c26.png', url:'', target:''},
                {num:33, img:'c33.png', url:'', target:''},  
            ];

           // console.log(images);

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

                        //if content cell is the very last cell DON'T FORGET TO COMMENT OUT THIS CODE
                        // if(num == 53){ 
                                
                        //     var addedItem = jQuery('.items-list-wrapper .item').length;

                        //     if(addedItem == 52){
                        //         jQuery('.items-list-wrapper .item').eq(51).after(elem);
                        //     }
                               
                        // } 
                        // else {
                        //     jQuery('.items-list-wrapper .item').eq(prev).before(elem);
                        // } 

                        jQuery('.items-list-wrapper .item').eq(prev).before(elem); 
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

                        //if content cell is the very last cell DON'T FORGET TO COMMENT OUT THIS CODE
                        // if(num == 53){ 
                                
                        //     var addedItem = jQuery('.thumb-wrapper .single-item-box').length;

                        //     if(addedItem == 51){
                        //         jQuery('.thumb-wrapper .single-item-box').eq(50).after(elem);
                        //     }
                               
                        // } 
                        // else if(num !== 16) {
                        //     jQuery('.thumb-wrapper .single-item-box').eq(prev).before(elem);
                        // }

                        jQuery('.thumb-wrapper .single-item-box').eq(prev).before(elem);  
                        
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
                // console.log('on scroll: ' + newItems);
            }
            //mobile
            else if($(window).width() < 737){
                newItems = $('.thumb-wrapper .single-item-box').length;
                // console.log('on scroll: ' + newItems);

            }


            //for prod
            if(theItems > newItems){
                newItems = theItems;
                // console.log('theItems: ' + theItems + ' newItems: ' + newItems);
            }
            else if(theItems < newItems){
                // console.log('theItems: ' + theItems + ' newItems: ' + newItems);

                //change theItems = newItems
                theItems = newItems;

                //call contentCells()
                contentCells();
                 
            }
        });

    });