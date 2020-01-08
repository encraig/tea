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

var onload = require('./onload.js');

$(document).ready(function () {
  $('body').prepend($('.bg-ref')); //add sizeChartArr to the page for pdp pages

  $('.size-chart-container').prepend('<div id="sizeChartArr"></div>'); //loop through sizeChartArr and add the attribute to #sizeChartArr

  $.each(sizeChartArr, function (i, val) {
    var cats = [];
    var dept = val.dept;
    dept = dept.replace(' ', '-'); //loop through the categories and push to cats

    $.each(val.cat, function (j, cat) {
      cats.push(cat.name);
    }); //convert cats to string

    var theCats = cats.join(); //add data attribute to page

    $('#sizeChartArr').attr('data-' + dept, theCats);
  });
  /*-----------------------------------------------------------------------------------------*/
  //onload make the department dropdown
  //make the department dropdown

  $.each(sizeChartArr, function (i, val) {
    //<ul>
    var deptLi = '<li>' + val.dept + '</li>';
    $('.size-chart-container ul.department').append(deptLi); //<select>

    var deptOption = '<option value="' + val.dept + '">' + val.dept + '</option>';
    $('.size-chart-container select.department').append(deptOption);
  });
  /*-----------------------------------------------------------------------------------------*/
  //onload

  onload();
  /*-----------------------------------------------------------------------------------------*/
  //on .department change

  $('.size-chart-container select.department').change(function () {
    //remove all the <option> in .category
    $('.size-chart-container select.category option').remove(); //change the cats dropdown

    changeCats(sizeChartArr); //change the background image

    changeBackground(sizeChartArr); //change the copy

    changeCopy(sizeChartArr); //if shoes + accessories hide .tips & change min-height and padding of .measure-tips

    adjustMeasureCSS(); //if baby boy or baby girl adjust css on .tips

    adjustTipsCSS(); //add class to .tips

    addDataAttr(); //change <th> of the .size-chart-table table

    changeRow(); //make the table

    makeTable(); //if shoes + accessories or sweaters + outerwear add the brands drop down

    makeBrands();
  });
  /*-----------------------------------------------------------------------------------------*/
  //on .category change

  $('.size-chart-container select.category').change(function () {
    //change the background image
    changeBackground(sizeChartArr); //change the copy

    changeCopy(sizeChartArr); //if shoes + accessories hide .tips & change min-height and padding of .measure-tips

    adjustMeasureCSS(); //if baby boy or baby girl adjust css on .tips

    adjustTipsCSS(); //change <th> of the .size-chart-table table

    changeRow(); //make the table

    makeTable(); //if shoes + accessories or sweaters + outerwear add the brands drop down

    makeBrands(); //re-order the tables if shoes + accessories

    changeOrder();
  });
  /*-----------------------------------------------------------------------------------------*/
  //desktop dropdown to expand and collapse

  $('ul.department, ul.category').click(function () {
    //check if has style attr remove it
    if ($(this).attr('style') !== undefined) {
      $(this).removeAttr('style');
    } // if doesn't have style attr add css to expand
    else {
        $(this).css('height', 'auto');
        $(this).find('li.selected').text('please select');
      }
  });
  /*-----------------------------------------------------------------------------------------*/
  //desktop dropdown to select new department

  $('ul.department li').click(function () {
    if ($(this).attr('class') !== 'selected') {
      //get the clicked li text
      var txt = $(this).text(); //change the text of .selected

      $('ul.department .selected').text(txt); //remove all the li in ul.category

      $('ul.category li').remove(); //change the cats dropdown

      changeCats(sizeChartArr); //prepend <li class="selected">cat</li> to ul.category

      var s = $('ul.category li:first-of-type').text();
      $('ul.category').prepend('<li class="selected">' + s + '</li>'); //change the background image

      changeBackground(sizeChartArr); //change the copy

      changeCopy(sizeChartArr); //if shoes + accessories hide .tips & change min-height and padding of .measure-tips

      adjustMeasureCSS(); //if baby boy or baby girl adjust css on .tips

      adjustTipsCSS(); //add class to .tips

      addDataAttr(); //change <th> of the .size-chart-table table

      changeRow(); //make the table

      makeTable(); //if shoes + accessories or sweaters + outerwear add the brands drop down

      makeBrands(); //if user changes the ul.category

      catLiChange();
    }
  });
  /*-----------------------------------------------------------------------------------------*/
  //function for desktop dropdown to select new category

  var catLiChange = function catLiChange() {
    $('ul.category li').click(function () {
      if ($(this).attr('class') !== 'selected') {
        //get the clicked li text
        var txt = $(this).text(); //change the text of .selected

        $('ul.category .selected').text(txt); //change the background image

        changeBackground(sizeChartArr); //change the copy

        changeCopy(sizeChartArr); //if shoes + accessories hide .tips & change min-height and padding of .measure-tips

        adjustMeasureCSS(); //if baby boy or baby girl adjust css on .tips

        adjustTipsCSS(); //add class to .tips

        addDataAttr(); //change <th> of the .size-chart-table table

        changeRow(); //make the table

        makeTable(); //if shoes + accessories or sweaters + outerwear add the brands drop down

        makeBrands(); //re-order the tables if shoes + accessories

        changeOrder();
      }
    });
  }; //onpage load call this


  catLiChange();
  /*-----------------------------------------------------------------------------------------*/
  // on click .tips

  $('.size-chart-container').find($('.tips')).click(function (e) {
    e.preventDefault(); //get the data-dept

    var dept = $(this).attr('data-dept'); //hide h1

    $('.size-chart-container h1').hide(); //add the content to .measure-take-over

    $.each(sizeChartArr, function (i, val) {
      if (dept == val.dept) {
        //add the image
        //desktop
        if ($(window).width() > 737) {
          $('.measure-content img').attr('src', 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + val.measure.img);
        } //mobile
        else if ($(window).width() < 737) {
            var imgSrc = val.measure.img;
            imgSrc = imgSrc.split('.');
            imgSrc = imgSrc[0] + '-m.' + imgSrc[1];
            $('.measure-content img').attr('src', 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + imgSrc);
          } //add the chest text


        $('.measure-content .text .chest p').html(val.measure.chest); //add the hips text

        $('.measure-content .text .hips p').html(val.measure.hips); //add the waist text

        $('.measure-content .text .waist p').html(val.measure.waist);
      }
    }); //hide the other elements

    $('.size-chart-container .dropdowns, .size-chart-container .measure-tips, .size-chart-container .size-chart-table').hide(); //show .measure-take-over

    $('.measure-take-over').show();
  });
  /*-----------------------------------------------------------------------------------------*/
  //collapse ul.department & ul.category when click on .measure-tips

  $('.measure-tips').click(function () {
    var dept = $('ul.department');
    var cat = $('ul.category');
    var arr = [dept, cat];
    $.each(arr, function (i, val) {
      var attribute = $(val).attr('style');

      if (attribute !== undefined) {
        $(val).removeAttr('style');
      }
    });
  });
  /*-----------------------------------------------------------------------------------------*/
  //collapse ul.brand when click on .size-chart-table

  $('.brands h2').click(function () {
    $('ul.brand').removeAttr('style');
  });
  /*-----------------------------------------------------------------------------------------*/
  //close the .measure-take-over

  $('.measure-take-over .measure, .measure-take-over .return').click(function () {
    //show h1
    $('.size-chart-container h1').show(); //hide .measure-take-over

    $('.measure-take-over').hide(); //show the other elements

    $('.size-chart-container .dropdowns, .size-chart-container .measure-tips, .size-chart-container .size-chart-table').show(); //reset the .measure-content

    $('.measure-content img').attr('src', '');
    $('.measure-content .text .chest p, .measure-content .text .hips p, .measure-content .text .waist p').html('');
  });
  /*-----------------------------------------------------------------------------------------*/
  //add the loading

  $('.size-chart-table').append('<div style="text-align:center; font-size:15px; font-family:brown-pro-bold !important" class="tables-loading">LOADING...</div>');
  /*-----------------------------------------------------------------------------------------*/
  // var sheetId = '1guudkOtlPolTXiMskAmMqplxY9NM11W6UW1hxmpPpH0';

  var sheetId = '1_uxw0nK5cwnP02JM4ks9SvQo8qeXel41BgQM3a19xwY'; // var hidden = 'AIzaSyDHknRbkWGT1ozvC_H_rNtFlLsGGjXFs';

  var hidden = 'AIzaSyCya37AW8ylhzoeU3FDFuUG824MfdW8wY8';
  var sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/".concat(sheetId, "?key=").concat(hidden, "&includeGridData=true"); //if sheets is undefined make the $.get call else just call makeTable() and remove the loading

  if (sheets == undefined) {
    console.log('no sheets go get sheets'); //make the get call

    $.getJSON(sheetUrl, function (data) {
      // console.log(data);
      sheets = data.sheets; //make the table

      makeTable(); //remove the loading

      $('.tables-loading').remove();
    });
  } else {
    // console.log('sheets found');
    //make the table
    makeTable(); //remove the loading

    $('.tables-loading').remove();
  }
});
//# sourceMappingURL=functions.js.map
