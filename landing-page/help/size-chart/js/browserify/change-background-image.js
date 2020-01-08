(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
