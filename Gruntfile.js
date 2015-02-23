'use strict';

module.exports = function(grunt) {

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Project configuration.
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'app/', src: ['**'], dest: 'public/', filter: 'isFile'}
        ]
      }
    },
    jade: {
      compile: {
        files: [{expand: true, cwd: 'app/', src: ['**/*.jade'], dest: 'public/', ext: '.html'}]
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', []);

};
