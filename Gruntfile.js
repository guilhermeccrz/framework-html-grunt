/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* http://<%= pkg.homepage %>/\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
            '<%= pkg.author.name %>; Licensed MIT */',
    // Task configuration.
    jshint: {
      files: ['js/script.js'],
      options: {
        jshintrc:'.jshintrc.js'/*
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true
        }*/
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },

    uglify: {

      options:{
        banner: '<%= banner %>'
      },
      dist: {
        src: 'js/script.js',
        dest:'build/scripts/<%= pkg.name %>.<%= pkg.version %>.min.js'

      }

    },

    compass: {

    

      dist: {
        src: 'sass/screen.scss',
       // dest:'build/styles/screen.css'
      }

    },

   /* cssmin: {
        compress: {
          options:{
            banner: '<%= banner %>'
          },
          files: {
             dest:'build/styles/<%= pkg.name %>.<%= pkg.version %>.min.css': ['stylesheets/screen.css','stylesheets/ie.css','stylesheets/print.css']
          }
        }

    }*/

   // nodeunit: {
   //   files: ['test/**/*_test.js']
   // },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'nodeunit']
      }
    }
  });

  // These plugins provide necessary tasks.
 // grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task.
  grunt.registerTask('default', ['jshint','uglify','compass']);
    //grunt.registerTask('default', ['jshint', 'nodeunit']);

};
