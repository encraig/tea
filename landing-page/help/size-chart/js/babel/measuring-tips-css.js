"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function () {
  //function to adjust css for .measure-tips
  //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
  // var catVal = $('.size-chart-container .category').val();
  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); //if mobile change the height of the .measure-tips div
  // if ($(window).width() < 737) {
  //   //if .measure-tips div has style remove it
  //   $('.measure-tips div').removeAttr('style');
  //
  //   //if .measure-tips css min-height: 0 set to auto
  //   var measureStyles = $('.measure-tips').attr('style');
  //   measureStyles = measureStyles.split(';');
  //   measureStyles = measureStyles[0];
  //   $('.measure-tips').attr('style', measureStyles);
  //
  //   //get the height
  //   var mHeight = $('.measure-tips').css('height');
  //
  //   //set the height
  //   $('.measure-tips div').css('height', mHeight);
  // }
  // if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
  //   //desktop
  //   if ($(window).width() > 737) {
  //     $('.measure-tips').css({
  //       minHeight: '0',
  //       padding: '0 0 33px 0'
  //     });
  //   }
  //   //mobile
  //   if ($(window).width() < 737) {
  //     $('.measure-tips').css('min-height', '0');
  //     //reset the height of .measure-tips div
  //     $('.measure-tips div').css('height', '0px');
  //   }
  //
  // } else if (deptVal == 'baby boy' || deptVal == 'baby girl') {
  //   //desktop
  //   if ($(window).width() > 737) {
  //     $('.measure-tips').css({
  //       minHeight: '420px',
  //       padding: '196px 0 0 0'
  //     });
  //   }
  //   //mobile
  //   if ($(window).width() < 737) {
  //     $('.measure-tips').css({
  //       minHeight: '290px',
  //       backgroundPosition: 'center -23px'
  //     });
  //
  //     //get the height
  //     var mHeight = $('.measure-tips').css('min-height');
  //
  //     //set the height
  //     $('.measure-tips div').css('height', mHeight);
  //   }
  // } else if (deptVal == 'newborn') {
  //   //desktop
  //   if ($(window).width() > 737) {
  //     $('.measure-tips').css({
  //       minHeight: '360px',
  //       padding: '196px 0 0 0'
  //     });
  //   }
  //   //mobile
  //   if ($(window).width() < 737) {
  //     $('.measure-tips').css({
  //       minHeight: '237px',
  //       backgroundPosition: 'center -21px'
  //     });
  //     //reset the height of .measure-tips div
  //     $('.measure-tips div').css('height', '0px');
  //   }
  // }
  // else remove the style attribute on .tips and change css on .measure-tips
  // else {
  //   //$('.size-chart-container').find($('.tips')).removeAttr('style');
  //   var measureStyles = $('.size-chart-container').find($('.measure-tips')).attr('style');
  //   measureStyles = measureStyles.split(';');
  //   measureStyles = measureStyles[0];
  //   $('.size-chart-container').find($('.measure-tips')).attr('style', measureStyles);
  // }
};
//# sourceMappingURL=measuring-tips-css.js.map
