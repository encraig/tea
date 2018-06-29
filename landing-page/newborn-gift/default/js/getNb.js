var getNb = function(url){
      $.get(url, function(data){
         var mpd = $(data).find('#the-mpd').text()
         var json = JSON.parse(mpd);
         // console.log(json);
         doStuff(json);
      });
      
   };