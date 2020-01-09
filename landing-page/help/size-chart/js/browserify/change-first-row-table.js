(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js'); //function to change the 1st row of the size chart table


module.exports = function () {
  var d = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var c = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); // var d = $('.size-chart-container .department').val();
  // var c = $('.size-chart-container .category').val();

  var str;

  if (d == 'newborn') {
    str = d + ' size chart';
  } else if (c == 'sweater + outerwear') {
    str = d + ' outerwear size chart (sweaters + jackets)';
  } else if (d == 'baby girl' && c == 'tops') {
    str = d + ' tops, hoodies + bodysuits size chart';
  } else if (d == 'baby boy' && c == 'tees + shirts') {
    str = d + ' tees, shirts, hoodies + bodysuits size chart';
  } else {
    str = d + ' ' + c + ' size chart';
  }

  $('.size-chart-table table .size-chart-header th').html(str);
};


},{"./set-dept-cat.js":2}],2:[function(require,module,exports){
"use strict";

module.exports = function (elem1, elem2) {
  //function to set the selected department and category for desktop or mobile
  var Val; //desktop
  // if ($(window).width() > 737) {
  //   //get the value of the .department or .category
  //   Val = $(elem1).text();
  // }
  //mobile
  // else {
  //get the value of the .department or .category

  Val = $(elem2).val(); // }

  return Val;
};


},{}]},{},[1]);
