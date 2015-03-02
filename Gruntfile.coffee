module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-tsd')

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    typescript:
      main:
        src: ['ts/**/*.ts']
        dest: 'js'
        options:
          basePath: 'ts'
          noImplicitAny: false
          module:        'commonjs'
          target:        'es5'
          comments:      true
    tsd:
      refresh:
        options:
          command: 'reinstall'
          latest: true
          config: './tsd.json'
          opts: {}

  grunt.registerTask("make", ["typescript:main"])
  grunt.registerTask("default", ["make"])
