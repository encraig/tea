var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

module.exports = {

  options: {
    //sourceMap:true,
  },

  hp: {
    files: [{
      expand: true,
      cwd: 'homepage/default/css/',
      src: '*.css',
      dest: 'homepage/default/css/cssmin/',
      ext: '.min.css'
    }]
  },

  landing: {
    files: [{
      expand: true,
      cwd: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/css/purify/',
      src: '*.css',
      dest: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/css/cssmin/'
    }]
  },

  zone: {
    files: [{
      expand: true,
      cwd: 'content-zone/' + config.zone.name + '/css/purify/',
      src: '*.css',
      dest: 'content-zone/' + config.zone.name + '/css/cssmin/'
    }]
  },

  promos: {
    files: [{
      expand: true,
      cwd: 'promos/' + config.promo.name + '/' + config.promo.date + '/css/purify/',
      src: '*.css',
      dest: 'promos/' + config.promo.name + '/' + config.promo.date + '/css/cssmin/'
    }]
  }

};