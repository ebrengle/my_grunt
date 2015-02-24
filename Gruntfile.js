'use strict';

module.exports = function(grunt) {

  // Load the plugin that provides the "uglify" task.
  require('load-grunt-tasks')(grunt);


  // Project configuration.
  grunt.initConfig({
    clean: ['public'],
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'app/', src: ['**', '!**/*.jade', '!**/*.scss'], dest: 'public/', filter: 'isFile'}
        ]
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{expand: true, cwd: 'app/', src: ['**/*.jade', '!**/_*.jade'], dest: 'public/', ext: '.html'}]
      }
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'public/css/main.css': 'app/styles/main.scss'
            }
        }
    },
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      other: {
        files: ['app/**', '!app/**/*.jade', '!app/**/*.{sass,scss}'],
        tasks: ['copy']
      },
      jade: {
        files: ['app/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['app/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass']
      },
    },
    wiredep: {
      build: {
        src: ['public/**/*.html']
      }
    },
    autoprefixer: {
      options: {
        // Task-specific options go here.
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      },
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'public/css/main.css',
        dest: 'public/css/main.css'
      },

    },
 });

  // Default task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('build', ['clean', 'copy', 'jade', 'sass', 'wiredep']);
  grunt.registerTask('serve', ['build', 'watch']);
  grunt.registerTask('filter', ['autoprefixer']);
};
