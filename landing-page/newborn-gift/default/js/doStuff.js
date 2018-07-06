var doStuff = function(json){
      var item = json.parent_data;
      // console.log(item); 

      var img;
      var title;
      var price;
      var qty;
      var elem;

      //item 1
      var item1 = json.parent_data['91307'];
      //item 2
      var item2 = json.parent_data['91293'];

      if(item1){
         img = item1.image_url;
         title = item1.model;
         price = item1.retail_price;
         qty = item1.per_color_qty;
         // qty = 0;
      } 
      else if(item2) {
         img = item2.image_url;
         title = item2.model;
         price = item2.retail_price;
         qty = item2.per_color_qty; 
         // qty = 0;
      }
 

      if(qty > 0) {
         //desktop
         if($(window).width() > 737){
            elem = $('<div data-name="'+ title +'" data-qty="'+ qty +'"><img src="'+ img +'" alt="'+ title +'" /><h2>'+ title +'</h2><span class="price">FREE ('+ price +' value)</span><span class="size-chart">size chart ></span><div class="drop-container"><ul><li>size</li></ul><a href="#" class="cta disabled">add to bag</a></div></div>');
         }
         //mobile
         else {
            elem = $('<div data-name="'+ title +'" data-qty="'+ qty +'"><img src="'+ img +'" alt="'+ title +'" /><h2>'+ title +'</h2><span class="price">FREE ('+ price +' value)</span><span class="size-chart">size chart ></span><div class="drop-container"><select><option>size</option></select><a href="#" class="cta disabled">add to bag</a></div></div>');
         }
         
      }
      else {
         //desktop
         if($(window).width() > 737){
            elem = $('<div data-name="'+ title +'" data-qty="'+ qty +'"><!--<img src="https://www.teacollection.com/mas_assets/media/tea_collection/landing-pages/newborn-gift/2018/sold-out-image-ref.png?nocache=1" style="position:absolute; opacity:.5">--><div class="unavailable"><span>Unavailable</span></div><img src="'+ img +'" alt="'+ title +'" /><h2>'+ title +'</h2><span class="price">FREE ('+ price +' value)</span><span class="size-chart">size chart ></span><div class="drop-container"><ul><li>size</li></ul><a href="#" class="cta disabled">add to bag</a></div></div>');
         }
         //mobile
         else {
            elem = $('<div data-name="'+ title +'" data-qty="'+ qty +'"><!--<img src="https://www.teacollection.com/mas_assets/media/tea_collection/landing-pages/newborn-gift/2018/sold-out-image-ref.png?nocache=1" style="position:absolute; opacity:.5">--><div class="unavailable"><span>Unavailable</span></div><img src="'+ img +'" alt="'+ title +'" /><h2>'+ title +'</h2><span class="price">FREE ('+ price +' value)</span><span class="size-chart">size chart ></span><div class="drop-container"><select><option>size</option></select><a href="#" class="cta disabled">add to bag</a></div></div>');
         }
         
      }

      //add the sizes to the dropdown
      $.each(item, function(i,val){
         
         var storeQty = val.store_quantity;
         var sku = val.sku;
         var sizeVal = val.size;
         var sizeText = sizeVal.replace('_','-');
         if(sizeText.indexOf('NB') == -1){
            sizeText = sizeText + ' M';
         }
         var li;
         var option;
         // storeQty = 0;
         // console.log('store qty: ' + storeQty);
         // console.log('size: ' + size);
         if(storeQty > 0){
            li = '<li value="'+ sizeVal +'" data-sku="'+ sku +'">'+ sizeText +'</li>';
            option = '<option value="'+ sizeVal +'" data-sku="'+ sku +'">'+ sizeText +'</option>';
         }
         else {
            li = '<li value="'+ sizeVal +'" class="sold-out" data-sku="'+ sku +'"><strike>'+ sizeText +'</strike> SOLD OUT</li>';
            option = '<option value="'+ sizeVal +'" class="sold-out" data-sku="'+ sku +'" disabled>'+ sizeText +' SOLD OUT</option>';;
         }

         // console.log($(elem).find('.drop-container ul'));
         // console.log(li);
         //desktop
         if($(window).width() > 737){
            //move this under size
            if(sizeText.indexOf('NB') !== -1){
               (elem).find('.drop-container ul li:nth-of-type(2)').before(li);
            }
            else {
               (elem).find('.drop-container ul').append(li);
            }

            
         }
         //mobile
         else {
            //move this under size
            if(sizeText.indexOf('NB') !== -1){
               (elem).find('.drop-container select option:nth-of-type(2)').before(option);
            }
            else {
               (elem).find('.drop-container select').append(option);
            }
            
         }
         
                  // console.log(elem);
      });


      $('.nb-items').append(elem);

      //check if all sold out then hide .nb-wrap and show .all-out
      var bornFreeQty = $('div[data-name="Born Free Baby Outfit"]').attr('data-qty');
      var cycleBabyQty = $('div[data-name="Cycle Baby Outfit"]').attr('data-qty');
      // console.log(bornFreeQty, cycleBabyQty);
      if(bornFreeQty == 0 && cycleBabyQty == 0) {
         $('.nb-wrap').hide();
         $('.all-out').show();
         $('.all-out div').find('form').find('input[type="email"]').focus();
      }

      //reorder the products
      var bornFree = $('.nb-items div[data-name="Born Free Baby Outfit"]');
      $('.nb-items').prepend(bornFree);

      if(item1){
         //click
         expandCollapse('div[data-name="Born Free Baby Outfit"] .drop-container ul');

         //add selected
         addSelected('div[data-name="Born Free Baby Outfit"] .drop-container ul li');

         //select change
         selectChange('div[data-name="Born Free Baby Outfit"]');

         //size chart click
         $('div[data-name="Born Free Baby Outfit"] .size-chart').click(function(){
            history.pushState(null, '', '1.html#');
            sizeChart();
         });

         //if mobile adjust the unavailable overlay height
         setTimeout (function(){
            changeHeight('div[data-name="Born Free Baby Outfit"]');
         },1000);

         $(window).resize(function(){
            changeHeight('div[data-name="Born Free Baby Outfit"]');
         });

      } 
      else if(item2) {
         //click
         expandCollapse('div[data-name="Cycle Baby Outfit"] .drop-container ul');

         //add selected
         addSelected('div[data-name="Cycle Baby Outfit"] .drop-container ul li');

         //select change
         selectChange('div[data-name="Cycle Baby Outfit"]');

         //size chart click
         $('div[data-name="Cycle Baby Outfit"] .size-chart').click(function(){
            history.pushState(null, '', '1.html#');
            sizeChart();
         });

         //if mobile adjust the unavailable overlay height
         setTimeout (function(){
            changeHeight('div[data-name="Cycle Baby Outfit"]');
         },1000);

         $(window).resize(function(){
            changeHeight('div[data-name="Cycle Baby Outfit"]');
         });

      }

      //collapse the ul
      $('.row1, .row2, .row3, .row4, .row5, .row6, .nb-items div img, .nb-items div h2, .nb-items div .price').click(function(){
         $('.nb-items').find('.drop-container ul').removeClass('expand');
      });
     
   };