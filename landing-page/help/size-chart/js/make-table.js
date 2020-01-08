var deptCat = require('./set-dept-cat.js');
var makeTableHeader = require('./make-table-header.js');
var outputTable = require('./output-table.js');

module.exports = function() {
  //function to create the tables
  //show .the-table
  $('.size-chart-table .the-table').show();

  //remove all <tr> except the 1st one
  var trs = $('.size-chart-table table tr');
  $.each(trs, function(i, val) {
    if ($(val).attr('class') !== 'size-chart-header') {
      $(val).remove();
    }
  });

  //remove all the tables except the .the-table
  var tables = $('.size-chart-table table');
  $.each(tables, function(i, val) {
    if ($(val).attr('class') !== 'the-table') {
      $(val).remove();
    }
  });

  //the selected values
  var dept = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

  var sheet = sheets;

  //loop through sheet and find the matched table
  $.each(sheet, function(i, val) {
    var sheetVal = val.data[0].rowData[2].values[0].formattedValue;
    var sheetArr = sheetVal.split(':');
    var sheetDept = sheetArr[0];
    var sheetCatArr = sheetArr[1].split(',');
    // console.log(sheetCatArr);

    //if baby
    if (sheetDept == 'baby') {
      sheetDept = ['baby girl', 'baby boy'];
    }

    //check if dept matches
    if (sheetDept == dept || sheetDept[0] == dept || sheetDept[1] == dept) {
      //check if cat matches
      $.each(sheetCatArr, function(j, category) {
        if (category == cat) {
          // console.log(i,val);
          var rows;
          var colspan;

          //if newborn department or category is shoes + accessories
          if (dept == 'newborn' || cat == 'shoes + accessories') {
            //hide the top table
            $('.size-chart-container .the-table').hide();

            var subcat = val.data[0].rowData[2].values[0].formattedValue;

            //if not newborn
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

            }

            // console.log(subcat);

            //if girl
            if (dept == 'girl') {
              rows = makeTableHeader(i, val, dept, subcat);
            }

            //if boy || baby girl || baby baby
            if (dept == 'boy' || dept == 'baby girl' || dept == 'baby boy') {
              rows = makeTableHeader(i, val, dept, subcat);
            }

            //if newborn
            if (dept == 'newborn') {
              rows = makeTableHeader(i, val, dept, subcat);
            }

            //output the table contents
            outputTable(i, val, rows);

            //stop the function
            return false;

          } else {

            rows = val.merges[0].endColumnIndex - 1;
            colspan = val.merges[0].endColumnIndex;

            //add colspan to .size-chart-header
            $('.size-chart-header th').attr('colspan', colspan);

            //output the table contents
            outputTable(i, val, rows);

            //stop the function
            return false;
          }

        }
      });
    }
  });

};