var makeTd = require('./make-td.js');

module.exports = function(i, val, rows) {
  //function to output the table contents

  //output the table
  $.each(val.data[0].rowData, function(k, row) {
    //add the row <tr>
    if (k > 2) {

      var tableLength = $('.size-chart-table table').length;
      // console.log(tableLength);

      //check if the number of rows is even or odd then add class
      var tableNum = val.data[0].rowData.length - 4;

      //if only one table (not shoes + accessories)
      if (tableLength == 1) {

        $('.size-chart-container .the-table').append('<tr data-num="' + k + '"></tr>');

        //add the data <td>
        makeTd(k, row, rows, '.size-chart-container .the-table');
      }
      //if multiple tables (shoes + accessories)
      else if (tableLength > 1) {
        // console.log(row.values[0].formattedValue);

        //only make a row if the 1st td of the row has data
        if (row.values[0].formattedValue !== undefined) {

          $('.size-chart-table table[data-num="' + i + '"]').append('<tr data-num="' + k + '"></tr>');

          // console.log('more then one table\n this is the index\n' + i);

          //add the data <td>
          makeTd(k, row, rows, '.size-chart-table table[data-num="' + i + '"]');
        }

      }

    }
  });



};