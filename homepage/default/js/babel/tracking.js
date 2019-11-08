"use strict";

var addTracking = function addTracking(elem, id) {
  var a = $(elem);
  $.each(a, function (j, val) {
    $(val).addClass('hp-url').attr({
      'data-page': 'home page',
      'id': id
    });
  });
};

for (var i = 1; i < 9; i++) {
  addTracking('.hp .c' + i + ' a', 'c' + i);
}
//# sourceMappingURL=tracking.js.map
