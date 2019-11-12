"use strict";

var addUrls = function addUrls(arr) {
  $.each(arr, function (i, val) {
    $(val.elem).attr('href', val.url).html(val.text);
  });
};
//# sourceMappingURL=urls.js.map
