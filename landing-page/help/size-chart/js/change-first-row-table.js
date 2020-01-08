var deptCat = require('./set-dept-cat.js');
//function to change the 1st row of the size chart table
module.exports = function() {
  var d = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var c = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

  // var d = $('.size-chart-container .department').val();
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