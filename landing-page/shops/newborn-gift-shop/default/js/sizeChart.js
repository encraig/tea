var sizeChart = function(){
      var dept = 'newborn';
      var cat = 'all categories';

      //the size chart url
      var url = '/cms/size-chart/size-chart-tea-collection/1.html';
   
      //append the parameters at the end of the url
      var params = encodeURI('selectedDept=' + dept + '&selectedCat=' + cat);
      var thisUrl = window.location.href;
      //check if have parameters already
      if(thisUrl.indexOf('?') !== -1){
         window.location.href = thisUrl + '&' + params;
      } else {
         window.location.href = thisUrl + '?' + params;
      }

      //make the get call
      $.get(url, function(data){

         //find the size chart
         var sizeChart = $(data).find('#size-chart-section').html();
         //console.log(sizeChart);

         //desktop
         if($(window).width() > 737){
            //make the overlay element
            var overlay = '<div class="overlay" style="width:100%; height:100%; background:#000; opacity:.5; position:fixed; z-index:99999;"></div>';

            //make the content element
            var overlayContent = $('<div class="overlay-content" style="background: #fff; position: fixed; top: 5%; left: 29%; width: 700px; height: 87%; overflow: auto; z-index: 999999; padding-bottom: 20px;"></div>');

            //prepend overlay element to body
            $('body').prepend(overlay);

            //prepend overlay content element to body
            $('body').prepend(overlayContent);

            //append sizeChart to overlayContent
            $('.overlay-content').append(sizeChart);
         }

         //mobile
         else if($(window).width() < 737){

            //make the content element
            var overlayContent = $('<div class="overlay-content" style="background: #fff; position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: auto; z-index: 999999; padding-bottom: 20px;"></div>');

            //prepend overlay content element to body
            $('body').prepend(overlayContent);

            //append sizeChart to overlayContent
            $('.overlay-content').append(sizeChart);
         }

         //hide the h1 in overlayContent
         // $('.size-chart-container h1').text('');

         //add h1 background image of the x
         $('.size-chart-container h1').css({background: "url('https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/close.png') no-repeat 24px center", padding:"17px 0"});

         //add css for hover h1 and overlay
         $('.size-chart-container h1, .overlay').hover(function(){
            $(this).css('cursor','pointer');
         }, function(){
            $(this).css('cursor','none');
         });

         //close the lightbox
         $('.overlay, .size-chart-container h1').click(function(){

            history.pushState(null, '', '1.html');

            //remove the elements
            $('.overlay, .overlay-content').remove();
         });
      });
   };