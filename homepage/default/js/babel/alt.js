"use strict";

var addAlt = function addAlt(elem, alt) {
  var img = $(elem);
  $.each(img, function (i, val) {
    $(val).attr('alt', alt);
  });
};

addAlt('.hp .c1 .slide1 img', 'babies');
addAlt('.hp .c1 .slide3 img', 'girl with presents');
addAlt('.hp .c1 .slide2 img', 'boy & girl in PJs'); // addAlt('.hp .c1 .slide3 img', 'girl & boy');
// addAlt('.hp .c1 .slide4 img', 'kids in pajamas');

addAlt('.hp .c2 img', 'tea gives back');
addAlt('.hp .c3 img', 'girl & boy');
addAlt('.hp .c4 .second img', '2 girls');
addAlt('.hp .c5 .first img', 'baby');
addAlt('.hp .c5 .second img', 'baby clothes');
addAlt('.hp .c6 .second img', '2 girls');
addAlt('.hp .c7 img', 'little sisters fund');
//# sourceMappingURL=alt.js.map
