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
//# sourceMappingURL=set-dept-cat-by-url.js.map
