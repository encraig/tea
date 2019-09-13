var selectChange = function(elem){
      $(elem + ' .drop-container select').change(function(){
         var $this = $(this).find(':selected');
         var sku = $this.attr('data-sku');
         var cta = $(this).next();
         //change the add to bag cta back to disabled
         cta.addClass('disabled').removeClass('activeCta');
         //change the add to bag href back to #
         cta.attr('href','#');
         // console.log($this.index());
         if(sku !== undefined){
            if(!$this.hasClass('sold-out')){
                  
               addToBag(cta, sku);

            }
         }
      });
   };