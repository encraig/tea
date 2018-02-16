module.exports = function(grunt){
	return {
		options: {
        	compress: true,
        	sourceMap: true
      	},

      	navRedesignScripts:{
        	// files:{  
         //    'nav-redesign/<%= nav.folder %>/js/output/nav-base.min.js':'nav-redesign/<%= nav.folder %>/js/nav-base.js',
         //    'nav-redesign/<%= nav.folder %>/js/output/<%= nav.name %>.min.js':'nav-redesign/<%= nav.folder %>/js/<%= nav.name %>.js',
        	// }

          //dynamic files
          expand:true,
          cwd:'nav-redesign/<%= nav.folder %>/js',
          src:['*.js'],
          dest:'nav-redesign/<%= nav.folder %>/js/output/',
          ext:'.min.js',
      	},

        landingPagesScripts: {
          //dynamic files
          expand:true,
          cwd:'landing-page/<%= landing.name %>/<%= landing.date %>/js',
          src:['*.js'],
          dest:'landing-page/<%= landing.name %>/<%= landing.date %>/js/output/',
          ext:'.min.js',
        }
  	}
};