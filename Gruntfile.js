'use strict';

module.exports = function(grunt) {

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Project configuration.
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'app/', src: ['**'], dest: 'public/', filter: 'isFile'}
        ]
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', []);

};
