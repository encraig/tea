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

        // LANDING PAGES  ---------------------------------------------------------------------------
        landingPagesCopy: {
        
            files: [
                // COPY ABOUT CSS ---------------------------------------------------------------------------
                {expand: true, cwd: 'landing-page/about/css', src: ['*.css'], dest: 'landing-page/about/include/'},
                // COPY BABY SWEEPS CSS ---------------------------------------------------------------------------
                {expand: true, cwd: 'landing-page/baby-sweeps/css', src: ['*.css'], dest: 'landing-page/baby-sweeps/include/'},
                // COPY BACK TO SCHOOL SWEEPS CSS ---------------------------------------------------------------------------
                {expand: true, cwd: 'landing-page/back-to-school-sweeps/css', src: ['*.css'], dest: 'landing-page/back-to-school-sweeps/include/'},
                // COPY CAREERS CSS ---------------------------------------------------------------------------
                {expand: true, cwd: 'landing-page/careers/css', src: ['*.css'], dest: 'landing-page/careers/include/'},
                // COPY INFLUENCER CSS ---------------------------------------------------------------------------
                {expand: true, cwd: 'landing-page/influencer/170828/css', src: ['*.css'], dest: 'landing-page/influencer/170828/include/'},
                // COPY INSPIRATION CSS ---------------------------------------------------------------------------
                {expand: true, cwd: 'landing-page/inspiration/scotland/css', src: ['*.css'], dest: 'landing-page/inspiration/scotland/include/'},
                // COPY LITTLE CITIZEN CSS ---------------------------------------------------------------------------
                {expand: true, cwd: 'landing-page/little-citizen/170723/css', src: ['*.css'], dest: 'landing-page/little-citizen/170723/include/'},
            ],
        },


        // PROMOS  ---------------------------------------------------------------------------
        promosCopy: {

            //CODE EXAMPLE OF COPY WITH MODIFICAITONS ADDED
            // options: {
            //     process:function(content, srcpath){
            //         //log the content or srcPath
            //         grunt.log.write(srcpath);
            //         
            //         //if srcpath
            //         if(srcpath == 'promos/labor-day/170831/dev/content.html'){
            //             return 'include "d-header-hp.html" \n' + content + '\n include "d-footer-hp.html"';
            //         } else {
            //             return content;
            //         }   
            //     }
            // },
        
            files: [

                //COPY LABOR DAY CSS
                {expand: true, cwd: 'promos/labor-day/170831/css', src: ['*.css'], dest: 'promos/labor-day/170831/include/'},
                //COPY INFLUENCER CSS
                {expand: true, cwd: 'promos/influencer/170828/css', src: ['*.css'], dest: 'promos/influencer/170828/include/'},
            ],
        },


	}
};