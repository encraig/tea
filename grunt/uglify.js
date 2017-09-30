module.exports = function(grunt){
	return {
		options: {
        	compress: true,
        	sourceMap: true
      	},

      	navRedesignScripts:{
        	files:{  
            'nav-redesign/<%= nav.folder %>/js/output/nav-base.min.js':'nav-redesign/<%= nav.folder %>/js/nav-base.js',
            'nav-redesign/<%= nav.folder %>/js/output/<%= nav.name %>.min.js':'nav-redesign/<%= nav.folder %>/js/<%= nav.name %>.js',
        	}
      	},
  	}
};