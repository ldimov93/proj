module.exports = function (grunt) {
	const sass = require('node-sass');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					livereload: true
				}
			}
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {
					'assets/css/main.css': 'assets/scss/main.scss',
				}
			}
		},
		uglify: {
			options: {
				manage: false,
				preserveComments: 'all' //preserve all comments on JS files
			},
			my_target: {
				files: {
					'assets/js/main.min.js': 
					[
						'assets/js/jquery/jquery.min.js',
						'assets/js/bootstrap/bootstrap.min.js',
						'assets/js/index.js'
					]
				}
			}
		},
		watch: {
			scripts: {
				files: ['*.html', 'assets/scss/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				},
			},
		},
	});

	grunt.registerTask('default', ['sass', 'uglify', 'connect', 'watch']);

};