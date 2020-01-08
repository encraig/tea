"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function () {
  //add class to .tips
  var onloadDeptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department'); // var onloadDeptVal = $('.size-chart-container .department').val();

  $('.size-chart-container').find($('.tips')).attr('data-dept', onloadDeptVal);
};
//# sourceMappingURL=add-data-dept.js.map
