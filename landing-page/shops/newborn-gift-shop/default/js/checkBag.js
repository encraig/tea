var checkBag = function(clickedSku, href){ 
      var bornFree = false;
      var cycleBaby = false;
      var bornFreeSku;
      var cycleBabySku;

      if(clickedSku == '7S72900'){
         bornFreeSku = clickedSku;
      } 
      else if(clickedSku == '7S62901'){
         cycleBabySku = clickedSku;
      }

      $.get('/cms/shopping-cart/shopping-cart/1.html', function(data){
      
         console.log($(data).find('#the-shopping-cart li').html());
         var skus = $(data).find('#the-shopping-cart li');
         // desktop
         // if($(window).width() > 737){
         //    skus = $(data).find('.ajax-cart-edit');
         // }
         // mobile
         // else {
         //    setTimeout(function(){
         //       skus = $(data).find('.cart-edit');
         //       console.log(skus);
         //    },1000);
            
         // }
         

         $.each(skus, function(i,val){
            var sku = $(val).attr('data-sku');
            sku = sku.split('-')[0];
            console.log(sku);
            
            if(bornFreeSku == sku){
               bornFree = true;
               return false;
            }

            else if(cycleBabySku == sku){
               cycleBaby = true;
               return false;
            }

            //check if born free already in cart
            else if(sku == '7S72900'){
               bornFree = true;
               return false;
            }

            //check if cycle baby already in cart
            else if(sku == '7S62901'){
               cycleBaby = true;
               return false;
            }

         });

         // console.log('born free: ' + bornFree);
         // console.log('cycle baby: ' + cycleBaby);

         //display error message if already in cart
         if(bornFree) {
            $('.size-lightbox, .error-message').toggle();
            return false;
         }
         //display error message if already in cart
         else if(cycleBaby) {
            $('.size-lightbox, .error-message').toggle();
            return false;
         }
         //add to cart
         else {
            $.post(href, function(data){
               // var succMess = '<div class="success">successfully added to your cart.</div>';
               // $(elem).after(succMess);

               // setTimeout(function(){
               //    $('.success').fadeOut(function(){
               //       $(this).remove();
               //    });
               // }, 4000);   

               //trigger the hover
               $('#view-cart').trigger('mouseenter');    
            });
         }
        
      });
   };