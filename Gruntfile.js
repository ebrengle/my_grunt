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
          {expand: true, cwd: 'app/', src: ['**', '!**/*.jade'], dest: 'public/', filter: 'isFile'}
        ]
      }
    },
    jade: {
      compile: {
        files: [{expand: true, cwd: 'app/', src: ['**/*.jade', '!**/_*.jade'], dest: 'public/', ext: '.html'}]
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('build', ['clean', 'copy', 'jade']);
};
