(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (elem1, elem2) {
  //function to set the selected department and category for desktop or mobile
  var Val; //desktop

  if ($(window).width() > 737) {
    //get the value of the .department or .category
    Val = $(elem1).text();
  } //mobile
  else {
      //get the value of the .department or .category
      Val = $(elem2).val();
    }

  return Val;
};


},{}],2:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function () {
  //function to adjust css for .tips
  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); // var deptVal = $('.size-chart-container .department').val();

  if (deptVal == 'baby girl' || deptVal == 'baby boy') {
    //desktop
    if ($(window).width() > 737) {
      //if bottoms
      // if(catVal == 'bottoms'){
      //   $('.size-chart-container').find($('.tips')).css('top','180px');
      // } else {
      //   $('.size-chart-container').find($('.tips')).css('top','148px');
      // }
      $('.size-chart-container').find($('.tips')).css('top', '128px');
      $('.size-chart-container').find($('.tips')).show();
    } //mobile


    if ($(window).width() < 737) {
      if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
        $('.size-chart-container').find($('.tips')).hide();
      } else {
        $('.size-chart-container').find($('.tips')).show(); //change the css positioning

        $('.size-chart-container').find($('.tips')).css('top', '189px');
      }
    }
  } //else if newborn hide .tips
  else if (deptVal == 'newborn') {
      $('.size-chart-container').find($('.tips')).hide();
    } // if category is shoes + accessories  or pajams
    else if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
        $('.size-chart-container').find($('.tips')).hide();
      } // else remove the style attribute on .tips
      else {
          $('.size-chart-container').find($('.tips')).removeAttr('style');
        }
};


},{"./set-dept-cat.js":1}]},{},[2]);
