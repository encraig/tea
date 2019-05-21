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
    cwd: 'homepage/' + config.hp.date + '/js',
    src: ['*.js'],
    dest: 'homepage/' + config.hp.date + '/js/output/',
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

};