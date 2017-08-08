module.exports = function(grunt){
	return {
		tea: {
        	options: {
          		keepalive: true,
          		port: 8080,
          		livereload: true
        	}  
      	}
  	}
};