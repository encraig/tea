var deptCat = require('./set-dept-cat.js');
const brandChange = require('./change-shoe-brand.js');
const sizeChartArr = require('./measuring-tips.js');
const shoeBrands = require('./shoe-brands.js');

module.exports = function() {
  //function to make the brand drop down for shoes or sweaters

  //remove .brands
  $('.brands, .brands-dropdown').remove();

  var dept = deptCat('.size-chart-container ul.department .selected', '.size-chart-container select.department');
  var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

  //only execute if sweaters or shoes
  if (cat == 'sweater + outerwear' || cat == 'shoes + accessories') {
    //make the element to add to the page
    // var elem = '<div class="brands"></div>';
    var elem1 = '<div class="brands"></div>';
    var elem2 = '<div class="brands-dropdown"></div>';
    var h2;
    var text = '<p>Please select a brand from the menu below to view the size chart. Size chart will open in a new window.</p>'
    var select = $('<select class="brand" onchange="window.open(this.value)"><option>Please select a brand</option></select>');
    var ul = $('<ul class="brand desktop"><li>Please select a brand</li></ul>');
    var ol = $('<ol class="mobile"></ol>');

    //if shoes + accessories
    if (cat == 'shoes + accessories') {
      h2 = '<h2>' + dept + ' shoes size chart</h2>';

      //add the <option> and <li>
      //loop through the .sizeChartArr
      $.each(sizeChartArr, function(i, val) {
        //find the matched dept
        if (dept == val.dept) {
          //loop through dept shoes
          $.each(val.shoes, function(j, shoe) {
            //loop through the shoeBrands
            $.each(shoeBrands, function(k, brand) {
              //if match output
              if (shoe == brand.brand) {
                //<ul>
                var li = '<li data-url="' + brand.url + '">' + shoe + '</li>';
                //<ol>
                var li2 = '<li><a href="' + brand.url + '" target="_blank">' + shoe + '</a></li>';
                //<select>
                var option = '<option value="' + brand.url + '">' + shoe + '</option>';

                // $(ul).append(li);
                // $(ol).append(li2);
                $(select).append(option);
              }
            });
          });
        }
      });
    }

    //else if sweaters + outerwear
    else if (cat == 'sweater + outerwear') {
      h2 = '<h2>' + dept + ' outerwear size chart (other brands)</h2>';
      //<ul>
      // $(ul).append('<li data-url="https://www.patagonia.com/size-boys-girls.html">patagonia</li>');

      //<ol>
      // $(ol).append('<li><a href="https://www.patagonia.com/size-boys-girls.html" target="_blank">patagonia</a></li>');

      //<select>
      $(select).append('<option value="https://www.patagonia.com/size-boys-girls.html">patagonia</option>');
    }

    // console.log(h2, text, select);

    //append the elements into .brands

    var brandsContainer = $(elem1).append(h2, text);

    //because of safari not allowing window.open()
    //if mobile
    // if ($(window).width() < 737) {
    //   //if safari
    //   if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    //     var brandsDropdown = $(elem2).append(ol, ul);
    //   }
    //   //not safari
    //   else {
    //     var brandsDropdown = $(elem2).append(select, ul);
    //   }
    // }
    // //not mobile
    // else {
    // var brandsDropdown = $(elem2).append(select, ul);
    var brandsDropdown = $(elem2).append(select);
    // }


    //add to page
    $('.size-chart-table').append(brandsContainer);
    $('.size-chart-table').append(brandsDropdown);

    //because of onload append shoe size chart to .size-chart-table
    setTimeout(function() {
      $('.size-chart-table').append($('.brands'));
      $('.size-chart-table').append($('.brands-dropdown'));
    }, 1500);

    //on .brand change
    brandChange();

  }

};