module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
      },
      dist: {
        files: {
          'public/js/<%= pkg.name %>.min.js': ['<%= concat.jsdist.dest %>']
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'public/css/<%= pkg.name %>.min.css': ['<%= concat.cssdist.dest %>']
        }
      }
    },
    concat: {
      jsdist: {
        src: ['public/js/*.js'],
        dest: 'public/js/<%= pkg.name %>.js'
      },
      cssdist: {
        src: ['public/css/reset.css'],
        dest: 'public/css/<%= pkg.name %>.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat','uglify','cssmin']);
};