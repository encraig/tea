var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

  options: {
    compress: true,
    // sourceMap: true
  },

  hp: {
    //dynamic files
    expand: true,
    cwd: 'homepage/default/js/',
    src: ['*.js'],
    dest: 'homepage/default/js/jsmin/',
    ext: '.min.js',
  },

  global: {
    //dynamic files
    expand: true,
    cwd: 'global/' + config.global.name + '/js',
    src: ['*.js'],
    dest: 'global/' + config.global.name + '/js/output/',
    ext: '.min.js',
  },

  landing: {
    //dynamic files
    expand: true,
    cwd: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/js',
    src: ['*.js'],
    dest: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/js/output/',
    ext: '.min.js',
  },

  zone: {
    //dynamic files
    expand: true,
    cwd: 'content-zone/' + config.zone.name + '/js/babel/',
    src: ['*.js'],
    dest: 'content-zone/' + config.zone.name + '/js/jsmin/',
    ext: '.min.js',
  },

  promos: {
    //dynamic files
    expand: true,
    cwd: 'promos/' + config.promo.name + '/' + config.promo.date + '/js/babel/',
    src: ['*.js'],
    dest: 'promos/' + config.promo.name + '/' + config.promo.date + '/js/jsmin/',
    ext: '.min.js',
  },

};