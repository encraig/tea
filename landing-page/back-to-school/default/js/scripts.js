var baseUrl = '/mas_assets/media/tea_collection/landing-pages/back-to-school/default/2019/0724/v1/';

var pdps = [];

var Pdp = function(img, text, urls) {
  this.img = img;
  this.text = text;
  this.urls = urls;
}

var graphicTee = new Pdp(baseUrl + 'pdp1-d.png', 'shop graphic tees', [{
  url: '/girls-clothing/favorites/tee-shop',
  text: 'shop girl'
}, {
  url: '/boys-clothing/favorites/tee-shop',
  text: 'shop boy'
}, {
  url: '/tween-girls-clothing/favorites/tee-shop',
  text: 'shop tween girl'
}]);

var dresses = new Pdp(baseUrl + 'pdp2-d.png', 'shop dresses & rompers', [{
  url: '/girls-dresses',
  text: 'shop girl'
}, {
  url: '/tween-girls-clothing/category/dresses',
  text: 'shop tween girl'
}]);

var tees = new Pdp(baseUrl + 'pdp3-d.png', 'shop tees & tops', [{
  url: '/girls-graphic-tops',
  text: 'shop girl'
}, {
  url: '/boys-tees-tops',
  text: 'shop boy'
}, {
  url: '/tween-girls-clothing/category/tees-tops',
  text: 'shop tween girl'
}]);

var bottoms = new Pdp(baseUrl + 'pdp4-d.png', 'shop bottoms', [{
  url: '/girls-pants-jeans',
  text: 'shop girl'
}, {
  url: '/boys/pants',
  text: 'shop boy'
}, {
  url: '/tween-girls-clothing/category/bottoms',
  text: 'shop tween girl'
}]);

var essentials = new Pdp(baseUrl + 'pdp5-d.png', 'shop essentials', [{
  url: '/girls-essentials',
  text: 'shop girl'
}, {
  url: '/boys-essentials',
  text: 'shop boy'
}]);

var leggings = new Pdp(baseUrl + 'pdp6-d.png', 'shop leggings', [{
  url: '/girls-leggings',
  text: 'shop girl'
}, {
  url: '/tween-girls-clothing/category/leggings',
  text: 'shop tween girl'
}]);

var jackets = new Pdp(baseUrl + 'pdp7-d.png', 'shop jackets & hoodies', [{
    url: '/girls-outerwear',
    text: 'shop girl'
  },
  {
    url: '/boys-outerwear',
    text: 'shop boy'
  },
  {
    url: '/tween-girls-clothing/category/outerwear',
    text: 'shop tween girl'
  }
]);

var skirts = new Pdp(baseUrl + 'pdp8-d.png', 'shop skirts', [{
  url: '/girls-skirts',
  text: 'shop girl'
}, {
  url: '/tween-girls-clothing/category/bottoms',
  text: 'shop tween girl'
}]);

var accessories = new Pdp(baseUrl + 'pdp10-d.png', 'shop accessories', [{
  url: '/girls-accessories',
  text: 'shop girl'
}, {
  url: '/boys-accessories',
  text: 'shop boy'
}, ]);

pdps.push(graphicTee, dresses, tees, bottoms, essentials, leggings, jackets, skirts, accessories);