var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

  options: {
    livereload: true
  },

  // MEGA MENU
  mega: {
    files: ['mega-menu/css/*.less', 'mega-menu/dev/*.html'],
    tasks: ['less:mega', 'includes:mega'],
  },

  // GLOBAL
  global: {
    files: ['global/' + config.global.name + '/css/*.less', 'global/' + config.global.name + '/js/*.js', 'global/' + config.global.name + '/html/*.html'],
    tasks: ['less:global', 'uglify:global', 'includes:global'],
  },

  // BUILD
  build: {
    files: ['local-templates/*.html'],
    tasks: ['includes:build'],
  },

  // CONTENT ZONE
  zone: {
    files: ['content-zone/' + config.zone.name + '/css/*.less', 'content-zone/' + config.zone.name + '/dev/*.html', 'content-zone/' + config.zone.name + '/js/*.js'],
    tasks: ['less:zone', 'purifycss:zone', 'cssmin:zone', 'babel:zone', 'uglify:zone', 'includes:zone', 'htmlmin:zone', ],
  },

  // HOMEPAGE
  hp: {
    files: ['homepage/' + config.hp.date + '/css/*.less', 'homepage/' + config.hp.date + '/dev/*.html', 'homepage/' + config.hp.date + '/js/*.js'],
    tasks: ['less:hp', 'uglify:hp', 'includes:hp', 'includes:build', 'concat:hpD', 'concat:hpM'],
  },

  // CATEGORIES
  categories: {
    files: ['category-pages/' + config.cat.date + '/css/*.less', 'category-pages/' + config.cat.date + '/dev/*.html'],
    tasks: ['less:categories', 'includes:categories'],
  },

  // LANDING PAGES
  landing: {
    files: ['landing-page/' + config.landing.name + '/' + config.landing.date + '/css/*.less', 'landing-page/' + config.landing.name + '/' + config.landing.date + '/dev/*.html', 'landing-page/' + config.landing.name + '/' + config.landing.date + '/js/*.js'],
    tasks: ['less:landing', 'uglify:landing', 'includes:landing', 'includes:build', 'concat:landingD', 'concat:landingM'],
  },

  // PROMOS
  promos: {
    files: ['promos/' + config.promo.name + '/' + config.promo.date + '/css/*.less', 'promos/' + config.promo.name + '/' + config.promo.date + '/dev/*.html'],
    tasks: ['less:promos', 'purifycss:promos', 'cssmin:promos', 'babel:promos', 'uglify:promos', 'includes:promos', 'htmlmin:promos'],
  },

};