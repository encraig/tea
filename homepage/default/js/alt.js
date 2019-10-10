var addAlt = function(elem, alt) {
  var img = $(elem);
  $.each(img, function(i, val) {
    $(val).attr('alt', alt);
  });
};

addAlt('.hp .c1 .slide0 img', 'mix & match flash sale $15 tops & leggings + $25 bottoms');
addAlt('.hp .c1 .slide1 img', 'boy and girl');
addAlt('.hp .c1 .slide2 img', 'dresses');
addAlt('.hp .c1 .slide3 img', 'two girls');
addAlt('.hp .c1 .slide4 img', 'kids in pajamas');
addAlt('.hp .c2 img', 'tea gives back');
addAlt('.hp .c3 img', 'boy');
addAlt('.hp .c4 .first img', 'new sale styles');
addAlt('.hp .c4 .second img', 'girl');
addAlt('.hp .c5 img', 'baby');
addAlt('.hp .c6 .second img', 'girls at the market');
addAlt('.hp .c7 img', 'little sisters fund');