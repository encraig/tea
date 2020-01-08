(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var makeTd = require('./make-td.js');

module.exports = function (i, val, dept, subcat) {
  //function to make table header because of shoes + accessories have multiple tables
  //add new table
  $('.size-chart-table').append('<table data-num="' + i + '"><tr class="size-chart-header"><th>' + dept + ' ' + subcat + ' size chart</th></tr></table>'); // console.log('rows: ', val);

  rows = val.merges[0].endColumnIndex - 1;
  colspan = val.merges[0].endColumnIndex; // console.log(colspan);
  //add colspan to .size-chart-header

  $('.size-chart-table table[data-num="' + i + '"] th').attr('colspan', colspan);
  return rows;
};


},{"./make-td.js":3}],2:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');

var makeTableHeader = require('./make-table-header.js');

var outputTable = require('./output-table.js');

module.exports = function () {
  //function to create the tables
  //show .the-table
  $('.size-chart-table .the-table').show(); //remove all <tr> except the 1st one

  var trs = $('.size-chart-table table tr');
  $.each(trs, function (i, val) {
    if ($(val).attr('class') !== 'size-chart-header') {
      $(val).remove();
    }
  }); //remove all the tables except the .the-table

  var tables = $('.size-chart-table table');
  $.each(tables, function (i, val) {
    if ($(val).attr('class') !== 'the-table') {
      $(val).remove();
    }
  }); //the selected values

  var dept = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');
  var sheet = sheets; //loop through sheet and find the matched table

  $.each(sheet, function (i, val) {
    var sheetVal = val.data[0].rowData[2].values[0].formattedValue;
    var sheetArr = sheetVal.split(':');
    var sheetDept = sheetArr[0];
    var sheetCatArr = sheetArr[1].split(','); // console.log(sheetCatArr);
    //if baby

    if (sheetDept == 'baby') {
      sheetDept = ['baby girl', 'baby boy'];
    } //check if dept matches


    if (sheetDept == dept || sheetDept[0] == dept || sheetDept[1] == dept) {
      //check if cat matches
      $.each(sheetCatArr, function (j, category) {
        if (category == cat) {
          // console.log(i,val);
          var rows;
          var colspan; //if newborn department or category is shoes + accessories

          if (dept == 'newborn' || cat == 'shoes + accessories') {
            //hide the top table
            $('.size-chart-container .the-table').hide();
            var subcat = val.data[0].rowData[2].values[0].formattedValue; //if not newborn

            if (dept !== 'newborn') {
              subcat = subcat.split(',')[1];
            } else {
              //this is newborn
              subcat = subcat.split(',');

              if (subcat[1] !== undefined) {
                subcat = subcat[1];
              } else {
                subcat = 'all categories';
              }
            } // console.log(subcat);
            //if girl


            if (dept == 'girl') {
              rows = makeTableHeader(i, val, dept, subcat);
            } //if boy || baby girl || baby baby


            if (dept == 'boy' || dept == 'baby girl' || dept == 'baby boy') {
              rows = makeTableHeader(i, val, dept, subcat);
            } //if newborn


            if (dept == 'newborn') {
              rows = makeTableHeader(i, val, dept, subcat);
            } //output the table contents


            outputTable(i, val, rows); //stop the function

            return false;
          } else {
            rows = val.merges[0].endColumnIndex - 1;
            colspan = val.merges[0].endColumnIndex; //add colspan to .size-chart-header

            $('.size-chart-header th').attr('colspan', colspan); //output the table contents

            outputTable(i, val, rows); //stop the function

            return false;
          }
        }
      });
    }
  });
};


},{"./make-table-header.js":1,"./output-table.js":4,"./set-dept-cat.js":5}],3:[function(require,module,exports){
"use strict";

module.exports = function (k, row, rows, tableElem) {
  //function to make th <td>
  // console.log(tableElem);
  // console.log(k, row, rows);
  //add the data <td>
  $.each(row.values, function (l, td) {
    //loop only to the rows variable
    if (l <= rows) {
      var content;
      var fraction;
      var theFraction; // console.log(l, rows, row);

      if (td.formattedValue !== undefined) {
        content = td.formattedValue; // console.log(content);

        content = content.toLowerCase();
        content = content.replace(' - ', '&ndash;');
        content = content.replace('months', 'mos');
        content = content.replace('years', 'yrs');

        if (content.indexOf('inches') !== -1 || content.indexOf('pounds') !== -1) {
          content = content.split('\n'); // console.log(content);

          content = content[0] + '<span>' + content[1] + '</span>';
        }

        if (content == 'shoe size') {
          content = '<span class="shoe-size">' + content + '</span>';
        }

        fraction = td.formattedValue; // console.log('the fraction: ',fraction);
        //for shoes + accessories if not L/XL

        if (fraction !== 'L/XL' && fraction !== '2T/2' && fraction !== '3T/3' && fraction !== '4T/4') {
          //if cell has two fractions example 58 1/2 - 61 1/2
          if (fraction.indexOf('/') !== -1 && fraction.indexOf('-') !== -1) {
            fraction = fraction.split('-');
            var twoFrac = [];
            $.each(fraction, function (m, frac) {
              var fracArray = frac.split(' ');
              $.each(fracArray, function (n, num) {
                if (num !== '') {
                  twoFrac.push(num);
                }
              });
            }); // console.log(twoFrac);
            //output
            //example 61 1/2 - 64

            if (twoFrac[1].indexOf('/') !== -1 && twoFrac[3] == undefined) {
              var twoFracA = twoFrac[1].split('/');
              twoFrac[1] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' ' + twoFrac[1] + ' &ndash; ' + twoFrac[2] + '</td>');
            } //example 61 - 61 1/2
            else if (twoFrac[1].indexOf('/') == -1 && twoFrac[2].indexOf('/') !== -1) {
                var twoFracA = twoFrac[2].split('/');
                twoFrac[2] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
                $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' &ndash; ' + twoFrac[1] + ' ' + twoFrac[2] + '</td>');
              } //example 58 1/2 - 61 1/2
              else if (twoFrac[1].indexOf('/') !== -1 && twoFrac[1] !== undefined && twoFrac[3].indexOf('/') !== -1 && twoFrac[3] !== undefined) {
                  var twoFracA = twoFrac[1].split('/');
                  twoFrac[1] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
                  var twoFracB = twoFrac[3].split('/');
                  twoFrac[3] = '<sup class="frac">' + twoFracB[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracB[1] + '</span>';
                  $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' ' + twoFrac[1] + ' &ndash; ' + twoFrac[2] + ' ' + twoFrac[3] + '</td>');
                }
          } //only one fraction
          else {
              fraction = fraction.split(' ');
              $.each(fraction, function (m, frac) {
                // console.log(m, frac);
                if (frac.indexOf('/') !== -1) {
                  theFraction = frac; // console.log('theFraction: ',theFraction);
                }
              }); //output

              if (theFraction !== undefined && theFraction.indexOf('/') !== -1) {
                theFraction = theFraction.split('/');
                var htmlFraction = '<sup class="frac">' + theFraction[0] + '</sup>&frasl;<span class="frac denominator">' + theFraction[1] + '</span>';
                $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + fraction[0] + ' ' + htmlFraction + '</td>');
              } else {
                $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + content + '</td>');
              }
            } //output sizes 'L/XL','2T/2','3T/3','4T/4'

        } else if (fraction == 'L/XL' || fraction == '2T/2' || fraction == '3T/3' || fraction == '4T/4') {
          // console.log('yo buddy: ', fraction);
          $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + fraction + '</td>');
        }
      }
    }
  });
};


},{}],4:[function(require,module,exports){
"use strict";

var makeTd = require('./make-td.js');

module.exports = function (i, val, rows) {
  //function to output the table contents
  //output the table
  $.each(val.data[0].rowData, function (k, row) {
    //add the row <tr>
    if (k > 2) {
      var tableLength = $('.size-chart-table table').length; // console.log(tableLength);
      //check if the number of rows is even or odd then add class

      var tableNum = val.data[0].rowData.length - 4; //if only one table (not shoes + accessories)

      if (tableLength == 1) {
        $('.size-chart-container .the-table').append('<tr data-num="' + k + '"></tr>'); //add the data <td>

        makeTd(k, row, rows, '.size-chart-container .the-table');
      } //if multiple tables (shoes + accessories)
      else if (tableLength > 1) {
          // console.log(row.values[0].formattedValue);
          //only make a row if the 1st td of the row has data
          if (row.values[0].formattedValue !== undefined) {
            $('.size-chart-table table[data-num="' + i + '"]').append('<tr data-num="' + k + '"></tr>'); // console.log('more then one table\n this is the index\n' + i);
            //add the data <td>

            makeTd(k, row, rows, '.size-chart-table table[data-num="' + i + '"]');
          }
        }
    }
  });
};


},{"./make-td.js":3}],5:[function(require,module,exports){
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


},{}]},{},[2]);
