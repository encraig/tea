"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function (sizeChartArr) {
  //function to change the copy in .measure-tips
  //get the value of the selected department and category
  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');
  $.each(sizeChartArr, function (i, val) {
    //get the dept that match
    if (deptVal == val.dept) {
      //if swim
      // if (catVal == 'swim') {
      //   //check if swim already on page
      //   var isSwim = $('.measure-tips .swim');
      //   //desktop
      //   // if ($(window).width() > 737) {
      //   if (isSwim.length == 0) {
      //     //find the .measure-tips div and prepend <span class="top"> & <span class="bottom">
      //     $('.measure-tips div').prepend('<span class="top"></span><span class="bottom"><h2></h2><p></p></span>');
      //
      //   }
      //
      //   //if baby boy swim
      //   if (deptVal == 'baby boy') {
      //     $('.measure-tips div').addClass('baby-boy-swim');
      //     $('.measure-tips div)').addClass('baby-boy-swim');
      //   }
      //   // }
      //
      //   //add the content
      //   $.each(val.cat, function(j, arr) {
      //
      //     //get the cat that match
      //     if (catVal == arr.name) {
      //       //change the copy
      //       // console.log(arr);
      //       // var divs = $('.size-chart-container .measure-tips div');
      //       // console.log(divs);
      //
      //       $('.size-chart-container .measure-tips div p').html(arr.rightP);;
      // $.each(divs, function(k, obj) {
      //   if (k == 0) {
      //     //change the h2
      //     // $(obj).find('h2').html(arr.leftH2);
      //     //change the p
      //     // $(obj).find('p').html(arr.leftP);
      //   } else if (k == 1) {
      //     //desktop
      //     if ($(window).width() > 737) {
      //
      //       if (arr.rightH2Bottom !== '') {
      //         //add .swim to .measure-tips div:first-of-type
      //         $('.measure-tips div').addClass('swim');
      //         //add .two-rows to .measure-tips div:nth-of-type(2)
      //         $('.measure-tips div').addClass('two-rows');
      //       } else {
      //         $('.measure-tips div').removeClass('two-rows');
      //       }
      //change the h2 .top
      // $(obj).find('.top').find('h2').html(arr.rightH2);
      // //change the p .top
      // $(obj).find('.top').find('p').html(arr.rightP);
      // //change the h2 .bottom
      // $(obj).find('.bottom').find('h2').html(arr.rightH2Bottom);
      // //change the p .bottom
      // $(obj).find('.bottom').find('p').html(arr.rightPBottom);
      // }
      //mobile
      //     if ($(window).width() < 737) {
      //       //change the h2
      //       $(obj).find('h2').html(arr.leftH2);
      //       //change the p
      //       $(obj).find('p').html(arr.leftP);
      //     }
      //   }
      // });
      //     }
      //   });
      //
      // } else {
      $.each(val.cat, function (j, arr) {
        //move .top contents out
        $('.measure-tips div:nth-of-type(2)').append($('.measure-tips .top h2, .measure-tips .top p')); //remove .top & .bottom because of swim

        $('.measure-tips div:nth-of-type(2) .top, .measure-tips div:nth-of-type(2) .bottom').remove(); //remove .swim & .baby-boy-swim from .measure-tips div:first-of-type

        $('.measure-tips div:first-of-type').removeClass('swim');
        $('.measure-tips div:first-of-type').removeClass('baby-boy-swim');
        $('.measure-tips div:nth-of-type(2)').removeClass('two-rows');
        $('.measure-tips div:nth-of-type(2)').removeClass('baby-boy-swim'); //get the cat that match

        if (catVal == arr.name) {
          //change the copy
          // console.log(arr);
          var divs = $('.size-chart-container .measure-tips div'); // console.log(divs);

          divs.find('p').html(arr.rightP); // $.each(divs, function(k, obj) {
          //   if (k == 0) {
          //change the h2
          // $(obj).find('h2').html(arr.leftH2);
          //change the p
          //   $(obj).find('p').html(arr.leftP);
          // } else if (k == 1) {
          //desktop
          // if ($(window).width() > 737) {
          //change the h2
          // $(obj).find('h2').html(arr.rightH2);
          //change the p
          // $(obj).find('p').html(arr.rightP);
          // }
          //mobile
          // if ($(window).width() < 737) {
          //
          //   //if newborn hide div
          //   if (deptVal == 'newborn') {
          //     $(obj).hide();
          //   }
          //   // not newborn
          //   else {
          //     $(obj).show();
          //   }
          //   //change the h2
          //   $(obj).find('h2').html(arr.leftH2);
          //   //change the p
          //   $(obj).find('p').html(arr.leftP);
          // }
          //   }
          // });
        }
      }); // }
    }
  });
};
//# sourceMappingURL=change-measuring-tips-copy.js.map
