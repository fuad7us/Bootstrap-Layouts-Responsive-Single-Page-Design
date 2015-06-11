module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
	  uglify: {
	    my_target: {
	      files: {
	        'js/myscript.js': ['js/*.js']
	      } // files
	    } // my_target
	  }, // uglify
	  compass: {
	  	dev: {
	  		options: {
	  			config: 'config.rb'
	  		}
	  	} //dev
	  }, //compass
	  watch: {
	  	options: {livereload: true},
	  	scripts: {
	  		files: ['js/*.js']
	  		// tasks: ['uglify']
	  	}, //scripts
	  	css: {
	  		files: ['css/*.css'],
	  		tasks: ['compass:dev']
	  	}, //sass
	  	html: {
	  		files: ['*.html']
	  	} //html	  	
	  } //watch
	}) // initConfig
	grunt.registerTask('default','watch');
} // exports