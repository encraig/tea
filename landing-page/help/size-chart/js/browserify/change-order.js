(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function (sizeChartArr) {
  //function to change the order of the tables for shoes + accessories
  var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); //if shoes + accessories re-order the tables

  if (cat == 'shoes + accessories') {
    //hide the .size-chart-table children
    $('.size-chart-table').children().hide(); //add the loading

    $('.size-chart-table').prepend('<div style="text-align:center; font-size:15px; font-family:brown-pro-bold !important" class="tables-loading">LOADING...</div>');
    setTimeout(function () {
      var tables = $('.size-chart-table table'); //loop through and re-order

      $.each(tables, function (i, val) {
        var str = $(val).find('.size-chart-header th').text(); // console.log(str);
        //if hat make 1st

        if (str.indexOf('hat') !== -1) {
          $('.size-chart-table').prepend($(val));
        } //if headband make 2nd


        if (str.indexOf('headband') !== -1) {
          $('.size-chart-table table:nth-of-type(2)').after($(val));
        } //if socks make last


        if (str.indexOf('socks') !== -1) {
          $('.size-chart-table').append($(val));
        }
      }); //move the 2T/2 message to the bottom

      $('.size-chart-table').append($('.align-center')); //remove the loading

      $('.tables-loading').remove(); //show the .size-chart-table table but not .the-table

      var children = $('.size-chart-table').children();
      $.each(children, function (i, val) {
        //don't show if has class .the-table
        if (!$(val).hasClass('the-table')) {
          $(val).show();
        }
      });
    }, 1100);
  }
};


},{"./set-dept-cat.js":2}],2:[function(require,module,exports){
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


},{}]},{},[1]);
