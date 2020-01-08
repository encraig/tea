"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function (sizeChartArr) {
  //function to change the background image
  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');
  $.each(sizeChartArr, function (i, val) {
    //get the dept that match
    if (deptVal == val.dept) {
      $.each(val.cat, function (j, arr) {
        //get the cat that match
        if (catVal == arr.name) {
          //add the background img to the page
          //desktop
          if ($(window).width() > 737) {
            //var img = 'url(../images/'+arr.img+')';
            var img = 'url(https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + arr.img + ')';
            $('.size-chart-container .measure-tips').css('background-image', img);
          } //mobile
          else if ($(window).width() < 737) {
              //add the loading
              $('.measure-tips').prepend('<span class="loading" style="text-transform:uppercase; text-align:center; font-size:15px; font-family:brown-pro-bold !important">loading...</span>');
              var imgSrc = arr.img;
              imgSrc = imgSrc.split('.');
              imgSrc = imgSrc[0] + '-m.' + imgSrc[1]; //console.log(imgSrc);

              var img = 'url(https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + imgSrc + ')';
              $('.size-chart-container .measure-tips').css('background-image', img); //remove the loading

              $('.measure-tips span.loading').remove();
            }
        }
      });
    }
  });
};
//# sourceMappingURL=change-background-image.js.map
