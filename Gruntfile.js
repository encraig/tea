module.exports = function(grunt){

  	// Default task(s).
  	grunt.registerTask('hello', function(){
      console.log('hello world from Grunt!');
    });

 	grunt.registerTask('makeCss', function(path1, path2){
      var data = grunt.file.read(path1);
      var output = '<style>\n'+data+'\n</style>';
      grunt.file.write(path2, output);
    });

  	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.loadNpmTasks('grunt-contrib-less');
  	grunt.loadNpmTasks('grunt-contrib-concat');
  	grunt.loadNpmTasks('grunt-execute');
  	grunt.loadNpmTasks('grunt-contrib-connect');
  	grunt.loadNpmTasks('grunt-concurrent');
  	grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-copy');

  	var gruntConfig = {
      hp:{date:'170921'},
      cat:{date:'170907'},
      landing:{name:'influencer', date:'170828'},
      date:'170921', 
      promo: {name:'labor-day', date:'170831'},
    };


	// load all external grunt plugins
	var tasks = ['watch','less','concat','uncss', 'cssmin','uglify','execute','connect','concurrent','includes','copy'];

	tasks.forEach(function(fileName){
  		gruntConfig[fileName] = require('./grunt/' + fileName + '.js')(grunt);
	});

 	grunt.initConfig(gruntConfig);

  
};
