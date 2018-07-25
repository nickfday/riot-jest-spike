module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    run: {
      jest_riot: {
        cmd: 'npm',
        args: ['run', 'test']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-run');

  // Default task(s).
  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['run:jest_riot']);
};
