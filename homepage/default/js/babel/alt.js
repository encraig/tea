"use strict";

var addAlt = function addAlt(elem, alt) {
  var img = $(elem);
  $.each(img, function (i, val) {
    $(val).attr('alt', alt);
  });
};

addAlt('.hp .c1 .slide1 img', '2 girls');
addAlt('.hp .c2 img', 'tea gives back');
addAlt('.hp .c3 .first img', 'girl');
addAlt('.hp .c3 .second img', 'baby');
addAlt('.hp .c4 .first img', '2 girls');
addAlt('.hp .c4 .second img', 'baby');
addAlt('.hp .c7 img', 'Giving Tuesday: Giving Back for Good');
//# sourceMappingURL=alt.js.map
