var config = require("./../gruntConfig.js");
var hp = 'homepage/default';
// console.log(config.promo.date);

module.exports = {

  options: {
    //sourceMap:true,
  },

  hp: {
    src: [hp + '/dev/c1.html', hp + '/dev/c2.html', hp + '/dev/c3.html', hp + '/dev/c4.html', hp + '/dev/c5.html', hp + '/dev/c6.html', hp + '/dev/c7.html', hp + '/dev/content.html', hp + '/js/alt.js', hp + '/js/c1.js', hp + '/js/inview.js', hp + '/js/sliders.js', hp + '/js/tracking.js', hp + '/js/urls.js'],
    css: [hp + '/css/c1.css', hp + '/css/c2.css', hp + '/css/c3.css', hp + '/css/c4.css', hp + '/css/c5.css', hp + '/css/c6.css', hp + '/css/c7.css', hp + '/css/classes.css', hp + '/css/hp.css', hp + '/css/bxslider.css', hp + '/css/var.css'],
    dest: hp + '/css/purify/styles.css'
  },

  landing: {
    src: ['landing-page/' + config.landing.name + '/' + config.landing.date + '/dev/content.html', 'landing-page/' + config.landing.name + '/' + config.landing.date + '/js/babel/scripts.js'],
    css: ['landing-page/' + config.landing.name + '/' + config.landing.date + '/css/styles.css'],
    dest: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/css/purify/styles.css'
  },

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