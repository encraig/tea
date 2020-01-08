"use strict";

var shoeBrands = require('./shoe-brands.js');

var sizeChartArr = require('./measuring-tips.js');

var deptCat = require('./set-dept-cat.js');

var changeCats = require('./change-cat.js');

var changeBackground = require('./change-background-image.js');

var adjustMeasureCSS = require('./measuring-tips-css.js');

var adjustTipsCSS = require('./tips-css.js');

var addDataAttr = require('./add-data-dept.js');

var changeRow = require('./change-first-row-table.js');

var selectDeptCat = require('./set-dept-cat-by-url.js');

var changeCopy = require('./change-measuring-tips-copy.js');

var changeOrder = require('./change-order.js');

var brandChange = require('./change-shoe-brand.js');

var makeBrands = require('./make-shoe-brands.js');

var makeTd = require('./make-td.js');

var outputTable = require('./output-table.js');

var makeTableHeader = require('./make-table-header.js');

var makeTable = require('./make-table.js');

module.exports = function () {
  //onload select Dept based on url params
  selectDeptCat('selectedDept', '.size-chart-container ul.department li', '.size-chart-container select.department'); //onload change the cats dropdown
  //make the category dropdown

  changeCats(sizeChartArr); //onload select Cat based on url params

  selectDeptCat('selectedCat', '.size-chart-container ul.category li', '.size-chart-container select.category'); //onload change the background image

  changeBackground(sizeChartArr); //onload change the copy

  changeCopy(sizeChartArr); //if shoes + accessories hide .tips & change min-height and padding of .measure-tips

  adjustMeasureCSS(); //if baby boy or baby girl adjust css on .tips

  adjustTipsCSS(); //add class to .tips

  addDataAttr(); //change <th> of the .size-chart-table table

  changeRow(); //if shoes + accessories or sweaters + outerwear add the brands drop down

  makeBrands(); //re-order the tables if shoes + accessories

  changeOrder();
};
//# sourceMappingURL=onload.js.map
