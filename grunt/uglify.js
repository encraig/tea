module.exports = function(grunt){
	return {
		options: {
        	compress: true,
        	sourceMap: true
      	},

      	navRedesignScripts:{
        	files:{
              'nav-redesign/js/output/nav-base.min.js':'nav-redesign/js/nav-base.js',
          		'nav-redesign/js/output/nav1.min.js':'nav-redesign/js/nav1.js',
              'nav-redesign/js/output/nav2.min.js':'nav-redesign/js/nav2.js',
              'nav-redesign/js/output/nav3.min.js':'nav-redesign/js/nav3.js',
              'nav-redesign/js/output/nav4.min.js':'nav-redesign/js/nav4.js',
              'nav-redesign/js/output/nav5.min.js':'nav-redesign/js/nav5.js',
              'nav-redesign/js/output/nav6.min.js':'nav-redesign/js/nav6.js',
              'nav-redesign/js/output/nav7.min.js':'nav-redesign/js/nav7.js',
              'nav-redesign/js/output/nav8.min.js':'nav-redesign/js/nav8.js',
        	}
      	},
  	}
};