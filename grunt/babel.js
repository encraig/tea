var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

module.exports = {

  options: {
    sourceMap: true,
    presets: ['@babel/preset-env']
  },

  zone: {
    files: [{
      expand: true,
      cwd: 'content-zone/' + config.zone.name + '/js/',
      src: '*.js',
      dest: 'content-zone/' + config.zone.name + '/js/babel/'
    }]
  },

  promos: {
    files: [{
      expand: true,
      cwd: 'promos/' + config.promo.name + '/' + config.promo.date + '/js/',
      src: '*.js',
      dest: 'promos/' + config.promo.name + '/' + config.promo.date + '/js/babel/'
    }]
  },

};