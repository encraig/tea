var deptCat = require('./set-dept-cat.js');

module.exports = function(sizeChartArr) {
  //function to change the order of the tables for shoes + accessories

  var cat = deptCat('.size-chart-container ul.category .selected', '.size-chart-container select.category');

  //if shoes + accessories re-order the tables
  if (cat == 'shoes + accessories') {

    //hide the .size-chart-table children
    $('.size-chart-table').children().hide();

    //add the loading
    $('.size-chart-table').prepend('<div style="text-align:center; font-size:15px; font-family:brown-pro-bold !important" class="tables-loading">LOADING...</div>');

    setTimeout(function() {
      var tables = $('.size-chart-table table');

      //loop through and re-order
      $.each(tables, function(i, val) {
        var str = $(val).find('.size-chart-header th').text();
        // console.log(str);
        //if hat make 1st
        if (str.indexOf('hat') !== -1) {
          $('.size-chart-table').prepend($(val));
        }

        //if headband make 2nd
        if (str.indexOf('headband') !== -1) {
          $('.size-chart-table table:nth-of-type(2)').after($(val));
        }

        //if socks make last
        if (str.indexOf('socks') !== -1) {
          $('.size-chart-table').append($(val));
        }

      });

      //move the 2T/2 message to the bottom
      $('.size-chart-table').append($('.align-center'));

      //remove the loading
      $('.tables-loading').remove();

      //show the .size-chart-table table but not .the-table
      var children = $('.size-chart-table').children();
      $.each(children, function(i, val) {
        //don't show if has class .the-table
        if (!$(val).hasClass('the-table')) {
          $(val).show();
        }
      });

    }, 1100);

  }

};