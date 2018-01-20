
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

    	var baseUrl = 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/categories/headers/180118/native-american/';

        //the content cell take over
        var images = [
            {numD:1, numM:1, img:'c1.png', url:'', target:'', color: '', h2:'', h3:'', p:''},

            {numD:6, numM:6, img:'', url:'http://blog.teacollection.com/miac-new-mexico', target:'_blank', color: '#5A88C1', h2:'museum of indian arts<br class="desktop"> &amp; culture', h3:'pueblo pottery', p:'Pottery from the Museum of Indian Arts<br class="desktop"> and Culture in new Mexico inspired<br class="desktop"> authentic Pueblo patterns and one pretty<br class="desktop"> fun fish tee.'},

            {numD:8, numM:7, img:'c8.png', url:'', target:'', color: '', h2:'', h3:'', p:''},

            {numD:10, numM:12, img:'', url:'http://blog.teacollection.com/gregory-lomayesva', target:'_blank', color: '#369AAE', h2:'gregory lomayesva', h3:'hopi folk art', p:'Gregory Lomayesva\'s imaginative Hopi<br class="desktop"> folk art translates perfectly to legendary<br class="desktop"> tees with an empowering message.'},

            {numD:15, numM:15, img:'c15.png', url:'', target:'', color: 'rgba(40, 45, 87, 0.8)', h2:'', h3:'', p:'The Water Spider<br class="desktop"> braved great danger,<br class="desktop"> carrying coal on her<br class="desktop"> back to bring fire to<br class="desktop"> the Cherokee people.'},

            {numD:17, numM:17, img:'', url:'http://blog.teacollection.com/martha-berry', target:'_blank', color: '#B4383C', h2:'martha berry', h3:'cherokee southeastern<br class="desktop"> woodlands beadwork', p:'Cherokee artist Martha Berry\'s<br class="desktop"> Southeastern Woodlands beadwork<br class="desktop"> inspired colorful embroidery and a<br class="desktop"> fire-wielding female water spider.'},

            {numD:18, numM:18, img:'c18.png', url:'', target:'', color: '', h2:'', h3:'', p:''},

            {numD:19, numM:19, img:'c19.png', url:'', target:'', color: 'rgba(1, 103, 124, 0.8)', h2:'', h3:'', p:'Long ago, the Thunder<br class="desktop"> Bringer carried the earth<br class="desktop"> and the first seminole<br class="desktop"> people on his back.'},

            {numD:22, numM:22, img:'', url:'http://blog.teacollection.com/benjamin-harjo-jr.', target:'_blank', color:'#E4582B', h2:'benjamin harjo, jr.', h3:'shawnee &amp; seminole painting', p:'Benjamin Haro, jr. tranforms Shawnee<br class="desktop"> and Seminole folklore into modern<br class="desktop"> graphic spirit animals.'},

            {numD:23, numM:23, img:'c23.png', url:'', target:'', color: '', h2:'', h3:'', p:''},

            {numD:27, numM:28, img:'c27.png', url:'', target:'', color: '', h2:'', h3:'', p:''},

            {numD:28, numM:29, img:'c28.png', url:'', target:'', color: '', h2:'', h3:'', p:''},

            {numD:32, numM:32, img:'', url:'http://blog.teacollection.com/jessica-osceola', target:'_blank', color: '#002F77', h2:'jessica osceola', h3:'traditional seminole patchwork', p:'Jessica Osceola\'s grandma taught her<br class="desktop"> how to sew her tribe\'s traditional<br class="desktop"> patchwork. We worked with Jessica to<br class="desktop"> adapt classic Seminole signals into a bold<br class="desktop"> playtime print.'},
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
    	var outPut = function(num, url, imgSrc, baseUrl, target, prev, color, h2, h3, p){

    		var elem;
            var height;

    		//if desktop
    		if($(window).width() > 768){

                // get the height
                height = Math.round($('.items-list-wrapper .item')[1].getBoundingClientRect().height * 10)/10;
              
                //if element is text only
                if(h2 !== '' && imgSrc == ''){
                    elem = '<section class="item cell" style="height:'+height+'px !important; overflow:hidden"><div style="background:'+ color +'"><span><h2>'+ h2 +'</h2><h3>'+ h3 +'</h3><p>'+ p +'</p><a href="'+ url +'" class="cta" target="'+ target +'">learn more</a></span></div></section>';
                }
                //if element is text and img
                // else if(p !== '' && imgSrc !== ''){
                //     elem = '<section class="item cell this-hover" style="height:'+height+'px !important; overflow:hidden"><div style="background:'+ color +'" class="cell-hover"><span><h2>'+ h2 +'</h2><h3>'+ h3 +'</h3><p>'+ p +'</p><a href="'+ url +'" class="cta" target="'+ target +'">learn more</a></span></div><img src="'+ baseUrl + imgSrc +'" alt="content cell '+ num +'" style="max-width:100%;"></section>';
                // }
    			//if element has url
    			else if(url !== ''){
    				elem = '<section class="item cell" style="height:'+height+'px !important; overflow:hidden"><a href="'+ url +'" target="'+ target +'"><img src="'+ baseUrl + imgSrc +'" alt="content cell '+ num +'" style="max-width:100%;"></a></section>';
    			} 
                //element does not have url
                else {
    				elem = '<section class="item cell" style="height:'+height+'px !important; overflow:hidden"><img src="'+ baseUrl + imgSrc +'" alt="content cell '+ num +'" style="max-width:100%;"></section>';
    			}

                // console.log('desktop out putting');

                //output item to page
                if(num !== null){
                    jQuery('.items-list-wrapper .item').eq(prev).before(elem);
                }

                //on hover show .cell-hover
                $('.this-hover').hover(function(){
                    $(this).find('.cell-hover').show();
                }, function(){
                    $(this).find('.cell-hover').hide();
                });	
    		}

    		// if mobile
    		else {

                // get the height
                height = Math.round($('.thumb-wrapper .single-item-box')[1].getBoundingClientRect().height * 10)/10;

                //if element is text only
                if(h2 !== '' && imgSrc == ''){
                    elem = '<div class="single-item-box cell" style="height:'+height+'px !important; overflow:hidden"><div style="background:'+ color +'"><span><h2>'+ h2 +'</h2><h3>'+ h3 +'</h3><p>'+ p +'</p><a href="'+ url +'" class="cta">learn more</a></span></div></div>';
                }
                //if element is text and img
                else if(p !== '' && imgSrc !== ''){
                    elem = '<div class="single-item-box cell this-hover" style="height:'+height+'px !important; overflow:hidden"><div style="background:'+ color +'" class="cell-hover"><span><h2>'+ h2 +'</h2><h3>'+ h3 +'</h3><p>'+ p +'</p><a href="'+ url +'" class="cta">learn more</a></span></div><img src="'+ baseUrl + imgSrc +'" alt="content cell '+ num +'" style="max-width:100%;"></div>';
                }
    			// element has url 
    			else if(url !== ''){
                    elem = '<div class="single-item-box cell" style="height:'+height+'px !important; overflow:hidden"><a href="'+ url +'"><img src="'+ baseUrl + imgSrc +'" alt="content cell" style="max-width:100%"></a></div>';
    			} 
                // element doen't have url
                else {
                    elem = '<div class="single-item-box cell" style="height:'+height+'px !important; overflow:hidden"><img src="'+ baseUrl + imgSrc + '" alt="content cell" style="max-width:100%;"></div>';
    			}

    			// output item to mobile page
                if(num !== null){
                    jQuery('.thumb-wrapper .single-item-box').eq(prev).before(elem);
                }
    		}
    	};


        //loop through the content cell take overs
    	$.each(images, function(i,val){
            //the number
            var num;
            //desktop
            if($(window).width()>737){
                num = val.numD;
            }
            //mobile
    		if($(window).width()<737){
                num = val.numM;
            }

            //the url
            var url = val.url;

            //the img src
            var imgSrc = val.img;

            //the target
            var target = val.target;
    			
            //the prev item
    		var prev = num -1;

            var color = val.color;

            var h2 = val.h2;

            var h3 = val.h3;

            var p = val.p;

            // console.log(num, url, imgSrc, prev);

            //output to screen
    		outPut(num, url, imgSrc, baseUrl, target, prev, color, h2, h3, p);
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
        }
        //mobile
        else if($(window).width() < 737){
            newItems = $('.thumb-wrapper .single-item-box').length; 
        }
    
        // console.log(theItems, newItems);

        if(theItems !== newItems){
            //call contentCells()
            contentCells();
            //change theItems = newItems
            theItems = newItems; 

            // console.log('theItems has been changed to: ' , theItems);
        }
    });

});

