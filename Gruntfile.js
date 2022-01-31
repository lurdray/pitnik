 module.exports = function(grunt){
	"use strict";
	grunt.initConfig({
		  concat: {
		    dist: {
		      src: [
		      	  'css/bootstrap-grid.css',
				  'css/LineIcons.css',
				  'css/animate.min.css', 
				  'css/owl.carousel.css',
				  'css/jquery.mCustomScrollbar.min.css',
				  'css/lightbox.css'
			      ],
		      dest: 'css/main.min.css',
		    },
			  
		    extras: {
		      src: [
				  'js/jquery.min.js', 
				  'js/jquery.mousewheel.min.js',
				  'js/jquery.mCustomScrollbar.min.js',
				  'js/html5lightbox.js',
				  'js/owl.carousel.min.js',
				  'js/wow.min.js',
				  'js/TimelineMax.js',
				  'js/stickit-header.js'
			  ],
		      dest: 'js/main.min.js',
		    },
		  },

		  cssmin: {
		    target: {
			    files: {
			      'css/main.min.css': 
					[
					  'css/bootstrap-grid.css',
					  'css/LineIcons.css',
					  'css/animate.min.css', 
					  'css/owl.carousel.css',
					  'css/jquery.mCustomScrollbar.min.css',
					  'css/lightbox.css'
					],
			    }
			  }
		  },

		uglify: {
		    my_target: {
		      files: {
		        'js/main.min.js': 
				 [
				  'js/jquery.min.js', 
				  'js/jquery.mousewheel.min.js',
				  'js/jquery.mCustomScrollbar.min.js', 
				  'js/html5lightbox.js',	 
				  'js/owl.carousel.min.js',
				  'js/wow.min.js',
				  'js/TimelineMax.js',
				  'js/stickit-header.js'	 
				 ]
		      },
		    },
		  },
		
		watch: {
		  configFiles: {
		    files: 
			  [
				  'css/animate.min.css', 
				  'css/bootstrap.min.css', 
				  'css/font-awesome.min.css', 
				  'css/nice-select.css', 
		          'css/owl.carousel.css'
			  ],
		    options: {
		      reload: true
		    },
		  },
		},
	  
	});

	//load the plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};