var config = require("./../gruntConfig.js");
// console.log(config.promo.htmlmin);

module.exports = {
  options: {
    removeComments: true,
    collapseWhitespace: true
  },

  hp: {
    files: [{
      expand: true,
      cwd: 'homepage/default/includes/',
      src: '*.html',
      dest: 'homepage/default/toolkit/'
    }]
  },

  landing: {
    files: [{
      expand: true,
      cwd: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/includes/',
      src: '*.html',
      dest: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/toolkit/'
    }]
  },

  zone: {
    files: [{
      expand: true,
      cwd: 'content-zone/' + config.zone.name + '/includes/',
      src: '*.html',
      dest: 'content-zone/' + config.zone.name + '/toolkit/'
    }]
  },

  promos: {
    files: [{
      expand: true,
      cwd: 'promos/' + config.promo.name + '/' + config.promo.date + '/includes/',
      src: '*.html',
      dest: 'promos/' + config.promo.name + '/' + config.promo.date + '/toolkit/'
    }]
  },

};