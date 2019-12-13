"use strict";

var addUrls = function addUrls(arr) {
  $.each(arr, function (i, val) {
    $(val.elem).attr('href', val.url).html(val.text);
  });
};
//# sourceMappingURL=urls.js.map

"use strict";

var c1 = [// {
//   elem: '.slide0 .cta1',
//   url: '/girls-clothing',
//   text: '<span>shop</span> girl'
// },
// {
//   elem: '.slide0 .cta2',
//   url: '/boys-clothing',
//   text: '<span>shop</span> boy'
// },
// {
//   elem: '.slide0 .cta3',
//   url: '/tween-girls-clothing',
//   text: '<span>shop</span> tween'
// },
// {
//   elem: '.slide0 .cta4',
//   url: '/baby-girl-clothes',
//   text: '<span>shop</span> baby girl'
// },
// {
//   elem: '.slide0 .cta5',
//   url: '/baby-boy-clothes',
//   text: '<span>shop</span> baby boy'
// },
// {
//   elem: '.slide0 .cta6',
//   url: '/clothing-sale',
//   text: '<span>shop</span> sale'
// },
{
  elem: '.slide1 .cta1',
  url: '/girls-clothing/new-arrivals',
  text: 'girl'
}, {
  elem: '.slide1 .cta2',
  url: '/boys-clothing/new-arrivals',
  text: 'boy'
}, {
  elem: '.slide1 .cta3',
  url: '/tween-girls-clothing/favorites/new-arrivals',
  text: 'tween'
}, {
  elem: '.slide1 .cta4',
  url: '/baby-girl-clothes/new-arrivals',
  text: 'baby girl'
}, {
  elem: '.slide1 .cta5',
  url: '/baby-boy-clothes/new-arrivals',
  text: 'baby boy'
} // {
//   elem: '.slide2 .cta1',
//   url: '/pajamas',
//   text: 'shop pjs'
// },
// {
//   elem: '.slide3 .cta1',
//   url: '/girls-clothing/new-arrivals',
//   text: '<span>shop</span> girl'
// },
// {
//   elem: '.slide3 .cta2',
//   url: '/boys-clothing/new-arrivals',
//   text: '<span>shop</span> boy'
// },
// {
//   elem: '.slide3 .cta3',
//   url: '/tween-girls-clothing/favorites/new-arrivals',
//   text: '<span>shop</span> tween'
// },
// {
//   elem: '.slide3 .cta4',
//   url: '/baby-girl-clothes/new-arrivals',
//   text: '<span>shop</span> baby girl'
// },
// {
//   elem: '.slide3 .cta5',
//   url: '/baby-boy-clothes/new-arrivals',
//   text: '<span>shop</span> baby boy'
// },
// {
//   elem: '.slide3 .cta6',
//   url: '/newborn-clothes/favorites/new-arrivals',
//   text: '<span>shop</span> newborn'
// },
// {
//   elem: '.slide3 .cta1',
//   url: '/tee-shop',
//   text: 'shop graphic tees'
// },
];
addUrls(c1);
//# sourceMappingURL=c1.js.map

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

"use strict";

$('.hp .c2, .hp .c3, .hp .c4, .hp .c5, .hp .c6, .hp .c7, .hp .c8').on('inview', function (event, isInView) {
  if (isInView) {
    // element is now visible in the viewport
    // console.log('in view');
    var imgs = $(this).find('img');
    var width = $(window).width(); // console.log(imgs);
    // console.log(width);

    $.each(imgs, function (i, val) {
      var src = $(val).attr('data-src'); // console.log(src);

      if (src) {
        $(val).attr('src', src);
      }

      $(val).removeAttr('data-src');
    });
  }
});
$('.hp .c1').on('inview', function (event, isInView) {
  if (isInView) {
    // element is now visible in the viewport
    // console.log('in view');
    var imgs = $(this).find('img');
    var width = $(window).width(); // console.log(imgs);
    // console.log(width);

    $.each(imgs, function (i, val) {
      var theClass = $(val).attr('class');
      var src = $(val).attr('data-src'); // console.log(src);

      $(val).attr('src', src);
    });
  }
});
//# sourceMappingURL=inview.js.map

// $('.hp .c1').bxSlider({
//   infiniteLoop: true,
//   auto: true
// });
"use strict";
//# sourceMappingURL=sliders.js.map

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
