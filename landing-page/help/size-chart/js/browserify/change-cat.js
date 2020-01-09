(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function (sizeChartArr) {
  //function to change the cats dropdown
  //get the value of the .department
  var dept; //desktop
  // if ($(window).width() > 737) {
  //   dept = $('.size-chart-container ul.department .selected').text();
  // }
  //mobile
  // else if ($(window).width() < 737) {

  dept = $('.size-chart-container select.department').val(); // }
  // var deptValD = $('.size-chart-container ul.department .selected').text();
  // var deptValM = $('.size-chart-container select.department').val();

  $.each(sizeChartArr, function (i, val) {
    //get the cats that match the dept
    if (val.dept == dept) {
      //loop through the cats and add to page
      $.each(val.cat, function (j, arr) {
        //<ul>
        // var catD = '<li>' + arr.name + '</li>';
        // $('.size-chart-container ul.category').append(catD);
        //<select>
        var catM = '<option value="' + arr.name + '">' + arr.name + '</option>';
        $('.size-chart-container select.category').append(catM);
      });
    }
  });
};


},{}]},{},[1]);
