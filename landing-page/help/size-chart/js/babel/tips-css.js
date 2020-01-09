"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function () {
  //function to adjust css for .tips
  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); // var deptVal = $('.size-chart-container .department').val();
  // if (deptVal == 'baby girl' || deptVal == 'baby boy') {
  //   //desktop
  //   if ($(window).width() > 737) {
  //     //if bottoms
  //     // if(catVal == 'bottoms'){
  //     //   $('.size-chart-container').find($('.tips')).css('top','180px');
  //     // } else {
  //     //   $('.size-chart-container').find($('.tips')).css('top','148px');
  //     // }
  //
  //     $('.size-chart-container').find($('.tips')).css('top', '128px');
  //
  //     $('.size-chart-container').find($('.tips')).show();
  //   }
  //   //mobile
  //   if ($(window).width() < 737) {
  //     if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
  //       $('.size-chart-container').find($('.tips')).hide();
  //     } else {
  //       $('.size-chart-container').find($('.tips')).show();
  //
  //       //change the css positioning
  //       $('.size-chart-container').find($('.tips')).css('top', '189px');
  //     }
  //   }
  //
  // }
  //else if newborn hide .tips
  // else if (deptVal == 'newborn') {
  //   $('.size-chart-container').find($('.tips')).hide()
  // }
  // // if category is shoes + accessories  or pajams
  // else if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
  //   $('.size-chart-container').find($('.tips')).hide();
  // }
  // // else remove the style attribute on .tips
  // else {
  //   $('.size-chart-container').find($('.tips')).removeAttr('style');
  // }
};
//# sourceMappingURL=tips-css.js.map
