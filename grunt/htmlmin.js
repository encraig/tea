var config = require("./../gruntConfig.js");
console.log(config.promo.htmlmin);

module.exports = {

  // hp: { // Target
  //   options: { // Target options
  //     removeComments: true,
  //     collapseWhitespace: true
  //   },
  //   files: { // Dictionary of files
  //     'homepage/default/htmlmin/content.html': 'homepage/default/toolkit/content.html', // 'destination': 'source'
  //   }
  // },

  zone: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },

    files: [{
      expand: true,
      cwd: 'content-zone/' + config.zone.name + '/includes/',
      src: '*.html',
      dest: 'content-zone/' + config.zone.name + '/toolkit/'
    }]

  },

  promos: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },

    files: [{
      expand: true,
      cwd: 'promos/' + config.promo.name + '/' + config.promo.date + '/includes/',
      src: '*.html',
      dest: 'promos/' + config.promo.name + '/' + config.promo.date + '/toolkit/'
    }]

  },

};