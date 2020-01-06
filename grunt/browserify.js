var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

module.exports = {

  hp: {
    files: [{
      expand: true,
      cwd: 'homepage/default/js/babel/',
      src: '*.js',
      dest: 'homepage/default/js/browserify/'
    }]
  },

  promos: {
    files: [{
      expand: true,
      cwd: 'promos/' + config.promo.name + '/' + config.promo.date + '/js/',
      src: '*.js',
      dest: 'promos/' + config.promo.name + '/' + config.promo.date + '/js/browserify/'
    }]
  },

};