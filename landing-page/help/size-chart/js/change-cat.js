module.exports = function(sizeChartArr) {
  //function to change the cats dropdown
  //get the value of the .department
  var dept;
  //desktop
  // if ($(window).width() > 737) {
  //   dept = $('.size-chart-container ul.department .selected').text();
  // }
  //mobile
  // else if ($(window).width() < 737) {
  dept = $('.size-chart-container select.department').val();
  // }

  // var deptValD = $('.size-chart-container ul.department .selected').text();
  // var deptValM = $('.size-chart-container select.department').val();

  $.each(sizeChartArr, function(i, val) {
    //get the cats that match the dept
    if (val.dept == dept) {
      //loop through the cats and add to page
      $.each(val.cat, function(j, arr) {
        //<ul>
        // var catD = '<li>' + arr.name + '</li>';
        // $('.size-chart-container ul.category').append(catD);
        //<select>
        var catM = '<option value="' + arr.name + '">' + arr.name + '</option>';
        $('.size-chart-container select.category').append(catM);
      });
    }
  });

};