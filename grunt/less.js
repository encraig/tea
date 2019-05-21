var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

  options: {
    // sourceMap: true,
    compress: true,
  },

  // MEGA MENU CSS ---------------------------------------------------------------------------
  mega: {
    expand: true,
    cwd: 'mega-menu/css/',
    src: '*.less',
    dest: 'mega-menu/css/',
    ext: '.css',
  },

  // GLOBAL CSS ---------------------------------------------------------------------------
  global: {
    expand: true,
    cwd: 'global/' + config.global.name + '/css/',
    src: '*.less',
    dest: 'global/' + config.global.name + '/css/',
    ext: '.css',
  },

  zone: {
    expand: true,
    cwd: 'content-zone/' + config.zone.name + '/css/',
    src: '*.less',
    dest: 'content-zone/' + config.zone.name + '/css/',
    ext: '.css',
  },

  // CONTENT CELL CSS ---------------------------------------------------------------------------
  cell: {
    expand: true,
    cwd: 'content-cell/' + config.cell.name + '/' + config.cell.date + '/css/',
    src: '*.less',
    dest: 'content-cell/' + config.cell.name + '/' + config.cell.date + '/css/',
    ext: '.css',
  },

  // HOMEPAGE CSS ---------------------------------------------------------------------------
  hp: {
    expand: true,
    cwd: 'homepage/' + config.hp.date + '/css/',
    src: '*.less',
    dest: 'homepage/' + config.hp.date + '/css/',
    ext: '.css',

  },

  // CATEGORIES CSS ---------------------------------------------------------------------------
  categories: {
    expand: true,
    cwd: 'category-pages/' + config.cat.date + '/css/',
    src: '*.less',
    dest: 'category-pages/' + config.cat.date + '/css/',
    ext: '.css',
  },

  // LANDING PAGES CSS ---------------------------------------------------------------------------
  landing: {
    expand: true,
    cwd: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/css/',
    src: '*.less',
    dest: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/css/',
    ext: '.css',
  },

  // PROMOS CSS ---------------------------------------------------------------------------
  promos: {
    expand: true,
    cwd: 'promos/' + config.promo.name + '/' + config.promo.date + '/css/',
    src: ['*.less'],
    dest: 'promos/' + config.promo.name + '/' + config.promo.date + '/css/',
    ext: '.css',
  },

};