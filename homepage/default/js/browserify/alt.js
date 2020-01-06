(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (elem, alt) {
  var img = $(elem);
  $.each(img, function (i, val) {
    $(val).attr('alt', alt);
  });
}; // const addAlt = (elem, alt) => {
//   let img = $(elem);
//   $.each(img, function(i, val) {
//     $(val).attr('alt', alt);
//   });
// };
//
// addAlt('.hp .c1 img', '2 girls');
// addAlt('.hp .c2 img', 'tea gives back');
// addAlt('.hp .c3 .first img', 'girl');
// addAlt('.hp .c3 .second img', 'baby');
// addAlt('.hp .c4 .first img', '2 girls');
// addAlt('.hp .c4 .second img', 'baby');
// addAlt('.hp .c7 img', 'Giving Tuesday: Giving Back for Good');


},{}]},{},[1]);
