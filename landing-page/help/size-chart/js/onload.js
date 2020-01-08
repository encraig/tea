const shoeBrands = require('./shoe-brands.js');
const sizeChartArr = require('./measuring-tips.js');
const deptCat = require('./set-dept-cat.js');
const changeCats = require('./change-cat.js');
const changeBackground = require('./change-background-image.js');
const adjustMeasureCSS = require('./measuring-tips-css.js');
const adjustTipsCSS = require('./tips-css.js');
const addDataAttr = require('./add-data-dept.js');
const changeRow = require('./change-first-row-table.js');
const selectDeptCat = require('./set-dept-cat-by-url.js');
const changeCopy = require('./change-measuring-tips-copy.js');
const changeOrder = require('./change-order.js');
const brandChange = require('./change-shoe-brand.js');
const makeBrands = require('./make-shoe-brands.js');
const makeTd = require('./make-td.js');
const outputTable = require('./output-table.js');
const makeTableHeader = require('./make-table-header.js');
const makeTable = require('./make-table.js');

module.exports = function() {
  //onload select Dept based on url params
  selectDeptCat('selectedDept', '.size-chart-container ul.department li', '.size-chart-container select.department');

  //onload change the cats dropdown
  //make the category dropdown
  changeCats(sizeChartArr)

  //onload select Cat based on url params
  selectDeptCat('selectedCat', '.size-chart-container ul.category li', '.size-chart-container select.category');

  //onload change the background image
  changeBackground(sizeChartArr);

  //onload change the copy
  changeCopy(sizeChartArr);

  //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
  adjustMeasureCSS();

  //if baby boy or baby girl adjust css on .tips
  adjustTipsCSS();

  //add class to .tips
  addDataAttr();

  //change <th> of the .size-chart-table table
  changeRow();

  //if shoes + accessories or sweaters + outerwear add the brands drop down
  makeBrands();

  //re-order the tables if shoes + accessories
  changeOrder();
};