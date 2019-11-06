var config = require("./../gruntConfig.js");
// console.log(config.promo.date);

module.exports = {

  options: {
    //sourceMap:true,
  },

  // hp: {
  //   src: ['homepage/default/dev/c1.html', 'homepage/default/dev/c2.html', 'homepage/default/dev/c3.html', 'homepage/default/dev/c4.html', 'homepage/default/dev/c5.html', 'homepage/default/dev/c6.html', 'homepage/default/dev/c7.html', 'homepage/default/dev/c8.html'],
  //   css: ['homepage/default/css/c1.css', 'homepage/default/css/c2.css', 'homepage/default/css/c3.css', 'homepage/default/css/c4.css', 'homepage/default/css/c5.css', 'homepage/default/css/c6.css', 'homepage/default/css/c7.css', 'homepage/default/css/c8.css', 'homepage/default/css/classes.css', 'homepage/default/css/hp.css'],
  //   dest: 'homepage/default/css/purify/styles.css'
  // },

  zone: {
    src: ['content-zone/' + config.zone.name + '/dev/content.html', 'content-zone/' + config.zone.name + '/js/babel/scripts.js'],
    css: ['content-zone/' + config.zone.name + '/css/styles.css'],
    dest: 'content-zone/' + config.zone.name + '/css/purify/styles.css'
  },

  promos: {
    src: ['promos/' + config.promo.name + '/' + config.promo.date + '/dev/content.html', 'promos/' + config.promo.name + '/' + config.promo.date + '/js/babel/scripts.js'],
    css: ['promos/' + config.promo.name + '/' + config.promo.date + '/css/styles.css'],
    dest: 'promos/' + config.promo.name + '/' + config.promo.date + '/css/purify/styles.css'
  },

};