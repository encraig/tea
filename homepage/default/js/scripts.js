const addAlt = require('./alt.js');

addAlt('.hp .c1 img', '2 girls');
addAlt('.hp .c3 .first img', 'girl');
addAlt('.hp .c3 .second img', '2 girls');
addAlt('.hp .c3 .third img', 'baby');
addAlt('.hp .c4 .first img', '2 girls');
addAlt('.hp .c4 .second img', 'boy');
addAlt('.hp .c5 img', 'girls and boy in swimwear');
addAlt('.hp .c6 .first img', 'boy and girl');
addAlt('.hp .c6 .second img', 'tea gives back 10% of profits to ensure a better world for kids everywhere');
addAlt('.hp .c6 .third img', '2 girls');

const inview = require('./inview.js');

inview('.hp .c1, .hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6');

const addTracking = require('./tracking.js');

for (var i = 1; i < 6; i++) {
  addTracking('.hp .c' + i + ' a', 'c' + i);
}