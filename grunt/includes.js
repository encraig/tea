var config = require("./../gruntConfig.js");
// console.log(config.landing);

module.exports = {

  options: {
    flatten: true
  },

  // BUILD
  build: {

    files: [
      //build toolkit
      {
        cwd: 'local-templates/',
        src: ['*.html'],
        dest: 'local-templates/build/',
      },
    ],

  },

  // MEGA MENU
  mega: {

    files: [
      //toolkit
      {
        cwd: 'mega-menu/dev/',
        src: ['*.html'],
        dest: 'mega-menu/toolkit/',
      },
    ],

  },

  // GLOBAL
  global: {

    files: [
      //global toolkit
      {
        cwd: 'global/' + config.global.name + '/html/',
        src: ['*.html'],
        dest: 'global/' + config.global.name + '/toolkit/',
      },
    ],

  },


  // CONTENT ZONE
  zone: {

    files: [
      //content zone toolkit
      {
        cwd: 'content-zone/' + config.zone.name + '/dev',
        src: ['*.html'],
        dest: 'content-zone/' + config.zone.name + '/toolkit/',
      },
    ],

  },

  // HOMEPAGE
  hp: {

    files: [
      //home toolkit
      {
        cwd: 'homepage/' + config.hp.date + '/dev',
        src: ['*.html'],
        dest: 'homepage/' + config.hp.date + '/toolkit/',
      },
    ],

  },

  // CATEGORIES
  categories: {

    files: [
      //categories toolkit
      {
        cwd: 'category-pages/' + config.cat.date + '/dev',
        src: ['*.html'],
        dest: 'category-pages/' + config.cat.date + '/toolkit/'
      },
    ],

  },

  // LANDING PAGES
  landing: {

    files: [
      // landing pages toolkit
      {
        cwd: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/dev',
        src: ['*.html'],
        dest: 'landing-page/' + config.landing.name + '/' + config.landing.date + '/toolkit/'
      },
    ],

  },

  // PROMOS
  promos: {

    files: [
      // promo toolkit
      {
        cwd: 'promos/' + config.promo.name + '/' + config.promo.date + '/dev',
        src: ['*.html'],
        dest: 'promos/' + config.promo.name + '/' + config.promo.date + '/includes/',
      },
    ]
  },

};