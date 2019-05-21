var config = require("./../gruntConfig.js");
// console.log(config.landing);
var src = ['local-templates/mobile/header-get.html',
  'local-templates/build/full-page.html', 'local-templates/mobile/footer-get.html'
];

module.exports = {

  options: {
    //sourceMap:true,
  },

  // HOMEPAGE ---------------------------------------------------------------------------
  hpD: {
    src: src,
    dest: 'homepage/' + config.hp.date + '/build/hp-d.html'
  },
  hpM: {
    src: src,
    dest: 'homepage/' + config.hp.date + '/build/hp-m.html'
  },


  // landing page -----------------------------------------------------------------------------
  landingD: {
    src: src,
    dest: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/build/' + config.landing.name + '-d.html'
  },
  landingM: {
    src: src,
    dest: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/build/' + config.landing.name + '-m.html'
  },

};