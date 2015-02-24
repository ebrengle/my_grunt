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
      jade: {
        files: ['app/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['app/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass']
      },
    },


  });

  // Default task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('build', ['clean', 'copy', 'jade', 'sass']);
  grunt.registerTask('serve', ['build', 'watch']);
};
