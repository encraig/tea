var changeHeight = function(elem){
      //if mobile adjust the unavailable overlay height
         if($(window).width() < 737){
            //get the height of the image
            var mHeight = $(elem + ' img').css('height');
            //change the height of unavailable
            $(elem + ' .unavailable').css('height', mHeight);
         }
   };