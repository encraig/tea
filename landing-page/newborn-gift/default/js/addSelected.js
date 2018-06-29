var addSelected = function(elem){
      $(elem).click(function(e){
            var $this = $(this);
            var sku = $this.attr('data-sku');
            //remove class from all li
            $(elem).removeClass('selected');
            //change the first li text back to size
            $(elem + ':first-of-type').text('size');
            var cta = $(elem).closest('ul').next();
            //change the add to bag cta back to disabled
            cta.addClass('disabled').removeClass('activeCta');
            //change the add to bag href back to #
            cta.attr('href','#');
            // console.log($this.index());
            if($this.index() !== 0){
               if(!$this.hasClass('sold-out')){
                  $this.addClass('selected');
                  var val = $this.text();
                  //change the first li
                  $(elem + ':first-of-type').text(val);

                  addToBag(cta, sku);

               }
            }
            
      });
   };