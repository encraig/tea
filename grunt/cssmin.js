var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

module.exports = {

  options: {
    //sourceMap:true,
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