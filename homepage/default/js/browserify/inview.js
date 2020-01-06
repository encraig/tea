(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (elem) {
  $(elem).on('inview', function (event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      // console.log('in view');
      var imgs = $(this).find('img'); // let width = $(window).width();
      // console.log(imgs);
      // console.log(width);

      $.each(imgs, function (i, val) {
        var src = $(val).attr('data-src'); // console.log(src);

        if (src) {
          $(val).attr('src', src);
        }

        $(val).removeAttr('data-src');
      });
    }
  });
}; // $('.hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8').on('inview', function(event, isInView) {
//   if (isInView) {
//     // element is now visible in the viewport
//     // console.log('in view');
//     let imgs = $(this).find('img');
//     let width = $(window).width();
//     // console.log(imgs);
//     // console.log(width);
//     $.each(imgs, function(i, val) {
//       let src = $(val).attr('data-src');
//       // console.log(src);
//       if (src) {
//         $(val).attr('src', src);
//       }
//       $(val).removeAttr('data-src');
//     });
//   }
// });
// $('.hp .c1').on('inview', function(event, isInView) {
//   if (isInView) {
//     // element is now visible in the viewport
//     // console.log('in view');
//     let imgs = $(this).find('img');
//     let width = $(window).width();
//     // console.log(imgs);
//     // console.log(width);
//
//     $.each(imgs, function(i, val) {
//       let theClass = $(val).attr('class');
//       let src = $(val).attr('data-src');
//       // console.log(src);
//       $(val).attr('src', src);
//     });
//   }
// });


},{}]},{},[1]);
