(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function () {
  //add class to .tips
  var onloadDeptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department'); // var onloadDeptVal = $('.size-chart-container .department').val();

  $('.size-chart-container').find($('.tips')).attr('data-dept', onloadDeptVal);
};


},{"./set-dept-cat.js":18}],2:[function(require,module,exports){
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


},{"./set-dept-cat.js":18}],3:[function(require,module,exports){
"use strict";

module.exports = function (sizeChartArr) {
  //function to change the cats dropdown
  //get the value of the .department
  var dept; //desktop

  if ($(window).width() > 737) {
    dept = $('.size-chart-container ul.department .selected').text();
  } //mobile
  else if ($(window).width() < 737) {
      dept = $('.size-chart-container select.department').val();
    } // var deptValD = $('.size-chart-container ul.department .selected').text();
  // var deptValM = $('.size-chart-container select.department').val();


  $.each(sizeChartArr, function (i, val) {
    //get the cats that match the dept
    if (val.dept == dept) {
      //loop through the cats and add to page
      $.each(val.cat, function (j, arr) {
        //<ul>
        var catD = '<li>' + arr.name + '</li>';
        $('.size-chart-container ul.category').append(catD); //<select>

        var catM = '<option value="' + arr.name + '">' + arr.name + '</option>';
        $('.size-chart-container select.category').append(catM);
      });
    }
  });
};


},{}],4:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js'); //function to change the 1st row of the size chart table


module.exports = function () {
  var d = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var c = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); // var d = $('.size-chart-container .department').val();
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


},{"./set-dept-cat.js":18}],5:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function (sizeChartArr) {
  //function to change the copy in .measure-tips
  //get the value of the selected department and category
  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');
  $.each(sizeChartArr, function (i, val) {
    //get the dept that match
    if (deptVal == val.dept) {
      //if swim
      if (catVal == 'swim') {
        //check if swim already on page
        var isSwim = $('.measure-tips .swim'); //desktop

        if ($(window).width() > 737) {
          if (isSwim.length == 0) {
            //find the .measure-tips div and prepend <span class="top"> & <span class="bottom">
            $('.measure-tips div').prepend('<span class="top"></span><span class="bottom"><h2></h2><p></p></span>');
          } //if baby boy swim


          if (deptVal == 'baby boy') {
            $('.measure-tips div').addClass('baby-boy-swim');
            $('.measure-tips div)').addClass('baby-boy-swim');
          }
        } //add the content


        $.each(val.cat, function (j, arr) {
          //get the cat that match
          if (catVal == arr.name) {
            //change the copy
            // console.log(arr);
            // var divs = $('.size-chart-container .measure-tips div');
            // console.log(divs);
            $('.size-chart-container .measure-tips div p').html(arr.rightP);
            ; // $.each(divs, function(k, obj) {
            //   if (k == 0) {
            //     //change the h2
            //     // $(obj).find('h2').html(arr.leftH2);
            //     //change the p
            //     // $(obj).find('p').html(arr.leftP);
            //   } else if (k == 1) {
            //     //desktop
            //     if ($(window).width() > 737) {
            //
            //       if (arr.rightH2Bottom !== '') {
            //         //add .swim to .measure-tips div:first-of-type
            //         $('.measure-tips div').addClass('swim');
            //         //add .two-rows to .measure-tips div:nth-of-type(2)
            //         $('.measure-tips div').addClass('two-rows');
            //       } else {
            //         $('.measure-tips div').removeClass('two-rows');
            //       }
            //change the h2 .top
            // $(obj).find('.top').find('h2').html(arr.rightH2);
            // //change the p .top
            // $(obj).find('.top').find('p').html(arr.rightP);
            // //change the h2 .bottom
            // $(obj).find('.bottom').find('h2').html(arr.rightH2Bottom);
            // //change the p .bottom
            // $(obj).find('.bottom').find('p').html(arr.rightPBottom);
            // }
            //mobile
            //     if ($(window).width() < 737) {
            //       //change the h2
            //       $(obj).find('h2').html(arr.leftH2);
            //       //change the p
            //       $(obj).find('p').html(arr.leftP);
            //     }
            //   }
            // });
          }
        });
      } else {
        $.each(val.cat, function (j, arr) {
          //move .top contents out
          $('.measure-tips div:nth-of-type(2)').append($('.measure-tips .top h2, .measure-tips .top p')); //remove .top & .bottom because of swim

          $('.measure-tips div:nth-of-type(2) .top, .measure-tips div:nth-of-type(2) .bottom').remove(); //remove .swim & .baby-boy-swim from .measure-tips div:first-of-type

          $('.measure-tips div:first-of-type').removeClass('swim');
          $('.measure-tips div:first-of-type').removeClass('baby-boy-swim');
          $('.measure-tips div:nth-of-type(2)').removeClass('two-rows');
          $('.measure-tips div:nth-of-type(2)').removeClass('baby-boy-swim'); //get the cat that match

          if (catVal == arr.name) {
            //change the copy
            // console.log(arr);
            var divs = $('.size-chart-container .measure-tips div'); // console.log(divs);

            $.each(divs, function (k, obj) {
              if (k == 0) {
                //change the h2
                $(obj).find('h2').html(arr.leftH2); //change the p

                $(obj).find('p').html(arr.leftP);
              } else if (k == 1) {
                //desktop
                if ($(window).width() > 737) {
                  //change the h2
                  $(obj).find('h2').html(arr.rightH2); //change the p

                  $(obj).find('p').html(arr.rightP);
                } //mobile


                if ($(window).width() < 737) {
                  //if newborn hide div
                  if (deptVal == 'newborn') {
                    $(obj).hide();
                  } // not newborn
                  else {
                      $(obj).show();
                    } //change the h2


                  $(obj).find('h2').html(arr.leftH2); //change the p

                  $(obj).find('p').html(arr.leftP);
                }
              }
            });
          }
        });
      }
    }
  });
};


},{"./set-dept-cat.js":18}],6:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function (sizeChartArr) {
  //function to change the order of the tables for shoes + accessories
  var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); //if shoes + accessories re-order the tables

  if (cat == 'shoes + accessories') {
    //hide the .size-chart-table children
    $('.size-chart-table').children().hide(); //add the loading

    $('.size-chart-table').prepend('<div style="text-align:center; font-size:15px; font-family:brown-pro-bold !important" class="tables-loading">LOADING...</div>');
    setTimeout(function () {
      var tables = $('.size-chart-table table'); //loop through and re-order

      $.each(tables, function (i, val) {
        var str = $(val).find('.size-chart-header th').text(); // console.log(str);
        //if hat make 1st

        if (str.indexOf('hat') !== -1) {
          $('.size-chart-table').prepend($(val));
        } //if headband make 2nd


        if (str.indexOf('headband') !== -1) {
          $('.size-chart-table table:nth-of-type(2)').after($(val));
        } //if socks make last


        if (str.indexOf('socks') !== -1) {
          $('.size-chart-table').append($(val));
        }
      }); //move the 2T/2 message to the bottom

      $('.size-chart-table').append($('.align-center')); //remove the loading

      $('.tables-loading').remove(); //show the .size-chart-table table but not .the-table

      var children = $('.size-chart-table').children();
      $.each(children, function (i, val) {
        //don't show if has class .the-table
        if (!$(val).hasClass('the-table')) {
          $(val).show();
        }
      });
    }, 1100);
  }
};


},{"./set-dept-cat.js":18}],7:[function(require,module,exports){
"use strict";

module.exports = function () {
  //function on elem change go to ext url
  //collapse ul.brand on .brands click
  $('.brands, table, .measure-tips').click(function () {
    $('ul.brand').removeAttr('style');
  }); //expand or collapse
  //desktop dropdown to expand and collapse

  $('ul.brand').click(function () {
    //check if has style attr remove it
    if ($(this).attr('style') !== undefined) {
      $(this).removeAttr('style');
    } // if doesn't have style attr add css to expand
    else {
        $(this).css('height', 'auto');
      }
  }); //on .shoes change
  //<ul>

  $('.size-chart-table').find('ul.brand li').click(function () {
    var txt = $(this).text();
    txt = txt.toLowerCase();
    var brand = $(this).attr('data-url');

    if (txt !== 'please select a brand') {
      window.open(brand, '_blank');
    }
  });
};


},{}],8:[function(require,module,exports){
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


},{"./add-data-dept.js":1,"./change-background-image.js":2,"./change-cat.js":3,"./change-first-row-table.js":4,"./change-measuring-tips-copy.js":5,"./change-order.js":6,"./change-shoe-brand.js":7,"./make-shoe-brands.js":9,"./make-table-header.js":10,"./make-table.js":11,"./make-td.js":12,"./measuring-tips-css.js":13,"./measuring-tips.js":14,"./onload.js":15,"./output-table.js":16,"./set-dept-cat-by-url.js":17,"./set-dept-cat.js":18,"./shoe-brands.js":19,"./tips-css.js":20}],9:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');

var brandChange = require('./change-shoe-brand.js');

var sizeChartArr = require('./measuring-tips.js');

var shoeBrands = require('./shoe-brands.js');

module.exports = function () {
  //function to make the brand drop down for shoes or sweaters
  //remove .brands
  $('.brands, .brands-dropdown').remove();
  var dept = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); //only execute if sweaters or shoes

  if (cat == 'sweater + outerwear' || cat == 'shoes + accessories') {
    //make the element to add to the page
    // var elem = '<div class="brands"></div>';
    var elem1 = '<div class="brands"></div>';
    var elem2 = '<div class="brands-dropdown"></div>';
    var h2;
    var text = '<p>Please select a brand from the menu below to view<br> the size chart. Size chart will open in a new window.</p>';
    var select = $('<select class="brand mobile" onchange="window.open(this.value)"><option>Please select a brand</option></select>');
    var ul = $('<ul class="brand desktop"><li>Please select a brand</li></ul>');
    var ol = $('<ol class="mobile"></ol>'); //if shoes + accessories

    if (cat == 'shoes + accessories') {
      h2 = '<h2>' + dept + ' shoes size chart</h2>'; //add the <option> and <li>
      //loop through the .sizeChartArr

      $.each(sizeChartArr, function (i, val) {
        //find the matched dept
        if (dept == val.dept) {
          //loop through dept shoes
          $.each(val.shoes, function (j, shoe) {
            //loop through the shoeBrands
            $.each(shoeBrands, function (k, brand) {
              //if match output
              if (shoe == brand.brand) {
                //<ul>
                var li = '<li data-url="' + brand.url + '">' + shoe + '</li>'; //<ol>

                var li2 = '<li><a href="' + brand.url + '" target="_blank">' + shoe + '</a></li>'; //<select>

                var option = '<option value="' + brand.url + '">' + shoe + '</option>';
                $(ul).append(li);
                $(ol).append(li2);
                $(select).append(option);
              }
            });
          });
        }
      });
    } //else if sweaters + outerwear
    else if (cat == 'sweater + outerwear') {
        h2 = '<h2>' + dept + ' outerwear size chart (other brands)</h2>'; //<ul>

        $(ul).append('<li data-url="https://www.patagonia.com/size-boys-girls.html">patagonia</li>'); //<ol>

        $(ol).append('<li><a href="https://www.patagonia.com/size-boys-girls.html" target="_blank">patagonia</a></li>'); //<select>

        $(select).append('<option value="https://www.patagonia.com/size-boys-girls.html">patagonia</option>');
      } // console.log(h2, text, select);
    //append the elements into .brands


    var brandsContainer = $(elem1).append(h2, text); //because of safari not allowing window.open()
    //if mobile

    if ($(window).width() < 737) {
      //if safari
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        var brandsDropdown = $(elem2).append(ol, ul);
      } //not safari
      else {
          var brandsDropdown = $(elem2).append(select, ul);
        }
    } //not mobile
    else {
        var brandsDropdown = $(elem2).append(select, ul);
      } //add to page


    $('.size-chart-table').append(brandsContainer);
    $('.size-chart-table').append(brandsDropdown); //because of onload append shoe size chart to .size-chart-table

    setTimeout(function () {
      $('.size-chart-table').append($('.brands'));
      $('.size-chart-table').append($('.brands-dropdown'));
    }, 1500); //on .brand change

    brandChange();
  }
};


},{"./change-shoe-brand.js":7,"./measuring-tips.js":14,"./set-dept-cat.js":18,"./shoe-brands.js":19}],10:[function(require,module,exports){
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


},{"./make-td.js":12}],11:[function(require,module,exports){
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


},{"./make-table-header.js":10,"./output-table.js":16,"./set-dept-cat.js":18}],12:[function(require,module,exports){
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


},{}],13:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function () {
  //function to adjust css for .measure-tips
  //if shoes + accessories hide .tips & change min-height and padding of .measure-tips
  // var catVal = $('.size-chart-container .category').val();
  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); //if mobile change the height of the .measure-tips div

  if ($(window).width() < 737) {
    //if .measure-tips div has style remove it
    $('.measure-tips div').removeAttr('style'); //if .measure-tips css min-height: 0 set to auto

    var measureStyles = $('.measure-tips').attr('style');
    measureStyles = measureStyles.split(';');
    measureStyles = measureStyles[0];
    $('.measure-tips').attr('style', measureStyles); //get the height

    var mHeight = $('.measure-tips').css('height'); //set the height

    $('.measure-tips div').css('height', mHeight);
  }

  if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
    //desktop
    if ($(window).width() > 737) {
      $('.measure-tips').css({
        minHeight: '0',
        padding: '0 0 33px 0'
      });
    } //mobile


    if ($(window).width() < 737) {
      $('.measure-tips').css('min-height', '0'); //reset the height of .measure-tips div

      $('.measure-tips div').css('height', '0px');
    }
  } else if (deptVal == 'baby boy' || deptVal == 'baby girl') {
    //desktop
    if ($(window).width() > 737) {
      $('.measure-tips').css({
        minHeight: '420px',
        padding: '196px 0 0 0'
      });
    } //mobile


    if ($(window).width() < 737) {
      $('.measure-tips').css({
        minHeight: '290px',
        backgroundPosition: 'center -23px'
      }); //get the height

      var mHeight = $('.measure-tips').css('min-height'); //set the height

      $('.measure-tips div').css('height', mHeight);
    }
  } else if (deptVal == 'newborn') {
    //desktop
    if ($(window).width() > 737) {
      $('.measure-tips').css({
        minHeight: '360px',
        padding: '196px 0 0 0'
      });
    } //mobile


    if ($(window).width() < 737) {
      $('.measure-tips').css({
        minHeight: '237px',
        backgroundPosition: 'center -21px'
      }); //reset the height of .measure-tips div

      $('.measure-tips div').css('height', '0px');
    }
  } // else remove the style attribute on .tips and change css on .measure-tips
  else {
      //$('.size-chart-container').find($('.tips')).removeAttr('style');
      var measureStyles = $('.size-chart-container').find($('.measure-tips')).attr('style');
      measureStyles = measureStyles.split(';');
      measureStyles = measureStyles[0];
      $('.size-chart-container').find($('.measure-tips')).attr('style', measureStyles);
    }
};


},{"./set-dept-cat.js":18}],14:[function(require,module,exports){
"use strict";

module.exports = [{
  dept: 'girl',
  shoes: ['yosi samra', 'vans', 'elephantito', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'toke', 'havaianas', 'cienta'],
  measure: {
    img: 'girls/girls-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of her chest and around her shoulder blades. Her arms should be relaxed naturally against her sides.',
    hips: 'Have your child stand with her legs together, not spread apart. Wrap the measuring tape in a loop around the widest part of her hips.',
    waist: 'Tie a string around your child\'s middle and have her bend from side to side. The string will settle around her natural waist, above her hipbones. Wrap a measuring tape around this part of her waist.'
  },
  cat: [{
    name: 'dresses',
    img: 'girls/girls-dresses.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her chest measurement is the most important factor in finding a dress that fits.',
    rightH2: 'Long Live the Dress',
    rightP: 'Many parents tell us that when their daughter is too tall for her favorite Tea dress, she wears it as a tunic!'
  }, {
    name: 'tops',
    img: 'girls/girls-tops.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her chest measurement is the most important factor in finding a top that fits.',
    rightH2: 'Always in Season',
    rightP: 'Thanks to our easy-to-layer purity tees, she can wear that favorite tank or short sleeve top all year long. (Whew, right?!)'
  }, {
    name: 'bottoms',
    img: 'girls/girls-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her waist measurement is the most important factor in finding pants that fit comfortably—but her hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Easy Does it',
    rightP: 'She\'s got places to go. Like, right now! That\'s why our pants are designed to be extra easy for her to pull on and off in a jiffy.'
  }, {
    name: 'swim',
    img: 'girls/girls-swim.png',
    leftH2: 'Tankinis + Bikinis',
    leftP: 'Since our tops and bottoms are sold separately, you can mix sizes to get the best fit. Measure her chest to decide on a top size; measure her hips for the right bottom.',
    rightH2: 'One-Pieces',
    rightP: 'Chest and hip measurements are what you\'re looking for to find the right size. When in doubt, go with her chest measurement.',
    rightH2Bottom: 'Rash Guards',
    rightPBottom: 'Her chest measurement is the most important factor in finding a rash guard that fits.'
  }, {
    name: 'sweater + outerwear',
    img: 'girls/girls-sweaters.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'The only measurement you need to determine her size is the circumference of her chest.',
    rightH2: 'Layer Up!',
    rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don’t be afraid to add that extra sweater.'
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'shoes + accessories',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
},
/*-----------------------------------------------------------------------------------------*/
{
  dept: 'boy',
  shoes: ['yosi samra', 'vans', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'havaianas', 'cienta'],
  measure: {
    img: 'boys/boys-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of his chest and around his shoulder blades. His arms should be relaxed naturally against his sides.',
    hips: 'Have your child stand with his legs together, not spread apart. Wrap the measuring tape in a loop around the widest part of his hips.',
    waist: 'Tie a string around your child\'s middle and have him bend from side to side. The string will settle around his natural waist, above his hipbones. Wrap a measuring tape around this part of his waist.'
  },
  cat: [{
    name: 'tees + shirts',
    img: 'boys/boys-tops.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His chest measurement is the most important factor in finding a shirt that fits.',
    rightH2: 'Always in Season',
    rightP: 'Thanks to our easy-to-layer purity tees, he can wear that favorite sleeve shirt all year long. (Whew, right?!)'
  }, {
    name: 'bottoms',
    img: 'boys/boys-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His waist measurement is the most important factor in finding pants that fit comfortably—but his hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Easy Does it',
    rightP: 'He\'s got places to go. Like, right now! That\'s why our pants are designed to be extra easy for him to pull on and off in a jiffy.'
  }, {
    name: 'swim',
    img: 'boys/boys-swim.png',
    leftH2: 'Swim Trunks',
    leftP: 'His waist measurement is the most important factor in choosing trunks that fit comfortably—but his hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Rash Guards',
    rightP: 'His chest measurement is the magic number you need to get the right size rash guard. ',
    rightH2Bottom: '',
    rightPBottom: ''
  }, {
    name: 'sweater + outerwear',
    img: 'boys/boys-sweaters.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'The only measurement you need to determine his size is the circumference of his chest.',
    rightH2: 'Layer Up!',
    rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don\'t be afraid to add that extra sweater'
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'shoes + accessories',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
},
/*-----------------------------------------------------------------------------------------*/
{
  dept: 'baby girl',
  shoes: ['yosi samra', 'vans', 'elephantito', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'toke', 'havaianas', 'cienta'],
  measure: {
    img: 'baby-girl/baby-girl-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of her chest and around her shoulder blades. Her arms should be relaxed naturally against her sides. (Good luck! You\'re going to have to be superhero-fast!)',
    hips: 'Have your child stand with her legs together, and wrap the measuring tape in a loop around the widest part of her hips. (If she\'s not standing yet, have her lie down. You might need a partner to keep her distracted—and still—for a minute!)',
    waist: 'Tie a string around your child\'s middle and help her bend from side to side. The string will settle around her natural waist, above her hipbones. Wrap a measuring tape around this part of her waist.'
  },
  cat: [{
    name: 'rompers',
    img: 'baby-girl/baby-girl-rompers.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her height is the most important factor in finding a romper that fits',
    rightH2: 'Diaper Duty',
    rightP: 'We design our rompers to fit over diapers, but you don\'t have to include them when you measure. For her correct hip measurement, be sure to leave the diaper out of the equation!'
  }, {
    name: 'dresses',
    img: 'baby-girl/baby-girl-dresses.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her chest measurement is the most important factor in finding a dress that fits.',
    rightH2: 'Matching Bloomers',
    rightP: 'Some of our dresses come with matching bloomers up to size 24m. Check her waist measurement to see how the bloomers will fit.'
  }, {
    name: 'tops',
    img: 'baby-girl/baby-girl-tops-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her chest measurement is the most important factor in finding a top or bodysuit that fits.',
    rightH2: 'Always in Season',
    rightP: 'Thanks to our easy-to-layer bodysuits, she can wear that adorable tank or short sleeve top all year long. (Whew, right?!)'
  }, {
    name: 'bottoms',
    img: 'baby-girl/baby-girl-tops-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Her waist measurement is the most important factor in finding pants that fit comfortably— but her hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Diaper Duty',
    rightP: 'We design our baby bottoms to fit over diapers, but you don\'t have to include them when you measure. For her correct hip measurement, be sure to leave the diaper out of the equation!'
  }, {
    name: 'swim',
    img: 'baby-girl/baby-girl-swim.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'Chest and hip <span class="desktop">(sans diaper)</span> measurements are what you\'re looking for to find the right size. When in doubt, go with her chest measurement.',
    rightH2: 'Two-Piece Tip',
    rightP: 'Experienced parents tell us they love two-piece suits for quick and easy diaper changes at the beach.',
    rightH2Bottom: '',
    rightPBottom: ''
  }, {
    name: 'sweater + outerwear',
    img: 'baby-girl/baby-girl-sweaters.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'The only measurement you need to determine her size is the circumference of her chest.',
    rightH2: 'Layer Up!',
    rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don\'t be afraid to add that extra sweater.'
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'shoes + accessories',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
},
/*-----------------------------------------------------------------------------------------*/
{
  dept: 'baby boy',
  shoes: ['yosi samra', 'vans', 'old soles', 'superga', 'livie & luca', 'native', 'saltwater sandal', 'umi', 'onitsuka tiger', 'asics', 'asics tiger', 'havaianas', 'cienta'],
  measure: {
    img: 'baby-boy/baby-boy-measuring.png',
    chest: 'Wrap a measuring tape under your child\'s armpits, making sure it passes across the fullest part of his chest and around his shoulder blades. His arms should be relaxed naturally against his sides. (Good luck! You\'re going to have to be superhero-fast!)',
    hips: 'Have your child stand with his legs together, and wrap the measuring tape in a loop around the widest part of his hips. (If he\'s not standing yet, have him lie down. You might need a partner to keep him distracted—and still—for a minute!)',
    waist: 'Tie a string around your child\'s middle and help him bend from side to side. The string will settle around his natural waist, above his hipbones. Wrap a measuring tape around this part of his waist.'
  },
  cat: [{
    name: 'rompers',
    img: 'baby-boy/baby-boy-rompers.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His height is the most important factor in finding a romper that fits',
    rightH2: 'Diaper Duty',
    rightP: 'We design our rompers to fit over diapers, but you don\'t have to include them when you measure. For his correct hip measurement, be sure to leave the diaper out of the equation!'
  }, {
    name: 'tees + shirts',
    img: 'baby-boy/baby-boy-tops-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His chest measurement is the most important factor in finding a top or bodysuit that fits.',
    rightH2: 'Always in Season',
    rightP: 'Thanks to our easy-to-layer bodysuits, he can wear that favorite short sleeve shirt all year long. (Whew, right?!)'
  }, {
    name: 'bottoms',
    img: 'baby-boy/baby-boy-tops-bottoms.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'His waist measurement is the most important factor in finding bottoms that fit comfortably— but his hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Diaper Duty',
    rightP: 'We design our baby bottoms to fit over diapers, but you don\'t have to include them when you measure. For his correct hip measurement, be sure to leave the diaper out of the equation!'
  }, {
    name: 'swim',
    img: 'baby-boy/baby-boy-swim.png',
    leftH2: 'Swim Trunks',
    leftP: 'His waist measurement is the most important factor in choosing trunks that fit comfortably—but his hip measurement can make the difference if you\'re stuck between sizes.',
    rightH2: 'Rash Guard Suits',
    rightP: 'His height is the most important measurement to get the right fit. ',
    rightH2Bottom: 'Rash Guards',
    rightPBottom: 'His chest measurement is the magic number you need to get the right size rash guard. '
  }, {
    name: 'sweater + outerwear',
    img: 'baby-boy/baby-boy-sweaters.png',
    leftH2: 'Stuck Between Sizes?',
    leftP: 'The only measurement you need to determine his size is the circumference of his chest.',
    rightH2: 'Layer Up!',
    rightP: 'We design our outerwear to fit comfortably over all sorts of layers, so don\'t be afraid to add that extra sweater.'
  }, {
    name: 'pajamas',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }, {
    name: 'shoes + accessories',
    img: '',
    leftH2: '',
    leftP: '',
    rightH2: '',
    rightP: ''
  }]
},
/*-----------------------------------------------------------------------------------------*/
{
  dept: 'newborn',
  cat: [{
    name: 'all categories',
    img: 'newborn/newborn-all.png',
    leftH2: 'Newborn Needs',
    leftP: 'Brand new babies are a bit messy! Buy a few extra outfits so you don\'t have to do laundry every day.',
    rightH2: 'Romper Rules',
    rightP: 'Rompers are easy gifts—they keep babies cozy all the way to their tiny toes, plus they\'re easy to change in a snap!'
  }]
}];


},{}],15:[function(require,module,exports){
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


},{"./add-data-dept.js":1,"./change-background-image.js":2,"./change-cat.js":3,"./change-first-row-table.js":4,"./change-measuring-tips-copy.js":5,"./change-order.js":6,"./change-shoe-brand.js":7,"./make-shoe-brands.js":9,"./make-table-header.js":10,"./make-table.js":11,"./make-td.js":12,"./measuring-tips-css.js":13,"./measuring-tips.js":14,"./output-table.js":16,"./set-dept-cat-by-url.js":17,"./set-dept-cat.js":18,"./shoe-brands.js":19,"./tips-css.js":20}],16:[function(require,module,exports){
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


},{"./make-td.js":12}],17:[function(require,module,exports){
"use strict";

module.exports = function (urlpara, elem1, elem2) {
  //function to select the department & category based  url params
  //onload check if parameters in url for department and category
  var urlParam = window.location.href;
  var ul = elem1;
  ul = ul.replace('li', ''); //check if parameters

  if (urlParam.indexOf('?') !== -1) {
    var paramArr = urlParam.split('?'); //split the parameters into an array

    paramArr = paramArr[1].split('&'); //loop through the array to find selectedDept & selectedCat then change the selected values from the dropdown

    $.each(paramArr, function (i, val) {
      var param = val.split('=');

      if (param[0] == urlpara) {
        var dept = param[1]; //if 20% in variable change to ' '

        dept = String(dept.replace(/%20/g, ' ')); //change the value selected from the dropdown
        //<ul>

        $(ul).prepend('<li class="selected">' + dept + '</li>'); //<select>

        $(elem2).val(dept);
      }
    });
  } else {
    //for desktop defaults to prepend <li class="selected">dept/cat</li> to both ul.department & ul.category
    var s = $(elem1 + ':first-of-type').text();
    $(ul).prepend('<li class="selected">' + s + '</li>');
  }
};


},{}],18:[function(require,module,exports){
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


},{}],19:[function(require,module,exports){
"use strict";

module.exports = [{
  brand: 'yosi samra',
  url: 'https://www.yosisamra.com/pages/size-chart'
}, {
  brand: 'vans',
  url: '/static/vans-shoe-size-guide'
}, {
  brand: 'elephantito',
  url: 'https://www.elephantito.com/pages/sizing'
}, {
  brand: 'old soles',
  url: 'https://www.oldsoles.com.au/features/kids/'
}, {
  brand: 'superga',
  url: 'https://www.superga-usa.com/content.jsp?pageName=SizeGuide'
}, {
  brand: 'livie & luca',
  url: 'https://www.livieandluca.com/pages/size-chart'
}, {
  brand: 'native',
  url: 'https://www.nativeshoes.com/'
}, {
  brand: 'saltwater sandal',
  url: 'https://saltwater-sandals.com/sizing-calculator/'
}, {
  brand: 'umi',
  url: 'http://www.umishoes.com/shop/includes/sizeChart.html'
}, {
  brand: 'onitsuka tiger',
  url: 'http://www.onitsukatiger.com/us/en-us/size-guide'
}, {
  brand: 'asics',
  url: 'http://www.asics.com/us/en-us/shoe-size-guide'
}, {
  brand: 'asics tiger',
  url: 'http://www.asicstiger.com/us/en-us/size-guide'
}, {
  brand: 'toke',
  url: 'https://www.tokeshoes.com/index.php/conversion/toke-conversion-chart'
}, {
  brand: 'havaianas',
  url: '/static/havaianas-shoe-size-guide.html'
}, {
  brand: 'cienta',
  url: 'https://cientausa.com/'
}];


},{}],20:[function(require,module,exports){
"use strict";

var deptCat = require('./set-dept-cat.js');

module.exports = function () {
  //function to adjust css for .tips
  var deptVal = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var catVal = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category'); // var deptVal = $('.size-chart-container .department').val();

  if (deptVal == 'baby girl' || deptVal == 'baby boy') {
    //desktop
    if ($(window).width() > 737) {
      //if bottoms
      // if(catVal == 'bottoms'){
      //   $('.size-chart-container').find($('.tips')).css('top','180px');
      // } else {
      //   $('.size-chart-container').find($('.tips')).css('top','148px');
      // }
      $('.size-chart-container').find($('.tips')).css('top', '128px');
      $('.size-chart-container').find($('.tips')).show();
    } //mobile


    if ($(window).width() < 737) {
      if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
        $('.size-chart-container').find($('.tips')).hide();
      } else {
        $('.size-chart-container').find($('.tips')).show(); //change the css positioning

        $('.size-chart-container').find($('.tips')).css('top', '189px');
      }
    }
  } //else if newborn hide .tips
  else if (deptVal == 'newborn') {
      $('.size-chart-container').find($('.tips')).hide();
    } // if category is shoes + accessories  or pajams
    else if (catVal == 'shoes + accessories' || catVal == 'pajamas') {
        $('.size-chart-container').find($('.tips')).hide();
      } // else remove the style attribute on .tips
      else {
          $('.size-chart-container').find($('.tips')).removeAttr('style');
        }
};


},{"./set-dept-cat.js":18}]},{},[8]);
