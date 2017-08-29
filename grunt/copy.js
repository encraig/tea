module.exports = function(grunt){

	return {
		
		// HP  ---------------------------------------------------------------------------
		hpCopy: {
		
    		files: [

      			//copy the styles.css
      			{expand: true, cwd: 'homepage/170907/css', src: ['styles.css'], dest: 'homepage/170907/include/'},
    		],
  		},

        // CATEGORIES  ---------------------------------------------------------------------------
        categoriesCopy: {
        
            files: [

                //copy the .css files
                {expand: true, cwd: 'category-pages/170907/css', src: ['*.css'], dest: 'category-pages/170907/include/'},
            ],
        },


        // PROMOS  ---------------------------------------------------------------------------
        promosCopy: {
            options: {
                process:function(content, srcpath){
                    grunt.log.write(srcpath);
                    if(srcpath == 'promos/labor-day/170831/dev/content.html'){
                        return 'include "d-header-hp.html" \n' + content + '\n include "d-footer-hp.html"';
                    } else {
                        return content;
                    }   
                }
            },
        
            files: [
                //copy the local-template desktop for local build
                {
                    expand: true, 
                    cwd:'local-templates/desktop',
                    src: ['**'], 
                    dest: 'promos/labor-day/170831/include/',
                },

                //copy the local-template mobile for local build
                {
                    expand: true, 
                    cwd:'local-templates/mobile',
                    src: ['**'], 
                    dest: 'promos/labor-day/170831/include/',
                },

                //copy the dev file and add includes for build
                {
                    expand: true, 
                    cwd: 'promos/labor-day/170831/dev', 
                    src: ['content.html'], 
                    dest: 'promos/labor-day/170831/dev/content-build-d', 
                },

                //copy the styles.css
                {expand: true, cwd: 'promos/labor-day/170831/css', src: ['styles.css'], dest: 'promos/labor-day/170831/include/'},
            ],
        },


	}
};