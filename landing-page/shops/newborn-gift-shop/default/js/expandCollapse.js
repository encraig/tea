var expandCollapse = function(elem){
      $(elem).click(function(e){
            var $this = $(this);
            // console.log($this);
            $this.toggleClass('expand');
      });
   };