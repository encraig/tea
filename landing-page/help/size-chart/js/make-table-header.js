var makeTd = require('./make-td.js');

module.exports = function(i, val, dept, subcat) {
  //function to make table header because of shoes + accessories have multiple tables

  //add new table
  $('.size-chart-table').append('<table data-num="' + i + '"><tr class="size-chart-header"><th>' + dept + ' ' + subcat + ' size chart</th></tr></table>');
  // console.log('rows: ', val);
  rows = val.merges[0].endColumnIndex - 1;
  colspan = val.merges[0].endColumnIndex;
  // console.log(colspan);

  //add colspan to .size-chart-header
  $('.size-chart-table table[data-num="' + i + '"] th').attr('colspan', colspan);

  return rows;

};